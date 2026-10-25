/* Maths Desk assessment extension — browser-only, no API keys. */
(()=>{
const KEY="maths-desk-assessment-v1";
const BANK=[
{id:"n1",topic:"Negative numbers",q:"Calculate −7 + 12",answer:5,hint:"Start at −7 and move 12 places right."},
{id:"a1",topic:"Expanding brackets",q:"Simplify 3(2x−4)+5(x+2). Enter the constant term only.",answer:-2,hint:"Multiply each number inside each bracket first."},
{id:"f1",topic:"Adding and subtracting fractions",q:"Calculate 1/2 + 1/4. Enter your answer as a fraction.",answer:"3/4",hint:"Use a common denominator."},
{id:"p1",topic:"Percentage increase and decrease",q:"What is 20% of 85?",answer:17,hint:"Find one fifth of 85."},
{id:"s1",topic:"Substitution into formulae",q:"If x=4, calculate 3x+2.",answer:14,hint:"Replace x with 4 before calculating."},
{id:"a2",topic:"Expanding brackets",q:"Simplify 2(x+3). Enter the constant term only.",answer:6,hint:"Multiply both terms inside the bracket by 2."},
{id:"n2",topic:"Negative numbers",q:"Calculate −8 − 5",answer:-13,hint:"Subtracting five moves left on a number line."}
];
let data;try{data=JSON.parse(localStorage.getItem(KEY)||'{"attempts":[],"baseline":false}')}catch{data={attempts:[],baseline:false}}
const persist=()=>localStorage.setItem(KEY,JSON.stringify(data));
const el=document.createElement("section");el.setAttribute("aria-label","Mathematics practice desk");
el.innerHTML='<h2>Mathematics practice desk</h2><p class="small">Practice with checked answers. Progress is saved only on this device.</p><div class="modes"><button class="chip" id="baseline-start">Start 5-question baseline</button><button class="chip" id="topic-practice">Practise selected topic</button></div><div class="memory"><div id="practice-question">Choose an assessment to begin.</div><label for="practice-answer">Your answer</label><input id="practice-answer" type="text" autocomplete="off" style="padding:10px;border-radius:8px;border:1px solid var(--line);font:inherit;max-width:300px"><div class="modes"><button class="chip" id="practice-submit">Check answer</button><button class="chip" id="practice-hint">Get a hint</button></div><p id="practice-feedback" role="status"></p></div><div class="memory"><h2>Learning evidence</h2><div id="practice-summary"></div><div class="modes"><button class="chip" id="practice-export">Export learning data</button><button class="chip" id="practice-reset">Reset assessment data</button></div></div>';
const anchor=document.querySelector('[aria-labelledby="mem-h"]');if(anchor)anchor.before(el);else document.querySelector(".wrap").append(el);
const $=id=>el.querySelector("#"+id);let queue=[],idx=0,hinted=false,baseline=false,wrongTries=0,pendingNext=false;
function selectedTopic(){return typeof topic==="string"?topic:null}
function begin(isBaseline){baseline=isBaseline;queue=isBaseline?BANK.slice(0,5):BANK.filter(q=>q.topic===selectedTopic());if(!queue.length){$("practice-question").textContent="No questions yet for this topic. Choose a different topic or try the baseline.";return}idx=0;show()}
function show(){hinted=false;wrongTries=0;pendingNext=false;$("practice-submit").textContent="Check answer";$("practice-answer").value="";$("practice-feedback").textContent="";$("practice-question").textContent=idx<queue.length?("Question "+(idx+1)+" of "+queue.length+": "+queue[idx].q):"Session completed.";summary()}
function normalize(s){s=String(s).trim().replace(/\s+/g,"").toLowerCase();if(/^[-+]?\d+\/[-+]?\d+$/.test(s)){let [a,b]=s.split("/").map(Number);return b?String(a/b):"invalid"}return s}
function check(){
 if(idx>=queue.length)return;
 if(pendingNext){pendingNext=false;idx++;if(idx===queue.length&&baseline){data.baseline=true;persist()}show();return}
 const q=queue[idx],a=$("practice-answer").value.trim();
 if(!a){$("practice-feedback").textContent="Enter an answer first.";return}
 const correct=normalize(a)===normalize(q.answer);
 if(!correct){
  wrongTries++;
  $("practice-feedback").textContent=wrongTries===1?"Not quite. Check your steps and try again, or ask for a hint.":q.hint+" Try again; the answer is not shown yet.";
  return
 }
 data.attempts.push({id:q.id,topic:q.topic,question:q.q,answer:a,correct:true,hinted,wrongTries,timestamp:new Date().toISOString(),misconception:wrongTries?"needed_retry":null});
 persist();summary();pendingNext=true;
 $("practice-feedback").textContent="Correct! "+(hinted||wrongTries?"Solved after support.":"Independent success.")+" Select Next question.";
 $("practice-submit").textContent="Next question";
}
function summary(){let rows=BANK.map(q=>q.topic).filter((v,i,a)=>a.indexOf(v)===i).map(t=>{let attempts=data.attempts.filter(a=>a.topic===t),ind=attempts.filter(a=>a.correct&&!a.hinted&&!a.wrongTries),days=new Set(ind.map(a=>a.timestamp.slice(0,10))).size;let distinct=new Set(ind.map(a=>a.id)).size;let status=!attempts.length?"Not started":distinct>=3&&days>=2?"Mastered":ind.length>=2?"Practising":"Learning";return t+": "+status+" ("+ind.length+" independent correct)"});$("practice-summary").textContent=(data.baseline?"Baseline completed. ":"Baseline not yet completed. ")+data.attempts.length+" attempts recorded. "+rows.join(" · ")}
$("baseline-start").onclick=()=>begin(true);$("topic-practice").onclick=()=>begin(false);$("practice-submit").onclick=check;$("practice-answer").onkeydown=e=>{if(e.key==="Enter")check()};$("practice-hint").onclick=()=>{if(idx<queue.length){hinted=true;$("practice-feedback").textContent="Hint: "+queue[idx].hint}};
$("practice-export").onclick=()=>{let blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="maths-desk-learning.json";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
$("practice-reset").onclick=()=>{if(confirm("Delete all assessment records on this device?")){data={attempts:[],baseline:false};persist();summary()}};
summary();

})();