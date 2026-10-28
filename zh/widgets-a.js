/* 基础课程与“日常投资者”路径的互动工具 */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* 复利模拟器：返回每年的价值和累计投入 */
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
  const xl = (years) => { const a = [{ i: 0, t: '现在' }]; const step = years > 30 ? 10 : (years > 12 ? 5 : (years > 6 ? 2 : 1)); for (let y = step; y < years; y += step) a.push({ i: y, t: y + '年' }); a.push({ i: years, t: years + '年' }); return a; };

  /* ---------------- 通胀时光机 ---------------- */
  W.inflation = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">通胀时光机</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('price', '今天一份披萨的价格', 5, 30, 1, 10, 'eur')}
      ${MQ.slider('inf', '每年通胀率', 0, 10, 0.5, 3, 'pct')}
      ${MQ.slider('yrs', '未来多少年', 1, 40, 1, 20, 'yr')}
      ${MQ.slider('ret', '如果你的钱以每年多少收益投资', 0, 10, 0.5, 5, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pizza', '那时的披萨价格', 'hi')}${MQ.stat('cash', '1,000 € 现金价值（按今天的购买力）', 'bad')}${MQ.stat('inv', '1,000 € 投资后价值（按今天的购买力）', 'good')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['床垫下的现金', 'var(--trd)'], ['已投资', 'var(--inv)']])}
    </div></div>
    <p class="note">实际价值 = 你的钱真正能买到的东西，以今天的价格衡量。试试 6% 的通胀和 0% 的收益，感受一下它有多伤人。</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const i = v.inf / 100, r = v.ret / 100;
      const cash = [], inv = [];
      for (let y = 0; y <= v.yrs; y++) { cash.push(1000 / Math.pow(1 + i, y)); inv.push(1000 * Math.pow((1 + r) / (1 + i), y)); }
      MQ.set(el, { pizza: MQ.eur(v.price * Math.pow(1 + i, v.yrs), 2), cash: MQ.eur(cash[v.yrs]), inv: MQ.eur(inv[v.yrs]) });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: cash, color: 'var(--trd)' }, { data: inv, color: 'var(--inv)' }], { fmt: (x) => MQ.eur(x), xLabels: xl(v.yrs), label: '1000 欧元随时间变化的实际价值', min: 0 }));
    });
  };

  /* ---------------- 50/30/20 预算 ---------------- */
  W.budget = (el) => {
    accent(el, 'found');
    el.innerHTML = `<h4 class="wt">你的 50/30/20 预算</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('inc', '税后月收入（€）', 1200, 0, 100000, 50)}
      ${MQ.slider('needs', '必需开支（房租、饮食、交通、账单）', 20, 80, 1, 50, 'pct')}
      ${MQ.slider('wants', '想要的开支（娱乐、外出就餐、订阅）', 0, 60, 1, 30, 'pct')}
      <p class="note">储蓄和投资得到剩下的部分。</p>
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('n', '必需开支 / 月')}${MQ.stat('w', '想要的开支 / 月')}${MQ.stat('s', '储蓄和投资 / 月', 'hi')}</div>
      <div class="stats">${MQ.stat('ef3', '应急基金目标（3 个月必需开支）')}${MQ.stat('efm', '攒够所需时间')}${MQ.stat('yr', '每年储蓄')}</div>
    </div></div>`;
    MQ.bind(el, (v) => {
      const s = Math.max(0, 100 - v.needs - v.wants);
      const n = v.inc * v.needs / 100, w = v.inc * v.wants / 100, sv = v.inc * s / 100;
      const ef = n * 3;
      MQ.set(el, {
        bar: MQ.stackBar([{ v: v.needs, c: '#5E8BFF', l: '必需开支' }, { v: v.wants, c: '#FFC21A', l: '想要的开支' }, { v: s, c: '#14B37D', l: '储蓄和投资' }]) + MQ.legend([['必需开支', '#5E8BFF'], ['想要的开支', '#FFC21A'], ['储蓄和投资', '#14B37D']]),
        n: MQ.eur(n), w: MQ.eur(w), s: MQ.eur(sv) + '（' + s + '%）', ef3: MQ.eur(ef),
        efm: sv > 0 ? Math.ceil(ef / sv) + ' 个月' : '先削减想要的开支', yr: MQ.eur(sv * 12)
      });
    });
  };

  /* ---------------- 复利机器 ---------------- */
  W.compound = (el, d) => {
    accent(el, 'inv');
    const compact = d.compact === '1', wait0 = parseFloat(d.wait) || 0;
    const hid = (k, v) => `<input type="hidden" data-k="${k}" value="${v}">`;
    el.innerHTML = `<h4 class="wt">${compact ? '试一试：每月 100 € 会变成多少？' : '复利机器'}</h4>
    <div class="${compact ? '' : 'wgrid'}"><div class="wctl">
      ${compact ? hid('start', 0) + hid('wait', 0) + hid('real', 0) : MQ.slider('start', '初始金额', 0, 50000, 500, 1000, 'eur')}
      ${MQ.slider('monthly', '每月追加', 0, 2000, 10, 100, 'eur')}
      ${MQ.slider('ret', '平均年收益率', 0, 15, 0.5, 7, 'pct')}
      ${MQ.slider('yrs', '年数', 1, 50, 1, 30, 'yr')}
      ${compact ? '' : MQ.slider('wait', '对比：如果你推迟开始会怎样？', 0, 20, 1, wait0, 'yr')}
      ${compact ? '' : MQ.check('real', '按今天的购买力显示（假设通胀 2%）', false)}
      ${compact ? '' : '<div class="seg" data-presets><button type="button" data-p="150">每天一杯 5 € 的咖啡</button><button type="button" data-p="50">学生：50 €/月</button><button type="button" data-p="500">认真：500 €/月</button></div>'}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fin', '最终你拥有', 'hi')}${MQ.stat('paid', '你投入了')}${MQ.stat('gain', '增长贡献了其余部分', 'good')}${compact ? '' : MQ.stat('dbl', '资金翻倍需要')}${compact ? '' : MQ.stat('cost', '等待的代价', 'bad')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['累计投入', 'var(--muted)'], ['你的投资', 'var(--inv)']].concat(compact ? [] : [['如果晚点开始', 'var(--trd)']]))}
    </div></div>
    <p class="note">${compact ? '仅作示意。真实收益每年都在变化，从不保证。' : '这里的收益是平滑后的平均值。真实市场有涨有跌，没有任何东西是保证的。曲线的形状就是这一课：时间承担了最重的工作。'}</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => MQ.setVal(el, 'monthly', b.dataset.p)));
    MQ.bind(el, (v) => {
      const R = v.ret / 100, base = sim(v.start, v.monthly, R, v.yrs, 0), wt = v.wait > 0 ? sim(v.start, v.monthly, R, v.yrs, Math.min(v.wait, v.yrs)) : null;
      const adj = (arr) => v.real ? arr.map((x, i) => x / Math.pow(1.02, i)) : arr;
      const a = adj(base.val), c = base.con, b = wt ? adj(wt.val) : null;
      const fin = a[v.yrs];
      MQ.set(el, {
        fin: MQ.eur(fin), paid: MQ.eur(c[v.yrs]), gain: MQ.eur(fin - (v.real ? c[v.yrs] : c[v.yrs])),
        dbl: v.ret > 0 ? (72 / v.ret).toFixed(1) + ' 年' : '永不',
        cost: b ? MQ.eur(fin - b[v.yrs]) : '€0'
      });
      const series = [{ data: c, color: 'var(--muted)', area: true, nodot: true, w: 2 }, { data: a, color: 'var(--inv)' }];
      if (b) series.push({ data: b, color: 'var(--trd)', dash: true });
      MQ.draw(ch, (w) => MQ.lineChart(w, compact ? 200 : 270, series, { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : x >= 1000 ? '€' + Math.round(x / 1000) + 'k' : '€' + Math.round(x), xLabels: xl(v.yrs), label: '定期每月投入的投资增长情况', min: 0 }));
    });
  };

  /* ---------------- 风险阶梯 ---------------- */
  W.ladder = (el) => {
    accent(el, 'found');
    const rows = [
      ['储蓄账户', 0, '最差的一年：约 0%（在存款保险额度内不会损失本金）。长期典型水平：每年约 0% 到 3%，常常低于通胀。'],
      ['政府债券', 17, '近年最差的一年：约 -13%（2022 年，利率快速上升时）。长期典型水平：每年约 2% 到 4%。比股票安全，但并非没有风险。'],
      ['全球股票指数', 40, '近代史上最差的一年：约 -37%（2008 年）。长期典型水平：扣除通胀前每年约 6% 到 9%，途中波动很大。'],
      ['黄金', 30, '最差的一年：约 -28%（2013 年）。不产生收入。它常常与股票走势不同，这有助于分散投资。'],
      ['单一公司的股票', 80, '一家公司可能下跌 50% 到 90%，甚至破产（-100%）。再好的故事也可能以糟糕收场。风险在于集中。'],
      ['比特币', 75, '多次从高点跌到低点 70% 到 85%（2014、2018、2022 年）。它也曾大幅上涨。波动极大，所以仓位大小很重要。'],
      ['小型山寨币或迷因币', 98, '大多数小型代币最终会失去几乎全部价值。少数大赚。把它当作彩票，绝不是储蓄计划。']
    ];
    el.innerHTML = `<h4 class="wt">风险阶梯</h4>
    <p class="note" style="margin-top:0">点一行。进度条显示真正糟糕的一年有多糟（条越长 = 可能的损失越深）。数字仅作示意并经过简化。</p>
    <div class="ladder">${rows.map((r, i) => `<button type="button" class="lrow" data-i="${i}" aria-expanded="false"><b>${r[0]}</b><span class="lbar"><i style="width:${Math.max(r[1], 1.5)}%"></i></span><span class="lnote">${r[2]}</span></button>`).join('')}</div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('.lrow'); if (!b) return;
      const on = b.classList.contains('on');
      el.querySelectorAll('.lrow').forEach((x) => { x.classList.remove('on'); x.setAttribute('aria-expanded', 'false'); });
      if (!on) { b.classList.add('on'); b.setAttribute('aria-expanded', 'true'); }
    });
  };

  /* ---------------- 构建投资组合游戏 ---------------- */
  const AS = [['stocks', '全球股票', '#14B37D'], ['bonds', '债券', '#5E8BFF'], ['cash', '现金', '#C9C5EE'], ['gold', '黄金', '#FFC21A'], ['crypto', '加密货币', '#A58FFF']];
  const SC = {
    boom: { n: '平淡的牛市', t: '八年大多平静。股票缓慢走高，中间有一次回调。', r: { stocks: [12, 9, 14, -4, 18, 10, 8, 15], bonds: [3, 2, 4, 3, 1, 4, 3, 2], cash: [2, 2, 2, 2, 2, 2, 2, 2], gold: [2, -3, 5, 1, 6, 0, 3, 2], crypto: [60, -20, 120, -45, 90, 15, -30, 70] } },
    crash: { n: '崩盘与复苏', t: '第二年出现深度崩盘，随后强劲反弹。', r: { stocks: [-8, -37, 26, 15, 2, 16, 32, 13], bonds: [5, 5, 6, 7, 4, -2, 6, 1], cash: [3, 1, 0, 0, 0, 0, 0, 0], gold: [5, 5, 24, 29, 10, -28, -2, 0], crypto: [-30, -60, 80, 150, -50, 40, 200, -30] } },
    infl: { n: '通胀冲击', t: '物价飙升，利率上升。起初债券和股票都受伤。', r: { stocks: [-19, 24, 12, -5, 9, 11, -6, 13], bonds: [-13, 5, 3, -2, 2, 4, 2, 1], cash: [1, 4, 4, 3, 2, 2, 2, 2], gold: [0, 13, 2, 5, 8, 15, -3, 6], crypto: [-64, 155, 120, -25, -15, 60, 20, -30] } },
    lost: { n: '失落的十年', t: '股票多年原地踏步，波动令人害怕。黄金大放异彩。', r: { stocks: [-9, -12, -22, 28, 11, 5, 16, 5], bonds: [8, 8, 10, 4, 4, 2, 3, 4], cash: [5, 3, 1, 1, 2, 3, 5, 3], gold: [1, 2, 25, 20, 18, 24, 30, 23], crypto: [-50, -30, -70, 200, -40, 40, -10, -60] } }
  };
  const PRESETS = { '保守': [30, 50, 20, 0, 0], '均衡': [60, 30, 0, 10, 0], '成长': [85, 5, 0, 5, 5], '全部股票': [100, 0, 0, 0, 0], '全部加密货币': [0, 0, 0, 0, 100] };
  const PBAL = '均衡';
  const runPort = (w, sc) => {
    const tot = Object.keys(w).reduce((a, k) => a + w[k], 0) || 1;
    let v = 10000; const path = [v];
    for (let y = 0; y < 8; y++) { let r = 0; for (const k in w) r += (w[k] / tot) * sc.r[k][y] / 100; v *= 1 + r; path.push(v); }
    return path;
  };
  const maxDD = (p) => { let pk = p[0], dd = 0; p.forEach((v) => { pk = Math.max(pk, v); dd = Math.min(dd, v / pk - 1); }); return dd; };
  W.alloc = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">构建你的投资组合，然后通过压力测试</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets>${Object.keys(PRESETS).map((p) => `<button type="button" data-p="${p}">${p}</button>`).join('')}</div>
      ${AS.map((a) => MQ.slider(a[0], a[1], 0, 100, 5, PRESETS[PBAL][AS.indexOf(a)], 'pct')).join('')}
      <div data-r="tot" class="note"></div>
      ${MQ.select('sc', '情景（8 年，起始 10,000 €）', Object.keys(SC).map((k) => [k, SC[k].n]), 'crash')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('fin', '最终价值', 'hi')}${MQ.stat('dd', '途中最大回撤', 'bad')}${MQ.stat('feel', '感觉如何')}</div>
      <div class="chart" data-c="1"></div>
      <p class="note" data-r="desc"></p>
      <div data-r="all"></div>
    </div></div>
    <p class="note">这些是程式化的情景，只是大致参考过去的一些阶段。它们不是真实数据，也不是预测。加密货币的数字是虚构的，用来展示这类资产可以多么疯狂。</p>`;
    const ch = el.querySelector('[data-c]');
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      PRESETS[b.dataset.p].forEach((x, i) => { const inp = el.querySelector('[data-k="' + AS[i][0] + '"]'); inp.value = x; });
      MQ.setVal(el, 'stocks', PRESETS[b.dataset.p][0]);
    }));
    MQ.bind(el, (v) => {
      const w = {}; AS.forEach((a) => { w[a[0]] = v[a[0]]; });
      const tot = AS.reduce((s, a) => s + w[a[0]], 0);
      const sc = SC[v.sc], p = runPort(w, sc), dd = maxDD(p);
      const feel = dd > -0.1 ? '睡得像婴儿一样香' : dd > -0.25 ? '有些辗转难眠' : dd > -0.4 ? '压力很大' : '恐慌抛售的区域';
      let rows = '';
      Object.keys(SC).forEach((k) => { const pp = runPort(w, SC[k]); rows += `<tr><th scope="row">${SC[k].n}</th><td>${MQ.eur(pp[8])}</td><td>${MQ.pct(maxDD(pp) * 100, 0)}</td></tr>`; });
      MQ.set(el, {
        tot: tot === 100 ? '合计：100%。完美。' : '合计：' + tot + '%。游戏会替你按 100% 折算。',
        bar: MQ.stackBar(AS.map((a) => ({ v: w[a[0]], c: a[2], l: a[1] }))) + MQ.legend(AS.map((a) => [a[1], a[2]])),
        fin: MQ.eur(p[8]), dd: MQ.pct(dd * 100, 0), feel, desc: '<b>' + sc.n + '：</b>' + sc.t,
        all: '<div class="tbl"><table><thead><tr><th>情景</th><th>最终价值</th><th>最大回撤</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      MQ.draw(ch, (ww) => MQ.lineChart(ww, 220, [{ data: p, color: 'var(--inv)', area: true }], { fmt: (x) => '€' + Math.round(x / 1000) + 'k', xLabels: xl(8), label: '所选情景下 8 年的投资组合价值' }));
    });
  };

  /* ---------------- 定投与一次性投入 ---------------- */
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
    el.innerHTML = `<h4 class="wt">一次性投入 vs. 每月定投</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('cap', '你想在 3 年内投入的总额', 1200, 12000, 600, 3600, 'eur')}
      ${MQ.slider('drift', '市场趋势（平均年收益）', -10, 20, 1, 8, 'pct')}
      ${MQ.slider('vol', '市场有多狂野（年波动幅度）', 8, 60, 1, 25, 'pct')}
      <div class="btnrow"><button class="btn sm" type="button" data-new>新的随机市场</button><button class="btn sm alt" type="button" data-mc>模拟 1,000 个市场</button></div>
      <div class="msg" data-r="mc" hidden></div>
    </div><div class="wout">
      <div class="stats">${MQ.stat('lump', '第 1 天全部投入', 'hi')}${MQ.stat('dca', '同样的钱，分 36 个月买入', 'hi')}${MQ.stat('who', '这次的赢家')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['第 1 天一次性投入', 'var(--trd)'], ['每月投资（定投）', 'var(--inv)']])}
      <p class="note">两种情况投入的总额相同。定投（DCA，dollar-cost averaging）是指在固定日期买入固定金额。</p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    const upd = MQ.bind(el, (v) => {
      const pr = pricePath(seed, v.drift / 100, v.vol / 100, 36), r = dcaRun(pr, v.cap);
      const L = r.lump[36], D = r.dca[36];
      MQ.set(el, { lump: MQ.eur(L), dca: MQ.eur(D), who: Math.abs(L - D) < v.cap * 0.005 ? '平局' : (L > D ? '一次性投入' : '每月投资') });
      MQ.draw(ch, (w) => MQ.lineChart(w, 230, [{ data: r.lump, color: 'var(--trd)' }, { data: r.dca, color: 'var(--inv)' }], { fmt: (x) => '€' + MQ.num(x), xLabels: [{ i: 0, t: '起点' }, { i: 12, t: '1年' }, { i: 24, t: '2年' }, { i: 36, t: '3年' }], label: '投资组合价值：一次性投入与每月投资对比' }));
    });
    el.querySelector('[data-new]').addEventListener('click', () => { seed += 13; upd(); });
    el.querySelector('[data-mc]').addEventListener('click', () => {
      const v = {}; MQ.$$('[data-k]', el).forEach((i) => { v[i.dataset.k] = parseFloat(i.value); });
      let lw = 0; const N = 1000;
      for (let s = 0; s < N; s++) { const r = dcaRun(pricePath(1000 + s, v.drift / 100, v.vol / 100, 36), v.cap); if (r.lump[36] > r.dca[36]) lw++; }
      const box = el.querySelector('[data-r="mc"]'); box.hidden = false;
      box.innerHTML = `<p><b>在 ${N} 个模拟市场中，一次性投入赢了 ${lw} 次（${(lw / N * 100).toFixed(0)}%）。</b>每月投资赢了 ${N - lw} 次。</p><p>市场上涨时，更早把全部资金投入通常会赢。市场下跌或来回震荡时，每月买入能保护你。定投主要是为了减少后悔和养成习惯。</p>`;
    });
  };

  /* ---------------- 崩盘生存游戏 ---------------- */
  W.panic = (el) => {
    accent(el, 'trd');
    const S = [
      { m: 100, h: '平静的一天。你持有 10,000 € 的全球股票基金，你的计划是：持有 10 年以上。' },
      { m: 92, h: '新闻头条：“病毒恐慌蔓延，股市下跌 8%。”你的群聊里全是红色的图表。' },
      { m: 80, h: '封锁开始了。市场比高点低 20%。你的投资组合让人心情沉重。' },
      { m: 66, h: '几十年来最糟的一周。股票比顶部低 34%。电视称之为“血洗”。' },
      { m: 72, h: '从低点反弹 +9%。没人知道能否持续。' },
      { m: 85, h: '各国央行注入支持。股票进一步回升，但经济看起来依然糟糕。' },
      { m: 98, h: '开始半年后，市场几乎回到了起点。' },
      { m: 112, h: '一年后，指数创出历史新高。' }
    ];
    let st, log;
    const reset = () => { st = { i: 0, units: 100, cash: 0, added: 0 }; log = []; };
    const view = () => {
      const s = S[st.i], val = st.units * s.m + st.cash, hold = 100 * s.m;
      if (st.i >= 7) {
        const edge = val - st.added - hold;
        el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
        <div class="stats">${MQ.stat('a', '你的最终价值', 'hi')}${MQ.stat('b', '如果你什么都不做')}${MQ.stat('c', '你从储蓄中追加的金额')}</div>
        <div class="msg"><p><b>${edge > 50 ? '你比什么都不做多赚了 ' + MQ.eur(edge) + '。' : edge < -50 ? '什么都不做反而比你多赚了 ' + MQ.eur(-edge) + '。' : '你最终的结果几乎和什么都不做一样。'}</b></p>
        <p>${st.cash > 0 ? '你手里还握着现金，所以错过了整个反弹。' : ''}${log.some((x) => x === 'sell') ? '在接近底部时卖出，会把暂时的下跌变成永久的亏损，而且你还得决定何时买回来，这更难。' : ''}${log.some((x) => x === 'add') ? '在下跌中追加资金让人不舒服，但长期投资者正是这样赢的。' : ''}优秀的投资者在崩盘之前就有计划，而不是在崩盘之中。</p></div>
        <div class="btnrow" style="margin-top:.8rem"><button class="btn sm" type="button" data-act="again">再玩一次</button></div>`;
        MQ.set(el, { a: MQ.eur(val), b: MQ.eur(hold), c: MQ.eur(st.added) });
        return;
      }
      const dd = (s.m / 100 - 1) * 100;
      el.querySelector('[data-g]').innerHTML = `<div class="news">${s.h}</div>
      <div class="stats">${MQ.stat('v', '你现在的投资组合', 'hi')}${MQ.stat('m', '市场相对起点')}${MQ.stat('k', '现金')}</div>
      ${st.i === 0 ? '<p>点击开始。每一轮你都要决定怎么做。没有完美答案，只有取舍。</p><div class="btnrow"><button class="btn sm" type="button" data-act="hold">开始故事</button></div>' :
        `<p><b>你怎么做？</b></p><div class="btnrow">
          <button class="btn sm alt" type="button" data-act="hold">持有。坚持计划。</button>
          <button class="btn sm alt" type="button" data-act="sell" ${st.units > 0 ? '' : 'disabled'}>全部卖出</button>
          <button class="btn sm alt" type="button" data-act="back" ${st.cash > 0 ? '' : 'disabled'}>用我的现金买回</button>
          <button class="btn sm alt" type="button" data-act="add">从储蓄中追加 1,000 €</button></div>`}
      <p class="note">第 ${st.i + 1} 轮，共 8 轮。程式化故事，灵感来自 2020 年初，并非精确数据。</p>`;
      MQ.set(el, { v: MQ.eur(val), m: (dd >= 0 ? '+' : '') + dd.toFixed(0) + '%', k: MQ.eur(st.cash) });
    };
    reset();
    el.innerHTML = '<h4 class="wt">股市崩盘生存游戏</h4><div data-g></div>';
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

  /* ---------------- 费用拖累 ---------------- */
  W.fees = (el) => {
    accent(el, 'trd');
    el.innerHTML = `<h4 class="wt">费用的无声成本</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.slider('start', '初始金额', 0, 100000, 1000, 10000, 'eur')}
      ${MQ.slider('monthly', '每月投入', 0, 2000, 50, 200, 'eur')}
      ${MQ.slider('yrs', '年数', 5, 50, 1, 30, 'yr')}
      ${MQ.slider('gross', '扣费前的市场收益', 2, 12, 0.5, 7, 'pct')}
      ${MQ.slider('a', '方案 A：低成本指数 ETF，年费用', 0, 3, 0.05, 0.2, 'pct')}
      ${MQ.slider('b', '方案 B：高费用基金，年费用', 0, 3, 0.05, 1.8, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('fa', '方案 A 最终为', 'good')}${MQ.stat('fb', '方案 B 最终为', 'bad')}${MQ.stat('diff', '费用吃掉了', 'hi')}</div>
      <div class="chart" data-c="1"></div>
      ${MQ.legend([['低成本 ETF', 'var(--inv)'], ['高费用基金', 'var(--trd)']])}
      <p class="note" data-r="note"></p>
    </div></div>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const A = sim(v.start, v.monthly, (v.gross - v.a) / 100, v.yrs, 0), Bq = sim(v.start, v.monthly, (v.gross - v.b) / 100, v.yrs, 0);
      const fa = A.val[v.yrs], fb = Bq.val[v.yrs], growthA = fa - A.con[v.yrs];
      MQ.set(el, { fa: MQ.eur(fa), fb: MQ.eur(fb), diff: MQ.eur(fa - fb), note: growthA > 0 ? '高费用方案放弃了低成本方案收益的约 ' + Math.round((fa - fb) / growthA * 100) + '%。无论基金表现好坏，你每一年都要付这笔费用。' : '' });
      MQ.draw(ch, (w) => MQ.lineChart(w, 220, [{ data: A.val, color: 'var(--inv)' }, { data: Bq.val, color: 'var(--trd)' }], { fmt: (x) => x >= 1e6 ? '€' + (x / 1e6).toFixed(1) + 'M' : '€' + Math.round(x / 1000) + 'k', xLabels: xl(v.yrs), label: '低费用与高费用下的投资组合价值', min: 0 }));
    });
  };

  /* ---------------- 投资计划生成器 ---------------- */
  W.ips = (el) => {
    accent(el, 'inv');
    el.innerHTML = `<h4 class="wt">制定你的一页投资计划</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.select('goal', '这笔钱用来做什么？', [['emergency', '应急基金'], ['house', '几年后的大额购买'], ['retire', '退休 / 长期财富'], ['free', '财务自由（灵活、长期）']], 'retire')}
      ${MQ.slider('yrs', '你什么时候需要这笔钱？', 1, 40, 1, 20, 'yr')}
      ${MQ.select('feel', '如果你的投资组合在几个月内下跌 30%，你会……', [['1', '恐慌并卖出'], ['2', '很难受，但大概会继续持有'], ['3', '担心，但会持有'], ['4', '保持冷静，继续投资'], ['5', '很乐意加仓']], '3')}
      ${MQ.slider('m', '你每月能投资的金额', 25, 2000, 25, 200, 'eur')}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('eq', '股票', 'hi')}${MQ.stat('bo', '债券')}${MQ.stat('ca', '现金')}</div>
      <div class="tape" data-r="plan" style="max-height:none;white-space:pre-wrap;font-family:var(--font-body);font-size:.92rem"></div>
      <div class="btnrow" style="margin-top:.7rem"><button class="btn sm" type="button" data-copy>复制我的计划</button><span class="note" data-r="cp"></span></div>
    </div></div>
    <p class="note">这是一个示例，说明时间和风险承受能力如何塑造资产配置。它是教学工具，不是个人建议。</p>`;
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
      const goalName = { emergency: '应急基金', house: '大额购买', retire: '退休与长期财富', free: '财务自由' }[v.goal];
      text = '我的投资计划\n' +
        '目标：' + v.yrs + ' 年后的' + goalName + '。\n' +
        '配置：' + eq + '% 全球股票指数基金，' + bo + '% 债券，' + ca + '% 现金。\n' +
        '我每月在发薪日自动投资 ' + MQ.eur(v.m) + '。\n' +
        '每年再平衡一次，或当任何一部分偏离目标 5 个百分点时再平衡。\n' +
        '遇到 30% 的崩盘时，我会：不每天看盘，不卖出，继续每月的投入。\n' +
        '我不会买我不理解的东西，也不会买任何被宣传为“保证收益”的东西。\n' +
        '按谨慎的年化 5% 假设（不是承诺），我的投入将增长到约 ' + MQ.eur(proj.val[proj.val.length - 1]) + '。';
      MQ.set(el, {
        bar: MQ.stackBar([{ v: eq, c: '#14B37D', l: '股票' }, { v: bo, c: '#5E8BFF', l: '债券' }, { v: ca, c: '#C9C5EE', l: '现金' }]),
        eq: eq + '%', bo: bo + '%', ca: ca + '%', plan: MQ.esc(text), cp: ''
      });
    });
    el.querySelector('[data-copy]').addEventListener('click', () => {
      const note = el.querySelector('[data-r="cp"]');
      const fallback = () => { note.textContent = '请选中上面的文字来复制。'; };
      try { navigator.clipboard.writeText(text).then(() => { note.textContent = '已复制！'; }, fallback); } catch (e) { fallback(); }
    });
  };

  /* ---------------- 哪条路径适合你？ ---------------- */
  W.chooser = (el) => {
    accent(el, 'ci');
    const Q = [
      ['你每周能花多少时间在市场上？', [['大约 1 小时', 0], ['几个小时', 1], ['很多个小时，我想把它当作一门手艺', 2]]],
      ['你希望你的钱做什么？', [['10 年以上稳步增长', 0], ['两者结合', 1], ['用我的技能产生主动的收益', 2]]],
      ['你的账户一个月内下跌了 25%。你……', [['讨厌这种情况，需要平稳缓慢的增长', 0], ['会持有并思考', 1], ['会检查我的规则并继续执行', 2]]],
      ['哪个世界更让你兴奋？', [['公司、基金和传统市场', 'S'], ['加密货币和新技术', 'C']]]
    ];
    const ans = [];
    el.innerHTML = `<h4 class="wt">哪条路径适合你？</h4><div class="cards">${Q.map((q, i) => `<div class="fld"><label>${i + 1}. ${q[0]}</label><div class="seg" data-q="${i}">${q[1].map((o, j) => `<button type="button" data-j="${j}">${o[0]}</button>`).join('')}</div></div>`).join('')}</div><div data-r="res"></div>`;
    el.addEventListener('click', (e) => {
      const b = e.target.closest('[data-j]'); if (!b) return;
      const seg = b.parentNode, qi = parseInt(seg.dataset.q, 10);
      seg.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on');
      ans[qi] = Q[qi][1][parseInt(b.dataset.j, 10)][1];
      if (ans.filter((x) => x !== undefined).length < 4) return;
      const score = ans[0] + ans[1] + ans[2], trader = score >= 4, crypto = ans[3] === 'C';
      const k = trader ? (crypto ? 'ct' : 'trd') : (crypto ? 'ci' : 'inv');
      const T = MQ.tracks[k];
      el.querySelector('[data-r="res"]').innerHTML = `<div class="msg"><p><b>推荐路径：${T.name}。</b></p><p>${trader ? '你的回答显示你偏向主动的风格。很好，但请先打好基础并掌握投资者的技能。大多数成功的交易者也保留一个长期投资的核心。' : '你的回答显示你偏向平静的长期风格。这是适合大多数人的路径。'}</p>
      <div class="btnrow"><a class="btn sm" href="#track-found">从基础课程开始</a><a class="btn sm alt" href="#track-${k}">打开 ${T.name}</a></div></div>`;
    });
  };
})();
