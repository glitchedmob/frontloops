import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from './views/Home.vue';
import Loops from './loops';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

      ...Loops.reduce((all, loop, loopIndex) => ([
          ...all,
          ...loop.map((step, stepIndex) => ({
              path: `/loop-${loopIndex + 1}/step-${stepIndex + 1}`,
              component: step,
          })),
      ]), []),
  ]
})
