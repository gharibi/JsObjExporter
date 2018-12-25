export default {
  export: (params) => {
    exportObject2XLS(params.headers, params.exportable, params.fileName, params.headerStyle, params.cellStyle)
  }
}

// Defining the required functions
let base64 = s => {
  return window.btoa(unescape(encodeURIComponent(s)))
}
let format = (s, c) => {
  return s.replace(/{(\w+)}/g, function (m, p) { return c[p] })
}
let uri = 'data:application/vnd.ms-excel;base64,'
let template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'

/**
 * Function to export the dataset as xls.
 * @param  {array} headers the columns of the csv file.
 * @param  {object} exportable the records of csv file.
 * @param  {string} fileName the title of the file which needs to be exported.
 * @param  {string} headerStyle the style which can be applied to the headers.
 * @param  {string} cellStyle the style which can be applied to the cells.
 */
function exportObject2XLS (headers, exportable, fileName, headerStyle, cellStyle) {
  // Construct the html structure for the provided exportable
  let dataset = null

  // Construct the table headers
  dataset = '<tr>'
  for (let i = 0; i < headers.length; i++) {
    dataset += '<th style="' + headerStyle + '">' + headers[i] + '</th>'
  }
  dataset += '</tr>'

  // Construct the body elements
  for (let j = 0; j < exportable.length; j++) {
    dataset += '<tr>'
    for (let k = 0; k < Object.keys(exportable[j]).length; k++) {
      dataset += '<td style="' + cellStyle + '">' + exportable[j][Object.keys(exportable[j])[k]] + '</td>'
    }
    dataset += '</tr>'
  }

  // Push the file for being downloaded
  let ctx = { worksheet: 'Worksheet', table: dataset }
  var a = document.createElement('a')
  a.href = uri + base64(format(template, ctx))
  a.download = fileName + '.xls'
  a.click()
}
