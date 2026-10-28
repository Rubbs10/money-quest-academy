/* Parcours Investisseur Crypto : 8 leçons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ci', [
    {
      id: 'c1', m: 12, t: 'Qu’est-ce que la crypto ? La blockchain expliquée avec un cahier partagé',
      hook: 'Sans jargon : comment des milliers d’inconnus tiennent un registre honnête, et pourquoi cela a créé un nouveau type de monnaie.',
      body: `
<p>Imagine un cahier qui note qui possède quoi. Dans une banque, c’est la banque qui garde le cahier et tu lui fais confiance. Maintenant, imagine que des milliers de personnes gardent chacune une copie identique du cahier. Chaque nouvelle ligne (« Ana paie 1 pièce à Ben ») est annoncée à tout le monde, vérifiée par le groupe, et seulement ensuite ajoutée à toutes les copies. Pour tricher, il faudrait réécrire en secret la majorité des cahiers en même temps. C’est, en termes simples, une <b>blockchain</b>.</p>

<h3>Idées clés</h3>
<ul>
<li><b>Bloc</b> : une page du cahier contenant un lot de transactions.</li>
<li><b>Chaîne</b> : chaque page inclut une empreinte (un <b>hash</b>) de la page précédente. Modifie une ancienne page et les empreintes de toutes les pages suivantes se brisent, ce qui rend la falsification évidente.</li>
<li><b>Nœuds</b> : les ordinateurs qui détiennent des copies et vérifient les règles.</li>
<li><b>Consensus</b> : la méthode par laquelle le réseau s’accorde sur la page suivante. Avec la <b>preuve de travail</b> (Bitcoin), les mineurs dépensent de l’énergie pour se disputer le droit d’ajouter un bloc. Avec la <b>preuve d’enjeu</b> (Ethereum aujourd’hui), les validateurs immobilisent des pièces comme garantie d’honnêteté.</li>
<li><b>Décentralisation</b> : aucune entreprise ni aucun pays ne contrôle le cahier.</li>
</ul>

<h3>Essaie le test de falsification</h3>
<p>Modifie le texte du bloc 1 et regarde ce qui arrive à la chaîne.</p>
${B.w('chain')}

<h3>Bitcoin : le premier</h3>
<p>En 2008, une personne ou un groupe anonyme appelé Satoshi Nakamoto a publié le livre blanc de Bitcoin, et le réseau a démarré en janvier 2009. Bitcoin a une offre maximale fixe de <b>21 millions de pièces</b>, et le rythme de création de nouvelles pièces est divisé par deux environ tous les quatre ans (le « halving » ; le plus récent date d’avril 2024). Ses partisans l’appellent « l’or numérique » pour sa rareté et parce qu’il échappe au contrôle de tout gouvernement.</p>

<h3>Ethereum et les contrats intelligents</h3>
<p>Ethereum (lancé en 2015) a ajouté les <b>contrats intelligents</b> : de petits programmes qui s’exécutent sur la blockchain et se déclenchent automatiquement, comme un distributeur automatique qui garde l’argent et le libère quand les conditions sont remplies. Cela a permis la finance décentralisée (DeFi), les stablecoins, les NFT et des milliers d’autres applications. En 2022, il est passé à la preuve d’enjeu, réduisant sa consommation d’énergie de plus de 99 %.</p>

<h3>Pourquoi les crypto-actifs ont-ils de la valeur ?</h3>
<p>La valeur vient de ce que les gens croient et utilisent : la rareté (offre limitée), l’utilité (paiements, applications), les effets de réseau (plus d’utilisateurs le rendent plus utile) et la spéculation. Contrairement à une entreprise, la plupart des pièces ne génèrent pas de bénéfices, donc le prix est largement dicté par la demande et le sentiment. C’est pourquoi elles sont si volatiles.</p>

${B.ex('<p>Pense aux premières places de marché en ligne : beaucoup de sites des débuts ont disparu, mais quelques-uns sont devenus des géants et la technologie sous-jacente a changé le monde. La crypto peut être similaire : la technologie peut être réelle alors que la plupart des jetons individuels échouent. Avoir raison sur la technologie ne fait pas de chaque pièce un bon investissement.</p>')}

${B.warn('<p>La crypto est jeune, volatile et pleine d’arnaques. Le Bitcoin lui-même a chuté de 70 à 85 % du sommet au creux à plusieurs reprises. Tout ce parcours suppose que tu n’y mets que de l’argent dont tu peux voir la valeur chuter de façon spectaculaire.</p>')}

${B.take(['Une blockchain est un registre partagé, à falsification visible, tenu par de nombreux ordinateurs.', 'Bitcoin a un plafond strict de 21 millions de pièces ; Ethereum ajoute des contrats intelligents programmables.', 'La valeur vient de la rareté, de l’usage et de la croyance, ce qui rend les prix très volatils.', 'Une bonne technologie ne garantit pas un bon investissement.'])}`,
      q: [
        ['Pourquoi est-il difficile de falsifier un enregistrement de blockchain ?', ['Il est gardé secret', 'Chaque bloc inclut une empreinte du précédent et de nombreuses copies existent', 'Les banques le protègent', 'Il est supprimé régulièrement'], 1, 'Modifier d’anciennes données brise les empreintes suivantes, et il faudrait changer la plupart des copies à la fois.'],
        ['Quel est le nombre maximal de bitcoins qui pourront jamais exister ?', ['1 million', '21 millions', '100 millions', 'Illimité'], 1, 'Le plafond de l’offre de Bitcoin est de 21 millions.'],
        ['Que fait un contrat intelligent ?', ['Il remplace ton portefeuille', 'Il exécute du code sur une blockchain qui se déclenche automatiquement quand les conditions sont remplies', 'Il garantit un profit', 'Il annule des transactions'], 1, 'C’est un programme sur la chaîne, comme un distributeur automatique numérique.']
      ]
    },
    {
      id: 'c2', m: 13, t: 'Portefeuilles, clés et où acheter',
      hook: 'Qui détient réellement tes pièces ? Le concept le plus important de la sécurité crypto.',
      body: `
<p>En crypto, il y a une règle que tu entendras partout : <b>« not your keys, not your coins »</b> (pas tes clés, pas tes pièces). Comprendre pourquoi te protégera mieux que n’importe quelle analyse de prix.</p>

<h3>Clés, adresses et phrases de récupération</h3>
<ul>
<li><b>Adresse publique</b> : comme ton numéro de compte bancaire. On peut la partager pour que les gens t’envoient des pièces.</li>
<li><b>Clé privée</b> : le secret qui autorise le déplacement des pièces. Celui qui l’a contrôle les pièces, sans « mot de passe oublié » et sans banque à appeler.</li>
<li><b>Phrase de récupération (seed phrase)</b> : généralement 12 ou 24 mots qui peuvent recréer toutes tes clés. C’est la clé maîtresse du portefeuille.</li>
</ul>
${B.warn('<p><b>Ne saisis jamais</b> ta phrase de récupération sur un site web, ne l’envoie à personne, ne la stocke pas dans des photos, des notes dans le cloud ou des e-mails. Aucun véritable agent de support ni aucune entreprise ne te la demandera jamais.</p>')}

<h3>Deux façons de détenir de la crypto</h3>
${B.tbl(['', 'Dépositaire (la plateforme la détient)', 'Auto-conservation (tu détiens les clés)'], [
        ['Commodité', 'Facile : connexion avec mot de passe', 'Plus d’étapes à apprendre'],
        ['Qui contrôle les pièces', 'L’entreprise', 'Toi'],
        ['Risque principal', 'Piratage de la plateforme, effondrement, gels ou fraude (ex. Mt. Gox en 2014, FTX en 2022)', 'Perdre ta phrase de récupération, erreurs, phishing'],
        ['Récupération', 'Support et récupération du compte', 'Aucune si tu perds la phrase de récupération'],
        ['Idéal pour', 'Petits montants, apprentissage, trading', 'Détentions plus importantes à long terme']
      ])}

<h3>Portefeuilles chauds et froids</h3>
<ul>
<li><b>Portefeuille chaud (hot wallet)</b> : portefeuille logiciel connecté à internet (téléphone ou navigateur). Pratique pour de petits montants de dépense.</li>
<li><b>Portefeuille froid / portefeuille matériel</b> : un petit appareil dédié qui garde les clés hors ligne et signe les transactions. Idéal pour l’épargne à long terme. Achète uniquement directement chez le fabricant.</li>
</ul>

<h3>Où acheter</h3>
<ul>
<li><b>Plateformes d’échange centralisées (CEX)</b> : des entreprises qui te permettent d’acheter avec des euros, des cartes ou des virements après vérification d’identité (KYC). Choisis des plateformes régulées, avec un long historique et des frais transparents.</li>
<li><b>Plateformes d’échange décentralisées (DEX)</b> : des places de marché de contrats intelligents où tu échanges des jetons directement depuis ton portefeuille. Plus de liberté et plus de risque ; les jetons frauduleux sont courants.</li>
<li><b>Produits régulés</b> : dans certains pays, les ETF et ETP Bitcoin et Ethereum permettent d’y avoir une exposition via un compte-titres normal, sans manipuler de clés (les ETF Bitcoin au comptant américains ont été lancés en janvier 2024).</li>
</ul>

<h3>Comprends les coûts</h3>
<ul>
<li><b>Frais de trading</b> : un pourcentage par transaction (souvent 0,1 % à 1,5 %). Les boutons simples « achat instantané » coûtent généralement plus cher que l’écran d’ordres avancé de la plateforme.</li>
<li><b>Spread</b> : la différence entre le prix d’achat et de vente.</li>
<li><b>Frais de réseau (gas)</b> : payés à la blockchain quand tu envoies des pièces. Ils varient avec la congestion.</li>
<li><b>Frais de retrait</b> : facturés par les plateformes pour sortir des pièces.</li>
</ul>

${B.ex('<p>Leo achète pour 1 000 € de Bitcoin sur une plateforme. Comme le total est petit et qu’il apprend, il les y laisse pour l’instant, mais active l’authentification à deux facteurs (application d’authentification) et une liste blanche de retraits. Six mois plus tard, ses avoirs atteignent 5 000 € et il achète un portefeuille matériel sur le site du fabricant, envoie d’abord 10 € en test, vérifie qu’ils sont arrivés, puis déplace le reste et conserve la phrase de récupération sur papier à deux endroits sûrs distincts.</p>')}

${B.w('checklist', { key: 'c2', title: 'Liste de contrôle pour un premier achat sécurisé', accent: 'ci', items: 'J’ai choisi une plateforme régulée avec une grille de frais claire|J’ai activé l’authentification à deux facteurs avec une application d’authentification (pas par SMS)|J’ai créé un mot de passe unique et fort dans un gestionnaire de mots de passe|Je n’achète qu’un montant dont je peux supporter une baisse de 80 %|Je comprends la différence entre mon adresse publique et ma phrase de récupération|Pour des montants plus importants : je prévois un portefeuille matériel acheté chez le fabricant|J’envoie toujours une petite transaction test avant un gros transfert' })}

${B.take(['Celui qui détient la clé privée contrôle les pièces ; les plateformes détiennent les clés à ta place.', 'Ta phrase de récupération est la clé maîtresse : ne la partage ni ne la numérise jamais.', 'Le dépositaire est simple mais comporte un risque d’entreprise ; l’auto-conservation donne le contrôle mais met la responsabilité sur toi.', 'Vérifie tous les coûts : frais de trading, spreads, frais de réseau et frais de retrait.'])}`,
      q: [
        ['À qui devrais-tu communiquer ta phrase de récupération ?', ['Au service client', 'À un ami de confiance', 'À personne, jamais', 'À n’importe quelle plateforme'], 2, 'Quiconque a ta phrase de récupération peut tout prendre. Les services légitimes ne la demandent jamais.'],
        ['Quel est le principal risque de garder des pièces sur une plateforme ?', ['Les pièces se transforment en papier', 'L’entreprise peut être piratée, geler les retraits ou s’effondrer', 'Il n’y a pas de frais', 'Les pièces disparaissent chaque année'], 1, 'Tu dépends de l’entreprise ; des défaillances comme Mt. Gox et FTX ont coûté cher aux clients.'],
        ['Pourquoi envoyer d’abord une petite transaction test ?', ['C’est exigé par la loi', 'Pour confirmer que l’adresse est correcte avant d’envoyer un gros montant', 'Pour obtenir un cashback', 'Pour réduire les frais'], 1, 'Les transferts crypto sont irréversibles, donc un test réduit le risque d’erreurs coûteuses.']
      ]
    },
    {
      id: 'c3', m: 14, t: 'La carte de la crypto : Bitcoin, Ethereum, stablecoins, DeFi et au-delà',
      hook: 'Il existe des milliers de jetons. Voici comment les classer en groupes, et où se situe le risque dans chacun.',
      body: `
<p>Il existe plusieurs milliers de crypto-actifs. La plupart sont minuscules, beaucoup sont sans valeur, et quelques-uns sont majeurs. Une carte simple t’aide à voir la différence entre un actif relativement établi et un billet de loterie.</p>

<h3>Les grandes catégories</h3>
<ul>
<li><b>Bitcoin (BTC)</b> : l’original et le plus grand. Surtout un récit de réserve de valeur et d’« or numérique ». Simple, très liquide, avec le plus long historique.</li>
<li><b>Plateformes de contrats intelligents (Layer 1)</b> : des blockchains où tournent des applications. Ethereum est la plus grande. D’autres rivalisent sur la vitesse ou le coût. Leur valeur dépend de l’activité réelle qu’elles attirent.</li>
<li><b>Layer 2</b> : des réseaux construits au-dessus d’Ethereum qui rendent les transactions moins chères et plus rapides.</li>
<li><b>Stablecoins</b> : des jetons conçus pour conserver une valeur stable, généralement 1 dollar américain (ou 1 euro). Ils servent au trading et aux paiements. Leur sécurité dépend de ce qui les adosse et de qui les gère. Le stablecoin algorithmique de Terra s’est effondré en 2022, et même l’important USDC a brièvement perdu son ancrage au dollar lors d’une panique bancaire en mars 2023.</li>
<li><b>Jetons DeFi (finance décentralisée)</b> : des protocoles de prêt, de trading et d’assurance gérés par du code. Les récompenses peuvent sembler élevées, mais les bogues de contrats intelligents, les piratages et la « perte impermanente » dans les pools de liquidité sont des risques réels.</li>
<li><b>NFT</b> : des objets numériques uniques. Surtout des objets de collection spéculatifs, et la demande a été très inégale.</li>
<li><b>Memecoins</b> : des jetons construits autour de blagues et de communautés (comme les chiens et les grenouilles). Pure spéculation et le coin le plus truffé d’arnaques.</li>
<li><b>Jetons thématiques</b> (IA, jeux, actifs du monde réel) : des récits qui vont et viennent.</li>
</ul>

<h3>La pyramide du risque</h3>
<p>Une image utile : une large base d’actifs relativement établis et un sommet étroit et très risqué.</p>
<div class="pyr" role="img" aria-label="Pyramide du risque crypto, du risque plus faible à la base au risque extrême au sommet">
  <div style="background:#C9C5EE;width:30%;min-width:170px">Memecoins, nouveaux jetons : risque extrême</div>
  <div style="background:#A58FFF;width:50%;min-width:230px">Petites capitalisations, NFT, jetons thématiques : très élevé</div>
  <div style="background:#FFC21A;width:72%;min-width:260px">Grande DeFi, plateformes Layer 1 et 2 : élevé</div>
  <div style="background:#14B37D;width:94%;min-width:280px">Bitcoin et Ethereum : encore très volatils, mais les plus établis</div>
</div>
<p class="note">Même la crypto « établie » peut perdre 70 % ou plus. La pyramide montre le risque relatif, pas la sécurité.</p>

<h3>Tranches de capitalisation boursière</h3>
<p>La <b>capitalisation boursière</b> est le prix multiplié par l’offre en circulation. À titre indicatif : les grandes capitalisations dépassent environ 10 milliards d’€, les moyennes vont d’environ 1 à 10 milliards d’€, et les petites sont sous 1 milliard d’€. Plus petit signifie plus de potentiel de hausse, bien plus de volatilité, une liquidité plus mince et une plus grande probabilité d’échec.</p>

<h3>Staking et « rendement »</h3>
<p>Le <b>staking</b> consiste à immobiliser des pièces à preuve d’enjeu pour aider à sécuriser le réseau en échange de récompenses. Ce n’est pas de l’argent gratuit : la récompense est versée dans la pièce elle-même (le risque de prix demeure), tes pièces peuvent être bloquées pendant une période, et certaines plateformes ajoutent un risque de contrat intelligent ou de contrepartie. Si un produit promet un rendement élevé, fixe et « sans risque », rappelle-toi que les prêteurs qui se sont effondrés en 2022 proposaient exactement cela.</p>

${B.ex('<p>Mia a 1 000 € pour la crypto. Elle les répartit : 700 € en Bitcoin et Ethereum (son « noyau »), 250 € répartis sur quelques projets établis plus importants qu’elle a étudiés, et 50 € en pari « argent plaisir » sur une petite pièce. Si ce dernier pari tombe à zéro, elle perd 5 % de son enveloppe crypto et rien ne casse.</p>')}

${B.warn('<p>Ne confonds pas « nombre de jetons » et « diversification ». La plupart des jetons évoluent avec Bitcoin, donc posséder 30 altcoins donne souvent l’impression de détenir un seul gros pari avec un risque en plus.</p>')}

${B.take(['Classe la crypto en catégories : Bitcoin, plateformes, stablecoins, DeFi, NFT, memecoins.', 'Le risque monte fortement quand on passe des grands actifs établis aux petits jetons récents.', 'Les stablecoins peuvent perdre leur ancrage ; les récompenses de staking ne sont pas sans risque.', 'Beaucoup de jetons sont très corrélés, donc ils offrent moins de diversification qu’il n’y paraît.'])}`,
      q: [
        ['À quoi sert un stablecoin ?', ['Doubler de valeur chaque année', 'Conserver une valeur stable comme 1 dollar', 'Remplacer toutes les banques', 'Cacher ton identité'], 1, 'Ils visent un prix stable, mais l’ancrage peut céder.'],
        ['Quelle catégorie comporte généralement le plus grand risque de perte totale ?', ['Bitcoin', 'Grands ETF régulés', 'Memecoins nouvellement lancés', 'Comptes d’épargne'], 2, 'Les memecoins sont spéculatifs, souvent manipulés et tombent fréquemment à zéro.'],
        ['La capitalisation boursière est égale à…', ['Prix × offre en circulation', 'Prix × nombre total de traders', 'Volume quotidien seulement', 'Frais de transaction'], 0, 'C’est le prix actuel multiplié par les pièces en circulation.']
      ]
    },
    {
      id: 'c4', m: 13, t: 'Comment évaluer un projet : tokenomics et fondamentaux',
      hook: 'Une liste de questions qui sépare les projets sérieux du battage, y compris le chiffre qui trompe la plupart des débutants.',
      body: `
<p>Contrairement à une entreprise, un jeton n’a généralement pas de rapport de résultats. Tu peux pourtant poser des questions structurées. Le but n’est pas de trouver un gagnant garanti, mais d’éviter les perdants évidents et de comprendre ce que tu achètes.</p>

<h3>La liste de 8 questions</h3>
<ol>
<li><b>Quel problème résout-il, et pour qui ?</b> Peux-tu l’expliquer en deux phrases ?</li>
<li><b>De vraies personnes l’utilisent-elles ?</b> Regarde les utilisateurs actifs, le nombre de transactions, les frais payés et la valeur totale verrouillée (TVL) en DeFi, à partir de sources indépendantes.</li>
<li><b>Génère-t-il des revenus ?</b> Les frais payés par les utilisateurs sont un signe sain. Des « revenus » issus de la création de nouveaux jetons n’en sont pas.</li>
<li><b>Qui est derrière ?</b> Une équipe publique et responsable avec un historique, contre des fondateurs anonymes et du code copié-collé.</li>
<li><b>Quelle est la tokenomics ?</b> Offre maximale, combien de jetons circulent, combien sont libérés au fil du temps, et qui les détient.</li>
<li><b>Le code est-il audité ?</b> Les audits de sécurité aident (sans être une garantie). Vérifie les piratages dans l’historique du projet.</li>
<li><b>Y a-t-il une vraie liquidité ?</b> Peux-tu vendre sans faire s’effondrer le prix ? Est-il coté sur des plateformes réputées ?</li>
<li><b>Qu’est-ce qui peut mal tourner ?</b> Réglementation, concurrence, panne technique, ventes d’initiés.</li>
</ol>

<h3>Tokenomics 101</h3>
<ul>
<li><b>Offre en circulation</b> : jetons disponibles à l’échange maintenant.</li>
<li><b>Offre totale / maximale</b> : tous les jetons qui existeront un jour (ou qui existent maintenant).</li>
<li><b>Émission / inflation</b> : la vitesse à laquelle de nouveaux jetons sont créés. Une forte inflation dilue les détenteurs, sauf si la demande croît plus vite.</li>
<li><b>Distribution</b> : quelle part a été attribuée aux fondateurs, aux premiers investisseurs et à la communauté ? Si les initiés détiennent une énorme part, un largage est possible.</li>
<li><b>Vesting et déblocages</b> : des jetons verrouillés libérés selon un calendrier. Un gros déblocage (parfois appelé « cliff ») peut faire baisser les prix quand les bénéficiaires vendent.</li>
<li><b>Utilité</b> : à quoi sert le jeton (frais, staking, gouvernance) ? Un jeton dont personne n’a besoin n’a qu’une valeur spéculative.</li>
</ul>

<h3>Le chiffre qui trompe les débutants : capitalisation vs. FDV</h3>
<p>Un jeton peut paraître « bon marché » avec une faible capitalisation alors que la plus grande partie de l’offre est encore verrouillée. La <b>valorisation entièrement diluée (FDV)</b> montre quelle serait la valeur si tous les jetons existaient. Un grand écart signifie beaucoup de pression vendeuse future. Essaie le calculateur :</p>
${B.w('supply')}

<h3>Signaux d’alarme</h3>
<ul>
<li>Promesses de rendements garantis ou de « rendement sans risque ».</li>
<li>Équipe anonyme, aucun produit fonctionnel, livre blanc copié.</li>
<li>Quelques portefeuilles détiennent la plus grande partie de l’offre.</li>
<li>La liquidité n’est pas verrouillée, donc les développeurs pourraient la retirer (« rug pull »).</li>
<li>Tactiques de pression, comptes à rebours et « achète maintenant avant qu’il ne soit trop tard ».</li>
<li>Récompenses payées principalement en faisant entrer de nouveaux investisseurs (une structure de Ponzi).</li>
<li>Promotions payées par des influenceurs sans divulgation.</li>
</ul>

${B.tip('<p>Une bonne habitude : lis la documentation propre du projet, consulte une source de données indépendante sur l’usage, et cherche « [nom du projet] arnaque », « piratage » et « critiques ». Lis le scénario pessimiste avant d’acheter.</p>')}

${B.ex('<p>Deux jetons s’échangent chacun à 1 €. Le jeton A a 800 M de 1 000 M de jetons déjà en circulation et une utilité claire, donc sa capitalisation est de 800 M€ et sa FDV de 1 Md€. Le jeton B a 100 M de 1 000 M en circulation : capitalisation de 100 M€, FDV de 1 Md€. Le jeton B paraît 8 fois « plus petit », mais 90 % de son offre est encore verrouillée. Quand ces jetons seront débloqués, les détenteurs devront absorber neuf fois l’offre existante. Même prix, risque très différent.</p>')}

${B.take(['Demande ce que fait le projet, qui l’utilise et comment il gagne de vrais revenus.', 'Étudie l’offre, la distribution, le vesting et les calendriers de déblocage.', 'Compare la capitalisation à la valorisation entièrement diluée pour voir la dilution future.', 'Signaux d’alarme : rendements garantis, équipes anonymes, offre concentrée, liquidité déverrouillée.'])}`,
      q: [
        ['Un jeton a une petite capitalisation mais une énorme FDV. Cela suggère…', ['Peu de dilution future', 'Beaucoup de jetons restent à libérer, ce qui ajoute de la pression vendeuse', 'Une croissance garantie', 'Que le jeton est un stablecoin'], 1, 'L’offre verrouillée finira par entrer en circulation, diluant les détenteurs.'],
        ['Lequel est un signal d’alarme ?', ['Équipe publique et code audité', 'Rendements quotidiens garantis promis', 'Documentation claire', 'Données d’utilisation indépendantes'], 1, 'Aucun investissement légitime ne peut garantir des rendements.'],
        ['Qu’est-ce qu’un « rug pull » ?', ['Une hausse de prix', 'Des développeurs qui retirent la liquidité ou abandonnent un projet après avoir pris l’argent des investisseurs', 'Une mise à jour de portefeuille', 'Une récompense de staking'], 1, 'C’est une arnaque à la sortie qui laisse les détenteurs avec des jetons sans valeur.']
      ]
    },
    {
      id: 'c5', m: 14, t: 'Construire un portefeuille crypto : taille, DCA et cycles',
      hook: 'Combien, à quelle fréquence, et à quoi s’attendre. La taille de position est la décision qui compte le plus.',
      body: `
<p>La plupart des pertes en crypto ne viennent pas du choix de la mauvaise pièce. Elles viennent du fait de miser trop sur n’importe quelle pièce. La première question n’est pas « quoi acheter » mais « <b>quelle part de mon patrimoine puis-je me permettre de mettre ici ?</b> »</p>

<h3>Décide de la taille avec le « test de la chute de 80 % »</h3>
<p>Le Bitcoin a chuté de 70 à 85 % du sommet au creux à plusieurs reprises, et les actifs plus petits chutent souvent davantage. Demande-toi : si toute cette enveloppe perdait 80 % et y restait pendant deux ans, mon projet de vie et mon sommeil y survivraient-ils ? Utilise le calculateur.</p>
${B.w('cryptosize')}
<p>Beaucoup de conseillers prudents suggèrent de petites allocations, souvent de l’ordre de 1 à 5 % du patrimoine investissable pour ceux qui veulent une certaine exposition. Ce n’est ni une règle ni un conseil, seulement un exemple de la façon dont pensent les professionnels : dimensionne-la pour qu’une perte totale soit un désagrément, pas un désastre.</p>

<h3>Une structure simple : noyau et satellites</h3>
<ul>
<li><b>Noyau (par exemple 60 à 80 % de ton enveloppe crypto)</b> : Bitcoin et Ethereum, les plus établis.</li>
<li><b>Satellites (par exemple 20 à 40 %)</b> : une poignée de projets plus importants que tu as étudiés.</li>
<li><b>Billets de loterie (facultatif, 0 à 5 % de l’enveloppe)</b> : de minuscules paris risqués que tu es prêt à perdre entièrement.</li>
</ul>

<h3>DCA : ton ami dans un marché volatil</h3>
<p>Comme les prix oscillent tellement, acheter un montant fixe chaque semaine ou chaque mois (DCA) supprime la pression de chronométrer le marché. Tu achètes plus quand les prix sont bas et moins quand ils sont hauts. Cela aide aussi côté émotions. Tu peux revoir le jeu du DCA dans le parcours Investisseur.</p>

<h3>Cycles : des schémas, pas des promesses</h3>
<p>Le Bitcoin a historiquement montré de grands cycles d’essor et d’effondrement d’environ quatre ans, souvent liés au halving, avec des sommets précédents suivis de baisses de 70 à 85 %. Beaucoup d’investisseurs bâtissent leur timing là-dessus, mais les cycles passés forment un petit échantillon, et les marchés apprennent. Ne mise pas ton plan sur la répétition d’un schéma.</p>

<h3>Prends des profits volontairement</h3>
<p>L’euphorie fait oublier de vendre. Décide à l’avance : par exemple, « Si mon enveloppe crypto dépasse 10 % de mon patrimoine, je rééquilibre à 5 % », ou « Je vends un quart de toute position qui triple ». Des règles écrites battent l’avidité.</p>

<h3>Rééquilibrage et conscience fiscale</h3>
<p>Vendre peut déclencher des impôts. Rééquilibre en dirigeant les nouveaux versements là où c’est nécessaire, et garde la trace de chaque achat et vente (voir la leçon sur les impôts).</p>

${B.ex('<p>Tom met 3 % de ses 30 000 € d’épargne en crypto (900 €), en achetant 75 € par mois via le DCA. Quand le marché chute de 70 %, son enveloppe perd environ 630 €, un coup de 2,1 % de son patrimoine total. Il continue d’acheter à bas prix. Quand le marché remonte plus tard d’un facteur 5, il réduit jusqu’à son objectif. Il n’est ni devenu riche ni ruiné, et il est resté dans le jeu.</p>')}

${B.warn('<p>N’investis jamais l’argent dont tu as besoin pour le loyer, les frais de scolarité ou les urgences. N’emprunte jamais pour acheter de la crypto. Ne mets jamais toute ton épargne dans une seule pièce parce qu’elle « ne peut pas échouer ».</p>')}

${B.take(['La taille d’abord : utilise le test de la chute de 80 % pour décider combien est sûr.', 'Noyau et satellites : surtout de grands actifs, une petite part pour la spéculation.', 'Le DCA réduit le risque de timing et le stress émotionnel.', 'Les cycles sont des schémas, pas des garanties. Aie des règles écrites de prise de profit et de rééquilibrage.'])}`,
      q: [
        ['À quoi sert le « test de la chute de 80 % » ?', ['À prédire le prix futur', 'À s’assurer que ta taille de position est supportable si les prix s’effondrent', 'À choisir un portefeuille', 'À éviter les frais'], 1, 'Si tu ne pouvais pas supporter une chute de 80 % de l’enveloppe, elle est trop grande.'],
        ['Dans un portefeuille crypto noyau-satellites, le noyau est généralement…', ['Des memecoins', 'Bitcoin et Ethereum', 'Les lancements les plus récents', 'Des jetons à effet de levier'], 1, 'Les actifs les plus établis forment la base ; les idées plus risquées sont des satellites limités.'],
        ['Pourquoi écrire à l’avance les règles de prise de profit et de rééquilibrage ?', ['Pour éviter que l’avidité et l’euphorie ne prennent les décisions', 'Parce que les plateformes l’exigent', 'Pour augmenter les frais', 'Pour impressionner les autres'], 0, 'Des règles prédéfinies t’aident à agir calmement quand les prix s’envolent.']
      ]
    },
    {
      id: 'c6', m: 14, t: 'Sécurité et arnaques : comment ne pas tout perdre',
      hook: 'En crypto, il n’y a pas de banque à appeler. Apprends les arnaques qui ont coûté des millions, et joue au jeu Sûr ou Arnaque.',
      body: `
<p>Comme les transactions crypto ne peuvent pas être annulées, les escrocs l’adorent. La bonne nouvelle : presque toutes les arnaques reposent sur les mêmes quelques astuces, et une fois que tu les reconnais, elles perdent leur pouvoir.</p>

<h3>Les arnaques les plus courantes</h3>
<ul>
<li><b>Phishing (hameçonnage)</b> : de faux e-mails, textos ou sites qui copient une vraie plateforme ou un vrai portefeuille pour voler tes identifiants ou ta phrase de récupération. Tape toujours l’adresse toi-même ou utilise un favori enregistré.</li>
<li><b>Faux support</b> : quelqu’un t’écrit « de la plateforme » pour proposer son aide. Le vrai support ne te contacte pas en premier et ne demande ni mots de passe ni phrases de récupération.</li>
<li><b>Arnaques aux cadeaux</b> : « envoie 1 ETH et reçois-en 2 », souvent avec des personnes célèbres ou des comptes piratés.</li>
<li><b>Rug pulls et pump-and-dumps</b> : des développeurs ou des groupes font la promotion d’un jeton, puis vendent leurs avoirs et disparaissent.</li>
<li><b>Arnaques sentimentales / « pig-butchering »</b> : un inconnu sympathique gagne ta confiance pendant des semaines et te guide vers une fausse plateforme d’investissement qui affiche de faux profits, jusqu’à ce que tu essaies de retirer.</li>
<li><b>Wallet drainers</b> : des sites malveillants qui te piègent pour signer une transaction leur donnant la permission de vider ton portefeuille. Méfie-toi des boutons « Connect wallet » et des approbations illimitées.</li>
<li><b>Empoisonnement d’adresse</b> : des escrocs envoient de minuscules transactions depuis une adresse qui ressemble à une que tu as utilisée, en espérant que tu la copies par erreur depuis ton historique.</li>
<li><b>Fausses applications et extensions</b> : des portefeuilles contrefaits dans les magasins d’applications ou de navigateurs.</li>
<li><b>Systèmes de Ponzi</b> : des promesses de rendements élevés et fixes, payés avec l’argent de nouveaux investisseurs jusqu’à l’effondrement du système.</li>
<li><b>Arnaques à la récupération</b> : après une perte, des « experts en récupération » promettent de récupérer tes pièces contre des frais d’avance. Ce sont aussi des escrocs.</li>
</ul>

<h3>Ta configuration de sécurité</h3>
${B.w('checklist', { key: 'c6', title: 'Liste de contrôle de sécurité crypto', accent: 'ci', items: 'Mots de passe uniques et longs pour chaque plateforme et service de portefeuille, dans un gestionnaire de mots de passe|Authentification à deux facteurs par application (pas par SMS) sur tous les comptes|Liste blanche d’adresses de retrait et codes anti-phishing activés|Phrase de récupération écrite sur papier et conservée à deux endroits sûrs distincts, jamais photographiée|Portefeuille matériel acheté directement chez le fabricant pour les avoirs plus importants|Sites de plateformes enregistrés en favoris, sans jamais cliquer sur des liens dans des e-mails ou des publicités|Adresse e-mail distincte pour les comptes crypto|Petite transaction test avant chaque gros transfert|Examen régulier des approbations de jetons et révocation de celles qui sont inutilisées' })}

<h3>Règles d’or</h3>
<ol>
<li>Si c’est trop beau pour être vrai, ça l’est.</li>
<li>L’urgence est une arme. Les escrocs créent des échéances pour que tu ne puisses pas réfléchir.</li>
<li>Personne ne donne d’argent gratuit, et personne n’a besoin de ta phrase de récupération.</li>
<li>Vérifie par un second canal. Appelle l’entreprise à un numéro tiré de son site officiel.</li>
<li>Garde la plupart des fonds en stockage à froid et un petit montant « de dépense » dans un portefeuille chaud.</li>
</ol>

<h3>Joue : Sûr ou arnaque ?</h3>
<p>Neuf situations réelles. Décide si l’action est sûre ou risquée, et lis pourquoi.</p>
${B.w('scam')}

<h3>Si tu te fais escroquer</h3>
<p>Agis vite : coupe le contact, déplace les fonds restants vers un nouveau portefeuille, change tes mots de passe, signale à la plateforme concernée, à la police locale et aux autorités de signalement des fraudes. La récupération est improbable, et c’est précisément pourquoi la prévention compte.</p>

${B.take(['Les transferts crypto sont irréversibles, donc la prévention est tout.', 'Ne partage jamais ta phrase de récupération ; le vrai support ne la demande jamais.', 'Utilise la 2FA par application, un gestionnaire de mots de passe et le stockage à froid pour les montants plus importants.', 'La pression, les rendements garantis et les messages privés non sollicités sont des signaux classiques d’arnaque.'])}`,
      q: [
        ['Un « agent de support » t’écrit en premier et te demande ta phrase de récupération. C’est…', ['Une procédure normale', 'Une arnaque', 'Requis pour la sécurité', 'Un programme de récompenses'], 1, 'Un vrai support ne fera jamais cela.'],
        ['Quelle est une bonne façon d’aborder un nouveau site crypto ?', ['Cliquer sur n’importe quel lien d’une publicité', 'Taper l’adresse toi-même ou utiliser un favori de confiance', 'Utiliser une extension de navigateur non vérifiée', 'Partager ton mot de passe de portefeuille pour vérifier'], 1, 'Les faux sites copient les vrais ; un favori évite les imitations.'],
        ['Un inconnu rencontré en ligne te guide vers une plateforme affichant de gros gains mais demande des dépôts supplémentaires pour retirer. C’est typique de…', ['Une plateforme normale', 'Une arnaque pig-butchering', 'Une règle fiscale', 'Une récompense de staking'], 1, 'Les plateformes légitimes n’exigent pas de dépôts supplémentaires pour libérer ton propre argent.']
      ]
    },
    {
      id: 'c7', m: 10, t: 'Impôts, réglementation et tenue de registres',
      hook: 'Les gains en crypto sont généralement imposables. Une simple habitude de tenue de registres évite les migraines et fait économiser de l’argent.',
      body: `
<p>Cette leçon donne des principes généraux. <b>Les règles fiscales et juridiques diffèrent selon les pays et changent souvent</b>, donc consulte toujours ton administration fiscale locale et, si les montants comptent, parle à un professionnel de la fiscalité qualifié.</p>

<h3>Ce qui est souvent imposable</h3>
<p>Dans de nombreux pays, les autorités traitent les crypto-actifs comme des biens ou des investissements. Les événements qui créent couramment une obligation fiscale comprennent :</p>
<ul>
<li><b>Vendre de la crypto contre de la monnaie fiduciaire</b> (euros, dollars) avec un profit.</li>
<li><b>Échanger une crypto contre une autre</b>. Dans beaucoup d’endroits, cela compte comme vendre la première et acheter la seconde.</li>
<li><b>Payer des biens ou des services</b> en crypto.</li>
<li><b>Gagner de la crypto</b> comme revenu : travail, minage, récompenses de staking ou airdrops, souvent imposés comme revenu au moment où tu les reçois.</li>
</ul>
<p>Souvent <b>non</b> imposable (mais vérifie localement) : acheter de la crypto avec de la monnaie fiduciaire, déplacer de la crypto entre tes propres portefeuilles, et simplement détenir.</p>

<h3>Comment les gains sont calculés</h3>
<p>Gain = prix de vente − coût d’achat (ton « prix de revient »), moins les frais admis. Certains pays imposent les gains à taux forfaitaire, d’autres à taux progressifs, et certains accordent un traitement favorable aux actifs détenus plus d’un an. Les pertes peuvent compenser les gains.</p>
${B.ex('<p>Tu achètes 0,1 BTC pour 2 000 € et le vends plus tard 3 500 €. Gain = 1 500 €. Si ta règle locale impose les gains à, par exemple, 25 % (à titre purement illustratif), l’impôt serait de 375 €. Si tu échanges plutôt ce BTC contre une autre pièce valant 3 500 €, de nombreux systèmes fiscaux le traiteraient quand même comme une vente et calculeraient le même gain, même si tu n’as jamais touché d’euros.</p>')}

<h3>Tiens de bons registres dès le premier jour</h3>
<ul>
<li>Date, type et montant de chaque achat, vente, échange, transfert et récompense.</li>
<li>La valeur en euros (ou monnaie locale) au moment de chaque événement.</li>
<li>Les frais payés.</li>
<li>Les adresses de portefeuille et comptes de plateforme utilisés.</li>
<li>Exporte les historiques de transactions (fichiers CSV) chaque année depuis chaque plateforme, car les plateformes peuvent fermer ou perdre des données.</li>
</ul>
<p>Un logiciel fiscal spécialisé en crypto peut importer tes plateformes et portefeuilles et calculer les gains. Beaucoup de comptables savent les utiliser.</p>

<h3>Réglementation : un paysage en évolution</h3>
<ul>
<li>Dans l’Union européenne, le règlement <b>MiCA</b> fixe des règles pour les émetteurs de crypto-actifs et les prestataires de services (pleinement applicable depuis fin 2024), notamment l’agrément, l’information et les règles sur les stablecoins. Les règles européennes de déclaration fiscale pour les plateformes crypto (DAC8) démarrent en 2026, donc les autorités reçoivent de plus en plus de données sur tes transactions.</li>
<li>D’autres régions construisent leurs propres cadres. Les règles peuvent restreindre certains produits, comme les produits dérivés pour les clients particuliers.</li>
</ul>
<p>Signification pratique : privilégie les <b>plateformes agréées et régulées</b>, attends-toi à des vérifications d’identité, et suppose que les autorités fiscales voient plus qu’avant.</p>

${B.warn('<p>Méfie-toi des systèmes crypto « sans impôt » et de quiconque affirme que tu n’as pas besoin de déclarer. Éluder l’impôt est illégal et de plus en plus détectable.</p>')}

${B.take(['Vendre, échanger, dépenser et gagner de la crypto déclenche souvent des impôts, selon ton pays.', 'Suis le prix de revient, les dates, les valeurs et les frais de chaque transaction.', 'Exporte régulièrement tes registres ; envisage un logiciel fiscal crypto.', 'Utilise des plateformes régulées et attends-toi à plus de transparence de la part des autorités.'])}`,
      q: [
        ['Dans de nombreux pays, échanger une crypto contre une autre est traité comme…', ['Rien, jamais imposable', 'Une vente du premier actif (fait générateur d’impôt)', 'Un don', 'Un prêt'], 1, 'Vérifie les règles locales, mais un échange est souvent considéré comme une cession.'],
        ['De quoi as-tu besoin pour calculer correctement un gain ?', ['Seulement du prix d’aujourd’hui', 'Du coût d’achat, du produit de la vente et des frais, avec les dates', 'De ton âge', 'De la couleur de ton portefeuille'], 1, 'Le prix de revient et le produit déterminent le gain ou la perte.'],
        ['Pourquoi exporter régulièrement ton historique de transactions ?', ['Les plateformes peuvent fermer ou perdre des données et tu as besoin de registres pour les impôts', 'Cela augmente les rendements', 'C’est requis pour le staking', 'Cela supprime les frais'], 0, 'Tes propres registres te protègent si une plateforme disparaît.']
      ]
    },
    {
      id: 'c8', m: 10, t: 'Ton plan crypto à long terme et ta stratégie de sortie',
      hook: 'Transforme ce parcours en un plan d’une page : pourquoi tu détiens, combien, comment tu restes en sécurité et quand tu prends des profits.',
      body: `
<p>Un plan écrit fait la différence entre investir et jouer. Utilise cette leçon pour assembler le tien.</p>

<h3>Le plan crypto d’une page</h3>
${B.tbl(['Section', 'Ta réponse'], [
        ['Pourquoi je détiens de la crypto', 'Ma thèse en deux phrases (par exemple : « exposition à long terme à une nouvelle classe d’actifs, petite part »)'],
        ['Combien', 'Pourcentage maximal de mon patrimoine investissable (par exemple 3 %) et le montant en euros'],
        ['Ce que je détiens', 'Actifs du noyau (par exemple BTC / ETH) et le maximum pour les satellites et la spéculation'],
        ['Comment j’achète', 'Calendrier DCA : montant, jour du mois, plateforme'],
        ['Où je stocke', 'Plateforme pour les petits montants ; portefeuille matériel pour le reste ; lieux de sauvegarde de la phrase de récupération'],
        ['Quand je rééquilibre ou prends des profits', 'Règles, par exemple : « si la crypto dépasse 6 % de mon patrimoine, je réduis à 3 % »'],
        ['Ce qui me ferait changer d’avis', 'Des événements qui invalideraient ma thèse (par exemple une défaillance majeure d’un protocole ou un changement réglementaire)'],
        ['Impôts et registres', 'Où je garde mon historique de transactions et quand je le révise'],
        ['Lors d’un krach, je vais', 'Garder le plan, ne pas vérifier les prix tous les jours, ne pas emprunter, ne pas vendre dans la panique']
      ])}

<h3>Prévois l’imprévu</h3>
<ul>
<li><b>Héritage et accès</b> : s’il t’arrivait quelque chose, ta famille pourrait-elle accéder aux fonds ? Rédige des instructions et conserve-les en sécurité (par exemple chez un notaire ou un avocat). Beaucoup de pièces ont été perdues à jamais quand la seule personne qui connaissait la phrase de récupération est décédée.</li>
<li><b>Sauvegardes</b> : plus d’une copie de la phrase de récupération à des endroits sûrs différents, protégée du feu et de l’eau (il existe des plaques de sauvegarde en métal).</li>
<li><b>Simplicité</b> : la complexité engendre des erreurs. Moins d’actifs, moins de plateformes, moins de pièces mobiles.</li>
</ul>

<h3>Stratégie de sortie</h3>
<p>Tu n’as pas à détenir pour toujours. Plans de sortie typiques :</p>
<ul>
<li><b>Sortie en escalier</b> : vendre de petites portions à des prix plus élevés prédéfinis (par exemple vendre 10 % chaque fois que le prix monte de 50 %).</li>
<li><b>Sortie par rééquilibrage</b> : chaque fois que l’actif dépasse ta part cible du patrimoine, réduire.</li>
<li><b>Par objectif</b> : vendre pour financer un objectif défini (comme l’apport d’un logement) quand la cible est atteinte.</li>
</ul>
${B.ex('<p>Priya fixe une règle : « Quand ma crypto vaut 3 fois ce que j’ai investi, je retire mon investissement initial et je laisse le reste courir. » Cela sécurise son capital et supprime le stress de la surveillance. Si le prix baisse ensuite, elle a déjà récupéré son coût. Ce n’est qu’un exemple de règle, pas une recommandation.</p>')}

<h3>Rythme de révision</h3>
<ul>
<li><b>Mensuel</b> : confirmer que le DCA a tourné, vérifier la sécurité.</li>
<li><b>Trimestriel</b> : revoir l’allocation et mettre à jour les registres.</li>
<li><b>Annuel</b> : reconsidérer la thèse et la situation fiscale.</li>
</ul>

${B.w('checklist', { key: 'c8', title: 'Liste de contrôle de mon plan crypto', accent: 'ci', items: 'J’ai écrit mon plan sur une page, avec mon pourcentage maximal|Mon calendrier DCA est automatique ou dans mon agenda|Ma phrase de récupération a deux sauvegardes sûres et un plan d’accès pour la famille|Je connais mes règles de prise de profit et de rééquilibrage|Mes registres de transactions sont exportés et conservés|J’ai une règle pour ce que je ferai lors d’un krach de 80 %' })}

${B.key('<p><b>Félicitations.</b> Tu en sais maintenant plus sur la sécurité crypto que la plupart des gens qui en possèdent. Si tu veux explorer le côté actif (trading, effet de levier et bots), le parcours Trader Crypto le couvre, avec un sérieux avertissement joint.</p>')}

${B.take(['Écris un plan d’une page : thèse, taille, avoirs, calendrier, stockage et règles de sortie.', 'Prévois l’héritage, les sauvegardes et la simplicité.', 'Choisis une stratégie de sortie avant d’en avoir besoin : en escalier, par rééquilibrage ou par objectif.', 'Révise à un rythme régulier au lieu de surveiller le prix chaque jour.'])}`,
      q: [
        ['Pourquoi un plan d’héritage ou d’accès est-il important en crypto ?', ['Il augmente les rendements', 'Sans la phrase de récupération, les proches ne peuvent pas récupérer les fonds', 'C’est une règle fiscale', 'Il baisse les frais'], 1, 'Les pièces peuvent être perdues définitivement si personne d’autre ne peut y accéder.'],
        ['Que signifie « sortir en escalier » ?', ['Tout vendre d’un coup', 'Vendre de petites portions à des prix plus élevés prédéfinis', 'Acheter au sommet', 'Passer à une autre plateforme'], 1, 'Cela étale les décisions de vente et supprime le besoin de viser le sommet.'],
        ['Quel est le meilleur rythme de révision pour un investisseur à long terme ?', ['Vérifier le prix toutes les heures', 'Vérifications de base mensuelles, revue trimestrielle de l’allocation, revue annuelle de la thèse et des impôts', 'Jamais', 'Seulement quand le prix s’effondre'], 1, 'Des révisions régulières mais peu fréquentes te gardent sur le plan sans anxiété.']
      ]
    }
  ]);
})();
