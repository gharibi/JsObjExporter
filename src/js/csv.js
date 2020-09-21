export default {
  export: (params) => {
    exportObject2CSV(params.headers, params.exportable, params.fileName, params.columnSeparator)
  }
}

/**
 * Function to export the object as csv.
 * @param  {array} headers the columns of the csv file.
 * @param  {object} exportable the records of csv file.
 * @param  {string} fileName the title of the file which needs to be exported.
 * @param  {char} columnSeparator the character that separates one colum from another.
 */
function exportObject2CSV (headers, exportable, fileName, columnSeparator) {
  // Check if there is headers provided
  if (headers) {
    // Check if the provided header is an arry (backward-compatibility for version below 3.3.0 - more info at: https://github.com/gharibi/JsObjExporter/issues/4)
    if (typeof headers[0] !== 'object') {
      exportable.unshift(headers)
    } else {
      const headerDataset = {}
      for (let i = 0; i < headers.length; i++) {
        headerDataset[headers[i].name] = headers[i].alias
      }
      exportable.unshift(headerDataset)
    }
  }

  // Convert Object to JSON
  const jsonObject = JSON.stringify(exportable)
  const csv = convert2csv(jsonObject, columnSeparator)
  const exportFileName = fileName + '.csv'
  const blob = new Blob([csv], {
    type: 'text/csv;charset=utf-8;'
  })
  if (navigator.msSaveBlob) { // IE 10+
    navigator.msSaveBlob(blob, exportFileName)
  } else {
    const link = document.createElement('a')
    if (link.download !== undefined) {
      // Browsers that support HTML5 download attribute
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', exportFileName)
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }
}

/**
 * Function to create an object of arrays to csv.
 * @param  {object} objArray the json data which needs to be converted to an array.
 * @param  {char} columnSeparator the character that separates one column from another.
 */
function convert2csv (objArray, columnSeparator) {
  const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray
  let str = ''
  for (let i = 0; i < array.length; i++) {
    let line = ''
    for (const index in array[i]) {
      line += array[i][index] + columnSeparator
    }
    line = line.substring(0, line.length - 1)
    str += line + '\r\n'
  }
  return str
}
