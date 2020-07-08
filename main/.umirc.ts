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
          entry: 'http://localhost:7001', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: 'http://localhost:7002', // html entry
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
          microApp: 'app1',
        },
        {
          path: '/app2',
          microApp: 'app2',
        },
        {
          path: '/',
          component: './index.tsx',
        }
      ]
    }
  ]
});
