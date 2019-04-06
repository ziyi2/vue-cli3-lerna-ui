<template>
  <div ref="dropdown" 
    class="h-dropdown" 
    :class="[disabled ? 'h-dropdown-disabled': '',
    align ? `h-dropdown-align-${align}` : '']" 
    v-clickout="close" 
    @mouseleave="mouseClose">
    <div ref="trigger" class="h-dropdown-trigger"  @mouseenter="mouseOpen" @click="toggle()">
      <slot name="trigger"></slot>
    </div>
    <transition name="h-dropdown-fade">
      <div v-show="isActive" class="h-dropdown-menu" :class="`h-dropdown-menu-${position}`"  v-bind:style="{ minWidth: dropdownMinWidth }">
        <div ref="dropdownContent" class="h-dropdown-content" v-bind:style="{ maxHeight: dropdownMaxHeight }">
          <slot></slot>
          <div v-if="isResponsive">
            <a class="h-dropdown-item-close"></a>
            <a class="h-dropdown-item-list" @click="close">关闭</a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import clickout from '@ziyi2/utils/clickout'
  import background from '@ziyi2/utils/background'
  import dom from '@ziyi2/utils/dom'
  import scroll from '@ziyi2/utils/scroll'

  export default {
    name: 'HDropdown',

    data () {
      return {
        isActive: false,
        isResponsive: false    // 当前是否是响应式窗口
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
      value: {
        type: [String, Number, Boolean, Object, Array, Symbol, Function],
        default: null
      },
      minWidth: {
        type: String,
        default: '200px'
      },
      maxHeight: {
        type: String,
        default: '300px'
      },
      hoverable: Boolean,
      disabled: Boolean,
      position: {
        default: 'bottom-left',
        validator (value) {
          return [
            'top-right',
            'top-left',
            'bottom-left',
            'bottom-right'
          ].includes(value)
        }
      },
      align: String,
      router: Boolean
    },

    computed: {
      dropdownMinWidth () {
        if (this.minWidth && !this.minWidth.includes('px')) {
          return `${this.minWidth}px`
        }
        return this.minWidth
      },

      dropdownMaxHeight () {
        if (this.maxHeight && !this.maxHeight.includes('px')) {
          return `${this.maxHeight}px`
        }
        return this.maxHeight
      }
    },

    watch: {
      value (value) {
        this.$emit('change', value)
      },

      isActive (isActive) {
        if (isActive) {
          this.$emit('open')
          if (this.isResponsive) background.show(true)
          this.$nextTick(() => { scroll.positionToTop(this.$refs.dropdownContent) }) // 滚动条位置初始化
        } else {
          this.$emit('close')
          background.hide(true)
        }
      }
    },

    methods: {
      toggle () {
        if (this.disabled) return
        this.isActive = !this.isActive
      },

      close () {
        this.isActive = false
      },

      open () {
        if (this.disabled) return
        this.isActive = true
      },

      mouseOpen () {
        if (!this.hoverable || this.isResponsive || this.disabled) return
        this.isActive = true
      },

      mouseClose () {
        if (!this.hoverable || this.isResponsive) return
        this.isActive = false
      },

      isResponsiveClient () {
        clearTimeout(this.timer)                // 防抖动设计
        this.timer = setTimeout(() => {
          const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          w < 768 ? this.isResponsive = true : this.isResponsive = false
        }, 100)
      }
    },

    created () {
      dom.addEventListener(window, 'resize', this.isResponsiveClient)
      this.isResponsiveClient()
      background.create(true)    // 响应式遮幕
    },

    destroyed () {
      dom.removeEventListener(window, 'resize', this.isResponsiveClient)
    }
  }
</script>
