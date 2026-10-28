/* Glossário, página do Percurso Pro e páginas do Trading Lab */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;
  const LAB = 'https://fofinho8.gumroad.com/l/trading-lab';
  MQ.misc = {};

  MQ.misc.glossary = [
    ['Altcoin', 'Qualquer criptoativo que não seja o Bitcoin.'],
    ['Ask', 'O preço mais baixo a que os vendedores aceitam vender. Pagas o ask quando compras.'],
    ['Alocação de ativos', 'Como o teu dinheiro se reparte entre tipos de ativos como ações, obrigações, liquidez e cripto.'],
    ['ATR (average true range)', 'Um indicador de quanto um ativo costuma mover-se num período. Usado para definir stops e o tamanho da posição.'],
    ['Mercado em baixa (bear market)', 'Um período longo de preços a cair, muitas vezes definido como uma queda de 20% ou mais desde um máximo.'],
    ['Bid', 'O preço mais alto que os compradores aceitam pagar. Recebes o bid quando vendes.'],
    ['Blockchain', 'Um registo digital partilhado, mantido por muitos computadores, em que blocos de dados estão encadeados e são difíceis de alterar.'],
    ['Obrigação', 'Um empréstimo a um governo ou empresa que paga juros e devolve o capital no final.'],
    ['Corretora (broker)', 'Uma empresa que executa as tuas ordens de compra e venda nos mercados financeiros.'],
    ['Mercado em alta (bull market)', 'Um período longo de preços a subir.'],
    ['Candlestick (vela)', 'Um símbolo gráfico que mostra abertura, máximo, mínimo e fecho de um período.'],
    ['Imposto sobre mais-valias', 'Imposto sobre o lucro obtido quando vendes um ativo por mais do que pagaste.'],
    ['CFD (contrato por diferença)', 'Um contrato alavancado com uma corretora que acompanha o preço de um ativo sem o possuíres. Alto risco para traders de retalho.'],
    ['Carteira fria (cold wallet)', 'Uma carteira de cripto mantida offline (muitas vezes um dispositivo físico) para forte segurança.'],
    ['Juro composto', 'Obter rendimentos sobre os teus rendimentos anteriores, de modo que o crescimento acelera com o tempo.'],
    ['Correlação', 'O quão de perto dois ativos se movem em conjunto. Baixa correlação ajuda a diversificação.'],
    ['Custo de aquisição (cost basis)', 'O que pagaste originalmente por um ativo, incluindo comissões. Usado para calcular ganhos para efeitos fiscais.'],
    ['Carteira custodial', 'Uma carteira em que uma empresa (como uma exchange) guarda as chaves privadas por ti.'],
    ['DCA (dollar-cost averaging)', 'Investir um montante fixo a intervalos regulares, independentemente do preço.'],
    ['DeFi (finanças descentralizadas)', 'Serviços financeiros como empréstimos e trading geridos por smart contracts em vez de instituições tradicionais.'],
    ['Derivado', 'Um contrato cujo valor depende de outro ativo: futuros, opções, CFDs.'],
    ['Diversificação', 'Repartir o dinheiro por muitos ativos para que uma falha não te arruíne.'],
    ['Dividendo', 'Uma parte dos lucros da empresa paga aos acionistas.'],
    ['Doji', 'Uma vela em que a abertura e o fecho são quase iguais, sinalizando indecisão.'],
    ['Drawdown', 'A queda de um máximo para um mínimo no valor da tua conta ou carteira.'],
    ['EMA (média móvel exponencial)', 'Uma média móvel que dá mais peso aos preços recentes.'],
    ['Fundo de emergência', 'Poupança guardada para custos inesperados, normalmente 3 a 6 meses de despesas essenciais.'],
    ['EPS (lucro por ação)', 'O lucro líquido de uma empresa dividido pelo número de ações.'],
    ['ETF (fundo cotado)', 'Um cabaz de ativos que negoceia numa bolsa como uma ação.'],
    ['Exchange (bolsa)', 'Um mercado onde os ativos são comprados e vendidos. Em cripto, uma plataforma para negociar moedas.'],
    ['Expectativa (expectancy)', 'O valor médio que esperas ganhar ou perder por operação ao longo de muitas operações.'],
    ['FDV (valorização totalmente diluída)', 'Preço do token vezes a oferta total, mostrando o valor se todos os tokens estivessem em circulação.'],
    ['Índice de Medo e Ganância', 'Uma pontuação de 0 a 100 do sentimento do mercado de cripto (ou de ações). Leituras extremas podem sinalizar sobreaquecimento ou pânico.'],
    ['Fiat', 'Dinheiro emitido por governos, como euros ou dólares americanos.'],
    ['FOMO', 'Medo de ficar de fora (fear of missing out). A vontade de comprar porque os outros estão a lucrar.'],
    ['Taxa de funding', 'Um pagamento periódico entre longs e shorts nos futuros perpétuos que mantém o preço do contrato perto do spot.'],
    ['Futuros', 'Contratos para comprar ou vender um ativo a um preço fixado numa data futura.'],
    ['Taxa de gas', 'A taxa paga a uma rede blockchain para processar uma transação.'],
    ['Halving', 'Um evento programado que reduz para metade a emissão de novos bitcoins, aproximadamente a cada quatro anos.'],
    ['Carteira de hardware', 'Um dispositivo físico dedicado que guarda offline as chaves privadas de cripto.'],
    ['Hash', 'Uma impressão digital curta de dados. Alterar os dados altera o hash.'],
    ['Fundo de índice', 'Um fundo que copia um índice de mercado a baixo custo.'],
    ['Inflação', 'Uma subida geral dos preços ao longo do tempo que reduz o que o dinheiro consegue comprar.'],
    ['Margem isolada', 'Um modo de margem em que só a garantia atribuída a uma posição está em risco.'],
    ['KYC (conhece o teu cliente)', 'Verificações de identidade exigidas pelas plataformas financeiras reguladas.'],
    ['Alavancagem', 'Usar dinheiro emprestado ou contratos para controlar uma posição maior do que o teu dinheiro. Amplifica ganhos e perdas.'],
    ['Ordem limite', 'Uma ordem de compra ou venda apenas a um preço especificado ou melhor.'],
    ['Liquidação', 'O fecho forçado de uma posição alavancada quando as perdas esgotam a tua margem.'],
    ['Liquidez', 'A facilidade com que um ativo pode ser comprado ou vendido sem mexer no preço.'],
    ['Long', 'Comprar um ativo na esperança de que o preço suba.'],
    ['Maker / taker', 'Os makers adicionam ordens ao livro de ordens (taxa menor); os takers retiram-nas negociando de imediato (taxa maior).'],
    ['Margem', 'A garantia que depositas para abrir uma posição alavancada.'],
    ['Capitalização de mercado', 'Preço multiplicado pelo número de unidades em circulação.'],
    ['Ordem a mercado', 'Uma ordem de compra ou venda imediata ao melhor preço disponível.'],
    ['Média móvel', 'O preço médio ao longo de um número definido de períodos, suavizando o ruído para mostrar a tendência.'],
    ['Open interest', 'O valor total dos contratos de derivados em aberto que ainda não foram fechados.'],
    ['Rácio P/E (PER)', 'Preço da ação dividido pelo lucro por ação. Quanto pagas por cada unidade de lucro.'],
    ['Paper trading', 'Praticar trading com dinheiro simulado.'],
    ['Futuros perpétuos', 'Contratos de futuros sem data de expiração, mantidos perto do preço spot por pagamentos de funding.'],
    ['Chave privada', 'O código secreto que prova a propriedade e te permite movimentar cripto. Nunca o partilhes.'],
    ['Prova de participação / prova de trabalho', 'Duas formas de as blockchains chegarem a acordo: bloqueando moedas (stake) ou gastando poder de computação (trabalho).'],
    ['Pump and dump', 'Um esquema que promove um ativo para subir o preço e depois vende a compradores que chegam tarde.'],
    ['Múltiplo R', 'O resultado de uma operação medido em unidades do risco inicial. Arriscar 50 € e ganhar 100 € é +2R.'],
    ['Reequilíbrio (rebalancing)', 'Ajustar a tua carteira de volta à composição-alvo.'],
    ['Resistência', 'Uma zona de preço onde a pressão vendedora travou repetidamente subidas.'],
    ['RSI (índice de força relativa)', 'Um indicador de momentum que varia entre 0 e 100.'],
    ['Rug pull', 'Uma burla em que os programadores drenam a liquidez ou abandonam um projeto depois de angariarem dinheiro.'],
    ['Scalping', 'Negociar a prazo muito curto, por pequenos ganhos, muitas vezes por dia.'],
    ['Seed phrase (frase de recuperação)', 'Uma lista de 12 ou 24 palavras que pode recriar a tua carteira. Quem a tiver controla os fundos.'],
    ['Short', 'Vender um ativo emprestado na esperança de o recomprar mais barato.'],
    ['Slippage (derrapagem)', 'A diferença entre o preço de execução esperado e o real de uma ordem.'],
    ['Smart contract', 'Um programa numa blockchain que corre automaticamente quando as condições são cumpridas.'],
    ['Spot', 'Comprar ou vender o ativo real ao preço atual, sem alavancagem.'],
    ['Spread', 'A diferença entre o preço bid e o preço ask.'],
    ['Stablecoin', 'Um token de cripto concebido para manter um valor estável, muitas vezes indexado a uma moeda.'],
    ['Staking', 'Bloquear moedas de prova de participação para ajudar a proteger uma rede em troca de recompensas.'],
    ['Stop-loss', 'Uma ordem que fecha uma posição se o preço atingir um nível de perda definido.'],
    ['Suporte', 'Uma zona de preço onde os compradores intervieram repetidamente.'],
    ['Swing trading', 'Manter posições de vários dias a várias semanas.'],
    ['TER (taxa de encargos totais)', 'A comissão anual cobrada por um fundo, em percentagem do teu investimento.'],
    ['Tokenomics', 'A economia de um token: oferta, distribuição, emissão e utilidade.'],
    ['UCITS', 'Um quadro regulamentar europeu para fundos de investimento dirigidos a investidores de retalho.'],
    ['Volatilidade', 'O quanto e quão depressa os preços sobem e descem.'],
    ['Volume', 'A quantidade de um ativo negociada durante um período.'],
    ['VWAP', 'Preço médio ponderado pelo volume, uma referência intradiária comum de valor justo.'],
    ['Carteira (wallet)', 'Software ou hardware que guarda as tuas chaves de cripto e te permite enviar e receber moedas.'],
    ['Baleia (whale)', 'Um detentor com uma quantidade muito grande de um ativo, capaz de mexer o mercado.'],
    ['Rendimento (yield)', 'O rendimento que um investimento paga, expresso em percentagem do seu preço.']
  ];

  /* ---------- Trading Lab: cartão compacto na página inicial ---------- */
  MQ.misc.labCard = `<div class="lab">
    <div>
      <p class="eyebrow" style="color:#17143A;opacity:.75">Opcional · do criador deste curso</p>
      <h2>Queres ir mais fundo? Conhece o Trading Lab.</h2>
      <p>Este curso é gratuito e completo por si só. Se queres estrutura extra para o trading, o <b>Trading Lab</b> é o programa pago do autor no Gumroad: um curso de trading completo mais um <b>bot de trading</b> pensado para ajudar os traders a aplicar as suas regras com consistência.</p>
      <ul><li>Programa de trading completo para aprender e praticar</li><li>Inclui um bot de trading usado por muitos membros</li><li>Subscrição mensal, sem precisares de comprar mais nada</li></ul>
      <div class="btnrow"><a class="btn" href="#lab">Ver o que inclui</a><a class="btn alt" href="${LAB}" target="_blank" rel="noopener noreferrer">Abrir no Gumroad ↗</a></div>
      <p class="fine">O trading envolve um risco elevado de perda. Nenhum curso ou bot pode garantir resultados. Divulgação: o Trading Lab é vendido pelo autor da Money Quest Academy.</p>
    </div>
    <div class="price"><small>Trading Lab</small><b>39 €</b><small>por mês + IVA</small></div>
  </div>`;

  /* ---------- Trading Lab: página completa ---------- */
  MQ.misc.labPage = `<section class="thead" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.ct}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Programa pago opcional · do criador da Money Quest</p><h1>Trading Lab</h1><p>Um programa de trading completo com um bot de trading, para quem quer estrutura depois de terminar os percursos de Trader gratuitos.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)">
    ${B.box('warn', 'Divulgação', '<p>A Money Quest Academy é gratuita. O Trading Lab é um produto pago separado, vendido pelo mesmo autor. Não precisas dele para concluir nenhum percurso deste curso.</p>')}
    <h3>O que é</h3>
    <p>O Trading Lab é um programa por subscrição disponível no Gumroad. Reúne num só lugar o conhecimento necessário para fazer trading, juntamente com um <b>bot de trading</b> que ajuda os traders a seguir regras de forma consistente em vez de tomarem decisões emocionais. Muitos membros usam-no para dar estrutura ao seu trading.</p>
    <div class="lab" style="margin:1.4rem 0;box-shadow:var(--shadow)"><div><h2 style="font-size:1.8rem">39 € por mês + IVA</h2><p style="margin:0">Tudo numa só subscrição: o programa de trading e o bot. Consulta a página do Gumroad para ver o preço atual, a lista completa do que está incluído e os termos.</p>
      <div class="btnrow" style="margin-top:1rem"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Abrir o Trading Lab no Gumroad ↗</a></div></div><div class="price"><small>Trading Lab</small><b>39 €</b><small>por mês + IVA</small></div></div>
    <h3>A quem pode servir</h3>
    <ul><li>Pessoas que terminaram o percurso Day Trader ou Trader de Cripto e querem um programa guiado.</li><li>Traders com dificuldade de disciplina que querem regras executadas com consistência.</li><li>Quem prefere um sistema estruturado a montar ferramentas uma a uma.</li></ul>
    <h3>Quem deve passar à frente</h3>
    <ul><li>Quem ainda não construiu um fundo de emergência ou tem dívidas com juros altos.</li><li>Quem espera lucro garantido. Nenhum produto honesto oferece isso.</li><li>Principiantes que ainda não praticaram num simulador. Faz primeiro o laboratório de paper trading.</li></ul>
    <h3>Como se encaixa com este curso gratuito</h3>
    ${B.tbl(['', 'Money Quest (gratuito)', 'Trading Lab (pago)'], [
        ['Objetivo', 'Ensina os fundamentos de investir e de fazer trading', 'Programa e bot de trading para traders ativos'],
        ['Custo', 'Gratuito', '39 € por mês + IVA'],
        ['Ideal para', 'Todos os que começam do zero', 'Traders que querem estrutura e automatização extra'],
        ['Risco', 'Educativo, sem trading envolvido', 'O trading implica um risco real de perda']
      ])}
    <h3>Expectativas honestas</h3>
    <p>Um bot é software que segue regras. Pode ajudar-te a manter a disciplina e nunca se cansa, mas não cria uma vantagem por si só e não elimina o risco de mercado. Os resultados dependem das condições de mercado, das tuas definições, da tua gestão de risco e do teu próprio comportamento. Usa a checklist da lição sobre bots: percebe as regras, testa com tamanho pequeno, usa permissões só de trading e define uma perda máxima.</p>
    ${B.warn('<p>Nunca invistas dinheiro que não podes perder. O trading, e sobretudo o trading alavancado, pode perder dinheiro depressa.</p>')}
    <div class="btnrow"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Abrir o Trading Lab no Gumroad ↗</a><a class="btn alt" href="#track-ct">Voltar ao percurso Trader de Cripto</a></div>
  </div></div></section>`;

  /* ---------- Percurso Pro ---------- */
  MQ.misc.proPage = `<section class="thead" style="${MQ.trackStyle('found')}"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.found}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Depois dos percursos</p><h1>O Percurso Pro</h1><p>O que separa os amadores dos profissionais, e a escada de principiante a alguém em quem os outros confiam para gerir dinheiro.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="${MQ.trackStyle('found')}">
    <p>“Profissional” não é um título que te dás a ti próprio. É uma forma de trabalhar. Os profissionais têm <b>processo</b>, <b>controlo de risco</b>, <b>registos</b> e <b>humildade</b>. Sobrevivem aos maus anos e compõem os bons. A escada abaixo serve para investidores, traders e cripto por igual.</p>
    <h3>Os quatro níveis</h3>
    ${B.tbl(['Nível', 'O que fazes', 'Prova de que estás pronto para o nível seguinte'], [
      ['1. Estudante', 'Termina os Fundamentos e o percurso que escolheste. Pratica com simuladores. Constrói o teu fundo de emergência.', 'Consegues explicar a um amigo o risco, a diversificação, os custos e o teu próprio plano. A tua base financeira está montada.'],
      ['2. Aprendiz', 'Investe com regularidade pequenos montantes reais. Mantém um diário de decisões. Se fizeres trading, usa 10% do tamanho pretendido.', '12 meses de hábitos consistentes; 100 decisões registadas; seguiste o teu plano durante pelo menos um período assustador.'],
      ['3. Praticante', 'Um processo testado com resultados medidos: alocação e reequilíbrio para investidores; expectativa positiva e controlo de drawdown para traders.', 'Dois ou mais anos de registos; custos e impostos compreendidos; perdas geridas sem quebrar regras.'],
      ['4. Profissional', 'Outros dependem do teu trabalho: gerir dinheiro para ti a grande escala, trabalhar em finanças ou dirigir um negócio de trading estruturado.', 'Historial verificado, enquadramento de risco, formação contínua e capacidade de explicar cada decisão.']
    ])}
    <h3>O que os profissionais fazem de diferente</h3>
    <ol>
      <li><b>Pensam em probabilidades, não em previsões.</b> “Se este setup ocorrer 100 vezes, o que acontece em média?”</li>
      <li><b>Definem a perda antes do ganho.</b> Cada posição tem uma perda máxima aceitável.</li>
      <li><b>Obcecam-se com custos, impostos e processo</b>, as coisas que conseguem controlar.</li>
      <li><b>Mantêm registos.</b> Diários, relatórios de desempenho, alterações de regras com razões.</li>
      <li><b>Separam lições de resultados.</b> Uma boa decisão pode perder; uma má decisão pode ganhar.</li>
      <li><b>Protegem a sua psicologia.</b> Sono, rotina e limites fazem parte do trabalho.</li>
      <li><b>Continuam a aprender.</b> Os mercados mudam; as regras que funcionam também.</li>
    </ol>
    <h3>Percursos de carreira em finanças</h3>
    ${B.tbl(['Percurso', 'O que envolve', 'Credenciais úteis'], [
      ['Analista financeiro / investigador', 'Estudar empresas e mercados; escrever recomendações.', 'Licenciatura em finanças ou economia; programa CFA'],
      ['Gestor de carteiras / fundos', 'Decidir alocações para fundos ou clientes.', 'CFA, bom historial, licenças'],
      ['Gestor de risco', 'Medir e limitar os riscos que uma empresa assume.', 'Certificação FRM, matemática e estatística'],
      ['Analista ou programador quantitativo', 'Construir modelos, pipelines de dados e estratégias automatizadas.', 'Matemática, estatística, programação'],
      ['Analista técnico / estratega de mercado', 'Investigação baseada em gráficos e estrutura de mercado.', 'Programa CMT'],
      ['Consultor / planeador financeiro', 'Ajudar particulares a planear o património.', 'Licenciamento local e certificações de planeador'],
      ['Trader ou investidor independente', 'Negociar ou investir o teu próprio capital como um negócio.', 'Capital, disciplina, registos, impostos em ordem'],
      ['Funções em cripto', 'Investigação, segurança, conformidade, trading e desenvolvimento em empresas de cripto.', 'Conhecimento de blockchain, competências de segurança, noção de regulação']
    ])}
    <h3>Uma nota sobre as empresas de prop trading</h3>
    <p>Algumas empresas oferecem “financiar” traders depois de passarem uma avaliação. Algumas são legítimas, mas muitas ganham a maior parte do dinheiro com as taxas de avaliação pagas por quem falha. Lê as regras com atenção, procura opiniões independentes, percebe a divisão de lucros e os limites de drawdown, e nunca pagues dinheiro que não podes perder.</p>
    <h3>Hábitos para os próximos 12 meses</h3>
    <ul>
      <li>Lê um bom livro sobre investimento ou risco por trimestre.</li>
      <li>Revê o teu plano e os resultados todos os meses; reescreve o plano uma vez por ano.</li>
      <li>Aprende com os mercados sem precisares de os negociar: estuda a história (1929, 1973, 1987, 2000, 2008, 2020, 2022).</li>
      <li>Partilha o que aprendes. Ensinar outra pessoa é a forma mais rápida de encontrar lacunas.</li>
      <li>Mantém-te humilde. Os mercados punem a certeza.</li>
    </ul>
    ${B.key('<p><b>A melhor competência profissional é manter-se no jogo.</b> Se protegeres o teu capital e a tua mente, o tempo e os juros compostos fazem a maior parte do resto.</p>')}
    <div class="btnrow"><a class="btn" href="#cert">Ver o meu progresso e certificado</a><a class="btn alt" href="#home">Voltar aos percursos</a></div>
  </div></div></section>`;
})();
