import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

Vue.use(VueRouter)

/* 解决: Vue-router 报NavigationDuplicated的解决方案: 不打印错误 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior: () => ({x: 0, y: 0})
})

const blankList = ['/trade', '/myorder', '/pay']

router.beforeEach((to, from, next) => {
  if (blankList.indexOf(to.path)!==-1) {
    if (!store.getters.userInfo.token) {
      return next(`/login?redirect=${to.path}`)
    }
  }
  next()
})

export default router