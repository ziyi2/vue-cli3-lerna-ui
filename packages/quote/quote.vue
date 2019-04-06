<template>
  <blockquote 
    class="h-blockquote"
    :class="[
      semantic ? 'h-blockquote-semantic-' + semantic : 'h-blockquote-semantic-default',
      radius ? 'h-blockquote-radius-' + radius : '',
      shadow ? 'h-blockquote-shadow' : ''
    ]" 
  >
    <slot></slot>
    <slot name="footer"></slot>
  </blockquote>
</template>
<script>
  export default {
    name: 'HQuote',
    props: {
      semantic: {
        type: String,
        default: 'default'
      },
      radius: String,
      shadow: Boolean
    }
  }
</script>