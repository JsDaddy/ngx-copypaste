import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'qhyo66',
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: 'projects/ngx-copypaste-lib/src/test/**/*.cy-spec.ts',
  },
});