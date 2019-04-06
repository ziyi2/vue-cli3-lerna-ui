<template>
   <div class="h-navbar-item" :class="[
    disabled ? 'h-navbar-item-disabled': '',
    align ? `h-navbar-item-align-${align}` : ''
   ]" @click="routerTo">
     <a><slot></slot></a>
   </div>
</template>
<script>
  
  export default {
    name: 'HNavItem',

    props: {
      to: String,
      disabled: Boolean,
      align: String
    },

    inject: ['close', 'router'],

    methods: {
      routerTo () {
        this.$emit('click')
        this.close()
        if (!this.to || this.disabled) return
        if (this.router && this.$router) {
          this.$router.push(this.to)
        } else {
          window.location = this.to
        }
      }
    }
  }
</script>