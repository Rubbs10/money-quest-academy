/* Widget per le Basi e per il percorso Investitore di tutti i giorni */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* simulatore di interesse composto: restituisce valori annuali e versamenti */
  function sim(start, monthly, R, years, delay) {
    const m = Math.pow(1 + R, 1 / 12) - 1, s = (delay || 0) * 12;
    let v = (s === 0 ? start : 0), c = v;
    const val = [v], con = [c];
    for (let t = 0; t < years * 12; t++) {
      if (t === s && s > 0) { v += start; c += start; }
      if (t >= s) { v = v * (1 + m) + monthly; c += monthly; }
      if ((t + 1) % 12 === 0) { val.push(v); con.push(c); }
    }
    return { val, con };
  }
  MQ.sim = sim;
  const xl = (years) => { const a = [{ i: 0, t: 'Oggi' }]; const step = years > 30 ? 10 : (years > 12 ? 5 : (years > 6 ? 2 : 1)); for (let y = step; y < years; y += step) a.push({ i: y, t: y + 'a' }); a.push({ i: years, t: years + 'a' }); return a; };

  /* ---------------- macchina del tempo dell’inflazione ---------------- */
  W.inflation = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">La macchina del tempo dell’inflazione</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('price', 'Prezzo di una pizza oggi', 5, 30, 1, 10, 'eur')}
      ${MQ.slider('inf', 'Inflazione all’anno', 0, 10, 0.5, 3, 'pct')}
      ${MQ.slider('yrs', 'Anni nel futuro', 1, 40, 1, 20, 'yr')}
      ${MQ.slider('ret', 'Se i tuoi soldi fossero investiti al (all’anno)', 0, 10, 0.5, 5, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pizza', 'Prezzo della pizza allora', 'hi')}${MQ.stat('cash', '1.000 € in contanti valgono (a prezzi di oggi)', 'bad')}${MQ.stat('inv', '1.000 € investiti valgono (a prezzi di oggi)', 'good')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Soldi sotto il materasso', 'var(--trd)'], ['Investiti', 'var(--inv)']])}
    </div></div>
    <p class="note">Valore reale = ciò che i tuoi soldi possono davvero comprare, misurato a prezzi di oggi. Prova con il 6% di inflazione e lo 0% di rendimento per capire il danno.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const i = v.inf / 100, r = v.ret / 100;
      const cash = [], inv = [];
      for (let y = 0; y <= v.yrs; y++) { cash.push(1000 / Math.pow(1 + i, y)); inv.push(1000 * Math.pow((1 + r) / (1 + i), y)); }
      MQ.set(el, { pizza: MQ.eur(v.price * Math.pow(1 + i, v.yrs), 2), cash: MQ.eur(cash[v.yrs]), inv: MQ.eur(inv[v.yrs]) });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: cash, color: 'var(--trd)' }, { data: inv, color: 'var(--inv)' }], { fmt: (x) => MQ.eur(x), xLabels: xl(v.yrs), label: 'Valore reale di 1000 euro nel tempo', min: 0 }));
    });
  };

  /* ---------------- budget 50/30/20 ---------------- */
  W.budget = (el) => {
    accent(el, 'found');
    el.innerHTML = `<h4 class="wt">Il tuo budget 50/30/20</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('inc', 'Reddito mensile netto (€)', 1200, 0, 100000, 50)}
      ${MQ.slider('needs', 'Necessità (affitto, cibo, trasporti, bollette)', 20, 80, 1, 50, 'pct')}
      ${MQ.slider('wants', 'Desideri (svago, ristoranti, abbonamenti)', 0, 60, 1, 30, 'pct')}
      <p class="note">Risparmio e investimenti ricevono ciò che resta.</p>
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('n', 'Necessità / mese')}${MQ.stat('w', 'Desideri / mese')}${MQ.stat('s', 'Risparmio e investimento / mese', 'hi')}</div>
      <div class="stats">${MQ.stat('ef3', 'Obiettivo del fondo di emergenza (3 mesi di necessità)')}${MQ.stat('efm', 'Tempo per costruirlo')}${MQ.stat('yr', 'Risparmiato all’anno')}</div>
    </div></div>`;
    MQ.bind(el, (v) => {
      const s = Math.max(0, 100 - v.needs - v.wants);
      const n = v.inc * v.needs / 100, w = v.inc * v.wants / 100, sv = v.inc * s / 100;
      const ef = n * 3;
      MQ.set(el, {
        bar: MQ.stackBar([{ v: v.needs, c: '#5E8BFF', l: 'Necessità' }, { v: v.wants, c: '#FFC21A', l: 'Desideri' }, { v: s, c: '#14B37D', l: 'Risparmio e investimento' }]) + MQ.legend([['Necessità', '#5E8BFF'], ['Desideri', '#FFC21A'], ['Risparmio e investimento', '#14B37D']]),
        n: MQ.eur(n), w: MQ.eur(w), s: MQ.eur(sv) + ' (' + s + '%)', ef3: MQ.eur(ef),
        efm: sv > 0 ? Math.ceil(ef / sv) + ' mesi' : 'Taglia prima i desideri', yr: MQ.eur(sv * 12)
      });
    });
  };

  /* ---------------- macchina dell’interesse composto ---------------- */
  W.compound = (el, d) => {
    accent(el, 'inv');
    const compact = d.compact === '1', wait0 = parseFloat(d.wait) || 0;
    const hid = (k, v) => `<input type="hidden" data-k="${k}" value="${v}">`;
    el.innerHTML = `<h4 class="wt">${compact ? 'Provalo: cosa possono diventare 100 € al mese?' : 'Macchina dell’interesse composto'}</h4>
    <div class="${compact ? '' : 'wgrid'}"><div class="wctl">
      ${compact ? hid('start', 0) + hid('wait', 0) + hid('real', 0) : MQ.slider('start', 'Importo iniziale', 0, 50000, 500, 1000, 'eur')}
      ${MQ.slider('monthly', 'Aggiungi ogni mese', 0, 2000, 10, 100, 'eur')}
      ${MQ.slider('ret', 'Rendimento medio annuo', 0, 15, 0.5, 7, 'pct')}
      ${MQ.slider('yrs', 'Anni', 1, 50, 1, 30, 'yr')}
      ${compact ? '' : MQ.slider('wait', 'Confronta: e se aspettassi prima di iniziare?', 0, 20, 1, wait0, 'yr')}
      ${compact ? '' : MQ.check('real', 'Mostra i valori a prezzi di oggi (ipotizza il 2% di inflazione)', false)}
      ${compact ? '' : '<div class="seg" data-presets><button type="button" data-p="150">Caffè da 5 €/giorno</button><button type="button" data-p="50">Studente: 50 €/mese</button><button type="button" data-p="500">Sul serio: 500 €/mese</button></div>'}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fin', 'Ti ritrovi con', 'hi')}${MQ.stat('paid', 'Hai versato')}${MQ.stat('gain', 'La crescita ha fatto il resto', 'good')}${compact ? '' : MQ.stat('dbl', 'Il denaro raddoppia ogni')}${compact ? '' : MQ.stat('cost', 'Costo dell’attesa', 'bad')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Totale versato', 'var(--muted)'], ['I tuoi investimenti', 'var(--inv)']].concat(compact ? [] : [['Se parti più tardi', 'var(--trd)']]))}
    </div></div>
    <p class="note">${compact ? 'Solo a scopo illustrativo. I rendimenti reali cambiano ogni anno e non sono mai garantiti.' : 'I rendimenti qui sono medie levigate. I mercati reali salgono e scendono e nulla è garantito. La forma della curva è la lezione: il tempo fa il grosso del lavoro.'}</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => MQ.setVal(el, 'monthly', b.dataset.p)));
    MQ.bind(el, (v) => {
      const R = v.ret / 100, base = sim(v.start, v.monthly, R, v.yrs, 0), wt = v.wait > 0 ? sim(v.start, v.monthly, R, v.yrs, Math.min(v.wait, v.yrs)) : null;
      const adj = (arr) => v.real ? arr.map((x, i) => x / Math.pow(1.02, i)) : arr;
      const a = adj(base.val), c = base.con, b = wt ? adj(wt.val) : null;
      const fin = a[v.yrs];
      MQ.set(el, {
        fin: MQ.eur(fin), paid: MQ.eur(c[v.yrs]), gain: MQ.eur(fin - (v.real ? c[v.yrs] : c[v.yrs])),
        dbl: v.ret > 0 ? (72 / v.ret).toFixed(1) + ' anni' : 'mai',
        cost: b ? MQ.eur(fin - b[v.yrs]) : '€0'
      });
      const series = [{ data: c, color: 'var(--muted)', area: true, nodot: true, w: 2 }, { data: a, color: 'var(--inv)' }];
      if (b) series.push({ data: b, color: 'var(--trd)', dash: true });
      MQ.draw(ch, (w) => MQ.lineChart(w, compact ? 200 : 270, series, { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : x >= 1000 ? '€' + Math.round(x / 1000) + 'k' : '€' + Math.round(x), xLabels: xl(v.yrs), label: 'Crescita di un investimento con versamenti mensili regolari', min: 0 }));
    });
  };

  /* ---------------- scala del rischio ---------------- */
  W.ladder = (el) => {
    accent(el, 'found');
    const rows = [
      ['Conto di risparmio', 0, 'Anno peggiore: circa 0% (non perdi capitale, entro il limite della garanzia sui depositi). Tipico nel lungo periodo: circa 0-3% all’anno, spesso sotto l’inflazione.'],
      ['Titoli di Stato', 17, 'Anno peggiore recente: circa -13% (2022, quando i tassi d’interesse sono saliti in fretta). Tipico nel lungo periodo: circa 2-4% all’anno. Più sicuri delle azioni, ma non privi di rischio.'],
      ['Indice azionario globale', 40, 'Anno peggiore della storia recente: circa -37% (2008). Tipico nel lungo periodo: circa 6-9% all’anno prima dell’inflazione, con grandi oscillazioni lungo la strada.'],
      ['Oro', 30, 'Anno peggiore: circa -28% (2013). Non produce reddito. Spesso si è comportato in modo diverso dalle azioni, il che può aiutare la diversificazione.'],
      ['Azione di una sola società', 80, 'Una singola società può perdere dal 50 al 90%, o fallire (-100%). Anche le belle storie possono finire male. Il rischio è la concentrazione.'],
      ['Bitcoin', 75, 'Ha perso dal 70 all’85% tra massimo e minimo più volte (2014, 2018, 2022). È anche salito enormemente. Estremamente volatile, quindi la dimensione della posizione conta.'],
      ['Piccola altcoin o memecoin', 98, 'La maggior parte dei token piccoli finisce per perdere quasi tutto il valore. Qualcuno vince alla grande. Consideralo un biglietto della lotteria, mai un piano di risparmio.']
    ];
    el.innerHTML = `<h4 class="wt">La scala del rischio</h4>
    <p class="note" style="margin-top:0">Tocca una riga. La barra mostra quanto è stato brutto un anno davvero brutto (barra più lunga = perdita possibile più profonda). Numeri illustrativi e semplificati.</p>
    <div class="ladder">${rows.map((r, i) => `<button type="button" class="lrow" data-i="${i}" aria-expanded="false"><b>${r[0]}</b><span class="lbar"><i style="width:${Math.max(r[1], 1.5)}%"></i></span><span class="lnote">${r[2]}</span></button>`).join('')}</div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('.lrow'); if (!b) return;
      const on = b.classList.contains('on');
      el.querySelectorAll('.lrow').forEach((x) => { x.classList.remove('on'); x.setAttribute('aria-expanded', 'false'); });
      if (!on) { b.classList.add('on'); b.setAttribute('aria-expanded', 'true'); }
    });
  };

  /* ---------------- gioco di costruzione del portafoglio ---------------- */
  const AS = [['stocks', 'Azioni globali', '#14B37D'], ['bonds', 'Obbligazioni', '#5E8BFF'], ['cash', 'Liquidità', '#C9C5EE'], ['gold', 'Oro', '#FFC21A'], ['crypto', 'Cripto', '#A58FFF']];
  const SC = {
    boom: { n: 'Mercato rialzista noioso', t: 'Otto anni perlopiù calmi. Le azioni salgono piano, con un solo calo.', r: { stocks: [12, 9, 14, -4, 18, 10, 8, 15], bonds: [3, 2, 4, 3, 1, 4, 3, 2], cash: [2, 2, 2, 2, 2, 2, 2, 2], gold: [2, -3, 5, 1, 6, 0, 3, 2], crypto: [60, -20, 120, -45, 90, 15, -30, 70] } },
    crash: { n: 'Crollo e ripresa', t: 'Un crollo profondo nel secondo anno, poi una forte risalita.', r: { stocks: [-8, -37, 26, 15, 2, 16, 32, 13], bonds: [5, 5, 6, 7, 4, -2, 6, 1], cash: [3, 1, 0, 0, 0, 0, 0, 0], gold: [5, 5, 24, 29, 10, -28, -2, 0], crypto: [-30, -60, 80, 150, -50, 40, 200, -30] } },
    infl: { n: 'Shock inflazionistico', t: 'I prezzi schizzano, i tassi salgono. All’inizio soffrono sia le obbligazioni sia le azioni.', r: { stocks: [-19, 24, 12, -5, 9, 11, -6, 13], bonds: [-13, 5, 3, -2, 2, 4, 2, 1], cash: [1, 4, 4, 3, 2, 2, 2, 2], gold: [0, 13, 2, 5, 8, 15, -3, 6], crypto: [-64, 155, 120, -25, -15, 60, 20, -30] } },
    lost: { n: 'Decennio perduto', t: 'Le azioni non vanno da nessuna parte per anni, con oscillazioni spaventose. L’oro brilla.', r: { stocks: [-9, -12, -22, 28, 11, 5, 16, 5], bonds: [8, 8, 10, 4, 4, 2, 3, 4], cash: [5, 3, 1, 1, 2, 3, 5, 3], gold: [1, 2, 25, 20, 18, 24, 30, 23], crypto: [-50, -30, -70, 200, -40, 40, -10, -60] } }
  };
  const PRESETS = { 'Prudente': [30, 50, 20, 0, 0], 'Bilanciato': [60, 30, 0, 10, 0], 'Crescita': [85, 5, 0, 5, 5], 'Solo azioni': [100, 0, 0, 0, 0], 'Solo cripto': [0, 0, 0, 0, 100] };
  const PBAL = 'Bilanciato';
  const runPort = (w, sc) => {
    const tot = Object.keys(w).reduce((a, k) => a + w[k], 0) || 1;
    let v = 10000; const path = [v];
    for (let y = 0; y < 8; y++) { let r = 0; for (const k in w) r += (w[k] / tot) * sc.r[k][y] / 100; v *= 1 + r; path.push(v); }
    return path;
  };
  const maxDD = (p) => { let pk = p[0], dd = 0; p.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); }); return dd; };
  W.alloc = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Costruisci il tuo portafoglio e supera lo stress test</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(PRESETS).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${AS.map((a) => MQ.slider(a[0], a[1], 0, 100, 5, PRESETS[PBAL][AS.indexOf(a)], 'pct')).join('')}
      <div data-r="tot" class="note"></div>
      ${MQ.select('sc', 'Scenario (8 anni, partendo da 10.000 €)', Object.keys(SC).map((k) => [k, SC[k].n]), 'crash')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('fin', 'Valore finale', 'hi')}${MQ.stat('dd', 'Calo peggiore lungo la strada', 'bad')}${MQ.stat('feel', 'Come ci si sente')}</div>
      <div class="chart" data-c="1"></div>
      <p class="note" data-r="desc"></p>
      <div data-r="all"></div>
    </div></div>
    <p class="note">Scenari stilizzati, vagamente ispirati a episodi passati. Non sono dati reali né previsioni. I numeri delle cripto sono inventati per mostrare quanto possa essere selvaggio un asset così.</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      PRESETS[b.dataset.p].forEach((x, i) => { const inp = el.querySelector('[data-k="' + AS[i][0] + '"]'); inp.value = x; });
      MQ.setVal(el, 'stocks', PRESETS[b.dataset.p][0]);
    }));
    MQ.bind(el, (v) => {
      const w = {}; AS.forEach((a) => { w[a[0]] = v[a[0]]; });
      const tot = AS.reduce((s, a) => s + w[a[0]], 0);
      const sc = SC[v.sc], p = runPort(w, sc), dd = maxDD(p);
      const feel = dd > -0.1 ? 'Dormi come un bambino' : dd > -0.25 ? 'Qualche notte agitata' : dd > -0.4 ? 'Molto stressante' : 'Zona vendita in preda al panico';
      let rows = '';
      Object.keys(SC).forEach((k) => { const pp = runPort(w, SC[k]); rows += `<tr><th scope="row">${SC[k].n}</th><td>${MQ.eur(pp[8])}</td><td>${MQ.pct(maxDD(pp) * 100, 0)}</td></tr>`; });
      MQ.set(el, {
        tot: tot === 100 ? 'Totale: 100%. Perfetto.' : 'Totale: ' + tot + '%. Il gioco lo porta a 100% per te.',
        bar: MQ.stackBar(AS.map((a) => ({ v: w[a[0]], c: a[2], l: a[1] }))) + MQ.legend(AS.map((a) => [a[1], a[2]])),
        fin: MQ.eur(p[8]), dd: MQ.pct(dd * 100, 0), feel, desc: '<b>' + sc.n + ':</b> ' + sc.t,
        all: '<div class="tbl"><table><thead><tr><th>Scenario</th><th>Valore finale</th><th>Calo peggiore</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 220, [{ data: p, color: 'var(--inv)', area: true }], { fmt: (x) => '€' + Math.round(x / 1000) + 'k', xLabels: xl(8), label: 'Valore del portafoglio in 8 anni nello scenario scelto' }));
    });
  };

  /* ---------------- PAC contro investimento unico ---------------- */
  const pricePath = (seed, drift, vol, n) => {
    const r = MQ.rng(seed); let p = 100; const a = [p];
    for (let i = 1; i <= n; i++) { p *= Math.exp(drift / 12 - 0.5 * vol * vol / 12 + vol * Math.sqrt(1 / 12) * MQ.gauss(r)); a.push(p); }
    return a;
  };
  const dcaRun = (pr, cap) => {
    const n = pr.length - 1, c = cap / n, lu = cap / pr[0];
    let u = 0; const lump = [], dca = [];
    for (let t = 0; t <= n; t++) { if (t < n) u += c / pr[t]; lump.push(lu * pr[t]); dca.push(u * pr[t]); }
    return { lump, dca };
  };
  W.dca = (el) => {
    accent(el, 'inv');
    let seed = 7;
    el.innerHTML = `<h4 class="wt">Tutto subito contro investire ogni mese</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('cap', 'Totale che vuoi investire in 3 anni', 1200, 12000, 600, 3600, 'eur')}
      ${MQ.slider('drift', 'Tendenza del mercato (rendimento annuo medio)', -10, 20, 1, 8, 'pct')}
      ${MQ.slider('vol', 'Quanto è selvaggio il mercato (oscillazioni annue)', 8, 60, 1, 25, 'pct')}
      <div class="btnrow"><button class="btn sm" type="button" data-new>Nuovo mercato casuale</button><button class="btn sm alt" type="button" data-mc>Simula 1.000 mercati</button></div>
      <div class="msg" data-r="mc" hidden></div>
    </div><div class="wout">
      <div class="stats">${MQ.stat('lump', 'Tutto il primo giorno', 'hi')}${MQ.stat('dca', 'Stessi soldi, 36 acquisti mensili', 'hi')}${MQ.stat('who', 'Vincitore stavolta')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Tutto il primo giorno', 'var(--trd)'], ['Investimento mensile (PAC)', 'var(--inv)']])}
      <p class="note">Lo stesso totale investito nei due casi. Il PAC (piano di accumulo, in inglese DCA) significa comprare un importo fisso a date regolari.</p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const pr = pricePath(seed, v.drift / 100, v.vol / 100, 36), r = dcaRun(pr, v.cap);
      const L = r.lump[36], D = r.dca[36];
      MQ.set(el, { lump: MQ.eur(L), dca: MQ.eur(D), who: Math.abs(L - D) < v.cap * 0.005 ? 'Pareggio' : (L > D ? 'Tutto subito' : 'Investimento mensile') });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: r.lump, color: 'var(--trd)' }, { data: r.dca, color: 'var(--inv)' }], { fmt: (x) => '€' + MQ.num(x), xLabels: [{ i: 0, t: 'Inizio' }, { i: 12, t: '1a' }, { i: 24, t: '2a' }, { i: 36, t: '3a' }], label: 'Valore del portafoglio, tutto subito contro investimento mensile' }));
    });
    el.querySelector('[data-new]').addEventListener('click', () => { seed += 13; upd(); });
    el.querySelector('[data-mc]').addEventListener('click', () => {
      const v = {}; MQ.$$('[data-k]', el).forEach((i) => { v[i.dataset.k] = parseFloat(i.value); });
      let lw = 0; const N = 1000;
      for (let s = 0; s < N; s++) { const r = dcaRun(pricePath(1000 + s, v.drift / 100, v.vol / 100, 36), v.cap); if (r.lump[36] > r.dca[36]) lw++; }
      const box = el.querySelector('[data-r="mc"]'); box.hidden = false;
      box.innerHTML = `<p><b>Tutto subito ha vinto in ${lw} mercati simulati su ${N} (${(lw / N * 100).toFixed(0)}%).</b> L’investimento mensile ha vinto in ${N - lw}.</p><p>Quando i mercati salgono, avere tutti i soldi investiti prima di solito vince. Quando scendono o fanno su e giù, comprare ogni mese ti protegge. Il PAC serve soprattutto a ridurre i rimpianti e a creare un’abitudine.</p>`;
    });
  };

  /* ---------------- gioco di sopravvivenza al crollo ---------------- */
  W.panic = (el) => {
    accent(el, 'trd');
    const S = [
      { m: 100, h: 'Giornata calma. Possiedi 10.000 € di un fondo azionario globale e il tuo piano dice: tenere per più di 10 anni.' },
      { m: 92, h: 'Titoli di giornale: «La paura di un virus si diffonde, le Borse perdono l’8%». La tua chat di gruppo è piena di grafici rossi.' },
      { m: 80, h: 'Iniziano i lockdown. I mercati sono il 20% sotto il massimo. Il portafoglio ti pesa.' },
      { m: 66, h: 'La settimana peggiore da decenni. Le azioni sono il 34% sotto il massimo. La TV parla di «bagno di sangue».' },
      { m: 72, h: 'Un rimbalzo del +9% dai minimi. Nessuno sa se durerà.' },
      { m: 85, h: 'Le banche centrali immettono sostegno. Le azioni recuperano ancora, ma l’economia resta pessima.' },
      { m: 98, h: 'Sei mesi dopo l’inizio, il mercato è quasi tornato al punto di partenza.' },
      { m: 112, h: 'Un anno dopo, l’indice è su un nuovo massimo storico.' }
    ];
    let st, log;
    const reset = () => { st = { i: 0, units: 100, cash: 0, added: 0 }; log = []; };
    const view = () => {
      const s = S[st.i], val = st.units * s.m + st.cash, hold = 100 * s.m;
      if (st.i >= 7) {
        const edge = val - st.added - hold;
        el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
        <div class="stats">${MQ.stat('a', 'Il tuo valore finale', 'hi')}${MQ.stat('b', 'Se non avessi fatto nulla')}${MQ.stat('c', 'Aggiunto dai risparmi')}</div>
        <div class="msg"><p><b>${edge > 50 ? 'Hai battuto il non fare nulla di ' + MQ.eur(edge) + '.' : edge < -50 ? 'Non fare nulla ti avrebbe battuto di ' + MQ.eur(-edge) + '.' : 'Sei finito quasi esattamente dove ti avrebbe portato il non fare nulla.'}</b></p>
        <p>${st.cash > 0 ? 'Hai ancora liquidità ferma, quindi ti sei perso tutta la risalita. ' : ''}${log.some((x) => x === 'sell') ? 'Vendere vicino al minimo trasforma un calo temporaneo in una perdita permanente, e poi devi decidere quando rientrare, che è ancora più difficile. ' : ''}${log.some((x) => x === 'add') ? 'Aggiungere soldi durante il calo è stato scomodo, ma è così che vincono gli investitori di lungo periodo. ' : ''}I grandi investitori hanno un piano prima del crollo, non durante.</p></div>
        <div class="btnrow" style="margin-top:.8rem"><button class="btn sm" type="button" data-act="again">Gioca ancora</button></div>`;
        MQ.set(el, { a: MQ.eur(val), b: MQ.eur(hold), c: MQ.eur(st.added) });
        return;
      }
      const dd = (s.m / 100 - 1) * 100;
      el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
      <div class="stats">${MQ.stat('v', 'Il tuo portafoglio adesso', 'hi')}${MQ.stat('m', 'Mercato vs. inizio')}${MQ.stat('k', 'In liquidità')}</div>
      ${st.i === 0 ? '<p>Premi inizia. A ogni turno decidi cosa fare. Non c’è una risposta perfetta, solo compromessi.</p><div class="btnrow"><button class="btn sm" type="button" data-act="hold">Inizia la storia</button></div>' :
        `<p><b>Cosa fai?</b></p><div class="btnrow">
          <button class="btn sm alt" type="button" data-act="hold">Tengo. Seguo il piano.</button>
          <button class="btn sm alt" type="button" data-act="sell" ${st.units > 0 ? '' : 'disabled'}>Vendo tutto</button>
          <button class="btn sm alt" type="button" data-act="back" ${st.cash > 0 ? '' : 'disabled'}>Rientro con la mia liquidità</button>
          <button class="btn sm alt" type="button" data-act="add">Aggiungo 1.000 € dai risparmi</button></div>`}
      <p class="note">Turno ${st.i + 1} di 8. Storia stilizzata ispirata all’inizio del 2020, non sono dati esatti.</p>`;
      MQ.set(el, { v: MQ.eur(val), m: (dd >= 0 ? '+' : '') + dd.toFixed(0) + '%', k: MQ.eur(st.cash) });
    };
    reset();
    el.innerHTML = '<h4 class="wt">Gioco di sopravvivenza al crollo di mercato</h4><div data-g></div>';
    view();
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const a = b.dataset.act, m = S[st.i].m;
      if (a === 'again') { reset(); view(); return; }
      if (a === 'sell') { st.cash += st.units * m; st.units = 0; log.push('sell'); }
      else if (a === 'back') { st.units += st.cash / m; st.cash = 0; log.push('back'); }
      else if (a === 'add') { st.units += 1000 / m; st.added += 1000; log.push('add'); }
      else if (a === 'hold') log.push('hold');
      st.i++; view();
    });
  };

  /* ---------------- il peso dei costi ---------------- */
  W.fees = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Il costo silenzioso delle commissioni</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('start', 'Importo iniziale', 0, 100000, 1000, 10000, 'eur')}
      ${MQ.slider('monthly', 'Versamento mensile', 0, 2000, 50, 200, 'eur')}
      ${MQ.slider('yrs', 'Anni', 5, 50, 1, 30, 'yr')}
      ${MQ.slider('gross', 'Rendimento del mercato prima dei costi', 2, 12, 0.5, 7, 'pct')}
      ${MQ.slider('a', 'Opzione A: ETF indicizzato economico, costo annuo', 0, 3, 0.05, 0.2, 'pct')}
      ${MQ.slider('b', 'Opzione B: fondo costoso, costo annuo', 0, 3, 0.05, 1.8, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fa', 'L’opzione A finisce con', 'good')}${MQ.stat('fb', 'L’opzione B finisce con', 'bad')}${MQ.stat('diff', 'I costi hanno mangiato', 'hi')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['ETF economico', 'var(--inv)'], ['Fondo costoso', 'var(--trd)']])}
      <p class="note" data-r="note"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const A = sim(v.start, v.monthly, (v.gross - v.a) / 100, v.yrs, 0), Bq = sim(v.start, v.monthly, (v.gross - v.b) / 100, v.yrs, 0);
      const fa = A.val[v.yrs], fb = Bq.val[v.yrs], growthA = fa - A.con[v.yrs];
      MQ.set(el, { fa: MQ.eur(fa), fb: MQ.eur(fb), diff: MQ.eur(fa - fb), note: growthA > 0 ? 'L’opzione costosa rinuncia a circa il ' + Math.round((fa - fb) / growthA * 100) + '% di ciò che rende quella economica. Paghi il costo ogni singolo anno, che il fondo sia andato bene o no.' : '' });
      MQ.draw(ch, (w) => MQ.lineChart(w, 220, [{ data: A.val, color: 'var(--inv)' }, { data: Bq.val, color: 'var(--trd)' }], { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : '€' + Math.round(x / 1000) + 'k', xLabels: xl(v.yrs), label: 'Valore del portafoglio con costi bassi e alti', min: 0 }));
    });
  };

  /* ---------------- costruttore del piano di investimento ---------------- */
  W.ips = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Costruisci il tuo piano di investimento di una pagina</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.select('goal', 'A cosa servono questi soldi?', [['emergency', 'Fondo di emergenza'], ['house', 'Un grande acquisto tra qualche anno'], ['retire', 'Pensione / patrimonio a lungo termine'], ['free', 'Libertà finanziaria (flessibile, lungo termine)']], 'retire')}
      ${MQ.slider('yrs', 'Quando ti serviranno?', 1, 40, 1, 20, 'yr')}
      ${MQ.select('feel', 'Se il tuo portafoglio perdesse il 30% in pochi mesi, tu…', [['1', 'Andresti nel panico e venderesti'], ['2', 'Staresti malissimo ma probabilmente terresti'], ['3', 'Saresti preoccupato ma terresti'], ['4', 'Resteresti calmo e continueresti a investire'], ['5', 'Compreresti di più volentieri']], '3')}
      ${MQ.slider('m', 'Importo mensile che puoi investire', 25, 2000, 25, 200, 'eur')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('eq', 'Azioni', 'hi')}${MQ.stat('bo', 'Obbligazioni')}${MQ.stat('ca', 'Liquidità')}</div>
      <div class="tape" data-r="plan" style="max-height:none;white-space:pre-wrap;font-family:var(--font-body);font-size:.92rem"></div>
      <div class="btnrow" style="margin-top:.7rem"><button class="btn sm" type="button" data-copy>Copia il mio piano</button><span class="note" data-r="cp"></span></div>
    </div></div>
    <p class="note">Un esempio di come tempo e tolleranza al rischio possano modellare un’allocazione. È uno strumento didattico, non una consulenza personale.</p>`;
    let text = '';
    MQ.bind(el, (v) => {
      const comfort = parseInt(v.feel, 10);
      let eq = Math.min(90, Math.max(0, (v.yrs - 2) * 4.5)) + (comfort - 3) * 10;
      eq = Math.max(0, Math.min(90, Math.round(eq / 5) * 5));
      if (v.yrs <= 3) eq = Math.min(eq, 15);
      if (v.goal === 'emergency') eq = 0;
      let bo = Math.round((100 - eq) * 0.75 / 5) * 5, ca = 100 - eq - bo;
      if (v.goal === 'emergency') { bo = 0; ca = 100; }
      const proj = sim(0, v.m, 0.05, Math.max(1, v.yrs), 0);
      const goalName = { emergency: 'Fondo di emergenza', house: 'Grande acquisto', retire: 'Pensione e patrimonio a lungo termine', free: 'Libertà finanziaria' }[v.goal];
      text = 'IL MIO PIANO DI INVESTIMENTO\n' +
        'Obiettivo: ' + goalName + ' tra ' + v.yrs + ' anni.\n' +
        'Composizione: ' + eq + '% in fondo indicizzato azionario globale, ' + bo + '% in obbligazioni, ' + ca + '% in liquidità.\n' +
        'Investo ' + MQ.eur(v.m) + ' ogni mese, in automatico, il giorno dello stipendio.\n' +
        'Ribilancio una volta all’anno, o quando una quota si scosta di 5 punti dal target.\n' +
        'In un crollo del 30%: non guarderò ogni giorno, non venderò e manterrò il mio importo mensile.\n' +
        'Non comprerò cose che non capisco né nulla promesso come «garantito».\n' +
        'Un’ipotesi prudente del 5% annuo (non una promessa) farebbe crescere i miei versamenti fino a circa ' + MQ.eur(proj.val[proj.val.length - 1]) + '.';
      MQ.set(el, {
        bar: MQ.stackBar([{ v: eq, c: '#14B37D', l: 'Azioni' }, { v: bo, c: '#5E8BFF', l: 'Obbligazioni' }, { v: ca, c: '#C9C5EE', l: 'Liquidità' }]),
        eq: eq + '%', bo: bo + '%', ca: ca + '%', plan: MQ.esc(text), cp: ''
      });
    });
    el.querySelector('[data-copy]').addEventListener('click', () => {
      const note = el.querySelector('[data-r="cp"]');
      const fallback = () => { note.textContent = 'Seleziona il testo qui sopra per copiarlo.'; };
      try { navigator.clipboard.writeText(text).then(() => { note.textContent = 'Copiato!'; }, fallback); } catch (e) { fallback(); }
    });
  };

  /* ---------------- quale percorso fa per te? ---------------- */
  W.chooser = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Quanto tempo puoi dedicare ai mercati ogni settimana?', [['Circa 1 ora', 0], ['Qualche ora', 1], ['Molte ore, voglio farne un mestiere', 2]]],
      ['Cosa vuoi che facciano i tuoi soldi?', [['Crescere con costanza per più di 10 anni', 0], ['Un mix delle due cose', 1], ['Produrre risultati attivi grazie alle mie competenze', 2]]],
      ['Il tuo conto perde il 25% in un mese. Tu…', [['Lo detesti e hai bisogno di una crescita calma e lenta', 0], ['Tieni e rifletti', 1], ['Rivedi le tue regole e continui a eseguire', 2]]],
      ['Quale mondo ti entusiasma di più?', [['Aziende, fondi e mercati tradizionali', 'S'], ['Cripto e nuove tecnologie', 'C']]]
    ];
    const ans = [];
    el.innerHTML = `<h4 class="wt">Quale percorso fa per te?</h4><div class="cards">${Q.map((q, i) => `<div class="fld"><label>${i + 1}. ${q[0]}</label><div class="seg" data-q="${i}">${q[1].map((o, j) => `<button type="button" data-j="${j}">${o[0]}</button>`).join('')}</div></div>`).join('')}</div><div data-r="res"></div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-j]'); if (!b) return;
      const seg = b.parentNode, qi = parseInt(seg.dataset.q, 10);
      seg.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on');
      ans[qi] = Q[qi][1][parseInt(b.dataset.j, 10)][1];
      if (ans.filter((x) => x !== undefined).length < 4) return;
      const score = ans[0] + ans[1] + ans[2], trader = score >= 4, crypto = ans[3] === 'C';
      const k = trader ? (crypto ? 'ct' : 'trd') : (crypto ? 'ci' : 'inv');
      const T = MQ.tracks[k];
      el.querySelector('[data-r="res"]').innerHTML = `<div class="msg"><p><b>Percorso suggerito: ${T.name}.</b></p><p>${trader ? 'Le tue risposte indicano uno stile attivo. Ottimo, ma costruisci prima le basi e le competenze da investitore. La maggior parte dei trader di successo mantiene anche un nucleo di investimento a lungo termine.' : 'Le tue risposte indicano uno stile calmo e di lungo periodo. È il percorso che funziona per la maggior parte delle persone.'}</p>
      <div class="btnrow"><a class="btn sm" href="#track-found">Inizia dalle Basi</a><a class="btn sm alt" href="#track-${k}">Apri ${T.name}</a></div></div>`;
    });
  };
})();
