import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import eslintPlugin from 'vite-plugin-eslint';
import svgrPlugin from 'vite-plugin-svgr';

import { alias } from './config/aliases';
import { environments } from './config/environments';

/*
 * {mode} - dev / prod mode
 */
export default () => {
  return defineConfig({
    plugins: [
      EnvironmentPlugin(environments),
      react(),
      eslintPlugin({
        cache: false,
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    ],
    resolve: {
      alias: alias.map(({ find, replacement }) => ({
        find,
        replacement: path.resolve(__dirname, replacement),
      })),
    },
    root: path.resolve(__dirname, 'src'),
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, 'src/index.html'),
        },
      },
    },
  });
};
