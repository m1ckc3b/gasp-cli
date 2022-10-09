/**
 * Create a new folder
 *
 * @param {String} name - Name given to the new folder
 * @return {Boolean} return true if created
 */
function createFolder(name) {
  if (!fs.existsSync(name)) {
    fs.mkdir(name, (err) => {
      if (err) {
        console.error("Error: impossible to create the folder");
        return;
      }
      return true;
    });
  }
}

/**
 * Create a new file
 *
 * @param {String} dir - The parent directory where to create it
 * @param {String} name - The name given to it
 * @param {String} content - The content to push into it
 */
function createFile(dir, name, content) {
  fs.writeFile(`${dir}/${name}`, content, (err) => {
    if (err) console.error(`Impossible de créer le fichier ${name}`);
  });
}

/**
 * Create the personnalized package.json file
 *
 * @param {string} projectName
 * @param {string} [devScriptId="[id]"] - The GAS project Id or a default string
 * @return {string} The personnalized content push to it
 */
function createPackageJsonFile(projectName, devScriptId = "[id]") {
  return `{
      "name": "${projectName}",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "clasp/dev": "npx clasp-env --folder gas --scriptId ${devScriptId} && cd gas && clasp push -w",
        "clasp/qa": "npx clasp-env --folder gas --scriptId [id] && cd gas && clasp push -w",
        "clasp/prod": "npx clasp-env --folder gas --scriptId [id] && cd gas && clasp push -w",
        "clasp/pull": "cd gas && clasp pull",
        "clasp/clone": "clasp clone '${devScriptId}' --rootDir ./gas"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/google-apps-script": "^1.0.55"
      }
    }`;
}

/**
 *
 *
 * @param {*} projectName
 * @param {string} [devScriptId="[id]"]
 */
function updatePackageJsonFile(projectName, devScriptId = "[id]") {
  const name = `"name": "${projectName}",`
  const scripts = `"scripts": {
    "clasp/dev": "npx clasp-env --folder gas --scriptId ${devScriptId} && cd gas && clasp push -w",
    "clasp/qa": "npx clasp-env --folder gas --scriptId [id] && cd gas && clasp push -w",
    "clasp/prod": "npx clasp-env --folder gas --scriptId [id] && cd gas && clasp push -w",
    "clasp/pull": "cd gas && clasp pull",
    "clasp/clone": "clasp clone '${devScriptId}' --rootDir ./gas"
  },`
  const devDependencies = `"devDependencies": {
    "@types/google-apps-script": "^1.0.55"
  }`


}

/**
 * Create the index.js file content
 *
 * @return {String} A default hello world function
 */
function createIndexJsFile() {
  return "function hello() {\n\tconsole.log('Hello World')\n}";
}

/**
 * Create the gitignore file content
 *
 * @return {String} A minimum value needed to create it
 */
function createGitignoreFile() {
  return "node_modules\n**/.clasp.json\n";
}

module.exports = {
  createFolder,
  createFile,
  createPackageJsonFile,
  createIndexJsFile,
  createGitignoreFile,
};
