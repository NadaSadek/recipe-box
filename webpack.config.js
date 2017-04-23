var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'components', 'main.jsx'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              plugins: ['babel-plugin-transform-class-properties'],
              presets: ['react', 'es2015', 'react-hmre']
            }
           },
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          }
      ]
  }
};
