/* Fundamentos do Dinheiro: 6 lições */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('found', [
    {
      id: 'f1', m: 9, t: 'Dinheiro, inflação e porque poupar não chega',
      hook: 'O teu dinheiro está a perder poder de compra neste momento, sem fazer barulho. Eis como o medir e o que fazer.',
      body: `
<p>Imagina que uma pizza custa <b>10 €</b> hoje. Se os preços subirem 3% por ano, a mesma pizza custará cerca de <b>18 €</b> daqui a 20 anos. A pizza não mudou. O dinheiro é que compra menos. Este encolhimento lento chama-se <b>inflação</b> e é a principal razão pela qual guardar todo o dinheiro numa gaveta (ou numa conta a 0%) não é um plano seguro. É uma fuga lenta.</p>

<h3>O que o dinheiro faz, na verdade</h3>
<p>O dinheiro tem três funções. É um <b>meio de troca</b> (trocas por coisas), uma <b>unidade de conta</b> (os preços escrevem-se nele) e uma <b>reserva de valor</b> (podes guardá-lo para mais tarde). A inflação ataca a terceira função. Em poucos meses mal se nota. Em 20 anos é enorme.</p>

<h3>Como funciona a inflação</h3>
<p>Quando há mais dinheiro e procura na economia do que coisas para comprar, ou quando produzir fica mais caro (energia, salários, transportes), os preços sobem. Bancos centrais como o Banco Central Europeu ou a Reserva Federal dos EUA apontam para cerca de <b>2% de inflação por ano</b>, que consideram saudável. Por vezes dispara muito mais, como em 2022, quando muitos países viram os preços subir 8% ou mais num só ano.</p>

${B.key('<p><b>Nominal vs. real.</b> Se as tuas poupanças crescem 2% mas os preços sobem 3%, não ficaste mais rico. A tua rentabilidade <i>real</i> é de cerca de -1%. Pergunta sempre: o que é que este dinheiro vai conseguir comprar mais tarde, e não apenas quantos euros vou ter?</p>')}

<h3>Sente-o tu mesmo</h3>
<p>Mexe nos controlos abaixo. Repara como 6% de inflação é brutal ao longo de 30 anos e como até uma rentabilidade modesta faz uma grande diferença.</p>
${B.w('inflation')}

<h3>A regra dos 72</h3>
<p>Um truque útil: divide 72 pela percentagem anual para estimar em quantos anos algo duplica. Com 3% de inflação, os preços duplicam em cerca de <b>24 anos</b> (72 ÷ 3). Com 7% de crescimento de um investimento, o dinheiro duplica em cerca de <b>10 anos</b> (72 ÷ 7). Vamos usá-la outra vez na lição dos juros compostos.</p>

${B.ex('<p>A Marta tem 19 anos e guarda 5000 € de trabalhos de verão numa gaveta. Com 3% de inflação, daqui a 10 anos continuam a ser 5000 € no papel, mas compram o que cerca de 3700 € compram hoje. O amigo Diogo põe os mesmos 5000 € num fundo diversificado. Não vai subir em linha reta (terá anos bons e anos maus), mas historicamente estes fundos venceram a inflação em períodos longos. Nenhuma das escolhas está livre de risco. Não fazer nada também é uma escolha, e tem custo.</p>')}

<h3>Poupar vs. investir: dois trabalhos diferentes</h3>
<ul>
<li><b>Poupar</b> serve para necessidades de curto prazo e segurança: emergências, as férias do próximo ano, um portátil. Queres que o dinheiro esteja lá, estável e fácil de alcançar.</li>
<li><b>Investir</b> serve para objetivos de longo prazo (5 anos ou mais): comprar ativos que podem crescer mais depressa do que a inflação, aceitando que o valor vai subir e descer pelo caminho.</li>
</ul>
<p>Precisas dos dois. As poupanças protegem-te de emergências para nunca teres de vender investimentos num mau momento.</p>

${B.warn('<p>“Investir” não é uma palavra mágica para “ganhar dinheiro”. Significa assumir risco em troca da <i>possibilidade</i> de rentabilidades mais altas. Podes perder dinheiro. O resto deste curso é sobre assumir esse risco com sensatez.</p>')}

${B.take(['A inflação reduz continuamente o que o teu dinheiro consegue comprar, normalmente cerca de 2 a 3% por ano.', 'Olha para as rentabilidades reais (depois da inflação), não só para os números nominais.', 'As poupanças servem para estabilidade e emergências; investir serve para crescimento a longo prazo.', 'A regra dos 72 estima o tempo para duplicar: 72 a dividir pela taxa anual.'])}`,
      q: [
        ['Se a tua conta poupança paga 1% e a inflação é 3%, o que acontece ao teu poder de compra?', ['Cresce 1%', 'Cai cerca de 2% por ano', 'Fica igual', 'Cai 4%'], 1, 'A rentabilidade real é aproximadamente a taxa de juro menos a inflação: 1% - 3% = cerca de -2%.'],
        ['Com a regra dos 72, quanto tempo demoram os preços a duplicar com 4% de inflação?', ['8 anos', '12 anos', '18 anos', '36 anos'], 2, '72 ÷ 4 = 18 anos.'],
        ['Qual é o melhor uso para uma conta poupança?', ['Dinheiro de que precisas nos próximos 1 a 2 anos e emergências', 'O dinheiro da reforma para os próximos 40 anos', 'Ficar rico depressa', 'Apostar na bolsa'], 0, 'As poupanças servem para necessidades de curto prazo e segurança. Os objetivos de longo prazo costumam precisar de investimentos.']
      ]
    },
    {
      id: 'f2', m: 10, t: 'A tua base financeira: orçamento, fundo de emergência e dívidas',
      hook: 'Antes de investires um único euro, constrói a base que impede a vida de te deitar abaixo.',
      body: `
<p>A maioria dos conselhos de investimento começa com “compra este fundo”. O investimento inteligente começa <b>mais cedo</b>: com um orçamento, uma almofada de segurança e um plano para as dívidas. Salta este passo e um telemóvel avariado ou um despedimento podem obrigar-te a vender investimentos na pior altura.</p>

<h3>Passo 1: Sabe para onde vai o teu dinheiro</h3>
<p>Uma regra popular para começar é a <b>regra 50/30/20</b>: cerca de 50% do rendimento depois de impostos vai para <b>necessidades</b> (renda, comida, transportes, contas), 30% para <b>desejos</b> (diversão, subscrições, comer fora) e 20% para <b>poupar e investir</b>. É um guia, não uma lei. Se és estudante e ganhas 400 € por mês, 20% são 80 €, e é um ótimo começo. O que importa é criar o hábito.</p>
${B.w('budget')}

<h3>Passo 2: Paga-te a ti primeiro</h3>
<p>Não poupes “o que sobra”. Configura uma transferência automática para a poupança no dia do ordenado, <i>antes</i> de poderes gastar. Trata-a como uma conta que deves ao teu eu do futuro. A automatização vence a força de vontade.</p>

<h3>Passo 3: O fundo de emergência</h3>
<p>Um <b>fundo de emergência</b> é dinheiro guardado em segurança e de acesso fácil para imprevistos: reparações do carro, despesas médicas, perda de emprego. O objetivo habitual é <b>3 a 6 meses de despesas essenciais</b> numa conta poupança normal (não em ações nem em cripto). Estudantes e jovens com custos baixos podem começar com um mês e ir crescendo.</p>
${B.ex('<p>O Rui investe 2000 € em ações mas não tem fundo de emergência. Três meses depois o portátil avaria e precisa de 700 € já. O mercado está por acaso a cair 15%, por isso vende com prejuízo e fixa a perda. A Ana investiu o mesmo valor, mas primeiro guardou 1000 € em poupança. Pagou o portátil com a poupança e os investimentos ficaram intactos e recuperaram mais tarde. Mesmos investimentos, resultado muito diferente, por causa da almofada.</p>')}

<h3>Passo 4: Lida com as dívidas com inteligência</h3>
<ul>
<li><b>Dívida com juros altos</b> (cartões de crédito, descobertos, crédito rápido, muitas vezes 15 a 25% ao ano ou mais) é como uma rentabilidade negativa garantida. Pagá-la vence quase qualquer investimento. Faz isto primeiro.</li>
<li><b>Dívida com juros baixos</b> (por exemplo, alguns empréstimos de estudo ou de habitação a taxas baixas) é normal. Podes continuar a amortizá-la enquanto começas a investir.</li>
<li><b>Nunca</b> peças dinheiro emprestado para investir em ativos arriscados. As perdas multiplicam-se e continuas a dever a dívida.</li>
</ul>

<h3>Passo 5: Investe no teu maior ativo: tu</h3>
<p>Quando se é jovem, o melhor “investimento” costuma ser competências: aprender um ofício, uma língua, programação, vendas. Aumentar o teu rendimento em 200 € por mês vale mais do que 10% de rentabilidade sobre 1000 €. Investir em competências e investir dinheiro funcionam em conjunto.</p>

${B.w('checklist', { key: 'f2', title: 'A tua lista da base financeira', accent: 'found', items: 'Sei mais ou menos quanto ganho e gasto por mês|Tenho uma conta poupança separada para emergências|Configurei uma transferência mensal automática para a poupança|Tenho pelo menos 1 mês de despesas essenciais poupado (com o objetivo de 3 a 6)|Não tenho dívidas com juros altos, ou tenho um plano para as pagar|Percebo que só devo investir dinheiro de que não vou precisar durante 5+ anos' })}

${B.take(['Constrói primeiro a base: orçamento, fundo de emergência, sem dívidas de juros altos.', 'Usa o 50/30/20 como guia inicial e automatiza a poupança no dia do ordenado.', 'Mantém o fundo de emergência numa conta segura e acessível, não em ativos arriscados.', 'Pagar um cartão de crédito a 20% é uma rentabilidade garantida de 20%.'])}`,
      q: [
        ['Que dívida deves normalmente pagar ANTES de investir?', ['Um empréstimo de estudo a 3%', 'Um cartão de crédito a 20% ao ano', 'Nenhuma, investe sempre primeiro', 'Uma dívida a um amigo a 0%'], 1, 'A dívida de juros altos é uma perda garantida que vence as rentabilidades típicas dos investimentos.'],
        ['Qual é o melhor sítio para um fundo de emergência?', ['Ações', 'Cripto', 'Uma conta poupança segura e de acesso fácil', 'Ações de uma só empresa'], 2, 'O objetivo é que o dinheiro esteja disponível e estável quando precisares.'],
        ['O que significa “paga-te a ti primeiro”?', ['Gasta contigo antes de tudo o resto', 'Poupa automaticamente quando recebes, antes de gastar', 'Pede emprestado para investir', 'Não pagues as contas'], 1, 'A poupança automática no dia do ordenado cria hábito e tira a tentação de gastar.']
      ]
    },
    {
      id: 'f3', m: 10, t: 'Risco, rentabilidade e tempo',
      hook: 'Porque é que rentabilidades mais altas trazem sempre solavancos, e como o tempo muda a equação.',
      body: `
<p>Eis a regra mais importante das finanças: <b>maior rentabilidade potencial vem com maior risco</b>. Se alguém te oferece uma rentabilidade alta sem risco, ou está a mentir ou o produto és tu.</p>

<h3>O que o risco realmente significa</h3>
<p>Na conversa do dia a dia, risco quer dizer “posso perder dinheiro”. Os profissionais olham para duas coisas:</p>
<ul>
<li><b>Volatilidade</b>: quanto o preço salta de um lado para o outro. Um fundo de ações pode cair 30% num mau ano e recuperar mais tarde. Isso é volatilidade.</li>
<li><b>Perda permanente</b>: o dinheiro desapareceu para sempre. Uma empresa que vai à falência, uma burla, uma moeda que vai a zero.</li>
</ul>
<p>A volatilidade é o preço que pagas por rentabilidades mais altas. A perda permanente é o que tentas evitar com diversificação e boas escolhas.</p>

${B.w('ladder')}

<h3>O tempo muda tudo</h3>
<p>O teu <b>horizonte temporal</b> é o tempo até precisares do dinheiro. As ações podem oscilar muito num ano, mas ao longo de 15 a 20 anos os mercados de ações diversificados recompensaram historicamente os investidores pacientes. Num ano, o resultado é quase um cara ou coroa. Em 20 anos, muito menos (embora nunca garantido).</p>
${B.key('<p><b>A regra prática dos 5 anos.</b> O dinheiro de que precisas dentro de cerca de 5 anos não deve estar em ativos voláteis como ações ou cripto. Se houver um crash mesmo antes de precisares, não terás tempo para recuperar.</p>')}

<h3>Tolerância ao risco vs. capacidade de risco</h3>
<ul>
<li><b>Capacidade de risco</b>: quanta perda podes aguentar financeiramente (rendimento estável, sem dívidas, horizonte longo = capacidade alta).</li>
<li><b>Tolerância ao risco</b>: quanta perda consegues suportar emocionalmente sem vender em pânico.</li>
</ul>
<p>O teu nível de risco real é o <i>mais baixo</i> dos dois. Um jovem com horizonte longo pode ter capacidade alta, mas se uma queda de 30% o fizesse vender tudo, a tolerância é baixa e o plano tem de a respeitar.</p>

${B.ex('<p>Pensa numa montanha-russa e num comboio para a mesma cidade. A montanha-russa (ações) é emocionante e cheia de solavancos, e numa viagem longa pode levar-te mais longe. O comboio (obrigações, poupança) é suave mas mais lento. Se enjoas nas montanhas-russas e saltas a meio, acabas em lado nenhum. Escolhe o passeio que consegues acabar.</p>')}

<h3>Diversificação: o único almoço grátis</h3>
<p>Não ponhas os ovos todos no mesmo cesto. Espalhar o dinheiro por muitas empresas, países e tipos de ativos significa que um desastre sozinho não te consegue destruir. Os economistas dizem que a diversificação é o mais parecido com um almoço grátis no investimento: reduz o risco sem necessariamente reduzir a rentabilidade esperada. Vais praticá-la no percurso Investidor.</p>

${B.warn('<p>Rentabilidades passadas não são uma promessa. “Subiu 300% no ano passado” diz-te quase nada sobre o ano que vem, e perseguir o vencedor do ano passado é um dos erros mais comuns dos principiantes.</p>')}

${B.take(['Rentabilidade esperada mais alta vem com risco mais alto. Sem exceções.', 'Volatilidade são altos e baixos temporários; a perda permanente é o verdadeiro inimigo.', 'O dinheiro de que precisas em cerca de 5 anos não pertence a ativos voláteis.', 'O teu verdadeiro nível de risco é o mais baixo entre a tua capacidade financeira e a tua tolerância emocional.', 'A diversificação reduz o risco sem necessariamente reduzir a rentabilidade esperada.'])}`,
      q: [
        ['Um amigo promete “20% ao ano, garantido, sem risco”. A reação mais inteligente é…', ['Investir tudo depressa', 'Desconfiar muito: rentabilidades altas sem risco não existem', 'Pedir um desconto', 'Pedir dinheiro emprestado para investir mais'], 1, 'Rentabilidade e risco andam juntos. Rentabilidades altas garantidas são um sinal clássico de burla.'],
        ['Precisas de dinheiro para a entrada de uma casa daqui a 2 anos. O que encaixa melhor?', ['100% numa moeda cripto volátil', 'Sobretudo poupança segura e estável', '100% numa só ação', 'Uma operação alavancada'], 1, 'Horizontes curtos precisam de estabilidade, para que um crash não estrague o plano mesmo antes de precisares do dinheiro.'],
        ['Qual é a diferença entre capacidade de risco e tolerância ao risco?', ['São a mesma coisa', 'Capacidade é o que podes perder; tolerância é o que aguentas emocionalmente', 'Capacidade é emocional; tolerância é financeira', 'A tolerância só importa para traders'], 1, 'Ambas contam. O teu limite real é o mais baixo dos dois.']
      ]
    },
    {
      id: 'f4', m: 11, t: 'A magia dos juros compostos',
      hook: 'O efeito bola de neve que transforma pequenas quantias regulares em dinheiro a sério, e porque começar cedo importa mais do que começar grande.',
      body: `
<p><b>Juros compostos</b> significa ganhar rentabilidade sobre a rentabilidade. Imagina rolar uma pequena bola de neve por uma colina comprida. No início quase não cresce. Mais tarde, cada volta junta mais neve porque já há muita neve a que se agarrar. Isto é a capitalização.</p>

<h3>Simples vs. composto</h3>
<p>Com juros simples, 1000 € a 10% rendem 100 € por ano, para sempre: ao fim de 10 anos tens 2000 €. Com juros compostos, os 10% de cada ano calculam-se sobre o montante <i>novo e maior</i>: ao fim de 10 anos tens cerca de <b>2594 €</b>. Ao fim de 30 anos, os juros simples dão 4000 € enquanto a capitalização dá cerca de <b>17 450 €</b>. Mesma taxa, mesmo ponto de partida, resultado radicalmente diferente.</p>

<h3>Brinca com a máquina</h3>
<p>Experimenta: define um valor mensal, uma rentabilidade e um número de anos. Depois usa o controlo de “espera” para ver o que acontece se começares 10 anos mais tarde.</p>
${B.w('compound', { wait: 10 })}

${B.ex('<p><b>Ana vs. Bruno.</b> A Ana começa a investir 100 € por mês aos 20 anos e para aos 30 (10 anos, 12 000 € entregues) e nunca mais acrescenta um cêntimo. O Bruno espera até aos 30 e investe 100 € por mês até aos 60 (30 anos, 36 000 € entregues). A 7% ao ano, aos 60 anos a Ana pode acabar com um valor semelhante, ou até superior, apesar de ter entregue um terço. Porquê? O dinheiro dela teve mais 10 anos de bola de neve. O tempo vence a quantia.</p>')}

<h3>As três alavancas da capitalização</h3>
<ol>
<li><b>Tempo</b>: a alavanca mais poderosa, e a única que não podes comprar de volta. Começa já, mesmo que pouco.</li>
<li><b>Contribuições regulares</b>: acrescentar dinheiro de forma constante continua a alimentar a bola de neve.</li>
<li><b>Rentabilidade</b>: rentabilidades mais altas ajudam, mas vêm com mais risco e comissões. Não as persigas à custa das duas primeiras.</li>
</ol>

<h3>A capitalização também trabalha contra ti</h3>
<p>A dívida do cartão de crédito a 20% capitaliza contra ti. E as <b>comissões</b> também: um fundo que cobra 2% por ano pode comer uma grande parte do teu resultado final ao longo de décadas (vamos medi-lo no percurso Investidor).</p>

${B.key('<p><b>O melhor momento para começar foi ontem. O segundo melhor é hoje.</b> Os teus primeiros 50 € por mês importam mais para o teu futuro do que uma estratégia perfeita que comeces daqui a cinco anos.</p>')}

${B.warn('<p>Os investimentos reais não crescem em linha suave. Uma “média de 7%” pode significar +25% num ano e -15% no seguinte. A curva do componente é uma ilustração suavizada. Nunca contes com uma rentabilidade prometida.</p>')}

${B.take(['Capitalizar é ganhar rentabilidade sobre rentabilidades anteriores, por isso o crescimento acelera com o tempo.', 'Começar cedo vence investir mais tarde: o tempo é a alavanca mais forte.', 'Contribuições regulares mais paciência constroem riqueza; esperar pelo “momento perfeito” custa dinheiro.', 'A capitalização também trabalha contra ti nas dívidas e nas comissões altas.'])}`,
      q: [
        ['Aproximadamente quanto tempo demora o dinheiro a duplicar a 8% ao ano (regra dos 72)?', ['4 anos', '9 anos', '15 anos', '20 anos'], 1, '72 ÷ 8 = 9 anos.'],
        ['Que fator é o MAIS poderoso na capitalização?', ['Escolher o ativo do momento', 'O tempo', 'Ver os preços todos os dias', 'Apenas um montante inicial grande'], 1, 'O tempo deixa o crescimento assentar em crescimento. Não se compram de volta anos perdidos.'],
        ['Porque pode uma comissão anual de 2% de um fundo ser tão prejudicial ao longo de décadas?', ['É cobrada só uma vez', 'Capitaliza contra ti, reduzindo a base que cresce todos os anos', 'É dedutível nos impostos', 'Só importa em mercados em baixa'], 1, 'As comissões pagam-se todos os anos, por isso perdes a comissão e todo o crescimento futuro que esse dinheiro teria rendido.']
      ]
    },
    {
      id: 'f5', m: 13, t: 'A caixa de ferramentas do investimento: ações, obrigações, fundos, ETF e mais',
      hook: 'Um passeio em linguagem simples por tudo em que podes investir, como cada coisa ganha dinheiro e o que pode correr mal.',
      body: `
<p>Vais encontrar muitos nomes na tua viagem pelo investimento. Aqui está a caixa de ferramentas completa, explicada de forma simples.</p>

<h3>As principais classes de ativos</h3>
<ul>
<li><b>Dinheiro e poupança</b>: estável, rentabilidade baixa, protegido por garantias de depósitos até um limite (na UE, normalmente 100 000 € por banco).</li>
<li><b>Ações</b>: és dono de um pedacinho de uma empresa. Ganhas com a subida do preço e com dividendos (uma parte dos lucros). Potencial alto a longo prazo, grandes altos e baixos.</li>
<li><b>Obrigações</b>: emprestas dinheiro a um governo ou empresa e recebes juros regulares e o teu dinheiro de volta no fim. Costumam ser mais calmas do que as ações, mas os preços caem quando as taxas de juro sobem e as empresas podem falhar o pagamento.</li>
<li><b>Fundos e ETF</b>: cestos que têm muitas ações ou obrigações de uma só vez, por isso diversificas com uma só compra.</li>
<li><b>Imobiliário</b>: imóveis ou empresas imobiliárias cotadas (REIT). Rendas mais variações de preço. Montantes grandes, difíceis de vender depressa, muitas vezes exige crédito.</li>
<li><b>Matérias-primas e ouro</b>: matérias brutas. O ouro é muitas vezes guardado como “porto seguro” e não gera rendimento.</li>
<li><b>Criptoativos</b>: ativos digitais em blockchains, como Bitcoin e Ethereum. Muito voláteis, com um conjunto adicional de riscos de segurança e burlas. Os percursos de cripto tratam deles em profundidade.</li>
<li><b>Derivados</b> (futuros, opções, CFD): contratos cujo valor depende de outro ativo, muitas vezes com alavancagem. Avançados, de risco elevado e uma das principais causas de perdas de principiantes.</li>
</ul>

${B.tbl(['Ativo', 'Como ganha dinheiro', 'Risco principal', 'Adequado para'], [
        ['Poupança', 'Juros', 'A inflação supera os juros', 'Emergências, objetivos de curto prazo'],
        ['Ações', 'Subida de preço + dividendos', 'Grandes quedas, falência da empresa', 'Crescimento a longo prazo (5+ anos)'],
        ['Obrigações', 'Pagamento de juros', 'Subida das taxas, incumprimento', 'Estabilidade, horizonte médio'],
        ['ETF / fundos', 'O que tiverem dentro', 'O mesmo dos ativos que contêm, mais comissões', 'Diversificação fácil'],
        ['Imobiliário', 'Renda + valorização', 'Pouca liquidez, dívida, mercado local', 'Horizonte longo, capital maior'],
        ['Cripto', 'Variações de preço (sobretudo)', 'Volatilidade extrema, burlas, ataques', 'Apenas uma pequena posição satélite'],
        ['Derivados / CFD', 'Apostas alavancadas no preço', 'Perder mais do que o esperado, depressa', 'Só traders experientes']
      ])}

<h3>Obrigações em 30 segundos</h3>
<p>Imagina que emprestas 1000 € a um governo durante 10 anos e ele te paga 3% (30 €) por ano e depois devolve os teus 1000 €. Simples. O problema: se as novas obrigações passarem a pagar 5%, ninguém quer a tua de 3% ao preço inteiro, por isso o preço dela cai. É por isso que os preços das obrigações e as taxas de juro se movem em sentidos opostos.</p>

<h3>Ações em 30 segundos</h3>
<p>Se uma empresa tem 1 000 000 de ações e tu tens 1000, és dono de 0,1% dela. Se a empresa ganhar mais lucro ao longo do tempo, as ações tendem a valer mais. Se tiver dificuldades, podem cair para nada. É por isso que raramente recomendamos comprar só uma.</p>

<h3>Onde se compram?</h3>
<p>Precisas de um <b>corretor</b> (uma empresa que executa as tuas ordens), de um banco com serviços de investimento ou de uma exchange de cripto. Escolhe um que seja <b>regulado</b> na tua região, cobre comissões baixas e mantenha os teus ativos separados dos dele. Os valores mobiliários detidos num corretor são normalmente segregados e cobertos por um sistema de indemnização de investidores como último recurso (na UE, muitas vezes 20 000 €), mas isto não é uma promessa de que não perdes dinheiro com quedas do mercado.</p>

${B.warn('<p>Complexidade não é sofisticação. Produtos com nomes elaborados, estruturas “garantidas”, comissões altas ou alavancagem costumam enriquecer o vendedor, não tu. Se não consegues explicar numa frase como é que ganha dinheiro, não o compres.</p>')}

${B.take(['Cada classe de ativos ganha dinheiro de forma diferente e tem riscos diferentes.', 'Fundos e ETF juntam muitos ativos para diversificares logo.', 'Os preços das obrigações movem-se ao contrário das taxas de juro.', 'Derivados e CFD são para traders experientes, não para principiantes.', 'Usa um corretor ou plataforma regulada e percebe o que compras.'])}`,
      q: [
        ['O que é um ETF?', ['Um tipo de moeda cripto', 'Um cesto de muitos ativos que podes comprar como um só produto numa bolsa', 'Uma conta poupança', 'Um empréstimo a uma empresa'], 1, 'Um fundo cotado em bolsa tem muitas ações ou obrigações, dando diversificação imediata.'],
        ['Porque é que os preços das obrigações costumam cair quando as taxas de juro sobem?', ['As obrigações deixam de pagar juros', 'As obrigações novas pagam mais, por isso as antigas, que pagam menos, valem menos', 'Os governos entram em incumprimento', 'A inflação desaparece'], 1, 'Os investidores preferem as novas taxas mais altas, por isso a obrigação antiga tem de ficar mais barata para competir.'],
        ['Que produto é o MAIS perigoso para um principiante?', ['Um ETF de índice global de ações', 'Uma conta poupança', 'Um CFD alavancado', 'Uma obrigação do Estado'], 2, 'Os produtos alavancados podem gerar grandes perdas muito depressa.']
      ]
    },
    {
      id: 'f6', m: 11, t: 'O teu cérebro vs. o teu dinheiro: vieses e disciplina',
      hook: 'A maior ameaça às tuas rentabilidades não é o mercado. É a pessoa que te olha do espelho.',
      body: `
<p>Dois investidores compram o mesmo fundo. Um tem boas rentabilidades. O outro perde dinheiro. A diferença é geralmente o comportamento: quando compraram, quando entraram em pânico, o que perseguiram. Perceber a tua própria mente é a vantagem mais barata que alguma vez vais ter.</p>

<h3>As armadilhas mentais mais comuns</h3>
<ul>
<li><b>Aversão à perda</b>: perder 100 € dói aproximadamente o dobro do que ganhar 100 € sabe bem. Isto leva as pessoas a vender os ganhadores cedo demais e a manter os perdedores tempo demais, à espera de “voltar ao zero”.</li>
<li><b>FOMO (medo de ficar de fora)</b>: vês uma moeda a subir 80% esta semana e compras no topo porque toda a gente fala dela.</li>
<li><b>Comportamento de manada</b>: fazer o que a multidão faz parece seguro, mas a multidão costuma errar nos extremos (euforia nos topos, pânico nos fundos).</li>
<li><b>Excesso de confiança</b>: algumas vitórias com sorte fazem-te sentir um génio. Os mercados são muito bons a humilhar as pessoas.</li>
<li><b>Viés de recência</b>: acreditar que o passado recente vai continuar para sempre. “Isto só sobe” depois de um boom; “nunca vai recuperar” depois de um crash.</li>
<li><b>Viés de confirmação</b>: ler só as opiniões que concordam com o que já tens.</li>
<li><b>Falácia dos custos irrecuperáveis</b>: recusar vender uma posição perdedora porque “já perdi tanto”.</li>
<li><b>Ancoragem</b>: fixares-te no preço que pagaste em vez de no que o ativo vale hoje.</li>
</ul>

${B.ex('<p>A Lena comprou uma moeda a 10 € depois de um amigo dizer que ia “a 100 €”. Cai para 5 €. Em vez de perguntar “comprava isto hoje a 5 €?”, pensa “tenho de esperar até voltar aos 10 €”. O preço dela está ancorado na compra. Meses depois está a 1 €. O mercado não sabe nem quer saber o que ela pagou.</p>')}

<h3>Antídotos: regras vencem emoções</h3>
<ol>
<li><b>Escreve um plano antes de investires.</b> O que vais comprar, quanto, com que frequência e o que farás num crash. Decisões tomadas com calma vencem decisões tomadas em pânico.</li>
<li><b>Automatiza.</b> O investimento mensal automático elimina decisões de timing.</li>
<li><b>A regra das 24 horas.</b> Nunca compres algo por causa de uma dica quente nas 24 horas seguintes a ouvi-la.</li>
<li><b>Verifica menos.</b> Ver os preços todos os dias aumenta o stress e as más decisões. Investidores de longo prazo podem olhar uma vez por mês ou por trimestre.</li>
<li><b>Mantém um diário.</b> Escreve porque compraste e o que esperavas. Revê-lo mais tarde ensina-te mais depressa do que qualquer livro.</li>
<li><b>Limita o “dinheiro de brincar”.</b> Se tens mesmo de especular, limita a uma fatia pequena (por exemplo 5%) para que os erros não prejudiquem os teus objetivos.</li>
</ol>

<h3>A tua dieta de informação</h3>
<p>As redes sociais estão cheias de “finfluencers” a mostrar capturas de ecrã de grandes lucros. Lembra-te do viés de sobrevivência: só vês os vencedores que publicam. Faz três perguntas a quem dá dicas: <b>Como é que esta pessoa é paga? O que está a vender? Posso ver o historial completo e verificado, incluindo as perdas?</b> Tem cuidado redobrado com quem promete certezas.</p>

${B.tryit('<p>Escreve numa frase o que vais fazer se os teus investimentos caírem 30% no próximo ano. Guarda-a num sítio onde a encontres. Essa frase é a tua primeira política de investimento.</p>')}

${B.take(['O comportamento, e não a inteligência, decide a maioria dos resultados de investimento.', 'Conhece as armadilhas: aversão à perda, FOMO, comportamento de manada, excesso de confiança, ancoragem.', 'Usa regras escritas, automatização e um período de reflexão para te protegeres de ti próprio.', 'Questiona cada dica: como é que esta pessoa é paga?'])}`,
      q: [
        ['Manténs um investimento perdedor só porque “já perdi tanto”. Isto é…', ['Diversificação', 'A falácia dos custos irrecuperáveis', 'Capitalização', 'Reequilíbrio'], 1, 'As perdas passadas já lá estão de qualquer forma. A única pergunta útil é se deves manter o ativo a partir de hoje.'],
        ['Qual é uma boa defesa contra o FOMO?', ['Comprar mais depressa', 'Um plano escrito e uma regra de reflexão de 24 horas', 'Seguir mais influenciadores', 'Ver os preços de hora a hora'], 1, 'Regras decididas com calma vencem sentimentos decididos com entusiasmo.'],
        ['Porque deves ter cuidado com capturas de ecrã de lucros nas redes sociais?', ['São sempre falsas', 'Viés de sobrevivência: não vês os perdedores nem o historial completo', 'São ilegais', 'Provam que a estratégia funciona'], 1, 'As pessoas publicam ganhos e escondem perdas, e algumas capturas são inventadas, por isso não são prova.']
      ]
    }
  ]);
})();
