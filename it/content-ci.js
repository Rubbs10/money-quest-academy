/* Percorso Investitore Crypto: 8 lezioni */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ci', [
    {
      id: 'c1', m: 12, t: 'Che cos’è la crypto? La blockchain spiegata con un quaderno condiviso',
      hook: 'Senza gergo: come migliaia di sconosciuti tengono un unico registro onesto, e perché ha creato un nuovo tipo di denaro.',
      body: `
<p>Immagina un quaderno che registra chi possiede che cosa. In una banca, il quaderno lo tiene la banca e tu ti fidi. Ora immagina che migliaia di persone tengano ciascuna una copia identica del quaderno. Ogni nuova voce (“Ana paga 1 moneta a Ben”) viene annunciata a tutti, verificata dal gruppo e solo dopo aggiunta a tutte le copie. Per barare dovresti riscrivere di nascosto la maggior parte dei quaderni contemporaneamente. Questa, in parole semplici, è una <b>blockchain</b>.</p>

<h3>Idee chiave</h3>
<ul>
<li><b>Blocco</b>: una pagina del quaderno con un gruppo di transazioni.</li>
<li><b>Catena</b>: ogni pagina include un’impronta (un <b>hash</b>) della pagina precedente. Cambia una pagina vecchia e le impronte di tutte le pagine successive si spezzano, rendendo evidente la manomissione.</li>
<li><b>Nodi</b>: i computer che conservano le copie e verificano le regole.</li>
<li><b>Consenso</b>: il metodo con cui la rete si accorda sulla pagina successiva. Nella <b>proof of work</b> (Bitcoin), i miner spendono energia per competere per il diritto di aggiungere un blocco. Nella <b>proof of stake</b> (Ethereum oggi), i validatori bloccano monete come garanzia di onestà.</li>
<li><b>Decentralizzazione</b>: nessuna azienda o paese controlla il quaderno.</li>
</ul>

<h3>Prova il test di manomissione</h3>
<p>Modifica il testo del blocco 1 e guarda che cosa succede alla catena.</p>
${B.w('chain')}

<h3>Bitcoin: il primo</h3>
<p>Nel 2008 una persona o un gruppo anonimo chiamato Satoshi Nakamoto pubblicò il white paper di Bitcoin, e la rete partì nel gennaio 2009. Bitcoin ha un’offerta massima fissa di <b>21 milioni di monete</b>, e il ritmo con cui vengono create nuove monete si dimezza all’incirca ogni quattro anni (l’“halving”; l’ultimo è stato ad aprile 2024). I sostenitori lo chiamano “oro digitale” per la sua scarsità e perché è fuori dal controllo di qualsiasi governo.</p>

<h3>Ethereum e gli smart contract</h3>
<p>Ethereum (lanciato nel 2015) ha aggiunto gli <b>smart contract</b>: piccoli programmi che girano sulla blockchain e si eseguono automaticamente, come un distributore automatico che trattiene denaro e lo rilascia quando le condizioni sono soddisfatte. Questo ha reso possibili la finanza decentralizzata (DeFi), le stablecoin, gli NFT e migliaia di altre applicazioni. Nel 2022 è passato alla proof of stake, riducendo il consumo di energia di oltre il 99%.</p>

<h3>Perché le cripto-attività hanno valore?</h3>
<p>Il valore viene da ciò che le persone credono e usano: scarsità (offerta limitata), utilità (pagamenti, applicazioni), effetti di rete (più utenti la rendono più utile) e speculazione. A differenza di un’azienda, la maggior parte delle monete non produce utili, quindi il prezzo è guidato in gran parte da domanda e sentiment. Per questo sono così volatili.</p>

${B.ex('<p>Pensa ai primi mercati online: molti dei primi siti sono spariti, ma alcuni sono diventati giganti e la tecnologia sottostante ha cambiato il mondo. La crypto può essere simile: la tecnologia può essere reale mentre la maggior parte dei singoli token fallisce. Avere ragione sulla tecnologia non rende ogni moneta un buon investimento.</p>')}

${B.warn('<p>La crypto è giovane, volatile e piena di truffe. Lo stesso Bitcoin è sceso del 70-85% dal massimo al minimo più volte. Tutto in questo percorso presuppone che tu metta solo denaro che puoi permetterti di veder crollare drasticamente.</p>')}

${B.take(['Una blockchain è un registro condiviso, a manomissione evidente, tenuto da molti computer.', 'Bitcoin ha un tetto rigido di 21 milioni di monete; Ethereum aggiunge smart contract programmabili.', 'Il valore viene da scarsità, uso e fiducia, il che rende i prezzi molto volatili.', 'Una buona tecnologia non garantisce un buon investimento.'])}`,
      q: [
        ['Perché è difficile manomettere un registro blockchain?', ['È tenuto segreto', 'Ogni blocco include un’impronta del precedente ed esistono molte copie', 'Lo proteggono le banche', 'Viene cancellato regolarmente'], 1, 'Cambiare dati vecchi spezza le impronte successive, e dovresti modificare la maggior parte delle copie contemporaneamente.'],
        ['Qual è il numero massimo di bitcoin che potranno mai esistere?', ['1 milione', '21 milioni', '100 milioni', 'Illimitato'], 1, 'Il tetto di offerta di Bitcoin è 21 milioni.'],
        ['Che cosa fa uno smart contract?', ['Sostituisce il tuo portafoglio', 'Esegue codice su una blockchain che si attiva automaticamente quando le condizioni sono soddisfatte', 'Garantisce profitto', 'Annulla le transazioni'], 1, 'È un programma sulla catena, come un distributore automatico digitale.']
      ]
    },
    {
      id: 'c2', m: 13, t: 'Wallet, chiavi e dove comprare',
      hook: 'Chi detiene davvero le tue monete? Il concetto più importante della sicurezza crypto.',
      body: `
<p>Nella crypto c’è una regola che sentirai ovunque: <b>“not your keys, not your coins”</b> (se non hai le chiavi, non sono le tue monete). Capire perché ti proteggerà meglio di qualsiasi analisi dei prezzi.</p>

<h3>Chiavi, indirizzi e frasi di recupero</h3>
<ul>
<li><b>Indirizzo pubblico</b>: come il numero del tuo conto bancario. È sicuro condividerlo perché le persone ti inviino monete.</li>
<li><b>Chiave privata</b>: il segreto che autorizza lo spostamento delle monete. Chi la possiede controlla le monete, senza “password dimenticata” e senza una banca da chiamare.</li>
<li><b>Seed phrase (frase di recupero)</b>: di solito 12 o 24 parole che possono ricreare tutte le tue chiavi. È la chiave maestra del wallet.</li>
</ul>
${B.warn('<p><b>Non digitare mai</b> la tua frase di recupero su un sito web, non inviarla a nessuno, non conservarla in foto, note nel cloud o email. Nessun vero addetto del supporto o azienda te la chiederà mai.</p>')}

<h3>Due modi di detenere crypto</h3>
${B.tbl(['', 'Custodial (la detiene l’exchange)', 'Autocustodia (tieni tu le chiavi)'], [
        ['Comodità', 'Facile: accesso con password', 'Più passaggi da imparare'],
        ['Chi controlla le monete', 'L’azienda', 'Tu'],
        ['Rischio principale', 'Hack dell’exchange, collasso, blocchi o frode (es. Mt. Gox nel 2014, FTX nel 2022)', 'Perdere la frase di recupero, errori, phishing'],
        ['Recupero', 'Supporto e recupero dell’account', 'Nessuno se perdi la frase di recupero'],
        ['Ideale per', 'Piccole somme, apprendimento, trading', 'Posizioni più grandi a lungo termine']
      ])}

<h3>Wallet hot e cold</h3>
<ul>
<li><b>Hot wallet</b>: wallet software connesso a internet (telefono o browser). Comodo per piccole somme di spesa.</li>
<li><b>Cold wallet / hardware wallet</b>: un piccolo dispositivo dedicato che tiene le chiavi offline e firma le transazioni. Ideale per i risparmi a lungo termine. Compra solo direttamente dal produttore.</li>
</ul>

<h3>Dove comprare</h3>
<ul>
<li><b>Exchange centralizzati (CEX)</b>: aziende che ti permettono di comprare con euro, carte o bonifici dopo verifiche d’identità (KYC). Scegli piattaforme regolamentate con una lunga storia e commissioni trasparenti.</li>
<li><b>Exchange decentralizzati (DEX)</b>: mercati basati su smart contract dove scambi token direttamente dal tuo wallet. Più libertà e più rischio; i token truffa sono comuni.</li>
<li><b>Prodotti regolamentati</b>: in alcuni paesi, gli ETF e ETP su Bitcoin ed Ethereum permettono di avere esposizione tramite un normale conto presso un broker, senza gestire chiavi (gli ETF spot su Bitcoin negli USA sono stati lanciati a gennaio 2024).</li>
</ul>

<h3>Capisci i costi</h3>
<ul>
<li><b>Commissione di trading</b>: una percentuale per operazione (spesso 0,1-1,5%). I semplici pulsanti di “acquisto istantaneo” costano di solito più della schermata avanzata degli ordini dell’exchange.</li>
<li><b>Spread</b>: la differenza tra prezzo di acquisto e di vendita.</li>
<li><b>Commissioni di rete (gas)</b>: pagate alla blockchain quando invii monete. Variano con la congestione.</li>
<li><b>Commissioni di prelievo</b>: addebitate dagli exchange per spostare monete fuori.</li>
</ul>

${B.ex('<p>Leo compra 1.000 € di Bitcoin su un exchange. Poiché la somma è piccola e sta imparando, per ora li lascia lì ma attiva l’autenticazione a due fattori (app di autenticazione) e una whitelist di prelievo. Sei mesi dopo le sue posizioni arrivano a 5.000 € e compra un hardware wallet dal sito del produttore, invia prima 10 € di prova, verifica che siano arrivati, poi sposta il resto e conserva la frase di recupero su carta in due luoghi sicuri separati.</p>')}

${B.w('checklist', { key: 'c2', title: 'Checklist per un primo acquisto sicuro', accent: 'ci', items: 'Ho scelto un exchange regolamentato con una tabella commissioni chiara|Ho attivato l’autenticazione a due fattori con un’app di autenticazione (non SMS)|Ho creato una password unica e robusta in un gestore di password|Compro solo una somma di cui posso sopportare un calo dell’80%|Capisco la differenza tra il mio indirizzo pubblico e la mia frase di recupero|Per somme più grandi: prevedo di usare un hardware wallet comprato dal produttore|Invio sempre una piccola transazione di prova prima di un grande trasferimento' })}

${B.take(['Chi detiene la chiave privata controlla le monete; gli exchange detengono le chiavi per te.', 'La tua frase di recupero è la chiave maestra: non condividerla né digitalizzarla mai.', 'Il custodial è semplice ma comporta un rischio aziendale; l’autocustodia dà controllo ma mette la responsabilità su di te.', 'Controlla tutti i costi: commissioni di trading, spread, commissioni di rete e di prelievo.'])}`,
      q: [
        ['Con chi dovresti condividere la tua frase di recupero?', ['Con l’assistenza clienti', 'Con un amico fidato', 'Con nessuno, mai', 'Con qualsiasi exchange'], 2, 'Chiunque abbia la tua frase di recupero può prendere tutto. I servizi legittimi non la chiedono mai.'],
        ['Qual è il rischio principale di tenere le monete su un exchange?', ['Le monete diventano carta', 'L’azienda può essere hackerata, bloccare i prelievi o collassare', 'Non ci sono commissioni', 'Le monete spariscono ogni anno'], 1, 'Dipendi dall’azienda; fallimenti come Mt. Gox e FTX sono costati cari ai clienti.'],
        ['Perché inviare prima una piccola transazione di prova?', ['È richiesto dalla legge', 'Per confermare che l’indirizzo sia corretto prima di inviare una somma grande', 'Per ottenere cashback', 'Per ridurre le commissioni'], 1, 'I trasferimenti crypto non si possono annullare, quindi una prova riduce il rischio di errori costosi.']
      ]
    },
    {
      id: 'c3', m: 14, t: 'La mappa della crypto: Bitcoin, Ethereum, stablecoin, DeFi e oltre',
      hook: 'Esistono migliaia di token. Ecco come classificarli in gruppi e dove si trova il rischio in ciascuno.',
      body: `
<p>Esistono molte migliaia di cripto-attività. La maggior parte è minuscola, molte sono senza valore e poche sono importanti. Una mappa semplice ti aiuta a vedere la differenza tra un’attività relativamente consolidata e un biglietto della lotteria.</p>

<h3>Le categorie principali</h3>
<ul>
<li><b>Bitcoin (BTC)</b>: l’originale e il più grande. Soprattutto una narrazione di riserva di valore e “oro digitale”. Semplice, molto liquido, con la storia più lunga.</li>
<li><b>Piattaforme di smart contract (Layer 1)</b>: blockchain dove girano le applicazioni. Ethereum è la più grande. Altre competono su velocità o costo. Il loro valore dipende da quanta attività reale attraggono.</li>
<li><b>Layer 2</b>: reti costruite sopra Ethereum che rendono le transazioni più economiche e veloci.</li>
<li><b>Stablecoin</b>: token progettati per mantenere un valore stabile, di solito 1 dollaro USA (o 1 euro). Si usano per il trading e per i pagamenti. La loro sicurezza dipende da ciò che le garantisce e da chi le gestisce. La stablecoin algoritmica di Terra è collassata nel 2022, e persino la grande USDC ha perso brevemente l’ancoraggio al dollaro durante un panico bancario a marzo 2023.</li>
<li><b>Token DeFi (finanza decentralizzata)</b>: protocolli di prestito, trading e assicurazione gestiti dal codice. I rendimenti possono sembrare alti, ma bug degli smart contract, hack e “perdita impermanente” nei pool di liquidità sono rischi reali.</li>
<li><b>NFT</b>: oggetti digitali unici. Soprattutto oggetti da collezione speculativi, e la domanda è stata molto irregolare.</li>
<li><b>Memecoin</b>: token costruiti attorno a battute e comunità (come cani e rane). Pura speculazione e l’angolo con più truffe.</li>
<li><b>Token a tema</b> (IA, gaming, asset del mondo reale): narrazioni che vanno e vengono.</li>
</ul>

<h3>La piramide del rischio</h3>
<p>Un’immagine utile: una base larga di attività relativamente consolidate e una cima stretta e molto rischiosa.</p>
<div class="pyr" role="img" aria-label="Piramide del rischio crypto, dal rischio più basso alla base al rischio estremo in cima">
  <div style="background:#C9C5EE;width:30%;min-width:170px">Memecoin, token nuovi: rischio estremo</div>
  <div style="background:#A58FFF;width:50%;min-width:230px">Small cap, NFT, token a tema: molto alto</div>
  <div style="background:#FFC21A;width:72%;min-width:260px">DeFi grandi, piattaforme Layer 1 e 2: alto</div>
  <div style="background:#14B37D;width:94%;min-width:280px">Bitcoin ed Ethereum: ancora molto volatili, ma i più consolidati</div>
</div>
<p class="note">Anche la crypto “consolidata” può perdere il 70% o più. La piramide mostra il rischio relativo, non la sicurezza.</p>

<h3>Fasce di capitalizzazione di mercato</h3>
<p>La <b>capitalizzazione di mercato</b> è il prezzo per l’offerta in circolazione. Come guida approssimativa: le large cap sono sopra circa 10 miliardi di €, le mid cap vanno da circa 1 a 10 miliardi di €, e le small cap sono sotto 1 miliardo di €. Più piccola significa più potenziale di rialzo, molta più volatilità, liquidità più sottile e maggiore probabilità di fallimento.</p>

<h3>Staking e “rendimento”</h3>
<p>Lo <b>staking</b> significa bloccare monete proof-of-stake per aiutare a proteggere la rete in cambio di ricompense. Non sono soldi gratis: la ricompensa è pagata nella moneta stessa (quindi il rischio di prezzo resta), le tue monete possono essere bloccate per un periodo e alcune piattaforme aggiungono rischio di smart contract o di controparte. Se un prodotto promette un rendimento alto, fisso e “senza rischio”, ricorda che i prestatori crollati nel 2022 offrivano esattamente questo.</p>

${B.ex('<p>Mia ha 1.000 € per la crypto. Li divide: 700 € in Bitcoin ed Ethereum (il suo “nucleo”), 250 € distribuiti su alcuni progetti consolidati più grandi che ha studiato, e 50 € come scommessa “soldi da divertimento” su una moneta piccola. Se quest’ultima scommessa va a zero, perde il 5% del suo comparto crypto e non si rompe nulla.</p>')}

${B.warn('<p>Non confondere “numero di token” con “diversificazione”. La maggior parte dei token si muove insieme a Bitcoin, quindi possedere 30 altcoin spesso sembra avere un’unica grande scommessa con rischio extra.</p>')}

${B.take(['Classifica la crypto in categorie: Bitcoin, piattaforme, stablecoin, DeFi, NFT, memecoin.', 'Il rischio sale bruscamente passando da attività grandi e consolidate a token piccoli e nuovi.', 'Le stablecoin possono perdere l’ancoraggio; le ricompense dello staking non sono prive di rischio.', 'Molti token sono molto correlati, quindi offrono meno diversificazione di quanto sembri.'])}`,
      q: [
        ['A che cosa serve una stablecoin?', ['Raddoppiare di valore ogni anno', 'Mantenere un valore stabile, come 1 dollaro', 'Sostituire tutte le banche', 'Nascondere la tua identità'], 1, 'Puntano a un prezzo stabile, ma l’ancoraggio può cedere.'],
        ['Quale categoria comporta in genere il rischio più alto di perdita totale?', ['Bitcoin', 'Grandi ETF regolamentati', 'Memecoin appena lanciate', 'Conti di risparmio'], 2, 'Le memecoin sono speculative, spesso manipolate e finiscono frequentemente a zero.'],
        ['La capitalizzazione di mercato è uguale a…', ['Prezzo × offerta in circolazione', 'Prezzo × numero totale di trader', 'Solo il volume giornaliero', 'Commissioni di transazione'], 0, 'È il prezzo attuale moltiplicato per le monete in circolazione.']
      ]
    },
    {
      id: 'c4', m: 13, t: 'Come valutare un progetto: tokenomics e fondamentali',
      hook: 'Una checklist di domande che separa i progetti seri dall’hype, incluso il numero che inganna la maggior parte dei principianti.',
      body: `
<p>A differenza di un’azienda, un token di solito non ha un rapporto sugli utili. Tuttavia puoi fare domande strutturate. L’obiettivo non è trovare un vincitore garantito, ma evitare i perdenti evidenti e capire che cosa stai comprando.</p>

<h3>La checklist delle 8 domande</h3>
<ol>
<li><b>Quale problema risolve, e per chi?</b> Riesci a spiegarlo in due frasi?</li>
<li><b>Lo usano persone reali?</b> Guarda utenti attivi, numero di transazioni, commissioni pagate e valore totale bloccato (TVL) nella DeFi, da fonti indipendenti.</li>
<li><b>Genera ricavi?</b> Le commissioni pagate dagli utenti sono un segno sano. I “ricavi” derivanti dalla stampa di nuovi token no.</li>
<li><b>Chi c’è dietro?</b> Un team pubblico e responsabile con uno storico, contro fondatori anonimi e codice copiato.</li>
<li><b>Qual è la tokenomics?</b> Offerta massima, quanti token circolano, quanti vengono rilasciati nel tempo e chi li possiede.</li>
<li><b>Il codice è sottoposto ad audit?</b> Gli audit di sicurezza aiutano (ma non sono una garanzia). Controlla gli hack nella storia del progetto.</li>
<li><b>C’è liquidità reale?</b> Puoi vendere senza far crollare il prezzo? È quotato su piattaforme rispettabili?</li>
<li><b>Che cosa può andare storto?</b> Regolamentazione, concorrenza, guasto tecnico, vendite degli insider.</li>
</ol>

<h3>Tokenomics 101</h3>
<ul>
<li><b>Offerta in circolazione</b>: token disponibili per essere scambiati ora.</li>
<li><b>Offerta totale / massima</b>: tutti i token che esisteranno mai (o che esistono ora).</li>
<li><b>Emissione / inflazione</b>: la velocità con cui vengono creati nuovi token. Un’inflazione alta diluisce i detentori a meno che la domanda cresca più in fretta.</li>
<li><b>Distribuzione</b>: quanto è stato assegnato a fondatori, primi investitori e comunità? Se gli insider hanno una quota enorme, uno scarico è possibile.</li>
<li><b>Vesting e sblocchi</b>: token bloccati rilasciati secondo un calendario. Un grande sblocco (talvolta chiamato “cliff”) può far scendere i prezzi mentre i destinatari vendono.</li>
<li><b>Utilità</b>: a che cosa serve il token (commissioni, staking, governance)? Un token di cui nessuno ha bisogno ha solo valore speculativo.</li>
</ul>

<h3>Il numero che inganna i principianti: capitalizzazione vs. FDV</h3>
<p>Un token può sembrare “economico” con una bassa capitalizzazione mentre la maggior parte dell’offerta è ancora bloccata. La <b>valutazione completamente diluita (FDV)</b> mostra quale sarebbe il valore se tutti i token esistessero. Un grande divario significa molta pressione di vendita futura. Prova il calcolatore:</p>
${B.w('supply')}

<h3>Segnali d’allarme</h3>
<ul>
<li>Promesse di rendimenti garantiti o di “rendimento senza rischio”.</li>
<li>Team anonimo, nessun prodotto funzionante, white paper copiato.</li>
<li>Pochi wallet detengono la maggior parte dell’offerta.</li>
<li>La liquidità non è bloccata, quindi gli sviluppatori potrebbero ritirarla (“rug pull”).</li>
<li>Tattiche di pressione, conti alla rovescia e “compra subito prima che sia troppo tardi”.</li>
<li>Ricompense pagate soprattutto portando nuovi investitori (una struttura Ponzi).</li>
<li>Promozioni a pagamento di influencer senza dichiarazione.</li>
</ul>

${B.tip('<p>Una buona abitudine: leggi la documentazione del progetto stesso, controlla una fonte dati indipendente sull’utilizzo e cerca “[nome del progetto] truffa”, “hack” e “critiche”. Leggi lo scenario negativo prima di comprare.</p>')}

${B.ex('<p>Due token scambiano a 1 € ciascuno. Il Token A ha 800 M di 1.000 M di token già in circolazione e un uso chiaro, quindi la capitalizzazione è 800 M€ e la FDV 1 Md€. Il Token B ha 100 M di 1.000 M in circolazione: capitalizzazione 100 M€, FDV 1 Md€. Il Token B sembra 8 volte “più piccolo” ma il 90% della sua offerta è ancora bloccato. Quando quei token verranno sbloccati, i detentori dovranno assorbire nove volte l’offerta esistente. Stesso prezzo, rischio molto diverso.</p>')}

${B.take(['Chiedi che cosa fa il progetto, chi lo usa e come guadagna ricavi reali.', 'Studia offerta, distribuzione, vesting e calendari di sblocco.', 'Confronta la capitalizzazione con la valutazione completamente diluita per vedere la diluizione futura.', 'Segnali d’allarme: rendimenti garantiti, team anonimi, offerta concentrata, liquidità sbloccata.'])}`,
      q: [
        ['Un token ha una piccola capitalizzazione ma una FDV enorme. Questo suggerisce…', ['Poca diluizione futura', 'Molti token devono ancora essere rilasciati, aggiungendo pressione di vendita', 'Crescita garantita', 'Il token è una stablecoin'], 1, 'L’offerta bloccata alla fine entrerà in circolazione, diluendo i detentori.'],
        ['Quale è un segnale d’allarme?', ['Team pubblico e codice sottoposto ad audit', 'Rendimenti giornalieri garantiti promessi', 'Documentazione chiara', 'Dati di utilizzo indipendenti'], 1, 'Nessun investimento legittimo può garantire rendimenti.'],
        ['Che cos’è un “rug pull”?', ['Un rialzo di prezzo', 'Sviluppatori che ritirano la liquidità o abbandonano un progetto dopo aver preso i soldi degli investitori', 'Un aggiornamento del wallet', 'Una ricompensa di staking'], 1, 'È una truffa di uscita che lascia i detentori con token senza valore.']
      ]
    },
    {
      id: 'c5', m: 14, t: 'Costruire un portafoglio crypto: dimensione, DCA e cicli',
      hook: 'Quanto, con che frequenza e che cosa aspettarsi. La dimensione della posizione è la decisione che conta di più.',
      body: `
<p>La maggior parte delle perdite in crypto non viene dalla scelta della moneta sbagliata. Viene dallo scommettere troppo su una qualsiasi moneta. La prima domanda non è “che cosa comprare” ma “<b>quanta parte del mio patrimonio posso permettermi di mettere qui?</b>”</p>

<h3>Decidi la dimensione con il “test del calo dell’80%”</h3>
<p>Bitcoin è sceso del 70-85% dal massimo al minimo più volte, e le attività più piccole spesso scendono di più. Chiediti: se tutto questo comparto perdesse l’80% e restasse lì per due anni, il mio piano di vita e il mio sonno sopravvivrebbero? Usa il calcolatore.</p>
${B.w('cryptosize')}
<p>Molti consulenti prudenti suggeriscono piccole allocazioni, spesso nell’ordine dell’1-5% del patrimonio investibile per chi vuole una certa esposizione. Non è una regola né un consiglio, solo un esempio di come ragionano i professionisti: dimensionala in modo che una perdita totale sia un fastidio, non un disastro.</p>

<h3>Una struttura semplice: nucleo e satelliti</h3>
<ul>
<li><b>Nucleo (per esempio il 60-80% del tuo comparto crypto)</b>: Bitcoin ed Ethereum, i più consolidati.</li>
<li><b>Satelliti (per esempio il 20-40%)</b>: una manciata di progetti più grandi che hai studiato.</li>
<li><b>Biglietti della lotteria (facoltativo, 0-5% del comparto)</b>: scommesse minuscole e rischiose che sei pronto a perdere per intero.</li>
</ul>

<h3>DCA: il tuo amico in un mercato volatile</h3>
<p>Poiché i prezzi oscillano tanto, comprare una somma fissa ogni settimana o ogni mese (DCA) toglie la pressione di azzeccare il momento. Compri di più quando i prezzi sono bassi e di meno quando sono alti. Aiuta anche con le emozioni. Puoi rivedere il gioco del DCA dal percorso Investitore.</p>

<h3>Cicli: schemi, non promesse</h3>
<p>Bitcoin ha storicamente mostrato grandi cicli di boom e crollo di circa quattro anni, spesso legati all’halving, con massimi precedenti seguiti da cali del 70-85%. Molti investitori costruiscono il proprio timing su questo, ma i cicli passati sono un campione piccolo, e i mercati imparano. Non scommettere il tuo piano sulla ripetizione di uno schema.</p>

<h3>Prendi profitto di proposito</h3>
<p>L’euforia fa dimenticare di vendere. Decidi in anticipo: per esempio, “Se il mio comparto crypto cresce oltre il 10% del mio patrimonio, ribilancio al 5%”, oppure “Vendo un quarto di qualsiasi posizione che triplica”. Le regole scritte battono l’avidità.</p>

<h3>Ribilanciamento e consapevolezza fiscale</h3>
<p>Vendere può far scattare le tasse. Ribilancia indirizzando i nuovi versamenti dove serve e conserva le registrazioni di ogni acquisto e vendita (vedi la lezione sulle tasse).</p>

${B.ex('<p>Tom mette il 3% dei suoi risparmi di 30.000 € in crypto (900 €), comprando 75 € al mese con il DCA. Quando il mercato cala del 70%, il suo comparto perde circa 630 €, un colpo del 2,1% del suo patrimonio totale. Continua a comprare a buon mercato. Quando poi risale di 5 volte, riduce fino al suo obiettivo. Non si è arricchito né rovinato, ed è rimasto nel gioco.</p>')}

${B.warn('<p>Non investire mai denaro che ti serve per l’affitto, le tasse universitarie o le emergenze. Non indebitarti mai per comprare crypto. Non mettere mai tutti i tuoi risparmi in una sola moneta perché “non può fallire”.</p>')}

${B.take(['La dimensione viene prima: usa il test del calo dell’80% per decidere quanto è sicuro.', 'Nucleo e satelliti: soprattutto asset principali, una piccola fetta per la speculazione.', 'Il DCA riduce il rischio di timing e lo stress emotivo.', 'I cicli sono schemi, non garanzie. Abbi regole scritte per prendere profitto e ribilanciare.'])}`,
      q: [
        ['Qual è lo scopo del “test del calo dell’80%”?', ['Prevedere il prezzo futuro', 'Assicurarsi che la dimensione della tua posizione sia sostenibile se i prezzi crollano', 'Scegliere un wallet', 'Evitare le commissioni'], 1, 'Se non potessi reggere un calo dell’80% del comparto, è troppo grande.'],
        ['In un portafoglio crypto nucleo-satelliti, il nucleo è di solito…', ['Memecoin', 'Bitcoin ed Ethereum', 'I lanci più recenti', 'Token con leva'], 1, 'Gli asset più consolidati formano la base; le idee più rischiose sono satelliti limitati.'],
        ['Perché scrivere in anticipo le regole per prendere profitto e ribilanciare?', ['Per evitare che avidità ed euforia prendano le decisioni', 'Perché gli exchange lo richiedono', 'Per aumentare le commissioni', 'Per impressionare gli altri'], 0, 'Le regole predefinite ti aiutano ad agire con calma quando i prezzi schizzano.']
      ]
    },
    {
      id: 'c6', m: 14, t: 'Sicurezza e truffe: come non perdere tutto',
      hook: 'Nella crypto non c’è una banca da chiamare. Impara le truffe che sono costate milioni e gioca a Sicuro o truffa.',
      body: `
<p>Poiché le transazioni crypto non si possono annullare, ai truffatori piacciono molto. La buona notizia: quasi tutte le truffe si basano sugli stessi pochi trucchi e, una volta riconosciuti, perdono potere.</p>

<h3>Le truffe più comuni</h3>
<ul>
<li><b>Phishing</b>: email, messaggi o siti falsi che copiano un vero exchange o wallet per rubare il tuo accesso o la frase di recupero. Digita sempre tu l’indirizzo o usa un segnalibro salvato.</li>
<li><b>Falso supporto</b>: qualcuno ti scrive “dall’exchange” offrendo aiuto. Il vero supporto non ti contatta per primo né chiede password o frasi di recupero.</li>
<li><b>Truffe dei giveaway</b>: “invia 1 ETH e ne ricevi 2”, spesso con persone famose o account hackerati.</li>
<li><b>Rug pull e pump-and-dump</b>: sviluppatori o gruppi pubblicizzano un token, poi vendono ciò che hanno e spariscono.</li>
<li><b>Truffe romantiche / “pig-butchering”</b>: uno sconosciuto cordiale costruisce fiducia per settimane e ti guida verso una falsa piattaforma di investimento che mostra falsi profitti, finché non provi a prelevare.</li>
<li><b>Wallet drainer</b>: siti dannosi che ti ingannano a firmare una transazione che dà loro il permesso di svuotare il tuo wallet. Fai attenzione ai pulsanti “Connect wallet” e alle approvazioni illimitate.</li>
<li><b>Avvelenamento di indirizzo</b>: i truffatori inviano minuscole transazioni da un indirizzo simile a uno che hai usato, sperando che tu lo copi per errore dalla cronologia.</li>
<li><b>App ed estensioni false</b>: wallet contraffatti negli store di app o di browser.</li>
<li><b>Schemi Ponzi</b>: promesse di rendimenti alti e fissi, pagati con denaro di nuovi investitori finché lo schema crolla.</li>
<li><b>Truffe di recupero</b>: dopo una perdita, “esperti di recupero” promettono di recuperare le tue monete dietro un pagamento anticipato. Sono truffatori anche loro.</li>
</ul>

<h3>La tua configurazione di sicurezza</h3>
${B.w('checklist', { key: 'c6', title: 'Checklist di sicurezza crypto', accent: 'ci', items: 'Password uniche e lunghe per ogni exchange e servizio wallet, in un gestore di password|Autenticazione a due fattori con app di autenticazione (non SMS) su tutti gli account|Whitelist degli indirizzi di prelievo e codici anti-phishing attivati|Frase di recupero scritta su carta e conservata in due luoghi sicuri e separati, mai fotografata|Hardware wallet comprato direttamente dal produttore per le somme più grandi|Siti degli exchange salvati nei segnalibri, senza mai cliccare link in email o pubblicità|Indirizzo email separato per gli account crypto|Piccola transazione di prova prima di ogni grande trasferimento|Controllo regolare delle approvazioni dei token e revoca di quelle inutilizzate' })}

<h3>Regole d’oro</h3>
<ol>
<li>Se sembra troppo bello per essere vero, lo è.</li>
<li>L’urgenza è un’arma. I truffatori creano scadenze perché tu non possa pensare.</li>
<li>Nessuno regala denaro, e nessuno ha bisogno della tua frase di recupero.</li>
<li>Verifica con un secondo canale. Chiama l’azienda a un numero preso dal suo sito ufficiale.</li>
<li>Tieni la maggior parte dei fondi in cold storage e una piccola somma “da spesa” in un hot wallet.</li>
</ol>

<h3>Gioca: Sicuro o truffa?</h3>
<p>Nove situazioni reali. Decidi se la mossa è sicura o rischiosa e leggi perché.</p>
${B.w('scam')}

<h3>Se vieni truffato</h3>
<p>Agisci in fretta: interrompi il contatto, sposta i fondi rimasti su un nuovo wallet, cambia le password, segnala all’exchange coinvolto, alla polizia locale e alle autorità per la segnalazione delle frodi. Il recupero è improbabile, ed è esattamente per questo che la prevenzione conta.</p>

${B.take(['I trasferimenti crypto sono irreversibili, quindi la prevenzione è tutto.', 'Non condividere mai la tua frase di recupero; il vero supporto non la chiede mai.', 'Usa il 2FA via app, un gestore di password e il cold storage per le somme più grandi.', 'Pressione, rendimenti garantiti e messaggi privati non richiesti sono segnali classici di truffa.'])}`,
      q: [
        ['Un “addetto del supporto” ti scrive per primo e ti chiede la frase di recupero. Questa è…', ['Procedura normale', 'Una truffa', 'Necessaria per la sicurezza', 'Un programma di ricompense'], 1, 'Il vero supporto non lo farà mai.'],
        ['Qual è un buon modo di accedere a un nuovo sito crypto?', ['Cliccare qualsiasi link di una pubblicità', 'Digitare tu l’indirizzo o usare un segnalibro fidato', 'Usare un’estensione del browser non verificata', 'Condividere la password del wallet per verificare'], 1, 'I siti falsi copiano quelli veri; un segnalibro evita le imitazioni.'],
        ['Uno sconosciuto conosciuto online ti guida a una piattaforma che mostra grandi guadagni ma chiede altri depositi per prelevare. Questo è tipico di…', ['Un exchange normale', 'Una truffa pig-butchering', 'Una regola fiscale', 'Una ricompensa di staking'], 1, 'Le piattaforme legittime non richiedono depositi extra per rilasciare il tuo denaro.']
      ]
    },
    {
      id: 'c7', m: 10, t: 'Tasse, regolamentazione e tenuta dei registri',
      hook: 'I guadagni in crypto di solito sono tassabili. Una semplice abitudine di registrazione fa risparmiare mal di testa e denaro.',
      body: `
<p>Questa lezione fornisce principi generali. <b>Le norme fiscali e legali variano da paese a paese e cambiano spesso</b>, quindi controlla sempre la tua autorità fiscale locale e, se le somme contano, parla con un professionista fiscale qualificato.</p>

<h3>Che cosa è spesso tassabile</h3>
<p>In molti paesi le autorità trattano le cripto-attività come beni o investimenti. Gli eventi che comunemente creano un obbligo fiscale includono:</p>
<ul>
<li><b>Vendere crypto per denaro fiat</b> (euro, dollari) con profitto.</li>
<li><b>Scambiare una crypto con un’altra</b>. In molti posti conta come vendere la prima e comprare la seconda.</li>
<li><b>Pagare beni o servizi</b> con crypto.</li>
<li><b>Guadagnare crypto</b> come reddito: lavoro, mining, ricompense di staking o airdrop, spesso tassati come reddito al momento in cui li ricevi.</li>
</ul>
<p>Spesso <b>non</b> tassabili (ma verifica a livello locale): comprare crypto con fiat, spostare crypto tra i tuoi wallet e semplicemente detenere.</p>

<h3>Come si calcolano i guadagni</h3>
<p>Guadagno = prezzo di vendita − costo di acquisto (il tuo “costo base”), meno le commissioni ammesse. Alcuni paesi tassano i guadagni con aliquota fissa, altri con aliquote progressive, e alcuni danno un trattamento favorevole agli asset detenuti per più di un anno. Le perdite possono compensare i guadagni.</p>
${B.ex('<p>Compri 0,1 BTC per 2.000 € e poi li vendi a 3.500 €. Guadagno = 1.500 €. Se la tua norma locale tassa i guadagni al, per esempio, 25% (solo a titolo illustrativo), l’imposta sarebbe 375 €. Se invece scambi quel BTC con un’altra moneta del valore di 3.500 €, molti sistemi fiscali lo tratterebbero comunque come una vendita e calcolerebbero lo stesso guadagno, anche se non hai mai toccato euro.</p>')}

<h3>Tieni buoni registri dal primo giorno</h3>
<ul>
<li>Data, tipo e importo di ogni acquisto, vendita, scambio, trasferimento e ricompensa.</li>
<li>Il valore in euro (o valuta locale) al momento di ogni evento.</li>
<li>Le commissioni pagate.</li>
<li>Gli indirizzi dei wallet e gli account degli exchange usati.</li>
<li>Esporta ogni anno lo storico delle transazioni (file CSV) da ogni exchange, perché le piattaforme possono chiudere o perdere dati.</li>
</ul>
<p>Un software fiscale specializzato in crypto può importare i tuoi exchange e wallet e calcolare i guadagni. Molti commercialisti sanno usarli.</p>

<h3>Regolamentazione: uno scenario in evoluzione</h3>
<ul>
<li>Nell’Unione Europea, il regolamento <b>MiCA</b> stabilisce regole per gli emittenti di cripto-attività e i prestatori di servizi (pienamente applicabile dalla fine del 2024), incluse autorizzazione, informativa e regole sulle stablecoin. Le norme UE sulla comunicazione fiscale per le piattaforme crypto (DAC8) partono dal 2026, quindi le autorità ricevono sempre più dati sulle tue transazioni.</li>
<li>Altre regioni stanno costruendo i propri quadri. Le regole possono limitare certi prodotti, come i derivati per i clienti retail.</li>
</ul>
<p>Significato pratico: preferisci <b>piattaforme autorizzate e regolamentate</b>, aspettati verifiche d’identità e presumi che le autorità fiscali vedano più di prima.</p>

${B.warn('<p>Diffida degli schemi crypto “esentasse” e di chi sostiene che non devi dichiarare. Evadere le tasse è illegale e sempre più rilevabile.</p>')}

${B.take(['Vendere, scambiare, spendere e guadagnare crypto fa spesso scattare le tasse, a seconda del tuo paese.', 'Traccia il costo base, le date, i valori e le commissioni di ogni transazione.', 'Esporta regolarmente i tuoi registri; valuta un software fiscale per la crypto.', 'Usa piattaforme regolamentate e aspettati più trasparenza dalle autorità.'])}`,
      q: [
        ['In molti paesi, scambiare una crypto con un’altra è trattato come…', ['Niente, mai tassabile', 'Una vendita del primo asset (evento tassabile)', 'Un regalo', 'Un prestito'], 1, 'Verifica le regole locali, ma uno scambio è spesso considerato una cessione.'],
        ['Che cosa ti serve per calcolare correttamente un guadagno?', ['Solo il prezzo di oggi', 'Costo di acquisto, ricavo della vendita e commissioni con le date', 'La tua età', 'Il colore del tuo wallet'], 1, 'Il costo base e i ricavi determinano il guadagno o la perdita.'],
        ['Perché esportare regolarmente lo storico delle transazioni?', ['Gli exchange possono chiudere o perdere dati e ti servono i registri per le tasse', 'Aumenta i rendimenti', 'È richiesto per lo staking', 'Elimina le commissioni'], 0, 'I tuoi registri ti proteggono se una piattaforma scompare.']
      ]
    },
    {
      id: 'c8', m: 10, t: 'Il tuo piano crypto a lungo termine e la strategia di uscita',
      hook: 'Trasforma questo percorso in un piano di una pagina: perché detieni, quanto, come resti al sicuro e quando prendi profitto.',
      body: `
<p>Un piano scritto è la differenza tra investire e scommettere. Usa questa lezione per assemblare il tuo.</p>

<h3>Il piano crypto di una pagina</h3>
${B.tbl(['Sezione', 'La tua risposta'], [
        ['Perché detengo crypto', 'La mia tesi in due frasi (per esempio: “esposizione a lungo termine a una nuova classe di asset, piccola fetta”)'],
        ['Quanto', 'Percentuale massima del mio patrimonio investibile (per esempio 3%) e l’importo in euro'],
        ['Che cosa detengo', 'Asset del nucleo (per esempio BTC / ETH) e il massimo per satelliti e speculazione'],
        ['Come compro', 'Calendario DCA: importo, giorno del mese, piattaforma'],
        ['Dove conservo', 'Exchange per piccole somme; hardware wallet per il resto; luoghi di backup della frase di recupero'],
        ['Quando ribilancio o prendo profitto', 'Regole, come: “se la crypto supera il 6% del mio patrimonio riduco al 3%”'],
        ['Che cosa mi farebbe cambiare idea', 'Eventi che invaliderebbero la mia tesi (per esempio un grave guasto del protocollo o un cambio normativo)'],
        ['Tasse e registri', 'Dove tengo il mio storico delle transazioni e quando lo rivedo'],
        ['In un crollo io', 'Mantengo il piano, non controllo i prezzi ogni giorno, non mi indebito, non vendo in preda al panico']
      ])}

<h3>Pianifica l’imprevisto</h3>
<ul>
<li><b>Eredità e accesso</b>: se ti succedesse qualcosa, la tua famiglia potrebbe accedere ai fondi? Scrivi istruzioni e conservale al sicuro (per esempio presso un avvocato o un notaio). Molte monete sono andate perse per sempre quando l’unica persona che conosceva la frase di recupero è morta.</li>
<li><b>Backup</b>: più di una copia della frase di recupero in luoghi sicuri diversi, protetta da fuoco e acqua (esistono piastre di backup in metallo).</li>
<li><b>Semplicità</b>: la complessità genera errori. Meno asset, meno piattaforme, meno parti in movimento.</li>
</ul>

<h3>Strategia di uscita</h3>
<p>Non devi tenere per sempre. Piani di uscita tipici:</p>
<ul>
<li><b>Uscita a scalini</b>: vendere piccole porzioni a prezzi più alti prestabiliti (per esempio vendere il 10% ogni volta che il prezzo sale del 50%).</li>
<li><b>Uscita per ribilanciamento</b>: ogni volta che l’asset supera la tua quota obiettivo del patrimonio, ridurre.</li>
<li><b>Per obiettivo</b>: vendere per finanziare un obiettivo definito (come l’anticipo di una casa) quando il traguardo è raggiunto.</li>
</ul>
${B.ex('<p>Priya si dà una regola: “Quando la mia crypto vale 3 volte quanto ho investito, ritiro l’investimento originale e lascio correre il resto.” Questo blocca il suo capitale e toglie lo stress di guardare. Se il prezzo scende dopo, ha già recuperato il suo costo. È solo un esempio di regola, non una raccomandazione.</p>')}

<h3>Ritmo di revisione</h3>
<ul>
<li><b>Mensile</b>: confermare che il DCA sia partito, controllare la sicurezza.</li>
<li><b>Trimestrale</b>: rivedere l’allocazione e aggiornare i registri.</li>
<li><b>Annuale</b>: riconsiderare la tesi e la posizione fiscale.</li>
</ul>

${B.w('checklist', { key: 'c8', title: 'Checklist del mio piano crypto', accent: 'ci', items: 'Ho scritto il mio piano su una pagina, con la mia percentuale massima|Il mio calendario DCA è automatico o nel mio calendario|La mia frase di recupero ha due backup sicuri e un piano di accesso per la famiglia|Conosco le mie regole di presa di profitto e di ribilanciamento|I miei registri delle transazioni sono esportati e conservati|Ho una regola per ciò che farò in un crollo dell’80%' })}

${B.key('<p><b>Congratulazioni.</b> Ora ne sai più sulla sicurezza crypto della maggior parte di chi la possiede. Se vuoi esplorare il lato attivo (trading, leva e bot), il percorso Trader Crypto lo tratta, con un serio avvertimento allegato.</p>')}

${B.take(['Scrivi un piano di una pagina: tesi, dimensione, posizioni, calendario, conservazione e regole di uscita.', 'Pianifica eredità, backup e semplicità.', 'Scegli una strategia di uscita prima di averne bisogno: a scalini, per ribilanciamento o per obiettivo.', 'Rivedi a un ritmo regolare invece di guardare il prezzo ogni giorno.'])}`,
      q: [
        ['Perché un piano di eredità o di accesso è importante nella crypto?', ['Aumenta i rendimenti', 'Senza la frase di recupero, i familiari non possono recuperare i fondi', 'È una regola fiscale', 'Abbassa le commissioni'], 1, 'Le monete possono andare perse in modo permanente se nessun altro può accedervi.'],
        ['Che cosa significa “uscita a scalini”?', ['Vendere tutto in una volta', 'Vendere piccole porzioni a prezzi più alti prestabiliti', 'Comprare al picco', 'Passare a un exchange'], 1, 'Distribuisce le decisioni di vendita ed elimina la necessità di azzeccare il massimo.'],
        ['Qual è il miglior ritmo di revisione per un investitore a lungo termine?', ['Controlli di prezzo ogni ora', 'Controlli di base mensili, revisione trimestrale dell’allocazione, revisione annuale di tesi e tasse', 'Mai', 'Solo quando il prezzo crolla'], 1, 'Revisioni regolari ma poco frequenti ti mantengono sul piano senza ansia.']
      ]
    }
  ]);
})();
