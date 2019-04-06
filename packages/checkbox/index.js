import Checkbox from './checkbox'
import CheckboxBtn from './checkbox-btn'
import CheckboxGroup from './checkbox-group'

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
}

CheckboxBtn.install = function (Vue) {
  Vue.component(CheckboxBtn.name, CheckboxBtn)
}

CheckboxGroup.install = function (Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup)
}

export {
  Checkbox,
  CheckboxBtn,
  CheckboxGroup
}
