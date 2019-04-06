/* 布局 */
import Row from '@ziyi2/row'
import Col from '@ziyi2/col'

/* 基础组件 */
import Quote from '@ziyi2/quote'
import Code from '@ziyi2/code'
import  { Btn, BtnGroup } from '@ziyi2/button/index'
import { Table, TableColumn } from '@ziyi2/table'
import Pagination from '@ziyi2/pagination'
import { Radio, RadioBtn, RadioGroup } from '@ziyi2/radio'
import { Checkbox, CheckboxBtn, CheckboxGroup } from '@ziyi2/checkbox'
import Select from '@ziyi2/select'
import Input from '@ziyi2/input'
import Alert from '@ziyi2/alert'
import Tooltip from '@ziyi2/tooltip'
import { Tag, TagGroup } from '@ziyi2/tag'
import Snackbar from '@ziyi2/snackbar'
import Toast from '@ziyi2/toast'

/* 弹框 */
import Poper from '@ziyi2/poper'
import Dialog from '@ziyi2/dialog'

/* 复合组件 */
import { Dropdown, DropdownItem } from '@ziyi2/dropdown'
import { Nav, NavItem } from '@ziyi2/nav'

/* 动画 */
import Particle from '@ziyi2/particle'

const components = [
  Row,
  Col,

  Quote,
  Code,
  Btn,
  BtnGroup,
  TableColumn,
  Table,
  Pagination,
  Radio,
  RadioBtn,
  RadioGroup,
  Checkbox,
  CheckboxBtn,
  CheckboxGroup,
  Input,
  Select,
  Alert,
  Tooltip,
  Tag,
  TagGroup,

  Poper,
  Dialog,

  Dropdown,
  DropdownItem,
  Nav,
  NavItem,

  Particle
]

export default {
  install (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })

    Vue.prototype.$snackbar = Snackbar
    Vue.prototype.$toast = Toast
  }
}
