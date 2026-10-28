/* Widgets for Foundations and the Everyday Investor path */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* shared compounding simulator: returns yearly values and contributions */
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
  const xl = (years) => { const a = [{ i: 0, t: 'Now' }]; const step = years > 30 ? 10 : (years > 12 ? 5 : (years > 6 ? 2 : 1)); for (let y = step; y < years; y += step) a.push({ i: y, t: y + 'y' }); a.push({ i: years, t: years + 'y' }); return a; };

  /* ---------------- inflation time machine ---------------- */
  W.inflation = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Inflation time machine</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('price', 'Price of a pizza today', 5, 30, 1, 10, 'eur')}
      ${MQ.slider('inf', 'Inflation per year', 0, 10, 0.5, 3, 'pct')}
      ${MQ.slider('yrs', 'Years into the future', 1, 40, 1, 20, 'yr')}
      ${MQ.slider('ret', 'If your money were invested at (per year)', 0, 10, 0.5, 5, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pizza', 'Pizza price then', 'hi')}${MQ.stat('cash', '€1,000 in cash is worth (today\'s money)', 'bad')}${MQ.stat('inv', '€1,000 invested is worth (today\'s money)', 'good')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Cash under the mattress', 'var(--trd)'], ['Invested', 'var(--inv)']])}
    </div></div>
    <p class="note">Real value = what your money can actually buy, measured in today's prices. Try 6% inflation and 0% return to feel the pain.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const i = v.inf / 100, r = v.ret / 100;
      const cash = [], inv = [];
      for (let y = 0; y <= v.yrs; y++) { cash.push(1000 / Math.pow(1 + i, y)); inv.push(1000 * Math.pow((1 + r) / (1 + i), y)); }
      MQ.set(el, { pizza: MQ.eur(v.price * Math.pow(1 + i, v.yrs), 2), cash: MQ.eur(cash[v.yrs]), inv: MQ.eur(inv[v.yrs]) });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: cash, color: 'var(--trd)' }, { data: inv, color: 'var(--inv)' }], { fmt: (x) => MQ.eur(x), xLabels: xl(v.yrs), label: 'Real value of 1000 euros over time', min: 0 }));
    });
  };

  /* ---------------- budget 50/30/20 ---------------- */
  W.budget = (el) => {
    accent(el, 'found');
    el.innerHTML = `<h4 class="wt">Your 50/30/20 budget</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('inc', 'Monthly income after tax (€)', 1200, 0, 100000, 50)}
      ${MQ.slider('needs', 'Needs (rent, food, transport, bills)', 20, 80, 1, 50, 'pct')}
      ${MQ.slider('wants', 'Wants (fun, eating out, subscriptions)', 0, 60, 1, 30, 'pct')}
      <p class="note">Savings and investing get whatever is left over.</p>
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('n', 'Needs / month')}${MQ.stat('w', 'Wants / month')}${MQ.stat('s', 'Save & invest / month', 'hi')}</div>
      <div class="stats">${MQ.stat('ef3', 'Emergency fund goal (3 months of needs)')}${MQ.stat('efm', 'Time to build it')}${MQ.stat('yr', 'Saved per year')}</div>
    </div></div>`;
    MQ.bind(el, (v) => {
      const s = Math.max(0, 100 - v.needs - v.wants);
      const n = v.inc * v.needs / 100, w = v.inc * v.wants / 100, sv = v.inc * s / 100;
      const ef = n * 3;
      MQ.set(el, {
        bar: MQ.stackBar([{ v: v.needs, c: '#5E8BFF', l: 'Needs' }, { v: v.wants, c: '#FFC21A', l: 'Wants' }, { v: s, c: '#14B37D', l: 'Save and invest' }]) + MQ.legend([['Needs', '#5E8BFF'], ['Wants', '#FFC21A'], ['Save & invest', '#14B37D']]),
        n: MQ.eur(n), w: MQ.eur(w), s: MQ.eur(sv) + ' (' + s + '%)', ef3: MQ.eur(ef),
        efm: sv > 0 ? Math.ceil(ef / sv) + ' months' : 'Cut wants first', yr: MQ.eur(sv * 12)
      });
    });
  };

  /* ---------------- compound interest machine ---------------- */
  W.compound = (el, d) => {
    accent(el, 'inv');
    const compact = d.compact === '1', wait0 = parseFloat(d.wait) || 0;
    const hid = (k, v) => `<input type="hidden" data-k="${k}" value="${v}">`;
    el.innerHTML = `<h4 class="wt">${compact ? 'Try it: what could €100 a month become?' : 'Compound interest machine'}</h4>
    <div class="${compact ? '' : 'wgrid'}"><div class="wctl">
      ${compact ? hid('start', 0) + hid('wait', 0) + hid('real', 0) : MQ.slider('start', 'Starting amount', 0, 50000, 500, 1000, 'eur')}
      ${MQ.slider('monthly', 'You add every month', 0, 2000, 10, 100, 'eur')}
      ${MQ.slider('ret', 'Average return per year', 0, 15, 0.5, 7, 'pct')}
      ${MQ.slider('yrs', 'Years', 1, 50, 1, 30, 'yr')}
      ${compact ? '' : MQ.slider('wait', 'Compare: what if you wait before starting?', 0, 20, 1, wait0, 'yr')}
      ${compact ? '' : MQ.check('real', 'Show values in today\'s money (assume 2% inflation)', false)}
      ${compact ? '' : '<div class="seg" data-presets><button type="button" data-p="150">€5/day coffee fund</button><button type="button" data-p="50">Student: €50/month</button><button type="button" data-p="500">Serious: €500/month</button></div>'}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fin', 'You end up with', 'hi')}${MQ.stat('paid', 'You paid in')}${MQ.stat('gain', 'Growth did the rest', 'good')}${compact ? '' : MQ.stat('dbl', 'Money doubles every')}${compact ? '' : MQ.stat('cost', 'Cost of waiting', 'bad')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Total you paid in', 'var(--muted)'], ['Your investments', 'var(--inv)']].concat(compact ? [] : [['If you start later', 'var(--trd)']]))}
    </div></div>
    <p class="note">${compact ? 'Illustration only. Real returns vary every year and are never guaranteed.' : 'Returns here are smooth averages. Real markets go up and down, and nothing is guaranteed. The shape of the curve is the lesson: time does the heavy lifting.'}</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => MQ.setVal(el, 'monthly', b.dataset.p)));
    MQ.bind(el, (v) => {
      const R = v.ret / 100, base = sim(v.start, v.monthly, R, v.yrs, 0), wt = v.wait > 0 ? sim(v.start, v.monthly, R, v.yrs, Math.min(v.wait, v.yrs)) : null;
      const adj = (arr) => v.real ? arr.map((x, i) => x / Math.pow(1.02, i)) : arr;
      const a = adj(base.val), c = base.con, b = wt ? adj(wt.val) : null;
      const fin = a[v.yrs];
      MQ.set(el, {
        fin: MQ.eur(fin), paid: MQ.eur(c[v.yrs]), gain: MQ.eur(fin - (v.real ? c[v.yrs] : c[v.yrs])),
        dbl: v.ret > 0 ? (72 / v.ret).toFixed(1) + ' years' : 'never',
        cost: b ? MQ.eur(fin - b[v.yrs]) : '€0'
      });
      const series = [{ data: c, color: 'var(--muted)', area: true, nodot: true, w: 2 }, { data: a, color: 'var(--inv)' }];
      if (b) series.push({ data: b, color: 'var(--trd)', dash: true });
      MQ.draw(ch, (w) => MQ.lineChart(w, compact ? 200 : 270, series, { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : x >= 1000 ? '€' + Math.round(x / 1000) + 'k' : '€' + Math.round(x), xLabels: xl(v.yrs), label: 'Growth of an investment with regular monthly contributions', min: 0 }));
    });
  };

  /* ---------------- risk ladder ---------------- */
  W.ladder = (el) => {
    accent(el, 'found');
    const rows = [
      ['Savings account', 0, 'Worst year: about 0% (you do not lose capital, up to the deposit guarantee). Typical long-run: roughly 0 to 3% a year, often below inflation.'],
      ['Government bonds', 17, 'Worst recent year: about -13% (2022, when interest rates rose fast). Typical long-run: roughly 2 to 4% a year. Safer than stocks, but not risk-free.'],
      ['Global stock index', 40, 'Worst year in recent history: about -37% (2008). Typical long-run: roughly 6 to 9% a year before inflation, with big swings on the way.'],
      ['Gold', 30, 'Worst year: about -28% (2013). Does not produce income. It has often behaved differently from stocks, which can help diversification.'],
      ['One single company stock', 80, 'A single company can fall 50% to 90%, or go bankrupt (-100%). Great stories can still end badly. Concentration is the risk.'],
      ['Bitcoin', 75, 'Has fallen 70 to 85% from peak to bottom several times (2014, 2018, 2022). It also rose enormously. Extremely volatile, so position size matters.'],
      ['Small altcoin or memecoin', 98, 'Most small tokens eventually lose nearly all of their value. A few win big. Treat it as a lottery ticket, never as a savings plan.']
    ];
    el.innerHTML = `<h4 class="wt">The risk ladder</h4>
    <p class="note" style="margin-top:0">Tap a row. The bar shows how bad a really bad year has been (longer bar = deeper possible loss). Illustrative, simplified numbers.</p>
    <div class="ladder">${rows.map((r, i) => `<button type="button" class="lrow" data-i="${i}" aria-expanded="false"><b>${r[0]}</b><span class="lbar"><i style="width:${Math.max(r[1], 1.5)}%"></i></span><span class="lnote">${r[2]}</span></button>`).join('')}</div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('.lrow'); if (!b) return;
      const on = b.classList.contains('on');
      el.querySelectorAll('.lrow').forEach((x) => { x.classList.remove('on'); x.setAttribute('aria-expanded', 'false'); });
      if (!on) { b.classList.add('on'); b.setAttribute('aria-expanded', 'true'); }
    });
  };

  /* ---------------- portfolio builder game ---------------- */
  const AS = [['stocks', 'Global stocks', '#14B37D'], ['bonds', 'Bonds', '#5E8BFF'], ['cash', 'Cash', '#C9C5EE'], ['gold', 'Gold', '#FFC21A'], ['crypto', 'Crypto', '#A58FFF']];
  const SC = {
    boom: { n: 'Boring bull market', t: 'Eight mostly calm years. Stocks grind higher with one dip.', r: { stocks: [12, 9, 14, -4, 18, 10, 8, 15], bonds: [3, 2, 4, 3, 1, 4, 3, 2], cash: [2, 2, 2, 2, 2, 2, 2, 2], gold: [2, -3, 5, 1, 6, 0, 3, 2], crypto: [60, -20, 120, -45, 90, 15, -30, 70] } },
    crash: { n: 'Crash and recovery', t: 'A deep crash in year 2, then a strong comeback.', r: { stocks: [-8, -37, 26, 15, 2, 16, 32, 13], bonds: [5, 5, 6, 7, 4, -2, 6, 1], cash: [3, 1, 0, 0, 0, 0, 0, 0], gold: [5, 5, 24, 29, 10, -28, -2, 0], crypto: [-30, -60, 80, 150, -50, 40, 200, -30] } },
    infl: { n: 'Inflation shock', t: 'Prices jump, interest rates rise. Bonds and stocks both suffer at first.', r: { stocks: [-19, 24, 12, -5, 9, 11, -6, 13], bonds: [-13, 5, 3, -2, 2, 4, 2, 1], cash: [1, 4, 4, 3, 2, 2, 2, 2], gold: [0, 13, 2, 5, 8, 15, -3, 6], crypto: [-64, 155, 120, -25, -15, 60, 20, -30] } },
    lost: { n: 'Lost decade', t: 'Stocks go nowhere for years with scary swings. Gold shines.', r: { stocks: [-9, -12, -22, 28, 11, 5, 16, 5], bonds: [8, 8, 10, 4, 4, 2, 3, 4], cash: [5, 3, 1, 1, 2, 3, 5, 3], gold: [1, 2, 25, 20, 18, 24, 30, 23], crypto: [-50, -30, -70, 200, -40, 40, -10, -60] } }
  };
  const PRESETS = { Careful: [30, 50, 20, 0, 0], Balanced: [60, 30, 0, 10, 0], Growth: [85, 5, 0, 5, 5], 'All stocks': [100, 0, 0, 0, 0], 'All crypto': [0, 0, 0, 0, 100] };
  const runPort = (w, sc) => {
    const tot = Object.keys(w).reduce((a, k) => a + w[k], 0) || 1;
    let v = 10000; const path = [v];
    for (let y = 0; y < 8; y++) { let r = 0; for (const k in w) r += (w[k] / tot) * sc.r[k][y] / 100; v *= 1 + r; path.push(v); }
    return path;
  };
  const maxDD = (p) => { let pk = p[0], dd = 0; p.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); }); return dd; };
  W.alloc = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Build your portfolio, then survive the stress test</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(PRESETS).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${AS.map((a) => MQ.slider(a[0], a[1], 0, 100, 5, PRESETS.Balanced[AS.indexOf(a)], 'pct')).join('')}
      <div data-r="tot" class="note"></div>
      ${MQ.select('sc', 'Scenario (8 years, starting with €10,000)', Object.keys(SC).map((k) => [k, SC[k].n]), 'crash')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('fin', 'Final value', 'hi')}${MQ.stat('dd', 'Worst drop on the way', 'bad')}${MQ.stat('feel', 'How it feels')}</div>
      <div class="chart" data-c="1"></div>
      <p class="note" data-r="desc"></p>
      <div data-r="all"></div>
    </div></div>
    <p class="note">Stylised scenarios loosely inspired by past episodes. They are not real data and not forecasts. The crypto numbers are invented to show how wild such an asset can be.</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      PRESETS[b.dataset.p].forEach((x, i) => { const inp = el.querySelector('[data-k="' + AS[i][0] + '"]'); inp.value = x; });
      MQ.setVal(el, 'stocks', PRESETS[b.dataset.p][0]);
    }));
    MQ.bind(el, (v) => {
      const w = {}; AS.forEach((a) => { w[a[0]] = v[a[0]]; });
      const tot = AS.reduce((s, a) => s + w[a[0]], 0);
      const sc = SC[v.sc], p = runPort(w, sc), dd = maxDD(p);
      const feel = dd > -0.1 ? 'Sleeps like a baby' : dd > -0.25 ? 'Some tossing and turning' : dd > -0.4 ? 'Very stressful' : 'Panic-sell territory';
      let rows = '';
      Object.keys(SC).forEach((k) => { const pp = runPort(w, SC[k]); rows += `<tr><th scope="row">${SC[k].n}</th><td>${MQ.eur(pp[8])}</td><td>${MQ.pct(maxDD(pp) * 100, 0)}</td></tr>`; });
      MQ.set(el, {
        tot: tot === 100 ? 'Total: 100%. Perfect.' : 'Total: ' + tot + '%. The game scales it to 100% for you.',
        bar: MQ.stackBar(AS.map((a) => ({ v: w[a[0]], c: a[2], l: a[1] }))) + MQ.legend(AS.map((a) => [a[1], a[2]])),
        fin: MQ.eur(p[8]), dd: MQ.pct(dd * 100, 0), feel, desc: '<b>' + sc.n + ':</b> ' + sc.t,
        all: '<div class="tbl"><table><thead><tr><th>Scenario</th><th>Final value</th><th>Worst drop</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 220, [{ data: p, color: 'var(--inv)', area: true }], { fmt: (x) => '€' + Math.round(x / 1000) + 'k', xLabels: xl(8), label: 'Portfolio value over 8 years in the chosen scenario' }));
    });
  };

  /* ---------------- DCA vs lump sum ---------------- */
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
    el.innerHTML = `<h4 class="wt">Lump sum vs. monthly investing</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('cap', 'Total you want to invest over 3 years', 1200, 12000, 600, 3600, 'eur')}
      ${MQ.slider('drift', 'Market trend (average yearly return)', -10, 20, 1, 8, 'pct')}
      ${MQ.slider('vol', 'How wild is the market (yearly swings)', 8, 60, 1, 25, 'pct')}
      <div class="btnrow"><button class="btn sm" type="button" data-new>New random market</button><button class="btn sm alt" type="button" data-mc>Run 1,000 markets</button></div>
      <div class="msg" data-r="mc" hidden></div>
    </div><div class="wout">
      <div class="stats">${MQ.stat('lump', 'Everything on day 1', 'hi')}${MQ.stat('dca', 'Same money, 36 monthly buys', 'hi')}${MQ.stat('who', 'Winner this time')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Lump sum on day 1', 'var(--trd)'], ['Monthly investing (DCA)', 'var(--inv)']])}
      <p class="note">Same total invested in both cases. DCA (dollar-cost averaging) means buying a fixed amount at regular dates.</p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const pr = pricePath(seed, v.drift / 100, v.vol / 100, 36), r = dcaRun(pr, v.cap);
      const L = r.lump[36], D = r.dca[36];
      MQ.set(el, { lump: MQ.eur(L), dca: MQ.eur(D), who: Math.abs(L - D) < v.cap * 0.005 ? 'A tie' : (L > D ? 'Lump sum' : 'Monthly investing') });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: r.lump, color: 'var(--trd)' }, { data: r.dca, color: 'var(--inv)' }], { fmt: (x) => '€' + MQ.num(x), xLabels: [{ i: 0, t: 'Start' }, { i: 12, t: '1y' }, { i: 24, t: '2y' }, { i: 36, t: '3y' }], label: 'Portfolio value, lump sum versus monthly investing' }));
    });
    el.querySelector('[data-new]').addEventListener('click', () => { seed += 13; upd(); });
    el.querySelector('[data-mc]').addEventListener('click', () => {
      const v = {}; MQ.$$('[data-k]', el).forEach((i) => { v[i.dataset.k] = parseFloat(i.value); });
      let lw = 0; const N = 1000;
      for (let s = 0; s < N; s++) { const r = dcaRun(pricePath(1000 + s, v.drift / 100, v.vol / 100, 36), v.cap); if (r.lump[36] > r.dca[36]) lw++; }
      const box = el.querySelector('[data-r="mc"]'); box.hidden = false;
      box.innerHTML = `<p><b>Lump sum won ${lw} of ${N} simulated markets (${(lw / N * 100).toFixed(0)}%).</b> Monthly investing won ${N - lw}.</p><p>When markets trend up, having all your money invested earlier usually wins. When they fall or whipsaw, monthly buying protects you. DCA is mostly about reducing regret and building a habit.</p>`;
    });
  };

  /* ---------------- market crash survival game ---------------- */
  W.panic = (el) => {
    accent(el, 'trd');
    const S = [
      { m: 100, h: 'Calm day. You own €10,000 of a global stock fund and your plan says: hold for 10+ years.' },
      { m: 92, h: 'Headlines: "Virus fears spread, stocks slide 8%." Your group chat is full of red charts.' },
      { m: 80, h: 'Lockdowns begin. Markets are 20% below their peak. Your portfolio feels heavy.' },
      { m: 66, h: 'Worst week in decades. Stocks are down 34% from the top. TV calls it a "bloodbath".' },
      { m: 72, h: 'A bounce of +9% from the lows. Nobody knows if it will last.' },
      { m: 85, h: 'Central banks pump in support. Stocks recover more, but the economy still looks awful.' },
      { m: 98, h: 'Six months after the start, the market is almost back to where it began.' },
      { m: 112, h: 'One year later, the index is at a new all-time high.' }
    ];
    let st, log;
    const reset = () => { st = { i: 0, units: 100, cash: 0, added: 0 }; log = []; };
    const view = () => {
      const s = S[st.i], val = st.units * s.m + st.cash, hold = 100 * s.m;
      if (st.i >= 7) {
        const edge = val - st.added - hold;
        el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
        <div class="stats">${MQ.stat('a', 'Your final value', 'hi')}${MQ.stat('b', 'If you had done nothing')}${MQ.stat('c', 'You added from savings')}</div>
        <div class="msg"><p><b>${edge > 50 ? 'You beat doing nothing by ' + MQ.eur(edge) + '.' : edge < -50 ? 'Doing nothing would have beaten you by ' + MQ.eur(-edge) + '.' : 'You ended almost exactly where doing nothing would have.'}</b></p>
        <p>${st.cash > 0 ? 'You are still holding cash, so you missed the whole recovery. ' : ''}${log.some((x) => x === 'sell') ? 'Selling near the bottom turns a temporary drop into a permanent loss, and then you have to decide when to buy back in, which is even harder. ' : ''}${log.some((x) => x === 'add') ? 'Adding money during the fall was uncomfortable but is how long-term investors win. ' : ''}Great investors have a plan before the crash, not during it.</p></div>
        <div class="btnrow" style="margin-top:.8rem"><button class="btn sm" type="button" data-act="again">Play again</button></div>`;
        MQ.set(el, { a: MQ.eur(val), b: MQ.eur(hold), c: MQ.eur(st.added) });
        return;
      }
      const dd = (s.m / 100 - 1) * 100;
      el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
      <div class="stats">${MQ.stat('v', 'Your portfolio now', 'hi')}${MQ.stat('m', 'Market vs. start')}${MQ.stat('k', 'In cash')}</div>
      ${st.i === 0 ? '<p>Press start. Each round you decide what to do. There is no perfect answer, only trade-offs.</p><div class="btnrow"><button class="btn sm" type="button" data-act="hold">Start the story</button></div>' :
        `<p><b>What do you do?</b></p><div class="btnrow">
          <button class="btn sm alt" type="button" data-act="hold">Hold. Stick to the plan.</button>
          <button class="btn sm alt" type="button" data-act="sell" ${st.units > 0 ? '' : 'disabled'}>Sell everything</button>
          <button class="btn sm alt" type="button" data-act="back" ${st.cash > 0 ? '' : 'disabled'}>Buy back in with my cash</button>
          <button class="btn sm alt" type="button" data-act="add">Add €1,000 from savings</button></div>`}
      <p class="note">Round ${st.i + 1} of 8. Stylised story inspired by early 2020, not exact data.</p>`;
      MQ.set(el, { v: MQ.eur(val), m: (dd >= 0 ? '+' : '') + dd.toFixed(0) + '%', k: MQ.eur(st.cash) });
    };
    reset();
    el.innerHTML = '<h4 class="wt">Market crash survival game</h4><div data-g></div>';
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

  /* ---------------- fee drag ---------------- */
  W.fees = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">The silent cost of fees</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('start', 'Starting amount', 0, 100000, 1000, 10000, 'eur')}
      ${MQ.slider('monthly', 'Monthly contribution', 0, 2000, 50, 200, 'eur')}
      ${MQ.slider('yrs', 'Years', 5, 50, 1, 30, 'yr')}
      ${MQ.slider('gross', 'Market return before costs', 2, 12, 0.5, 7, 'pct')}
      ${MQ.slider('a', 'Option A: cheap index ETF, yearly cost', 0, 3, 0.05, 0.2, 'pct')}
      ${MQ.slider('b', 'Option B: expensive fund, yearly cost', 0, 3, 0.05, 1.8, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fa', 'Option A ends with', 'good')}${MQ.stat('fb', 'Option B ends with', 'bad')}${MQ.stat('diff', 'Fees ate', 'hi')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Cheap ETF', 'var(--inv)'], ['Expensive fund', 'var(--trd)']])}
      <p class="note" data-r="note"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const A = sim(v.start, v.monthly, (v.gross - v.a) / 100, v.yrs, 0), Bq = sim(v.start, v.monthly, (v.gross - v.b) / 100, v.yrs, 0);
      const fa = A.val[v.yrs], fb = Bq.val[v.yrs], growthA = fa - A.con[v.yrs];
      MQ.set(el, { fa: MQ.eur(fa), fb: MQ.eur(fb), diff: MQ.eur(fa - fb), note: growthA > 0 ? 'The expensive option gives up about ' + Math.round((fa - fb) / growthA * 100) + '% of what the cheap option earns. You pay the fee every single year, whether the fund did well or not.' : '' });
      MQ.draw(ch, (w) => MQ.lineChart(w, 220, [{ data: A.val, color: 'var(--inv)' }, { data: Bq.val, color: 'var(--trd)' }], { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : '€' + Math.round(x / 1000) + 'k', xLabels: xl(v.yrs), label: 'Portfolio value with low and high fees', min: 0 }));
    });
  };

  /* ---------------- investment plan builder ---------------- */
  W.ips = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Build your one-page investing plan</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.select('goal', 'What is this money for?', [['emergency', 'Emergency fund'], ['house', 'A big purchase in a few years'], ['retire', 'Retirement / long-term wealth'], ['free', 'Financial freedom (flexible, long-term)']], 'retire')}
      ${MQ.slider('yrs', 'When will you need it?', 1, 40, 1, 20, 'yr')}
      ${MQ.select('feel', 'If your portfolio fell 30% in a few months, you would…', [['1', 'Panic and sell'], ['2', 'Feel very sick but probably hold'], ['3', 'Be worried but hold'], ['4', 'Stay calm and keep investing'], ['5', 'Buy more happily']], '3')}
      ${MQ.slider('m', 'Monthly amount you can invest', 25, 2000, 25, 200, 'eur')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('eq', 'Stocks', 'hi')}${MQ.stat('bo', 'Bonds')}${MQ.stat('ca', 'Cash')}</div>
      <div class="tape" data-r="plan" style="max-height:none;white-space:pre-wrap;font-family:var(--font-body);font-size:.92rem"></div>
      <div class="btnrow" style="margin-top:.7rem"><button class="btn sm" type="button" data-copy>Copy my plan</button><span class="note" data-r="cp"></span></div>
    </div></div>
    <p class="note">An example of how time and comfort with risk can shape a mix. It is a teaching tool, not personal advice.</p>`;
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
      const goalName = { emergency: 'Emergency fund', house: 'Big purchase', retire: 'Retirement and long-term wealth', free: 'Financial freedom' }[v.goal];
      text = 'MY INVESTING PLAN\n' +
        'Goal: ' + goalName + ' in ' + v.yrs + ' years.\n' +
        'Mix: ' + eq + '% global stock index fund, ' + bo + '% bonds, ' + ca + '% cash.\n' +
        'I invest ' + MQ.eur(v.m) + ' every month, automatically, on payday.\n' +
        'Rebalance once a year, or when any slice drifts 5 points from target.\n' +
        'In a 30% crash I will: not look daily, not sell, and keep my monthly amount going.\n' +
        'I will not buy things I do not understand or anything promised as "guaranteed".\n' +
        'A cautious 5% yearly assumption (not a promise) would grow my contributions to about ' + MQ.eur(proj.val[proj.val.length - 1]) + '.';
      MQ.set(el, {
        bar: MQ.stackBar([{ v: eq, c: '#14B37D', l: 'Stocks' }, { v: bo, c: '#5E8BFF', l: 'Bonds' }, { v: ca, c: '#C9C5EE', l: 'Cash' }]),
        eq: eq + '%', bo: bo + '%', ca: ca + '%', plan: MQ.esc(text), cp: ''
      });
    });
    el.querySelector('[data-copy]').addEventListener('click', () => {
      const note = el.querySelector('[data-r="cp"]');
      const fallback = () => { note.textContent = 'Select the text above to copy it.'; };
      try { navigator.clipboard.writeText(text).then(() => { note.textContent = 'Copied!'; }, fallback); } catch (e) { fallback(); }
    });
  };

  /* ---------------- which path fits you? ---------------- */
  W.chooser = (el) => {
    accent(el, 'ci');
    const Q = [
      ['How much time can you give to markets each week?', [['About 1 hour', 0], ['A few hours', 1], ['Many hours, I want it to be a craft', 2]]],
      ['What do you want your money to do?', [['Grow steadily over 10+ years', 0], ['Be a mix of both', 1], ['Generate active results from my skills', 2]]],
      ['Your account is down 25% in a month. You…', [['Would hate it and need calm, slow growth', 0], ['Would hold and think', 1], ['Would review my rules and keep executing', 2]]],
      ['Which world excites you more?', [['Companies, funds and traditional markets', 'S'], ['Crypto and new technology', 'C']]]
    ];
    const ans = [];
    el.innerHTML = `<h4 class="wt">Which path fits you?</h4><div class="cards">${Q.map((q, i) => `<div class="fld"><label>${i + 1}. ${q[0]}</label><div class="seg" data-q="${i}">${q[1].map((o, j) => `<button type="button" data-j="${j}">${o[0]}</button>`).join('')}</div></div>`).join('')}</div><div data-r="res"></div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-j]'); if (!b) return;
      const seg = b.parentNode, qi = parseInt(seg.dataset.q, 10);
      seg.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on');
      ans[qi] = Q[qi][1][parseInt(b.dataset.j, 10)][1];
      if (ans.filter((x) => x !== undefined).length < 4) return;
      const score = ans[0] + ans[1] + ans[2], trader = score >= 4, crypto = ans[3] === 'C';
      const k = trader ? (crypto ? 'ct' : 'trd') : (crypto ? 'ci' : 'inv');
      const T = MQ.tracks[k];
      el.querySelector('[data-r="res"]').innerHTML = `<div class="msg"><p><b>Suggested path: ${T.name}.</b></p><p>${trader ? 'Your answers point to an active style. Great, but build the foundations and the investor skills first. Most successful traders keep a long-term investing core too.' : 'Your answers point to a calm, long-term style. That is the path that works for most people.'}</p>
      <div class="btnrow"><a class="btn sm" href="#track-found">Start with Foundations</a><a class="btn sm alt" href="#track-${k}">Open ${T.name}</a></div></div>`;
    });
  };
})();
