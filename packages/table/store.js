
import { sort } from './constant'

export default class Store {
  constructor (table) {
    if (!table) {
      throw new Error('Table is required')
    }

    this.table = table
    this.states = {
      columns: [],
      data: [],
      _data: []
    }
  }

  init (data) {
    this.states._data = [...data]
  }

  updateData (data) {
    this.states.data = [...data]
    this.states._data = [...data]
  }

  sortData (column) {
    let states = this.states
    let prop = column.prop
    let sortValue = column.sortValue

    if (sortValue === sort.default) {
      states.data = [...states._data]
    } else {
      states.data.sort((a, b) => {
        if (!Number.isNaN(Number(a[prop])) && !Number.isNaN(Number(b[prop]))) {
          a[prop] = Number(a[prop])
          b[prop] = Number(b[prop])
        }

        if (a[prop] > b[prop]) {
          return sortValue === sort.asc ? 1 : -1
        } else if (a[prop] < b[prop]) {
          return sortValue === sort.asc ? -1 : 1
        } else {
          return 0
        }
      })
    }
  }

  updateColumns (currentColumn, sortValue) {
    let states = this.states
    for (let column of states.columns) {
      currentColumn !== column ? column.sortValue = sort.default : column.sortValue = sortValue
    }
  }

  commit (fn, ...args) {
    if (this[fn]) {
      this[fn].apply(this, args)
    } else {
      throw new Error(`fn ${fn} in Table Store not found`)
    }
  }
}

