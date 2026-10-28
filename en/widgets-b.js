/* Widgets for the Day Trader and Crypto Trader paths */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- candlestick builder ---------------- */
  W.candles = (el) => {
    accent(el, 'trd');
    const P = { 'Strong bullish': [30, 75, 80, 26], 'Strong bearish': [75, 30, 80, 26], 'Doji': [50, 51, 78, 24], 'Hammer': [60, 66, 68, 18], 'Shooting star': [40, 34, 86, 32], 'Marubozu': [20, 80, 80, 20] };
    el.innerHTML = `<h4 class="wt">Build a candlestick</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(P).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${MQ.slider('o', 'Open (where the period started)', 0, 100, 1, 30, 'num')}
      ${MQ.slider('c', 'Close (where it ended)', 0, 100, 1, 75, 'num')}
      ${MQ.slider('h', 'High (the top the price touched)', 0, 100, 1, 80, 'num')}
      ${MQ.slider('l', 'Low (the bottom it touched)', 0, 100, 1, 26, 'num')}
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
        if (dn > range * 0.6) { name = 'Dragonfly doji'; txt = 'Price fell hard, then buyers pushed it all the way back. Sometimes a warning that sellers are tiring, but only a signal in context.'; }
        else if (up > range * 0.6) { name = 'Gravestone doji'; txt = 'Buyers pushed up but sellers took everything back. Can warn that an up-move is running out of steam.'; }
        else { name = 'Doji'; txt = 'Open and close almost equal: buyers and sellers fought to a draw. It signals indecision, not direction.'; }
      } else if (up < range * 0.03 && dn < range * 0.03) { name = bull ? 'Bullish marubozu' : 'Bearish marubozu'; txt = 'A full-body candle with almost no wicks: one side controlled the entire period. Strong momentum.'; }
      else if (dn >= body * 2 && up <= body * 0.6) { name = 'Hammer shape'; txt = 'A long lower wick: sellers pushed down but buyers rejected the lows. After a down-trend it can hint at a bottom, but wait for confirmation.'; }
      else if (up >= body * 2 && dn <= body * 0.6) { name = 'Shooting-star shape'; txt = 'A long upper wick: buyers tried to push higher but were rejected. After an up-trend it can hint at a top, but wait for confirmation.'; }
      else if (body / range < 0.3) { name = 'Spinning top'; txt = 'A small body with wicks on both sides: a tug of war with no clear winner.'; }
      else { name = bull ? 'Bullish candle' : 'Bearish candle'; txt = bull ? 'Close above open: buyers won this period. Size of the body shows how convincingly.' : 'Close below open: sellers won this period. Size of the body shows how convincingly.'; }
      MQ.set(el, { name: name + ' (' + (bull ? 'green, closed up' : 'red, closed down') + ')', txt });
      const Y = (x) => 250 - (x / 100) * 230, cx = 130, col = bull ? 'var(--good)' : 'var(--bad)';
      const top = Y(Math.max(v.o, v.c)), bh = Math.max(2, Math.abs(Y(v.o) - Y(v.c)));
      let yo = Y(v.o) + 4, yc = Y(v.c) + 4;
      if (Math.abs(yo - yc) < 15) { if (yc >= yo) yc = yo + 15; else yo = yc + 15; }
      MQ.draw(ch, () => `<svg viewBox="0 0 330 270" role="img" aria-label="Candlestick with open ${v.o}, close ${v.c}, high ${hi}, low ${lo}">
        <line x1="${cx}" x2="${cx}" y1="${Y(hi)}" y2="${Y(lo)}" style="stroke:${col}" stroke-width="4" stroke-linecap="round"/>
        <rect x="${cx - 26}" y="${top}" width="52" height="${bh}" rx="3" style="fill:${col};stroke:var(--line)" stroke-width="2"/>
        <g class="lbl"><text x="${cx + 44}" y="${Y(hi) + 4}">High ${hi}</text><text x="${cx + 44}" y="${Y(lo) + 4}">Low ${lo}</text>
        <text x="${cx - 36}" y="${yo}" text-anchor="end">Open ${v.o}</text><text x="${cx - 36}" y="${yc}" text-anchor="end">Close ${v.c}</text></g></svg>`);
    });
  };

  /* ---------------- paper trading lab ---------------- */
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
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } const b = el.querySelector('[data-act="auto"]'); if (b) b.textContent = 'Auto-play'; };
    el.innerHTML = `<h4 class="wt">Paper trading lab: 100 candles, €10,000 of pretend money</h4>
    <div class="chart" data-c="1"></div>
    <div class="stats" style="margin-top:.8rem">${MQ.stat('eq', 'Equity', 'hi')}${MQ.stat('pos', 'Open position')}${MQ.stat('n', 'Candles left')}${MQ.stat('tr', 'Trades')}${MQ.stat('wr', 'Win rate')}${MQ.stat('ar', 'Average R')}${MQ.stat('dd', 'Max drawdown')}</div>
    <div class="btnrow">
      <button class="btn sm" type="button" data-act="long">Buy (long)</button>
      <button class="btn sm" type="button" data-act="short">Sell (short)</button>
      <button class="btn sm alt" type="button" data-act="close">Close position</button>
      <button class="btn sm alt" type="button" data-act="next">Next candle ▸</button>
      <button class="btn sm alt" type="button" data-act="auto">Auto-play</button>
      <button class="btn sm alt" type="button" data-act="new">New market</button>
    </div>
    <div class="wgrid" style="margin-top:.9rem"><div class="wctl">
      ${MQ.select('risk', 'Risk per trade (of equity)', [['0.5', '0.5%'], ['1', '1%'], ['2', '2%']], '1')}
      ${MQ.select('sd', 'Stop-loss distance from entry', [['1', '1%'], ['2', '2%'], ['3', '3%']], '2')}
      ${MQ.select('tr', 'Profit target', [['0', 'None (I close it myself)'], ['1', '1R (win = risk)'], ['2', '2R (win = twice the risk)'], ['3', '3R']], '2')}
      ${MQ.check('sma', 'Show 20-candle average line', true)}
    </div><div class="wout"><div class="tape" data-r="log" aria-live="polite"><div>Trade log. Your size is calculated for you from risk and stop. Costs of 0.05% per side are included.</div></div></div></div>
    <div class="msg" data-r="end" hidden></div>
    <p class="note">R means "risk unit": if you risk €100 and make €200, that is +2R. Stops are filled at their price in this simulation; real markets can slip. If stop and target are both touched in one candle, the stop counts first.</p>`;
    const ch = el.querySelector('[data-c]');
    const price = () => S.candles[S.i].c;
    const sma = (i) => { if (i < 19) return null; let s = 0; for (let k = i - 19; k <= i; k++) s += S.candles[k].c; return s / 20; };
    const val = (k) => el.querySelector('[data-k="' + k + '"]');
    const equityNow = () => { let e = S.eq; if (S.pos) { const p = S.pos, px = price(); e += (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; } return e; };
    const stats = () => {
      const t = S.trades, n = t.length, wins = t.filter((x) => x.r > 0).length;
      const avgR = n ? t.reduce((a, x) => a + x.r, 0) / n : 0;
      let pk = S.curve[0], dd = 0; S.curve.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); });
      let posTxt = 'None';
      if (S.pos) { const p = S.pos, px = price(), u = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; posTxt = p.dir.toUpperCase() + ' ' + MQ.eur(u) + ' (' + (u / p.risk >= 0 ? '+' : '') + (u / p.risk).toFixed(1) + 'R)'; }
      MQ.set(el, { eq: MQ.eur(equityNow()), pos: posTxt, n: String(Math.max(0, LEN - S.steps)), tr: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', ar: n ? (avgR >= 0 ? '+' : '') + avgR.toFixed(2) + 'R' : '–', dd: MQ.pct(dd * 100, 1) });
      const set = (a, dis) => { const b = el.querySelector('[data-act="' + a + '"]'); if (b) b.disabled = dis; };
      set('long', !!S.pos || S.over); set('short', !!S.pos || S.over); set('close', !S.pos || S.over); set('next', S.over);
    };
    const logLine = (t) => {
      const box = el.querySelector('[data-r="log"]'); if (box.dataset.f !== '1') { box.innerHTML = ''; box.dataset.f = '1'; }
      const d = document.createElement('div'); d.className = t.r > 0 ? 'w' : 'l';
      d.textContent = '#' + S.trades.length + ' ' + t.dir.toUpperCase() + ' ' + (t.r >= 0 ? '+' : '') + t.r.toFixed(2) + 'R (' + MQ.eur(t.pnl) + ') exit: ' + t.why;
      box.insertBefore(d, box.firstChild);
    };
    const closePos = (px, why) => {
      const p = S.pos, gross = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units;
      const cost = p.units * p.entry * COST + p.units * px * COST, pnl = gross - cost;
      S.eq += pnl; S.curve.push(S.eq);
      const t = { dir: p.dir, pnl, r: pnl / p.risk, why }; S.trades.push(t); S.pos = null; logLine(t);
    };
    const finish = () => {
      if (S.pos) closePos(price(), 'end of game');
      S.over = true; stop();
      const n = S.trades.length, wins = S.trades.filter((x) => x.r > 0).length, tot = S.trades.reduce((a, x) => a + x.r, 0);
      const bh = (S.candles[S.i].c / S.candles[START - 1].c - 1) * 100, res = (S.eq / 10000 - 1) * 100;
      const box = el.querySelector('[data-r="end"]'); box.hidden = false;
      box.innerHTML = `<p><b>Game over. You finished at ${MQ.eur(S.eq)} (${res >= 0 ? '+' : ''}${res.toFixed(1)}%) from ${n} trades. The market itself moved ${bh >= 0 ? '+' : ''}${bh.toFixed(1)}% over the same period.</b></p>
      <p>${n === 0 ? 'You did not trade. Patience is a skill, but you need repetitions to learn.' : n < 10 ? 'Fewer than 10 trades is far too small a sample to judge anything. Real evaluation needs 100+ trades.' : (tot > 0 ? 'A positive result is nice, but ask honestly: was it skill, or luck in one market? Run another market and see if it repeats.' : 'A loss in a simulation is the cheapest tuition you will ever pay. Check: did you size by risk, use stops, and avoid revenge trades?')}</p>
      <p>Win rate ${n ? Math.round(wins / n * 100) : 0}%, total ${tot >= 0 ? '+' : ''}${tot.toFixed(1)}R. Try a different market and keep the same rules.</p>`;
      stats(); draw();
    };
    const next = () => {
      if (S.over) return;
      S.i++; S.steps++;
      const c = S.candles[S.i], p = S.pos;
      if (p) {
        let ex = null, why = '';
        if (p.dir === 'long') { if (c.l <= p.stop) { ex = p.stop; why = 'stop-loss'; } else if (p.target && c.h >= p.target) { ex = p.target; why = 'target'; } }
        else { if (c.h >= p.stop) { ex = p.stop; why = 'stop-loss'; } else if (p.target && c.l <= p.target) { ex = p.target; why = 'target'; } }
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
        if (S.pos) { s += line(S.pos.entry, 'var(--ink)', 'Entry'); s += line(S.pos.stop, 'var(--bad)', 'Stop'); if (S.pos.target) s += line(S.pos.target, 'var(--good)', 'Target'); }
        s += `<circle cx="${(padL + (vis.length - 0.5) * st).toFixed(1)}" cy="${Y(price()).toFixed(1)}" r="4" style="fill:var(--ct);stroke:var(--line)" stroke-width="2"/>`;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Candlestick chart of the practice market">${g}${s}</svg>`;
      });
    }
    fresh(); stats(); draw();
    el.addEventListener('change', (e) => { if (e.target.matches('[data-k="sma"]')) draw(); });
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const a = b.dataset.act;
      if (a === 'long' || a === 'short') open(a);
      else if (a === 'close') { if (S.pos) { closePos(price(), 'closed by you'); stats(); draw(); } }
      else if (a === 'next') next();
      else if (a === 'auto') {
        if (timer) { stop(); return; }
        b.textContent = 'Pause';
        timer = setInterval(() => { if (!el.isConnected || S.over) { stop(); return; } next(); }, 450);
      } else if (a === 'new') {
        stop(); seed += 17; fresh(); const box = el.querySelector('[data-r="log"]'); box.dataset.f = ''; box.innerHTML = '<div>Trade log. New market loaded.</div>';
        el.querySelector('[data-r="end"]').hidden = true; stats(); draw();
      }
    });
  };

  /* ---------------- position size calculator ---------------- */
  W.possize = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Position size calculator</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('acc', 'Account size (€)', 5000, 0, 10000000, 100)}
      ${MQ.slider('risk', 'Risk per trade', 0.25, 5, 0.25, 1, 'pct')}
      ${MQ.number('entry', 'Entry price', 50, 0, 10000000, 0.01)}
      ${MQ.number('stop', 'Stop-loss price', 48, 0, 10000000, 0.01)}
      ${MQ.number('target', 'Target price', 56, 0, 10000000, 0.01)}
    </div><div class="wout">
      <div class="stats">${MQ.stat('dir', 'Direction')}${MQ.stat('risk', 'Most you can lose', 'bad')}${MQ.stat('units', 'Position size (units)', 'hi')}${MQ.stat('not', 'Position value')}${MQ.stat('lev', 'Leverage needed')}${MQ.stat('rr', 'Reward : risk')}${MQ.stat('gain', 'Potential gain', 'good')}${MQ.stat('be', 'Break-even win rate')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Formula: position size = (account × risk %) ÷ (entry − stop). Your stop decides your size, not your excitement. Costs and slippage are ignored here.</p>`;
    MQ.bind(el, (v) => {
      const dist = Math.abs(v.entry - v.stop);
      if (!dist || !v.entry) { MQ.set(el, { dir: '–', risk: '–', units: '–', not: '–', lev: '–', rr: '–', gain: '–', be: '–', txt: 'Entry and stop must be different prices.' }); return; }
      const dir = v.stop < v.entry ? 'Long' : 'Short', riskEur = v.acc * v.risk / 100, units = riskEur / dist, notional = units * v.entry, lev = v.acc ? notional / v.acc : 0;
      const rew = dir === 'Long' ? v.target - v.entry : v.entry - v.target, rr = rew / dist;
      MQ.set(el, { dir, risk: MQ.eur(riskEur), units: MQ.num(units, units < 10 ? 3 : 1), not: MQ.eur(notional), lev: lev.toFixed(2) + '×', rr: rr > 0 ? '1 : ' + rr.toFixed(2) : 'Target on wrong side', gain: rr > 0 ? MQ.eur(rew * units) : '–', be: rr > 0 ? (100 / (1 + rr)).toFixed(0) + '%' : '–',
        txt: (lev > 1 ? 'This trade needs more than your whole account in value (' + lev.toFixed(1) + '×), so you would need margin or leverage. Check that you are comfortable with that. ' : '') + (rr > 0 && rr < 1.5 ? 'Reward is small compared with risk: you would need a high win rate to profit. ' : '') + (rr >= 2 ? 'Good structure: even winning only ' + (100 / (1 + rr)).toFixed(0) + '% of such trades breaks even before costs. ' : '') + (v.risk > 2 ? 'Risking more than 2% per trade makes losing streaks very painful.' : '') });
    });
  };

  /* ---------------- expectancy lab ---------------- */
  W.expectancy = (el) => {
    accent(el, 'trd');
    let seed = 5;
    el.innerHTML = `<h4 class="wt">Win rate vs. reward: the expectancy lab</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('win', 'Win rate', 10, 80, 1, 40, 'pct')}
      ${MQ.slider('rr', 'Average win ÷ average loss (reward : risk)', 0.5, 5, 0.1, 2, 'x')}
      ${MQ.slider('risk', 'Risk per trade (of account)', 0.25, 3, 0.25, 1, 'pct')}
      ${MQ.slider('n', 'Number of trades', 30, 300, 10, 100, 'num')}
      <button class="btn sm" type="button" data-roll>Re-roll luck</button>
    </div><div class="wout">
      <div class="stats">${MQ.stat('e', 'Expectancy per trade', 'hi')}${MQ.stat('be', 'Break-even win rate')}${MQ.stat('streak', 'Typical worst losing streak')}${MQ.stat('up', '8 traders ended in profit')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['8 traders with identical skill, different luck', 'var(--trd)'], ['Average expectation', 'var(--ink)']])}
      <p class="note" data-r="txt"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const w = v.win / 100, E = w * v.rr - (1 - w), be = 1 / (1 + v.rr), q = 1 - w;
      const streak = q > 0 && q < 1 ? Math.max(1, Math.log(Math.max(2, v.n * (1 - q))) / Math.log(1 / q)) : 0;
      const paths = []; let up = 0;
      for (let k = 0; k < 8; k++) { const r = MQ.rng(seed * 100 + k * 7919); let eq = 100; const a = [eq]; for (let t = 0; t < v.n; t++) { eq *= r() < w ? 1 + v.rr * v.risk / 100 : 1 - v.risk / 100; a.push(eq); } paths.push(a); if (eq > 100) up++; }
      const exp = [100]; for (let t = 1; t <= v.n; t++) exp.push(100 * Math.pow(1 + E * v.risk / 100, t));
      MQ.set(el, { e: (E >= 0 ? '+' : '') + E.toFixed(2) + 'R', be: (be * 100).toFixed(0) + '%', streak: '~' + Math.round(streak) + ' losses in a row', up: up + ' of 8',
        txt: E > 0 ? 'Positive expectancy: over many trades, this system makes about ' + E.toFixed(2) + 'R per trade. Yet even good systems have long losing streaks and bumpy curves. That is normal.' : 'Zero or negative expectancy: no position sizing trick can rescue this system. Improve win rate, improve reward : risk, or do not trade it.' });
      MQ.cls(el, 'e', E > 0 ? 'good' : 'bad');
      const series = paths.map((p) => ({ data: p, color: 'var(--trd)', w: 1.8, nodot: true, op: 0.6 })); series.push({ data: exp, color: 'var(--ink)', w: 2.6, dash: true, nodot: true });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 240, series, { fmt: (x) => Math.round(x), xLabels: [{ i: 0, t: '0' }, { i: v.n, t: v.n + ' trades' }], label: 'Simulated account curves', min: Math.min(60, Math.min.apply(null, paths.map((p) => Math.min.apply(null, p)))) }));
    });
    el.querySelector('[data-roll]').addEventListener('click', () => { seed += 1; upd(); });
  };

  /* ---------------- trading journal ---------------- */
  W.journal = (el) => {
    accent(el, 'trd');
    const SAMPLE = [
      { r: 2.1, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Reversal', plan: false, emo: 'FOMO', ex: 1 },
      { r: 1.8, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -2.4, setup: 'Reversal', plan: false, emo: 'Revenge', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Bored', ex: 1 }, { r: 2.9, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }
    ];
    let E = MQ.store.get('journal', null); if (!Array.isArray(E)) E = SAMPLE.slice();
    el.innerHTML = `<h4 class="wt">Your trading journal</h4>
    <div class="wgrid flip"><div class="wout">
      <div class="stats">${MQ.stat('n', 'Trades logged')}${MQ.stat('wr', 'Win rate')}${MQ.stat('tot', 'Total result', 'hi')}${MQ.stat('avg', 'Average per trade')}</div>
      <div class="tbl" style="margin-top:0"><table><thead><tr><th>Group</th><th>Trades</th><th>Average R</th></tr></thead><tbody data-r="grp"></tbody></table></div>
      <p class="note" data-r="ins"></p>
      <div class="tape" data-r="log"></div>
    </div><div class="wctl">
      ${MQ.number('r', 'Result in R (e.g. -1, 2.5)', 1, -20, 50, 0.1)}
      ${MQ.select('setup', 'Setup', [['Breakout', 'Breakout'], ['Pullback', 'Pullback'], ['Reversal', 'Reversal'], ['Other', 'Other']], 'Pullback')}
      ${MQ.select('plan', 'Did you follow your plan?', [['yes', 'Yes'], ['no', 'No']], 'yes')}
      ${MQ.select('emo', 'Main emotion before entry', [['Calm', 'Calm'], ['FOMO', 'FOMO'], ['Revenge', 'Revenge'], ['Bored', 'Bored'], ['Fear', 'Fear'], ['Greedy', 'Greedy']], 'Calm')}
      <div class="btnrow"><button class="btn sm" type="button" data-add>Add trade</button><button class="btn sm alt" type="button" data-clear>Clear all</button><button class="btn sm alt" type="button" data-ex>Load examples</button></div>
      <p class="note" data-r="hint"></p>
    </div></div>`;
    const avg = (a) => a.length ? a.reduce((s, x) => s + x.r, 0) / a.length : 0;
    const f = (n) => (n >= 0 ? '+' : '') + n.toFixed(2) + 'R';
    const render = () => {
      const n = E.length, wins = E.filter((x) => x.r > 0).length, tot = E.reduce((s, x) => s + x.r, 0);
      const yes = E.filter((x) => x.plan), no = E.filter((x) => !x.plan);
      const emos = {}; E.forEach((x) => { (emos[x.emo] = emos[x.emo] || []).push(x); });
      let rows = `<tr><th scope="row">Followed the plan</th><td>${yes.length}</td><td>${yes.length ? f(avg(yes)) : '–'}</td></tr><tr><th scope="row">Broke the plan</th><td>${no.length}</td><td>${no.length ? f(avg(no)) : '–'}</td></tr>`;
      Object.keys(emos).forEach((k) => { rows += `<tr><th scope="row">Emotion: ${k}</th><td>${emos[k].length}</td><td>${f(avg(emos[k]))}</td></tr>`; });
      const ins = (yes.length && no.length && avg(yes) > avg(no)) ? 'Insight: trades where you followed the plan beat the ones where you did not by ' + (avg(yes) - avg(no)).toFixed(2) + 'R each. The journal just paid for itself.' : (n ? 'Keep logging. Patterns show up after about 30 to 50 trades.' : 'Add your first trade to see patterns.');
      MQ.set(el, { n: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', tot: n ? f(tot) : '–', avg: n ? f(tot / n) : '–', grp: rows, ins,
        hint: E.some((x) => x.ex) ? 'These are example trades. Press "Clear all" and log your own.' : '' });
      const box = el.querySelector('[data-r="log"]'); box.innerHTML = '';
      E.slice(-10).reverse().forEach((x) => { const d = document.createElement('div'); d.className = x.r > 0 ? 'w' : 'l'; d.textContent = f(x.r) + ' · ' + x.setup + ' · ' + (x.plan ? 'plan followed' : 'plan broken') + ' · ' + x.emo; box.appendChild(d); });
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
