import Vue from 'vue'
import App from './App.vue'
//导入elementui组件库
import ElementUI from 'element-ui'
//导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App)
}).$mount('#app')
