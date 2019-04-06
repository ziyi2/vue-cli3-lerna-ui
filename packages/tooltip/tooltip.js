
import Vue from 'vue'
import vnode from '@ziyi2/utils/vnode'
import tooltip from '@ziyi2/utils/tooltip'
import { setTimeout, clearTimeout } from 'timers'

export default {
  name: 'HTooltip',

  mixins: [tooltip],

  data () {
    return {
      isActive: false
    }
  },

  props: {
    semantic: String,
    radius: String,
    size: String,
    delay: {
      type: Number,
      default: 0
    },
    tooltipClass: String,
    content: String,
    disabled: Boolean,
    maxWidth: {
      type: String,
      deafult: '300px'
    }
  },

  beforeCreate () {
    this.tooltipVM = new Vue({
      data: {vnode: ''},
      render () {
        return this.vnode
      }
    }).$mount()
  },

  computed: {
    tooltipMaxWidth () {
      if (this.maxWidth && !this.maxWidth.includes('px')) {
        return `${this.maxWidth}px`
      }
      return this.maxWidth
    }
  },

  render () {
    this.tooltipVM.vnode = (
      <transition name="h-tooltip-fade">
        <div
          class={[
            'h-tooltip',
            this.semantic ? `h-tooltip-semantic-${this.semantic}` : '',
            this.radius ? `h-tooltip-radius-${this.radius}` : '',
            this.size ? `h-tooltip-size-${this.size}` : '',
            this.tooltipClass
          ]}
          style={{maxWidth: this.tooltipMaxWidth}}
          v-show={!this.disabled && this.isActive}>
          <div class={['h-tooltip-arrow', `h-tooltip-placement-${this.updatedPlacement}`]}></div>
          { this.$slots.content || this.content }
        </div>
      </transition>
    )

    /* tooltip的作用元素(取第一个节点信息)渲染和事件监听 */
    let $default = this.$slots.default
    if (!$default || !$default.length) return $default
    const vNode = vnode.getFirstComponentChild($default)
    /* 文本信息不做渲染处理 */
    if (!vNode) return vNode
    const data = vNode.data = vNode.data || {}
    const on = vNode.data.on = vNode.data.on || {}
    on.mouseenter = this.addEvent(on.mouseenter, this.showTooltip)
    on.mouseleave = this.addEvent(on.mouseleave, this.hideTooltip)
    data.staticClass = this.concatClass(data.staticClass, 'h-tooltip-reference')
    return vNode
  },

  methods: {
    // existFn -> 当前已经挂载在组件上的事件
    addEvent (existFn, fn) {
      return existFn ? Array.isArray(existFn) ? existFn.concat(fn) : [existFn, fn] : fn
    },

    concatClass (origin, cls) {
      if (!origin) return cls
      if (origin.includes(cls)) return origin
      return `${origin} ${cls}`
    },

    showTooltip () {
      if (this.disabled) return
      this.isActive = true
      this.$emit('open')
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.show(this.tooltipVM.vnode.elm, this.$el)
      }, this.delay)
    },

    hideTooltip () {
      if (this.disabled) return
      this.isActive = false
      clearTimeout(this.timer)
      this.$emit('close')
      this.hide()
    }
  }
}
