/* Widgets für die Krypto-Pfade und allgemeine Helfer (Checklisten) */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- Betrugs-Detektor ---------------- */
  W.scam = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Ein „Support-Mitarbeiter“ schreibt dich auf Telegram an: „Wir haben ein Problem mit deiner Wallet festgestellt. Schick uns deine 12-Wörter-Wiederherstellungsphrase, damit wir es beheben.“', true, 'Kein seriöser Anbieter wird je nach deiner Wiederherstellungsphrase fragen. Wer sie hat, kontrolliert deine Coins. Der Support schreibt dich nie zuerst privat an.'],
      ['Du bewahrst deine 24-Wörter-Wiederherstellungsphrase auf Papier an zwei getrennten, sicheren Orten auf. Sie wird nie fotografiert oder in ein Gerät getippt.', false, 'Das ist die übliche sichere Praxis. Offline-Kopien an getrennten Orten schützen vor Feuer, Diebstahl und Hackern.'],
      ['Ein berühmter Gründer twittert: „Schick 0,5 ETH an diese Adresse und erhalte 1 ETH zurück. Begrenztes Giveaway, die ersten 1.000!“', true, 'Giveaway-Betrug nutzt oft gehackte oder gefälschte Konten. Echte Giveaways verlangen nie, dass du zuerst Krypto schickst.'],
      ['Du aktivierst Zwei-Faktor-Authentifizierung per Authenticator-App und die Whitelist für Auszahlungsadressen in deinem Börsenkonto.', false, '2FA per App (nicht per SMS) und Auszahlungsadressen auf der Whitelist erschweren Kontoübernahmen erheblich.'],
      ['Ein neuer Token wurde vor 10 Minuten gestartet. Die Entwickler halten 80 % des Angebots, die Liquidität ist nicht gesperrt, und die Telegram-Gruppe sagt „geht auf 100x“. Du steckst 500 € rein.', true, 'Konzentriertes Angebot plus ungesperrte Liquidität ist das klassische Rug-Pull-Muster. Hype ist keine Recherche.'],
      ['Ein netter Fremder aus einer Dating-App bringt dir bei, auf einer „privaten Plattform“ zu investieren, die riesige Gewinne anzeigt. Zum Auszahlen musst du erst mehr einzahlen.', true, 'Das ist ein „Pig-Butchering“-Betrug: eine falsche Beziehung plus eine falsche Trading-Seite. Die angezeigten Gewinne sind nicht echt.'],
      ['Du kaufst eine Hardware-Wallet bei einem zufälligen Marktplatz-Verkäufer, weil sie 40 % günstiger ist als im offiziellen Shop.', true, 'Hardware-Wallets kauft man nur beim Hersteller oder einem autorisierten Händler. Ein manipuliertes Gerät kann dein Geld stehlen.'],
      ['Du kaufst Bitcoin an einer regulierten Börse, schickst einen kleinen Testbetrag an deine Hardware-Wallet, prüfst, ob er angekommen ist, und sendest dann den Rest.', false, 'Zuerst eine kleine Testtransaktion ist eine kluge Gewohnheit. Prüfe die Adresse immer doppelt, bevor du den vollen Betrag sendest.'],
      ['Eine Seite aus einer gesponserten Suchanzeige fordert dich auf, „Wallet zu verbinden“ und unbegrenzte Ausgaben deiner Token zu genehmigen, um einen kostenlosen Airdrop zu erhalten.', true, 'Unbegrenzte Genehmigungen für unbekannte Verträge sind der Weg, wie Wallet-Drainer Konten leeren. Auch Anzeigen können gefälscht sein: Tippe bekannte Adressen selbst ein.']
    ];
    let i = 0, score = 0, answered = false;
    const draw = () => {
      if (i >= Q.length) {
        el.innerHTML = `<h4 class="wt">Sicher oder Betrug?</h4><div class="stats">${MQ.stat('s', 'Dein Ergebnis', 'hi')}</div><div class="msg"><p>${score >= 8 ? 'Hervorragender Instinkt. Prüfe weiterhin alles zweimal.' : score >= 6 ? 'Gut, aber Betrügern genügt ein einziger Fehler. Lies die verfehlten Fälle noch einmal.' : 'Genau deshalb übst du hier und nicht mit echtem Geld. Geh die Fälle noch einmal durch.'}</p><div class="btnrow"><button class="btn sm" type="button" data-act="again">Nochmal spielen</button></div></div>`;
        MQ.set(el, { s: score + ' / ' + Q.length }); return;
      }
      el.innerHTML = `<h4 class="wt">Sicher oder Betrug? Fall ${i + 1} von ${Q.length}</h4><div class="news">${MQ.esc(Q[i][0])}</div>
      <div class="btnrow"><button class="btn sm alt" type="button" data-a="safe">Sicherer Schritt</button><button class="btn sm alt" type="button" data-a="risk">Riskant oder Betrug</button></div><div data-r="fb"></div>`;
      answered = false;
    };
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-act="again"]')) { i = 0; score = 0; draw(); return; }
      if (e.target.closest('[data-act="next"]')) { i++; draw(); return; }
      const b = e.target.closest('[data-a]'); if (!b || answered) return;
      answered = true;
      const ok = (b.dataset.a === 'risk') === Q[i][1]; if (ok) score++;
      el.querySelector('[data-r="fb"]').innerHTML = `<div class="msg"><p><b>${ok ? 'Richtig.' : 'Nicht ganz.'}</b> Dieser Fall ist ${Q[i][1] ? 'Betrug oder sehr riskant' : 'eine sichere Gewohnheit'}. ${Q[i][2]}</p><button class="btn sm" type="button" data-act="next">${i + 1 < Q.length ? 'Nächster Fall' : 'Mein Ergebnis ansehen'}</button></div>`;
    });
    draw();
  };

  /* ---------------- Hebel und Liquidation ---------------- */
  W.liq = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Hebel- und Liquidationsrechner</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('margin', 'Dein eigenes Geld im Trade (Margin, €)', 500, 1, 10000000, 50)}
      ${MQ.slider('lev', 'Hebel', 1, 100, 1, 10, 'x')}
      ${MQ.select('dir', 'Richtung', [['long', 'Long (du gewinnst, wenn der Preis steigt)'], ['short', 'Short (du gewinnst, wenn der Preis fällt)']], 'long')}
      ${MQ.number('entry', 'Einstiegskurs', 100, 0.0001, 100000000, 1)}
      ${MQ.slider('vol', 'Typische Tagesbewegung dieses Assets', 1, 12, 0.5, 3, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('size', 'Positionsgröße')}${MQ.stat('liq', 'Liquidationspreis', 'bad')}${MQ.stat('dist', 'Abstand zur Liquidation', 'hi')}${MQ.stat('x', 'Das entspricht … typischen Tagen')}${MQ.stat('p1', 'Eine 1-%-Bewegung verändert dein Geld um')}</div>
      <div class="chart" data-c="1"></div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <div data-r="tbl"></div>
    <p class="note">Vereinfachtes Isolated-Margin-Modell mit 0,5 % Maintenance Margin und ohne Gebühren oder Funding. Jede Börse hat ihre eigene exakte Formel, prüfe also immer den auf der Plattform angezeigten Liquidationspreis.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const mm = 0.005, L = v.lev, long = v.dir === 'long';
      const liq = long ? v.entry * (1 - 1 / L + mm) : v.entry * (1 + 1 / L - mm), dist = Math.abs(liq - v.entry) / v.entry * 100;
      const days = dist / v.vol;
      let rows = '';
      [1, 2, 3, 5, 10, 20, 50, 100].forEach((l) => { const d = Math.max(0, (1 / l - mm) * 100); rows += `<tr><th scope="row">${l}×</th><td>${MQ.num(d, 1)} %</td><td>${MQ.num(d / v.vol, 1)}</td></tr>`; });
      MQ.set(el, {
        size: MQ.eur(v.margin * L), liq: liq > 100 ? MQ.num(liq, 2) : MQ.num(liq, 4), dist: MQ.num(dist, 1) + ' % ' + (long ? 'nach unten' : 'nach oben'), x: MQ.num(days, 1) + '×', p1: L + ' %',
        txt: days < 1 ? 'Gefahr: Die Liquidation liegt näher als eine normale Tagesbewegung. Gewöhnliches Marktrauschen, kein Crash, kann diesen Trade auslöschen.' : days < 2 ? 'Sehr riskant: Eine etwas größere Bewegung als üblich liquidiert dich. Viele Trader werden von Dochten ausgestoppt, lange bevor die „echte“ Bewegung kommt.' : days < 4 ? 'Immer noch aggressiv. Dein Stop-Loss sollte deutlich näher liegen als der Liquidationspreis, und du musst akzeptieren, die Margin zu verlieren.' : 'Mehr Luft, aber der Hebel vervielfacht weiterhin jeden Verlust und jede Funding-Gebühr. Setze immer einen Stop deutlich vor der Liquidation.',
        tbl: '<div class="tbl"><table><thead><tr><th>Hebel</th><th>Kursbewegung, die dich liquidiert</th><th>In typischen Tagen</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      const range = Math.max(dist * 1.35, v.vol * 2.2, 5);
      MQ.draw(ch, (w) => {
        const h = 120, pl = 18, pr = 18, X = (m) => pl + (m + range) / (2 * range) * (w - pl - pr), ym = 62;
        const lm = long ? -dist : dist;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Abstand vom Einstieg zur Liquidation im Vergleich zu einer typischen Tagesbewegung">
          <rect x="${X(-v.vol).toFixed(1)}" y="${ym - 20}" width="${(X(v.vol) - X(-v.vol)).toFixed(1)}" height="40" rx="8" style="fill:var(--ct)" fill-opacity=".35"/>
          <line x1="${pl}" x2="${w - pr}" y1="${ym}" y2="${ym}" style="stroke:var(--ink)" stroke-width="2"/>
          <line x1="${X(0).toFixed(1)}" x2="${X(0).toFixed(1)}" y1="${ym - 26}" y2="${ym + 26}" style="stroke:var(--ink)" stroke-width="3"/>
          <line x1="${X(lm).toFixed(1)}" x2="${X(lm).toFixed(1)}" y1="${ym - 34}" y2="${ym + 34}" style="stroke:var(--bad)" stroke-width="4"/>
          <text class="lbl" x="${X(0).toFixed(1)}" y="${ym - 34}" text-anchor="middle">Einstieg</text>
          <text class="lbl" x="${Math.min(w - pr - 10, Math.max(pl + 10, X(lm))).toFixed(1)}" y="${ym + 52}" text-anchor="middle" style="fill:var(--bad)">Liquidiert</text>
          <text class="ax" x="${X(0).toFixed(1)}" y="${ym + 52}" text-anchor="middle">die gelbe Zone ist die typische Tagesspanne</text></svg>`;
      });
    });
  };

  /* ---------------- Funding-Kosten ---------------- */
  W.funding = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Was kostet dich das Funding?</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('size', 'Positionswert (€)', 5000, 1, 100000000, 100)}
      ${MQ.slider('rate', 'Funding-Rate pro Zahlung', -0.1, 0.3, 0.005, 0.01, 'pct')}
      ${MQ.select('per', 'Zahlungen pro Tag', [['3', 'Alle 8 Stunden (3 pro Tag)'], ['6', 'Alle 4 Stunden (6 pro Tag)'], ['24', 'Jede Stunde (24 pro Tag)']], '3')}
      ${MQ.select('side', 'Deine Seite', [['long', 'Long'], ['short', 'Short']], 'long')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pay', 'Pro Zahlung')}${MQ.stat('day', 'Pro Tag')}${MQ.stat('mon', 'Pro 30 Tage', 'hi')}${MQ.stat('ann', 'Pro Jahr, in % der Position')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Perpetual Futures haben kein Verfallsdatum. Deshalb nutzen Börsen Funding-Zahlungen zwischen Longs und Shorts, um den Kontraktpreis nahe am Spotpreis zu halten. Die Rate ändert sich ständig, und das Intervall unterscheidet sich je nach Börse.</p>`;
    MQ.bind(el, (v) => {
      const per = parseInt(v.per, 10), long = v.side === 'long', sign = long ? -1 : 1;
      const pay = v.size * v.rate / 100 * sign, day = pay * per;
      MQ.set(el, { pay: MQ.eur(pay, 2), day: MQ.eur(day, 2), mon: MQ.eur(day * 30, 2), ann: MQ.num(day * 365 / v.size * 100, 1) + ' %',
        txt: v.rate === 0 ? 'Eine Rate von null bedeutet keine Zahlungen.' : (v.rate > 0 ? (long ? 'Positive Rate: Longs zahlen an Shorts. Du zahlst dafür, diese Position zu halten. Überfüllte Long-Trades sind teuer im Halten.' : 'Positive Rate: Longs zahlen an Shorts. Du wirst dafür bezahlt, diesen Short zu halten, aber die Masse neigt zu Long, was auch ein Squeeze-Risiko bedeuten kann.') : (long ? 'Negative Rate: Shorts zahlen an Longs. Du wirst dafür bezahlt, diesen Long zu halten.' : 'Negative Rate: Shorts zahlen an Longs. Du zahlst dafür, diesen Short zu halten.')) });
      MQ.cls(el, 'mon', day * 30 < 0 ? 'bad' : 'good');
    });
  };

  /* ---------------- Tokenomics: Marktkapitalisierung vs. FDV ---------------- */
  W.supply = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Marktkapitalisierung vs. voll verwässerter Wert</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets><button type="button" data-p="800,1000,5">Gesunder Streubesitz</button><button type="button" data-p="100,1000,15">Wenig Streubesitz, große Freigaben</button></div>
      ${MQ.number('price', 'Token-Preis (€)', 2, 0, 100000000, 0.01)}
      ${MQ.number('circ', 'Umlaufmenge (Millionen)', 100, 0, 1000000, 1)}
      ${MQ.number('total', 'Gesamt- oder Maximalmenge (Millionen)', 1000, 0, 1000000, 1)}
      ${MQ.slider('unl', 'Anteil der Gesamtmenge, der in den nächsten 12 Monaten freigegeben wird', 0, 50, 1, 15, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('mc', 'Marktkapitalisierung (im Umlauf)')}${MQ.stat('fdv', 'Voll verwässerter Wert (FDV)', 'hi')}${MQ.stat('ratio', 'Anteil bereits im Umlauf')}${MQ.stat('dil', 'Zusätzliche Menge in 12 Monaten', 'bad')}${MQ.stat('need', 'Neue Käufe nötig, um den Preis zu halten', 'bad')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Marktkapitalisierung = Preis × Umlaufmenge. FDV = Preis × Gesamtmenge. Eine große Lücke bedeutet, dass noch viele Token freigegeben werden, was meist Verkaufsdruck erzeugt.</p>`;
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      const p = b.dataset.p.split(',');
      el.querySelector('[data-k="circ"]').value = p[0]; el.querySelector('[data-k="total"]').value = p[1]; el.querySelector('[data-k="unl"]').value = p[2];
      MQ.setVal(el, 'price', el.querySelector('[data-k="price"]').value);
    }));
    MQ.bind(el, (v) => {
      const mc = v.price * v.circ * 1e6, fdv = v.price * v.total * 1e6, ratio = v.total ? v.circ / v.total * 100 : 0, add = v.total * v.unl / 100, dil = v.circ ? add / v.circ * 100 : 0;
      const f = (n) => n >= 1e9 ? MQ.num(n / 1e9, 2) + ' Mrd. €' : n >= 1e6 ? MQ.num(n / 1e6, 1) + ' Mio. €' : MQ.eur(n);
      MQ.set(el, { mc: f(mc), fdv: f(fdv), ratio: ratio.toFixed(0) + ' %', dil: '+' + dil.toFixed(0) + ' %', need: f(add * 1e6 * v.price),
        txt: ratio < 30 ? 'Wenig Streubesitz: Nur ' + ratio.toFixed(0) + ' % der Token sind im Umlauf. Insider und frühe Investoren können später große Mengen freigeben. Die angezeigte Marktkapitalisierung unterschätzt die wahre Bewertung.' : ratio < 70 ? 'Mittlerer Streubesitz. Prüfe den Freigabeplan: Wer erhält die neuen Token und wann darf er verkaufen?' : 'Der Großteil der Menge ist schon im Umlauf, die künftige Verwässerung ist also begrenzt. Die Bewertung lässt sich leichter beurteilen.' });
    });
  };

  /* ---------------- wie viel Krypto? ---------------- */
  W.cryptosize = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Wie viel ist zu viel? Der 80-%-Einbruch-Test</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('nw', 'Dein gesamtes investierbares Vermögen (€)', 20000, 0, 1000000000, 1000)}
      ${MQ.slider('pc', 'Anteil, den du in Krypto steckst', 0, 60, 1, 5, 'pct')}
      ${MQ.slider('drop', 'Krypto fällt um', 10, 95, 1, 80, 'pct')}
      ${MQ.number('sav', 'Du sparst pro Monat (€)', 400, 0, 1000000, 50)}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('val', 'Krypto heute')}${MQ.stat('loss', 'Du verlierst', 'bad')}${MQ.stat('imp', 'Auswirkung auf dein Gesamtvermögen', 'hi')}${MQ.stat('rec', 'Sparmonate, um es aufzufüllen')}${MQ.stat('gain', 'Nötiger Anstieg bis zum Ausgleich')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Bitcoin ist mehrfach um 70 bis 85 % vom Höchststand gefallen, und kleinere Coins fallen oft stärker. Der richtige Betrag ist der, mit dem du nach einem solchen Absturz noch schlafen und deinen Plan beibehalten kannst.</p>`;
    MQ.bind(el, (v) => {
      const val = v.nw * v.pc / 100, loss = val * v.drop / 100, imp = v.nw ? loss / v.nw * 100 : 0, gain = v.drop < 100 ? (1 / (1 - v.drop / 100) - 1) * 100 : 0;
      MQ.set(el, { bar: MQ.stackBar([{ v: 100 - v.pc, c: '#14B37D', l: 'Alles andere' }, { v: v.pc, c: '#A58FFF', l: 'Krypto' }]) + MQ.legend([['Alles andere', '#14B37D'], ['Krypto', '#A58FFF']]),
        val: MQ.eur(val), loss: MQ.eur(loss), imp: '-' + MQ.num(imp, 1) + ' %', rec: v.sav > 0 ? MQ.num(loss / v.sav, 1) + ' Monate' : '–', gain: '+' + MQ.num(gain, 0) + ' %',
        txt: imp < 5 ? 'Schmerzhaft, aber verkraftbar: Ein solcher Einbruch kostet dich ' + MQ.num(imp, 1) + ' % deines Vermögens. Dein Lebensplan bleibt intakt.' : imp < 20 ? 'Das würde wehtun. Frag dich ehrlich, ob du ruhig bleiben und deinen Plan beibehalten würdest.' : 'Das ist eine große Wette. Ein solcher Crash würde deine Finanzen umkrempeln. Die meisten Einsteiger sind sicherer, wenn sie deutlich kleiner anfangen.' });
    });
  };

  /* ---------------- Blockchain-Manipulationstest ---------------- */
  W.chain = (el) => {
    accent(el, 'ci');
    const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('00000000' + h.toString(16)).slice(-8); };
    const init = ['Anna zahlt Ben 2 Coins', 'Ben zahlt Clara 1 Coin', 'Clara zahlt Dennis 0,5 Coins', 'Dennis zahlt Eva 1 Coin'];
    const ref = []; init.forEach((t, i) => ref.push(hash((i ? ref[i - 1] : '00000000') + t)));
    el.innerHTML = `<h4 class="wt">Manipulationstest: Versuche, die Kette auszutricksen</h4>
    <div class="cards" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr));display:grid;gap:.8rem">${init.map((t, i) => `<div class="stat" data-b="${i}"><span class="sl">Block ${i + 1}</span>
      <label class="sr" for="chain-${i}">Daten von Block ${i + 1}</label><input type="text" id="chain-${i}" data-i="${i}" value="${t}" maxlength="40">
      <p class="note mono" style="margin:.4rem 0 0">vorher: ${i ? ref[i - 1] : '00000000'}</p><p class="note mono" style="margin:0">Hash: <span data-h></span></p><p style="margin:.3rem 0 0;font-weight:700;font-size:.88rem" data-s></p></div>`).join('')}</div>
    <div class="btnrow" style="margin-top:.8rem"><button class="btn sm alt" type="button" data-reset>Kette zurücksetzen</button></div>
    <p class="note">Der Hash ist ein kurzer Fingerabdruck der Blockdaten plus des vorherigen Hashs. Echte Blockchains nutzen viel stärkere Hashes und Tausende unabhängiger Computer, die sich gegenseitig prüfen.</p>`;
    const upd = () => {
      let broken = -1, prev = '00000000';
      MQ.$$('[data-b]', el).forEach((b, i) => {
        const txt = b.querySelector('input').value, cur = hash((i ? ref[i - 1] : '00000000') + txt);
        if (broken < 0 && cur !== ref[i]) broken = i;
        b.querySelector('[data-h]').textContent = cur;
        const s = b.querySelector('[data-s]');
        if (broken < 0) { s.textContent = 'Gültig'; s.style.color = 'var(--good)'; }
        else if (i === broken) { s.textContent = 'Daten geändert: Hash weicht ab'; s.style.color = 'var(--bad)'; }
        else { s.textContent = 'Gebrochen: Der vorherige Hash passt nicht mehr'; s.style.color = 'var(--bad)'; }
        prev = cur;
      });
    };
    el.addEventListener('input', upd);
    el.querySelector('[data-reset]').addEventListener('click', () => { MQ.$$('input', el).forEach((inp, i) => { inp.value = init[i]; }); upd(); });
    upd();
  };

  /* ---------------- allgemeine Checkliste ---------------- */
  W.checklist = (el, d) => {
    accent(el, d.accent || 'found');
    const items = (d.items || '').split('|').filter(Boolean), key = 'cl-' + (d.key || 'x');
    let st = MQ.store.get(key, []); if (!Array.isArray(st)) st = [];
    const render = () => {
      const n = items.filter((x, i) => st[i]).length;
      el.innerHTML = `<h4 class="wt">${d.title || 'Checkliste'}</h4><div class="pbar" style="margin-bottom:.6rem"><i style="width:${items.length ? n / items.length * 100 : 0}%"></i></div><p class="note" style="margin:0 0 .4rem">${n} von ${items.length} erledigt</p>` +
        items.map((t, i) => `<label class="cb"><input type="checkbox" data-i="${i}" ${st[i] ? 'checked' : ''}><span>${t}</span></label>`).join('');
    };
    el.addEventListener('change', (e) => {
      const i = e.target.dataset.i; if (i == null) return;
      st[i] = e.target.checked; MQ.store.set(key, st);
      const n = items.filter((x, k) => st[k]).length;
      el.querySelector('.pbar i').style.width = (n / items.length * 100) + '%'; el.querySelector('.note').textContent = n + ' von ' + items.length + ' erledigt';
    });
    render();
  };
})();
