import { resolve } from 'path';

export const mode = process.env.NODE_ENV || 'development';
export const entry = './src/app.ts';
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist')
};
export const module = {
  rules: [
    {
      test: /\.(j|t)s$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript']
        }
      }
    }
  ]
};
