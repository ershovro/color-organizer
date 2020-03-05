const NODE_ENV = process.env.NODE_ENV || 'development';
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const serverConfig = {
   target: 'node',
   mode: NODE_ENV,
   context: __dirname + '/src',
   entry: './server/index.js',
   output: {
      path: __dirname + '/dist/assets',
      publicPath: '/assets',
      filename: 'serverBundle.js',
      sourceMapFilename: "bundle.map"
   },
   devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'none',
   watch: NODE_ENV === 'development',
   watchOptions: {
      ignored: /node_modules/
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env', "@babel/preset-react"]//"@babel/preset-stage-0"
               }
            }
         }
      ]
   },
   plugins: [
      new webpack.IgnorePlugin({resourceRegExp: /\.scss$/}),
   ]
};

module.exports = {
   mode: NODE_ENV,
   context: __dirname + '/src',
   entry: './index.js',
   output: {
      path: __dirname + '/dist/assets',
      publicPath: '/assets',
      filename: 'bundle.js',
      library: 'colorOrganizer',
      sourceMapFilename: "bundle.map" 
   },
   devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'none',
   watch: NODE_ENV === 'development',
   watchOptions: {
      ignored: /node_modules/
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ['@babel/preset-env', "@babel/preset-react"]//"@babel/preset-stage-0"
               }
            }
         }, {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', {
               loader: "postcss-loader",
               options: {
                  plugins: () => [require("autoprefixer")]
               }
            }, 'sass-loader']
         }
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: 'bundle.css',
         chunkFilename: '[id].css',
      })
   //   new ExtractTextPlugin("styles.css")
   ]
   /*
    {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', {
               loader: "postcss-loader",
               options: {
                  plugins: () => [require("autoprefixer")]
               }
            }]
         }
         
         
         
{
         test: /\.scss$/,
         use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: ['css-loader', {
              loader: "postcss-loader",
              options: {
                 plugins: () => [require("autoprefixer")]
              }
           }, 'sass-loader']
        })
      }
   */
};