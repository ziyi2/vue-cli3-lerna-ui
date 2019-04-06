import Vue from 'vue'
import App from './App'
import router from './router'
import Ui from '@/ui'
import '@ziyi2/theme/src/index.less'
import '@/assets/icon/css/font-awesome.min.css'

Vue.use(Ui)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

