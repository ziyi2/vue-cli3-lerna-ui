import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/home'], resolve)

/* 选项 */
const Font = resolve => require(['@/views/option/font'], resolve)
const Color = resolve => require(['@/views/option/color'], resolve)

/* 布局 */
const Grid = resolve => require(['@/views/layout/grid'], resolve)

/* 基础组件 */
const Quote = resolve => require(['@/views/base/quote'], resolve)
const Code = resolve => require(['@/views/base/code'], resolve)
const Btn = resolve => require(['@/views/base/btn'], resolve)
const Table = resolve => require(['@/views/base/table'], resolve)
const Pagination = resolve => require(['@/views/base/pagination'], resolve)
const Radio = resolve => require(['@/views/base/radio'], resolve)
const Checkbox = resolve => require(['@/views/base/checkbox'], resolve)
const Input = resolve => require(['@/views/base/input'], resolve)
const Select = resolve => require(['@/views/base/select'], resolve)
const Alert = resolve => require(['@/views/base/alert'], resolve)
const Tooltip = resolve => require(['@/views/base/tooltip'], resolve)
const Tag = resolve => require(['@/views/base/tag'], resolve)
const Snackbar = resolve => require(['@/views/base/snackbar'], resolve)
const Toast = resolve => require(['@/views/base/toast'], resolve)

/* 弹框 */
const Poper = resolve => require(['@/views/bomb/poper'], resolve)
const Dialog = resolve => require(['@/views/bomb/dialog'], resolve)
const Box = resolve => require(['@/views/bomb/box'], resolve)

/* 复合组件 */
const Dropdown = resolve => require(['@/views/compound/dropdown'], resolve)
const Nav = resolve => require(['@/views/compound/nav'], resolve)

/* 动画 */
const Particle = resolve => require(['@/views/animation/particle'], resolve)

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/option/color',
    children: [{
      path: '/option/font',
      name: 'Font',
      component: Font
    }, {
      path: '/option/color',
      name: 'Color',
      component: Color
    }, {
      path: '/layout/grid',
      name: 'Grid',
      component: Grid
    }, {
      path: '/base/quote',
      name: 'Quote',
      component: Quote
    }, {
      path: '/base/code',
      name: 'Code',
      component: Code
    }, {
      path: '/base/btn',
      name: 'Btn',
      component: Btn
    }, {
      path: '/base/table',
      name: 'Table',
      component: Table
    }, {
      path: '/base/pagination',
      name: 'Pagination',
      component: Pagination
    }, {
      path: '/base/radio',
      name: 'Radio',
      component: Radio
    }, {
      path: '/base/checkbox',
      name: 'Checkbox',
      component: Checkbox
    }, {
      path: '/base/input',
      name: 'Input',
      component: Input
    }, {
      path: '/base/select',
      name: 'Select',
      component: Select
    }, {
      path: '/base/alert',
      name: 'Alert',
      component: Alert
    }, {
      path: '/base/tooltip',
      name: 'Tooltip',
      component: Tooltip
    }, {
      path: '/base/tag',
      name: 'Tag',
      component: Tag
    }, {
      path: '/base/snackbar',
      name: 'Snackbar',
      component: Snackbar
    }, {
      path: '/base/toast',
      name: 'Toast',
      component: Toast
    }, {
      path: '/bomb/poper',
      name: 'Poper',
      component: Poper
    }, {
      path: '/bomb/dialog',
      name: 'Dialog',
      component: Dialog
    }, {
      path: '/bomb/box',
      name: 'Box',
      component: Box
    }, {
      path: '/compound/dropdown',
      name: 'Dropdown',
      component: Dropdown
    }, {
      path: '/compound/nav',
      name: 'Nav',
      component: Nav
    }, {
      path: '/animation/particle',
      name: 'Particle',
      component: Particle
    }]
  }]
})
