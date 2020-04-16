import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import Navbar from "../container/Navbar";
import Project from '../view/Project'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Navbar,
      children:[
        {
          path: '/',
          component: Home,
        },
        {
          path: '/project/:index',
          component: Project,
        }
      ]
    }
  ]
})
