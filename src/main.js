import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import $ from "jquery"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this,
    Vue.prototype.$ = $
  }
}).$mount('#app')
