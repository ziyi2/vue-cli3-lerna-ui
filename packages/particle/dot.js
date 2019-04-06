export default {
  name: 'HDot',

  /* 不渲染模板 */
  render () {},

  props: {
    canvas: Object,
    isDotDrawed: Boolean,
    isDotInit: Boolean
  },

  watch: {
    // 'isDotInit': 'init',
    'isDotDrawed': 'draw'
  },

  created () {
    this.init()
  },

  data () {
    return {
      stackPos: undefined,
      active: true,
      layer: Math.ceil(Math.random() * 3),
      parallaxOffsetX: 0,
      parallaxOffsetY: 0,
      position: {
        x: Math.ceil(Math.random() * this.canvas.width),
        y: Math.ceil(Math.random() * this.canvas.height)
      },
      speed: {},
      dotRadius: 0
    }
  },

  computed: {
    options () {
      return {
        minSpeedX: this.$parent.minSpeedX,
        maxSpeedX: this.$parent.maxSpeedX,
        minSpeedY: this.$parent.minSpeedY,
        maxSpeedY: this.$parent.maxSpeedY,
        directionX: this.$parent.directionX,
        directionY: this.$parent.directionY,
        dotColor: this.$parent.dotColor,
        // lineColor: this.$parent.dotColor,
        particleRadius: this.$parent.particleRadius,
        // lineWidth: {
        //   type: Number,
        //   defulat: 1
        // },
    // curvedLines: {
    //   type: Boolean,
    //   defulat: false
    // }
        // proximity: { // How close two dots need to be before they join
        //   type: Number,
        //   defulat: 200
        // },
        parallax: this.$parent.parallax,
        parallaxMultiplier: this.$parent.parallaxMultiplier
        // paused: {
        //   type: Boolean,
        //   default: false
        // }
      }
    }
  },

  methods: {
    init () {
      /* 设置动画参数 */
      let options = this.options
      let canvas = this.canvas

      this.position = {
        x: Math.ceil(Math.random() * canvas.width),
        y: Math.ceil(Math.random() * canvas.height)
      }

      switch (options.directionX) {
        case 'left':
          this.speed.x = +(-options.maxSpeedX + (Math.random() * options.maxSpeedX) - options.minSpeedX).toFixed(2)
          break
        case 'right':
          this.speed.x = +((Math.random() * options.maxSpeedX) + options.minSpeedX).toFixed(2)
          break
        default:
          this.speed.x = +((-options.maxSpeedX / 2) + (Math.random() * options.maxSpeedX)).toFixed(2)
          this.speed.x += this.speed.x > 0 ? options.minSpeedX : -options.minSpeedX
          break
      }
      switch (options.directionY) {
        case 'up':
          this.speed.y = +(-options.maxSpeedY + (Math.random() * options.maxSpeedY) - options.minSpeedY).toFixed(2)
          break
        case 'down':
          this.speed.y = +((Math.random() * options.maxSpeedY) + options.minSpeedY).toFixed(2)
          break
        default:
          this.speed.y = +((-options.maxSpeedY / 2) + (Math.random() * options.maxSpeedY)).toFixed(2)
          this.speed.x += this.speed.y > 0 ? options.minSpeedY : -options.minSpeedY
          break
      }

      this.dotRadius = (Math.random() + 0.5) * this.options.particleRadius
    },

    updatePosition () {
      // console.log('Dot组件位置更新...')
      let options = this.options
      let canvas = this.canvas

      if (options.parallax) {
        let winW = window.innerWidth
        let winH = window.innerHeight
        let pointerX = 0 // mouseX
        let pointerY = 0 // mouseY
        let parallaxTargX = (pointerX - (winW / 2)) / (options.parallaxMultiplier * this.layer)
        this.parallaxOffsetX += (parallaxTargX - this.parallaxOffsetX) / 10
        let parallaxTargY = (pointerY - (winH / 2)) / (options.parallaxMultiplier * this.layer)
        this.parallaxOffsetY += (parallaxTargY - this.parallaxOffsetY) / 10
      }

      switch (options.directionX) {
        case 'left':
          if (this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.position.x = canvas.width - this.parallaxOffsetX
          }
          break
        case 'right':
          if (this.position.x + this.speed.x + this.parallaxOffsetX > canvas.width) {
            this.position.x = 0 - this.parallaxOffsetX
          }
          break
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.x + this.speed.x + this.parallaxOffsetX > canvas.width || this.position.x + this.speed.x + this.parallaxOffsetX < 0) {
            this.speed.x = -this.speed.x
          }
          break
      }

      switch (options.directionY) {
        case 'up':
          if (this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.position.y = canvas.height - this.parallaxOffsetY
          }
          break
        case 'down':
          if (this.position.y + this.speed.y + this.parallaxOffsetY > canvas.height) {
            this.position.y = 0 - this.parallaxOffsetY
          }
          break
        default:
          // If particle has reached edge of canvas, reverse its direction
          if (this.position.y + this.speed.y + this.parallaxOffsetY > canvas.height || this.position.y + this.speed.y + this.parallaxOffsetY < 0) {
            this.speed.y = -this.speed.y
          }
          break
      }

      this.position.x += this.speed.x
      this.position.y += this.speed.y
    },

    drawCanvas () {
      let ctx = this.$parent.$refs.canvas.getContext('2d')
      // 画点
      ctx.beginPath()
      ctx.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, this.dotRadius / 2, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fillStyle = this.options.dotColor
      ctx.fill()
    },

    draw () {
      this.updatePosition()
      this.drawCanvas()
    }
  }
}
