import Alert from './alert'

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
