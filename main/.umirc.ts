import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: 'http://localhost:7002', // html entry
          base: '/app1', // sys 的路由前缀，通过这个前缀判断是否要启动该应用，通常跟子应用的 base 保持一致
          mountElementId: 'root-subapp-container',
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index.tsx',
      routes: [
        {
          path: '/app1',
          exact: false,
        },
        {
          path: '/',
          component: './index.tsx',
        }
      ]
    }
  ]
});
