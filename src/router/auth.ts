const routesAuth = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/auth/login.vue'),
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('../pages/auth/register.vue'),
      },
]
export default routesAuth