import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register'),
    },
    {
      path: '/me',
      name: 'profile',
      component: () => import('./views/Profile'),
    },
    {
      path: '/me/edit',
      name: 'edit-profile',
      component: () => import('./views/EditProfile'),
    },
    {
      path: '/*',
      name: '404',
      component: () => import('./views/404'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
