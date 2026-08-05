var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './index.js',
  output: { 
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js' 
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [ 
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              [
                '@babel/preset-react',
                {
                  // Forces Babel to use React.createElement instead of jsxDEV
                  runtime: 'classic' 
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
