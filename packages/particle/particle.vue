<template>
  <div class="h-particle" style="background: #f7fafc;">
    <canvas ref="canvas" :width="width" :height="height">
      <h-dot  v-for="(dot,index) in dots" ref="dots" :key="index"  :canvas="{'width': width, 'height': height}" :isDotDrawed='isDotDrawed'/>
    </canvas>
  </div>
</template>

<script>
/*************************************/
/* 使用方法
/****************************************/
import HDot from './dot'

export default {
  name: 'HParticle',
  componentName: 'HParticle',
  components: {
    HDot
  },

  props: {
    minSpeedX: {
      type: Number,
      default: 0.1
    },
    maxSpeedX: {
      type: Number,
      default: 0.7
    },
    minSpeedY: {
      type: Number,
      default: 0.1
    },
    maxSpeedY: {
      type: Number,
      default: 0.7
    },
    directionX: {
      type: String,
      default: 'center' // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    },
    directionY: {
      type: String,
      default: 'center' // 'center', 'left' or 'right'. 'center' = dots bounce off edges
    },
    density: {          // How many particles will be generated: one particle every n pixels
      type: Number,
      default: 20000
    },
    dotColor: {
      type: String,
      default: 'rgba(131, 145, 165, 0.3)'
    },
    lineColor: {
      type: String,
      default: 'rgba(131, 145, 165, 0.2)'
    },
    particleRadius: {
      type: Number,
      default: 20
    },
    lineWidth: {
      type: Number,
      default: 1
    },
    proximity: { // How close two dots need to be before they join
      type: Number,
      default: 200
    },
    parallax: {
      type: Boolean,
      default: true
    },
    parallaxMultiplier: {
      type: Number,
      default: 5
    },
    paused: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      dots: [],
      /* 通知Dot组件绘画 */
      isDotDrawed: false,
      /* Canvas的长宽(会导致重新渲染) */
      width: 150,
      height: 300,
      /* 上次动画的时间 */
      lastTime: 0,
      /* 定时器ID */
      timeID: undefined
      /* Dot子组件的坐标 */
      // position: null,
      /* Canvas绘画参数 */
      // options: {
      //   minSpeedX: 0.1,
      //   maxSpeedX: 0.7,
      //   minSpeedY: 0.1,
      //   maxSpeedY: 0.7,
      //   directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      //   directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      //   density: 40000, // How many particles will be generated: one particle every n pixels
      //   dotColor: 'rgba(131, 145, 165, 0.3)',
      //   lineColor: 'rgba(131, 145, 165, 0.2)',
      //   particleRadius: 20, // Dot size
      //   lineWidth: 1,
      //   curvedLines: false,
      //   proximity: 200, // How close two dots need to be before they join
      //   parallax: true,
      //   parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
      //   onInit: function () {},
      //   onDestroy: function () {},
      //   /* 是否停止动画 */
      //   paused: false
      // }
    }
  },
  // props: {
  //   // width: Number,
  //   // height: Number,
  //   // minSpeedX: {
  //   //   type: Number,
  //   //   default: 0.1
  //   // }
  // },

  // watch: {
  //   'dots': 'draw'
  // },

  computed: {
    // width: function () {
    //   return this.$parent.$el ? this.$parent.$el.offsetWidth : 0
    // },

    // height: function () {
    //   debugger
    //   return this.$parent.$el ? this.$parent.$el.offsetHeight : 0
    // }
  },

  // created () {
  //   console.log(this.width)
  // },

  mounted () {
    this.resize()
    this.addEventListener()
    this.animate()
    // this.isDotDrawed = true
  },

  methods: {

    /* 监听事件 */
    addEventListener () {
      window.addEventListener('resize', this.resize, false)
    },

    /* 父元素窗口调整Canvas大小变化 */
    resize () {
      this.width = this.$el.offsetWidth
      this.height = this.$el.offsetHeight
      this.init()                                                                       // 如果屏幕大小变化，则重新渲染画布
    },
    /* 启动动画 */
    animate () {
      this.init()

      this.draw()
    },

    /* 动画初始化 */
    init () {
      this.ctx = this.$refs.canvas.getContext('2d')
      let dotNum = Math.round((this.width * this.height) / this.density)        // 计算屏幕的Dot数
      this.dots = Array.apply(null, {length: dotNum}).map(() => {
        return {
          position: {
            x: 0,
            y: 0
          }
        }
      })
      this.ctx.clearRect(0, 0, this.width, this.height)                                  // 清除画布
    },

    /* 绘制动画 */
    draw () {
      let vendors = ['ms', 'moz', 'webkit', 'o']
      for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
                                 window[vendors[x] + 'CancelRequestAnimationFrame']
      }

      let now = new Date().getTime()
      let delay = Math.max(0, 16 - (now - this.lastTime))

      this.ctx.clearRect(0, 0, this.width, this.height)                                  // 清除画布
      this.isDotDrawed = !this.isDotDrawed                                               // 绘制Dot点
      this.drawLine()                                                                    // 绘制线

      if (!this.paused && !window.requestAnimationFrame) {
        this.timeID = setTimeout(this.draw, delay)
        this.lastTime = now + delay
      } else if (window.requestAnimationFrame) {
        window.requestAnimationFrame(this.draw)
      } else if (this.paused && !window.requestAnimationFrame) {
        clearTimeout(this.timeID)
      }
    },

    /* 绘制线条 */
    drawLine () {
      let dots = this.$refs.dots

      this.ctx.beginPath()

      if (dots) {
        for (let i = 0, len = dots.length; i < len; i++) {
          let positionI = dots[i].position
          for (let j = i + 1; j < len; j++) {
            let positionJ = dots[j].position
            let distX = positionI.x - positionJ.x
            let distY = positionI.y - positionJ.y
            let dist = Math.sqrt((distX * distX) + (distY * distY)).toFixed(2)
            if (dist < this.proximity) {
              this.ctx.moveTo(positionI.x + dots[i].parallaxOffsetX, positionI.y + dots[i].parallaxOffsetY)
              this.ctx.lineTo(positionJ.x + dots[j].parallaxOffsetX, positionJ.y + dots[j].parallaxOffsetY)
            }
          }
        }
      }
      this.ctx.strokeStyle = this.lineColor
      this.ctx.lineWidth = this.lineWidth
      this.ctx.stroke()
      this.ctx.closePath()
    }
  }
}
</script>

