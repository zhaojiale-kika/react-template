// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/xm0525/Documents/React/template/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'/Users/xm0525/Documents/React/template/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'@/pages/user/login'), loading: LoadingComponent}),
        "layout": false,
        "exact": true
      },
      {
        "path": "/",
        "icon": "smile",
        "name": "首页",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "path": "/admin",
        "icon": "smile",
        "name": "管理员",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layout__admin' */'@/layout/admin'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/admin/table",
            "icon": "table",
            "name": "人员列表",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__admin__table' */'@/pages/admin/table'), loading: LoadingComponent}),
            "access": "sticker",
            "exact": true
          },
          {
            "path": "/admin/resource",
            "icon": "table",
            "name": "资源列表",
            "access": "admin",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__admin__resource' */'@/pages/admin/resource'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
