# :dizzy: JavaScript Object to csv, xls, pdf, doc and DOM to html generator :dizzy:

[![Gitter chat](https://badges.gitter.im/gharibi/JsObjectExporter.png)](https://gitter.im/JsObjectExporter/community)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](...)
[![npm](https://img.shields.io/npm/v/object-exporter.svg)](https://www.npmjs.com/package/object-exporter)
[![Downloads/week](https://img.shields.io/npm/dw/object-exporter.svg)](https://www.npmjs.com/package/object-exporter)
[![install size](https://packagephobia.now.sh/badge?p=object-exporter)](https://packagephobia.now.sh/result?p=object-exporter)

A lightweight JavaScript plugin to generate **CSV, XLS, PDF, DOC**, or export a **DOM element to HTML**—all from the frontend!

## 🚀 Demo

Please navigate to the following demo to test this library: [Demo Page](http://gharibi.github.io/JsObjExporter/examples/example.html)

## 📦 Installation

You can download the latest version of ObjectExporter from the [GitHub releases](https://github.com/gharibi/JsObjExporter/releases/latest).


## ⚙️ Configuration

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

---

## 📑 Arguments Description

| Argument             | Type              | Required | Default       | Description                                                                 | Applicable To            |
|----------------------|-------------------|----------|---------------|-----------------------------------------------------------------------------|--------------------------|
| `exportable`         | Array / Selector  | ✅       | —             | Array of objects or DOM selector to export                                  | csv, xls, pdf, doc       |
| `type`               | String            | ✅       | —             | Export type: `'csv'`, `'xls'`, `'pdf'`, `'doc'`                             | All                      |
| `headers`            | Array             | ✅       | —             | Header mapping: name, alias, flex                                           | All                      |
| `fileName`           | String            | ❌       | `"export"`    | Output file name without extension                                          | All                      |
| `headerStyle`        | String (CSS)      | ❌       | —             | CSS styling for headers                                                     | xls, pdf, doc            |
| `cellStyle`          | String (CSS)      | ❌       | —             | CSS styling for content cells                                               | xls, pdf, doc            |
| `sheetName`          | String            | ❌       | `"worksheet"` | Sheet name for Excel                                                        | xls                      |
| `documentTitle`      | String            | ❌       | —             | Title for document output                                                   | pdf, doc                 |
| `documentTitleStyle` | String (CSS)      | ❌       | —             | CSS styling for document title                                              | pdf, doc                 |
| `repeatHeader`       | Boolean           | ❌       | `true`        | Whether table headers should repeat across pages                            | pdf, doc                 |
| `columnSeparator`    | String/Char       | ❌       | `","`         | Column separator for CSV export                                             | csv                      |

> ℹ️ In versions prior to `v3.3.0`, `headers` was a simple array. From `v3.3.0`, the object format is preferred but both are supported.
---

## 💡 Usage Examples

### Export to XLS

```js
objectExporter({
  exportable: [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
  ],
  type: 'xls',
  headers: [
    { name: 'name', alias: 'Name', flex: 1 },
    { name: 'age', alias: 'Age', flex: 1 }
  ],
  fileName: 'users'
});
```
### Export DOM to HTML

```js
objectExporter({
  exportable: '#myTable',
  type: 'doc',
  fileName: 'table-doc'
});
```

## 🌐 Browser Support

| Browser        | Supported |
|----------------|-----------|
| Chrome         | ✅        |
| Firefox        | ✅        |
| Edge           | ✅        |
| Safari         | ✅        |
| Internet Explorer 11 | ✅ (limited) |

## 🤝 Contribution

Any contribution is always appreciated! 👍

## Getting Started for Development

1. **Fork** this repository.
2. Clone your fork and install dependencies:

```bash
npm install
```

3. Build the library:

```bash
npm run build
```

4. Run the local server and test:

```bash
npm install -g httpserver
httpserver
```

Visit: [http://localhost:8080/examples/example.html](http://localhost:8080/examples/example.html)

5. Make your changes.
6. Run tests:

```bash
npm run test
```

7. Fix any issues and push your changes.
8. Submit a **pull request** 🚀


## 📄 License

This project is licensed under the [GNU General Public License v3.0](https://github.com/gharibi/JsObjExporter/blob/master/LICENSE).