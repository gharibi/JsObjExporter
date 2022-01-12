export function htmlTblCreater (type, headers, exportable, headerStyle, cellStyle, repeatHeader) {
  // Construct the html structure for the provided exportable
  let dataset = '<table style="border-collapse: collapse;" width="100%;">'

  // Check if the headers should be repeated
  if (repeatHeader === true) {
    dataset += '<thead>'
  }

  // Check if the provided header is an arry (backward-compatibility for version below 3.3.0 - more info at: https://github.com/gharibi/JsObjExporter/issues/4)
  let columnFlex = 0
  if (typeof headers[0] !== 'object') {
    // Construct the table headers
    dataset += '<tr>'
    for (let j = 0; j < headers.length; j++) {
      dataset += '<th style="' + headerStyle + '" >' + headers[j] + '</th>'
    }
    dataset += '</tr>'

    // Check if the headers should be repeated
    if (repeatHeader === true) {
      dataset += '</thead>'
    }

    // Construct the body elements
    for (let j = 0; j < exportable.length; j++) {
      dataset += '<tr style="' + cellStyle + '">'
      for (let k = 0; k < Object.keys(exportable[j]).length - 1; k++) {
        // Check if the input string is HTML, if so, do not add the cell tags
        const cellContents = exportable[j][Object.keys(exportable[j])[k]]
        if (/<[a-z][\s\S]*>/i.test(cellContents) === true) {
          dataset += cellContents
        } else {
          dataset += '<td style="' + cellStyle + '" ' + (function () {
            return (type.toLowerCase() === 'csv') ? 'width="' + (headers[k].flex / columnFlex) * 100 + '%;"' : ''
          })() + ' >' + cellContents + '</td>'
        }
      }
      dataset += '</tr>'
    }
    dataset += '</table>'
  } else {
    for (let i = 0; i < headers.length; i++) {
      // Check if the header contains a flex, otherwise consider flex=1 to have equal sized columns
      columnFlex += (function () {
        return ('flex' in headers[i]) ? headers[i].flex : 1
      })()
    }

    // Construct the table headers
    dataset += '<tr>'
    for (let j = 0; j < headers.length; j++) {
      dataset += '<th style="' + headerStyle + '" width="' + (headers[j].flex / columnFlex) * 100 + '%;" >' + headers[j].alias + '</th>'
    }
    dataset += '</tr>'

    // Check if the headers should be repeated
    if (repeatHeader === true) {
      dataset += '</thead>'
    }

    // Construct the body elements
    for (let j = 0; j < exportable.length; j++) {
      dataset += '<tr style="' + cellStyle + '">'
      // Loop through the header items to show only the items associated with a header
      for (let k = 0; k < headers.length; k++) {
        // Check if the input string is HTML, if so, do not add the cell tags
        const cellContents = exportable[j][headers[k].name]
        dataset += '<td style="' + cellStyle + '" ' + (function () {
          return (type.toLowerCase() === 'csv') ? 'width="' + (headers[k].flex / columnFlex) * 100 + '%;"' : ''
        })() + ' >' + cellContents + '</td>'
      }
      dataset += '</tr>'
    }
  }

  // Return the dataset
  return dataset
}
