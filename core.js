/* Money Quest Academy: core helpers shared by widgets, content and app */
(function () {
  'use strict';
  var MQ = window.MQ = window.MQ || {};
  MQ.widgets = {};
  MQ.lessons = {};

  MQ.$ = function (s, r) { return (r || document).querySelector(s); };
  MQ.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  MQ.esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- number formatting ---------- */
  MQ.num = function (n, d) {
    if (!isFinite(n)) return '–';
    return Number(n).toLocaleString('en-IE', { minimumFractionDigits: 0, maximumFractionDigits: d == null ? 0 : d });
  };
  MQ.eur = function (n, d) {
    d = d || 0;
    if (!isFinite(n)) return '€–';
    var s = Math.abs(n).toLocaleString('en-IE', { minimumFractionDigits: d, maximumFractionDigits: d });
    return (n < 0 ? '-' : '') + '€' + s;
  };
  MQ.pct = function (n, d) { return isFinite(n) ? n.toFixed(d == null ? 1 : d) + '%' : '–'; };
  MQ.fmtVal = function (t, v) {
    switch (t) {
      case 'eur': return MQ.eur(v);
      case 'eur2': return MQ.eur(v, 2);
      case 'pct': return (Math.round(v * 100) / 100) + '%';
      case 'yr': return v + (v === 1 ? ' yr' : ' yrs');
      case 'x': return (Math.round(v * 100) / 100) + '×';
      case 'mo': return v + (v === 1 ? ' month' : ' months');
      default: return String(Math.round(v * 1000) / 1000);
    }
  };

  /* ---------- random ---------- */
  MQ.rng = function (seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  MQ.gauss = function (r) {
    var u = 0, v = 0;
    while (u === 0) u = r();
    while (v === 0) v = r();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  /* ---------- storage (always safe) ---------- */
  var mem = {};
  MQ.store = {
    get: function (k, def) {
      try { var v = window.localStorage.getItem('mq:' + k); if (v != null) return JSON.parse(v); } catch (e) { /* ignore */ }
      return (k in mem) ? mem[k] : def;
    },
    set: function (k, v) {
      mem[k] = v;
      try { window.localStorage.setItem('mq:' + k, JSON.stringify(v)); } catch (e) { /* ignore */ }
    }
  };

  /* ---------- tracks ---------- */
  MQ.icons = {
    found: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>',
    inv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><path d="M5 16l5-5 3 3 6-7"/><path d="M15 7h4v4"/></svg>',
    trd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v3M7 17v4M17 6v2M17 18v3"/><rect x="5" y="6" width="4" height="11" rx="1"/><rect x="15" y="8" width="4" height="10" rx="1"/></svg>',
    ci: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9z"/><path d="M9.5 8.5h3.6a1.6 1.6 0 010 3.2H9.5m0 0h3.9a1.6 1.6 0 010 3.2H9.5M11 7v1.5M11 15v1.5"/></svg>',
    ct: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>'
  };
  MQ.order = ['found', 'inv', 'trd', 'ci', 'ct'];
  MQ.tracks = {
    found: { key: 'found', name: 'Money Foundations', short: 'Basics', kind: 'Everyone starts here', level: 'Beginner',
      desc: 'Money, inflation, risk, compound interest, the investing toolbox and your own psychology. The base every investor and trader needs.' },
    inv: { key: 'inv', name: 'Everyday Investor', short: 'Investor', kind: 'Investor · Stocks & ETFs', level: 'Beginner to Intermediate',
      desc: 'Build wealth slowly with index funds, smart allocation, low costs and calm habits. The path most people should take.' },
    trd: { key: 'trd', name: 'Day Trader', short: 'Day Trader', kind: 'Trader · Stocks, forex & futures', level: 'Intermediate to Advanced',
      desc: 'Short-term trading for people who want to treat it like a craft: charts, strategies, strict risk rules and paper trading first.' },
    ci: { key: 'ci', name: 'Crypto Investor', short: 'Crypto Investor', kind: 'Investor · Crypto', level: 'Beginner to Intermediate',
      desc: 'Understand blockchain, wallets and security, evaluate projects, size your positions and avoid the scams.' },
    ct: { key: 'ct', name: 'Crypto Trader', short: 'Crypto Trader', kind: 'Trader · Crypto', level: 'Intermediate to Advanced',
      desc: '24/7 markets, perpetual futures, leverage and liquidation, market signals, bots, and the psychology of non-stop trading.' }
  };
  MQ.trackStyle = function (k) { return '--a:var(--' + k + ');--as:var(--' + k + '-s);--on:var(--' + k + '-on)'; };
  MQ.addLessons = function (k, arr) { MQ.lessons[k] = arr; };

  /* ---------- content building blocks ---------- */
  var B = MQ.B = {};
  B.box = function (cls, label, html) { return '<aside class="box ' + cls + '"><span class="blabel">' + label + '</span>' + html + '</aside>'; };
  B.key = function (h) { return B.box('key', 'Key idea', h); };
  B.ex = function (h) { return B.box('ex', 'Real-life example', h); };
  B.warn = function (h) { return B.box('warn', 'Watch out', h); };
  B.tip = function (h) { return B.box('tip', 'Pro tip', h); };
  B.tryit = function (h) { return B.box('try', 'Try it', h); };
  B.w = function (name, opts) {
    var at = '';
    for (var k in (opts || {})) at += ' data-' + k + '="' + MQ.esc(opts[k]) + '"';
    return '<div class="widget" data-widget="' + name + '"' + at + '></div>';
  };
  B.take = function (arr) { return '<div class="take"><h3>Key takeaways</h3><ul>' + arr.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>'; };
  B.tbl = function (head, rows) {
    return '<div class="tbl"><table><thead><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' +
      rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return i === 0 ? '<th scope="row">' + c + '</th>' : '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>';
  };

  /* ---------- form controls for widgets ---------- */
  var uid = 0;
  MQ.slider = function (k, label, min, max, step, val, t) {
    var id = 'w' + (++uid) + '-' + k;
    return '<div class="fld"><label for="' + id + '">' + label + '</label><div class="fr"><input type="range" id="' + id + '" data-k="' + k + '" data-t="' + (t || 'num') +
      '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"><output data-o="' + k + '"></output></div></div>';
  };
  MQ.number = function (k, label, val, min, max, step) {
    var id = 'w' + (++uid) + '-' + k;
    return '<div class="fld"><label for="' + id + '">' + label + '</label><input type="number" inputmode="decimal" id="' + id + '" data-k="' + k + '" min="' + min + '" max="' + max + '" step="' + step + '" value="' + val + '"></div>';
  };
  MQ.select = function (k, label, opts, val) {
    var id = 'w' + (++uid) + '-' + k;
    return '<div class="fld"><label for="' + id + '">' + label + '</label><select id="' + id + '" data-k="' + k + '" data-s="1">' +
      opts.map(function (o) { return '<option value="' + o[0] + '"' + (String(o[0]) === String(val) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>';
  };
  MQ.check = function (k, label, on) {
    var id = 'w' + (++uid) + '-' + k;
    return '<label class="cb" for="' + id + '"><input type="checkbox" id="' + id + '" data-k="' + k + '"' + (on ? ' checked' : '') + '><span>' + label + '</span></label>';
  };
  MQ.stat = function (key, label, cls) { return '<div class="stat ' + (cls || '') + '"><span class="sl">' + label + '</span><b data-r="' + key + '">–</b></div>'; };
  MQ.set = function (root, map) {
    for (var k in map) { var e = root.querySelector('[data-r="' + k + '"]'); if (e) e.innerHTML = map[k]; }
  };
  MQ.cls = function (root, key, cls) {
    var e = root.querySelector('[data-r="' + key + '"]'); if (!e) return; var st = e.parentNode;
    st.classList.remove('good', 'bad'); if (cls) st.classList.add(cls);
  };
  MQ.setVal = function (root, k, v) {
    var i = root.querySelector('[data-k="' + k + '"]'); if (!i) return;
    i.value = v; i.dispatchEvent(new Event('input', { bubbles: true }));
  };
  MQ.bind = function (root, fn) {
    var upd = function () {
      var v = {};
      MQ.$$('[data-k]', root).forEach(function (i) {
        var k = i.dataset.k;
        if (i.type === 'checkbox') v[k] = i.checked;
        else if (i.dataset.s) v[k] = i.value;
        else v[k] = parseFloat(i.value) || 0;
        var o = root.querySelector('[data-o="' + k + '"]');
        if (o) o.textContent = MQ.fmtVal(i.dataset.t, parseFloat(i.value));
      });
      fn(v);
    };
    root.addEventListener('input', upd);
    root.addEventListener('change', upd);
    upd();
    return upd;
  };

  /* ---------- responsive svg drawing ---------- */
  MQ.draw = function (el, fn) {
    el._fn = fn;
    var run = function () {
      var w = Math.max(260, Math.floor(el.clientWidth));
      el._w = w;
      el.innerHTML = el._fn(w);
    };
    if (!el._ro && 'ResizeObserver' in window) {
      el._ro = new ResizeObserver(function () {
        var w = Math.max(260, Math.floor(el.clientWidth));
        if (w !== el._w && el.isConnected) run();
      });
      el._ro.observe(el);
    }
    run();
  };

  MQ.lineChart = function (w, h, series, o) {
    o = o || {};
    var padL = o.padL || 58, padR = 14, padT = 12, padB = o.xLabels ? 28 : 12;
    var n = 0, all = [];
    series.forEach(function (s) { n = Math.max(n, s.data.length); s.data.forEach(function (v) { if (isFinite(v)) all.push(v); }); });
    if (!all.length) all = [0, 1];
    var min = o.min != null ? o.min : Math.min.apply(null, all);
    var max = o.max != null ? o.max : Math.max.apply(null, all);
    if (o.zero && min > 0) min = 0;
    if (max <= min) max = min + 1;
    var pw = w - padL - padR, ph = h - padT - padB;
    var X = function (i) { return padL + (n < 2 ? 0 : i / (n - 1)) * pw; };
    var Y = function (v) { return padT + (1 - (v - min) / (max - min)) * ph; };
    var fmt = o.fmt || function (v) { return MQ.num(v, 0); };
    var g = '', t, i;
    for (t = 0; t <= 4; t++) {
      var val = min + (max - min) * t / 4, y = Y(val);
      g += '<line class="gl" x1="' + padL + '" x2="' + (w - padR) + '" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1) + '"/>' +
        '<text class="ax" x="' + (padL - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end">' + fmt(val) + '</text>';
    }
    if (o.zeroLine && min < 0 && max > 0) g += '<line x1="' + padL + '" x2="' + (w - padR) + '" y1="' + Y(0).toFixed(1) + '" y2="' + Y(0).toFixed(1) + '" style="stroke:var(--ink)" stroke-width="1.5" stroke-dasharray="3 3"/>';
    (o.xLabels || []).forEach(function (l) {
      g += '<text class="ax" x="' + X(l.i).toFixed(1) + '" y="' + (h - 8) + '" text-anchor="' + (l.i === 0 ? 'start' : (l.i >= n - 1 ? 'end' : 'middle')) + '">' + l.t + '</text>';
    });
    var s = '';
    series.forEach(function (se) {
      var pts = [];
      for (i = 0; i < se.data.length; i++) if (isFinite(se.data[i])) pts.push(X(i).toFixed(1) + ',' + Y(se.data[i]).toFixed(1));
      if (!pts.length) return;
      if (se.area) s += '<polygon points="' + pts.join(' ') + ' ' + X(se.data.length - 1).toFixed(1) + ',' + Y(min).toFixed(1) + ' ' + X(0).toFixed(1) + ',' + Y(min).toFixed(1) + '" style="fill:' + se.color + '" fill-opacity=".14"/>';
      s += '<polyline points="' + pts.join(' ') + '" fill="none" style="stroke:' + se.color + '" stroke-width="' + (se.w || 2.6) + '" stroke-linejoin="round" stroke-linecap="round"' + (se.dash ? ' stroke-dasharray="6 5"' : '') + (se.op ? ' stroke-opacity="' + se.op + '"' : '') + '/>';
      if (!se.nodot) {
        var last = se.data.length - 1;
        s += '<circle cx="' + X(last).toFixed(1) + '" cy="' + Y(se.data[last]).toFixed(1) + '" r="4.2" style="fill:' + se.color + ';stroke:var(--card)" stroke-width="2"/>';
      }
    });
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="' + MQ.esc(o.label || 'Chart') + '">' + g + s + '</svg>';
  };
  MQ.legend = function (items) {
    return '<div class="legend">' + items.map(function (it) { return '<span><i style="background:' + it[1] + '"></i>' + it[0] + '</span>'; }).join('') + '</div>';
  };
  MQ.stackBar = function (parts) {
    var tot = parts.reduce(function (a, p) { return a + p.v; }, 0) || 1;
    return '<div class="stack" role="img" aria-label="' + parts.map(function (p) { return p.l + ' ' + Math.round(p.v / tot * 100) + '%'; }).join(', ') + '">' +
      parts.filter(function (p) { return p.v > 0; }).map(function (p) { return '<i style="width:' + (p.v / tot * 100).toFixed(2) + '%;background:' + p.c + '">' + (p.v / tot > .09 ? Math.round(p.v / tot * 100) + '%' : '') + '</i>'; }).join('') + '</div>';
  };

  /* ---------- mounting ---------- */
  MQ.mount = function (root) {
    MQ.$$('[data-widget]', root).forEach(function (el) {
      if (el.dataset.mounted) return;
      var fn = MQ.widgets[el.dataset.widget];
      el.dataset.mounted = '1';
      if (!fn) { el.textContent = 'Widget not found: ' + el.dataset.widget; return; }
      try { fn(el, el.dataset); } catch (e) { el.textContent = 'This widget could not load.'; if (window.console) console.error(e); }
    });
  };
})();
