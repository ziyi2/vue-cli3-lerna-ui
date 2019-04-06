<template>
  <label class="h-radio-btn"  :class="[
    model === nativeValue ? 'h-radio-btn-checked' : '',
    isDisabled ? 'h-radio-btn-disabled': '',
    model === nativeValue && semantic ? `h-radio-btn-semantic-${semantic}` : '',
  ]">
    <span>
      <input 
        type="radio" 
        :value="nativeValue" 
        v-model="model"
        :name="name"
        :tabindex="disabled ? false : 0"
        :disabled="isDisabled" >
      <i v-if="icon" :class="icon"></i>
      <slot></slot>
      <template v-if="!$slots.default">{{nativeValue}}</template>
    </span>
  </label>
</template>
<script>
import Emit from '@ziyi2/utils/emit'

export default {
  name: 'HRadioBtn',
  props: {
    value: {},
    nativeValue: {},
    name: String,
    disabled: Boolean,
    icon: String,
    semantic: String
  },

  mixins: [Emit],

  computed: {

    isRadioGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name !== 'HRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent // eslint-disable-line
          return true
        }
      }
      return false
    },

    model: {
      get () {
        return this.isRadioGroup ? this._radioGroup.value : this.value
      },

      set (val) {
        this.dispatch('HRadioGroup', 'input', val)
        this.$emit('input', val)
      }
    },

    isDisabled () {
      return this.isRadioGroup ? this._radioGroup.disabled || this.disabled : this.disabled
    }
  }
}
</script>


