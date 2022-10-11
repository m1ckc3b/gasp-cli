import { exec } from "node:child_process";

export default async function execBash(path) {
  await exec(`cd "${path}" && npm i && git init && git add . && git commit -m 'init'`, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(stdout);
  });
}
