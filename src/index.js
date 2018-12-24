import exporter from './js/init'

const objectExporter = exporter.init

if (typeof window !== 'undefined') {
  window.objectExporter = objectExporter
}

export default objectExporter
