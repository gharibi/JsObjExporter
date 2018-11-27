import exporter from './js/init'

const csvjs = exporter.init

if (typeof window !== 'undefined') {
  window.csvJS = csvjs
}

export default csvjs
