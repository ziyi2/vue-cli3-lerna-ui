<template>
  <div class="h-btn-group" 
      :class="[
          semantic ? `h-btn-group-semantic-${semantic}` : '',
          shadow ? 'h-btn-group-shadow' : '',
          radius ? `h-btn-group-radius-${radius}` : '' ,
          size ? `h-btn-group-size-${size}` : ''
      ]"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'HBtnGroup',

    props: {
      semantic: String,
      shadow: Boolean,
      radius: String,
      size: String
    }
  }
</script>