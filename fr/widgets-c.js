/* Widgets pour les parcours crypto et aides génériques (listes de contrôle) */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- détecteur d’arnaques ---------------- */
  W.scam = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Un « agent du support » t’écrit sur Telegram : « Nous avons détecté un problème avec ton portefeuille. Envoie ta phrase de récupération de 12 mots pour qu’on le répare. »', true, 'Aucun service légitime ne te demandera jamais ta phrase de récupération. Celui qui l’a contrôle tes cryptos. Le support ne te contacte jamais en premier en message privé.'],
      ['Tu notes ta phrase de récupération de 24 mots sur papier, dans deux endroits sûrs et séparés. Elle n’est jamais photographiée ni saisie sur un appareil.', false, 'C’est la pratique standard et sûre. Des copies hors ligne à des endroits séparés te protègent de l’incendie, du vol et des pirates.'],
      ['Un fondateur célèbre tweete : « Envoie 0,5 ETH à cette adresse et reçois 1 ETH en retour. Giveaway limité, les 1 000 premiers ! »', true, 'Les arnaques au giveaway utilisent souvent des comptes piratés ou faux. Les vrais giveaways ne te demandent jamais d’envoyer des cryptos d’abord.'],
      ['Tu actives l’authentification à deux facteurs par application et la liste blanche d’adresses de retrait sur ton compte d’exchange.', false, 'Le 2FA par application (pas par SMS) et les adresses de retrait en liste blanche rendent le piratage de compte beaucoup plus difficile.'],
      ['Un nouveau token a été lancé il y a 10 minutes. Les développeurs détiennent 80 % de l’offre, la liquidité n’est pas verrouillée et le groupe Telegram dit « ça va faire x100 ». Tu y mets 500 €.', true, 'Une offre concentrée et une liquidité non verrouillée, c’est le schéma classique du « rug pull ». L’enthousiasme n’est pas de la recherche.'],
      ['Un inconnu sympathique rencontré sur une appli de rencontre t’apprend à investir sur une « plateforme privée » qui affiche d’énormes profits. Pour retirer, tu dois d’abord déposer davantage.', true, 'C’est une arnaque de type « pig butchering » : une fausse relation et un faux site de trading. Les profits affichés à l’écran ne sont pas réels.'],
      ['Tu achètes un portefeuille matériel à un vendeur au hasard sur une place de marché parce qu’il est 40 % moins cher que sur la boutique officielle.', true, 'Un portefeuille matériel ne s’achète que chez le fabricant ou un revendeur agréé. Un appareil trafiqué peut voler tes fonds.'],
      ['Tu achètes du Bitcoin sur un exchange régulé, tu envoies un petit montant de test vers ton portefeuille matériel, tu vérifies qu’il est arrivé, puis tu envoies le reste.', false, 'Une petite transaction de test d’abord est une excellente habitude. Revérifie toujours l’adresse avant d’envoyer la totalité.'],
      ['Un site trouvé via une publicité sponsorisée te demande de « connecter ton wallet » et d’approuver des dépenses illimitées de tes tokens pour recevoir un airdrop gratuit.', true, 'Les approbations illimitées à des contrats inconnus sont la façon dont les « wallet drainers » vident les comptes. Les publicités peuvent aussi être fausses : saisis toi-même les adresses connues.']
    ];
    let i = 0, score = 0, answered = false;
    const draw = () => {
      if (i >= Q.length) {
        el.innerHTML = `<h4 class="wt">Sûr ou arnaque ?</h4><div class="stats">${MQ.stat('s', 'Ton score', 'hi')}</div><div class="msg"><p>${score >= 8 ? 'Excellents réflexes. Continue à tout vérifier deux fois.' : score >= 6 ? 'Bien, mais les escrocs n’ont besoin que d’une seule erreur. Relis ceux que tu as ratés.' : 'C’est exactement pour ça que tu t’entraînes ici plutôt qu’avec de l’argent réel. Repasse sur les cas.'}</p><div class="btnrow"><button class="btn sm" type="button" data-act="again">Rejouer</button></div></div>`;
        MQ.set(el, { s: score + ' / ' + Q.length }); return;
      }
      el.innerHTML = `<h4 class="wt">Sûr ou arnaque ? Cas ${i + 1} sur ${Q.length}</h4><div class="news">${MQ.esc(Q[i][0])}</div>
      <div class="btnrow"><button class="btn sm alt" type="button" data-a="safe">Geste sûr</button><button class="btn sm alt" type="button" data-a="risk">Risqué ou arnaque</button></div><div data-r="fb"></div>`;
      answered = false;
    };
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-act="again"]')) { i = 0; score = 0; draw(); return; }
      if (e.target.closest('[data-act="next"]')) { i++; draw(); return; }
      const b = e.target.closest('[data-a]'); if (!b || answered) return;
      answered = true;
      const ok = (b.dataset.a === 'risk') === Q[i][1]; if (ok) score++;
      el.querySelector('[data-r="fb"]').innerHTML = `<div class="msg"><p><b>${ok ? 'Exact.' : 'Pas tout à fait.'}</b> Ce cas est ${Q[i][1] ? 'une arnaque ou très risqué' : 'une habitude sûre'}. ${Q[i][2]}</p><button class="btn sm" type="button" data-act="next">${i + 1 < Q.length ? 'Cas suivant' : 'Voir mon score'}</button></div>`;
    });
    draw();
  };

  /* ---------------- effet de levier et liquidation ---------------- */
  W.liq = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Calculateur d’effet de levier et de liquidation</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('margin', 'Ton propre argent dans la position (marge, €)', 500, 1, 10000000, 50)}
      ${MQ.slider('lev', 'Effet de levier', 1, 100, 1, 10, 'x')}
      ${MQ.select('dir', 'Sens', [['long', 'Long (tu gagnes si le prix monte)'], ['short', 'Short (tu gagnes si le prix baisse)']], 'long')}
      ${MQ.number('entry', 'Prix d’entrée', 100, 0.0001, 100000000, 1)}
      ${MQ.slider('vol', 'Mouvement quotidien typique de cet actif', 1, 12, 0.5, 3, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('size', 'Taille de la position')}${MQ.stat('liq', 'Prix de liquidation', 'bad')}${MQ.stat('dist', 'Distance jusqu’à la liquidation', 'hi')}${MQ.stat('x', 'Soit … jours typiques')}${MQ.stat('p1', 'Un mouvement de 1 % change ton argent de')}</div>
      <div class="chart" data-c="1"></div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <div data-r="tbl"></div>
    <p class="note">Modèle simplifié en marge isolée, avec une marge de maintenance de 0,5 % et sans frais ni funding. Chaque exchange a sa propre formule exacte : vérifie toujours le prix de liquidation affiché sur la plateforme.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const mm = 0.005, L = v.lev, long = v.dir === 'long';
      const liq = long ? v.entry * (1 - 1 / L + mm) : v.entry * (1 + 1 / L - mm), dist = Math.abs(liq - v.entry) / v.entry * 100;
      const days = dist / v.vol;
      let rows = '';
      [1, 2, 3, 5, 10, 20, 50, 100].forEach((l) => { const d = Math.max(0, (1 / l - mm) * 100); rows += `<tr><th scope="row">${l}×</th><td>${MQ.num(d, 1)} %</td><td>${MQ.num(d / v.vol, 1)}</td></tr>`; });
      MQ.set(el, {
        size: MQ.eur(v.margin * L), liq: liq > 100 ? MQ.num(liq, 2) : MQ.num(liq, 4), dist: MQ.num(dist, 1) + ' % ' + (long ? 'vers le bas' : 'vers le haut'), x: MQ.num(days, 1) + '×', p1: L + ' %',
        txt: days < 1 ? 'Danger : la liquidation est plus proche qu’une journée normale de mouvement. Le simple bruit du marché, pas un krach, peut anéantir cette position.' : days < 2 ? 'Très risqué : un mouvement à peine plus grand que d’habitude te liquide. Beaucoup de traders sont éjectés par des mèches bien avant le « vrai » mouvement.' : days < 4 ? 'Toujours agressif. Ton stop-loss doit être beaucoup plus proche que le prix de liquidation, et tu dois accepter de perdre la marge.' : 'Plus de marge de manœuvre, mais l’effet de levier multiplie toujours chaque perte et chaque frais de funding. Place toujours un stop bien avant la liquidation.',
        tbl: '<div class="tbl"><table><thead><tr><th>Effet de levier</th><th>Mouvement de prix qui te liquide</th><th>En jours typiques</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      const range = Math.max(dist * 1.35, v.vol * 2.2, 5);
      MQ.draw(ch, (w) => {
        const h = 120, pl = 18, pr = 18, X = (m) => pl + (m + range) / (2 * range) * (w - pl - pr), ym = 62;
        const lm = long ? -dist : dist;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Distance entre l’entrée et la liquidation comparée à un mouvement quotidien typique">
          <rect x="${X(-v.vol).toFixed(1)}" y="${ym - 20}" width="${(X(v.vol) - X(-v.vol)).toFixed(1)}" height="40" rx="8" style="fill:var(--ct)" fill-opacity=".35"/>
          <line x1="${pl}" x2="${w - pr}" y1="${ym}" y2="${ym}" style="stroke:var(--ink)" stroke-width="2"/>
          <line x1="${X(0).toFixed(1)}" x2="${X(0).toFixed(1)}" y1="${ym - 26}" y2="${ym + 26}" style="stroke:var(--ink)" stroke-width="3"/>
          <line x1="${X(lm).toFixed(1)}" x2="${X(lm).toFixed(1)}" y1="${ym - 34}" y2="${ym + 34}" style="stroke:var(--bad)" stroke-width="4"/>
          <text class="lbl" x="${X(0).toFixed(1)}" y="${ym - 34}" text-anchor="middle">Entrée</text>
          <text class="lbl" x="${Math.min(w - pr - 10, Math.max(pl + 10, X(lm))).toFixed(1)}" y="${ym + 52}" text-anchor="middle" style="fill:var(--bad)">Liquidé</text>
          <text class="ax" x="${X(0).toFixed(1)}" y="${ym + 52}" text-anchor="middle">la zone jaune est l’amplitude quotidienne typique</text></svg>`;
      });
    });
  };

  /* ---------------- coût du funding ---------------- */
  W.funding = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Combien te coûte le funding ?</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('size', 'Valeur de la position (€)', 5000, 1, 100000000, 100)}
      ${MQ.slider('rate', 'Taux de funding par paiement', -0.1, 0.3, 0.005, 0.01, 'pct')}
      ${MQ.select('per', 'Paiements par jour', [['3', 'Toutes les 8 heures (3 par jour)'], ['6', 'Toutes les 4 heures (6 par jour)'], ['24', 'Toutes les heures (24 par jour)']], '3')}
      ${MQ.select('side', 'Ton côté', [['long', 'Long'], ['short', 'Short']], 'long')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pay', 'Par paiement')}${MQ.stat('day', 'Par jour')}${MQ.stat('mon', 'Par 30 jours', 'hi')}${MQ.stat('ann', 'Par an, en % de la position')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Les contrats perpétuels n’ont pas d’échéance : les exchanges utilisent donc des paiements de funding entre longs et shorts pour garder le prix du contrat proche du prix spot. Le taux change constamment et l’intervalle diffère selon les exchanges.</p>`;
    MQ.bind(el, (v) => {
      const per = parseInt(v.per, 10), long = v.side === 'long', sign = long ? -1 : 1;
      const pay = v.size * v.rate / 100 * sign, day = pay * per;
      MQ.set(el, { pay: MQ.eur(pay, 2), day: MQ.eur(day, 2), mon: MQ.eur(day * 30, 2), ann: MQ.num(day * 365 / v.size * 100, 1) + ' %',
        txt: v.rate === 0 ? 'Un taux nul signifie aucun paiement.' : (v.rate > 0 ? (long ? 'Taux positif : les longs paient les shorts. Tu paies pour garder cette position. Les positions longues surpeuplées coûtent cher à conserver.' : 'Taux positif : les longs paient les shorts. Tu es payé pour garder ce short, mais la foule penche vers le long, ce qui peut aussi signifier un risque de squeeze.') : (long ? 'Taux négatif : les shorts paient les longs. Tu es payé pour garder ce long.' : 'Taux négatif : les shorts paient les longs. Tu paies pour garder ce short.')) });
      MQ.cls(el, 'mon', day * 30 < 0 ? 'bad' : 'good');
    });
  };

  /* ---------------- tokenomics : capitalisation vs FDV ---------------- */
  W.supply = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Capitalisation boursière vs. valeur entièrement diluée</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets><button type="button" data-p="800,1000,5">Flottant sain</button><button type="button" data-p="100,1000,15">Faible flottant, gros déblocages</button></div>
      ${MQ.number('price', 'Prix du token (€)', 2, 0, 100000000, 0.01)}
      ${MQ.number('circ', 'Offre en circulation (millions)', 100, 0, 1000000, 1)}
      ${MQ.number('total', 'Offre totale ou maximale (millions)', 1000, 0, 1000000, 1)}
      ${MQ.slider('unl', 'Part de l’offre totale débloquée dans les 12 prochains mois', 0, 50, 1, 15, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('mc', 'Capitalisation (en circulation)')}${MQ.stat('fdv', 'Valeur entièrement diluée (FDV)', 'hi')}${MQ.stat('ratio', 'Part déjà en circulation')}${MQ.stat('dil', 'Offre ajoutée en 12 mois', 'bad')}${MQ.stat('need', 'Achats nouveaux nécessaires pour garder le prix stable', 'bad')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Capitalisation = prix × offre en circulation. FDV = prix × offre totale. Un grand écart signifie que beaucoup de tokens restent à émettre, ce qui crée en général une pression vendeuse.</p>`;
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      const p = b.dataset.p.split(',');
      el.querySelector('[data-k="circ"]').value = p[0]; el.querySelector('[data-k="total"]').value = p[1]; el.querySelector('[data-k="unl"]').value = p[2];
      MQ.setVal(el, 'price', el.querySelector('[data-k="price"]').value);
    }));
    MQ.bind(el, (v) => {
      const mc = v.price * v.circ * 1e6, fdv = v.price * v.total * 1e6, ratio = v.total ? v.circ / v.total * 100 : 0, add = v.total * v.unl / 100, dil = v.circ ? add / v.circ * 100 : 0;
      const f = (n) => n >= 1e9 ? MQ.num(n / 1e9, 2) + ' Md €' : n >= 1e6 ? MQ.num(n / 1e6, 1) + ' M €' : MQ.eur(n);
      MQ.set(el, { mc: f(mc), fdv: f(fdv), ratio: ratio.toFixed(0) + ' %', dil: '+' + dil.toFixed(0) + ' %', need: f(add * 1e6 * v.price),
        txt: ratio < 30 ? 'Faible flottant : seulement ' + ratio.toFixed(0) + ' % des tokens circulent. Les initiés et premiers investisseurs peuvent débloquer de grandes quantités plus tard. La capitalisation affichée sous-estime la vraie valorisation.' : ratio < 70 ? 'Flottant moyen. Regarde le calendrier de déblocage : qui reçoit les nouveaux tokens et quand peut-il les vendre ?' : 'L’essentiel de l’offre circule déjà, la dilution future est donc limitée. La valorisation est plus facile à juger.' });
    });
  };

  /* ---------------- combien de crypto ? ---------------- */
  W.cryptosize = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Combien, c’est trop ? Le test de la chute de 80 %</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('nw', 'Ton patrimoine total investissable (€)', 20000, 0, 1000000000, 1000)}
      ${MQ.slider('pc', 'Part que tu mets en crypto', 0, 60, 1, 5, 'pct')}
      ${MQ.slider('drop', 'La crypto chute de', 10, 95, 1, 80, 'pct')}
      ${MQ.number('sav', 'Tu épargnes par mois (€)', 400, 0, 1000000, 50)}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('val', 'Crypto aujourd’hui')}${MQ.stat('loss', 'Tu perds', 'bad')}${MQ.stat('imp', 'Impact sur ton patrimoine total', 'hi')}${MQ.stat('rec', 'Mois d’épargne pour la reconstituer')}${MQ.stat('gain', 'Hausse nécessaire pour revenir à l’équilibre')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Le Bitcoin a chuté de 70 à 85 % depuis son sommet à plusieurs reprises, et les petites cryptos baissent souvent davantage. Le bon montant est celui qui te permet de dormir et de garder ton plan après une telle chute.</p>`;
    MQ.bind(el, (v) => {
      const val = v.nw * v.pc / 100, loss = val * v.drop / 100, imp = v.nw ? loss / v.nw * 100 : 0, gain = v.drop < 100 ? (1 / (1 - v.drop / 100) - 1) * 100 : 0;
      MQ.set(el, { bar: MQ.stackBar([{ v: 100 - v.pc, c: '#14B37D', l: 'Tout le reste' }, { v: v.pc, c: '#A58FFF', l: 'Crypto' }]) + MQ.legend([['Tout le reste', '#14B37D'], ['Crypto', '#A58FFF']]),
        val: MQ.eur(val), loss: MQ.eur(loss), imp: '-' + MQ.num(imp, 1) + ' %', rec: v.sav > 0 ? MQ.num(loss / v.sav, 1) + ' mois' : '–', gain: '+' + MQ.num(gain, 0) + ' %',
        txt: imp < 5 ? 'Douloureux mais supportable : une chute comme celle-ci te coûte ' + MQ.num(imp, 1) + ' % de ton patrimoine. Ton projet de vie reste intact.' : imp < 20 ? 'Ça ferait mal. Demande-toi honnêtement si tu resterais calme et garderais ton plan.' : 'C’est un gros pari. Un krach comme celui-ci bouleverserait tes finances. La plupart des débutants sont plus en sécurité en commençant bien plus petit.' });
    });
  };

  /* ---------------- test d’altération de la blockchain ---------------- */
  W.chain = (el) => {
    accent(el, 'ci');
    const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('00000000' + h.toString(16)).slice(-8); };
    const init = ['Ana paie 2 pièces à Ben', 'Ben paie 1 pièce à Chloé', 'Chloé paie 0,5 pièce à Dev', 'Dev paie 1 pièce à Eli'];
    const ref = []; init.forEach((t, i) => ref.push(hash((i ? ref[i - 1] : '00000000') + t)));
    el.innerHTML = `<h4 class="wt">Test d’altération : essaie de tromper la chaîne</h4>
    <div class="cards" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr));display:grid;gap:.8rem">${init.map((t, i) => `<div class="stat" data-b="${i}"><span class="sl">Bloc ${i + 1}</span>
      <label class="sr" for="chain-${i}">Données du bloc ${i + 1}</label><input type="text" id="chain-${i}" data-i="${i}" value="${t}" maxlength="40">
      <p class="note mono" style="margin:.4rem 0 0">préc. : ${i ? ref[i - 1] : '00000000'}</p><p class="note mono" style="margin:0">hash : <span data-h></span></p><p style="margin:.3rem 0 0;font-weight:700;font-size:.88rem" data-s></p></div>`).join('')}</div>
    <div class="btnrow" style="margin-top:.8rem"><button class="btn sm alt" type="button" data-reset>Réinitialiser la chaîne</button></div>
    <p class="note">Le hash est une courte empreinte des données du bloc plus du hash précédent. Les vraies blockchains utilisent des hashs bien plus robustes et des milliers d’ordinateurs indépendants qui se vérifient mutuellement.</p>`;
    const upd = () => {
      let broken = -1, prev = '00000000';
      MQ.$$('[data-b]', el).forEach((b, i) => {
        const txt = b.querySelector('input').value, cur = hash((i ? ref[i - 1] : '00000000') + txt);
        if (broken < 0 && cur !== ref[i]) broken = i;
        b.querySelector('[data-h]').textContent = cur;
        const s = b.querySelector('[data-s]');
        if (broken < 0) { s.textContent = 'Valide'; s.style.color = 'var(--good)'; }
        else if (i === broken) { s.textContent = 'Données modifiées : le hash diffère'; s.style.color = 'var(--bad)'; }
        else { s.textContent = 'Rompu : le hash précédent ne correspond plus'; s.style.color = 'var(--bad)'; }
        prev = cur;
      });
    };
    el.addEventListener('input', upd);
    el.querySelector('[data-reset]').addEventListener('click', () => { MQ.$$('input', el).forEach((inp, i) => { inp.value = init[i]; }); upd(); });
    upd();
  };

  /* ---------------- liste de contrôle générique ---------------- */
  W.checklist = (el, d) => {
    accent(el, d.accent || 'found');
    const items = (d.items || '').split('|').filter(Boolean), key = 'cl-' + (d.key || 'x');
    let st = MQ.store.get(key, []); if (!Array.isArray(st)) st = [];
    const render = () => {
      const n = items.filter((x, i) => st[i]).length;
      el.innerHTML = `<h4 class="wt">${d.title || 'Liste de contrôle'}</h4><div class="pbar" style="margin-bottom:.6rem"><i style="width:${items.length ? n / items.length * 100 : 0}%"></i></div><p class="note" style="margin:0 0 .4rem">${n} sur ${items.length} terminés</p>` +
        items.map((t, i) => `<label class="cb"><input type="checkbox" data-i="${i}" ${st[i] ? 'checked' : ''}><span>${t}</span></label>`).join('');
    };
    el.addEventListener('change', (e) => {
      const i = e.target.dataset.i; if (i == null) return;
      st[i] = e.target.checked; MQ.store.set(key, st);
      const n = items.filter((x, k) => st[k]).length;
      el.querySelector('.pbar i').style.width = (n / items.length * 100) + '%'; el.querySelector('.note').textContent = n + ' sur ' + items.length + ' terminés';
    });
    render();
  };
})();
