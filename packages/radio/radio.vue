<template>
  <label class="h-radio" :class="[
    isDisabled ? 'h-radio-disabled' : '',
    semantic ? `h-radio-semantic-${semantic}` : '',
  ]">
    <span class="h-radio-check"
      :class="{
        'h-radio-checked' : model === nativeValue,
      }"
    >
      <input 
        type="radio" 
        :value="nativeValue" 
        v-model="model"
        :name="name"
        :tabindex="disabled ? false : 0"
        :disabled="isDisabled" >
    </span>    
    <span class="h-radio-text">
      <slot></slot>
      <template v-if="!$slots.default">{{nativeValue}}</template>
    </span>
  </label>
</template>
<script>
 import Emit from '@ziyi2/utils/emit'

 export default {
   name: 'HRadio',
   props: {
     value: {},
     nativeValue: {},
     name: String,
     disabled: Boolean,
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


