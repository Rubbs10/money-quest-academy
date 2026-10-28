/* Parcours Day Trader : 8 leçons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('trd', [
    {
      id: 'b1', m: 11, t: 'Bilan de réalité : la vérité sur le day trading',
      hook: 'Avant les graphiques et les stratégies, un regard honnête sur qui gagne, qui perd et ce qu’il faut vraiment.',
      body: `
<p>Les réseaux sociaux montrent le day trading comme des ordinateurs portables sur des plages et des captures d’écran de profits énormes. La réalité ressemble davantage à un métier compétitif où la plupart des débutants perdent de l’argent. Cette leçon n’est pas là pour te faire fuir. Elle est là pour que, si tu continues, tu le fasses les yeux ouverts et avec une attitude professionnelle.</p>

<h3>Qu’est-ce qui compte comme du day trading ?</h3>
<ul>
<li><b>Scalping</b> : des trades de quelques secondes à quelques minutes, visant de minuscules gains de nombreuses fois par jour.</li>
<li><b>Day trading</b> : des positions ouvertes et fermées le même jour, aucune conservée la nuit.</li>
<li><b>Swing trading</b> : des positions conservées de quelques jours à plusieurs semaines. Moins de temps devant l’écran, moins de coûts.</li>
<li><b>Position trading</b> : de quelques semaines à quelques mois. C’est plus proche de l’investissement.</li>
</ul>

<h3>Ce que disent les données</h3>
<ul>
<li>Une étude du marché taïwanais (Barber, Lee, Liu et Odean) a constaté que moins de 1 % des day traders gagnaient de façon prévisible, après coûts, année après année.</li>
<li>Une étude sur des day traders de contrats à terme brésiliens qui ont continué plus de 300 jours a constaté qu’environ 97 % d’entre eux ont perdu de l’argent.</li>
<li>Les régulateurs européens obligent les courtiers à publier que généralement <b>70 à 90 % des comptes de particuliers en CFD à effet de levier perdent de l’argent</b>.</li>
</ul>

<h3>Pourquoi la plupart des gens perdent</h3>
<ol>
<li><b>Le trading est un jeu à somme nulle avant coûts et à somme négative après coûts.</b> Chaque gain a un perdant de l’autre côté, et les commissions, spreads et impôts sont prélevés sur le total.</li>
<li><b>Tu es en concurrence avec des professionnels et des algorithmes</b> disposant de meilleures données, d’une exécution plus rapide et de plus de capital.</li>
<li>L’<b>effet de levier</b> amplifie les erreurs plus vite que la compétence ne se développe.</li>
<li><b>Psychologie</b> : peur, avidité, ennui et envie de « se refaire ».</li>
<li><b>Pas d’avantage, pas de règles de risque, pas de plan</b> : du jeu de hasard avec des étapes en plus.</li>
</ol>
${B.warn('<p>Si un cours, un influenceur ou un robot promet des profits « garantis » ou « quotidiens et réguliers », considère-le comme un signal d’alarme. Aucun professionnel honnête ne garantit des résultats de trading. Tout produit éducatif, y compris les produits optionnels mentionnés plus loin dans ce cours, peut t’aider à apprendre et à structurer ton travail, mais le risque de perte reste le tien.</p>')}

<h3>Le trading est une entreprise, pas un loisir</h3>
<p>Les professionnels traitent le trading comme une petite entreprise : capital, règles, tenue de registres, coûts, impôts et budget de pertes. Ils s’attendent à se tromper souvent, et ils gagnent parce que les gains sont plus grands que les pertes et parce qu’ils ne risquent jamais trop sur une seule idée.</p>

<h3>Ce dont tu as réellement besoin</h3>
<ul>
<li><b>Du capital à risque</b> : de l’argent que tu peux vraiment te permettre de perdre. Ni le loyer, ni l’épargne, ni de l’argent emprunté.</li>
<li><b>Du temps</b> : le day trading sérieux est proche d’un emploi à temps plein pendant les heures de marché, plus la préparation et la revue.</li>
<li><b>Un avantage testé</b> : une façon reproductible d’avoir légèrement plus souvent raison, ou de gagner plus que tu ne perds, après coûts.</li>
<li><b>Un processus</b> : des règles écrites, un journal, une routine de revue.</li>
<li><b>Une base stable</b> : un revenu ou des investissements en dehors du trading, pour que la pression ne déforme pas tes décisions.</li>
</ul>

${B.ex('<p>Imagine deux personnes qui commencent chacune avec 5 000 €. Alex risque 250 € (5 %) sur chaque trade en courant après de gros gains et perd six trades d’affilée : -26 %. Sam risque 25 € (0,5 %) par trade et perd les mêmes six : -3 %. Sam est toujours calme, toujours dans le jeu et continue d’apprendre. Alex est en tilt et sur le point d’aggraver les choses. Survivre est la première compétence.</p>')}

<h3>Une voie raisonnable</h3>
<ol>
<li>Construis d’abord ta base d’investissement. La plupart des gens devraient investir et ne trader qu’avec une petite part (par exemple moins de 5 à 10 % de leur patrimoine).</li>
<li>Apprends le métier dans ce parcours.</li>
<li>Entraîne-toi sur un simulateur pendant au moins 100 trades.</li>
<li>Trade en réel avec une taille minuscule. Prouve que tu sais suivre tes règles avant d’augmenter.</li>
</ol>

${B.w('checklist', { key: 'b1', title: 'Suis-je même prêt à commencer à apprendre à trader ?', accent: 'trd', items: 'J’ai un fonds d’urgence et aucune dette à taux élevé|L’argent avec lequel je trade est de l’argent que je peux perdre complètement|Je comprends que la plupart des débutants perdent de l’argent et je l’accepte|Je ferai du paper trading pendant au moins 100 trades avant de risquer de l’argent réel|J’écrirai des règles et tiendrai un journal|Je n’essaie pas de résoudre une urgence financière avec le trading' })}

${B.take(['La plupart des day traders perdent de l’argent ; les coûts et l’effet de levier rendent tout plus difficile.', 'Traite le trading comme une entreprise avec du capital à risque, des règles et des registres.', 'Ne trade jamais l’argent dont tu as besoin. Survivre d’abord, profiter ensuite.', 'Entraîne-toi sur un simulateur, puis trade en taille minuscule avant d’augmenter.'])}`,
      q: [
        ['Pourquoi dit-on que le trading est à « somme négative » après coûts ?', ['Parce que les marchés baissent toujours', 'Parce que chaque gagnant a un perdant et que les coûts sont prélevés sur le total', 'Parce que les courtiers prêtent de l’argent', 'Parce que les actions ne bougent pas'], 1, 'Les spreads, commissions et impôts réduisent le total disponible pour tous les traders.'],
        ['Quel argent convient au trading ?', ['Le loyer du mois prochain', 'De l’argent emprunté', 'Du capital à risque que tu peux te permettre de perdre', 'Ton fonds d’urgence'], 2, 'Seul l’argent que tu peux perdre sans abîmer ta vie a sa place dans la spéculation.'],
        ['Quelle est une bonne première étape après avoir appris les bases du trading ?', ['Utiliser l’effet de levier maximal', 'S’entraîner sur un simulateur pendant plus de 100 trades', 'Quitter ton emploi', 'Suivre des vendeurs de signaux'], 1, 'Un simulateur permet d’apprendre de ses erreurs sans aucun coût.']
      ]
    },
    {
      id: 'b2', m: 14, t: 'Comment fonctionnent les marchés : ordres, spreads et effet de levier',
      hook: 'Ce qui se passe réellement entre ton clic sur « acheter » et l’exécution du trade. Comprends la plomberie pour qu’elle ne te surprenne pas.',
      body: `
<p>Un marché est un lieu où acheteurs et vendeurs se rencontrent. Les prix bougent à cause de l’équilibre entre ces deux groupes. Pour bien trader, tu dois comprendre la mécanique qui décide du prix que tu obtiens réellement.</p>

<h3>Bid, ask et spread</h3>
<p>Chaque instrument a deux prix en direct : le <b>bid</b> (le prix le plus élevé que les acheteurs paient, c’est ce que tu reçois quand tu vends) et l’<b>ask</b> (le prix le plus bas que les vendeurs veulent, c’est ce que tu paies quand tu achètes). La différence est le <b>spread</b>.</p>
${B.ex('<p>Une action affiche un bid de 49,98 € et un ask de 50,02 €. Tu achètes 200 actions à 50,02 € (10 004 €). Si tu revends immédiatement, tu obtiens 49,98 € (9 996 €). Tu viens de perdre 8 € sans rien faire. C’est le coût du spread, en plus de toute commission. Un scalper qui trade 20 fois par jour paie cela 20 fois, donc le marché doit bouger de plus que le coût rien que pour que tu sois à l’équilibre.</p>')}

<h3>Liquidité, volume et slippage</h3>
<ul>
<li><b>Liquidité</b> : la facilité avec laquelle tu peux acheter ou vendre sans faire bouger le prix. Les grandes actions et les principales paires de devises sont très liquides ; les petites actions et les jetons obscurs ne le sont pas.</li>
<li><b>Volume</b> : combien d’unités ont été échangées. Un volume plus élevé signifie généralement des spreads plus serrés et des mouvements de prix plus fiables.</li>
<li><b>Slippage (glissement)</b> : la différence entre le prix attendu et le prix obtenu, surtout sur des marchés rapides ou avec de gros ordres.</li>
</ul>

<h3>Types d’ordres</h3>
${B.tbl(['Ordre', 'Ce qu’il fait', 'Attention'], [
        ['Au marché', 'Achète ou vend immédiatement au meilleur prix disponible', 'Le prix peut glisser sur des marchés rapides ou peu profonds'],
        ['À cours limité', 'Achète ou vend uniquement à ton prix ou mieux', 'Il peut ne jamais être exécuté si le prix n’y arrive pas'],
        ['Stop (stop-loss)', 'Devient un ordre au marché lorsque le prix atteint ton niveau de stop', 'Peut être exécuté moins bien que le stop en cas de gap'],
        ['Stop-limite', 'Devient un ordre à cours limité au niveau du stop', 'Peut ne pas être exécuté du tout lors d’un mouvement rapide'],
        ['Stop suiveur', 'Stop qui suit le prix à une distance fixée', 'Trop serré, et le bruit normal te fait sortir']
      ])}

<h3>Long, short et effet de levier</h3>
<ul>
<li><b>Être long</b> : tu achètes, en espérant que le prix monte.</li>
<li><b>Être short</b> : tu vends quelque chose que tu as emprunté, en espérant le racheter moins cher. Les pertes sur une position short sont théoriquement illimitées, car le prix peut continuer de monter.</li>
<li><b>Marge et effet de levier</b> : le courtier te laisse contrôler une position plus grande que ton argent. Avec un levier de 10:1, 1 000 € contrôlent 10 000 €, donc un mouvement de 10 % contre toi efface la totalité de ton dépôt.</li>
</ul>
<p>Dans l’UE, les régulateurs plafonnent le levier pour les clients particuliers sur les produits à effet de levier (CFD) : 30:1 pour les principales paires de devises, 20:1 pour les autres paires, l’or et les grands indices, 10:1 pour les autres matières premières et indices, 5:1 pour les actions individuelles et 2:1 pour les crypto-actifs. Les courtiers doivent aussi fermer les positions lorsque la marge tombe à 50 % et offrir une protection contre le solde négatif aux clients particuliers. D’autres pays ont des règles différentes. Aux États-Unis, les comptes qui font souvent du day trading ont historiquement été soumis à un capital minimum, et ces règles sont en cours de révision, donc vérifie toujours la réglementation actuelle auprès de ton courtier.</p>

<h3>Instruments sur lesquels tu peux faire du day trading</h3>
<ul>
<li><b>Actions et ETF</b> : simples, transparents, souvent avec commissions.</li>
<li><b>Forex</b> : paires de devises, ouvert 24 heures sur 24 en semaine, avec effet de levier.</li>
<li><b>Contrats à terme (futures)</b> : contrats standardisés sur indices, matières premières et taux. Très liquides, très à effet de levier.</li>
<li><b>Options</b> : contrats donnant le droit d’acheter ou de vendre plus tard. Complexes, et pas pour les débutants.</li>
<li><b>CFD</b> : contrats pour la différence. Un accord à effet de levier avec un courtier plutôt qu’une propriété. La disponibilité et les règles varient selon les pays, et ils comportent un risque élevé.</li>
</ul>

<h3>Quand les marchés sont animés</h3>
<p>La plupart du day trading a lieu près de l’ouverture et de la clôture d’une séance, quand le volume et la volatilité sont les plus élevés. Le milieu de la journée est souvent plus calme et plus erratique. Les publications de données économiques (emploi, inflation, décisions de banques centrales) provoquent des pics soudains et des spreads plus larges, donc beaucoup de traders les évitent ou réduisent leur taille à ces moments-là.</p>

${B.warn('<p>L’effet de levier est la cause numéro un des comptes détruits. Il ne te rend pas plus intelligent ni le marché plus gentil, il accélère seulement ce qui arrive.</p>')}

${B.take(['Tu achètes à l’ask et tu vends au bid ; le spread est un coût réel à chaque trade.', 'Liquidité et volume décident de la facilité et du coût de tes trades.', 'Apprends les types d’ordres : le cours limité donne le contrôle du prix, le stop-loss limite le risque mais peut glisser.', 'L’effet de levier multiplie gains et pertes ; les régulateurs le plafonnent pour une raison.'])}`,
      q: [
        ['Tu paies l’ask et tu reçois le bid. La différence entre eux est…', ['La commission', 'Le spread', 'Le slippage', 'La marge'], 1, 'Le spread est un coût intégré chaque fois que tu achètes et vends.'],
        ['Avec un levier de 20:1, un mouvement de combien contre toi peut effacer ton dépôt (environ) ?', ['20 %', '5 %', '50 %', '1 %'], 1, '100 % ÷ 20 = 5 %, avant frais et règles de marge.'],
        ['Quel ordre te permet de contrôler le prix maximal que tu paies ?', ['Ordre au marché', 'Ordre à cours limité', 'Stop-loss', 'Stop suiveur'], 1, 'Un ordre à cours limité ne s’exécute qu’à ton prix ou mieux, mais peut ne pas être exécuté.']
      ]
    },
    {
      id: 'b3', m: 13, t: 'Lire les graphiques de prix : chandeliers, tendances et niveaux',
      hook: 'Apprends le langage visuel du prix et lis l’histoire que raconte chaque bougie.',
      body: `
<p>Un graphique de prix est le registre de la bataille entre acheteurs et vendeurs. Le type le plus populaire est le <b>graphique en chandeliers japonais</b>, inventé il y a des siècles par des négociants de riz japonais. Chaque bougie résume une période (une minute, une heure, un jour).</p>

<h3>Anatomie d’une bougie</h3>
<ul>
<li><b>Ouverture</b> : prix au début de la période.</li>
<li><b>Clôture</b> : prix à la fin.</li>
<li><b>Plus haut / plus bas</b> : les extrêmes, dessinés comme de fines lignes appelées mèches ou ombres.</li>
<li>Le <b>corps</b> est le rectangle entre l’ouverture et la clôture. Vert (ou creux) signifie clôture au-dessus de l’ouverture ; rouge signifie clôture en dessous de l’ouverture.</li>
</ul>
<p>Construis-en une toi-même et vois comment les formes changent de sens :</p>
${B.w('candles')}

<h3>Tendance : la direction du marché</h3>
<p>Le concept le plus simple et le plus utile est la <b>tendance</b>.</p>
<ul>
<li><b>Tendance haussière</b> : un escalier de plus hauts plus élevés et de plus bas plus élevés.</li>
<li><b>Tendance baissière</b> : des plus hauts plus bas et des plus bas plus bas.</li>
<li><b>Range (latéral)</b> : le prix rebondit entre un plancher et un plafond.</li>
</ul>
${B.key('<p><b>« La tendance est ton amie. »</b> Trader dans le sens de la tendance plus large donne généralement de meilleures probabilités que de lutter contre elle. La plupart des débutants essaient de deviner les sommets et les creux, et se font écraser.</p>')}

<h3>Support et résistance</h3>
<p>Le <b>support</b> est une zone de prix où les acheteurs sont intervenus à plusieurs reprises, comme un plancher. La <b>résistance</b> est là où les vendeurs sont apparus à plusieurs reprises, comme un plafond. Ce sont des zones, pas des lignes exactes. Quand le prix les franchit, l’ancienne résistance devient souvent le nouveau support (et inversement). Comme beaucoup de traders regardent les mêmes niveaux évidents, ils ont tendance à compter.</p>

<h3>Volume : la confirmation</h3>
<p>Un mouvement avec un volume fort montre une large participation et il est plus fiable. Une cassure avec un faible volume échoue souvent. Cherche un volume qui augmente dans le sens de la tendance et qui s’assèche dans les replis.</p>

<h3>Unités de temps</h3>
<p>Chaque graphique peut être vu sur différentes unités de temps (1 minute, 5 minutes, 1 heure, quotidien). Les professionnels utilisent l’<b>analyse multi-unités de temps</b> : ils consultent le graphique quotidien pour la tendance et les niveaux clés, puis utilisent un graphique plus petit (comme 5 ou 15 minutes) pour chronométrer les entrées. Un motif sur un graphique d’une minute est bien moins fiable que sur un graphique quotidien.</p>

<h3>Signaux de bougies courants (à utiliser avec soin)</h3>
<ul>
<li><b>Doji</b> : ouverture et clôture presque égales. Indécision.</li>
<li><b>Marteau / pin bar</b> : longue mèche inférieure. Rejet possible des prix plus bas.</li>
<li><b>Étoile filante</b> : longue mèche supérieure. Rejet possible des prix plus hauts.</li>
<li><b>Avalement</b> : une bougie dont le corps recouvre entièrement celui de la bougie précédente. Possible changement de contrôle.</li>
</ul>
${B.warn('<p>Aucun motif de bougie ne fonctionne seul. Son sens dépend du <b>contexte</b> : où il apparaît (à un niveau clé ?), dans quelle tendance il se trouve et le volume qui l’accompagne. Un « marteau » au milieu de nulle part ne veut presque rien dire.</p>')}

${B.ex('<p>Une action est montée en escalier régulier pendant deux semaines. Elle recule jusqu’à un ancien niveau de résistance qui joue maintenant le rôle de support, y forme une bougie marteau avec un volume supérieur à la moyenne, et la bougie suivante clôture en hausse. Cette combinaison (tendance + support + bougie de rejet + volume) est une histoire bien plus forte que n’importe quel élément seul.</p>')}

${B.take(['Une bougie montre l’ouverture, le plus haut, le plus bas et la clôture d’une période.', 'Identifie d’abord la tendance (plus hauts et plus bas plus élevés, ou plus bas), puis les niveaux.', 'Support et résistance sont des zones où le prix a déjà réagi.', 'Le volume confirme les mouvements, et les unités de temps plus grandes pèsent davantage.', 'Les motifs de bougies ont besoin de contexte pour signifier quelque chose.'])}`,
      q: [
        ['Une bougie a une longue mèche inférieure et un petit corps près du sommet. Cette forme s’appelle…', ['Une bougie de type marteau', 'Une étoile filante', 'Un gap', 'Une ligne de tendance'], 0, 'Une longue ombre basse avec un petit corps forme un marteau, suggérant un rejet des prix plus bas.'],
        ['Qu’est-ce qui définit une tendance haussière ?', ['Un prix supérieur à zéro', 'Des plus hauts plus élevés et des plus bas plus élevés', 'Des plus hauts plus bas et des plus bas plus bas', 'Seulement des bougies vertes'], 1, 'L’escalier de plus hauts et de plus bas qui montent est la définition de base.'],
        ['Pourquoi utiliser plusieurs unités de temps ?', ['Pour t’embrouiller', 'Les unités plus grandes montrent la tendance principale et les niveaux clés ; les plus petites aident à chronométrer les entrées', 'Parce que les courtiers l’exigent', 'Elles donnent toujours des signaux identiques'], 1, 'Le contexte général améliore les entrées et évite de trader contre de fortes tendances.']
      ]
    },
    {
      id: 'b4', m: 12, t: 'Indicateurs et outils (et leurs limites)',
      hook: 'Moyennes mobiles, RSI, MACD et compagnie : ce qu’ils mesurent, comment les traders les utilisent et pourquoi plus n’est pas mieux.',
      body: `
<p>Les indicateurs sont des formules mathématiques appliquées au prix (et parfois au volume) pour rendre les motifs plus faciles à voir. Ce sont des outils pour <b>décrire</b> ce qui s’est passé, pas des boules de cristal. Comme ils utilisent des données passées, ils retardent tous plus ou moins sur le prix.</p>

<h3>Les cinq essentiels (plus un)</h3>
${B.tbl(['Indicateur', 'Ce qu’il montre', 'Usage courant', 'Limites'], [
        ['Moyenne mobile (SMA / EMA)', 'Prix moyen sur N périodes. L’EMA réagit plus vite', 'Direction de la tendance ; support dynamique ; croisements (ex. 50 contre 200)', 'Retarde ; faux signaux en range'],
        ['RSI (14)', 'Momentum de 0 à 100', 'Au-dessus de 70 « suracheté », sous 30 « survendu » ; divergences', 'Dans les fortes tendances, le RSI peut rester « suracheté » longtemps'],
        ['MACD (12, 26, 9)', 'Différence entre deux EMA et sa ligne de signal', 'Changements de momentum et force de la tendance', 'Retarde ; bruyant en range'],
        ['Bandes de Bollinger (20, 2)', 'Moyenne mobile ± 2 écarts-types', 'Compressions et expansions de volatilité', 'Toucher une bande n’est pas un retournement automatique'],
        ['VWAP', 'Prix moyen pondéré par le volume de la journée', '« Juste valeur » intrajournalière ; les institutions s’y réfèrent', 'Intrajournalier seulement ; se réinitialise chaque jour'],
        ['ATR (14)', 'Amplitude moyenne vraie : taille typique du mouvement', 'Fixer la distance du stop et la taille de position', 'Ne montre pas la direction']
      ])}

<h3>Les moyennes mobiles en pratique</h3>
<p>La pente d’une moyenne mobile donne une lecture rapide de la tendance : un prix au-dessus d’une EMA 20 ou 50 en hausse suggère une tendance haussière. Dans le laboratoire de paper trading plus loin, tu peux activer une moyenne de 20 bougies pour voir comment le prix tend à la respecter. Une « croix d’or » (moyenne 50 jours qui croise au-dessus de la 200 jours) et une « croix de la mort » (l’inverse) sont très surveillées, mais elles arrivent tard. Quand elles apparaissent, une grande partie du mouvement a souvent déjà eu lieu.</p>

<h3>Le RSI bien utilisé</h3>
<p>Les débutants voient le RSI au-dessus de 70 et vendent aussitôt. C’est un piège classique : dans les fortes tendances haussières, le RSI peut rester au-dessus de 70 pendant des semaines. Un meilleur usage consiste à chercher la <b>divergence</b> : le prix fait un plus haut plus élevé, mais le RSI fait un plus haut plus bas, signalant un momentum qui s’affaiblit. Même alors, attends que le prix confirme.</p>

<h3>L’ATR pour les stops et la taille</h3>
<p>Si l’ATR d’une action est de 1,50 €, le mouvement normal est d’environ 1,50 € par période. Placer ton stop à 0,30 € signifie que le bruit ordinaire va le toucher. Un stop de 1 à 2 fois l’ATR au-delà d’un point structurel sensé survit mieux au bruit. Un stop plus large veut dire une position plus petite, pour que le risque en euros reste constant.</p>

<h3>Pourquoi plus d’indicateurs te rend moins bon</h3>
<p>Beaucoup d’indicateurs sont des vues différentes des mêmes données de prix. Empiler cinq indicateurs de momentum ne donne pas cinq confirmations indépendantes. Cela donne le même signal cinq fois, plus de la confusion quand ils divergent. Les traders expérimentés utilisent généralement <b>l’action des prix plus deux ou trois outils simples</b>.</p>
${B.ex('<p>Chris a 9 indicateurs sur son graphique : 3 disent acheter, 4 vendre et 2 neutre. Il attend et rate le mouvement. Dana utilise une EMA 20 pour la tendance, le volume et les niveaux clés. Quand le prix recule vers l’EMA 20 dans une tendance haussière avec un volume en baisse, elle cherche une entrée. Simple, reproductible, facile à tester.</p>')}

${B.tip('<p>Avant d’ajouter un indicateur, écris la question précise à laquelle il répond (tendance ? momentum ? volatilité ?). Si tu n’y arrives pas, retire-le.</p>')}

${B.take(['Les indicateurs résument le prix passé ; aucun ne prédit l’avenir.', 'Connais le rôle de chacun : tendance (moyennes mobiles), momentum (RSI, MACD), volatilité (ATR, Bollinger), juste valeur (VWAP).', 'Un RSI « suracheté » n’est pas un signal de vente dans une forte tendance.', 'Utilise l’ATR pour placer des stops hors du bruit normal et dimensionner correctement les positions.', 'Moins d’outils, plus simples, valent mieux que des graphiques encombrés.'])}`,
      q: [
        ['À quoi sert l’ATR ?', ['Prédire la direction', 'Mesurer le mouvement typique du prix pour fixer les stops et la taille de position', 'Garantir un profit', 'Trouver des nouvelles'], 1, 'L’ATR mesure la volatilité, ce qui aide à dimensionner les stops de façon sensée.'],
        ['Pourquoi un RSI supérieur à 70 peut-il être un mauvais signal de vente automatique ?', ['Il ne dépasse jamais 70', 'Dans les fortes tendances haussières, il peut rester élevé longtemps pendant que le prix continue de monter', 'Il est cassé', 'Parce que 70 est toujours faux'], 1, 'Les lectures de surachat peuvent persister dans les fortes tendances.'],
        ['Quel est le problème d’empiler de nombreux indicateurs similaires ?', ['Ils sont trop bon marché', 'Ils donnent la même information à répétition et créent de la confusion quand ils divergent', 'Ils ne ralentissent que l’ordinateur', 'Il n’y a aucun problème'], 1, 'Ils dérivent des mêmes données de prix, ce ne sont donc pas des confirmations indépendantes.']
      ]
    },
    {
      id: 'b5', m: 14, t: 'Stratégies de trading : trouve le style qui te convient',
      hook: 'Tendance, repli, cassure, range, cassure de l’ouverture : comment chacune fonctionne, où elle échoue et comment la tester avant de risquer un centime.',
      body: `
<p>Une <b>stratégie</b> est un ensemble complet de règles : ce que tu trades, quand tu entres, où tu places ton stop, où tu prends ton profit, et quelle est la taille de la position. Trader sans règles, c’est deviner. Voici les styles classiques.</p>

<h3>1. Suivi de tendance</h3>
<p><b>Idée :</b> les tendances ont tendance à continuer. Achète la force dans une tendance haussière, vends la faiblesse dans une tendance baissière.<br><b>Entrée :</b> le prix casse un plus haut récent avec une moyenne mobile ascendante.<br><b>Stop :</b> sous le dernier plus bas plus élevé.<br><b>Échoue quand :</b> les marchés évoluent latéralement. Attends-toi à beaucoup de petites pertes et quelques gros gains, avec un taux de réussite plus bas.</p>

<h3>2. Repli (acheter la baisse dans une tendance)</h3>
<p><b>Idée :</b> dans une forte tendance, de courts replis offrent de meilleures entrées.<br><b>Entrée :</b> le prix recule vers une moyenne mobile ou un support dans une tendance haussière et montre une bougie de retournement.<br><b>Stop :</b> sous le plus bas du repli.<br><b>Échoue quand :</b> le repli devient un retournement de tendance.</p>

<h3>3. Cassure (breakout)</h3>
<p><b>Idée :</b> après une consolidation, le prix explose hors de son range.<br><b>Entrée :</b> une clôture au-dessus de la résistance avec un volume élevé (ou un retest du niveau cassé).<br><b>Stop :</b> de retour à l’intérieur du range.<br><b>Échoue quand :</b> de fausses cassures (le prix perce puis retombe). Attends confirmation et volume.</p>

<h3>4. Trading de range / retour à la moyenne</h3>
<p><b>Idée :</b> quand il n’y a pas de tendance, le prix revient vers le milieu. Vends près de la résistance, achète près du support.<br><b>Stop :</b> juste en dehors du range.<br><b>Échoue quand :</b> le range finit par casser et la tendance commence, c’est pourquoi un stop est obligatoire.</p>

<h3>5. Cassure du range d’ouverture</h3>
<p><b>Idée :</b> marque le plus haut et le plus bas des 15 à 30 premières minutes après l’ouverture du marché. Une cassure de l’un ou l’autre côté avec du volume peut mener à un mouvement qui dure toute la journée.<br><b>Stop :</b> l’autre côté ou le milieu du range.<br><b>Échoue quand :</b> le marché est indécis lors d’une journée calme en nouvelles.</p>

<h3>6. Scalping</h3>
<p><b>Idée :</b> de nombreux petits profits sur des mouvements très courts. Demande des spreads serrés, une exécution rapide, des frais bas et une concentration intense. Les coûts dévorent les scalpers, et il est très peu probable qu’un débutant soit rentable.</p>

<h3>Trades sur nouvelles et résultats</h3>
<p>Les prix sautent autour des publications, les spreads s’élargissent et le slippage augmente. C’est un style avancé. La plupart des débutants devraient simplement rester hors des positions pendant les événements majeurs.</p>

<h3>Choisir un style</h3>
${B.tbl(['Style', 'Taux de réussite', 'Taille des gains', 'Temps d’écran', 'Te convient si…'], [
        ['Suivi de tendance', 'Plus bas (35 à 45 %)', 'Grande', 'Faible à moyen', 'Tu es patient et acceptes de petites pertes'],
        ['Repli', 'Moyen', 'Moyenne', 'Moyen', 'Tu aimes attendre un bon prix'],
        ['Cassure', 'Moyen à bas', 'Moyenne à grande', 'Moyen', 'Tu supportes les fausses cassures'],
        ['Range', 'Plus élevé (50 à 65 %)', 'Petite', 'Moyen', 'Tu préfères de petits gains fréquents et des stops stricts'],
        ['Scalping', 'Variable', 'Minuscule', 'Très élevé', 'Presque jamais un choix de débutant']
      ])}

<h3>Écris le règlement (un modèle de setup de trade)</h3>
<ol>
<li><b>Condition de marché</b> : qu’est-ce qui doit être vrai ? (ex. tendance haussière quotidienne)</li>
<li><b>Déclencheur</b> : l’événement exact pour entrer (ex. clôture au-dessus du plus haut de la bougie précédente après un repli)</li>
<li><b>Stop-loss</b> : règle de prix exacte</li>
<li><b>Objectif / sortie</b> : multiple fixe du risque, stop suiveur ou niveau</li>
<li><b>Taille de position</b> : % de risque ÷ distance du stop</li>
<li><b>Quand NE PAS trader</b> : nouvelles majeures, faible volume, après avoir atteint la perte quotidienne</li>
</ol>

<h3>Bases du backtesting</h3>
<p>Le <b>backtesting</b> consiste à appliquer tes règles à des données passées pour voir comment elles auraient performé. Bien fait, c’est très utile. Mal fait, cela crée une fausse confiance :</p>
<ul>
<li>Inclus les coûts : spread, commissions et slippage.</li>
<li>Utilise assez de trades (100+). Dix trades ne prouvent rien.</li>
<li>Évite le <b>surajustement (overfitting)</b> : ne retouche pas sans fin les paramètres jusqu’à ce que le passé paraisse parfait. Teste sur des données que tu n’as pas utilisées pour concevoir les règles (« hors échantillon »).</li>
<li>Évite le <b>biais d’anticipation (look-ahead bias)</b> : n’utilise pas d’informations qui n’étaient pas disponibles à ce moment-là.</li>
<li>Enchaîne avec des tests en conditions réelles (paper trading) avant l’argent réel.</li>
</ul>

${B.warn('<p>Une stratégie qui a fonctionné dans un marché haussier peut échouer dans un range ou un krach. Les marchés changent de régime. Attends-toi à ce que ton avantage demande de l’entretien.</p>')}

${B.take(['Une stratégie est un règlement complet : condition de marché, déclencheur, stop, sortie, taille et quand ne pas trader.', 'Les stratégies de tendance et de repli gagnent moins souvent mais plus gros ; celles de range gagnent plus souvent mais moins.', 'Fais un backtest avec les coûts et assez de trades, évite le surajustement, puis fais du paper trading.', 'Choisis un style simple et maîtrise-le plutôt que de sauter de l’un à l’autre.'])}`,
      q: [
        ['Un système de suivi de tendance présente typiquement…', ['Un taux de réussite très élevé et de minuscules gains', 'Un taux de réussite plus bas mais des gains plus grands que les pertes', 'Aucun stop-loss', 'Zéro trade perdant'], 1, 'Il accepte beaucoup de petites pertes pour attraper quelques gros mouvements.'],
        ['Qu’est-ce que le surajustement dans le backtesting ?', ['Utiliser trop peu d’indicateurs', 'Régler les règles jusqu’à ce qu’elles collent parfaitement aux données passées, mais échouent sur de nouvelles données', 'Trader trop peu', 'Utiliser un compte démo'], 1, 'Les règles captent le bruit passé plutôt qu’un véritable avantage.'],
        ['Qu’est-ce qui est une partie obligatoire de toute stratégie de cassure ou de range ?', ['Un stop-loss', 'Un profit garanti', 'Le tuyau d’un ami', 'Un levier maximal'], 0, 'Toute stratégie peut échouer ; le stop définit ta perte maximale.']
      ]
    },
    {
      id: 'b6', m: 16, t: 'Gestion du risque : le seul avantage que tu contrôles entièrement',
      hook: 'Tu ne peux pas contrôler le marché, mais tu peux contrôler combien tu perds quand tu te trompes. Deux calculateurs te montreront pourquoi cela fait gagner des carrières.',
      body: `
<p>Demande à des traders professionnels ce qui sépare les survivants des autres et la réponse est presque toujours la même : la <b>gestion du risque</b>. Tu peux avoir une stratégie médiocre et survivre avec un bon contrôle du risque. Tu ne peux pas survivre avec une excellente stratégie et un mauvais contrôle du risque.</p>

<h3>Règle 1 : Risque un petit pourcentage fixe par trade</h3>
<p>La règle la plus courante est de risquer <b>0,5 % à 1 % de ton compte</b> sur un seul trade (2 % au maximum). Si tu as 5 000 € et risques 1 %, le plus que tu perdras sur un trade est de 50 €. Cela rend les séries de pertes supportables.</p>
${B.ex('<p>Sept pertes d’affilée semble extrême, mais cela arrive à tous les traders. Si tu risques 1 % à chaque fois, le compte baisse d’environ 7 %. Si tu risques 10 % à chaque fois, il baisse d’environ 52 % et tu as besoin d’un gain de 109 % rien que pour récupérer. La taille de position est ce qui te garde dans le jeu pendant que tu apprends.</p>')}

<h3>Règle 2 : Le stop décide de la taille</h3>
<p>Tu décides d’abord où le trade est prouvé faux (le stop), puis <i>ensuite</i> tu calcules combien d’unités acheter pour que toucher le stop ne coûte que ton risque choisi. La formule :</p>
<p><b>Taille de position = (compte × % de risque) ÷ (prix d’entrée − prix du stop)</b></p>
${B.w('possize')}

<h3>Règle 3 : Pense en R</h3>
<p>1R est égal à ton risque initial sur un trade. Si tu risques 50 € et gagnes 100 €, c’est +2R. Mesurer en R rend les résultats comparables entre trades et tailles de compte. Cela te permet aussi de définir le rapport gain/risque avant d’entrer : ne prends que des trades qui rapportent au moins 1,5 à 2R si tu as raison.</p>

<h3>Règle 4 : Connais ton espérance</h3>
<p>L’<b>espérance</b> est le résultat moyen par trade en R. <b>Espérance = (taux de réussite × gain moyen en R) − (taux de perte × 1R)</b>. Par exemple, 40 % de réussite avec des gains de 2R : 0,4×2 − 0,6×1 = +0,2R par trade. C’est rentable même si tu perds 60 % du temps. Si tu gagnes 60 % mais que tes gains sont de 0,5R : 0,6×0,5 − 0,4 = −0,1R. Tu gagnes souvent et pourtant tu perds de l’argent.</p>
${B.w('expectancy')}

<h3>Règle 5 : Respecte les maths du drawdown</h3>
<p>Les pertes font plus mal que les gains n’aident, car tu récupères à partir d’une base plus petite :</p>
${B.tbl(['Perte du compte', 'Gain nécessaire pour revenir à l’équilibre'], [['-10 %', '+11 %'], ['-20 %', '+25 %'], ['-30 %', '+43 %'], ['-50 %', '+100 %'], ['-75 %', '+300 %'], ['-90 %', '+900 %']])}

<h3>Règle 6 : Limites quotidiennes et hebdomadaires</h3>
<p>Fixe une perte quotidienne maximale (par exemple 2 à 3 % du compte). Quand tu l’atteins, <b>arrête de trader pour la journée</b>. Beaucoup de comptes détruits viennent d’un seul après-midi de tilt avec des trades de vengeance. Fais la même chose pour une limite hebdomadaire.</p>

<h3>Règle 7 : Surveille la corrélation et l’exposition totale</h3>
<p>Cinq trades sur cinq actions technologiques sont en réalité un seul gros trade sur la technologie. Limite le risque total ouvert (par exemple pas plus de 3 à 5 % sur toutes les positions) et évite d’empiler des paris identiques.</p>

<h3>Règle 8 : N’éloigne jamais un stop</h3>
<p>Tu peux resserrer un stop pour protéger un profit. L’éloigner du prix pour « laisser de l’air au trade » transforme une petite perte prévue en une grosse perte imprévue. Cette habitude est derrière d’innombrables comptes détruits.</p>

<h3>Placement du stop-loss</h3>
<ul>
<li>Place-le à un niveau qui prouve que l’idée est fausse (sous le dernier creux), pas à un pourcentage aléatoire.</li>
<li>Donne-lui de la marge selon la volatilité (ATR).</li>
<li>Ensuite laisse le stop déterminer ta taille, jamais l’inverse.</li>
</ul>

${B.warn('<p>« Moyenner à la baisse » (acheter davantage à mesure qu’une position perdante chute) sans plan est la façon dont de petites pertes deviennent des pertes qui terminent un compte. Ajoute aux gagnants avec des règles, pas aux perdants avec de l’espoir.</p>')}

${B.take(['Risque 0,5 à 1 % de ton compte par trade ; plafonne les pertes quotidiennes et hebdomadaires.', 'Place d’abord le stop, puis calcule la taille de position à partir de lui.', 'Mesure les trades en R et exige une espérance positive.', 'Une perte de 50 % demande un gain de 100 % : éviter les gros drawdowns est le travail principal.', 'N’élargis jamais un stop-loss et n’ajoute pas aux perdants sans règles.'])}`,
      q: [
        ['Tu as 10 000 € et risques 1 % sur un trade avec une entrée à 20 € et un stop à 19 €. Quelle est ta taille de position ?', ['50 actions', '100 actions', '500 actions', '10 000 actions'], 1, 'Risque = 100 € ; distance = 1 € ; taille = 100 actions.'],
        ['Un système gagne 40 % des trades avec un gain moyen de 2R et perd 1R sinon. Espérance par trade ?', ['-0,2R', '0R', '+0,2R', '+1R'], 2, '0,4 × 2 − 0,6 × 1 = +0,2R.'],
        ['Après avoir perdu 50 % d’un compte, quel gain te faut-il pour être à l’équilibre ?', ['50 %', '75 %', '100 %', '200 %'], 2, 'Passer de 50 à 100 demande un gain de 100 %.']
      ]
    },
    {
      id: 'b7', m: 13, t: 'Psychologie du trading et journal',
      hook: 'Les stratégies échouent dans l’esprit bien avant d’échouer sur le graphique. Construis des habitudes qui te gardent stable, et suis-les.',
      body: `
<p>La plupart des traders qui échouent savaient quoi faire. Ils ne l’ont simplement pas fait. Ils ont déplacé des stops, sauté dans des trades par ennui, doublé la mise après des pertes. La <b>psychologie</b> n’est pas un sujet mou : c’est là que l’argent se gagne ou se perd.</p>

<h3>Les suspects habituels</h3>
<ul>
<li><b>FOMO</b> : courir après un mouvement qui a déjà eu lieu. Tu achètes près du sommet parce que « ça va aller sur la lune ».</li>
<li><b>Trading de vengeance</b> : après une perte, prendre un trade impulsif et plus gros pour « se refaire ».</li>
<li><b>Surtrading</b> : trader par ennui ou besoin d’action. Plus de trades signifient plus de coûts et plus d’erreurs.</li>
<li><b>Espoir</b> : refuser de prendre un stop-loss parce que le trade « pourrait revenir ».</li>
<li><b>Avidité après les gains</b> : augmenter la taille après une série chanceuse et tout rendre.</li>
<li><b>Peur</b> : couper les gagnants trop tôt et hésiter sur des setups valides après quelques pertes.</li>
<li><b>Tilt</b> : un état de frustration émotionnelle où tu cesses complètement de suivre les règles.</li>
</ul>

<h3>Habitudes qui te protègent</h3>
<ol>
<li><b>Liste de contrôle avant le trade</b> : si toutes les cases ne sont pas cochées, pas de trade.</li>
<li><b>Routine quotidienne fixe</b> : prépare-toi avant l’ouverture du marché ; arrête à une heure définie.</li>
<li><b>Nombre maximal de trades par jour</b> (par exemple 3 à 5).</li>
<li><b>La règle des trois coups</b> : après trois pertes consécutives, éloigne-toi au moins une heure.</li>
<li><b>Limite de perte quotidienne</b> : une fois atteinte, ferme la plateforme.</li>
<li><b>Sommeil, nourriture, exercice</b> : les traders fatigués prennent de moins bonnes décisions, et c’est mesurable.</li>
<li><b>Écris ce que tu ressens</b> : une courte note avant chaque trade sur ton état. Les schémas apparaissent vite.</li>
</ol>

<h3>Le journal de trading : ton coach privé</h3>
<p>Un journal enregistre chaque trade : date, marché, setup, entrée, stop, objectif, taille, résultat en R, si tu as suivi ton plan, ton émotion et une capture d’écran. Après 30 à 50 trades, tu peux répondre à des questions qui changent tout :</p>
<ul>
<li>Quel setup rapporte de l’argent et lequel en fait perdre ?</li>
<li>Perds-tu plus quand tu enfreins tes règles ?</li>
<li>Quelles émotions ou quels moments de la journée te nuisent ?</li>
</ul>
<p>Essaie le journal ci-dessous. Il commence avec des trades d’exemple. Remarque comment « plan suivi » et l’émotion racontent une histoire claire. Puis vide-le et enregistre tes propres trades d’entraînement.</p>
${B.w('journal')}

${B.w('checklist', { key: 'b7', title: 'Liste de contrôle avant le trade (à copier et adapter)', accent: 'trd', items: 'La tendance de l’unité de temps supérieure va dans le sens de mon trade|Le setup correspond exactement à mes règles écrites|Mon stop-loss est placé là où l’idée est prouvée fausse|La taille de ma position ne risque pas plus que mon pourcentage fixe|Le gain est d’au moins 1,5 à 2 fois mon risque|Pas de nouvelle majeure dans les 30 prochaines minutes|Je suis calme, reposé et je n’essaie pas de me refaire après une perte' })}

${B.key('<p>Ton travail n’est pas de prédire le marché. Ton travail est de suivre tes règles pendant que le marché fait ce qu’il veut. Évalue la qualité de ton exécution, pas seulement si le trade a rapporté de l’argent.</p>')}

${B.take(['Des émotions comme la FOMO, la vengeance et l’espoir détruisent plus de comptes que les mauvaises stratégies.', 'Utilise des listes, des limites de trades, des limites de perte quotidienne et des pauses pour imposer la discipline.', 'Un journal transforme l’expérience en données ; relis-le chaque semaine.', 'Juge-toi sur le respect des règles, pas sur les résultats individuels.'])}`,
      q: [
        ['Qu’est-ce que le trading de vengeance ?', ['Trader contre un rival', 'Prendre des trades impulsifs et surdimensionnés pour récupérer une perte', 'Vendre avec profit', 'Utiliser un compte démo'], 1, 'Il est guidé par l’émotion et multiplie généralement la perte initiale.'],
        ['Quel est le meilleur usage d’un journal de trading ?', ['Se vanter', 'Trouver des schémas dans les setups, les émotions et les infractions aux règles à partir de tes données', 'Remplacer un stop-loss', 'Prédire le marché'], 1, 'Le journal est un outil de retour d’information pour améliorer ton processus.'],
        ['Après avoir atteint ta limite de perte quotidienne, tu devrais…', ['Augmenter la taille pour récupérer', 'Arrêter de trader pour la journée', 'Passer immédiatement à un nouveau marché', 'Supprimer la limite'], 1, 'La limite existe pour stopper une spirale émotionnelle.']
      ]
    },
    {
      id: 'b8', m: 15, t: 'Laboratoire de paper trading et ton plan de trading',
      hook: 'C’est le moment de trader 100 bougies avec de l’argent fictif. Puis écris le plan qui décide si tu risqueras un jour le vrai argent.',
      body: `
<p>Les pilotes ne font pas voler des passagers dès le premier jour : ils utilisent des simulateurs. Les traders devraient faire pareil. Un compte de <b>paper trading</b> te permet de t’entraîner à l’exécution, aux règles et aux émotions sans risque financier.</p>

<h3>Joue : le marché d’entraînement</h3>
<p>Ci-dessous se trouve un marché généré (pas un vrai) qui alterne entre tendances haussières, baissières et ranges. Tu as 10 000 € d’argent fictif. Appuie sur <b>Bougie suivante</b> pour avancer dans le temps, ou sur <b>Lecture auto</b>. Entre en long ou en short, choisis ton risque, la distance du stop et l’objectif de profit, et le labo calcule la taille de position pour toi. Après 100 bougies, tu obtiens un débriefing. Essaie ces expériences :</p>
<ul>
<li>Active la moyenne de 20 bougies et ne trade que dans la direction qu’elle indique.</li>
<li>Trade avec et sans objectif de profit. Lequel donne des résultats plus réguliers ?</li>
<li>Essaie 2 % de risque par trade, puis 0,5 %. Compare ton drawdown.</li>
<li>Clique sur <b>Nouveau marché</b> et vois si ton résultat se répète.</li>
</ul>
${B.w('papertrade')}

${B.warn('<p>Les simulateurs sont plus faciles que la vraie vie : pas de vraie peur, exécutions parfaites, pas de slippage. Considère les résultats en papier comme un test minimal de tes règles, pas une preuve de profit futur.</p>')}

<h3>Quand as-tu « réussi » ?</h3>
<ul>
<li>Au moins <b>100 trades</b> consignés dans ton journal avec les mêmes règles.</li>
<li>Une espérance positive après coûts.</li>
<li>Tu as suivi ton plan sur au moins 90 % des trades.</li>
<li>Un drawdown maximal que tu pourrais supporter émotionnellement avec de l’argent réel.</li>
</ul>

<h3>La transition vers le réel</h3>
<ol>
<li>Commence avec <b>10 % de la taille prévue</b>. L’argent réel change le comportement même quand il est petit.</li>
<li>Fais encore 100 trades réels à cette taille minuscule.</li>
<li>Augmente lentement (par exemple +25 % après avoir atteint des objectifs de performance et de discipline), et diminue après des drawdowns.</li>
<li>Retire régulièrement une partie des profits pour que les gains deviennent réels.</li>
</ol>

<h3>Ton modèle de plan de trading</h3>
<p>Copie ceci dans un document et remplis-le. Un plan écrit est ta constitution.</p>
${B.tbl(['Section', 'Quoi écrire'], [
        ['Objectif', 'Que vises-tu dans 12 mois ? (Compétence, régularité, revenu)'],
        ['Marchés et horaires', 'Quels instruments ? Quelles heures ? Quand ne trades-tu pas ?'],
        ['Stratégie', 'Setups avec des règles exactes d’entrée, de stop et d’objectif'],
        ['Règles de risque', 'Risque par trade, limite quotidienne, limite hebdomadaire, risque ouvert maximal'],
        ['Routine', 'Préparation avant l’ouverture, gestion des trades, revue de fin de journée'],
        ['Règles de psychologie', 'Nombre maximal de trades, règle des trois coups, pauses'],
        ['Calendrier de revue', 'Revue hebdomadaire du journal ; performance mensuelle et changements de règles'],
        ['Règle d’arrêt / de pause', 'À quel drawdown (par exemple -10 %) t’arrêtes-tu et révises-tu avant de continuer ?']
      ])}

${B.ex('<p>Sara trade avec un plan à 0,5 % de risque par trade et une règle de pause à -8 %. Le deuxième mois, elle atteint -8 %. Elle s’arrête, relit son journal et découvre que 70 % de ses pertes venaient du non-respect de sa règle « aucun trade dans les 5 premières minutes ». Elle corrige et reprend à moitié taille. Une règle de pause a transformé une mauvaise passe en leçon.</p>')}

<h3>Aller plus loin</h3>
<p>Si tu veux une structure guidée, un programme prêt à l’emploi et un robot de trading pour t’aider à appliquer les règles avec constance, le créateur de ce cours propose un produit payant optionnel appelé <b>Trading Lab</b>. Il n’est pas obligatoire : ce parcours gratuit couvre l’essentiel. Consulte la <a href="#lab">page Trading Lab</a> pour les détails et, comme toujours, rappelle-toi qu’aucun cours ni outil ne peut supprimer le risque de marché ni garantir des profits.</p>

${B.take(['Fais au moins 100 trades en paper trading avec des règles fixes avant de risquer de l’argent réel.', 'Commence en réel à environ 10 % de la taille prévue et augmente lentement.', 'Écris un plan avec des règles de risque, des routines et une règle de pause.', 'Les simulateurs sont plus tendres que la réalité ; utilise-les comme test minimal.'])}`,
      q: [
        ['Combien de trades faut-il viser en paper trading avant de passer en réel ?', ['3', '10', '100 ou plus', 'Cela n’a pas d’importance'], 2, 'Il faut un échantillon plus large pour voir si ton avantage est réel ou simple chance.'],
        ['Quelle est une façon sensée de commencer le trading réel ?', ['À taille complète immédiatement', 'Avec environ 10 % de la taille prévue', 'Avec de l’argent emprunté', 'Avec un levier maximal'], 1, 'L’argent réel change les émotions, donc commence petit pour apprendre en sécurité.'],
        ['Que fait une « règle de pause » ?', ['Elle t’oblige à trader plus', 'Elle te fait t’arrêter et réviser quand tu atteins un drawdown fixé', 'Elle supprime les stop-loss', 'Elle garantit la récupération'], 1, 'Elle protège le capital et force la réflexion avant que les problèmes ne s’aggravent.']
      ]
    }
  ]);
})();
