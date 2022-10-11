const packageJson = await import("../package.json", {
  assert: { type: "json" }
})

function getVersion() {
  return {
    name: packageJson.default.name, 
    version: packageJson.default.version
  } 
}

getVersion()