/* Widgets des Fondamentaux et du parcours Investisseur du quotidien */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* simulateur d’intérêts composés : renvoie les valeurs annuelles et les versements */
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
  const xl = (years) => { const a = [{ i: 0, t: 'Auj.' }]; const step = years > 30 ? 10 : (years > 12 ? 5 : (years > 6 ? 2 : 1)); for (let y = step; y < years; y += step) a.push({ i: y, t: y + ' a' }); a.push({ i: years, t: years + ' a' }); return a; };

  /* ---------------- machine à remonter le temps de l’inflation ---------------- */
  W.inflation = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">La machine à remonter le temps de l’inflation</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('price', 'Prix d’une pizza aujourd’hui', 5, 30, 1, 10, 'eur')}
      ${MQ.slider('inf', 'Inflation par an', 0, 10, 0.5, 3, 'pct')}
      ${MQ.slider('yrs', 'Années dans le futur', 1, 40, 1, 20, 'yr')}
      ${MQ.slider('ret', 'Si votre argent était placé à (par an)', 0, 10, 0.5, 5, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pizza', 'Prix de la pizza à l’époque', 'hi')}${MQ.stat('cash', '1 000 € en liquide valent (en monnaie d’aujourd’hui)', 'bad')}${MQ.stat('inv', '1 000 € investis valent (en monnaie d’aujourd’hui)', 'good')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Argent sous le matelas', 'var(--trd)'], ['Investi', 'var(--inv)']])}
    </div></div>
    <p class="note">Valeur réelle = ce que votre argent peut réellement acheter, mesuré aux prix d’aujourd’hui. Essayez 6 % d’inflation et 0 % de rendement pour sentir la douleur.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const i = v.inf / 100, r = v.ret / 100;
      const cash = [], inv = [];
      for (let y = 0; y <= v.yrs; y++) { cash.push(1000 / Math.pow(1 + i, y)); inv.push(1000 * Math.pow((1 + r) / (1 + i), y)); }
      MQ.set(el, { pizza: MQ.eur(v.price * Math.pow(1 + i, v.yrs), 2), cash: MQ.eur(cash[v.yrs]), inv: MQ.eur(inv[v.yrs]) });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: cash, color: 'var(--trd)' }, { data: inv, color: 'var(--inv)' }], { fmt: (x) => MQ.eur(x), xLabels: xl(v.yrs), label: 'Valeur réelle de 1000 euros au fil du temps', min: 0 }));
    });
  };

  /* ---------------- budget 50/30/20 ---------------- */
  W.budget = (el) => {
    accent(el, 'found');
    el.innerHTML = `<h4 class="wt">Votre budget 50/30/20</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('inc', 'Revenu mensuel net d’impôt (€)', 1200, 0, 100000, 50)}
      ${MQ.slider('needs', 'Besoins (loyer, nourriture, transports, factures)', 20, 80, 1, 50, 'pct')}
      ${MQ.slider('wants', 'Envies (loisirs, restaurants, abonnements)', 0, 60, 1, 30, 'pct')}
      <p class="note">L’épargne et l’investissement reçoivent ce qui reste.</p>
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('n', 'Besoins / mois')}${MQ.stat('w', 'Envies / mois')}${MQ.stat('s', 'Épargner et investir / mois', 'hi')}</div>
      <div class="stats">${MQ.stat('ef3', 'Objectif du fonds d’urgence (3 mois de besoins)')}${MQ.stat('efm', 'Temps pour le constituer')}${MQ.stat('yr', 'Épargné par an')}</div>
    </div></div>`;
    MQ.bind(el, (v) => {
      const s = Math.max(0, 100 - v.needs - v.wants);
      const n = v.inc * v.needs / 100, w = v.inc * v.wants / 100, sv = v.inc * s / 100;
      const ef = n * 3;
      MQ.set(el, {
        bar: MQ.stackBar([{ v: v.needs, c: '#5E8BFF', l: 'Besoins' }, { v: v.wants, c: '#FFC21A', l: 'Envies' }, { v: s, c: '#14B37D', l: 'Épargner et investir' }]) + MQ.legend([['Besoins', '#5E8BFF'], ['Envies', '#FFC21A'], ['Épargner et investir', '#14B37D']]),
        n: MQ.eur(n), w: MQ.eur(w), s: MQ.eur(sv) + ' (' + s + ' %)', ef3: MQ.eur(ef),
        efm: sv > 0 ? Math.ceil(ef / sv) + ' mois' : 'Réduisez d’abord les envies', yr: MQ.eur(sv * 12)
      });
    });
  };

  /* ---------------- machine à intérêts composés ---------------- */
  W.compound = (el, d) => {
    accent(el, 'inv');
    const compact = d.compact === '1', wait0 = parseFloat(d.wait) || 0;
    const hid = (k, v) => `<input type="hidden" data-k="${k}" value="${v}">`;
    el.innerHTML = `<h4 class="wt">${compact ? 'Essayez : que peuvent devenir 100 € par mois ?' : 'Machine à intérêts composés'}</h4>
    <div class="${compact ? '' : 'wgrid'}"><div class="wctl">
      ${compact ? hid('start', 0) + hid('wait', 0) + hid('real', 0) : MQ.slider('start', 'Montant de départ', 0, 50000, 500, 1000, 'eur')}
      ${MQ.slider('monthly', 'Vous ajoutez chaque mois', 0, 2000, 10, 100, 'eur')}
      ${MQ.slider('ret', 'Rendement moyen par an', 0, 15, 0.5, 7, 'pct')}
      ${MQ.slider('yrs', 'Années', 1, 50, 1, 30, 'yr')}
      ${compact ? '' : MQ.slider('wait', 'Comparez : et si vous attendiez avant de commencer ?', 0, 20, 1, wait0, 'yr')}
      ${compact ? '' : MQ.check('real', 'Afficher les valeurs en monnaie d’aujourd’hui (inflation de 2 % supposée)', false)}
      ${compact ? '' : '<div class="seg" data-presets><button type="button" data-p="150">Café à 5 €/jour</button><button type="button" data-p="50">Étudiant : 50 €/mois</button><button type="button" data-p="500">Sérieux : 500 €/mois</button></div>'}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fin', 'Vous obtenez', 'hi')}${MQ.stat('paid', 'Vous avez versé')}${MQ.stat('gain', 'La croissance a fait le reste', 'good')}${compact ? '' : MQ.stat('dbl', 'L’argent double tous les')}${compact ? '' : MQ.stat('cost', 'Coût de l’attente', 'bad')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Total versé', 'var(--muted)'], ['Vos investissements', 'var(--inv)']].concat(compact ? [] : [['Si vous commencez plus tard', 'var(--trd)']]))}
    </div></div>
    <p class="note">${compact ? 'Simple illustration. Les rendements réels varient chaque année et ne sont jamais garantis.' : 'Les rendements ici sont des moyennes lissées. Les vrais marchés montent et descendent, et rien n’est garanti. La forme de la courbe est la leçon : le temps fait le gros du travail.'}</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => MQ.setVal(el, 'monthly', b.dataset.p)));
    MQ.bind(el, (v) => {
      const R = v.ret / 100, base = sim(v.start, v.monthly, R, v.yrs, 0), wt = v.wait > 0 ? sim(v.start, v.monthly, R, v.yrs, Math.min(v.wait, v.yrs)) : null;
      const adj = (arr) => v.real ? arr.map((x, i) => x / Math.pow(1.02, i)) : arr;
      const a = adj(base.val), c = base.con, b = wt ? adj(wt.val) : null;
      const fin = a[v.yrs];
      MQ.set(el, {
        fin: MQ.eur(fin), paid: MQ.eur(c[v.yrs]), gain: MQ.eur(fin - (v.real ? c[v.yrs] : c[v.yrs])),
        dbl: v.ret > 0 ? (72 / v.ret).toFixed(1) + ' ans' : 'jamais',
        cost: b ? MQ.eur(fin - b[v.yrs]) : '€0'
      });
      const series = [{ data: c, color: 'var(--muted)', area: true, nodot: true, w: 2 }, { data: a, color: 'var(--inv)' }];
      if (b) series.push({ data: b, color: 'var(--trd)', dash: true });
      MQ.draw(ch, (w) => MQ.lineChart(w, compact ? 200 : 270, series, { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : x >= 1000 ? '€' + Math.round(x / 1000) + 'k' : '€' + Math.round(x), xLabels: xl(v.yrs), label: 'Croissance d’un investissement avec des versements mensuels réguliers', min: 0 }));
    });
  };

  /* ---------------- échelle du risque ---------------- */
  W.ladder = (el) => {
    accent(el, 'found');
    const rows = [
      ['Compte d’épargne', 0, 'Pire année : environ 0 % (vous ne perdez pas de capital, dans la limite de la garantie des dépôts). Habituel sur le long terme : environ 0 à 3 % par an, souvent sous l’inflation.'],
      ['Obligations d’État', 17, 'Pire année récente : environ -13 % (2022, quand les taux d’intérêt ont monté vite). Habituel sur le long terme : environ 2 à 4 % par an. Plus sûres que les actions, mais pas sans risque.'],
      ['Indice actions mondial', 40, 'Pire année de l’histoire récente : environ -37 % (2008). Habituel sur le long terme : environ 6 à 9 % par an avant inflation, avec de grands écarts en route.'],
      ['Or', 30, 'Pire année : environ -28 % (2013). Ne produit aucun revenu. Il s’est souvent comporté autrement que les actions, ce qui peut aider à diversifier.'],
      ['Action d’une seule entreprise', 80, 'Une seule entreprise peut perdre 50 à 90 %, ou faire faillite (-100 %). De belles histoires peuvent aussi mal finir. La concentration est le risque.'],
      ['Bitcoin', 75, 'A chuté de 70 à 85 % entre son sommet et son creux plusieurs fois (2014, 2018, 2022). Il a aussi énormément monté. Extrêmement volatil, donc la taille de la position compte.'],
      ['Petite altcoin ou memecoin', 98, 'La plupart des petits jetons finissent par perdre presque toute leur valeur. Quelques-uns gagnent gros. Voyez-y un ticket de loterie, jamais un plan d’épargne.']
    ];
    el.innerHTML = `<h4 class="wt">L’échelle du risque</h4>
    <p class="note" style="margin-top:0">Touchez une ligne. La barre montre à quel point une très mauvaise année a été mauvaise (barre plus longue = perte possible plus profonde). Chiffres illustratifs et simplifiés.</p>
    <div class="ladder">${rows.map((r, i) => `<button type="button" class="lrow" data-i="${i}" aria-expanded="false"><b>${r[0]}</b><span class="lbar"><i style="width:${Math.max(r[1], 1.5)}%"></i></span><span class="lnote">${r[2]}</span></button>`).join('')}</div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('.lrow'); if (!b) return;
      const on = b.classList.contains('on');
      el.querySelectorAll('.lrow').forEach((x) => { x.classList.remove('on'); x.setAttribute('aria-expanded', 'false'); });
      if (!on) { b.classList.add('on'); b.setAttribute('aria-expanded', 'true'); }
    });
  };

  /* ---------------- jeu de construction de portefeuille ---------------- */
  const AS = [['stocks', 'Actions mondiales', '#14B37D'], ['bonds', 'Obligations', '#5E8BFF'], ['cash', 'Liquidités', '#C9C5EE'], ['gold', 'Or', '#FFC21A'], ['crypto', 'Crypto', '#A58FFF']];
  const SC = {
    boom: { n: 'Marché haussier ennuyeux', t: 'Huit années plutôt calmes. Les actions montent doucement, avec un seul repli.', r: { stocks: [12, 9, 14, -4, 18, 10, 8, 15], bonds: [3, 2, 4, 3, 1, 4, 3, 2], cash: [2, 2, 2, 2, 2, 2, 2, 2], gold: [2, -3, 5, 1, 6, 0, 3, 2], crypto: [60, -20, 120, -45, 90, 15, -30, 70] } },
    crash: { n: 'Krach et rebond', t: 'Un krach profond la deuxième année, puis un fort rebond.', r: { stocks: [-8, -37, 26, 15, 2, 16, 32, 13], bonds: [5, 5, 6, 7, 4, -2, 6, 1], cash: [3, 1, 0, 0, 0, 0, 0, 0], gold: [5, 5, 24, 29, 10, -28, -2, 0], crypto: [-30, -60, 80, 150, -50, 40, 200, -30] } },
    infl: { n: 'Choc d’inflation', t: 'Les prix bondissent, les taux montent. Obligations et actions souffrent d’abord toutes les deux.', r: { stocks: [-19, 24, 12, -5, 9, 11, -6, 13], bonds: [-13, 5, 3, -2, 2, 4, 2, 1], cash: [1, 4, 4, 3, 2, 2, 2, 2], gold: [0, 13, 2, 5, 8, 15, -3, 6], crypto: [-64, 155, 120, -25, -15, 60, 20, -30] } },
    lost: { n: 'Décennie perdue', t: 'Les actions font du surplace pendant des années, avec des secousses effrayantes. L’or brille.', r: { stocks: [-9, -12, -22, 28, 11, 5, 16, 5], bonds: [8, 8, 10, 4, 4, 2, 3, 4], cash: [5, 3, 1, 1, 2, 3, 5, 3], gold: [1, 2, 25, 20, 18, 24, 30, 23], crypto: [-50, -30, -70, 200, -40, 40, -10, -60] } }
  };
  const PRESETS = { 'Prudent': [30, 50, 20, 0, 0], 'Équilibré': [60, 30, 0, 10, 0], 'Croissance': [85, 5, 0, 5, 5], 'Tout actions': [100, 0, 0, 0, 0], 'Tout crypto': [0, 0, 0, 0, 100] };
  const PBAL = 'Équilibré';
  const runPort = (w, sc) => {
    const tot = Object.keys(w).reduce((a, k) => a + w[k], 0) || 1;
    let v = 10000; const path = [v];
    for (let y = 0; y < 8; y++) { let r = 0; for (const k in w) r += (w[k] / tot) * sc.r[k][y] / 100; v *= 1 + r; path.push(v); }
    return path;
  };
  const maxDD = (p) => { let pk = p[0], dd = 0; p.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); }); return dd; };
  W.alloc = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Construisez votre portefeuille, puis survivez au test de résistance</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(PRESETS).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${AS.map((a) => MQ.slider(a[0], a[1], 0, 100, 5, PRESETS[PBAL][AS.indexOf(a)], 'pct')).join('')}
      <div data-r="tot" class="note"></div>
      ${MQ.select('sc', 'Scénario (8 ans, en partant de 10 000 €)', Object.keys(SC).map((k) => [k, SC[k].n]), 'crash')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('fin', 'Valeur finale', 'hi')}${MQ.stat('dd', 'Pire baisse en cours de route', 'bad')}${MQ.stat('feel', 'Ce que ça fait')}</div>
      <div class="chart" data-c="1"></div>
      <p class="note" data-r="desc"></p>
      <div data-r="all"></div>
    </div></div>
    <p class="note">Scénarios stylisés, vaguement inspirés d’épisodes passés. Ce ne sont ni des données réelles ni des prévisions. Les chiffres de la crypto sont inventés pour montrer à quel point un tel actif peut être sauvage.</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      PRESETS[b.dataset.p].forEach((x, i) => { const inp = el.querySelector('[data-k="' + AS[i][0] + '"]'); inp.value = x; });
      MQ.setVal(el, 'stocks', PRESETS[b.dataset.p][0]);
    }));
    MQ.bind(el, (v) => {
      const w = {}; AS.forEach((a) => { w[a[0]] = v[a[0]]; });
      const tot = AS.reduce((s, a) => s + w[a[0]], 0);
      const sc = SC[v.sc], p = runPort(w, sc), dd = maxDD(p);
      const feel = dd > -0.1 ? 'Vous dormez comme un bébé' : dd > -0.25 ? 'Quelques nuits agitées' : dd > -0.4 ? 'Très stressant' : 'Zone de vente en panique';
      let rows = '';
      Object.keys(SC).forEach((k) => { const pp = runPort(w, SC[k]); rows += `<tr><th scope="row">${SC[k].n}</th><td>${MQ.eur(pp[8])}</td><td>${MQ.pct(maxDD(pp) * 100, 0)}</td></tr>`; });
      MQ.set(el, {
        tot: tot === 100 ? 'Total : 100 %. Parfait.' : 'Total : ' + tot + ' %. Le jeu le ramène à 100 % pour vous.',
        bar: MQ.stackBar(AS.map((a) => ({ v: w[a[0]], c: a[2], l: a[1] }))) + MQ.legend(AS.map((a) => [a[1], a[2]])),
        fin: MQ.eur(p[8]), dd: MQ.pct(dd * 100, 0), feel, desc: '<b>' + sc.n + ' :</b> ' + sc.t,
        all: '<div class="tbl"><table><thead><tr><th>Scénario</th><th>Valeur finale</th><th>Pire baisse</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 220, [{ data: p, color: 'var(--inv)', area: true }], { fmt: (x) => '€' + Math.round(x / 1000) + 'k', xLabels: xl(8), label: 'Valeur du portefeuille sur 8 ans dans le scénario choisi' }));
    });
  };

  /* ---------------- DCA contre investissement unique ---------------- */
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
    el.innerHTML = `<h4 class="wt">Tout d’un coup contre investir chaque mois</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('cap', 'Total que vous voulez investir sur 3 ans', 1200, 12000, 600, 3600, 'eur')}
      ${MQ.slider('drift', 'Tendance du marché (rendement annuel moyen)', -10, 20, 1, 8, 'pct')}
      ${MQ.slider('vol', 'À quel point le marché est sauvage (variations annuelles)', 8, 60, 1, 25, 'pct')}
      <div class="btnrow"><button class="btn sm" type="button" data-new>Nouveau marché aléatoire</button><button class="btn sm alt" type="button" data-mc>Lancer 1 000 marchés</button></div>
      <div class="msg" data-r="mc" hidden></div>
    </div><div class="wout">
      <div class="stats">${MQ.stat('lump', 'Tout le premier jour', 'hi')}${MQ.stat('dca', 'Même somme, 36 achats mensuels', 'hi')}${MQ.stat('who', 'Gagnant cette fois')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Tout le premier jour', 'var(--trd)'], ['Investissement mensuel (DCA)', 'var(--inv)']])}
      <p class="note">Le même total investi dans les deux cas. Le DCA (dollar-cost averaging, ou investissement programmé) consiste à acheter un montant fixe à dates régulières.</p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const pr = pricePath(seed, v.drift / 100, v.vol / 100, 36), r = dcaRun(pr, v.cap);
      const L = r.lump[36], D = r.dca[36];
      MQ.set(el, { lump: MQ.eur(L), dca: MQ.eur(D), who: Math.abs(L - D) < v.cap * 0.005 ? 'Égalité' : (L > D ? 'Tout d’un coup' : 'Investissement mensuel') });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: r.lump, color: 'var(--trd)' }, { data: r.dca, color: 'var(--inv)' }], { fmt: (x) => '€' + MQ.num(x), xLabels: [{ i: 0, t: 'Début' }, { i: 12, t: '1 a' }, { i: 24, t: '2 a' }, { i: 36, t: '3 a' }], label: 'Valeur du portefeuille, tout d’un coup contre investissement mensuel' }));
    });
    el.querySelector('[data-new]').addEventListener('click', () => { seed += 13; upd(); });
    el.querySelector('[data-mc]').addEventListener('click', () => {
      const v = {}; MQ.$$('[data-k]', el).forEach((i) => { v[i.dataset.k] = parseFloat(i.value); });
      let lw = 0; const N = 1000;
      for (let s = 0; s < N; s++) { const r = dcaRun(pricePath(1000 + s, v.drift / 100, v.vol / 100, 36), v.cap); if (r.lump[36] > r.dca[36]) lw++; }
      const box = el.querySelector('[data-r="mc"]'); box.hidden = false;
      box.innerHTML = `<p><b>Tout d’un coup a gagné dans ${lw} marchés simulés sur ${N} (${(lw / N * 100).toFixed(0)} %).</b> L’investissement mensuel a gagné dans ${N - lw}.</p><p>Quand les marchés montent, avoir tout son argent investi plus tôt gagne généralement. Quand ils baissent ou zigzaguent, acheter chaque mois vous protège. Le DCA sert surtout à réduire les regrets et à créer une habitude.</p>`;
    });
  };

  /* ---------------- jeu de survie à un krach ---------------- */
  W.panic = (el) => {
    accent(el, 'trd');
    const S = [
      { m: 100, h: 'Journée calme. Vous détenez 10 000 € d’un fonds actions mondial et votre plan dit : garder plus de 10 ans.' },
      { m: 92, h: 'À la une : « La peur d’un virus se propage, les bourses reculent de 8 %. » Votre groupe de discussion est plein de graphiques rouges.' },
      { m: 80, h: 'Les confinements commencent. Les marchés sont 20 % sous leur sommet. Votre portefeuille pèse lourd.' },
      { m: 66, h: 'La pire semaine depuis des décennies. Les actions sont 34 % sous leur sommet. La télé parle de « bain de sang ».' },
      { m: 72, h: 'Un rebond de +9 % depuis les plus bas. Personne ne sait s’il va durer.' },
      { m: 85, h: 'Les banques centrales injectent du soutien. Les actions remontent davantage, mais l’économie reste affreuse.' },
      { m: 98, h: 'Six mois après le début, le marché est presque revenu à son point de départ.' },
      { m: 112, h: 'Un an plus tard, l’indice est à un nouveau record historique.' }
    ];
    let st, log;
    const reset = () => { st = { i: 0, units: 100, cash: 0, added: 0 }; log = []; };
    const view = () => {
      const s = S[st.i], val = st.units * s.m + st.cash, hold = 100 * s.m;
      if (st.i >= 7) {
        const edge = val - st.added - hold;
        el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
        <div class="stats">${MQ.stat('a', 'Votre valeur finale', 'hi')}${MQ.stat('b', 'Si vous n’aviez rien fait')}${MQ.stat('c', 'Ajouté depuis votre épargne')}</div>
        <div class="msg"><p><b>${edge > 50 ? 'Vous avez fait mieux que ne rien faire de ' + MQ.eur(edge) + '.' : edge < -50 ? 'Ne rien faire vous aurait battu de ' + MQ.eur(-edge) + '.' : 'Vous finissez presque exactement là où ne rien faire vous aurait mené.'}</b></p>
        <p>${st.cash > 0 ? 'Vous gardez encore des liquidités, donc vous avez raté tout le rebond. ' : ''}${log.some((x) => x === 'sell') ? 'Vendre près du plus bas transforme une baisse temporaire en perte définitive, puis il faut décider quand racheter, ce qui est encore plus dur. ' : ''}${log.some((x) => x === 'add') ? 'Ajouter de l’argent pendant la chute était inconfortable, mais c’est ainsi que gagnent les investisseurs de long terme. ' : ''}Les grands investisseurs ont un plan avant le krach, pas pendant.</p></div>
        <div class="btnrow" style="margin-top:.8rem"><button class="btn sm" type="button" data-act="again">Rejouer</button></div>`;
        MQ.set(el, { a: MQ.eur(val), b: MQ.eur(hold), c: MQ.eur(st.added) });
        return;
      }
      const dd = (s.m / 100 - 1) * 100;
      el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
      <div class="stats">${MQ.stat('v', 'Votre portefeuille maintenant', 'hi')}${MQ.stat('m', 'Marché vs début')}${MQ.stat('k', 'En liquidités')}</div>
      ${st.i === 0 ? '<p>Appuyez sur démarrer. À chaque tour, vous décidez quoi faire. Il n’y a pas de réponse parfaite, seulement des compromis.</p><div class="btnrow"><button class="btn sm" type="button" data-act="hold">Lancer l’histoire</button></div>' :
        `<p><b>Que faites-vous ?</b></p><div class="btnrow">
          <button class="btn sm alt" type="button" data-act="hold">Garder. Suivre le plan.</button>
          <button class="btn sm alt" type="button" data-act="sell" ${st.units > 0 ? '' : 'disabled'}>Tout vendre</button>
          <button class="btn sm alt" type="button" data-act="back" ${st.cash > 0 ? '' : 'disabled'}>Racheter avec mes liquidités</button>
          <button class="btn sm alt" type="button" data-act="add">Ajouter 1 000 € de mon épargne</button></div>`}
      <p class="note">Tour ${st.i + 1} sur 8. Histoire stylisée inspirée du début 2020, pas des données exactes.</p>`;
      MQ.set(el, { v: MQ.eur(val), m: (dd >= 0 ? '+' : '') + dd.toFixed(0) + ' %', k: MQ.eur(st.cash) });
    };
    reset();
    el.innerHTML = '<h4 class="wt">Jeu de survie à un krach boursier</h4><div data-g></div>';
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

  /* ---------------- le poids des frais ---------------- */
  W.fees = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Le coût silencieux des frais</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('start', 'Montant de départ', 0, 100000, 1000, 10000, 'eur')}
      ${MQ.slider('monthly', 'Versement mensuel', 0, 2000, 50, 200, 'eur')}
      ${MQ.slider('yrs', 'Années', 5, 50, 1, 30, 'yr')}
      ${MQ.slider('gross', 'Rendement du marché avant frais', 2, 12, 0.5, 7, 'pct')}
      ${MQ.slider('a', 'Option A : ETF indiciel bon marché, coût annuel', 0, 3, 0.05, 0.2, 'pct')}
      ${MQ.slider('b', 'Option B : fonds coûteux, coût annuel', 0, 3, 0.05, 1.8, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fa', 'L’option A finit à', 'good')}${MQ.stat('fb', 'L’option B finit à', 'bad')}${MQ.stat('diff', 'Les frais ont mangé', 'hi')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['ETF bon marché', 'var(--inv)'], ['Fonds coûteux', 'var(--trd)']])}
      <p class="note" data-r="note"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const A = sim(v.start, v.monthly, (v.gross - v.a) / 100, v.yrs, 0), Bq = sim(v.start, v.monthly, (v.gross - v.b) / 100, v.yrs, 0);
      const fa = A.val[v.yrs], fb = Bq.val[v.yrs], growthA = fa - A.con[v.yrs];
      MQ.set(el, { fa: MQ.eur(fa), fb: MQ.eur(fb), diff: MQ.eur(fa - fb), note: growthA > 0 ? 'L’option coûteuse abandonne environ ' + Math.round((fa - fb) / growthA * 100) + ' % de ce que rapporte l’option bon marché. Vous payez les frais chaque année, que le fonds ait été bon ou non.' : '' });
      MQ.draw(ch, (w) => MQ.lineChart(w, 220, [{ data: A.val, color: 'var(--inv)' }, { data: Bq.val, color: 'var(--trd)' }], { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : '€' + Math.round(x / 1000) + 'k', xLabels: xl(v.yrs), label: 'Valeur du portefeuille avec des frais faibles et élevés', min: 0 }));
    });
  };

  /* ---------------- constructeur de plan d’investissement ---------------- */
  W.ips = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Construisez votre plan d’investissement d’une page</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.select('goal', 'À quoi sert cet argent ?', [['emergency', 'Fonds d’urgence'], ['house', 'Un gros achat dans quelques années'], ['retire', 'Retraite / patrimoine à long terme'], ['free', 'Liberté financière (flexible, long terme)']], 'retire')}
      ${MQ.slider('yrs', 'Quand en aurez-vous besoin ?', 1, 40, 1, 20, 'yr')}
      ${MQ.select('feel', 'Si votre portefeuille perdait 30 % en quelques mois, vous…', [['1', 'Paniqueriez et vendriez'], ['2', 'Vous sentiriez très mal mais tiendriez probablement'], ['3', 'Seriez inquiet mais tiendriez'], ['4', 'Resteriez calme et continueriez d’investir'], ['5', 'Achèteriez plus avec plaisir']], '3')}
      ${MQ.slider('m', 'Montant mensuel que vous pouvez investir', 25, 2000, 25, 200, 'eur')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('eq', 'Actions', 'hi')}${MQ.stat('bo', 'Obligations')}${MQ.stat('ca', 'Liquidités')}</div>
      <div class="tape" data-r="plan" style="max-height:none;white-space:pre-wrap;font-family:var(--font-body);font-size:.92rem"></div>
      <div class="btnrow" style="margin-top:.7rem"><button class="btn sm" type="button" data-copy>Copier mon plan</button><span class="note" data-r="cp"></span></div>
    </div></div>
    <p class="note">Un exemple de la façon dont le temps et l’aisance face au risque peuvent façonner une répartition. C’est un outil pédagogique, pas un conseil personnalisé.</p>`;
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
      const goalName = { emergency: 'Fonds d’urgence', house: 'Gros achat', retire: 'Retraite et patrimoine à long terme', free: 'Liberté financière' }[v.goal];
      text = 'MON PLAN D’INVESTISSEMENT\n' +
        'Objectif : ' + goalName + ' dans ' + v.yrs + ' ans.\n' +
        'Répartition : ' + eq + ' % en fonds indiciel actions mondial, ' + bo + ' % en obligations, ' + ca + ' % en liquidités.\n' +
        'J’investis ' + MQ.eur(v.m) + ' chaque mois, automatiquement, le jour de la paie.\n' +
        'Je rééquilibre une fois par an, ou quand une part s’écarte de 5 points de la cible.\n' +
        'Lors d’un krach de 30 %, je vais : ne pas regarder tous les jours, ne pas vendre, et maintenir mon montant mensuel.\n' +
        'Je n’achèterai rien que je ne comprends pas, ni rien de promis comme « garanti ».\n' +
        'Une hypothèse prudente de 5 % par an (pas une promesse) ferait grossir mes versements jusqu’à environ ' + MQ.eur(proj.val[proj.val.length - 1]) + '.';
      MQ.set(el, {
        bar: MQ.stackBar([{ v: eq, c: '#14B37D', l: 'Actions' }, { v: bo, c: '#5E8BFF', l: 'Obligations' }, { v: ca, c: '#C9C5EE', l: 'Liquidités' }]),
        eq: eq + ' %', bo: bo + ' %', ca: ca + ' %', plan: MQ.esc(text), cp: ''
      });
    });
    el.querySelector('[data-copy]').addEventListener('click', () => {
      const note = el.querySelector('[data-r="cp"]');
      const fallback = () => { note.textContent = 'Sélectionnez le texte ci-dessus pour le copier.'; };
      try { navigator.clipboard.writeText(text).then(() => { note.textContent = 'Copié !'; }, fallback); } catch (e) { fallback(); }
    });
  };

  /* ---------------- quel parcours est fait pour vous ? ---------------- */
  W.chooser = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Combien de temps pouvez-vous consacrer aux marchés chaque semaine ?', [['Environ 1 heure', 0], ['Quelques heures', 1], ['Beaucoup d’heures, je veux en faire un métier', 2]]],
      ['Que voulez-vous que votre argent fasse ?', [['Croître régulièrement sur plus de 10 ans', 0], ['Un mélange des deux', 1], ['Produire des résultats actifs grâce à mes compétences', 2]]],
      ['Votre compte perd 25 % en un mois. Vous…', [['Détestez ça et avez besoin d’une croissance calme et lente', 0], ['Tenez et réfléchissez', 1], ['Révisez vos règles et continuez d’exécuter', 2]]],
      ['Quel monde vous enthousiasme le plus ?', [['Entreprises, fonds et marchés traditionnels', 'S'], ['Crypto et nouvelles technologies', 'C']]]
    ];
    const ans = [];
    el.innerHTML = `<h4 class="wt">Quel parcours est fait pour vous ?</h4><div class="cards">${Q.map((q, i) => `<div class="fld"><label>${i + 1}. ${q[0]}</label><div class="seg" data-q="${i}">${q[1].map((o, j) => `<button type="button" data-j="${j}">${o[0]}</button>`).join('')}</div></div>`).join('')}</div><div data-r="res"></div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-j]'); if (!b) return;
      const seg = b.parentNode, qi = parseInt(seg.dataset.q, 10);
      seg.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on');
      ans[qi] = Q[qi][1][parseInt(b.dataset.j, 10)][1];
      if (ans.filter((x) => x !== undefined).length < 4) return;
      const score = ans[0] + ans[1] + ans[2], trader = score >= 4, crypto = ans[3] === 'C';
      const k = trader ? (crypto ? 'ct' : 'trd') : (crypto ? 'ci' : 'inv');
      const T = MQ.tracks[k];
      el.querySelector('[data-r="res"]').innerHTML = `<div class="msg"><p><b>Parcours suggéré : ${T.name}.</b></p><p>${trader ? 'Vos réponses indiquent un style actif. Très bien, mais construisez d’abord les fondations et les compétences d’investisseur. La plupart des traders qui réussissent gardent aussi un noyau d’investissement à long terme.' : 'Vos réponses indiquent un style calme et de long terme. C’est le parcours qui convient à la plupart des gens.'}</p>
      <div class="btnrow"><a class="btn sm" href="#track-found">Commencer par les Fondamentaux</a><a class="btn sm alt" href="#track-${k}">Ouvrir ${T.name}</a></div></div>`;
    });
  };
})();
