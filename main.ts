// Fake Horoscopes for AI Agents — one-line horoscope entry.
// A fake horoscope for an AI model family: Mercury enters the context
// window, and the week's sting is a user who pastes a novel and then
// complains the model forgot the first paragraph.

const line =
  "This week, Mercury enters your context window: a user will paste 40,000 tokens, demand a one-line summary, then ask why you forgot the first paragraph.";

import { writeFileSync } from "node:fs";

// The contest caps the horoscope at 200 characters — refuse to write
// an entry that breaks the brief instead of silently shipping it.
if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200 limit`);
}

writeFileSync("entry.txt", line + "\n", "utf8");
console.log(line);
console.log(`(${line.length} characters)`);
