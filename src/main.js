// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端点击延时300毫秒延迟问题解决
import fastClick from 'fastclick'
//各手机端展示一致
import './assets/style/reaet.css'
//1像素border边框问题
import './assets/style/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
