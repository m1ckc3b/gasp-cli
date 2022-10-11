import afterInit from "./afterInit.js";
import execBash from "./execBash.js";
import execBashClaspClone from "./execBashClaspClone.js";
import { createProjectFolder, createSubfolderDist, createSubfolderSrc, createPackageJsonFile, createIndexjsFile, createGitignoreFile, createReadmeFile } from "./utils.js";


/**
 * Create a new gas project
 *
 * @param {*} projectName - Name given to the project.
 * @return void
 */
export default async function createANewProjectWithClaspClone(projectName, scriptId) {
  try {
   await createProjectFolder(projectName)
   await createSubfolderDist(projectName)
   await createSubfolderSrc(projectName)
   await createPackageJsonFile(projectName, scriptId)
   await createIndexjsFile(projectName)
   await createGitignoreFile(projectName)
   await createReadmeFile(projectName)
   await execBash(projectName)
   await execBashClaspClone(projectName)
   await afterInit(projectName)
  } catch (e) {
    console.error(`Impossible de créer le nouveau projet ${projectName} : `+e.message);
  }
}
