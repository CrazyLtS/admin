import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/msgSystem'
  },
  {
    path: '/msgSystem',
    name: 'MsgSystem',
    component: () => import('components/msgSystem/MsgSystem'),
    children: [
      // 空白页
      {
        path: 'blank',
        name: 'Blank',
        component: () => import('components/otherComponents/Blank')
      },
      {
        path: 'userIfon',
        name: 'UserIfon',
        component: () => import('contentComponents/UserIfon')
      },
      {
        path: 'message',
        name: 'Message',
        redirect: 'message/allmsg',
        component: () => import('contentComponents/Message'),
        children: [
          {
            path: 'allmsg',
            name: 'AllMsg',
            component: () => import('otherComponents/message/AllMsg')
          },
          {
            path: 'comment',
            name: 'Comment',
            component: () => import('otherComponents/message/Comment')
          },
          {
            path: 'news',
            name: 'News',
            component: () => import('otherComponents/message/News')
          }
        ]
      },
      {
        path: 'dataView',
        name: 'DataView',
        component: () => import('contentComponents/DataView')
      },
      {
        path: 'datacenter',
        name: 'DataCenter',
        component: () => import('contentComponents/DataCenter')
      },
      {
        path: 'historyData',
        name: 'HistoryData',
        component: () => import('contentComponents/HistoryData')
      },
      {
        path: 'icons',
        name: 'Icons',
        component: () => import('contentComponents/Icons')
      },
      {
        path: 'sketchpad',
        name: 'Sketchpad',
        component: () => import('contentComponents/Sketchpad')
      },
      {
        path: 'drag',
        name: 'Drag',
        component: () => import('contentComponents/Drag')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('contentComponents/Setting')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
