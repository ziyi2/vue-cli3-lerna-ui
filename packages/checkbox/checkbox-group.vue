<template>
  <div class="h-checkbox-group" 
      :class="[
        disabled ? 'h-checkbox-group-disabled' : '',
        radius ? `h-checkbox-group-radius-${radius}` : '' ,
        size ? `h-checkbox-group-size-${size}` : '' ,
        shadow ? 'h-checkbox-group-shadow' : ''
      ]"
  >
    <slot></slot>
  </div>
</template>
<script>
  // import Emit from '../mixins/emit'

  export default {
    name: 'HCheckboxGroup',

    props: {
      value: Array,
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