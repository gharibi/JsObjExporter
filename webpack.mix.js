const { mix } = require('laravel-mix')

mix.js('src/index.js', 'dist/objectexporter.min.js')

mix.webpackConfig({
  output: {
    library: 'object-exporter',
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
})
