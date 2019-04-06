<template>
  <div class="h-radio-group" 
      :class="[
        disabled ? 'h-radio-group-disabled' : '',
        radius ? `h-radio-group-radius-${radius}` : '' ,
        size ? `h-radio-group-size-${size}` : '' ,
        shadow ? 'h-radio-group-shadow' : ''
      ]"
  >
    <slot></slot>
  </div>
</template>
<script>
  // import Emit from '../mixins/emit'

  export default {
    name: 'HRadioGroup',

    props: {
      value: {},
      disabled: Boolean,
      radius: String,
      size: String,
      shadow: Boolean
    },

    // mixins: [Emit]
    watch: {
      value (value) {
        this.$emit('change', value)
      }
    }
  
  }
</script>