const PDFS = {
  "2016/17": { tasks: "assets/Abel_2016-2017_oppgaver.pdf", solutions: "assets/Abel_2016-2017_losninger.pdf" },
  "2017/18": { tasks: "assets/Abel_2017-2018_oppgaver.pdf", solutions: "assets/Abel_2017-2018_losninger.pdf" },
  "2018/19": { tasks: "assets/Abel_2018-2019_oppgaver.pdf", solutions: "assets/Abel_2018-2019_losninger.pdf" },
  "2019/20": { tasks: "assets/Abel_2019-2020_oppgaver.pdf", solutions: "assets/Abel_2019-2020_losninger.pdf" },
  "2020/21": { tasks: "assets/Abel_2020-2021_oppgaver.pdf", solutions: "assets/Abel_2020-2021_losninger.pdf" },
  "2021/22": { tasks: "assets/Abel_2021-2022_oppgaver.pdf", solutions: "assets/Abel_2021-2022_losninger.pdf" },
  "2022/23": { tasks: "assets/Abel_2022-2023_oppgaver.pdf", solutions: "assets/Abel_2022-2023_losninger.pdf" },
  "2023/24": { tasks: "assets/Abel_2023-2024_oppgaver.pdf", solutions: "assets/Abel_2023-2024_losninger.pdf" },
  "2024/25": { tasks: "assets/Abel_2024-2025_oppgaver.pdf", solutions: "assets/Abel_2024-2025_losninger.pdf" },
  "2025/26": { tasks: "assets/Abel_2025-2026_oppgaver.pdf", solutions: "assets/Abel_2025-2026_losninger.pdf" }
};

