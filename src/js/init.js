'use strict'

import csv from './csv'
import xls from './xls'
import pdf from './pdf'

export default {
  init () {
    let params = {
      type: 'object',
      headers: null,
      exportable: null,
      fileName: 'export',
      headerStyle: 'font-size:16px; font-weight:bold;',
      cellStyle: 'font-size:14px;',
      sheetName: 'worksheet',
      documentTitle: 'test document title',
      documentTitleStyle: 'color:red;'
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
        params.sheetName = typeof args.sheetName !== 'undefined' ? args.sheetName : params.sheetName
        params.documentTitle = typeof args.documentTitle !== 'undefined' ? args.documentTitle : params.documentTitle
        params.documentTitleStyle = typeof args.documentTitleStyle !== 'undefined' ? args.documentTitleStyle : params.documentTitleStyle
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
    if (params.type.toLowerCase() !== 'csv' && params.type.toLowerCase() !== 'xls' && params.type.toLowerCase() !== 'pdf') {
      throw new Error('Invalid exportable type. Available types are "CSV", "XLS" and "pdf".')
    }

    // If the exportable type is pdf, then check if the column size attribute is also specified
    // if (params.type.toLocaleLowerCase() === 'pdf' && typeof params.exportable[0] !== 'object') {
    //   throw new Error('For type "pdf", the exportable type should be an array containing other arrays for the purpose of supporting multiple printables!')
    // }

    // Check exportable type
    switch (params.type) {
      case 'csv':
        csv.export(params)
        break
      case 'xls':
        xls.export(params)
        break
      case 'pdf':
        pdf.export(params)
        break
    }
  }
}
