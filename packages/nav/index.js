import Nav from './nav'
import NavItem from './nav-item'

Nav.install = function (Vue) {
  Vue.component(Nav.name, Nav)
}

NavItem.install = function (Vue) {
  Vue.component(NavItem.name, NavItem)
}

export {
  Nav,
  NavItem
}
