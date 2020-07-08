import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  base: '/app2',
  publicPath: '/app2/',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/index' },
    { path: '*', component: '@/pages/index' },
  ],
  targets: {
    ie: 11,
  },
  hash: true,
});
