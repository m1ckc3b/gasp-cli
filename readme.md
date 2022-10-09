# (gasp) Google Apps Script Project CLI

Locally developping GAS projects more easily.

With Gasp command automatically create a new node.js project including package.json and gitignore files, a sub-folder called gas that'll content all scripts you gonna to write. In addition there are in the package.json file script commands to quickly deploy 3 types of project : dev, qa or prod.

```
npm install -g gasp-cli
gasp create [project-name] [script-id]
```
## How to get the script-id ?
To retrieve the id of a gas project, just go to https://script.google.com, open the project and in the project settings tab, click on the "copy" button just at below the id.

For more information about clasp command please check [the documentation](https://github.com/google/clasp#commands).

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)