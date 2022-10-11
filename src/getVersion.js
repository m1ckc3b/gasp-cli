const packageJson = await import("../package.json", {
  assert: { type: "json" }
})

export default function getVersion() {
  console.log(`${packageJson.default.name}@${packageJson.default.version}`);
}
