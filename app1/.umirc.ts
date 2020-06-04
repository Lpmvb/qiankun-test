import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  base: '/app1',
  publicPath: '/app1/',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  targets: {
    ie: 11,
  },
  hash: true,
});
