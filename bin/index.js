<<<<<<< HEAD
#! /usr/bin/env -S node --no-warnings
import path from "node:path";
import {argv} from "node:process";
import createANewProject from "../src/createProject.js";
import failRequest from "../src/FailRequest.js";
import getVersion from "../src/getVersion.js";
import getHelp from "../src/help.js";
import initProject from "../src/initProject.js";

const args = argv.slice(2);
const cmd = args[0].toLocaleLowerCase()
const projectName = args[1] || "new-gasp-project"
const scriptId = args[2]

switch (cmd) {
  case "create" || "-c":
    console.log("Hello, je suis gaspi et je vais créer ton nouveau projet 😜");
    createANewProject(projectName.toLocaleLowerCase(), scriptId);
    break;
  case "init" || "-i":
    initProject();
    break;
  case "help" || "-h":
    getHelp();
    break;
  case "version" || "-v":
    getVersion();
    break;
  default:
    failRequest();
=======
#! /usr/bin/env node
const fs = require("fs");
const path = require("path");

const cmd = process.argv.slice(2);
const dir = cmd[0];
const projectName = cmd[1];
const scriptId = cmd[2];

switch (dir) {
  case "create" || "-c":
    console.log("On va créer un nouveau projet ;)");
    initProject(projectName.toLocaleLowerCase(), scriptId);
    break;
  case "help" || "-h":
    console.log(
      `Besoin d'aide ?\nPour créer un nouveau projet, tape :\n\tgasp create [project_name] [scriptId]`
    );
}

function initProject(projectName, scriptId) {
  createFolder(projectName);
  createFile(projectName, "package.json", createPackageJsonFile(projectName, scriptId))
  createFile(projectName, ".gitignore", createGitignoreFile())

  createFolder(`${projectName}/gas`)
  createFile(`${projectName}/gas`, "index.js", createIndexJsFile())

  console.log(
    `Ton projet ${projectName} est créé.\nTape 'cd ${projectName} && npm i'\nEnsuite, utilise la commande 'npm run clasp/clone' pour récupérer ton projet en local.
  `)

}

function createFolder(name) {
  if (!fs.existsSync(name)) {
    fs.mkdir(name, (err) => {
      if (err) {
        console.error("Error: impossible to create the folder");
        return;
      }  
      return true    
    });
  }
}

function createFile(dir,name, content) {
  fs.writeFile(`${dir}/${name}`, content, (err) => {
    if (err) console.error(`Impossible de créer le fichier ${name}`);
  });
}

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

function createIndexJsFile() {
  return "function hello() {\n\tconsole.log('Hello World')\n}"
>>>>>>> master
}
