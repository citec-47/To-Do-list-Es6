/* eslint-disable import/no-unresolved */
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const entry = './src/index.js';
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Output Management',
    filename: 'index.html',
    template: './src/index.html',
  }),
];