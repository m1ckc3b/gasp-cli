const {
  createFolder,
  createFile,
  createPackageJsonFile,
  createIndexJsFile,
  createGitignoreFile,
} = require("./utils");

/**
 * Create a new gas project
 *
 * @param {*} projectName - Name given to the project.
 * @return void
 */
function createANewProject(projectName, scriptId) {
  try {
    console.log("On va créer un nouveau projet ;)");
    createFolder(projectName);
    createFile(
      projectName,
      "package.json",
      createPackageJsonFile(projectName, scriptId)
    );
    createFile(projectName, ".gitignore", createGitignoreFile());

    createFolder(`${projectName}/gas`);
    createFile(`${projectName}/gas`, "index.js", createIndexJsFile());

    console.log(
      `Ton projet ${projectName} est créé.\nTape 'cd ${projectName} && npm i'\nEnsuite, utilise la commande 'npm run clasp/clone' pour récupérer ton projet en local.
  `
    );
  } catch (e) {
    console.error("Impossible de créer le nouveau projet " + projectName);
  }
}

module.exports = {
  createANewProject,
};
