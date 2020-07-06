import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from 'views/Main'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'App',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/first',
    component: Main,
    children: [
      {
        path: 'first',
        name: 'First',
        component: () => import('components/First')
      },
      {
        path: 'second',
        name: 'Second',
        component: () => import('components/Second')
      },
      {
        path: 'third',
        name: 'Third',
        component: () => import('components/Third')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('components/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
