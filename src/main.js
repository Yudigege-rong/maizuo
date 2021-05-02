import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import Scroller from '@/components/BScroll'
// 引入loading
import Loading from '@/components/Loading'
// 引入过滤器
import { actorFilter } from './filter/actor'
// 注册为全局过滤器
Vue.filter('actorFilter', actorFilter)

Vue.component('Loading', Loading)

// Vue.component('Scroller', Scroller)

Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
