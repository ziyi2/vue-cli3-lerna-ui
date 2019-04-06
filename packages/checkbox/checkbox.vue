<template>
  <label class="h-checkbox"
    :class="[
    isDisabled ? 'h-checkbox-disabled' : '',
    semantic ? `h-checkbox-semantic-${semantic}` : '',
  ]">
    <span class="h-checkbox-check"
      :class="{
        'h-checkbox-checked' : model.includes(nativeValue)
      }"
    >
      <input 
        type="checkbox" 
        :value="nativeValue" 
        v-model="model"
        :name="name"
        :tabindex="disabled ? false : 0"
        :disabled="isDisabled" >
    </span>    
    <span class="h-checkbox-text">
      <slot></slot>
      <template v-if="!$slots.default">{{nativeValue}}</template>
    </span>
  </label>
</template>
<script>
  import Emit from '@ziyi2/utils/emit'

  export default {
    name: 'HCheckbox',
    props: {
      value: Array,
      nativeValue: {},
      name: String,
      disabled: Boolean,
      semantic: String
    },

    mixins: [Emit],
  
    computed: {
      isCheckboxGroup () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.name !== 'HCheckboxGroup') {
            parent = parent.$parent
          } else {
            this._checxboxGroup = parent // eslint-disable-line
            return true
          }
        }
        return false
      },

      model: {
        get () {
          return this.isCheckboxGroup ? this._checxboxGroup.value : this.value
        },
        set (val) {
          this.dispatch('HCheckboxGroup', 'input', val)
          this.$emit('input', val)
        }
      },

      isDisabled () {
        return this.isCheckboxGroup ? this._checxboxGroup.disabled || this.disabled : this.disabled
      }
    }

  }
</script>


