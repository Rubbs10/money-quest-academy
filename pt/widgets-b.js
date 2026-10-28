/* Widgets dos percursos Day Trader e Trader de Cripto */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- construtor de velas ---------------- */
  W.candles = (el) => {
    accent(el, 'trd');
    const P = { 'Alta forte': [30, 75, 80, 26], 'Baixa forte': [75, 30, 80, 26], 'Doji': [50, 51, 78, 24], 'Martelo': [60, 66, 68, 18], 'Estrela cadente': [40, 34, 86, 32], 'Marubozu': [20, 80, 80, 20] };
    el.innerHTML = `<h4 class="wt">Constrói uma vela japonesa</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(P).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${MQ.slider('o', 'Abertura (onde o período começou)', 0, 100, 1, 30, 'num')}
      ${MQ.slider('c', 'Fecho (onde terminou)', 0, 100, 1, 75, 'num')}
      ${MQ.slider('h', 'Máximo (o topo que o preço tocou)', 0, 100, 1, 80, 'num')}
      ${MQ.slider('l', 'Mínimo (o fundo que tocou)', 0, 100, 1, 26, 'num')}
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
        if (dn > range * 0.6) { name = 'Doji libélula'; txt = 'O preço caiu com força e depois os compradores empurraram-no de volta até cima. Por vezes é um aviso de que os vendedores estão a cansar-se, mas só é sinal dentro de um contexto.'; }
        else if (up > range * 0.6) { name = 'Doji lápide'; txt = 'Os compradores empurraram para cima, mas os vendedores tiraram tudo. Pode avisar que uma subida está a perder força.'; }
        else { name = 'Doji'; txt = 'Abertura e fecho quase iguais: compradores e vendedores lutaram até ao empate. Sinaliza indecisão, não direção.'; }
      } else if (up < range * 0.03 && dn < range * 0.03) { name = bull ? 'Marubozu de alta' : 'Marubozu de baixa'; txt = 'Uma vela de corpo inteiro e quase sem pavios: um dos lados controlou todo o período. Momentum forte.'; }
      else if (dn >= body * 2 && up <= body * 0.6) { name = 'Forma de martelo'; txt = 'Um pavio inferior longo: os vendedores empurraram para baixo, mas os compradores rejeitaram os mínimos. Após uma tendência de baixa pode sugerir um fundo, mas espera por confirmação.'; }
      else if (up >= body * 2 && dn <= body * 0.6) { name = 'Forma de estrela cadente'; txt = 'Um pavio superior longo: os compradores tentaram subir mais, mas foram rejeitados. Após uma tendência de alta pode sugerir um topo, mas espera por confirmação.'; }
      else if (body / range < 0.3) { name = 'Pião'; txt = 'Um corpo pequeno com pavios dos dois lados: um braço de ferro sem vencedor claro.'; }
      else { name = bull ? 'Vela de alta' : 'Vela de baixa'; txt = bull ? 'Fecho acima da abertura: os compradores ganharam este período. O tamanho do corpo mostra com que convicção.' : 'Fecho abaixo da abertura: os vendedores ganharam este período. O tamanho do corpo mostra com que convicção.'; }
      MQ.set(el, { name: name + ' (' + (bull ? 'verde, fechou em alta' : 'vermelha, fechou em baixa') + ')', txt });
      const Y = (x) => 250 - (x / 100) * 230, cx = 130, col = bull ? 'var(--good)' : 'var(--bad)';
      const top = Y(Math.max(v.o, v.c)), bh = Math.max(2, Math.abs(Y(v.o) - Y(v.c)));
      let yo = Y(v.o) + 4, yc = Y(v.c) + 4;
      if (Math.abs(yo - yc) < 15) { if (yc >= yo) yc = yo + 15; else yo = yc + 15; }
      MQ.draw(ch, () => `<svg viewBox="0 0 330 270" role="img" aria-label="Vela japonesa com abertura ${v.o}, fecho ${v.c}, máximo ${hi}, mínimo ${lo}">
        <line x1="${cx}" x2="${cx}" y1="${Y(hi)}" y2="${Y(lo)}" style="stroke:${col}" stroke-width="4" stroke-linecap="round"/>
        <rect x="${cx - 26}" y="${top}" width="52" height="${bh}" rx="3" style="fill:${col};stroke:var(--line)" stroke-width="2"/>
        <g class="lbl"><text x="${cx + 44}" y="${Y(hi) + 4}">Máx. ${hi}</text><text x="${cx + 44}" y="${Y(lo) + 4}">Mín. ${lo}</text>
        <text x="${cx - 36}" y="${yo}" text-anchor="end">Abert. ${v.o}</text><text x="${cx - 36}" y="${yc}" text-anchor="end">Fecho ${v.c}</text></g></svg>`);
    });
  };

  /* ---------------- laboratório de paper trading ---------------- */
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
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } const b = el.querySelector('[data-act="auto"]'); if (b) b.textContent = 'Automático'; };
    el.innerHTML = `<h4 class="wt">Laboratório de paper trading: 100 velas, 10 000 € de dinheiro a fingir</h4>
    <div class="chart" data-c="1"></div>
    <div class="stats" style="margin-top:.8rem">${MQ.stat('eq', 'Capital', 'hi')}${MQ.stat('pos', 'Posição aberta')}${MQ.stat('n', 'Velas restantes')}${MQ.stat('tr', 'Operações')}${MQ.stat('wr', 'Taxa de acerto')}${MQ.stat('ar', 'R médio')}${MQ.stat('dd', 'Drawdown máximo')}</div>
    <div class="btnrow">
      <button class="btn sm" type="button" data-act="long">Comprar (long)</button>
      <button class="btn sm" type="button" data-act="short">Vender (short)</button>
      <button class="btn sm alt" type="button" data-act="close">Fechar posição</button>
      <button class="btn sm alt" type="button" data-act="next">Próxima vela ▸</button>
      <button class="btn sm alt" type="button" data-act="auto">Automático</button>
      <button class="btn sm alt" type="button" data-act="new">Novo mercado</button>
    </div>
    <div class="wgrid" style="margin-top:.9rem"><div class="wctl">
      ${MQ.select('risk', 'Risco por operação (do capital)', [['0.5', '0,5%'], ['1', '1%'], ['2', '2%']], '1')}
      ${MQ.select('sd', 'Distância do stop-loss à entrada', [['1', '1%'], ['2', '2%'], ['3', '3%']], '2')}
      ${MQ.select('tr', 'Objetivo de lucro', [['0', 'Nenhum (fecho eu)'], ['1', '1R (ganho = risco)'], ['2', '2R (ganho = o dobro do risco)'], ['3', '3R']], '2')}
      ${MQ.check('sma', 'Mostrar linha da média de 20 velas', true)}
    </div><div class="wout"><div class="tape" data-r="log" aria-live="polite"><div>Registo de operações. O tamanho é calculado por ti a partir do risco e do stop. Estão incluídos custos de 0,05% por lado.</div></div></div></div>
    <div class="msg" data-r="end" hidden></div>
    <p class="note">R significa «unidade de risco»: se arriscas 100 € e ganhas 200 €, são +2R. Nesta simulação os stops executam ao seu preço; nos mercados reais pode haver derrapagem. Se o stop e o objetivo forem ambos tocados na mesma vela, conta primeiro o stop.</p>`;
    const ch = el.querySelector('[data-c]');
    const price = () => S.candles[S.i].c;
    const sma = (i) => { if (i < 19) return null; let s = 0; for (let k = i - 19; k <= i; k++) s += S.candles[k].c; return s / 20; };
    const val = (k) => el.querySelector('[data-k="' + k + '"]');
    const equityNow = () => { let e = S.eq; if (S.pos) { const p = S.pos, px = price(); e += (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; } return e; };
    const stats = () => {
      const t = S.trades, n = t.length, wins = t.filter((x) => x.r > 0).length;
      const avgR = n ? t.reduce((a, x) => a + x.r, 0) / n : 0;
      let pk = S.curve[0], dd = 0; S.curve.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); });
      let posTxt = 'Nenhuma';
      if (S.pos) { const p = S.pos, px = price(), u = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units; posTxt = (p.dir === 'long' ? 'LONG' : 'SHORT') + ' ' + MQ.eur(u) + ' (' + (u / p.risk >= 0 ? '+' : '') + (u / p.risk).toFixed(1) + 'R)'; }
      MQ.set(el, { eq: MQ.eur(equityNow()), pos: posTxt, n: String(Math.max(0, LEN - S.steps)), tr: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', ar: n ? (avgR >= 0 ? '+' : '') + avgR.toFixed(2) + 'R' : '–', dd: MQ.pct(dd * 100, 1) });
      const set = (a, dis) => { const b = el.querySelector('[data-act="' + a + '"]'); if (b) b.disabled = dis; };
      set('long', !!S.pos || S.over); set('short', !!S.pos || S.over); set('close', !S.pos || S.over); set('next', S.over);
    };
    const logLine = (t) => {
      const box = el.querySelector('[data-r="log"]'); if (box.dataset.f !== '1') { box.innerHTML = ''; box.dataset.f = '1'; }
      const d = document.createElement('div'); d.className = t.r > 0 ? 'w' : 'l';
      d.textContent = '#' + S.trades.length + ' ' + (t.dir === 'long' ? 'LONG' : 'SHORT') + ' ' + (t.r >= 0 ? '+' : '') + t.r.toFixed(2) + 'R (' + MQ.eur(t.pnl) + ') saída: ' + t.why;
      box.insertBefore(d, box.firstChild);
    };
    const closePos = (px, why) => {
      const p = S.pos, gross = (p.dir === 'long' ? px - p.entry : p.entry - px) * p.units;
      const cost = p.units * p.entry * COST + p.units * px * COST, pnl = gross - cost;
      S.eq += pnl; S.curve.push(S.eq);
      const t = { dir: p.dir, pnl, r: pnl / p.risk, why }; S.trades.push(t); S.pos = null; logLine(t);
    };
    const finish = () => {
      if (S.pos) closePos(price(), 'fim do jogo');
      S.over = true; stop();
      const n = S.trades.length, wins = S.trades.filter((x) => x.r > 0).length, tot = S.trades.reduce((a, x) => a + x.r, 0);
      const bh = (S.candles[S.i].c / S.candles[START - 1].c - 1) * 100, res = (S.eq / 10000 - 1) * 100;
      const box = el.querySelector('[data-r="end"]'); box.hidden = false;
      box.innerHTML = `<p><b>Fim de jogo. Terminaste com ${MQ.eur(S.eq)} (${res >= 0 ? '+' : ''}${res.toFixed(1)}%) em ${n} operações. O próprio mercado variou ${bh >= 0 ? '+' : ''}${bh.toFixed(1)}% no mesmo período.</b></p>
      <p>${n === 0 ? 'Não fizeste operações. A paciência é uma competência, mas precisas de repetições para aprender.' : n < 10 ? 'Menos de 10 operações é uma amostra pequena demais para julgar o que quer que seja. Uma avaliação a sério precisa de mais de 100 operações.' : (tot > 0 ? 'Um resultado positivo é bom, mas pergunta com honestidade: foi competência ou sorte num único mercado? Corre outro mercado e vê se se repete.' : 'Perder numa simulação é a propina mais barata que alguma vez vais pagar. Verifica: dimensionaste pelo risco, usaste stops e evitaste operações de vingança?')}</p>
      <p>Taxa de acerto ${n ? Math.round(wins / n * 100) : 0}%, total ${tot >= 0 ? '+' : ''}${tot.toFixed(1)}R. Tenta outro mercado e mantém as mesmas regras.</p>`;
      stats(); draw();
    };
    const next = () => {
      if (S.over) return;
      S.i++; S.steps++;
      const c = S.candles[S.i], p = S.pos;
      if (p) {
        let ex = null, why = '';
        if (p.dir === 'long') { if (c.l <= p.stop) { ex = p.stop; why = 'stop-loss'; } else if (p.target && c.h >= p.target) { ex = p.target; why = 'objetivo'; } }
        else { if (c.h >= p.stop) { ex = p.stop; why = 'stop-loss'; } else if (p.target && c.l <= p.target) { ex = p.target; why = 'objetivo'; } }
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
        if (S.pos) { s += line(S.pos.entry, 'var(--ink)', 'Entrada'); s += line(S.pos.stop, 'var(--bad)', 'Stop'); if (S.pos.target) s += line(S.pos.target, 'var(--good)', 'Objetivo'); }
        s += `<circle cx="${(padL + (vis.length - 0.5) * st).toFixed(1)}" cy="${Y(price()).toFixed(1)}" r="4" style="fill:var(--ct);stroke:var(--line)" stroke-width="2"/>`;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Gráfico de velas do mercado de treino">${g}${s}</svg>`;
      });
    }
    fresh(); stats(); draw();
    el.addEventListener('change', (e) => { if (e.target.matches('[data-k="sma"]')) draw(); });
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-act]'); if (!b) return;
      const a = b.dataset.act;
      if (a === 'long' || a === 'short') open(a);
      else if (a === 'close') { if (S.pos) { closePos(price(), 'fechada por ti'); stats(); draw(); } }
      else if (a === 'next') next();
      else if (a === 'auto') {
        if (timer) { stop(); return; }
        b.textContent = 'Pausa';
        timer = setInterval(() => { if (!el.isConnected || S.over) { stop(); return; } next(); }, 450);
      } else if (a === 'new') {
        stop(); seed += 17; fresh(); const box = el.querySelector('[data-r="log"]'); box.dataset.f = ''; box.innerHTML = '<div>Registo de operações. Novo mercado carregado.</div>';
        el.querySelector('[data-r="end"]').hidden = true; stats(); draw();
      }
    });
  };

  /* ---------------- calculadora de tamanho de posição ---------------- */
  W.possize = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Calculadora de tamanho de posição</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('acc', 'Tamanho da conta (€)', 5000, 0, 10000000, 100)}
      ${MQ.slider('risk', 'Risco por operação', 0.25, 5, 0.25, 1, 'pct')}
      ${MQ.number('entry', 'Preço de entrada', 50, 0, 10000000, 0.01)}
      ${MQ.number('stop', 'Preço do stop-loss', 48, 0, 10000000, 0.01)}
      ${MQ.number('target', 'Preço-objetivo', 56, 0, 10000000, 0.01)}
    </div><div class="wout">
      <div class="stats">${MQ.stat('dir', 'Direção')}${MQ.stat('risk', 'O máximo que podes perder', 'bad')}${MQ.stat('units', 'Tamanho da posição (unidades)', 'hi')}${MQ.stat('not', 'Valor da posição')}${MQ.stat('lev', 'Alavancagem necessária')}${MQ.stat('rr', 'Ganho : risco')}${MQ.stat('gain', 'Ganho potencial', 'good')}${MQ.stat('be', 'Taxa de acerto de equilíbrio')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Fórmula: tamanho da posição = (conta × risco %) ÷ (entrada − stop). O teu stop decide o teu tamanho, não a tua excitação. Custos e derrapagem são ignorados aqui.</p>`;
    MQ.bind(el, (v) => {
      const dist = Math.abs(v.entry - v.stop);
      if (!dist || !v.entry) { MQ.set(el, { dir: '–', risk: '–', units: '–', not: '–', lev: '–', rr: '–', gain: '–', be: '–', txt: 'A entrada e o stop têm de ser preços diferentes.' }); return; }
      const dir = v.stop < v.entry ? 'Long' : 'Short', riskEur = v.acc * v.risk / 100, units = riskEur / dist, notional = units * v.entry, lev = v.acc ? notional / v.acc : 0;
      const rew = dir === 'Long' ? v.target - v.entry : v.entry - v.target, rr = rew / dist;
      MQ.set(el, { dir, risk: MQ.eur(riskEur), units: MQ.num(units, units < 10 ? 3 : 1), not: MQ.eur(notional), lev: lev.toFixed(2) + '×', rr: rr > 0 ? '1 : ' + rr.toFixed(2) : 'Objetivo do lado errado', gain: rr > 0 ? MQ.eur(rew * units) : '–', be: rr > 0 ? (100 / (1 + rr)).toFixed(0) + '%' : '–',
        txt: (lev > 1 ? 'Esta operação precisa de mais do que o valor total da tua conta (' + lev.toFixed(1) + '×), por isso precisarias de margem ou alavancagem. Confirma que te sentes confortável com isso. ' : '') + (rr > 0 && rr < 1.5 ? 'O ganho é pequeno comparado com o risco: precisarias de uma taxa de acerto elevada para teres lucro. ' : '') + (rr >= 2 ? 'Boa estrutura: mesmo acertando apenas ' + (100 / (1 + rr)).toFixed(0) + '% destas operações ficas em equilíbrio antes de custos. ' : '') + (v.risk > 2 ? 'Arriscar mais de 2% por operação torna as séries de perdas muito dolorosas.' : '') });
    });
  };

  /* ---------------- laboratório de expectativa ---------------- */
  W.expectancy = (el) => {
    accent(el, 'trd');
    let seed = 5;
    el.innerHTML = `<h4 class="wt">Taxa de acerto vs. ganho: o laboratório de expectativa</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('win', 'Taxa de acerto', 10, 80, 1, 40, 'pct')}
      ${MQ.slider('rr', 'Ganho médio ÷ perda média (ganho : risco)', 0.5, 5, 0.1, 2, 'x')}
      ${MQ.slider('risk', 'Risco por operação (da conta)', 0.25, 3, 0.25, 1, 'pct')}
      ${MQ.slider('n', 'Número de operações', 30, 300, 10, 100, 'num')}
      <button class="btn sm" type="button" data-roll>Voltar a lançar a sorte</button>
    </div><div class="wout">
      <div class="stats">${MQ.stat('e', 'Expectativa por operação', 'hi')}${MQ.stat('be', 'Taxa de acerto de equilíbrio')}${MQ.stat('streak', 'Pior série de perdas típica')}${MQ.stat('up', '8 traders terminaram com lucro')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['8 traders com a mesma competência, sorte diferente', 'var(--trd)'], ['Expectativa média', 'var(--ink)']])}
      <p class="note" data-r="txt"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const w = v.win / 100, E = w * v.rr - (1 - w), be = 1 / (1 + v.rr), q = 1 - w;
      const streak = q > 0 && q < 1 ? Math.max(1, Math.log(Math.max(2, v.n * (1 - q))) / Math.log(1 / q)) : 0;
      const paths = []; let up = 0;
      for (let k = 0; k < 8; k++) { const r = MQ.rng(seed * 100 + k * 7919); let eq = 100; const a = [eq]; for (let t = 0; t < v.n; t++) { eq *= r() < w ? 1 + v.rr * v.risk / 100 : 1 - v.risk / 100; a.push(eq); } paths.push(a); if (eq > 100) up++; }
      const exp = [100]; for (let t = 1; t <= v.n; t++) exp.push(100 * Math.pow(1 + E * v.risk / 100, t));
      MQ.set(el, { e: (E >= 0 ? '+' : '') + E.toFixed(2) + 'R', be: (be * 100).toFixed(0) + '%', streak: '~' + Math.round(streak) + ' perdas seguidas', up: up + ' de 8',
        txt: E > 0 ? 'Expectativa positiva: ao longo de muitas operações, este sistema faz cerca de ' + E.toFixed(2) + 'R por operação. Ainda assim, até os bons sistemas têm longas séries de perdas e curvas acidentadas. Isso é normal.' : 'Expectativa nula ou negativa: nenhum truque de dimensionamento salva este sistema. Melhora a taxa de acerto, melhora o ganho : risco, ou não o operes.' });
      MQ.cls(el, 'e', E > 0 ? 'good' : 'bad');
      const series = paths.map((p) => ({ data: p, color: 'var(--trd)', w: 1.8, nodot: true, op: 0.6 })); series.push({ data: exp, color: 'var(--ink)', w: 2.6, dash: true, nodot: true });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 240, series, { fmt: (x) => Math.round(x), xLabels: [{ i: 0, t: '0' }, { i: v.n, t: v.n + ' operações' }], label: 'Curvas simuladas da conta', min: Math.min(60, Math.min.apply(null, paths.map((p) => Math.min.apply(null, p)))) }));
    });
    el.querySelector('[data-roll]').addEventListener('click', () => { seed += 1; upd(); });
  };

  /* ---------------- diário de trading ---------------- */
  W.journal = (el) => {
    accent(el, 'trd');
    const TS = { Breakout: 'Rompimento', Pullback: 'Recuo', Reversal: 'Reversão', Other: 'Outro' };
    const TE = { Calm: 'Calma', FOMO: 'FOMO', Revenge: 'Vingança', Bored: 'Tédio', Fear: 'Medo', Greedy: 'Ganância' };
    const SAMPLE = [
      { r: 2.1, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Calm', ex: 1 }, { r: -1, setup: 'Reversal', plan: false, emo: 'FOMO', ex: 1 },
      { r: 1.8, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }, { r: -2.4, setup: 'Reversal', plan: false, emo: 'Revenge', ex: 1 }, { r: -1, setup: 'Breakout', plan: true, emo: 'Bored', ex: 1 }, { r: 2.9, setup: 'Pullback', plan: true, emo: 'Calm', ex: 1 }
    ];
    let E = MQ.store.get('journal', null); if (!Array.isArray(E)) E = SAMPLE.slice();
    el.innerHTML = `<h4 class="wt">O teu diário de trading</h4>
    <div class="wgrid flip"><div class="wout">
      <div class="stats">${MQ.stat('n', 'Operações registadas')}${MQ.stat('wr', 'Taxa de acerto')}${MQ.stat('tot', 'Resultado total', 'hi')}${MQ.stat('avg', 'Média por operação')}</div>
      <div class="tbl" style="margin-top:0"><table><thead><tr><th>Grupo</th><th>Operações</th><th>R médio</th></tr></thead><tbody data-r="grp"></tbody></table></div>
      <p class="note" data-r="ins"></p>
      <div class="tape" data-r="log"></div>
    </div><div class="wctl">
      ${MQ.number('r', 'Resultado em R (ex.: -1, 2,5)', 1, -20, 50, 0.1)}
      ${MQ.select('setup', 'Setup', [['Breakout', TS.Breakout], ['Pullback', TS.Pullback], ['Reversal', TS.Reversal], ['Other', TS.Other]], 'Pullback')}
      ${MQ.select('plan', 'Seguiste o teu plano?', [['yes', 'Sim'], ['no', 'Não']], 'yes')}
      ${MQ.select('emo', 'Emoção principal antes da entrada', [['Calm', TE.Calm], ['FOMO', TE.FOMO], ['Revenge', TE.Revenge], ['Bored', TE.Bored], ['Fear', TE.Fear], ['Greedy', TE.Greedy]], 'Calm')}
      <div class="btnrow"><button class="btn sm" type="button" data-add>Adicionar operação</button><button class="btn sm alt" type="button" data-clear>Limpar tudo</button><button class="btn sm alt" type="button" data-ex>Carregar exemplos</button></div>
      <p class="note" data-r="hint"></p>
    </div></div>`;
    const avg = (a) => a.length ? a.reduce((s, x) => s + x.r, 0) / a.length : 0;
    const f = (n) => (n >= 0 ? '+' : '') + n.toFixed(2) + 'R';
    const render = () => {
      const n = E.length, wins = E.filter((x) => x.r > 0).length, tot = E.reduce((s, x) => s + x.r, 0);
      const yes = E.filter((x) => x.plan), no = E.filter((x) => !x.plan);
      const emos = {}; E.forEach((x) => { (emos[x.emo] = emos[x.emo] || []).push(x); });
      let rows = `<tr><th scope="row">Seguiu o plano</th><td>${yes.length}</td><td>${yes.length ? f(avg(yes)) : '–'}</td></tr><tr><th scope="row">Quebrou o plano</th><td>${no.length}</td><td>${no.length ? f(avg(no)) : '–'}</td></tr>`;
      Object.keys(emos).forEach((k) => { rows += `<tr><th scope="row">Emoção: ${TE[k] || k}</th><td>${emos[k].length}</td><td>${f(avg(emos[k]))}</td></tr>`; });
      const ins = (yes.length && no.length && avg(yes) > avg(no)) ? 'Conclusão: as operações em que seguiste o plano superaram as outras em ' + (avg(yes) - avg(no)).toFixed(2) + 'R cada uma. O diário acabou de se pagar a si próprio.' : (n ? 'Continua a registar. Os padrões aparecem após cerca de 30 a 50 operações.' : 'Adiciona a tua primeira operação para veres padrões.');
      MQ.set(el, { n: String(n), wr: n ? Math.round(wins / n * 100) + '%' : '–', tot: n ? f(tot) : '–', avg: n ? f(tot / n) : '–', grp: rows, ins,
        hint: E.some((x) => x.ex) ? 'Estas são operações de exemplo. Carrega em «Limpar tudo» e regista as tuas.' : '' });
      const box = el.querySelector('[data-r="log"]'); box.innerHTML = '';
      E.slice(-10).reverse().forEach((x) => { const d = document.createElement('div'); d.className = x.r > 0 ? 'w' : 'l'; d.textContent = f(x.r) + ' · ' + (TS[x.setup] || x.setup) + ' · ' + (x.plan ? 'plano seguido' : 'plano quebrado') + ' · ' + (TE[x.emo] || x.emo); box.appendChild(d); });
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
