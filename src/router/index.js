import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/home')
    }, {
      path: '/list',
      name: 'list',
      component: () => import('@/pages/list/list')
    }, {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/city')
    }, {
      path: '/detail',
      name: 'detail',
      component: () => import('@/pages/detail/detail')
    }
  ]
})
