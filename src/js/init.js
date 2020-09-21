'use strict'

import csv from './csv'
import xls from './xls'
import pdf from './pdf'
import doc from './doc'
import html from './html'

export default {
  init () {
    const params = {
      type: 'object',
      headers: null,
      exportable: null,
      fileName: 'export',
      headerStyle: 'font-size:16px; font-weight:bold;',
      cellStyle: 'font-size:14px;',
      sheetName: 'worksheet',
      documentTitle: 'test document title',
      documentTitleStyle: 'color:red;',
      repeatHeader: true,
      columnSeparator: ','
    }

    // Check if an exportable document or object was supplied
    const args = arguments[0]
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
        params.repeatHeader = typeof args.repeatHeader !== 'undefined' ? args.repeatHeader : params.repeatHeader
        params.columnSeparator = typeof args.columnSeparator !== 'undefined' ? args.columnSeparator : params.columnSeparator
        break
      default:
        throw new Error('Unexpected argument type! Expected "object", got ' + typeof args)
    }

    // Validate type
    if (!params.exportable) {
      throw new Error('Invalid exportable!')
    }
    if (!params.type || typeof params.type !== 'string') {
      throw new Error('Invalid exportable type! only string type is acceptable!')
    }
    if (['csv', 'xls', 'pdf', 'doc', 'html'].indexOf(params.type.toLowerCase()) === -1) {
      throw new Error('Invalid exportable type. Available types are "CSV", "XLS", "pdf" and "DOC".')
    }
    if (typeof params.repeatHeader !== 'boolean' && typeof params.repeatHeader !== 'undefined') {
      throw new Error('Invalid value for the repeat header parameter. Available types are "true" and "false".')
    }

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
      case 'doc':
        doc.export(params)
        break
      case 'html':
        html.export(params)
        break
    }
  }
}
