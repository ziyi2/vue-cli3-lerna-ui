<template>
  <div class="h-table-responsive">
    <table 
      class="h-table" 
      :class="[
        shadow ? 'h-table-shadow' : '',
        align ? `h-table-align-${align}` : '',
        hover ? 'h-table-hover' : '',
        stripe ? 'h-table-stripe' : '',
        border ? 'h-table-border' : '',
        grid ? 'h-table-grid' : ''
      ]"
      cellpadding="0" 
      border="0" 
      ref="table">
      <caption v-if="caption" :class="[captionSide === 'bottom' ? `h-caption-side-${captionSide}` : 'h-caption-side-top', captionAlign ? `h-caption-align-${captionAlign}` : '']">{{caption}}</caption>
      <slot></slot>
      <h-table-colgroup />
      <h-table-header :head-style="headStyle" />
      <h-table-body :row-style="rowStyle" /> 
    </table>
  </div>
</template>
<script>
  import { fn } from './constant'
  import Store from './store'
  import HTableColgroup from './colgroup'
  import HTableHeader from './header'
  import HTableBody from './body'

  export default {
    name: 'HTable',

    components: {
      HTableColgroup,
      HTableHeader,
      HTableBody
    },

    data () {
      const store = new Store(this)

      return {
        store
      }
    },

    props: {
      height: [String, Number],
      data: {
        type: Array,
        required: true
      },
      shadow: Boolean,
      align: String,
      hover: Boolean,
      stripe: Boolean,
      border: Boolean,
      grid: Boolean,
      caption: String,
      captionSide: String,
      captionAlign: String,
      rowStyle: [String, Function],
      headStyle: String
    },

    watch: {
      data: {
        immediate: true,
        handler (data) {
          this.store.commit(fn.updateData, data)
        }
      }
    }
  }
</script>