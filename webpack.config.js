const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use : {
          loader : "babel-loader"
        }
      }
    ]
  }, devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9090,
  },
  devtool: 'inline-source-map',
}