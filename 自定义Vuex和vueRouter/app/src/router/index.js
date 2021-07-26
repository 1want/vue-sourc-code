import Vue from 'vue'
import myRouter from './routers'

Vue.use(myRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HelloWorld')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/about')
  }
]

const router = new myRouter({
  routes,
  mode: 'history'
})

export default router
