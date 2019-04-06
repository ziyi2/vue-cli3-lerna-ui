<template>
  <colgroup>
    <col v-for="(column, index) in store.states.columns" :key="index" :width="column.width" />
  </colgroup>
</template>
<script>
  export default {
    name: 'HTableColgroup',

    data () {
      return {
        store: this.$parent.store
      }
    }
  }
</script>