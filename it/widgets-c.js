/* Widget per i percorsi crypto e supporti generici (checklist) */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- scova la truffa ---------------- */
  W.scam = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Un “addetto al supporto” ti scrive su Telegram: “Abbiamo rilevato un problema con il tuo wallet. Inviaci le 12 parole di recupero così lo sistemiamo.”', true, 'Nessun servizio legittimo ti chiederà mai la frase di recupero. Chi la possiede controlla le tue monete. Il supporto non ti scrive mai per primo in privato.'],
      ['Conservi la frase di recupero di 24 parole su carta, in due posti sicuri e separati. Non viene mai fotografata né digitata su un dispositivo.', false, 'È la pratica sicura standard. Copie offline in luoghi separati ti proteggono da incendi, furti e hacker.'],
      ['Un fondatore famoso twitta: “Invia 0,5 ETH a questo indirizzo e ne ricevi 1 indietro. Giveaway limitato, primi 1.000!”', true, 'Le truffe dei giveaway usano spesso account hackerati o falsi. I giveaway veri non ti chiedono mai di inviare prima delle crypto.'],
      ['Attivi l’autenticazione a due fattori con app e la whitelist degli indirizzi di prelievo sul tuo account dell’exchange.', false, 'Il 2FA con app (non via SMS) e gli indirizzi di prelievo in whitelist rendono molto più difficile il furto dell’account.'],
      ['Un nuovo token è stato lanciato 10 minuti fa. Gli sviluppatori hanno l’80% dell’offerta, la liquidità non è bloccata e il gruppo Telegram dice “farà x100”. Ci metti 500 €.', true, 'Offerta concentrata più liquidità sbloccata è lo schema classico del “rug pull”. L’entusiasmo non è ricerca.'],
      ['Un estraneo simpatico conosciuto su un’app di incontri ti insegna a investire su una “piattaforma privata” che mostra enormi profitti. Per prelevare devi prima depositare di più.', true, 'È una truffa di tipo “pig butchering”: una relazione finta più un sito di trading finto. I profitti mostrati a schermo non sono reali.'],
      ['Compri un hardware wallet da un venditore qualsiasi di un marketplace perché costa il 40% in meno rispetto allo store ufficiale.', true, 'Gli hardware wallet vanno comprati solo dal produttore o da un rivenditore autorizzato. Un dispositivo manomesso può rubarti i fondi.'],
      ['Compri Bitcoin su un exchange regolamentato, invii una piccola cifra di prova al tuo hardware wallet, controlli che sia arrivata e poi invii il resto.', false, 'Una piccola transazione di prova all’inizio è un’ottima abitudine. Ricontrolla sempre l’indirizzo prima di inviare l’importo intero.'],
      ['Un sito trovato tramite un annuncio sponsorizzato ti chiede di “collegare il wallet” e approvare una spesa illimitata dei tuoi token per ricevere un airdrop gratuito.', true, 'Le approvazioni illimitate a contratti sconosciuti sono il modo in cui i “wallet drainer” svuotano i conti. Anche gli annunci possono essere falsi: digita tu gli indirizzi noti.']
    ];
    let i = 0, score = 0, answered = false;
    const draw = () => {
      if (i >= Q.length) {
        el.innerHTML = `<h4 class="wt">Sicuro o truffa?</h4><div class="stats">${MQ.stat('s', 'Il tuo punteggio', 'hi')}</div><div class="msg"><p>${score >= 8 ? 'Ottimo istinto. Continua a controllare tutto due volte.' : score >= 6 ? 'Bene, ma ai truffatori basta un solo errore. Rileggi quelli che hai sbagliato.' : 'È proprio per questo che ti alleni qui e non con soldi veri. Ripassa i casi.'}</p><div class="btnrow"><button class="btn sm" type="button" data-act="again">Gioca ancora</button></div></div>`;
        MQ.set(el, { s: score + ' / ' + Q.length }); return;
      }
      el.innerHTML = `<h4 class="wt">Sicuro o truffa? Caso ${i + 1} di ${Q.length}</h4><div class="news">${MQ.esc(Q[i][0])}</div>
      <div class="btnrow"><button class="btn sm alt" type="button" data-a="safe">Mossa sicura</button><button class="btn sm alt" type="button" data-a="risk">Rischioso o truffa</button></div><div data-r="fb"></div>`;
      answered = false;
    };
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-act="again"]')) { i = 0; score = 0; draw(); return; }
      if (e.target.closest('[data-act="next"]')) { i++; draw(); return; }
      const b = e.target.closest('[data-a]'); if (!b || answered) return;
      answered = true;
      const ok = (b.dataset.a === 'risk') === Q[i][1]; if (ok) score++;
      el.querySelector('[data-r="fb"]').innerHTML = `<div class="msg"><p><b>${ok ? 'Giusto.' : 'Non proprio.'}</b> Questo caso è ${Q[i][1] ? 'una truffa o molto rischioso' : 'un’abitudine sicura'}. ${Q[i][2]}</p><button class="btn sm" type="button" data-act="next">${i + 1 < Q.length ? 'Caso successivo' : 'Vedi il mio punteggio'}</button></div>`;
    });
    draw();
  };

  /* ---------------- leva e liquidazione ---------------- */
  W.liq = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Calcolatore di leva e liquidazione</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('margin', 'I tuoi soldi nell’operazione (margine, €)', 500, 1, 10000000, 50)}
      ${MQ.slider('lev', 'Leva', 1, 100, 1, 10, 'x')}
      ${MQ.select('dir', 'Direzione', [['long', 'Long (guadagni se il prezzo sale)'], ['short', 'Short (guadagni se il prezzo scende)']], 'long')}
      ${MQ.number('entry', 'Prezzo di ingresso', 100, 0.0001, 100000000, 1)}
      ${MQ.slider('vol', 'Movimento giornaliero tipico di questo asset', 1, 12, 0.5, 3, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('size', 'Dimensione della posizione')}${MQ.stat('liq', 'Prezzo di liquidazione', 'bad')}${MQ.stat('dist', 'Distanza dalla liquidazione', 'hi')}${MQ.stat('x', 'Pari a … giorni tipici')}${MQ.stat('p1', 'Un movimento dell’1% cambia i tuoi soldi del')}</div>
      <div class="chart" data-c="1"></div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <div data-r="tbl"></div>
    <p class="note">Modello semplificato a margine isolato, con margine di mantenimento dello 0,5% e senza commissioni né funding. Ogni exchange ha la propria formula esatta, quindi controlla sempre il prezzo di liquidazione mostrato dalla piattaforma.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const mm = 0.005, L = v.lev, long = v.dir === 'long';
      const liq = long ? v.entry * (1 - 1 / L + mm) : v.entry * (1 + 1 / L - mm), dist = Math.abs(liq - v.entry) / v.entry * 100;
      const days = dist / v.vol;
      let rows = '';
      [1, 2, 3, 5, 10, 20, 50, 100].forEach((l) => { const d = Math.max(0, (1 / l - mm) * 100); rows += `<tr><th scope="row">${l}×</th><td>${MQ.num(d, 1)}%</td><td>${MQ.num(d / v.vol, 1)}</td></tr>`; });
      MQ.set(el, {
        size: MQ.eur(v.margin * L), liq: liq > 100 ? MQ.num(liq, 2) : MQ.num(liq, 4), dist: MQ.num(dist, 1) + '% ' + (long ? 'verso il basso' : 'verso l’alto'), x: MQ.num(days, 1) + '×', p1: L + '%',
        txt: days < 1 ? 'Pericolo: la liquidazione è più vicina di un normale giorno di movimento. Il normale rumore di mercato, non un crollo, può spazzare via questa operazione.' : days < 2 ? 'Molto rischioso: un movimento appena più ampio del solito ti liquida. Molti trader vengono buttati fuori dalle ombre delle candele ben prima del “vero” movimento.' : days < 4 ? 'Ancora aggressivo. Il tuo stop-loss dovrebbe essere molto più vicino del prezzo di liquidazione e devi accettare di perdere il margine.' : 'Più margine di manovra, ma la leva moltiplica comunque ogni perdita e ogni costo di funding. Metti sempre uno stop ben prima della liquidazione.',
        tbl: '<div class="tbl"><table><thead><tr><th>Leva</th><th>Movimento di prezzo che ti liquida</th><th>In giorni tipici</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      const range = Math.max(dist * 1.35, v.vol * 2.2, 5);
      MQ.draw(ch, (w) => {
        const h = 120, pl = 18, pr = 18, X = (m) => pl + (m + range) / (2 * range) * (w - pl - pr), ym = 62;
        const lm = long ? -dist : dist;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Distanza dall’ingresso alla liquidazione rispetto a un movimento giornaliero tipico">
          <rect x="${X(-v.vol).toFixed(1)}" y="${ym - 20}" width="${(X(v.vol) - X(-v.vol)).toFixed(1)}" height="40" rx="8" style="fill:var(--ct)" fill-opacity=".35"/>
          <line x1="${pl}" x2="${w - pr}" y1="${ym}" y2="${ym}" style="stroke:var(--ink)" stroke-width="2"/>
          <line x1="${X(0).toFixed(1)}" x2="${X(0).toFixed(1)}" y1="${ym - 26}" y2="${ym + 26}" style="stroke:var(--ink)" stroke-width="3"/>
          <line x1="${X(lm).toFixed(1)}" x2="${X(lm).toFixed(1)}" y1="${ym - 34}" y2="${ym + 34}" style="stroke:var(--bad)" stroke-width="4"/>
          <text class="lbl" x="${X(0).toFixed(1)}" y="${ym - 34}" text-anchor="middle">Ingresso</text>
          <text class="lbl" x="${Math.min(w - pr - 10, Math.max(pl + 10, X(lm))).toFixed(1)}" y="${ym + 52}" text-anchor="middle" style="fill:var(--bad)">Liquidato</text>
          <text class="ax" x="${X(0).toFixed(1)}" y="${ym + 52}" text-anchor="middle">la zona gialla è l’escursione giornaliera tipica</text></svg>`;
      });
    });
  };

  /* ---------------- costo del funding ---------------- */
  W.funding = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Quanto ti costa il funding?</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('size', 'Valore della posizione (€)', 5000, 1, 100000000, 100)}
      ${MQ.slider('rate', 'Tasso di funding per pagamento', -0.1, 0.3, 0.005, 0.01, 'pct')}
      ${MQ.select('per', 'Pagamenti al giorno', [['3', 'Ogni 8 ore (3 al giorno)'], ['6', 'Ogni 4 ore (6 al giorno)'], ['24', 'Ogni ora (24 al giorno)']], '3')}
      ${MQ.select('side', 'Il tuo lato', [['long', 'Long'], ['short', 'Short']], 'long')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pay', 'Per pagamento')}${MQ.stat('day', 'Al giorno')}${MQ.stat('mon', 'Per 30 giorni', 'hi')}${MQ.stat('ann', 'All’anno, in % della posizione')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">I future perpetui non hanno scadenza, quindi gli exchange usano pagamenti di funding tra long e short per tenere il prezzo del contratto vicino al prezzo spot. Il tasso cambia di continuo e l’intervallo varia da un exchange all’altro.</p>`;
    MQ.bind(el, (v) => {
      const per = parseInt(v.per, 10), long = v.side === 'long', sign = long ? -1 : 1;
      const pay = v.size * v.rate / 100 * sign, day = pay * per;
      MQ.set(el, { pay: MQ.eur(pay, 2), day: MQ.eur(day, 2), mon: MQ.eur(day * 30, 2), ann: MQ.num(day * 365 / v.size * 100, 1) + '%',
        txt: v.rate === 0 ? 'Un tasso pari a zero significa nessun pagamento.' : (v.rate > 0 ? (long ? 'Tasso positivo: i long pagano gli short. Stai pagando per mantenere questa posizione. Le operazioni long affollate costano care da tenere.' : 'Tasso positivo: i long pagano gli short. Vieni pagato per tenere questo short, ma la folla è inclinata verso il long, il che può significare anche rischio di squeeze.') : (long ? 'Tasso negativo: gli short pagano i long. Vieni pagato per tenere questo long.' : 'Tasso negativo: gli short pagano i long. Stai pagando per tenere questo short.')) });
      MQ.cls(el, 'mon', day * 30 < 0 ? 'bad' : 'good');
    });
  };

  /* ---------------- tokenomics: capitalizzazione vs FDV ---------------- */
  W.supply = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Capitalizzazione di mercato vs. valore completamente diluito</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets><button type="button" data-p="800,1000,5">Flottante sano</button><button type="button" data-p="100,1000,15">Flottante basso, grandi sblocchi</button></div>
      ${MQ.number('price', 'Prezzo del token (€)', 2, 0, 100000000, 0.01)}
      ${MQ.number('circ', 'Offerta circolante (milioni)', 100, 0, 1000000, 1)}
      ${MQ.number('total', 'Offerta totale o massima (milioni)', 1000, 0, 1000000, 1)}
      ${MQ.slider('unl', 'Quota dell’offerta totale sbloccata nei prossimi 12 mesi', 0, 50, 1, 15, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('mc', 'Capitalizzazione (circolante)')}${MQ.stat('fdv', 'Valore completamente diluito (FDV)', 'hi')}${MQ.stat('ratio', 'Quota già in circolazione')}${MQ.stat('dil', 'Offerta aggiunta in 12 mesi', 'bad')}${MQ.stat('need', 'Nuovi acquisti necessari per tenere fermo il prezzo', 'bad')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Capitalizzazione = prezzo × offerta circolante. FDV = prezzo × offerta totale. Una grande differenza significa che molti token devono ancora essere rilasciati, il che di solito crea pressione di vendita.</p>`;
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      const p = b.dataset.p.split(',');
      el.querySelector('[data-k="circ"]').value = p[0]; el.querySelector('[data-k="total"]').value = p[1]; el.querySelector('[data-k="unl"]').value = p[2];
      MQ.setVal(el, 'price', el.querySelector('[data-k="price"]').value);
    }));
    MQ.bind(el, (v) => {
      const mc = v.price * v.circ * 1e6, fdv = v.price * v.total * 1e6, ratio = v.total ? v.circ / v.total * 100 : 0, add = v.total * v.unl / 100, dil = v.circ ? add / v.circ * 100 : 0;
      const f = (n) => n >= 1e9 ? MQ.num(n / 1e9, 2) + ' mld €' : n >= 1e6 ? MQ.num(n / 1e6, 1) + ' mln €' : MQ.eur(n);
      MQ.set(el, { mc: f(mc), fdv: f(fdv), ratio: ratio.toFixed(0) + '%', dil: '+' + dil.toFixed(0) + '%', need: f(add * 1e6 * v.price),
        txt: ratio < 30 ? 'Flottante basso: circola solo il ' + ratio.toFixed(0) + '% dei token. Insider e primi investitori possono sbloccare grandi quantità più avanti. La capitalizzazione mostrata sottostima la vera valutazione.' : ratio < 70 ? 'Flottante medio. Controlla il calendario degli sblocchi: chi riceve i nuovi token e quando può venderli?' : 'La maggior parte dell’offerta circola già, quindi la diluizione futura è limitata. La valutazione è più facile da giudicare.' });
    });
  };

  /* ---------------- quanta crypto? ---------------- */
  W.cryptosize = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Quanto è troppo? Il test del crollo dell’80%</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('nw', 'Il tuo patrimonio totale investibile (€)', 20000, 0, 1000000000, 1000)}
      ${MQ.slider('pc', 'Quota che metti in crypto', 0, 60, 1, 5, 'pct')}
      ${MQ.slider('drop', 'Le crypto calano del', 10, 95, 1, 80, 'pct')}
      ${MQ.number('sav', 'Risparmi al mese (€)', 400, 0, 1000000, 50)}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('val', 'Crypto oggi')}${MQ.stat('loss', 'Perdi', 'bad')}${MQ.stat('imp', 'Colpo al tuo patrimonio totale', 'hi')}${MQ.stat('rec', 'Mesi di risparmio per rimetterli')}${MQ.stat('gain', 'Rialzo necessario per tornare in pari')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Bitcoin è sceso del 70-85% dal suo massimo più volte, e le monete più piccole spesso scendono di più. L’importo giusto è quello che ti permette di dormire e di mantenere il tuo piano dopo un calo del genere.</p>`;
    MQ.bind(el, (v) => {
      const val = v.nw * v.pc / 100, loss = val * v.drop / 100, imp = v.nw ? loss / v.nw * 100 : 0, gain = v.drop < 100 ? (1 / (1 - v.drop / 100) - 1) * 100 : 0;
      MQ.set(el, { bar: MQ.stackBar([{ v: 100 - v.pc, c: '#14B37D', l: 'Tutto il resto' }, { v: v.pc, c: '#A58FFF', l: 'Crypto' }]) + MQ.legend([['Tutto il resto', '#14B37D'], ['Crypto', '#A58FFF']]),
        val: MQ.eur(val), loss: MQ.eur(loss), imp: '-' + MQ.num(imp, 1) + '%', rec: v.sav > 0 ? MQ.num(loss / v.sav, 1) + ' mesi' : '–', gain: '+' + MQ.num(gain, 0) + '%',
        txt: imp < 5 ? 'Doloroso ma sopportabile: un calo del genere ti costa il ' + MQ.num(imp, 1) + '% del patrimonio. Il tuo piano di vita resta intatto.' : imp < 20 ? 'Farebbe male. Chiediti onestamente se manterresti la calma e il tuo piano.' : 'È una scommessa grossa. Un crollo così rimodellerebbe le tue finanze. La maggior parte dei principianti è più al sicuro partendo molto più in piccolo.' });
    });
  };

  /* ---------------- test di manomissione della blockchain ---------------- */
  W.chain = (el) => {
    accent(el, 'ci');
    const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('00000000' + h.toString(16)).slice(-8); };
    const init = ['Anna paga 2 monete a Bruno', 'Bruno paga 1 moneta a Chiara', 'Chiara paga 0,5 monete a Dario', 'Dario paga 1 moneta a Elena'];
    const ref = []; init.forEach((t, i) => ref.push(hash((i ? ref[i - 1] : '00000000') + t)));
    el.innerHTML = `<h4 class="wt">Test di manomissione: prova a ingannare la catena</h4>
    <div class="cards" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr));display:grid;gap:.8rem">${init.map((t, i) => `<div class="stat" data-b="${i}"><span class="sl">Blocco ${i + 1}</span>
      <label class="sr" for="chain-${i}">Dati del blocco ${i + 1}</label><input type="text" id="chain-${i}" data-i="${i}" value="${t}" maxlength="40">
      <p class="note mono" style="margin:.4rem 0 0">prec.: ${i ? ref[i - 1] : '00000000'}</p><p class="note mono" style="margin:0">hash: <span data-h></span></p><p style="margin:.3rem 0 0;font-weight:700;font-size:.88rem" data-s></p></div>`).join('')}</div>
    <div class="btnrow" style="margin-top:.8rem"><button class="btn sm alt" type="button" data-reset>Ripristina la catena</button></div>
    <p class="note">L’hash è una breve impronta dei dati del blocco più l’hash precedente. Le vere blockchain usano hash molto più robusti e migliaia di computer indipendenti che si controllano a vicenda.</p>`;
    const upd = () => {
      let broken = -1, prev = '00000000';
      MQ.$$('[data-b]', el).forEach((b, i) => {
        const txt = b.querySelector('input').value, cur = hash((i ? ref[i - 1] : '00000000') + txt);
        if (broken < 0 && cur !== ref[i]) broken = i;
        b.querySelector('[data-h]').textContent = cur;
        const s = b.querySelector('[data-s]');
        if (broken < 0) { s.textContent = 'Valido'; s.style.color = 'var(--good)'; }
        else if (i === broken) { s.textContent = 'Dati modificati: l’hash è diverso'; s.style.color = 'var(--bad)'; }
        else { s.textContent = 'Rotto: l’hash precedente non corrisponde più'; s.style.color = 'var(--bad)'; }
        prev = cur;
      });
    };
    el.addEventListener('input', upd);
    el.querySelector('[data-reset]').addEventListener('click', () => { MQ.$$('input', el).forEach((inp, i) => { inp.value = init[i]; }); upd(); });
    upd();
  };

  /* ---------------- checklist generica ---------------- */
  W.checklist = (el, d) => {
    accent(el, d.accent || 'found');
    const items = (d.items || '').split('|').filter(Boolean), key = 'cl-' + (d.key || 'x');
    let st = MQ.store.get(key, []); if (!Array.isArray(st)) st = [];
    const render = () => {
      const n = items.filter((x, i) => st[i]).length;
      el.innerHTML = `<h4 class="wt">${d.title || 'Checklist'}</h4><div class="pbar" style="margin-bottom:.6rem"><i style="width:${items.length ? n / items.length * 100 : 0}%"></i></div><p class="note" style="margin:0 0 .4rem">${n} di ${items.length} completati</p>` +
        items.map((t, i) => `<label class="cb"><input type="checkbox" data-i="${i}" ${st[i] ? 'checked' : ''}><span>${t}</span></label>`).join('');
    };
    el.addEventListener('change', (e) => {
      const i = e.target.dataset.i; if (i == null) return;
      st[i] = e.target.checked; MQ.store.set(key, st);
      const n = items.filter((x, k) => st[k]).length;
      el.querySelector('.pbar i').style.width = (n / items.length * 100) + '%'; el.querySelector('.note').textContent = n + ' di ' + items.length + ' completati';
    });
    render();
  };
})();
