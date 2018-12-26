import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import List from '@/pages/list/list'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list',
      name: 'list',
      component: List
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
