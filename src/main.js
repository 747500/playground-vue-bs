
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Vue from 'vue'

//import VueFormulate from '@braid/vue-formulate'
//Vue.use(VueFormulate)

import UniqueId from 'vue-unique-id'
Vue.use(UniqueId)

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
