import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    siderWidth: 208,
    ...defaultSettings,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  routes,
  mfsu: {},
  fastRefresh: {},
});
