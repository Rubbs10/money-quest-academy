/* Percorso Trader di cripto: 8 lezioni */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ct', [
    {
      id: 'd1', m: 12, t: 'Trading di cripto 101: mercati 24/7, spot e derivati',
      hook: 'Come i mercati cripto differiscono dalle azioni e quali sono i principali prodotti usati dai trader.',
      body: `
<p>Il trading di cripto condivide la logica di ogni trading (grafici, rischio, psicologia), ma con un sapore tutto suo: il mercato non chiude mai, la volatilità è maggiore, i prodotti sono più esotici e le regole variano da paese a paese. Prima di imparare le tattiche, capisci il campo di gioco.</p>

<h3>Cosa c'è di diverso nei mercati cripto?</h3>
<ul>
<li><b>24/7/365</b>: nessuna campanella di apertura, nessun weekend libero. Grandi movimenti possono avvenire alle 3 di notte mentre dormi.</li>
<li><b>Alta volatilità</b>: movimenti giornalieri del 3-10% sono normali per molte monete. Opportunità e pericolo allo stesso tempo.</li>
<li><b>Piattaforme frammentate</b>: centinaia di exchange, ciascuno con prezzi, liquidità, commissioni e rischi propri.</li>
<li><b>Regolamentazione più leggera</b>: le tutele sono più deboli e il rischio di manipolazione (pump and dump, wash trading) è più alto, soprattutto per le monete piccole.</li>
<li><b>Sentiment che si autoalimenta</b>: social media, balene e leva creano movimenti rapidi ed emotivi.</li>
</ul>

<h3>I prodotti principali</h3>
${B.tbl(['Prodotto', 'Cos\'è', 'Leva', 'Rischio'], [
        ['Spot', 'Compri e possiedi la moneta vera', 'Nessuna', 'Solo rischio di prezzo. Il migliore per i principianti'],
        ['Margin trading', 'Prendi in prestito per comprare più di quanto possiedi', 'Da bassa ad alta', 'Perdite amplificate; paghi interessi sui prestiti'],
        ['Futures (con scadenza)', 'Contratto per comprare o vendere a una data futura', 'Fino a 100x o più', 'La liquidazione può cancellare il tuo margine'],
        ['Futures perpetui', 'Futures senza scadenza, tenuti vicino al prezzo spot da pagamenti di funding', 'Fino a 100x o più', 'Costi di funding + liquidazione + rischio dell\'exchange'],
        ['Opzioni', 'Diritti di comprare o vendere a un prezzo stabilito', 'Incorporata', 'Complesse; possono scadere senza valore']
      ])}
<p>L'accesso varia da paese a paese. Molti regolatori limitano o vietano i derivati per i clienti retail, e le piattaforme possono limitare la leva in certe regioni. Segui sempre le regole locali e i termini di un fornitore regolamentato.</p>

<h3>Come guadagnano gli exchange: le commissioni</h3>
<ul>
<li><b>Maker</b>: inserisci un ordine limite che attende nel book e aggiunge liquidità. Di solito commissioni più basse.</li>
<li><b>Taker</b>: prendi subito un ordine esistente (ordine a mercato). Commissioni più alte.</li>
<li>Commissioni dallo 0,02% allo 0,1% per operazione sembrano piccole ma si sommano per chi opera spesso.</li>
</ul>

<h3>Sessioni e liquidità</h3>
<p>Anche se il mercato non si ferma mai, l'attività segue i fusi orari umani. Il volume è di solito più forte quando Europa e Stati Uniti si sovrappongono, e più debole nei weekend, quando i prezzi possono muoversi bruscamente con poca liquidità. I trader evitano spesso di inserire grandi ordini nelle ore di bassa liquidità.</p>

<h3>Coppie e valute base</h3>
<p>Le coppie si scrivono come BTC/USDT: la prima è ciò che compri o vendi, la seconda è ciò con cui paghi. Le coppie con stablecoin (USDT, USDC) sono le più liquide. Sapere in quale valuta è misurato il tuo profitto conta: un'operazione può essere «in guadagno in USDT» mentre la moneta che detieni è scesa rispetto a Bitcoin.</p>

${B.ex('<p>È domenica, le 4 del mattino. Sam ha una posizione a leva e dorme. Esce una notizia improvvisa, la liquidità è scarsa e il prezzo schizza dell\'8% contro di lui in pochi minuti. Non aveva messo lo stop. Si sveglia con una liquidazione. Nei mercati tradizionali l\'orario di chiusura lo avrebbe protetto; nelle cripto la gestione del rischio deve funzionare mentre dormi (stop, dimensioni ridotte, niente leva durante la notte).</p>')}

${B.warn('<p>I derivati sono per trader esperti. Se sei alle prime armi, inizia con il trading spot e dimensioni piccole, e leggi le prossime lezioni sulla leva prima di toccare i futures.</p>')}

${B.take(['Le cripto si scambiano 24/7 con alta volatilità e tutele più deboli.', 'Spot significa possedere la moneta; i futures perpetui aggiungono leva, funding e rischio di liquidazione.', 'Gli ordini maker aggiungono liquidità (commissione minore), gli ordini taker la tolgono (commissione maggiore).', 'I controlli di rischio devono funzionare mentre dormi: stop, dimensioni piccole, niente leva sconsiderata di notte.'])}`,
      q: [
        ['Qual è la differenza chiave tra spot e futures perpetui?', ['Lo spot significa possedere la moneta; i perpetui sono contratti a leva con funding e liquidazione', 'Non ce n\'è nessuna', 'Lo spot ha sempre la leva', 'I perpetui sono più sicuri'], 0, 'I futures perpetui sono derivati con leva e costi di funding.'],
        ['Quale tipo di ordine di solito paga la commissione più bassa?', ['Ordine taker (a mercato)', 'Ordine maker (limite) che aggiunge liquidità', 'Sono sempre uguali', 'Ordine stop'], 1, 'I maker aggiungono liquidità al book e di solito sono premiati con commissioni minori.'],
        ['Perché la gestione del rischio è più difficile nelle cripto che nelle azioni?', ['I mercati chiudono troppo spesso', 'Il mercato non chiude mai, quindi grandi movimenti possono avvenire mentre sei assente', 'Le commissioni sono fisse', 'Non c\'è volatilità'], 1, 'Negoziare ventiquattr\'ore su ventiquattro significa che le tue protezioni devono essere sempre attive.']
      ]
    },
    {
      id: 'd2', m: 14, t: 'Leva e liquidazione: come si azzerano i conti',
      hook: 'Il calcolatore che ogni trader di cripto dovrebbe usare prima di ogni operazione a leva.',
      body: `
<p>La leva ti permette di controllare una posizione più grande del tuo denaro. È la funzione che attira la maggior parte dei principianti e ne distrugge la maggior parte. Capire la liquidazione non è facoltativo.</p>

<h3>Come funziona la leva</h3>
<p>Se metti 500 € (il tuo <b>margine</b>) e usi una leva 10x, controlli una posizione da 5.000 €. Un movimento dell'1% del prezzo cambia il tuo conto del 10%. Un movimento del 10% contro di te cancella tutti i 500 €.</p>
<ul>
<li><b>Margine</b>: la garanzia che depositi.</li>
<li><b>Margine di mantenimento</b>: la garanzia minima richiesta dall'exchange per tenere aperta la posizione.</li>
<li><b>Liquidazione</b>: quando le perdite spingono il tuo margine sotto il mantenimento, l'exchange chiude forzatamente la posizione. Perdi il margine e a volte commissioni e costi extra.</li>
<li><b>Margine isolato</b>: solo il margine assegnato a quell'operazione è a rischio. <b>Margine incrociato</b>: l'intero saldo del conto sostiene l'operazione, quindi una brutta posizione può svuotare tutto.</li>
</ul>

<h3>La semplice formula di liquidazione (approssimazione)</h3>
<p>Per una posizione long con margine isolato: <b>prezzo di liquidazione ≈ ingresso × (1 − 1/leva + tasso di margine di mantenimento)</b>. Per uno short, è lo specchio sopra l'ingresso. Con 10x vieni liquidato dopo un movimento di circa il 9,5% contro di te. Con 50x, dopo circa l'1,5%. Con 100x, dopo circa lo 0,5%, meno di una normale oscillazione durante una pausa caffè su una moneta volatile.</p>

<h3>Provalo tu</h3>
<p>Scegli la leva e guarda la distanza dalla liquidazione rispetto al movimento giornaliero tipico dell'asset.</p>
${B.w('liq')}

<h3>Perché la leva alta è una trappola</h3>
<ul>
<li><b>Il rumore ti uccide</b>: il prezzo fa costantemente piccole oscillazioni e ombre. I livelli di liquidazione stretti vengono colpiti dal rumore, non dal «vero trend».</li>
<li><b>Non puoi sbagliare nemmeno un po'</b>: la leva alta richiede un timing perfetto.</li>
<li><b>Cascate di liquidazioni</b>: quando il prezzo si muove, le liquidazioni forzate innescano altre vendite (o acquisti), il che spinge il prezzo oltre e liquida altri trader. In diversi crolli, miliardi di dollari di posizioni a leva sono stati liquidati in un solo giorno.</li>
<li><b>Commissioni e funding</b> sono addebitati sull'intera dimensione della posizione, quindi i costi salgono con la leva.</li>
<li><b>Auto-deleveraging e slippage</b>: nei movimenti estremi, gli exchange possono chiudere posizioni in profitto o eseguire il tuo stop lontano da dove l'avevi messo.</li>
</ul>

<h3>La visione professionale della leva</h3>
<p>I professionisti non vedono la leva come un modo per arricchirsi in fretta. La trattano come uno strumento di <b>efficienza del capitale</b>: usano solo il necessario per depositare il margine di una posizione dimensionata in base al rischio. Decidono la dimensione della posizione dalla distanza dello stop (vedi la lezione sul rischio), e la leva è semplicemente ciò che ne risulta, di solito bassa (da 1x a 3x). La mentalità chiave: il tuo <i>rischio</i> è la distanza dello stop per la tua dimensione, non il numero della leva.</p>
${B.ex('<p>Due trader comprano a 100 con stop a 97 e vogliono rischiare 50 €. Entrambi comprano la stessa dimensione: 1.667 € di valore. Il trader A deposita un margine di 1.667 € (1x). Il trader B deposita 167 € (10x). Se lo stop a 97 funziona, entrambi perdono gli stessi 50 €. Ora immagina che lo stop fosse stato dimenticato o spostato e un picco porti il prezzo a 90 prima del rimbalzo. Il trader A (1x) è ancora nell\'operazione con una spiacevole perdita non realizzata. Il trader B (10x) è stato liquidato vicino a 90,5 e ha perso tutti i 167 € di margine, e il rimbalzo successivo non gli serve. Il numero della leva ha cambiato solo quanto spazio c\'era prima del disastro.</p>')}

${B.key('<p><b>Regole per una leva più sicura:</b> usa il margine isolato, metti sempre uno stop-loss ben dentro il prezzo di liquidazione, dimensiona l\'operazione in base al rischio (non alla leva) e tieni la leva abbastanza bassa da avere la liquidazione molte volte più lontana di un movimento giornaliero tipico.</p>')}

${B.warn('<p>Gli exchange guadagnano da liquidazioni e commissioni. I social premiano gli screenshot di enormi guadagni a leva e nascondono i conti azzerati. Ricorda che i sopravvissuti che vedi sono un campione minuscolo e autoselezionato.</p>')}

${B.take(['La leva moltiplica guadagni e perdite; la liquidazione si porta via tutto il tuo margine.', 'Il margine isolato limita il danno a una sola operazione; il margine incrociato può svuotare il tuo conto.', 'Il prezzo di liquidazione dipende dalla leva; a 50x o 100x il normale rumore basta a liquidarti.', 'Dimensiona le operazioni in base alla distanza dello stop e alla percentuale di rischio; tieni la leva bassa e gli stop dentro la liquidazione.'])}`,
      q: [
        ['Con leva 20x su un long, di quanto circa deve muoversi il prezzo contro di te per liquidarti?', ['Circa il 20%', 'Circa il 4,5%', 'Circa lo 0,5%', 'Circa il 50%'], 1, '1/20 = 5%, meno un piccolo margine di mantenimento fa circa 4,5%.'],
        ['Quale modalità di margine rischia l\'intero conto su una sola posizione?', ['Margine isolato', 'Margine incrociato', 'Trading spot', 'Ordini limite'], 1, 'Il margine incrociato usa il saldo totale come garanzia per le posizioni aperte.'],
        ['Qual è la mentalità professionale sulla leva?', ['Massimizzarla sempre', 'Dimensionare in base al rischio e alla distanza dello stop; la leva è solo un sottoprodotto e resta bassa', 'Non usare mai gli stop', 'Usarla per recuperare le perdite'], 1, 'Il rischio è la distanza dello stop per la dimensione, e la leva alta non lascia spazio all\'errore.']
      ]
    },
    {
      id: 'd3', m: 13, t: 'Leggere il mercato cripto: volume, open interest, funding e sentiment',
      hook: 'Oltre il grafico dei prezzi: i segnali specifici delle cripto, cosa dice ciascuno e come i trader li usano male.',
      body: `
<p>Le cripto offrono dati che i mercati tradizionali nascondono: puoi vedere il posizionamento a leva, i flussi degli exchange e il sentiment quasi in tempo reale. Questi strumenti ti dicono <b>chi è affollato dove</b>, il che è utile perché le operazioni affollate spesso vengono schiacciate.</p>

<h3>Prezzo, volume e open interest</h3>
<p>L'<b>open interest (OI)</b> è il valore totale dei contratti futures ancora aperti. Combinato con il prezzo, dà indizi:</p>
${B.tbl(['Prezzo', 'Open interest', 'Lettura tipica'], [
        ['In salita', 'In salita', 'Denaro fresco entra nei long; il trend ha carburante (ma controlla l\'affollamento)'],
        ['In salita', 'In calo', 'Posizioni short che si chiudono (short squeeze); il rialzo può essere più debole'],
        ['In calo', 'In salita', 'Nuovi short si accumulano; il ribasso ha slancio'],
        ['In calo', 'In calo', 'I long mollano (liquidazioni); le vendite potrebbero essere vicine all\'esaurimento']
      ])}

<h3>Tasso di funding: il termometro della folla</h3>
<p>I futures perpetui usano <b>pagamenti di funding</b> tra long e short per mantenere il prezzo del contratto vicino allo spot. Quando il tasso è positivo, i long pagano gli short. Un tasso positivo molto alto significa che molti trader sono sbilanciati long, ed è anche costoso da mantenere. Gli estremi avvengono spesso vicino a massimi locali, perché una folla con la stessa operazione non ha più nessuno a cui vendere. Un funding estremamente negativo può precedere short squeeze. Calcola quanto ti costa il funding:</p>
${B.w('funding')}

<h3>Mappe e heatmap di liquidazione</h3>
<p>Alcuni servizi di dati stimano dove si concentrerebbero le liquidazioni di posizioni a leva. Il prezzo è spesso «attratto» da quelle zone perché gli ordini forzati creano liquidità. Trattale come indizi, non garanzie. Le stime possono essere sbagliate.</p>

<h3>Indicatori di sentiment</h3>
<ul>
<li><b>Indice Fear & Greed</b>: combina volatilità, momentum, social media e altri input in un punteggio da 0 a 100. L'avidità estrema può avvisare di surriscaldamento; la paura estrema può mostrare capitolazione. È un misuratore contrarian, non uno strumento di timing.</li>
<li><b>Rapporto long/short</b>: quota di conti posizionati long rispetto a short su un exchange. Le differenze tra exchange e tra «conti» e «posizioni» lo rendono rumoroso.</li>
<li><b>Clamore social</b>: quando il tassista parla di una moneta, il movimento è probabilmente tardivo.</li>
</ul>

<h3>Segnali di struttura del mercato</h3>
<ul>
<li><b>Dominanza di Bitcoin</b>: la quota di Bitcoin sulla capitalizzazione totale delle cripto. Una dominanza in crescita spesso significa che il denaro si rifugia in BTC; in calo può accompagnare le «stagioni delle altcoin». Le altcoin generalmente si muovono con Bitcoin ma con oscillazioni maggiori («beta» più alto).</li>
<li><b>Offerta e flussi di stablecoin</b>: un'offerta di stablecoin in crescita sugli exchange può segnalare potere d'acquisto; in calo, un'uscita.</li>
<li><b>Entrate e uscite dagli exchange</b>: monete che arrivano sugli exchange possono precedere vendite; quelle che escono possono segnalare che si tengono.</li>
<li><b>Flussi degli ETF</b>: dove esistono fondi regolamentati su Bitcoin ed Ethereum, entrate e uscite giornaliere influenzano il mercato.</li>
</ul>

<h3>Il mondo intorno</h3>
<p>Le cripto non vivono isolate. Decisioni sui tassi d'interesse, dati sull'inflazione, il dollaro, il sentiment azionario e le notizie normative spesso le muovono. Tieni un calendario degli eventi chiave e delle date di sblocco dei token, e riduci il rischio attorno a essi.</p>

${B.ex('<p>Bitcoin è salito per una settimana. L\'open interest è ai massimi storici, il funding è estremamente positivo e l\'indice Fear & Greed segna «Avidità estrema». Nulla garantisce un calo, ma la posizione è affollata: un modesto ritracciamento può innescare una catena di liquidazioni di long. Un trader che vede questo può prendere profitto su parte di un long, evitare di inseguire o aspettare un ritracciamento per entrare.</p>')}

${B.warn('<p>Gli indicatori descrivono la folla, non la prevedono. «Surriscaldato» può restare surriscaldato per settimane. Combinali sempre con la struttura dei prezzi e uno stop-loss.</p>')}

${B.take(['L\'open interest più la direzione del prezzo mostra se i trend hanno carburante fresco.', 'I tassi di funding rivelano le operazioni affollate e costano denaro da mantenere.', 'I misuratori di sentiment sono indizi contrarian agli estremi, non strumenti di timing esatto.', 'Le altcoin sono versioni a beta più alto di Bitcoin; osserva la dominanza e gli eventi macro.'])}`,
      q: [
        ['Prezzo in salita con open interest in calo suggerisce…', ['Nuovi long che entrano con forza', 'Short che si chiudono (uno squeeze), quindi il rialzo può essere più debole', 'Un massimo garantito', 'Un problema di stablecoin'], 1, 'Un OI in calo durante un rialzo spesso significa copertura di short più che nuovi acquisti.'],
        ['Un tasso di funding positivo molto alto significa…', ['Gli short pagano i long', 'I long pagano gli short e il mercato è affollato long', 'L\'exchange è guasto', 'I prezzi spot sono zero'], 1, 'Funding positivo significa che i long pagano gli short, il che mostra un forte posizionamento long.'],
        ['Come dovresti usare l\'indice Fear & Greed?', ['Come segnale esatto di acquisto/vendita', 'Come indizio contrarian agli estremi, combinato con altre analisi', 'Mai', 'Per impostare la leva'], 1, 'Riflette l\'umore della folla e può restare estremo a lungo.']
      ]
    },
    {
      id: 'd4', m: 14, t: 'Strategie di trading di cripto',
      hook: 'Operazioni di trend, ritracciamento, range, breakout ed eventi adattate alle cripto, con un\'operazione completa calcolata passo passo.',
      body: `
<p>Le idee di base del percorso Day Trader (trend, livelli, breakout, range) valgono anche per i grafici cripto, con qualche aggiustamento: movimenti più ampi, trading 24/7 e dati extra come funding e open interest. Ecco i principali stili.</p>

<h3>1. Seguire il trend su timeframe più alti</h3>
<p>Usa il grafico a 4 ore o giornaliero. Entra quando il prezzo rompe verso nuovi massimi con volume crescente e sopra una media mobile ascendente (per esempio la EMA 50). Metti lo stop sotto l'ultimo minimo più alto e seguilo. Meno operazioni, meno commissioni, meno tempo davanti allo schermo, e va bene per chi lavora. Soffre anche nei periodi di mercato nervoso.</p>

<h3>2. Ingressi sui ritracciamenti</h3>
<p>In un trend rialzista, aspetta un calo verso una media mobile o una resistenza precedente diventata supporto, più segni che i venditori si stanno esaurendo (volume minore, ombra di rifiuto). Ingresso sulla candela di inversione, stop sotto il minimo del ritracciamento. Migliora il rapporto rischio/rendimento rispetto all'inseguire i breakout.</p>

<h3>3. Trading di range</h3>
<p>I mercati laterali sono comuni nelle cripto. Definisci una zona chiara di supporto e resistenza, compra vicino al fondo, vendi vicino al massimo ed esci se il prezzo chiude fuori dal range. Combina con segnali di ritorno alla media come gli estremi di funding.</p>

<h3>4. Breakout e retest</h3>
<p>Il prezzo si comprime (un range che si stringe o volatilità in calo) e poi rompe. Avvengono molti falsi breakout, quindi aspetta una chiusura di candela oltre il livello, poi idealmente un <b>retest</b> che tenga prima di entrare, con lo stop appena dentro il vecchio range.</p>

<h3>5. Funding e andare contro la folla</h3>
<p>Quando funding e open interest sono estremi e il prezzo si ferma, alcuni trader vanno contro la folla (prendono una piccola posizione contro-trend o riducono i long). È avanzato e pericoloso senza stop rigorosi, perché le operazioni affollate possono continuare.</p>

<h3>6. Operazioni su eventi e sblocchi</h3>
<p>Gli eventi programmati (sblocchi di token, aggiornamenti, listing, riunioni delle banche centrali) creano volatilità prevedibile, ma non direzione prevedibile. I principianti di solito se la cavano meglio riducendo la dimensione o restando fuori.</p>

<h3>7. Bot e grid</h3>
<p>Le strategie automatizzate come i grid bot piazzano una scala di ordini di acquisto e vendita dentro un range. Possono funzionare nei mercati laterali ma perdono nei trend forti. Trattiamo l'automazione nella lezione 6.</p>

<h3>Un'operazione completa d'esempio (passo passo)</h3>
<p>Immagina una moneta che scambia a <b>100,00</b>. Il trend giornaliero è rialzista. Il prezzo è tornato su un precedente livello di breakout a 96 e ha formato una candela rialzista. Hai <b>5.000 €</b> e la tua regola è rischiare l'<b>1% (50 €)</b> per operazione.</p>
<ol>
<li>Ingresso: 97,00 (sopra il massimo della candela rialzista).</li>
<li>Stop: 94,00, sotto il minimo del ritracciamento (a 3,00 dall'ingresso).</li>
<li>Dimensione della posizione = 50 € ÷ 3,00 = <b>16,67 unità</b> (una posizione di circa 1.617 €, ovvero 0,32x del conto).</li>
<li>Obiettivo: il massimo recente a 106 (a 9,00 di distanza), un rapporto rischio/rendimento di <b>3:1</b>.</li>
<li>Se sbagli, perdi 50 € (1%). Se hai ragione, guadagni circa 150 € (3%). Con un tasso di successo del 40% è comunque redditizio: 0,4×3 − 0,6×1 = +0,6R.</li>
</ol>
<p>Verificalo con il calcolatore (i numeri sono precompilati in modo diverso, quindi impostali su questo esempio):</p>
${B.w('possize')}

<h3>Quale stile fa per te?</h3>
${B.tbl(['La tua situazione', 'Opzione migliore'], [
        ['Lavoro a tempo pieno, poco tempo', 'Trend o ritracciamenti su grafici 4h / giornalieri, con avvisi'],
        ['Ama routine calme e basate su regole', 'Trading di range con livelli rigorosi'],
        ['Poca pazienza', 'Attenzione: scegli uno stile che limiti il numero di operazioni al giorno'],
        ['Vuole fare trading 24/7', 'Usa bot con limiti rigorosi e dormi comunque; evita la leva notturna']
      ])}

${B.warn('<p>Non copiare segnali da gruppi o influencer. Anche se onesti, non controlli i loro ingressi, possono guadagnare dai tuoi acquisti e non impari il processo. Costruisci e testa le tue regole.</p>')}

${B.take(['Le strategie di trend e ritracciamento sui timeframe alti si adattano meglio alla maggior parte delle persone.', 'Aspetta la conferma sui breakout e preferisci i retest.', 'Calcola ogni operazione: ingresso, stop, dimensione, obiettivo e rapporto rischio/rendimento prima di entrare.', 'Evita operazioni su eventi e contro la folla finché non hai un processo collaudato.'])}`,
      q: [
        ['Nell\'esempio svolto, perché la dimensione della posizione è 16,67 unità?', ['Perché la leva è 10x', '50 € di rischio divisi per una distanza di stop di 3,00', 'Perché il prezzo è 100', 'Scelta casuale'], 1, 'Dimensione della posizione = importo a rischio ÷ (ingresso − stop) = 50 ÷ 3.'],
        ['A cosa serve aspettare un retest dopo un breakout?', ['Evitare le commissioni', 'Ridurre la probabilità di comprare un falso breakout', 'Garantire una vittoria', 'Aumentare la leva'], 1, 'Se il prezzo ritorna e il livello tiene, il breakout è più credibile.'],
        ['Quale approccio si adatta a un trader con un lavoro a tempo pieno?', ['Fare scalping su grafici a 1 minuto tutto il giorno', 'Operare su grafici 4h o giornalieri con avvisi e stop fissi', 'Usare leva 100x', 'Seguire segnali a caso'], 1, 'I timeframe più lenti richiedono meno tempo davanti allo schermo e hanno costi minori.']
      ]
    },
    {
      id: 'd5', m: 13, t: 'Gestione del rischio per mercati volatili',
      hook: 'Tutto dalla lezione sul rischio del Day Trader, più i pericoli speciali delle cripto: stablecoin, exchange, correlazione e weekend.',
      body: `
<p>Le regole di base valgono ancora: rischia una piccola percentuale fissa per operazione, metti gli stop in base alla struttura, ragiona in R, limita le perdite giornaliere e non aumentare mai le posizioni perdenti. Le cripto aggiungono diversi pericoli extra, quindi adattati.</p>

<h3>1. Dimensiona in base alla volatilità</h3>
<p>Gli asset cripto differiscono enormemente per quanto si muovono. Usa l'<b>ATR</b> (average true range) per impostare gli stop, poi lascia che sia la tua regola di rischio a fissare la dimensione. Una moneta con un range giornaliero medio del 10% ha bisogno di uno stop più ampio e quindi di una posizione più piccola rispetto a una con il 3%, se vuoi lo stesso rischio in euro.</p>

<h3>2. Correlazione: l'illusione della diversificazione</h3>
<p>Nei crolli, quasi tutto scende insieme: le altcoin spesso calano più in fretta di Bitcoin. Avere dieci posizioni long su dieci altcoin è in pratica una grande posizione long. Limita il tuo <b>rischio aperto totale</b> (per esempio 3-5% su tutte le operazioni) e considera l'intero portafoglio, non ogni singola operazione.</p>

<h3>3. Rischio di controparte e di piattaforma</h3>
<ul>
<li><b>Rischio dell'exchange</b>: gli exchange possono essere hackerati, limitare i prelievi o crollare (FTX, 2022). Non tenere tutti i fondi su una sola piattaforma. Tieni sugli exchange solo il capitale di trading e preleva i profitti.</li>
<li><b>Rischio stablecoin</b>: una moneta «stabile» può perdere l'ancoraggio (UST nel 2022; USDC brevemente nel 2023). Diversifica tra emittenti e preferisci quelli affidabili.</li>
<li><b>Rischio smart contract</b>: i protocolli DeFi possono essere hackerati.</li>
<li><b>Sicurezza delle chiavi API</b>: quando usi bot, crea chiavi con solo permesso di trading (prelievi disattivati), limita per indirizzo IP e non condividerle mai.</li>
</ul>

<h3>4. Rischi di esecuzione</h3>
<ul>
<li><b>Ombre e caccia agli stop</b>: il prezzo a volte schizza oltre livelli ovvi e rimbalza. Metti gli stop oltre il livello più un margine di volatilità.</li>
<li><b>Slippage nei mercati sottili</b>: monete piccole e weekend possono eseguire il tuo ordine lontano dal prezzo mostrato. Usa ordini limite e dimensioni più piccole.</li>
<li><b>Interruzioni dell'exchange</b>: le piattaforme possono bloccarsi durante la volatilità. Prevedi un piano B ed evita di dipendere da un solo luogo.</li>
</ul>

<h3>5. Peso di funding e commissioni</h3>
<p>Tenere posizioni perpetue a leva per giorni può accumulare costi di funding. Includi sempre funding e commissioni nel calcolo del profitto atteso, soprattutto per strategie con obiettivi piccoli.</p>

<h3>6. Preleva i profitti</h3>
<p>I profitti lasciati sullo schermo non sono reali. Adotta una regola come «prelevare il 30% dei profitti mensili su un portafoglio sicuro o conto bancario». Protegge dai problemi degli exchange, riduce la voglia di rischiare troppo e rende il successo tangibile.</p>

<h3>7. Prendi sul serio weekend e sonno</h3>
<p>Se tieni posizioni di notte o nel weekend, assicurati che abbiano stop, dimensione ridotta e niente leva alta. Molte liquidazioni avvengono mentre il trader dorme.</p>

${B.ex('<p>Elena ha 10.000 € su un exchange e cinque long su altcoin, ciascuno con rischio dell\'1%, quindi pensa di avere il 5% di rischio totale. Un calo dell\'intero mercato colpisce tutti e cinque gli stop in poche ore: perde il 5% in una mattina, non «l\'1% cinque volte diverse». Aveva inoltre l\'intero saldo su quella piattaforma. Dopo questo, limita il rischio aperto totale al 3%, tiene solo metà del capitale sull\'exchange e preleva i profitti settimanali.</p>')}

${B.w('checklist', { key: 'd5', title: 'Checklist pre-operazione per trader di cripto', accent: 'ct', items: 'I trend giornaliero e a 4 ore sostengono la mia direzione|Il mio stop è messo in base alla struttura più un margine di volatilità|La mia dimensione segue la mia percentuale di rischio fissa, non il numero della leva|Il rischio aperto totale su tutte le operazioni resta entro il mio limite|Ho controllato funding, open interest e qualsiasi evento o sblocco imminente|Sto usando il margine isolato e il mio stop è ben dentro il prezzo di liquidazione|Non tengo sull\'exchange più capitale di quanto serva|Sono calmo, riposato e non sto inseguendo un movimento' })}

${B.take(['Dimensiona in base alla volatilità: stop più ampi significano posizioni più piccole.', 'Le altcoin sono molto correlate, quindi conta il rischio aperto totale.', 'Riduci il rischio di piattaforma: distribuisci i fondi, limita le chiavi API e preleva i profitti.', 'Ricorda funding, slippage, weekend e interruzioni degli exchange nei tuoi calcoli.'])}`,
      q: [
        ['Perché avere molte posizioni in altcoin non è vera diversificazione in un crollo?', ['Scendono tutte a zero', 'Tendono a scendere insieme, spesso più di Bitcoin', 'Sono regolamentate', 'Pagano funding'], 1, 'L\'alta correlazione nei crolli fa agire le tue posizioni come un\'unica grande scommessa.'],
        ['Quale configurazione della chiave API è la più sicura per un bot di trading?', ['Permesso di prelievo attivo, nessun limite IP', 'Solo permesso di trading, prelievi disattivati, IP limitato', 'Accesso completo per comodità', 'Condividere la chiave con un amico come backup'], 1, 'Se le chiavi trapelano, un attaccante non può prelevare fondi.'],
        ['Perché prelevare i profitti regolarmente?', ['Aumenta la leva', 'Protegge i guadagni dai fallimenti degli exchange e rende i profitti reali', 'Evita le commissioni', 'È richiesto dalla legge'], 1, 'I profitti lasciati su una piattaforma sono esposti al rischio di controparte.']
      ]
    },
    {
      id: 'd6', m: 14, t: 'Bot e automazione: cosa possono e non possono fare',
      hook: 'I bot eseguono regole senza stancarsi. Non creano un vantaggio dal nulla. Impara a usarli e a riconoscere le truffe.',
      body: `
<p>La natura 24/7 delle cripto rende attraente l'automazione. Un <b>bot di trading</b> è un software che piazza ordini per te secondo regole. Usato bene, porta disciplina e velocità. Usato male, automatizza le perdite alla velocità della luce.</p>

<h3>Cosa fanno davvero i bot</h3>
<ul>
<li><b>Bot DCA</b>: comprano un importo fisso secondo un calendario. Semplici e a basso rischio.</li>
<li><b>Grid bot</b>: piazzano ordini di acquisto e vendita a intervalli fissi dentro un range di prezzo, raccogliendo piccole oscillazioni. Funzionano nei mercati laterali; perdono nei trend forti e se il prezzo esce dal range.</li>
<li><b>Bot di trend / segnali</b>: entrano e escono in base a indicatori o condizioni (incroci di medie mobili, breakout).</li>
<li><b>Bot di arbitraggio</b>: sfruttano differenze di prezzo tra piattaforme. Richiedono velocità, capitale e infrastruttura; i margini sono sottili.</li>
<li><b>Bot di market making</b>: quotano prezzi di acquisto e vendita per guadagnare lo spread. Territorio professionale.</li>
<li><b>Copy trading</b>: replica automaticamente le posizioni di un altro trader. Erediti il suo rischio e le sue commissioni, e i risultati passati non sono una promessa.</li>
</ul>

<h3>Cosa ti dà un bot</h3>
<ol>
<li><b>Disciplina</b>: niente paura, niente FOMO, niente operazioni di vendetta. Segue le regole.</li>
<li><b>Copertura</b>: lavora mentre dormi.</li>
<li><b>Velocità e coerenza</b>: esecuzione precisa e registrazione di ogni operazione.</li>
<li><b>Testabilità</b>: regole scritte in codice possono essere sottoposte a backtest sullo storico.</li>
</ol>

<h3>Cosa non può fare un bot</h3>
<ul>
<li><b>Non crea un vantaggio.</b> Una cattiva strategia gira alla perfezione... dritta verso le perdite.</li>
<li><b>Non elimina il rischio.</b> I mercati possono cambiare regime, gli exchange possono fallire, possono esserci bug.</li>
<li><b>Non può prevedere il futuro.</b> Le prestazioni passate in un backtest non sono una promessa.</li>
<li><b>Non sostituisce la tua responsabilità</b> di monitorare i limiti di rischio.</li>
</ul>

<h3>Come valutare un bot (o una strategia venduta con uno)</h3>
${B.tbl(['Domanda', 'Buon segno', 'Segnale d\'allarme'], [
        ['Le regole sono spiegate?', 'Logica chiara che capisci', 'Un «algoritmo segreto» senza spiegazioni'],
        ['Ci sono prove?', 'Backtest con costi + risultati forward/reali, drawdown mostrati', 'Screenshot, mesi scelti ad arte, «100% di successo»'],
        ['Quali sono le promesse?', 'Onesto su rischio e periodi di perdita', '«Profitti garantiti», «reddito passivo», pressione ad agire subito'],
        ['Gestione del denaro', 'I fondi restano sul tuo conto exchange; chiavi API solo di trading', 'Ti chiede di depositare nel loro wallet o piattaforma'],
        ['Controllo', 'Puoi mettere in pausa, impostare limiti e vedere ogni operazione', 'Nessun controllo di arresto né trasparenza']
      ])}

<h3>Trappole del backtesting (di nuovo, perché contano)</h3>
<ul>
<li><b>Overfitting</b>: regolare i parametri finché il passato sembra perfetto.</li>
<li><b>Ignorare i costi</b>: commissioni, funding e slippage possono trasformare un backtest apparentemente redditizio in un perdente.</li>
<li><b>Look-ahead bias</b>: usare per errore informazioni dal futuro nelle regole.</li>
<li><b>Survivorship bias</b>: testare solo monete che esistono ancora.</li>
<li><b>Cambio di regime</b>: una regola che funzionava nel 2021 può fallire in un mercato tranquillo.</li>
</ul>
<p>Usa il <b>walk-forward testing</b> (progettare su un periodo, testare sul successivo), poi il paper trading, poi passa al reale con dimensioni minuscole e un kill switch (un drawdown massimo che ferma automaticamente il bot).</p>

${B.ex('<p>Un grid bot è impostato tra 90 e 110 su una moneta a 100 e guadagna piccoli profitti in un mercato tranquillo per settimane. Poi arriva una cattiva notizia, il prezzo scivola a 70 e ci resta. Il bot ha continuato a comprare lungo tutta la discesa e ora ha una grossa perdita, senza stop. Un essere umano con un piano avrebbe definito una perdita massima e sarebbe uscito. Il bot ha fatto esattamente ciò che gli era stato detto. Per questo l\'automazione ha bisogno di limiti di rischio integrati.</p>')}

${B.warn('<p>Il mercato dei «bot di trading» è pieno di truffe: bot che promettono il 2% di rendimento giornaliero, richiedono depositi sulla piattaforma del venditore o ti pagano per reclutare altri. Se un rendimento è garantito, non è trading. È una trappola.</p>')}

<h3>Facoltativo: un programma strutturato con un bot</h3>
<p>Il creatore di questo corso offre anche <b>Trading Lab</b>, un programma a pagamento facoltativo che include un bot di trading pensato per aiutare i trader ad applicare le regole con più coerenza. È solo uno strumento possibile, non un requisito né una garanzia di risultati. I dettagli sono nella <a href="#lab">pagina di Trading Lab</a>. Qualunque cosa usi, applica la checklist di questa lezione: capisci le regole, testa con dimensioni piccole, mantieni permessi API di solo trading e imposta una perdita massima.</p>

${B.take(['I bot eseguono regole; non creano un vantaggio né eliminano il rischio.', 'Diffida di promesse di profitti garantiti, algoritmi segreti e richieste di deposito sulla piattaforma di qualcun altro.', 'Fai backtest con i costi, evita l\'overfitting, testa in forward, poi parti minuscolo con un kill switch.', 'Usa chiavi API di solo trading e limitate per IP, e mantieni il controllo dei tuoi fondi.'])}`,
      q: [
        ['Cosa può fornire in modo affidabile un bot di trading?', ['Profitti garantiti', 'Disciplina ed esecuzione coerente delle tue regole', 'Informazioni privilegiate', 'Rischio zero'], 1, 'I bot eliminano l\'emozione e lavorano continuamente, ma valgono quanto valgono le regole.'],
        ['Un venditore promette il 2% di rendimento giornaliero dal suo bot e ti chiede di depositare sulla sua piattaforma. Questo è…', ['Un\'ottima opportunità', 'Uno schema classico di truffa', 'Prassi standard del settore', 'Un prodotto esentasse'], 1, 'Rendimenti alti garantiti e depositi sulla piattaforma del venditore sono grandi segnali d\'allarme.'],
        ['Quale passo viene subito dopo il backtest responsabile di una strategia?', ['Passare al reale con leva massima', 'Test forward o paper trading, poi dimensioni reali molto piccole', 'Venderla', 'Ignorare i costi'], 1, 'I test fuori campione e dal vivo con dimensioni minuscole rivelano problemi che i backtest nascondono.']
      ]
    },
    {
      id: 'd7', m: 11, t: 'Psicologia per i mercati 24/7',
      hook: 'Quando il mercato non dorme mai, nemmeno FOMO e ansia lo fanno. Costruisci regole per non bruciarti né far saltare il conto.',
      body: `
<p>Le cripto hanno tutte le solite emozioni del trading, più alcune speciali create dalla disponibilità costante, dai movimenti estremi e dall'entusiasmo dei social.</p>

<h3>Trappole psicologiche specifiche delle cripto</h3>
<ul>
<li><b>FOMO sui pump</b>: una moneta sale del 40% in un giorno e ne parlano tutti. Entrare tardi di solito significa comprare il massimo.</li>
<li><b>Euforia del «number go up»</b>: dopo un rialzo, sentirsi invincibili porta a dimensioni maggiori e regole più lasche.</li>
<li><b>Capitolazione</b>: vendere tutto sul fondo dopo settimane di sofferenza.</li>
<li><b>Vendetta e leva eccessiva</b>: cercare di recuperare una perdita con una scommessa più grande e a leva.</li>
<li><b>Dipendenza dallo schermo e burnout</b>: controllare i grafici alle 3 di notte, avvisi costanti, sonno scarso.</li>
<li><b>Gregge dei social</b>: gruppi e chat amplificano le emozioni e diffondono cattiva informazione.</li>
<li><b>Mentalità da giocatore</b>: trattare le operazioni come giri di casinò. L'emozione delle vincite può diventare lo scopo, al posto del processo.</li>
</ul>

<h3>Regole per una routine sostenibile</h3>
<ol>
<li><b>Definisci orari di trading.</b> Scegli finestre in cui analizzi e fai trading, e stacca fuori da esse.</li>
<li><b>Usa gli avvisi invece di fissare lo schermo.</b> Imposta avvisi di prezzo sui tuoi livelli e lascia che sia il telefono a sorvegliare.</li>
<li><b>Limita le operazioni al giorno</b> e fermati quando raggiungi il limite di perdita giornaliero.</li>
<li><b>Niente posizioni a leva durante la notte</b> a meno che abbiano stop e dimensioni piccole.</li>
<li><b>Regola dei tre errori</b>: tre perdite di fila significano una pausa di almeno un'ora (o il resto della giornata).</li>
<li><b>Regola del weekend</b>: riduci la dimensione o resta flat se la poca liquidità ti rende nervoso.</li>
<li><b>Silenzia il rumore.</b> Smetti di seguire account di hype. La dieta informativa conta.</li>
<li><b>Proteggi sonno, esercizio, vita sociale.</b> Un trader stanco opera come un impulsivo.</li>
<li><b>Separa il denaro del trading dal denaro della vita.</b> Meno hai bisogno del risultato, meglio decidi.</li>
</ol>

<h3>Il diario come specchio</h3>
<p>Registra ogni operazione con il tuo stato emotivo. Dopo 30-50 operazioni, guarda quali sensazioni sono correlate alle perdite (FOMO? noia? operazioni a notte fonda?). Molti trader scoprono che pochi comportamenti specifici causano la maggior parte delle perdite, e correggerli è il miglioramento più rapido disponibile.</p>
${B.w('journal')}

${B.ex('<p>Noah ha notato dal suo diario che le operazioni dopo mezzanotte avevano una media di −0,8R, mentre quelle nella sua finestra mattutina pianificata avevano una media di +0,3R. Ha smesso di operare dopo le 22 e i suoi risultati sono passati da negativi a positivi senza cambiare strategia.</p>')}

${B.tip('<p>Quando senti una forte voglia di entrare in un\'operazione, aspetta 10 minuti e scrivi il motivo. Se è «ho paura che parta senza di me», lasciala stare. Ci sarà sempre un altro setup domani.</p>')}

<h3>Quando fare una pausa</h3>
<p>Se il trading sta influenzando il tuo sonno, le relazioni o il lavoro, se stai scommettendo i soldi dell'affitto o senti di non riuscire a fermarti, fai una pausa e parla con qualcuno di cui ti fidi. In quasi tutti i paesi esistono servizi di supporto per il gioco problematico, e il trading con la mentalità sbagliata può comportarsi come gioco d'azzardo.</p>

${B.take(['Le cripto aggiungono FOMO sui pump, dipendenza dallo schermo e tentazione 24/7.', 'Definisci orari di trading, usa avvisi, limita le operazioni e rispetta i limiti di perdita.', 'Il tuo diario rivela quali emozioni e abitudini ti costano denaro.', 'Se il trading danneggia la tua salute o le tue finanze, fai un passo indietro e chiedi aiuto.'])}`,
      q: [
        ['Qual è una buona risposta a un pump improvviso del 40% su una moneta che non possiedi?', ['Comprare subito con leva', 'Non inseguire; aspettare un setup che rispetti le tue regole', 'Prendere denaro in prestito per comprare', 'Chiedere a uno sconosciuto'], 1, 'Inseguire in ritardo è un modo comune di comprare i massimi.'],
        ['Perché usare gli avvisi di prezzo?', ['Per guardare lo schermo tutta la notte', 'Per lasciare che il telefono sorvegli i tuoi livelli senza dover fissare i grafici', 'Per aumentare la leva', 'Per seguire gli influencer'], 1, 'Gli avvisi riducono il tempo davanti allo schermo e il trading emotivo.'],
        ['Cosa significa la regola dei tre errori?', ['Solo tre operazioni al giorno', 'Dopo tre perdite consecutive, fare una pausa', 'Tre volte la leva', 'Smettere di fare trading dopo tre giorni'], 1, 'Una pausa interrompe una serie di decisioni emotive.']
      ]
    },
    {
      id: 'd8', m: 12, t: 'Il tuo piano di trading di cripto e la checklist di diploma',
      hook: 'Metti tutto insieme: un piano, una scala di traguardi e la regola che ti tiene in vita. Poi sblocca il tuo certificato.',
      body: `
<p>Hai coperto mercati, leva, segnali, strategie, rischio, bot e psicologia. L'ultimo passo è un piano scritto e un percorso dalla pratica al (forse) trading reale, con traguardi che devi guadagnarti, non dare per scontati.</p>

<h3>Il tuo modello di piano di trading di cripto</h3>
${B.tbl(['Sezione', 'Cosa scrivere'], [
        ['Scopo e capitale', 'Perché faccio trading; l\'importo del capitale di rischio (denaro che posso perdere). Percentuale massima del mio patrimonio.'],
        ['Mercati e prodotti', 'Quali monete e coppie; solo spot o anche futures; leva massima (per esempio 3x)'],
        ['Timeframe e orari', 'Grafici che uso; finestre di trading; orari in cui non opero'],
        ['Setup', 'Due o tre setup con regole esatte di ingresso, stop e uscita'],
        ['Regole di rischio', 'Rischio per operazione (0,5-1%), rischio aperto massimo, limiti di perdita giornalieri e settimanali, solo margine isolato'],
        ['Sicurezza delle piattaforme', 'Fondi divisi tra piattaforme; 2FA; chiavi API di solo trading; calendario di prelievo dei profitti'],
        ['Routine', 'Checklist pre-operazione, diario dopo ogni operazione, revisione settimanale'],
        ['Regole di psicologia', 'Tre errori, niente operazioni di vendetta, regole su sonno e pause'],
        ['Regola di pausa', 'A un drawdown di, per esempio, 10-15%, smettere di operare e rivedere per almeno una settimana'],
        ['Tasse e registri', 'Esportare tutte le operazioni, conservare le prove dei costi, capire le regole locali']
      ])}

<h3>La scala dei traguardi</h3>
<ol>
<li><b>Livello 1: Studio</b>. Completa questo percorso, comprendi rischio e psicologia.</li>
<li><b>Livello 2: Carta</b>. Almeno 100 operazioni simulate con regole fisse e un diario. Aspettativa positiva e 90% di rispetto del piano.</li>
<li><b>Livello 3: Micro reale</b>. Opera a circa il 10% della dimensione prevista per altre 100 operazioni. Prima lo spot.</li>
<li><b>Livello 4: Costante</b>. Oltre 200 operazioni reali, risultati positivi dopo le commissioni, drawdown sotto controllo, regole rispettate.</li>
<li><b>Livello 5: Scalare con cautela</b>. Aumenta la dimensione a piccoli passi, riduci dopo i drawdown, preleva i profitti regolarmente.</li>
</ol>
${B.ex('<p>Kai completa il Livello 2 e scopre che i suoi risultati su carta erano positivi, ma ha violato la regola dello stop nel 25% delle operazioni. Invece di passare al reale, ripete il paper trading finché il rispetto del piano supera il 90%. Tre settimane dopo inizia il Livello 3 con 500 € e una regola ferrea: pausa di una settimana a −50 €. Lento è fluido, fluido è veloce.</p>')}

<h3>Quando fermarsi</h3>
<p>Il trading non è per tutti, e smettere dopo un tentativo onesto è una vittoria di disciplina, non un fallimento. Valuta di fermarti o di passare all'investimento a lungo termine se hai raggiunto più volte la tua regola di pausa, non riesci a seguire le regole dopo mesi di impegno, o il trading sta danneggiando la tua vita. Molte persone scoprono che un piano di investimento noioso e diversificato fa molto meglio per loro.</p>

${B.w('checklist', { key: 'd8', title: 'Checklist di diploma', accent: 'ct', items: 'Ho scritto il mio piano di trading completo, comprese le regole di rischio e una regola di pausa|Ho completato almeno 100 operazioni su carta con un diario|I miei risultati su carta mostrano aspettativa positiva e 90% di rispetto del piano|Uso il margine isolato e tengo la leva bassa|I miei conti exchange hanno 2FA, whitelist e chiavi API di solo trading|So come esportare lo storico delle operazioni per le tasse|Faccio trading solo con denaro che posso permettermi di perdere' })}

<h3>Vai più a fondo (facoltativo)</h3>
<p>Se vuoi un programma strutturato con un bot di trading creato per aiutare ad applicare le regole in modo coerente, il creatore di questo corso offre <b>Trading Lab</b> su Gumroad (un prodotto a pagamento facoltativo). Questo corso gratuito insegna già i fondamenti, quindi usa Trading Lab solo se vuoi una struttura extra, e mantieni sempre le regole di rischio di questo percorso. Nessun programma o bot garantisce profitti. Vedi la <a href="#lab">pagina di Trading Lab</a>.</p>

${B.key('<p><b>Hai completato il percorso Trader di cripto.</b> L\'obiettivo non è mai stato farti diventare un giocatore con grafici migliori. Era farti diventare un professionista in formazione, prudente, che rispetta prima di tutto il rischio. Ora controlla i tuoi progressi e ottieni il tuo certificato.</p><p><a class="btn sm" href="#cert">Vedi il mio certificato</a></p>')}

${B.take(['Scrivi un piano completo: capitale, prodotti, setup, regole di rischio, sicurezza delle piattaforme, routine e regola di pausa.', 'Sali la scala: studio, carta, micro reale, costante, poi scala con cautela.', 'Smettere dopo un tentativo onesto è una decisione legittima e disciplinata.', 'Nessun programma o bot garantisce profitto; le tue regole di rischio ti proteggono.'])}`,
      q: [
        ['Cosa dovrebbe attivare una regola di pausa?', ['Più leva', 'Uno stop al trading e una revisione dopo un drawdown stabilito', 'Cancellare il diario', 'Più rischio per operazione'], 1, 'Ti protegge dal tilt e ti costringe a imparare.'],
        ['Cosa viene per primo sulla scala dei traguardi?', ['Aumentare la dimensione della posizione', 'Studiare e fare paper trading', 'Usare leva 50x', 'Fare copy trading di sconosciuti'], 1, 'Ogni passo si conquista con le prove.'],
        ['Quale affermazione su programmi a pagamento e bot è la più accurata?', ['Possono garantire profitti', 'Possono dare struttura ma non eliminano il rischio né garantiscono risultati', 'Sostituiscono la gestione del rischio', 'Sono richiesti dalla legge'], 1, 'Qualsiasi strumento vale quanto le regole, i test e la disciplina che applichi.']
      ]
    }
  ]);
})();
