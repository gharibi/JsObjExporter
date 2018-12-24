const { mix } = require('laravel-mix')

mix.js('src/index.js', 'dist/obj2csv.min.js')

mix.webpackConfig({
  output: {
    library: 'object-to-csv',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})
