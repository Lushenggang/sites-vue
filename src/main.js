import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { IsPC } from '@/libs/tool.js'
import '@/directives/index'

Vue.use(iView)
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$isPC = IsPC()

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
