<template>
  <thead v-if="store.states.columns.length">
    <tr :class="[headStyle ? `h-tr-${headStyle}`: '']">
      <th :class="{'h-th-sortable': column.sortable}" v-for="(column,index) in store.states.columns" :key="index" @click="column.sortable && sortableColumns(column, index)">{{column.label}}<span v-if="column.sortable">
          <i class="fa fa-sort-down" v-show="column.sortValue ==='desc'"></i><i class="fa fa-sort-up" v-show="column.sortValue ==='asc'"></i><i class="fa fa-sort" v-show="column.sortValue === 'default'"></i>
        </span>
      </th>
    </tr>
  </thead>
</template>
<script>
  import { sort, fn } from './constant'

  export default {
    name: 'HTableHeader',

    data () {
      return {
        store: this.$parent.store,
        sortable: sort.default
      }
    },

    props: {
      headStyle: String
    },

    methods: {
      sortableColumns (column) {
        let sortValue = sort.default

        switch (column.sortValue) {
          case sort.default:
            sortValue = sort.desc
            break
  
          case sort.desc:
            sortValue = sort.asc
            break

          case sort.asc:
            sortValue = sort.default
            break
  
          default:
            sortValue = sort.default
            break
        }

        this.store.commit(fn.updateColumns, column, sortValue)
        this.store.commit(fn.sortData, column)
      }
    }
  }
</script>