import Vue from "vue";
import VueRouter from "vue-router";
import Get from "./components/Get";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Personal from "./components/Personal";
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/get', component: () => import('./components/Get'),
            name: 'get.index'
        },
        {
            path: '/user/login', component: () => import('./components/Login'),
            name: 'user.login'
        },
        {
            path: '/user/registration', component: () => import('./components/Registration'),
            name: 'user.registration'
        },
        {
            path: '/user/personal', component: () => import('./components/Personal'),
            name: 'user.personal'
        }
    ]
})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x-xsrf-token');

    if (!token){
        if ((to.name === 'user.login') || (to.name === 'user.registration')){
            return next();
        } else {
            return next({ name: 'user.login'});
        }
    } else {
        if ((to.name === 'user.login') || (to.name === 'user.registration')){
            return next({ name: 'user.personal'});
        } else {
            return next();
        }
    }
})

export default router;
