import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './_stores/store'
import firebase from './_helper/firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')