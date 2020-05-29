import { saveAs } from 'file-saver'
import { htmlTblCreater } from './el'

export default {
  export: (params) => {
    exportObject2Doc(params.headers, params.exportable, params.fileName, params.headerStyle, params.cellStyle, params.repeatHeader)
  }
}

/**
 * Function to export the dataset as doc.
 * @param  {array} headers the columns of the csv file.
 * @param  {object} exportable the records of csv file.
 * @param  {string} fileName the title of the file which needs to be exported.
 * @param  {string} headerStyle the style which can be applied to the headers.
 * @param  {string} cellStyle the style which can be applied to the cells.
 * @param  {boolean} repeatHeader determines whether there should be a repeated header on each page.
 */
function exportObject2Doc (headers, exportable, fileName, headerStyle, cellStyle, repeatHeader) {
  // Create the html structured dataset
  const dataset = htmlTblCreater('doc', headers, exportable, headerStyle, cellStyle, repeatHeader)
  const htmlString = '<html><body>' + dataset + '</body></html>'

  // Create the bytes
  const bytes = new Uint8Array(htmlString.length)
  for (let i = 0; i < htmlString.length; i++) {
    bytes[i] = htmlString.charCodeAt(i)
  }

  // Convert the contents to blob
  const blob = new Blob([bytes], { type: 'text/html' })

  // Save the file as doc
  saveAs(blob, fileName + '.doc')
}
