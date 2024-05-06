import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/advanced-antd/',
  server: {
    open: true,
    fs: {
      strict: true,
      // 监控父级项目的 dist 目录
      allow: ['../.'],
    },
  },
});
