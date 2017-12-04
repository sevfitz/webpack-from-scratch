const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: `${__dirname}/build`
  },
  plugins: [
    new HTMLPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,  //regex - if the file ends in .js, then exclude node modules
        exclude: /node_modules/,  // we don't want to edit the node_modules files ourselves
        loader: 'babel-loader',
      }
    ]
  }
};

// Use the module system declared in that file to locate and get everything needed
// write npx webpack

// will create the plugins we need on the fly

// https://github.com/sevfitz/webpack-from-scratch.git