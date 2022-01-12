const path = require('path');

module.exports = {
  watch: true,
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'objectexporter.min.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
              loader: "babel-loader",
              options: {
                  presets: ["@babel/preset-env"]
              }
          }
        }
    ]
},
  optimization: {
    minimize: true
  }
};