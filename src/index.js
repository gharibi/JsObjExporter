import exporter from './js/init'

const obj2csv = exporter.init

if (typeof window !== 'undefined') {
  window.obj2csv = obj2csv
}

export default obj2csv
