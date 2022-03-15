// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/xm0525/Documents/React/template/src/app.tsx';
import * as Plugin_1 from '/Users/xm0525/Documents/React/template/src/.umi/plugin-access/rootContainer.ts';
import * as Plugin_2 from '../plugin-initial-state/runtime';
import * as Plugin_3 from '@@/plugin-layout/runtime.tsx';
import * as Plugin_4 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/xm0525/Documents/React/template/src/app.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: '/Users/xm0525/Documents/React/template/src/.umi/plugin-access/rootContainer.ts',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_3,
    path: '@@/plugin-layout/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_4,
    path: '../plugin-model/runtime',
  });

export const __mfsu = 1;
