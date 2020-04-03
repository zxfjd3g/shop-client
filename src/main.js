import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Pagination from '@/components/Pagination'
import Carousel from '@/components/Carousel'
import TypeNav from '@/components/TypeNav'
import './mock'

Vue.component('Pagination', Pagination)
Vue.component('Carousel', Carousel)
Vue.component('TypeNav', TypeNav)

Vue.prototype.$bus=new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
