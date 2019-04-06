<template>
  <transition name="h-dialog-fade">
    <div class="h-dialog-background"  v-show="visible" @click.self="close">
      <div class="h-dialog">
        <h1>this is dialog</h1>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'HDialog',

    data () {
      return {
      }
    },

    props: {
      visible: Boolean
    },

    methods: {
      close () {
  
      }
    }
  }
</script>