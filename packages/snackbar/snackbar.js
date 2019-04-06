import Vue from 'vue'
const SnackbarConstructor = Vue.extend(require('./snackbar.vue'))

let snackbar

const Snackbar = function (opts = {}) {
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }

  snackbar = new SnackbarConstructor({
    propsData: opts
  })

  snackbar.vm = snackbar.$mount()
  document.body.appendChild(snackbar.vm.$el)
  return snackbar.vm
}

export default Snackbar
