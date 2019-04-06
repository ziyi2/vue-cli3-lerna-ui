import Table from './table'
import TableColumn from './column'

Table.install = function (Vue) {
  Vue.component(Table.name, Table)
}

TableColumn.install = function (Vue) {
  Vue.component(TableColumn.name, TableColumn)
}

export {
  Table,
  TableColumn
}

