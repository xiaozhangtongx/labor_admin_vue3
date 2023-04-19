// @unocss-include
import { type RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/layout/index.vue')
const unoCssIcons = ['i-gg-menu-round', 'i-fluent-people-team-24-filled', 'i-material-symbols-person-search-outline', 'i-eos-icons-role-binding-outlined', 'i-material-symbols-flowsheet-outline', 'i-ic-outline-leave-bags-at-home', 'i-material-symbols-more-time', 'i-material-symbols-free-cancellation-rounded', 'i-ci-timer-add']

/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/403',
    component: () => import('@/views/error-page/403.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      hidden: true,
    },
    alias: '/:pathMatch(.*)*',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          svgIcon: 'i-material-symbols-dashboard-rounded',
          affix: true,
        },
      },
    ],
  },
]
