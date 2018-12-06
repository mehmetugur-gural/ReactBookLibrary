const path = require('path');
module.exports = {
   mode: 'development',
   entry: { 'main': './wwwroot/Components/app.js' },
   output: {
      path: path.resolve(__dirname, 'wwwroot/Components'),
      filename: 'bundle.js',
      publicPath: 'Components/'
   },
   module: {
      rules: [
      {
         test: /\.js$/,
         exclude: /(node_modules)/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env']
            }
         }
      }
      ]
   }
};