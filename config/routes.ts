export default [
  { path: '/login', component: '@/pages/user/login', layout: false },
  { path: '/', icon: 'smile', name: '首页', component: '@/pages/index' },
  {
    path: '/admin',
    icon: 'smile',
    name: '管理员',
    component: '@/layout/admin',

    routes: [
      {
        path: '/admin/table',
        icon: 'table',
        name: '人员列表',
        component: '@/pages/admin/table',
        access: 'sticker',
      },
      {
        path: '/admin/resource',
        icon: 'table',
        name: '资源列表',
        access: 'admin',
        component: '@/pages/admin/resource',
      },
    ],
  },
];
