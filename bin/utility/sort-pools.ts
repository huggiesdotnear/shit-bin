// bin/utility/sort-pools.ts
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
// =====================================
const INPUT_FILE = path.resolve("src/mainnet/POOLS.ts");
const OUTPUT_FILE = INPUT_FILE;
const mod = await import(pathToFileURL(INPUT_FILE).href);
// adjust to your actual export name
const MAINNET_POOLS = (mod as any).MAINNET_POOLS;
// =====================================
if (!MAINNET_POOLS) {
  throw new Error(
    `MAINNET_POOLS export not found in ${INPUT_FILE}. Exports: ${Object.keys(
      mod,
    ).join(", ")}`,
  );
}
// =====================================
// sort entries by value
const sortedEntries = Object.entries(MAINNET_POOLS).sort(
  ([_k1, v1], [_k2, v2]) => (v1 as number) - (v2 as number),
);
// =====================================
// generate TS code
const lines: string[] = [];
lines.push("// =====================================");
lines.push("// THIS FILE IS AUTO SORTED WITH A SCRIPT");
lines.push("// THIS FILE CONTAINS POOLS WITH PAIR AND FEE INFO");
lines.push("// DYOR BEFORE TRADING THROUGH ANY POOL");
lines.push("// _NULL added to pools i am discontinuing or");
lines.push("// have no liquidity");
lines.push("// =====================================");
lines.push("// POOLS");
lines.push("export const MAINNET_POOLS = {");
for (const [key, value] of sortedEntries) {
  lines.push(`  ${key}: ${value},`);
}
lines.push("} as const;");
lines.push("// =====================================");
lines.push(""); // trailing newline
// =====================================
fs.writeFileSync(OUTPUT_FILE, lines.join("\n"), "utf8");
console.log(`Sorted MAINNET_POOLS written to ${OUTPUT_FILE}`);
