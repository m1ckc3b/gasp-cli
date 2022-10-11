import exit from "node:process"

export default function failRequest() {
  console.log("Désolé, cette commande n'existe pas");
  exit(1)
}