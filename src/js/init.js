'use strict'

import json from './json'

export default {
  init () {
    let params = {
      type: 'json',
      headers: null,
      exportable: null,
      fileName: 'export.csv'
    }

    // Check if an exportable document or object was supplied
    let args = arguments[0]
    if (args === undefined) throw new Error('csvJS expects at least 1 exportable!')

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
    if (params.type !== 'json') {
      throw new Error('Invalid exportable type. Available types is "json".')
    }

    // Check exportable type
    switch (params.type) {
      case 'json':
        json.export(params)
        break
    }
  }
}
