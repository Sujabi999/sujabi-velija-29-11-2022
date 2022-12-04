import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/Login.vue'
import Home from '../views/Home'
import StudentsView from '../views/Students.vue'
import ArchiveView from '../views/Archive'
import HelpView from '../views/Help'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/students',
    name: 'students',
    component: StudentsView
  },
  {
    path: '/archive',
    name: 'archive',
    component: ArchiveView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