const weeks = [
  {
    number: 1, dates: "27. september–3. oktober", title: "Diagnose og tallteori", start: "2026-09-27", end: "2026-10-03",
    sessions: [
      { title: "Diagnosetest", duration: "100 min", text: "Ta hele 2017/18-settet under konkurranseregler. Registrer poeng, usikre oppgaver, tidsbruk og ukjente temaer.", tasks: [{year:"2017/18", label:"Hele settet"}] },
      { title: "Gjennomgang", duration: "60 min", text: "Sorter feilene i kunnskap, metodevalg, regnefeil, misforståelse og tidsbruk. Løs feiloppgavene på nytt uten å kopiere løsningen.", tasks: [{year:"2017/18", label:"Løsninger", solution:true}] },
      { title: "Delelighet og siste siffer", duration: "60 min", text: "Se etter primtallsfaktorer, tverrsum og perioder i siste siffer.", tasks: taskSet([["2019/20",2],["2019/20",11],["2021/22",14],["2022/23",4]]) },
      { title: "Divisorer og primtallsfaktorisering", duration: "60 min", text: "Skriv tallene som produkter av primtall før du teller eller sammenligner.", tasks: taskSet([["2019/20",15],["2021/22",13],["2022/23",16],["2022/23",20]]) }
    ]
  },
  {
    number: 2, dates: "4.–10. oktober", title: "Tallteori videre og algebra", start: "2026-10-04", end: "2026-10-10",
    sessions: [
      { title: "Heltall og modulo", duration: "60 min", text: "Arbeid med rester, heltallsløsninger og hvilke verdier som faktisk er mulige.", tasks: taskSet([["2019/20",6],["2019/20",8],["2021/22",18],["2017/18",19]]) },
      { title: "Algebraiske uttrykk", duration: "60 min", text: "Forenkle før du regner. Se etter konjugater, potensregler og nyttige omskrivninger.", tasks: taskSet([["2019/20",9],["2021/22",7],["2022/23",2],["2022/23",8]]) },
      { title: "Likninger og smart eliminering", duration: "60 min", text: "Legg sammen eller trekk fra likninger slik at de ukjente du ikke trenger forsvinner.", tasks: taskSet([["2017/18",5],["2017/18",6],["2021/22",4],["2022/23",9]]) },
      { title: "Repetisjonstest", duration: "60 min", text: "Velg tre tallteorioppgaver og tre algebraoppgaver du brukte lengst tid på. Løs dem uten hjelp.", tasks: [] }
    ]
  },
  {
    number: 3, dates: "11.–17. oktober", title: "Algebra, følger og mønstre", start: "2026-10-11", end: "2026-10-17",
    sessions: [
      { title: "Kvadratsetninger og identiteter", duration: "60 min", text: "Se etter uttrykk som kan kombineres uten at de ukjente må finnes hver for seg.", tasks: taskSet([["2019/20",13],["2019/20",16],["2019/20",18],["2021/22",17]]) },
      { title: "Ulikheter og moteksempler", duration: "60 min", text: "Prøv 0, 1, −1 og en brøk når et utsagn hevdes å være alltid sant.", tasks: taskSet([["2017/18",11],["2017/18",16],["2021/22",10],["2019/20",19]]) },
      { title: "Følger og perioder", duration: "60 min", text: "Regn ut de første leddene og let etter veksling, perioder eller en enkel rekursjon.", tasks: taskSet([["2017/18",17],["2021/22",9],["2021/22",18],["2022/23",13]]) },
      { title: "Blandet algebraøkt", duration: "64 min", text: "Velg åtte oppgaver fra uke 2 og 3. Bruk maksimalt åtte minutter på hver. Målet er fart og metodevalg.", tasks: [] }
    ]
  },
  {
    number: 4, dates: "18.–24. oktober", title: "Kombinatorikk og sannsynlighet", start: "2026-10-18", end: "2026-10-24",
    sessions: [
      { title: "Produktregelen og rekkefølger", duration: "60 min", text: "Avklar først om rekkefølgen teller, og hvilke valg som er uavhengige.", tasks: taskSet([["2019/20",1],["2021/22",1],["2022/23",10],["2017/18",9]]) },
      { title: "Kombinasjoner og tilfelleinndeling", duration: "60 min", text: "Del opp i tilfeller og kontroller at ingen muligheter telles to ganger.", tasks: taskSet([["2017/18",13],["2017/18",18],["2021/22",12],["2022/23",14]]) },
      { title: "Sannsynlighet", duration: "60 min", text: "Tell mulige og gunstige utfall. Bruk komplementet når «minst én» er lettere å telle motsatt vei.", tasks: taskSet([["2019/20",12],["2021/22",5],["2021/22",16],["2022/23",5]]) },
      { title: "Krevende opptelling", duration: "60 min", text: "Tegn, lag små tilfeller og se etter en rekursiv eller systematisk opptelling.", tasks: taskSet([["2017/18",4],["2019/20",5],["2021/22",8],["2021/22",19]]) }
    ]
  },
  {
    number: 5, dates: "25.–31. oktober", title: "Geometri og første prøvekonkurranse", start: "2026-10-25", end: "2026-10-31",
    sessions: [
      { title: "Pytagoras og areal", duration: "60 min", text: "Tegn tydelig, marker rette vinkler og del sammensatte figurer i enklere deler.", tasks: taskSet([["2017/18",3],["2019/20",10],["2022/23",1],["2022/23",12]]) },
      { title: "Sirkler og formlikhet", duration: "70 min", text: "Se etter radier, sektorer, like vinkler og arealforholdet k².", tasks: taskSet([["2019/20",3],["2019/20",17],["2021/22",2],["2021/22",15]]) },
      { title: "Mangekanter og koordinater", duration: "60 min", text: "Bruk vinkelsum, symmetri, avstand og trekantareal.", tasks: taskSet([["2017/18",10],["2017/18",12],["2021/22",20],["2022/23",15]]) },
      { title: "Første prøvekonkurranse", duration: "100 min", text: "Ta hele 2023/24-settet. Før poeng og marker oppgaver som kostet mer enn ti minutter.", tasks: [{year:"2023/24", label:"Hele settet"}] }
    ]
  },
  {
    number: 6, dates: "1.–7. november", title: "Reparasjon, anvendelser og andre prøve", start: "2026-11-01", end: "2026-11-07",
    sessions: [
      { title: "Gjennomgang av 2023/24", duration: "60 min", text: "Løs alle feil og blanke oppgaver på nytt. Finn det svakeste og nest svakeste hovedtemaet.", tasks: [{year:"2023/24", label:"Løsninger", solution:true}] },
      { title: "Fart, tid, paritet og logikk", duration: "70 min", text: "Bruk total strekning/total tid, relativ fart, paritet og moteksempler.", tasks: taskSet([["2017/18",2],["2017/18",15],["2019/20",4],["2022/23",7]]) },
      { title: "Andre prøvekonkurranse", duration: "100 min", text: "Ta hele 2024/25-settet. Mål: 60–65 poeng.", tasks: [{year:"2024/25", label:"Hele settet"}] },
      { title: "Gjennomgang og reparasjon", duration: "60 min", text: "Løs feiloppgavene på nytt og skriv nøkkelideen bak hver. Prioriter unødvendig tapte poeng.", tasks: [{year:"2024/25", label:"Løsninger", solution:true}] }
    ]
  },
  {
    number: 7, dates: "8.–11. november", title: "Generalprøve og rolig avslutning", start: "2026-11-08", end: "2026-11-11",
    sessions: [
      { title: "Generalprøve", duration: "100 min", text: "Ta hele 2025/26-settet. Gjennomfør omtrent på samme tidspunkt som konkurransen. Mål: 65 poeng eller mer.", tasks: [{year:"2025/26", label:"Hele settet"}] },
      { title: "Generalprøvens feil", duration: "60 min", text: "Gå gjennom feil, blanke svar, oppgaver over ti minutter og rekkefølgen du valgte.", tasks: [{year:"2025/26", label:"Løsninger", solution:true}] },
      { title: "Seks kjente oppgaver", duration: "50 min", text: "Løs én kjent oppgave fra hvert hovedområde. Ingen nye vanskelige oppgaver.", tasks: [] },
      { title: "Lett repetisjon", duration: "20–30 min", text: "Se gjennom feilloggen, repeter strategien og finn fram skrivesaker og linjal. Avslutt tidlig.", tasks: [] }
    ]
  }
];

