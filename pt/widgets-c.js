/* Widgets para os percursos cripto e auxiliares genéricos (listas de verificação) */
(function () {
  'use strict';
  const MQ = window.MQ;
  const W = MQ.widgets;
  const accent = (el, k) => { el.style.setProperty('--a', 'var(--' + k + ')'); el.style.setProperty('--on', 'var(--' + k + '-on)'); el.style.setProperty('--as', 'var(--' + k + '-s)'); };

  /* ---------------- detetor de burlas ---------------- */
  W.scam = (el) => {
    accent(el, 'ci');
    const Q = [
      ['Um “agente de suporte” envia-te mensagem no Telegram: “Detetámos um problema na tua carteira. Envia as 12 palavras de recuperação para o resolvermos.”', true, 'Ninguém legítimo te vai pedir a frase de recuperação. Quem a tem controla as tuas moedas. O suporte nunca começa a conversa por mensagem privada.'],
      ['Guardas a frase de recuperação de 24 palavras em papel, em dois locais seguros e separados. Nunca é fotografada nem escrita em nenhum dispositivo.', false, 'Esta é a prática segura habitual. Cópias offline em locais separados protegem-te de incêndio, roubo e hackers.'],
      ['Um fundador famoso publica no X: “Envia 0,5 ETH para este endereço e recebes 1 ETH de volta. Sorteio limitado, primeiras 1000 pessoas!”', true, 'As burlas de sorteios usam muitas vezes contas pirateadas ou falsas. Os sorteios verdadeiros nunca pedem que envies cripto primeiro.'],
      ['Ativas a autenticação de dois fatores por aplicação e a lista branca de endereços de levantamento na tua conta da corretora.', false, 'O 2FA por aplicação (não por SMS) e os endereços de levantamento na lista branca dificultam muito o roubo de contas.'],
      ['Um token novo foi lançado há 10 minutos. Os programadores têm 80% da oferta, a liquidez não está bloqueada e o grupo de Telegram diz “vai a 100x”. Pões lá 500 €.', true, 'Oferta concentrada mais liquidez desbloqueada é o cenário clássico de um “rug pull”. Entusiasmo não é pesquisa.'],
      ['Um desconhecido simpático de uma aplicação de encontros ensina-te a investir numa “plataforma privada” que mostra lucros enormes. Para levantar, tens primeiro de depositar mais.', true, 'É uma burla do tipo “pig butchering”: uma relação falsa mais um site de trading falso. Os lucros no ecrã não são reais.'],
      ['Compras uma carteira de hardware a um vendedor aleatório de um marketplace porque é 40% mais barata do que na loja oficial.', true, 'As carteiras de hardware só devem ser compradas ao fabricante ou a um revendedor autorizado. Um dispositivo adulterado pode roubar-te os fundos.'],
      ['Compras Bitcoin numa corretora regulada, envias uma pequena quantia de teste para a tua carteira de hardware, confirmas que chegou e só depois envias o resto.', false, 'Uma pequena transação de teste primeiro é um hábito inteligente. Confirma sempre o endereço antes de enviar o valor total.'],
      ['Um site encontrado através de um anúncio patrocinado pede-te para “Ligar carteira” e aprovar gastos ilimitados dos teus tokens para receber um airdrop grátis.', true, 'Aprovações ilimitadas a contratos desconhecidos são a forma como os “wallet drainers” esvaziam contas. Os anúncios também podem ser falsos: escreve tu os endereços conhecidos.']
    ];
    let i = 0, score = 0, answered = false;
    const draw = () => {
      if (i >= Q.length) {
        el.innerHTML = `<h4 class="wt">Seguro ou burla?</h4><div class="stats">${MQ.stat('s', 'A tua pontuação', 'hi')}</div><div class="msg"><p>${score >= 8 ? 'Excelente instinto. Continua a verificar tudo duas vezes.' : score >= 6 ? 'Bom, mas os burlões só precisam de um erro. Relê os que falhaste.' : 'É exatamente por isso que praticas aqui e não com dinheiro a sério. Repete os casos.'}</p><div class="btnrow"><button class="btn sm" type="button" data-act="again">Jogar de novo</button></div></div>`;
        MQ.set(el, { s: score + ' / ' + Q.length }); return;
      }
      el.innerHTML = `<h4 class="wt">Seguro ou burla? Caso ${i + 1} de ${Q.length}</h4><div class="news">${MQ.esc(Q[i][0])}</div>
      <div class="btnrow"><button class="btn sm alt" type="button" data-a="safe">Atitude segura</button><button class="btn sm alt" type="button" data-a="risk">Arriscado ou burla</button></div><div data-r="fb"></div>`;
      answered = false;
    };
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-act="again"]')) { i = 0; score = 0; draw(); return; }
      if (e.target.closest('[data-act="next"]')) { i++; draw(); return; }
      const b = e.target.closest('[data-a]'); if (!b || answered) return;
      answered = true;
      const ok = (b.dataset.a === 'risk') === Q[i][1]; if (ok) score++;
      el.querySelector('[data-r="fb"]').innerHTML = `<div class="msg"><p><b>${ok ? 'Correto.' : 'Não é bem assim.'}</b> Este caso é ${Q[i][1] ? 'uma burla ou muito arriscado' : 'um hábito seguro'}. ${Q[i][2]}</p><button class="btn sm" type="button" data-act="next">${i + 1 < Q.length ? 'Caso seguinte' : 'Ver a minha pontuação'}</button></div>`;
    });
    draw();
  };

  /* ---------------- alavancagem e liquidação ---------------- */
  W.liq = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Calculadora de alavancagem e liquidação</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('margin', 'O teu próprio dinheiro na operação (margem, €)', 500, 1, 10000000, 50)}
      ${MQ.slider('lev', 'Alavancagem', 1, 100, 1, 10, 'x')}
      ${MQ.select('dir', 'Direção', [['long', 'Long (ganhas se o preço subir)'], ['short', 'Short (ganhas se o preço descer)']], 'long')}
      ${MQ.number('entry', 'Preço de entrada', 100, 0.0001, 100000000, 1)}
      ${MQ.slider('vol', 'Movimento diário típico deste ativo', 1, 12, 0.5, 3, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('size', 'Tamanho da posição')}${MQ.stat('liq', 'Preço de liquidação', 'bad')}${MQ.stat('dist', 'Distância até à liquidação', 'hi')}${MQ.stat('x', 'Isso equivale a … dias típicos')}${MQ.stat('p1', 'Um movimento de 1% altera o teu dinheiro em')}</div>
      <div class="chart" data-c="1"></div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <div data-r="tbl"></div>
    <p class="note">Modelo simplificado de margem isolada, com margem de manutenção de 0,5% e sem comissões nem funding. Cada corretora tem a sua fórmula exata, por isso confirma sempre o preço de liquidação mostrado na plataforma.</p>`;
    const ch = el.querySelector('[data-c]');
    MQ.bind(el, (v) => {
      const mm = 0.005, L = v.lev, long = v.dir === 'long';
      const liq = long ? v.entry * (1 - 1 / L + mm) : v.entry * (1 + 1 / L - mm), dist = Math.abs(liq - v.entry) / v.entry * 100;
      const days = dist / v.vol;
      let rows = '';
      [1, 2, 3, 5, 10, 20, 50, 100].forEach((l) => { const d = Math.max(0, (1 / l - mm) * 100); rows += `<tr><th scope="row">${l}×</th><td>${MQ.num(d, 1)}%</td><td>${MQ.num(d / v.vol, 1)}</td></tr>`; });
      MQ.set(el, {
        size: MQ.eur(v.margin * L), liq: liq > 100 ? MQ.num(liq, 2) : MQ.num(liq, 4), dist: MQ.num(dist, 1) + '% ' + (long ? 'para baixo' : 'para cima'), x: MQ.num(days, 1) + '×', p1: L + '%',
        txt: days < 1 ? 'Perigo: a liquidação está mais perto do que um dia normal de movimento. O ruído comum, não um colapso, pode eliminar esta operação.' : days < 2 ? 'Muito arriscado: um movimento ligeiramente maior do que o habitual liquida-te. Muitos traders são apanhados por pavios muito antes do movimento “verdadeiro”.' : days < 4 ? 'Ainda agressivo. O teu stop-loss deve estar muito mais perto do que o preço de liquidação, e tens de aceitar perder a margem.' : 'Mais folga, mas a alavancagem continua a multiplicar cada perda e cada taxa de funding. Coloca sempre um stop bem antes da liquidação.',
        tbl: '<div class="tbl"><table><thead><tr><th>Alavancagem</th><th>Movimento de preço que te liquida</th><th>Em dias típicos</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      });
      const range = Math.max(dist * 1.35, v.vol * 2.2, 5);
      MQ.draw(ch, (w) => {
        const h = 120, pl = 18, pr = 18, X = (m) => pl + (m + range) / (2 * range) * (w - pl - pr), ym = 62;
        const lm = long ? -dist : dist;
        return `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Distância da entrada à liquidação comparada com um movimento diário típico">
          <rect x="${X(-v.vol).toFixed(1)}" y="${ym - 20}" width="${(X(v.vol) - X(-v.vol)).toFixed(1)}" height="40" rx="8" style="fill:var(--ct)" fill-opacity=".35"/>
          <line x1="${pl}" x2="${w - pr}" y1="${ym}" y2="${ym}" style="stroke:var(--ink)" stroke-width="2"/>
          <line x1="${X(0).toFixed(1)}" x2="${X(0).toFixed(1)}" y1="${ym - 26}" y2="${ym + 26}" style="stroke:var(--ink)" stroke-width="3"/>
          <line x1="${X(lm).toFixed(1)}" x2="${X(lm).toFixed(1)}" y1="${ym - 34}" y2="${ym + 34}" style="stroke:var(--bad)" stroke-width="4"/>
          <text class="lbl" x="${X(0).toFixed(1)}" y="${ym - 34}" text-anchor="middle">Entrada</text>
          <text class="lbl" x="${Math.min(w - pr - 10, Math.max(pl + 10, X(lm))).toFixed(1)}" y="${ym + 52}" text-anchor="middle" style="fill:var(--bad)">Liquidado</text>
          <text class="ax" x="${X(0).toFixed(1)}" y="${ym + 52}" text-anchor="middle">a zona amarela é a amplitude diária típica</text></svg>`;
      });
    });
  };

  /* ---------------- custo do funding ---------------- */
  W.funding = (el) => {
    accent(el, 'ct');
    el.innerHTML = `<h4 class="wt">Quanto te custa o funding?</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('size', 'Valor da posição (€)', 5000, 1, 100000000, 100)}
      ${MQ.slider('rate', 'Taxa de funding por pagamento', -0.1, 0.3, 0.005, 0.01, 'pct')}
      ${MQ.select('per', 'Pagamentos por dia', [['3', 'A cada 8 horas (3 por dia)'], ['6', 'A cada 4 horas (6 por dia)'], ['24', 'A cada hora (24 por dia)']], '3')}
      ${MQ.select('side', 'O teu lado', [['long', 'Long'], ['short', 'Short']], 'long')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('pay', 'Por pagamento')}${MQ.stat('day', 'Por dia')}${MQ.stat('mon', 'Por 30 dias', 'hi')}${MQ.stat('ann', 'Por ano, em % da posição')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Os futuros perpétuos não têm data de expiração, por isso as corretoras usam pagamentos de funding entre longs e shorts para manter o preço do contrato perto do preço spot. A taxa muda constantemente e o intervalo difere entre corretoras.</p>`;
    MQ.bind(el, (v) => {
      const per = parseInt(v.per, 10), long = v.side === 'long', sign = long ? -1 : 1;
      const pay = v.size * v.rate / 100 * sign, day = pay * per;
      MQ.set(el, { pay: MQ.eur(pay, 2), day: MQ.eur(day, 2), mon: MQ.eur(day * 30, 2), ann: MQ.num(day * 365 / v.size * 100, 1) + '%',
        txt: v.rate === 0 ? 'Uma taxa zero significa que não há pagamentos.' : (v.rate > 0 ? (long ? 'Taxa positiva: os longs pagam aos shorts. Estás a pagar para manter esta posição. As operações long sobrelotadas são caras de manter.' : 'Taxa positiva: os longs pagam aos shorts. Recebes para manter este short, mas a multidão está inclinada para long, o que também pode significar risco de squeeze.') : (long ? 'Taxa negativa: os shorts pagam aos longs. Recebes para manter este long.' : 'Taxa negativa: os shorts pagam aos longs. Estás a pagar para manter este short.')) });
      MQ.cls(el, 'mon', day * 30 < 0 ? 'bad' : 'good');
    });
  };

  /* ---------------- tokenomics: capitalização vs FDV ---------------- */
  W.supply = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Capitalização de mercado vs. valor totalmente diluído</h4>
    <div class="wgrid"><div class="wctl">
      <div class="seg" data-presets><button type="button" data-p="800,1000,5">Float saudável</button><button type="button" data-p="100,1000,15">Float baixo, grandes desbloqueios</button></div>
      ${MQ.number('price', 'Preço do token (€)', 2, 0, 100000000, 0.01)}
      ${MQ.number('circ', 'Oferta em circulação (milhões)', 100, 0, 1000000, 1)}
      ${MQ.number('total', 'Oferta total ou máxima (milhões)', 1000, 0, 1000000, 1)}
      ${MQ.slider('unl', 'Parte da oferta total a ser desbloqueada nos próximos 12 meses', 0, 50, 1, 15, 'pct')}
    </div><div class="wout">
      <div class="stats">${MQ.stat('mc', 'Capitalização de mercado (em circulação)')}${MQ.stat('fdv', 'Valor totalmente diluído (FDV)', 'hi')}${MQ.stat('ratio', 'Parte já em circulação')}${MQ.stat('dil', 'Oferta adicionada em 12 meses', 'bad')}${MQ.stat('need', 'Compras novas necessárias para manter o preço', 'bad')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">Capitalização = preço × oferta em circulação. FDV = preço × oferta total. Uma grande diferença significa que ainda há muitos tokens por libertar, o que costuma criar pressão vendedora.</p>`;
    el.querySelectorAll('[data-p]').forEach((b) => b.addEventListener('click', () => {
      const p = b.dataset.p.split(',');
      el.querySelector('[data-k="circ"]').value = p[0]; el.querySelector('[data-k="total"]').value = p[1]; el.querySelector('[data-k="unl"]').value = p[2];
      MQ.setVal(el, 'price', el.querySelector('[data-k="price"]').value);
    }));
    MQ.bind(el, (v) => {
      const mc = v.price * v.circ * 1e6, fdv = v.price * v.total * 1e6, ratio = v.total ? v.circ / v.total * 100 : 0, add = v.total * v.unl / 100, dil = v.circ ? add / v.circ * 100 : 0;
      const f = (n) => n >= 1e9 ? '€' + MQ.num(n / 1e9, 2) + ' mil M' : n >= 1e6 ? '€' + MQ.num(n / 1e6, 1) + ' M' : MQ.eur(n);
      MQ.set(el, { mc: f(mc), fdv: f(fdv), ratio: ratio.toFixed(0) + '%', dil: '+' + dil.toFixed(0) + '%', need: f(add * 1e6 * v.price),
        txt: ratio < 30 ? 'Float baixo: só ' + ratio.toFixed(0) + '% dos tokens circulam. Insiders e investidores iniciais podem desbloquear grandes quantidades mais tarde. A capitalização de mercado apresentada subestima a avaliação real.' : ratio < 70 ? 'Float médio. Vê o calendário de desbloqueios: quem recebe os novos tokens e quando os pode vender?' : 'A maior parte da oferta já circula, por isso a diluição futura é limitada. A avaliação é mais fácil de julgar.' });
    });
  };

  /* ---------------- quanto cripto? ---------------- */
  W.cryptosize = (el) => {
    accent(el, 'ci');
    el.innerHTML = `<h4 class="wt">Quanto é demasiado? O teste da queda de 80%</h4>
    <div class="wgrid"><div class="wctl">
      ${MQ.number('nw', 'O teu património total investível (€)', 20000, 0, 1000000000, 1000)}
      ${MQ.slider('pc', 'Parte que pões em cripto', 0, 60, 1, 5, 'pct')}
      ${MQ.slider('drop', 'A cripto cai', 10, 95, 1, 80, 'pct')}
      ${MQ.number('sav', 'Poupas por mês (€)', 400, 0, 1000000, 50)}
    </div><div class="wout">
      <div data-r="bar"></div>
      <div class="stats">${MQ.stat('val', 'Cripto hoje')}${MQ.stat('loss', 'Perdes', 'bad')}${MQ.stat('imp', 'Impacto no teu património total', 'hi')}${MQ.stat('rec', 'Meses de poupança para repor')}${MQ.stat('gain', 'Subida necessária para recuperar')}</div>
      <div class="msg"><p data-r="txt"></p></div>
    </div></div>
    <p class="note">O Bitcoin já caiu entre 70 e 85% face ao máximo várias vezes, e moedas mais pequenas costumam cair mais. O valor certo é aquele que te deixa dormir e manter o plano depois de uma queda destas.</p>`;
    MQ.bind(el, (v) => {
      const val = v.nw * v.pc / 100, loss = val * v.drop / 100, imp = v.nw ? loss / v.nw * 100 : 0, gain = v.drop < 100 ? (1 / (1 - v.drop / 100) - 1) * 100 : 0;
      MQ.set(el, { bar: MQ.stackBar([{ v: 100 - v.pc, c: '#14B37D', l: 'Todo o resto' }, { v: v.pc, c: '#A58FFF', l: 'Cripto' }]) + MQ.legend([['Todo o resto', '#14B37D'], ['Cripto', '#A58FFF']]),
        val: MQ.eur(val), loss: MQ.eur(loss), imp: '-' + MQ.num(imp, 1) + '%', rec: v.sav > 0 ? MQ.num(loss / v.sav, 1) + ' meses' : '–', gain: '+' + MQ.num(gain, 0) + '%',
        txt: imp < 5 ? 'Doloroso mas suportável: uma queda assim custa-te ' + MQ.num(imp, 1) + '% do património. O teu plano de vida mantém-se intacto.' : imp < 20 ? 'Isto doía. Pergunta a ti próprio, com honestidade, se manterias a calma e o plano.' : 'É uma aposta grande. Um colapso assim mudaria as tuas finanças. A maioria dos principiantes fica mais segura a começar com muito menos.' });
    });
  };

  /* ---------------- teste de adulteração da blockchain ---------------- */
  W.chain = (el) => {
    accent(el, 'ci');
    const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return ('00000000' + h.toString(16)).slice(-8); };
    const init = ['Ana paga 2 moedas a Bruno', 'Bruno paga 1 moeda a Carla', 'Carla paga 0,5 moedas a Duarte', 'Duarte paga 1 moeda a Eva'];
    const ref = []; init.forEach((t, i) => ref.push(hash((i ? ref[i - 1] : '00000000') + t)));
    el.innerHTML = `<h4 class="wt">Teste de adulteração: tenta enganar a cadeia</h4>
    <div class="cards" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr));display:grid;gap:.8rem">${init.map((t, i) => `<div class="stat" data-b="${i}"><span class="sl">Bloco ${i + 1}</span>
      <label class="sr" for="chain-${i}">Dados do bloco ${i + 1}</label><input type="text" id="chain-${i}" data-i="${i}" value="${t}" maxlength="40">
      <p class="note mono" style="margin:.4rem 0 0">anterior: ${i ? ref[i - 1] : '00000000'}</p><p class="note mono" style="margin:0">hash: <span data-h></span></p><p style="margin:.3rem 0 0;font-weight:700;font-size:.88rem" data-s></p></div>`).join('')}</div>
    <div class="btnrow" style="margin-top:.8rem"><button class="btn sm alt" type="button" data-reset>Repor a cadeia</button></div>
    <p class="note">O hash é uma impressão digital curta dos dados do bloco mais o hash anterior. As blockchains reais usam hashes muito mais fortes e milhares de computadores independentes a verificarem-se uns aos outros.</p>`;
    const upd = () => {
      let broken = -1, prev = '00000000';
      MQ.$$('[data-b]', el).forEach((b, i) => {
        const txt = b.querySelector('input').value, cur = hash((i ? ref[i - 1] : '00000000') + txt);
        if (broken < 0 && cur !== ref[i]) broken = i;
        b.querySelector('[data-h]').textContent = cur;
        const s = b.querySelector('[data-s]');
        if (broken < 0) { s.textContent = 'Válido'; s.style.color = 'var(--good)'; }
        else if (i === broken) { s.textContent = 'Dados alterados: o hash difere'; s.style.color = 'var(--bad)'; }
        else { s.textContent = 'Quebrado: o hash anterior já não coincide'; s.style.color = 'var(--bad)'; }
        prev = cur;
      });
    };
    el.addEventListener('input', upd);
    el.querySelector('[data-reset]').addEventListener('click', () => { MQ.$$('input', el).forEach((inp, i) => { inp.value = init[i]; }); upd(); });
    upd();
  };

  /* ---------------- lista de verificação genérica ---------------- */
  W.checklist = (el, d) => {
    accent(el, d.accent || 'found');
    const items = (d.items || '').split('|').filter(Boolean), key = 'cl-' + (d.key || 'x');
    let st = MQ.store.get(key, []); if (!Array.isArray(st)) st = [];
    const render = () => {
      const n = items.filter((x, i) => st[i]).length;
      el.innerHTML = `<h4 class="wt">${d.title || 'Lista de verificação'}</h4><div class="pbar" style="margin-bottom:.6rem"><i style="width:${items.length ? n / items.length * 100 : 0}%"></i></div><p class="note" style="margin:0 0 .4rem">${n} de ${items.length} concluídos</p>` +
        items.map((t, i) => `<label class="cb"><input type="checkbox" data-i="${i}" ${st[i] ? 'checked' : ''}><span>${t}</span></label>`).join('');
    };
    el.addEventListener('change', (e) => {
      const i = e.target.dataset.i; if (i == null) return;
      st[i] = e.target.checked; MQ.store.set(key, st);
      const n = items.filter((x, k) => st[k]).length;
      el.querySelector('.pbar i').style.width = (n / items.length * 100) + '%'; el.querySelector('.note').textContent = n + ' de ' + items.length + ' concluídos';
    });
    render();
  };
})();
