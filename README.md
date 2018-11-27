# Print.js

[![Build Status](https://api.travis-ci.org/gharibi/CSV.js.svg?branch=master)](https://travis-ci.org/gharibi/CSV.js) [![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/) [![npm](https://img.shields.io/npm/v/csv-js.svg)](https://www.npmjs.com/package/csv-js)

Little JavaScript plugin to generate CSV files.


## Installation

You can download the latest version of CSV.js from the [GitHub releases](https://github.com/gharibi/CSV.js/releases/latest).


## Configuration

In order use this plugin, following steps have to be taken:

1. Add the reference to the plugin in your `HTML':

```
<script src='./dist/csvjs.min.js'></script>
```

2. Add the following `JavaScript` code to your code to print your object:

```
csvJS({
    exportable: data
})
```

Note: `data` must be an object which needs to be printed out.


##### Setting up a DEV environment

In order to have this project as a development environment, following steps have to be taken:
```
npm install
npm run watch
```

Also in order to test the code:

```
npm install httpserver -g
httpserver
```

Then in order to test the plugin, navigate to the following page:
`http://localhost:8080/test.html`


## License

CSV.js is available under the [MIT license](https://github.com/gharibi/CSV.js/blob/master/LICENSE).
