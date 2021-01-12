import path from 'path';

export const mode = process.env.NODE_ENV || 'development';
export const entry = './src/app.ts';
export const output = {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist')
};
export const resolve = {
  extensions: ['.js', '.ts', '.tsx']
};
export const module = {
  rules: [
    {
      test: /\.(j|t)sx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
        }
      }
    }
  ]
};
