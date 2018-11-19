import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { IsPC } from '@/libs/tool.js'
import '@/directives/index'
import store from './store'
import Avatar from '@/components/Avatar'
import showdown from 'showdown'
import 'simple-vue-tree'
import 'simple-vue-tree/dist/lib/simple-tree.css'

Vue.use(iView)
Vue.use(mavonEditor)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$isPC = IsPC()
Vue.prototype.$converter = new showdown.Converter()
Vue.component('avatar', Avatar)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
