import Vue from 'vue'
import Router from 'vue-router'
import HellowWorld from '@/components/HelloWorld'
import Home from '@/components/pages/home'
import nav from '@/components/pages/nav'
import child1 from '@/components/pages/child1'
import child2 from '@/components/pages/child2'
import child3 from '@/components/pages/child3'


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HellowWorld,
    },
    {
      path: '/home',
      name: 'home',
      params: {},
      components: {
        default: Home,
        nav: nav,
      },
      children: [
        {
          path: '', //default
          name: 'child1',
          component: child1,
        },
        {
          path: 'child2',
          name: 'child2',
          component: child2,
        },
        {
          path: 'child/:id',
          name: 'child3',
          component: child3,
        },
      ],
    }
  ]
})
