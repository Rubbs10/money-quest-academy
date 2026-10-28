/* Money Quest Academy: router, views, progress and quizzes */
(function () {
  'use strict';
  const MQ = window.MQ, $ = MQ.$, B = MQ.B;
  const root = document.documentElement;
  const app = document.getElementById('app');

  /* ---------------- progress ---------------- */
  let P = MQ.store.get('progress', null);
  if (!P || typeof P !== 'object') P = {};
  P.done = P.done || {}; P.ans = P.ans || {}; P.xp = P.xp || 0; P.name = P.name || '';
  const save = () => MQ.store.set('progress', P);
  const LEVELS = [[0, 'Rookie'], [100, 'Saver'], [250, 'Investor'], [450, 'Strategist'], [750, 'Pro']];
  const level = () => { let l = LEVELS[0][1]; LEVELS.forEach((x) => { if (P.xp >= x[0]) l = x[1]; }); return l; };
  const updXP = () => { $('#xp').textContent = level() + ' · ' + P.xp + ' XP'; };
  const lessons = (k) => MQ.lessons[k] || [];
  const total = () => MQ.order.reduce((a, k) => a + lessons(k).length, 0);
  const doneCount = (k) => lessons(k).filter((l) => P.done[l.id]).length;
  const find = (id) => { for (const k of MQ.order) { const a = lessons(k); for (let i = 0; i < a.length; i++) if (a[i].id === id) return { k, i, l: a[i] }; } return null; };
  MQ.progress = { get: () => P, save, updXP, level, doneCount };

  /* ---------------- chrome: nav + theme ---------------- */
  const NAV = [['track-found', 'Basics'], ['track-inv', 'Investor'], ['track-trd', 'Day Trader'], ['track-ci', 'Crypto Investor'], ['track-ct', 'Crypto Trader'], ['glossary', 'Glossary'], ['pro', 'Pro Path'], ['lab', 'Trading Lab']];
  const nav = $('#nav');
  nav.innerHTML = NAV.map((n) => `<a href="#${n[0]}" data-nav="${n[0]}">${n[1]}</a>`).join('');
  $('#menu').addEventListener('click', () => { const o = nav.classList.toggle('open'); $('#menu').setAttribute('aria-expanded', o ? 'true' : 'false'); });
  const eff = () => root.dataset.theme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const savedTheme = MQ.store.get('theme', null); if (savedTheme) root.dataset.theme = savedTheme;
  $('#theme').addEventListener('click', () => { const t = eff() === 'dark' ? 'light' : 'dark'; root.dataset.theme = t; MQ.store.set('theme', t); });
  const setNav = (id) => { MQ.$$('#nav a').forEach((a) => a.classList.toggle('on', a.dataset.nav === id)); nav.classList.remove('open'); $('#menu').setAttribute('aria-expanded', 'false'); };

  /* ---------------- shared pieces ---------------- */
  const RISK = { found: 0, inv: 2, ci: 3, trd: 4, ct: 5 };
  const riskDots = (k) => '<span class="risk" title="Risk level of the activity">Risk ' + [1, 2, 3, 4, 5].map((n) => '<i class="' + (n <= RISK[k] ? 'f' : '') + '"></i>').join('') + '</span>';
  const mins = (k) => lessons(k).reduce((s, l) => s + l.m, 0);
  const pcard = (k) => {
    const T = MQ.tracks[k], a = lessons(k), d = doneCount(k), pct = a.length ? Math.round(d / a.length * 100) : 0;
    return `<a class="pcard" href="#track-${k}" style="${MQ.trackStyle(k)}"><div class="pc-top"><span class="pc-icon">${MQ.icons[k]}</span><span class="pc-kind">${T.kind}</span></div>
      <h3>${T.name}</h3><p>${T.desc}</p><div class="pc-foot"><span>${a.length} lessons · ~${mins(k)} min</span>${k === 'found' ? '' : riskDots(k)}<span class="pbar" title="${pct}% complete"><i style="width:${pct}%"></i></span></div></a>`;
  };
  const nTools = () => Object.keys(MQ.widgets).filter((k) => !/^(checklist|chooser|cert)$/.test(k)).length;

  /* ---------------- views ---------------- */
  function homeView() {
    const tick = ['Compound interest', 'Diversify', 'Risk first', 'Time in the market', 'Cut your losses', 'Not your keys, not your coins', 'Plan the trade, trade the plan', 'Pay yourself first', 'Fees matter', 'Never invest what you cannot afford to lose'];
    const tk = tick.map((t, i) => '<span>' + (i % 3 === 0 ? '<b>▲</b> ' : '') + t + '</span>').join('');
    return `<div class="ticker" aria-hidden="true"><div class="tk">${tk}${tk}${tk}${tk}</div></div>
    <section class="hero"><div class="wrap hero-g">
      <div>
        <p class="eyebrow">Free course · ${total()} lessons · 4 paths</p>
        <h1><mark>Zero to pro</mark> with money. Learn it by playing.</h1>
        <p class="lead">A free, open course in investing and trading for young people and anyone starting from scratch. <b>Four separate paths</b>: investor, day trader, crypto investor and crypto trader. Real-life examples, and games that let you make mistakes with pretend money first.</p>
        <div class="btnrow"><a class="btn" href="#track-found" style="--a:var(--ct);--on:var(--ct-on)">Start with the basics</a><button class="btn alt" type="button" data-scroll="paths">Choose your path</button></div>
        <div class="hero-stats"><span>${total()} detailed lessons</span><span>${nTools()} games and simulators</span><span>No sign-up, no ads</span></div>
      </div>
      <div>${B.w('compound', { compact: 1 })}</div>
    </div></section>
    <section class="sec alt" id="paths"><div class="wrap">
      <div class="sec-h"><h2>Pick your path</h2><p>Investing and trading are different jobs. An <b>investor</b> buys and holds for years. A <b>trader</b> profits from shorter price moves and takes far more risk. Crypto is its own world with its own rules, so it has its own two paths.</p></div>
      <div class="card found-card pcard" style="${MQ.trackStyle('found')};cursor:default">
        <span class="pc-icon">${MQ.icons.found}</span>
        <div><span class="pc-kind">Start here · everyone</span><h3>${MQ.tracks.found.name}</h3><p>${MQ.tracks.found.desc}</p></div>
        <a class="btn" href="#track-found">Begin · ${lessons('found').length} lessons</a>
      </div>
      <div class="matrix">
        <div class="mx-corner"></div>
        <div class="mx-head">Investor<small>Slow, steady, long-term</small></div>
        <div class="mx-head">Trader<small>Active, short-term, higher risk</small></div>
        <div class="mx-row">Stocks, ETFs and traditional markets<small>Companies, funds, bonds</small></div>${pcard('inv')}${pcard('trd')}
        <div class="mx-row">Crypto<small>Bitcoin, Ethereum, tokens</small></div>${pcard('ci')}${pcard('ct')}
      </div>
    </div></section>
    <section class="sec"><div class="wrap">
      <div class="sec-h"><h2>Investor or trader? The honest comparison</h2><p>Most people should start as investors. Trading can be learned, but it is closer to a demanding profession than a shortcut to money.</p></div>
      ${B.tbl(['', 'Investor', 'Trader'], [
        ['Goal', 'Grow wealth over years and decades', 'Profit from short-term price moves'],
        ['Holding time', '5 to 40+ years', 'Seconds to a few weeks'],
        ['Time needed', 'A few hours per year once set up', 'Hours every trading day (or week, for swing trading)'],
        ['Core skills', 'Patience, diversification, regular saving', 'Chart reading, risk control, execution, emotional control'],
        ['Costs', 'Very low, mostly a yearly fund fee', 'Spreads, commissions, funding fees, more taxes'],
        ['Biggest danger', 'Panic-selling a crash, high fees, overconfidence in stock picking', 'Over-trading, leverage, revenge trades, ruin'],
        ['Realistic outcome', 'Roughly market returns for those who stay the course', 'Most beginners lose money; a small minority builds a real edge'],
        ['In crypto', 'Own a limited, secure position in major assets', 'Trade 24/7, often with leverage, under strict risk rules']
      ])}
    </div></section>
    <section class="sec alt"><div class="wrap">
      <div class="sec-h"><h2>How it works</h2><p>Short lessons that use everyday examples, then you play with the idea before you move on.</p></div>
      <ol class="steps"><li><h4>Learn</h4><p>Plain-English lessons with real-life examples. No jargon without explanation.</p></li><li><h4>Play</h4><p>Simulators and games: grow money, survive a crash, trade a practice market, spot scams.</p></li><li><h4>Check</h4><p>Three-question quizzes after each lesson, with explanations.</p></li><li><h4>Level up</h4><p>Earn XP, finish a path, unlock the Pro Path and a certificate of completion.</p></li></ol>
    </div></section>
    <section class="sec"><div class="wrap">
      <div class="sec-h"><h2>Not sure where to start?</h2><p>Four quick questions. It is a suggestion, not a verdict.</p></div>
      ${B.w('chooser')}
    </div></section>
    <section class="sec" style="padding-top:0"><div class="wrap">${MQ.misc.labCard}</div></section>`;
  }

  function trackView(k) {
    const T = MQ.tracks[k], a = lessons(k), d = doneCount(k), pct = a.length ? Math.round(d / a.length * 100) : 0, trader = k === 'trd' || k === 'ct';
    const rows = a.map((l, i) => `<li><a class="rl ${P.done[l.id] ? 'done' : ''}" href="#lesson-${l.id}"><span class="node">${P.done[l.id] ? '✓' : i + 1}</span><div><h3>${l.t}</h3><p>${l.hook}</p></div><span class="mins">${l.m} min</span></a></li>`).join('');
    let after = '';
    if (k === 'found') after = `<div class="sec-h" style="margin-top:3rem"><h2>Now choose your path</h2><p>You can do more than one. Most people start with Investor.</p></div><div class="grid2">${['inv', 'trd', 'ci', 'ct'].map(pcard).join('')}</div>`;
    else after = `<div style="margin-top:2.4rem" class="grid2"><a class="pcard" href="#pro" style="${MQ.trackStyle('found')}"><h3>Next: the Pro Path</h3><p>What separates hobbyists from professionals, and how to build a real track record.</p></a>${trader ? '<a class="pcard" href="#lab" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)"><h3>Go deeper: Trading Lab</h3><p>An optional paid programme with a trading bot, from the creator of this course.</p></a>' : '<a class="pcard" href="#track-found" style="' + MQ.trackStyle('found') + '"><h3>Review the Foundations</h3><p>Quick refreshers on risk, compounding and psychology.</p></a>'}</div>`;
    return `<section class="thead" style="${MQ.trackStyle(k)}"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons[k]}</span>
      <div><p class="eyebrow" style="margin-bottom:.4rem">${T.kind} · ${T.level}</p><h1>${T.name}</h1><p>${T.desc}</p></div>
      <div class="ring" style="--p:${pct}" title="${pct}% complete"><b>${pct}%</b></div></div></section>
    <section class="page" style="${MQ.trackStyle(k)}"><div class="wrap" style="max-width:860px">
      ${trader ? '<div class="riskbar"><b>Read this first.</b> Trading is high risk. Studies of retail traders consistently find that most lose money, and regulators in Europe require brokers to warn that typically 70 to 90% of retail leveraged accounts lose. This path teaches the craft honestly, starting with a practice market. Never trade money you cannot afford to lose.</div>' : ''}
      <p class="muted" style="margin-bottom:1.2rem">${a.length} lessons · about ${mins(k)} minutes · ${d} done</p>
      <ol class="road">${rows}</ol>${after}</div></section>`;
  }

  function quizHTML(L) {
    const qs = L.q || [];
    return `<section class="quiz wrap" id="quiz"><h2>Check yourself</h2>${qs.map((q, i) => `<div class="qq" data-i="${i}"><p class="qtext">${i + 1}. ${q[0]}</p><div class="opts">${q[1].map((o, j) => `<button type="button" class="qopt" data-j="${j}">${o}</button>`).join('')}</div><p class="qfb" hidden></p></div>`).join('')}<div class="qdone" hidden></div></section>`;
  }
  function wireQuiz(scope, L) {
    const qs = L.q || []; if (!qs.length) return;
    const box = $('.qdone', scope);
    const solved = (i) => {
      const qq = $('.qq[data-i="' + i + '"]', scope); qq.dataset.done = '1';
      MQ.$$('.qopt', qq).forEach((b, j) => { b.disabled = true; if (j === qs[i][2]) b.classList.add('ok'); });
      const fb = $('.qfb', qq); fb.hidden = false; fb.innerHTML = '<b>Correct.</b> ' + qs[i][3];
    };
    qs.forEach((q, i) => { if (P.ans[L.id + '-' + i]) solved(i); });
    const check = () => {
      const n = qs.filter((q, i) => P.ans[L.id + '-' + i]).length;
      if (n === qs.length) {
        if (!P.done[L.id]) { P.done[L.id] = true; P.xp += 20; save(); updXP(); }
        box.hidden = false; box.textContent = 'Lesson complete! +20 XP. Level: ' + level() + '. Use the button below to keep going.';
      }
    };
    scope.addEventListener('click', (e) => {
      const b = e.target.closest('.qopt'); if (!b) return;
      const qq = b.closest('.qq'); if (qq.dataset.done) return;
      const i = parseInt(qq.dataset.i, 10), j = parseInt(b.dataset.j, 10);
      if (j === qs[i][2]) { P.xp += qq.dataset.tries ? 4 : 10; P.ans[L.id + '-' + i] = 1; save(); updXP(); solved(i); check(); }
      else { qq.dataset.tries = '1'; b.classList.add('no'); b.disabled = true; const fb = $('.qfb', qq); fb.hidden = false; fb.textContent = 'Not quite. Think again and try another answer.'; }
    });
    check();
  }

  function lessonView(f) {
    const { k, i, l } = f, T = MQ.tracks[k], a = lessons(k), prev = a[i - 1], next = a[i + 1];
    const dots = '<div class="dots" aria-label="Lesson progress">' + a.map((x, n) => '<i class="' + (P.done[x.id] ? 'done ' : '') + (n === i ? 'cur' : '') + '"></i>').join('') + '</div>';
    const nxt = next ? `<a class="btn" href="#lesson-${next.id}">Next: ${next.t} →</a>` : (k === 'found' ? '<a class="btn" href="#home">Choose your path →</a>' : '<a class="btn" href="#pro">On to the Pro Path →</a>');
    const trader = (k === 'trd' || k === 'ct') ? '<div class="riskbar" style="margin-top:0"><b>Risk reminder.</b> Educational content, not advice. Trading can lose money quickly.</div>' : '';
    return `<section class="lhead" style="${MQ.trackStyle(k)}"><div class="wrap">
      <p class="crumbs"><a href="#track-${k}">${T.name}</a> / Lesson ${i + 1} of ${a.length}</p>
      <div class="lmeta"><span class="chip">${l.m} min</span><span class="chip">+50 XP available</span></div>
      <h1>${l.t}</h1><p class="hook">${l.hook}</p>${dots}</div></section>
    <article class="wrap" style="${MQ.trackStyle(k)}"><div class="lbody">${trader}${l.body}</div></article>
    <div style="${MQ.trackStyle(k)}">${quizHTML(l)}
    <div class="lnav wrap">${prev ? `<a class="btn alt" href="#lesson-${prev.id}">← ${prev.t}</a>` : `<a class="btn alt" href="#track-${k}">← Roadmap</a>`}${nxt}</div></div>`;
  }

  function glossaryView() {
    const g = MQ.misc.glossary.slice().sort((x, y) => x[0].localeCompare(y[0]));
    return `<section class="page"><div class="wrap" style="max-width:860px"><h1>Glossary</h1><p class="lead">${g.length} terms in plain English. Type to filter.</p>
      <label class="sr" for="gq">Filter the glossary</label><input type="text" id="gq" placeholder="Search a term, e.g. spread, ETF, leverage" autocomplete="off">
      <div class="gl-list" id="gl">${g.map((x) => `<div class="gl-item" data-t="${MQ.esc((x[0] + ' ' + x[1]).toLowerCase())}"><b>${x[0]}</b><p>${x[1]}</p></div>`).join('')}</div></div></section>`;
  }
  function wireGlossary() {
    const q = $('#gq'); if (!q) return;
    q.addEventListener('input', () => { const v = q.value.trim().toLowerCase(); MQ.$$('#gl .gl-item').forEach((e) => { e.hidden = v && e.dataset.t.indexOf(v) < 0; }); });
  }

  function certView() {
    return `<section class="page"><div class="wrap" style="max-width:860px"><h1>Your progress and certificate</h1>${B.w('cert')}</div></section>`;
  }
  MQ.widgets.cert = (el) => {
    el.style.setProperty('--a', 'var(--ct)');
    const rows = MQ.order.map((k) => { const n = lessons(k).length, d = doneCount(k); return `<tr><th scope="row">${MQ.tracks[k].name}</th><td>${d} / ${n}</td><td>${n ? Math.round(d / n * 100) : 0}%</td></tr>`; }).join('');
    const found = doneCount('found') === lessons('found').length && lessons('found').length > 0;
    const paths = ['inv', 'trd', 'ci', 'ct'].filter((k) => lessons(k).length && doneCount(k) === lessons(k).length);
    const ok = found && paths.length > 0;
    el.innerHTML = `<h4 class="wt">Progress</h4><div class="stats">${MQ.stat('xp', 'Experience points', 'hi')}${MQ.stat('lv', 'Level')}${MQ.stat('ls', 'Lessons completed')}</div>
      <div class="tbl"><table><thead><tr><th>Path</th><th>Lessons</th><th>Done</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="fld" style="max-width:360px"><label for="nm">Your name for the certificate</label><input type="text" id="nm" maxlength="40" value="${MQ.esc(P.name)}" placeholder="Type your name"></div>
      <div class="cert ${ok ? '' : 'locked'}" style="margin-top:1.2rem"><p class="eyebrow">Money Quest Academy</p><h2>Certificate of completion</h2><p>This certifies that</p><p><span class="nm" data-r="nm">${MQ.esc(P.name || 'Your name')}</span></p>
      <p>${ok ? 'has completed the Money Foundations and the ' + paths.map((k) => MQ.tracks[k].name).join(', ') + ' path' + (paths.length > 1 ? 's' : '') + '.' : 'Finish all Money Foundations lessons and at least one full path to unlock this certificate.'}</p><p class="muted" style="margin:0">An educational certificate of participation. It is not a financial qualification.</p></div>`;
    const tot = total(), done = MQ.order.reduce((s, k) => s + doneCount(k), 0);
    MQ.set(el, { xp: String(P.xp), lv: level(), ls: done + ' / ' + tot });
    el.querySelector('#nm').addEventListener('input', (e) => { P.name = e.target.value; save(); el.querySelector('[data-r="nm"]').textContent = P.name || 'Your name'; });
  };

  /* ---------------- router ---------------- */
  function route() {
    const h = (location.hash || '#home').slice(1) || 'home';
    let m, html, navId = null;
    if ((m = h.match(/^track-([a-z]+)$/)) && MQ.tracks[m[1]]) { html = trackView(m[1]); navId = 'track-' + m[1]; }
    else if ((m = h.match(/^lesson-([a-z0-9]+)$/)) && find(m[1])) { const f = find(m[1]); html = lessonView(f); navId = 'track-' + f.k; }
    else if (h === 'glossary') { html = glossaryView(); navId = 'glossary'; }
    else if (h === 'pro') { html = MQ.misc.proPage; navId = 'pro'; }
    else if (h === 'lab') { html = MQ.misc.labPage; navId = 'lab'; }
    else if (h === 'cert') { html = certView(); }
    else html = homeView();
    app.innerHTML = html;
    MQ.mount(app);
    if (m && m[0].indexOf('lesson-') === 0) wireQuiz(app.querySelector('#quiz') || app, find(m[1]).l);
    if (h === 'glossary') wireGlossary();
    MQ.$$('[data-scroll]', app).forEach((b) => b.addEventListener('click', () => { const t = document.getElementById(b.dataset.scroll); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
    setNav(navId); updXP();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
