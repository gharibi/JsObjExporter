const placeholder = {
  /**
   * Method to generate the frame for opening the print/export dialog.
   * @param  {object} params parameters which will are provided at the API level.
   * @param  {string} body the body of the element which needs to be exported.
  */
  generateFrame: (params, body) => {
    const printFrame = document.createElement('iframe')
    printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;')
    printFrame.setAttribute('id', 'jsObjExporterFrameId')
    printFrame.srcdoc = '</head><body>' + body + '</body></html>'
    return printFrame
  }
}

// Export the module
export default placeholder
