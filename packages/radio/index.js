import Radio from './radio'
import RadioBtn from './radio-btn'
import RadioGroup from './radio-group'

Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}

RadioBtn.install = function (Vue) {
  Vue.component(RadioBtn.name, RadioBtn)
}

RadioGroup.install = function (Vue) {
  Vue.component(RadioGroup.name, RadioGroup)
}

export {
  Radio,
  RadioBtn,
  RadioGroup
}
