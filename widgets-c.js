/* 加密货币路径的互动工具与通用辅助组件（清单） */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- 诈骗识别器 ---------------- */
  W.scam = (el) => {
    accent(el, 'ci');
    const Q = [
      ['一位“客服”在 Telegram 上给你发消息：“我们检测到你的钱包有问题。请发送你的 12 个单词助记词，我们帮你修复。”', true, '任何正规服务都不会向你索要助记词。拿到它的人就能控制你的币。客服绝不会主动私信你。'],
      ['你把 24 个单词的助记词抄在纸上，存放在两个安全且分开的地方。它从不被拍照，也从不输入任何设备。', false, '这是标准的安全做法。分开存放的离线备份可以防火灾、防盗窃、防黑客。'],
      ['一位著名创始人发推：“向这个地址发送 0.5 ETH，立刻返还 1 ETH。限量抽奖，前 1000 名！”', true, '抽奖诈骗常用被盗或伪造的账号。真正的抽奖绝不会要求你先转币。'],
      ['你在交易所账户上启用了验证器应用的双重验证和提现地址白名单。', false, '应用式双重验证（不是短信）加上白名单提现地址，让账户被盗难得多。'],
      ['一个新代币 10 分钟前刚上线。开发者持有 80% 的供应量，流动性没有锁定，Telegram 群里说“要涨 100 倍”。你投入 500 €。', true, '供应量高度集中加上流动性未锁定，是典型的“拉地毯”（rug pull）套路。炒作不等于研究。'],
      ['交友软件上一位友善的陌生人教你在一个“私人平台”投资，平台显示盈利巨大。提现前你必须先再充值。', true, '这是“杀猪盘”诈骗：虚假感情加虚假交易网站。屏幕上显示的利润并不真实。'],
      ['你从某个市集的随机卖家那里买了一个硬件钱包，因为它比官方商店便宜 40%。', true, '硬件钱包只能向厂商或授权经销商购买。被动过手脚的设备可能盗走你的资金。'],
      ['你在受监管的交易所买入比特币，先向自己的硬件钱包转一小笔测试金额，确认到账后再转其余部分。', false, '先转一笔小额测试是聪明的习惯。发送全部金额之前，务必再核对一遍地址。'],
      ['你通过赞助搜索广告找到的网站要求你“连接钱包”，并授权无限额度花费你的代币，才能领取免费空投。', true, '对未知合约的无限授权，正是“钱包清空者”掏空账户的方式。广告也可能是假的：请自己输入已知的网址。']
    ];
    let i = 0, score = 0, answered = false;
    const draw = () => {
      if (i >= Q.length) {
        el.innerHTML = `<h4 class="wt">安全还是诈骗？</h4><div class="stats">${MQ.stat('s', '你的得分', 'hi')}</div><div class="msg"><p>${score >= 8 ? '直觉很棒。继续把一切都检查两遍。' : score >= 6 ? '不错，但骗子只需要你犯一次错。重读你答错的那些。' : '这正是你在这里练习、而不是用真钱练习的原因。把这些案例再过一遍。'}</p><div class="btnrow"><button class="btn sm" type="button" data-act="again">再玩一次</button></div></div>`;
        MQ.set(el, { s: score + ' / ' + Q.length }); return;
      }
      el.innerHTML = `<h4 class="wt">安全还是诈骗？第 ${i + 1} 题，共 ${Q.length} 题</h4><div class="news">${MQ.esc(Q[i][0])}</div>
      <div class="btnrow"><button class="btn sm alt" type="button" data-a="safe">安全的做法</button><button class="btn sm alt" type="button" data-a="risk">有风险或是诈骗</button></div><div data-r="fb"></div>`;
      answered = false;
    };
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-act="again"]')) { i = 0; score = 0; draw(); return; }
      if (e.target.closest('[data-act="next"]')) { i++; draw(); return; }
      const b = e.target.closest('[data-a]'); if (!b || answered) return;
      answered = true;
      const ok = (b.dataset.a === 'risk') === Q[i][1]; if (ok) score++;
      el.querySelector('[data-r="fb"]').innerHTML = `<div class="msg"><p><b>${ok ? '正确。' : '不完全对。'}</b> 这个案例属于${Q[i][1] ? '诈骗或风险极高' : '安全的习惯'}。${Q[i][2]}</p><button class="btn sm" type="button" data-act="next">${i + 1 < Q.length ? '下一题' : '查看我的得分'}</button></div>`;
    });
    draw();
  };

  /* ---------------- 杠杆与强平 ---------------- */
  W.liq = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">杠杆与强平计算器</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('margin', '你投入这笔交易的自有资金（保证金，€）', 500, 1, 10000000, 50)}
      ${MQ.slider('lev', '杠杆', 1, 100, 1, 10, 'x')}
      ${MQ.select('dir', '方向', [['long', '做多（价格上涨你盈利）'], ['short', '做空（价格下跌你盈利）']], 'long')}
      ${MQ.number('entry', '入场价', 100, 0.0001, 100000000, 1)}
      ${MQ.slider('vol', '该资产的典型日波动', 1, 12, 0.5, 3, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('size', '仓位规模')}${MQ.stat('liq', '强平价', 'bad')}${MQ.stat('dist', '距强平的距离', 'hi')}${MQ.stat('x', '相当于……个典型日')}${MQ.stat('p1', '价格变动 1% 会让你的本金变动')}</div>
      <div class="chart" data-c="1"></div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <div data-r="tbl"></div>
    <p class="note">简化的逐仓保证金模型：维持保证金率 0.5%，不含手续费和资金费率。每家交易所都有自己的精确公式，所以请始终以平台显示的强平价为准。</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const mm = 0.005, L = v.lev, long = v.dir === 'long';
      const liq = long ? v.entry * (1 - 1 / L + mm) : v.entry * (1 + 1 / L - mm), dist = Math.abs(liq - v.entry) / v.entry * 100;
      const days = dist / v.vol;
      let rows = '';
      [1, 2, 3, 5, 10, 20, 50, 100].forEach((l) => { const d = Math.max(0, (1 / l - mm) * 100); rows += `<tr><th scope="row">${l}×</th><td>${MQ.num(d, 1)}%</td><td>${MQ.num(d / v.vol, 1)}</td></tr>`; });
      MQ.set(el, {
        size: MQ.eur(v.margin * L), liq: liq > 100 ? MQ.num(liq, 2) : MQ.num(liq, 4), dist: MQ.num(dist, 1) + '%（' + (long ? '向下' : '向上') + '）', x: MQ.num(days, 1) + '×', p1: L + '%',
        txt: days < 1 ? '危险：强平点比一个正常日的波动还近。普通的市场噪音，而不是崩盘，就能把这笔交易清零。' : days < 2 ? '风险很高：比平时稍大的波动就会让你被强平。很多交易者在“真正的”行情到来之前，就被影线扫掉了。' : days < 4 ? '仍然激进。你的止损应该比强平价近得多，并且你必须接受可能亏掉保证金。' : '有更多缓冲空间，但杠杆仍会放大每一次亏损和每一笔资金费用。务必在强平前很远的地方设置止损。',
        tbl: '<div class="tbl"><table><thead><tr><th>杠杆</th><th>导致你被强平的价格变动</th><th>以典型日计</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      const range = Math.max(dist * 1.35, v.vol * 2.2, 5);
      MQ.draw(ch, (w) => {
        const h = 120, pl = 18, pr = 18, X = (m) => pl + (m + range) / (2 * range) * (w - pl - pr), ym = 62;
        const lm = long ? -dist : dist;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="入场到强平的距离与典型日波动的对比">
          <rect x="${X(-v.vol).toFixed(1)}" y="${ym - 20}" width="${(X(v.vol) - X(-v.vol)).toFixed(1)}" height="40" rx="8" style="fill:var(--ct)" fill-opacity=".35"/>
          <line x1="${pl}" x2="${w - pr}" y1="${ym}" y2="${ym}" style="stroke:var(--ink)" stroke-width="2"/>
          <line x1="${X(0).toFixed(1)}" x2="${X(0).toFixed(1)}" y1="${ym - 26}" y2="${ym + 26}" style="stroke:var(--ink)" stroke-width="3"/>
          <line x1="${X(lm).toFixed(1)}" x2="${X(lm).toFixed(1)}" y1="${ym - 34}" y2="${ym + 34}" style="stroke:var(--bad)" stroke-width="4"/>
          <text class="lbl" x="${X(0).toFixed(1)}" y="${ym - 34}" text-anchor="middle">入场</text>
          <text class="lbl" x="${Math.min(w - pr - 10, Math.max(pl + 10, X(lm))).toFixed(1)}" y="${ym + 52}" text-anchor="middle" style="fill:var(--bad)">被强平</text>
          <text class="ax" x="${X(0).toFixed(1)}" y="${ym + 52}" text-anchor="middle">黄色区域是典型的日波动范围</text></svg>`;
      });
    });
  };

  /* ---------------- 资金费率成本 ---------------- */
  W.funding = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">资金费率要花你多少钱？</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('size', '仓位价值（€）', 5000, 1, 100000000, 100)}
      ${MQ.slider('rate', '每次结算的资金费率', -0.1, 0.3, 0.005, 0.01, 'pct')}
      ${MQ.select('per', '每天结算次数', [['3', '每 8 小时（每天 3 次）'], ['6', '每 4 小时（每天 6 次）'], ['24', '每小时（每天 24 次）']], '3')}
      ${MQ.select('side', '你的方向', [['long', '做多'], ['short', '做空']], 'long')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pay', '每次结算')}${MQ.stat('day', '每天')}${MQ.stat('mon', '每 30 天', 'hi')}${MQ.stat('ann', '每年，占仓位的百分比')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">永续合约没有到期日，所以交易所通过多头与空头之间的资金费率支付，让合约价格贴近现货价格。费率时刻在变，不同交易所的结算间隔也不一样。</p>`;
    MQ.bind(el, (v) => {
      const per = parseInt(v.per, 10), long = v.side === 'long', sign = long ? -1 : 1;
      const pay = v.size * v.rate / 100 * sign, day = pay * per;
      MQ.set(el, { pay: MQ.eur(pay, 2), day: MQ.eur(day, 2), mon: MQ.eur(day * 30, 2), ann: MQ.num(day * 365 / v.size * 100, 1) + '%',
        txt: v.rate === 0 ? '费率为零意味着没有支付。' : (v.rate > 0 ? (long ? '正费率：多头向空头付费。你在为持有这笔仓位付钱。拥挤的多头交易持仓成本很高。' : '正费率：多头向空头付费。你持有空头是有收入的，但市场情绪偏向多头，这也可能意味着有轧空风险。') : (long ? '负费率：空头向多头付费。你持有这笔多头是有收入的。' : '负费率：空头向多头付费。你在为持有这笔空头付钱。')) });
      MQ.cls(el, 'mon', day * 30 < 0 ? 'bad' : 'good');
    });
  };

  /* ---------------- 代币经济学：市值 vs 完全稀释估值 ---------------- */
  W.supply = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">市值 vs. 完全稀释估值</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets><button type="button" data-p="800,1000,5">流通比例健康</button><button type="button" data-p="100,1000,15">流通比例低，解锁量大</button></div>
      ${MQ.number('price', '代币价格（€）', 2, 0, 100000000, 0.01)}
      ${MQ.number('circ', '流通供应量（百万）', 100, 0, 1000000, 1)}
      ${MQ.number('total', '总供应量或最大供应量（百万）', 1000, 0, 1000000, 1)}
      ${MQ.slider('unl', '未来 12 个月内解锁的总供应量占比', 0, 50, 1, 15, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('mc', '市值（流通）')}${MQ.stat('fdv', '完全稀释估值（FDV）', 'hi')}${MQ.stat('ratio', '已在流通的占比')}${MQ.stat('dil', '12 个月内新增供应', 'bad')}${MQ.stat('need', '维持价格不变所需的新增买盘', 'bad')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">市值 = 价格 × 流通供应量。FDV = 价格 × 总供应量。差距很大意味着还有大量代币待释放，通常会带来抛压。</p>`;
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      const p = b.dataset.p.split(',');
      el.querySelector('[data-k="circ"]').value = p[0]; el.querySelector('[data-k="total"]').value = p[1]; el.querySelector('[data-k="unl"]').value = p[2];
      MQ.setVal(el, 'price', el.querySelector('[data-k="price"]').value);
    }));
    MQ.bind(el, (v) => {
      const mc = v.price * v.circ * 1e6, fdv = v.price * v.total * 1e6, ratio = v.total ? v.circ / v.total * 100 : 0, add = v.total * v.unl / 100, dil = v.circ ? add / v.circ * 100 : 0;
      const f = (n) => n >= 1e8 ? MQ.num(n / 1e8, 2) + ' 亿 €' : n >= 1e4 ? MQ.num(n / 1e4, 1) + ' 万 €' : MQ.eur(n);
      MQ.set(el, { mc: f(mc), fdv: f(fdv), ratio: ratio.toFixed(0) + '%', dil: '+' + dil.toFixed(0) + '%', need: f(add * 1e6 * v.price),
        txt: ratio < 30 ? '流通比例低：只有 ' + ratio.toFixed(0) + '% 的代币在流通。内部人士和早期投资者以后可能解锁大量代币。表面上的市值低估了真实估值。' : ratio < 70 ? '流通比例中等。查看解锁时间表：谁会收到新代币，他们什么时候可以卖出？' : '大部分供应已在流通，未来的稀释有限。估值更容易判断。' });
    });
  };

  /* ---------------- 该买多少加密货币？ ---------------- */
  W.cryptosize = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">多少算太多？下跌 80% 测试</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('nw', '你可用于投资的总财富（€）', 20000, 0, 1000000000, 1000)}
      ${MQ.slider('pc', '你投入加密货币的比例', 0, 60, 1, 5, 'pct')}
      ${MQ.slider('drop', '加密货币下跌', 10, 95, 1, 80, 'pct')}
      ${MQ.number('sav', '你每月储蓄（€）', 400, 0, 1000000, 50)}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('val', '加密货币现值')}${MQ.stat('loss', '你的亏损', 'bad')}${MQ.stat('imp', '对总财富的冲击', 'hi')}${MQ.stat('rec', '要存多少个月才能补上')}${MQ.stat('gain', '回本所需的涨幅')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">比特币已多次从高点下跌 70% 到 85%，较小的币往往跌得更多。合适的金额，是在这样的下跌之后你仍能睡得着觉、仍能坚持计划的金额。</p>`;
    MQ.bind(el, (v) => {
      const val = v.nw * v.pc / 100, loss = val * v.drop / 100, imp = v.nw ? loss / v.nw * 100 : 0, gain = v.drop < 100 ? (1 / (1 - v.drop / 100) - 1) * 100 : 0;
      MQ.set(el, { bar: MQ.stackBar([{ v: 100 - v.pc, c: '#14B37D', l: '其余资产' }, { v: v.pc, c: '#A58FFF', l: '加密货币' }]) + MQ.legend([['其余资产', '#14B37D'], ['加密货币', '#A58FFF']]),
        val: MQ.eur(val), loss: MQ.eur(loss), imp: '-' + MQ.num(imp, 1) + '%', rec: v.sav > 0 ? MQ.num(loss / v.sav, 1) + ' 个月' : '–', gain: '+' + MQ.num(gain, 0) + '%',
        txt: imp < 5 ? '痛，但扛得住：这样的下跌会让你损失 ' + MQ.num(imp, 1) + '% 的财富。你的人生规划不受影响。' : imp < 20 ? '这会很痛。诚实地问问自己，你是否还能保持冷静并坚持计划。' : '这是一笔很大的赌注。这样的崩盘会重塑你的财务状况。大多数新手从小得多的金额开始会更安全。' });
    });
  };

  /* ---------------- 区块链篡改测试 ---------------- */
  W.chain = (el) => {
    accent(el, 'ci');
    const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('00000000' + h.toString(16)).slice(-8); };
    const init = ['小安付给小本 2 个币', '小本付给小晨 1 个币', '小晨付给小德 0.5 个币', '小德付给小艾 1 个币'];
    const ref = []; init.forEach((t, i) => ref.push(hash((i ? ref[i - 1] : '00000000') + t)));
    el.innerHTML = `<h4 class="wt">篡改测试：试着骗过这条链</h4>
    <div class="cards" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr));display:grid;gap:.8rem">${init.map((t, i) => `<div class="stat" data-b="${i}"><span class="sl">区块 ${i + 1}</span>
      <label class="sr" for="chain-${i}">区块 ${i + 1} 的数据</label><input type="text" id="chain-${i}" data-i="${i}" value="${t}" maxlength="40">
      <p class="note mono" style="margin:.4rem 0 0">上一个：${i ? ref[i - 1] : '00000000'}</p><p class="note mono" style="margin:0">哈希：<span data-h></span></p><p style="margin:.3rem 0 0;font-weight:700;font-size:.88rem" data-s></p></div>`).join('')}</div>
    <div class="btnrow" style="margin-top:.8rem"><button class="btn sm alt" type="button" data-reset>重置区块链</button></div>
    <p class="note">哈希是区块数据加上前一个哈希生成的简短指纹。真正的区块链使用强得多的哈希，并有成千上万台相互独立的计算机彼此校验。</p>`;
    const upd = () => {
      let broken = -1, prev = '00000000';
      MQ.$$('[data-b]', el).forEach((b, i) => {
        const txt = b.querySelector('input').value, cur = hash((i ? ref[i - 1] : '00000000') + txt);
        if (broken < 0 && cur !== ref[i]) broken = i;
        b.querySelector('[data-h]').textContent = cur;
        const s = b.querySelector('[data-s]');
        if (broken < 0) { s.textContent = '有效'; s.style.color = 'var(--good)'; }
        else if (i === broken) { s.textContent = '数据已改动：哈希不同'; s.style.color = 'var(--bad)'; }
        else { s.textContent = '已断裂：前一个哈希不再匹配'; s.style.color = 'var(--bad)'; }
        prev = cur;
      });
    };
    el.addEventListener('input', upd);
    el.querySelector('[data-reset]').addEventListener('click', () => { MQ.$$('input', el).forEach((inp, i) => { inp.value = init[i]; }); upd(); });
    upd();
  };

  /* ---------------- 通用清单 ---------------- */
  W.checklist = (el, d) => {
    accent(el, d.accent || 'found');
    const items = (d.items || '').split('|').filter(Boolean), key = 'cl-' + (d.key || 'x');
    let st = MQ.store.get(key, []); if (!Array.isArray(st)) st = [];
    const render = () => {
      const n = items.filter((x, i) => st[i]).length;
      el.innerHTML = `<h4 class="wt">${d.title || '清单'}</h4><div class="pbar" style="margin-bottom:.6rem"><i style="width:${items.length ? n / items.length * 100 : 0}%"></i></div><p class="note" style="margin:0 0 .4rem">已完成 ${n} / ${items.length}</p>` +
        items.map((t, i) => `<label class="cb"><input type="checkbox" data-i="${i}" ${st[i] ? 'checked' : ''}><span>${t}</span></label>`).join('');
    };
    el.addEventListener('change', (e) => {
      const i = e.target.dataset.i; if (i == null) return;
      st[i] = e.target.checked; MQ.store.set(key, st);
      const n = items.filter((x, k) => st[k]).length;
      el.querySelector('.pbar i').style.width = (n / items.length * 100) + '%'; el.querySelector('.note').textContent = '已完成 ' + n + ' / ' + items.length;
    });
    render();
  };
})();
