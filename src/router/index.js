import Vue from 'vue'
import Router from 'vue-router'

const asyncImport = file => () => import(`@/views/${file}`);

Vue.use(Router)

export const constantRouterMap = [

  { path: '/', component: asyncImport('test/test') },

  { path: '*', redirect: '/404', hidden: true },
];

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
})
