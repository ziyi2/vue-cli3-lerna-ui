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
      {{ t('ui.alert.content') }}
    </div>
  </transition>  
</template>
<script>

  import locale from 'locale/mixins'

  export default {
    name: 'HAlert',
    
    mixins: [ locale ],

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
