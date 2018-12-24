'use strict'

import obj from './obj'

export default {
  init () {
    let params = {
      type: 'object',
      headers: null,
      exportable: null,
      fileName: 'export.csv'
    }

    // Check if an exportable document or object was supplied
    let args = arguments[0]
    if (args === undefined) throw new Error('obj2csv expects at least 1 exportable!')

    // Process parameters
    switch (typeof args) {
      case 'object':
        params.exportable = args.exportable
        params.type = typeof args.type !== 'undefined' ? args.type : params.type
        params.headers = typeof args.headers !== 'undefined' ? args.headers : params.headers
        params.fileName = typeof args.fileName !== 'undefined' ? args.fileName : params.fileName
        break
      default:
        throw new Error('Unexpected argument type! Expected "object", got ' + typeof args)
    }

    // Validate type
    if (!params.exportable || typeof params.exportable !== 'object') {
      throw new Error('Invalid exportable!')
    }
    if (!params.type || typeof params.type !== 'string') {
      throw new Error('Invalid exportable type!')
    }
    if (params.type !== 'object') {
      throw new Error('Invalid exportable type. Available types is "object".')
    }

    // Check exportable type
    switch (params.type) {
      case 'object':
        obj.export(params)
        break
    }
  }
}
