import { readFileSync, writeFileSync } from "node:fs";

const indexTypesPath = new URL("../dist/index.d.ts", import.meta.url);
const indexTypes = readFileSync(indexTypesPath, "utf8");

writeFileSync(
  indexTypesPath,
  indexTypes
    .split("\n")
    .filter((line) => !line.includes("./index.css"))
    .join("\n"),
);
