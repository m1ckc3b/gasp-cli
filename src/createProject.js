import afterInit from "./afterInit.js";
import { createProjectFolder, createSubfolder, createPackageJsonFile, createIndexjsFile, createGitignoreFile } from "./utils.js";


/**
 * Create a new gas project
 *
 * @param {*} projectName - Name given to the project.
 * @return void
 */
export default async function createANewProject(projectName, scriptId) {
  try {
   await createProjectFolder(projectName)
   await createSubfolder(projectName)
   await createPackageJsonFile(projectName, scriptId)
   await createIndexjsFile(projectName)
   await createGitignoreFile(projectName)
   await afterInit(projectName)
  } catch (e) {
    console.error(`Impossible de créer le nouveau projet ${projectName} : `+e.message);
  }
}
