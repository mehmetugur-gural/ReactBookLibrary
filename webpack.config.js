const path = require('path');
module.exports = {
   mode: 'development',
   entry: { 'main': './wwwroot/components/main/app.js' },
   output: {
      path: path.resolve(__dirname, 'wwwroot/bundle'),
      publicPath: 'bundle/',
      filename: 'bundle.js'
   },
   module: {
      rules: [
      {
         test: /\.js$/,
         exclude: /(node_modules)/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-react','@babel/preset-env']
            }
         }
      }
      ]
   }
};