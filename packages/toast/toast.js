import Vue from 'vue'
const ToastConstructor = Vue.extend(require('./toast.vue'))

let toast

const Toast = function (opts = {}) {
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  toast = new ToastConstructor({
    propsData: opts
  })

  toast.vm = toast.$mount()
  document.body.appendChild(toast.vm.$el)
  return toast.vm
}

export default Toast
