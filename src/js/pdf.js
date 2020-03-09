import { htmlTblCreater } from './el'
const { detect } = require('detect-browser')

export default {
  export: (params) => {
    exportObject2PDF(params.documentTitle, params.documentTitleStyle, params.headers, params.exportable, params.headerStyle, params.cellStyle, params.repeatHeader)
  }
}

function exportObject2PDF (documentTitle, documentTitleStyle, headers, exportable, headerStyle, cellStyle, repeatHeader) {
  // Define a printable body element
  const printableBody = document.createElement('iframe')

  // Set the prontableBody to hidden
  printableBody.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;')
  printableBody.setAttribute('id', 'objectExporterPrintableBodyId')

  // Construct the document title
  printableBody.srcdoc = '<html></html>'

  // Append the printableBody to the current document
  document.getElementsByTagName('body')[0].appendChild(printableBody)

  // Get the printable elements
  const printableElements = document.getElementById('objectExporterPrintableBodyId')

  // Check when the printableBody is loaded successfully
  printableBody.onload = () => {
    // Detect the browser information
    const browser = detect()

    // Define a printable document
    let printableDocument = (printableElements.contentWindow || printableElements.contentDocument)

    // Check if there is document element
    if (printableDocument.document) printableDocument = printableDocument.document
    let printableDocumentContents = '<span style="' + documentTitleStyle + '">' + documentTitle + '</span><br>'
    printableDocumentContents += htmlTblCreater('pdf', headers, exportable, headerStyle, cellStyle, repeatHeader)
    printableDocument.body.innerHTML = printableDocumentContents

    // Assign style to the printable
    const style = document.createElement('style')
    style.innerHTML = ''
    printableDocument.head.appendChild(style)

    // Prepare the printable for the print
    printableElements.focus()

    // Check the if the browser is Edge or Internet Explorer
    if (browser.name === 'edge' || browser.name === 'ie') {
      printableElements.contentWindow.document.execCommand('print', false, null)
    } else {
      // All other browsers
      printableElements.contentWindow.print()
    }
  }
}
