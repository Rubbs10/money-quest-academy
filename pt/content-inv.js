/* Percurso Investidor do Dia a Dia: 8 lições */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('inv', [
    {
      id: 'a1', m: 10, t: 'Define os teus objetivos e escolhe as contas',
      hook: 'Antes de escolheres o que comprar, decide para que serve o dinheiro e onde vai viver.',
      body: `
<p>Os grandes investidores não começam por “o que devo comprar?”. Começam por “para que serve este dinheiro e quando é que preciso dele?”. A resposta decide quase tudo o resto.</p>

<h3>Usa três baldes</h3>
<ul>
<li><b>Balde de segurança (0 a 2 anos)</b>: fundo de emergência e dinheiro para despesas próximas. Conta poupança. Zero risco de mercado.</li>
<li><b>Balde de objetivos (2 a 10 anos)</b>: um carro, a entrada de uma casa, um mestrado. Sobretudo ativos calmos, com uma fatia menor de ações.</li>
<li><b>Balde de crescimento (10+ anos)</b>: reforma e riqueza a longo prazo. É aqui que faz sentido uma grande parte de ações globais, porque o tempo suaviza os solavancos.</li>
</ul>

<h3>Torna os objetivos específicos</h3>
<p>“Quero ser rico” não é um objetivo. “Quero 30 000 € para a entrada de uma casa daqui a 6 anos” é. Objetivos específicos dizem-te quanto poupar e que risco é adequado. Se a meta é 30 000 € em 6 anos e podes investir 350 € por mês, consegues testar se o plano funciona antes de começar.</p>

<h3>Tipos de contas</h3>
<p>A maioria dos países oferece <b>contas com benefícios fiscais</b> para investir ou para a reforma. Exemplos: 401(k) e Roth IRA nos EUA, Stocks and Shares ISA e SIPP no Reino Unido, TFSA e RRSP no Canadá, planos de poupança-reforma (PPR) em Portugal e vários produtos de pensões noutros sítios. Podem reduzir legalmente o imposto que pagas, por vezes bastante. Vê o que existe no <b>teu</b> país, incluindo as regras sobre quando podes levantar.</p>
<p>Uma <b>conta-corretora</b> normal é a opção flexível: podes investir e levantar a qualquer momento, mas pagas impostos segundo as regras locais.</p>

<h3>Como escolher um corretor</h3>
${B.tbl(['Verifica', 'Porque importa'], [
        ['Regulado na tua região', 'Dá-te proteções legais e regras que o corretor tem de cumprir'],
        ['Comissões baixas', 'Comissões, conversão de moeda, custódia e inatividade comem a rentabilidade sem dar nas vistas'],
        ['Acesso a ETF amplos', 'Queres produtos simples e diversificados, disponíveis a baixo custo'],
        ['Proteção dos ativos', 'Os teus valores mobiliários devem estar separados do dinheiro do próprio corretor; vê o sistema de indemnização'],
        ['App simples e fiável', 'Vais usá-la durante décadas; uma interface clara evita erros'],
        ['Não empurra produtos arriscados', 'Desconfia de plataformas que promovem alavancagem, CFD ou negociação constante a principiantes']
      ])}

<h3>Abrir uma conta: o que esperar</h3>
<ol>
<li>Cria a conta e confirma a tua identidade (documento de identificação e por vezes uma selfie, mais comprovativo de morada).</li>
<li>Associa a tua conta bancária e faz um pequeno primeiro depósito para testar o processo.</li>
<li>Ativa a autenticação de dois fatores com uma aplicação de autenticação.</li>
<li>Lê a tabela de comissões. Vê em especial as comissões de negociação, de conversão de moeda e tudo o que seja cobrado só por manter a conta.</li>
</ol>
${B.warn('<p>Nunca partilhes o teu acesso com ninguém. Não uses serviços de “gestão de conta” de desconhecidos que prometem rentabilidades. Os consultores legítimos são licenciados e nunca pedem a tua palavra-passe.</p>')}

${B.w('checklist', { key: 'a1', title: 'Antes do teu primeiro investimento', accent: 'inv', items: 'Escrevi o meu objetivo, o valor e o prazo|O meu fundo de emergência está feito|Vi as contas com benefícios fiscais disponíveis no meu país|Escolhi um corretor regulado e li a sua tabela de comissões|Ativei a autenticação de dois fatores com uma aplicação de autenticação|Decidi quanto vou investir por mês e configurei um lembrete ou transferência automática' })}

${B.take(['Começa pelo propósito e pelo prazo do dinheiro e só depois escolhe os ativos.', 'Usa três baldes: segurança, objetivos e crescimento.', 'Vê as contas com benefícios fiscais no teu próprio país.', 'Escolhe um corretor regulado e de baixo custo que não empurre produtos arriscados.'])}`,
      q: [
        ['O dinheiro de que vais precisar para a entrada de uma casa daqui a 3 anos pertence sobretudo a…', ['100% ações de alto risco', 'Ativos calmos com risco limitado', 'Uma moeda meme nova', 'Operações alavancadas'], 1, 'Com um horizonte curto, um crash mesmo antes de precisares do dinheiro seria prejudicial.'],
        ['O que deves verificar primeiro ao escolher um corretor?', ['Que tem anúncios vistosos', 'Que é regulado na tua região e tem comissões baixas e transparentes', 'Que oferece alavancagem 100x', 'Que os amigos o usam'], 1, 'A regulação e os custos importam muito mais do que o marketing.'],
        ['Qual é a principal vantagem das contas com benefícios fiscais?', ['Rentabilidades garantidas', 'Podem reduzir legalmente os impostos que pagas sobre ganhos', 'Sem risco', 'Taxas de juro mais altas nas ações'], 1, 'Não mudam o risco de mercado, mas menos impostos significam que fica contigo mais da rentabilidade.']
      ]
    },
    {
      id: 'a2', m: 11, t: 'ETF e fundos de índice: o cesto de snacks',
      hook: 'A forma mais simples e barata de ter centenas ou milhares de empresas ao mesmo tempo.',
      body: `
<p>Imagina que queres provar todos os snacks de um supermercado gigante. Podias comprar um pacote de cada tipo, o que é lento e caro. Ou podias comprar um <b>cesto</b> já preparado com um pouco de tudo. Um <b>ETF</b> (fundo cotado em bolsa) é esse cesto para investimentos. Compras uma unidade do ETF e ficas com uma fatia pequena de centenas ou milhares de empresas.</p>

<h3>Fundos de índice explicados</h3>
<p>Um <b>índice</b> é uma lista de empresas escolhidas por regras, como “as 500 maiores empresas dos EUA” (S&amp;P 500) ou “cerca de 1400 empresas grandes e médias de países desenvolvidos” (MSCI World). Um <b>fundo de índice</b> ou <b>ETF de índice</b> limita-se a copiar essa lista automaticamente. Nenhum gestor tenta adivinhar que ações escolher, por isso os custos são muito baixos.</p>

<h3>Porque é que a indexação funciona para a maioria</h3>
<p>Bater o mercado de forma consistente é extremamente difícil. Ano após ano, os relatórios que comparam fundos ativos com o seu índice de referência concluem que a maioria dos fundos ativos fica abaixo ao longo de 10 a 15 anos, muitas vezes na ordem das suas comissões mais altas. Os fundos de índice garantem-te a rentabilidade do mercado menos uma comissão minúscula, o que bate a maioria dos profissionais depois de custos.</p>
${B.ex('<p>Imagina que tu e 99 amigos tentam escolher ações. Depois de custos, o resultado médio fica abaixo do mercado, porque por cada vencedor há um perdedor do outro lado da operação, e todos pagam comissões. Se simplesmente tiveres o mercado inteiro através de um fundo de índice, apanhas a média sem pagar o “imposto do ativo”.</p>')}

<h3>Tipos de índice populares</h3>
${B.tbl(['Índice', 'O que cobre', 'Notas'], [
        ['S&amp;P 500', '500 grandes empresas dos EUA', 'Muito concentrado em tecnologia e nomes grandes dos EUA'],
        ['MSCI World', 'Cerca de 1400 empresas grandes e médias de países desenvolvidos', 'Cerca de 70% EUA'],
        ['FTSE All-World / MSCI ACWI', 'Mercados desenvolvidos e emergentes, milhares de empresas', 'O mais próximo de “o mundo inteiro” num só fundo'],
        ['Agregado de obrigações', 'Muitas obrigações do Estado e de empresas', 'A parte mais calma de uma carteira']
      ])}

<h3>Como comparar ETF</h3>
<ul>
<li><b>Índice replicado</b>: o que tem lá dentro? Amplo e global é simples e robusto.</li>
<li><b>TER (taxa de custos totais)</b>: a comissão anual. Os ETF de índice amplos custam muitas vezes cerca de 0,05 a 0,25% por ano. Os fundos ativos podem custar 1 a 2%.</li>
<li><b>Dimensão do fundo</b>: ETF muito pequenos podem fechar. Fundos maiores e estabelecidos são mais seguros.</li>
<li><b>Acumulação vs. distribuição</b>: os ETF de acumulação reinvestem os dividendos automaticamente (simples, bom para capitalizar); os de distribuição pagam-nos a ti.</li>
<li><b>Domicílio e UCITS</b>: na Europa, procura ETF conformes com UCITS, muitos domiciliados na Irlanda ou no Luxemburgo, pensados para investidores de retalho e muitas vezes com tratamento fiscal favorável sobre dividendos estrangeiros.</li>
<li><b>Replicação</b>: a física (detém as ações) é a mais fácil de perceber. A sintética usa swaps e acrescenta complexidade.</li>
<li><b>Moeda</b>: um ETF pode estar cotado em euros e deter ativos em dólares. Os movimentos cambiais somam ou subtraem à rentabilidade.</li>
</ul>

${B.warn('<p>Um ETF só é tão seguro quanto o que contém. Um ETF alavancado, de um só setor ou de “ações de cripto” pode ser extremamente volátil. Nunca compres um ETF só porque “os ETF são seguros”.</p>')}

${B.tip('<p>Os principiantes podem ir muito bem com um ETF global de ações mais (opcionalmente) um ETF de obrigações. Simples não é preguiçoso: é eficaz.</p>')}

${B.take(['Um ETF é um cesto que dá diversificação imediata com uma só compra.', 'Os fundos de índice copiam automaticamente uma lista de mercado e custam muito pouco.', 'A maioria dos fundos ativos fica abaixo do índice de referência depois de comissões em períodos longos.', 'Compara índice, TER, dimensão, acumulação ou distribuição, domicílio e replicação.'])}`,
      q: [
        ['O que faz um ETF de índice?', ['Tenta bater o mercado escolhendo ações', 'Copia automaticamente um índice de mercado a baixo custo', 'Garante lucro', 'Empresta dinheiro só a governos'], 1, 'Os fundos de índice seguem uma lista de empresas com regras fixas, por isso as comissões ficam baixas.'],
        ['Que comissão anual (TER) é típica de um ETF de índice amplo e barato?', ['0,1% a 0,25%', '3% a 5%', '10%', 'Nunca há comissão'], 0, 'Comissões abaixo de cerca de 0,25% são comuns nos ETF de índice amplos.'],
        ['O que faz um ETF de acumulação com os dividendos?', ['Paga-os a ti em dinheiro', 'Reinveste-os automaticamente dentro do fundo', 'Queima-os', 'Cobra-te um extra'], 1, 'Os ETF de acumulação reinvestem os dividendos, o que é cómodo para a capitalização.']
      ]
    },
    {
      id: 'a3', m: 12, t: 'Diversificação e alocação de ativos',
      hook: 'Como repartir o teu dinheiro para que nenhum desastre isolado te possa arruinar, e um jogo para testar o teu próprio mix sob pressão.',
      body: `
<p>O velho conselho “não ponhas os ovos todos no mesmo cesto” é o coração do investimento. A <b>alocação de ativos</b> (como divides o dinheiro entre ações, obrigações, liquidez e outros ativos) é o maior fator da irregularidade da tua viagem. A investigação sobre carteiras sugere que a alocação explica muito mais do comportamento de uma carteira do que a escolha de investimentos específicos.</p>

<h3>Três níveis de diversificação</h3>
<ol>
<li><b>Entre classes de ativos</b>: ações, obrigações, liquidez, talvez algum ouro ou imobiliário. Reagem de forma diferente aos acontecimentos.</li>
<li><b>Entre países e moedas</b>: não dependas só do teu mercado de origem. Os fundos globais fazem isto por ti.</li>
<li><b>Entre empresas e setores</b>: centenas ou milhares de empresas, para que uma falência quase não conte.</li>
</ol>

<h3>Correlação: porque misturar ajuda</h3>
<p>Dois ativos que não se movem juntos dizem-se de baixa <b>correlação</b>. Num mau ano para as ações, as obrigações de qualidade ou o ouro aguentam-se por vezes. Isso nem sempre acontece (em 2022 caíram ações e obrigações), mas ao longo da história uma mistura produziu solavancos menores do que qualquer peça isolada.</p>

<h3>Alguns exemplos de misturas de partida</h3>
${B.tbl(['Estilo', 'Ações', 'Obrigações', 'Liquidez / outros', 'Adequado a'], [
        ['Prudente', '30%', '50%', '20%', 'Horizonte curto, baixa tolerância a quedas'],
        ['Equilibrado', '60%', '30%', '10%', 'Horizonte médio (7 a 15 anos)'],
        ['Crescimento', '80 a 90%', '10 a 20%', '0 a 5%', 'Horizonte longo (15+ anos), alta tolerância']
      ])}
<p>Uma regra prática muito aproximada que algumas pessoas usam é “110 ou 120 menos a tua idade” como percentagem em ações. É só um ponto de partida: os teus objetivos, a estabilidade do rendimento e os teus nervos contam mais do que uma fórmula.</p>

<h3>Núcleo e satélite</h3>
<p>Uma estrutura popular: põe 80 a 95% num “núcleo” global de baixo custo (um ETF mundial) e guarda um pequeno “satélite” (5 a 20%) para ideias em que acreditas, como ações individuais ou temas. Se um satélite falhar, o núcleo protege-te.</p>

<h3>Agora testa a tua carteira sob pressão</h3>
<p>Monta uma mistura e passa-a por quatro cenários estilizados de oito anos. Experimenta uma carteira só de ações, uma prudente e uma de “100% cripto”. Observa o valor final e a pior queda pelo caminho. Qual delas conseguirias mesmo aguentar?</p>
${B.w('alloc')}

${B.key('<p><b>A pergunta real não é “o que dá a rentabilidade mais alta?”</b> É “qual é a mistura de maior risco que consigo manter durante um crash sem vender?”. Um plano ótimo que abandonas em pânico é pior do que um plano bom que mantens.</p>')}

${B.warn('<p>Ter dez ações do mesmo setor, ou cinco fundos que têm todos as mesmas grandes tecnológicas, não é diversificação a sério. Olha para o que os fundos realmente contêm.</p>')}

${B.take(['A alocação de ativos determina a maior parte do risco e do comportamento da tua carteira.', 'Diversifica entre classes de ativos, países e empresas.', 'Escolhe a mistura que consegues manter durante uma queda de 30%, não a do melhor gráfico.', 'Núcleo e satélite limita as ideias arriscadas a uma fatia pequena e comportável.'])}`,
      q: [
        ['Qual é o principal objetivo da diversificação?', ['Maximizar o lucro de curto prazo', 'Reduzir o dano que qualquer falha isolada pode causar', 'Evitar impostos', 'Garantir rentabilidades'], 1, 'Espalhar o risco significa que nenhuma empresa ou ativo sozinho pode arruinar toda a carteira.'],
        ['Numa abordagem núcleo e satélite, o núcleo costuma ser…', ['Uma única ação do momento', 'Um fundo global amplo e de baixo custo', 'Uma posição alavancada', 'Só liquidez'], 1, 'O núcleo é a base estável e diversificada; os satélites são apostas pequenas.'],
        ['Que escolha reflete melhor a pergunta certa ao escolher uma mistura?', ['Que ativos mais subiram no ano passado?', 'Qual é a mistura mais arriscada que consigo manter durante um crash sem vender?', 'O que tem um influenciador famoso?', 'Que mistura triplicaria mais depressa?'], 1, 'O comportamento nas quedas determina se realmente ganhas as rentabilidades de longo prazo.']
      ]
    },
    {
      id: 'a4', m: 9, t: 'Média de custo e automatizar a tua riqueza',
      hook: 'Investe o mesmo valor segundo um calendário e elimina a decisão mais difícil do investimento: quando.',
      body: `
<p>Ninguém consegue prever de forma fiável o dia perfeito para comprar. A <b>média de custo (DCA, “dollar-cost averaging”)</b> resolve isto investindo um valor fixo a intervalos regulares, como 100 € no dia 1 de cada mês, faça o mercado o que fizer. Quando os preços estão baixos compras automaticamente mais unidades; quando estão altos compras menos.</p>

${B.ex('<p>Ao longo de 4 meses investes 100 € por mês. O preço do fundo é 10 €, 8 €, 5 € e 10 €. Compras 10, 12,5, 20 e 10 unidades: 52,5 unidades por 400 €, um custo médio de cerca de 7,62 € por unidade, apesar de o preço ter acabado onde começou, nos 10 €. O teu preço médio é mais baixo do que a média simples dos preços porque compraste mais quando estava barato.</p>')}

<h3>DCA vs. montante único</h3>
<p>Se já tens uma quantia grande, as estatísticas mostram que investi-la toda de uma vez vence o espalhar no tempo em cerca de dois terços dos casos históricos, simplesmente porque os mercados sobem mais vezes do que descem. Mas o DCA reduz a probabilidade de pores tudo mesmo antes de um crash e é mais fácil para os nervos. A maioria das pessoas não tem um montante único: investe a partir do ordenado, o que já é DCA automático.</p>
${B.w('dca')}

<h3>Torna-o automático</h3>
<ol>
<li>Escolhe um valor que consigas manter mesmo num mau mês.</li>
<li>Configura uma ordem permanente ou investimento automático para o dia a seguir ao ordenado.</li>
<li>Escolhe sempre o mesmo fundo amplo.</li>
<li>Aumenta o valor quando o teu rendimento subir (“aumenta-o a cada aumento”).</li>
<li>Não pares num crash. Preços em queda significam que o teu valor fixo compra mais.</li>
</ol>

<h3>O que fazer com dinheiro inesperado</h3>
<p>Prémios, presentes ou um reembolso de impostos: uma regra sensata é dividi-los. Por exemplo, 50% para o teu plano (investir ou fundo de emergência), 30% para objetivos e 20% para desfrutares. Não precisas de ser um monge, só consistente.</p>

${B.warn('<p>O DCA não te protege de um mercado em queda nem garante lucro. Também não salva um mau ativo. Combina-o com investimentos diversificados e sensatos.</p>')}

${B.take(['DCA é investir um valor fixo segundo um calendário regular.', 'Elimina as decisões de timing do mercado e cria o hábito.', 'Um montante único costuma ganhar estatisticamente, mas o DCA reduz o arrependimento e o risco de mau timing.', 'Automatiza-o e continua durante os crashes.'])}`,
      q: [
        ['O que é a média de custo (DCA)?', ['Esperar pelo dia mais barato', 'Investir um valor fixo a intervalos regulares, seja qual for o preço', 'Vender quando os preços caem', 'Pedir dinheiro emprestado para investir'], 1, 'É o calendário, e não o preço, que decide quando compras.'],
        ['Quando o preço cai, um investimento mensal fixo…', ['Compra menos unidades', 'Compra mais unidades', 'Compra o mesmo número de unidades', 'Pára automaticamente'], 1, 'O mesmo valor em euros compra mais unidades a preços mais baixos.'],
        ['Qual é a melhor reação a um crash do mercado se investes mensalmente através de um plano?', ['Parar tudo e vender', 'Continuar a investir o valor planeado', 'Duplicar a alavancagem', 'Mudar para uma moeda do momento qualquer'], 1, 'Manter o rumo deixa-te comprar mais barato enquanto o teu plano de longo prazo não muda.']
      ]
    },
    {
      id: 'a5', m: 10, t: 'Custos, comissões e impostos: os assassinos silenciosos da riqueza',
      hook: 'Uma comissão que soa minúscula pode comer um terço do teu resultado final. Aprende a detetar cada custo.',
      body: `
<p>Não controlas o mercado, mas controlas o que pagas para participar nele. Os custos capitalizam tal como as rentabilidades, só que no sentido errado.</p>

<h3>Os custos a conhecer</h3>
<ul>
<li><b>Comissões do fundo (TER)</b>: cobradas anualmente dentro do fundo.</li>
<li><b>Comissões de negociação</b>: um valor fixo ou percentagem de cada vez que compras ou vendes.</li>
<li><b>Spread</b>: a pequena diferença entre o preço de compra (ask) e o preço de venda (bid). Um custo escondido em cada operação.</li>
<li><b>Comissões de conversão de moeda</b>: muitas vezes 0,25% a 1% ou mais se o corretor acrescentar uma margem.</li>
<li><b>Comissões de custódia e inatividade</b>: cobradas por alguns corretores só por manterem os teus ativos.</li>
<li><b>Comissões de desempenho</b>: uma parte dos lucros retirada por alguns fundos.</li>
<li><b>Impostos</b>: sobre dividendos, juros e mais-valias, consoante o sítio onde vives.</li>
</ul>

<h3>Vê o estrago</h3>
<p>Compara um ETF barato com um fundo caro. Mesmo mercado, mesmas entregas, só a comissão é diferente.</p>
${B.w('fees')}

<h3>Impostos: o básico</h3>
<p>As regras variam por país, mas as ideias comuns são:</p>
<ul>
<li>O <b>imposto sobre mais-valias</b> paga-se sobre o lucro quando vendes. Quem compra e mantém raramente o desencadeia, o que deixa mais dinheiro a capitalizar. Os traders frequentes desencadeiam-no muitas vezes.</li>
<li>O <b>imposto sobre dividendos</b> aplica-se quando as empresas distribuem lucros. Os fundos de acumulação podem ter tratamento diferente dos de distribuição.</li>
<li>A <b>retenção na fonte</b> pode ser feita à origem nos dividendos estrangeiros.</li>
<li>As <b>perdas</b> podem por vezes ser usadas para compensar ganhos. Guarda registos.</li>
</ul>
${B.warn('<p>Este curso dá ideias gerais, não aconselhamento fiscal. Lê as orientações da tua autoridade fiscal ou fala com um consultor qualificado. As regras fiscais mudam.</p>')}

${B.ex('<p>Dois amigos investem 10 000 € cada um e acrescentam 200 € por mês durante 30 anos no mesmo mercado (7% antes de custos). Um paga 0,2% ao ano e acaba com cerca de 297 000 €. O outro paga 1,8% e acaba com cerca de 215 000 €. São cerca de 82 000 € a menos, só por causa das comissões, no mesmíssimo mercado.</p>')}

${B.tip('<p>Antes de comprares qualquer produto pergunta: “Qual é o custo total anual, em percentagem, incluindo todas as comissões?”. Se o vendedor não souber responder com clareza, sai dali.</p>')}

${B.take(['Os custos capitalizam contra ti e uma comissão de 1% não é pequena ao longo de décadas.', 'Olha em conjunto para a TER, as comissões de negociação, os spreads, a conversão de moeda e a custódia.', 'Comprar e manter reduz os custos de negociação e os eventos tributáveis.', 'Aprende as regras fiscais do teu país ou pergunta a um profissional.'])}`,
      q: [
        ['Porque são as comissões especialmente prejudiciais em períodos longos?', ['São cobradas só uma vez', 'São cobradas todos os anos e retiram também o crescimento futuro que esse dinheiro teria rendido', 'Só se aplicam em mercados em alta', 'São reembolsadas no fim'], 1, 'O efeito capitaliza, por isso pequenas percentagens anuais tornam-se totais grandes.'],
        ['O que é o spread?', ['Um imposto sobre dividendos', 'A diferença entre o preço de compra e o preço de venda', 'Um tipo de ETF', 'A tua comissão anual'], 1, 'Compras ao preço ask, mais alto, e vendes ao bid, mais baixo, por isso cada ida e volta custa o spread.'],
        ['Que investidor provavelmente paga menos impostos?', ['Quem negoceia todos os dias', 'Quem compra e mantém durante anos', 'É sempre idêntico', 'Quem vende todos os meses'], 1, 'Menos vendas significam menos eventos tributáveis, por isso fica mais dinheiro investido.']
      ]
    },
    {
      id: 'a6', m: 12, t: 'Mantém o rumo: crashes, reequilíbrio e comportamento',
      hook: 'Os mercados caem regularmente. O teu plano tem de estar pronto antes de acontecer. Joga o jogo do crash e vê como reages.',
      body: `
<p>Se investires durante 40 anos, vais viver vários crashes. Isto não é um desastre raro. É parte do preço das rentabilidades de longo prazo. O que acontece a seguir à tua riqueza depende sobretudo do que fazes durante a queda.</p>

<h3>Crashes na história</h3>
<ul>
<li><b>2000 a 2002</b>: a bolha das ponto-com. O S&amp;P 500 dos EUA caiu cerca de 49%.</li>
<li><b>2007 a 2009</b>: a crise financeira global. Cerca de -57% do máximo ao mínimo.</li>
<li><b>Fevereiro a março de 2020</b>: o crash da pandemia. Cerca de -34% em apenas 33 dias, seguido de uma das recuperações mais rápidas de sempre.</li>
<li><b>2022</b>: inflação e subida das taxas. Cerca de -25% para as ações dos EUA, com as obrigações também a cair.</li>
</ul>
<p>Em cada um destes casos, os investidores pacientes em índices amplos de ações dos EUA acabaram por recuperar e atingir novos máximos, embora tenha demorado de alguns meses a cerca de cinco a sete anos em termos de preço. Isto não garante que todos os mercados recuperem (o Japão demorou mais de 30 anos a recuperar o máximo de 1989), o que é uma razão para diversificar globalmente.</p>

<h3>O custo do pânico</h3>
<p>Vender depois de uma queda de 30% fixa a perda. E depois tens de decidir quando voltar a entrar. Muitos vendem perto do fundo e voltam depois de os preços já terem recuperado. Os estudos mostram que os melhores dias do mercado ocorrem muitas vezes mesmo ao lado dos piores, por isso falhar apenas alguns deles pode reduzir drasticamente as rentabilidades de longo prazo.</p>

<h3>Joga: jogo de sobrevivência ao crash do mercado</h3>
<p>Tens 10 000 €. As manchetes pioram. A cada passo decides: manter, vender, recomprar ou acrescentar dinheiro. Nenhuma resposta é perfeita, mas o teu padrão diz muito sobre os teus nervos.</p>
${B.w('panic')}

<h3>Reequilíbrio: a disciplina de comprar barato</h3>
<p>Digamos que o teu plano é 70% ações e 30% obrigações. Depois de um boom das ações podes estar em 80% de ações, mais risco do que escolheste. <b>Reequilibrar</b> significa trazer a mistura de volta ao alvo, vendendo parte do que subiu e comprando o que ficou para trás. Dois métodos simples:</p>
<ul>
<li><b>Calendário</b>: uma vez por ano, numa data fixa.</li>
<li><b>Limiar</b>: sempre que uma fatia se afasta mais de 5 pontos percentuais do alvo.</li>
</ul>
<p>Uma forma ainda mais fácil: direciona as <i>novas</i> entregas para a parte que está abaixo do alvo, assim reequilibras sem vender (e sem impostos).</p>

<h3>Escreve hoje o teu plano para o crash</h3>
${B.tryit('<p>Completa esta frase e guarda-a: “Se a minha carteira cair 30%, eu vou ______.” Por exemplo: “continuar o meu investimento mensal, não ver os preços mais do que uma vez por semana e falar com um amigo antes de vender seja o que for.”</p>')}

${B.take(['Quedas de 20 a 50% acontecem regularmente; planeia-as com antecedência.', 'Vender em pânico transforma perdas temporárias em perdas permanentes.', 'Reequilibra uma vez por ano ou quando uma fatia se afastar cerca de 5 pontos.', 'A diversificação global protege-te se um mercado demorar décadas a recuperar.'])}`,
      q: [
        ['Aproximadamente quanto caiu o S&P 500 no crash de 2020?', ['Cerca de 5%', 'Cerca de 34%', 'Cerca de 80%', 'Não caiu'], 1, 'Caiu cerca de um terço em mais ou menos um mês antes de recuperar com força.'],
        ['O que faz o reequilíbrio?', ['Restaura a tua mistura alvo, reduzindo os vencedores e reforçando os atrasados', 'Duplica o teu risco', 'Elimina impostos', 'Prevê o próximo crash'], 0, 'Traz o risco de volta ao nível que escolheste e impõe uma disciplina de comprar barato e vender caro.'],
        ['Porque é que vender em pânico costuma ser caro?', ['Faz o mercado subir', 'Fixa as perdas e deixa-te a decidir quando voltar a entrar, muitas vezes tarde demais', 'Baixa as comissões', 'Aumenta os dividendos'], 1, 'A recuperação começa muitas vezes quando o sentimento está pior, por isso quem vendeu perde-a.']
      ]
    },
    {
      id: 'a7', m: 13, t: 'Escolher ações individuais: guia para principiantes',
      hook: 'Opcional e arriscado, mas fascinante. Como ler uma empresa sem cair em histórias.',
      body: `
<p>A maior parte do teu investimento pode (e provavelmente deve) ser fundos de índice. Mas muita gente quer aprender a analisar empresas individuais. Se o fizeres, trata-o como um <b>satélite</b>: uma pequena fatia do teu dinheiro (por exemplo 5 a 15%) e uma forma de aprender, não de enriquecer depressa.</p>

<h3>Passo 1: Percebe o negócio</h3>
<p>Consegues explicar em duas frases como esta empresa ganha dinheiro e porque é que os clientes a escolhem em vez dos concorrentes? Se não, estás a adivinhar. Peter Lynch, um famoso gestor de fundos, popularizou a ideia de investir no que se compreende (o “círculo de competência”).</p>

<h3>Passo 2: Lê os números-chave</h3>
<ul>
<li><b>Crescimento das vendas</b>: as vendas crescem de forma constante?</li>
<li><b>Margem de lucro</b>: lucro a dividir pelas vendas. Margens mais altas indicam muitas vezes poder de fixar preços.</li>
<li><b>Resultados por ação (EPS)</b>: lucro líquido a dividir pelo número de ações.</li>
<li><b>Fluxo de caixa livre</b>: dinheiro real que sobra depois de gerir o negócio e investir. Difícil de falsear.</li>
<li><b>Dívida</b>: demasiada dívida torna uma empresa frágil. Compara a dívida com os resultados e o fluxo de caixa.</li>
<li><b>Rentabilidade dos capitais próprios (ROE)</b>: com que eficiência a empresa transforma o dinheiro dos acionistas em lucro.</li>
<li><b>Fosso competitivo</b>: uma vantagem duradoura como marca, efeitos de rede, patentes ou custos baixos.</li>
</ul>

<h3>Passo 3: Avaliação: que preço é justo?</h3>
<p>Uma empresa maravilhosa pode ainda ser um mau investimento se pagares demais. A ferramenta mais simples é o <b>rácio P/E</b>: preço a dividir pelos resultados por ação.</p>
${B.ex('<p>A <b>SnackCo</b> (fictícia) tem vendas de 600 M€, lucro líquido de 60 M€ (margem de 10%) e 20 M de ações. EPS = 60 M€ ÷ 20 M = <b>3 €</b>. O preço da ação é 60 €, logo P/E = 60 ÷ 3 = <b>20</b>. Isto significa que pagas 20 € por cada 1 € de lucro anual, uma “rentabilidade dos resultados” de 5%. Se empresas de snacks semelhantes negociam a P/E 15 e a SnackCo cresce mais depressa, 20 pode ser justo. Se o crescimento estiver a estagnar, pode ser caro. Paga ainda um dividendo de 1,20 € por ação: uma rentabilidade de 2% e um rácio de distribuição de 40%, deixando espaço para crescer.</p>')}
<p>Outras ferramentas de avaliação: preço/vendas (P/S), preço/fluxo de caixa livre e comparação com os concorrentes e com o historial da própria empresa.</p>

<h3>Passo 4: Pensa no risco</h3>
<ul>
<li>O que poderia danificar este negócio de forma permanente (nova tecnologia, regulação, um cliente-chave)?</li>
<li>Que peso terá na tua carteira? Limita qualquer ação isolada a uma percentagem pequena.</li>
<li>O que te faria vender? Decide de antemão (a tese quebrou, não “o preço caiu”).</li>
</ul>

<h3>Armadilhas a evitar</h3>
<ul>
<li><b>Ações de história</b>: ótima narrativa, sem lucros e um preço que assume perfeição.</li>
<li><b>Dicas quentes</b> de amigos, fóruns e vídeos. Pergunta porque é que te estão a contar.</li>
<li><b>Barato nem sempre é bom</b>: um P/E baixo pode significar que o mercado espera que os lucros colapsem.</li>
<li><b>Excesso de operações</b>: comprar e vender constantemente acrescenta custos e erros.</li>
</ul>

${B.warn('<p>Mesmo analistas profissionais com equipas e bases de dados falham em bater o mercado na maior parte das vezes. Se escolheres ações, mantém o teu núcleo num fundo diversificado para que a tua aprendizagem seja barata.</p>')}

${B.take(['Trata a escolha de ações como um pequeno satélite, não como todo o teu plano.', 'Percebe primeiro o negócio e só depois vê crescimento, margens, dívida e fluxo de caixa.', 'P/E = preço ÷ resultados por ação; compara-o com os pares e o crescimento, nunca isolado.', 'Decide de antemão o que te faria vender e limita o tamanho de cada posição.'])}`,
      q: [
        ['Uma empresa tem uma ação a 50 € e EPS de 2,50 €. Qual é o seu rácio P/E?', ['5', '20', '50', '125'], 1, '50 ÷ 2,5 = 20.'],
        ['Porque é que os analistas valorizam o “fluxo de caixa livre”?', ['É fácil de falsear', 'Mostra o dinheiro real que sobra depois de gerir e investir no negócio', 'É sempre igual ao lucro', 'Só interessa a bancos'], 1, 'O dinheiro é mais difícil de manipular do que o lucro contabilístico.'],
        ['Qual é uma forma inteligente de tratar a escolha de ações individuais para um principiante?', ['Pôr 100% das poupanças numa só ação', 'Um pequeno satélite ao lado de um núcleo diversificado', 'Pedir dinheiro emprestado para comprar mais', 'Seguir dicas de desconhecidos'], 1, 'Uma fatia pequena mantém a tua aprendizagem acessível e o teu plano seguro.']
      ]
    },
    {
      id: 'a8', m: 9, t: 'O teu plano de ação a 12 meses',
      hook: 'Transforma tudo o que aprendeste numa página e num calendário. Planos vencem intenções.',
      body: `
<p>Parabéns. Já sabes mais sobre investimento do que a maioria dos adultos. O conhecimento só compensa quando se torna ação, por isso aqui tens um roteiro simples a 12 meses.</p>

<h3>O roteiro</h3>
${B.tbl(['Quando', 'Ação'], [
        ['Mês 1', 'Constrói o teu orçamento. Abre uma conta poupança para o fundo de emergência e automatiza uma transferência no dia do ordenado.'],
        ['Mês 2', 'Paga qualquer dívida de juros altos. Pesquisa contas com benefícios fiscais no teu país.'],
        ['Mês 3', 'Escolhe um corretor regulado, abre a conta, ativa a autenticação de dois fatores e lê a tabela de comissões.'],
        ['Mês 4', 'Escreve o teu plano de uma página (abaixo). Faz o primeiro pequeno investimento num ETF amplo e de baixo custo.'],
        ['Meses 5 a 9', 'Investe automaticamente todos os meses. Não vejas os preços todos os dias. Chega a 3 meses de poupança de emergência.'],
        ['Mês 10', 'Revê: estás a seguir o plano? Verifica os custos. Reequilibra se uma fatia se afastou mais de 5 pontos.'],
        ['Mês 12', 'Aumenta o valor mensal se o rendimento o permitir. Revê os objetivos. Ensina a outra pessoa o que aprendeste.']
      ])}

<h3>Constrói o teu plano de uma página</h3>
<p>Um investidor profissional escreve uma <b>Declaração de Política de Investimento</b>. Podes fazer uma versão mini num minuto. Experimenta: parte do teu objetivo, horizonte temporal e conforto com o risco, e cria um plano de exemplo que podes copiar e afinar.</p>
${B.w('ips')}

<h3>Como é o sucesso</h3>
<ul>
<li><b>Ano 1</b>: criaste o hábito e a rede de segurança. O valor na conta importa menos do que a rotina.</li>
<li><b>Ano 5</b>: viveste pelo menos um mau mercado sem quebrar o plano. As tuas entregas cresceram.</li>
<li><b>Ano 10+</b>: a capitalização torna-se visível, com rentabilidades na carteira a rivalizar com o que acrescentas todos os anos.</li>
</ul>

<h3>Erros comuns a evitar, uma última vez</h3>
<ol>
<li>Esperar pelo “momento perfeito” em vez de começar pequeno.</li>
<li>Investir dinheiro de que vais precisar em breve.</li>
<li>Perseguir o vencedor do ano passado ou a dica de um amigo.</li>
<li>Pagar comissões altas sem reparar.</li>
<li>Vender em pânico.</li>
<li>Deixar que a excitação te empurre para alavancagem, derivados ou produtos complexos.</li>
</ol>

${B.key('<p>Construir riqueza é aborrecido de propósito. Se o teu plano parece emocionante todos os dias, algo está errado. A emoção deve vir mais tarde, quando vires o teu saldo daqui a dez anos e perceberes que decisões consistentes, pacientes e comuns fizeram algo extraordinário.</p>')}

${B.take(['Segue o roteiro de 12 meses: base, corretor, plano, automatização, revisão.', 'Escreve um plano de uma página para que as decisões sejam tomadas com calma e de antemão.', 'Aborrecido e consistente vence emocionante e errático.', 'Próximos passos: explora a Via Pro, ou os percursos de cripto e trading se te interessarem.'])}`,
      q: [
        ['Qual é o principal objetivo de uma Declaração de Política de Investimento?', ['Prever os mercados', 'Escrever as tuas regras para agires com calma e consistência', 'Evitar todo o risco', 'Impressionar amigos'], 1, 'Um plano escrito protege-te de decisões emocionais.'],
        ['Quando deves reequilibrar, segundo as regras simples deste curso?', ['Todos os dias', 'Uma vez por ano ou quando uma fatia se afasta cerca de 5 pontos do alvo', 'Nunca', 'Só depois de um crash'], 1, 'Tanto a abordagem por calendário como por limiar mantêm o risco perto do teu alvo.'],
        ['Qual é um sinal de que o teu plano provavelmente é saudável?', ['Exige ver os preços de hora a hora', 'É simples, automático e consegues continuar a segui-lo num crash', 'Usa alavancagem para acelerar', 'Depende de uma dica quente'], 1, 'O melhor plano é o que consegues cumprir.']
      ]
    }
  ]);
})();
