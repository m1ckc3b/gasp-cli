

export default async function afterInit(projectName) {
  console.log(
    `\n\nTon projet ${projectName} est maintenant créé et initialisé.\nTape 'cd ${projectName}'\nEnsuite, utilise la commande 'npm run clasp/clone' pour récupérer ton projet en local.
  \n\n`)
}