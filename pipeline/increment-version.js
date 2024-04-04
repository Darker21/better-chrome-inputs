import fs from "node:fs";
import path from "node:path";

const manifestPath = path.join("./../", "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const versionOverride = process.argv[2];
let incrementType = process.argv[3]; // "patch" for patch version increment

let newVersion = versionOverride;

if (!versionOverride) {
  let versionComponents = manifest.version
    .split(".")
    .map((num) => parseInt(num, 10));

  if (incrementType === "patch") {
    // Increment only the patch version
    versionComponents[2] += 1;
  } else {
    // Default behavior: Increment the last component (minor or patch)
    versionComponents[versionComponents.length - 1] += 1;
  }

  newVersion = versionComponents.join(".");
}

manifest.version = newVersion;

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log(`::set-output name=version::${newVersion}`);
