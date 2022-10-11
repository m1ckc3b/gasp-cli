#! /usr/bin/env -S node --no-warnings
import path from "node:path";
import {argv} from "node:process";
import createANewProject from "../src/createProject.js";
import createANewProjectWithClaspClone from "../src/createProjectWithClaspClone.js";
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
    console.log("Hello, créons ton nouveau projet 😜");
    if (scriptId == "") {
      createANewProject(projectName.toLocaleLowerCase());
    } else {
      createANewProjectWithClaspClone(projectName.toLocaleLowerCase(), scriptId)
    }
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
    break
}