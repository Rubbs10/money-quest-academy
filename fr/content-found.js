/* Les Bases de l’Argent : 6 leçons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('found', [
    {
      id: 'f1', m: 9, t: 'L’argent, l’inflation et pourquoi épargner ne suffit pas',
      hook: 'Ton argent perd discrètement du pouvoir d’achat en ce moment. Voici comment le mesurer et que faire.',
      body: `
<p>Imagine qu’une pizza coûte <b>10 €</b> aujourd’hui. Si les prix augmentent de 3 % chaque année, la même pizza coûtera environ <b>18 €</b> dans 20 ans. La pizza n’a pas changé. C’est l’argent qui achète moins. Ce rétrécissement lent s’appelle l’<b>inflation</b>, et c’est la principale raison pour laquelle garder tout son argent dans un tiroir (ou sur un compte à 0 %) n’est pas un plan sûr. C’est une fuite lente.</p>

<h3>Ce que fait vraiment l’argent</h3>
<p>L’argent remplit trois rôles. C’est un <b>moyen d’échange</b> (tu l’échanges contre des choses), une <b>unité de compte</b> (les prix s’expriment avec) et une <b>réserve de valeur</b> (tu peux le garder pour plus tard). L’inflation s’attaque au troisième rôle. Sur quelques mois, on le remarque à peine. Sur 20 ans, c’est énorme.</p>

<h3>Comment fonctionne l’inflation</h3>
<p>Quand il y a plus d’argent et de demande dans l’économie que de choses à acheter, ou quand produire coûte plus cher (énergie, salaires, transport), les prix montent. Les banques centrales comme la Banque centrale européenne ou la Réserve fédérale américaine visent environ <b>2 % d’inflation par an</b>, qu’elles jugent saine. Parfois elle grimpe bien plus haut, comme en 2022, quand de nombreux pays ont vu les prix augmenter de 8 % ou plus en une seule année.</p>

${B.key('<p><b>Nominal vs. réel.</b> Si ton épargne progresse de 2 % mais que les prix augmentent de 3 %, tu ne t’es pas enrichi. Ton rendement <i>réel</i> est d’environ -1 %. Demande-toi toujours : que pourra acheter cet argent plus tard, et pas seulement combien d’euros aurai-je ?</p>')}

<h3>Ressens-le toi-même</h3>
<p>Bouge les curseurs ci-dessous. Remarque à quel point 6 % d’inflation sur 30 ans est brutal, et la différence que fait même un rendement modeste.</p>
${B.w('inflation')}

<h3>La règle de 72</h3>
<p>Une astuce pratique : divise 72 par le pourcentage annuel pour estimer en combien d’années quelque chose double. Avec 3 % d’inflation, les prix doublent en environ <b>24 ans</b> (72 ÷ 3). Avec 7 % de croissance d’un placement, l’argent double en environ <b>10 ans</b> (72 ÷ 7). Nous la réutiliserons dans la leçon sur les intérêts composés.</p>

${B.ex('<p>Marta a 19 ans et garde 5 000 € de jobs d’été dans un tiroir. Avec 3 % d’inflation, dans 10 ans cela fait toujours 5 000 € sur le papier, mais cela achète ce que 3 700 € achètent aujourd’hui. Son ami Diogo place les mêmes 5 000 € dans un fonds diversifié. Il ne montera pas en ligne droite (avec de bonnes et de mauvaises années), mais historiquement ces fonds ont battu l’inflation sur de longues périodes. Aucun des deux choix n’est sans risque. Ne rien faire est aussi un choix, et il a un coût.</p>')}

<h3>Épargner vs. investir : deux métiers différents</h3>
<ul>
<li><b>Épargner</b> sert aux besoins à court terme et à la sécurité : urgences, vacances de l’an prochain, un ordinateur. Tu veux que l’argent soit là, stable et facile d’accès.</li>
<li><b>Investir</b> sert aux objectifs à long terme (5 ans ou plus) : acheter des actifs qui peuvent croître plus vite que l’inflation, en acceptant que la valeur monte et descende en chemin.</li>
</ul>
<p>Tu as besoin des deux. L’épargne te protège des urgences pour ne jamais devoir vendre tes placements au mauvais moment.</p>

${B.warn('<p>« Investir » n’est pas un mot magique pour « gagner de l’argent ». Cela veut dire prendre un risque en échange de la <i>possibilité</i> de rendements plus élevés. Tu peux perdre de l’argent. Le reste de ce cours apprend à prendre ce risque avec sagesse.</p>')}

${B.take(['L’inflation réduit régulièrement ce que ton argent peut acheter, en général de 2 à 3 % par an.', 'Regarde les rendements réels (après inflation), pas seulement les chiffres nominaux.', 'L’épargne sert à la stabilité et aux urgences ; l’investissement sert à la croissance à long terme.', 'La règle de 72 estime le temps de doublement : 72 divisé par le taux annuel.'])}`,
      q: [
        ['Si ton livret rapporte 1 % et que l’inflation est de 3 %, que devient ton pouvoir d’achat ?', ['Il progresse de 1 %', 'Il baisse d’environ 2 % par an', 'Il reste identique', 'Il baisse de 4 %'], 1, 'Le rendement réel est à peu près le taux d’intérêt moins l’inflation : 1 % - 3 % = environ -2 %.'],
        ['Avec la règle de 72, en combien de temps les prix doublent-ils avec 4 % d’inflation ?', ['8 ans', '12 ans', '18 ans', '36 ans'], 2, '72 ÷ 4 = 18 ans.'],
        ['Quel est le meilleur usage d’un compte d’épargne ?', ['L’argent dont tu as besoin dans 1 à 2 ans et les urgences', 'Ton argent de retraite pour les 40 prochaines années', 'Devenir riche vite', 'Parier sur la Bourse'], 0, 'L’épargne sert aux besoins à court terme et à la sécurité. Les objectifs à long terme demandent en général des placements.']
      ]
    },
    {
      id: 'f2', m: 10, t: 'Ta base financière : budget, fonds d’urgence et dettes',
      hook: 'Avant d’investir le moindre euro, construis la base qui évite que la vie ne te renverse.',
      body: `
<p>La plupart des conseils d’investissement commencent par « achète ce fonds ». L’investissement intelligent commence <b>plus tôt</b> : avec un budget, un coussin de sécurité et un plan pour les dettes. Saute cette étape et un téléphone cassé ou une perte d’emploi pourrait te forcer à vendre tes placements au pire moment.</p>

<h3>Étape 1 : Sache où va ton argent</h3>
<p>Une règle populaire pour commencer est la <b>règle 50/30/20</b> : environ 50 % du revenu après impôts vont aux <b>besoins</b> (loyer, nourriture, transports, factures), 30 % aux <b>envies</b> (loisirs, abonnements, restaurants) et 20 % à l’<b>épargne et à l’investissement</b>. C’est un guide, pas une loi. Si tu es étudiant et gagnes 400 € par mois, 20 % font 80 €, et c’est un très bon début. Ce qui compte, c’est de prendre l’habitude.</p>
${B.w('budget')}

<h3>Étape 2 : Paie-toi en premier</h3>
<p>N’épargne pas « ce qui reste ». Programme un virement automatique vers ton épargne le jour de la paie, <i>avant</i> de pouvoir le dépenser. Traite-le comme une facture que tu dois à ton futur toi. L’automatisation bat la volonté.</p>

<h3>Étape 3 : Le fonds d’urgence</h3>
<p>Un <b>fonds d’urgence</b> est de l’argent gardé en sécurité et facile d’accès pour les imprévus : réparation de voiture, frais médicaux, perte d’emploi. L’objectif courant est de <b>3 à 6 mois de dépenses essentielles</b> sur un compte d’épargne classique (pas en actions ni en crypto). Les étudiants et les jeunes aux faibles charges peuvent commencer avec un mois et augmenter ensuite.</p>
${B.ex('<p>Rui investit 2 000 € en actions mais n’a pas de fonds d’urgence. Trois mois plus tard, son ordinateur tombe en panne et il lui faut 700 € tout de suite. Le marché est justement en baisse de 15 %, alors il vend à perte et fige la perte. Ana a investi le même montant mais a d’abord gardé 1 000 € d’épargne. Elle a payé l’ordinateur avec son épargne et ses placements sont restés intacts et se sont redressés ensuite. Mêmes placements, résultat très différent, grâce au coussin.</p>')}

<h3>Étape 4 : Gère les dettes avec sagesse</h3>
<ul>
<li>Une <b>dette à taux élevé</b> (cartes de crédit, découverts, crédits express, souvent 15 à 25 % par an ou plus) équivaut à un rendement négatif garanti. La rembourser bat presque n’importe quel placement. Fais-le en premier.</li>
<li>Une <b>dette à taux bas</b> (par exemple certains prêts étudiants ou immobiliers à faible taux) est normale. Tu peux continuer à la rembourser tout en commençant à investir.</li>
<li><b>N’emprunte jamais</b> pour investir dans des actifs risqués. Les pertes sont multipliées et tu dois toujours la dette.</li>
</ul>

<h3>Étape 5 : Investis dans ton plus grand atout : toi</h3>
<p>Quand on est jeune, le meilleur « placement » est souvent la compétence : apprendre un métier, une langue, le code, la vente. Augmenter ton revenu de 200 € par mois vaut plus qu’un rendement de 10 % sur 1 000 €. Investir dans les compétences et investir de l’argent vont de pair.</p>

${B.w('checklist', { key: 'f2', title: 'Ta liste de contrôle des bases financières', accent: 'found', items: 'Je sais à peu près ce que je gagne et dépense chaque mois|J’ai un compte d’épargne séparé pour les urgences|J’ai programmé un virement mensuel automatique vers l’épargne|J’ai au moins 1 mois de dépenses essentielles d’avance (objectif : 3 à 6)|Je n’ai pas de dette à taux élevé, ou j’ai un plan pour la rembourser|Je comprends que je ne dois investir que l’argent dont je n’aurai pas besoin pendant 5 ans ou plus' })}

${B.take(['Construis d’abord la base : budget, fonds d’urgence, aucune dette à taux élevé.', 'Utilise 50/30/20 comme guide de départ et automatise l’épargne le jour de la paie.', 'Garde le fonds d’urgence sur un compte sûr et accessible, pas dans des actifs risqués.', 'Rembourser une carte de crédit à 20 % équivaut à un rendement garanti de 20 %.'])}`,
      q: [
        ['Quelle dette faut-il généralement rembourser AVANT d’investir ?', ['Un prêt étudiant à 3 %', 'Une carte de crédit à 20 % par an', 'Aucune, investis toujours d’abord', 'Une dette envers un ami à 0 %'], 1, 'Une dette à taux élevé est une perte garantie qui bat les rendements habituels des placements.'],
        ['Quel est le meilleur endroit pour un fonds d’urgence ?', ['Des actions', 'De la crypto', 'Un compte d’épargne sûr et facile d’accès', 'Les actions d’une seule entreprise'], 2, 'L’essentiel est que l’argent soit disponible et stable quand tu en as besoin.'],
        ['Que signifie « paie-toi en premier » ?', ['Dépenser pour toi avant tout le reste', 'Épargner automatiquement à la paie, avant de dépenser', 'Emprunter pour investir', 'Ne pas payer les factures'], 1, 'L’épargne automatique à la paie crée une habitude et supprime la tentation de dépenser.']
      ]
    },
    {
      id: 'f3', m: 10, t: 'Risque, rendement et temps',
      hook: 'Pourquoi des rendements plus élevés viennent toujours avec des secousses, et comment le temps change l’équation.',
      body: `
<p>Voici la règle la plus importante de la finance : <b>un rendement potentiel plus élevé vient avec un risque plus élevé</b>. Si quelqu’un t’offre un rendement élevé sans risque, soit il ment, soit c’est toi le produit.</p>

<h3>Ce que le risque signifie vraiment</h3>
<p>Dans le langage courant, le risque veut dire « je pourrais perdre de l’argent ». Les professionnels regardent deux choses :</p>
<ul>
<li><b>La volatilité</b> : à quel point le prix fait des bonds. Un fonds d’actions peut perdre 30 % lors d’une mauvaise année puis se redresser. C’est de la volatilité.</li>
<li><b>La perte définitive</b> : l’argent est perdu pour de bon. Une entreprise qui fait faillite, une arnaque, une crypto qui tombe à zéro.</li>
</ul>
<p>La volatilité est le prix à payer pour des rendements plus élevés. La perte définitive est ce que tu essaies d’éviter par la diversification et de bons choix.</p>

${B.w('ladder')}

<h3>Le temps change tout</h3>
<p>Ton <b>horizon de placement</b> est le temps qui te sépare du moment où tu auras besoin de l’argent. Les actions peuvent beaucoup bouger en un an, mais sur 15 à 20 ans, les marchés d’actions diversifiés ont historiquement récompensé les investisseurs patients. Sur 1 an, le résultat ressemble à un pile ou face. Sur 20 ans, beaucoup moins (sans jamais être garanti).</p>
${B.key('<p><b>La règle pratique des 5 ans.</b> L’argent dont tu as besoin d’ici environ 5 ans ne devrait pas dormir dans des actifs volatils comme les actions ou la crypto. Si un krach survient juste avant d’en avoir besoin, tu n’auras pas le temps de te redresser.</p>')}

<h3>Tolérance au risque vs. capacité à prendre des risques</h3>
<ul>
<li><b>Capacité à prendre des risques</b> : quelle perte tu peux te permettre financièrement (revenu stable, pas de dette, horizon long = capacité élevée).</li>
<li><b>Tolérance au risque</b> : quelle perte tu peux supporter émotionnellement sans vendre dans la panique.</li>
</ul>
<p>Ton vrai niveau de risque est le <i>plus bas</i> des deux. Un jeune à l’horizon long peut avoir une capacité élevée, mais si une baisse de 30 % le poussait à tout vendre, sa tolérance est faible et le plan doit la respecter.</p>

${B.ex('<p>Pense à des montagnes russes et à un train pour la même ville. Les montagnes russes (actions) sont palpitantes et secouées, et sur un long trajet elles peuvent t’emmener plus loin. Le train (obligations, épargne) est plus doux mais plus lent. Si tu as le mal des montagnes russes et que tu descends à mi-chemin, tu n’arrives nulle part. Choisis le trajet que tu peux terminer.</p>')}

<h3>La diversification : le seul repas gratuit</h3>
<p>Ne mets pas tous tes œufs dans le même panier. Répartir l’argent sur de nombreuses entreprises, pays et types d’actifs signifie qu’un seul désastre ne peut pas te détruire. Les économistes appellent la diversification ce qui ressemble le plus à un repas gratuit en investissement : elle réduit le risque sans forcément réduire le rendement attendu. Tu la pratiqueras dans le parcours Investisseur.</p>

${B.warn('<p>Les rendements passés ne sont pas une promesse. « Ça a fait +300 % l’an dernier » ne dit presque rien sur l’année prochaine, et courir après le gagnant de l’an dernier est l’une des erreurs de débutant les plus courantes.</p>')}

${B.take(['Un rendement attendu plus élevé vient avec un risque plus élevé. Sans exception.', 'La volatilité, ce sont des hauts et des bas temporaires ; la perte définitive est le vrai ennemi.', 'L’argent dont tu as besoin d’ici environ 5 ans n’a pas sa place dans des actifs volatils.', 'Ton vrai niveau de risque est le plus bas entre ta capacité financière et ta tolérance émotionnelle.', 'La diversification réduit le risque sans forcément réduire le rendement attendu.'])}`,
      q: [
        ['Un ami promet « 20 % par an, garanti, sans risque ». La réaction la plus intelligente est…', ['Tout investir vite', 'Se méfier fortement : les rendements élevés sans risque n’existent pas', 'Demander une remise', 'Emprunter pour investir davantage'], 1, 'Rendement et risque vont ensemble. Des rendements élevés garantis sont un signal classique d’arnaque.'],
        ['Tu as besoin d’argent pour l’apport d’une maison dans 2 ans. Qu’est-ce qui convient le mieux ?', ['100 % dans une crypto volatile', 'Surtout de l’épargne sûre et stable', '100 % dans une seule action', 'Une position à effet de levier'], 1, 'Les horizons courts exigent de la stabilité, pour qu’un krach ne ruine pas le plan juste avant d’avoir besoin de l’argent.'],
        ['Quelle est la différence entre capacité à prendre des risques et tolérance au risque ?', ['C’est la même chose', 'La capacité, c’est ce que tu peux te permettre de perdre ; la tolérance, c’est ce que tu supportes émotionnellement', 'La capacité est émotionnelle ; la tolérance est financière', 'La tolérance ne compte que pour les traders'], 1, 'Les deux comptent. Ta vraie limite est la plus basse des deux.']
      ]
    },
    {
      id: 'f4', m: 11, t: 'La magie des intérêts composés',
      hook: 'L’effet boule de neige qui transforme de petites sommes régulières en vraie fortune, et pourquoi commencer tôt compte plus que commencer fort.',
      body: `
<p>Les <b>intérêts composés</b>, c’est gagner des rendements sur tes rendements. Imagine que tu fais rouler une petite boule de neige sur une longue pente. Au début elle grossit à peine. Plus tard, chaque tour ajoute plus de neige parce qu’il y en a déjà beaucoup à laquelle s’accrocher. C’est la capitalisation.</p>

<h3>Simple vs. composé</h3>
<p>Avec un intérêt simple, 1 000 € à 10 % rapportent 100 € par an, toujours : après 10 ans tu as 2 000 €. Avec des intérêts composés, les 10 % de chaque année sont calculés sur le montant <i>nouveau et plus grand</i> : après 10 ans tu as environ <b>2 594 €</b>. Après 30 ans, l’intérêt simple donne 4 000 € alors que la capitalisation donne environ <b>17 450 €</b>. Même taux, même départ, résultat radicalement différent.</p>

<h3>Joue avec la machine</h3>
<p>Essaie : fixe un montant mensuel, un rendement et un nombre d’années. Puis utilise le curseur « attendre » pour voir ce qui se passe si tu commences 10 ans plus tard.</p>
${B.w('compound', { wait: 10 })}

${B.ex('<p><b>Anna contre Ben.</b> Anna commence à investir 100 € par mois à 20 ans et s’arrête à 30 (10 ans, 12 000 € versés) sans jamais rien ajouter. Ben attend 30 ans et investit 100 € par mois jusqu’à 60 ans (30 ans, 36 000 € versés). À 7 % par an, à 60 ans Anna peut se retrouver avec un montant similaire, voire supérieur, alors qu’elle a versé trois fois moins. Pourquoi ? Son argent a eu 10 ans de boule de neige en plus. Le temps bat le montant.</p>')}

<h3>Les trois leviers de la capitalisation</h3>
<ol>
<li><b>Le temps</b> : le levier le plus puissant, et le seul que tu ne peux pas racheter. Commence maintenant, même petit.</li>
<li><b>Les versements réguliers</b> : ajouter de l’argent régulièrement continue de nourrir la boule de neige.</li>
<li><b>Le rendement</b> : des rendements plus élevés aident, mais ils viennent avec plus de risques et de frais. Ne les poursuis pas au détriment des deux premiers.</li>
</ol>

<h3>La capitalisation joue aussi contre toi</h3>
<p>La dette de carte de crédit à 20 % se capitalise contre toi. Les <b>frais</b> aussi : un fonds qui coûte 2 % par an peut avaler une grande partie de ton résultat final sur des décennies (nous le mesurerons dans le parcours Investisseur).</p>

${B.key('<p><b>Le meilleur moment pour commencer, c’était hier. Le deuxième meilleur, c’est aujourd’hui.</b> Tes 50 premiers euros par mois comptent plus pour ton avenir qu’une stratégie parfaite que tu lancerais dans cinq ans.</p>')}

${B.warn('<p>Les vrais placements ne progressent pas en ligne lisse. Une « moyenne de 7 % » peut signifier +25 % une année et -15 % la suivante. La courbe du widget est une illustration lissée. Ne compte jamais sur un rendement promis.</p>')}

${B.take(['La capitalisation, c’est gagner des rendements sur les rendements précédents : la croissance s’accélère avec le temps.', 'Commencer tôt bat investir plus tard : le temps est le levier le plus fort.', 'Des versements réguliers et de la patience construisent la richesse ; attendre le « moment parfait » coûte de l’argent.', 'La capitalisation joue aussi contre toi dans les dettes et les frais élevés.'])}`,
      q: [
        ['En combien de temps l’argent double-t-il environ à 8 % par an (règle de 72) ?', ['4 ans', '9 ans', '15 ans', '20 ans'], 1, '72 ÷ 8 = 9 ans.'],
        ['Quel facteur est le PLUS puissant dans la capitalisation ?', ['Choisir l’actif du moment', 'Le temps', 'Regarder les cours tous les jours', 'Seulement un gros montant de départ'], 1, 'Le temps permet à la croissance de s’appuyer sur la croissance. On ne rachète pas les années perdues.'],
        ['Pourquoi des frais de fonds de 2 % par an peuvent-ils être si dommageables sur des décennies ?', ['Ils ne sont facturés qu’une fois', 'Ils se capitalisent contre toi, réduisant la base qui croît chaque année', 'Ils sont déductibles des impôts', 'Ils ne comptent qu’en marché baissier'], 1, 'Les frais se paient chaque année : tu perds donc les frais et toute la croissance future que cet argent aurait rapportée.']
      ]
    },
    {
      id: 'f5', m: 13, t: 'La boîte à outils de l’investisseur : actions, obligations, fonds, ETF et plus',
      hook: 'Un tour d’horizon en langage simple de tout ce dans quoi tu peux investir, comment chacun rapporte de l’argent et ce qui peut mal tourner.',
      body: `
<p>Tu croiseras beaucoup de noms au fil de ton parcours d’investisseur. Voici la boîte à outils complète, expliquée simplement.</p>

<h3>Les grandes classes d’actifs</h3>
<ul>
<li><b>Liquidités et épargne</b> : stables, rendement faible, protégées par la garantie des dépôts jusqu’à une limite (dans l’UE, en général 100 000 € par banque).</li>
<li><b>Actions</b> : tu possèdes une petite part d’une entreprise. Tu gagnes quand le cours monte et grâce aux dividendes (une part des bénéfices). Fort potentiel à long terme, grosses variations.</li>
<li><b>Obligations</b> : tu prêtes de l’argent à un État ou à une entreprise et tu reçois des intérêts réguliers puis ton argent à la fin. En général plus calmes que les actions, mais les prix baissent quand les taux montent et les entreprises peuvent ne pas rembourser.</li>
<li><b>Fonds et ETF</b> : des paniers contenant beaucoup d’actions ou d’obligations à la fois, pour diversifier avec un seul achat.</li>
<li><b>Immobilier</b> : biens immobiliers ou sociétés immobilières cotées (SIIC, REIT). Loyers plus variations de prix. Gros montants, difficile à vendre vite, demande souvent un crédit.</li>
<li><b>Matières premières et or</b> : matières brutes. L’or est souvent détenu comme « valeur refuge » et ne produit aucun revenu.</li>
<li><b>Crypto-actifs</b> : actifs numériques sur des blockchains, comme Bitcoin et Ethereum. Très volatils, avec en plus des risques de sécurité et d’arnaques. Les parcours crypto les traitent en profondeur.</li>
<li><b>Produits dérivés</b> (futures, options, CFD) : des contrats dont la valeur dépend d’un autre actif, souvent avec effet de levier. Avancés, très risqués, et une cause majeure des pertes de débutants.</li>
</ul>

${B.tbl(['Actif', 'Comment il rapporte', 'Risque principal', 'Convient pour'], [
        ['Épargne', 'Intérêts', 'L’inflation dépasse les intérêts', 'Urgences, objectifs à court terme'],
        ['Actions', 'Hausse du cours + dividendes', 'Fortes baisses, faillite de l’entreprise', 'Croissance à long terme (5 ans et plus)'],
        ['Obligations', 'Paiement d’intérêts', 'Hausse des taux, défaut', 'Stabilité, horizon moyen'],
        ['ETF / fonds', 'Ce qu’ils contiennent', 'Comme les actifs qu’ils contiennent, plus les frais', 'Diversification facile'],
        ['Immobilier', 'Loyers + hausse des prix', 'Illiquide, dette, marché local', 'Horizon long, capital plus important'],
        ['Crypto', 'Variations de prix (surtout)', 'Volatilité extrême, arnaques, piratages', 'Seulement une petite position satellite'],
        ['Dérivés / CFD', 'Paris à effet de levier sur les prix', 'Perdre plus que prévu, vite', 'Traders expérimentés uniquement']
      ])}

<h3>Les obligations en 30 secondes</h3>
<p>Imagine que tu prêtes 1 000 € à un État pour 10 ans et qu’il te verse 3 % (30 €) chaque année, puis te rend tes 1 000 €. Simple. Le hic : si les nouvelles obligations se mettent à payer 5 %, personne ne veut de ton obligation à 3 % au prix plein, donc son prix baisse. C’est pourquoi les prix des obligations et les taux d’intérêt évoluent en sens inverse.</p>

<h3>Les actions en 30 secondes</h3>
<p>Si une entreprise a 1 000 000 d’actions et que tu en possèdes 1 000, tu en détiens 0,1 %. Si l’entreprise gagne plus de bénéfices avec le temps, les actions ont tendance à prendre de la valeur. Si elle peine, elles peuvent tomber à rien. C’est pourquoi nous recommandons rarement d’en acheter une seule.</p>

<h3>Où acheter tout ça ?</h3>
<p>Il te faut un <b>courtier</b> (une société qui exécute tes ordres), une banque proposant des services d’investissement ou un exchange crypto. Choisis-en un qui soit <b>régulé</b> dans ta région, qui facture peu de frais et sépare tes actifs des siens. Les titres détenus chez un courtier sont normalement ségrégués et couverts par un système d’indemnisation des investisseurs en dernier recours (dans l’UE, souvent 20 000 €), mais ce n’est pas une promesse que tu ne perdras pas d’argent à cause des baisses de marché.</p>

${B.warn('<p>Complexité n’est pas sophistication. Les produits aux noms savants, aux structures « garanties », aux commissions élevées ou à effet de levier enrichissent en général le vendeur, pas toi. Si tu ne sais pas expliquer en une phrase comment il rapporte de l’argent, ne l’achète pas.</p>')}

${B.take(['Chaque classe d’actifs rapporte différemment et comporte des risques différents.', 'Les fonds et ETF regroupent beaucoup d’actifs pour diversifier instantanément.', 'Les prix des obligations évoluent à l’inverse des taux d’intérêt.', 'Les dérivés et CFD sont pour traders expérimentés, pas pour débutants.', 'Utilise un courtier ou une plateforme régulés et comprends ce que tu achètes.'])}`,
      q: [
        ['Qu’est-ce qu’un ETF ?', ['Un type de crypto', 'Un panier de nombreux actifs que tu peux acheter comme un seul produit en Bourse', 'Un compte d’épargne', 'Un prêt à une entreprise'], 1, 'Un fonds négocié en Bourse contient de nombreuses actions ou obligations, ce qui donne une diversification immédiate.'],
        ['Pourquoi les prix des obligations baissent-ils généralement quand les taux montent ?', ['Les obligations arrêtent de verser des intérêts', 'Les nouvelles obligations paient plus, donc les anciennes, qui paient moins, valent moins', 'Les États font défaut', 'L’inflation disparaît'], 1, 'Les investisseurs préfèrent les nouveaux taux plus élevés, donc l’ancienne obligation doit être moins chère pour rester compétitive.'],
        ['Quel produit est le PLUS dangereux pour un débutant ?', ['Un ETF actions sur indice mondial', 'Un compte d’épargne', 'Un CFD à effet de levier', 'Une obligation d’État'], 2, 'Les produits à effet de levier peuvent provoquer de grosses pertes très vite.']
      ]
    },
    {
      id: 'f6', m: 11, t: 'Ton cerveau contre ton argent : biais et discipline',
      hook: 'La plus grande menace pour tes rendements n’est pas le marché. C’est la personne qui te regarde dans le miroir.',
      body: `
<p>Deux investisseurs achètent le même fonds. L’un obtient de bons rendements. L’autre perd de l’argent. La différence est généralement le comportement : quand ils ont acheté, quand ils ont paniqué, ce qu’ils ont poursuivi. Comprendre ton propre esprit est l’avantage le moins cher que tu auras jamais.</p>

<h3>Les pièges mentaux les plus courants</h3>
<ul>
<li><b>L’aversion à la perte</b> : perdre 100 € fait environ deux fois plus mal que gagner 100 € ne fait plaisir. Cela pousse à vendre les gagnants trop tôt et à garder les perdants trop longtemps, en espérant « revenir à l’équilibre ».</li>
<li><b>Le FOMO (peur de rater quelque chose)</b> : tu vois une crypto monter de 80 % cette semaine et tu achètes au sommet parce que tout le monde en parle.</li>
<li><b>Le comportement de troupeau</b> : faire comme la foule paraît sûr, mais la foule se trompe souvent aux extrêmes (euphorie aux sommets, panique aux creux).</li>
<li><b>L’excès de confiance</b> : quelques gains chanceux te donnent l’impression d’être un génie. Les marchés sont très doués pour rendre humble.</li>
<li><b>Le biais de récence</b> : croire que le passé récent va durer toujours. « Ça monte toujours » après un boom ; « ça ne se redressera jamais » après un krach.</li>
<li><b>Le biais de confirmation</b> : ne lire que les avis qui vont dans le sens de ce que tu détiens déjà.</li>
<li><b>Le biais des coûts irrécupérables</b> : refuser de vendre une position perdante parce que « j’ai déjà tellement perdu ».</li>
<li><b>L’ancrage</b> : se fixer sur le prix payé plutôt que sur ce que l’actif vaut aujourd’hui.</li>
</ul>

${B.ex('<p>Lena a acheté une crypto à 10 € après qu’un ami lui a dit qu’elle « irait à 100 € ». Elle tombe à 5 €. Au lieu de se demander « est-ce que j’achèterais ça aujourd’hui à 5 € ? », elle pense « je dois attendre qu’elle revienne à 10 € ». Son prix est ancré sur son achat. Des mois plus tard, elle est à 1 €. Le marché ne sait pas et se moque de ce qu’elle a payé.</p>')}

<h3>Les antidotes : les règles battent les émotions</h3>
<ol>
<li><b>Écris un plan avant d’investir.</b> Ce que tu achèteras, combien, à quelle fréquence, et ce que tu feras en cas de krach. Les décisions prises au calme battent celles prises dans la panique.</li>
<li><b>Automatise.</b> L’investissement mensuel automatique supprime les décisions de timing.</li>
<li><b>La règle des 24 heures.</b> N’achète jamais quelque chose à cause d’un tuyau brûlant dans les 24 heures qui suivent.</li>
<li><b>Regarde moins.</b> Surveiller les cours chaque jour augmente le stress et les mauvaises décisions. Les investisseurs de long terme peuvent regarder chaque mois ou trimestre.</li>
<li><b>Tiens un journal.</b> Note pourquoi tu as acheté et ce que tu attendais. Le relire plus tard t’apprend plus vite que n’importe quel livre.</li>
<li><b>Limite l’« argent pour jouer ».</b> Si tu dois spéculer, plafonne à une petite part (par exemple 5 %) pour que les erreurs ne nuisent pas à tes objectifs.</li>
</ol>

<h3>Ton régime d’informations</h3>
<p>Les réseaux sociaux regorgent de « finfluenceurs » qui montrent des captures d’écran de gros profits. Rappelle-toi le biais du survivant : tu ne vois que les gagnants qui publient. Pose trois questions à quiconque donne des conseils : <b>Comment est-il payé ? Que vend-il ? Puis-je voir son historique complet et vérifié, pertes comprises ?</b> Méfie-toi tout particulièrement de ceux qui promettent la certitude.</p>

${B.tryit('<p>Écris en une phrase ce que tu feras si tes placements chutent de 30 % l’an prochain. Garde-la là où tu la retrouveras. Cette phrase est ta première politique d’investissement.</p>')}

${B.take(['Le comportement, pas l’intelligence, décide de la plupart des résultats d’investissement.', 'Connais les pièges : aversion à la perte, FOMO, effet de troupeau, excès de confiance, ancrage.', 'Utilise des règles écrites, l’automatisation et un délai de réflexion pour te protéger de toi-même.', 'Interroge chaque conseil : comment cette personne est-elle payée ?'])}`,
      q: [
        ['Tu gardes un placement perdant uniquement parce que « j’ai déjà tellement perdu ». C’est…', ['De la diversification', 'Le biais des coûts irrécupérables', 'De la capitalisation', 'Du rééquilibrage'], 1, 'Les pertes passées sont perdues dans tous les cas. La seule question utile est de savoir s’il faut garder l’actif à partir d’aujourd’hui.'],
        ['Quelle est une bonne défense contre le FOMO ?', ['Acheter plus vite', 'Un plan écrit et une règle de réflexion de 24 heures', 'Suivre plus d’influenceurs', 'Vérifier les cours toutes les heures'], 1, 'Les règles décidées au calme battent les émotions décidées dans l’excitation.'],
        ['Pourquoi faut-il se méfier des captures d’écran de profits sur les réseaux sociaux ?', ['Elles sont toujours fausses', 'Biais du survivant : on ne voit ni les perdants ni l’historique complet', 'Elles sont illégales', 'Elles prouvent que la stratégie marche'], 1, 'Les gens publient leurs gains et cachent leurs pertes, et certaines captures sont inventées : ce ne sont pas des preuves.']
      ]
    }
  ]);
})();
