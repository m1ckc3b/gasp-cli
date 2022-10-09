const { exit } = require('process')

function failRequest() {
  console.log("Désolé, cette commande n'existe pas");
  exit(1)
}

module.exports = {
  failRequest
}