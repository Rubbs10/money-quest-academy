/* 日内交易者与加密交易者路径的互动工具 */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- K线构建器 ---------------- */
  W.candles = (el) => {
    accent(el, 'trd');
    const P = { '强势阳线': [30, 75, 80, 26], '强势阴线': [75, 30, 80, 26], '十字星': [50, 51, 78, 24], '锤子线': [60, 66, 68, 18], '射击之星': [40, 34, 86, 32], '光头光脚': [20, 80, 80, 20] };
    el.innerHTML = `<h4 class="wt">自己做一根 K 线</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(P).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${MQ.slider('o', '开盘价（这段时间从哪里开始）', 0, 100, 1, 30, 'num')}
      ${MQ.slider('c', '收盘价（在哪里结束）', 0, 100, 1, 75, 'num')}
      ${MQ.slider('h', '最高价（价格触及的顶部）', 0, 100, 1, 80, 'num')}
      ${MQ.slider('l', '最低价（触及的底部）', 0, 100, 1, 26, 'num')}
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
        if (dn > range * 0.6) { name = '蜻蜓十字星'; txt = '价格大幅下跌，然后买家一路把它推了回来。有时是卖家力竭的警告，但只有结合背景才算信号。'; }
        else if (up > range * 0.6) { name = '墓碑十字星'; txt = '买家向上推，但卖家把一切都夺了回去。可能警告上涨正在失去动力。'; }
        else { name = '十字星'; txt = '开盘和收盘几乎相等：买家和卖家打成平手。它表示犹豫不决，而不是方向。'; }
      } else if (up < range * 0.03 && dn < range * 0.03) { name = bull ? '看涨光头光脚线' : '看跌光头光脚线'; txt = '实体饱满、几乎没有影线的 K 线：一方控制了整个时段。动能强劲。'; }
      else if (dn >= body * 2 && up <= body * 0.6) { name = '锤子线形态'; txt = '下影线很长：卖家向下压，但买家拒绝了低点。在下跌趋势之后可能暗示见底，但要等待确认。'; }
      else if (up >= body * 2 && dn <= body * 0.6) { name = '射击之星形态'; txt = '上影线很长：买家试图推高，但被拒绝了。在上涨趋势之后可能暗示见顶，但要等待确认。'; }
      else if (body / range < 0.3) { name = '纺锤线'; txt = '实体很小，两侧都有影线：一场没有明确赢家的拉锯战。'; }
      else { name = bull ? '阳线' : '阴线'; txt = bull ? '收盘高于开盘：这段时间买家赢了。实体的大小显示了赢得多有说服力。' : '收盘低于开盘：这段时间卖家赢了。实体的大小显示了赢得多有说服力。'; }
      MQ.set(el, { name: name + '（' + (bull ? '绿色，收涨' : '红色，收跌') + '）', txt });
      const Y = (x) => 250 - (x / 100) * 230, cx = 130, col = bull ? 'var(--good)' : 'var(--bad)';
      const top = Y(Math.max(v.o, v.c)), bh = Math.max(2, Math.abs(Y(v.o) - Y(v.c)));
      let yo = Y(v.o) + 4, yc = Y(v.c) + 4;
      if (Math.abs(yo - yc) < 15) { if (yc >= yo) yc = yo + 15; else yo = yc + 15; }
      MQ.draw(ch, () => `<svg viewBox="0 0 330 270" role="img" aria-label="K线：开盘 ${v.o}，收盘 ${v.c}，最高 ${hi}，最低 ${lo}">
        <line x1="${cx}" x2="${cx}" y1="${Y(hi)}" y2="${Y(lo)}" style="stroke:${col}" stroke-width="4" stroke-linecap="round"/>
        <rect x="${cx - 26}" y="${top}" width="52" height="${bh}" rx="3" style="fill:${col};stroke:var(--line)" stroke-width="2"/>
        <g class="lbl"><text x="${cx + 44}" y="${Y(hi) + 4}">最高 ${hi}</text><text x="${cx + 44}" y="${Y(lo) + 4}">最低 ${lo}</text>
        <text x="${cx - 36}" y="${yo}" text-anchor="end">开盘 ${v.o}</text><text x="${cx - 36}" y="${yc}" text-anchor="end">收盘 ${v.c}</text></g></svg>`);
    });
  };

  /* ---------------- 模拟交易实验室 ---------------- */
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
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } const b = el.querySelector('[data-act="auto"]'); if (b) b.textContent = '自动播放'; };
    el.innerHTML = `<h4 class="wt">模拟交易实验室：100 根 K 线，10,000 € 虚拟资金</h4>
    <div class="chart" data-c="1"></div>
    <div class="stats" style="margin-top:.8rem">${MQ.stat('eq', '账户权益', 'hi')}${MQ.stat('pos', '当前持仓')}${MQ.stat('n', '剩余 K 线')}${MQ.stat('tr', '交易次数')}${MQ.stat('wr', '胜率')}${MQ.stat('ar', '平均 R')}${MQ.stat('dd', '最大回撤')}</div>
    <div class="btnrow">
      <button class="btn sm" type="button" data-act="long">买入（做多）</button>
      <button class="btn sm" type="button" data-act="short">卖出（做空）</button>
      <button class="btn sm alt" type="button" data-act="close">平仓</button>
      <button class="btn sm alt" type="button" data-act="next">下一根 K 线 ▸</button>
      <button class="btn sm alt" type="button" data-act="auto">自动播放</button>
      <button class="btn sm alt" type="button" data-act="new">新市场</button>
    </div>
    <div class="wgrid" style="margin-top:.9rem"><div class="wctl">
      ${MQ.select('risk', '每笔交易风险（占权益）', [['0.5', '0.5%'], ['1', '1%'], ['2', '2%']], '1')}
      ${MQ.select('sd', '止损距离入场价', [['1', '1%'], ['2', '2%'], ['3', '3%']], '2')}
      ${MQ.select('tr', '盈利目标', [['0', '无（我自己平仓）'], ['1', '1R（盈利 = 风险）'], ['2', '2R（盈利 = 两倍风险）'], ['3', '3R']], '2')}
      ${MQ.check('sma', '显示 20 根 K 线均线', true)}
    </div><div class="wout"><div class="tape" data-r="log" aria-live="polite"><div>交易记录。仓位大小会根据风险和止损为你自动计算。已包含每边 0.05% 的成本。</div></div></div></div>
    <div class="msg" data-r="end" hidden></div>
    <p class="note">R 表示“风险单位”：如果你冒 100 € 的风险赚了 200 €，就是 +2R。本模拟中止损按其价格成交；真实市场可能有滑点。如果同一根 K 线同时触及止损和目标，以止损优先。</p>`;
    const ch = el.querySelector('[data-c]');
    const price = () => S.candles[S.i].c;
    const sma = (i) => { if (i < 19) return null; let s = 0; for (let k = i - 19; k <= i; k++) s += S.candles[k].c; return s / 20; };
    const val = (k) => el.querySelector('[data-k="' + k + '"]');
    const equityNow = () => { let e = S.eq; if (S.pos) { const p = S.pos, px = price(); e += (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; } return e; };
    const stats = () => {
      const t = S.trades, n = t.length, wins = t.filter((x) => x.r > 0).length;
      const avgR = n ? t.reduce((a, x) => a + x.r, 0) / n : 0;
      let pk = S.curve[0], dd = 0; S.curve.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); });
      let posTxt = '无';
      if (S.pos) { const p = S.pos, px = price(), u = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; posTxt = (p.dir === 'long' ? '做多' : '做空') + ' ' + MQ.eur(u) + '（' + (u / p.risk >= 0 ? '+' : '') + (u / p.risk).toFixed(1) + 'R）'; }
      MQ.set(el, { eq: MQ.eur(equityNow()), pos: posTxt, n: String(Math.max(0, LEN - S.steps)), tr: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', ar: n ? (avgR >= 0 ? '+' : '') + avgR.toFixed(2) + 'R' : '–', dd: MQ.pct(dd * 100, 1) });
      const set = (a, dis) => { const b = el.querySelector('[data-act="' + a + '"]'); if (b) b.disabled = dis; };
      set('long', !!S.pos || S.over); set('short', !!S.pos || S.over); set('close', !S.pos || S.over); set('next', S.over);
    };
    const logLine = (t) => {
      const box = el.querySelector('[data-r="log"]'); if (box.dataset.f !== '1') { box.innerHTML = ''; box.dataset.f = '1'; }
      const d = document.createElement('div'); d.className = t.r > 0 ? 'w' : 'l';
      d.textContent = '#' + S.trades.length + ' ' + (t.dir === 'long' ? '做多' : '做空') + ' ' + (t.r >= 0 ? '+' : '') + t.r.toFixed(2) + 'R（' + MQ.eur(t.pnl) + '）离场原因：' + t.why;
      box.insertBefore(d, box.firstChild);
    };
    const closePos = (px, why) => {
      const p = S.pos, gross = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units;
      const cost = p.units * p.entry * COST + p.units * px * COST, pnl = gross - cost;
      S.eq += pnl; S.curve.push(S.eq);
      const t = { dir: p.dir, pnl, r: pnl / p.risk, why }; S.trades.push(t); S.pos = null; logLine(t);
    };
    const finish = () => {
      if (S.pos) closePos(price(), '游戏结束');
      S.over = true; stop();
      const n = S.trades.length, wins = S.trades.filter((x) => x.r > 0).length, tot = S.trades.reduce((a, x) => a + x.r, 0);
      const bh = (S.candles[S.i].c / S.candles[START - 1].c - 1) * 100, res = (S.eq / 10000 - 1) * 100;
      const box = el.querySelector('[data-r="end"]'); box.hidden = false;
      box.innerHTML = `<p><b>游戏结束。你以 ${MQ.eur(S.eq)}（${res >= 0 ? '+' : ''}${res.toFixed(1)}%）收尾，共 ${n} 笔交易。同一时期市场本身变动了 ${bh >= 0 ? '+' : ''}${bh.toFixed(1)}%。</b></p>
      <p>${n === 0 ? '你没有交易。耐心是一种技能，但学习需要反复练习。' : n < 10 ? '不到 10 笔交易，样本太小，什么都说明不了。真正的评估需要 100 笔以上的交易。' : (tot > 0 ? '正收益很好，但请诚实地问自己：是技术，还是在单一市场里的运气？再跑一个市场，看看能否重现。' : '在模拟中亏钱是你付过的最便宜的学费。检查一下：你是否按风险确定仓位、使用了止损，并避免了报复性交易？')}</p>
      <p>胜率 ${n ? Math.round(wins / n * 100) : 0}%，合计 ${tot >= 0 ? '+' : ''}${tot.toFixed(1)}R。换一个市场，保持同样的规则再试一次。</p>`;
      stats(); draw();
    };
    const next = () => {
      if (S.over) return;
      S.i++; S.steps++;
      const c = S.candles[S.i], p = S.pos;
      if (p) {
        let ex = null, why = '';
        if (p.dir === 'long') { if (c.l <= p.stop) { ex = p.stop; why = '止损'; } else if (p.target && c.h >= p.target) { ex = p.target; why = '目标'; } }
        else { if (c.h >= p.stop) { ex = p.stop; why = '止损'; } else if (p.target && c.l <= p.target) { ex = p.target; why = '目标'; } }
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
        if (S.pos) { s += line(S.pos.entry, 'var(--ink)', '入场'); s += line(S.pos.stop, 'var(--bad)', '止损'); if (S.pos.target) s += line(S.pos.target, 'var(--good)', '目标'); }
        s += `<circle cx="${(padL + (vis.length - 0.5) * st).toFixed(1)}" cy="${Y(price()).toFixed(1)}" r="4" style="fill:var(--ct);stroke:var(--line)" stroke-width="2"/>`;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="练习市场的 K 线图">${g}${s}</svg>`;
      });
    }
    fresh(); stats(); draw();
    el.addEventListener('change', (e) => { if (e.target.matches('[data-k="sma"]')) draw(); });
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const a = b.dataset.act;
      if (a === 'long' || a === 'short') open(a);
      else if (a === 'close') { if (S.pos) { closePos(price(), '你手动平仓'); stats(); draw(); } }
      else if (a === 'next') next();
      else if (a === 'auto') {
        if (timer) { stop(); return; }
        b.textContent = '暂停';
        timer = setInterval(() => { if (!el.isConnected || S.over) { stop(); return; } next(); }, 450);
      } else if (a === 'new') {
        stop(); seed += 17; fresh(); const box = el.querySelector('[data-r="log"]'); box.dataset.f = ''; box.innerHTML = '<div>交易记录。已载入新市场。</div>';
        el.querySelector('[data-r="end"]').hidden = true; stats(); draw();
      }
    });
  };

  /* ---------------- 仓位大小计算器 ---------------- */
  W.possize = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">仓位大小计算器</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('acc', '账户规模（€）', 5000, 0, 10000000, 100)}
      ${MQ.slider('risk', '每笔交易风险', 0.25, 5, 0.25, 1, 'pct')}
      ${MQ.number('entry', '入场价', 50, 0, 10000000, 0.01)}
      ${MQ.number('stop', '止损价', 48, 0, 10000000, 0.01)}
      ${MQ.number('target', '目标价', 56, 0, 10000000, 0.01)}
    </div><div class="wout">
      <div class="stats">${MQ.stat('dir', '方向')}${MQ.stat('risk', '最多可能亏损', 'bad')}${MQ.stat('units', '仓位大小（单位数）', 'hi')}${MQ.stat('not', '仓位价值')}${MQ.stat('lev', '所需杠杆')}${MQ.stat('rr', '盈亏比')}${MQ.stat('gain', '潜在盈利', 'good')}${MQ.stat('be', '盈亏平衡胜率')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">公式：仓位大小 =（账户 × 风险 %）÷（入场价 − 止损价）。决定你仓位大小的是止损，而不是你的兴奋程度。这里忽略了成本和滑点。</p>`;
    MQ.bind(el, (v) => {
      const dist = Math.abs(v.entry - v.stop);
      if (!dist || !v.entry) { MQ.set(el, { dir: '–', risk: '–', units: '–', not: '–', lev: '–', rr: '–', gain: '–', be: '–', txt: '入场价和止损价必须不同。' }); return; }
      const dir = v.stop < v.entry ? '做多' : '做空', long = v.stop < v.entry, riskEur = v.acc * v.risk / 100, units = riskEur / dist, notional = units * v.entry, lev = v.acc ? notional / v.acc : 0;
      const rew = long ? v.target - v.entry : v.entry - v.target, rr = rew / dist;
      MQ.set(el, { dir, risk: MQ.eur(riskEur), units: MQ.num(units, units < 10 ? 3 : 1), not: MQ.eur(notional), lev: lev.toFixed(2) + '×', rr: rr > 0 ? '1 : ' + rr.toFixed(2) : '目标在错误的一侧', gain: rr > 0 ? MQ.eur(rew * units) : '–', be: rr > 0 ? (100 / (1 + rr)).toFixed(0) + '%' : '–',
        txt: (lev > 1 ? '这笔交易所需价值超过你的整个账户（' + lev.toFixed(1) + '×），所以你需要保证金或杠杆。请确认你能接受这一点。' : '') + (rr > 0 && rr < 1.5 ? '相对风险而言，回报很小：你需要很高的胜率才能盈利。' : '') + (rr >= 2 ? '结构不错：即使这类交易只赢 ' + (100 / (1 + rr)).toFixed(0) + '%，扣除成本前也能保本。' : '') + (v.risk > 2 ? '每笔冒超过 2% 的风险会让连续亏损非常痛苦。' : '') });
    });
  };

  /* ---------------- 期望值实验室 ---------------- */
  W.expectancy = (el) => {
    accent(el, 'trd');
    let seed = 5;
    el.innerHTML = `<h4 class="wt">胜率 vs. 回报：期望值实验室</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('win', '胜率', 10, 80, 1, 40, 'pct')}
      ${MQ.slider('rr', '平均盈利 ÷ 平均亏损（盈亏比）', 0.5, 5, 0.1, 2, 'x')}
      ${MQ.slider('risk', '每笔交易风险（占账户）', 0.25, 3, 0.25, 1, 'pct')}
      ${MQ.slider('n', '交易次数', 30, 300, 10, 100, 'num')}
      <button class="btn sm" type="button" data-roll>重新掷运气</button>
    </div><div class="wout">
      <div class="stats">${MQ.stat('e', '每笔交易的期望值', 'hi')}${MQ.stat('be', '盈亏平衡胜率')}${MQ.stat('streak', '典型最长连亏')}${MQ.stat('up', '8 位交易者中盈利的')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['8 位技术相同、运气不同的交易者', 'var(--trd)'], ['平均预期', 'var(--ink)']])}
      <p class="note" data-r="txt"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const w = v.win / 100, E = w * v.rr - (1 - w), be = 1 / (1 + v.rr), q = 1 - w;
      const streak = q > 0 && q < 1 ? Math.max(1, Math.log(Math.max(2, v.n * (1 - q))) / Math.log(1 / q)) : 0;
      const paths = []; let up = 0;
      for (let k = 0; k < 8; k++) { const r = MQ.rng(seed * 100 + k * 7919); let eq = 100; const a = [eq]; for (let t = 0; t < v.n; t++) { eq *= r() < w ? 1 + v.rr * v.risk / 100 : 1 - v.risk / 100; a.push(eq); } paths.push(a); if (eq > 100) up++; }
      const exp = [100]; for (let t = 1; t <= v.n; t++) exp.push(100 * Math.pow(1 + E * v.risk / 100, t));
      MQ.set(el, { e: (E >= 0 ? '+' : '') + E.toFixed(2) + 'R', be: (be * 100).toFixed(0) + '%', streak: '约连亏 ' + Math.round(streak) + ' 次', up: up + ' / 8',
        txt: E > 0 ? '正期望值：在大量交易中，这个系统每笔大约赚 ' + E.toFixed(2) + 'R。但即使是好系统，也会有很长的连亏和起伏不定的曲线。这很正常。' : '期望值为零或为负：任何仓位技巧都救不了这个系统。提高胜率、提高盈亏比，或者不要交易它。' });
      MQ.cls(el, 'e', E > 0 ? 'good' : 'bad');
      const series = paths.map((p) => ({ data: p, color: 'var(--trd)', w: 1.8, nodot: true, op: 0.6 })); series.push({ data: exp, color: 'var(--ink)', w: 2.6, dash: true, nodot: true });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 240, series, { fmt: (x) => Math.round(x), xLabels: [{ i: 0, t: '0' }, { i: v.n, t: v.n + ' 笔交易' }], label: '模拟的账户曲线', min: Math.min(60, Math.min.apply(null, paths.map((p) => Math.min.apply(null, p)))) }));
    });
    el.querySelector('[data-roll]').addEventListener('click', () => { seed += 1; upd(); });
  };

  /* ---------------- 交易日志 ---------------- */
  W.journal = (el) => {
    accent(el, 'trd');
    const TS = { Breakout: '突破', Pullback: '回调', Reversal: '反转', Other: '其他' };
    const TE = { Calm: '平静', FOMO: '怕错过', Revenge: '报复', Bored: '无聊', Fear: '恐惧', Greedy: '贪婪' };
    const SAMPLE = [
      { r: 2.1, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Reversal', plan: false, emo: 'FOMO', ex: 1 },
      { r: 1.8, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -2.4, setup: 'Reversal', plan: false, emo: 'Revenge', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Bored', ex: 1 }, { r: 2.9, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }
    ];
    let E = MQ.store.get('journal', null); if (!Array.isArray(E)) E = SAMPLE.slice();
    el.innerHTML = `<h4 class="wt">你的交易日志</h4>
    <div class="wgrid flip"><div class="wout">
      <div class="stats">${MQ.stat('n', '已记录交易')}${MQ.stat('wr', '胜率')}${MQ.stat('tot', '总结果', 'hi')}${MQ.stat('avg', '平均每笔')}</div>
      <div class="tbl" style="margin-top:0"><table><thead><tr><th>分组</th><th>交易次数</th><th>平均 R</th></tr></thead><tbody data-r="grp"></tbody></table></div>
      <p class="note" data-r="ins"></p>
      <div class="tape" data-r="log"></div>
    </div><div class="wctl">
      ${MQ.number('r', '结果（以 R 计，例如 -1、2.5）', 1, -20, 50, 0.1)}
      ${MQ.select('setup', '交易形态', [['Breakout', TS.Breakout], ['Pullback', TS.Pullback], ['Reversal', TS.Reversal], ['Other', TS.Other]], 'Pullback')}
      ${MQ.select('plan', '你是否遵守了计划？', [['yes', '是'], ['no', '否']], 'yes')}
      ${MQ.select('emo', '入场前的主要情绪', [['Calm', TE.Calm], ['FOMO', TE.FOMO], ['Revenge', TE.Revenge], ['Bored', TE.Bored], ['Fear', TE.Fear], ['Greedy', TE.Greedy]], 'Calm')}
      <div class="btnrow"><button class="btn sm" type="button" data-add>添加交易</button><button class="btn sm alt" type="button" data-clear>全部清除</button><button class="btn sm alt" type="button" data-ex>载入示例</button></div>
      <p class="note" data-r="hint"></p>
    </div></div>`;
    const avg = (a) => a.length ? a.reduce((s, x) => s + x.r, 0) / a.length : 0;
    const f = (n) => (n >= 0 ? '+' : '') + n.toFixed(2) + 'R';
    const render = () => {
      const n = E.length, wins = E.filter((x) => x.r > 0).length, tot = E.reduce((s, x) => s + x.r, 0);
      const yes = E.filter((x) => x.plan), no = E.filter((x) => !x.plan);
      const emos = {}; E.forEach((x) => { (emos[x.emo] = emos[x.emo] || []).push(x); });
      let rows = `<tr><th scope="row">遵守计划</th><td>${yes.length}</td><td>${yes.length ? f(avg(yes)) : '–'}</td></tr><tr><th scope="row">违反计划</th><td>${no.length}</td><td>${no.length ? f(avg(no)) : '–'}</td></tr>`;
      Object.keys(emos).forEach((k) => { rows += `<tr><th scope="row">情绪：${TE[k] || k}</th><td>${emos[k].length}</td><td>${f(avg(emos[k]))}</td></tr>`; });
      const ins = (yes.length && no.length && avg(yes) > avg(no)) ? '发现：遵守计划的交易比没遵守的平均每笔多赚 ' + (avg(yes) - avg(no)).toFixed(2) + 'R。这本日志刚刚回本了。' : (n ? '继续记录。大约 30 到 50 笔交易后，规律就会显现。' : '添加你的第一笔交易，开始发现规律。');
      MQ.set(el, { n: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', tot: n ? f(tot) : '–', avg: n ? f(tot / n) : '–', grp: rows, ins,
        hint: E.some((x) => x.ex) ? '这些是示例交易。点击“全部清除”，然后记录你自己的交易。' : '' });
      const box = el.querySelector('[data-r="log"]'); box.innerHTML = '';
      E.slice(-10).reverse().forEach((x) => { const d = document.createElement('div'); d.className = x.r > 0 ? 'w' : 'l'; d.textContent = f(x.r) + ' · ' + (TS[x.setup] || x.setup) + ' · ' + (x.plan ? '遵守计划' : '违反计划') + ' · ' + (TE[x.emo] || x.emo); box.appendChild(d); });
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
