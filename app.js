/* Money Quest Academy: router, views, progress and quizzes. All text comes from the language pack (MQ.L). */
(function () {
  'use strict';
  const MQ = window.MQ, $ = MQ.$, B = MQ.B, L = MQ.L, S = L.s;
  const root = document.documentElement;
  const app = document.getElementById('app');
  const t = (str, v) => String(str).replace(/\{(\w+)\}/g, (m, k) => (v && v[k] != null ? v[k] : m));
  MQ.t = t;

  /* ---------------- progress ---------------- */
  let P = MQ.store.get('progress', null);
  if (!P || typeof P !== 'object') P = {};
  P.done = P.done || {}; P.ans = P.ans || {}; P.xp = P.xp || 0; P.name = P.name || ''; P.last = P.last || '';
  const save = () => MQ.store.set('progress', P);
  const LEVELS = L.levels;
  const level = () => { let l = LEVELS[0][1]; LEVELS.forEach((x) => { if (P.xp >= x[0]) l = x[1]; }); return l; };
  const updXP = () => { $('#xp').textContent = level() + ' · ' + P.xp + ' XP'; };
  const lessons = (k) => MQ.lessons[k] || [];
  const total = () => MQ.order.reduce((a, k) => a + lessons(k).length, 0);
  const doneCount = (k) => lessons(k).filter((l) => P.done[l.id]).length;
  const find = (id) => { for (const k of MQ.order) { const a = lessons(k); for (let i = 0; i < a.length; i++) if (a[i].id === id) return { k, i, l: a[i] }; } return null; };
  MQ.progress = { get: () => P, save, updXP, level, doneCount };

  /* ---------------- chrome: language, nav, theme, footer ---------------- */
  root.lang = L.code === 'zh' ? 'zh-CN' : L.code;
  document.title = L.meta.title;
  const md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', L.meta.desc);
  const langSel = $('#lang');
  if (langSel) {
    langSel.value = L.code; langSel.setAttribute('aria-label', S.language); langSel.title = S.language;
    langSel.addEventListener('change', () => { MQ.store.set('lang', langSel.value); location.reload(); });
  }
  $('#brand').setAttribute('aria-label', S.brandHome);
  $('#nav').setAttribute('aria-label', S.mainNav);
  $('#xp').title = S.xpTitle;
  $('#theme').setAttribute('aria-label', S.themeLabel); $('#theme').title = S.themeTitle;
  $('#menu').setAttribute('aria-label', S.menu);
  $('#foot').innerHTML = S.footer;
  const nav = $('#nav');
  nav.innerHTML = L.nav.map((n) => `<a href="#${n[0]}" data-nav="${n[0]}">${n[1]}</a>`).join('');
  $('#menu').addEventListener('click', () => { const o = nav.classList.toggle('open'); $('#menu').setAttribute('aria-expanded', o ? 'true' : 'false'); });
  const eff = () => root.dataset.theme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const savedTheme = MQ.store.get('theme', null); if (savedTheme) root.dataset.theme = savedTheme;
  $('#theme').addEventListener('click', () => { const x = eff() === 'dark' ? 'light' : 'dark'; root.dataset.theme = x; MQ.store.set('theme', x); });
  const setNav = (id) => { MQ.$$('#nav a').forEach((a) => a.classList.toggle('on', a.dataset.nav === id)); nav.classList.remove('open'); $('#menu').setAttribute('aria-expanded', 'false'); };

  /* ---------------- shared pieces ---------------- */
  const RISK = { found: 0, inv: 2, ci: 3, trd: 4, ct: 5 };
  const riskDots = (k) => '<span class="risk" title="' + S.riskTitle + '">' + S.risk + ' ' + [1, 2, 3, 4, 5].map((n) => '<i class="' + (n <= RISK[k] ? 'f' : '') + '"></i>').join('') + '</span>';
  const mins = (k) => lessons(k).reduce((s, l) => s + l.m, 0);
  const pcard = (k) => {
    const T = MQ.tracks[k], a = lessons(k), d = doneCount(k), pct = a.length ? Math.round(d / a.length * 100) : 0;
    return `<a class="pcard" href="#track-${k}" style="${MQ.trackStyle(k)}"><div class="pc-top"><span class="pc-icon">${MQ.icons[k]}</span><span class="pc-kind">${T.kind}</span></div>
      <h3>${T.name}</h3><p>${T.desc}</p><div class="pc-foot"><span>${t(S.lessonsMin, { n: a.length, m: mins(k) })}</span>${k === 'found' ? '' : riskDots(k)}<span class="pbar" title="${t(S.pctTitle, { p: pct })}"><i style="width:${pct}%"></i></span></div></a>`;
  };
  const nTools = () => Object.keys(MQ.widgets).filter((k) => !/^(checklist|chooser|cert)$/.test(k)).length;
  const flat = () => { const o = []; MQ.order.forEach((k) => lessons(k).forEach((l) => o.push(l))); return o; };
  const continueLesson = () => {
    const f = P.last && find(P.last); if (!f) return null;
    if (!P.done[f.l.id]) return f.l;
    const a = lessons(f.k), nx = a.slice(f.i + 1).find((l) => !P.done[l.id]) || flat().find((l) => !P.done[l.id]);
    return nx || null;
  };

  /* ---------------- views ---------------- */
  function homeView() {
    const tk = S.ticker.map((x, i) => '<span>' + (i % 3 === 0 ? '<b>▲</b> ' : '') + x + '</span>').join('');
    const cl = continueLesson();
    const cont = cl ? `<a class="btn" href="#lesson-${cl.id}" style="--a:var(--inv);--on:var(--inv-on)">${t(S.continueBtn, { t: cl.t })}</a>` : '';
    return `<div class="ticker" aria-hidden="true"><div class="tk">${tk}${tk}${tk}${tk}</div></div>
    <section class="hero"><div class="wrap hero-g">
      <div>
        <p class="eyebrow">${t(S.eyebrow, { n: total() })}</p>
        <h1>${S.h1}</h1>
        <p class="lead">${S.lead}</p>
        <div class="btnrow">${cont}<a class="btn" href="#track-found" style="--a:var(--ct);--on:var(--ct-on)">${S.startBasics}</a><button class="btn alt" type="button" data-scroll="paths">${S.choosePath}</button></div>
        <div class="hero-stats"><span>${t(S.stat1, { n: total() })}</span><span>${t(S.stat2, { n: nTools() })}</span><span>${S.stat3}</span></div>
      </div>
      <div>${B.w('compound', { compact: 1 })}</div>
    </div></section>
    <section class="sec alt" id="paths"><div class="wrap">
      <div class="sec-h"><h2>${S.pickH}</h2><p>${S.pickP}</p></div>
      <div class="card found-card pcard" style="${MQ.trackStyle('found')};cursor:default">
        <span class="pc-icon">${MQ.icons.found}</span>
        <div><span class="pc-kind">${S.startHere}</span><h3>${MQ.tracks.found.name}</h3><p>${MQ.tracks.found.desc}</p></div>
        <a class="btn" href="#track-found">${t(S.begin, { n: lessons('found').length })}</a>
      </div>
      <div class="matrix">
        <div class="mx-corner"></div>
        <div class="mx-head">${S.mxInv}<small>${S.mxInvSub}</small></div>
        <div class="mx-head">${S.mxTrd}<small>${S.mxTrdSub}</small></div>
        <div class="mx-row">${S.mxStocks}<small>${S.mxStocksSub}</small></div>${pcard('inv')}${pcard('trd')}
        <div class="mx-row">${S.mxCrypto}<small>${S.mxCryptoSub}</small></div>${pcard('ci')}${pcard('ct')}
      </div>
    </div></section>
    <section class="sec"><div class="wrap">
      <div class="sec-h"><h2>${S.cmpH}</h2><p>${S.cmpP}</p></div>
      ${B.tbl(S.cmpHead, S.cmp)}
    </div></section>
    <section class="sec alt"><div class="wrap">
      <div class="sec-h"><h2>${S.howH}</h2><p>${S.howP}</p></div>
      <ol class="steps">${S.steps.map((x) => `<li><h4>${x[0]}</h4><p>${x[1]}</p></li>`).join('')}</ol>
    </div></section>
    <section class="sec"><div class="wrap">
      <div class="sec-h"><h2>${S.whereH}</h2><p>${S.whereP}</p></div>
      ${B.w('chooser')}
    </div></section>
    <section class="sec" style="padding-top:0"><div class="wrap">${MQ.misc.labCard}</div></section>`;
  }

  function trackView(k) {
    const T = MQ.tracks[k], a = lessons(k), d = doneCount(k), pct = a.length ? Math.round(d / a.length * 100) : 0, trader = k === 'trd' || k === 'ct';
    const rows = a.map((l, i) => `<li><a class="rl ${P.done[l.id] ? 'done' : ''}" href="#lesson-${l.id}"><span class="node">${P.done[l.id] ? '✓' : i + 1}</span><div><h3>${l.t}</h3><p>${l.hook}</p></div><span class="mins">${t(S.min, { m: l.m })}</span></a></li>`).join('');
    let after = '';
    if (k === 'found') after = `<div class="sec-h" style="margin-top:3rem"><h2>${S.nowChoose}</h2><p>${S.nowChooseP}</p></div><div class="grid2">${['inv', 'trd', 'ci', 'ct'].map(pcard).join('')}</div>`;
    else after = `<div style="margin-top:2.4rem" class="grid2"><a class="pcard" href="#pro" style="${MQ.trackStyle('found')}"><h3>${S.nextPro}</h3><p>${S.nextProP}</p></a>${trader ? `<a class="pcard" href="#lab" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)"><h3>${S.goLab}</h3><p>${S.goLabP}</p></a>` : `<a class="pcard" href="#track-found" style="${MQ.trackStyle('found')}"><h3>${S.reviewFound}</h3><p>${S.reviewFoundP}</p></a>`}</div>`;
    return `<section class="thead" style="${MQ.trackStyle(k)}"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons[k]}</span>
      <div><p class="eyebrow" style="margin-bottom:.4rem">${T.kind} · ${T.level}</p><h1>${T.name}</h1><p>${T.desc}</p></div>
      <div class="ring" style="--p:${pct}" title="${t(S.pctTitle, { p: pct })}"><b>${pct}%</b></div></div></section>
    <section class="page" style="${MQ.trackStyle(k)}"><div class="wrap" style="max-width:860px">
      ${trader ? `<div class="riskbar">${S.riskFirst}</div>` : ''}
      <p class="muted" style="margin-bottom:1.2rem">${t(S.lessonsDone, { n: a.length, m: mins(k), d })}</p>
      <ol class="road">${rows}</ol>${after}</div></section>`;
  }

  function quizHTML(Ls) {
    const qs = Ls.q || [];
    return `<section class="quiz wrap" id="quiz"><h2>${S.checkH}</h2>${qs.map((q, i) => `<div class="qq" data-i="${i}"><p class="qtext">${i + 1}. ${q[0]}</p><div class="opts">${q[1].map((o, j) => `<button type="button" class="qopt" data-j="${j}">${o}</button>`).join('')}</div><p class="qfb" hidden></p></div>`).join('')}<div class="qdone" hidden></div></section>`;
  }
  function wireQuiz(scope, Ls) {
    const qs = Ls.q || []; if (!qs.length) return;
    const box = $('.qdone', scope);
    const solved = (i) => {
      const qq = $('.qq[data-i="' + i + '"]', scope); qq.dataset.done = '1';
      MQ.$$('.qopt', qq).forEach((b, j) => { b.disabled = true; if (j === qs[i][2]) b.classList.add('ok'); });
      const fb = $('.qfb', qq); fb.hidden = false; fb.innerHTML = S.correct + qs[i][3];
    };
    qs.forEach((q, i) => { if (P.ans[Ls.id + '-' + i]) solved(i); });
    const check = () => {
      const n = qs.filter((q, i) => P.ans[Ls.id + '-' + i]).length;
      if (n === qs.length) {
        if (!P.done[Ls.id]) { P.done[Ls.id] = true; P.xp += 20; save(); updXP(); }
        box.hidden = false; box.textContent = t(S.lessonDone, { lv: level() });
      }
    };
    scope.addEventListener('click', (e) => {
      const b = e.target.closest('.qopt'); if (!b) return;
      const qq = b.closest('.qq'); if (qq.dataset.done) return;
      const i = parseInt(qq.dataset.i, 10), j = parseInt(b.dataset.j, 10);
      if (j === qs[i][2]) { P.xp += qq.dataset.tries ? 4 : 10; P.ans[Ls.id + '-' + i] = 1; save(); updXP(); solved(i); check(); }
      else { qq.dataset.tries = '1'; b.classList.add('no'); b.disabled = true; const fb = $('.qfb', qq); fb.hidden = false; fb.textContent = S.wrong; }
    });
    check();
  }

  function lessonView(f) {
    const { k, i, l } = f, T = MQ.tracks[k], a = lessons(k), prev = a[i - 1], next = a[i + 1];
    P.last = l.id; save();
    const dots = `<div class="dots" aria-label="${S.lessonProgress}">` + a.map((x, n) => '<i class="' + (P.done[x.id] ? 'done ' : '') + (n === i ? 'cur' : '') + '"></i>').join('') + '</div>';
    const nxt = next ? `<a class="btn" href="#lesson-${next.id}">${t(S.nextLesson, { t: next.t })}</a>` : (k === 'found' ? `<a class="btn" href="#home">${S.toPaths}</a>` : `<a class="btn" href="#pro">${S.toPro}</a>`);
    const trader = (k === 'trd' || k === 'ct') ? `<div class="riskbar" style="margin-top:0">${S.riskRemind}</div>` : '';
    return `<section class="lhead" style="${MQ.trackStyle(k)}"><div class="wrap">
      <p class="crumbs"><a href="#track-${k}">${T.name}</a> / ${t(S.lessonOf, { i: i + 1, n: a.length })}</p>
      <div class="lmeta"><span class="chip">${t(S.min, { m: l.m })}</span><span class="chip">${S.xpAvail}</span></div>
      <h1>${l.t}</h1><p class="hook">${l.hook}</p>${dots}</div></section>
    <article class="wrap" style="${MQ.trackStyle(k)}"><div class="lbody">${trader}${l.body}</div></article>
    <div style="${MQ.trackStyle(k)}">${quizHTML(l)}
    <div class="lnav wrap">${prev ? `<a class="btn alt" href="#lesson-${prev.id}">← ${prev.t}</a>` : `<a class="btn alt" href="#track-${k}">${S.roadmap}</a>`}${nxt}</div></div>`;
  }

  function glossaryView() {
    const g = MQ.misc.glossary.slice().sort((x, y) => x[0].localeCompare(y[0], L.locale));
    return `<section class="page"><div class="wrap" style="max-width:860px"><h1>${S.glossH}</h1><p class="lead">${t(S.glossLead, { n: g.length })}</p>
      <label class="sr" for="gq">${S.glossLabel}</label><input type="text" id="gq" placeholder="${MQ.esc(S.glossPh)}" autocomplete="off">
      <div class="gl-list" id="gl">${g.map((x) => `<div class="gl-item" data-t="${MQ.esc((x[0] + ' ' + x[1]).toLowerCase())}"><b>${x[0]}</b><p>${x[1]}</p></div>`).join('')}</div></div></section>`;
  }
  function wireGlossary() {
    const q = $('#gq'); if (!q) return;
    q.addEventListener('input', () => { const v = q.value.trim().toLowerCase(); MQ.$$('#gl .gl-item').forEach((e) => { e.hidden = v && e.dataset.t.indexOf(v) < 0; }); });
  }

  function faqView() {
    return `<section class="page"><div class="wrap" style="max-width:860px"><h1>${S.faqH}</h1><p class="lead">${S.faqLead}</p>
      <div class="faq">${L.faq.map((x, i) => `<details${i === 0 ? ' open' : ''}><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join('')}</div></div></section>`;
  }
  function legalView() {
    return `<section class="page"><div class="wrap" style="max-width:860px"><h1>${S.legalH}</h1><div class="lbody" style="${MQ.trackStyle('found')}">${L.legal}</div></div></section>`;
  }
  function notFoundView() {
    return `<section class="page"><div class="wrap" style="max-width:860px"><h1>${S.notFound}</h1><p class="lead">${S.notFoundP}</p><div class="btnrow"><a class="btn" href="#home">${S.backHome}</a></div></div></section>`;
  }

  function certView() {
    return `<section class="page"><div class="wrap" style="max-width:860px"><h1>${S.certPageH}</h1>${B.w('cert')}</div></section>`;
  }
  MQ.widgets.cert = (el) => {
    el.style.setProperty('--a', 'var(--ct)');
    const rows = MQ.order.map((k) => { const n = lessons(k).length, d = doneCount(k); return `<tr><th scope="row">${MQ.tracks[k].name}</th><td>${d} / ${n}</td><td>${n ? Math.round(d / n * 100) : 0}%</td></tr>`; }).join('');
    const found = doneCount('found') === lessons('found').length && lessons('found').length > 0;
    const paths = ['inv', 'trd', 'ci', 'ct'].filter((k) => lessons(k).length && doneCount(k) === lessons(k).length);
    const ok = found && paths.length > 0;
    el.innerHTML = `<h4 class="wt">${S.progressH}</h4><div class="stats">${MQ.stat('xp', S.statXp, 'hi')}${MQ.stat('lv', S.statLv)}${MQ.stat('ls', S.statLs)}</div>
      <div class="tbl"><table><thead><tr><th>${S.thPath}</th><th>${S.thLessons}</th><th>${S.thDone}</th></tr></thead><tbody>${rows}</tbody></table></div>
      <div class="fld" style="max-width:360px"><label for="nm">${S.nameLabel}</label><input type="text" id="nm" maxlength="40" value="${MQ.esc(P.name)}" placeholder="${MQ.esc(S.namePh)}"></div>
      <div class="cert ${ok ? '' : 'locked'}" style="margin-top:1.2rem"><p class="eyebrow">${S.certEyebrow}</p><h2>${S.certH}</h2><p>${S.certThis}</p><p><span class="nm" data-r="nm">${MQ.esc(P.name || S.yourName)}</span></p>
      <p>${ok ? t(S.certOk, { paths: paths.map((k) => MQ.tracks[k].name).join(', '), pathWord: S.pathWord[paths.length > 1 ? 1 : 0] }) : S.certLocked}</p><p class="muted" style="margin:0">${S.certNote}</p></div>
      <div class="btnrow" style="margin-top:1.6rem" id="rst"><button class="btn alt" type="button" data-a="ask">${S.resetBtn}</button></div>`;
    const tot = total(), done = MQ.order.reduce((s, k) => s + doneCount(k), 0);
    MQ.set(el, { xp: String(P.xp), lv: level(), ls: done + ' / ' + tot });
    el.querySelector('#nm').addEventListener('input', (e) => { P.name = e.target.value; save(); el.querySelector('[data-r="nm"]').textContent = P.name || S.yourName; });
    const rst = el.querySelector('#rst');
    rst.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.a === 'ask') rst.innerHTML = `<p style="margin:0 1rem 0 0;align-self:center">${S.resetAsk}</p><button class="btn" type="button" data-a="yes" style="--a:var(--bad);--on:#fff">${S.resetYes}</button><button class="btn alt" type="button" data-a="no">${S.resetNo}</button>`;
      else if (b.dataset.a === 'yes') { P.done = {}; P.ans = {}; P.xp = 0; P.name = ''; P.last = ''; save(); updXP(); route(); }
      else route();
    });
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
    else if (h === 'faq') { html = faqView(); navId = 'faq'; }
    else if (h === 'legal') { html = legalView(); }
    else if (h === 'cert') { html = certView(); }
    else if (h === 'home') html = homeView();
    else html = notFoundView();
    app.innerHTML = html;
    MQ.mount(app);
    if (m && m[0].indexOf('lesson-') === 0) wireQuiz(app.querySelector('#quiz') || app, find(m[1]).l);
    if (h === 'glossary') wireGlossary();
    MQ.$$('[data-scroll]', app).forEach((b) => b.addEventListener('click', () => { const x = document.getElementById(b.dataset.scroll); if (x) x.scrollIntoView({ behavior: 'smooth', block: 'start' }); }));
    setNav(navId); updXP();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  route();
})();
