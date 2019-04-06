<template>
  <transition name="h-alert-fade">
    <div class="h-alert" 
      :class="[
        closeable ? 'h-alert-closeable' : '',
        semantic ? `h-alert-semantic-${semantic}` : '',
        radius ? `h-alert-radius-${radius}` : '',
        size ? `h-alert-size-${size}` : ''
      ]"
      v-show="isVisible"
    >
      <span v-show="closeable" @click="close">×</span>
      <slot></slot>
    </div>
  </transition>  
</template>
<script>
  export default {
    name: 'HAlert',

    data () {
      return {
        isVisible: true
      }
    },

    props: {
      closeable: Boolean,
      semantic: String,
      radius: String,
      size: String
    },

    methods: {
      close () {
        this.$emit('close')
        this.isVisible = false
      }
    }
  }
</script>