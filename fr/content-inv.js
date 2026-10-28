/* Parcours Investisseur au Quotidien : 8 leçons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('inv', [
    {
      id: 'a1', m: 10, t: 'Fixe tes objectifs et choisis tes comptes',
      hook: 'Avant de choisir quoi acheter, décide à quoi sert l’argent et où il va vivre.',
      body: `
<p>Les grands investisseurs ne commencent pas par « que dois-je acheter ? ». Ils commencent par « à quoi sert cet argent et quand en ai-je besoin ? ». La réponse décide de presque tout le reste.</p>

<h3>Utilise trois seaux</h3>
<ul>
<li><b>Seau sécurité (0 à 2 ans)</b> : fonds d’urgence et argent pour les dépenses à venir. Compte d’épargne. Zéro risque de marché.</li>
<li><b>Seau objectifs (2 à 10 ans)</b> : une voiture, l’apport d’un logement, un master. Surtout des actifs calmes avec une plus petite part d’actions.</li>
<li><b>Seau croissance (10 ans et plus)</b> : retraite et patrimoine à long terme. C’est là qu’une forte part d’actions mondiales a du sens, parce que le temps lisse les secousses.</li>
</ul>

<h3>Rends tes objectifs précis</h3>
<p>« Je veux être riche » n’est pas un objectif. « Je veux 30 000 € pour l’apport d’un logement dans 6 ans » en est un. Les objectifs précis te disent combien épargner et quel risque est approprié. Si la cible est 30 000 € dans 6 ans et que tu peux investir 350 € par mois, tu peux tester si le plan fonctionne avant de commencer.</p>

<h3>Types de comptes</h3>
<p>La plupart des pays proposent des <b>comptes à avantage fiscal</b> pour investir ou préparer la retraite. Exemples : 401(k) et Roth IRA aux États-Unis, Stocks and Shares ISA et SIPP au Royaume-Uni, CELI et REER au Canada, plan d’épargne retraite (PER) et PEA en France, ainsi que divers produits de retraite ailleurs. Ils peuvent réduire légalement l’impôt que tu paies, parfois beaucoup. Vérifie ce qui existe dans <b>ton</b> pays, y compris les règles de retrait.</p>
<p>Un <b>compte-titres</b> ordinaire est l’option flexible : tu peux investir et retirer à tout moment, mais tu paies des impôts selon les règles locales.</p>

<h3>Comment choisir un courtier</h3>
${B.tbl(['À vérifier', 'Pourquoi c’est important'], [
        ['Régulé dans ta région', 'Te donne des protections légales et des règles que le courtier doit respecter'],
        ['Frais bas', 'Commissions, conversion de devises, conservation et inactivité rongent discrètement les rendements'],
        ['Accès à des ETF larges', 'Tu veux des produits simples et diversifiés à bas coût'],
        ['Protection des actifs', 'Tes titres doivent être détenus séparément de l’argent propre du courtier ; vérifie le système d’indemnisation'],
        ['Appli simple et fiable', 'Tu l’utiliseras pendant des décennies ; une interface claire évite les erreurs'],
        ['Ne pousse pas de produits risqués', 'Méfie-toi des plateformes qui promeuvent levier, CFD ou trading constant auprès des débutants']
      ])}

<h3>Ouvrir un compte : à quoi s’attendre</h3>
<ol>
<li>Crée le compte et confirme ton identité (pièce d’identité et parfois un selfie, plus un justificatif de domicile).</li>
<li>Relie ton compte bancaire et fais un petit premier dépôt pour tester le processus.</li>
<li>Active l’authentification à deux facteurs avec une application d’authentification.</li>
<li>Lis la grille tarifaire. Regarde en particulier les frais de transaction, de conversion de devises et tout ce qui est facturé juste pour détenir le compte.</li>
</ol>
${B.warn('<p>Ne partage jamais tes identifiants avec personne. N’utilise pas de services de « gestion de compte » proposés par des inconnus qui promettent des rendements. Les conseillers légitimes sont agréés et ne demandent jamais ton mot de passe.</p>')}

${B.w('checklist', { key: 'a1', title: 'Avant ton premier investissement', accent: 'inv', items: 'J’ai écrit mon objectif, le montant et l’échéance|Mon fonds d’urgence est en place|J’ai vérifié les comptes à avantage fiscal disponibles dans mon pays|J’ai choisi un courtier régulé et lu sa grille tarifaire|J’ai activé l’authentification à deux facteurs avec une application|J’ai décidé combien j’investirai chaque mois et programmé un rappel ou un virement automatique' })}

${B.take(['Commence par l’objectif et l’échéance de l’argent, puis choisis les actifs.', 'Utilise trois seaux : sécurité, objectifs et croissance.', 'Vérifie les comptes à avantage fiscal dans ton propre pays.', 'Choisis un courtier régulé et bon marché qui ne pousse pas de produits risqués.'])}`,
      q: [
        ['L’argent dont tu auras besoin pour l’apport d’un logement dans 3 ans doit surtout être placé en…', ['100 % d’actions à haut risque', 'Actifs calmes à risque limité', 'Une nouvelle crypto meme', 'Positions à effet de levier'], 1, 'Avec un horizon court, un krach juste avant d’avoir besoin de l’argent serait dommageable.'],
        ['Que faut-il vérifier en premier en choisissant un courtier ?', ['Qu’il fait de la publicité tape-à-l’œil', 'Qu’il est régulé dans ta région et a des frais bas et transparents', 'Qu’il propose un levier de 100x', 'Que des amis l’utilisent'], 1, 'La réglementation et les coûts comptent bien plus que le marketing.'],
        ['Quel est l’avantage principal des comptes à avantage fiscal ?', ['Des rendements garantis', 'Ils peuvent réduire légalement les impôts sur les gains', 'Aucun risque', 'Des taux d’intérêt plus élevés sur les actions'], 1, 'Ils ne changent pas le risque de marché, mais moins d’impôts signifie qu’il te reste davantage du rendement.']
      ]
    },
    {
      id: 'a2', m: 11, t: 'ETF et fonds indiciels : le panier de friandises',
      hook: 'La façon la plus simple et la moins chère de posséder des centaines ou des milliers d’entreprises d’un coup.',
      body: `
<p>Imagine que tu veuilles goûter à toutes les friandises d’un immense supermarché. Tu pourrais acheter un paquet de chaque sorte, ce qui est lent et cher. Ou tu pourrais acheter un <b>panier</b> tout prêt avec un peu de tout. Un <b>ETF</b> (fonds négocié en Bourse) est ce panier pour les placements. Tu achètes une part de l’ETF et tu possèdes une petite tranche de centaines ou de milliers d’entreprises.</p>

<h3>Les fonds indiciels expliqués</h3>
<p>Un <b>indice</b> est une liste d’entreprises choisies selon des règles, comme « les 500 plus grandes entreprises américaines » (S&amp;P 500) ou « environ 1 400 grandes et moyennes entreprises des pays développés » (MSCI World). Un <b>fonds indiciel</b> ou <b>ETF indiciel</b> se contente de copier cette liste automatiquement. Aucun gérant ne devine quelles actions choisir, donc les coûts sont très bas.</p>

<h3>Pourquoi l’indexation marche pour la plupart des gens</h3>
<p>Battre le marché de façon régulière est extrêmement difficile. Année après année, les rapports comparant les fonds actifs à leur indice de référence constatent que la majorité des fonds actifs font moins bien sur 10 à 15 ans, souvent à peu près du montant de leurs frais plus élevés. Les fonds indiciels te garantissent le rendement du marché moins des frais minuscules, ce qui bat la plupart des professionnels après coûts.</p>
${B.ex('<p>Imagine que toi et 99 amis essayiez tous de choisir des actions. Après coûts, le résultat moyen est inférieur au marché, car pour chaque gagnant il y a un perdant de l’autre côté de la transaction, et tout le monde paie des frais. Si tu détiens simplement tout le marché via un fonds indiciel, tu captes la moyenne sans payer la « taxe de la gestion active ».</p>')}

<h3>Types d’indices populaires</h3>
${B.tbl(['Indice', 'Ce qu’il couvre', 'Notes'], [
        ['S&amp;P 500', '500 grandes entreprises américaines', 'Très pondéré en technologie américaine et grands noms'],
        ['MSCI World', 'Environ 1 400 grandes et moyennes capitalisations des pays développés', 'Environ 70 % d’États-Unis'],
        ['FTSE All-World / MSCI ACWI', 'Marchés développés et émergents, des milliers d’entreprises', 'Le plus proche de « tout le monde » dans un seul fonds'],
        ['Indice obligataire global', 'De nombreuses obligations d’État et d’entreprise', 'La partie plus calme d’un portefeuille']
      ])}

<h3>Comment comparer les ETF</h3>
<ul>
<li><b>Indice suivi</b> : qu’y a-t-il dedans ? Large et mondial est simple et robuste.</li>
<li><b>TER (ratio de frais total)</b> : les frais annuels. Les ETF indiciels larges coûtent souvent environ 0,05 à 0,25 % par an. Les fonds actifs peuvent coûter 1 à 2 %.</li>
<li><b>Taille du fonds</b> : de très petits ETF peuvent fermer. Les fonds plus gros et établis sont plus sûrs.</li>
<li><b>Capitalisation vs. distribution</b> : les ETF à capitalisation réinvestissent les dividendes automatiquement (simple, bon pour les intérêts composés) ; les ETF à distribution te les versent.</li>
<li><b>Domiciliation et OPCVM (UCITS)</b> : en Europe, cherche des ETF conformes UCITS, souvent domiciliés en Irlande ou au Luxembourg, conçus pour les investisseurs particuliers et souvent bénéficiant d’un traitement fiscal favorable sur les dividendes étrangers.</li>
<li><b>Réplication</b> : physique (détient les actions) est la plus simple à comprendre. Synthétique utilise des swaps et ajoute de la complexité.</li>
<li><b>Devise</b> : un ETF peut être coté en euros tout en détenant des actifs en dollars. Les mouvements de change s’ajoutent au rendement ou s’en retranchent.</li>
</ul>

${B.warn('<p>Un ETF n’est sûr que dans la mesure de ce qu’il contient. Un ETF à effet de levier, d’un seul secteur ou « actions crypto » peut être extrêmement volatil. N’achète jamais un ETF juste parce que « les ETF sont sûrs ».</p>')}

${B.tip('<p>Les débutants peuvent très bien s’en sortir avec un ETF actions mondial plus (en option) un ETF obligataire. Simple n’est pas paresseux : c’est efficace.</p>')}

${B.take(['Un ETF est un panier qui donne une diversification instantanée en un seul achat.', 'Les fonds indiciels copient automatiquement une liste de marché et coûtent très peu.', 'La plupart des fonds actifs font moins bien que leur référence après frais sur de longues périodes.', 'Compare l’indice, le TER, la taille, la capitalisation ou distribution, la domiciliation et la réplication.'])}`,
      q: [
        ['Que fait un ETF indiciel ?', ['Il essaie de battre le marché en choisissant des actions', 'Il copie automatiquement un indice de marché à bas coût', 'Il garantit un profit', 'Il prête uniquement aux États'], 1, 'Les fonds indiciels suivent une liste d’entreprises selon des règles fixes, donc les frais restent bas.'],
        ['Quels frais annuels (TER) sont typiques d’un ETF indiciel large et bon marché ?', ['0,1 % à 0,25 %', '3 % à 5 %', '10 %', 'Il n’y a jamais de frais'], 0, 'Des frais inférieurs à environ 0,25 % sont courants pour les ETF indiciels larges.'],
        ['Que fait un ETF à capitalisation avec les dividendes ?', ['Il te les verse en espèces', 'Il les réinvestit automatiquement dans le fonds', 'Il les brûle', 'Il te facture un supplément'], 1, 'Les ETF à capitalisation réinvestissent les dividendes, ce qui est pratique pour les intérêts composés.']
      ]
    },
    {
      id: 'a3', m: 12, t: 'Diversification et allocation d’actifs',
      hook: 'Comment répartir ton argent pour qu’aucun désastre isolé ne puisse te ruiner, et un jeu pour tester ta propre répartition en conditions extrêmes.',
      body: `
<p>Le vieux conseil « ne mets pas tous tes œufs dans le même panier » est le cœur de l’investissement. L’<b>allocation d’actifs</b> (comment tu répartis ton argent entre actions, obligations, liquidités et autres actifs) est le principal facteur de l’intensité des secousses que tu vivras. Les recherches sur les portefeuilles suggèrent que l’allocation explique bien plus le comportement d’un portefeuille que le choix de placements précis.</p>

<h3>Trois niveaux de diversification</h3>
<ol>
<li><b>Entre classes d’actifs</b> : actions, obligations, liquidités, peut-être un peu d’or ou d’immobilier. Ils réagissent différemment aux événements.</li>
<li><b>Entre pays et devises</b> : ne dépends pas seulement de ton marché national. Les fonds mondiaux le font pour toi.</li>
<li><b>Entre entreprises et secteurs</b> : des centaines ou des milliers d’entreprises, pour qu’une défaillance compte à peine.</li>
</ol>

<h3>Corrélation : pourquoi mélanger aide</h3>
<p>Deux actifs qui ne bougent pas ensemble ont une <b>corrélation</b> faible. Lors d’une mauvaise année pour les actions, les obligations de qualité ou l’or tiennent parfois bon. Ce n’est pas toujours le cas (en 2022, actions et obligations ont baissé ensemble), mais à travers l’histoire un mélange a produit de plus petites secousses que n’importe quelle pièce isolée.</p>

<h3>Quelques exemples de mélanges de départ</h3>
${B.tbl(['Style', 'Actions', 'Obligations', 'Liquidités / autres', 'Convient à'], [
        ['Prudent', '30 %', '50 %', '20 %', 'Horizon court, faible tolérance aux baisses'],
        ['Équilibré', '60 %', '30 %', '10 %', 'Horizon moyen (7 à 15 ans)'],
        ['Croissance', '80 à 90 %', '10 à 20 %', '0 à 5 %', 'Horizon long (15 ans et plus), forte tolérance']
      ])}
<p>Une règle pratique très approximative que certains utilisent est « 110 ou 120 moins ton âge » comme pourcentage en actions. Ce n’est qu’un point de départ : tes objectifs, la stabilité de tes revenus et tes nerfs comptent plus qu’une formule.</p>

<h3>Cœur et satellites</h3>
<p>Une structure populaire : mets 80 à 95 % dans un « cœur » mondial bon marché (un ETF monde), et garde un petit « satellite » (5 à 20 %) pour des idées auxquelles tu crois, comme des actions individuelles ou des thèmes. Si un satellite échoue, le cœur te protège.</p>

<h3>Teste maintenant ton portefeuille en conditions extrêmes</h3>
<p>Construis un mélange, puis fais-le passer par quatre scénarios stylisés de huit ans. Essaie un portefeuille tout en actions, un portefeuille prudent et un « 100 % crypto ». Observe la valeur finale et la pire baisse en chemin. Lequel pourrais-tu vraiment supporter ?</p>
${B.w('alloc')}

${B.key('<p><b>La vraie question n’est pas « qu’est-ce qui rapporte le plus ? »</b> C’est « quel est le mélange le plus risqué que je peux garder pendant un krach sans vendre ? ». Un excellent plan que tu abandonnes dans la panique est pire qu’un bon plan que tu gardes.</p>')}

${B.warn('<p>Posséder dix actions du même secteur, ou cinq fonds qui détiennent tous les mêmes grandes entreprises technologiques, n’est pas une vraie diversification. Regarde ce que les fonds détiennent réellement.</p>')}

${B.take(['L’allocation d’actifs détermine l’essentiel du risque et du comportement de ton portefeuille.', 'Diversifie entre classes d’actifs, pays et entreprises.', 'Choisis le mélange que tu peux tenir lors d’une chute de 30 %, pas celui au plus beau graphique.', 'Cœur et satellites cantonne les idées risquées à une petite tranche supportable.'])}`,
      q: [
        ['Quel est l’objectif principal de la diversification ?', ['Maximiser le profit à court terme', 'Réduire les dégâts qu’une défaillance isolée peut causer', 'Éviter les impôts', 'Garantir des rendements'], 1, 'Répartir le risque signifie qu’aucune entreprise ou actif seul ne peut ruiner tout ton portefeuille.'],
        ['Dans une approche cœur et satellites, le cœur est généralement…', ['Une seule action à la mode', 'Un fonds mondial large et bon marché', 'Une position à effet de levier', 'Uniquement des liquidités'], 1, 'Le cœur est la base stable et diversifiée ; les satellites sont de petits paris.'],
        ['Quel choix reflète le mieux la bonne question en choisissant un mélange ?', ['Quels actifs ont le plus monté l’an dernier ?', 'Quel est le mélange le plus risqué que je peux garder pendant un krach sans vendre ?', 'Que possède un influenceur célèbre ?', 'Quel mélange triplerait le plus vite ?'], 1, 'Le comportement lors des baisses détermine si tu gagnes vraiment les rendements à long terme.']
      ]
    },
    {
      id: 'a4', m: 9, t: 'Investissement programmé et automatisation de ta richesse',
      hook: 'Investis le même montant selon un calendrier et supprime la décision la plus difficile de l’investissement : quand.',
      body: `
<p>Personne ne peut prédire de façon fiable le jour parfait pour acheter. L’<b>investissement programmé (DCA, « dollar-cost averaging »)</b> résout cela en investissant un montant fixe à intervalles réguliers, par exemple 100 € le premier de chaque mois, quoi que fasse le marché. Quand les prix sont bas, tu achètes automatiquement plus de parts ; quand ils sont hauts, tu en achètes moins.</p>

${B.ex('<p>Sur 4 mois, tu investis 100 € par mois. Le prix du fonds est de 10 €, 8 €, 5 € et 10 €. Tu achètes 10, 12,5, 20 et 10 parts : 52,5 parts pour 400 €, un coût moyen d’environ 7,62 € par part, alors que le prix a fini là où il avait commencé, à 10 €. Ton prix moyen est inférieur à la moyenne simple des prix parce que tu as acheté davantage quand c’était bon marché.</p>')}

<h3>DCA vs. versement unique</h3>
<p>Si tu disposes déjà d’une grosse somme, les statistiques montrent qu’investir le tout d’un coup l’emporte sur l’étalement dans environ deux tiers des cas historiques, simplement parce que les marchés montent plus souvent qu’ils ne baissent. Mais le DCA réduit le risque de tout placer juste avant un krach et il est plus doux pour les nerfs. La plupart des gens n’ont de toute façon pas de somme unique : ils investissent à partir de leur salaire, ce qui est déjà du DCA automatique.</p>
${B.w('dca')}

<h3>Rends-le automatique</h3>
<ol>
<li>Choisis un montant que tu peux maintenir même un mauvais mois.</li>
<li>Programme un virement permanent ou un investissement automatique pour le lendemain de la paie.</li>
<li>Choisis le même fonds large à chaque fois.</li>
<li>Augmente le montant quand tes revenus augmentent (« augmente-le à chaque augmentation »).</li>
<li>Ne t’arrête pas lors d’un krach. Des prix en baisse signifient que ton montant fixe achète plus.</li>
</ol>

<h3>Que faire des rentrées exceptionnelles</h3>
<p>Primes, cadeaux ou remboursement d’impôts : une règle sensée est de les répartir. Par exemple, 50 % pour ton plan (investir ou fonds d’urgence), 30 % pour tes objectifs et 20 % pour te faire plaisir. Tu n’as pas besoin d’être un moine, seulement régulier.</p>

${B.warn('<p>Le DCA ne te protège pas d’un marché en baisse et ne garantit pas de profit. Il ne sauve pas non plus un mauvais actif. Combine-le avec des placements diversifiés et raisonnables.</p>')}

${B.take(['Le DCA consiste à investir un montant fixe selon un calendrier régulier.', 'Il supprime les décisions de timing de marché et crée l’habitude.', 'Un versement unique gagne souvent statistiquement, mais le DCA réduit les regrets et le risque de mauvais timing.', 'Automatise-le et continue pendant les krachs.'])}`,
      q: [
        ['Qu’est-ce que l’investissement programmé (DCA) ?', ['Attendre le jour le moins cher', 'Investir un montant fixe à intervalles réguliers quel que soit le prix', 'Vendre quand les prix baissent', 'Emprunter pour investir'], 1, 'C’est le calendrier, et non le prix, qui décide quand tu achètes.'],
        ['Quand le prix baisse, un investissement mensuel fixe…', ['Achète moins de parts', 'Achète plus de parts', 'Achète le même nombre de parts', 'S’arrête automatiquement'], 1, 'Le même montant en euros achète plus de parts à des prix plus bas.'],
        ['Quelle est la meilleure réaction à un krach si tu investis chaque mois via un plan ?', ['Tout arrêter et vendre', 'Continuer à investir le montant prévu', 'Doubler ton levier', 'Passer à une crypto à la mode au hasard'], 1, 'Tenir le cap te permet d’acheter moins cher alors que ton plan à long terme est inchangé.']
      ]
    },
    {
      id: 'a5', m: 10, t: 'Coûts, frais et impôts : les tueurs silencieux de la richesse',
      hook: 'Des frais qui semblent minuscules peuvent engloutir un tiers de ton résultat final. Apprends à repérer chaque coût.',
      body: `
<p>Tu ne contrôles pas le marché, mais tu contrôles ce que tu paies pour y participer. Les coûts se capitalisent comme les rendements, mais dans le mauvais sens.</p>

<h3>Les coûts à connaître</h3>
<ul>
<li><b>Frais du fonds (TER)</b> : prélevés chaque année à l’intérieur du fonds.</li>
<li><b>Commissions de transaction</b> : un montant fixe ou un pourcentage à chaque achat ou vente.</li>
<li><b>Spread</b> : le petit écart entre le prix d’achat (ask) et le prix de vente (bid). Un coût caché sur chaque transaction.</li>
<li><b>Frais de conversion de devises</b> : souvent 0,25 % à 1 % ou plus si le courtier ajoute une marge.</li>
<li><b>Frais de conservation et d’inactivité</b> : facturés par certains courtiers juste pour détenir tes actifs.</li>
<li><b>Frais de performance</b> : une part des profits prélevée par certains fonds.</li>
<li><b>Impôts</b> : sur les dividendes, les intérêts et les plus-values, selon l’endroit où tu vis.</li>
</ul>

<h3>Mesure les dégâts</h3>
<p>Compare un ETF bon marché avec un fonds cher. Même marché, mêmes versements, seuls les frais diffèrent.</p>
${B.w('fees')}

<h3>Les impôts : l’essentiel</h3>
<p>Les règles varient selon les pays, mais les idées communes sont :</p>
<ul>
<li>L’<b>impôt sur les plus-values</b> se paie sur le profit lorsque tu vends. Les investisseurs qui achètent et gardent le déclenchent rarement, ce qui laisse plus d’argent se capitaliser. Les traders fréquents le déclenchent souvent.</li>
<li>L’<b>impôt sur les dividendes</b> s’applique quand les entreprises distribuent des bénéfices. Les fonds à capitalisation peuvent être traités différemment de ceux à distribution.</li>
<li>Une <b>retenue à la source</b> peut être prélevée sur les dividendes étrangers.</li>
<li>Les <b>pertes</b> peuvent parfois être utilisées pour compenser des gains. Conserve des justificatifs.</li>
</ul>
${B.warn('<p>Ce cours donne des idées générales, pas des conseils fiscaux. Lis les indications de ton administration fiscale ou parle à un conseiller qualifié. Les règles fiscales changent.</p>')}

${B.ex('<p>Deux amis investissent chacun 10 000 € et ajoutent 200 € par mois pendant 30 ans sur le même marché (7 % avant coûts). L’un paie 0,2 % par an et termine avec environ 297 000 €. L’autre paie 1,8 % et termine avec environ 215 000 €. Cela fait environ 82 000 € de moins, uniquement à cause des frais, pour exactement le même marché.</p>')}

${B.tip('<p>Avant d’acheter un produit, demande : « Quel est le coût annuel total, en pourcentage, tous frais compris ? ». Si le vendeur ne sait pas répondre clairement, pars.</p>')}

${B.take(['Les coûts se capitalisent contre toi, et 1 % de frais n’est pas négligeable sur des décennies.', 'Regarde ensemble le TER, les frais de transaction, les spreads, la conversion de devises et la conservation.', 'Acheter et garder réduit les coûts de transaction et les événements imposables.', 'Apprends les règles fiscales de ton pays ou demande à un professionnel.'])}`,
      q: [
        ['Pourquoi les frais sont-ils particulièrement nuisibles sur de longues périodes ?', ['Ils ne sont facturés qu’une fois', 'Ils sont facturés chaque année et retirent aussi la croissance future que cet argent aurait rapportée', 'Ils ne s’appliquent qu’en marché haussier', 'Ils sont remboursés à la fin'], 1, 'L’effet se capitalise, donc de petits pourcentages annuels deviennent de gros totaux.'],
        ['Qu’est-ce que le spread ?', ['Un impôt sur les dividendes', 'L’écart entre le prix d’achat et le prix de vente', 'Un type d’ETF', 'Tes frais annuels'], 1, 'Tu achètes au prix ask, plus élevé, et tu vends au bid, plus bas : chaque aller-retour coûte le spread.'],
        ['Quel investisseur paie probablement moins d’impôts ?', ['Celui qui trade tous les jours', 'Celui qui achète et garde pendant des années', 'C’est toujours identique', 'Celui qui vend chaque mois'], 1, 'Moins de ventes signifie moins d’événements imposables, donc plus d’argent reste investi.']
      ]
    },
    {
      id: 'a6', m: 12, t: 'Tenir le cap : krachs, rééquilibrage et comportement',
      hook: 'Les marchés s’effondrent régulièrement. Ton plan doit être prêt avant que cela arrive. Joue au jeu du krach et vois comment tu réagis.',
      body: `
<p>Si tu investis pendant 40 ans, tu vivras plusieurs krachs. Ce n’est pas un désastre rare. Cela fait partie du prix des rendements à long terme. Ce qui arrive ensuite à ta richesse dépend surtout de ce que tu fais pendant la chute.</p>

<h3>Les krachs dans l’histoire</h3>
<ul>
<li><b>2000 à 2002</b> : la bulle internet. Le S&amp;P 500 américain a chuté d’environ 49 %.</li>
<li><b>2007 à 2009</b> : la crise financière mondiale. Environ -57 % du sommet au creux.</li>
<li><b>Février à mars 2020</b> : le krach de la pandémie. Environ -34 % en seulement 33 jours, suivi de l’une des reprises les plus rapides jamais vues.</li>
<li><b>2022</b> : inflation et hausse des taux. Environ -25 % pour les actions américaines, avec les obligations qui baissent aussi.</li>
</ul>
<p>Dans chacun de ces cas, les investisseurs patients dans de larges indices d’actions américaines ont fini par se redresser et atteindre de nouveaux sommets, même si cela a pris de quelques mois à environ cinq à sept ans en termes de prix. Cela ne garantit pas que chaque marché se redresse (le Japon a mis plus de 30 ans à retrouver son sommet de 1989), ce qui est une raison de diversifier à l’échelle mondiale.</p>

<h3>Le coût de la panique</h3>
<p>Vendre après une baisse de 30 % fige la perte. Et ensuite tu dois décider quand revenir. Beaucoup vendent près du creux et rentrent de nouveau après que les prix ont déjà rebondi. Les études montrent que les meilleures journées de marché surviennent souvent juste à côté des pires, si bien que manquer seulement quelques-unes d’entre elles peut réduire considérablement les rendements à long terme.</p>

<h3>Joue : jeu de survie au krach boursier</h3>
<p>Tu détiens 10 000 €. Les gros titres empirent. À chaque étape tu décides : garder, vendre, racheter ou ajouter de l’argent. Aucune réponse n’est parfaite, mais ton schéma en dit long sur tes nerfs.</p>
${B.w('panic')}

<h3>Rééquilibrage : la discipline d’acheter bas</h3>
<p>Disons que ton plan est 70 % d’actions et 30 % d’obligations. Après un boom des actions, tu peux te retrouver à 80 % d’actions, plus de risque que prévu. <b>Rééquilibrer</b> signifie ramener le mélange à la cible en vendant une partie de ce qui a monté et en achetant ce qui a pris du retard. Deux méthodes simples :</p>
<ul>
<li><b>Calendrier</b> : une fois par an, à une date fixe.</li>
<li><b>Seuil</b> : dès qu’une tranche s’écarte de plus de 5 points de pourcentage de la cible.</li>
</ul>
<p>Une méthode encore plus facile : dirige les <i>nouveaux</i> versements vers la partie en dessous de la cible, pour rééquilibrer sans vendre (et sans impôt).</p>

<h3>Écris ton plan anti-krach dès aujourd’hui</h3>
${B.tryit('<p>Termine cette phrase et garde-la : « Si mon portefeuille chute de 30 %, je vais ______. » Par exemple : « continuer mes investissements mensuels, ne pas regarder les prix plus d’une fois par semaine, et parler à un ami avant de vendre quoi que ce soit. »</p>')}

${B.take(['Des krachs de 20 à 50 % arrivent régulièrement ; prépare-toi à l’avance.', 'Vendre dans la panique transforme des pertes temporaires en pertes définitives.', 'Rééquilibre une fois par an ou quand une tranche s’écarte d’environ 5 points.', 'La diversification mondiale te protège si un marché met des décennies à se redresser.'])}`,
      q: [
        ['De combien le S&P 500 a-t-il baissé environ lors du krach de 2020 ?', ['Environ 5 %', 'Environ 34 %', 'Environ 80 %', 'Il n’a pas baissé'], 1, 'Il a chuté d’environ un tiers en à peu près un mois avant de rebondir fortement.'],
        ['Que fait le rééquilibrage ?', ['Il restaure ton mélange cible en allégeant les gagnants et en renforçant les retardataires', 'Il double ton risque', 'Il supprime les impôts', 'Il prédit le prochain krach'], 0, 'Il ramène le risque au niveau que tu as choisi et impose une discipline d’acheter bas et vendre haut.'],
        ['Pourquoi vendre dans la panique est-il généralement coûteux ?', ['Cela fait monter le marché', 'Cela fige les pertes et te laisse décider quand revenir, souvent trop tard', 'Cela réduit les frais', 'Cela augmente les dividendes'], 1, 'La reprise commence souvent quand le sentiment est au plus bas, donc ceux qui ont vendu la ratent.']
      ]
    },
    {
      id: 'a7', m: 13, t: 'Choisir des actions individuelles : guide du débutant',
      hook: 'Facultatif et risqué, mais fascinant. Comment lire une entreprise sans tomber dans les belles histoires.',
      body: `
<p>L’essentiel de ton investissement peut (et devrait probablement) passer par des fonds indiciels. Mais beaucoup de gens veulent apprendre à analyser des entreprises individuelles. Si c’est ton cas, traite cela comme un <b>satellite</b> : une petite tranche de ton argent (par exemple 5 à 15 %) et un moyen d’apprendre, pas de s’enrichir vite.</p>

<h3>Étape 1 : Comprends l’entreprise</h3>
<p>Peux-tu expliquer en deux phrases comment cette entreprise gagne de l’argent et pourquoi les clients la choisissent plutôt que ses concurrents ? Sinon, tu devines. Peter Lynch, célèbre gérant de fonds, a popularisé l’idée d’investir dans ce qu’on comprend (son « cercle de compétence »).</p>

<h3>Étape 2 : Lis les chiffres clés</h3>
<ul>
<li><b>Croissance du chiffre d’affaires</b> : les ventes progressent-elles régulièrement ?</li>
<li><b>Marge bénéficiaire</b> : bénéfice divisé par le chiffre d’affaires. Des marges plus élevées signalent souvent un pouvoir de fixation des prix.</li>
<li><b>Bénéfice par action (BPA)</b> : bénéfice net divisé par le nombre d’actions.</li>
<li><b>Flux de trésorerie disponible</b> : l’argent réel qui reste après avoir fait tourner l’entreprise et investi. Difficile à falsifier.</li>
<li><b>Dette</b> : trop de dette fragilise une entreprise. Compare la dette aux bénéfices et au flux de trésorerie.</li>
<li><b>Rentabilité des capitaux propres (ROE)</b> : l’efficacité avec laquelle l’entreprise transforme l’argent des actionnaires en bénéfice.</li>
<li><b>Avantage concurrentiel durable (« moat »)</b> : un avantage solide comme la marque, les effets de réseau, les brevets ou les faibles coûts.</li>
</ul>

<h3>Étape 3 : Valorisation : quel prix est juste ?</h3>
<p>Une entreprise merveilleuse peut quand même être un mauvais placement si tu paies trop cher. L’outil le plus simple est le <b>ratio P/E</b> (PER) : prix divisé par bénéfice par action.</p>
${B.ex('<p><b>SnackCo</b> (fictive) a un chiffre d’affaires de 600 M€, un bénéfice net de 60 M€ (marge de 10 %) et 20 M d’actions. BPA = 60 M€ ÷ 20 M = <b>3 €</b>. Le cours est de 60 €, donc P/E = 60 ÷ 3 = <b>20</b>. Cela signifie que tu paies 20 € pour chaque 1 € de bénéfice annuel, un « rendement des bénéfices » de 5 %. Si des fabricants de snacks similaires s’échangent à un P/E de 15 et que SnackCo croît plus vite, 20 peut être juste. Si sa croissance ralentit, c’est peut-être cher. Elle verse aussi un dividende de 1,20 € par action : un rendement de 2 % et un taux de distribution de 40 %, ce qui laisse de la marge pour croître.</p>')}
<p>Autres outils de valorisation : prix/ventes (P/S), prix/flux de trésorerie disponible, et comparaison avec les concurrents et l’historique de l’entreprise.</p>

<h3>Étape 4 : Pense au risque</h3>
<ul>
<li>Qu’est-ce qui pourrait endommager durablement cette entreprise (nouvelle technologie, réglementation, un client clé) ?</li>
<li>Quelle part de ton portefeuille représentera-t-elle ? Limite toute action individuelle à un petit pourcentage.</li>
<li>Qu’est-ce qui te ferait vendre ? Décide-le à l’avance (la thèse a cassé, pas « le prix a baissé »).</li>
</ul>

<h3>Pièges à éviter</h3>
<ul>
<li><b>Les actions « à histoire »</b> : un super récit, aucun bénéfice et un prix qui suppose la perfection.</li>
<li><b>Les tuyaux brûlants</b> d’amis, de forums et de vidéos. Demande-toi pourquoi on te les donne.</li>
<li><b>Pas cher n’est pas toujours bon</b> : un P/E bas peut signifier que le marché s’attend à un effondrement des bénéfices.</li>
<li><b>Le sur-trading</b> : acheter et vendre sans cesse ajoute des coûts et des erreurs.</li>
</ul>

${B.warn('<p>Même des analystes professionnels avec des équipes et des bases de données ne battent le marché que rarement. Si tu choisis des actions, garde ton cœur dans un fonds diversifié pour que ton apprentissage reste peu coûteux.</p>')}

${B.take(['Traite le choix d’actions comme un petit satellite, pas comme tout ton plan.', 'Comprends d’abord l’entreprise, puis vérifie croissance, marges, dette et flux de trésorerie.', 'P/E = prix ÷ bénéfice par action ; compare-le aux concurrents et à la croissance, jamais isolément.', 'Décide à l’avance ce qui te ferait vendre et plafonne la taille de chaque position.'])}`,
      q: [
        ['Une entreprise a un cours de 50 € et un BPA de 2,50 €. Quel est son P/E ?', ['5', '20', '50', '125'], 1, '50 ÷ 2,5 = 20.'],
        ['Pourquoi les analystes apprécient-ils le « flux de trésorerie disponible » ?', ['Il est facile à falsifier', 'Il montre l’argent réel qui reste après avoir exploité et investi dans l’entreprise', 'Il est toujours égal au bénéfice', 'Il ne compte que pour les banques'], 1, 'L’argent est plus difficile à manipuler que le bénéfice comptable.'],
        ['Quelle est une façon sensée de traiter le choix d’actions individuelles quand on débute ?', ['Mettre 100 % de ses économies dans une seule action', 'Un petit satellite à côté d’un cœur diversifié', 'Emprunter pour en acheter plus', 'Suivre les tuyaux d’inconnus'], 1, 'Une petite tranche rend ton apprentissage abordable et ton plan sûr.']
      ]
    },
    {
      id: 'a8', m: 9, t: 'Ton plan d’action sur 12 mois',
      hook: 'Transforme tout ce que tu as appris en une page et un calendrier. Les plans battent les intentions.',
      body: `
<p>Félicitations. Tu en sais maintenant plus sur l’investissement que la plupart des adultes. Le savoir ne paie que lorsqu’il devient action, voici donc une feuille de route simple sur 12 mois.</p>

<h3>La feuille de route</h3>
${B.tbl(['Quand', 'Action'], [
        ['Mois 1', 'Construis ton budget. Ouvre un compte d’épargne pour ton fonds d’urgence et automatise un virement le jour de la paie.'],
        ['Mois 2', 'Rembourse toute dette à taux élevé. Renseigne-toi sur les comptes à avantage fiscal dans ton pays.'],
        ['Mois 3', 'Choisis un courtier régulé, ouvre le compte, active l’authentification à deux facteurs et lis la grille tarifaire.'],
        ['Mois 4', 'Écris ton plan d’une page (ci-dessous). Fais ton premier petit investissement dans un ETF large et bon marché.'],
        ['Mois 5 à 9', 'Investis automatiquement chaque mois. Ne surveille pas les cours tous les jours. Atteins 3 mois d’épargne d’urgence.'],
        ['Mois 10', 'Fais le point : suis-tu ton plan ? Vérifie les coûts. Rééquilibre si une tranche s’est écartée de plus de 5 points.'],
        ['Mois 12', 'Augmente ton montant mensuel si tes revenus le permettent. Révise tes objectifs. Enseigne à quelqu’un d’autre ce que tu as appris.']
      ])}

<h3>Construis ton plan d’une page</h3>
<p>Un investisseur professionnel rédige une <b>déclaration de politique d’investissement</b>. Tu peux en faire une mini-version en une minute. Essaie : elle prend ton objectif, ton horizon et ton aisance face au risque, et crée un plan d’exemple que tu peux copier et affiner.</p>
${B.w('ips')}

<h3>À quoi ressemble le succès</h3>
<ul>
<li><b>Année 1</b> : tu as créé l’habitude et le filet de sécurité. Le montant sur ton compte compte moins que la routine.</li>
<li><b>Année 5</b> : tu as traversé au moins un mauvais marché sans rompre ton plan. Tes versements ont augmenté.</li>
<li><b>Année 10 et plus</b> : la capitalisation devient visible, avec des rendements sur ton portefeuille qui rivalisent avec ce que tu ajoutes chaque année.</li>
</ul>

<h3>Erreurs courantes à éviter, une dernière fois</h3>
<ol>
<li>Attendre le « moment parfait » au lieu de commencer petit.</li>
<li>Investir de l’argent dont tu auras bientôt besoin.</li>
<li>Courir après le gagnant de l’an dernier ou le tuyau d’un ami.</li>
<li>Payer des frais élevés sans s’en rendre compte.</li>
<li>Vendre dans la panique.</li>
<li>Laisser l’excitation te pousser vers le levier, les dérivés ou les produits complexes.</li>
</ol>

${B.key('<p>Construire sa richesse est ennuyeux exprès. Si ton plan est excitant tous les jours, quelque chose ne va pas. L’excitation doit venir plus tard, quand tu consulteras ton solde dans dix ans et te rendras compte que des décisions régulières, patientes et ordinaires ont fait quelque chose d’extraordinaire.</p>')}

${B.take(['Suis la feuille de route de 12 mois : base, courtier, plan, automatisation, révision.', 'Écris un plan d’une page pour que les décisions soient prises calmement à l’avance.', 'Ennuyeux et régulier bat excitant et erratique.', 'Prochaines étapes : explore la Voie Pro, ou les parcours crypto et trading si cela t’intéresse.'])}`,
      q: [
        ['Quel est l’objectif principal d’une déclaration de politique d’investissement ?', ['Prédire les marchés', 'Écrire tes règles pour agir calmement et avec constance', 'Éviter tout risque', 'Impressionner tes amis'], 1, 'Un plan écrit te protège des décisions émotionnelles.'],
        ['Quand faut-il rééquilibrer, selon les règles simples de ce cours ?', ['Tous les jours', 'Une fois par an ou quand une tranche s’écarte d’environ 5 points de la cible', 'Jamais', 'Seulement après un krach'], 1, 'Les approches par calendrier et par seuil gardent le risque proche de ta cible.'],
        ['Quel est le signe qu’un plan est probablement sain ?', ['Il demande de surveiller les cours toutes les heures', 'Il est simple, automatique et tu peux continuer à le suivre pendant un krach', 'Il utilise le levier pour accélérer', 'Il dépend d’un tuyau brûlant'], 1, 'Le meilleur plan est celui auquel tu peux t’en tenir.']
      ]
    }
  ]);
})();
