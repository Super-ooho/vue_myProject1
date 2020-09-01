import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    //to 将要访问的路径
    //from 从哪个路径跳转而来
    //next 是一个函数 表示放行
    //    next();表示放行    next('/login');强制跳转
    if(to.path === '/login')
        return next();
    const token = window.sessionStorage.getItem('token');
    if(!token){
        // this.$message({
        //     message: '请先登录哦',
        //     type: 'warning'
        //   });
        return next('/login');
    }
    next();
})
export default router