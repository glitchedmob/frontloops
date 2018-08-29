import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Days from './days'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    ...Object.keys(Days).map((Day, i) => ({
      path: `/day-${i + 1}`,
      component: Days[Day],
    }))
  ]
})
