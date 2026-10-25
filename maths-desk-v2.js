/* Maths Desk V2 — evidence-driven school and competition practice. No paid APIs. */
(()=>{
"use strict";
const BANK=[{"id":"s01","track":"school","skill":"Integers","level":1,"prompt":"Calculate −9 + 14","answer":"5","hint1":"−9 plus 9 reaches zero.","hint2":"Five further steps give the answer.","common":"-5","misconception":"sign_direction"},{"id":"s02","track":"school","skill":"Integers","level":2,"prompt":"Calculate −7 − 8","answer":"-15","hint1":"Begin at negative seven.","hint2":"Subtracting moves left.","common":"1","misconception":"subtraction_direction"},{"id":"s03","track":"school","skill":"Fractions","level":1,"prompt":"Calculate 1/3 + 1/6 (fraction)","answer":"1/2","hint1":"Convert thirds to sixths.","hint2":"Two sixths plus one sixth makes three sixths.","common":"2/9","misconception":"added_denominators"},{"id":"s04","track":"school","skill":"Fractions","level":2,"prompt":"Calculate 3/4 − 1/8 (fraction)","answer":"5/8","hint1":"Change quarters to eighths.","hint2":"Six eighths minus one eighth.","common":"2/4","misconception":"denominator_mismatch"},{"id":"s05","track":"school","skill":"Percentages","level":1,"prompt":"What is 15% of 200?","answer":"30","hint1":"Find ten percent and five percent.","hint2":"Add the two amounts.","common":"15","misconception":"percent_of_number"},{"id":"s06","track":"school","skill":"Percentages","level":2,"prompt":"A £80 price increases by 25%. What is the new price?","answer":"100","hint1":"Find one quarter of eighty.","hint2":"Add the increase to the original.","common":"20","misconception":"increase_vs_total"},{"id":"s07","track":"school","skill":"Algebra","level":1,"prompt":"Simplify 4x + 3x. Enter the coefficient.","answer":"7","hint1":"Collect like terms.","hint2":"Add four and three.","common":"12","misconception":"multiplied_coefficients"},{"id":"s08","track":"school","skill":"Algebra","level":2,"prompt":"Simplify 3(2x−4)+5(x+2). Enter the constant term.","answer":"-2","hint1":"Find constants after expanding.","hint2":"Combine negative twelve and positive ten.","common":"22","misconception":"negative_distribution"},{"id":"s09","track":"school","skill":"Algebra","level":2,"prompt":"Solve 3x + 5 = 20.","answer":"5","hint1":"Subtract five from both sides.","hint2":"Then divide by three.","common":"15","misconception":"inverse_operations"},{"id":"s10","track":"school","skill":"Algebra","level":3,"prompt":"Solve 2(x+4)=18.","answer":"5","hint1":"Divide both sides by two.","hint2":"Then subtract four.","common":"7","misconception":"bracket_equation"},{"id":"s11","track":"school","skill":"Ratio","level":1,"prompt":"Share 36 in the ratio 1:2. What is the larger share?","answer":"24","hint1":"Count the total parts.","hint2":"Two of the three parts form the larger share.","common":"18","misconception":"ratio_parts"},{"id":"s12","track":"school","skill":"Ratio","level":2,"prompt":"3 notebooks cost $12. What do 5 notebooks cost?","answer":"20","hint1":"Find the unit price.","hint2":"Multiply it by five.","common":"60","misconception":"unit_rate"},{"id":"s13","track":"school","skill":"Geometry","level":1,"prompt":"A triangle has angles 40° and 65°. Find the third angle.","answer":"75","hint1":"Angles in a triangle total 180°.","hint2":"Subtract the two known angles.","common":"105","misconception":"angle_sum"},{"id":"s14","track":"school","skill":"Geometry","level":2,"prompt":"A rectangle is 8 cm by 5 cm. What is its area in cm²?","answer":"40","hint1":"Area is length times width.","hint2":"Multiply eight by five.","common":"26","misconception":"perimeter_vs_area"},{"id":"s15","track":"school","skill":"Sequences","level":1,"prompt":"Find the next term: 3, 7, 11, 15, ...","answer":"19","hint1":"What is the difference each time?","hint2":"Add the same difference to fifteen.","common":"18","misconception":"sequence_difference"},{"id":"s16","track":"school","skill":"Probability","level":2,"prompt":"A bag has 2 red and 3 blue balls. Probability of red? (fraction)","answer":"2/5","hint1":"Count all balls first.","hint2":"Favourable outcomes divided by total.","common":"2/3","misconception":"probability_denominator"},{"id":"s17","track":"school","skill":"Data","level":2,"prompt":"Find the mean of 5, 7, 8, 12.","answer":"8","hint1":"Find the total.","hint2":"Divide by the number of values.","common":"32","misconception":"mean_not_sum"},{"id":"s18","track":"school","skill":"Algebra","level":3,"prompt":"Simplify 5x−2(x−3). Enter the constant term.","answer":"6","hint1":"Careful: minus two multiplies both terms.","hint2":"What is negative two times negative three?","common":"-6","misconception":"negative_distribution"},{"id":"c01","track":"competition","skill":"Number sense","level":1,"prompt":"What is the units digit of 7×8×9?","answer":"4","hint1":"Only the last digit matters.","hint2":"First multiply seven and eight.","common":"7","misconception":"units_digit"},{"id":"c02","track":"competition","skill":"Patterns","level":1,"prompt":"The sequence is 2, 5, 10, 17, 26. What comes next?","answer":"37","hint1":"Look at successive differences.","hint2":"The differences grow by two.","common":"35","misconception":"pattern_differences"},{"id":"c03","track":"competition","skill":"Counting","level":1,"prompt":"How many two-digit numbers can you form using 1, 2 and 3 without repeating a digit?","answer":"6","hint1":"Pick a tens digit first.","hint2":"Count the choices for ones after that.","common":"9","misconception":"repetition_count"},{"id":"c04","track":"competition","skill":"Logic","level":2,"prompt":"Three consecutive integers add to 48. What is the middle integer?","answer":"16","hint1":"The middle equals the average.","hint2":"Divide the total by three.","common":"15","misconception":"consecutive_average"},{"id":"c05","track":"competition","skill":"Fractions","level":2,"prompt":"A tank is 1/3 full. Adding 20 litres makes it 1/2 full. What is its capacity in litres?","answer":"120","hint1":"The change is one sixth of the tank.","hint2":"One sixth equals twenty litres.","common":"60","misconception":"fraction_change"},{"id":"c06","track":"competition","skill":"Geometry","level":2,"prompt":"The perimeter of a square equals the perimeter of a 6 by 10 rectangle. What is the square side length?","answer":"8","hint1":"Find the rectangle perimeter first.","hint2":"Divide its perimeter by four.","common":"16","misconception":"perimeter_vs_area"},{"id":"c07","track":"competition","skill":"Counting","level":2,"prompt":"How many different 3-letter arrangements are there of A, B and C using each once?","answer":"6","hint1":"Choose a first letter, then a second.","hint2":"Multiply three, two and one.","common":"9","misconception":"permutation"},{"id":"c08","track":"competition","skill":"Reasoning","level":2,"prompt":"If 5 machines make 5 toys in 5 minutes, how many minutes do 20 machines need to make 20 toys?","answer":"5","hint1":"Think about what one machine produces.","hint2":"Each machine works simultaneously.","common":"20","misconception":"rate_parallel"},{"id":"c09","track":"competition","skill":"Number theory","level":2,"prompt":"What is the smallest positive integer divisible by both 6 and 8?","answer":"24","hint1":"Find the least common multiple.","hint2":"List multiples of eight until one is divisible by six.","common":"48","misconception":"lcm"},{"id":"c10","track":"competition","skill":"Logic","level":3,"prompt":"A number is doubled, then 7 added, giving 31. What is the original number?","answer":"12","hint1":"Reverse the operations.","hint2":"Subtract seven then divide by two.","common":"19","misconception":"reverse_operations"},{"id":"c11","track":"competition","skill":"Probability","level":3,"prompt":"A fair coin is flipped twice. How many outcomes have exactly one head?","answer":"2","hint1":"List HH, HT, TH, TT.","hint2":"Count those with one H.","common":"1","misconception":"outcome_count"},{"id":"c12","track":"competition","skill":"Patterns","level":3,"prompt":"How many handshakes happen when 6 people each shake hands once with every other person?","answer":"15","hint1":"Each of six people meets five others.","hint2":"Every handshake has been counted twice.","common":"30","misconception":"double_counting"},{"id":"c13","track":"competition","skill":"Geometry","level":3,"prompt":"How many diagonals does a regular hexagon have?","answer":"9","hint1":"Count pairs of vertices.","hint2":"Subtract the six sides from all vertex pairs.","common":"6","misconception":"diagonals"},{"id":"c14","track":"competition","skill":"Fractions","level":3,"prompt":"A number is increased by 20%, then decreased by 20%. Starting at 100, what is the result?","answer":"96","hint1":"The second percentage uses a new base.","hint2":"First find 120, then eighty percent of that.","common":"100","misconception":"percent_base"},{"id":"c15","track":"competition","skill":"Counting","level":3,"prompt":"How many integers from 1 through 100 are multiples of 6?","answer":"16","hint1":"Count the positive multiples of six.","hint2":"Find the greatest multiple not exceeding one hundred.","common":"17","misconception":"multiples_boundary"},{"id":"c16","track":"competition","skill":"Reasoning","level":3,"prompt":"An average of 5 numbers is 12. Four sum to 43. What is the fifth number?","answer":"17","hint1":"Find the total sum of five numbers.","hint2":"Subtract forty-three.","common":"12","misconception":"mean_not_sum"}];
const KEY="maths-desk-v2";
const days=(n)=>new Date(Date.now()+n*86400000).toISOString().slice(0,10);
const today=()=>new Date().toISOString().slice(0,10);
function load(){try{const d=JSON.parse(localStorage.getItem(KEY)||"null");if(d&&Array.isArray(d.attempts))return d}catch{}return {version:2,attempts:[],sessions:[]}}
let data=load(),session=null,items=[],position=0,hinted=false,wrong=0,seconds=0,ticker=null,nextPending=false;
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(data));return true}catch{return false}};
const style=document.createElement("style");
style.textContent=".v2-panel{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px;display:flex;flex-direction:column;gap:12px}.v2-row{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.v2-row label{display:flex;gap:6px;align-items:center}.v2-row select,.v2-row input{padding:10px;border:1px solid var(--line);border-radius:8px;background:var(--card);color:var(--ink);font:inherit}.v2-note{font-size:.9rem;color:var(--muted)}.v2-stat{border:1px solid var(--line);padding:10px;border-radius:8px;flex:1;min-width:120px}.v2-stat strong{display:block;font-size:1.4rem}.v2-good{color:var(--done)}.v2-alert{border-left:3px solid var(--saffron);padding-left:10px}.v2-panel button:disabled{opacity:.45;cursor:not-allowed}";
document.head.append(style);
const root=document.createElement("section");root.setAttribute("aria-label","Maths Desk V2 learning engine");
root.innerHTML='<h2>Maths Desk V2 — Learn · Reason · Compete</h2><p class="v2-note">Personalized school and competition practice, misconception feedback and spaced revision. No LLM calls or voice credits required.</p><div class="v2-panel"><div class="v2-row"><label>Track <select id="v2-track"><option value="school">School Success</option><option value="competition">Competition</option></select></label><label>Mode <select id="v2-mode"><option value="practice">Adaptive practice</option><option value="diagnostic">Unseen diagnostic</option><option value="review">Due revisions</option><option value="timed">Timed challenge</option></select></label><label>Skill <select id="v2-skill"><option value="">All skills</option></select></label></div><div class="v2-row"><button class="chip" id="v2-start">Start session</button><span class="v2-note" id="v2-count"></span></div><div id="v2-question" class="v2-panel" hidden><div class="v2-row"><strong id="v2-title"></strong><span class="v2-note" id="v2-time"></span></div><p id="v2-prompt"></p><label for="v2-answer">Your answer (a number or fraction)</label><input type="text" id="v2-answer" autocomplete="off" inputmode="decimal"/><div class="v2-row"><button class="chip" id="v2-check">Check answer</button><button class="chip" id="v2-hint">Hint</button><button class="chip" id="v2-skip">Skip & reveal</button></div><p id="v2-feedback" role="status" aria-live="polite"></p></div></div><div class="v2-panel"><h2>Learning evidence</h2><div class="v2-row" id="v2-stats"></div><div id="v2-skills" class="v2-note"></div><div id="v2-recommendation" class="v2-alert"></div><div class="v2-row"><button class="chip" id="v2-export">Export progress</button><button class="chip" id="v2-reset">Reset V2 data</button></div><p class="v2-note">Local browser data only. Parent or teacher should review any inferred misconception. Marks and mastery are not predictions of school grades.</p></div>';
const anchor=document.querySelector('[aria-labelledby="mem-h"]');
if(anchor)anchor.before(root);else(document.querySelector(".wrap")||document.body).append(root);
const $=id=>root.querySelector("#"+id);
function canonical(s){
 s=String(s).trim().replace(/\s+/g,"").replace(/−/g,"-").toLowerCase();
 if(/^[-+]?\d+\/[-+]?\d+$/.test(s)){let [a,b]=s.split("/").map(Number);return b?String(a/b):"invalid"}
 if(/^[-+]?(?:\d+\.?\d*|\.\d+)$/.test(s))return String(Number(s));
 return s
}
function isCorrect(q,answer){return canonical(q.answer)===canonical(answer)}
function dueDate(q){
 let a=data.attempts.filter(x=>x.id===q.id).slice(-1)[0];
 return !a || a.reviewOn<=today()
}
function difficulty(q){
 const a=data.attempts.filter(x=>x.skill===q.skill).slice(-6);
 let independent=a.filter(x=>x.correct&&!x.hinted&&!x.retries).length;
 return a.length<2?2:independent>=4?3:independent<=1?1:2
}
function buildSession(){
 clearInterval(ticker);ticker=null;
 const track=$("v2-track").value,mode=$("v2-mode").value,skill=$("v2-skill").value;
 let pool=BANK.filter(q=>q.track===track&&(!skill||q.skill===skill));
 if(mode==="review")pool=pool.filter(dueDate);
 if(mode==="practice")pool.sort((a,b)=>Math.abs(a.level-difficulty(a))-Math.abs(b.level-difficulty(b))||Number(dueDate(b))-Number(dueDate(a)));
 else pool=pool.sort((a,b)=>a.id.localeCompare(b.id));
 if(mode==="diagnostic")pool=pool.filter(q=>!data.attempts.some(a=>a.id===q.id));
 items=pool.slice(0,mode==="diagnostic"?10:mode==="timed"?8:8);
 if(!items.length){$("v2-count").textContent=mode==="review"?"No revisions due in this selection.":"No unseen questions available. Try adaptive practice or another skill.";return}
 session={track,mode,started:new Date().toISOString(),completed:null,results:[]};
 position=0;seconds=0;show();
 if(mode==="timed"){ticker=setInterval(()=>{seconds++;$("v2-time").textContent="Time: "+Math.floor(seconds/60)+":"+String(seconds%60).padStart(2,"0")+" / 12:00";if(seconds>=720)finish()},1000)}
}
function show(){
 if(position>=items.length){finish();return}
 hinted=false;wrong=0;nextPending=false;
 let q=items[position];
 $("v2-question").hidden=false;$("v2-title").textContent="Question "+(position+1)+" / "+items.length+" · "+q.skill+" · Level "+q.level;
 $("v2-prompt").textContent=q.prompt;
 $("v2-answer").value="";$("v2-feedback").textContent="";
 $("v2-check").textContent="Check answer";$("v2-hint").disabled=false;$("v2-skip").disabled=false;
 $("v2-count").textContent="Track: "+session.track+" · Mode: "+session.mode;
 if(session.mode!=="timed")$("v2-time").textContent="";
 $("v2-answer").focus()
}
function diagnose(q,submitted){
 if(canonical(submitted)===canonical(q.common))return {code:q.misconception,confidence:"candidate"};
 return {code:"unclassified",confidence:"unknown"}
}
function record(q,submitted,correct,skipped){
 const category=correct?(wrong?"recovered_after_retry":hinted?"assisted_correct":"independent_correct"):"incorrect_or_skipped";
 const suspect=!correct?diagnose(q,submitted):wrong?{code:q.misconception,confidence:"low"}:null;
 const previous=data.attempts.filter(a=>a.id===q.id).slice(-1)[0];
 const count=previous&&previous.correct&&!previous.hinted&&!previous.retries?Math.min(3,(previous.streak||1)+1):1;
 const gap=correct?(hinted||wrong?1:[1,3,7][count-1]):1;
 let row={id:q.id,track:q.track,skill:q.skill,level:q.level,question:q.prompt,submitted,correct,hinted,retries:wrong,skipped,category,suspectedMisconception:suspect,at:new Date().toISOString(),reviewOn:days(gap),streak:correct&&!hinted&&!wrong?count:0};
 data.attempts.push(row);session.results.push(row);save();renderStats()
}
function check(){
 if(!session||position>=items.length)return;
 if(nextPending){position++;show();return}
 let q=items[position],a=$("v2-answer").value.trim();
 if(!a){$("v2-feedback").textContent="Enter an answer first.";return}
 if(!isCorrect(q,a)){
  wrong++;
  let label=diagnose(q,a);
  $("v2-feedback").textContent=wrong===1?"Not quite. Recheck your approach and try again.":q.hint1+" "+(label.code!=="unclassified"?"A possible issue is "+label.code.replace(/_/g," ")+".":"")+" Try again.";
  return
 }
 record(q,a,true,false);
 $("v2-feedback").textContent="Correct! "+(wrong||hinted?"This was solved with support; review is scheduled.":"Independent success. Review scheduled.")+" Select Next question.";
 nextPending=true;$("v2-check").textContent="Next question";
 $("v2-hint").disabled=true;$("v2-skip").disabled=true
}
function skip(){
 if(!session||position>=items.length||nextPending)return;
 let q=items[position];record(q,$("v2-answer").value.trim(),false,true);
 $("v2-feedback").textContent="Answer: "+q.answer+". "+q.hint2+" Select Next question.";
 nextPending=true;$("v2-check").textContent="Next question";
 $("v2-hint").disabled=true;$("v2-skip").disabled=true
}
function finish(){
 clearInterval(ticker);ticker=null;
 if(!session)return;
 const total=items.length;
 const scored=session.results.length;
 session.completed=new Date().toISOString();session.timeSeconds=seconds;session.total=total;
 data.sessions.push({...session,results:session.results.map(x=>({id:x.id,correct:x.correct,hinted:x.hinted,retries:x.retries}))});
 save();
 $("v2-question").hidden=true;
 $("v2-count").textContent="Session complete: "+session.results.filter(x=>x.correct).length+" correct of "+scored+" attempted ("+total+" questions).";
 session=null;renderStats()
}
function renderStats(){
 let a=data.attempts,ind=a.filter(x=>x.category==="independent_correct").length;
 let due=BANK.filter(dueDate).length;
 $("v2-stats").innerHTML="";
 for(const [name,n] of [["Attempts",a.length],["Independent",ind],["Review due",due],["Sessions",data.sessions.length]]){
  let e=document.createElement("div");e.className="v2-stat";let label=document.createElement("span");label.textContent=name;let strong=document.createElement("strong");strong.textContent=n;e.append(label,strong);$("v2-stats").append(e)
 }
 const skills=[...new Set(a.map(x=>x.skill))];
 $("v2-skills").textContent=skills.map(s=>{
  const z=a.filter(x=>x.skill===s),k=z.filter(x=>x.category==="independent_correct"),ids=new Set(k.map(x=>x.id)).size,dates=new Set(k.map(x=>x.at.slice(0,10))).size;
  const state=ids>=3&&dates>=2?"Evidence of mastery":k.length>=2?"Practising":"Learning";
  return s+": "+state+" ("+k.length+" independent successes, "+ids+" unique questions)"
 }).join(" · ")||"No attempts yet. Begin a diagnostic to establish a baseline.";
 const suspect=a.filter(x=>x.suspectedMisconception&&x.suspectedMisconception.code!=="unclassified");
 let counts={};for(let s of suspect)counts[s.suspectedMisconception.code]=(counts[s.suspectedMisconception.code]||0)+1;
 let ranked=Object.entries(counts).sort((x,y)=>y[1]-x[1]);
 $("v2-recommendation").textContent=ranked.length?"Potential weakness to investigate: "+ranked.slice(0,2).map(x=>x[0].replace(/_/g," ")+" ("+x[1]+" observations)").join(", ")+". Validate with the student's written working.":"Next step: Start a School or Competition diagnostic; later repeat with fresh questions to check retention."
}
function refreshSkills(){
 const track=$("v2-track").value;let select=$("v2-skill");
 const current=select.value;select.replaceChildren(new Option("All skills",""));
 for(const skill of [...new Set(BANK.filter(q=>q.track===track).map(q=>q.skill))].sort())select.add(new Option(skill,skill));
 if([...select.options].some(o=>o.value===current))select.value=current
}
$("v2-track").onchange=refreshSkills;
$("v2-start").onclick=buildSession;$("v2-check").onclick=check;
$("v2-hint").onclick=()=>{if(session&&position<items.length&&!nextPending){hinted=true;let q=items[position];$("v2-feedback").textContent="Hint: "+(wrong?q.hint2:q.hint1)}};
$("v2-skip").onclick=skip;
$("v2-answer").addEventListener("keydown",e=>{if(e.key==="Enter")check()});
$("v2-export").onclick=()=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="maths-desk-v2-progress.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
$("v2-reset").onclick=()=>{if(confirm("Delete all V2 learning records stored in this browser? (Existing V1 data is unaffected.)")){data={version:2,attempts:[],sessions:[]};save();renderStats()}};
refreshSkills();renderStats();
window.MathsDeskV2={questionCount:BANK.length,validate:isCorrect,canonical,bank:BANK.map(({id,track,skill,level,prompt,answer})=>({id,track,skill,level,prompt,answer}))};
})();