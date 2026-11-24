// Vending Machine Pickup Line — make.fun entry
// Writes one pickup line, spoken by a vending machine to a passing human,
// to /output/entry.txt (1-200 chars, one line).

import { mkdirSync, writeFileSync } from "node:fs";

// Final: tightened "walk by" to "walk past"; the punch stays at the end —
// the stuck thing is not the chips, it is the machine itself.
const line =
  "Are you exact change? Because every time you walk past, something in me gets stuck, and for once it isn't the chips.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
