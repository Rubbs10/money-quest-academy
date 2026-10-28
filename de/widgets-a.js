/* Widgets für die Grundlagen und den Pfad „Alltagsinvestor“ */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* Zinseszins-Simulator: liefert Jahreswerte und Einzahlungen */
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
  const xl = (years) => { const a = [{ i: 0, t: 'Heute' }]; const step = years > 30 ? 10 : (years > 12 ? 5 : (years > 6 ? 2 : 1)); for (let y = step; y < years; y += step) a.push({ i: y, t: y + ' J.' }); a.push({ i: years, t: years + ' J.' }); return a; };

  /* ---------------- Inflations-Zeitmaschine ---------------- */
  W.inflation = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Die Inflations-Zeitmaschine</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('price', 'Preis einer Pizza heute', 5, 30, 1, 10, 'eur')}
      ${MQ.slider('inf', 'Inflation pro Jahr', 0, 10, 0.5, 3, 'pct')}
      ${MQ.slider('yrs', 'Jahre in die Zukunft', 1, 40, 1, 20, 'yr')}
      ${MQ.slider('ret', 'Wenn dein Geld angelegt wäre mit (pro Jahr)', 0, 10, 0.5, 5, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pizza', 'Pizzapreis dann', 'hi')}${MQ.stat('cash', '1.000 € Bargeld sind wert (in heutiger Kaufkraft)', 'bad')}${MQ.stat('inv', '1.000 € angelegt sind wert (in heutiger Kaufkraft)', 'good')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Bargeld unter der Matratze', 'var(--trd)'], ['Angelegt', 'var(--inv)']])}
    </div></div>
    <p class="note">Realer Wert = was dein Geld tatsächlich kaufen kann, gemessen in heutigen Preisen. Probiere 6 % Inflation und 0 % Rendite aus, um den Schmerz zu spüren.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const i = v.inf / 100, r = v.ret / 100;
      const cash = [], inv = [];
      for (let y = 0; y <= v.yrs; y++) { cash.push(1000 / Math.pow(1 + i, y)); inv.push(1000 * Math.pow((1 + r) / (1 + i), y)); }
      MQ.set(el, { pizza: MQ.eur(v.price * Math.pow(1 + i, v.yrs), 2), cash: MQ.eur(cash[v.yrs]), inv: MQ.eur(inv[v.yrs]) });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: cash, color: 'var(--trd)' }, { data: inv, color: 'var(--inv)' }], { fmt: (x) => MQ.eur(x), xLabels: xl(v.yrs), label: 'Realer Wert von 1000 Euro im Zeitverlauf', min: 0 }));
    });
  };

  /* ---------------- 50/30/20-Budget ---------------- */
  W.budget = (el) => {
    accent(el, 'found');
    el.innerHTML = `<h4 class="wt">Dein 50/30/20-Budget</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('inc', 'Monatliches Nettoeinkommen (€)', 1200, 0, 100000, 50)}
      ${MQ.slider('needs', 'Bedürfnisse (Miete, Essen, Verkehr, Rechnungen)', 20, 80, 1, 50, 'pct')}
      ${MQ.slider('wants', 'Wünsche (Freizeit, Restaurants, Abos)', 0, 60, 1, 30, 'pct')}
      <p class="note">Sparen und Anlegen bekommen, was übrig bleibt.</p>
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('n', 'Bedürfnisse / Monat')}${MQ.stat('w', 'Wünsche / Monat')}${MQ.stat('s', 'Sparen & Anlegen / Monat', 'hi')}</div>
      <div class="stats">${MQ.stat('ef3', 'Ziel für den Notgroschen (3 Monate Bedürfnisse)')}${MQ.stat('efm', 'Zeit bis dahin')}${MQ.stat('yr', 'Gespart pro Jahr')}</div>
    </div></div>`;
    MQ.bind(el, (v) => {
      const s = Math.max(0, 100 - v.needs - v.wants);
      const n = v.inc * v.needs / 100, w = v.inc * v.wants / 100, sv = v.inc * s / 100;
      const ef = n * 3;
      MQ.set(el, {
        bar: MQ.stackBar([{ v: v.needs, c: '#5E8BFF', l: 'Bedürfnisse' }, { v: v.wants, c: '#FFC21A', l: 'Wünsche' }, { v: s, c: '#14B37D', l: 'Sparen und Anlegen' }]) + MQ.legend([['Bedürfnisse', '#5E8BFF'], ['Wünsche', '#FFC21A'], ['Sparen & Anlegen', '#14B37D']]),
        n: MQ.eur(n), w: MQ.eur(w), s: MQ.eur(sv) + ' (' + s + ' %)', ef3: MQ.eur(ef),
        efm: sv > 0 ? Math.ceil(ef / sv) + ' Monate' : 'Kürze zuerst die Wünsche', yr: MQ.eur(sv * 12)
      });
    });
  };

  /* ---------------- Zinseszins-Maschine ---------------- */
  W.compound = (el, d) => {
    accent(el, 'inv');
    const compact = d.compact === '1', wait0 = parseFloat(d.wait) || 0;
    const hid = (k, v) => `<input type="hidden" data-k="${k}" value="${v}">`;
    el.innerHTML = `<h4 class="wt">${compact ? 'Probier es aus: Was können 100 € im Monat werden?' : 'Zinseszins-Maschine'}</h4>
    <div class="${compact ? '' : 'wgrid'}"><div class="wctl">
      ${compact ? hid('start', 0) + hid('wait', 0) + hid('real', 0) : MQ.slider('start', 'Startbetrag', 0, 50000, 500, 1000, 'eur')}
      ${MQ.slider('monthly', 'Du zahlst jeden Monat ein', 0, 2000, 10, 100, 'eur')}
      ${MQ.slider('ret', 'Durchschnittliche Rendite pro Jahr', 0, 15, 0.5, 7, 'pct')}
      ${MQ.slider('yrs', 'Jahre', 1, 50, 1, 30, 'yr')}
      ${compact ? '' : MQ.slider('wait', 'Vergleich: Was, wenn du mit dem Start wartest?', 0, 20, 1, wait0, 'yr')}
      ${compact ? '' : MQ.check('real', 'Werte in heutiger Kaufkraft anzeigen (2 % Inflation angenommen)', false)}
      ${compact ? '' : '<div class="seg" data-presets><button type="button" data-p="150">5-€-Kaffee pro Tag</button><button type="button" data-p="50">Student: 50 €/Monat</button><button type="button" data-p="500">Ernsthaft: 500 €/Monat</button></div>'}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fin', 'Am Ende hast du', 'hi')}${MQ.stat('paid', 'Du hast eingezahlt')}${MQ.stat('gain', 'Das Wachstum erledigte den Rest', 'good')}${compact ? '' : MQ.stat('dbl', 'Das Geld verdoppelt sich alle')}${compact ? '' : MQ.stat('cost', 'Kosten des Wartens', 'bad')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Insgesamt eingezahlt', 'var(--muted)'], ['Deine Geldanlagen', 'var(--inv)']].concat(compact ? [] : [['Wenn du später startest', 'var(--trd)']]))}
    </div></div>
    <p class="note">${compact ? 'Nur zur Veranschaulichung. Echte Renditen schwanken jedes Jahr und sind nie garantiert.' : 'Die Renditen hier sind geglättete Durchschnitte. Echte Märkte gehen rauf und runter, und nichts ist garantiert. Die Form der Kurve ist die Lektion: Die Zeit leistet die Schwerstarbeit.'}</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => MQ.setVal(el, 'monthly', b.dataset.p)));
    MQ.bind(el, (v) => {
      const R = v.ret / 100, base = sim(v.start, v.monthly, R, v.yrs, 0), wt = v.wait > 0 ? sim(v.start, v.monthly, R, v.yrs, Math.min(v.wait, v.yrs)) : null;
      const adj = (arr) => v.real ? arr.map((x, i) => x / Math.pow(1.02, i)) : arr;
      const a = adj(base.val), c = base.con, b = wt ? adj(wt.val) : null;
      const fin = a[v.yrs];
      MQ.set(el, {
        fin: MQ.eur(fin), paid: MQ.eur(c[v.yrs]), gain: MQ.eur(fin - (v.real ? c[v.yrs] : c[v.yrs])),
        dbl: v.ret > 0 ? (72 / v.ret).toFixed(1) + ' Jahre' : 'nie',
        cost: b ? MQ.eur(fin - b[v.yrs]) : '€0'
      });
      const series = [{ data: c, color: 'var(--muted)', area: true, nodot: true, w: 2 }, { data: a, color: 'var(--inv)' }];
      if (b) series.push({ data: b, color: 'var(--trd)', dash: true });
      MQ.draw(ch, (w) => MQ.lineChart(w, compact ? 200 : 270, series, { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : x >= 1000 ? '€' + Math.round(x / 1000) + 'k' : '€' + Math.round(x), xLabels: xl(v.yrs), label: 'Wachstum einer Geldanlage mit regelmäßigen monatlichen Einzahlungen', min: 0 }));
    });
  };

  /* ---------------- Risikoleiter ---------------- */
  W.ladder = (el) => {
    accent(el, 'found');
    const rows = [
      ['Sparkonto', 0, 'Schlechtestes Jahr: etwa 0 % (du verlierst kein Kapital, bis zur Einlagensicherung). Typisch langfristig: etwa 0 bis 3 % pro Jahr, oft unter der Inflation.'],
      ['Staatsanleihen', 17, 'Schlechtestes jüngeres Jahr: etwa -13 % (2022, als die Zinsen schnell stiegen). Typisch langfristig: etwa 2 bis 4 % pro Jahr. Sicherer als Aktien, aber nicht risikofrei.'],
      ['Weltaktienindex', 40, 'Schlechtestes Jahr der jüngeren Geschichte: etwa -37 % (2008). Typisch langfristig: etwa 6 bis 9 % pro Jahr vor Inflation, mit großen Schwankungen auf dem Weg.'],
      ['Gold', 30, 'Schlechtestes Jahr: etwa -28 % (2013). Wirft keine Erträge ab. Es hat sich oft anders verhalten als Aktien, was bei der Streuung helfen kann.'],
      ['Aktie eines einzelnen Unternehmens', 80, 'Ein einzelnes Unternehmen kann 50 bis 90 % verlieren oder pleitegehen (-100 %). Auch tolle Geschichten können schlecht enden. Das Risiko ist die Konzentration.'],
      ['Bitcoin', 75, 'Ist mehrfach um 70 bis 85 % vom Hoch zum Tief gefallen (2014, 2018, 2022). Er ist auch enorm gestiegen. Extrem schwankungsanfällig, deshalb zählt die Positionsgröße.'],
      ['Kleine Altcoin oder Memecoin', 98, 'Die meisten kleinen Token verlieren irgendwann fast ihren gesamten Wert. Einige gewinnen groß. Sieh es als Lotterielos, nie als Sparplan.']
    ];
    el.innerHTML = `<h4 class="wt">Die Risikoleiter</h4>
    <p class="note" style="margin-top:0">Tippe auf eine Zeile. Der Balken zeigt, wie schlimm ein wirklich schlechtes Jahr war (längerer Balken = tieferer möglicher Verlust). Anschauliche, vereinfachte Zahlen.</p>
    <div class="ladder">${rows.map((r, i) => `<button type="button" class="lrow" data-i="${i}" aria-expanded="false"><b>${r[0]}</b><span class="lbar"><i style="width:${Math.max(r[1], 1.5)}%"></i></span><span class="lnote">${r[2]}</span></button>`).join('')}</div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('.lrow'); if (!b) return;
      const on = b.classList.contains('on');
      el.querySelectorAll('.lrow').forEach((x) => { x.classList.remove('on'); x.setAttribute('aria-expanded', 'false'); });
      if (!on) { b.classList.add('on'); b.setAttribute('aria-expanded', 'true'); }
    });
  };

  /* ---------------- Portfolio-Bauspiel ---------------- */
  const AS = [['stocks', 'Weltaktien', '#14B37D'], ['bonds', 'Anleihen', '#5E8BFF'], ['cash', 'Bargeld', '#C9C5EE'], ['gold', 'Gold', '#FFC21A'], ['crypto', 'Krypto', '#A58FFF']];
  const SC = {
    boom: { n: 'Langweiliger Bullenmarkt', t: 'Acht überwiegend ruhige Jahre. Aktien steigen stetig, mit einem Rücksetzer.', r: { stocks: [12, 9, 14, -4, 18, 10, 8, 15], bonds: [3, 2, 4, 3, 1, 4, 3, 2], cash: [2, 2, 2, 2, 2, 2, 2, 2], gold: [2, -3, 5, 1, 6, 0, 3, 2], crypto: [60, -20, 120, -45, 90, 15, -30, 70] } },
    crash: { n: 'Crash und Erholung', t: 'Ein tiefer Crash im zweiten Jahr, dann eine kräftige Erholung.', r: { stocks: [-8, -37, 26, 15, 2, 16, 32, 13], bonds: [5, 5, 6, 7, 4, -2, 6, 1], cash: [3, 1, 0, 0, 0, 0, 0, 0], gold: [5, 5, 24, 29, 10, -28, -2, 0], crypto: [-30, -60, 80, 150, -50, 40, 200, -30] } },
    infl: { n: 'Inflationsschock', t: 'Die Preise springen, die Zinsen steigen. Anfangs leiden Anleihen und Aktien gleichermaßen.', r: { stocks: [-19, 24, 12, -5, 9, 11, -6, 13], bonds: [-13, 5, 3, -2, 2, 4, 2, 1], cash: [1, 4, 4, 3, 2, 2, 2, 2], gold: [0, 13, 2, 5, 8, 15, -3, 6], crypto: [-64, 155, 120, -25, -15, 60, 20, -30] } },
    lost: { n: 'Verlorenes Jahrzehnt', t: 'Aktien treten jahrelang auf der Stelle, mit beängstigenden Ausschlägen. Gold glänzt.', r: { stocks: [-9, -12, -22, 28, 11, 5, 16, 5], bonds: [8, 8, 10, 4, 4, 2, 3, 4], cash: [5, 3, 1, 1, 2, 3, 5, 3], gold: [1, 2, 25, 20, 18, 24, 30, 23], crypto: [-50, -30, -70, 200, -40, 40, -10, -60] } }
  };
  const PRESETS = { 'Vorsichtig': [30, 50, 20, 0, 0], 'Ausgewogen': [60, 30, 0, 10, 0], 'Wachstum': [85, 5, 0, 5, 5], 'Nur Aktien': [100, 0, 0, 0, 0], 'Nur Krypto': [0, 0, 0, 0, 100] };
  const PBAL = 'Ausgewogen';
  const runPort = (w, sc) => {
    const tot = Object.keys(w).reduce((a, k) => a + w[k], 0) || 1;
    let v = 10000; const path = [v];
    for (let y = 0; y < 8; y++) { let r = 0; for (const k in w) r += (w[k] / tot) * sc.r[k][y] / 100; v *= 1 + r; path.push(v); }
    return path;
  };
  const maxDD = (p) => { let pk = p[0], dd = 0; p.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); }); return dd; };
  W.alloc = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Baue dein Portfolio und überstehe den Stresstest</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(PRESETS).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${AS.map((a) => MQ.slider(a[0], a[1], 0, 100, 5, PRESETS[PBAL][AS.indexOf(a)], 'pct')).join('')}
      <div data-r="tot" class="note"></div>
      ${MQ.select('sc', 'Szenario (8 Jahre, Start mit 10.000 €)', Object.keys(SC).map((k) => [k, SC[k].n]), 'crash')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('fin', 'Endwert', 'hi')}${MQ.stat('dd', 'Schlimmster Rückgang unterwegs', 'bad')}${MQ.stat('feel', 'Wie es sich anfühlt')}</div>
      <div class="chart" data-c="1"></div>
      <p class="note" data-r="desc"></p>
      <div data-r="all"></div>
    </div></div>
    <p class="note">Stilisierte Szenarien, lose inspiriert von vergangenen Episoden. Es sind keine echten Daten und keine Prognosen. Die Krypto-Zahlen sind erfunden, um zu zeigen, wie wild so ein Wert sein kann.</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      PRESETS[b.dataset.p].forEach((x, i) => { const inp = el.querySelector('[data-k="' + AS[i][0] + '"]'); inp.value = x; });
      MQ.setVal(el, 'stocks', PRESETS[b.dataset.p][0]);
    }));
    MQ.bind(el, (v) => {
      const w = {}; AS.forEach((a) => { w[a[0]] = v[a[0]]; });
      const tot = AS.reduce((s, a) => s + w[a[0]], 0);
      const sc = SC[v.sc], p = runPort(w, sc), dd = maxDD(p);
      const feel = dd > -0.1 ? 'Du schläfst wie ein Baby' : dd > -0.25 ? 'Ein paar unruhige Nächte' : dd > -0.4 ? 'Sehr stressig' : 'Panikverkaufs-Gebiet';
      let rows = '';
      Object.keys(SC).forEach((k) => { const pp = runPort(w, SC[k]); rows += `<tr><th scope="row">${SC[k].n}</th><td>${MQ.eur(pp[8])}</td><td>${MQ.pct(maxDD(pp) * 100, 0)}</td></tr>`; });
      MQ.set(el, {
        tot: tot === 100 ? 'Summe: 100 %. Perfekt.' : 'Summe: ' + tot + ' %. Das Spiel rechnet es für dich auf 100 % um.',
        bar: MQ.stackBar(AS.map((a) => ({ v: w[a[0]], c: a[2], l: a[1] }))) + MQ.legend(AS.map((a) => [a[1], a[2]])),
        fin: MQ.eur(p[8]), dd: MQ.pct(dd * 100, 0), feel, desc: '<b>' + sc.n + ':</b> ' + sc.t,
        all: '<div class="tbl"><table><thead><tr><th>Szenario</th><th>Endwert</th><th>Schlimmster Rückgang</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 220, [{ data: p, color: 'var(--inv)', area: true }], { fmt: (x) => '€' + Math.round(x / 1000) + 'k', xLabels: xl(8), label: 'Portfoliowert über 8 Jahre im gewählten Szenario' }));
    });
  };

  /* ---------------- Sparplan gegen Einmalanlage ---------------- */
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
    el.innerHTML = `<h4 class="wt">Einmalanlage gegen monatliches Investieren</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('cap', 'Gesamtbetrag, den du über 3 Jahre anlegen willst', 1200, 12000, 600, 3600, 'eur')}
      ${MQ.slider('drift', 'Markttrend (durchschnittliche Jahresrendite)', -10, 20, 1, 8, 'pct')}
      ${MQ.slider('vol', 'Wie wild der Markt ist (Schwankung pro Jahr)', 8, 60, 1, 25, 'pct')}
      <div class="btnrow"><button class="btn sm" type="button" data-new>Neuer Zufallsmarkt</button><button class="btn sm alt" type="button" data-mc>1.000 Märkte simulieren</button></div>
      <div class="msg" data-r="mc" hidden></div>
    </div><div class="wout">
      <div class="stats">${MQ.stat('lump', 'Alles an Tag 1', 'hi')}${MQ.stat('dca', 'Gleiches Geld, 36 Monatskäufe', 'hi')}${MQ.stat('who', 'Sieger dieses Mal')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Einmalanlage an Tag 1', 'var(--trd)'], ['Monatliches Investieren (Sparplan)', 'var(--inv)']])}
      <p class="note">In beiden Fällen wird derselbe Gesamtbetrag investiert. Beim Sparplan (Cost-Average-Effekt, englisch DCA) kaufst du zu regelmäßigen Terminen einen festen Betrag.</p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const pr = pricePath(seed, v.drift / 100, v.vol / 100, 36), r = dcaRun(pr, v.cap);
      const L = r.lump[36], D = r.dca[36];
      MQ.set(el, { lump: MQ.eur(L), dca: MQ.eur(D), who: Math.abs(L - D) < v.cap * 0.005 ? 'Unentschieden' : (L > D ? 'Einmalanlage' : 'Monatliches Investieren') });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: r.lump, color: 'var(--trd)' }, { data: r.dca, color: 'var(--inv)' }], { fmt: (x) => '€' + MQ.num(x), xLabels: [{ i: 0, t: 'Start' }, { i: 12, t: '1 J.' }, { i: 24, t: '2 J.' }, { i: 36, t: '3 J.' }], label: 'Portfoliowert, Einmalanlage gegen monatliches Investieren' }));
    });
    el.querySelector('[data-new]').addEventListener('click', () => { seed += 13; upd(); });
    el.querySelector('[data-mc]').addEventListener('click', () => {
      const v = {}; MQ.$$('[data-k]', el).forEach((i) => { v[i.dataset.k] = parseFloat(i.value); });
      let lw = 0; const N = 1000;
      for (let s = 0; s < N; s++) { const r = dcaRun(pricePath(1000 + s, v.drift / 100, v.vol / 100, 36), v.cap); if (r.lump[36] > r.dca[36]) lw++; }
      const box = el.querySelector('[data-r="mc"]'); box.hidden = false;
      box.innerHTML = `<p><b>Die Einmalanlage gewann in ${lw} von ${N} simulierten Märkten (${(lw / N * 100).toFixed(0)} %).</b> Das monatliche Investieren gewann in ${N - lw}.</p><p>Steigen die Märkte, gewinnt meist, wer sein Geld früher investiert hat. Fallen sie oder schwanken sie hin und her, schützt dich das monatliche Kaufen. Der Sparplan hilft vor allem, Reue zu verringern und eine Gewohnheit aufzubauen.</p>`;
    });
  };

  /* ---------------- Crash-Überlebensspiel ---------------- */
  W.panic = (el) => {
    accent(el, 'trd');
    const S = [
      { m: 100, h: 'Ruhiger Tag. Du besitzt 10.000 € eines weltweiten Aktienfonds, und dein Plan sagt: mehr als 10 Jahre halten.' },
      { m: 92, h: 'Schlagzeilen: „Angst vor einem Virus breitet sich aus, Börsen fallen um 8 %.“ Dein Gruppenchat ist voller roter Charts.' },
      { m: 80, h: 'Die Lockdowns beginnen. Die Märkte liegen 20 % unter ihrem Hoch. Dein Portfolio fühlt sich schwer an.' },
      { m: 66, h: 'Die schlimmste Woche seit Jahrzehnten. Aktien liegen 34 % unter dem Hoch. Das Fernsehen spricht von einem „Blutbad“.' },
      { m: 72, h: 'Eine Gegenbewegung von +9 % von den Tiefs. Niemand weiß, ob sie hält.' },
      { m: 85, h: 'Die Zentralbanken pumpen Unterstützung hinein. Aktien erholen sich weiter, aber die Wirtschaft sieht immer noch schlimm aus.' },
      { m: 98, h: 'Sechs Monate nach dem Beginn ist der Markt fast wieder am Ausgangspunkt.' },
      { m: 112, h: 'Ein Jahr später steht der Index auf einem neuen Allzeithoch.' }
    ];
    let st, log;
    const reset = () => { st = { i: 0, units: 100, cash: 0, added: 0 }; log = []; };
    const view = () => {
      const s = S[st.i], val = st.units * s.m + st.cash, hold = 100 * s.m;
      if (st.i >= 7) {
        const edge = val - st.added - hold;
        el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
        <div class="stats">${MQ.stat('a', 'Dein Endwert', 'hi')}${MQ.stat('b', 'Wenn du nichts getan hättest')}${MQ.stat('c', 'Aus Ersparnissen nachgelegt')}</div>
        <div class="msg"><p><b>${edge > 50 ? 'Du hast „nichts tun“ um ' + MQ.eur(edge) + ' geschlagen.' : edge < -50 ? '„Nichts tun“ hätte dich um ' + MQ.eur(-edge) + ' geschlagen.' : 'Du bist fast genau dort gelandet, wo „nichts tun“ dich hingebracht hätte.'}</b></p>
        <p>${st.cash > 0 ? 'Du hältst noch Bargeld, hast also die ganze Erholung verpasst. ' : ''}${log.some((x) => x === 'sell') ? 'Nahe am Tief zu verkaufen macht aus einem vorübergehenden Rückgang einen dauerhaften Verlust, und dann musst du entscheiden, wann du wieder einsteigst, was noch schwerer ist. ' : ''}${log.some((x) => x === 'add') ? 'Während des Absturzes Geld nachzulegen war unangenehm, aber so gewinnen langfristige Anleger. ' : ''}Große Anleger haben einen Plan vor dem Crash, nicht währenddessen.</p></div>
        <div class="btnrow" style="margin-top:.8rem"><button class="btn sm" type="button" data-act="again">Nochmal spielen</button></div>`;
        MQ.set(el, { a: MQ.eur(val), b: MQ.eur(hold), c: MQ.eur(st.added) });
        return;
      }
      const dd = (s.m / 100 - 1) * 100;
      el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
      <div class="stats">${MQ.stat('v', 'Dein Portfolio jetzt', 'hi')}${MQ.stat('m', 'Markt vs. Start')}${MQ.stat('k', 'In Bargeld')}</div>
      ${st.i === 0 ? '<p>Drücke auf Start. In jeder Runde entscheidest du, was du tust. Es gibt keine perfekte Antwort, nur Abwägungen.</p><div class="btnrow"><button class="btn sm" type="button" data-act="hold">Die Geschichte starten</button></div>' :
        `<p><b>Was tust du?</b></p><div class="btnrow">
          <button class="btn sm alt" type="button" data-act="hold">Halten. Beim Plan bleiben.</button>
          <button class="btn sm alt" type="button" data-act="sell" ${st.units > 0 ? '' : 'disabled'}>Alles verkaufen</button>
          <button class="btn sm alt" type="button" data-act="back" ${st.cash > 0 ? '' : 'disabled'}>Mit meinem Bargeld wieder einsteigen</button>
          <button class="btn sm alt" type="button" data-act="add">1.000 € aus den Ersparnissen nachlegen</button></div>`}
      <p class="note">Runde ${st.i + 1} von 8. Stilisierte Geschichte, inspiriert vom Frühjahr 2020, keine exakten Daten.</p>`;
      MQ.set(el, { v: MQ.eur(val), m: (dd >= 0 ? '+' : '') + dd.toFixed(0) + ' %', k: MQ.eur(st.cash) });
    };
    reset();
    el.innerHTML = '<h4 class="wt">Börsencrash-Überlebensspiel</h4><div data-g></div>';
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

  /* ---------------- die Last der Gebühren ---------------- */
  W.fees = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Die stillen Kosten von Gebühren</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('start', 'Startbetrag', 0, 100000, 1000, 10000, 'eur')}
      ${MQ.slider('monthly', 'Monatliche Einzahlung', 0, 2000, 50, 200, 'eur')}
      ${MQ.slider('yrs', 'Jahre', 5, 50, 1, 30, 'yr')}
      ${MQ.slider('gross', 'Marktrendite vor Kosten', 2, 12, 0.5, 7, 'pct')}
      ${MQ.slider('a', 'Option A: günstiger Index-ETF, jährliche Kosten', 0, 3, 0.05, 0.2, 'pct')}
      ${MQ.slider('b', 'Option B: teurer Fonds, jährliche Kosten', 0, 3, 0.05, 1.8, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fa', 'Option A endet bei', 'good')}${MQ.stat('fb', 'Option B endet bei', 'bad')}${MQ.stat('diff', 'Die Gebühren fraßen', 'hi')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Günstiger ETF', 'var(--inv)'], ['Teurer Fonds', 'var(--trd)']])}
      <p class="note" data-r="note"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const A = sim(v.start, v.monthly, (v.gross - v.a) / 100, v.yrs, 0), Bq = sim(v.start, v.monthly, (v.gross - v.b) / 100, v.yrs, 0);
      const fa = A.val[v.yrs], fb = Bq.val[v.yrs], growthA = fa - A.con[v.yrs];
      MQ.set(el, { fa: MQ.eur(fa), fb: MQ.eur(fb), diff: MQ.eur(fa - fb), note: growthA > 0 ? 'Die teure Option verschenkt etwa ' + Math.round((fa - fb) / growthA * 100) + ' % dessen, was die günstige verdient. Du zahlst die Gebühr jedes einzelne Jahr, egal ob der Fonds gut war oder nicht.' : '' });
      MQ.draw(ch, (w) => MQ.lineChart(w, 220, [{ data: A.val, color: 'var(--inv)' }, { data: Bq.val, color: 'var(--trd)' }], { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : '€' + Math.round(x / 1000) + 'k', xLabels: xl(v.yrs), label: 'Portfoliowert bei niedrigen und hohen Gebühren', min: 0 }));
    });
  };

  /* ---------------- Anlageplan-Baukasten ---------------- */
  W.ips = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Erstelle deinen einseitigen Anlageplan</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.select('goal', 'Wofür ist dieses Geld?', [['emergency', 'Notgroschen'], ['house', 'Eine größere Anschaffung in einigen Jahren'], ['retire', 'Ruhestand / langfristiges Vermögen'], ['free', 'Finanzielle Freiheit (flexibel, langfristig)']], 'retire')}
      ${MQ.slider('yrs', 'Wann brauchst du es?', 1, 40, 1, 20, 'yr')}
      ${MQ.select('feel', 'Wenn dein Portfolio in wenigen Monaten um 30 % fiele, würdest du…', [['1', 'in Panik geraten und verkaufen'], ['2', 'dich sehr elend fühlen, aber wahrscheinlich halten'], ['3', 'besorgt sein, aber halten'], ['4', 'ruhig bleiben und weiter investieren'], ['5', 'gern mehr kaufen']], '3')}
      ${MQ.slider('m', 'Monatlicher Betrag, den du anlegen kannst', 25, 2000, 25, 200, 'eur')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('eq', 'Aktien', 'hi')}${MQ.stat('bo', 'Anleihen')}${MQ.stat('ca', 'Bargeld')}</div>
      <div class="tape" data-r="plan" style="max-height:none;white-space:pre-wrap;font-family:var(--font-body);font-size:.92rem"></div>
      <div class="btnrow" style="margin-top:.7rem"><button class="btn sm" type="button" data-copy>Meinen Plan kopieren</button><span class="note" data-r="cp"></span></div>
    </div></div>
    <p class="note">Ein Beispiel dafür, wie Zeit und Risikobereitschaft eine Aufteilung prägen können. Es ist ein Lehrwerkzeug, keine persönliche Beratung.</p>`;
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
      const goalName = { emergency: 'Notgroschen', house: 'Größere Anschaffung', retire: 'Ruhestand und langfristiges Vermögen', free: 'Finanzielle Freiheit' }[v.goal];
      text = 'MEIN ANLAGEPLAN\n' +
        'Ziel: ' + goalName + ' in ' + v.yrs + ' Jahren.\n' +
        'Aufteilung: ' + eq + ' % weltweiter Aktien-Indexfonds, ' + bo + ' % Anleihen, ' + ca + ' % Bargeld.\n' +
        'Ich lege jeden Monat ' + MQ.eur(v.m) + ' an, automatisch, am Zahltag.\n' +
        'Ich schichte einmal im Jahr um oder wenn ein Anteil 5 Punkte vom Ziel abweicht.\n' +
        'Bei einem Crash von 30 % werde ich: nicht täglich nachschauen, nicht verkaufen und meinen Monatsbetrag weiterlaufen lassen.\n' +
        'Ich kaufe nichts, was ich nicht verstehe, und nichts, was als „garantiert“ angepriesen wird.\n' +
        'Eine vorsichtige Annahme von 5 % pro Jahr (kein Versprechen) ließe meine Einzahlungen auf etwa ' + MQ.eur(proj.val[proj.val.length - 1]) + ' wachsen.';
      MQ.set(el, {
        bar: MQ.stackBar([{ v: eq, c: '#14B37D', l: 'Aktien' }, { v: bo, c: '#5E8BFF', l: 'Anleihen' }, { v: ca, c: '#C9C5EE', l: 'Bargeld' }]),
        eq: eq + ' %', bo: bo + ' %', ca: ca + ' %', plan: MQ.esc(text), cp: ''
      });
    });
    el.querySelector('[data-copy]').addEventListener('click', () => {
      const note = el.querySelector('[data-r="cp"]');
      const fallback = () => { note.textContent = 'Markiere den Text oben, um ihn zu kopieren.'; };
      try { navigator.clipboard.writeText(text).then(() => { note.textContent = 'Kopiert!'; }, fallback); } catch (e) { fallback(); }
    });
  };

  /* ---------------- welcher Pfad passt zu dir? ---------------- */
  W.chooser = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Wie viel Zeit kannst du pro Woche den Märkten widmen?', [['Etwa 1 Stunde', 0], ['Ein paar Stunden', 1], ['Viele Stunden, ich will ein Handwerk daraus machen', 2]]],
      ['Was soll dein Geld tun?', [['Über 10+ Jahre stetig wachsen', 0], ['Eine Mischung aus beidem', 1], ['Mit meinen Fähigkeiten aktive Ergebnisse erzielen', 2]]],
      ['Dein Konto liegt in einem Monat 25 % im Minus. Du…', [['hasst das und brauchst ruhiges, langsames Wachstum', 0], ['hältst durch und denkst nach', 1], ['prüfst deine Regeln und handelst weiter danach', 2]]],
      ['Welche Welt begeistert dich mehr?', [['Unternehmen, Fonds und traditionelle Märkte', 'S'], ['Krypto und neue Technologien', 'C']]]
    ];
    const ans = [];
    el.innerHTML = `<h4 class="wt">Welcher Pfad passt zu dir?</h4><div class="cards">${Q.map((q, i) => `<div class="fld"><label>${i + 1}. ${q[0]}</label><div class="seg" data-q="${i}">${q[1].map((o, j) => `<button type="button" data-j="${j}">${o[0]}</button>`).join('')}</div></div>`).join('')}</div><div data-r="res"></div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-j]'); if (!b) return;
      const seg = b.parentNode, qi = parseInt(seg.dataset.q, 10);
      seg.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on');
      ans[qi] = Q[qi][1][parseInt(b.dataset.j, 10)][1];
      if (ans.filter((x) => x !== undefined).length < 4) return;
      const score = ans[0] + ans[1] + ans[2], trader = score >= 4, crypto = ans[3] === 'C';
      const k = trader ? (crypto ? 'ct' : 'trd') : (crypto ? 'ci' : 'inv');
      const T = MQ.tracks[k];
      el.querySelector('[data-r="res"]').innerHTML = `<div class="msg"><p><b>Empfohlener Pfad: ${T.name}.</b></p><p>${trader ? 'Deine Antworten deuten auf einen aktiven Stil hin. Gut, aber baue zuerst die Grundlagen und die Anlegerfähigkeiten auf. Die meisten erfolgreichen Trader behalten auch einen langfristigen Anlagekern.' : 'Deine Antworten deuten auf einen ruhigen, langfristigen Stil hin. Das ist der Pfad, der für die meisten Menschen funktioniert.'}</p>
      <div class="btnrow"><a class="btn sm" href="#track-found">Mit den Grundlagen beginnen</a><a class="btn sm alt" href="#track-${k}">${T.name} öffnen</a></div></div>`;
    });
  };
})();
