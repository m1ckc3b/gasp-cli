#! /usr/bin/env node
const fs = require("fs");
const path = require("path");
const { createANewProject } = require("../src/createProject");
const { failRequest } = require("../src/FailRequest");
const { getHelp } = require("../src/help");
const { initProject } = require("../src/initProject");

const cmd = process.argv.slice(2);
const dir = cmd[0];
const projectName = cmd[1]
const scriptId = cmd[2];

switch (dir) {
  case "create" || "-c":
    createANewProject(projectName.toLocaleLowerCase(), scriptId)
    break;
  case "init" || "-i":
    initProject()
    break
  case "help" || "-h":
    getHelp()
    break
  default:
    failRequest()

}
