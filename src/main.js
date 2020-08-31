import Vue from 'vue'
import App from './App.vue'
//导入elementui组件库
import ElementUI from 'element-ui'
//导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//导入路由
import router from './router'
//导入全局样式表
import './assets/css/global.css'
//网络请求
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  el:'#app',
  render: h => h(App)
}).$mount('#app')
