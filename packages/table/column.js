
import { sort } from './constant'

export default {
  name: 'HTableColumn',

  props: {
    prop: String,
    label: String,
    width: [String, Number],
    ellipsis: Boolean,
    sortable: Boolean,
    customClass: String
  },

  methods: {
    getColumns (options) {
      const column = {}
      for (let name in options) {
        column[name] = options[name]
      }
      return column
    }
  },

  render() {
  },

  created () {
    let store = this.$parent.store
    const column = this.getColumns({
      prop: this.prop,
      label: this.label,
      width: this.width,
      sortable: this.sortable,
      ellipsis: this.ellipsis,
      sortValue: sort.default,
      customClass: this.customClass
    })
    store.states.columns.push(column)
  }
}



