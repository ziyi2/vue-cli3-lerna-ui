import Btn from './btn'
import BtnGroup from './btn-group'

Btn.install = function (Vue) {
  Vue.component(Btn.name, Btn)
}

BtnGroup.install = function (Vue) {
  Vue.component(BtnGroup.name, BtnGroup)
}

export {
  Btn,
  BtnGroup
}

