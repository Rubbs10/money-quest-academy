/* Percurso Trader de Cripto: 8 lições */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ct', [
    {
      id: 'd1', m: 12, t: 'Trading de cripto 101: mercados 24/7, spot e derivados',
      hook: 'Como os mercados de cripto diferem das ações e quais os principais produtos que os traders usam.',
      body: `
<p>O trading de cripto partilha a lógica de qualquer trading (gráficos, risco, psicologia), mas com um sabor próprio: o mercado nunca fecha, a volatilidade é maior, os produtos são mais exóticos e as regras variam por país. Antes de aprender táticas, percebe o campo de jogo.</p>

<h3>O que há de diferente nos mercados de cripto?</h3>
<ul>
<li><b>24/7/365</b>: sem toque de abertura, sem fins de semana livres. Grandes movimentos podem acontecer às 3 da manhã, enquanto dormes.</li>
<li><b>Volatilidade alta</b>: movimentos diários de 3 a 10% são normais em muitas moedas. Oportunidade e perigo ao mesmo tempo.</li>
<li><b>Plataformas fragmentadas</b>: centenas de exchanges, cada uma com preços, liquidez, taxas e riscos próprios.</li>
<li><b>Regulação mais leve</b>: as proteções são mais fracas e o risco de manipulação (pump and dump, wash trading) é maior, sobretudo em moedas pequenas.</li>
<li><b>Sentimento que se auto-reforça</b>: redes sociais, baleias e alavancagem criam movimentos rápidos e emocionais.</li>
</ul>

<h3>Os principais produtos</h3>
${B.tbl(['Produto', 'O que é', 'Alavancagem', 'Risco'], [
        ['Spot', 'Compras e és dono da moeda real', 'Nenhuma', 'Apenas risco de preço. O melhor para principiantes'],
        ['Margin trading', 'Pedes emprestado para comprar mais do que tens', 'Baixa a alta', 'Perdas amplificadas; pagas juros pelos empréstimos'],
        ['Futuros (com data)', 'Contrato para comprar ou vender numa data futura', 'Até 100x ou mais', 'A liquidação pode apagar a tua margem'],
        ['Futuros perpétuos', 'Futuros sem expiração, mantidos perto do preço spot por pagamentos de funding', 'Até 100x ou mais', 'Custos de funding + liquidação + risco da exchange'],
        ['Opções', 'Direitos de comprar ou vender a um preço fixado', 'Incorporada', 'Complexas; podem expirar sem valor']
      ])}
<p>O acesso difere por país. Muitos reguladores restringem ou proíbem derivados para clientes de retalho, e as plataformas podem limitar a alavancagem em certas regiões. Segue sempre as regras locais e os termos de um fornecedor regulado.</p>

<h3>Como as exchanges ganham dinheiro: taxas</h3>
<ul>
<li><b>Maker</b>: colocas uma ordem limite que espera no livro de ordens e adiciona liquidez. Normalmente tem taxas mais baixas.</li>
<li><b>Taker</b>: aceitas imediatamente uma ordem existente (ordem a mercado). Taxas mais altas.</li>
<li>Taxas de 0,02% a 0,1% por operação parecem pequenas, mas somam-se para quem opera muito.</li>
</ul>

<h3>Sessões e liquidez</h3>
<p>Embora o mercado nunca pare, a atividade segue os fusos horários humanos. O volume costuma ser maior quando a Europa e os EUA se sobrepõem, e menor aos fins de semana, quando os preços podem mexer-se bruscamente com pouca liquidez. Os traders evitam muitas vezes colocar ordens grandes em horas de baixa liquidez.</p>

<h3>Pares e moedas base</h3>
<p>Os pares escrevem-se como BTC/USDT: o primeiro é o que compras ou vendes, o segundo é aquilo com que pagas. Os pares com stablecoins (USDT, USDC) são os mais líquidos. Saber em que moeda é medido o teu lucro importa: uma operação pode estar “a ganhar em USDT” enquanto a moeda que tens caiu face ao Bitcoin.</p>

${B.ex('<p>É domingo, 4 da manhã. O Sam tem uma posição alavancada e dorme. Surge uma notícia súbita, a liquidez é fraca e o preço dispara 8% contra ele em poucos minutos. Não tinha colocado stop. Acorda com uma liquidação. Nos mercados tradicionais estaria protegido pelo horário fechado; em cripto, a gestão de risco tem de funcionar enquanto dormes (stops, tamanho menor, sem alavancagem durante a noite).</p>')}

${B.warn('<p>Os derivados são para traders experientes. Se és novo, começa pelo trading spot e com tamanho pequeno, e lê as próximas lições sobre alavancagem antes de tocares em futuros.</p>')}

${B.take(['A cripto negoceia 24/7, com volatilidade alta e proteções mais fracas.', 'Spot significa ser dono da moeda; os futuros perpétuos acrescentam alavancagem, funding e risco de liquidação.', 'As ordens maker adicionam liquidez (taxa menor), as ordens taker retiram-na (taxa maior).', 'Os controlos de risco têm de funcionar enquanto dormes: stops, tamanho pequeno, sem alavancagem descuidada durante a noite.'])}`,
      q: [
        ['Qual é a diferença essencial entre spot e futuros perpétuos?', ['No spot és dono da moeda; os perpétuos são contratos alavancados com funding e liquidação', 'Não há nenhuma', 'O spot tem sempre alavancagem', 'Os perpétuos são mais seguros'], 0, 'Os futuros perpétuos são derivados com alavancagem e custos de funding.'],
        ['Que tipo de ordem costuma pagar a taxa mais baixa?', ['Ordem taker (a mercado)', 'Ordem maker (limite) que adiciona liquidez', 'Ambas são sempre iguais', 'Ordem stop'], 1, 'Os makers adicionam liquidez ao livro de ordens e costumam ser recompensados com taxas menores.'],
        ['Porque é que a gestão de risco é mais difícil em cripto do que nas ações?', ['Os mercados fecham demasiadas vezes', 'O mercado nunca fecha, por isso grandes movimentos podem acontecer enquanto estás ausente', 'As taxas são fixas', 'Não há volatilidade'], 1, 'Negociar 24 horas por dia significa que as proteções têm de estar sempre ativas.']
      ]
    },
    {
      id: 'd2', m: 14, t: 'Alavancagem e liquidação: como as contas são apagadas',
      hook: 'A calculadora que todo o trader de cripto deve usar antes de cada operação alavancada.',
      body: `
<p>A alavancagem permite-te controlar uma posição maior do que o teu dinheiro. É a funcionalidade que atrai a maioria dos principiantes e destrói a maioria deles. Perceber a liquidação não é opcional.</p>

<h3>Como funciona a alavancagem</h3>
<p>Se colocas 500 € (a tua <b>margem</b>) e usas alavancagem de 10x, controlas uma posição de 5 000 €. Um movimento de 1% no preço altera a tua conta em 10%. Um movimento de 10% contra ti apaga os 500 € todos.</p>
<ul>
<li><b>Margem</b>: a garantia que depositas.</li>
<li><b>Margem de manutenção</b>: a garantia mínima que a exchange exige para manter a tua posição aberta.</li>
<li><b>Liquidação</b>: quando as perdas empurram a tua margem abaixo da manutenção, a exchange fecha à força a tua posição. Perdes a margem e, por vezes, taxas e custos extra.</li>
<li><b>Margem isolada</b>: só a margem atribuída a essa operação está em risco. <b>Margem cruzada</b>: o saldo total da conta suporta a operação, por isso uma má posição pode esvaziar tudo.</li>
</ul>

<h3>A fórmula simples de liquidação (aproximação)</h3>
<p>Para uma posição longa com margem isolada: <b>preço de liquidação ≈ entrada × (1 − 1/alavancagem + taxa de margem de manutenção)</b>. Para uma curta, é o espelho acima da entrada. A 10x, és liquidado após um movimento de cerca de 9,5% contra ti. A 50x, após cerca de 1,5%. A 100x, após cerca de 0,5%, menos do que uma oscilação normal durante uma pausa para café numa moeda volátil.</p>

<h3>Experimenta tu</h3>
<p>Escolhe a alavancagem e vê a distância até à liquidação comparada com o movimento diário típico do ativo.</p>
${B.w('liq')}

<h3>Porque é que a alavancagem alta é uma armadilha</h3>
<ul>
<li><b>O ruído mata-te</b>: o preço faz constantemente pequenas oscilações e pavios. Níveis de liquidação apertados são atingidos pelo ruído, não pela “tendência verdadeira”.</li>
<li><b>Não podes errar nem um pouco</b>: alavancagem alta exige timing perfeito.</li>
<li><b>Cascatas de liquidações</b>: quando o preço se mexe, liquidações forçadas provocam mais vendas (ou compras), o que empurra o preço mais longe e liquida mais traders. Em vários crashes, milhares de milhões de dólares em posições alavancadas foram liquidados num único dia.</li>
<li><b>Taxas e funding</b> cobram-se sobre o tamanho total da posição, por isso os custos sobem com a alavancagem.</li>
<li><b>Auto-desalavancagem e derrapagem</b>: em movimentos extremos, as exchanges podem fechar posições com lucro ou executar o teu stop longe de onde o definiste.</li>
</ul>

<h3>A visão profissional da alavancagem</h3>
<p>Os profissionais não veem a alavancagem como forma de enriquecer depressa. Tratam-na como ferramenta de <b>eficiência de capital</b>: usam só o necessário para depositar a margem de uma posição dimensionada pelo risco. Decidem o tamanho da posição a partir da distância do stop (vê a lição de risco), e a alavancagem é simplesmente o que resultar, normalmente baixa (1x a 3x). A mentalidade-chave: o teu <i>risco</i> é a distância do stop vezes o teu tamanho, não o número da alavancagem.</p>
${B.ex('<p>Dois traders compram a 100 com stop a 97 e querem arriscar 50 €. Ambos compram o mesmo tamanho: 1 667 € em valor. O trader A deposita margem de 1 667 € (1x). O trader B deposita 167 € (10x). Se o stop a 97 funcionar, ambos perdem os mesmos 50 €. Agora imagina que o stop foi esquecido ou movido e um pico leva o preço a 90 antes de recuperar. O trader A (1x) continua na operação com uma perda não realizada desagradável. O trader B (10x) foi liquidado perto de 90,5 e perdeu os 167 € de margem, e a recuperação posterior de nada lhe serve. O número da alavancagem só mudou a folga que existia antes do desastre.</p>')}

${B.key('<p><b>Regras para uma alavancagem mais segura:</b> usa margem isolada, define sempre um stop-loss bem dentro do preço de liquidação, dimensiona a operação pelo risco (não pela alavancagem) e mantém a alavancagem baixa o suficiente para que a liquidação fique muitas vezes mais longe do que um movimento diário típico.</p>')}

${B.warn('<p>As exchanges lucram com liquidações e taxas. As redes sociais premeiam capturas de ecrã de grandes ganhos alavancados e escondem as contas apagadas. Lembra-te de que os sobreviventes que vês são uma amostra minúscula e autosselecionada.</p>')}

${B.take(['A alavancagem multiplica ganhos e perdas; a liquidação leva toda a tua margem.', 'A margem isolada limita o dano a uma operação; a margem cruzada pode esvaziar a tua conta.', 'O preço de liquidação depende da alavancagem; a 50x ou 100x, o ruído normal basta para te liquidar.', 'Dimensiona as operações pela distância do stop e pela percentagem de risco; mantém a alavancagem baixa e os stops dentro da liquidação.'])}`,
      q: [
        ['Com alavancagem 20x numa posição longa, aproximadamente quanto precisa o preço de se mover contra ti para te liquidar?', ['Cerca de 20%', 'Cerca de 4,5%', 'Cerca de 0,5%', 'Cerca de 50%'], 1, '1/20 = 5%, menos uma pequena margem de manutenção dá cerca de 4,5%.'],
        ['Que modo de margem arrisca toda a tua conta numa só posição?', ['Margem isolada', 'Margem cruzada', 'Trading spot', 'Ordens limite'], 1, 'A margem cruzada usa o saldo total como garantia das posições abertas.'],
        ['Qual é a mentalidade profissional sobre alavancagem?', ['Maximizá-la sempre', 'Dimensionar pelo risco e pela distância do stop; a alavancagem é só um subproduto e fica baixa', 'Nunca usar stops', 'Usá-la para recuperar perdas'], 1, 'O risco é a distância do stop vezes o tamanho, e a alavancagem alta não deixa margem para erro.']
      ]
    },
    {
      id: 'd3', m: 13, t: 'Ler o mercado de cripto: volume, open interest, funding e sentimento',
      hook: 'Para lá do gráfico de preços: os sinais específicos da cripto, o que cada um diz e como os traders os usam mal.',
      body: `
<p>A cripto oferece dados que os mercados tradicionais escondem: podes ver o posicionamento alavancado, os fluxos das exchanges e o sentimento quase em tempo real. Estas ferramentas dizem-te <b>quem está aglomerado onde</b>, o que é útil porque as operações aglomeradas costumam ser esmagadas.</p>

<h3>Preço, volume e open interest</h3>
<p>O <b>open interest (OI)</b> é o valor total dos contratos de futuros em aberto. Combinado com o preço, dá pistas:</p>
${B.tbl(['Preço', 'Open interest', 'Leitura típica'], [
        ['A subir', 'A subir', 'Dinheiro novo a entrar em longs; a tendência tem combustível (mas verifica aglomeração)'],
        ['A subir', 'A descer', 'Posições curtas a fechar (short squeeze); a subida pode ser mais fraca'],
        ['A descer', 'A subir', 'Novos shorts a acumular-se; a tendência de baixa tem momentum'],
        ['A descer', 'A descer', 'Longs a desistir (liquidações); a venda pode estar perto da exaustão']
      ])}

<h3>Taxa de funding: o termómetro da multidão</h3>
<p>Os futuros perpétuos usam <b>pagamentos de funding</b> entre longs e shorts para manter o preço do contrato perto do spot. Quando a taxa é positiva, os longs pagam aos shorts. Uma taxa positiva muito alta significa que muitos traders estão inclinados para long, e é também caro manter a posição. Os extremos ocorrem muitas vezes perto de topos locais, porque uma multidão com a mesma operação já não tem ninguém para comprar. Um funding extremamente negativo pode preceder short squeezes. Calcula quanto te custa o funding:</p>
${B.w('funding')}

<h3>Mapas e heatmaps de liquidação</h3>
<p>Alguns serviços de dados estimam onde estariam agrupadas as liquidações de posições alavancadas. O preço é muitas vezes “atraído” para essas zonas porque as ordens forçadas criam liquidez. Trata-os como pistas, não garantias. As estimativas podem estar erradas.</p>

<h3>Indicadores de sentimento</h3>
<ul>
<li><b>Índice de Medo e Ganância</b>: combina volatilidade, momentum, redes sociais e outros fatores numa pontuação de 0 a 100. A ganância extrema pode avisar de sobreaquecimento; o medo extremo pode mostrar capitulação. É um medidor contrarian, não uma ferramenta de timing.</li>
<li><b>Rácio long/short</b>: proporção de contas posicionadas em long vs short numa exchange. As diferenças entre exchanges e entre “contas” e “posições” tornam-no ruidoso.</li>
<li><b>Burburinho social</b>: quando o taxista fala de uma moeda, o movimento provavelmente já vai tarde.</li>
</ul>

<h3>Sinais de estrutura de mercado</h3>
<ul>
<li><b>Dominância do Bitcoin</b>: a quota do Bitcoin na capitalização total de cripto. Uma dominância a subir indica muitas vezes dinheiro a esconder-se no BTC; a descer pode acompanhar “épocas de altcoins”. As altcoins movem-se em geral com o Bitcoin, mas com oscilações maiores (“beta” mais alto).</li>
<li><b>Oferta e fluxos de stablecoins</b>: uma oferta de stablecoins a crescer nas exchanges pode sinalizar poder de compra; a encolher, saída.</li>
<li><b>Entradas e saídas das exchanges</b>: moedas a entrar nas exchanges podem anteceder vendas; a sair podem indicar que se mantêm.</li>
<li><b>Fluxos de ETF</b>: onde existem fundos regulados de Bitcoin e Ethereum, as entradas e saídas diárias influenciam o mercado.</li>
</ul>

<h3>O mundo à volta</h3>
<p>A cripto não vive isolada. Decisões de taxas de juro, relatórios de inflação, o dólar, o sentimento do mercado de ações e notícias regulatórias movem-na muitas vezes. Mantém um calendário de eventos-chave e de datas de desbloqueio de tokens, e reduz o risco em torno deles.</p>

${B.ex('<p>O Bitcoin subiu durante uma semana. O open interest está num máximo recorde, o funding é extremamente positivo e o Índice de Medo e Ganância mostra “Ganância extrema”. Nada garante uma queda, mas a posição está aglomerada: uma correção modesta pode desencadear uma cadeia de liquidações de longs. Um trader que veja isto pode realizar lucro numa parte de um long, evitar perseguir o preço ou esperar por um recuo para entrar.</p>')}

${B.warn('<p>Os indicadores descrevem a multidão, não a preveem. “Sobreaquecido” pode continuar sobreaquecido durante semanas. Combina-os sempre com a estrutura de preço e um stop-loss.</p>')}

${B.take(['O open interest mais a direção do preço mostra se as tendências têm combustível novo.', 'As taxas de funding revelam operações aglomeradas e custam dinheiro a manter.', 'Os medidores de sentimento são pistas contrarian nos extremos, não ferramentas de timing exato.', 'As altcoins são versões de beta mais alto do Bitcoin; acompanha a dominância e os eventos macro.'])}`,
      q: [
        ['Preço a subir com open interest a descer sugere…', ['Novos longs a entrar com força', 'Shorts a fechar (um squeeze), por isso a subida pode ser mais fraca', 'Um topo garantido', 'Um problema com stablecoins'], 1, 'Um OI a descer durante uma subida significa muitas vezes cobertura de shorts em vez de compras novas.'],
        ['Uma taxa de funding positiva muito alta significa…', ['Os shorts pagam aos longs', 'Os longs pagam aos shorts e o mercado está aglomerado em long', 'A exchange está avariada', 'Os preços spot são zero'], 1, 'Funding positivo significa que os longs pagam aos shorts, o que mostra um forte posicionamento long.'],
        ['Como deves usar o Índice de Medo e Ganância?', ['Como sinal exato de compra/venda', 'Como pista contrarian nos extremos, combinada com outra análise', 'Nunca', 'Para definir a alavancagem'], 1, 'Reflete o humor da multidão e pode manter-se extremo durante muito tempo.']
      ]
    },
    {
      id: 'd4', m: 14, t: 'Estratégias de trading de cripto',
      hook: 'Operações de tendência, recuo, intervalo, rompimento e eventos adaptadas à cripto, com uma operação completa calculada passo a passo.',
      body: `
<p>As ideias centrais do percurso Day Trader (tendência, níveis, rompimentos, intervalos) aplicam-se também aos gráficos de cripto, com alguns ajustes: movimentos maiores, trading 24/7 e dados extra como funding e open interest. Estes são os principais estilos.</p>

<h3>1. Seguir a tendência em timeframes mais altos</h3>
<p>Usa o gráfico de 4 horas ou diário. Entra quando o preço rompe para novos máximos com volume a crescer e acima de uma média móvel ascendente (por exemplo a EMA 50). Coloca o stop abaixo do último mínimo mais alto e acompanha-o. Menos operações, menos taxas, menos tempo de ecrã, e serve quem tem emprego. Também sofre em períodos de lateralização irregular.</p>

<h3>2. Entradas em recuos</h3>
<p>Numa tendência de alta, espera uma queda em direção a uma média móvel ou a uma resistência anterior que passou a suporte, mais sinais de que os vendedores estão a perder força (volume menor, pavio de rejeição). Entrada na vela de reversão, stop abaixo do mínimo do recuo. Melhora a relação ganho/risco face a perseguir rompimentos.</p>

<h3>3. Trading em intervalo</h3>
<p>Os mercados laterais são comuns em cripto. Define uma zona clara de suporte e resistência, compra perto do fundo, vende perto do topo e sai se o preço fechar fora do intervalo. Combina com sinais de reversão à média, como extremos de funding.</p>

<h3>4. Rompimento e reteste</h3>
<p>O preço comprime (um intervalo a estreitar-se ou volatilidade a cair) e depois rompe. Ocorrem muitos falsos rompimentos, por isso espera um fecho de vela para lá do nível e, idealmente, um <b>reteste</b> que aguente antes de entrares, com stop logo dentro do intervalo antigo.</p>

<h3>5. Funding e contrariar a multidão</h3>
<p>Quando o funding e o open interest estão em extremos e o preço estagna, alguns traders vão contra a multidão (assumem uma pequena posição contra a tendência ou reduzem longs). É avançado e perigoso sem stops rigorosos, porque as operações aglomeradas podem continuar.</p>

<h3>6. Operações de eventos e desbloqueios</h3>
<p>Eventos agendados (desbloqueios de tokens, atualizações, listagens, reuniões de bancos centrais) criam volatilidade previsível, mas não direção previsível. Os principiantes costumam sair-se melhor reduzindo o tamanho ou ficando de fora.</p>

<h3>7. Bots e grids</h3>
<p>Estratégias automatizadas como os grid bots colocam uma escada de ordens de compra e venda dentro de um intervalo. Podem funcionar em mercados laterais, mas perdem em tendências fortes. Tratamos a automatização na lição 6.</p>

<h3>Uma operação completa de exemplo (passo a passo)</h3>
<p>Imagina uma moeda a negociar a <b>100,00</b>. A tendência diária é de alta. O preço recuou até um nível de rompimento anterior em 96 e formou uma vela de alta. Tens <b>5 000 €</b> e a tua regra é arriscar <b>1% (50 €)</b> por operação.</p>
<ol>
<li>Entrada: 97,00 (acima do máximo da vela de alta).</li>
<li>Stop: 94,00, abaixo do mínimo do recuo (a 3,00 da entrada).</li>
<li>Tamanho da posição = 50 € ÷ 3,00 = <b>16,67 unidades</b> (uma posição de cerca de 1 617 €, ou 0,32x da conta).</li>
<li>Alvo: o máximo recente em 106 (a 9,00 de distância), uma relação ganho/risco de <b>3:1</b>.</li>
<li>Se errares, perdes 50 € (1%). Se acertares, ganhas cerca de 150 € (3%). Com uma taxa de acerto de 40% continua a ser lucrativo: 0,4×3 − 0,6×1 = +0,6R.</li>
</ol>
<p>Confirma com a calculadora (os números vêm preenchidos de outra forma, por isso ajusta-os a este exemplo):</p>
${B.w('possize')}

<h3>Que estilo se adapta a ti?</h3>
${B.tbl(['A tua situação', 'Melhor opção'], [
        ['Emprego a tempo inteiro, pouco tempo', 'Seguir a tendência ou recuos em gráficos de 4h / diários, com alertas'],
        ['Gosta de rotinas calmas e baseadas em regras', 'Trading em intervalo com níveis rigorosos'],
        ['Pouca paciência', 'Cuidado: escolhe um estilo que limite o número de operações por dia'],
        ['Quer negociar 24/7', 'Usa bots com limites rigorosos e dorme na mesma; evita alavancagem durante a noite']
      ])}

${B.warn('<p>Não copies sinais de grupos ou influencers. Mesmo que sejam honestos, não controlas as entradas deles, eles podem lucrar com a tua compra e tu não aprendes o processo. Constrói e testa as tuas próprias regras.</p>')}

${B.take(['Estratégias de tendência e recuo em timeframes altos servem melhor a maioria das pessoas.', 'Espera por confirmação nos rompimentos e prefere retestes.', 'Calcula cada operação: entrada, stop, tamanho, alvo e relação ganho/risco antes de entrar.', 'Evita operações de eventos e contrariar a multidão até teres um processo comprovado.'])}`,
      q: [
        ['No exemplo trabalhado, porque é que o tamanho da posição é 16,67 unidades?', ['Porque a alavancagem é 10x', '50 € de risco divididos por uma distância de stop de 3,00', 'Porque o preço é 100', 'Escolha aleatória'], 1, 'Tamanho da posição = valor em risco ÷ (entrada − stop) = 50 ÷ 3.'],
        ['Para que ajuda esperar por um reteste depois de um rompimento?', ['Evitar taxas', 'Reduzir a probabilidade de comprar um falso rompimento', 'Garantir uma vitória', 'Aumentar a alavancagem'], 1, 'Se o preço regressa e o nível aguenta, o rompimento é mais credível.'],
        ['Que abordagem serve a um trader com emprego a tempo inteiro?', ['Fazer scalping em gráficos de 1 minuto o dia todo', 'Operar gráficos de 4h ou diários com alertas e stops fixos', 'Usar alavancagem de 100x', 'Seguir sinais aleatórios'], 1, 'Timeframes mais lentos exigem menos tempo de ecrã e têm custos menores.']
      ]
    },
    {
      id: 'd5', m: 13, t: 'Gestão de risco para mercados voláteis',
      hook: 'Tudo da lição de risco do Day Trader, mais os perigos especiais da cripto: stablecoins, exchanges, correlação e fins de semana.',
      body: `
<p>As regras centrais continuam a valer: arrisca uma pequena percentagem fixa por operação, coloca stops pela estrutura, pensa em R, limita as perdas diárias e nunca aumentes posições perdedoras. A cripto acrescenta vários perigos extra, por isso adapta-te.</p>

<h3>1. Dimensiona pela volatilidade</h3>
<p>Os ativos de cripto diferem enormemente no quanto se movem. Usa o <b>ATR</b> (average true range) para definir stops e deixa depois a tua regra de risco definir o tamanho. Uma moeda com amplitude média diária de 10% precisa de um stop mais largo e, por isso, de uma posição menor do que uma com 3%, se quiseres o mesmo risco em euros.</p>

<h3>2. Correlação: a ilusão da diversificação</h3>
<p>Nas quedas, quase tudo cai junto: as altcoins descem muitas vezes mais depressa do que o Bitcoin. Ter dez posições longas em dez altcoins é, na prática, uma grande posição longa. Limita o teu <b>risco total em aberto</b> (por exemplo 3 a 5% em todas as operações) e considera o portefólio inteiro, não cada operação.</p>

<h3>3. Risco de contraparte e de plataforma</h3>
<ul>
<li><b>Risco da exchange</b>: as exchanges podem ser hackeadas, restringir levantamentos ou colapsar (FTX, 2022). Não deixes todos os fundos numa só plataforma. Mantém nas exchanges só o capital de trading e levanta os lucros.</li>
<li><b>Risco de stablecoins</b>: uma moeda “estável” pode perder a paridade (UST em 2022; USDC brevemente em 2023). Diversifica entre emissores e prefere os de boa reputação.</li>
<li><b>Risco de smart contracts</b>: os protocolos DeFi podem ser hackeados.</li>
<li><b>Segurança das chaves API</b>: ao usar bots, cria chaves só com permissão de trading (levantamentos desativados), restringe por endereço IP e nunca as partilhes.</li>
</ul>

<h3>4. Riscos de execução</h3>
<ul>
<li><b>Pavios e caça aos stops</b>: o preço por vezes dispara através de níveis óbvios e volta atrás. Coloca stops para lá do nível mais uma margem de volatilidade.</li>
<li><b>Derrapagem em mercados finos</b>: moedas pequenas e fins de semana podem executar a tua ordem longe do preço mostrado. Usa ordens limite e tamanhos menores.</li>
<li><b>Indisponibilidade da exchange</b>: as plataformas podem bloquear durante a volatilidade. Tem um plano B e evita depender de uma única plataforma.</li>
</ul>

<h3>5. Peso do funding e das taxas</h3>
<p>Manter posições perpétuas alavancadas durante dias pode acumular custos de funding. Inclui sempre funding e taxas ao calcular o lucro esperado, sobretudo em estratégias com alvos pequenos.</p>

<h3>6. Levanta os lucros</h3>
<p>Lucros deixados no ecrã não são reais. Adota uma regra como “levantar 30% dos lucros mensais para uma carteira segura ou conta bancária”. Protege contra problemas da exchange, reduz a vontade de arriscar demais e torna o sucesso tangível.</p>

<h3>7. Leva a sério os fins de semana e o sono</h3>
<p>Se manténs posições durante a noite ou no fim de semana, garante que têm stops, tamanho reduzido e sem alavancagem alta. Muitas liquidações acontecem enquanto o trader dorme.</p>

${B.ex('<p>A Elena tem 10 000 € numa exchange e cinco longs em altcoins, cada um a arriscar 1%, por isso pensa que tem 5% de risco total. Uma queda de todo o mercado atinge os cinco stops em poucas horas: perde 5% numa manhã, não “1% cinco vezes diferentes”. Tinha ainda todo o saldo nessa plataforma. Depois disto, limita o risco total em aberto a 3%, mantém só metade do capital na exchange e levanta os lucros semanais.</p>')}

${B.w('checklist', { key: 'd5', title: 'Checklist pré-operação para traders de cripto', accent: 'ct', items: 'As tendências diária e de 4 horas apoiam a minha direção|O meu stop está colocado pela estrutura mais uma margem de volatilidade|O meu tamanho segue a minha percentagem de risco fixa, não o número da alavancagem|O risco total em aberto em todas as operações respeita o meu limite|Verifiquei a taxa de funding, o open interest e quaisquer eventos ou desbloqueios próximos|Estou a usar margem isolada e o meu stop está bem longe do preço de liquidação|Não tenho na exchange mais capital do que preciso|Estou calmo, descansado e não estou a perseguir um movimento' })}

${B.take(['Dimensiona pela volatilidade: stops mais largos significam posições menores.', 'As altcoins são muito correlacionadas, por isso o que conta é o risco total em aberto.', 'Reduz o risco de plataforma: reparte fundos, restringe as chaves API e levanta os lucros.', 'Lembra-te do funding, da derrapagem, dos fins de semana e das paragens da exchange nos teus cálculos.'])}`,
      q: [
        ['Porque é que ter muitas posições em altcoins não é verdadeira diversificação num crash?', ['Todas caem a zero', 'Tendem a cair juntas, muitas vezes mais do que o Bitcoin', 'São reguladas', 'Pagam funding'], 1, 'A alta correlação nas quedas faz com que as posições atuem como uma grande aposta.'],
        ['Que configuração de chave API é a mais segura para um bot de trading?', ['Permissão de levantamento ativada, sem limite de IP', 'Apenas permissão de trading, levantamentos desativados, IP restrito', 'Acesso total por comodidade', 'Partilhar a chave com um amigo como backup'], 1, 'Se as chaves vazarem, um atacante não pode levantar fundos.'],
        ['Porque levantar lucros regularmente?', ['Aumenta a alavancagem', 'Protege os ganhos de falhas da exchange e torna os lucros reais', 'Evita taxas', 'É exigido por lei'], 1, 'Lucros parados numa plataforma ficam expostos ao risco de contraparte.']
      ]
    },
    {
      id: 'd6', m: 14, t: 'Bots e automatização: o que podem e não podem fazer',
      hook: 'Os bots executam regras sem descanso. Não criam vantagem do nada. Aprende a usá-los e a detetar as burlas.',
      body: `
<p>A natureza 24/7 da cripto torna a automatização atrativa. Um <b>bot de trading</b> é software que coloca ordens por ti segundo regras. Bem usado, traz disciplina e velocidade. Mal usado, automatiza perdas à velocidade da luz.</p>

<h3>O que os bots realmente fazem</h3>
<ul>
<li><b>Bots de DCA</b>: compram um valor fixo num calendário. Simples e de baixo risco.</li>
<li><b>Grid bots</b>: colocam ordens de compra e venda a intervalos fixos dentro de um intervalo de preço, recolhendo pequenas oscilações. Funcionam em mercados laterais; perdem em tendências fortes e se o preço sair do intervalo.</li>
<li><b>Bots de tendência / sinais</b>: entram e saem com base em indicadores ou condições (cruzamentos de médias móveis, rompimentos).</li>
<li><b>Bots de arbitragem</b>: exploram diferenças de preço entre plataformas. Exigem velocidade, capital e infraestrutura; as margens são finas.</li>
<li><b>Bots de market-making</b>: cotam preços de compra e venda para ganhar o spread. Território profissional.</li>
<li><b>Copy trading</b>: espelha automaticamente as posições de outro trader. Herdas o risco e as taxas dele, e resultados passados não são uma promessa.</li>
</ul>

<h3>O que um bot te dá</h3>
<ol>
<li><b>Disciplina</b>: sem medo, sem FOMO, sem operações de vingança. Segue as regras.</li>
<li><b>Cobertura</b>: trabalha enquanto dormes.</li>
<li><b>Velocidade e consistência</b>: execução precisa e registo de cada operação.</li>
<li><b>Testabilidade</b>: regras escritas em código podem ser testadas com dados históricos (backtest).</li>
</ol>

<h3>O que um bot não pode fazer</h3>
<ul>
<li><b>Não cria vantagem.</b> Uma má estratégia corre na perfeição... direta para as perdas.</li>
<li><b>Não elimina o risco.</b> Os mercados podem mudar de regime, as exchanges podem falhar, podem surgir bugs.</li>
<li><b>Não prevê o futuro.</b> O desempenho passado num backtest não é uma promessa.</li>
<li><b>Não substitui a tua responsabilidade</b> de monitorizar os limites de risco.</li>
</ul>

<h3>Como avaliar um bot (ou uma estratégia vendida com um)</h3>
${B.tbl(['Pergunta', 'Bom sinal', 'Sinal de alerta'], [
        ['As regras estão explicadas?', 'Lógica clara que percebes', 'Um “algoritmo secreto” sem explicação'],
        ['Há provas?', 'Backtests com custos + resultados forward/reais, drawdowns mostrados', 'Capturas de ecrã, meses escolhidos a dedo, “100% de acerto”'],
        ['Que promessas faz?', 'Honesto sobre o risco e os períodos de perdas', '“Lucros garantidos”, “rendimento passivo”, pressão para agir já'],
        ['Gestão do dinheiro', 'Os fundos ficam na tua conta da exchange; chaves API só de trading', 'Pede-te para depositar na carteira ou plataforma deles'],
        ['Controlo', 'Podes pausar, definir limites e ver cada operação', 'Sem controlos de paragem nem transparência']
      ])}

<h3>Armadilhas do backtesting (outra vez, porque importam)</h3>
<ul>
<li><b>Overfitting</b>: afinar parâmetros até o passado parecer perfeito.</li>
<li><b>Ignorar custos</b>: taxas, funding e derrapagem podem transformar um backtest aparentemente lucrativo num perdedor.</li>
<li><b>Look-ahead bias</b>: usar acidentalmente informação do futuro nas regras.</li>
<li><b>Survivorship bias</b>: testar só moedas que ainda existem.</li>
<li><b>Mudança de regime</b>: uma regra que funcionou em 2021 pode falhar num mercado calmo.</li>
</ul>
<p>Usa <b>walk-forward testing</b> (desenhar num período, testar no seguinte), depois paper trading, e só então passar ao real com tamanho minúsculo e um kill switch (um drawdown máximo que pára automaticamente o bot).</p>

${B.ex('<p>Um grid bot é configurado entre 90 e 110 numa moeda a 100 e ganha pequenos lucros num mercado calmo durante semanas. Depois chega uma má notícia, o preço desliza para 70 e fica lá. O bot foi comprando durante toda a descida e agora tem uma grande perda, sem stop. Um humano com um plano teria definido uma perda máxima e saído. O bot fez exatamente o que lhe mandaram. É por isto que a automatização precisa de limites de risco incorporados.</p>')}

${B.warn('<p>O mercado de “bots de trading” está cheio de burlas: bots que prometem 2% de retorno diário, exigem depósitos na plataforma do vendedor ou te pagam por recrutares outros. Se um retorno é garantido, não é trading. É uma armadilha.</p>')}

<h3>Opcional: um programa estruturado com um bot</h3>
<p>O criador deste curso oferece também o <b>Trading Lab</b>, um programa pago opcional que inclui um bot de trading pensado para ajudar os traders a aplicar regras com mais consistência. É apenas uma ferramenta possível, não um requisito nem uma garantia de resultados. Os detalhes estão na <a href="#lab">página do Trading Lab</a>. Seja o que for que uses, aplica a checklist desta lição: percebe as regras, testa com tamanho pequeno, mantém permissões API só de trading e define uma perda máxima.</p>

${B.take(['Os bots executam regras; não criam vantagem nem eliminam o risco.', 'Desconfia de promessas de lucro garantido, algoritmos secretos e pedidos de depósito na plataforma de outra pessoa.', 'Faz backtest com custos, evita o overfitting, testa em forward e começa minúsculo com um kill switch.', 'Usa chaves API só de trading e restritas por IP, e mantém o controlo dos teus fundos.'])}`,
      q: [
        ['O que pode um bot de trading oferecer de forma fiável?', ['Lucros garantidos', 'Disciplina e execução consistente das tuas regras', 'Informação privilegiada', 'Risco zero'], 1, 'Os bots removem a emoção e trabalham continuamente, mas só valem o que valem as regras.'],
        ['Um vendedor promete 2% de retorno diário com o bot dele e pede-te para depositares na plataforma dele. Isto é…', ['Uma ótima oportunidade', 'Um padrão clássico de burla', 'Prática normal do setor', 'Um produto livre de impostos'], 1, 'Retornos altos garantidos e depósitos na plataforma do vendedor são grandes sinais de alerta.'],
        ['Que passo vem logo a seguir ao backtest de uma estratégia, feito com responsabilidade?', ['Passar ao real com alavancagem máxima', 'Teste forward ou paper trading, e depois tamanho real muito pequeno', 'Vendê-la', 'Ignorar custos'], 1, 'Testes fora da amostra e reais com tamanho minúsculo revelam problemas que os backtests escondem.']
      ]
    },
    {
      id: 'd7', m: 11, t: 'Psicologia para mercados 24/7',
      hook: 'Quando o mercado nunca dorme, o FOMO e a ansiedade também não. Cria regras para não esgotares nem rebentares a conta.',
      body: `
<p>A cripto tem todas as emoções habituais do trading, mais algumas especiais criadas pela disponibilidade constante, por movimentos extremos e pelo hype das redes sociais.</p>

<h3>Armadilhas psicológicas específicas da cripto</h3>
<ul>
<li><b>FOMO nas subidas bruscas</b>: uma moeda sobe 40% num dia e todos falam dela. Entrar tarde costuma significar comprar o topo.</li>
<li><b>Euforia do “number go up”</b>: depois de uma subida, sentir-se invencível leva a tamanhos maiores e regras mais frouxas.</li>
<li><b>Capitulação</b>: vender tudo no fundo depois de semanas de dor.</li>
<li><b>Vingança e excesso de alavancagem</b>: tentar recuperar uma perda com uma aposta maior e alavancada.</li>
<li><b>Vício do ecrã e burnout</b>: ver gráficos às 3 da manhã, alertas constantes, sono pobre.</li>
<li><b>Rebanho das redes sociais</b>: grupos e salas de chat amplificam emoções e espalham má informação.</li>
<li><b>Mentalidade de jogador</b>: tratar as operações como rondas de casino. A emoção das vitórias pode tornar-se o objetivo, em vez do processo.</li>
</ul>

<h3>Regras para uma rotina sustentável</h3>
<ol>
<li><b>Define horas de trading.</b> Escolhe janelas em que analisas e negoceias, e desliga fora delas.</li>
<li><b>Usa alertas em vez de ficares a olhar.</b> Define alertas de preço nos teus níveis e deixa o telemóvel vigiar.</li>
<li><b>Limita as operações por dia</b> e pára ao atingir o teu limite de perda diária.</li>
<li><b>Sem posições alavancadas durante a noite</b>, a não ser com stops e tamanho pequeno.</li>
<li><b>Regra dos três erros</b>: três perdas seguidas significam uma pausa de pelo menos uma hora (ou o resto do dia).</li>
<li><b>Regra do fim de semana</b>: reduz o tamanho ou fica fora se a pouca liquidez te deixar nervoso.</li>
<li><b>Silencia o ruído.</b> Deixa de seguir contas de hype. A dieta de informação importa.</li>
<li><b>Protege o sono, o exercício e a vida social.</b> Um trader cansado negoceia como um impulsivo.</li>
<li><b>Separa o dinheiro do trading do dinheiro da vida.</b> Quanto menos precisares do resultado, melhores serão as tuas decisões.</li>
</ol>

<h3>O diário como espelho</h3>
<p>Regista cada operação com o teu estado emocional. Depois de 30 a 50 operações, vê que sentimentos se correlacionam com perdas (FOMO? tédio? operações de madrugada?). Muitos traders descobrem que alguns comportamentos específicos causam a maior parte das perdas, e corrigi-los é a melhoria mais rápida possível.</p>
${B.w('journal')}

${B.ex('<p>O Noah reparou, pelo diário, que as operações depois da meia-noite tinham uma média de −0,8R, enquanto as da janela planeada da manhã tinham +0,3R. Deixou de operar depois das 22h e os resultados passaram de negativos a positivos sem mudar a estratégia.</p>')}

${B.tip('<p>Quando sentires uma vontade forte de entrar numa operação, espera 10 minutos e escreve o motivo. Se for “tenho medo que fuja sem mim”, salta-a. Haverá sempre outro setup amanhã.</p>')}

<h3>Quando fazer uma pausa</h3>
<p>Se o trading está a afetar o teu sono, relações ou trabalho, se estás a apostar o dinheiro da renda ou sentes que não consegues parar, faz uma pausa e fala com alguém de confiança. Existem serviços de apoio ao jogo problemático na maioria dos países, e o trading com a mentalidade errada pode comportar-se como jogo.</p>

${B.take(['A cripto acrescenta FOMO nas subidas, vício do ecrã e tentação 24/7.', 'Define horas de trading, usa alertas, limita operações e respeita os limites de perda.', 'O teu diário revela que emoções e hábitos te custam dinheiro.', 'Se o trading prejudica a tua saúde ou finanças, recua e procura ajuda.'])}`,
      q: [
        ['Qual é uma boa resposta a uma subida súbita de 40% numa moeda que não tens?', ['Comprar de imediato com alavancagem', 'Não perseguir; esperar por um setup que se encaixe nas tuas regras', 'Pedir dinheiro emprestado para comprar', 'Perguntar a um desconhecido'], 1, 'Perseguir tarde é uma forma comum de comprar topos.'],
        ['Porque usar alertas de preço?', ['Para vigiar o ecrã a noite toda', 'Para deixar o telemóvel vigiar os teus níveis e não teres de olhar para os gráficos', 'Para aumentar a alavancagem', 'Para seguir influencers'], 1, 'Os alertas reduzem o tempo de ecrã e o trading emocional.'],
        ['O que significa a regra dos três erros?', ['Só três operações por dia', 'Depois de três perdas seguidas, fazer uma pausa', 'Três vezes a alavancagem', 'Desistir do trading ao fim de três dias'], 1, 'Uma pausa interrompe uma série de decisões emocionais.']
      ]
    },
    {
      id: 'd8', m: 12, t: 'O teu plano de trading de cripto e checklist de graduação',
      hook: 'Junta tudo: um plano, uma escada de marcos e a regra que te mantém vivo. Depois desbloqueia o teu certificado.',
      body: `
<p>Cobriste mercados, alavancagem, sinais, estratégias, risco, bots e psicologia. O último passo é um plano escrito e um caminho da prática para (talvez) o trading real, com marcos que tens de conquistar, não assumir.</p>

<h3>O teu modelo de plano de trading de cripto</h3>
${B.tbl(['Secção', 'O que escrever'], [
        ['Objetivo e capital', 'Porque negoceio; o montante de capital de risco (dinheiro que posso perder). Percentagem máxima do meu património.'],
        ['Mercados e produtos', 'Que moedas e pares; só spot ou também futuros; alavancagem máxima (por exemplo 3x)'],
        ['Timeframes e horas', 'Gráficos que uso; janelas de trading; horas sem operar'],
        ['Setups', 'Dois ou três setups com regras exatas de entrada, stop e saída'],
        ['Regras de risco', 'Risco por operação (0,5 a 1%), risco máximo em aberto, limites de perda diária e semanal, só margem isolada'],
        ['Segurança da plataforma', 'Fundos repartidos por plataformas; 2FA; chaves API só de trading; calendário de levantamento de lucros'],
        ['Rotina', 'Checklist pré-operação, diário após cada operação, revisão semanal'],
        ['Regras de psicologia', 'Três erros, sem operações de vingança, regras de sono e pausas'],
        ['Regra de pausa', 'Num drawdown de, por exemplo, 10 a 15%, parar de negociar e rever durante pelo menos uma semana'],
        ['Impostos e registos', 'Exportar todas as operações, guardar prova de custos, conhecer as regras locais']
      ])}

<h3>A escada de marcos</h3>
<ol>
<li><b>Nível 1: Estudo</b>. Completa este percurso, percebe o risco e a psicologia.</li>
<li><b>Nível 2: Papel</b>. Pelo menos 100 operações simuladas com regras fixas e um diário. Expectativa positiva e 90% de cumprimento do plano.</li>
<li><b>Nível 3: Micro real</b>. Opera com cerca de 10% do tamanho pretendido durante mais 100 operações. Spot primeiro.</li>
<li><b>Nível 4: Consistente</b>. Mais de 200 operações reais, resultados positivos depois de taxas, drawdown controlado, regras cumpridas.</li>
<li><b>Nível 5: Escalar com cuidado</b>. Aumenta o tamanho em pequenos passos, reduz depois de drawdowns, levanta lucros regularmente.</li>
</ol>
${B.ex('<p>O Kai completa o Nível 2 e vê que os resultados em papel foram positivos, mas quebrou a regra do stop em 25% das operações. Em vez de passar ao real, repete o paper trading até o cumprimento do plano passar os 90%. Três semanas depois começa o Nível 3 com 500 € e uma regra rígida: pausa de uma semana a −50 €. Devagar é suave, suave é rápido.</p>')}

<h3>Quando parar</h3>
<p>O trading não é para toda a gente, e desistir depois de uma tentativa honesta é uma vitória de disciplina, não um fracasso. Considera parar ou mudar para investimento de longo prazo se atingiste repetidamente a tua regra de pausa, não consegues cumprir as regras após meses de esforço, ou o trading está a prejudicar a tua vida. Muita gente descobre que um plano de investimento diversificado e aborrecido lhe serve muito melhor.</p>

${B.w('checklist', { key: 'd8', title: 'Checklist de graduação', accent: 'ct', items: 'Escrevi o meu plano de trading completo, incluindo regras de risco e uma regra de pausa|Completei pelo menos 100 operações em papel com um diário|Os meus resultados em papel mostram expectativa positiva e 90% de cumprimento do plano|Uso margem isolada e mantenho a alavancagem baixa|As minhas contas de exchange têm 2FA, listas de permissões e chaves API só de trading|Sei exportar o meu histórico de operações para os impostos|Só negoceio dinheiro que posso perder' })}

<h3>Vai mais fundo (opcional)</h3>
<p>Se queres um programa estruturado com um bot de trading criado para ajudar a aplicar regras de forma consistente, o criador deste curso oferece o <b>Trading Lab</b> no Gumroad (um produto pago opcional). Este curso gratuito já ensina os fundamentos, por isso usa o Trading Lab apenas se quiseres estrutura extra, e mantém sempre as regras de risco deste percurso. Nenhum programa ou bot garante lucros. Vê a <a href="#lab">página do Trading Lab</a>.</p>

${B.key('<p><b>Terminaste o percurso Trader de Cripto.</b> O objetivo nunca foi fazer de ti um jogador com melhores gráficos. Foi fazer de ti um profissional em formação, cuidadoso, que respeita primeiro o risco. Agora verifica o teu progresso e obtém o teu certificado.</p><p><a class="btn sm" href="#cert">Ver o meu certificado</a></p>')}

${B.take(['Escreve um plano completo: capital, produtos, setups, regras de risco, segurança da plataforma, rotina e regra de pausa.', 'Sobe a escada: estudo, papel, micro real, consistente e só depois escalar com cuidado.', 'Desistir depois de uma tentativa honesta é uma decisão legítima e disciplinada.', 'Nenhum programa ou bot garante lucro; as tuas regras de risco protegem-te.'])}`,
      q: [
        ['O que deve desencadear uma regra de pausa?', ['Mais alavancagem', 'Parar de negociar e rever após um drawdown definido', 'Apagar o diário', 'Maior risco por operação'], 1, 'Protege-te do tilt e obriga-te a aprender.'],
        ['O que vem primeiro na escada de marcos?', ['Aumentar o tamanho da posição', 'Estudar e fazer paper trading', 'Usar alavancagem de 50x', 'Fazer copy trading de desconhecidos'], 1, 'Cada passo conquista-se com provas.'],
        ['Qual afirmação sobre programas pagos e bots é a mais correta?', ['Podem garantir lucros', 'Podem dar estrutura, mas não eliminam o risco nem garantem resultados', 'Substituem a gestão de risco', 'São exigidos por lei'], 1, 'Qualquer ferramenta vale o que valem as regras, os testes e a disciplina que aplicas.']
      ]
    }
  ]);
})();
