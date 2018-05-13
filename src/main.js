import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import App from './App'
import axios from 'axios'
import store from './store'
import '@/mock'
import '@/styles/index.scss'
import '@/assets/icons/iconfont'

Vue.use(axios)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})