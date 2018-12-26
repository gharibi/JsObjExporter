# :dizzy: JavaScript CSV and XLS generator :dizzy:

[![Build Status](https://api.travis-ci.org/gharibi/JsObjExporter.svg?branch=master)](https://travis-ci.org/gharibi/JsObjExporter) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/npm/v/object-exporter.svg)](https://www.npmjs.com/package/object-exporter) [![Downloads/week](https://img.shields.io/npm/dw/object-exporter.svg)](https://www.npmjs.com/package/object-exporter) [![install size](https://packagephobia.now.sh/badge?p=object-exporter)](https://packagephobia.now.sh/result?p=object-exporter)

A simple and straightforward javascript library for generating CSV and XLS out of objects.

## Example

Please use the following example to test this library: [JsObjectExporter Example Page](http://gharibi.github.io/JsObjExporter/examples/example.html)[![install size](https://packagephobia.now.sh/badge?p=object-exporter)](https://packagephobia.now.sh/result?p=object-exporter)

## Installation

You can download the latest version of ObjectExporter from the [GitHub releases](https://github.com/gharibi/JsObjExporter/releases/latest).


## Configuration

In order use this plugin, follow the below steps:

1. Download the plugin.

2. Add the reference to the plugin in your `HTML` file:

```
<script src='./dist/objectexporter.min.js'></script>
```

2. Add the following to your `JavaScript` code to print an object to CSV:

```
objectExporter({
    exportable: data, // The dataset in form an array of objects
    type: 'csv',
    headers: [header 1, header 2, ..., header n], // The name of the file which will be exported
    fileName: 'fileNameWithoutExtension' // The name of the file which will be exported
})
```

Accordingly, you can use the below `JavaScript` to print an object to XLS:
```
objectExporter({
    exportable: data, // The dataset in form an array of objects
    type: 'xls',
    headers: [header 1, header 2, ..., header n], // The column headers
    fileName: 'fileNameWithoutExtension', // The name of the file which will be exported
    headerStyle: 'cssStyle', // The style which needs to be applied to the column headers,
    cellStyle: 'cssStyle', // The style which needs to be applied to each of the cells excluding the headers
    sheetName: 'sheetNameForExportedFile' // The sheet name containing the exported exportables
})
```

### Aurguments description
ObjectExporter currently supports the below arguments:

| Argument | Data Type | Required? | Default Value | Acceptable Values | Description | Applicable to |
| - | - | - | - | - | - | - |
| exportable | array of objects | yes | no default | `[{col1: value 1, col2: value 2},..., {col n: value n, col n+1: value n+1}]` | This is the array containing all of the objects which need to be exported. | csv and xls |
| type | string | yes | no default | csv or xls | This specifies the file type for the export. | csv and xls |
| headers | array | no | no default | `[header 1, header 2, ..., header n]` | This specifies the file type for the export. | xls |
| fileName | string | no | export | any acceptable string for the file name | This specifies the name for the export. | csv and xls |
| headerStyle | string | no | font-size:16px; font-weight:bold; | CSS style | This specifies the style for the exported headers. | xls |
| cellStyle | string | no | font-size:14px; | CSS style | This specifies the style for the exported cells. | xls |
| sheetName | string | no | worksheet | any string | This specifies the sheet name for the excel file. | xls |

## Contribution

In order to have this project installed in development environment for the contribution purpose, follow the below steps:

1. Install the required packages by:
```
npm install
```

2. Build the plugin locally by:
```
npm run watch
```

3. Browse the test.html to make sure the plugin is working fine:
```
npm install httpserver -g
httpserver
```

Then in order to test the plugin, navigate to the following page:
`http://localhost:8080/test.html`

4. Make you changes.

5. Before pushing your code, make sure your code style is compatible:
```
npm run test
```

## License

ObjectExporter is available under the [MIT license](https://github.com/gharibi/JsObjExporter/blob/master/LICENSE).
