<template>
  <transition name="h-tag-fade">
    <span class="h-tag-group" :class="[
      radius ? `h-tag-group-radius-${radius}` : '' ,
      size ? `h-tag-group-size-${size}` : ''
    ]"
    v-show="isVisible">
      <slot></slot>
    </span>
  </transition>
</template>
<script>
  export default {
    name: 'HTagGroup',
    data () {
      return {
        isVisible: true
      }
    },
    props: {
      radius: String,
      size: String,
      closeable: Boolean
    },
    watch: {
      closeable: {
        immediate: true,
        handler (closeable) {
          this.$nextTick(() => {
            if (!this.$children.length) return
            let $tag = this.$children.pop()
            if (closeable) {
              $tag.disCloseable = false
              $tag.isCloseVisible = true
              $tag.closegroup = true
            }
          })
        }
      }
    },

    methods: {
      close () {
        if (!this.closeable) return
        this.isVisible = false
      }
    },

    created () {
      this.$on('close', this.close)
    }
  }

</script>