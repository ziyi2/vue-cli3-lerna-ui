<template>
  <label class="h-checkbox-btn" :class="[
    model.includes(nativeValue) ? 'h-checkbox-btn-checked' : '',
    isDisabled ? 'h-checkbox-btn-disabled': '',
    model.includes(nativeValue) && semantic ? `h-checkbox-btn-semantic-${semantic}` : '',
  ]">
    <span>
      <input 
        type="checkbox" 
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
  name: 'HCheckboxBtn',
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


