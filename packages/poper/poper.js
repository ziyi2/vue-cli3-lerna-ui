
import tooltip from '@ziyi2/utils/tooltip'
import vnode from '@ziyi2/utils/vnode'
import Vue from 'vue'
import { setTimeout, clearTimeout } from 'timers'
import dom from '@ziyi2/utils/dom'

export default {
  name: 'HPoper',
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
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'hover'].indexOf(value) > -1
    },
    poperClass: String,
    content: String,
    disabled: Boolean,
    maxWidth: {
      type: String,
      deafult: '300px'
    }
  },
  beforeCreate () {
    this.poperVM = new Vue({
      data: {vnode: ''},
      render () {
        return this.vnode
      }
    }).$mount()
  },
  computed: {
    poperMaxWidth () {
      if (this.maxWidth && !this.maxWidth.includes('px')) {
        return `${this.maxWidth}px`
      }
      return this.maxWidth
    }
  },

  render () {
    this.poperVM.vnode = (
      <transition name="h-poper-fade" onAfterLeave={this.doDestroy}>
        <div
          class={[
            'h-poper',
            this.radius ? `h-poper-radius-${this.radius}` : '',
            this.poperClass
          ]}
          style={{maxWidth: this.poperMaxWidth}}
          v-show={!this.disabled && this.isActive}
          >
          <div class={['h-tooltip-arrow', `h-poper-placement-${this.updatedPlacement}`]}></div>
          { this.$slots.content || this.content }
        </div>
      </transition>
    )
    let $trigger = this.$slots.trigger
    if (!$trigger || !$trigger.length) return $trigger
    const vNode = vnode.getFirstComponentChild($trigger)
    if (!vNode) return vNode
    const data = vNode.data = vNode.data || {}
    const on = vNode.data.on = vNode.data.on || {}
    switch (this.trigger) {
      case 'click':
        on.click = this.addEvent(on.click, this.togglePoper)
        dom.addEventListener(document, 'click', this.handleDocumentClick)
        break
      case 'hover':
        on.mouseenter = this.addEvent(on.mouseenter, this.showPoper)
        on.mouseleave = this.addEvent(on.mouseleave, this.hidePoper)
        this.$nextTick(() => {
          dom.addEventListener(this.poperVM.vnode.elm, 'mouseenter', this.showPoper)
          dom.addEventListener(this.poperVM.vnode.elm, 'mouseleave', this.hidePoper)
        })
        break
      default:
        on.click = this.addEvent(on.click, this.togglePoper)
        dom.addEventListener(document, 'click', this.handleDocumentClick)
        break
    }

    data.staticClass = this.concatClass(data.staticClass, 'h-poper-reference')
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

    showPoper () {
      if (this.disabled) return
      this.isActive = true
      clearTimeout(this.timer)
      /* 注意：使用了setTimeout有类似于$nextTick的效果 */
      this.timer = setTimeout(() => {
        this.$emit('open')
        this.show(this.poperVM.vnode.elm, this.$el)
      }, this.delay)
    },

    hidePoper () {
      if (this.disabled) return
      this.isActive = false
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$emit('close')
        this.hide()
      }, 200)
    },

    togglePoper () {
      if (this.disabled) return
      if (this.isActive) {
        this.hidePoper()
      } else {
        this.showPoper()
      }
    },

    handleDocumentClick (e) {
      if (this.disabled || !this.isActive) return
      let triggerElm = this.$el
      let poperElm = this.poperVM.vnode.elm
      if (!triggerElm || !poperElm || triggerElm.contains(e.target) || poperElm.contains(e.target)) return
      this.hidePoper()
    },

    doDestroy () {
      dom.removeEventListener(document, 'click', this.handleDocumentClick)
      dom.removeEventListener(this.poperVM.vnode.elm, 'mouseenter', this.showPoper)
      dom.removeEventListener(this.poperVM.vnode.elm, 'mouseleave', this.hidePoper)
    }
  }

}
