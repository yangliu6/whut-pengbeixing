import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index.vue'
import home from '@/views/home.vue'
import test from '@/views/test.vue'

const explore = () =>
    import ( /* webpackChunkName: "explore" */ '@/views/explore')
const recruit = () =>
    import ( /* webpackChunkName: "recruit" */ '@/views/recruit')
const alumniInformation = () =>
    import ( /* webpackChunkName: "alumniInformation" */ '@/views/alumni-information')

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
        }, {
            path: '/explore',
            name: 'explore',
            component: explore
        }, {
            path: '/recruit',
            name: 'recruit',
            component: recruit
        }, {
            path: '/alumni-information',
            name: 'alumni-information',
            component: alumniInformation
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