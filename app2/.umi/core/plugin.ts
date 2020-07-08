// @ts-nocheck
import { Plugin } from '/Users/lpmvb/workspace/qiankun-test/app2/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['patchRoutes','rootContainer','render','onRouteChange','getInitialState','request','qiankun',],
});
plugin.register({
  apply: require('../plugin-initial-state/runtime'),
  path: '../plugin-initial-state/runtime',
});
plugin.register({
  apply: require('../plugin-model/runtime'),
  path: '../plugin-model/runtime',
});
plugin.register({
  apply: require('/Users/lpmvb/workspace/qiankun-test/app2/node_modules/@umijs/plugin-qiankun/lib/slave/runtimePlugin.js'),
  path: '/Users/lpmvb/workspace/qiankun-test/app2/node_modules/@umijs/plugin-qiankun/lib/slave/runtimePlugin.js',
});

export { plugin };
