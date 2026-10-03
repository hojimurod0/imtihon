const THEORY_QUESTIONS = [
  {section:"1-bob",text:"Dart dasturlash tilini qaysi kompaniya yaratgan?",options:["Microsoft","Google","Apple","Meta"],answer:1},
  {section:"1-bob",text:"Dart dasturining asosiy bajarilish nuqtasi qaysi funksiya?",options:["start()","run()","main()","execute()"],answer:2},
  {section:"1-bob",text:"print() funksiyasi nima uchun ishlatiladi?",options:["Ekranga ma’lumot chiqarish uchun","Fayl yaratish uchun","Loopni to‘xtatish uchun","Variable o‘chirish uchun"],answer:0},

  {section:"2-bob",text:"var bilan e’lon qilingan o‘zgaruvchining qiymati haqida qaysi fikr to‘g‘ri?",options:["Faqat bir marta beriladi","Keyinchalik o‘zgartirilishi mumkin","Faqat null bo‘lishi mumkin","Faqat String saqlaydi"],answer:1},
  {section:"2-bob",text:"final ning asosiy xususiyati nima?",options:["Qiymati bir marta beriladi","Qiymati har safar avtomatik o‘zgaradi","Faqat compile-time qiymat oladi","Faqat butun son saqlaydi"],answer:0},
  {section:"2-bob",text:"const o‘zgaruvchisi uchun qaysi talab to‘g‘ri?",options:["Qiymati faqat runtime’da aniqlanishi kerak","Qiymati compile-time’da ma’lum bo‘lishi kerak","Faqat String bo‘lishi kerak","Qiymatini keyin o‘zgartirish mumkin"],answer:1},
  {section:"2-bob",text:"dynamic turining o‘ziga xosligi nimada?",options:["Turi dastur davomida o‘zgarishi mumkin","Faqat int saqlaydi","Har doim null bo‘ladi","Faqat compile-time’da ishlaydi"],answer:0},
  {section:"2-bob",text:"String interpolation uchun qaysi yozuv ishlatiladi?",options:["#name","$name","@name","&name"],answer:1},

  {section:"3-bob",text:"Dart’da 10 / 3 ifodasining natija turi qanday?",options:["int","bool","double","String"],answer:2},
  {section:"3-bob",text:"10 ~/ 3 ifodasining natijasi nima?",options:["3","3.333...","1","0"],answer:0},
  {section:"3-bob",text:"&& operatori qachon true qaytaradi?",options:["Kamida bittasi true bo‘lsa","Ikkala shart ham true bo‘lsa","Har doim","Ikkalasi false bo‘lsa"],answer:1},
  {section:"3-bob",text:"Natijani toping:",code:"print(2 + 3 * 4);",options:["20","14","24","9"],answer:1},

  {section:"4-bob",text:"if / else operatorining asosiy vazifasi nima?",options:["Takrorlashni tashkil qilish","Shartga qarab turli amalni bajarish","List yaratish","Funksiya qaytarish"],answer:1},
  {section:"4-bob",text:"else if zanjirida shartlar qanday tekshiriladi?",options:["Tasodifiy","Pastdan yuqoriga","Tepadagi shartdan pastga, birinchi mos kelgani bajariladi","Faqat oxirgi shart tekshiriladi"],answer:2},
  {section:"4-bob",text:"Bir o‘zgaruvchini bir nechta aniq qiymat bilan solishtirishda qaysi konstruksiya qulay?",options:["switch / case","for / in","try / catch","return"],answer:0},
  {section:"4-bob",text:"Dastur ishlaydi, ammo natija kutgandek chiqmaydi. Bu qaysi xato turiga yaqin?",options:["Syntax error","Logic error","Compile-time error","Typing error"],answer:1},

  {section:"5-bob",text:"for loop odatda qaysi holatda qulay?",options:["Takrorlashlar soni ma’lum bo‘lganda","Faqat exception ushlashda","Faqat String bilan ishlaganda","Faqat Map uchun"],answer:0},
  {section:"5-bob",text:"for-in loop nima uchun qulay?",options:["Collection elementlarini aylanib chiqish uchun","Faqat xatoni ushlash uchun","Faqat bitta amal uchun","Faqat if o‘rnida"],answer:0},
  {section:"5-bob",text:"while loopda shart qachon tekshiriladi?",options:["Tana bajarilgandan keyin","Tana bajarilishidan oldin","Faqat bir marta","Hech qachon"],answer:1},
  {section:"5-bob",text:"do-while loopning asosiy farqi nimada?",options:["Tana kamida bir marta bajariladi","Har doim ikki marta bajariladi","Shart umuman tekshirilmaydi","Faqat List bilan ishlaydi"],answer:0},
  {section:"5-bob",text:"break va continue orasidagi farq qaysi?",options:["Ikkalasi ham loopni to‘liq to‘xtatadi","break joriy qadamni, continue butun loopni tugatadi","break loopni to‘xtatadi, continue joriy aylanishni o‘tkazib yuboradi","Ular bir xil"],answer:2},

  {section:"6-bob",text:"Listning asosiy xususiyati qaysi?",options:["Tartibli va index orqali ishlaydi","Faqat unique qiymatlar saqlaydi","Faqat key/value juftligi","Indexga ega emas"],answer:0},
  {section:"6-bob",text:"Setning asosiy farqi nima?",options:["Elementlari takrorlanmaydi","Faqat String saqlaydi","Har bir elementga index beriladi","Faqat ikkita qiymat saqlaydi"],answer:0},
  {section:"6-bob",text:"Map qanday ma’lumot tuzilmasi?",options:["Faqat elementlar ro‘yxati","Key/value juftliklari to‘plami","Faqat unique sonlar","Faqat funksiyalar to‘plami"],answer:1},
  {section:"6-bob",text:"where() metodi nima qiladi?",options:["Elementlarni shart asosida tanlaydi","Barcha elementlarni o‘chiradi","Faqat birinchi elementni oladi","Map yaratadi"],answer:0},

  {section:"7-bob",text:"Funksiya nima uchun ishlatiladi?",options:["Kodni qayta ishlatish va vazifalarni bo‘lib yozish uchun","Faqat List yaratish uchun","Faqat exception uchun","Faqat o‘zgaruvchi e’lon qilish uchun"],answer:0},
  {section:"7-bob",text:"Parameter va return ning vazifasi qaysi?",options:["Parameter natija qaytaradi, return ma’lumot qabul qiladi","Parameter ma’lumot uzatadi, return natija qaytaradi","Ikkalasi ham faqat loop uchun","Ikkalasi ham exception ushlaydi"],answer:1},
  {section:"7-bob",text:"required kalit so‘zi nimani bildiradi?",options:["Named parameter majburiy ekanini","Parameter optional ekanini","Funksiya void ekanini","Funksiya arrow ekanini"],answer:0},
  {section:"7-bob",text:"Arrow function uchun qaysi yozuv ishlatiladi?",options:["->","=>","::","==>"],answer:1},

  {section:"8-bob",text:"String? city yozuvi nimani anglatadi?",options:["city faqat String bo‘la oladi va null bo‘la olmaydi","city null bo‘lishi mumkin","city faqat int bo‘ladi","city doim bo‘sh String"],answer:1},
  {section:"8-bob",text:"try-catch ning vazifasi nima?",options:["Loopni tezlashtirish","Exceptionlarni ushlab boshqarish","Listni saralash","Function yaratish"],answer:1},
  {section:"8-bob",text:"?? operatori qachon foydali?",options:["Qiymat null bo‘lsa standart qiymat berishda","Har doim qiymatni o‘chirishda","Loopni to‘xtatishda","Exception hosil qilishda"],answer:0}
];

