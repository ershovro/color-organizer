const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
   mode: NODE_ENV,
   context: __dirname + '/src',
   entry: './index.js',
   output: {
      path: __dirname + '/dist/assets',
      publicPath: '/assets',
      filename: 'bundle.js',
      library: '[name]',
      sourceMapFilename: "bundle.map" 
   },
   devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'none',
   watch: NODE_ENV === 'development',
   watchOptions: {
      ignored: /node_modules/
   },
   module: {
      rules: [{   
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env', "@babel/preset-react"]//"@babel/preset-stage-0"
            }
         }
      }, {
         test: /\.css$/,
         use: ['style-loader', 'css-loader', 'postcss-loader']
      }]
   }
   /*
   
   
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "stage-0", "react"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["style-loader", "css-loader", {
                        loader: "postcss-loader",
                        options: {
                          plugins: () => [require("autoprefixer")]
                        }}]
                })
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",{
                        loader: "postcss-loader",
                        options: {
                          plugins: () => [require("autoprefixer")]
                        }}, "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: false,
            mangle: false
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })
    ]
   */
 
}