function taskSet(rows) {
  return rows.map(([year, number]) => ({ year, number, label: `${year} · nr. ${number}` }));
}

const STORAGE_KEY = "abel-emilie-v1";
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
const state = { completed: saved.completed || {}, results: saved.results || {} };

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function taskLink(task) {
  const ref = PDFS[task.year];
  const href = task.solution ? ref.solutions : ref.tasks;
  return `<a class="task-link" href="${href}" target="_blank" rel="noopener" title="Åpne ${task.solution ? "løsninger" : "oppgaver"} ${task.year}">${task.label} ↗</a>`;
}

function renderWeeks() {
  const container = document.querySelector("#weeks");
  const today = new Date();
  today.setHours(0,0,0,0);
  container.innerHTML = weeks.map(week => {
    const current = today >= new Date(`${week.start}T00:00:00`) && today <= new Date(`${week.end}T23:59:59`);
    const completeCount = week.sessions.filter((_, index) => state.completed[`w${week.number}s${index+1}`]).length;
    return `<details class="week${current ? " current" : ""}" ${current || week.number === 1 ? "open" : ""} data-week="${week.number}">
      <summary>
        <span class="week-number">${week.number}</span>
        <span class="week-title"><strong>${week.title}</strong><span>${week.dates}</span></span>
        <span class="week-progress">${completeCount}/${week.sessions.length} økter</span>
      </summary>
      <div class="session-list">
        ${week.sessions.map((session, index) => {
          const id = `w${week.number}s${index+1}`;
          const checked = !!state.completed[id];
          return `<article class="session${checked ? " completed" : ""}">
            <input type="checkbox" id="${id}" data-session="${id}" ${checked ? "checked" : ""} aria-label="Marker økten som fullført">
            <div>
              <div class="session-head"><h3>Økt ${index+1} – ${session.title}</h3><span class="duration">${session.duration}</span></div>
              <p>${session.text}</p>
              ${session.tasks.length ? `<div class="task-list">${session.tasks.map(taskLink).join("")}</div>` : ""}
            </div>
          </article>`;
        }).join("")}
      </div>
    </details>`;
  }).join("");

  container.querySelectorAll("[data-session]").forEach(input => {
    input.addEventListener("change", event => {
      state.completed[event.target.dataset.session] = event.target.checked;
      persist();
      renderWeeks();
      updateProgress();
    });
  });
}

const tests = [
  { id: "diagnose", title: "Diagnose 2017/18" },
  { id: "test2324", title: "Prøve 2023/24" },
  { id: "test2425", title: "Prøve 2024/25" },
  { id: "test2526", title: "Generalprøve 2025/26" }
];

