/* Widgets for the crypto paths and generic helpers (checklists) */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- scam spotter ---------------- */
  W.scam = (el) => {
    accent(el, 'ci');
    const Q = [
      ['A "support agent" messages you on Telegram: "We detected a problem with your wallet. Send your 12-word recovery phrase so we can fix it."', true, 'Nobody legitimate will ever ask for your recovery phrase. Anyone who has it controls your coins. Support never DMs first.'],
      ['You store your 24-word recovery phrase on paper in two separate secure places. It is never photographed or typed into any device.', false, 'This is the standard safe practice. Offline copies in separate places protect you from fire, theft and hackers.'],
      ['A famous founder tweets: "Send 0.5 ETH to this address and get 1 ETH back. Limited giveaway, first 1,000 people!"', true, 'Giveaway scams often use hacked or fake accounts. Real giveaways never ask you to send crypto first.'],
      ['You enable authenticator-app two-factor authentication and the withdrawal-address whitelist on your exchange account.', false, 'App-based 2FA (not SMS) and whitelisted withdrawal addresses make account takeovers much harder.'],
      ['A new token launched 10 minutes ago. The developers hold 80% of the supply, liquidity is not locked, and the Telegram group says "going to 100x". You put in €500.', true, 'Concentrated supply plus unlocked liquidity is the classic rug-pull setup. Hype is not research.'],
      ['A friendly stranger from a dating app teaches you to invest on a "private platform" that shows huge profits. To withdraw, you must first deposit more.', true, 'This is a "pig-butchering" scam: a fake relationship plus a fake trading site. The profits shown on screen are not real.'],
      ['You buy a hardware wallet from a random marketplace seller because it is 40% cheaper than the official store.', true, 'Hardware wallets should only be bought from the manufacturer or an authorised reseller. A tampered device can steal your funds.'],
      ['You buy Bitcoin on a regulated exchange, send a small test amount to your own hardware wallet, check it arrived, then send the rest.', false, 'A small test transaction first is a smart habit. Always double-check the address before sending the full amount.'],
      ['A site found through a sponsored search ad asks you to "Connect wallet" and approve unlimited spending of your tokens to claim a free airdrop.', true, 'Unlimited approvals to unknown contracts are how wallet drainers empty accounts. Ads can be fake too: type known URLs yourself.']
    ];
    let i = 0, score = 0, answered = false;
    const draw = () => {
      if (i >= Q.length) {
        el.innerHTML = `<h4 class="wt">Safe or scam?</h4><div class="stats">${MQ.stat('s', 'Your score', 'hi')}</div><div class="msg"><p>${score >= 8 ? 'Excellent instincts. Keep checking everything twice.' : score >= 6 ? 'Good, but scammers only need one mistake. Re-read the ones you missed.' : 'This is exactly why you practise here instead of with real money. Go through the cases again.'}</p><div class="btnrow"><button class="btn sm" type="button" data-act="again">Play again</button></div></div>`;
        MQ.set(el, { s: score + ' / ' + Q.length }); return;
      }
      el.innerHTML = `<h4 class="wt">Safe or scam? Case ${i + 1} of ${Q.length}</h4><div class="news">${MQ.esc(Q[i][0])}</div>
      <div class="btnrow"><button class="btn sm alt" type="button" data-a="safe">Safe move</button><button class="btn sm alt" type="button" data-a="risk">Risky or scam</button></div><div data-r="fb"></div>`;
      answered = false;
    };
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-act="again"]')) { i = 0; score = 0; draw(); return; }
      if (e.target.closest('[data-act="next"]')) { i++; draw(); return; }
      const b = e.target.closest('[data-a]'); if (!b || answered) return;
      answered = true;
      const ok = (b.dataset.a === 'risk') === Q[i][1]; if (ok) score++;
      el.querySelector('[data-r="fb"]').innerHTML = `<div class="msg"><p><b>${ok ? 'Correct.' : 'Not quite.'}</b> This one is ${Q[i][1] ? 'a scam or very risky' : 'a safe habit'}. ${Q[i][2]}</p><button class="btn sm" type="button" data-act="next">${i + 1 < Q.length ? 'Next case' : 'See my score'}</button></div>`;
    });
    draw();
  };

  /* ---------------- leverage and liquidation ---------------- */
  W.liq = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Leverage and liquidation calculator</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('margin', 'Your own money in the trade (margin, €)', 500, 1, 10000000, 50)}
      ${MQ.slider('lev', 'Leverage', 1, 100, 1, 10, 'x')}
      ${MQ.select('dir', 'Direction', [['long', 'Long (you profit if price rises)'], ['short', 'Short (you profit if price falls)']], 'long')}
      ${MQ.number('entry', 'Entry price', 100, 0.0001, 100000000, 1)}
      ${MQ.slider('vol', 'Typical daily move of this asset', 1, 12, 0.5, 3, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('size', 'Position size')}${MQ.stat('liq', 'Liquidation price', 'bad')}${MQ.stat('dist', 'Distance to liquidation', 'hi')}${MQ.stat('x', 'That is … typical days')}${MQ.stat('p1', 'A 1% move changes your money by')}</div>
      <div class="chart" data-c="1"></div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <div data-r="tbl"></div>
    <p class="note">Simplified isolated-margin model with a 0.5% maintenance margin and no fees or funding. Every exchange has its own exact formula, so always check the liquidation price shown on the platform.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const mm = 0.005, L = v.lev, long = v.dir === 'long';
      const liq = long ? v.entry * (1 - 1 / L + mm) : v.entry * (1 + 1 / L - mm), dist = Math.abs(liq - v.entry) / v.entry * 100;
      const days = dist / v.vol;
      let rows = '';
      [1, 2, 3, 5, 10, 20, 50, 100].forEach((l) => { const d = Math.max(0, (1 / l - mm) * 100); rows += `<tr><th scope="row">${l}×</th><td>${d.toFixed(1)}%</td><td>${(d / v.vol).toFixed(1)}</td></tr>`; });
      MQ.set(el, {
        size: MQ.eur(v.margin * L), liq: liq > 100 ? MQ.num(liq, 2) : MQ.num(liq, 4), dist: dist.toFixed(1) + '% ' + (long ? 'down' : 'up'), x: days.toFixed(1) + '×', p1: L + '%',
        txt: days < 1 ? 'Danger: liquidation is closer than one normal day of movement. Ordinary noise, not a crash, can wipe out this trade.' : days < 2 ? 'Very risky: a slightly bigger than usual move liquidates you. Many traders get stopped out by wicks long before the "real" move.' : days < 4 ? 'Still aggressive. Your stop-loss should be much closer than the liquidation price, and you must accept losing the margin.' : 'More breathing room, but leverage still multiplies every loss and every funding fee. Always place a stop well before liquidation.',
        tbl: '<div class="tbl"><table><thead><tr><th>Leverage</th><th>Price move that liquidates you</th><th>In typical days</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      const range = Math.max(dist * 1.35, v.vol * 2.2, 5);
      MQ.draw(ch, (w) => {
        const h = 120, pl = 18, pr = 18, X = (m) => pl + (m + range) / (2 * range) * (w - pl - pr), ym = 62;
        const lm = long ? -dist : dist;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Distance from entry to liquidation compared with a typical daily move">
          <rect x="${X(-v.vol).toFixed(1)}" y="${ym - 20}" width="${(X(v.vol) - X(-v.vol)).toFixed(1)}" height="40" rx="8" style="fill:var(--ct)" fill-opacity=".35"/>
          <line x1="${pl}" x2="${w - pr}" y1="${ym}" y2="${ym}" style="stroke:var(--ink)" stroke-width="2"/>
          <line x1="${X(0).toFixed(1)}" x2="${X(0).toFixed(1)}" y1="${ym - 26}" y2="${ym + 26}" style="stroke:var(--ink)" stroke-width="3"/>
          <line x1="${X(lm).toFixed(1)}" x2="${X(lm).toFixed(1)}" y1="${ym - 34}" y2="${ym + 34}" style="stroke:var(--bad)" stroke-width="4"/>
          <text class="lbl" x="${X(0).toFixed(1)}" y="${ym - 34}" text-anchor="middle">Entry</text>
          <text class="lbl" x="${Math.min(w - pr - 10, Math.max(pl + 10, X(lm))).toFixed(1)}" y="${ym + 52}" text-anchor="middle" style="fill:var(--bad)">Liquidated</text>
          <text class="ax" x="${X(0).toFixed(1)}" y="${ym + 52}" text-anchor="middle">typical daily range is the yellow zone</text></svg>`;
      });
    });
  };

  /* ---------------- funding rate cost ---------------- */
  W.funding = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">What does funding cost you?</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('size', 'Position value (€)', 5000, 1, 100000000, 100)}
      ${MQ.slider('rate', 'Funding rate per payment', -0.1, 0.3, 0.005, 0.01, 'pct')}
      ${MQ.select('per', 'Payments per day', [['3', 'Every 8 hours (3 per day)'], ['6', 'Every 4 hours (6 per day)'], ['24', 'Every hour (24 per day)']], '3')}
      ${MQ.select('side', 'Your side', [['long', 'Long'], ['short', 'Short']], 'long')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pay', 'Per payment')}${MQ.stat('day', 'Per day')}${MQ.stat('mon', 'Per 30 days', 'hi')}${MQ.stat('ann', 'Per year, as % of position')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Perpetual futures have no expiry, so exchanges use funding payments between longs and shorts to keep the contract price close to the spot price. The rate changes constantly and the interval differs between exchanges.</p>`;
    MQ.bind(el, (v) => {
      const per = parseInt(v.per, 10), long = v.side === 'long', sign = long ? -1 : 1;
      const pay = v.size * v.rate / 100 * sign, day = pay * per;
      MQ.set(el, { pay: MQ.eur(pay, 2), day: MQ.eur(day, 2), mon: MQ.eur(day * 30, 2), ann: (day * 365 / v.size * 100).toFixed(1) + '%',
        txt: v.rate === 0 ? 'A zero rate means no payments.' : (v.rate > 0 ? (long ? 'Positive rate: longs pay shorts. You are paying to hold this position. Crowded long trades are expensive to hold.' : 'Positive rate: longs pay shorts. You are being paid to hold this short, but the crowd is leaning long, which can also mean a squeeze risk.') : (long ? 'Negative rate: shorts pay longs. You are being paid to hold this long.' : 'Negative rate: shorts pay longs. You are paying to hold this short.')) });
      MQ.cls(el, 'mon', day * 30 < 0 ? 'bad' : 'good');
    });
  };

  /* ---------------- tokenomics: market cap vs FDV ---------------- */
  W.supply = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Market cap vs. fully diluted value</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets><button type="button" data-p="800,1000,5">Healthy float</button><button type="button" data-p="100,1000,15">Low float, big unlocks</button></div>
      ${MQ.number('price', 'Token price (€)', 2, 0, 100000000, 0.01)}
      ${MQ.number('circ', 'Circulating supply (millions)', 100, 0, 1000000, 1)}
      ${MQ.number('total', 'Total or max supply (millions)', 1000, 0, 1000000, 1)}
      ${MQ.slider('unl', 'Share of total supply unlocking in the next 12 months', 0, 50, 1, 15, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('mc', 'Market cap (circulating)')}${MQ.stat('fdv', 'Fully diluted value (FDV)', 'hi')}${MQ.stat('ratio', 'Share already circulating')}${MQ.stat('dil', 'Supply added in 12 months', 'bad')}${MQ.stat('need', 'New buying needed to keep the price flat', 'bad')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Market cap = price × circulating supply. FDV = price × total supply. A big gap means many tokens still to be released, which usually creates selling pressure.</p>`;
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      const p = b.dataset.p.split(',');
      el.querySelector('[data-k="circ"]').value = p[0]; el.querySelector('[data-k="total"]').value = p[1]; el.querySelector('[data-k="unl"]').value = p[2];
      MQ.setVal(el, 'price', el.querySelector('[data-k="price"]').value);
    }));
    MQ.bind(el, (v) => {
      const mc = v.price * v.circ * 1e6, fdv = v.price * v.total * 1e6, ratio = v.total ? v.circ / v.total * 100 : 0, add = v.total * v.unl / 100, dil = v.circ ? add / v.circ * 100 : 0;
      const f = (n) => n >= 1e9 ? '€' + (n / 1e9).toFixed(2) + 'B' : n >= 1e6 ? '€' + (n / 1e6).toFixed(1) + 'M' : MQ.eur(n);
      MQ.set(el, { mc: f(mc), fdv: f(fdv), ratio: ratio.toFixed(0) + '%', dil: '+' + dil.toFixed(0) + '%', need: f(add * 1e6 * v.price),
        txt: ratio < 30 ? 'Low float: only ' + ratio.toFixed(0) + '% of tokens circulate. Early insiders and investors may unlock large amounts later. The headline market cap understates the true valuation.' : ratio < 70 ? 'Medium float. Check the unlock schedule: who receives the new tokens and when can they sell?' : 'Most supply already circulates, so future dilution is limited. Valuation is easier to judge.' });
    });
  };

  /* ---------------- how much crypto? ---------------- */
  W.cryptosize = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">How much is too much? The 80% drop test</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('nw', 'Your total investable wealth (€)', 20000, 0, 1000000000, 1000)}
      ${MQ.slider('pc', 'Share you put in crypto', 0, 60, 1, 5, 'pct')}
      ${MQ.slider('drop', 'Crypto falls by', 10, 95, 1, 80, 'pct')}
      ${MQ.number('sav', 'You save per month (€)', 400, 0, 1000000, 50)}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('val', 'Crypto today')}${MQ.stat('loss', 'You lose', 'bad')}${MQ.stat('imp', 'Hit to your total wealth', 'hi')}${MQ.stat('rec', 'Months of saving to refill it')}${MQ.stat('gain', 'Rise needed to get back to even')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Bitcoin has fallen 70 to 85% from its peak several times, and smaller coins often fall more. The right amount is the one that lets you sleep and keep your plan after such a fall.</p>`;
    MQ.bind(el, (v) => {
      const val = v.nw * v.pc / 100, loss = val * v.drop / 100, imp = v.nw ? loss / v.nw * 100 : 0, gain = v.drop < 100 ? (1 / (1 - v.drop / 100) - 1) * 100 : 0;
      MQ.set(el, { bar: MQ.stackBar([{ v: 100 - v.pc, c: '#14B37D', l: 'Everything else' }, { v: v.pc, c: '#A58FFF', l: 'Crypto' }]) + MQ.legend([['Everything else', '#14B37D'], ['Crypto', '#A58FFF']]),
        val: MQ.eur(val), loss: MQ.eur(loss), imp: '-' + imp.toFixed(1) + '%', rec: v.sav > 0 ? (loss / v.sav).toFixed(1) + ' months' : '–', gain: '+' + MQ.num(gain, 0) + '%',
        txt: imp < 5 ? 'Painful but survivable: a drop like this costs you ' + imp.toFixed(1) + '% of your wealth. Your life plan is intact.' : imp < 20 ? 'This would hurt. Ask yourself honestly whether you would stay calm and keep your plan.' : 'This is a big bet. A crash like this would reshape your finances. Most beginners are safer starting much smaller.' });
    });
  };

  /* ---------------- blockchain tamper test ---------------- */
  W.chain = (el) => {
    accent(el, 'ci');
    const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('00000000' + h.toString(16)).slice(-8); };
    const init = ['Ana pays Ben 2 coins', 'Ben pays Chloe 1 coin', 'Chloe pays Dev 0.5 coins', 'Dev pays Eli 1 coin'];
    const ref = []; init.forEach((t, i) => ref.push(hash((i ? ref[i - 1] : '00000000') + t)));
    el.innerHTML = `<h4 class="wt">Tamper test: try to cheat the chain</h4>
    <div class="cards" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr));display:grid;gap:.8rem">${init.map((t, i) => `<div class="stat" data-b="${i}"><span class="sl">Block ${i + 1}</span>
      <label class="sr" for="chain-${i}">Block ${i + 1} data</label><input type="text" id="chain-${i}" data-i="${i}" value="${t}" maxlength="40">
      <p class="note mono" style="margin:.4rem 0 0">prev: ${i ? ref[i - 1] : '00000000'}</p><p class="note mono" style="margin:0">hash: <span data-h></span></p><p style="margin:.3rem 0 0;font-weight:700;font-size:.88rem" data-s></p></div>`).join('')}</div>
    <div class="btnrow" style="margin-top:.8rem"><button class="btn sm alt" type="button" data-reset>Reset the chain</button></div>
    <p class="note">The hash is a short fingerprint of the block's data plus the previous hash. Real blockchains use much stronger hashes and thousands of independent computers checking each other.</p>`;
    const upd = () => {
      let broken = -1, prev = '00000000';
      MQ.$$('[data-b]', el).forEach((b, i) => {
        const txt = b.querySelector('input').value, cur = hash((i ? ref[i - 1] : '00000000') + txt);
        if (broken < 0 && cur !== ref[i]) broken = i;
        b.querySelector('[data-h]').textContent = cur;
        const s = b.querySelector('[data-s]');
        if (broken < 0) { s.textContent = 'Valid'; s.style.color = 'var(--good)'; }
        else if (i === broken) { s.textContent = 'Data changed: hash differs'; s.style.color = 'var(--bad)'; }
        else { s.textContent = 'Broken: previous hash no longer matches'; s.style.color = 'var(--bad)'; }
        prev = cur;
      });
    };
    el.addEventListener('input', upd);
    el.querySelector('[data-reset]').addEventListener('click', () => { MQ.$$('input', el).forEach((inp, i) => { inp.value = init[i]; }); upd(); });
    upd();
  };

  /* ---------------- generic checklist ---------------- */
  W.checklist = (el, d) => {
    accent(el, d.accent || 'found');
    const items = (d.items || '').split('|').filter(Boolean), key = 'cl-' + (d.key || 'x');
    let st = MQ.store.get(key, []); if (!Array.isArray(st)) st = [];
    const render = () => {
      const n = items.filter((x, i) => st[i]).length;
      el.innerHTML = `<h4 class="wt">${d.title || 'Checklist'}</h4><div class="pbar" style="margin-bottom:.6rem"><i style="width:${items.length ? n / items.length * 100 : 0}%"></i></div><p class="note" style="margin:0 0 .4rem">${n} of ${items.length} done</p>` +
        items.map((t, i) => `<label class="cb"><input type="checkbox" data-i="${i}" ${st[i] ? 'checked' : ''}><span>${t}</span></label>`).join('');
    };
    el.addEventListener('change', (e) => {
      const i = e.target.dataset.i; if (i == null) return;
      st[i] = e.target.checked; MQ.store.set(key, st);
      const n = items.filter((x, k) => st[k]).length;
      el.querySelector('.pbar i').style.width = (n / items.length * 100) + '%'; el.querySelector('.note').textContent = n + ' of ' + items.length + ' done';
    });
    render();
  };
})();
