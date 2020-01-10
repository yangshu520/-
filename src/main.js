import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/element.js'
import axios from 'axios'
import './assets/css/globle.css'
//导入进度条
import Nprogress from 'nprogress'
//导入进度条样式
import 'nprogress/nprogress.css'

axios.defaults.baseURL = 'https://bird.ioliu.cn/v1?url=http://39.108.140.70:8080'

//请求的时候显示进度条
axios.interceptors.request.use(config => {
        Nprogress.start()
        return config
    })
    //相应结束的时候隐藏进度条
axios.interceptors.response.use(config => {
    Nprogress.done()
        //必须返回config
    return config
})


Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')