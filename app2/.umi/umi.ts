// @ts-nocheck
import './core/polyfill';
import '@@/core/devScripts';
import { plugin } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType } from '/Users/lpmvb/workspace/qiankun-test/app2/node_modules/@umijs/runtime';
import { renderClient } from '/Users/lpmvb/workspace/qiankun-test/app2/node_modules/@umijs/renderer-react/dist/index.js';
import { genMount as qiankun_genMount, genBootstrap as qiankun_genBootstrap, genUnmount as qiankun_genUnmount, genUpdate as qiankun_genUpdate } from '/Users/lpmvb/workspace/qiankun-test/app2/node_modules/@umijs/plugin-qiankun/lib/slave/lifecycles.js';



const getClientRender = (args: { hot?: boolean } = {}) => plugin.applyPlugins({
  key: 'render',
  type: ApplyPluginsType.compose,
  initialValue: () => {
    return renderClient({
      // @ts-ignore
      routes: require('./core/routes').routes,
      plugin,
      history: createHistory(args.hot),
      isServer: process.env.__IS_SERVER,
      rootElement: 'root-slave',
      defaultTitle: ``,
    });
  },
  args,
});

const clientRender = getClientRender();
export default clientRender();


    window.g_umi = {
      version: '3.2.7',
    };
  

    export const bootstrap = qiankun_genBootstrap(clientRender);
    export const mount = qiankun_genMount();
    export const unmount = qiankun_genUnmount('root-slave');
    export const update = qiankun_genUpdate();

    if (!window.__POWERED_BY_QIANKUN__) {
      bootstrap().then(mount);
    }
    

// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./core/routes', () => {
    getClientRender({ hot: true })();
  });
}
