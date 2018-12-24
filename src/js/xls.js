var Blob = require('blob')

export default {
  export: (params) => {
    exportObject2CSV(params.headers, params.exportable, params.fileName)
  }
}

/**
 * Function to export the json data as csv.
 * @param  {json} headers the columns of the csv file.
 * @param  {json} exportable the records of csv file.
 * @param  {string} fileName the title of the file which needs to be exported.
 */
function exportObject2CSV (headers, exportable, fileName) {

}
