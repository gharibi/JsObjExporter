export function htmlTblCreater (type, headers, exportable, headerStyle, cellStyle) {
  // Construct the html structure for the provided exportable
  let dataset = '<table style="border-collapse: collapse;" width="100%;">'

  // Count the total number of provided flex for the columns
  // NOTE: this is only applicable to pdf
  let columnFlex = 0
  if (type.toLowerCase() === 'pdf') {
    for (let i = 0; i < headers.length; i++) {
      columnFlex += headers[i].flex
    }

    // Construct the table headers
    dataset += '<tr>'
    for (let j = 0; j < headers.length; j++) {
      dataset += '<th style="' + headerStyle + '" width="' + (headers[j].flex / columnFlex) * 100 + '%;" >' + headers[j].alias + '</th>'
    }
    dataset += '</tr>'
  } else {
    // Construct the table headers
    dataset += '<tr>'
    for (let j = 0; j < headers.length; j++) {
      dataset += '<th style="' + headerStyle + '" >' + headers[j] + '</th>'
    }
    dataset += '</tr>'
  }

  // Construct the body elements
  for (let j = 0; j < exportable.length; j++) {
    dataset += '<tr style="' + cellStyle + '">'
    for (let k = 0; k < Object.keys(exportable[j]).length - 1; k++) {
      // Check if the input string is HTML, if so, do not add the cell tags
      let cellContents = exportable[j][Object.keys(exportable[j])[k]]
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

  // Return the dataset
  return dataset
}
