import placeholder from './placeholder'
const { detect } = require('detect-browser')

export default {
  export: (params) => {
    // Detect the browser information
    const browser = detect()

    // Retrieve the DOM for the requested exportable
    const elementDom = document.getElementById(params.exportable)

    // Check if the DOM is available
    if (typeof elementDom === 'undefined') {
      throw new Error('There is no DOM object available for the requested id.')
    }

    // Construct the exportable for the print
    const exportableFrame = placeholder.generateFrame(params, elementDom.innerHTML)

    // Cleanup the DOM from the exportable frame
    if (document.getElementById('jsObjExporterFrameId')) document.getElementById('jsObjExporterFrameId').remove()

    // Attach the exportable frame to the document body
    document.getElementsByTagName('body')[0].appendChild(exportableFrame)

    // Get the iframe element
    const iframeElement = document.getElementById('jsObjExporterFrameId')

    // Set the onload method
    exportableFrame.onload = () => {
      // Focus on the frame for priting
      iframeElement.focus()

      // Check the if the browser is Edge or Internet Explorer
      if (browser.name === 'edge' || browser.name === 'ie') {
        iframeElement.contentWindow.document.execCommand('print', false, null)
      } else {
        // All other browsers
        iframeElement.contentWindow.print()
      }
    }
  }
}
