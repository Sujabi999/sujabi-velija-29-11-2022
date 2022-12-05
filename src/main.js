import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
