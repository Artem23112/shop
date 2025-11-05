import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  base: '/shop/',
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@components': '/src/components',
      '@features': '/src/features',
      '@layout': '/src/layout',
      '@utils': '/src/utils',
      '@assets': '/src/assets',
      '@pages': '/src/pages',
    },
  },
});
