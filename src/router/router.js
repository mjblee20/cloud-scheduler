import Vue from 'vue';
import Router from 'vue-router';

import Login from './../views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      Component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});