const NODE_ENV = process.env.NODE_ENV || 'development';

module.export = {
   mode: NODE_ENV,
   entry: './src/index.js',
   output: {
      path: __dirname + 'dist/assets',
      publicPath: 'assets',
      filename: 'bundle.js',
      library: '[name]',
      sourceMapFilename: "bundle.map" 
   },
   devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : 'none',
   
      module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env', "@babel/preset-react"]
            }
         }
      }, {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      }]
   }
   
   module: {
      rules: [ {
         test: /\.js$/,
         exclude: /(node_modules)/,
         use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env', "@babel/preset-react", "@babel/preset-stage-0"]
            }
         }
      }, {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
      } ]
   }  
}