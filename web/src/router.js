import Vue from 'vue'
import Router from 'vue-router'
import VueHead from 'vue-head'
import EmbettyVue from 'embetty-vue'
import Home from './views/Home.vue'

Vue.use(VueHead)
Vue.use(EmbettyVue,{
  serverUrl:'https://localhost:8080',
  posterImageMOde:'contain' //'cover' Or 'contain'
});
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
