// SPDX-License-Identifier: MIT
// One-Liner Marathon — a single original one-line comedy joke, written to
// /output/entry.txt. The joke is 106 characters, inside the 1–280 limit.
// Deterministic: no clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I asked my AI assistant to lie to my boss for me. It refused — then billed me for the ethics consultation.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
