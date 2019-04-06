<template>
  <button 
    class="h-btn" 
    :class="[
      semantic ? `h-btn-semantic-${semantic}` : '',
      shadow ? 'h-btn-shadow' : '',
      radius ? `h-btn-radius-${radius}` : '' ,
      size ? `h-btn-size-${size}` : ''
    ]" 

    :type="type"
    :autofocus="autofocus"
    :disabled="disabled"
    @click="clickHandle"
    >
    <i :class="leftIcon" v-if="leftIcon"></i>
    <span>{{ t('ui.btn.content') }}</span>
    <span v-if="$slots.default"><slot></slot></span>
    <i :class="icon" v-if="icon"></i>
  </button>
</template>

<script>

  import locale from 'locale/mixins'

  export default {
    name: 'HBtn',
    props: {
      semantic: String,
      shadow: Boolean,
      radius: String,
      size: String,
      leftIcon: String,
      icon: String,
      type: String,
      autofocus: Boolean,
      disabled: Boolean,
      router: Boolean,
      to: String
    },

    mixins: [ locale ],

    methods: {
      clickHandle (e) {
        this.$emit('click', e)
        if (!this.to) return
        if (this.router && this.$router) {
          this.$router.push(this.to)
        } else {
          window.location = this.to
        }
      }
    }
  }
</script>
