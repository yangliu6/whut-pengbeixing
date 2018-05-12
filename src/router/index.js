import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index.vue'
import home from '@/views/home.vue'
import test from '@/views/test.vue'

Vue.use(Router)

export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: [{
        path: '/',
        redirect: {
            name: 'home'
        },
        component: index,
        children: [{
            path: '/home',
            name: 'home',
            component: home
        }]
    }, {
        path: '/test',
        component: test
    }, {
        path: '*',
        redirect: {
            name: 'home'
        }
    }]
})