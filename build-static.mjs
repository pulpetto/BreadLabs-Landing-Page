import { copyFile, mkdir, rm } from "node:fs/promises";

const outputDirectory = new URL("./build/", import.meta.url);

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  copyFile(new URL("./index.html", import.meta.url), new URL("index.html", outputDirectory)),
  copyFile(
    new URL("./breadlabs.png", import.meta.url),
    new URL("breadlabs.png", outputDirectory),
  ),
]);
