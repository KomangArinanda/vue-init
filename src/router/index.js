import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/pages/About'
import PropsAndEvents from '@/pages/PropsAndEvents'
import Customers from '@/pages/Customers'
import LearnVuex from '@/pages/LearnVuex'
import Addresses from '@/pages/Addresses'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/addresses',
      name: 'Addresses',
      component: Addresses
    },
    {
      path: '/props-and-events',
      name: 'PropsAndEvents',
      component: PropsAndEvents
    },
    {
      path: '/customers',
      name: 'ustomers',
      component: Customers
    },
    {
      path: '/learn-vuex',
      name: 'LearnVuex',
      component: LearnVuex
    }
  ]
})
