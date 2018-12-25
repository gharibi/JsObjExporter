'use strict'

import csv from './csv'
import xls from './xls'

export default {
  init () {
    let params = {
      type: 'object',
      headers: null,
      exportable: null,
      fileName: 'export',
      headerStyle: null,
      cellStyle: null
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
        params.headerStyle = typeof args.headerStyle !== 'undefined' ? args.headerStyle : params.headerStyle
        params.cellStyle = typeof args.cellStyle !== 'undefined' ? args.cellStyle : params.cellStyle
        break
      default:
        throw new Error('Unexpected argument type! Expected "object", got ' + typeof args)
    }

    // Validate type
    if (!params.exportable || typeof params.exportable !== 'object') {
      throw new Error('Invalid exportable!')
    }
    if (!params.type || typeof params.type !== 'string') {
      throw new Error('Invalid exportable type! only string type is acceptable!')
    }
    if (params.type.toLowerCase() !== 'csv' && params.type.toLowerCase() !== 'xls') {
      throw new Error('Invalid exportable type. Available types are "CSV" and "XLS".')
    }

    // Check exportable type
    switch (params.type) {
      case 'csv':
        csv.export(params)
        break
      case 'xls':
        xls.export(params)
        break
    }
  }
}
