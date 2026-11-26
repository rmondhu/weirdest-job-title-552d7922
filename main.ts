// Entry for make.fun's "Weirdest Job Title: Blind Judge Showdown" bounty.
// Writes a single weird job title to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, standard library only. No network, no clock, fully deterministic.
//
// The title is embedded in this file: the program reads no other files, so
// it runs the same no matter what the grader's working directory is.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Chief Apologizer for Haunted Vending Machines";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = join(outputDir, "entry.txt");
mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, TITLE, "utf8");

// Read the file back and hold it to the competition gate: 1 to 60
// characters, not only white space. Exit 1 only if the write itself failed,
// so a bad write can never pass silently as a good run.
const written = readFileSync(entryPath, "utf8");
if (written.length < 1 || written.length > 60 || written.trim().length === 0) {
  console.error(`entry.txt failed the gate: ${written.length} characters`);
  process.exit(1);
}
