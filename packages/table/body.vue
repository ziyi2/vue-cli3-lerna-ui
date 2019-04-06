<template>
  <tbody v-if="store.states.data.length">
    <tr 
      v-for="(row, rowIndex) in store.states.data"
      :key="rowIndex"
      :class="getRowStyle(row, rowIndex)">
      <td 
        v-for="(column, columnsIndex) in store.states.columns.filter(column => column.prop)" 
        :key="columnsIndex" 
        :class="[column.ellipsis ? 'h-td-ellipsis' : '', column.customClass]" :title="column.ellipsis ? row[column.prop] : ''">
        {{row[column.prop]}}
      </td>
    </tr>
  </tbody>
</template>
<script>
  export default {
    name: 'HTableBody',

    data () {
      return {
        store: this.$parent.store
      }
    },

    props: {
      rowStyle: [String, Function]
    },

    methods: {
      getRowStyle (row, index) {
        const style = this.rowStyle
        if (typeof style === 'function') {
          let rowStyle = this.rowStyle.call(null, row, index)
          return rowStyle ? `h-tr-${rowStyle}` : ''
        }
        return style ? `h-tr-${style}` : ''
      }
    }
  }
</script>