import Vue from 'vue';
import Router from 'vue-router';

import Login from '../views/Login';
import LoginFail from '../views/LoginFail';
import Home from '../views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/disconnected',
      name: 'LoginFail',
      component: LoginFail
    }
  ]
});