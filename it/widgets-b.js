/* Widget dei percorsi Day Trader e Trader di cripto */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- costruttore di candele ---------------- */
  W.candles = (el) => {
    accent(el, 'trd');
    const P = { 'Rialzista forte': [30, 75, 80, 26], 'Ribassista forte': [75, 30, 80, 26], 'Doji': [50, 51, 78, 24], 'Martello': [60, 66, 68, 18], 'Stella cadente': [40, 34, 86, 32], 'Marubozu': [20, 80, 80, 20] };
    el.innerHTML = `<h4 class="wt">Costruisci una candela giapponese</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(P).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${MQ.slider('o', 'Apertura (dove è iniziato il periodo)', 0, 100, 1, 30, 'num')}
      ${MQ.slider('c', 'Chiusura (dove è finito)', 0, 100, 1, 75, 'num')}
      ${MQ.slider('h', 'Massimo (la cima toccata dal prezzo)', 0, 100, 1, 80, 'num')}
      ${MQ.slider('l', 'Minimo (il fondo toccato)', 0, 100, 1, 26, 'num')}
    </div><div class="wout">
      <div class="chart" data-c="1" style="max-width:340px;margin:0 auto"></div>
      <div class="msg"><p><b data-r="name"></b></p><p data-r="txt"></p></div>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      const v = P[b.dataset.p];
      ['o', 'c', 'h', 'l'].forEach((k, i) => { el.querySelector('[data-k="' + k + '"]').value = v[i]; });
      MQ.setVal(el, 'o', v[0]);
    }));
    MQ.bind(el, (v) => {
      const hi = Math.max(v.h, v.o, v.c), lo = Math.min(v.l, v.o, v.c), range = Math.max(hi - lo, 1);
      const body = Math.abs(v.c - v.o), up = hi - Math.max(v.o, v.c), dn = Math.min(v.o, v.c) - lo, bull = v.c >= v.o;
      let name, txt;
      if (body / range < 0.1) {
        if (dn > range * 0.6) { name = 'Doji libellula'; txt = 'Il prezzo è crollato, poi i compratori lo hanno riportato fino in alto. A volte è un avviso che i venditori si stanno stancando, ma è un segnale solo nel contesto.'; }
        else if (up > range * 0.6) { name = 'Doji lapide'; txt = 'I compratori hanno spinto in alto, ma i venditori si sono ripresi tutto. Può avvisare che un rialzo sta perdendo forza.'; }
        else { name = 'Doji'; txt = 'Apertura e chiusura quasi uguali: compratori e venditori hanno lottato fino al pareggio. Indica indecisione, non direzione.'; }
      } else if (up < range * 0.03 && dn < range * 0.03) { name = bull ? 'Marubozu rialzista' : 'Marubozu ribassista'; txt = 'Una candela a corpo pieno e quasi senza ombre: un lato ha controllato l’intero periodo. Forte slancio.'; }
      else if (dn >= body * 2 && up <= body * 0.6) { name = 'Forma a martello'; txt = 'Una lunga ombra inferiore: i venditori hanno spinto in basso, ma i compratori hanno respinto i minimi. Dopo un trend ribassista può suggerire un fondo, ma attendi conferma.'; }
      else if (up >= body * 2 && dn <= body * 0.6) { name = 'Forma a stella cadente'; txt = 'Una lunga ombra superiore: i compratori hanno provato a salire ma sono stati respinti. Dopo un trend rialzista può suggerire un massimo, ma attendi conferma.'; }
      else if (body / range < 0.3) { name = 'Spinning top'; txt = 'Un corpo piccolo con ombre da entrambi i lati: un tiro alla fune senza un vincitore chiaro.'; }
      else { name = bull ? 'Candela rialzista' : 'Candela ribassista'; txt = bull ? 'Chiusura sopra l’apertura: hanno vinto i compratori in questo periodo. La dimensione del corpo mostra con quanta convinzione.' : 'Chiusura sotto l’apertura: hanno vinto i venditori in questo periodo. La dimensione del corpo mostra con quanta convinzione.'; }
      MQ.set(el, { name: name + ' (' + (bull ? 'verde, chiusa in rialzo' : 'rossa, chiusa in ribasso') + ')', txt });
      const Y = (x) => 250 - (x / 100) * 230, cx = 130, col = bull ? 'var(--good)' : 'var(--bad)';
      const top = Y(Math.max(v.o, v.c)), bh = Math.max(2, Math.abs(Y(v.o) - Y(v.c)));
      let yo = Y(v.o) + 4, yc = Y(v.c) + 4;
      if (Math.abs(yo - yc) < 15) { if (yc >= yo) yc = yo + 15; else yo = yc + 15; }
      MQ.draw(ch, () => `<svg viewBox="0 0 330 270" role="img" aria-label="Candela giapponese con apertura ${v.o}, chiusura ${v.c}, massimo ${hi}, minimo ${lo}">
        <line x1="${cx}" x2="${cx}" y1="${Y(hi)}" y2="${Y(lo)}" style="stroke:${col}" stroke-width="4" stroke-linecap="round"/>
        <rect x="${cx - 26}" y="${top}" width="52" height="${bh}" rx="3" style="fill:${col};stroke:var(--line)" stroke-width="2"/>
        <g class="lbl"><text x="${cx + 44}" y="${Y(hi) + 4}">Max ${hi}</text><text x="${cx + 44}" y="${Y(lo) + 4}">Min ${lo}</text>
        <text x="${cx - 36}" y="${yo}" text-anchor="end">Apert. ${v.o}</text><text x="${cx - 36}" y="${yc}" text-anchor="end">Chius. ${v.c}</text></g></svg>`);
    });
  };

  /* ---------------- laboratorio di paper trading ---------------- */
  function genCandles(seed, n) {
    const r = MQ.rng(seed); let p = 100, left = 0, drift = 0, vol = 0.012; const a = [];
    for (let i = 0; i < n; i++) {
      if (left <= 0) { drift = [0.0035, -0.0035, 0][Math.floor(r() * 3)]; vol = 0.008 + r() * 0.008; left = 25 + Math.floor(r() * 30); }
      left--;
      const o = p, c = o * (1 + drift + vol * MQ.gauss(r));
      const h = Math.max(o, c) * (1 + Math.abs(MQ.gauss(r)) * vol * 0.45), l = Math.min(o, c) * (1 - Math.abs(MQ.gauss(r)) * vol * 0.45);
      a.push({ o, h, l, c }); p = c;
    }
    return a;
  }
  W.papertrade = (el) => {
    accent(el, 'trd');
    const START = 60, LEN = 100, VIS = 60, COST = 0.0005;
    let S, timer = null, seed = 11;
    const fresh = () => { S = { candles: genCandles(seed, START + LEN + 5), i: START - 1, pos: null, eq: 10000, trades: [], curve: [10000], steps: 0, over: false }; };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } const b = el.querySelector('[data-act="auto"]'); if (b) b.textContent = 'Riproduzione auto'; };
    el.innerHTML = `<h4 class="wt">Laboratorio di paper trading: 100 candele, 10.000 € di soldi finti</h4>
    <div class="chart" data-c="1"></div>
    <div class="stats" style="margin-top:.8rem">${MQ.stat('eq', 'Capitale', 'hi')}${MQ.stat('pos', 'Posizione aperta')}${MQ.stat('n', 'Candele rimaste')}${MQ.stat('tr', 'Operazioni')}${MQ.stat('wr', 'Percentuale di successo')}${MQ.stat('ar', 'R medio')}${MQ.stat('dd', 'Drawdown massimo')}</div>
    <div class="btnrow">
      <button class="btn sm" type="button" data-act="long">Compra (long)</button>
      <button class="btn sm" type="button" data-act="short">Vendi (short)</button>
      <button class="btn sm alt" type="button" data-act="close">Chiudi posizione</button>
      <button class="btn sm alt" type="button" data-act="next">Candela successiva ▸</button>
      <button class="btn sm alt" type="button" data-act="auto">Riproduzione auto</button>
      <button class="btn sm alt" type="button" data-act="new">Nuovo mercato</button>
    </div>
    <div class="wgrid" style="margin-top:.9rem"><div class="wctl">
      ${MQ.select('risk', 'Rischio per operazione (del capitale)', [['0.5', '0,5%'], ['1', '1%'], ['2', '2%']], '1')}
      ${MQ.select('sd', 'Distanza dello stop-loss dall’ingresso', [['1', '1%'], ['2', '2%'], ['3', '3%']], '2')}
      ${MQ.select('tr', 'Obiettivo di profitto', [['0', 'Nessuno (chiudo io)'], ['1', '1R (guadagno = rischio)'], ['2', '2R (guadagno = il doppio del rischio)'], ['3', '3R']], '2')}
      ${MQ.check('sma', 'Mostra la media mobile a 20 candele', true)}
    </div><div class="wout"><div class="tape" data-r="log" aria-live="polite"><div>Registro delle operazioni. La dimensione è calcolata per te da rischio e stop. Sono inclusi costi dello 0,05% per lato.</div></div></div></div>
    <div class="msg" data-r="end" hidden></div>
    <p class="note">R significa «unità di rischio»: se rischi 100 € e guadagni 200 €, sono +2R. In questa simulazione gli stop vengono eseguiti al loro prezzo; nei mercati reali può esserci slippage. Se stop e obiettivo vengono toccati entrambi nella stessa candela, conta prima lo stop.</p>`;
    const ch = el.querySelector('[data-c]');
    const price = () => S.candles[S.i].c;
    const sma = (i) => { if (i < 19) return null; let s = 0; for (let k = i - 19; k <= i; k++) s += S.candles[k].c; return s / 20; };
    const val = (k) => el.querySelector('[data-k="' + k + '"]');
    const equityNow = () => { let e = S.eq; if (S.pos) { const p = S.pos, px = price(); e += (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; } return e; };
    const stats = () => {
      const t = S.trades, n = t.length, wins = t.filter((x) => x.r > 0).length;
      const avgR = n ? t.reduce((a, x) => a + x.r, 0) / n : 0;
      let pk = S.curve[0], dd = 0; S.curve.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); });
      let posTxt = 'Nessuna';
      if (S.pos) { const p = S.pos, px = price(), u = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; posTxt = (p.dir === 'long' ? 'LONG' : 'SHORT') + ' ' + MQ.eur(u) + ' (' + (u / p.risk >= 0 ? '+' : '') + (u / p.risk).toFixed(1) + 'R)'; }
      MQ.set(el, { eq: MQ.eur(equityNow()), pos: posTxt, n: String(Math.max(0, LEN - S.steps)), tr: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', ar: n ? (avgR >= 0 ? '+' : '') + avgR.toFixed(2) + 'R' : '–', dd: MQ.pct(dd * 100, 1) });
      const set = (a, dis) => { const b = el.querySelector('[data-act="' + a + '"]'); if (b) b.disabled = dis; };
      set('long', !!S.pos || S.over); set('short', !!S.pos || S.over); set('close', !S.pos || S.over); set('next', S.over);
    };
    const logLine = (t) => {
      const box = el.querySelector('[data-r="log"]'); if (box.dataset.f !== '1') { box.innerHTML = ''; box.dataset.f = '1'; }
      const d = document.createElement('div'); d.className = t.r > 0 ? 'w' : 'l';
      d.textContent = '#' + S.trades.length + ' ' + (t.dir === 'long' ? 'LONG' : 'SHORT') + ' ' + (t.r >= 0 ? '+' : '') + t.r.toFixed(2) + 'R (' + MQ.eur(t.pnl) + ') uscita: ' + t.why;
      box.insertBefore(d, box.firstChild);
    };
    const closePos = (px, why) => {
      const p = S.pos, gross = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units;
      const cost = p.units * p.entry * COST + p.units * px * COST, pnl = gross - cost;
      S.eq += pnl; S.curve.push(S.eq);
      const t = { dir: p.dir, pnl, r: pnl / p.risk, why }; S.trades.push(t); S.pos = null; logLine(t);
    };
    const finish = () => {
      if (S.pos) closePos(price(), 'fine del gioco');
      S.over = true; stop();
      const n = S.trades.length, wins = S.trades.filter((x) => x.r > 0).length, tot = S.trades.reduce((a, x) => a + x.r, 0);
      const bh = (S.candles[S.i].c / S.candles[START - 1].c - 1) * 100, res = (S.eq / 10000 - 1) * 100;
      const box = el.querySelector('[data-r="end"]'); box.hidden = false;
      box.innerHTML = `<p><b>Gioco finito. Hai chiuso a ${MQ.eur(S.eq)} (${res >= 0 ? '+' : ''}${res.toFixed(1)}%) con ${n} operazioni. Il mercato stesso si è mosso di ${bh >= 0 ? '+' : ''}${bh.toFixed(1)}% nello stesso periodo.</b></p>
      <p>${n === 0 ? 'Non hai fatto operazioni. La pazienza è una competenza, ma servono ripetizioni per imparare.' : n < 10 ? 'Meno di 10 operazioni sono un campione troppo piccolo per giudicare qualsiasi cosa. Una valutazione vera richiede più di 100 operazioni.' : (tot > 0 ? 'Un risultato positivo è bello, ma chiediti con onestà: è stata abilità o fortuna in un solo mercato? Prova un altro mercato e vedi se si ripete.' : 'Perdere in una simulazione è la retta scolastica più economica che pagherai mai. Controlla: hai dimensionato in base al rischio, usato gli stop ed evitato le operazioni di vendetta?')}</p>
      <p>Percentuale di successo ${n ? Math.round(wins / n * 100) : 0}%, totale ${tot >= 0 ? '+' : ''}${tot.toFixed(1)}R. Prova un mercato diverso e mantieni le stesse regole.</p>`;
      stats(); draw();
    };
    const next = () => {
      if (S.over) return;
      S.i++; S.steps++;
      const c = S.candles[S.i], p = S.pos;
      if (p) {
        let ex = null, why = '';
        if (p.dir === 'long') { if (c.l <= p.stop) { ex = p.stop; why = 'stop-loss'; } else if (p.target && c.h >= p.target) { ex = p.target; why = 'obiettivo'; } }
        else { if (c.h >= p.stop) { ex = p.stop; why = 'stop-loss'; } else if (p.target && c.l <= p.target) { ex = p.target; why = 'obiettivo'; } }
        if (ex != null) closePos(ex, why);
      }
      if (S.steps >= LEN) { finish(); return; }
      stats(); draw();
    };
    const open = (dir) => {
      if (S.pos || S.over) return;
      const px = price(), sd = parseFloat(val('sd').value) / 100, rk = parseFloat(val('risk').value) / 100, tr = parseFloat(val('tr').value);
      const stopP = dir === 'long' ? px * (1 - sd) : px * (1 + sd);
      const target = tr > 0 ? (dir === 'long' ? px + (px - stopP) * tr : px - (stopP - px) * tr) : 0;
      const risk = S.eq * rk, units = risk / (px * sd);
      S.pos = { dir, entry: px, stop: stopP, target, units, risk }; stats(); draw();
    };
    function draw() {
      MQ.draw(ch, (w) => {
        const h = 300, padL = 54, padR = 64, padT = 10, padB = 12, a = Math.max(0, S.i - VIS + 1), vis = S.candles.slice(a, S.i + 1);
        let hi = Math.max.apply(null, vis.map((c) => c.h)), lo = Math.min.apply(null, vis.map((c) => c.l));
        if (S.pos) { hi = Math.max(hi, S.pos.stop, S.pos.target || 0); lo = Math.min(lo, S.pos.stop, S.pos.target || 1e9); }
        const pad = (hi - lo) * 0.06; hi += pad; lo -= pad;
        const pw = w - padL - padR, ph = h - padT - padB, st = pw / VIS, Y = (v) => padT + (1 - (v - lo) / (hi - lo)) * ph;
        let g = '';
        for (let t = 0; t <= 4; t++) { const v = lo + (hi - lo) * t / 4, y = Y(v); g += `<line class="gl" x1="${padL}" x2="${w - padR}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}"/><text class="ax" x="${padL - 6}" y="${(y + 4).toFixed(1)}" text-anchor="end">${v.toFixed(1)}</text>`; }
        let s = '';
        vis.forEach((c, k) => {
          const x = padL + (k + 0.5) * st, col = c.c >= c.o ? 'var(--good)' : 'var(--bad)', bt = Y(Math.max(c.o, c.c)), bh = Math.max(1.5, Math.abs(Y(c.o) - Y(c.c)));
          s += `<line x1="${x.toFixed(1)}" x2="${x.toFixed(1)}" y1="${Y(c.h).toFixed(1)}" y2="${Y(c.l).toFixed(1)}" style="stroke:${col}" stroke-width="1.4"/><rect x="${(x - st * 0.3).toFixed(1)}" y="${bt.toFixed(1)}" width="${(st * 0.6).toFixed(1)}" height="${bh.toFixed(1)}" style="fill:${col}"/>`;
        });
        if (val('sma').checked) {
          const pts = []; vis.forEach((c, k) => { const m = sma(a + k); if (m != null) pts.push((padL + (k + 0.5) * st).toFixed(1) + ',' + Y(m).toFixed(1)); });
          if (pts.length > 1) s += `<polyline points="${pts.join(' ')}" fill="none" style="stroke:var(--ct)" stroke-width="2.2"/>`;
        }
        const line = (v, col, txt) => `<line x1="${padL}" x2="${w - padR}" y1="${Y(v).toFixed(1)}" y2="${Y(v).toFixed(1)}" style="stroke:${col}" stroke-width="1.6" stroke-dasharray="5 4"/><text class="lbl" x="${w - padR + 4}" y="${(Y(v) + 4).toFixed(1)}" style="fill:${col}">${txt}</text>`;
        if (S.pos) { s += line(S.pos.entry, 'var(--ink)', 'Ingresso'); s += line(S.pos.stop, 'var(--bad)', 'Stop'); if (S.pos.target) s += line(S.pos.target, 'var(--good)', 'Obiettivo'); }
        s += `<circle cx="${(padL + (vis.length - 0.5) * st).toFixed(1)}" cy="${Y(price()).toFixed(1)}" r="4" style="fill:var(--ct);stroke:var(--line)" stroke-width="2"/>`;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Grafico a candele del mercato di allenamento">${g}${s}</svg>`;
      });
    }
    fresh(); stats(); draw();
    el.addEventListener('change', (e) => { if (e.target.matches('[data-k="sma"]')) draw(); });
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const a = b.dataset.act;
      if (a === 'long' || a === 'short') open(a);
      else if (a === 'close') { if (S.pos) { closePos(price(), 'chiusa da te'); stats(); draw(); } }
      else if (a === 'next') next();
      else if (a === 'auto') {
        if (timer) { stop(); return; }
        b.textContent = 'Pausa';
        timer = setInterval(() => { if (!el.isConnected || S.over) { stop(); return; } next(); }, 450);
      } else if (a === 'new') {
        stop(); seed += 17; fresh(); const box = el.querySelector('[data-r="log"]'); box.dataset.f = ''; box.innerHTML = '<div>Registro delle operazioni. Nuovo mercato caricato.</div>';
        el.querySelector('[data-r="end"]').hidden = true; stats(); draw();
      }
    });
  };

  /* ---------------- calcolatore della dimensione della posizione ---------------- */
  W.possize = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Calcolatore della dimensione della posizione</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('acc', 'Dimensione del conto (€)', 5000, 0, 10000000, 100)}
      ${MQ.slider('risk', 'Rischio per operazione', 0.25, 5, 0.25, 1, 'pct')}
      ${MQ.number('entry', 'Prezzo di ingresso', 50, 0, 10000000, 0.01)}
      ${MQ.number('stop', 'Prezzo dello stop-loss', 48, 0, 10000000, 0.01)}
      ${MQ.number('target', 'Prezzo obiettivo', 56, 0, 10000000, 0.01)}
    </div><div class="wout">
      <div class="stats">${MQ.stat('dir', 'Direzione')}${MQ.stat('risk', 'Il massimo che puoi perdere', 'bad')}${MQ.stat('units', 'Dimensione della posizione (unità)', 'hi')}${MQ.stat('not', 'Valore della posizione')}${MQ.stat('lev', 'Leva necessaria')}${MQ.stat('rr', 'Guadagno : rischio')}${MQ.stat('gain', 'Guadagno potenziale', 'good')}${MQ.stat('be', 'Percentuale di successo di pareggio')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Formula: dimensione della posizione = (conto × rischio %) ÷ (ingresso − stop). È il tuo stop a decidere la dimensione, non il tuo entusiasmo. Costi e slippage sono ignorati qui.</p>`;
    MQ.bind(el, (v) => {
      const dist = Math.abs(v.entry - v.stop);
      if (!dist || !v.entry) { MQ.set(el, { dir: '–', risk: '–', units: '–', not: '–', lev: '–', rr: '–', gain: '–', be: '–', txt: 'Ingresso e stop devono avere prezzi diversi.' }); return; }
      const dir = v.stop < v.entry ? 'Long' : 'Short', riskEur = v.acc * v.risk / 100, units = riskEur / dist, notional = units * v.entry, lev = v.acc ? notional / v.acc : 0;
      const rew = dir === 'Long' ? v.target - v.entry : v.entry - v.target, rr = rew / dist;
      MQ.set(el, { dir, risk: MQ.eur(riskEur), units: MQ.num(units, units < 10 ? 3 : 1), not: MQ.eur(notional), lev: lev.toFixed(2) + '×', rr: rr > 0 ? '1 : ' + rr.toFixed(2) : 'Obiettivo dal lato sbagliato', gain: rr > 0 ? MQ.eur(rew * units) : '–', be: rr > 0 ? (100 / (1 + rr)).toFixed(0) + '%' : '–',
        txt: (lev > 1 ? 'Questa operazione richiede più del valore totale del tuo conto (' + lev.toFixed(1) + '×), quindi servirebbero margine o leva. Verifica di sentirti a tuo agio con questo. ' : '') + (rr > 0 && rr < 1.5 ? 'Il guadagno è piccolo rispetto al rischio: servirebbe una percentuale di successo alta per essere in profitto. ' : '') + (rr >= 2 ? 'Buona struttura: anche vincendo solo il ' + (100 / (1 + rr)).toFixed(0) + '% di queste operazioni vai in pareggio prima dei costi. ' : '') + (v.risk > 2 ? 'Rischiare più del 2% per operazione rende molto dolorose le serie di perdite.' : '') });
    });
  };

  /* ---------------- laboratorio dell’aspettativa ---------------- */
  W.expectancy = (el) => {
    accent(el, 'trd');
    let seed = 5;
    el.innerHTML = `<h4 class="wt">Percentuale di successo vs. guadagno: il laboratorio dell’aspettativa</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('win', 'Percentuale di successo', 10, 80, 1, 40, 'pct')}
      ${MQ.slider('rr', 'Guadagno medio ÷ perdita media (guadagno : rischio)', 0.5, 5, 0.1, 2, 'x')}
      ${MQ.slider('risk', 'Rischio per operazione (del conto)', 0.25, 3, 0.25, 1, 'pct')}
      ${MQ.slider('n', 'Numero di operazioni', 30, 300, 10, 100, 'num')}
      <button class="btn sm" type="button" data-roll>Rilancia la fortuna</button>
    </div><div class="wout">
      <div class="stats">${MQ.stat('e', 'Aspettativa per operazione', 'hi')}${MQ.stat('be', 'Percentuale di successo di pareggio')}${MQ.stat('streak', 'Peggiore serie di perdite tipica')}${MQ.stat('up', '8 trader hanno chiuso in profitto')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['8 trader con la stessa abilità, fortuna diversa', 'var(--trd)'], ['Aspettativa media', 'var(--ink)']])}
      <p class="note" data-r="txt"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const w = v.win / 100, E = w * v.rr - (1 - w), be = 1 / (1 + v.rr), q = 1 - w;
      const streak = q > 0 && q < 1 ? Math.max(1, Math.log(Math.max(2, v.n * (1 - q))) / Math.log(1 / q)) : 0;
      const paths = []; let up = 0;
      for (let k = 0; k < 8; k++) { const r = MQ.rng(seed * 100 + k * 7919); let eq = 100; const a = [eq]; for (let t = 0; t < v.n; t++) { eq *= r() < w ? 1 + v.rr * v.risk / 100 : 1 - v.risk / 100; a.push(eq); } paths.push(a); if (eq > 100) up++; }
      const exp = [100]; for (let t = 1; t <= v.n; t++) exp.push(100 * Math.pow(1 + E * v.risk / 100, t));
      MQ.set(el, { e: (E >= 0 ? '+' : '') + E.toFixed(2) + 'R', be: (be * 100).toFixed(0) + '%', streak: '~' + Math.round(streak) + ' perdite di fila', up: up + ' su 8',
        txt: E > 0 ? 'Aspettativa positiva: su molte operazioni, questo sistema guadagna circa ' + E.toFixed(2) + 'R a operazione. Eppure anche i buoni sistemi hanno lunghe serie di perdite e curve accidentate. È normale.' : 'Aspettativa nulla o negativa: nessun trucco di dimensionamento può salvare questo sistema. Migliora la percentuale di successo, migliora il guadagno : rischio, oppure non operarlo.' });
      MQ.cls(el, 'e', E > 0 ? 'good' : 'bad');
      const series = paths.map((p) => ({ data: p, color: 'var(--trd)', w: 1.8, nodot: true, op: 0.6 })); series.push({ data: exp, color: 'var(--ink)', w: 2.6, dash: true, nodot: true });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 240, series, { fmt: (x) => Math.round(x), xLabels: [{ i: 0, t: '0' }, { i: v.n, t: v.n + ' operazioni' }], label: 'Curve del conto simulate', min: Math.min(60, Math.min.apply(null, paths.map((p) => Math.min.apply(null, p)))) }));
    });
    el.querySelector('[data-roll]').addEventListener('click', () => { seed += 1; upd(); });
  };

  /* ---------------- diario di trading ---------------- */
  W.journal = (el) => {
    accent(el, 'trd');
    const TS = { Breakout: 'Rottura', Pullback: 'Ritracciamento', Reversal: 'Inversione', Other: 'Altro' };
    const TE = { Calm: 'Calma', FOMO: 'FOMO', Revenge: 'Vendetta', Bored: 'Noia', Fear: 'Paura', Greedy: 'Avidità' };
    const SAMPLE = [
      { r: 2.1, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Reversal', plan: false, emo: 'FOMO', ex: 1 },
      { r: 1.8, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -2.4, setup: 'Reversal', plan: false, emo: 'Revenge', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Bored', ex: 1 }, { r: 2.9, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }
    ];
    let E = MQ.store.get('journal', null); if (!Array.isArray(E)) E = SAMPLE.slice();
    el.innerHTML = `<h4 class="wt">Il tuo diario di trading</h4>
    <div class="wgrid flip"><div class="wout">
      <div class="stats">${MQ.stat('n', 'Operazioni registrate')}${MQ.stat('wr', 'Percentuale di successo')}${MQ.stat('tot', 'Risultato totale', 'hi')}${MQ.stat('avg', 'Media per operazione')}</div>
      <div class="tbl" style="margin-top:0"><table><thead><tr><th>Gruppo</th><th>Operazioni</th><th>R medio</th></tr></thead><tbody data-r="grp"></tbody></table></div>
      <p class="note" data-r="ins"></p>
      <div class="tape" data-r="log"></div>
    </div><div class="wctl">
      ${MQ.number('r', 'Risultato in R (es. -1, 2,5)', 1, -20, 50, 0.1)}
      ${MQ.select('setup', 'Setup', [['Breakout', TS.Breakout], ['Pullback', TS.Pullback], ['Reversal', TS.Reversal], ['Other', TS.Other]], 'Pullback')}
      ${MQ.select('plan', 'Hai seguito il tuo piano?', [['yes', 'Sì'], ['no', 'No']], 'yes')}
      ${MQ.select('emo', 'Emozione principale prima dell’ingresso', [['Calm', TE.Calm], ['FOMO', TE.FOMO], ['Revenge', TE.Revenge], ['Bored', TE.Bored], ['Fear', TE.Fear], ['Greedy', TE.Greedy]], 'Calm')}
      <div class="btnrow"><button class="btn sm" type="button" data-add>Aggiungi operazione</button><button class="btn sm alt" type="button" data-clear>Cancella tutto</button><button class="btn sm alt" type="button" data-ex>Carica esempi</button></div>
      <p class="note" data-r="hint"></p>
    </div></div>`;
    const avg = (a) => a.length ? a.reduce((s, x) => s + x.r, 0) / a.length : 0;
    const f = (n) => (n >= 0 ? '+' : '') + n.toFixed(2) + 'R';
    const render = () => {
      const n = E.length, wins = E.filter((x) => x.r > 0).length, tot = E.reduce((s, x) => s + x.r, 0);
      const yes = E.filter((x) => x.plan), no = E.filter((x) => !x.plan);
      const emos = {}; E.forEach((x) => { (emos[x.emo] = emos[x.emo] || []).push(x); });
      let rows = `<tr><th scope="row">Piano seguito</th><td>${yes.length}</td><td>${yes.length ? f(avg(yes)) : '–'}</td></tr><tr><th scope="row">Piano violato</th><td>${no.length}</td><td>${no.length ? f(avg(no)) : '–'}</td></tr>`;
      Object.keys(emos).forEach((k) => { rows += `<tr><th scope="row">Emozione: ${TE[k] || k}</th><td>${emos[k].length}</td><td>${f(avg(emos[k]))}</td></tr>`; });
      const ins = (yes.length && no.length && avg(yes) > avg(no)) ? 'Intuizione: le operazioni in cui hai seguito il piano battono le altre di ' + (avg(yes) - avg(no)).toFixed(2) + 'R ciascuna. Il diario si è appena ripagato.' : (n ? 'Continua a registrare. Gli schemi emergono dopo circa 30-50 operazioni.' : 'Aggiungi la tua prima operazione per vedere gli schemi.');
      MQ.set(el, { n: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', tot: n ? f(tot) : '–', avg: n ? f(tot / n) : '–', grp: rows, ins,
        hint: E.some((x) => x.ex) ? 'Queste sono operazioni di esempio. Premi «Cancella tutto» e registra le tue.' : '' });
      const box = el.querySelector('[data-r="log"]'); box.innerHTML = '';
      E.slice(-10).reverse().forEach((x) => { const d = document.createElement('div'); d.className = x.r > 0 ? 'w' : 'l'; d.textContent = f(x.r) + ' · ' + (TS[x.setup] || x.setup) + ' · ' + (x.plan ? 'piano seguito' : 'piano violato') + ' · ' + (TE[x.emo] || x.emo); box.appendChild(d); });
    };
    el.addEventListener('click', (e) => {
      const g = (k) => el.querySelector('[data-k="' + k + '"]').value;
      if (e.target.closest('[data-add]')) {
        const r = parseFloat(g('r')); if (!isFinite(r)) return;
        if (E.some((x) => x.ex)) E = E.filter((x) => !x.ex);
        E.push({ r, setup: g('setup'), plan: g('plan') === 'yes', emo: g('emo') }); MQ.store.set('journal', E); render();
      } else if (e.target.closest('[data-clear]')) { E = []; MQ.store.set('journal', E); render(); }
      else if (e.target.closest('[data-ex]')) { E = SAMPLE.slice(); MQ.store.set('journal', E); render(); }
    });
    render();
  };
})();
