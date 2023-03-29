/// <reference types="vitest" />
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vitest/config';
import svgLoader from 'vite-svg-loader';

// https://vitest.dev/config/
export default defineConfig({
  //@ts-ignore
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,ts}'],
  },
});
