import * as fs from "node:fs/promises"

/**
 * Create a new folder
 *
 * @param {String} name - Name given to the new folder
 */
export async function createProjectFolder(projectName) {
  try {
    await fs.access(projectName, fs.constants.F_OK)
  } catch (e) {
    await fs.mkdir(projectName)
    console.log(`Création du projet ${projectName}`);
  }
}

/**
 *
 *
 * @param {*} dir
 * @param {*} name
 */
export async function createSubfolderDist(projectName) {
  const path = `${projectName}/dist`
  try {
    await fs.access(path, fs.constants.F_OK)
  } catch (e) {
    await fs.mkdir(path)
    console.log(`Création du dossier ${path}`);
  }
}

export async function createSubfolderSrc(projectName) {
  const path = `${projectName}/src`
  try {
    await fs.access(path, fs.constants.F_OK)
  } catch (e) {
    await fs.mkdir(path)
    console.log(`Création du dossier ${path}`);
  }
}

export async function createPackageJsonFile(projectName, scriptId) {
  const path = `${projectName}/package.json`

  try {
    await fs.access(projectName, fs.constants.F_OK)
    await fs.writeFile(path, await newPackageJsonFile(projectName, scriptId))
    console.log("Création du package.json");
  } catch (e) {
    console.error("Impossible de créer le fichier package.json")
  }
}

export async function createIndexjsFile(projectName) {
  try {
    await fs.access(projectName, fs.constants.F_OK)
    await fs.writeFile(`${projectName}/src/index.js`, await newIndexJsFile())
    console.log("Création du fichier ./src/index.js");
  } catch (e) {
    console.error("Impossible de créer le fichier index.js")
  }
}

/**
 *
 *
 * @export
 * @param {*} projectName
 */
export async function createGitignoreFile(projectName) {
  try {
    await fs.access(projectName, fs.constants.F_OK)
    await fs.writeFile(`${projectName}/.gitignore`, await newGitignoreFile())
    console.log("Création du fichier .gitignore");
  } catch (e) {
    console.error("Impossible de créer le fichier .gitignore")
  }
}

/**
 *
 *
 * @export
 * @param {*} projectName
 */
export async function createReadmeFile(projectName) {
  try {
    await fs.access(projectName, fs.constants.F_OK)
    await fs.writeFile(`${projectName}/readme.md`, await newReadmeFile(projectName))
    console.log("Création du fichier readme.md");
  } catch (e) {
    console.error("Impossible de créer le fichier readme.md")
  }
}

/**
 * Create the personnalized package.json file
 *
 * @param {string} projectName
 * @param {string} [devScriptId="[id]"] - The GAS project Id or a default string
 * @return {string} The personnalized content push to it
 */
async function newPackageJsonFile(projectName, devScriptId = "[id]") {
  return `{
      "name": "${projectName}",
      "version": "1.0.0",
      "description": "",
      "source": "src/index.js",
      "main": "dist/Code.js",
      "scripts": {
        "build": "parcel build",
        "build/dev": "npx clasp-env --folder dist --scriptId ${devScriptId} && cd dist && clasp push -w",
        "build/qa": "npx clasp-env --folder dist --scriptId [id] && cd dist && clasp push -w",
        "build/prod": "npx clasp-env --folder dist --scriptId [id] && cd dist && clasp push -w",
        "clasp/pull": "cd dist && clasp pull",
        "clasp/clone": "clasp clone '${devScriptId}' --rootDir ./dist"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@types/google-apps-script": "^1.0.55",
        "parcel": "latest"
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
  
}

/**
 * Create the index.js file content
 *
 * @return {String} A default hello world function
 */
async function newIndexJsFile() {
  return "function hello() {\n\tLogger.log('Hello World')\n}";
}

/**
 * Create the gitignore file content
 *
 * @return {String} A minimum value needed to create it
 */
async function newGitignoreFile() {
  return "node_modules\n**/.clasp.json\n";
}

/**
 *
 *
 * @param {*} projectName
 * @return {*} 
 */
async function newReadmeFile(projectName) {
  return (
    `# ${projectName}\n[![gasp](https://img.shields.io/badge/build%20with-gasp-blue)](https://github.com/m1ckc3b/gasp-cli)
    
    `
  )
}