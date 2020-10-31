import { htmlTblCreater } from './el'
const { detect } = require('detect-browser')

export default {
  export: (params) => {
    exportObject2XLS(params.headers, params.exportable, params.fileName, params.headerStyle, params.cellStyle, params.sheetName, params.documentTitle, params.documentTitleStyle)
  }
}

// Defining the required functions
const base64 = s => {
  return window.btoa(unescape(encodeURIComponent(s)))
}
const format = (s, c) => {
  return s.replace(/{(\w+)}/g, function (m, p) { return c[p] })
}
const uri = 'data:application/vnd.ms-excel;base64,'
const template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'

/**
 * Function to export the dataset as xls.
 * @param  {array} headers the columns of the csv file.
 * @param  {object} exportable the records of csv file.
 * @param  {string} fileName the title of the file which needs to be exported.
 * @param  {string} headerStyle the style which can be applied to the headers.
 * @param  {string} cellStyle the style which can be applied to the cells.
 * @param  {string} sheetName the excel sheet name which needs to be applied to the exported xls file.
 * @param  {string} documentTitle the document title which needs to be written as a header on the excel sheet.
 * @param  {string} documentTitleStyle the style of the document title.
 */
function exportObject2XLS (headers, exportable, fileName, headerStyle, cellStyle, sheetName, documentTitle, documentTitleStyle) {
  // Construct the html structure for the provided exportable
  let dataset = '<span style="' + documentTitleStyle + '">' + documentTitle + '</span><br>'
  dataset += htmlTblCreater('xls', headers, exportable, headerStyle, cellStyle, false)

  // Push the file for being downloaded
  const ctx = { worksheet: sheetName, table: dataset }
  const link = document.createElement('a')
  const exportFileName = fileName + '.xls'
  link.setAttribute('href', uri + base64(format(template, ctx)))
  link.setAttribute('download', exportFileName)
  link.style.visibility = 'hidden'

  // Detect the browser information
  const browser = detect()

  // Check the if the browser is Edge or Internet Explorer
  if (browser.name === 'edge' || browser.name === 'ie') {
    if (window.navigator.msSaveBlob) {
      const blob = new Blob([dataset], {
        type: 'data:application/vnd.ms-excel;'
      })
      navigator.msSaveBlob(blob, exportFileName)
    }
  } else {
    // All other browsers
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
