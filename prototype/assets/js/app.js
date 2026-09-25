const phrases=[
{c:"Sapaan",id:"Selamat pagi.",en:"Good morning.",p:"Gud mor-ning."},
{c:"Sapaan",id:"Apa kabar?",en:"How are you?",p:"Hau ar yu?"},
{c:"Sapaan",id:"Terima kasih.",en:"Thank you.",p:"Thengk yu."},
{c:"Perkenalan",id:"Siapa nama Anda?",en:"What is your name?",p:"Wat is yor neim?"},
{c:"Perkenalan",id:"Anda berasal dari mana?",en:"Where are you from?",p:"Wer ar yu from?"},
{c:"Transportasi",id:"Anda ingin pergi ke mana?",en:"Where would you like to go?",p:"Wer wud yu laik tu gou?"},
{c:"Transportasi",id:"Saya ingin pergi ke bandara.",en:"I want to go to the airport.",p:"Ai wont tu gou tu dhi er-port."},
{c:"Arah & Lokasi",id:"Belok kiri di sini.",en:"Turn left here.",p:"Tern left hir."},
{c:"Hotel",id:"Apakah Anda punya reservasi?",en:"Do you have a reservation?",p:"Du yu hev e re-zer-vei-shen?"},
{c:"Restoran",id:"Anda ingin pesan apa?",en:"What would you like to order?",p:"Wat wud yu laik tu or-der?"},
{c:"Belanja",id:"Berapa harganya?",en:"How much is it?",p:"Hau mach is it?"},
{c:"Darurat",id:"Apakah Anda butuh bantuan?",en:"Do you need help?",p:"Du yu niid help?"},
{c:"Sehari-hari",id:"Tunggu sebentar.",en:"Please wait a moment.",p:"Plis weit e mou-ment."}
];
let source="id", current=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function norm(s){return s.toLowerCase().replace(/[?.!,]/g,"").trim()}
function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function findPhrase(q){return phrases.find(x=>norm(source==="id"?x.id:x.en)===norm(q))||phrases.find(x=>norm(source==="id"?x.id:x.en).includes(norm(q)))}
function showResult(x){current=x;$("#result").classList.remove("hidden");$("#targetLabel").textContent=source==="id"?"English":"Bahasa Indonesia";$("#translatedText").textContent=source==="id"?x.en:x.id;$("#pronBox").classList.toggle("hidden",source==="en");$("#pronunciation").textContent=x.p;$("#matchBadge").textContent="Frasa terverifikasi lokal"}
function translate(){const q=$("#sourceText").value.trim();if(!q)return toast("Tulis kalimat terlebih dahulu.");const x=findPhrase(q);if(x)return showResult(x);current=null;$("#result").classList.remove("hidden");$("#targetLabel").textContent=source==="id"?"English":"Bahasa Indonesia";$("#translatedText").textContent="Kalimat ini belum tersedia pada prototype lokal.";$("#pronBox").classList.add("hidden");$("#matchBadge").textContent="Provider online belum diaktifkan"}
function speak(text){if(!("speechSynthesis"in window))return toast("Audio tidak didukung perangkat ini.");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";speechSynthesis.speak(u)}
function setSource(v){source=v;$$(".lang").forEach((b,i)=>b.classList.toggle("active",(v==="id"&&i===0)||(v==="en"&&i===1)));$("#sourceText").placeholder=v==="id"?"Contoh: Saya ingin pergi ke bandara.":"Example: Where are you from?";$("#result").classList.add("hidden")}
function renderCategories(){const cats=["Semua",...new Set(phrases.map(x=>x.c))];$("#categoryChips").innerHTML=cats.map((x,i)=>`<button class="chip ${i?"":"active"}" data-cat="${x}">${x}</button>`).join("");renderPhrases("Semua");$$(".chip").forEach(b=>b.onclick=()=>{$$(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderPhrases(b.dataset.cat)})}
function renderPhrases(cat){const a=cat==="Semua"?phrases:phrases.filter(x=>x.c===cat);$("#phraseGrid").innerHTML=a.map((x,i)=>`<article class="phrase" data-id="${phrases.indexOf(x)}"><strong>${x.en}</strong><small>${x.p}</small><p>${x.id}</p></article>`).join("");$$(".phrase").forEach(e=>e.onclick=()=>{setSource("id");$("#sourceText").value=phrases[e.dataset.id].id;showResult(phrases[e.dataset.id]);scrollTo({top:160,behavior:"smooth"})})}
function favorites(){return JSON.parse(localStorage.getItem("bicarago:favorites")||"[]")}
function renderFavorites(){const a=favorites();$("#favoriteList").innerHTML=a.length?a.map(x=>`<article class="list-item"><strong>${x.en}</strong><small>${x.p}</small><div>${x.id}</div></article>`).join(""):'<div class="card"><p>Belum ada favorit. Simpan kalimat dari halaman Beranda.</p></div>'}
function renderConversation(){$("#conversationList").innerHTML=phrases.slice(0,9).map((x,i)=>`<article class="list-item" data-talk="${i}"><strong>${x.en}</strong><small>${x.p}</small><div>${x.id}</div></article>`).join("");$$("[data-talk]").forEach(e=>e.onclick=()=>speak(phrases[e.dataset.talk].en))}
function route(){const id=location.hash.slice(1)||"home";$$(".page").forEach(x=>x.classList.toggle("active",x.id===id));$$(".bottom-nav a").forEach(x=>x.classList.toggle("active",x.getAttribute("href")==="#"+id));if(id==="favorites")renderFavorites()}
$("#translateBtn").onclick=translate;$("#clearBtn").onclick=()=>{$("#sourceText").value="";$("#result").classList.add("hidden")};$("#swapBtn").onclick=()=>setSource(source==="id"?"en":"id");$$(".lang").forEach(b=>b.onclick=()=>setSource(b.dataset.source));$("#speakBtn").onclick=()=>current&&speak(current.en);$("#copyBtn").onclick=async()=>{if(!current)return;await navigator.clipboard.writeText(source==="id"?current.en:current.id);toast("Tersalin")};$("#favoriteBtn").onclick=()=>{if(!current)return;const a=favorites();if(!a.some(x=>x.en===current.en)){a.push(current);localStorage.setItem("bicarago:favorites",JSON.stringify(a));toast("Disimpan ke Favorit")}else toast("Sudah ada di Favorit")};
$("#themeBtn").onclick=()=>{const d=document.documentElement;d.dataset.theme=d.dataset.theme==="dark"?"light":"dark"};
$("#micBtn").onclick=()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return toast("Speech input belum didukung browser ini.");const r=new SR();r.lang=source==="id"?"id-ID":"en-US";r.onresult=e=>{$("#sourceText").value=e.results[0][0].transcript;translate()};r.start()};
$("#practiceBtn").onclick=()=>{const x=phrases[Math.floor(Math.random()*phrases.length)],box=$("#practice");box.classList.remove("hidden");box.innerHTML=`<small>Apa arti kalimat ini?</small><h2>${x.en}</h2><p>Cara baca: <strong>${x.p}</strong></p><button class="secondary" id="answer">Lihat jawaban</button><p id="ans" class="hidden"><strong>${x.id}</strong></p>`;$("#answer").onclick=()=>$("#ans").classList.remove("hidden")};
addEventListener("hashchange",route);renderCategories();renderConversation();route();