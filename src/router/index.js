import { createRouter, createWebHistory } from 'vue-router';
// 全局控制 tab
import { tabs, currentTab } from '@/utility/tabData.js';

// 配置路由規則
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // 動態導入(懶加載)
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User.vue'),
  },
  {
    path: '/user2',
    name: 'User2',
    component: () => import('@/views/User2.vue'),
  },
  {
    path: '/score',
    name: 'Score',
    component: () => import('@/views/Score.vue'),
  },
  {
    path: '/userlist',
    name: 'UserList',
    component: () => import('@/views/UserList.vue'),
  },
  // 設置 404 NotFound 頁面
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

// 創建路由實例
const router = createRouter({
  // 指定模式
  history: createWebHistory(import.meta.env.BASE_URL),
  // 設定前面配置的路由
  routes,
});

// 全局前置守衛
router.beforeEach((to, from) => {
  // 設定 tab
  if (to.name === 'Home' && to.query.tab) {
    currentTab.set(to.query.tab);
    return { path: tabs[currentTab.value].path };
  } else if (
    sessionStorage.getItem('currentTab') &&
    currentTab.value !== sessionStorage.getItem('currentTab')
  ) {
    currentTab.set(sessionStorage.getItem('currentTab'));
  }
});

// 共享路由實例
export default router;
