# (gasp) Google Apps Script Project CLI

Locally developping GAS projects more easily.

With Gasp command automatically create a new node.js project including package.json and gitignore files, a sub-folder called gas that'll content all scripts you gonna to write. In addition there are in the package.json file script commands to quickly deploy 3 types of project : dev, qa or prod.

```
npm install -g gasp-cli
gasp create [project-name] [script-id]
```