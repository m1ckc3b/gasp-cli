import * as fs from "node:fs/promises"
import path from "node:path";

/**
 * Create a new folder
 *
 * @param {string} name - Name given to the new folder
 * @export void
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
 * Create a subfolder for apps script files
 *
 * @param {string} projectName - Name given to the root folder
 * @export void 
 */
export async function createSubfolder(projectName) {
  const dir = path.join(projectName, 'gas')
  try {
    await fs.access(dir, fs.constants.F_OK)
  } catch (e) {
    await fs.mkdir(dir)
    console.log(`Création du dossier ${dir}`);
  }
}

/**
 * Create a package.json file.
 *
 * @export void
 * @param {string} projectName - Name given to the root folder
 * @param {string} scriptId - Google Apps Script Id
 */
export async function createPackageJsonFile(projectName, scriptId) {
  const dir = path.join(projectName, 'package.json')

  try {
    await fs.access(projectName, fs.constants.F_OK)
    await fs.writeFile(dir, await newPackageJsonFile(projectName, scriptId))
    console.log("Création du package.json");
  } catch (e) {
    console.error("Impossible de créer le fichier package.json")
  }
}

/**
 * Create index.js file into gas subfolder
 *
 * @export void
 * @param {string} projectName - Name given to the root folder
 */
export async function createIndexjsFile(projectName) {
  try {
    await fs.access(projectName, fs.constants.F_OK)
    const dir = path.join(projectName, 'gas', 'index.js')
    await fs.writeFile(dir, await newIndexJsFile())
    console.log("Création du fichier ./gas/index.js");
  } catch (e) {
    console.error("Impossible de créer le fichier index.js")
  }
}

/**
 * Create a gitignore file.
 *
 * @export void
 * @param {string} projectName - Name given to the root folder
 */
export async function createGitignoreFile(projectName) {
  try {
    await fs.access(projectName, fs.constants.F_OK)
    const dir = path.join(projectName, '.gitignore')
    await fs.writeFile(dir, await newGitignoreFile())
    console.log("Création du fichier .gitignore");
  } catch (e) {
    console.error("Impossible de créer le fichier .gitignore")
  }
}

/**
 * Create a readme file
 *
 * @export void
 * @param {string} projectName - Name given to the root folder
 */
export async function createReadmeFile(projectName) {
  try {
    await fs.access(projectName, fs.constants.F_OK)
    const dir = path.join(projectName, 'readme.md')
    await fs.writeFile(dir, await newReadmeFile(projectName))
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
async function newIndexJsFile() {
  return "function hello() {\n\tconsole.log('Hello World')\n}";
}

/**
 * Create the gitignore file content
 *
 * @return {String} A minimum value needed to create it
 */
async function newGitignoreFile() {
  return "node_modules\n**/.clasp.json\n";
}




async function newReadmeFile(projectName) {
  return (
    `# ${projectName}\n[![gasp](https://img.shields.io/badge/build%20with-gasp-blue)](https://github.com/m1ckc3b/gasp-cli)
    
    `
  )
}