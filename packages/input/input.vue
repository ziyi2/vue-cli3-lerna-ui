<template>
  <div class="h-input"
    :class="[
      semantic ? `h-input-semantic-${semantic}` : '',
      radius ? `h-input-radius-${radius}` : '' ,
      size ? `h-input-size-${size}` : '',
      widthFull ? 'h-input-width-full' : '',
      leftIcon ? 'h-input-left-icon' : '',
      icon ? 'h-input-right-icon' : ''
    ]" 
  >
    <!-- icon图标 -->
    <slot name="icon">
      <i class="h-icon h-icon-left" v-if="leftIcon"
        :class="leftIcon"
      ></i>
      <i class="h-icon h-icon-right" v-if="icon"
        :class="icon"
        @click="handleIconClick"
      ></i>
    </slot>

    <input v-if="type !== 'textarea'"
      class="h-input-text"
      :value="currentValue"
      :type="currentType"
      v-bind:style="{ width: inputWidth }"
      v-bind="[$attrs,$props]"
      @input="onInput"
    >
    <textarea v-else
      class="h-input-textarea"
      :value="currentValue"
      v-bind="[$attrs,$props]"
      v-bind:style="{ width: inputWidth }"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    >
    </textarea>
  </div>
</template>
<script>
  export default {
    name: 'HInput',
    inheritAttrs: false,

    data () {
      return {
        currentValue: this.value,
        currentType: this.type
      }
    },
    props: {
      value: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      width: {
        type: String,
        default: '200px'
      },
      widthFull: {
        type: Boolean
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      maxlength: Number,
      minlength: Number,

      semantic: String,
      size: String,
      radius: String,

      leftIcon: String,
      icon: String,
      iconClick: Function
    },
  
    computed: {
      inputWidth () {
        if (!this.widthFull) {
          if (this.width && !this.width.includes('px')) {
            return `${this.width}px`
          }
          return this.width
        } else {
          return '100%'
        }
      }
    },

    methods: {
      onInput (e) {
        let value = e.target.value
        this.currentValue = value
        this.$emit('input', value)
        this.$emit('change', value)
      },
      onFocus (e) {
        this.$emit('focus', e)
      },
      onBlur (e) {
        this.$emit('blur', e)
      },
      handleIconClick (e) {
        if (this.iconClick) {
          this.iconClick(e)
        }
      }
    }

  }
</script>



