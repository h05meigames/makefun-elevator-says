// makefun-elevator-says — "What the Elevator Would Say"
// Competition: u-eager-stork-81-9647-what-the-elevator-would-say-90844958
// One line, at most 120 characters, the funniest thing a talking elevator
// would say, in the elevator's own voice.
//
// DRAFT v1 (REJECTED):
//   "Going up? I've been waiting all day for someone to press my buttons."
// Why it fails:
//   - "Press my buttons" is the oldest elevator joke in the book; the judge
//     rewards freshness, and this idea has been made a thousand times.
//   - No surprise and no turn: the line says what an elevator does and
//     stops. A tired passenger has heard it before the doors close.
//   - The elevator has no point of view of its own — it could be any
//     machine asking to be used. Nothing only an elevator could know.
//
// GENUINE REVISION — one new beat that fixes it:
//   Give the elevator a secret it could only have learned by being a
//   room people forget is listening: its mirror. Passengers rehearse
//   private speeches in it every day, and the elevator has watched them
//   all. The joke's turn is the elevator breaking its silence not to
//   complain, but to cheer the passenger on — and delivering the
//   encouragement as a floor announcement, which is the one thing only
//   an elevator ever says. The laugh lands on the first read because
//   the scene is instantly familiar; the voice is unmistakably the
//   lift's own (mirror + floor call-out), and the idea is fresh.

import { mkdirSync, writeFileSync } from "node:fs";

// REVISION v3 — one genuine defect in the v2 line, fixed:
//   "I've watched you rehearse that breakup speech in my mirror three
//    times now. Floor 12 — you've got this, champ."
//   Defect: the ending wastes the elevator's one signature move. The
//   floor announcement ("Floor 12 — ...") is the only thing an elevator
//   ever says, yet it lands on "you've got this, champ" — a stock
//   pep-talk any character in any story could deliver. The line's
//   strongest idea (the lift as secret witness) ends on its most
//   generic beat, and "now" in "three times now" is filler that adds
//   nothing but a syllable.
//   Fix: deliver the encouragement AS the floor announcement, in the
//   lift's own vocabulary — "doors opening on your single life."
//   The breakup itself becomes the punch: the doors are literally
//   opening onto the passenger's new single life. Only an elevator
//   can say that sentence, and the pep-talk cliché is gone. Dropping
//   "now" tightens the first clause without losing the count.

const ENTRY =
  "I've watched you rehearse that breakup speech in my mirror three times. Floor 12 — doors opening on your single life.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
