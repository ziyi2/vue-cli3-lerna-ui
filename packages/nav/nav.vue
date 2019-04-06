<template>
  <transition name="h-navbar-fade" @after-leave="leave">
    <nav ref="nav" class="h-navbar" :class="[
      isFixed ? 'h-navbar-fixed' : '',
      isActive ? 'h-navbar-show' : '',
      semantic ? `h-navbar-semantic-${semantic}`: ''
    ]"  
    role="navigation" v-clickout="close" v-show="isVisible"
    >
      <div class="h-navbar-brand">
        <a @click="routerTo">{{brand}}</a>
        <button class="h-navbar-burger" :class="{'h-navbar-burger-close': isActive}" @click="toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <!-- <transition name="h-navbar-fade"> -->
        <div class="h-navbar-menu">
          <slot></slot>
        </div>
      <!-- </transition> -->
    </nav>
  </transition> 
</template>
<script>
  import clickout from '@ziyi2/utils/clickout'
  import scroll from '@ziyi2/utils/scroll'
  import screen from '@ziyi2/utils/screen'

  export default {
    name: 'HNav',

    data () {
      return {
        isActive: false,
        isFixed: false,
        isVisible: true
      }
    },

    provide () {
      return {
        close: this.close,
        router: this.router
      }
    },

    directives: { clickout },

    props: {
      brand: String,
      to: String,
      fixed: Boolean,
      semantic: String,
      router: Boolean
    },

    methods: {
      routerTo () {
        if (!this.to) return
        if (this.router && this.$router) {
          this.$router.push(this.to)
        } else {
          window.location = this.to
        }
        this.close()
      },

      toggle () {
        this.isActive = !this.isActive
      },

      close () {
        this.isActive = false
      },

      leave () {
        this.isFixed = false
      },

      // isResponsiveClient () {
      //   const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      //   w < 768 ? this.isResponsive = true : this.isResponsive = false
      // },

      scrollHandler () {
        if (!this.fixed) return
        this.close()                            // 滚动时关闭
        clearTimeout(this.timer)                // 防抖动设计
        this.timer = setTimeout(() => {
          let scrollTop = screen.getWindowsScrollOffsets().y
          this.distance = scrollTop - this.scrollTop
  
          if (scrollTop > 68 && this.distance > 0) {
            this.isVisible = false
          }

          if (this.distance > 68) {             // 如果滑动距离大于导航高度
            this.isVisible = false
          } else if (this.distance < -68) {
            this.isVisible = true
            if (scrollTop !== 0) {
              this.isFixed = true
            } else {
              this.isFixed = false
            }
          }

          if (scrollTop === 0) {
            this.isFixed = false
            this.isVisible = true
          }

          this.scrollTop = scrollTop
        }, 100)
      }
    },

    created () {
      scroll.addEvent(this.scrollHandler)
      // addEventListener(window, 'resize', this.isResponsiveClient)
      // this.isResponsiveClient()
      this.$on('close', this.close)       // 子组件发送的关闭nav事件(例如 dowpdown)
    },

    destroyed () {
      scroll.removeEvent(this.scrollHandler)
      // removeEventListener(window, 'resize', this.isResponsiveClient)
      this.$off('close', this.close)
    }
  }
</script>