// 3 ta alohida amaliy topshiriq. Kodni matn shaklida qabul qiladi va asosiy talablar bo‘yicha avtomatik tekshiradi.
const PRACTICAL_TASKS = [
  {
    title:"Arifmetik hisoblash",
    task:"Ikkita int o‘zgaruvchi yarating. Ularning yig‘indisini hisoblang va natijani ekranga chiqaring.",
    requirements:["int turidagi ikkita variable","+ operatori","print() orqali natija"],
    hint:"Masalan, a va b yaratib, print(a + b) kabi yechim yozishingiz mumkin.",
    checks: code => /\bint\s+\w+\s*=/.test(code) && (/\bint\s+\w+\s*=/.test(code.match(/\bint\s+\w+\s*=/g)?.slice(1)?.join(" ") || "") || (code.match(/\bint\s+\w+\s*=/g)||[]).length>=2) && /\+/.test(code) && /\bprint\s*\(/.test(code)
  },
  {
    title:"List va for-in",
    task:"5 ta elementdan iborat String List yarating va for-in yordamida barcha elementlarni ekranga chiqaring.",
    requirements:["List<String> yoki String List","kamida 5 ta element","for-in","print()"],
    hint:"List<String> names = [...]; ko‘rinishida boshlashingiz mumkin.",
    checks: code => /List\s*<\s*String\s*>|List\s*\(/.test(code) && (code.match(/['"][^'"]+['"]/g)||[]).length>=5 && /for\s*\(\s*(?:var|String)\s+\w+\s+in\s+/.test(code) && /\bprint\s*\(/.test(code)
  },
  {
    title:"Null Safety va ??",
    task:"Null bo‘lishi mumkin bo‘lgan String? variable yarating. ?? operatori yordamida null bo‘lsa 'Toshkent' qiymatini ishlating va natijani chiqaring.",
    requirements:["String? nullable variable","?? operatori","'Toshkent' standart qiymati","print()"],
    hint:"String? city; va print(city ?? 'Toshkent'); kabi mantiqdan foydalanishingiz mumkin.",
    checks: code => /String\s*\?/.test(code) && /\?\?/.test(code) && /Toshkent/i.test(code) && /\bprint\s*\(/.test(code)
  }
];

const PASS_PERCENT = 60;
let student = {group:"",firstName:"",lastName:""};
let theoryAnswers = [];
let practicalAnswers = [];
let theoryScore = 0;
let practicalScore = 0;
let activeReview = "theory";

const qs = s => document.querySelector(s);
const qsa = s => [...document.querySelectorAll(s)];

function escapeHtml(value){
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}
function showScreen(screen){
  qsa(".screen").forEach(x=>x.classList.remove("active"));
  screen.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function initials(a,b){return ((a.trim()[0]||"")+(b.trim()[0]||"")).toUpperCase()||"OO";}
function showWelcome(show=true){qs("#welcomeModal").classList.toggle("hidden",!show)}
function showStage(show=true){qs("#stageModal").classList.toggle("hidden",!show)}

function renderTheory(){
  qs("#theoryContainer").innerHTML = THEORY_QUESTIONS.map((q,i)=>`
    <article class="question-card">
      <div class="question-meta"><span class="q-number">${i+1}</span><span class="q-section">${escapeHtml(q.section)}</span></div>
      <div class="question-text">${escapeHtml(q.text)}</div>
      ${q.code?`<pre class="code">${escapeHtml(q.code)}</pre>`:""}
      <div class="options">
        ${q.options.map((op,j)=>`
          <label class="option">
            <input type="radio" name="theory${i}" value="${j}">
            <span class="option-letter">${String.fromCharCode(65+j)}</span>
            <span class="option-text">${escapeHtml(op)}</span>
          </label>`).join("")}
      </div>
    </article>`).join("");
  qsa('input[name^="theory"]').forEach(x=>x.addEventListener("change",updateTheoryProgress));
  updateTheoryProgress();
}

function updateTheoryProgress(){
  const answered = THEORY_QUESTIONS.filter((_,i)=>document.querySelector(`input[name="theory${i}"]:checked`)).length;
  qs("#theoryProgressText").textContent = `${answered} / 30`;
  qs("#theoryAnsweredText").textContent = `${answered} ta belgilangan`;
  qs("#theoryProgressBar").style.width = `${answered/30*100}%`;
}

function renderPractical(){
  qs("#practicalContainer").innerHTML = PRACTICAL_TASKS.map((t,i)=>`
    <article class="practical-card">
      <div class="practical-card-head">
        <div><div class="eyebrow">AMALIY TOPSHIRIQ ${i+1}</div><h3>${escapeHtml(t.title)}</h3></div>
        <div class="practical-num">1 BALL</div>
      </div>
      <p class="task-text">${escapeHtml(t.task)}</p>
      <div class="requirements"><strong>Talablar:</strong> ${t.requirements.map(escapeHtml).join(" • ")}</div>
      <div class="code-label">Sizning Dart kodingiz</div>
      <textarea class="code-input" id="practical${i}" placeholder="// Yechimingizni shu yerga yozing..."></textarea>
      <div class="hint-row">
        <span class="hint">VS Code’da tekshirib, so‘ng shu yerga joylashtiring.</span>
        <button class="example-toggle" type="button" data-index="${i}">Masala bo‘yicha yo‘l-yo‘riq</button>
      </div>
      <div class="example" id="example${i}">${escapeHtml(t.hint)}</div>
      <div id="feedback${i}" class="practical-feedback"></div>
    </article>
  `).join("");
  qsa(".example-toggle").forEach(btn=>btn.addEventListener("click",()=>{
    qs(`#example${btn.dataset.index}`).classList.toggle("visible");
  }));
}

function collectTheoryAnswers(){
  return THEORY_QUESTIONS.map((_,i)=>{
    const r=document.querySelector(`input[name="theory${i}"]:checked`);
    return r?Number(r.value):null;
  });
}

function collectPracticalAnswers(){
  return PRACTICAL_TASKS.map((_,i)=>qs(`#practical${i}`).value.trim());
}

function evaluatePractical(code,i){
  if(!code) return false;
  return PRACTICAL_TASKS[i].checks(code);
}

qs("#welcomeStart").addEventListener("click",()=>showWelcome(false));
qs("#welcomeClose").addEventListener("click",()=>showWelcome(false));

qs("#studentForm").addEventListener("submit",e=>{
  e.preventDefault();
  student={
    group:qs("#groupInput").value.trim(),
    firstName:qs("#firstNameInput").value.trim(),
    lastName:qs("#lastNameInput").value.trim()
  };
  const name=`${student.firstName} ${student.lastName}`;
  qs("#studentNameDisplay").textContent=name;
  qs("#studentGroupDisplay").textContent=student.group;
  qs("#studentInitials").textContent=initials(student.firstName,student.lastName);
  qs("#practicalStudentName").textContent=name;
  qs("#practicalStudentGroup").textContent=student.group;
  qs("#practicalInitials").textContent=initials(student.firstName,student.lastName);
  renderTheory();
  qs("#stageBadge").textContent="1 • 30 TEST";
  showScreen(qs("#theoryScreen"));
});

qs("#theoryForm").addEventListener("submit",e=>{
  e.preventDefault();
  theoryAnswers=collectTheoryAnswers();
  const unanswered=theoryAnswers.filter(x=>x===null).length;
  if(unanswered){
    const ok=confirm(`${unanswered} ta nazariy savolga javob berilmagan.\n\nBo‘sh savollar noto‘g‘ri hisoblanadi. 3 ta amaliy topshiriqqa o‘tishni xohlaysizmi?`);
    if(!ok) return;
  }
  theoryScore=theoryAnswers.reduce((s,a,i)=>s+(a===THEORY_QUESTIONS[i].answer?1:0),0);
  renderPractical();
  qs("#stageBadge").textContent="2 • AMALIY";
  showStage(true);
});

qs("#stageStart").addEventListener("click",()=>{
  showStage(false);
  showScreen(qs("#practicalScreen"));
});

qs("#practicalForm").addEventListener("submit",e=>{
  e.preventDefault();
  practicalAnswers=collectPracticalAnswers();
  let unchecked=0;
  practicalAnswers.forEach((code,i)=>{
    const good=evaluatePractical(code,i);
    const box=qs(`#feedback${i}`);
    box.className=`practical-feedback ${good?"good":"bad"}`;
    box.textContent=good?"✓ Asosiy talablar bajarilgan deb topildi.":"• Talablar to‘liq aniqlanmadi. Kodni qayta tekshirib, zarur qismlarni kiriting.";
    if(!good) unchecked++;
  });
  if(unchecked){
    const ok=confirm(`${unchecked} ta amaliy topshiriq talablar bo‘yicha to‘liq bajarilgani aniqlanmadi.\n\nNatijani baribir yakunlaymizmi?`);
    if(!ok) return;
  }
  practicalScore=practicalAnswers.reduce((s,c,i)=>s+(evaluatePractical(c,i)?1:0),0);
  renderResult();
  qs("#stageBadge").textContent="3 • NATIJA";
  showScreen(qs("#resultScreen"));
});

function renderResult(){
  const total=33;
  const score=theoryScore+practicalScore;
  const percent=Number((score/total*100).toFixed(1));
  const passed=percent>=PASS_PERCENT;

  qs("#resultHero").className=`result-hero ${passed?"passed":"failed"}`;
  qs("#resultIcon").textContent=passed?"✓":"×";
  qs("#resultEyebrow").textContent=passed?"NATIJA • TABRIKLAYMIZ":"NATIJA • IMTIHON YAKUNLANDI";
  qs("#resultStatus").textContent=passed?"IMTIHONdan O‘TDI":"IMTIHONdan O‘TMADI — FAILED";
  qs("#resultMessage").textContent=passed
    ? `Siz ${percent}% natija bilan 60% o‘tish mezonidan muvaffaqiyatli o‘tdingiz.`
    : `Siz ${percent}% natija oldingiz. Imtihondan o‘tish uchun kamida 60% kerak.`;

  qs("#scoreNumber").textContent=`${score} / ${total}`;
  qs("#scorePercent").textContent=`${percent}%`;
  qs("#resultStudent").textContent=`${student.firstName} ${student.lastName}`;
  qs("#resultGroup").textContent=student.group;
  qs("#theoryScoreResult").textContent=`${theoryScore} / 30`;
  qs("#practicalScoreResult").textContent=`${practicalScore} / 3`;
  qs("#correctCount").textContent=score;
  qs("#thresholdProgress").style.width=`${Math.min(percent,100)}%`;
  qs("#thresholdState").textContent=passed?"✓ O‘TDI":"× O‘TMADI";
  qs("#thresholdState").style.color=passed?"#15803d":"#b91c1c";
  showReview("theory");
}

function theoryReviewHtml(){
  return THEORY_QUESTIONS.map((q,i)=>{
    const ua=theoryAnswers[i], good=ua===q.answer;
    const user=ua===null?"Javob berilmagan":q.options[ua], correct=q.options[q.answer];
    return `<div class="review-item ${good?"correct":"incorrect"}">
      <div class="review-top"><div class="review-question">${i+1}. ${escapeHtml(q.text)}</div><div class="review-status">${good?"TO‘G‘RI":"NOTO‘G‘RI"}</div></div>
      <div class="review-answer">Sizning javobingiz: <strong>${escapeHtml(user)}</strong>${!good?` • To‘g‘ri javob: <strong>${escapeHtml(correct)}</strong>`:""}</div>
    </div>`;
  }).join("");
}
function practicalReviewHtml(){
  return PRACTICAL_TASKS.map((t,i)=>{
    const good=evaluatePractical(practicalAnswers[i],i);
    return `<div class="review-item ${good?"correct":"incorrect"}">
      <div class="review-top"><div class="review-question">${i+1}. ${escapeHtml(t.title)}</div><div class="review-status">${good?"BAJARILDI":"BAJARILMADI"}</div></div>
      <div class="review-answer">Holat: <strong>${good?"Talablar bajarilgan":"Talablar to‘liq aniqlanmadi"}</strong></div>
    </div>`;
  }).join("");
}
function showReview(kind){
  activeReview=kind;
  qs("#reviewTheoryTab").classList.toggle("active",kind==="theory");
  qs("#reviewPracticalTab").classList.toggle("active",kind==="practical");
  qs("#reviewContainer").innerHTML=kind==="theory"?theoryReviewHtml():practicalReviewHtml();
}
qs("#reviewTheoryTab").addEventListener("click",()=>showReview("theory"));
qs("#reviewPracticalTab").addEventListener("click",()=>showReview("practical"));

qs("#restartBtn").addEventListener("click",()=>{
  student={group:"",firstName:"",lastName:""}; theoryAnswers=[]; practicalAnswers=[]; theoryScore=0; practicalScore=0;
  qs("#studentForm").reset(); qs("#theoryForm").reset(); qs("#practicalForm").reset();
  showWelcome(true); showScreen(qs("#startScreen")); qs("#stageBadge").textContent="30 TEST";
});
qs("#printBtn").addEventListener("click",()=>window.print());

// First opening: professional welcome modal.
showWelcome(true);
