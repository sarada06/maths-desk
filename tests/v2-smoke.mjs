import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
const js=readFileSync(new URL("../maths-desk-v2.js",import.meta.url),"utf8");
const html=readFileSync(new URL("../index.html",import.meta.url),"utf8");
const m=js.match(/const BANK=(\[[^\n]+\]);\nconst KEY=/);
assert.ok(m,"question bank embedded");
const bank=JSON.parse(m[1]);
assert.equal(bank.length,34,"34 curated questions");
assert.equal(bank.filter(q=>q.track==="school").length,18);
assert.equal(bank.filter(q=>q.track==="competition").length,16);
assert.equal(new Set(bank.map(q=>q.id)).size,bank.length,"unique question IDs");
for(const q of bank){
 assert.ok(["school","competition"].includes(q.track),q.id+" track");
 assert.ok([1,2,3].includes(q.level),q.id+" difficulty");
 for(const f of ["prompt","skill","answer","hint1","hint2","common","misconception"])assert.ok(String(q[f]||"").trim(),q.id+" "+f);
}
const expected={s01:"5",s03:"1/2",s06:"100",s08:"-2",s18:"6",c01:"4",c05:"120",c08:"5",c12:"15",c14:"96",c16:"17"};
for(const [id,answer] of Object.entries(expected))assert.equal(bank.find(q=>q.id===id)?.answer,answer,id+" reference answer");
assert.ok(html.includes('<script src="./maths-desk-v2.js"></script>'),"V2 integrated");
assert.ok(!html.includes('<script src="https://elevenlabs.io/convai-widget/index.js"'),"Voice loader is opt-in");
assert.ok(js.includes("reviewOn"),"Revision scheduling");
assert.ok(js.includes("suspectedMisconception"),"Misconception evidence");
assert.ok(js.includes("Timed challenge"),"Timed mode");
assert.ok(js.includes("maths-desk-v2-progress.json"),"Export");
console.log("Maths Desk V2 static smoke tests passed: "+bank.length+" verified question records.");
