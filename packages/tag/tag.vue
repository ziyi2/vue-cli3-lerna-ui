<template>
  <transition name="h-tag-fade">
    <span 
      class="h-tag" 
      :class="[
        semantic ? `h-tag-semantic-${semantic}` : '',
        shadow ? 'h-tag-shadow' : '',
        radius ? `h-tag-radius-${radius}` : '' ,
        size ? `h-tag-size-${size}` : ''
      ]"
      v-show="isVisible">
      <slot />
      <span v-if="!disCloseable && isCloseVisible" @click="close">×</span>
    </span>
  </transition>  
</template>
<script>
  import Emit from '@ziyi2/utils/emit'

  export default {
    name: 'HTag',

    data () {
      return {
        isCloseVisible: false,
        isVisible: true,
        disCloseable: false,     // 如果存在h-tag-group，则关闭功能失效
        closegroup: false        // 是否关闭标签组
      }
    },

    mixins: [Emit],

    props: {
      closeable: Boolean,
      semantic: String,
      shadow: Boolean,
      radius: String,
      size: String
    },

    watch: {
      closeable: {
        immediate: true,
        handler (closeable) {
          this.isCloseVisible = closeable
        }
      }
    },

    methods: {
      close () {
        if (this.closegroup) {
          this.dispatch('HTagGroup', 'close')
          return
        }
        this.isVisible = false
      }
    },

    created () {
      if (
        !this.$parent ||
        !this.$parent.$vnode ||
        !this.$parent.$vnode.componentOptions ||
        !this.$parent.$vnode.componentOptions.tag ||
        this.$parent.$vnode.componentOptions.tag !== 'h-tag-group') return
      this.disCloseable = true
    }
  }
</script>