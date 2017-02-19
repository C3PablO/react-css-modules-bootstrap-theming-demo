const path = require('path');

const basePath = __dirname;
const srcPath = path.join(basePath, 'src');
const staticPath = path.join(basePath, 'static');
const componentsPath = path.join(srcPath, 'components');

module.exports = {

  devtool: 'eval-source-map',

  entry: path.join(srcPath, 'boot'),

  output: {
    path: staticPath,
    publicPath: 'js',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js|jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [srcPath],
            },
          },
        ],
        include: [/node_modules/, /core/]
      },
      { test: /\.scss/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]',
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [srcPath],
            },
          },
        ],
        exclude: [/node_modules/, /core/]
      },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    modules: ['node_modules', basePath, srcPath, componentsPath],
  },
};
