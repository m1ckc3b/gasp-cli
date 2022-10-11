

export default async function afterInit(projectName) {
  console.log(
    `\n\nTon projet ${projectName} est créé.\nTape 'cd ${projectName} && npm i'\nEnsuite, utilise la commande 'npm run clasp/clone' pour récupérer ton projet en local.
  \n\n`)
}