const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin('bundle.css'),
    new HTMLPlugin({ template: `${__dirname}/src/index.html` })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,  //regex - if the file ends in .js, then exclude node modules
        exclude: /node_modules/,  // we don't want to edit the node_modules files ourselves
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      }
    ]
  }
};

// Use the module system declared in that file to locate and get everything needed
// write npx webpack

// will create the plugins we need on the fly


// this is called transpiling - going from one flavor of JS to another flavor of JS. that is what babel does for us