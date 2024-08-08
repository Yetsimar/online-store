import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized, Router } from 'vue-router';
import routesAuth from './auth';

// Define the routes using TypeScript
const routes: Array<RouteRecordRaw> = [
  ...routesAuth,
  {
    path: '/',
    redirect: () => ({ name: 'login' }),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      protected: true,
    },
    component: () => import('../pages/dashboard.vue'),
  },
];

// Create the router instance
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Define the navigation guard
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const isRouteProtected = to.matched.some(record => (record.meta as { protected?: boolean }).protected);
  const isToken = localStorage.getItem('at') || null;
  const routeName = to.name;

  if (isRouteProtected) {
    if (!isToken) {
      return next('/login');
    } else {
      return next();
    }
  } else if (routeName === 'login') {
    if (isToken) {
      return next('/dashboard');
    }
  }

  return next();
});

export default router;
