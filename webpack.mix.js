const { mix } = require('laravel-mix')

mix.js('src/index.js', 'dist/csvjs.min.js')

mix.webpackConfig({
  output: {
    library: 'csv-js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})
