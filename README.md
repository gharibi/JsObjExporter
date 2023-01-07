# :dizzy: JavaScript Object to csv, xls, pdf, doc and DOM to html generator :dizzy:

[![Gitter chat](https://badges.gitter.im/gharibi/JsObjectExporter.png)](https://gitter.im/JsObjectExporter/community)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/npm/v/object-exporter.svg)](https://www.npmjs.com/package/object-exporter) [![Downloads/week](https://img.shields.io/npm/dw/object-exporter.svg)](https://www.npmjs.com/package/object-exporter) [![install size](https://packagephobia.now.sh/badge?p=object-exporter)](https://packagephobia.now.sh/result?p=object-exporter)

A little JavaScript plugin to generate PDF, XLS, CSV and DOC from JavaScript Object or DOM element only from the frontend!

## Demo

Please navigate to the following demo to test this library: [Demo Page](http://gharibi.github.io/JsObjExporter/examples/example.html)

## Installation

You can download the latest version of ObjectExporter from the [GitHub releases](https://github.com/gharibi/JsObjExporter/releases/latest).


## Configuration

In order use this library, follow the below steps:

1. Download the latest release of the library from [GitHub releases](https://github.com/gharibi/JsObjExporter/releases/latest).

2. Add the reference to the library in your `HTML` file:

```
<script src='<path>/objectexporter.min.js'></script>
```

2. Paste the following to your `JavaScript` code and provide the required values as mentioned below:

```
objectExporter({
    exportable: <object>, // The dataset to be exported form an array of objects, it can also be the DOM name for exporting DOM to html
    type: <string>, // The type of exportable e.g. csv, xls or pdf
    headers: [{
        name: <string>, // Name of the field without space to be used internally
        alias: <string>, // The name of field which will be visualized in the export
        flex: <number> // An integer value which shows the relative width of this columns in comparison to the other columns
    }],
    fileName: <string>, // The name of the file which will be exported without the extension.
    headerStyle: <cssStyle>, // The style which needs to be applied to the column headers
    cellStyle: <cssStyle>, // The style which needs to be applied to each of the cells excluding the headers
    sheetName: <string>, // The sheet name containing the exported exportables
    documentTitle: <string>, // The document title which should be added to the printable
    documentTitleStyle: <cssStyle>, // The style which can be applied to the document header
    repeatHeader: <boolean>, // The table header repeat parameter
    columnSeparator: <char|string> // The expected column column separator in csv export
})
```

### Aurguments description
ObjectExporter currently supports the below arguments:

| Argument | Data Type | Required? | Default Value | Acceptable Values | Description | Applicable to |
| - | - | - | - | - | - | - |
| exportable | array of objects | yes | no default | `[{header1: value 1, header2: value 2},..., {headern: value n, headern+1: value n+1}]` | This is the array containing all of the objects which need to be exported. | csv, xls, pdf and doc |
| type | string | yes | no default | csv, xls or pdf | This specifies the file type for generating the export. | csv, xls, pdf and doc |
| headers | array or array of objects (1) | yes | no default | `[{name: 'fieldName1', alias: 'fieldAlias1', flex: flex1}, {name: 'fieldName2', alias: 'fieldAlias2', flex: flex2}, ..., {name: 'fieldNamen', alias: 'fieldAliasn', flex: flexn}]` | This specifies the headers for the exportable. | csv, xls, pdf and doc |
| fileName | string | no | export | any acceptable string for the file name | This specifies the name for the export. | csv, xls, pdf and doc |
| headerStyle | string | no | font-size:16px; font-weight:bold; | CSS style | This specifies the style for the exported headers. | xls, pdf and doc |
| cellStyle | string | no | font-size:14px; | CSS style | This specifies the style for the exported cells. | xls, pdf and doc |
| sheetName | string | no | worksheet | any string | This specifies the sheet name for the excel file. | xls |
| documentTitle | string | no | test document title | any string | This specifies the exportable file title. | pdf and doc |
| documentTitleStyle | string | no | color:red; | any string | This specifies the style for the document title. | pdf and doc |
| repeatHeader | boolean | no | true | any string | This specifies the exportable header, whether it should be repeated accross various pages. | pdf and doc |
| columnSeparator | char/string | no | , | any string or character | This specifies the column separator in csv export | csv |

(1) In versions older than 3.3.0, `header` was defined as an array and not an array of objects. However from version 3.3.0, the library is backward-comptible, therefore array or array of objects, both are accepted.

## Contribution

Any contribution is always appreciated! :thumbsup: :thumbsup: :thumbsup:

In order to have this project installed in your development environment for the contribution purpose, follow the below steps:

1. Fork this repository.

2. Clone your forked repo. Then navigate to the downloaded folder and get the required packages for the library by:
```
npm install
```

3. Build the library locally by:
```
npm run build
```

4. Check `test.html` under the example folder to test the library:
```
npm install httpserver -g
httpserver
```

Then navigate to:
`http://localhost:8080/examples/example.html`

5. Now make your changes in the library.

6. Keep checking `example.html` after any changes and make sure the library is working fine. In case you add new features, feel free to add/modify tests:

7. Once you are done, check your code style by:
```
npm run test
```

In case there are issues, please resolve them before pushing the code.

8. Well done! now push your code and make a pull request. :rocket:

## License

ObjectExporter is available under the [MIT license](https://github.com/gharibi/JsObjExporter/blob/master/LICENSE).
