/* Percurso Investidor de Cripto: 8 lições */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ci', [
    {
      id: 'c1', m: 12, t: 'O que é cripto? A blockchain explicada com um caderno partilhado',
      hook: 'Sem jargão: como milhares de desconhecidos mantêm um registo honesto e porque é que isso criou um novo tipo de dinheiro.',
      body: `
<p>Imagina um caderno que regista quem possui o quê. Num banco, é o banco que guarda o caderno e tu confias nele. Agora imagina que milhares de pessoas guardam, cada uma, uma cópia idêntica do caderno. Cada nova entrada (“A Ana paga 1 moeda ao Bruno”) é anunciada a todos, verificada pelo grupo e só depois acrescentada a todas as cópias. Para fazer batota, terias de reescrever em segredo a maioria dos cadernos ao mesmo tempo. Isso, em termos simples, é uma <b>blockchain</b>.</p>

<h3>Ideias-chave</h3>
<ul>
<li><b>Bloco</b>: uma página do caderno com um lote de transações.</li>
<li><b>Cadeia</b>: cada página inclui uma impressão digital (um <b>hash</b>) da página anterior. Se mudares uma página antiga, as impressões digitais de todas as páginas seguintes quebram, o que torna a adulteração óbvia.</li>
<li><b>Nós</b>: os computadores que guardam cópias e verificam as regras.</li>
<li><b>Consenso</b>: o método pelo qual a rede concorda sobre a página seguinte. Na <b>prova de trabalho</b> (Bitcoin), os mineiros gastam energia a competir pelo direito de acrescentar um bloco. Na <b>prova de participação</b> (Ethereum hoje), os validadores bloqueiam moedas como garantia de honestidade.</li>
<li><b>Descentralização</b>: nenhuma empresa ou país controla o caderno.</li>
</ul>

<h3>Experimenta o teste de adulteração</h3>
<p>Edita o texto do bloco 1 e vê o que acontece à cadeia.</p>
${B.w('chain')}

<h3>Bitcoin: o primeiro</h3>
<p>Em 2008, uma pessoa ou grupo anónimo chamado Satoshi Nakamoto publicou o white paper do Bitcoin, e a rede arrancou em janeiro de 2009. O Bitcoin tem uma oferta máxima fixa de <b>21 milhões de moedas</b>, e o ritmo a que novas moedas são criadas é reduzido a metade aproximadamente de quatro em quatro anos (o “halving”; o mais recente foi em abril de 2024). Os apoiantes chamam-lhe “ouro digital” pela sua escassez e por estar fora do controlo de qualquer governo.</p>

<h3>Ethereum e contratos inteligentes</h3>
<p>O Ethereum (lançado em 2015) acrescentou os <b>contratos inteligentes</b>: pequenos programas que correm na blockchain e se executam automaticamente, como uma máquina de venda automática que guarda dinheiro e o liberta quando as condições são cumpridas. Isto possibilitou as finanças descentralizadas (DeFi), as stablecoins, os NFT e milhares de outras aplicações. Em 2022 passou para prova de participação, cortando o consumo de energia em mais de 99%.</p>

<h3>Porque é que os criptoativos têm valor?</h3>
<p>O valor vem do que as pessoas acreditam e usam: escassez (oferta limitada), utilidade (pagamentos, aplicações), efeitos de rede (mais utilizadores tornam-no mais útil) e especulação. Ao contrário de uma empresa, a maioria das moedas não produz lucros, por isso o preço é movido em grande parte pela procura e pelo sentimento. É por isso que são tão voláteis.</p>

${B.ex('<p>Pensa nos primeiros mercados online: muitos dos primeiros sites desapareceram, mas alguns tornaram-se gigantes e a tecnologia subjacente mudou o mundo. O cripto pode ser parecido: a tecnologia pode ser real enquanto a maioria dos tokens individuais falha. Acertar quanto à tecnologia não faz de cada moeda um bom investimento.</p>')}

${B.warn('<p>O cripto é jovem, volátil e cheio de burlas. O próprio Bitcoin caiu 70 a 85% do máximo ao mínimo várias vezes. Tudo neste percurso assume que só colocas dinheiro que podes ver cair drasticamente.</p>')}

${B.take(['Uma blockchain é um registo partilhado, com adulteração visível, guardado por muitos computadores.', 'O Bitcoin tem um limite rígido de 21 milhões de moedas; o Ethereum acrescenta contratos inteligentes programáveis.', 'O valor vem da escassez, do uso e da crença, o que torna os preços muito voláteis.', 'Boa tecnologia não garante um bom investimento.'])}`,
      q: [
        ['Porque é difícil adulterar um registo de blockchain?', ['Está guardado em segredo', 'Cada bloco inclui uma impressão digital do anterior e existem muitas cópias', 'Os bancos protegem-no', 'É apagado regularmente'], 1, 'Mudar dados antigos quebra as impressões digitais seguintes, e terias de alterar a maioria das cópias ao mesmo tempo.'],
        ['Qual é o número máximo de bitcoins que alguma vez podem existir?', ['1 milhão', '21 milhões', '100 milhões', 'Ilimitado'], 1, 'O limite de oferta do Bitcoin é de 21 milhões.'],
        ['O que faz um contrato inteligente?', ['Substitui a tua carteira', 'Corre código numa blockchain que se executa automaticamente quando as condições são cumpridas', 'Garante lucro', 'Reverte transações'], 1, 'É um programa na cadeia, como uma máquina de venda automática digital.']
      ]
    },
    {
      id: 'c2', m: 13, t: 'Carteiras, chaves e onde comprar',
      hook: 'Quem realmente guarda as tuas moedas? O conceito mais importante da segurança em cripto.',
      body: `
<p>No cripto há uma regra que vais ouvir em todo o lado: <b>“not your keys, not your coins”</b> (se não tens as chaves, não são as tuas moedas). Perceber porquê vai proteger-te melhor do que qualquer análise de preços.</p>

<h3>Chaves, endereços e frases-semente</h3>
<ul>
<li><b>Endereço público</b>: como o número da tua conta bancária. É seguro partilhá-lo para que as pessoas te enviem moedas.</li>
<li><b>Chave privada</b>: o segredo que autoriza mover as moedas. Quem a tiver controla as moedas, sem “esqueci a palavra-passe” e sem banco a quem ligar.</li>
<li><b>Frase-semente (frase de recuperação)</b>: normalmente 12 ou 24 palavras que podem recriar todas as tuas chaves. É a chave-mestra da carteira.</li>
</ul>
${B.warn('<p><b>Nunca</b> escrevas a tua frase-semente num site, a envies a alguém, a guardes em fotos, notas na nuvem ou email. Nenhuma pessoa ou empresa de suporte genuína te irá pedir isso.</p>')}

<h3>Duas formas de guardar cripto</h3>
${B.tbl(['', 'Custodial (a corretora guarda)', 'Autocustódia (tu guardas as chaves)'], [
        ['Conveniência', 'Fácil: entras com a palavra-passe', 'Mais passos para aprender'],
        ['Quem controla as moedas', 'A empresa', 'Tu'],
        ['Principal risco', 'Ataques à corretora, colapso, congelamentos ou fraude (ex.: Mt. Gox em 2014, FTX em 2022)', 'Perder a frase-semente, erros, phishing'],
        ['Recuperação', 'Suporte e recuperação da conta', 'Nenhuma se perderes a frase-semente'],
        ['Melhor para', 'Pequenos valores, aprendizagem, trading', 'Posições maiores a longo prazo']
      ])}

<h3>Carteiras quentes e carteiras frias</h3>
<ul>
<li><b>Carteira quente (hot wallet)</b>: carteira de software ligada à internet (telemóvel ou navegador). Conveniente para pequenos valores de gasto.</li>
<li><b>Carteira fria / carteira de hardware</b>: um pequeno dispositivo dedicado que mantém as chaves offline e assina as transações. Ideal para poupanças de longo prazo. Compra apenas diretamente ao fabricante.</li>
</ul>

<h3>Onde comprar</h3>
<ul>
<li><b>Corretoras centralizadas (CEX)</b>: empresas que te deixam comprar com euros, cartões ou transferências bancárias depois de verificações de identidade (KYC). Escolhe plataformas reguladas, com longo historial e comissões transparentes.</li>
<li><b>Corretoras descentralizadas (DEX)</b>: mercados de contratos inteligentes onde trocas tokens diretamente a partir da carteira. Mais liberdade e mais risco; os tokens fraudulentos são comuns.</li>
<li><b>Produtos regulados</b>: em alguns países, ETF e ETP de Bitcoin e Ethereum permitem ter exposição através de uma conta normal de corretora, sem lidar com chaves (os ETF spot de Bitcoin nos EUA foram lançados em janeiro de 2024).</li>
</ul>

<h3>Percebe os custos</h3>
<ul>
<li><b>Comissão de negociação</b>: uma percentagem por operação (muitas vezes 0,1% a 1,5%). Os botões simples de “compra instantânea” costumam custar mais do que o ecrã avançado de ordens da corretora.</li>
<li><b>Spread</b>: a diferença entre o preço de compra e de venda.</li>
<li><b>Comissões de rede (gas)</b>: pagas à blockchain quando envias moedas. Variam com o congestionamento.</li>
<li><b>Comissões de levantamento</b>: cobradas pelas corretoras para tirar moedas.</li>
</ul>

${B.ex('<p>O Leo compra 1 000 € de Bitcoin numa corretora. Como o total é pequeno e ele está a aprender, deixa-o lá por agora, mas ativa a autenticação de dois fatores (app autenticadora) e uma lista de endereços permitidos para levantamentos. Seis meses depois, as suas posições chegam a 5 000 € e ele compra uma carteira de hardware no site do fabricante, envia primeiro 10 € como teste, confirma que chegaram, depois move o resto e guarda a frase-semente em papel em dois locais seguros separados.</p>')}

${B.w('checklist', { key: 'c2', title: 'Lista para uma primeira compra segura', accent: 'ci', items: 'Escolhi uma corretora regulada com tabela de comissões clara|Ativei a autenticação de dois fatores com app autenticadora (não SMS)|Criei uma palavra-passe única e forte num gestor de palavras-passe|Só compro um valor que posso ver cair 80%|Percebo a diferença entre o meu endereço público e a minha frase-semente|Para valores maiores: planeio usar uma carteira de hardware comprada ao fabricante|Envio sempre uma pequena transação de teste antes de uma grande transferência' })}

${B.take(['Quem tem a chave privada controla as moedas; as corretoras guardam as chaves por ti.', 'A tua frase-semente é a chave-mestra: nunca a partilhes nem a digitalizes.', 'Custodial é simples mas tem risco de empresa; a autocustódia dá controlo mas põe a responsabilidade em ti.', 'Verifica todos os custos: comissões de negociação, spreads, comissões de rede e de levantamento.'])}`,
      q: [
        ['Com quem deves partilhar a tua frase-semente?', ['Com o apoio ao cliente', 'Com um amigo de confiança', 'Com ninguém, nunca', 'Com qualquer corretora'], 2, 'Quem tiver a tua frase-semente pode levar tudo. Os serviços legítimos nunca a pedem.'],
        ['Qual é o principal risco de manter moedas numa corretora?', ['As moedas viram papel', 'A empresa pode ser atacada, congelar levantamentos ou colapsar', 'Não há comissões', 'As moedas desaparecem todos os anos'], 1, 'Dependes da empresa; falhas como a Mt. Gox e a FTX custaram caro aos clientes.'],
        ['Porque enviar primeiro uma pequena transação de teste?', ['É exigido por lei', 'Para confirmar que o endereço está correto antes de enviar um valor grande', 'Para receber cashback', 'Para reduzir comissões'], 1, 'As transferências de cripto não se revertem, por isso um teste reduz o risco de erros caros.']
      ]
    },
    {
      id: 'c3', m: 14, t: 'O mapa do cripto: Bitcoin, Ethereum, stablecoins, DeFi e mais',
      hook: 'Existem milhares de tokens. Eis como os separar em grupos e onde está o risco em cada um.',
      body: `
<p>Existem muitos milhares de criptoativos. A maioria é minúscula, muitos não valem nada e alguns são importantes. Um mapa simples ajuda-te a ver a diferença entre um ativo relativamente estabelecido e um bilhete de lotaria.</p>

<h3>As principais categorias</h3>
<ul>
<li><b>Bitcoin (BTC)</b>: o original e o maior. Sobretudo uma narrativa de reserva de valor e “ouro digital”. Simples, muito líquido, com o historial mais longo.</li>
<li><b>Plataformas de contratos inteligentes (Layer 1)</b>: blockchains onde correm aplicações. O Ethereum é a maior. Outras competem em velocidade ou custo. O seu valor depende da atividade real que atraem.</li>
<li><b>Layer 2</b>: redes construídas sobre o Ethereum que tornam as transações mais baratas e rápidas.</li>
<li><b>Stablecoins</b>: tokens desenhados para manter um valor estável, normalmente 1 dólar americano (ou 1 euro). Usam-se para negociar e para pagamentos. A sua segurança depende do que as suporta e de quem as gere. A stablecoin algorítmica da Terra colapsou em 2022, e até a importante USDC perdeu brevemente a paridade com o dólar durante um pânico bancário em março de 2023.</li>
<li><b>Tokens DeFi (finanças descentralizadas)</b>: protocolos de empréstimo, negociação e seguros geridos por código. As recompensas podem parecer altas, mas erros em contratos inteligentes, ataques e a “perda impermanente” em pools de liquidez são riscos reais.</li>
<li><b>NFT</b>: itens digitais únicos. Sobretudo colecionáveis especulativos, e a procura tem sido muito irregular.</li>
<li><b>Memecoins</b>: tokens construídos em torno de piadas e comunidades (como cães e sapos). Pura especulação e o canto com mais burlas.</li>
<li><b>Tokens temáticos</b> (IA, jogos, ativos do mundo real): narrativas que vêm e vão.</li>
</ul>

<h3>A pirâmide de risco</h3>
<p>Uma imagem útil: uma base larga de ativos relativamente estabelecidos e um topo estreito e muito arriscado.</p>
<div class="pyr" role="img" aria-label="Pirâmide de risco do cripto, do risco mais baixo na base ao risco extremo no topo">
  <div style="background:#C9C5EE;width:30%;min-width:170px">Memecoins, tokens novos: risco extremo</div>
  <div style="background:#A58FFF;width:50%;min-width:230px">Small caps, NFT, tokens temáticos: muito alto</div>
  <div style="background:#FFC21A;width:72%;min-width:260px">DeFi grande, plataformas Layer 1 e 2: alto</div>
  <div style="background:#14B37D;width:94%;min-width:280px">Bitcoin e Ethereum: ainda muito voláteis, mas os mais estabelecidos</div>
</div>
<p class="note">Mesmo o cripto “estabelecido” pode perder 70% ou mais. A pirâmide mostra risco relativo, não segurança.</p>

<h3>Escalões de capitalização de mercado</h3>
<p>A <b>capitalização de mercado</b> é o preço vezes a oferta em circulação. Como guia aproximado: as grandes capitalizações estão acima de cerca de 10 mil milhões de €, as médias entre cerca de 1 e 10 mil milhões de €, e as pequenas abaixo de 1 mil milhão de €. Menor significa mais potencial de subida, muito mais volatilidade, liquidez mais fina e maior probabilidade de falhar.</p>

<h3>Staking e “rendimento”</h3>
<p><b>Staking</b> é bloquear moedas de prova de participação para ajudar a proteger a rede em troca de recompensas. Não é dinheiro grátis: a recompensa é paga na própria moeda (por isso o risco de preço mantém-se), as tuas moedas podem ficar bloqueadas por um período, e algumas plataformas acrescentam risco de contratos inteligentes ou de contraparte. Se um produto promete um rendimento alto, fixo e “sem risco”, lembra-te de que os credores que colapsaram em 2022 ofereciam exatamente isso.</p>

${B.ex('<p>A Mia tem 1 000 € para cripto. Divide: 700 € em Bitcoin e Ethereum (o seu “núcleo”), 250 € espalhados por alguns projetos maiores e estabelecidos que pesquisou e 50 € como aposta de “dinheiro para diversão” numa moeda pequena. Se essa última aposta for a zero, perde 5% do seu balde de cripto e nada se parte.</p>')}

${B.warn('<p>Não confundas “número de tokens” com “diversificação”. A maioria dos tokens move-se em conjunto com o Bitcoin, por isso ter 30 altcoins muitas vezes parece ter uma única grande aposta com risco extra.</p>')}

${B.take(['Separa o cripto em categorias: Bitcoin, plataformas, stablecoins, DeFi, NFT, memecoins.', 'O risco sobe a pique à medida que passas de ativos grandes e estabelecidos para tokens pequenos e novos.', 'As stablecoins podem perder a paridade; as recompensas de staking não são isentas de risco.', 'Muitos tokens estão muito correlacionados, por isso dão menos diversificação do que parece.'])}`,
      q: [
        ['Para que é desenhada uma stablecoin?', ['Duplicar de valor todos os anos', 'Manter um valor estável, como 1 dólar', 'Substituir todos os bancos', 'Esconder a tua identidade'], 1, 'Visam um preço estável, mas a paridade pode falhar.'],
        ['Que categoria geralmente tem o maior risco de perda total?', ['Bitcoin', 'Grandes ETF regulados', 'Memecoins recém-lançadas', 'Contas poupança'], 2, 'As memecoins são especulativas, muitas vezes manipuladas e frequentemente vão a zero.'],
        ['A capitalização de mercado é igual a…', ['Preço × oferta em circulação', 'Preço × número total de traders', 'Apenas o volume diário', 'Comissões de transação'], 0, 'É o preço atual multiplicado pelas moedas em circulação.']
      ]
    },
    {
      id: 'c4', m: 13, t: 'Como avaliar um projeto: tokenomics e fundamentos',
      hook: 'Uma lista de perguntas que separa projetos sérios de hype, incluindo o número que engana a maioria dos principiantes.',
      body: `
<p>Ao contrário de uma empresa, um token normalmente não tem relatório de resultados. Mesmo assim, podes fazer perguntas estruturadas. O objetivo não é encontrar um vencedor garantido, mas evitar perdedores óbvios e perceber o que estás a comprar.</p>

<h3>A lista de 8 perguntas</h3>
<ol>
<li><b>Que problema resolve, e para quem?</b> Consegues explicá-lo em duas frases?</li>
<li><b>Pessoas reais usam-no?</b> Olha para utilizadores ativos, número de transações, comissões pagas e valor total bloqueado (TVL) em DeFi, a partir de fontes independentes.</li>
<li><b>Gera receita?</b> As comissões pagas pelos utilizadores são um sinal saudável. “Receita” proveniente de imprimir novos tokens não é.</li>
<li><b>Quem está por trás?</b> Equipa pública e responsável com historial, versus fundadores anónimos e código copiado.</li>
<li><b>Qual é a tokenomics?</b> Oferta máxima, quantos tokens circulam, quantos são libertados ao longo do tempo e quem os possui.</li>
<li><b>O código foi auditado?</b> As auditorias de segurança ajudam (mas não são uma garantia). Verifica ataques no historial do projeto.</li>
<li><b>Há liquidez real?</b> Consegues vender sem fazer cair o preço? Está listado em plataformas respeitáveis?</li>
<li><b>O que pode correr mal?</b> Regulação, concorrência, falha técnica, venda por parte de insiders.</li>
</ol>

<h3>Tokenomics 101</h3>
<ul>
<li><b>Oferta em circulação</b>: tokens disponíveis para negociar agora.</li>
<li><b>Oferta total / máxima</b>: todos os tokens que alguma vez existirão (ou que existem agora).</li>
<li><b>Emissão / inflação</b>: a rapidez com que novos tokens são criados. Inflação alta dilui os detentores, a menos que a procura cresça mais depressa.</li>
<li><b>Distribuição</b>: quanto foi atribuído a fundadores, investidores iniciais e comunidade? Se os insiders detêm uma enorme fatia, é possível uma descarga.</li>
<li><b>Vesting e desbloqueios</b>: tokens bloqueados libertados segundo um calendário. Um grande desbloqueio (por vezes chamado “cliff”) pode empurrar os preços para baixo à medida que os destinatários vendem.</li>
<li><b>Utilidade</b>: para que é preciso o token (comissões, staking, governação)? Um token de que ninguém precisa só tem valor especulativo.</li>
</ul>

<h3>O número que engana os principiantes: capitalização de mercado vs. FDV</h3>
<p>Um token pode parecer “barato” com uma capitalização de mercado baixa enquanto a maior parte da oferta ainda está bloqueada. A <b>avaliação totalmente diluída (FDV)</b> mostra qual seria o valor se todos os tokens existissem. Uma grande diferença significa muita pressão de venda futura. Experimenta a calculadora:</p>
${B.w('supply')}

<h3>Sinais de alerta</h3>
<ul>
<li>Promessas de retornos garantidos ou de “rendimento sem risco”.</li>
<li>Equipa anónima, nenhum produto a funcionar, white paper copiado.</li>
<li>Poucas carteiras detêm a maior parte da oferta.</li>
<li>A liquidez não está bloqueada, por isso os programadores podem retirá-la (“rug pull”).</li>
<li>Táticas de pressão, contagens decrescentes e “compra já antes que seja tarde”.</li>
<li>Recompensas pagas sobretudo trazendo novos investidores (uma estrutura Ponzi).</li>
<li>Promoções pagas por influenciadores sem divulgação.</li>
</ul>

${B.tip('<p>Um bom hábito: lê a documentação do próprio projeto, consulta uma fonte de dados independente sobre o uso e pesquisa “[nome do projeto] burla”, “hack” e “críticas”. Lê o cenário pessimista antes de comprares.</p>')}

${B.ex('<p>Dois tokens negoceiam a 1 € cada. O Token A tem 800 M de 1 000 M de tokens já em circulação e uma utilidade clara, por isso a capitalização é de 800 M€ e a FDV de 1 000 M€. O Token B tem 100 M de 1 000 M em circulação: capitalização de 100 M€, FDV de 1 000 M€. O Token B parece 8 vezes “mais pequeno”, mas 90% da sua oferta ainda está bloqueada. Quando esses tokens forem desbloqueados, os detentores terão de absorver nove vezes a oferta existente. Mesmo preço, risco muito diferente.</p>')}

${B.take(['Pergunta o que o projeto faz, quem o usa e como ganha receita real.', 'Estuda a oferta, a distribuição, o vesting e os calendários de desbloqueio.', 'Compara a capitalização de mercado com a avaliação totalmente diluída para ver a diluição futura.', 'Sinais de alerta: retornos garantidos, equipas anónimas, oferta concentrada, liquidez desbloqueada.'])}`,
      q: [
        ['Um token tem uma capitalização de mercado pequena mas uma FDV enorme. Isto sugere…', ['Pouca diluição futura', 'Muitos tokens ainda por libertar, o que acrescenta pressão de venda', 'Crescimento garantido', 'O token é uma stablecoin'], 1, 'A oferta bloqueada acabará por entrar em circulação, diluindo os detentores.'],
        ['Qual é um sinal de alerta?', ['Equipa pública e código auditado', 'Retornos diários garantidos prometidos', 'Documentação clara', 'Dados de utilização independentes'], 1, 'Nenhum investimento legítimo pode garantir retornos.'],
        ['O que é um “rug pull”?', ['Uma subida de preço', 'Programadores a retirar liquidez ou a abandonar um projeto depois de ficarem com o dinheiro dos investidores', 'Uma atualização de carteira', 'Uma recompensa de staking'], 1, 'É uma burla de saída que deixa os detentores com tokens sem valor.']
      ]
    },
    {
      id: 'c5', m: 14, t: 'Construir uma carteira de cripto: tamanho, DCA e ciclos',
      hook: 'Quanto, com que frequência e o que esperar. O tamanho da posição é a decisão que mais importa.',
      body: `
<p>A maioria das perdas em cripto não vem de escolher a moeda errada. Vem de apostar demasiado em qualquer moeda. A primeira pergunta não é “o que comprar”, mas “<b>quanto do meu património posso pôr aqui?</b>”</p>

<h3>Decide o tamanho com o “teste da queda de 80%”</h3>
<p>O Bitcoin caiu 70 a 85% do máximo ao mínimo várias vezes, e os ativos mais pequenos caem muitas vezes mais. Pergunta-te: se todo este balde caísse 80% e ficasse assim durante dois anos, o meu plano de vida e o meu sono sobreviveriam? Usa a calculadora.</p>
${B.w('cryptosize')}
<p>Muitos consultores prudentes sugerem pequenas alocações, muitas vezes entre 1 e 5% do património investível para quem quer alguma exposição. Isso não é uma regra nem um conselho, apenas um exemplo de como os profissionais pensam: dimensiona de modo que uma perda total fosse um incómodo, não um desastre.</p>

<h3>Uma estrutura simples: núcleo e satélites</h3>
<ul>
<li><b>Núcleo (por exemplo 60 a 80% do teu balde de cripto)</b>: Bitcoin e Ethereum, os mais estabelecidos.</li>
<li><b>Satélites (por exemplo 20 a 40%)</b>: um punhado de projetos maiores que pesquisaste.</li>
<li><b>Bilhetes de lotaria (opcional, 0 a 5% do balde)</b>: apostas minúsculas e arriscadas que estás disposto a perder por inteiro.</li>
</ul>

<h3>DCA: o teu amigo num mercado volátil</h3>
<p>Como os preços oscilam tanto, comprar um valor fixo semanal ou mensalmente (DCA) tira a pressão de acertar no momento. Compras mais quando os preços estão baixos e menos quando estão altos. Também ajuda com as emoções. Podes rever o jogo do DCA do percurso do Investidor.</p>

<h3>Ciclos: padrões, não promessas</h3>
<p>O Bitcoin mostrou historicamente grandes ciclos de expansão e queda de cerca de quatro anos, muitas vezes ligados ao halving, com máximos anteriores seguidos de quedas de 70 a 85%. Muitos investidores constroem o seu timing em torno disto, mas os ciclos passados são uma amostra pequena, e os mercados aprendem. Não apostes o teu plano na repetição de um padrão.</p>

<h3>Realiza lucros de propósito</h3>
<p>A euforia faz as pessoas esquecer-se de vender. Decide com antecedência: por exemplo, “Se o meu balde de cripto crescer para mais de 10% do meu património, reequilibro de volta para 5%”, ou “Vendo um quarto de qualquer posição que triplique”. Regras escritas vencem a ganância.</p>

<h3>Reequilíbrio e consciência fiscal</h3>
<p>Vender pode desencadear impostos. Reequilibra direcionando novas contribuições para onde for preciso e guarda registos de cada compra e venda (vê a lição sobre impostos).</p>

${B.ex('<p>O Tom põe 3% das suas poupanças de 30 000 € em cripto (900 €), comprando 75 € por mês através de DCA. Quando o mercado cai 70%, o seu balde perde cerca de 630 €, um golpe de 2,1% do seu património total. Continua a comprar barato. Quando mais tarde sobe 5 vezes, reduz até ao seu objetivo. Nem ficou rico nem ficou arruinado, e permaneceu no jogo.</p>')}

${B.warn('<p>Nunca invistas dinheiro de que precisas para a renda, propinas ou emergências. Nunca peças emprestado para comprar cripto. Nunca ponhas todas as tuas poupanças numa única moeda porque “não pode falhar”.</p>')}

${B.take(['O tamanho vem primeiro: usa o teste da queda de 80% para decidir quanto é seguro.', 'Núcleo e satélites: sobretudo ativos principais, uma pequena fatia para especulação.', 'O DCA reduz o risco de timing e o stress emocional.', 'Os ciclos são padrões, não garantias. Tem regras escritas de realização de lucros e de reequilíbrio.'])}`,
      q: [
        ['Qual é o objetivo do “teste da queda de 80%”?', ['Prever o preço futuro', 'Garantir que o tamanho da tua posição é suportável se os preços colapsarem', 'Escolher uma carteira', 'Evitar comissões'], 1, 'Se não aguentasses uma queda de 80% do balde, ele é demasiado grande.'],
        ['Numa carteira de cripto núcleo-satélite, o núcleo é normalmente…', ['Memecoins', 'Bitcoin e Ethereum', 'Os lançamentos mais recentes', 'Tokens alavancados'], 1, 'Os ativos mais estabelecidos formam a base; as ideias mais arriscadas são satélites limitados.'],
        ['Porque escrever com antecedência as regras de realização de lucros e de reequilíbrio?', ['Para evitar que a ganância e a euforia tomem as decisões', 'Porque as corretoras exigem', 'Para aumentar comissões', 'Para impressionar os outros'], 0, 'Regras pré-definidas ajudam-te a agir com calma quando os preços disparam.']
      ]
    },
    {
      id: 'c6', m: 14, t: 'Segurança e burlas: como não perder tudo',
      hook: 'No cripto não há banco a quem ligar. Aprende as burlas que custaram milhões e joga o jogo Seguro ou Burla.',
      body: `
<p>Como as transações em cripto não podem ser revertidas, os burlões adoram-nas. A boa notícia: quase todas as burlas dependem dos mesmos poucos truques e, quando os reconheces, perdem poder.</p>

<h3>As burlas mais comuns</h3>
<ul>
<li><b>Phishing</b>: emails, mensagens ou sites falsos que copiam uma corretora ou carteira real para roubar o teu acesso ou a tua frase-semente. Escreve sempre tu o endereço ou usa um marcador guardado.</li>
<li><b>Falso suporte</b>: alguém te escreve “da corretora” a oferecer ajuda. O suporte verdadeiro não te contacta primeiro nem pede palavras-passe ou frases de recuperação.</li>
<li><b>Burlas de sorteios</b>: “envia 1 ETH e recebe 2”, muitas vezes com pessoas famosas ou contas pirateadas.</li>
<li><b>Rug pulls e pump-and-dumps</b>: programadores ou grupos promovem um token, depois vendem o que têm e desaparecem.</li>
<li><b>Burlas românticas / “pig-butchering”</b>: um desconhecido simpático ganha confiança ao longo de semanas e leva-te a uma plataforma de investimento falsa que mostra lucros falsos, até tentares levantar.</li>
<li><b>Wallet drainers</b>: sites maliciosos que te enganam para assinares uma transação que lhes dá permissão para esvaziar a tua carteira. Cuidado com os botões “Connect wallet” e as aprovações ilimitadas.</li>
<li><b>Envenenamento de endereço</b>: burlões enviam transações minúsculas a partir de um endereço parecido com um que usaste, na esperança de o copiares do histórico por engano.</li>
<li><b>Apps e extensões falsas</b>: carteiras contrafeitas nas lojas de apps ou de navegadores.</li>
<li><b>Esquemas Ponzi</b>: promessas de retornos altos e fixos, pagos com dinheiro de novos investidores até o esquema colapsar.</li>
<li><b>Burlas de recuperação</b>: depois de uma perda, “especialistas em recuperação” prometem recuperar as tuas moedas mediante um pagamento adiantado. São burlões também.</li>
</ul>

<h3>A tua configuração de segurança</h3>
${B.w('checklist', { key: 'c6', title: 'Lista de segurança em cripto', accent: 'ci', items: 'Palavras-passe únicas e longas para cada corretora e serviço de carteira, num gestor de palavras-passe|Autenticação de dois fatores por app autenticadora (não SMS) em todas as contas|Lista de endereços permitidos para levantamentos e códigos antiphishing ativados|Frase-semente escrita em papel e guardada em dois locais seguros e separados, nunca fotografada|Carteira de hardware comprada diretamente ao fabricante para posições maiores|Sites de corretoras guardados nos marcadores, sem nunca clicar em links de emails ou anúncios|Endereço de email separado para as contas de cripto|Pequena transação de teste antes de cada grande transferência|Revisão regular das aprovações de tokens e revogação das não usadas' })}

<h3>Regras de ouro</h3>
<ol>
<li>Se parece bom demais para ser verdade, é.</li>
<li>A urgência é uma arma. Os burlões criam prazos para que não consigas pensar.</li>
<li>Ninguém dá dinheiro grátis e ninguém precisa da tua frase-semente.</li>
<li>Verifica por um segundo canal. Liga à empresa para um número do site oficial.</li>
<li>Mantém a maior parte dos fundos em armazenamento frio e um pequeno valor “de gasto” numa carteira quente.</li>
</ol>

<h3>Joga: Seguro ou burla?</h3>
<p>Nove situações do mundo real. Decide se a ação é segura ou arriscada e lê porquê.</p>
${B.w('scam')}

<h3>Se fores burlado</h3>
<p>Age depressa: pára o contacto, move os fundos que restam para uma nova carteira, muda as palavras-passe, denuncia à corretora envolvida, à polícia local e às autoridades de denúncia de fraude. A recuperação é improvável, e é exatamente por isso que a prevenção importa.</p>

${B.take(['As transferências de cripto são irreversíveis, por isso a prevenção é tudo.', 'Nunca partilhes a tua frase-semente; o suporte verdadeiro nunca a pede.', 'Usa 2FA por app, um gestor de palavras-passe e armazenamento frio para valores maiores.', 'Pressão, retornos garantidos e mensagens diretas não solicitadas são sinais clássicos de burla.'])}`,
      q: [
        ['Um “agente de suporte” envia-te mensagem primeiro e pede a tua frase de recuperação. Isto é…', ['Procedimento normal', 'Uma burla', 'Necessário por segurança', 'Um programa de recompensas'], 1, 'O suporte genuíno nunca faz isto.'],
        ['Qual é uma boa forma de aceder a um novo site de cripto?', ['Clicar em qualquer link de um anúncio', 'Escrever o endereço tu mesmo ou usar um marcador de confiança', 'Usar uma extensão de navegador não verificada', 'Partilhar a palavra-passe da carteira para verificar'], 1, 'Os sites falsos copiam os verdadeiros; um marcador evita imitações.'],
        ['Um desconhecido que conheceste online leva-te a uma plataforma que mostra grandes ganhos mas pede mais depósitos para levantar. Isto é típico de…', ['Uma corretora normal', 'Uma burla pig-butchering', 'Uma regra fiscal', 'Uma recompensa de staking'], 1, 'Plataformas legítimas não exigem depósitos extra para libertar o teu próprio dinheiro.']
      ]
    },
    {
      id: 'c7', m: 10, t: 'Impostos, regulação e manter registos',
      hook: 'Os ganhos em cripto costumam ser tributáveis. Um simples hábito de registo poupa dores de cabeça e dinheiro.',
      body: `
<p>Esta lição dá princípios gerais. <b>As regras fiscais e legais variam por país e mudam com frequência</b>, por isso consulta sempre a tua autoridade tributária local e, se os valores forem relevantes, fala com um profissional de fiscalidade qualificado.</p>

<h3>O que é muitas vezes tributável</h3>
<p>Em muitos países, as autoridades tratam os criptoativos como propriedade ou investimentos. Os eventos que normalmente criam uma obrigação fiscal incluem:</p>
<ul>
<li><b>Vender cripto por dinheiro fiduciário</b> (euros, dólares) com lucro.</li>
<li><b>Trocar uma cripto por outra</b>. Em muitos sítios, conta como vender a primeira e comprar a segunda.</li>
<li><b>Pagar bens ou serviços</b> com cripto.</li>
<li><b>Ganhar cripto</b> como rendimento: trabalho, mineração, recompensas de staking ou airdrops, muitas vezes tributados como rendimento no momento em que os recebes.</li>
</ul>
<p>Muitas vezes <b>não</b> é tributável (mas confirma localmente): comprar cripto com dinheiro fiduciário, mover cripto entre as tuas próprias carteiras e simplesmente manter.</p>

<h3>Como os ganhos são calculados</h3>
<p>Ganho = preço de venda − custo de compra (o teu “custo base”), menos comissões permitidas. Alguns países tributam os ganhos a uma taxa fixa, outros a taxas progressivas, e alguns dão tratamento favorável a ativos detidos por mais de um ano. As perdas podem compensar ganhos.</p>
${B.ex('<p>Compras 0,1 BTC por 2 000 € e depois vendes por 3 500 €. Ganho = 1 500 €. Se a tua regra local tributar ganhos a, por exemplo, 25% (apenas ilustrativo), o imposto seria 375 €. Se em vez disso trocares esse BTC por outra moeda no valor de 3 500 €, muitos sistemas fiscais ainda o tratariam como uma venda e calculariam o mesmo ganho, embora nunca tenhas tocado em euros.</p>')}

<h3>Mantém bons registos desde o primeiro dia</h3>
<ul>
<li>Data, tipo e montante de cada compra, venda, troca, transferência e recompensa.</li>
<li>O valor em euros (ou moeda local) no momento de cada evento.</li>
<li>Comissões pagas.</li>
<li>Endereços de carteiras e contas de corretoras usadas.</li>
<li>Exporta os históricos de transações (ficheiros CSV) todos os anos de cada corretora, porque as plataformas podem fechar ou perder dados.</li>
</ul>
<p>O software fiscal especializado em cripto pode importar as tuas corretoras e carteiras e calcular os ganhos. Muitos contabilistas sabem usá-lo.</p>

<h3>Regulação: um panorama em mudança</h3>
<ul>
<li>Na União Europeia, o regulamento <b>MiCA</b> define regras para emissores de criptoativos e prestadores de serviços (totalmente aplicável desde o final de 2024), incluindo licenciamento, divulgação e regras para stablecoins. As regras fiscais de reporte da UE para plataformas de cripto (DAC8) começam em 2026, por isso as autoridades recebem cada vez mais dados sobre as tuas transações.</li>
<li>Outras regiões estão a construir os seus próprios quadros. As regras podem restringir certos produtos, como derivados para clientes de retalho.</li>
</ul>
<p>Significado prático: prefere <b>plataformas licenciadas e reguladas</b>, conta com verificações de identidade e assume que as autoridades fiscais veem mais do que antes.</p>

${B.warn('<p>Cuidado com esquemas de cripto “isentos de impostos” e com quem diz que não precisas de declarar. Evadir impostos é ilegal e cada vez mais detetável.</p>')}

${B.take(['Vender, trocar, gastar e ganhar cripto desencadeia muitas vezes impostos, consoante o teu país.', 'Regista o custo base, datas, valores e comissões de cada transação.', 'Exporta os registos regularmente; considera software fiscal para cripto.', 'Usa plataformas reguladas e espera mais transparência por parte das autoridades.'])}`,
      q: [
        ['Em muitos países, trocar uma cripto por outra é tratado como…', ['Nada, nunca tributável', 'Uma venda do primeiro ativo (evento tributável)', 'Uma oferta', 'Um empréstimo'], 1, 'Confirma as regras locais, mas uma troca é muitas vezes considerada uma alienação.'],
        ['O que precisas para calcular corretamente um ganho?', ['Só o preço de hoje', 'Custo de compra, receita da venda e comissões, com datas', 'A tua idade', 'A cor da tua carteira'], 1, 'O custo base e as receitas determinam o ganho ou a perda.'],
        ['Porque exportar regularmente o histórico de transações?', ['As corretoras podem fechar ou perder dados e precisas de registos para os impostos', 'Aumenta os retornos', 'É necessário para staking', 'Remove comissões'], 0, 'Os teus próprios registos protegem-te se uma plataforma desaparecer.']
      ]
    },
    {
      id: 'c8', m: 10, t: 'O teu plano de cripto a longo prazo e a estratégia de saída',
      hook: 'Transforma este percurso num plano de uma página: porque manténs, quanto, como te manténs seguro e quando realizas lucros.',
      body: `
<p>Um plano escrito é a diferença entre investir e apostar. Usa esta lição para montar o teu.</p>

<h3>O plano de cripto de uma página</h3>
${B.tbl(['Secção', 'A tua resposta'], [
        ['Porque tenho cripto', 'A minha tese em duas frases (por exemplo: “exposição a longo prazo a uma nova classe de ativos, fatia pequena”)'],
        ['Quanto', 'Percentagem máxima do meu património investível (por exemplo 3%) e o valor em euros'],
        ['O que tenho', 'Ativos de núcleo (por exemplo BTC / ETH) e o máximo para satélites e especulação'],
        ['Como compro', 'Calendário de DCA: valor, dia do mês, plataforma'],
        ['Onde guardo', 'Corretora para pequenos valores; carteira de hardware para o resto; locais de cópia de segurança da frase-semente'],
        ['Quando reequilibro ou realizo lucros', 'Regras, como: “se o cripto passar de 6% do meu património, reduzo para 3%”'],
        ['O que me faria mudar de ideias', 'Eventos que invalidariam a minha tese (por exemplo, uma falha grave de protocolo ou uma mudança regulatória)'],
        ['Impostos e registos', 'Onde guardo o meu histórico de transações e quando o reviso'],
        ['Num crash eu vou', 'Manter o plano, não verificar preços todos os dias, não pedir emprestado, não vender em pânico']
      ])}

<h3>Planeia o inesperado</h3>
<ul>
<li><b>Herança e acesso</b>: se algo te acontecesse, a tua família conseguiria aceder aos fundos? Escreve instruções e guarda-as em segurança (por exemplo, com um advogado). Muitas moedas perderam-se para sempre quando a única pessoa que sabia a frase-semente morreu.</li>
<li><b>Cópias de segurança</b>: mais do que uma cópia da frase-semente em locais seguros diferentes, protegida do fogo e da água (existem placas metálicas de backup).</li>
<li><b>Simplicidade</b>: a complexidade gera erros. Menos ativos, menos plataformas, menos partes móveis.</li>
</ul>

<h3>Estratégia de saída</h3>
<p>Não tens de manter para sempre. Planos de saída típicos:</p>
<ul>
<li><b>Sair em escada</b>: vender pequenas porções a preços mais altos pré-definidos (por exemplo, vender 10% cada vez que o preço sobe 50%).</li>
<li><b>Sair por reequilíbrio</b>: sempre que o ativo exceda a tua fatia-alvo do património, reduzir.</li>
<li><b>Por objetivo</b>: vender para financiar um objetivo definido (como a entrada de uma casa) quando a meta é atingida.</li>
</ul>
${B.ex('<p>A Priya define uma regra: “Quando o meu cripto valer 3 vezes o que investi, levanto o investimento original e deixo o resto a correr.” Isto fixa o capital dela e tira o stress de estar a ver. Se o preço cair depois, já recuperou o seu custo. Isto é apenas um exemplo de regra, não uma recomendação.</p>')}

<h3>Ritmo de revisão</h3>
<ul>
<li><b>Mensal</b>: confirmar que o DCA correu, verificar a segurança.</li>
<li><b>Trimestral</b>: rever a alocação e atualizar registos.</li>
<li><b>Anual</b>: reconsiderar a tese e a situação fiscal.</li>
</ul>

${B.w('checklist', { key: 'c8', title: 'Lista do meu plano de cripto', accent: 'ci', items: 'Escrevi o meu plano numa página, incluindo a minha percentagem máxima|O meu calendário de DCA é automático ou está no meu calendário|A minha frase-semente tem duas cópias seguras e um plano de acesso para a família|Conheço as minhas regras de realização de lucros e de reequilíbrio|Os meus registos de transações estão exportados e guardados|Tenho uma regra para o que farei num crash de 80%' })}

${B.key('<p><b>Parabéns.</b> Agora sabes mais sobre segurança em cripto do que a maioria das pessoas que o possui. Se queres explorar o lado ativo (trading, alavancagem e bots), o percurso do Trader de Cripto cobre-o, com um aviso sério anexado.</p>')}

${B.take(['Escreve um plano de uma página: tese, tamanho, posições, calendário, armazenamento e regras de saída.', 'Planeia a herança, as cópias de segurança e a simplicidade.', 'Escolhe uma estratégia de saída antes de precisares dela: em escada, por reequilíbrio ou por objetivo.', 'Revê num ritmo regular em vez de ver o preço todos os dias.'])}`,
      q: [
        ['Porque é importante um plano de herança ou de acesso em cripto?', ['Aumenta os retornos', 'Sem a frase-semente, os familiares não conseguem recuperar os fundos', 'É uma regra fiscal', 'Baixa comissões'], 1, 'As moedas podem perder-se permanentemente se mais ninguém conseguir aceder-lhes.'],
        ['O que significa “sair em escada”?', ['Vender tudo de uma vez', 'Vender pequenas porções a preços mais altos pré-definidos', 'Comprar no pico', 'Mudar para uma corretora'], 1, 'Distribui as decisões de venda e tira a necessidade de acertar no topo.'],
        ['Qual é o melhor ritmo de revisão para um investidor de longo prazo?', ['Verificações horárias de preço', 'Verificações básicas mensais, revisão trimestral da alocação, revisão anual da tese e dos impostos', 'Nunca', 'Só quando o preço colapsa'], 1, 'Revisões regulares mas pouco frequentes mantêm-te no plano sem ansiedade.']
      ]
    }
  ]);
})();
