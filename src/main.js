import Vue from 'vue'
import App from './App.vue'
import './style.css'
import Vue2Shepherd from './shepherd'
Vue.config.productionTip = false
Vue.use(Vue2Shepherd)

new Vue({
    render: h => h(App)
}).$mount('#app')