function renderResults() {
  const container = document.querySelector("#result-cards");
  container.innerHTML = tests.map(test => {
    const values = state.results[test.id] || {};
    const score = (Number(values.correct) || 0) * 5 + (Number(values.blank) || 0);
    return `<article class="result-card" data-result-card="${test.id}">
      <h3>${test.title}</h3>
      ${resultField(test.id, "correct", "Riktige", values.correct)}
      ${resultField(test.id, "wrong", "Feil", values.wrong)}
      ${resultField(test.id, "blank", "Blanke", values.blank)}
      ${resultField(test.id, "avoidable", "Unødvendige feil", values.avoidable)}
      ${resultField(test.id, "after", "Løst etterpå", values.after)}
      <div class="score-line"><span>Poeng</span><output>${score}</output></div>
    </article>`;
  }).join("");

  container.querySelectorAll("input[data-result]").forEach(input => {
    input.addEventListener("input", event => {
      const [testId, field] = event.target.dataset.result.split(":");
      state.results[testId] ||= {};
      state.results[testId][field] = event.target.value;
      persist();
      const values = state.results[testId];
      const score = (Number(values.correct) || 0) * 5 + (Number(values.blank) || 0);
      document.querySelector(`[data-result-card="${testId}"] output`).textContent = score;
    });
  });
}

function resultField(id, field, label, value = "") {
  return `<div class="field-row"><label for="${id}-${field}">${label}</label><input id="${id}-${field}" data-result="${id}:${field}" type="number" min="0" max="20" inputmode="numeric" value="${value}"></div>`;
}

function renderResources() {
  document.querySelector("#resource-grid").innerHTML = Object.entries(PDFS).reverse().map(([year, links]) => `
    <article class="resource-card">
      <h3>${year}</h3>
      <div class="resource-actions">
        <a href="${links.tasks}" target="_blank" rel="noopener">Oppgaver</a>
        <a class="secondary" href="${links.solutions}" target="_blank" rel="noopener">Løsninger</a>
      </div>
    </article>`).join("");
}

function updateProgress() {
  const total = weeks.reduce((sum, week) => sum + week.sessions.length, 0);
  const done = Object.values(state.completed).filter(Boolean).length;
  const percent = Math.round(done / total * 100);
  document.querySelector("#session-count").textContent = total;
  document.querySelector("#done-count").textContent = done;
  document.querySelector("#progress-percent").textContent = `${percent} %`;
  document.querySelector("#progress-bar").style.width = `${percent}%`;
  document.querySelector("#progress-label").textContent = percent === 100 ? "Planen er fullført" : percent >= 70 ? "God sluttspurt" : percent >= 30 ? "Godt i gang" : done ? "Fin start" : "Kom i gang";
}

function updateCountdown() {
  const now = new Date();
  const target = new Date("2026-11-12T00:00:00+01:00");
  const days = Math.max(0, Math.ceil((target - now) / 86400000));
  document.querySelector("#countdown").textContent = days === 1 ? "1 dag" : `${days} dager`;
  document.querySelector("#countdown-detail").textContent = days ? "12. november" : "Konkurransedagen er her";
}

document.querySelector("#expand-current").addEventListener("click", () => {
  const current = document.querySelector(".week.current") || document.querySelector(".week");
  current.open = true;
  current.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#reset-progress").addEventListener("click", () => {
  if (!confirm("Vil du nullstille alle avkryssinger og prøveresultater på denne enheten?")) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
});

function registerWebMcp() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const controller = new AbortController();
  const safeRegister = tool => Promise.resolve(context.registerTool(tool, { signal: controller.signal })).catch(() => {});
  safeRegister({
    name: "read_abel_training_progress",
    title: "Les treningsfremdrift",
    description: "Les fullførte økter og registrerte prøvepoeng i Abel-planen på denne enheten.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute() {
      const completed = Object.values(state.completed).filter(Boolean).length;
      return { completedSessions: completed, totalSessions: weeks.reduce((n,w)=>n+w.sessions.length,0), results: state.results };
    }
  });
  safeRegister({
    name: "set_abel_session_complete",
    title: "Oppdater Abel-økt",
    description: "Marker én navngitt økt som fullført eller ikke fullført og oppdater den synlige planen.",
    inputSchema: {
      type: "object",
      properties: { sessionId: { type: "string", pattern: "^w[1-7]s[1-4]$" }, completed: { type: "boolean" } },
      required: ["sessionId", "completed"], additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      if (!/^w[1-7]s[1-4]$/.test(input?.sessionId) || typeof input.completed !== "boolean") throw new Error("Ugyldig økt eller status");
      state.completed[input.sessionId] = input.completed;
      persist(); renderWeeks(); updateProgress();
      return { sessionId: input.sessionId, completed: input.completed };
    }
  });
}

renderWeeks();
renderResults();
renderResources();
updateProgress();
updateCountdown();
registerWebMcp();
