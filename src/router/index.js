import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Login from '../components/Login.vue'

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})