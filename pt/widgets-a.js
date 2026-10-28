/* Widgets de Fundamentos e do percurso Investidor do Dia a Dia */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* simulador de juros compostos: devolve valores anuais e contribuições */
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
  const xl = (years) => { const a = [{ i: 0, t: 'Hoje' }]; const step = years > 30 ? 10 : (years > 12 ? 5 : (years > 6 ? 2 : 1)); for (let y = step; y < years; y += step) a.push({ i: y, t: y + 'a' }); a.push({ i: years, t: years + 'a' }); return a; };

  /* ---------------- máquina do tempo da inflação ---------------- */
  W.inflation = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">Máquina do tempo da inflação</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('price', 'Preço de uma pizza hoje', 5, 30, 1, 10, 'eur')}
      ${MQ.slider('inf', 'Inflação por ano', 0, 10, 0.5, 3, 'pct')}
      ${MQ.slider('yrs', 'Anos no futuro', 1, 40, 1, 20, 'yr')}
      ${MQ.slider('ret', 'Se o teu dinheiro estivesse investido a (por ano)', 0, 10, 0.5, 5, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pizza', 'Preço da pizza nessa altura', 'hi')}${MQ.stat('cash', '1 000 € em dinheiro valem (a preços de hoje)', 'bad')}${MQ.stat('inv', '1 000 € investidos valem (a preços de hoje)', 'good')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Dinheiro debaixo do colchão', 'var(--trd)'], ['Investido', 'var(--inv)']])}
    </div></div>
    <p class="note">Valor real = o que o teu dinheiro consegue realmente comprar, medido a preços de hoje. Experimenta 6% de inflação e 0% de retorno para sentires o impacto.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const i = v.inf / 100, r = v.ret / 100;
      const cash = [], inv = [];
      for (let y = 0; y <= v.yrs; y++) { cash.push(1000 / Math.pow(1 + i, y)); inv.push(1000 * Math.pow((1 + r) / (1 + i), y)); }
      MQ.set(el, { pizza: MQ.eur(v.price * Math.pow(1 + i, v.yrs), 2), cash: MQ.eur(cash[v.yrs]), inv: MQ.eur(inv[v.yrs]) });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: cash, color: 'var(--trd)' }, { data: inv, color: 'var(--inv)' }], { fmt: (x) => MQ.eur(x), xLabels: xl(v.yrs), label: 'Valor real de 1000 euros ao longo do tempo', min: 0 }));
    });
  };

  /* ---------------- orçamento 50/30/20 ---------------- */
  W.budget = (el) => {
    accent(el, 'found');
    el.innerHTML = `<h4 class="wt">O teu orçamento 50/30/20</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('inc', 'Rendimento mensal líquido (€)', 1200, 0, 100000, 50)}
      ${MQ.slider('needs', 'Necessidades (renda, comida, transportes, contas)', 20, 80, 1, 50, 'pct')}
      ${MQ.slider('wants', 'Desejos (lazer, restaurantes, subscrições)', 0, 60, 1, 30, 'pct')}
      <p class="note">A poupança e o investimento ficam com o que sobrar.</p>
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('n', 'Necessidades / mês')}${MQ.stat('w', 'Desejos / mês')}${MQ.stat('s', 'Poupar e investir / mês', 'hi')}</div>
      <div class="stats">${MQ.stat('ef3', 'Meta do fundo de emergência (3 meses de necessidades)')}${MQ.stat('efm', 'Tempo para o construir')}${MQ.stat('yr', 'Poupado por ano')}</div>
    </div></div>`;
    MQ.bind(el, (v) => {
      const s = Math.max(0, 100 - v.needs - v.wants);
      const n = v.inc * v.needs / 100, w = v.inc * v.wants / 100, sv = v.inc * s / 100;
      const ef = n * 3;
      MQ.set(el, {
        bar: MQ.stackBar([{ v: v.needs, c: '#5E8BFF', l: 'Necessidades' }, { v: v.wants, c: '#FFC21A', l: 'Desejos' }, { v: s, c: '#14B37D', l: 'Poupar e investir' }]) + MQ.legend([['Necessidades', '#5E8BFF'], ['Desejos', '#FFC21A'], ['Poupar e investir', '#14B37D']]),
        n: MQ.eur(n), w: MQ.eur(w), s: MQ.eur(sv) + ' (' + s + '%)', ef3: MQ.eur(ef),
        efm: sv > 0 ? Math.ceil(ef / sv) + ' meses' : 'Corta primeiro nos desejos', yr: MQ.eur(sv * 12)
      });
    });
  };

  /* ---------------- máquina de juros compostos ---------------- */
  W.compound = (el, d) => {
    accent(el, 'inv');
    const compact = d.compact === '1', wait0 = parseFloat(d.wait) || 0;
    const hid = (k, v) => `<input type="hidden" data-k="${k}" value="${v}">`;
    el.innerHTML = `<h4 class="wt">${compact ? 'Experimenta: em que se podem tornar 100 € por mês?' : 'Máquina de juros compostos'}</h4>
    <div class="${compact ? '' : 'wgrid'}"><div class="wctl">
      ${compact ? hid('start', 0) + hid('wait', 0) + hid('real', 0) : MQ.slider('start', 'Montante inicial', 0, 50000, 500, 1000, 'eur')}
      ${MQ.slider('monthly', 'Quanto acrescentas por mês', 0, 2000, 10, 100, 'eur')}
      ${MQ.slider('ret', 'Retorno médio por ano', 0, 15, 0.5, 7, 'pct')}
      ${MQ.slider('yrs', 'Anos', 1, 50, 1, 30, 'yr')}
      ${compact ? '' : MQ.slider('wait', 'Compara: e se esperares antes de começar?', 0, 20, 1, wait0, 'yr')}
      ${compact ? '' : MQ.check('real', 'Mostrar valores a preços de hoje (assume 2% de inflação)', false)}
      ${compact ? '' : '<div class="seg" data-presets><button type="button" data-p="150">Cafezinho de 5 €/dia</button><button type="button" data-p="50">Estudante: 50 €/mês</button><button type="button" data-p="500">A sério: 500 €/mês</button></div>'}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fin', 'Acabas com', 'hi')}${MQ.stat('paid', 'Pagaste do teu bolso')}${MQ.stat('gain', 'O crescimento fez o resto', 'good')}${compact ? '' : MQ.stat('dbl', 'O dinheiro duplica a cada')}${compact ? '' : MQ.stat('cost', 'Custo de esperar', 'bad')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Total que pagaste', 'var(--muted)'], ['Os teus investimentos', 'var(--inv)']].concat(compact ? [] : [['Se começares mais tarde', 'var(--trd)']]))}
    </div></div>
    <p class="note">${compact ? 'Apenas ilustrativo. Os retornos reais variam todos os anos e nunca são garantidos.' : 'Os retornos aqui são médias suaves. Os mercados reais sobem e descem, e nada é garantido. A forma da curva é a lição: o tempo faz o trabalho pesado.'}</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => MQ.setVal(el, 'monthly', b.dataset.p)));
    MQ.bind(el, (v) => {
      const R = v.ret / 100, base = sim(v.start, v.monthly, R, v.yrs, 0), wt = v.wait > 0 ? sim(v.start, v.monthly, R, v.yrs, Math.min(v.wait, v.yrs)) : null;
      const adj = (arr) => v.real ? arr.map((x, i) => x / Math.pow(1.02, i)) : arr;
      const a = adj(base.val), c = base.con, b = wt ? adj(wt.val) : null;
      const fin = a[v.yrs];
      MQ.set(el, {
        fin: MQ.eur(fin), paid: MQ.eur(c[v.yrs]), gain: MQ.eur(fin - (v.real ? c[v.yrs] : c[v.yrs])),
        dbl: v.ret > 0 ? (72 / v.ret).toFixed(1) + ' anos' : 'nunca',
        cost: b ? MQ.eur(fin - b[v.yrs]) : '€0'
      });
      const series = [{ data: c, color: 'var(--muted)', area: true, nodot: true, w: 2 }, { data: a, color: 'var(--inv)' }];
      if (b) series.push({ data: b, color: 'var(--trd)', dash: true });
      MQ.draw(ch, (w) => MQ.lineChart(w, compact ? 200 : 270, series, { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : x >= 1000 ? '€' + Math.round(x / 1000) + 'k' : '€' + Math.round(x), xLabels: xl(v.yrs), label: 'Crescimento de um investimento com contribuições mensais regulares', min: 0 }));
    });
  };

  /* ---------------- escada do risco ---------------- */
  W.ladder = (el) => {
    accent(el, 'found');
    const rows = [
      ['Conta poupança', 0, 'Pior ano: cerca de 0% (não perdes capital, até ao limite da garantia de depósitos). Típico a longo prazo: cerca de 0 a 3% ao ano, muitas vezes abaixo da inflação.'],
      ['Obrigações do Estado', 17, 'Pior ano recente: cerca de -13% (2022, quando as taxas de juro subiram depressa). Típico a longo prazo: cerca de 2 a 4% ao ano. Mais seguras do que ações, mas não isentas de risco.'],
      ['Índice global de ações', 40, 'Pior ano da história recente: cerca de -37% (2008). Típico a longo prazo: cerca de 6 a 9% ao ano antes da inflação, com grandes oscilações pelo caminho.'],
      ['Ouro', 30, 'Pior ano: cerca de -28% (2013). Não gera rendimento. Muitas vezes comportou-se de forma diferente das ações, o que pode ajudar na diversificação.'],
      ['Ação de uma única empresa', 80, 'Uma só empresa pode cair 50% a 90%, ou falir (-100%). Boas histórias também podem acabar mal. A concentração é o risco.'],
      ['Bitcoin', 75, 'Já caiu 70 a 85% do máximo ao mínimo várias vezes (2014, 2018, 2022). Também subiu enormemente. Extremamente volátil, por isso o tamanho da posição importa.'],
      ['Altcoin pequena ou memecoin', 98, 'A maioria das tokens pequenas acaba por perder quase todo o valor. Algumas ganham muito. Trata-a como um bilhete de lotaria, nunca como um plano de poupança.']
    ];
    el.innerHTML = `<h4 class="wt">A escada do risco</h4>
    <p class="note" style="margin-top:0">Toca numa linha. A barra mostra quão mau foi um ano realmente mau (barra mais comprida = perda possível mais profunda). Números ilustrativos e simplificados.</p>
    <div class="ladder">${rows.map((r, i) => `<button type="button" class="lrow" data-i="${i}" aria-expanded="false"><b>${r[0]}</b><span class="lbar"><i style="width:${Math.max(r[1], 1.5)}%"></i></span><span class="lnote">${r[2]}</span></button>`).join('')}</div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('.lrow'); if (!b) return;
      const on = b.classList.contains('on');
      el.querySelectorAll('.lrow').forEach((x) => { x.classList.remove('on'); x.setAttribute('aria-expanded', 'false'); });
      if (!on) { b.classList.add('on'); b.setAttribute('aria-expanded', 'true'); }
    });
  };

  /* ---------------- jogo de construir a carteira ---------------- */
  const AS = [['stocks', 'Ações globais', '#14B37D'], ['bonds', 'Obrigações', '#5E8BFF'], ['cash', 'Liquidez', '#C9C5EE'], ['gold', 'Ouro', '#FFC21A'], ['crypto', 'Cripto', '#A58FFF']];
  const SC = {
    boom: { n: 'Mercado em alta aborrecido', t: 'Oito anos maioritariamente calmos. As ações sobem devagar, com uma queda pelo meio.', r: { stocks: [12, 9, 14, -4, 18, 10, 8, 15], bonds: [3, 2, 4, 3, 1, 4, 3, 2], cash: [2, 2, 2, 2, 2, 2, 2, 2], gold: [2, -3, 5, 1, 6, 0, 3, 2], crypto: [60, -20, 120, -45, 90, 15, -30, 70] } },
    crash: { n: 'Crash e recuperação', t: 'Um crash profundo no ano 2, seguido de uma forte recuperação.', r: { stocks: [-8, -37, 26, 15, 2, 16, 32, 13], bonds: [5, 5, 6, 7, 4, -2, 6, 1], cash: [3, 1, 0, 0, 0, 0, 0, 0], gold: [5, 5, 24, 29, 10, -28, -2, 0], crypto: [-30, -60, 80, 150, -50, 40, 200, -30] } },
    infl: { n: 'Choque inflacionista', t: 'Os preços disparam, as taxas de juro sobem. Obrigações e ações sofrem ambas ao início.', r: { stocks: [-19, 24, 12, -5, 9, 11, -6, 13], bonds: [-13, 5, 3, -2, 2, 4, 2, 1], cash: [1, 4, 4, 3, 2, 2, 2, 2], gold: [0, 13, 2, 5, 8, 15, -3, 6], crypto: [-64, 155, 120, -25, -15, 60, 20, -30] } },
    lost: { n: 'Década perdida', t: 'As ações não vão a lado nenhum durante anos, com oscilações assustadoras. O ouro brilha.', r: { stocks: [-9, -12, -22, 28, 11, 5, 16, 5], bonds: [8, 8, 10, 4, 4, 2, 3, 4], cash: [5, 3, 1, 1, 2, 3, 5, 3], gold: [1, 2, 25, 20, 18, 24, 30, 23], crypto: [-50, -30, -70, 200, -40, 40, -10, -60] } }
  };
  const PRESETS = { 'Prudente': [30, 50, 20, 0, 0], 'Equilibrada': [60, 30, 0, 10, 0], 'Crescimento': [85, 5, 0, 5, 5], 'Só ações': [100, 0, 0, 0, 0], 'Só cripto': [0, 0, 0, 0, 100] };
  const PBAL = 'Equilibrada';
  const runPort = (w, sc) => {
    const tot = Object.keys(w).reduce((a, k) => a + w[k], 0) || 1;
    let v = 10000; const path = [v];
    for (let y = 0; y < 8; y++) { let r = 0; for (const k in w) r += (w[k] / tot) * sc.r[k][y] / 100; v *= 1 + r; path.push(v); }
    return path;
  };
  const maxDD = (p) => { let pk = p[0], dd = 0; p.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); }); return dd; };
  W.alloc = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Constrói a tua carteira e sobrevive ao teste de stress</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(PRESETS).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${AS.map((a) => MQ.slider(a[0], a[1], 0, 100, 5, PRESETS[PBAL][AS.indexOf(a)], 'pct')).join('')}
      <div data-r="tot" class="note"></div>
      ${MQ.select('sc', 'Cenário (8 anos, a começar com 10 000 €)', Object.keys(SC).map((k) => [k, SC[k].n]), 'crash')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('fin', 'Valor final', 'hi')}${MQ.stat('dd', 'Pior queda pelo caminho', 'bad')}${MQ.stat('feel', 'Como se sente')}</div>
      <div class="chart" data-c="1"></div>
      <p class="note" data-r="desc"></p>
      <div data-r="all"></div>
    </div></div>
    <p class="note">Cenários estilizados, vagamente inspirados em episódios passados. Não são dados reais nem previsões. Os números das criptomoedas são inventados para mostrar como um ativo destes pode ser selvagem.</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      PRESETS[b.dataset.p].forEach((x, i) => { const inp = el.querySelector('[data-k="' + AS[i][0] + '"]'); inp.value = x; });
      MQ.setVal(el, 'stocks', PRESETS[b.dataset.p][0]);
    }));
    MQ.bind(el, (v) => {
      const w = {}; AS.forEach((a) => { w[a[0]] = v[a[0]]; });
      const tot = AS.reduce((s, a) => s + w[a[0]], 0);
      const sc = SC[v.sc], p = runPort(w, sc), dd = maxDD(p);
      const feel = dd > -0.1 ? 'Dormes como um bebé' : dd > -0.25 ? 'Uma ou outra noite mal dormida' : dd > -0.4 ? 'Muito stressante' : 'Território de vender em pânico';
      let rows = '';
      Object.keys(SC).forEach((k) => { const pp = runPort(w, SC[k]); rows += `<tr><th scope="row">${SC[k].n}</th><td>${MQ.eur(pp[8])}</td><td>${MQ.pct(maxDD(pp) * 100, 0)}</td></tr>`; });
      MQ.set(el, {
        tot: tot === 100 ? 'Total: 100%. Perfeito.' : 'Total: ' + tot + '%. O jogo ajusta para 100% por ti.',
        bar: MQ.stackBar(AS.map((a) => ({ v: w[a[0]], c: a[2], l: a[1] }))) + MQ.legend(AS.map((a) => [a[1], a[2]])),
        fin: MQ.eur(p[8]), dd: MQ.pct(dd * 100, 0), feel, desc: '<b>' + sc.n + ':</b> ' + sc.t,
        all: '<div class="tbl"><table><thead><tr><th>Cenário</th><th>Valor final</th><th>Pior queda</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 220, [{ data: p, color: 'var(--inv)', area: true }], { fmt: (x) => '€' + Math.round(x / 1000) + 'k', xLabels: xl(8), label: 'Valor da carteira ao longo de 8 anos no cenário escolhido' }));
    });
  };

  /* ---------------- DCA vs investimento único ---------------- */
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
    el.innerHTML = `<h4 class="wt">Tudo de uma vez vs. investir todos os meses</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('cap', 'Total que queres investir ao longo de 3 anos', 1200, 12000, 600, 3600, 'eur')}
      ${MQ.slider('drift', 'Tendência do mercado (retorno médio anual)', -10, 20, 1, 8, 'pct')}
      ${MQ.slider('vol', 'Quão selvagem é o mercado (oscilações anuais)', 8, 60, 1, 25, 'pct')}
      <div class="btnrow"><button class="btn sm" type="button" data-new>Novo mercado aleatório</button><button class="btn sm alt" type="button" data-mc>Correr 1 000 mercados</button></div>
      <div class="msg" data-r="mc" hidden></div>
    </div><div class="wout">
      <div class="stats">${MQ.stat('lump', 'Tudo no dia 1', 'hi')}${MQ.stat('dca', 'Mesmo dinheiro, 36 compras mensais', 'hi')}${MQ.stat('who', 'Vencedor desta vez')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['Tudo de uma vez no dia 1', 'var(--trd)'], ['Investimento mensal (DCA)', 'var(--inv)']])}
      <p class="note">O mesmo total investido nos dois casos. DCA (dollar-cost averaging) significa comprar um montante fixo em datas regulares.</p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const pr = pricePath(seed, v.drift / 100, v.vol / 100, 36), r = dcaRun(pr, v.cap);
      const L = r.lump[36], D = r.dca[36];
      MQ.set(el, { lump: MQ.eur(L), dca: MQ.eur(D), who: Math.abs(L - D) < v.cap * 0.005 ? 'Empate' : (L > D ? 'Tudo de uma vez' : 'Investimento mensal') });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: r.lump, color: 'var(--trd)' }, { data: r.dca, color: 'var(--inv)' }], { fmt: (x) => '€' + MQ.num(x), xLabels: [{ i: 0, t: 'Início' }, { i: 12, t: '1a' }, { i: 24, t: '2a' }, { i: 36, t: '3a' }], label: 'Valor da carteira, tudo de uma vez versus investimento mensal' }));
    });
    el.querySelector('[data-new]').addEventListener('click', () => { seed += 13; upd(); });
    el.querySelector('[data-mc]').addEventListener('click', () => {
      const v = {}; MQ.$$('[data-k]', el).forEach((i) => { v[i.dataset.k] = parseFloat(i.value); });
      let lw = 0; const N = 1000;
      for (let s = 0; s < N; s++) { const r = dcaRun(pricePath(1000 + s, v.drift / 100, v.vol / 100, 36), v.cap); if (r.lump[36] > r.dca[36]) lw++; }
      const box = el.querySelector('[data-r="mc"]'); box.hidden = false;
      box.innerHTML = `<p><b>Tudo de uma vez ganhou em ${lw} de ${N} mercados simulados (${(lw / N * 100).toFixed(0)}%).</b> O investimento mensal ganhou em ${N - lw}.</p><p>Quando os mercados sobem, ter todo o dinheiro investido mais cedo costuma ganhar. Quando caem ou oscilam, comprar todos os meses protege-te. O DCA serve sobretudo para reduzir o arrependimento e criar um hábito.</p>`;
    });
  };

  /* ---------------- jogo de sobrevivência a um crash ---------------- */
  W.panic = (el) => {
    accent(el, 'trd');
    const S = [
      { m: 100, h: 'Dia calmo. Tens 10 000 € num fundo global de ações e o teu plano diz: manter durante mais de 10 anos.' },
      { m: 92, h: 'Notícias: «Medo de um vírus alastra, bolsas descem 8%.» O teu grupo de amigos está cheio de gráficos vermelhos.' },
      { m: 80, h: 'Começam os confinamentos. Os mercados estão 20% abaixo do máximo. A carteira pesa-te.' },
      { m: 66, h: 'A pior semana em décadas. As ações estão 34% abaixo do topo. A televisão fala de «banho de sangue».' },
      { m: 72, h: 'Um ressalto de +9% desde os mínimos. Ninguém sabe se vai durar.' },
      { m: 85, h: 'Os bancos centrais injetam apoio. As ações recuperam mais, mas a economia continua péssima.' },
      { m: 98, h: 'Seis meses depois do início, o mercado está quase de volta ao ponto de partida.' },
      { m: 112, h: 'Um ano depois, o índice está num novo máximo histórico.' }
    ];
    let st, log;
    const reset = () => { st = { i: 0, units: 100, cash: 0, added: 0 }; log = []; };
    const view = () => {
      const s = S[st.i], val = st.units * s.m + st.cash, hold = 100 * s.m;
      if (st.i >= 7) {
        const edge = val - st.added - hold;
        el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
        <div class="stats">${MQ.stat('a', 'O teu valor final', 'hi')}${MQ.stat('b', 'Se não tivesses feito nada')}${MQ.stat('c', 'Acrescentaste das poupanças')}</div>
        <div class="msg"><p><b>${edge > 50 ? 'Ganhaste a não fazer nada por ' + MQ.eur(edge) + '.' : edge < -50 ? 'Não fazer nada teria ganho por ' + MQ.eur(-edge) + '.' : 'Acabaste quase exatamente onde acabaria quem não fez nada.'}</b></p>
        <p>${st.cash > 0 ? 'Ainda tens dinheiro parado, por isso perdeste toda a recuperação. ' : ''}${log.some((x) => x === 'sell') ? 'Vender perto do fundo transforma uma queda temporária numa perda permanente, e depois tens de decidir quando voltar a comprar, o que é ainda mais difícil. ' : ''}${log.some((x) => x === 'add') ? 'Acrescentar dinheiro durante a queda foi desconfortável, mas é assim que os investidores de longo prazo ganham. ' : ''}Os grandes investidores têm um plano antes do crash, não durante.</p></div>
        <div class="btnrow" style="margin-top:.8rem"><button class="btn sm" type="button" data-act="again">Jogar outra vez</button></div>`;
        MQ.set(el, { a: MQ.eur(val), b: MQ.eur(hold), c: MQ.eur(st.added) });
        return;
      }
      const dd = (s.m / 100 - 1) * 100;
      el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
      <div class="stats">${MQ.stat('v', 'A tua carteira agora', 'hi')}${MQ.stat('m', 'Mercado vs. início')}${MQ.stat('k', 'Em dinheiro')}</div>
      ${st.i === 0 ? '<p>Carrega em começar. Em cada ronda decides o que fazer. Não há resposta perfeita, só compromissos.</p><div class="btnrow"><button class="btn sm" type="button" data-act="hold">Começar a história</button></div>' :
        `<p><b>O que fazes?</b></p><div class="btnrow">
          <button class="btn sm alt" type="button" data-act="hold">Manter. Seguir o plano.</button>
          <button class="btn sm alt" type="button" data-act="sell" ${st.units > 0 ? '' : 'disabled'}>Vender tudo</button>
          <button class="btn sm alt" type="button" data-act="back" ${st.cash > 0 ? '' : 'disabled'}>Voltar a comprar com o meu dinheiro</button>
          <button class="btn sm alt" type="button" data-act="add">Acrescentar 1 000 € das poupanças</button></div>`}
      <p class="note">Ronda ${st.i + 1} de 8. História estilizada inspirada no início de 2020, não são dados exatos.</p>`;
      MQ.set(el, { v: MQ.eur(val), m: (dd >= 0 ? '+' : '') + dd.toFixed(0) + '%', k: MQ.eur(st.cash) });
    };
    reset();
    el.innerHTML = '<h4 class="wt">Jogo de sobrevivência a um crash</h4><div data-g></div>';
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

  /* ---------------- o peso das comissões ---------------- */
  W.fees = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">O custo silencioso das comissões</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('start', 'Montante inicial', 0, 100000, 1000, 10000, 'eur')}
      ${MQ.slider('monthly', 'Contribuição mensal', 0, 2000, 50, 200, 'eur')}
      ${MQ.slider('yrs', 'Anos', 5, 50, 1, 30, 'yr')}
      ${MQ.slider('gross', 'Retorno do mercado antes de custos', 2, 12, 0.5, 7, 'pct')}
      ${MQ.slider('a', 'Opção A: ETF de índice barato, custo anual', 0, 3, 0.05, 0.2, 'pct')}
      ${MQ.slider('b', 'Opção B: fundo caro, custo anual', 0, 3, 0.05, 1.8, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fa', 'A opção A termina com', 'good')}${MQ.stat('fb', 'A opção B termina com', 'bad')}${MQ.stat('diff', 'As comissões comeram', 'hi')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['ETF barato', 'var(--inv)'], ['Fundo caro', 'var(--trd)']])}
      <p class="note" data-r="note"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const A = sim(v.start, v.monthly, (v.gross - v.a) / 100, v.yrs, 0), Bq = sim(v.start, v.monthly, (v.gross - v.b) / 100, v.yrs, 0);
      const fa = A.val[v.yrs], fb = Bq.val[v.yrs], growthA = fa - A.con[v.yrs];
      MQ.set(el, { fa: MQ.eur(fa), fb: MQ.eur(fb), diff: MQ.eur(fa - fb), note: growthA > 0 ? 'A opção cara abdica de cerca de ' + Math.round((fa - fb) / growthA * 100) + '% do que a barata rende. Pagas a comissão todos os anos, quer o fundo tenha corrido bem ou não.' : '' });
      MQ.draw(ch, (w) => MQ.lineChart(w, 220, [{ data: A.val, color: 'var(--inv)' }, { data: Bq.val, color: 'var(--trd)' }], { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : '€' + Math.round(x / 1000) + 'k', xLabels: xl(v.yrs), label: 'Valor da carteira com comissões baixas e altas', min: 0 }));
    });
  };

  /* ---------------- construtor de plano de investimento ---------------- */
  W.ips = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">Constrói o teu plano de investimento de uma página</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.select('goal', 'Para que serve este dinheiro?', [['emergency', 'Fundo de emergência'], ['house', 'Uma grande compra dentro de alguns anos'], ['retire', 'Reforma / riqueza a longo prazo'], ['free', 'Liberdade financeira (flexível, longo prazo)']], 'retire')}
      ${MQ.slider('yrs', 'Quando vais precisar dele?', 1, 40, 1, 20, 'yr')}
      ${MQ.select('feel', 'Se a tua carteira caísse 30% em poucos meses, tu…', [['1', 'Entrarias em pânico e venderias'], ['2', 'Sentir-te-ias muito mal, mas provavelmente manterias'], ['3', 'Ficarias preocupado, mas manterias'], ['4', 'Ficarias calmo e continuarias a investir'], ['5', 'Comprarias mais, com gosto']], '3')}
      ${MQ.slider('m', 'Montante mensal que podes investir', 25, 2000, 25, 200, 'eur')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('eq', 'Ações', 'hi')}${MQ.stat('bo', 'Obrigações')}${MQ.stat('ca', 'Liquidez')}</div>
      <div class="tape" data-r="plan" style="max-height:none;white-space:pre-wrap;font-family:var(--font-body);font-size:.92rem"></div>
      <div class="btnrow" style="margin-top:.7rem"><button class="btn sm" type="button" data-copy>Copiar o meu plano</button><span class="note" data-r="cp"></span></div>
    </div></div>
    <p class="note">Um exemplo de como o tempo e o conforto com o risco podem moldar uma carteira. É uma ferramenta de ensino, não aconselhamento pessoal.</p>`;
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
      const goalName = { emergency: 'Fundo de emergência', house: 'Grande compra', retire: 'Reforma e riqueza a longo prazo', free: 'Liberdade financeira' }[v.goal];
      text = 'O MEU PLANO DE INVESTIMENTO\n' +
        'Objetivo: ' + goalName + ' dentro de ' + v.yrs + ' anos.\n' +
        'Mistura: ' + eq + '% em fundo de índice global de ações, ' + bo + '% em obrigações, ' + ca + '% em liquidez.\n' +
        'Invisto ' + MQ.eur(v.m) + ' todos os meses, automaticamente, no dia do salário.\n' +
        'Reequilibro uma vez por ano, ou quando uma fatia se afasta 5 pontos do alvo.\n' +
        'Numa queda de 30% vou: não olhar todos os dias, não vender e manter o meu montante mensal.\n' +
        'Não vou comprar coisas que não percebo nem nada prometido como «garantido».\n' +
        'Um pressuposto prudente de 5% ao ano (não é uma promessa) faria as minhas contribuições crescer para cerca de ' + MQ.eur(proj.val[proj.val.length - 1]) + '.';
      MQ.set(el, {
        bar: MQ.stackBar([{ v: eq, c: '#14B37D', l: 'Ações' }, { v: bo, c: '#5E8BFF', l: 'Obrigações' }, { v: ca, c: '#C9C5EE', l: 'Liquidez' }]),
        eq: eq + '%', bo: bo + '%', ca: ca + '%', plan: MQ.esc(text), cp: ''
      });
    });
    el.querySelector('[data-copy]').addEventListener('click', () => {
      const note = el.querySelector('[data-r="cp"]');
      const fallback = () => { note.textContent = 'Seleciona o texto acima para o copiar.'; };
      try { navigator.clipboard.writeText(text).then(() => { note.textContent = 'Copiado!'; }, fallback); } catch (e) { fallback(); }
    });
  };

  /* ---------------- que percurso é o teu? ---------------- */
  W.chooser = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Quanto tempo podes dedicar aos mercados por semana?', [['Cerca de 1 hora', 0], ['Algumas horas', 1], ['Muitas horas, quero que seja um ofício', 2]]],
      ['O que queres que o teu dinheiro faça?', [['Crescer de forma estável ao longo de mais de 10 anos', 0], ['Uma mistura dos dois', 1], ['Gerar resultados ativos com as minhas competências', 2]]],
      ['A tua conta cai 25% num mês. Tu…', [['Detestas isso e preferes um crescimento calmo e lento', 0], ['Manténs e pensas', 1], ['Revês as regras e continuas a executar', 2]]],
      ['Que mundo te entusiasma mais?', [['Empresas, fundos e mercados tradicionais', 'S'], ['Cripto e novas tecnologias', 'C']]]
    ];
    const ans = [];
    el.innerHTML = `<h4 class="wt">Que percurso é o teu?</h4><div class="cards">${Q.map((q, i) => `<div class="fld"><label>${i + 1}. ${q[0]}</label><div class="seg" data-q="${i}">${q[1].map((o, j) => `<button type="button" data-j="${j}">${o[0]}</button>`).join('')}</div></div>`).join('')}</div><div data-r="res"></div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-j]'); if (!b) return;
      const seg = b.parentNode, qi = parseInt(seg.dataset.q, 10);
      seg.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on');
      ans[qi] = Q[qi][1][parseInt(b.dataset.j, 10)][1];
      if (ans.filter((x) => x !== undefined).length < 4) return;
      const score = ans[0] + ans[1] + ans[2], trader = score >= 4, crypto = ans[3] === 'C';
      const k = trader ? (crypto ? 'ct' : 'trd') : (crypto ? 'ci' : 'inv');
      const T = MQ.tracks[k];
      el.querySelector('[data-r="res"]').innerHTML = `<div class="msg"><p><b>Percurso sugerido: ${T.name}.</b></p><p>${trader ? 'As tuas respostas apontam para um estilo ativo. Ótimo, mas constrói primeiro as bases e as competências de investidor. A maioria dos traders de sucesso mantém também um núcleo de investimento a longo prazo.' : 'As tuas respostas apontam para um estilo calmo e de longo prazo. É o percurso que funciona para a maioria das pessoas.'}</p>
      <div class="btnrow"><a class="btn sm" href="#track-found">Começar pelos Fundamentos</a><a class="btn sm alt" href="#track-${k}">Abrir ${T.name}</a></div></div>`;
    });
  };
})();
