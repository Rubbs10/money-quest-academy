/* Widgets für die Pfade Daytrader und Krypto-Trader */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- Kerzen-Baukasten ---------------- */
  W.candles = (el) => {
    accent(el, 'trd');
    const P = { 'Starke Aufwärtskerze': [30, 75, 80, 26], 'Starke Abwärtskerze': [75, 30, 80, 26], 'Doji': [50, 51, 78, 24], 'Hammer': [60, 66, 68, 18], 'Shooting Star': [40, 34, 86, 32], 'Marubozu': [20, 80, 80, 20] };
    el.innerHTML = `<h4 class="wt">Baue eine Kerze</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(P).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${MQ.slider('o', 'Eröffnung (wo der Zeitraum begann)', 0, 100, 1, 30, 'num')}
      ${MQ.slider('c', 'Schluss (wo er endete)', 0, 100, 1, 75, 'num')}
      ${MQ.slider('h', 'Hoch (die Spitze, die der Preis berührte)', 0, 100, 1, 80, 'num')}
      ${MQ.slider('l', 'Tief (der Boden, den er berührte)', 0, 100, 1, 26, 'num')}
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
        if (dn > range * 0.6) { name = 'Dragonfly-Doji'; txt = 'Der Preis fiel stark, dann drückten die Käufer ihn ganz nach oben zurück. Manchmal eine Warnung, dass die Verkäufer müde werden, aber nur im Zusammenhang ein Signal.'; }
        else if (up > range * 0.6) { name = 'Gravestone-Doji'; txt = 'Die Käufer drückten nach oben, aber die Verkäufer nahmen alles zurück. Kann warnen, dass einer Aufwärtsbewegung die Puste ausgeht.'; }
        else { name = 'Doji'; txt = 'Eröffnung und Schluss fast gleich: Käufer und Verkäufer kämpften unentschieden. Das signalisiert Unentschlossenheit, keine Richtung.'; }
      } else if (up < range * 0.03 && dn < range * 0.03) { name = bull ? 'Bullisher Marubozu' : 'Bearisher Marubozu'; txt = 'Eine Kerze mit vollem Körper und fast ohne Schatten: eine Seite kontrollierte den ganzen Zeitraum. Starkes Momentum.'; }
      else if (dn >= body * 2 && up <= body * 0.6) { name = 'Hammer-Form'; txt = 'Ein langer unterer Schatten: Verkäufer drückten nach unten, aber Käufer wiesen die Tiefs zurück. Nach einem Abwärtstrend kann das auf einen Boden hindeuten, aber warte auf Bestätigung.'; }
      else if (up >= body * 2 && dn <= body * 0.6) { name = 'Shooting-Star-Form'; txt = 'Ein langer oberer Schatten: Käufer versuchten höher zu kommen, wurden aber abgewiesen. Nach einem Aufwärtstrend kann das auf ein Hoch hindeuten, aber warte auf Bestätigung.'; }
      else if (body / range < 0.3) { name = 'Spinning Top'; txt = 'Ein kleiner Körper mit Schatten auf beiden Seiten: ein Tauziehen ohne klaren Sieger.'; }
      else { name = bull ? 'Bullische Kerze' : 'Bearische Kerze'; txt = bull ? 'Schluss über der Eröffnung: Die Käufer gewannen diesen Zeitraum. Die Größe des Körpers zeigt, wie überzeugend.' : 'Schluss unter der Eröffnung: Die Verkäufer gewannen diesen Zeitraum. Die Größe des Körpers zeigt, wie überzeugend.'; }
      MQ.set(el, { name: name + ' (' + (bull ? 'grün, im Plus geschlossen' : 'rot, im Minus geschlossen') + ')', txt });
      const Y = (x) => 250 - (x / 100) * 230, cx = 130, col = bull ? 'var(--good)' : 'var(--bad)';
      const top = Y(Math.max(v.o, v.c)), bh = Math.max(2, Math.abs(Y(v.o) - Y(v.c)));
      let yo = Y(v.o) + 4, yc = Y(v.c) + 4;
      if (Math.abs(yo - yc) < 15) { if (yc >= yo) yc = yo + 15; else yo = yc + 15; }
      MQ.draw(ch, () => `<svg viewBox="0 0 330 270" role="img" aria-label="Kerze mit Eröffnung ${v.o}, Schluss ${v.c}, Hoch ${hi}, Tief ${lo}">
        <line x1="${cx}" x2="${cx}" y1="${Y(hi)}" y2="${Y(lo)}" style="stroke:${col}" stroke-width="4" stroke-linecap="round"/>
        <rect x="${cx - 26}" y="${top}" width="52" height="${bh}" rx="3" style="fill:${col};stroke:var(--line)" stroke-width="2"/>
        <g class="lbl"><text x="${cx + 44}" y="${Y(hi) + 4}">Hoch ${hi}</text><text x="${cx + 44}" y="${Y(lo) + 4}">Tief ${lo}</text>
        <text x="${cx - 36}" y="${yo}" text-anchor="end">Eröffn. ${v.o}</text><text x="${cx - 36}" y="${yc}" text-anchor="end">Schluss ${v.c}</text></g></svg>`);
    });
  };

  /* ---------------- Paper-Trading-Labor ---------------- */
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
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } const b = el.querySelector('[data-act="auto"]'); if (b) b.textContent = 'Autoplay'; };
    el.innerHTML = `<h4 class="wt">Paper-Trading-Labor: 100 Kerzen, 10.000 € Spielgeld</h4>
    <div class="chart" data-c="1"></div>
    <div class="stats" style="margin-top:.8rem">${MQ.stat('eq', 'Kapital', 'hi')}${MQ.stat('pos', 'Offene Position')}${MQ.stat('n', 'Verbleibende Kerzen')}${MQ.stat('tr', 'Trades')}${MQ.stat('wr', 'Trefferquote')}${MQ.stat('ar', 'Durchschnittliches R')}${MQ.stat('dd', 'Maximaler Drawdown')}</div>
    <div class="btnrow">
      <button class="btn sm" type="button" data-act="long">Kaufen (Long)</button>
      <button class="btn sm" type="button" data-act="short">Verkaufen (Short)</button>
      <button class="btn sm alt" type="button" data-act="close">Position schließen</button>
      <button class="btn sm alt" type="button" data-act="next">Nächste Kerze ▸</button>
      <button class="btn sm alt" type="button" data-act="auto">Autoplay</button>
      <button class="btn sm alt" type="button" data-act="new">Neuer Markt</button>
    </div>
    <div class="wgrid" style="margin-top:.9rem"><div class="wctl">
      ${MQ.select('risk', 'Risiko pro Trade (vom Kapital)', [['0.5', '0,5 %'], ['1', '1 %'], ['2', '2 %']], '1')}
      ${MQ.select('sd', 'Stop-Loss-Abstand zum Einstieg', [['1', '1 %'], ['2', '2 %'], ['3', '3 %']], '2')}
      ${MQ.select('tr', 'Gewinnziel', [['0', 'Keines (ich schließe selbst)'], ['1', '1R (Gewinn = Risiko)'], ['2', '2R (Gewinn = doppeltes Risiko)'], ['3', '3R']], '2')}
      ${MQ.check('sma', '20-Kerzen-Durchschnittslinie anzeigen', true)}
    </div><div class="wout"><div class="tape" data-r="log" aria-live="polite"><div>Trade-Protokoll. Deine Größe wird aus Risiko und Stop für dich berechnet. Kosten von 0,05 % pro Seite sind enthalten.</div></div></div></div>
    <div class="msg" data-r="end" hidden></div>
    <p class="note">R steht für „Risikoeinheit“: Riskierst du 100 € und gewinnst 200 €, sind das +2R. In dieser Simulation werden Stops zu ihrem Preis ausgeführt; echte Märkte können Slippage haben. Werden Stop und Ziel in derselben Kerze berührt, zählt zuerst der Stop.</p>`;
    const ch = el.querySelector('[data-c]');
    const price = () => S.candles[S.i].c;
    const sma = (i) => { if (i < 19) return null; let s = 0; for (let k = i - 19; k <= i; k++) s += S.candles[k].c; return s / 20; };
    const val = (k) => el.querySelector('[data-k="' + k + '"]');
    const equityNow = () => { let e = S.eq; if (S.pos) { const p = S.pos, px = price(); e += (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; } return e; };
    const stats = () => {
      const t = S.trades, n = t.length, wins = t.filter((x) => x.r > 0).length;
      const avgR = n ? t.reduce((a, x) => a + x.r, 0) / n : 0;
      let pk = S.curve[0], dd = 0; S.curve.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); });
      let posTxt = 'Keine';
      if (S.pos) { const p = S.pos, px = price(), u = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; posTxt = (p.dir === 'long' ? 'LONG' : 'SHORT') + ' ' + MQ.eur(u) + ' (' + (u / p.risk >= 0 ? '+' : '') + (u / p.risk).toFixed(1) + 'R)'; }
      MQ.set(el, { eq: MQ.eur(equityNow()), pos: posTxt, n: String(Math.max(0, LEN - S.steps)), tr: String(n), wr: n ? Math.round(wins / n * 100) + ' %' : '–', ar: n ? (avgR >= 0 ? '+' : '') + avgR.toFixed(2) + 'R' : '–', dd: MQ.pct(dd * 100, 1) });
      const set = (a, dis) => { const b = el.querySelector('[data-act="' + a + '"]'); if (b) b.disabled = dis; };
      set('long', !!S.pos || S.over); set('short', !!S.pos || S.over); set('close', !S.pos || S.over); set('next', S.over);
    };
    const logLine = (t) => {
      const box = el.querySelector('[data-r="log"]'); if (box.dataset.f !== '1') { box.innerHTML = ''; box.dataset.f = '1'; }
      const d = document.createElement('div'); d.className = t.r > 0 ? 'w' : 'l';
      d.textContent = '#' + S.trades.length + ' ' + (t.dir === 'long' ? 'LONG' : 'SHORT') + ' ' + (t.r >= 0 ? '+' : '') + t.r.toFixed(2) + 'R (' + MQ.eur(t.pnl) + ') Ausstieg: ' + t.why;
      box.insertBefore(d, box.firstChild);
    };
    const closePos = (px, why) => {
      const p = S.pos, gross = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units;
      const cost = p.units * p.entry * COST + p.units * px * COST, pnl = gross - cost;
      S.eq += pnl; S.curve.push(S.eq);
      const t = { dir: p.dir, pnl, r: pnl / p.risk, why }; S.trades.push(t); S.pos = null; logLine(t);
    };
    const finish = () => {
      if (S.pos) closePos(price(), 'Spielende');
      S.over = true; stop();
      const n = S.trades.length, wins = S.trades.filter((x) => x.r > 0).length, tot = S.trades.reduce((a, x) => a + x.r, 0);
      const bh = (S.candles[S.i].c / S.candles[START - 1].c - 1) * 100, res = (S.eq / 10000 - 1) * 100;
      const box = el.querySelector('[data-r="end"]'); box.hidden = false;
      box.innerHTML = `<p><b>Spiel vorbei. Du hast bei ${MQ.eur(S.eq)} (${res >= 0 ? '+' : ''}${res.toFixed(1)} %) nach ${n} Trades geendet. Der Markt selbst bewegte sich im selben Zeitraum um ${bh >= 0 ? '+' : ''}${bh.toFixed(1)} %.</b></p>
      <p>${n === 0 ? 'Du hast nicht gehandelt. Geduld ist eine Fähigkeit, aber zum Lernen brauchst du Wiederholungen.' : n < 10 ? 'Weniger als 10 Trades sind eine viel zu kleine Stichprobe, um irgendetwas zu beurteilen. Eine echte Bewertung braucht mehr als 100 Trades.' : (tot > 0 ? 'Ein positives Ergebnis ist schön, aber frag dich ehrlich: War es Können oder Glück in einem einzigen Markt? Spiele einen weiteren Markt und sieh, ob es sich wiederholt.' : 'Ein Verlust in einer Simulation ist das billigste Lehrgeld, das du je zahlen wirst. Prüfe: Hast du nach Risiko dimensioniert, Stops genutzt und Rache-Trades vermieden?')}</p>
      <p>Trefferquote ${n ? Math.round(wins / n * 100) : 0} %, insgesamt ${tot >= 0 ? '+' : ''}${tot.toFixed(1)}R. Probiere einen anderen Markt und behalte dieselben Regeln.</p>`;
      stats(); draw();
    };
    const next = () => {
      if (S.over) return;
      S.i++; S.steps++;
      const c = S.candles[S.i], p = S.pos;
      if (p) {
        let ex = null, why = '';
        if (p.dir === 'long') { if (c.l <= p.stop) { ex = p.stop; why = 'Stop-Loss'; } else if (p.target && c.h >= p.target) { ex = p.target; why = 'Ziel'; } }
        else { if (c.h >= p.stop) { ex = p.stop; why = 'Stop-Loss'; } else if (p.target && c.l <= p.target) { ex = p.target; why = 'Ziel'; } }
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
        if (S.pos) { s += line(S.pos.entry, 'var(--ink)', 'Einstieg'); s += line(S.pos.stop, 'var(--bad)', 'Stop'); if (S.pos.target) s += line(S.pos.target, 'var(--good)', 'Ziel'); }
        s += `<circle cx="${(padL + (vis.length - 0.5) * st).toFixed(1)}" cy="${Y(price()).toFixed(1)}" r="4" style="fill:var(--ct);stroke:var(--line)" stroke-width="2"/>`;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Kerzendiagramm des Übungsmarkts">${g}${s}</svg>`;
      });
    }
    fresh(); stats(); draw();
    el.addEventListener('change', (e) => { if (e.target.matches('[data-k="sma"]')) draw(); });
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const a = b.dataset.act;
      if (a === 'long' || a === 'short') open(a);
      else if (a === 'close') { if (S.pos) { closePos(price(), 'von dir geschlossen'); stats(); draw(); } }
      else if (a === 'next') next();
      else if (a === 'auto') {
        if (timer) { stop(); return; }
        b.textContent = 'Pause';
        timer = setInterval(() => { if (!el.isConnected || S.over) { stop(); return; } next(); }, 450);
      } else if (a === 'new') {
        stop(); seed += 17; fresh(); const box = el.querySelector('[data-r="log"]'); box.dataset.f = ''; box.innerHTML = '<div>Trade-Protokoll. Neuer Markt geladen.</div>';
        el.querySelector('[data-r="end"]').hidden = true; stats(); draw();
      }
    });
  };

  /* ---------------- Positionsgrößen-Rechner ---------------- */
  W.possize = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Positionsgrößen-Rechner</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('acc', 'Kontogröße (€)', 5000, 0, 10000000, 100)}
      ${MQ.slider('risk', 'Risiko pro Trade', 0.25, 5, 0.25, 1, 'pct')}
      ${MQ.number('entry', 'Einstiegskurs', 50, 0, 10000000, 0.01)}
      ${MQ.number('stop', 'Stop-Loss-Kurs', 48, 0, 10000000, 0.01)}
      ${MQ.number('target', 'Zielkurs', 56, 0, 10000000, 0.01)}
    </div><div class="wout">
      <div class="stats">${MQ.stat('dir', 'Richtung')}${MQ.stat('risk', 'Maximaler Verlust', 'bad')}${MQ.stat('units', 'Positionsgröße (Einheiten)', 'hi')}${MQ.stat('not', 'Positionswert')}${MQ.stat('lev', 'Nötiger Hebel')}${MQ.stat('rr', 'Chance : Risiko')}${MQ.stat('gain', 'Möglicher Gewinn', 'good')}${MQ.stat('be', 'Break-even-Trefferquote')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Formel: Positionsgröße = (Konto × Risiko-%) ÷ (Einstieg − Stop). Dein Stop bestimmt deine Größe, nicht deine Aufregung. Kosten und Slippage werden hier ignoriert.</p>`;
    MQ.bind(el, (v) => {
      const dist = Math.abs(v.entry - v.stop);
      if (!dist || !v.entry) { MQ.set(el, { dir: '–', risk: '–', units: '–', not: '–', lev: '–', rr: '–', gain: '–', be: '–', txt: 'Einstieg und Stop müssen unterschiedliche Kurse sein.' }); return; }
      const dir = v.stop < v.entry ? 'Long' : 'Short', riskEur = v.acc * v.risk / 100, units = riskEur / dist, notional = units * v.entry, lev = v.acc ? notional / v.acc : 0;
      const rew = dir === 'Long' ? v.target - v.entry : v.entry - v.target, rr = rew / dist;
      MQ.set(el, { dir, risk: MQ.eur(riskEur), units: MQ.num(units, units < 10 ? 3 : 1), not: MQ.eur(notional), lev: lev.toFixed(2) + '×', rr: rr > 0 ? '1 : ' + rr.toFixed(2) : 'Ziel auf der falschen Seite', gain: rr > 0 ? MQ.eur(rew * units) : '–', be: rr > 0 ? (100 / (1 + rr)).toFixed(0) + ' %' : '–',
        txt: (lev > 1 ? 'Dieser Trade braucht mehr als den gesamten Wert deines Kontos (' + lev.toFixed(1) + '×), du bräuchtest also Margin oder Hebel. Prüfe, ob du damit einverstanden bist. ' : '') + (rr > 0 && rr < 1.5 ? 'Die Chance ist im Vergleich zum Risiko klein: Du bräuchtest eine hohe Trefferquote, um Gewinn zu machen. ' : '') + (rr >= 2 ? 'Gute Struktur: Selbst wenn du nur ' + (100 / (1 + rr)).toFixed(0) + ' % solcher Trades gewinnst, bist du vor Kosten bei null. ' : '') + (v.risk > 2 ? 'Mehr als 2 % pro Trade zu riskieren, macht Verlustserien sehr schmerzhaft.' : '') });
    });
  };

  /* ---------------- Erwartungswert-Labor ---------------- */
  W.expectancy = (el) => {
    accent(el, 'trd');
    let seed = 5;
    el.innerHTML = `<h4 class="wt">Trefferquote vs. Ertrag: das Erwartungswert-Labor</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('win', 'Trefferquote', 10, 80, 1, 40, 'pct')}
      ${MQ.slider('rr', 'Durchschnittlicher Gewinn ÷ durchschnittlicher Verlust (Chance : Risiko)', 0.5, 5, 0.1, 2, 'x')}
      ${MQ.slider('risk', 'Risiko pro Trade (vom Konto)', 0.25, 3, 0.25, 1, 'pct')}
      ${MQ.slider('n', 'Anzahl der Trades', 30, 300, 10, 100, 'num')}
      <button class="btn sm" type="button" data-roll>Glück neu würfeln</button>
    </div><div class="wout">
      <div class="stats">${MQ.stat('e', 'Erwartungswert pro Trade', 'hi')}${MQ.stat('be', 'Break-even-Trefferquote')}${MQ.stat('streak', 'Typische schlimmste Verlustserie')}${MQ.stat('up', '8 Trader endeten im Plus')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['8 Trader mit gleichem Können, unterschiedlichem Glück', 'var(--trd)'], ['Durchschnittliche Erwartung', 'var(--ink)']])}
      <p class="note" data-r="txt"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const w = v.win / 100, E = w * v.rr - (1 - w), be = 1 / (1 + v.rr), q = 1 - w;
      const streak = q > 0 && q < 1 ? Math.max(1, Math.log(Math.max(2, v.n * (1 - q))) / Math.log(1 / q)) : 0;
      const paths = []; let up = 0;
      for (let k = 0; k < 8; k++) { const r = MQ.rng(seed * 100 + k * 7919); let eq = 100; const a = [eq]; for (let t = 0; t < v.n; t++) { eq *= r() < w ? 1 + v.rr * v.risk / 100 : 1 - v.risk / 100; a.push(eq); } paths.push(a); if (eq > 100) up++; }
      const exp = [100]; for (let t = 1; t <= v.n; t++) exp.push(100 * Math.pow(1 + E * v.risk / 100, t));
      MQ.set(el, { e: (E >= 0 ? '+' : '') + E.toFixed(2) + 'R', be: (be * 100).toFixed(0) + ' %', streak: '~' + Math.round(streak) + ' Verluste in Folge', up: up + ' von 8',
        txt: E > 0 ? 'Positiver Erwartungswert: Über viele Trades macht dieses System etwa ' + E.toFixed(2) + 'R pro Trade. Dennoch haben selbst gute Systeme lange Verlustserien und holprige Kurven. Das ist normal.' : 'Null oder negativer Erwartungswert: Kein Positionsgrößen-Trick kann dieses System retten. Verbessere die Trefferquote, verbessere Chance : Risiko oder handle es nicht.' });
      MQ.cls(el, 'e', E > 0 ? 'good' : 'bad');
      const series = paths.map((p) => ({ data: p, color: 'var(--trd)', w: 1.8, nodot: true, op: 0.6 })); series.push({ data: exp, color: 'var(--ink)', w: 2.6, dash: true, nodot: true });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 240, series, { fmt: (x) => Math.round(x), xLabels: [{ i: 0, t: '0' }, { i: v.n, t: v.n + ' Trades' }], label: 'Simulierte Kontokurven', min: Math.min(60, Math.min.apply(null, paths.map((p) => Math.min.apply(null, p)))) }));
    });
    el.querySelector('[data-roll]').addEventListener('click', () => { seed += 1; upd(); });
  };

  /* ---------------- Trading-Tagebuch ---------------- */
  W.journal = (el) => {
    accent(el, 'trd');
    const TS = { Breakout: 'Ausbruch', Pullback: 'Rücksetzer', Reversal: 'Umkehr', Other: 'Sonstiges' };
    const TE = { Calm: 'Ruhe', FOMO: 'FOMO', Revenge: 'Rache', Bored: 'Langeweile', Fear: 'Angst', Greedy: 'Gier' };
    const SAMPLE = [
      { r: 2.1, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Reversal', plan: false, emo: 'FOMO', ex: 1 },
      { r: 1.8, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -2.4, setup: 'Reversal', plan: false, emo: 'Revenge', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Bored', ex: 1 }, { r: 2.9, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }
    ];
    let E = MQ.store.get('journal', null); if (!Array.isArray(E)) E = SAMPLE.slice();
    el.innerHTML = `<h4 class="wt">Dein Trading-Tagebuch</h4>
    <div class="wgrid flip"><div class="wout">
      <div class="stats">${MQ.stat('n', 'Erfasste Trades')}${MQ.stat('wr', 'Trefferquote')}${MQ.stat('tot', 'Gesamtergebnis', 'hi')}${MQ.stat('avg', 'Durchschnitt pro Trade')}</div>
      <div class="tbl" style="margin-top:0"><table><thead><tr><th>Gruppe</th><th>Trades</th><th>Durchschnittliches R</th></tr></thead><tbody data-r="grp"></tbody></table></div>
      <p class="note" data-r="ins"></p>
      <div class="tape" data-r="log"></div>
    </div><div class="wctl">
      ${MQ.number('r', 'Ergebnis in R (z. B. -1, 2,5)', 1, -20, 50, 0.1)}
      ${MQ.select('setup', 'Setup', [['Breakout', TS.Breakout], ['Pullback', TS.Pullback], ['Reversal', TS.Reversal], ['Other', TS.Other]], 'Pullback')}
      ${MQ.select('plan', 'Hast du deinen Plan befolgt?', [['yes', 'Ja'], ['no', 'Nein']], 'yes')}
      ${MQ.select('emo', 'Hauptemotion vor dem Einstieg', [['Calm', TE.Calm], ['FOMO', TE.FOMO], ['Revenge', TE.Revenge], ['Bored', TE.Bored], ['Fear', TE.Fear], ['Greedy', TE.Greedy]], 'Calm')}
      <div class="btnrow"><button class="btn sm" type="button" data-add>Trade hinzufügen</button><button class="btn sm alt" type="button" data-clear>Alles löschen</button><button class="btn sm alt" type="button" data-ex>Beispiele laden</button></div>
      <p class="note" data-r="hint"></p>
    </div></div>`;
    const avg = (a) => a.length ? a.reduce((s, x) => s + x.r, 0) / a.length : 0;
    const f = (n) => (n >= 0 ? '+' : '') + n.toFixed(2) + 'R';
    const render = () => {
      const n = E.length, wins = E.filter((x) => x.r > 0).length, tot = E.reduce((s, x) => s + x.r, 0);
      const yes = E.filter((x) => x.plan), no = E.filter((x) => !x.plan);
      const emos = {}; E.forEach((x) => { (emos[x.emo] = emos[x.emo] || []).push(x); });
      let rows = `<tr><th scope="row">Plan befolgt</th><td>${yes.length}</td><td>${yes.length ? f(avg(yes)) : '–'}</td></tr><tr><th scope="row">Plan gebrochen</th><td>${no.length}</td><td>${no.length ? f(avg(no)) : '–'}</td></tr>`;
      Object.keys(emos).forEach((k) => { rows += `<tr><th scope="row">Emotion: ${TE[k] || k}</th><td>${emos[k].length}</td><td>${f(avg(emos[k]))}</td></tr>`; });
      const ins = (yes.length && no.length && avg(yes) > avg(no)) ? 'Erkenntnis: Trades, bei denen du den Plan befolgt hast, schlugen die anderen um ' + (avg(yes) - avg(no)).toFixed(2) + 'R pro Trade. Das Tagebuch hat sich gerade bezahlt gemacht.' : (n ? 'Schreib weiter mit. Muster zeigen sich nach etwa 30 bis 50 Trades.' : 'Füge deinen ersten Trade hinzu, um Muster zu sehen.');
      MQ.set(el, { n: String(n), wr: n ? Math.round(wins / n * 100) + ' %' : '–', tot: n ? f(tot) : '–', avg: n ? f(tot / n) : '–', grp: rows, ins,
        hint: E.some((x) => x.ex) ? 'Das sind Beispiel-Trades. Drücke „Alles löschen“ und erfasse deine eigenen.' : '' });
      const box = el.querySelector('[data-r="log"]'); box.innerHTML = '';
      E.slice(-10).reverse().forEach((x) => { const d = document.createElement('div'); d.className = x.r > 0 ? 'w' : 'l'; d.textContent = f(x.r) + ' · ' + (TS[x.setup] || x.setup) + ' · ' + (x.plan ? 'Plan befolgt' : 'Plan gebrochen') + ' · ' + (TE[x.emo] || x.emo); box.appendChild(d); });
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
