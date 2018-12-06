const path = require('path');
module.exports = {
   mode: 'development',
   entry: './wwwroot/Components/app.js',
   output: {
      path: path.resolve(__dirname, 'wwwroot/Components'),
      filename: 'bundle.js'
   }
};