/* Parcours Trader crypto : 8 leçons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ct', [
    {
      id: 'd1', m: 12, t: 'Trading crypto 101 : marchés 24h/24, spot et dérivés',
      hook: 'En quoi les marchés crypto diffèrent des actions, et les principaux produits utilisés par les traders.',
      body: `
<p>Le trading crypto partage la logique de tout trading (graphiques, risque, psychologie), mais avec sa propre saveur : le marché ne ferme jamais, la volatilité est plus forte, les produits sont plus exotiques et les règles varient selon les pays. Avant d'apprendre des tactiques, comprends le terrain de jeu.</p>

<h3>Qu'est-ce qui est différent sur les marchés crypto ?</h3>
<ul>
<li><b>24h/24, 7j/7, 365 jours</b> : pas de cloche d'ouverture, pas de week-end. De gros mouvements peuvent survenir à 3 h du matin pendant que tu dors.</li>
<li><b>Forte volatilité</b> : des variations quotidiennes de 3 à 10 % sont normales pour beaucoup de coins. Opportunité et danger à la fois.</li>
<li><b>Places de marché fragmentées</b> : des centaines de plateformes, chacune avec ses prix, sa liquidité, ses frais et ses risques.</li>
<li><b>Régulation plus légère</b> : les protections sont plus faibles et le risque de manipulation (pump and dump, wash trading) est plus élevé, surtout sur les petits coins.</li>
<li><b>Sentiment auto-entretenu</b> : réseaux sociaux, baleines et effet de levier créent des mouvements rapides et émotionnels.</li>
</ul>

<h3>Les principaux produits</h3>
${B.tbl(['Produit', 'Ce que c\'est', 'Levier', 'Risque'], [
        ['Spot', 'Tu achètes et tu possèdes le coin réel', 'Aucun', 'Risque de prix uniquement. Idéal pour les débutants'],
        ['Trading sur marge', 'Tu empruntes pour acheter plus que ce que tu possèdes', 'Faible à élevé', 'Pertes amplifiées ; intérêts payés sur les prêts'],
        ['Futures (à échéance)', 'Contrat d\'achat ou de vente à une date future', 'Jusqu\'à 100x ou plus', 'La liquidation peut effacer ta marge'],
        ['Futures perpétuels', 'Futures sans expiration, maintenus près du prix spot par des paiements de funding', 'Jusqu\'à 100x ou plus', 'Coûts de funding + liquidation + risque de la plateforme'],
        ['Options', 'Droits d\'acheter ou de vendre à un prix fixé', 'Intégré', 'Complexes ; peuvent expirer sans valeur']
      ])}
<p>L'accès diffère selon les pays. De nombreux régulateurs restreignent ou interdisent les dérivés aux clients particuliers, et les plateformes peuvent limiter le levier dans certaines régions. Respecte toujours les règles locales et les conditions d'un prestataire régulé.</p>

<h3>Comment les plateformes gagnent de l'argent : les frais</h3>
<ul>
<li><b>Maker</b> : tu places un ordre à cours limité qui attend dans le carnet d'ordres et apporte de la liquidité. Frais généralement plus bas.</li>
<li><b>Taker</b> : tu prends immédiatement un ordre existant (ordre au marché). Frais plus élevés.</li>
<li>Des frais de 0,02 % à 0,1 % par transaction paraissent petits mais s'accumulent pour les traders actifs.</li>
</ul>

<h3>Sessions et liquidité</h3>
<p>Même si le marché ne s'arrête jamais, l'activité suit les fuseaux horaires humains. Le volume est généralement le plus fort quand l'Europe et les États-Unis se chevauchent, et plus faible le week-end, quand les prix peuvent bouger brutalement sur une liquidité mince. Les traders évitent souvent de passer de gros ordres aux heures de faible liquidité.</p>

<h3>Paires et devises de base</h3>
<p>Les paires s'écrivent comme BTC/USDT : la première est ce que tu achètes ou vends, la seconde ce avec quoi tu paies. Les paires en stablecoins (USDT, USDC) sont les plus liquides. Savoir dans quelle devise ton profit est mesuré compte : un trade peut être « en hausse en USDT » alors que le coin que tu détiens a baissé face au Bitcoin.</p>

${B.ex('<p>Dimanche, 4 h du matin. Sam détient une position à effet de levier et dort. Une nouvelle soudaine tombe, la liquidité est faible et le prix grimpe de 8 % contre lui en quelques minutes. Il n\'avait pas posé de stop. Il se réveille avec une liquidation. Sur les marchés traditionnels, les heures de fermeture l\'auraient protégé ; en crypto, la gestion du risque doit fonctionner pendant que tu dors (stops, taille réduite, pas de levier la nuit).</p>')}

${B.warn('<p>Les dérivés sont réservés aux traders expérimentés. Si tu débutes, commence par le trading spot en petite taille, et lis les prochaines leçons sur le levier avant de toucher aux futures.</p>')}

${B.take(['La crypto se négocie 24h/24 avec une forte volatilité et des protections plus faibles.', 'Spot signifie posséder le coin ; les futures perpétuels ajoutent levier, funding et risque de liquidation.', 'Les ordres maker apportent de la liquidité (frais plus bas), les ordres taker en retirent (frais plus élevés).', 'Les contrôles de risque doivent fonctionner pendant que tu dors : stops, petite taille, pas de levier imprudent la nuit.'])}`,
      q: [
        ['Quelle est la différence essentielle entre le spot et les futures perpétuels ?', ['Le spot consiste à posséder le coin ; les perpétuels sont des contrats à effet de levier avec funding et liquidation', 'Il n\'y en a aucune', 'Le spot a toujours du levier', 'Les perpétuels sont plus sûrs'], 0, 'Les futures perpétuels sont des dérivés avec levier et coûts de funding.'],
        ['Quel type d\'ordre paie généralement les frais les plus bas ?', ['Ordre taker (au marché)', 'Ordre maker (à cours limité) qui apporte de la liquidité', 'Les deux sont toujours égaux', 'Ordre stop'], 1, 'Les makers apportent de la liquidité au carnet d\'ordres et sont généralement récompensés par des frais plus bas.'],
        ['Pourquoi la gestion du risque est-elle plus difficile en crypto que sur le marché actions ?', ['Les marchés ferment trop souvent', 'Le marché ne ferme jamais, donc de gros mouvements peuvent survenir pendant ton absence', 'Les frais sont fixes', 'Il n\'y a pas de volatilité'], 1, 'Un marché ouvert en continu exige que tes protections soient en place en permanence.']
      ]
    },
    {
      id: 'd2', m: 14, t: 'Levier et liquidation : comment les comptes sont effacés',
      hook: 'La calculatrice que tout trader crypto devrait utiliser avant chaque trade à effet de levier.',
      body: `
<p>Le levier te permet de contrôler une position plus grande que ton argent. C'est la fonction qui attire la plupart des débutants et en détruit la plupart. Comprendre la liquidation n'est pas optionnel.</p>

<h3>Comment fonctionne le levier</h3>
<p>Si tu mets 500 € (ta <b>marge</b>) et utilises un levier 10x, tu contrôles une position de 5 000 €. Un mouvement de 1 % du prix modifie ton compte de 10 %. Un mouvement de 10 % contre toi efface tes 500 €.</p>
<ul>
<li><b>Marge</b> : la garantie que tu déposes.</li>
<li><b>Marge de maintenance</b> : la garantie minimale exigée par la plateforme pour garder ta position ouverte.</li>
<li><b>Liquidation</b> : quand les pertes font passer ta marge sous la maintenance, la plateforme ferme de force ta position. Tu perds la marge, parfois des frais et des coûts supplémentaires.</li>
<li><b>Marge isolée</b> : seule la marge attribuée à ce trade est en jeu. <b>Marge croisée</b> : tout le solde de ton compte soutient le trade, donc une mauvaise position peut tout vider.</li>
</ul>

<h3>La formule simple de liquidation (approximation)</h3>
<p>Pour une position longue en marge isolée : <b>prix de liquidation ≈ entrée × (1 − 1/levier + taux de marge de maintenance)</b>. Pour une position courte, c'est le miroir au-dessus de l'entrée. À 10x, tu es liquidé après un mouvement d'environ 9,5 % contre toi. À 50x, après environ 1,5 %. À 100x, après environ 0,5 %, soit moins qu'une oscillation normale pendant une pause café sur un coin volatil.</p>

<h3>Essaie par toi-même</h3>
<p>Choisis le levier et vois la distance jusqu'à la liquidation par rapport au mouvement quotidien typique de l'actif.</p>
${B.w('liq')}

<h3>Pourquoi un levier élevé est un piège</h3>
<ul>
<li><b>Le bruit te tue</b> : le prix fait constamment de petites oscillations et des mèches. Des niveaux de liquidation serrés sont touchés par le bruit, pas par la « vraie tendance ».</li>
<li><b>Tu ne peux pas te tromper, même un peu</b> : un levier élevé exige un timing parfait.</li>
<li><b>Cascades de liquidations</b> : quand le prix bouge, les liquidations forcées déclenchent davantage de ventes (ou d'achats), ce qui pousse le prix plus loin et liquide d'autres traders. Lors de plusieurs krachs, des milliards de dollars de positions à effet de levier ont été liquidés en une seule journée.</li>
<li><b>Frais et funding</b> sont prélevés sur la taille totale de la position, donc les coûts augmentent avec le levier.</li>
<li><b>Auto-désendettement et slippage</b> : lors de mouvements extrêmes, les plateformes peuvent fermer des positions gagnantes ou exécuter ton stop loin de l'endroit où tu l'avais placé.</li>
</ul>

<h3>La vision professionnelle du levier</h3>
<p>Les professionnels ne voient pas le levier comme un moyen de s'enrichir vite. Ils le traitent comme un outil d'<b>efficacité du capital</b> : ils n'utilisent que ce qu'il faut pour déposer la marge d'une position dimensionnée selon le risque. Ils décident de la taille de la position à partir de la distance du stop (voir la leçon sur le risque), et le levier est simplement ce qui en résulte, généralement faible (1x à 3x). L'état d'esprit clé : ton <i>risque</i> est la distance du stop multipliée par ta taille, pas le chiffre du levier.</p>
${B.ex('<p>Deux traders achètent à 100 avec un stop à 97 et veulent risquer 50 €. Les deux achètent la même taille : 1 667 € de valeur. Le trader A dépose une marge de 1 667 € (1x). Le trader B dépose 167 € (10x). Si le stop à 97 fonctionne, les deux perdent les mêmes 50 €. Imagine maintenant que le stop a été oublié ou déplacé et qu\'un pic fasse chuter le prix à 90 avant un rebond. Le trader A (1x) est toujours dans le trade avec une désagréable perte latente. Le trader B (10x) a été liquidé près de 90,5 et a perdu ses 167 € de marge ; le rebond ne lui sert à rien. Le chiffre du levier n\'a changé que la marge de manœuvre avant le désastre.</p>')}

${B.key('<p><b>Règles pour un levier plus sûr :</b> utilise la marge isolée, place toujours un stop-loss bien en deçà du prix de liquidation, dimensionne le trade selon le risque (pas selon le levier), et garde un levier assez bas pour que la liquidation soit à plusieurs fois un mouvement quotidien typique.</p>')}

${B.warn('<p>Les plateformes profitent des liquidations et des frais. Les réseaux sociaux récompensent les captures d\'écran de gros gains à effet de levier et cachent les comptes effacés. Rappelle-toi que les survivants que tu vois forment un échantillon minuscule et auto-sélectionné.</p>')}

${B.take(['Le levier multiplie gains et pertes ; la liquidation emporte toute ta marge.', 'La marge isolée limite les dégâts à un seul trade ; la marge croisée peut vider ton compte.', 'Le prix de liquidation dépend du levier ; à 50x ou 100x, le bruit normal suffit à te liquider.', 'Dimensionne les trades selon la distance du stop et le pourcentage de risque ; garde un levier bas et des stops en deçà de la liquidation.'])}`,
      q: [
        ['Avec un levier 20x sur une position longue, de combien environ le prix doit-il bouger contre toi pour te liquider ?', ['Environ 20 %', 'Environ 4,5 %', 'Environ 0,5 %', 'Environ 50 %'], 1, '1/20 = 5 %, moins une petite marge de maintenance, soit environ 4,5 %.'],
        ['Quel mode de marge expose tout ton compte sur une seule position ?', ['Marge isolée', 'Marge croisée', 'Trading spot', 'Ordres à cours limité'], 1, 'La marge croisée utilise ton solde total comme garantie des positions ouvertes.'],
        ['Quel est l\'état d\'esprit professionnel face au levier ?', ['Toujours le maximiser', 'Dimensionner selon le risque et la distance du stop ; le levier n\'est qu\'un sous-produit et reste bas', 'Ne jamais utiliser de stops', 'L\'utiliser pour récupérer des pertes'], 1, 'Le risque est la distance du stop fois la taille, et un levier élevé ne laisse aucune marge d\'erreur.']
      ]
    },
    {
      id: 'd3', m: 13, t: 'Lire le marché crypto : volume, open interest, funding et sentiment',
      hook: 'Au-delà du graphique de prix : les signaux propres à la crypto, ce que chacun dit et comment les traders les utilisent mal.',
      body: `
<p>La crypto offre des données que les marchés traditionnels cachent : tu peux voir le positionnement à effet de levier, les flux des plateformes et le sentiment quasiment en temps réel. Ces outils te disent <b>qui est entassé où</b>, ce qui est utile car les trades surchargés finissent souvent écrasés.</p>

<h3>Prix, volume et open interest</h3>
<p>L'<b>open interest (OI)</b> est la valeur totale des contrats futures encore ouverts. Combiné au prix, il donne des indices :</p>
${B.tbl(['Prix', 'Open interest', 'Lecture typique'], [
        ['En hausse', 'En hausse', 'De l\'argent frais entre dans les longs ; la tendance a du carburant (mais vérifie la surcharge)'],
        ['En hausse', 'En baisse', 'Des positions courtes se ferment (short squeeze) ; la hausse peut être plus faible'],
        ['En baisse', 'En hausse', 'De nouveaux shorts s\'accumulent ; la baisse a de l\'élan'],
        ['En baisse', 'En baisse', 'Les longs abandonnent (liquidations) ; la vente approche peut-être de l\'épuisement']
      ])}

<h3>Taux de funding : le thermomètre de la foule</h3>
<p>Les futures perpétuels utilisent des <b>paiements de funding</b> entre longs et shorts pour garder le prix du contrat proche du spot. Quand le taux est positif, les longs paient les shorts. Un taux positif très élevé signifie que beaucoup de traders penchent à l'achat, et c'est aussi coûteux à tenir. Les extrêmes surviennent souvent près de sommets locaux, car une foule avec le même trade n'a plus personne à qui vendre. Un funding extrêmement négatif peut précéder des short squeezes. Calcule ce que le funding te coûte :</p>
${B.w('funding')}

<h3>Cartes et heatmaps de liquidation</h3>
<p>Certains services de données estiment où seraient liquidés des amas de positions à effet de levier. Le prix est souvent « attiré » vers ces zones parce que les ordres forcés créent de la liquidité. Considère-les comme des indices, pas des garanties. Les estimations peuvent être fausses.</p>

<h3>Indicateurs de sentiment</h3>
<ul>
<li><b>Indice de peur et d'avidité</b> : combine volatilité, momentum, réseaux sociaux et d'autres éléments en un score de 0 à 100. L'avidité extrême peut avertir d'une surchauffe ; la peur extrême peut signaler une capitulation. C'est une jauge contrariante, pas un outil de timing.</li>
<li><b>Ratio long/short</b> : part des comptes positionnés à l'achat plutôt qu'à la vente sur une plateforme. Les écarts entre plateformes et entre « comptes » et « positions » le rendent bruité.</li>
<li><b>Buzz social</b> : quand ton chauffeur de taxi parle d'un coin, le mouvement est probablement déjà tardif.</li>
</ul>

<h3>Signaux de structure du marché</h3>
<ul>
<li><b>Dominance du Bitcoin</b> : la part du Bitcoin dans la capitalisation totale de la crypto. Une dominance en hausse signifie souvent que l'argent se réfugie dans le BTC ; en baisse, elle peut accompagner des « saisons des altcoins ». Les altcoins suivent généralement le Bitcoin mais avec de plus grandes oscillations (« bêta » plus élevé).</li>
<li><b>Offre et flux de stablecoins</b> : une offre de stablecoins croissante sur les plateformes peut signaler du pouvoir d'achat ; décroissante, une sortie.</li>
<li><b>Entrées et sorties des plateformes</b> : des coins qui arrivent sur les plateformes peuvent précéder des ventes ; ceux qui en sortent peuvent signaler une conservation.</li>
<li><b>Flux des ETF</b> : là où existent des fonds régulés de Bitcoin et d'Ethereum, les entrées et sorties quotidiennes influencent le marché.</li>
</ul>

<h3>Le monde extérieur</h3>
<p>La crypto ne vit pas en vase clos. Les décisions de taux d'intérêt, les chiffres d'inflation, le dollar, le sentiment boursier et les actualités réglementaires la font souvent bouger. Tiens un calendrier des événements clés et des dates de déblocage de tokens, et réduis le risque autour d'eux.</p>

${B.ex('<p>Le Bitcoin a progressé toute une semaine. L\'open interest est à un record, le funding est extrêmement positif et l\'indice de peur et d\'avidité affiche « Avidité extrême ». Rien ne garantit une chute, mais la position est surchargée : un repli modeste peut déclencher une chaîne de liquidations de longs. Un trader qui voit cela peut prendre ses profits sur une partie d\'un long, éviter de courir après le prix ou attendre un repli pour entrer.</p>')}

${B.warn('<p>Les indicateurs décrivent la foule, ils ne la prédisent pas. « Surchauffé » peut le rester des semaines. Combine-les toujours avec la structure de prix et un stop-loss.</p>')}

${B.take(['L\'open interest plus la direction du prix montre si les tendances ont du carburant neuf.', 'Les taux de funding révèlent les trades surchargés et coûtent de l\'argent à tenir.', 'Les jauges de sentiment sont des indices contrariants aux extrêmes, pas des outils de timing exacts.', 'Les altcoins sont des versions à bêta plus élevé du Bitcoin ; surveille la dominance et les événements macro.'])}`,
      q: [
        ['Un prix en hausse avec un open interest en baisse suggère…', ['De nouveaux longs qui entrent fortement', 'Des shorts qui se ferment (un squeeze), donc la hausse peut être plus faible', 'Un sommet garanti', 'Un problème de stablecoin'], 1, 'Un OI en baisse pendant une hausse signifie souvent des rachats de shorts plutôt que de nouveaux achats.'],
        ['Un taux de funding très fortement positif signifie…', ['Les shorts paient les longs', 'Les longs paient les shorts et le marché est surchargé à l\'achat', 'La plateforme est en panne', 'Les prix spot sont nuls'], 1, 'Un funding positif signifie que les longs paient les shorts, ce qui montre un fort positionnement acheteur.'],
        ['Comment utiliser l\'indice de peur et d\'avidité ?', ['Comme signal exact d\'achat/vente', 'Comme indice contrariant aux extrêmes, combiné à d\'autres analyses', 'Jamais', 'Pour fixer le levier'], 1, 'Il reflète l\'humeur de la foule et peut rester extrême très longtemps.']
      ]
    },
    {
      id: 'd4', m: 14, t: 'Stratégies de trading crypto',
      hook: 'Trades de tendance, de repli, de range, de cassure et d\'événements adaptés à la crypto, avec un trade complet calculé pas à pas.',
      body: `
<p>Les idées centrales du parcours Day Trader (tendance, niveaux, cassures, ranges) s'appliquent aussi aux graphiques crypto, avec quelques ajustements : mouvements plus grands, trading 24h/24 et données supplémentaires comme le funding et l'open interest. Voici les principaux styles.</p>

<h3>1. Suivi de tendance sur des unités de temps plus longues</h3>
<p>Utilise le graphique 4 heures ou journalier. Entre quand le prix casse vers de nouveaux plus hauts avec un volume croissant et au-dessus d'une moyenne mobile ascendante (par exemple l'EMA 50). Place le stop sous le dernier plus bas plus haut et fais-le suivre. Moins de trades, moins de frais, moins de temps d'écran, et cela convient à ceux qui travaillent. Cela souffre aussi en période de marché haché.</p>

<h3>2. Entrées sur repli</h3>
<p>Dans une tendance haussière, attends une baisse vers une moyenne mobile ou une résistance passée devenue support, plus des signes que les vendeurs s'essoufflent (volume plus faible, mèche de rejet). Entrée sur la bougie de retournement, stop sous le plus bas du repli. Améliore le ratio gain/risque par rapport à la poursuite des cassures.</p>

<h3>3. Trading de range</h3>
<p>Les marchés latéraux sont fréquents en crypto. Définis une zone claire de support et de résistance, achète près du bas, vends près du haut et sors si le prix clôture hors du range. Combine avec des signaux de retour à la moyenne comme les extrêmes de funding.</p>

<h3>4. Cassure et retest</h3>
<p>Le prix se comprime (un range qui se resserre ou une volatilité qui baisse) puis casse. Les fausses cassures sont nombreuses : attends donc une clôture de bougie au-delà du niveau, puis idéalement un <b>retest</b> qui tient avant d'entrer, avec un stop juste à l'intérieur de l'ancien range.</p>

<h3>5. Funding et contre-pied de la foule</h3>
<p>Quand le funding et l'open interest sont extrêmes et que le prix cale, certains traders prennent le contre-pied de la foule (petite position à contre-tendance ou réduction des longs). C'est avancé et dangereux sans stops stricts, car les trades surchargés peuvent continuer.</p>

<h3>6. Trades d'événements et de déblocages</h3>
<p>Les événements programmés (déblocages de tokens, mises à niveau, listings, réunions de banques centrales) créent une volatilité prévisible, mais pas une direction prévisible. Les débutants s'en sortent généralement mieux en réduisant la taille ou en restant à l'écart.</p>

<h3>7. Bots et grilles</h3>
<p>Les stratégies automatisées comme les grid bots placent une échelle d'ordres d'achat et de vente dans un range. Elles peuvent fonctionner en marché latéral mais perdent dans les fortes tendances. Nous traitons l'automatisation dans la leçon 6.</p>

<h3>Un trade complet en exemple (pas à pas)</h3>
<p>Imagine un coin qui s'échange à <b>100,00</b>. La tendance journalière est haussière. Le prix est revenu sur un ancien niveau de cassure à 96 et a formé une bougie haussière. Tu as <b>5 000 €</b> et ta règle est de risquer <b>1 % (50 €)</b> par trade.</p>
<ol>
<li>Entrée : 97,00 (au-dessus du plus haut de la bougie haussière).</li>
<li>Stop : 94,00, sous le plus bas du repli (à 3,00 de l'entrée).</li>
<li>Taille de position = 50 € ÷ 3,00 = <b>16,67 unités</b> (position d'environ 1 617 €, soit 0,32x de ton compte).</li>
<li>Objectif : le plus haut récent à 106 (à 9,00), un ratio gain/risque de <b>3:1</b>.</li>
<li>Si tu as tort, tu perds 50 € (1 %). Si tu as raison, tu gagnes environ 150 € (3 %). Avec un taux de réussite de 40 %, c'est quand même rentable : 0,4×3 − 0,6×1 = +0,6R.</li>
</ol>
<p>Vérifie avec la calculatrice (les chiffres sont préremplis autrement, ajuste-les à cet exemple) :</p>
${B.w('possize')}

<h3>Quel style te convient ?</h3>
${B.tbl(['Ta situation', 'Meilleure option'], [
        ['Emploi à temps plein, peu de temps', 'Suivi de tendance ou replis sur graphiques 4h / journaliers, avec alertes'],
        ['Aime les routines calmes et à règles', 'Trading de range avec niveaux stricts'],
        ['Manque de patience', 'Attention : choisis un style qui limite le nombre de trades par jour'],
        ['Veut trader 24h/24', 'Utilise des bots avec des limites strictes et dors quand même ; évite le levier la nuit']
      ])}

${B.warn('<p>Ne copie pas les signaux de groupes ou d\'influenceurs. Même s\'ils sont honnêtes, tu ne contrôles pas leurs entrées, ils peuvent profiter de tes achats et tu n\'apprends pas le processus. Construis et teste tes propres règles.</p>')}

${B.take(['Les stratégies de tendance et de repli sur unités de temps longues conviennent le mieux à la plupart des gens.', 'Attends une confirmation sur les cassures et préfère les retests.', 'Calcule chaque trade : entrée, stop, taille, objectif et ratio gain/risque avant d\'entrer.', 'Évite les trades d\'événements et le contre-pied de la foule tant que tu n\'as pas un processus éprouvé.'])}`,
      q: [
        ['Dans l\'exemple détaillé, pourquoi la taille de position est-elle de 16,67 unités ?', ['Parce que le levier est 10x', '50 € de risque divisés par une distance de stop de 3,00', 'Parce que le prix est 100', 'Choix aléatoire'], 1, 'Taille de position = montant risqué ÷ (entrée − stop) = 50 ÷ 3.'],
        ['À quoi sert d\'attendre un retest après une cassure ?', ['Éviter les frais', 'Réduire le risque d\'acheter une fausse cassure', 'Garantir un gain', 'Augmenter le levier'], 1, 'Si le prix revient et que le niveau tient, la cassure est plus crédible.'],
        ['Quelle approche convient à un trader qui travaille à temps plein ?', ['Faire du scalping sur graphiques d\'une minute toute la journée', 'Trader en 4h ou en journalier avec alertes et stops fixes', 'Utiliser un levier de 100x', 'Suivre des signaux au hasard'], 1, 'Les unités de temps lentes demandent moins de temps d\'écran et ont des coûts plus faibles.']
      ]
    },
    {
      id: 'd5', m: 13, t: 'Gestion du risque pour des marchés volatils',
      hook: 'Tout ce que contient la leçon de risque du Day Trader, plus les dangers spécifiques de la crypto : stablecoins, plateformes, corrélation et week-ends.',
      body: `
<p>Les règles de base s'appliquent toujours : risquer un petit pourcentage fixe par trade, placer les stops selon la structure, raisonner en R, plafonner les pertes quotidiennes et ne jamais renforcer les positions perdantes. La crypto ajoute plusieurs dangers supplémentaires, adapte-toi donc.</p>

<h3>1. Dimensionne selon la volatilité</h3>
<p>Les actifs crypto diffèrent énormément par l'ampleur de leurs mouvements. Utilise l'<b>ATR</b> (average true range) pour fixer les stops, puis laisse ta règle de risque fixer la taille. Un coin avec une amplitude quotidienne moyenne de 10 % demande un stop plus large, donc une position plus petite qu'un coin à 3 %, si tu veux le même risque en euros.</p>

<h3>2. Corrélation : l'illusion de diversification</h3>
<p>Lors des ventes massives, presque tout chute ensemble : les altcoins baissent souvent plus vite que le Bitcoin. Détenir dix positions longues sur dix altcoins revient en pratique à une seule grosse position longue. Limite ton <b>risque total ouvert</b> (par exemple 3 à 5 % sur l'ensemble des trades) et considère tout le portefeuille, pas chaque trade.</p>

<h3>3. Risque de contrepartie et de plateforme</h3>
<ul>
<li><b>Risque de plateforme</b> : les plateformes peuvent être piratées, restreindre les retraits ou s'effondrer (FTX, 2022). Ne garde pas tous tes fonds sur une seule plateforme. Garde seulement le capital de trading sur les plateformes, retire les profits.</li>
<li><b>Risque de stablecoin</b> : un coin « stable » peut perdre sa parité (UST en 2022 ; USDC brièvement en 2023). Diversifie entre émetteurs et privilégie les plus réputés.</li>
<li><b>Risque de smart contract</b> : les protocoles DeFi peuvent être piratés.</li>
<li><b>Sécurité des clés API</b> : avec des bots, crée des clés avec la seule permission de trading (retraits désactivés), restreins par adresse IP et ne les partage jamais.</li>
</ul>

<h3>4. Risques d'exécution</h3>
<ul>
<li><b>Mèches et chasses aux stops</b> : le prix traverse parfois des niveaux évidents puis revient. Place les stops au-delà du niveau plus une marge de volatilité.</li>
<li><b>Slippage sur marchés fins</b> : les petits coins et les week-ends peuvent exécuter ton ordre loin du prix affiché. Utilise des ordres à cours limité et des tailles plus petites.</li>
<li><b>Indisponibilité de la plateforme</b> : les plateformes peuvent geler pendant la volatilité. Prévois un plan B et évite de dépendre d'un seul lieu.</li>
</ul>

<h3>5. Poids du funding et des frais</h3>
<p>Garder des positions perpétuelles à effet de levier pendant des jours peut accumuler des coûts de funding. Inclus toujours funding et frais dans le calcul du profit attendu, surtout pour les stratégies à petits objectifs.</p>

<h3>6. Retire tes profits</h3>
<p>Des profits laissés à l'écran ne sont pas réels. Adopte une règle comme « retirer 30 % des profits mensuels vers un portefeuille sûr ou un compte bancaire ». Cela protège contre les problèmes de plateforme, réduit l'envie de prendre trop de risques et rend le succès tangible.</p>

<h3>7. Prends les week-ends et le sommeil au sérieux</h3>
<p>Si tu gardes des positions la nuit ou le week-end, assure-toi qu'elles ont des stops, une taille réduite et pas de levier élevé. De nombreuses liquidations surviennent pendant que le trader dort.</p>

${B.ex('<p>Elena a 10 000 € sur une plateforme et détient cinq longs sur des altcoins, chacun risquant 1 %, elle pense donc avoir 5 % de risque total. Une chute généralisée du marché touche les cinq stops en quelques heures : elle perd 5 % en une matinée, pas « 1 % cinq fois différentes ». Elle avait aussi tout son solde sur cette plateforme. Après cela, elle limite le risque total ouvert à 3 %, ne garde que la moitié de son capital sur la plateforme et retire ses profits chaque semaine.</p>')}

${B.w('checklist', { key: 'd5', title: 'Checklist pré-trade pour traders crypto', accent: 'ct', items: 'Les tendances journalière et 4 heures soutiennent ma direction|Mon stop est placé selon la structure plus une marge de volatilité|Ma taille suit mon pourcentage de risque fixe, pas le chiffre du levier|Le risque total ouvert sur tous les trades reste dans ma limite|J\'ai vérifié le taux de funding, l\'open interest et les événements ou déblocages à venir|J\'utilise la marge isolée et mon stop est bien en deçà du prix de liquidation|Je ne garde pas plus de capital sur la plateforme que nécessaire|Je suis calme, reposé et je ne cours pas après un mouvement' })}

${B.take(['Dimensionne selon la volatilité : des stops plus larges signifient des positions plus petites.', 'Les altcoins sont très corrélés, donc ce qui compte, c\'est le risque total ouvert.', 'Réduis le risque de plateforme : répartis les fonds, restreins les clés API et retire les profits.', 'Pense au funding, au slippage, aux week-ends et aux pannes de plateforme dans tes calculs.'])}`,
      q: [
        ['Pourquoi détenir de nombreuses positions en altcoins n\'est-il pas une vraie diversification lors d\'un krach ?', ['Elles tombent toutes à zéro', 'Elles ont tendance à chuter ensemble, souvent plus que le Bitcoin', 'Elles sont régulées', 'Elles paient du funding'], 1, 'La forte corrélation lors des ventes massives fait agir tes positions comme un seul gros pari.'],
        ['Quelle configuration de clé API est la plus sûre pour un bot de trading ?', ['Permission de retrait activée, sans limite d\'IP', 'Permission de trading uniquement, retraits désactivés, IP restreinte', 'Accès complet par commodité', 'Partager la clé avec un ami en secours'], 1, 'Si les clés fuient, un attaquant ne peut pas retirer les fonds.'],
        ['Pourquoi retirer régulièrement ses profits ?', ['Cela augmente le levier', 'Cela protège les gains contre les défaillances de plateforme et rend les profits réels', 'Cela évite les frais', 'C\'est exigé par la loi'], 1, 'Des profits laissés sur une plateforme sont exposés au risque de contrepartie.']
      ]
    },
    {
      id: 'd6', m: 14, t: 'Bots et automatisation : ce qu\'ils peuvent et ne peuvent pas faire',
      hook: 'Les bots exécutent des règles sans relâche. Ils ne créent pas d\'avantage à partir de rien. Apprends à les utiliser et à repérer les arnaques.',
      body: `
<p>Le caractère 24h/24 de la crypto rend l'automatisation séduisante. Un <b>bot de trading</b> est un logiciel qui passe des ordres pour toi selon des règles. Bien utilisé, il apporte discipline et rapidité. Mal utilisé, il automatise les pertes à la vitesse de l'éclair.</p>

<h3>Ce que font vraiment les bots</h3>
<ul>
<li><b>Bots DCA</b> : achètent un montant fixe selon un calendrier. Simples et à faible risque.</li>
<li><b>Grid bots</b> : placent des ordres d'achat et de vente à intervalles fixes dans une fourchette de prix, en récoltant de petites oscillations. Fonctionnent en marché latéral ; perdent dans les fortes tendances et si le prix sort de la fourchette.</li>
<li><b>Bots de suivi de tendance / de signaux</b> : entrent et sortent selon des indicateurs ou des conditions (croisements de moyennes mobiles, cassures).</li>
<li><b>Bots d'arbitrage</b> : exploitent les écarts de prix entre places de marché. Exigent rapidité, capital et infrastructure ; les marges sont minces.</li>
<li><b>Bots de market making</b> : cotent prix d'achat et de vente pour gagner le spread. Territoire professionnel.</li>
<li><b>Copy trading</b> : reproduit automatiquement les positions d'un autre trader. Tu hérites de son risque et de ses frais, et les résultats passés ne sont pas une promesse.</li>
</ul>

<h3>Ce qu'un bot t'apporte</h3>
<ol>
<li><b>Discipline</b> : pas de peur, pas de FOMO, pas de trades de revanche. Il suit les règles.</li>
<li><b>Couverture</b> : il travaille pendant que tu dors.</li>
<li><b>Rapidité et constance</b> : exécution précise et journalisation de chaque trade.</li>
<li><b>Testabilité</b> : des règles écrites en code peuvent être backtestées sur l'historique.</li>
</ol>

<h3>Ce qu'un bot ne peut pas faire</h3>
<ul>
<li><b>Il ne crée pas d'avantage.</b> Une mauvaise stratégie tourne à la perfection... droit vers les pertes.</li>
<li><b>Il ne supprime pas le risque.</b> Les marchés peuvent changer de régime, les plateformes peuvent défaillir, des bugs peuvent survenir.</li>
<li><b>Il ne peut pas prédire l'avenir.</b> La performance passée d'un backtest n'est pas une promesse.</li>
<li><b>Il ne remplace pas ta responsabilité</b> de surveiller les limites de risque.</li>
</ul>

<h3>Comment évaluer un bot (ou une stratégie vendue avec un bot)</h3>
${B.tbl(['Question', 'Bon signe', 'Signal d\'alerte'], [
        ['Les règles sont-elles expliquées ?', 'Une logique claire que tu comprends', 'Un « algorithme secret » sans explication'],
        ['Y a-t-il des preuves ?', 'Backtests avec coûts + résultats en forward/réel, drawdowns affichés', 'Captures d\'écran, mois choisis à la carte, « 100 % de réussite »'],
        ['Quelles sont les promesses ?', 'Honnête sur le risque et les périodes de pertes', '« Profits garantis », « revenu passif », pression pour agir tout de suite'],
        ['Gestion de l\'argent', 'Les fonds restent sur ton compte de plateforme ; clés API de trading uniquement', 'Te demande de déposer dans leur portefeuille ou plateforme'],
        ['Contrôle', 'Tu peux mettre en pause, fixer des limites et voir chaque trade', 'Pas de contrôles d\'arrêt ni de transparence']
      ])}

<h3>Pièges du backtesting (encore, car ils comptent)</h3>
<ul>
<li><b>Surajustement (overfitting)</b> : régler les paramètres jusqu'à ce que le passé paraisse parfait.</li>
<li><b>Ignorer les coûts</b> : frais, funding et slippage peuvent transformer un backtest d'apparence rentable en perdant.</li>
<li><b>Biais d’anticipation (look-ahead)</b> : utiliser par erreur des informations du futur dans les règles.</li>
<li><b>Biais du survivant</b> : tester seulement les coins qui existent encore.</li>
<li><b>Changement de régime</b> : une règle qui marchait en 2021 peut échouer sur un marché calme.</li>
</ul>
<p>Utilise le <b>walk-forward testing</b> (concevoir sur une période, tester sur la suivante), puis le paper trading, puis passe en réel avec une taille minuscule et un kill switch (un drawdown maximal qui arrête automatiquement le bot).</p>

${B.ex('<p>Un grid bot est réglé entre 90 et 110 sur un coin à 100 et engrange de petits profits sur un marché calme pendant des semaines. Puis une mauvaise nouvelle tombe, le prix glisse à 70 et y reste. Le bot a acheté tout au long de la descente et détient maintenant une grosse perte, sans stop. Un humain avec un plan aurait défini une perte maximale et serait sorti. Le bot a fait exactement ce qu\'on lui a dit. C\'est pourquoi l\'automatisation a besoin de limites de risque intégrées.</p>')}

${B.warn('<p>Le marché des « bots de trading » regorge d\'arnaques : des bots qui promettent 2 % de rendement quotidien, exigent des dépôts sur la plateforme du vendeur ou te paient pour recruter d\'autres personnes. Si un rendement est garanti, ce n\'est pas du trading. C\'est un piège.</p>')}

<h3>Optionnel : un programme structuré avec un bot</h3>
<p>Le créateur de ce cours propose aussi <b>Trading Lab</b>, un programme payant optionnel qui comprend un bot de trading conçu pour aider les traders à appliquer leurs règles avec plus de constance. Ce n'est qu'un outil possible, ni une obligation ni une garantie de résultats. Les détails sont sur la <a href="#lab">page Trading Lab</a>. Quoi que tu utilises, applique la checklist de cette leçon : comprends les règles, teste en petite taille, garde des permissions API de trading uniquement et fixe une perte maximale.</p>

${B.take(['Les bots exécutent des règles ; ils ne créent pas d\'avantage et ne suppriment pas le risque.', 'Méfie-toi des promesses de profits garantis, des algorithmes secrets et des demandes de dépôt sur la plateforme de quelqu\'un d\'autre.', 'Backteste avec les coûts, évite le surajustement, teste en forward, puis commence minuscule avec un kill switch.', 'Utilise des clés API de trading uniquement et restreintes par IP, et garde le contrôle de tes fonds.'])}`,
      q: [
        ['Que peut fournir de façon fiable un bot de trading ?', ['Des profits garantis', 'De la discipline et une exécution constante de tes règles', 'Des informations privilégiées', 'Un risque nul'], 1, 'Les bots suppriment l\'émotion et travaillent en continu, mais ils valent ce que valent les règles.'],
        ['Un vendeur promet 2 % de rendement quotidien avec son bot et te demande de déposer sur sa plateforme. C\'est…', ['Une belle opportunité', 'Un schéma d\'arnaque classique', 'Une pratique standard du secteur', 'Un produit exonéré d\'impôt'], 1, 'Des rendements élevés garantis et des dépôts sur la plateforme du vendeur sont de grands signaux d\'alerte.'],
        ['Quelle étape suit directement le backtest responsable d\'une stratégie ?', ['Passer en réel avec le levier maximal', 'Un test forward ou du paper trading, puis une très petite taille réelle', 'La vendre', 'Ignorer les coûts'], 1, 'Les tests hors échantillon et en réel à taille minuscule révèlent les problèmes que les backtests cachent.']
      ]
    },
    {
      id: 'd7', m: 11, t: 'Psychologie des marchés 24h/24',
      hook: 'Quand le marché ne dort jamais, le FOMO et l\'anxiété non plus. Mets en place des règles pour ne pas t\'épuiser ni exploser ton compte.',
      body: `
<p>La crypto a toutes les émotions habituelles du trading, plus quelques-unes propres, créées par la disponibilité permanente, les mouvements extrêmes et le battage des réseaux sociaux.</p>

<h3>Pièges psychologiques propres à la crypto</h3>
<ul>
<li><b>FOMO sur les pumps</b> : un coin grimpe de 40 % en un jour et tout le monde en parle. Entrer tard revient généralement à acheter le sommet.</li>
<li><b>Euphorie du « number go up »</b> : après une hausse, se sentir invincible mène à de plus grosses tailles et des règles relâchées.</li>
<li><b>Capitulation</b> : tout vendre au plus bas après des semaines de souffrance.</li>
<li><b>Revanche et sur-levier</b> : essayer de récupérer une perte avec un pari plus gros et à effet de levier.</li>
<li><b>Addiction à l'écran et burn-out</b> : regarder les graphiques à 3 h du matin, alertes constantes, mauvais sommeil.</li>
<li><b>Troupeau des réseaux sociaux</b> : les groupes et salons de discussion amplifient les émotions et répandent de mauvaises informations.</li>
<li><b>État d'esprit de joueur</b> : traiter les trades comme des tours de casino. Le frisson des gains peut devenir le but, à la place du processus.</li>
</ul>

<h3>Règles pour une routine durable</h3>
<ol>
<li><b>Définis des heures de trading.</b> Choisis des plages où tu analyses et où tu trades, et déconnecte en dehors.</li>
<li><b>Utilise des alertes plutôt que de fixer l'écran.</b> Pose des alertes de prix à tes niveaux et laisse le téléphone surveiller.</li>
<li><b>Limite les trades par jour</b> et arrête-toi quand ta limite de perte quotidienne est atteinte.</li>
<li><b>Pas de positions à levier la nuit</b> sauf avec stops et petite taille.</li>
<li><b>Règle des trois échecs</b> : trois pertes d'affilée signifient une pause d'au moins une heure (ou le reste de la journée).</li>
<li><b>Règle du week-end</b> : réduis la taille ou reste à plat si la faible liquidité te rend nerveux.</li>
<li><b>Coupe le bruit.</b> Ne suis plus les comptes de hype. L'alimentation en informations compte.</li>
<li><b>Protège ton sommeil, ton exercice, ta vie sociale.</b> Un trader fatigué tradee comme un impulsif.</li>
<li><b>Sépare l'argent du trading de l'argent de la vie.</b> Moins tu as besoin du résultat, meilleures sont tes décisions.</li>
</ol>

<h3>Le journal comme miroir</h3>
<p>Note chaque trade avec ton état émotionnel. Après 30 à 50 trades, regarde quelles émotions sont corrélées aux pertes (FOMO ? ennui ? trades nocturnes ?). Beaucoup de traders découvrent que quelques comportements précis causent l'essentiel de leurs pertes, et les corriger est l'amélioration la plus rapide possible.</p>
${B.w('journal')}

${B.ex('<p>Noah a remarqué grâce à son journal que ses trades après minuit avaient une moyenne de −0,8R, tandis que ceux de sa plage matinale prévue avaient en moyenne +0,3R. Il a arrêté de trader après 22 h et ses résultats sont passés de négatifs à positifs sans changer de stratégie.</p>')}

${B.tip('<p>Quand tu ressens une forte envie d\'entrer dans un trade, attends 10 minutes et note la raison. Si c\'est « j\'ai peur que ça parte sans moi », passe ton tour. Il y aura toujours un autre setup demain.</p>')}

<h3>Quand faire une pause</h3>
<p>Si le trading affecte ton sommeil, tes relations ou ton travail, si tu mises l'argent du loyer ou si tu te sens incapable de t'arrêter, fais une pause et parle à quelqu'un de confiance. Des services d'aide au jeu pathologique existent dans la plupart des pays, et un trading avec le mauvais état d'esprit peut se comporter comme du jeu.</p>

${B.take(['La crypto ajoute le FOMO sur les pumps, l\'addiction à l\'écran et la tentation 24h/24.', 'Définis des heures de trading, utilise des alertes, limite les trades et respecte les limites de perte.', 'Ton journal révèle quelles émotions et habitudes te coûtent de l\'argent.', 'Si le trading nuit à ta santé ou à tes finances, prends du recul et demande de l\'aide.'])}`,
      q: [
        ['Quelle est une bonne réponse à un pump soudain de 40 % sur un coin que tu ne détiens pas ?', ['Acheter immédiatement avec levier', 'Ne pas courir après ; attendre un setup conforme à tes règles', 'Emprunter de l\'argent pour acheter', 'Demander à un inconnu'], 1, 'Courir après tardivement est une façon courante d\'acheter des sommets.'],
        ['Pourquoi utiliser des alertes de prix ?', ['Pour surveiller l\'écran toute la nuit', 'Pour que ton téléphone surveille tes niveaux et que tu n\'aies pas à fixer les graphiques', 'Pour augmenter le levier', 'Pour suivre des influenceurs'], 1, 'Les alertes réduisent le temps d\'écran et le trading émotionnel.'],
        ['Que signifie la règle des trois échecs ?', ['Seulement trois trades par jour', 'Après trois pertes consécutives, faire une pause', 'Trois fois le levier', 'Arrêter le trading après trois jours'], 1, 'Une pause interrompt une série de décisions émotionnelles.']
      ]
    },
    {
      id: 'd8', m: 12, t: 'Ton plan de trading crypto et la checklist de diplôme',
      hook: 'Rassemble tout : un plan, une échelle de jalons et la règle qui te garde en vie. Puis débloque ton certificat.',
      body: `
<p>Tu as parcouru les marchés, le levier, les signaux, les stratégies, le risque, les bots et la psychologie. La dernière étape est un plan écrit et un chemin de la pratique vers (peut-être) le trading réel, avec des jalons à mériter, pas à présumer.</p>

<h3>Ton modèle de plan de trading crypto</h3>
${B.tbl(['Section', 'Que rédiger'], [
        ['Objectif et capital', 'Pourquoi je trade ; le montant du capital à risque (argent que je peux perdre). Pourcentage maximal de mon patrimoine.'],
        ['Marchés et produits', 'Quels coins et paires ; spot uniquement ou aussi futures ; levier maximal (par exemple 3x)'],
        ['Unités de temps et horaires', 'Graphiques utilisés ; plages de trading ; moments sans trading'],
        ['Setups', 'Deux ou trois setups avec règles exactes d\'entrée, de stop et de sortie'],
        ['Règles de risque', 'Risque par trade (0,5 à 1 %), risque ouvert maximal, limites de perte quotidienne et hebdomadaire, marge isolée uniquement'],
        ['Sécurité des plateformes', 'Fonds répartis entre plateformes ; 2FA ; clés API de trading uniquement ; calendrier de retrait des profits'],
        ['Routine', 'Checklist pré-trade, journal après chaque trade, revue hebdomadaire'],
        ['Règles de psychologie', 'Trois échecs, pas de trades de revanche, règles de sommeil et de pause'],
        ['Règle de pause', 'À un drawdown de, par exemple, 10 à 15 %, arrêter de trader et réexaminer pendant au moins une semaine'],
        ['Impôts et registres', 'Exporter tous les trades, conserver les justificatifs de coûts, comprendre les règles locales']
      ])}

<h3>L'échelle des jalons</h3>
<ol>
<li><b>Niveau 1 : Étude</b>. Termine ce parcours, comprends le risque et la psychologie.</li>
<li><b>Niveau 2 : Papier</b>. Au moins 100 trades simulés avec des règles fixes et un journal. Espérance positive et 90 % de respect du plan.</li>
<li><b>Niveau 3 : Micro réel</b>. Trade à environ 10 % de la taille prévue pendant encore 100 trades. Spot d'abord.</li>
<li><b>Niveau 4 : Constant</b>. Plus de 200 trades réels, résultats positifs après frais, drawdown maîtrisé, règles respectées.</li>
<li><b>Niveau 5 : Monter en puissance prudemment</b>. Augmente la taille par petites étapes, réduis après les drawdowns, retire régulièrement les profits.</li>
</ol>
${B.ex('<p>Kai termine le niveau 2 et constate que ses résultats sur papier étaient positifs, mais qu\'il a enfreint sa règle de stop dans 25 % des trades. Au lieu de passer en réel, il refait du paper trading jusqu\'à ce que le respect du plan dépasse 90 %. Trois semaines plus tard, il démarre le niveau 3 avec 500 € et une règle ferme : pause d\'une semaine à −50 €. Lent, c\'est fluide ; fluide, c\'est rapide.</p>')}

<h3>Quand s'arrêter</h3>
<p>Le trading n'est pas pour tout le monde, et arrêter après un essai honnête est une victoire de discipline, pas un échec. Envisage d'arrêter ou de passer à l'investissement à long terme si tu as atteint ta règle de pause à répétition, si tu n'arrives pas à suivre tes règles après des mois d'efforts, ou si le trading nuit à ta vie. Beaucoup de gens constatent qu'un plan d'investissement diversifié et ennuyeux leur convient bien mieux.</p>

${B.w('checklist', { key: 'd8', title: 'Checklist de diplôme', accent: 'ct', items: 'J\'ai rédigé mon plan de trading complet, y compris les règles de risque et une règle de pause|J\'ai réalisé au moins 100 trades sur papier avec un journal|Mes résultats sur papier montrent une espérance positive et 90 % de respect du plan|J\'utilise la marge isolée et je garde un levier bas|Mes comptes de plateforme ont la 2FA, des listes blanches et des clés API de trading uniquement|Je sais exporter mon historique de trades pour les impôts|Je ne trade que de l\'argent que je peux me permettre de perdre' })}

<h3>Aller plus loin (optionnel)</h3>
<p>Si tu veux un programme structuré avec un bot de trading conçu pour aider à appliquer les règles avec constance, le créateur de ce cours propose <b>Trading Lab</b> sur Gumroad (un produit payant optionnel). Ce cours gratuit enseigne déjà les fondamentaux : n'utilise donc Trading Lab que si tu veux une structure supplémentaire, et garde toujours les règles de risque de ce parcours. Aucun programme ni bot ne garantit de profits. Vois la <a href="#lab">page Trading Lab</a>.</p>

${B.key('<p><b>Tu as terminé le parcours Trader crypto.</b> Le but n\'a jamais été de faire de toi un joueur avec de meilleurs graphiques. C\'était de faire de toi un futur professionnel prudent, qui respecte le risque avant tout. Vérifie maintenant ta progression et obtiens ton certificat.</p><p><a class="btn sm" href="#cert">Voir mon certificat</a></p>')}

${B.take(['Rédige un plan complet : capital, produits, setups, règles de risque, sécurité des plateformes, routine et règle de pause.', 'Gravis l\'échelle : étude, papier, micro réel, constant, puis montée en puissance prudente.', 'Arrêter après un essai honnête est une décision légitime et disciplinée.', 'Aucun programme ni bot ne garantit de profit ; tes règles de risque te protègent.'])}`,
      q: [
        ['Que doit déclencher une règle de pause ?', ['Plus de levier', 'Un arrêt du trading et un réexamen après un drawdown défini', 'Supprimer le journal', 'Un risque plus élevé par trade'], 1, 'Elle te protège du tilt et t\'oblige à apprendre.'],
        ['Qu\'est-ce qui vient en premier sur l\'échelle des jalons ?', ['Augmenter la taille des positions', 'Étudier et faire du paper trading', 'Utiliser un levier de 50x', 'Faire du copy trading avec des inconnus'], 1, 'Chaque étape se mérite par des preuves.'],
        ['Quelle affirmation sur les programmes payants et les bots est la plus exacte ?', ['Ils peuvent garantir des profits', 'Ils peuvent apporter de la structure mais ne suppriment pas le risque et ne garantissent pas les résultats', 'Ils remplacent la gestion du risque', 'Ils sont exigés par la loi'], 1, 'Tout outil vaut ce que valent les règles, les tests et la discipline que tu appliques.']
      ]
    }
  ]);
})();
