# JavaScript Object Exporter for exporting CSV or XLS

[![Build Status](https://api.travis-ci.org/gharibi/JsObjExporter.svg?branch=master)](https://travis-ci.org/gharibi/JsObjExporter) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/npm/v/object-exporter.svg)](https://www.npmjs.com/package/object-exporter)

A little JavaScript plugin to generate CSV and XLS files.


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
    cellStyle: 'cssStyle' // The style which needs to be applied to each of the cells excluding the headers
})
```

##### Setting up a DEV environment for contribution

In order to have this project installed as development environment, follow the below steps:

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
