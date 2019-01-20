import { saveAs } from 'file-saver'
import { htmlTblCreater } from './el'
let Blob = require('blob')

export default {
  export: (params) => {
    exportObject2Doc(params.headers, params.exportable, params.fileName, params.headerStyle, params.cellStyle, params.sheetName)
  }
}

/**
 * Function to export the dataset as doc.
 * @param  {array} headers the columns of the csv file.
 * @param  {object} exportable the records of csv file.
 * @param  {string} fileName the title of the file which needs to be exported.
 * @param  {string} headerStyle the style which can be applied to the headers.
 * @param  {string} cellStyle the style which can be applied to the cells.
 */
function exportObject2Doc (headers, exportable, fileName, headerStyle, cellStyle) {
  // Create the html structured dataset
  let dataset = htmlTblCreater('doc', headers, exportable, headerStyle, cellStyle)
  let htmlString = '<html><body>' + dataset + '</body></html>'

  // Create the bytes
  let bytes = new Uint8Array(htmlString.length)
  for (var i = 0; i < htmlString.length; i++) {
    bytes[i] = htmlString.charCodeAt(i)
  }

  // Convert the contents to blob
  let blob = new Blob([bytes], { type: 'text/html' })

  // Save the file as doc
  saveAs(blob, fileName + '.doc')
}
