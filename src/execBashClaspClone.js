import { exec } from "node:child_process";

export default async function execBashClaspClone(path) {
  await exec(`cd "${path}" && npm run clasp/clone `, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(stdout)
  });
}
