import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import './assets/css/var.less'

// //依赖less文件
// require('./assets/css/var.less');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
