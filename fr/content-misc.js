/* Glossaire, page du Parcours Pro et pages Trading Lab */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;
  const LAB = 'https://fofinho8.gumroad.com/l/trading-lab';
  MQ.misc = {};

  MQ.misc.glossary = [
    ['Altcoin', 'Tout crypto-actif autre que le Bitcoin.'],
    ['Ask (prix vendeur)', 'Le prix le plus bas auquel les vendeurs acceptent de vendre. Tu paies l\'ask quand tu achètes.'],
    ['Allocation d\'actifs', 'La façon dont ton argent est réparti entre types d\'actifs comme actions, obligations, liquidités et crypto.'],
    ['ATR (average true range)', 'Un indicateur de l\'amplitude habituelle des mouvements d\'un actif sur une période. Sert à fixer les stops et la taille de position.'],
    ['Marché baissier (bear market)', 'Une longue période de baisse des prix, souvent définie comme un recul de 20 % ou plus depuis un sommet.'],
    ['Bid (prix acheteur)', 'Le prix le plus élevé que les acheteurs acceptent de payer. Tu reçois le bid quand tu vends.'],
    ['Blockchain', 'Un registre numérique partagé, tenu par de nombreux ordinateurs, où des blocs de données sont enchaînés et difficiles à modifier.'],
    ['Obligation', 'Un prêt à un État ou à une entreprise qui verse des intérêts et rend le capital à l\'échéance.'],
    ['Courtier (broker)', 'Une entreprise qui exécute tes ordres d\'achat et de vente sur les marchés financiers.'],
    ['Marché haussier (bull market)', 'Une longue période de hausse des prix.'],
    ['Chandelier japonais', 'Un symbole graphique montrant l\'ouverture, le plus haut, le plus bas et la clôture d\'une période.'],
    ['Impôt sur les plus-values', 'Impôt sur le profit réalisé quand tu vends un actif plus cher que tu ne l\'as payé.'],
    ['CFD (contrat pour la différence)', 'Un contrat à effet de levier avec un courtier qui suit le prix d\'un actif sans que tu le possèdes. Risque élevé pour les traders particuliers.'],
    ['Cold wallet (portefeuille froid)', 'Un portefeuille crypto gardé hors ligne (souvent un appareil matériel) pour une forte sécurité.'],
    ['Intérêts composés', 'Gagner des rendements sur tes rendements précédents, de sorte que la croissance s\'accélère avec le temps.'],
    ['Corrélation', 'À quel point deux actifs évoluent ensemble. Une faible corrélation aide la diversification.'],
    ['Prix de revient (cost basis)', 'Ce que tu as payé à l\'origine pour un actif, frais compris. Sert à calculer les gains pour l\'impôt.'],
    ['Portefeuille custodial', 'Un portefeuille où une entreprise (comme une plateforme d\'échange) détient les clés privées pour toi.'],
    ['DCA (dollar-cost averaging)', 'Investir un montant fixe à intervalles réguliers quel que soit le prix.'],
    ['DeFi (finance décentralisée)', 'Des services financiers comme le prêt et le trading gérés par des smart contracts au lieu d\'institutions traditionnelles.'],
    ['Dérivé', 'Un contrat dont la valeur dépend d\'un autre actif : futures, options, CFD.'],
    ['Diversification', 'Répartir l\'argent sur de nombreux actifs pour qu\'un seul échec ne te ruine pas.'],
    ['Dividende', 'Une part des bénéfices de l\'entreprise versée aux actionnaires.'],
    ['Doji', 'Une bougie dont l\'ouverture et la clôture sont presque égales, signalant l\'indécision.'],
    ['Drawdown', 'La baisse entre un sommet et un creux de la valeur de ton compte ou portefeuille.'],
    ['EMA (moyenne mobile exponentielle)', 'Une moyenne mobile qui donne plus de poids aux prix récents.'],
    ['Fonds d\'urgence', 'Épargne gardée pour les dépenses imprévues, généralement 3 à 6 mois de dépenses essentielles.'],
    ['BPA (bénéfice par action)', 'Le bénéfice net d\'une entreprise divisé par son nombre d\'actions.'],
    ['ETF (fonds indiciel coté)', 'Un panier d\'actifs qui se négocie en bourse comme une action.'],
    ['Plateforme d\'échange (exchange)', 'Une place de marché où les actifs sont achetés et vendus. En crypto, une plateforme pour échanger des coins.'],
    ['Espérance (expectancy)', 'Le montant moyen que tu t\'attends à gagner ou perdre par trade sur de nombreux trades.'],
    ['FDV (valorisation entièrement diluée)', 'Prix du token multiplié par l\'offre totale, montrant la valeur si tous les tokens étaient en circulation.'],
    ['Indice de peur et d\'avidité', 'Un score de sentiment de 0 à 100 pour le marché crypto (ou actions). Des valeurs extrêmes peuvent signaler surchauffe ou panique.'],
    ['Monnaie fiat', 'Monnaie émise par un État, comme l\'euro ou le dollar américain.'],
    ['FOMO', 'La peur de manquer une occasion (fear of missing out). L\'envie d\'acheter parce que d\'autres gagnent de l\'argent.'],
    ['Taux de funding', 'Un paiement périodique entre longs et shorts sur les futures perpétuels qui garde le prix du contrat près du spot.'],
    ['Futures', 'Contrats d\'achat ou de vente d\'un actif à un prix fixé à une date future.'],
    ['Frais de gas', 'Les frais payés à un réseau blockchain pour traiter une transaction.'],
    ['Halving', 'Un événement programmé qui divise par deux l\'émission de nouveaux bitcoins, environ tous les quatre ans.'],
    ['Portefeuille matériel (hardware wallet)', 'Un appareil physique dédié qui conserve hors ligne les clés privées crypto.'],
    ['Hash', 'Une courte empreinte numérique de données. Modifier les données modifie le hash.'],
    ['Fonds indiciel', 'Un fonds qui réplique un indice de marché à faible coût.'],
    ['Inflation', 'Une hausse générale des prix au fil du temps qui réduit ce que l\'argent peut acheter.'],
    ['Marge isolée', 'Un mode de marge où seule la garantie affectée à une position est exposée.'],
    ['KYC (connaître son client)', 'Vérifications d\'identité exigées par les plateformes financières régulées.'],
    ['Effet de levier', 'Utiliser de l\'argent emprunté ou des contrats pour contrôler une position plus grande que ton capital. Amplifie gains et pertes.'],
    ['Ordre à cours limité', 'Un ordre d\'achat ou de vente uniquement à un prix précisé ou meilleur.'],
    ['Liquidation', 'La fermeture forcée d\'une position à effet de levier quand les pertes épuisent ta marge.'],
    ['Liquidité', 'La facilité avec laquelle un actif peut être acheté ou vendu sans faire bouger le prix.'],
    ['Long', 'Acheter un actif en espérant que son prix monte.'],
    ['Maker / taker', 'Les makers ajoutent des ordres au carnet (frais plus bas) ; les takers les retirent en négociant immédiatement (frais plus élevés).'],
    ['Marge', 'La garantie que tu déposes pour ouvrir une position à effet de levier.'],
    ['Capitalisation boursière', 'Prix multiplié par le nombre d\'unités en circulation.'],
    ['Ordre au marché', 'Un ordre d\'achat ou de vente immédiat au meilleur prix disponible.'],
    ['Moyenne mobile', 'Le prix moyen sur un nombre donné de périodes, qui lisse le bruit pour montrer la tendance.'],
    ['Open interest (intérêt ouvert)', 'La valeur totale des contrats dérivés en cours qui n\'ont pas été clôturés.'],
    ['Ratio P/E (PER)', 'Prix de l\'action divisé par le bénéfice par action. Ce que tu paies pour chaque unité de profit.'],
    ['Paper trading', 'S\'entraîner au trading avec de l\'argent simulé.'],
    ['Futures perpétuels', 'Contrats futures sans date d\'expiration, maintenus près du prix spot par des paiements de funding.'],
    ['Clé privée', 'Le code secret qui prouve la propriété et te permet de déplacer des cryptos. Ne la partage jamais.'],
    ['Preuve d\'enjeu / preuve de travail', 'Deux façons pour les blockchains de parvenir à un accord : en verrouillant des coins (enjeu) ou en dépensant de la puissance de calcul (travail).'],
    ['Pump and dump', 'Un schéma qui fait la promotion d\'un actif pour faire monter son prix, puis vend aux acheteurs arrivés en retard.'],
    ['Multiple R', 'Le résultat d\'un trade mesuré en unités de risque initial. Risquer 50 € et en gagner 100 €, c\'est +2R.'],
    ['Rééquilibrage', 'Ajuster ton portefeuille pour le ramener à sa composition cible.'],
    ['Résistance', 'Une zone de prix où la pression vendeuse a arrêté à plusieurs reprises les hausses.'],
    ['RSI (indice de force relative)', 'Un indicateur de momentum allant de 0 à 100.'],
    ['Rug pull', 'Une arnaque où les développeurs vident la liquidité ou abandonnent un projet après avoir levé de l\'argent.'],
    ['Scalping', 'Trader à très court terme pour de petits gains, de nombreuses fois par jour.'],
    ['Phrase de récupération (seed phrase)', 'Une liste de 12 ou 24 mots qui peut recréer ton portefeuille. Celui qui l\'a contrôle les fonds.'],
    ['Short (vente à découvert)', 'Vendre un actif emprunté en espérant le racheter moins cher.'],
    ['Slippage (glissement)', 'L\'écart entre le prix d\'exécution attendu et réel d\'un ordre.'],
    ['Smart contract', 'Un programme sur une blockchain qui s\'exécute automatiquement quand des conditions sont remplies.'],
    ['Spot', 'Acheter ou vendre l\'actif réel au prix actuel, sans effet de levier.'],
    ['Spread', 'L\'écart entre le prix bid et le prix ask.'],
    ['Stablecoin', 'Un token crypto conçu pour garder une valeur stable, souvent adossé à une monnaie.'],
    ['Staking', 'Verrouiller des coins en preuve d\'enjeu pour aider à sécuriser un réseau en échange de récompenses.'],
    ['Stop-loss', 'Un ordre qui ferme une position si le prix atteint un niveau de perte fixé.'],
    ['Support', 'Une zone de prix où les acheteurs sont intervenus à plusieurs reprises.'],
    ['Swing trading', 'Garder des positions de plusieurs jours à plusieurs semaines.'],
    ['TER (ratio de frais totaux)', 'Les frais annuels prélevés par un fonds en pourcentage de ton investissement.'],
    ['Tokenomics', 'L\'économie d\'un token : offre, distribution, émission et utilité.'],
    ['OPCVM (UCITS)', 'Un cadre réglementaire européen pour les fonds d\'investissement destinés aux investisseurs particuliers.'],
    ['Volatilité', 'L\'ampleur et la vitesse des variations de prix à la hausse et à la baisse.'],
    ['Volume', 'La quantité d\'un actif échangée pendant une période.'],
    ['VWAP', 'Prix moyen pondéré par les volumes, une référence intrajournalière courante de juste valeur.'],
    ['Portefeuille (wallet)', 'Un logiciel ou un matériel qui conserve tes clés crypto et te permet d\'envoyer et de recevoir des coins.'],
    ['Baleine (whale)', 'Un détenteur d\'une très grande quantité d\'un actif, capable de faire bouger le marché.'],
    ['Rendement (yield)', 'Le revenu qu\'un investissement verse, exprimé en pourcentage de son prix.']
  ];

  /* ---------- Trading Lab : carte compacte sur la page d'accueil ---------- */
  MQ.misc.labCard = `<div class="lab">
    <div>
      <p class="eyebrow" style="color:#17143A;opacity:.75">Optionnel · du créateur de ce cours</p>
      <h2>Envie d'aller plus loin ? Découvre Trading Lab.</h2>
      <p>Ce cours est gratuit et complet en lui-même. Si tu veux une structure supplémentaire pour le trading, <b>Trading Lab</b> est le programme payant de l'auteur sur Gumroad : un cours de trading complet plus un <b>bot de trading</b> conçu pour aider les traders à appliquer leurs règles avec constance.</p>
      <ul><li>Programme de trading complet pour apprendre et pratiquer</li><li>Inclut un bot de trading utilisé par de nombreux membres</li><li>Abonnement mensuel, rien d'autre à acheter</li></ul>
      <div class="btnrow"><a class="btn" href="#lab">Voir le contenu</a><a class="btn alt" href="${LAB}" target="_blank" rel="noopener noreferrer">Ouvrir sur Gumroad ↗</a></div>
      <p class="fine">Le trading comporte un risque élevé de perte. Aucun cours ni bot ne peut garantir de résultats. Transparence : Trading Lab est vendu par l'auteur de Money Quest Academy.</p>
    </div>
    <div class="price"><small>Trading Lab</small><b>39 €</b><small>par mois + TVA</small></div>
  </div>`;

  /* ---------- Trading Lab : page complète ---------- */
  MQ.misc.labPage = `<section class="thead" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.ct}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Programme payant optionnel · du créateur de Money Quest</p><h1>Trading Lab</h1><p>Un programme de trading complet avec un bot de trading, pour ceux qui veulent de la structure après les parcours Trader gratuits.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)">
    ${B.box('warn', 'Transparence', '<p>Money Quest Academy est gratuite. Trading Lab est un produit payant distinct, vendu par le même auteur. Tu n\'en as pas besoin pour terminer un parcours de ce cours.</p>')}
    <h3>Ce que c'est</h3>
    <p>Trading Lab est un programme par abonnement disponible sur Gumroad. Il réunit au même endroit les connaissances nécessaires pour trader, ainsi qu'un <b>bot de trading</b> qui aide les traders à suivre des règles avec constance au lieu de prendre des décisions émotionnelles. Beaucoup de membres l'utilisent pour structurer leur trading.</p>
    <div class="lab" style="margin:1.4rem 0;box-shadow:var(--shadow)"><div><h2 style="font-size:1.8rem">39 € par mois + TVA</h2><p style="margin:0">Tout dans un seul abonnement : le programme de trading et le bot. Consulte la page Gumroad pour le prix actuel, la liste complète de ce qui est inclus et les conditions.</p>
      <div class="btnrow" style="margin-top:1rem"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Ouvrir Trading Lab sur Gumroad ↗</a></div></div><div class="price"><small>Trading Lab</small><b>39 €</b><small>par mois + TVA</small></div></div>
    <h3>À qui il peut convenir</h3>
    <ul><li>Les personnes qui ont terminé le parcours Day Trader ou Trader crypto et veulent un programme guidé.</li><li>Les traders qui peinent à garder leur discipline et veulent des règles exécutées avec constance.</li><li>Ceux qui préfèrent un système structuré à l'assemblage d'outils un par un.</li></ul>
    <h3>Qui devrait passer son chemin</h3>
    <ul><li>Toute personne qui n'a pas encore constitué de fonds d'urgence ou qui a des dettes à taux élevé.</li><li>Toute personne qui attend un profit garanti. Aucun produit honnête n'offre cela.</li><li>Les débutants qui ne se sont pas encore entraînés sur un simulateur. Fais d'abord le labo de paper trading.</li></ul>
    <h3>Comment il s'articule avec ce cours gratuit</h3>
    ${B.tbl(['', 'Money Quest (gratuit)', 'Trading Lab (payant)'], [
        ['Objectif', 'Enseigne les fondamentaux de l\'investissement et du trading', 'Programme et bot de trading pour traders actifs'],
        ['Coût', 'Gratuit', '39 € par mois + TVA'],
        ['Idéal pour', 'Tous ceux qui partent de zéro', 'Traders qui veulent plus de structure et d\'automatisation'],
        ['Risque', 'Éducatif, sans trading', 'Le trading comporte un risque réel de perte']
      ])}
    <h3>Des attentes honnêtes</h3>
    <p>Un bot est un logiciel qui suit des règles. Il peut t'aider à rester discipliné et ne se fatigue jamais, mais il ne crée pas d'avantage par lui-même et ne supprime pas le risque de marché. Les résultats dépendent des conditions de marché, de tes réglages, de ta gestion du risque et de ton propre comportement. Utilise la checklist de la leçon sur les bots : comprends les règles, teste en petite taille, utilise des permissions de trading uniquement et fixe une perte maximale.</p>
    ${B.warn('<p>N\'investis jamais de l\'argent que tu ne peux pas te permettre de perdre. Le trading, et surtout le trading à effet de levier, peut faire perdre de l\'argent très vite.</p>')}
    <div class="btnrow"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Ouvrir Trading Lab sur Gumroad ↗</a><a class="btn alt" href="#track-ct">Retour au parcours Trader crypto</a></div>
  </div></div></section>`;

  /* ---------- Parcours Pro ---------- */
  MQ.misc.proPage = `<section class="thead" style="${MQ.trackStyle('found')}"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.found}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Après les parcours</p><h1>Le Parcours Pro</h1><p>Ce qui sépare les amateurs des professionnels, et l'échelle du débutant à quelqu'un à qui les autres confient de l'argent.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="${MQ.trackStyle('found')}">
    <p>« Professionnel » n'est pas un titre qu'on se donne. C'est une façon de travailler. Les professionnels ont un <b>processus</b>, un <b>contrôle du risque</b>, des <b>registres</b> et de l'<b>humilité</b>. Ils survivent aux mauvaises années et font fructifier les bonnes. L'échelle ci-dessous vaut pour les investisseurs, les traders et la crypto.</p>
    <h3>Les quatre niveaux</h3>
    ${B.tbl(['Niveau', 'Ce que tu fais', 'Preuve que tu es prêt pour le niveau suivant'], [
      ['1. Étudiant', 'Termine les Fondamentaux et le parcours que tu as choisi. Entraîne-toi avec des simulateurs. Constitue ton fonds d\'urgence.', 'Tu peux expliquer à un ami le risque, la diversification, les coûts et ton propre plan. Ta base financière est en place.'],
      ['2. Apprenti', 'Investis régulièrement de petits montants réels. Tiens un journal de décisions. Si tu fais du trading, utilise 10 % de la taille prévue.', '12 mois d\'habitudes constantes ; 100 décisions consignées ; tu as suivi ton plan pendant au moins une période effrayante.'],
      ['3. Praticien', 'Un processus testé avec des résultats mesurés : allocation et rééquilibrage pour les investisseurs ; espérance positive et contrôle du drawdown pour les traders.', 'Deux ans ou plus de registres ; coûts et impôts compris ; pertes gérées sans enfreindre les règles.'],
      ['4. Professionnel', 'D\'autres s\'appuient sur ton travail : gérer de l\'argent pour toi-même à grande échelle, travailler en finance ou diriger une activité de trading structurée.', 'Historique vérifié, cadre de risque, formation continue et capacité à expliquer chaque décision.']
    ])}
    <h3>Ce que les professionnels font différemment</h3>
    <ol>
      <li><b>Ils pensent en probabilités, pas en prédictions.</b> « Si ce setup se produit 100 fois, que se passe-t-il en moyenne ? »</li>
      <li><b>Ils définissent la perte avant le gain.</b> Chaque position a une perte maximale acceptable.</li>
      <li><b>Ils sont obsédés par les coûts, les impôts et le processus</b>, ce qu'ils peuvent contrôler.</li>
      <li><b>Ils tiennent des registres.</b> Journaux, rapports de performance, changements de règles avec leurs raisons.</li>
      <li><b>Ils séparent les leçons des résultats.</b> Une bonne décision peut perdre ; une mauvaise décision peut gagner.</li>
      <li><b>Ils protègent leur psychologie.</b> Sommeil, routine et limites font partie du métier.</li>
      <li><b>Ils continuent d'apprendre.</b> Les marchés changent ; les règles qui marchent aussi.</li>
    </ol>
    <h3>Parcours de carrière en finance</h3>
    ${B.tbl(['Voie', 'En quoi elle consiste', 'Diplômes et certifications utiles'], [
      ['Analyste financier / chercheur', 'Étudier les entreprises et les marchés ; rédiger des recommandations.', 'Diplôme en finance ou économie ; programme CFA'],
      ['Gérant de portefeuille / de fonds', 'Décider des allocations pour des fonds ou des clients.', 'CFA, solide historique, licences'],
      ['Gestionnaire des risques', 'Mesurer et limiter les risques pris par une entreprise.', 'Certification FRM, mathématiques et statistiques'],
      ['Analyste ou développeur quantitatif', 'Construire des modèles, des pipelines de données et des stratégies automatisées.', 'Mathématiques, statistiques, programmation'],
      ['Analyste technique / stratège de marché', 'Recherche fondée sur les graphiques et la structure de marché.', 'Programme CMT'],
      ['Conseiller / planificateur financier', 'Aider les particuliers à planifier leur patrimoine.', 'Agrément local et certifications de planificateur'],
      ['Trader ou investisseur indépendant', 'Trader ou investir son propre capital comme une activité.', 'Capital, discipline, registres, impôts en ordre'],
      ['Métiers de la crypto', 'Recherche, sécurité, conformité, trading et développement dans les entreprises crypto.', 'Connaissance de la blockchain, compétences en sécurité, connaissance de la réglementation']
    ])}
    <h3>Une remarque sur les sociétés de prop trading</h3>
    <p>Certaines sociétés proposent de « financer » des traders après une évaluation. Certaines sont légitimes, mais beaucoup gagnent l'essentiel de leur argent grâce aux frais d'évaluation payés par ceux qui échouent. Lis attentivement les règles, consulte des avis indépendants, comprends le partage des profits et les limites de drawdown, et ne paie jamais de l'argent que tu ne peux pas te permettre de perdre.</p>
    <h3>Habitudes pour les 12 prochains mois</h3>
    <ul>
      <li>Lis un bon livre sur l'investissement ou le risque par trimestre.</li>
      <li>Passe en revue ton plan et tes résultats chaque mois ; réécris le plan une fois par an.</li>
      <li>Apprends des marchés sans avoir besoin de les trader : étudie l'histoire (1929, 1973, 1987, 2000, 2008, 2020, 2022).</li>
      <li>Partage ce que tu apprends. Enseigner à quelqu'un d'autre est le moyen le plus rapide de trouver tes lacunes.</li>
      <li>Reste humble. Les marchés punissent la certitude.</li>
    </ul>
    ${B.key('<p><b>La meilleure compétence professionnelle, c\'est de rester dans le jeu.</b> Si tu protèges ton capital et ton esprit, le temps et les intérêts composés font l\'essentiel du reste.</p>')}
    <div class="btnrow"><a class="btn" href="#cert">Voir ma progression et mon certificat</a><a class="btn alt" href="#home">Retour aux parcours</a></div>
  </div></div></section>`;
})();
