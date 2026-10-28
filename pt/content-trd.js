/* Percurso Day Trader: 8 lições */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('trd', [
    {
      id: 'b1', m: 11, t: 'Choque de realidade: a verdade sobre o day trading',
      hook: 'Antes dos gráficos e das estratégias, um olhar honesto sobre quem ganha, quem perde e o que realmente é preciso.',
      body: `
<p>As redes sociais mostram o day trading como portáteis em praias e capturas de ecrã de lucros enormes. A realidade está mais perto de uma profissão competitiva em que a maioria dos principiantes perde dinheiro. Esta lição não está aqui para te assustar. Está aqui para que, se continuares, o faças de olhos abertos e com atitude profissional.</p>

<h3>O que conta como day trading?</h3>
<ul>
<li><b>Scalping</b>: operações que duram de segundos a minutos, a tentar ganhos minúsculos muitas vezes por dia.</li>
<li><b>Day trading</b>: posições abertas e fechadas no mesmo dia, nenhuma mantida durante a noite.</li>
<li><b>Swing trading</b>: posições mantidas de alguns dias a várias semanas. Menos tempo em frente ao ecrã, menos custos.</li>
<li><b>Position trading</b>: semanas a meses. Aproxima-se mais do investimento.</li>
</ul>

<h3>O que diz a evidência</h3>
<ul>
<li>Um estudo do mercado de Taiwan (Barber, Lee, Liu e Odean) concluiu que menos de 1% dos day traders ganhava de forma previsível, depois de custos, ano após ano.</li>
<li>Um estudo de day traders de futuros no Brasil que continuaram mais de 300 dias concluiu que cerca de 97% perderam dinheiro.</li>
<li>Os reguladores europeus obrigam as corretoras a divulgar que tipicamente <b>70 a 90% das contas de CFD alavancados de clientes de retalho perdem dinheiro</b>.</li>
</ul>

<h3>Porque é que a maioria perde</h3>
<ol>
<li><b>O trading é um jogo de soma zero antes de custos e de soma negativa depois de custos.</b> Cada lucro tem um perdedor do outro lado, e comissões, spreads e impostos saem do total.</li>
<li><b>Estás a competir com profissionais e algoritmos</b> com melhores dados, execução mais rápida e mais capital.</li>
<li>A <b>alavancagem</b> amplia os erros mais depressa do que a competência se desenvolve.</li>
<li><b>Psicologia</b>: medo, ganância, tédio e a vontade de “recuperar”.</li>
<li><b>Sem vantagem, sem regras de risco, sem plano</b>: jogo de azar com passos extra.</li>
</ol>
${B.warn('<p>Se um curso, influenciador ou robô promete lucros “garantidos” ou “diários e consistentes”, trata isso como sinal de alerta. Nenhum profissional honesto garante resultados de trading. Qualquer produto educativo, incluindo os opcionais mencionados mais à frente neste curso, pode ajudar-te a aprender e a estruturar o teu trabalho, mas o risco de perda continua contigo.</p>')}

<h3>Trading é um negócio, não um passatempo</h3>
<p>Os profissionais tratam o trading como uma pequena empresa: capital, regras, registos, custos, impostos e um orçamento de perdas. Esperam errar muitas vezes e ganham porque os ganhos são maiores do que as perdas e porque nunca arriscam demasiado numa só ideia.</p>

<h3>O que realisticamente precisas</h3>
<ul>
<li><b>Capital de risco</b>: dinheiro que podes mesmo perder. Não a renda, não as poupanças, não dinheiro emprestado.</li>
<li><b>Tempo</b>: day trading a sério é quase um emprego a tempo inteiro durante o horário de mercado, mais preparação e revisão.</li>
<li><b>Uma vantagem testada</b>: uma forma repetível de acertar ligeiramente mais, ou de ganhar mais do que perdes, depois de custos.</li>
<li><b>Processo</b>: regras escritas, um diário, uma rotina de revisão.</li>
<li><b>Uma base estável</b>: um rendimento ou investimentos fora do trading, para que a pressão não distorça as tuas decisões.</li>
</ul>

${B.ex('<p>Imagina duas pessoas que começam com 5 000 € cada. O Alex arrisca 250 € (5%) em cada operação, a perseguir grandes ganhos, e perde seis seguidas: menos 26%. O Sam arrisca 25 € (0,5%) por operação e perde as mesmas seis: menos 3%. O Sam continua calmo, continua no jogo e continua a aprender. O Alex está em tilt e prestes a piorar tudo. Sobreviver é a primeira competência.</p>')}

<h3>Um caminho sensato</h3>
<ol>
<li>Constrói primeiro a tua base de investimento. A maioria das pessoas deve investir e fazer trading apenas com uma pequena fatia (por exemplo, menos de 5 a 10% do seu património).</li>
<li>Aprende o ofício neste percurso.</li>
<li>Pratica num simulador durante pelo menos 100 operações.</li>
<li>Faz trading com dinheiro real em tamanho minúsculo. Prova que consegues seguir as tuas regras antes de escalar.</li>
</ol>

${B.w('checklist', { key: 'b1', title: 'Estou pronto sequer para começar a aprender a fazer trading?', accent: 'trd', items: 'Tenho um fundo de emergência e nenhuma dívida de juros altos|O dinheiro com que faço trading é dinheiro que posso perder por completo|Percebo que a maioria dos principiantes perde dinheiro e aceito-o|Vou fazer paper trading durante pelo menos 100 operações antes de arriscar dinheiro real|Vou escrever regras e manter um diário|Não estou a tentar resolver uma emergência financeira com trading' })}

${B.take(['A maioria dos day traders perde dinheiro; custos e alavancagem tornam tudo mais difícil.', 'Trata o trading como um negócio com capital de risco, regras e registos.', 'Nunca faças trading com dinheiro de que precisas. Sobreviver primeiro, lucrar depois.', 'Pratica num simulador e depois opera em tamanho minúsculo antes de escalar.'])}`,
      q: [
        ['Porque é que o trading é descrito como de “soma negativa” depois de custos?', ['Porque os mercados caem sempre', 'Porque cada vencedor tem um perdedor e os custos saem do total', 'Porque as corretoras emprestam dinheiro', 'Porque as ações não se mexem'], 1, 'Spreads, comissões e impostos reduzem o total disponível para todos os traders.'],
        ['Que dinheiro é adequado para trading?', ['A renda do próximo mês', 'Dinheiro emprestado', 'Capital de risco que podes perder', 'O teu fundo de emergência'], 2, 'Só o dinheiro que podes perder sem prejudicar a tua vida pertence à especulação.'],
        ['Qual é um bom primeiro passo depois de aprender o básico do trading?', ['Usar a alavancagem máxima', 'Praticar num simulador durante mais de 100 operações', 'Deixar o emprego', 'Seguir vendedores de sinais'], 1, 'Um simulador permite aprender com os erros sem custo.']
      ]
    },
    {
      id: 'b2', m: 14, t: 'Como funcionam os mercados: ordens, spreads e alavancagem',
      hook: 'O que realmente acontece entre o teu clique em “comprar” e a operação. Percebe a canalização para que não te surpreenda.',
      body: `
<p>Um mercado é um lugar onde compradores e vendedores se encontram. Os preços movem-se por causa do equilíbrio entre esses dois grupos. Para fazer bom trading, tens de perceber a mecânica que decide o preço que realmente obténs.</p>

<h3>Bid, ask e spread</h3>
<p>Cada instrumento tem dois preços em tempo real: o <b>bid</b> (o preço mais alto que os compradores pagam, que é o que recebes quando vendes) e o <b>ask</b> (o preço mais baixo que os vendedores querem, que é o que pagas quando compras). A diferença é o <b>spread</b>.</p>
${B.ex('<p>Uma ação mostra bid de 49,98 € e ask de 50,02 €. Compras 200 ações a 50,02 € (10 004 €). Se vendes logo a seguir, recebes 49,98 € (9 996 €). Acabaste de perder 8 € sem fazer nada. Esse é o custo do spread, além de qualquer comissão. Um scalper que opera 20 vezes por dia paga isto 20 vezes, por isso o mercado tem de se mexer mais do que o custo só para ficares empatado.</p>')}

<h3>Liquidez, volume e derrapagem</h3>
<ul>
<li><b>Liquidez</b>: a facilidade com que podes comprar ou vender sem mexer no preço. Ações grandes e os principais pares de moedas são muito líquidos; ações pequenas e tokens obscuros não.</li>
<li><b>Volume</b>: quantas unidades foram negociadas. Volume maior costuma significar spreads mais apertados e movimentos de preço mais fiáveis.</li>
<li><b>Derrapagem (slippage)</b>: a diferença entre o preço que esperavas e o preço que obtiveste, sobretudo em mercados rápidos ou com ordens grandes.</li>
</ul>

<h3>Tipos de ordem</h3>
${B.tbl(['Ordem', 'O que faz', 'Atenção'], [
        ['A mercado', 'Compra ou vende de imediato ao melhor preço disponível', 'O preço pode derrapar em mercados rápidos ou pouco profundos'],
        ['Limite', 'Compra ou vende só ao teu preço ou melhor', 'Pode nunca ser executada se o preço não chegar lá'],
        ['Stop (stop-loss)', 'Torna-se ordem a mercado quando o preço atinge o teu nível de stop', 'Pode ser executada pior do que o stop em saltos de preço'],
        ['Stop-limite', 'Torna-se ordem limite no nível do stop', 'Pode não ser executada de todo num movimento rápido'],
        ['Trailing stop', 'Stop que segue o preço a uma distância definida', 'Demasiado curto e o ruído normal tira-te do trade']
      ])}

<h3>Long, short e alavancagem</h3>
<ul>
<li><b>Ir long (comprado)</b>: compras, na esperança de que o preço suba.</li>
<li><b>Ir short (vendido)</b>: vendes algo que pediste emprestado, na esperança de o recomprar mais barato. As perdas numa posição short são teoricamente ilimitadas, porque o preço pode continuar a subir.</li>
<li><b>Margem e alavancagem</b>: a corretora deixa-te controlar uma posição maior do que o teu dinheiro. Com alavancagem de 10:1, 1 000 € controlam 10 000 €, por isso um movimento de 10% contra ti apaga todo o teu depósito.</li>
</ul>
<p>Na UE, os reguladores limitam a alavancagem para clientes de retalho em produtos alavancados (CFD): 30:1 para os principais pares de moedas, 20:1 para outros pares, ouro e principais índices, 10:1 para outras matérias-primas e índices, 5:1 para ações individuais e 2:1 para criptoativos. As corretoras também têm de fechar posições quando a margem desce a 50% e dar proteção contra saldo negativo a clientes de retalho. Outros países têm regras diferentes. Nos EUA, as contas que fazem day trading com frequência tiveram historicamente de cumprir um capital mínimo, e estas regras têm estado em revisão, por isso confirma sempre a regulamentação atual com a tua corretora.</p>

<h3>Instrumentos com que podes fazer day trading</h3>
<ul>
<li><b>Ações e ETF</b>: simples, transparentes, muitas vezes com comissões.</li>
<li><b>Forex</b>: pares de moedas, abertos 24 horas nos dias úteis, alavancados.</li>
<li><b>Futuros</b>: contratos padronizados sobre índices, matérias-primas e taxas. Muito líquidos, muito alavancados.</li>
<li><b>Opções</b>: contratos que dão o direito de comprar ou vender mais tarde. Complexas e não são para principiantes.</li>
<li><b>CFD</b>: contratos por diferenças. Um acordo alavancado com uma corretora em vez de propriedade. A disponibilidade e as regras variam por país e têm risco elevado.</li>
</ul>

<h3>Quando os mercados estão movimentados</h3>
<p>A maior parte do day trading acontece perto da abertura e do fecho de uma sessão, quando o volume e a volatilidade são mais altos. O meio do dia costuma ser mais calmo e errático. A divulgação de dados económicos (emprego, inflação, decisões de bancos centrais) causa picos súbitos e spreads mais largos, por isso muitos traders evitam ou reduzem o tamanho nessas alturas.</p>

${B.warn('<p>A alavancagem é a causa número um de contas destruídas. Não te torna mais inteligente nem o mercado mais simpático, apenas acelera o que quer que aconteça.</p>')}

${B.take(['Compras ao ask e vendes ao bid; o spread é um custo real em cada operação.', 'Liquidez e volume decidem com que facilidade e a que custo podes operar.', 'Aprende os tipos de ordem: a limite dá controlo do preço, o stop-loss limita o risco mas pode derrapar.', 'A alavancagem multiplica ganhos e perdas; os reguladores limitam-na por uma razão.'])}`,
      q: [
        ['Pagas o ask e recebes o bid. A diferença entre eles é…', ['Comissão', 'O spread', 'Derrapagem', 'Margem'], 1, 'O spread é um custo embutido sempre que compras e vendes.'],
        ['Com alavancagem de 20:1, um movimento de quanto contra ti pode apagar o teu depósito (aproximadamente)?', ['20%', '5%', '50%', '1%'], 1, '100% ÷ 20 = 5%, antes de comissões e regras de margem.'],
        ['Que ordem te permite controlar o preço máximo que pagas?', ['Ordem a mercado', 'Ordem limite', 'Stop-loss', 'Trailing stop'], 1, 'Uma ordem limite só é executada ao teu preço ou melhor, mas pode não ser executada.']
      ]
    },
    {
      id: 'b3', m: 13, t: 'Ler gráficos de preços: candlesticks, tendências e níveis',
      hook: 'Aprende a linguagem visual do preço e lê a história que cada vela conta.',
      body: `
<p>Um gráfico de preços é o registo da batalha entre compradores e vendedores. O tipo mais popular é o <b>gráfico de candlesticks (velas)</b>, inventado por comerciantes japoneses de arroz há séculos. Cada vela resume um período (um minuto, uma hora, um dia).</p>

<h3>Anatomia de uma vela</h3>
<ul>
<li><b>Abertura</b>: preço no início do período.</li>
<li><b>Fecho</b>: preço no fim.</li>
<li><b>Máximo / Mínimo</b>: os extremos, desenhados como linhas finas chamadas pavios ou sombras.</li>
<li>O <b>corpo</b> é a caixa entre a abertura e o fecho. Verde (ou oca) significa fecho acima da abertura; vermelha significa fecho abaixo da abertura.</li>
</ul>
<p>Constrói uma tu mesmo e vê como as formas mudam de significado:</p>
${B.w('candles')}

<h3>Tendência: a direção do mercado</h3>
<p>O conceito mais simples e mais útil é a <b>tendência</b>.</p>
<ul>
<li><b>Tendência de alta</b>: uma escada de máximos mais altos e mínimos mais altos.</li>
<li><b>Tendência de baixa</b>: máximos mais baixos e mínimos mais baixos.</li>
<li><b>Lateral (range)</b>: o preço a saltar entre um chão e um teto.</li>
</ul>
${B.key('<p><b>“A tendência é tua amiga.”</b> Operar na direção da tendência maior costuma dar melhores probabilidades do que lutar contra ela. A maioria dos principiantes tenta adivinhar topos e fundos e é atropelada.</p>')}

<h3>Suporte e resistência</h3>
<p>O <b>suporte</b> é uma zona de preço onde os compradores intervieram repetidamente, como um chão. A <b>resistência</b> é onde os vendedores apareceram repetidamente, como um teto. São zonas, não linhas exatas. Quando o preço as rompe, a antiga resistência passa muitas vezes a novo suporte (e vice-versa). Como muitos traders olham para os mesmos níveis óbvios, tendem a importar.</p>

<h3>Volume: a confirmação</h3>
<p>Um movimento com volume forte mostra participação alargada e é mais fiável. Uma rutura com volume fraco falha muitas vezes. Procura volume a subir na direção da tendência e a secar nas correções.</p>

<h3>Intervalos de tempo</h3>
<p>Cada gráfico pode ser visto em diferentes intervalos (1 minuto, 5 minutos, 1 hora, diário). Os profissionais usam a <b>análise multi-intervalo</b>: verificam o gráfico diário para a tendência e os níveis-chave e depois usam um gráfico menor (como 5 ou 15 minutos) para escolher as entradas. Um padrão num gráfico de 1 minuto é muito menos fiável do que num gráfico diário.</p>

<h3>Sinais de velas comuns (usa com cuidado)</h3>
<ul>
<li><b>Doji</b>: abertura e fecho quase iguais. Indecisão.</li>
<li><b>Martelo / pin bar</b>: pavio inferior longo. Possível rejeição de preços mais baixos.</li>
<li><b>Estrela cadente</b>: pavio superior longo. Possível rejeição de preços mais altos.</li>
<li><b>Engolfo</b>: uma vela cujo corpo cobre por completo o corpo da vela anterior. Possível mudança de controlo.</li>
</ul>
${B.warn('<p>Nenhum padrão de velas funciona sozinho. O seu significado depende do <b>contexto</b>: onde aparece (num nível-chave?), em que tendência está e o volume por trás. Um “martelo” no meio do nada quase não significa nada.</p>')}

${B.ex('<p>Uma ação subiu em escada limpa durante duas semanas. Recua até um nível de resistência anterior que agora funciona como suporte, forma aí uma vela martelo com volume acima da média, e a vela seguinte fecha em alta. Essa combinação (tendência + suporte + vela de rejeição + volume) é uma história muito mais forte do que qualquer peça isolada.</p>')}

${B.take(['Uma vela mostra abertura, máximo, mínimo e fecho de um período.', 'Identifica primeiro a tendência (máximos e mínimos mais altos, ou mais baixos), depois os níveis.', 'Suporte e resistência são zonas onde o preço já reagiu antes.', 'O volume confirma movimentos, e os intervalos maiores pesam mais.', 'Os padrões de velas precisam de contexto para significar alguma coisa.'])}`,
      q: [
        ['Uma vela tem um pavio inferior longo e um corpo pequeno perto do topo. Esta forma chama-se…', ['Vela tipo martelo', 'Estrela cadente', 'Um gap', 'Uma linha de tendência'], 0, 'Sombra inferior longa com corpo pequeno é um martelo, a sugerir rejeição de preços mais baixos.'],
        ['O que define uma tendência de alta?', ['Preço acima de zero', 'Máximos mais altos e mínimos mais altos', 'Máximos mais baixos e mínimos mais baixos', 'Apenas velas verdes'], 1, 'A escada de máximos e mínimos a subir é a definição básica.'],
        ['Porquê usar vários intervalos de tempo?', ['Para te confundires', 'Os intervalos maiores mostram a tendência principal e os níveis-chave; os menores ajudam a escolher entradas', 'Porque as corretoras exigem', 'Dão sempre sinais idênticos'], 1, 'O contexto geral melhora as entradas e evita operar contra tendências fortes.']
      ]
    },
    {
      id: 'b4', m: 12, t: 'Indicadores e ferramentas (e os seus limites)',
      hook: 'Médias móveis, RSI, MACD e companhia: o que medem, como os traders os usam e porque é que mais não é melhor.',
      body: `
<p>Os indicadores são fórmulas matemáticas aplicadas ao preço (e por vezes ao volume) para tornar os padrões mais fáceis de ver. São ferramentas para <b>descrever</b> o que aconteceu, não bolas de cristal. Como usam dados passados, todos ficam atrasados em relação ao preço em algum grau.</p>

<h3>Os cinco essenciais (mais um)</h3>
${B.tbl(['Indicador', 'O que mostra', 'Uso comum', 'Limites'], [
        ['Média móvel (SMA / EMA)', 'Preço médio ao longo de N períodos. A EMA reage mais depressa', 'Direção da tendência; suporte dinâmico; cruzamentos (ex.: 50 vs 200)', 'Atrasa; falsos sinais em mercados laterais'],
        ['RSI (14)', 'Momento de 0 a 100', 'Acima de 70 “sobrecomprado”, abaixo de 30 “sobrevendido”; divergências', 'Em tendências fortes o RSI pode ficar “sobrecomprado” por muito tempo'],
        ['MACD (12, 26, 9)', 'Diferença entre duas EMA e a sua linha de sinal', 'Mudanças de momento e força da tendência', 'Atrasa; ruidoso em mercados laterais'],
        ['Bandas de Bollinger (20, 2)', 'Média móvel ± 2 desvios-padrão', 'Compressões e expansões de volatilidade', 'Tocar numa banda não é uma reversão automática'],
        ['VWAP', 'Preço médio ponderado pelo volume do dia', '“Valor justo” intradiário; instituições usam-no como referência', 'Só intradiário; reinicia todos os dias'],
        ['ATR (14)', 'Amplitude média real: tamanho típico do movimento', 'Definir a distância do stop e o tamanho da posição', 'Não mostra direção']
      ])}

<h3>Médias móveis na prática</h3>
<p>A inclinação de uma média móvel dá uma leitura rápida da tendência: o preço acima de uma EMA 20 ou 50 a subir sugere uma tendência de alta. No laboratório de paper trading mais à frente, podes ligar uma média de 20 velas para ver como o preço tende a respeitá-la. Uma “cruz dourada” (média de 50 dias a cruzar acima da de 200 dias) e uma “cruz da morte” (o inverso) são muito vigiadas, mas chegam tarde. Quando aparecem, grande parte do movimento já aconteceu muitas vezes.</p>

<h3>RSI bem usado</h3>
<p>Os principiantes veem o RSI acima de 70 e vendem logo. É uma armadilha clássica: em tendências de alta fortes o RSI pode ficar acima de 70 durante semanas. Um uso melhor é procurar <b>divergência</b>: o preço faz um máximo mais alto, mas o RSI faz um máximo mais baixo, o que sinaliza momento a enfraquecer. Mesmo assim, espera que o preço confirme.</p>

<h3>ATR para stops e tamanho</h3>
<p>Se o ATR de uma ação for 1,50 €, o movimento normal ronda 1,50 € por período. Colocar o stop a 0,30 € de distância significa que o ruído normal o vai atingir. Um stop de 1 a 2 vezes o ATR para lá de um ponto estrutural sensato sobrevive melhor ao ruído. Stop mais largo significa posição mais pequena, para que o risco em euros se mantenha constante.</p>

<h3>Porque é que mais indicadores te pioram</h3>
<p>Muitos indicadores são vistas diferentes dos mesmos dados de preço. Empilhar cinco indicadores de momento não dá cinco confirmações independentes. Dá o mesmo sinal cinco vezes, mais confusão quando discordam. Os traders experientes costumam usar <b>price action mais duas ou três ferramentas simples</b>.</p>
${B.ex('<p>O Chris tem 9 indicadores no gráfico: 3 dizem comprar, 4 vender e 2 neutro. Espera e perde o movimento. A Dana usa uma EMA 20 para a tendência, volume e níveis-chave. Quando o preço recua até à EMA 20 numa tendência de alta com volume a diminuir, procura entrada. Simples, repetível, fácil de testar.</p>')}

${B.tip('<p>Antes de adicionares qualquer indicador, escreve a pergunta específica a que responde (tendência? momento? volatilidade?). Se não conseguires, remove-o.</p>')}

${B.take(['Os indicadores resumem o preço passado; nenhum prevê o futuro.', 'Conhece o trabalho de cada um: tendência (médias móveis), momento (RSI, MACD), volatilidade (ATR, Bollinger), valor justo (VWAP).', 'RSI “sobrecomprado” não é sinal de venda numa tendência forte.', 'Usa o ATR para colocar stops fora do ruído normal e dimensionar bem as posições.', 'Menos ferramentas, mais simples, vencem gráficos atulhados.'])}`,
      q: [
        ['Para que ajuda o ATR?', ['Prever a direção', 'Medir o movimento típico do preço para definir stops e tamanho da posição', 'Garantir lucro', 'Encontrar notícias'], 1, 'O ATR mede a volatilidade, o que ajuda a dimensionar os stops com bom senso.'],
        ['Porque pode o RSI acima de 70 ser um mau sinal automático de venda?', ['Nunca passa de 70', 'Em tendências de alta fortes pode manter-se alto durante muito tempo enquanto o preço continua a subir', 'Está avariado', 'Porque 70 está sempre errado'], 1, 'Leituras de sobrecompra podem persistir em tendências fortes.'],
        ['Qual é o problema de empilhar muitos indicadores semelhantes?', ['São demasiado baratos', 'Dão a mesma informação repetidamente e criam confusão quando discordam', 'Só abrandam o computador', 'Não há problema'], 1, 'Derivam dos mesmos dados de preço, por isso não são confirmações independentes.']
      ]
    },
    {
      id: 'b5', m: 14, t: 'Estratégias de trading: encontra o estilo que te serve',
      hook: 'Tendência, pullback, rutura, lateral, rutura da abertura: como cada uma funciona, onde falha e como testá-la antes de arriscar um cêntimo.',
      body: `
<p>Uma <b>estratégia</b> é um conjunto completo de regras: o que negoceias, quando entras, onde colocas o stop, onde realizas lucro e qual o tamanho da posição. Operar sem regras é adivinhar. Aqui ficam os estilos clássicos.</p>

<h3>1. Seguimento de tendência</h3>
<p><b>Ideia:</b> as tendências tendem a continuar. Compra força numa tendência de alta, vende fraqueza numa de baixa.<br><b>Entrada:</b> o preço rompe um máximo recente com uma média móvel a subir.<br><b>Stop:</b> abaixo do último mínimo mais alto.<br><b>Falha quando:</b> os mercados andam de lado. Espera muitas perdas pequenas e alguns ganhos grandes, com uma taxa de acerto mais baixa.</p>

<h3>2. Pullback (comprar a descida numa tendência)</h3>
<p><b>Ideia:</b> numa tendência forte, descidas curtas oferecem melhores entradas.<br><b>Entrada:</b> o preço recua até uma média móvel ou suporte numa tendência de alta e mostra uma vela de reversão.<br><b>Stop:</b> abaixo do mínimo do recuo.<br><b>Falha quando:</b> o recuo se transforma numa reversão de tendência.</p>

<h3>3. Rutura (breakout)</h3>
<p><b>Ideia:</b> depois de uma consolidação, o preço explode para fora do seu intervalo.<br><b>Entrada:</b> um fecho acima da resistência com volume alto (ou um reteste do nível rompido).<br><b>Stop:</b> de volta para dentro do intervalo.<br><b>Falha quando:</b> há falsas roturas (o preço espreita e volta a cair). Espera por confirmação e volume.</p>

<h3>4. Trading lateral / reversão à média</h3>
<p><b>Ideia:</b> quando não há tendência, o preço volta ao meio. Vende perto da resistência, compra perto do suporte.<br><b>Stop:</b> logo fora do intervalo.<br><b>Falha quando:</b> o intervalo finalmente quebra e a tendência começa, razão pela qual o stop é obrigatório.</p>

<h3>5. Rutura do intervalo de abertura</h3>
<p><b>Ideia:</b> marca o máximo e o mínimo dos primeiros 15 a 30 minutos depois da abertura do mercado. Uma rutura de qualquer lado com volume pode levar a um movimento que dura o dia todo.<br><b>Stop:</b> o outro lado ou o meio do intervalo.<br><b>Falha quando:</b> o mercado está indeciso num dia calmo de notícias.</p>

<h3>6. Scalping</h3>
<p><b>Ideia:</b> muitos lucros minúsculos em movimentos muito curtos. Exige spreads apertados, execução rápida, comissões baixas e concentração intensa. Os custos devoram os scalpers, e é muito improvável que um principiante tenha lucro.</p>

<h3>Operações de notícias e resultados</h3>
<p>Os preços saltam em torno das divulgações, os spreads alargam e a derrapagem sobe. É um estilo avançado. A maioria dos principiantes deve simplesmente ficar fora de posições durante eventos importantes.</p>

<h3>Escolher um estilo</h3>
${B.tbl(['Estilo', 'Taxa de acerto', 'Tamanho do ganho', 'Tempo de ecrã', 'Serve-te se…'], [
        ['Seguimento de tendência', 'Mais baixa (35 a 45%)', 'Grande', 'Baixo a médio', 'És paciente e aceitas pequenas perdas'],
        ['Pullback', 'Média', 'Médio', 'Médio', 'Gostas de esperar por um bom preço'],
        ['Rutura', 'Média a baixa', 'Médio a grande', 'Médio', 'Aguentas falsas roturas'],
        ['Lateral', 'Mais alta (50 a 65%)', 'Pequeno', 'Médio', 'Preferes pequenos ganhos frequentes e stops rigorosos'],
        ['Scalping', 'Varia', 'Minúsculo', 'Muito alto', 'Quase nunca é escolha de principiante']
      ])}

<h3>Escreve o regulamento (um modelo de setup)</h3>
<ol>
<li><b>Condição de mercado</b>: o que tem de ser verdade? (ex.: tendência de alta diária)</li>
<li><b>Gatilho</b>: o evento exato para entrar (ex.: fecho acima do máximo da vela anterior depois de um recuo)</li>
<li><b>Stop-loss</b>: regra de preço exata</li>
<li><b>Objetivo / saída</b>: múltiplo fixo do risco, trailing ou nível</li>
<li><b>Tamanho da posição</b>: % de risco ÷ distância do stop</li>
<li><b>Quando NÃO operar</b>: notícias importantes, volume baixo, depois de atingir a perda diária</li>
</ol>

<h3>Noções básicas de backtesting</h3>
<p><b>Backtesting</b> é aplicar as tuas regras a dados passados para ver como teriam corrido. Bem feito, é muito útil. Mal feito, cria falsa confiança:</p>
<ul>
<li>Inclui custos: spread, comissões e derrapagem.</li>
<li>Usa operações suficientes (mais de 100). Dez operações não provam nada.</li>
<li>Evita o <b>sobreajuste (overfitting)</b>: não ajustes parâmetros sem fim até o passado parecer perfeito. Testa em dados que não usaste para desenhar as regras (“fora da amostra”).</li>
<li>Evita o <b>viés de antecipação (look-ahead bias)</b>: não uses informação que não estava disponível na altura.</li>
<li>Continua com testes em tempo real (paper trading) antes de usar dinheiro real.</li>
</ul>

${B.warn('<p>Uma estratégia que funcionou num mercado de alta pode falhar num mercado lateral ou num crash. Os mercados mudam de regime. Conta com a necessidade de manter a tua vantagem.</p>')}

${B.take(['Uma estratégia é um regulamento completo: condição de mercado, gatilho, stop, saída, tamanho e quando não operar.', 'Estratégias de tendência e pullback ganham menos vezes mas mais; as laterais ganham mais vezes mas menos.', 'Faz backtest com custos e operações suficientes, evita o sobreajuste e depois faz paper trading.', 'Escolhe um estilo simples e domina-o em vez de saltar entre muitos.'])}`,
      q: [
        ['Um sistema de seguimento de tendência tem normalmente…', ['Taxa de acerto muito alta e ganhos minúsculos', 'Taxa de acerto mais baixa mas ganhos maiores do que as perdas', 'Nenhum stop-loss', 'Zero operações perdedoras'], 1, 'Aceita muitas perdas pequenas para apanhar alguns grandes movimentos.'],
        ['O que é sobreajuste no backtesting?', ['Usar poucos indicadores', 'Afinar as regras até encaixarem perfeitamente nos dados passados, mas falharem em dados novos', 'Operar pouco', 'Usar uma conta demo'], 1, 'As regras captam o ruído passado em vez de uma vantagem real.'],
        ['O que é parte obrigatória de qualquer estratégia de rutura ou lateral?', ['Um stop-loss', 'Lucro garantido', 'A dica de um amigo', 'Alavancagem máxima'], 0, 'Toda a estratégia pode falhar; o stop define a tua perda máxima.']
      ]
    },
    {
      id: 'b6', m: 16, t: 'Gestão de risco: a única vantagem que controlas por completo',
      hook: 'Não podes controlar o mercado, mas podes controlar quanto perdes quando erras. Duas calculadoras vão mostrar-te porque é que isso ganha carreiras.',
      body: `
<p>Pergunta a traders profissionais o que separa os sobreviventes dos restantes e a resposta é quase sempre a mesma: <b>gestão de risco</b>. Podes ter uma estratégia medíocre e sobreviver com bom controlo de risco. Não sobrevives a uma ótima estratégia com mau controlo de risco.</p>

<h3>Regra 1: Arrisca uma pequena percentagem fixa por operação</h3>
<p>A regra mais comum é arriscar <b>0,5% a 1% da conta</b> em qualquer operação (2% no máximo). Se tens 5 000 € e arriscas 1%, o máximo que perdes numa operação são 50 €. Isso torna as sequências de perdas suportáveis.</p>
${B.ex('<p>Sete perdas seguidas parece extremo, mas acontece a todos os traders. Se arriscares 1% em cada, a conta desce cerca de 7%. Se arriscares 10% em cada, desce cerca de 52% e precisas de um ganho de 109% só para recuperar. O tamanho da posição é como ficas no jogo enquanto aprendes.</p>')}

<h3>Regra 2: O stop decide o tamanho</h3>
<p>Primeiro decides onde a operação se prova errada (o stop) e <i>depois</i> calculas quantas unidades comprar para que atingir o stop custe apenas o risco escolhido. A fórmula:</p>
<p><b>Tamanho da posição = (conta × % de risco) ÷ (preço de entrada − preço do stop)</b></p>
${B.w('possize')}

<h3>Regra 3: Pensa em R</h3>
<p>1R é igual ao teu risco inicial numa operação. Se arriscas 50 € e ganhas 100 €, isso é +2R. Medir em R torna os resultados comparáveis entre operações e tamanhos de conta. Também te deixa definir a relação ganho/risco antes de entrar: só faz operações que paguem pelo menos 1,5 a 2R se acertares.</p>

<h3>Regra 4: Conhece a tua expectativa</h3>
<p>A <b>expectativa</b> é o resultado médio por operação em R. <b>Expectativa = (taxa de acerto × ganho médio em R) − (taxa de perda × 1R)</b>. Por exemplo, taxa de acerto de 40% com ganhos de 2R: 0,4×2 − 0,6×1 = +0,2R por operação. É lucrativo mesmo perdendo 60% das vezes. Se ganhares 60% mas os teus ganhos forem de 0,5R: 0,6×0,5 − 0,4 = −0,1R. Ganhas muitas vezes e mesmo assim perdes dinheiro.</p>
${B.w('expectancy')}

<h3>Regra 5: Respeita a matemática do drawdown</h3>
<p>As perdas doem mais do que os ganhos ajudam, porque recuperas a partir de uma base menor:</p>
${B.tbl(['Perda na conta', 'Ganho necessário para voltar ao ponto de partida'], [['-10%', '+11%'], ['-20%', '+25%'], ['-30%', '+43%'], ['-50%', '+100%'], ['-75%', '+300%'], ['-90%', '+900%']])}

<h3>Regra 6: Limites diários e semanais</h3>
<p>Define uma perda diária máxima (por exemplo 2 a 3% da conta). Quando a atingires, <b>pára de operar nesse dia</b>. Muitas contas destruídas acontecem numa só tarde de tilt com operações de vingança. Faz o mesmo para um limite semanal.</p>

<h3>Regra 7: Vigia a correlação e a exposição total</h3>
<p>Cinco operações em cinco ações tecnológicas são, na verdade, uma grande operação em tecnologia. Limita o risco total em aberto (por exemplo, não mais de 3 a 5% em todas as posições) e evita empilhar apostas idênticas.</p>

<h3>Regra 8: Nunca afastes um stop</h3>
<p>Podes apertar um stop para proteger lucro. Afastá-lo do preço para “dar espaço à operação” transforma uma perda pequena planeada numa grande não planeada. Esse hábito está por trás de inúmeras contas destruídas.</p>

<h3>Colocação do stop-loss</h3>
<ul>
<li>Coloca-o num nível que prove que a ideia está errada (abaixo do mínimo recente), não numa percentagem aleatória.</li>
<li>Dá-lhe folga com base na volatilidade (ATR).</li>
<li>Depois deixa o stop determinar o teu tamanho, nunca o contrário.</li>
</ul>

${B.warn('<p>“Fazer média em baixa” (comprar mais à medida que uma posição perdedora cai) sem um plano é como as perdas pequenas se tornam perdas que acabam com a conta. Acrescenta a posições vencedoras com regras, não a perdedoras com esperança.</p>')}

${B.take(['Arrisca 0,5 a 1% da conta por operação; limita as perdas diárias e semanais.', 'Coloca primeiro o stop e depois calcula o tamanho da posição a partir dele.', 'Mede as operações em R e exige uma expectativa positiva.', 'Uma perda de 50% precisa de um ganho de 100%: evitar grandes drawdowns é o trabalho principal.', 'Nunca alargues um stop-loss nem acrescentes a perdedoras sem regras.'])}`,
      q: [
        ['Tens 10 000 € e arriscas 1% numa operação com entrada a 20 € e stop a 19 €. Qual é o tamanho da posição?', ['50 ações', '100 ações', '500 ações', '10 000 ações'], 1, 'Risco = 100 €; distância = 1 €; tamanho = 100 ações.'],
        ['Um sistema ganha 40% das operações com ganho médio de 2R e perde 1R nas restantes. Expectativa por operação?', ['-0,2R', '0R', '+0,2R', '+1R'], 2, '0,4 × 2 − 0,6 × 1 = +0,2R.'],
        ['Depois de perder 50% de uma conta, que ganho precisas para ficar empatado?', ['50%', '75%', '100%', '200%'], 2, 'Ir de 50 de volta a 100 exige um ganho de 100%.']
      ]
    },
    {
      id: 'b7', m: 13, t: 'Psicologia do trading e o diário',
      hook: 'As estratégias falham na mente muito antes de falharem no gráfico. Constrói hábitos que te mantenham estável e regista-os.',
      body: `
<p>A maioria dos traders que falham sabia o que fazer. Simplesmente não o fez. Mexeram nos stops, entraram em operações por tédio, dobraram a aposta depois de perdas. A <b>psicologia</b> não é coisa leve: é onde o dinheiro se ganha ou se perde.</p>

<h3>Os suspeitos do costume</h3>
<ul>
<li><b>FOMO</b>: perseguir um movimento que já aconteceu. Compras perto do topo porque “vai para a lua”.</li>
<li><b>Trading de vingança</b>: depois de uma perda, fazer uma operação impulsiva e maior para “recuperar”.</li>
<li><b>Excesso de operações</b>: operar por tédio ou necessidade de ação. Mais operações significam mais custos e mais erros.</li>
<li><b>Esperança</b>: recusar-te a aceitar um stop-loss porque a operação “pode voltar”.</li>
<li><b>Ganância depois de ganhos</b>: aumentar o tamanho depois de uma sequência de sorte e devolver tudo.</li>
<li><b>Medo</b>: cortar ganhos cedo e hesitar em setups válidos depois de algumas perdas.</li>
<li><b>Tilt</b>: um estado de frustração emocional em que deixas de seguir regras por completo.</li>
</ul>

<h3>Hábitos que te protegem</h3>
<ol>
<li><b>Lista de verificação antes da operação</b>: se nem todas as caixas estão marcadas, não há operação.</li>
<li><b>Rotina diária fixa</b>: prepara-te antes de o mercado abrir; pára a uma hora definida.</li>
<li><b>Máximo de operações por dia</b> (por exemplo 3 a 5).</li>
<li><b>A regra dos três erros</b>: depois de três perdas seguidas, afasta-te pelo menos uma hora.</li>
<li><b>Limite de perda diária</b>: quando atingido, fecha a plataforma.</li>
<li><b>Sono, comida, exercício</b>: traders cansados tomam piores decisões, e isto é mensurável.</li>
<li><b>Escreve o que sentes</b>: uma nota curta antes de cada operação sobre o teu estado. Os padrões aparecem depressa.</li>
</ol>

<h3>O diário de trading: o teu treinador privado</h3>
<p>Um diário regista cada operação: data, mercado, setup, entrada, stop, objetivo, tamanho, resultado em R, se seguiste o plano, a tua emoção e uma captura de ecrã. Depois de 30 a 50 operações podes responder a perguntas que mudam tudo:</p>
<ul>
<li>Que setup ganha dinheiro e qual perde?</li>
<li>Perdes mais quando quebras as tuas regras?</li>
<li>Que emoções ou horas do dia te prejudicam?</li>
</ul>
<p>Experimenta o diário abaixo. Começa com operações de exemplo. Repara como “plano seguido” e a emoção contam uma história clara. Depois limpa-o e regista as tuas próprias operações de prática.</p>
${B.w('journal')}

${B.w('checklist', { key: 'b7', title: 'Lista antes da operação (copia e adapta)', accent: 'trd', items: 'A tendência do intervalo maior concorda com a minha operação|O setup corresponde exatamente às minhas regras escritas|O meu stop-loss está num ponto onde a ideia se prova errada|O tamanho da posição arrisca no máximo a minha percentagem fixa|O ganho é pelo menos 1,5 a 2 vezes o meu risco|Sem notícias importantes nos próximos 30 minutos|Estou calmo, descansado e não estou a tentar recuperar uma perda' })}

${B.key('<p>O teu trabalho não é prever o mercado. O teu trabalho é seguir as tuas regras enquanto o mercado faz o que quiser. Avalia como executaste, não apenas se a operação deu dinheiro.</p>')}

${B.take(['Emoções como FOMO, vingança e esperança destroem mais contas do que más estratégias.', 'Usa listas, limites de operações, limites de perda diária e pausas para impor disciplina.', 'Um diário transforma experiência em dados; revê-o semanalmente.', 'Julga-te pelo cumprimento das regras, não por resultados individuais.'])}`,
      q: [
        ['O que é trading de vingança?', ['Operar contra um rival', 'Fazer operações impulsivas e exageradas para recuperar uma perda', 'Vender com lucro', 'Usar uma conta demo'], 1, 'É movido pela emoção e costuma multiplicar a perda original.'],
        ['Qual é o melhor uso de um diário de trading?', ['Gabar-te', 'Encontrar padrões em setups, emoções e quebra de regras a partir dos teus dados', 'Substituir um stop-loss', 'Prever o mercado'], 1, 'O diário é uma ferramenta de feedback para melhorar o teu processo.'],
        ['Depois de atingires o teu limite de perda diária deves…', ['Aumentar o tamanho para recuperar', 'Parar de operar nesse dia', 'Mudar imediatamente para outro mercado', 'Remover o limite'], 1, 'O limite existe para travar uma espiral emocional.']
      ]
    },
    {
      id: 'b8', m: 15, t: 'Laboratório de paper trading e o teu plano de trading',
      hook: 'É hora de operar 100 velas com dinheiro a fingir. Depois escreve o plano que decide se alguma vez arriscas dinheiro a sério.',
      body: `
<p>Os pilotos não levam passageiros no primeiro dia: usam simuladores. Os traders devem fazer o mesmo. Uma conta de <b>paper trading</b> deixa-te praticar execução, regras e emoções sem risco financeiro.</p>

<h3>Joga: o mercado de treino</h3>
<p>Abaixo está um mercado gerado (não é real) que alterna entre tendências de alta, de baixa e laterais. Tens 10 000 € de dinheiro a fingir. Carrega em <b>Próxima vela</b> para avançar o tempo, ou em <b>Reprodução automática</b>. Entra long ou short, escolhe o teu risco, a distância do stop e o objetivo de lucro, e o laboratório calcula o tamanho da posição por ti. Depois de 100 velas, recebes uma análise final. Experimenta estas coisas:</p>
<ul>
<li>Liga a média de 20 velas e opera apenas na direção para onde aponta.</li>
<li>Opera com e sem objetivo de lucro. Qual dá resultados mais suaves?</li>
<li>Experimenta 2% de risco por operação e depois 0,5%. Compara o teu drawdown.</li>
<li>Clica em <b>Novo mercado</b> e vê se o teu resultado se repete.</li>
</ul>
${B.w('papertrade')}

${B.warn('<p>Os simuladores são mais fáceis do que a vida real: sem medo a sério, execuções perfeitas, sem derrapagem. Trata os resultados em papel como um teste mínimo das tuas regras, não como prova de lucro futuro.</p>')}

<h3>Quando é que “passaste”?</h3>
<ul>
<li>Pelo menos <b>100 operações</b> registadas no teu diário com as mesmas regras.</li>
<li>Expectativa positiva depois de custos.</li>
<li>Seguiste o teu plano em pelo menos 90% das operações.</li>
<li>Um drawdown máximo que conseguirias tolerar emocionalmente com dinheiro real.</li>
</ul>

<h3>A transição para o real</h3>
<ol>
<li>Começa com <b>10% do tamanho pretendido</b>. O dinheiro real muda o comportamento, mesmo quando é pouco.</li>
<li>Faz mais 100 operações reais nesse tamanho minúsculo.</li>
<li>Aumenta devagar (por exemplo +25% depois de atingires objetivos de desempenho e disciplina) e reduz depois de drawdowns.</li>
<li>Levanta parte dos lucros regularmente para que os ganhos se tornem reais.</li>
</ol>

<h3>O teu modelo de plano de trading</h3>
<p>Copia isto para um documento e preenche. Um plano escrito é a tua constituição.</p>
${B.tbl(['Secção', 'O que escrever'], [
        ['Objetivo', 'O que pretendes em 12 meses? (Competência, consistência, rendimento)'],
        ['Mercados e horários', 'Que instrumentos? Que horas? Quando não operas?'],
        ['Estratégia', 'Setups com regras exatas de entrada, stop e objetivo'],
        ['Regras de risco', 'Risco por operação, limite diário, limite semanal, risco máximo em aberto'],
        ['Rotina', 'Preparação pré-mercado, gestão das operações, revisão no fim do dia'],
        ['Regras de psicologia', 'Máximo de operações, regra dos três erros, pausas'],
        ['Calendário de revisão', 'Revisão semanal do diário; desempenho mensal e alterações às regras'],
        ['Regra de parar / pausar', 'A que drawdown (por exemplo -10%) paras e revês antes de continuar?']
      ])}

${B.ex('<p>A Sara opera com um plano de 0,5% de risco por operação e uma regra de pausa em -8%. No segundo mês atinge -8%. Pára, revê o diário e descobre que 70% das perdas vieram de quebrar a regra “nenhuma operação nos primeiros 5 minutos”. Corrige e retoma a metade do tamanho. Uma regra de pausa transformou uma má fase numa lição.</p>')}

<h3>Ir mais longe</h3>
<p>Se queres estrutura guiada, um programa pronto e um robô de trading para te ajudar a aplicar regras com consistência, o criador deste curso oferece um produto pago opcional chamado <b>Trading Lab</b>. Não é necessário: este percurso gratuito cobre o essencial. Vê a <a href="#lab">página do Trading Lab</a> para detalhes e, como sempre, lembra-te de que nenhum curso ou ferramenta pode eliminar o risco de mercado nem garantir lucros.</p>

${B.take(['Faz paper trading de pelo menos 100 operações com regras fixas antes de arriscar dinheiro real.', 'Começa em real com cerca de 10% do tamanho pretendido e aumenta devagar.', 'Escreve um plano com regras de risco, rotinas e uma regra de pausa.', 'Os simuladores são mais gentis do que a realidade; usa-os como teste mínimo.'])}`,
      q: [
        ['Quantas operações deves procurar em paper trading antes de passar ao real?', ['3', '10', '100 ou mais', 'Não importa'], 2, 'É preciso uma amostra maior para ver se a tua vantagem é real ou apenas sorte.'],
        ['Qual é uma forma sensata de começar a operar a sério?', ['Com o tamanho total de imediato', 'Com cerca de 10% do tamanho pretendido', 'Com dinheiro emprestado', 'Com alavancagem máxima'], 1, 'O dinheiro real muda as emoções, por isso começa pequeno para aprender em segurança.'],
        ['O que faz uma “regra de pausa”?', ['Obriga-te a operar mais', 'Faz-te parar e rever quando atinges um drawdown definido', 'Remove os stop-loss', 'Garante recuperação'], 1, 'Protege o capital e força a reflexão antes de os problemas se agravarem.']
      ]
    }
  ]);
})();
