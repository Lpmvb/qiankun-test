import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {},
  },
  base: '/app1',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
