/* Glossario, pagina del Percorso Pro e pagine di Trading Lab */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;
  const LAB = 'https://fofinho8.gumroad.com/l/trading-lab';
  MQ.misc = {};

  MQ.misc.glossary = [
    ['Altcoin', 'Qualsiasi criptoattività diversa da Bitcoin.'],
    ['Ask (prezzo di vendita)', 'Il prezzo più basso a cui i venditori sono disposti a vendere. Paghi l\'ask quando compri.'],
    ['Asset allocation', 'Come il tuo denaro è suddiviso tra tipi di attività come azioni, obbligazioni, liquidità e cripto.'],
    ['ATR (average true range)', 'Un indicatore di quanto un\'attività si muove tipicamente in un periodo. Usato per impostare stop e dimensione della posizione.'],
    ['Mercato ribassista (bear market)', 'Un lungo periodo di prezzi in calo, spesso definito come un calo del 20% o più da un massimo.'],
    ['Bid (prezzo di acquisto)', 'Il prezzo più alto che i compratori sono disposti a pagare. Ricevi il bid quando vendi.'],
    ['Blockchain', 'Un registro digitale condiviso, tenuto da molti computer, in cui blocchi di dati sono concatenati e difficili da modificare.'],
    ['Obbligazione', 'Un prestito a un governo o a un\'azienda che paga interessi e restituisce il capitale alla scadenza.'],
    ['Broker', 'Un\'azienda che esegue i tuoi ordini di acquisto e vendita sui mercati finanziari.'],
    ['Mercato rialzista (bull market)', 'Un lungo periodo di prezzi in aumento.'],
    ['Candela giapponese', 'Un simbolo grafico che mostra apertura, massimo, minimo e chiusura di un periodo.'],
    ['Imposta sulle plusvalenze', 'Imposta sul profitto realizzato quando vendi un\'attività a un prezzo superiore a quello pagato.'],
    ['CFD (contratto per differenza)', 'Un contratto a leva con un broker che segue il prezzo di un\'attività senza che tu la possieda. Rischio elevato per i trader retail.'],
    ['Cold wallet (portafoglio freddo)', 'Un portafoglio cripto tenuto offline (spesso un dispositivo fisico) per una forte sicurezza.'],
    ['Interesse composto', 'Guadagnare rendimenti sui tuoi rendimenti precedenti, così la crescita accelera nel tempo.'],
    ['Correlazione', 'Quanto due attività si muovono insieme. Una bassa correlazione aiuta la diversificazione.'],
    ['Costo di acquisto (cost basis)', 'Quanto hai pagato originariamente un\'attività, commissioni incluse. Usato per calcolare i guadagni ai fini fiscali.'],
    ['Wallet custodial', 'Un portafoglio in cui un\'azienda (come un exchange) detiene le chiavi private per te.'],
    ['DCA (dollar-cost averaging)', 'Investire un importo fisso a intervalli regolari indipendentemente dal prezzo.'],
    ['DeFi (finanza decentralizzata)', 'Servizi finanziari come prestiti e trading gestiti da smart contract invece che da istituzioni tradizionali.'],
    ['Derivato', 'Un contratto il cui valore dipende da un\'altra attività: futures, opzioni, CFD.'],
    ['Diversificazione', 'Distribuire il denaro su molte attività in modo che un solo fallimento non ti rovini.'],
    ['Dividendo', 'Una quota degli utili aziendali pagata agli azionisti.'],
    ['Doji', 'Una candela in cui apertura e chiusura sono quasi uguali, segnale di indecisione.'],
    ['Drawdown', 'Il calo da un massimo a un minimo nel valore del tuo conto o portafoglio.'],
    ['EMA (media mobile esponenziale)', 'Una media mobile che dà più peso ai prezzi recenti.'],
    ['Fondo di emergenza', 'Risparmi tenuti per spese impreviste, di solito 3-6 mesi di spese essenziali.'],
    ['EPS (utile per azione)', 'L\'utile netto di un\'azienda diviso per il numero delle sue azioni.'],
    ['ETF (fondo negoziato in borsa)', 'Un paniere di attività che si scambia in borsa come un\'azione.'],
    ['Exchange', 'Un mercato in cui le attività vengono comprate e vendute. Nelle cripto, una piattaforma per scambiare monete.'],
    ['Aspettativa (expectancy)', 'L\'importo medio che ti aspetti di vincere o perdere per operazione su molte operazioni.'],
    ['FDV (valutazione completamente diluita)', 'Prezzo del token per l\'offerta totale, mostra il valore se tutti i token fossero in circolazione.'],
    ['Indice Fear & Greed', 'Un punteggio di sentiment da 0 a 100 per il mercato cripto (o azionario). Letture estreme possono segnalare surriscaldamento o panico.'],
    ['Fiat', 'Denaro emesso dai governi, come euro o dollari statunitensi.'],
    ['FOMO', 'Paura di perdersi qualcosa (fear of missing out). L\'impulso a comprare perché altri guadagnano.'],
    ['Tasso di funding', 'Un pagamento periodico tra long e short nei futures perpetui che mantiene il prezzo del contratto vicino allo spot.'],
    ['Futures', 'Contratti per comprare o vendere un\'attività a un prezzo stabilito a una data futura.'],
    ['Commissione gas', 'La commissione pagata a una rete blockchain per elaborare una transazione.'],
    ['Halving', 'Un evento programmato che dimezza l\'emissione di nuovi bitcoin, all\'incirca ogni quattro anni.'],
    ['Hardware wallet', 'Un dispositivo fisico dedicato che conserva offline le chiavi private cripto.'],
    ['Hash', 'Una breve impronta digitale dei dati. Cambiare i dati cambia l\'hash.'],
    ['Fondo indicizzato', 'Un fondo che replica un indice di mercato a basso costo.'],
    ['Inflazione', 'Un aumento generale dei prezzi nel tempo che riduce ciò che il denaro può comprare.'],
    ['Margine isolato', 'Una modalità di margine in cui solo la garanzia assegnata a una posizione è a rischio.'],
    ['KYC (know your customer)', 'Verifiche d\'identità richieste dalle piattaforme finanziarie regolamentate.'],
    ['Leva', 'Usare denaro preso in prestito o contratti per controllare una posizione più grande del tuo capitale. Amplifica guadagni e perdite.'],
    ['Ordine limite', 'Un ordine di acquisto o vendita solo a un prezzo specificato o migliore.'],
    ['Liquidazione', 'La chiusura forzata di una posizione a leva quando le perdite esauriscono il tuo margine.'],
    ['Liquidità', 'Quanto facilmente un\'attività può essere comprata o venduta senza muovere il prezzo.'],
    ['Long', 'Comprare un\'attività sperando che il prezzo salga.'],
    ['Maker / taker', 'I maker aggiungono ordini al book (commissione minore); i taker li rimuovono scambiando subito (commissione maggiore).'],
    ['Margine', 'La garanzia che depositi per aprire una posizione a leva.'],
    ['Capitalizzazione di mercato', 'Prezzo moltiplicato per il numero di unità in circolazione.'],
    ['Ordine a mercato', 'Un ordine di acquisto o vendita immediato al miglior prezzo disponibile.'],
    ['Media mobile', 'Il prezzo medio su un numero stabilito di periodi, che attenua il rumore per mostrare il trend.'],
    ['Open interest', 'Il valore totale dei contratti derivati in essere non ancora chiusi.'],
    ['Rapporto P/E (P/U)', 'Prezzo dell\'azione diviso per l\'utile per azione. Quanto paghi per ogni unità di profitto.'],
    ['Paper trading', 'Fare pratica di trading con denaro simulato.'],
    ['Futures perpetui', 'Contratti futures senza scadenza, tenuti vicino al prezzo spot da pagamenti di funding.'],
    ['Chiave privata', 'Il codice segreto che prova la proprietà e ti permette di muovere le cripto. Non condividerlo mai.'],
    ['Proof of stake / proof of work', 'Due modi in cui le blockchain raggiungono un accordo: bloccando monete (stake) o spendendo potenza di calcolo (work).'],
    ['Pump and dump', 'Uno schema che pubblicizza un\'attività per farne salire il prezzo, poi vende a chi arriva in ritardo.'],
    ['Multiplo R', 'Il risultato di un\'operazione misurato in unità di rischio iniziale. Rischiare 50 € e guadagnarne 100 è +2R.'],
    ['Ribilanciamento', 'Riportare il tuo portafoglio alla composizione obiettivo.'],
    ['Resistenza', 'Un\'area di prezzo in cui la pressione di vendita ha fermato più volte i rialzi.'],
    ['RSI (indice di forza relativa)', 'Un indicatore di momentum che va da 0 a 100.'],
    ['Rug pull', 'Una truffa in cui gli sviluppatori svuotano la liquidità o abbandonano un progetto dopo aver raccolto denaro.'],
    ['Scalping', 'Fare trading a brevissimo termine per piccoli guadagni, molte volte al giorno.'],
    ['Seed phrase (frase di recupero)', 'Un elenco di 12 o 24 parole che può ricreare il tuo wallet. Chi la possiede controlla i fondi.'],
    ['Short', 'Vendere un\'attività presa in prestito sperando di riacquistarla a meno.'],
    ['Slippage', 'La differenza tra il prezzo di esecuzione atteso e quello effettivo di un ordine.'],
    ['Smart contract', 'Un programma su una blockchain che gira automaticamente quando le condizioni sono soddisfatte.'],
    ['Spot', 'Comprare o vendere l\'attività reale al prezzo corrente, senza leva.'],
    ['Spread', 'La differenza tra il prezzo bid e il prezzo ask.'],
    ['Stablecoin', 'Un token cripto progettato per mantenere un valore stabile, spesso ancorato a una valuta.'],
    ['Staking', 'Bloccare monete proof-of-stake per contribuire a proteggere una rete in cambio di ricompense.'],
    ['Stop-loss', 'Un ordine che chiude una posizione se il prezzo raggiunge un livello di perdita prestabilito.'],
    ['Supporto', 'Un\'area di prezzo in cui i compratori sono intervenuti più volte.'],
    ['Swing trading', 'Mantenere posizioni da diversi giorni a diverse settimane.'],
    ['TER (total expense ratio)', 'La commissione annuale addebitata da un fondo, in percentuale del tuo investimento.'],
    ['Tokenomics', 'L\'economia di un token: offerta, distribuzione, emissione e utilità.'],
    ['UCITS (OICVM)', 'Un quadro normativo europeo per i fondi di investimento destinati agli investitori retail.'],
    ['Volatilità', 'Quanto e quanto velocemente i prezzi salgono e scendono.'],
    ['Volume', 'La quantità di un\'attività scambiata durante un periodo.'],
    ['VWAP', 'Prezzo medio ponderato per i volumi, un comune riferimento intraday del valore equo.'],
    ['Wallet (portafoglio)', 'Software o hardware che conserva le tue chiavi cripto e ti permette di inviare e ricevere monete.'],
    ['Balena (whale)', 'Un detentore con una quantità molto grande di un\'attività, in grado di muovere il mercato.'],
    ['Rendimento (yield)', 'Il reddito che un investimento paga, espresso in percentuale del suo prezzo.']
  ];

  /* ---------- Trading Lab: scheda compatta nella home ---------- */
  MQ.misc.labCard = `<div class="lab">
    <div>
      <p class="eyebrow" style="color:#17143A;opacity:.75">Facoltativo · dal creatore di questo corso</p>
      <h2>Vuoi andare più a fondo? Scopri Trading Lab.</h2>
      <p>Questo corso è gratuito e completo da solo. Se vuoi più struttura per il trading, <b>Trading Lab</b> è il programma a pagamento dell'autore su Gumroad: un corso di trading completo più un <b>bot di trading</b> pensato per aiutare i trader ad applicare le proprie regole con coerenza.</p>
      <ul><li>Programma di trading completo per imparare e fare pratica</li><li>Include un bot di trading usato da molti membri</li><li>Abbonamento mensile, nient'altro da comprare</li></ul>
      <div class="btnrow"><a class="btn" href="#lab">Scopri cosa include</a><a class="btn alt" href="${LAB}" target="_blank" rel="noopener noreferrer">Apri su Gumroad ↗</a></div>
      <p class="fine">Il trading comporta un alto rischio di perdita. Nessun corso o bot può garantire risultati. Trasparenza: Trading Lab è venduto dall'autore di Money Quest Academy.</p>
    </div>
    <div class="price"><small>Trading Lab</small><b>39 €</b><small>al mese + IVA</small></div>
  </div>`;

  /* ---------- Trading Lab: pagina completa ---------- */
  MQ.misc.labPage = `<section class="thead" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.ct}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Programma a pagamento facoltativo · dal creatore di Money Quest</p><h1>Trading Lab</h1><p>Un programma di trading completo con un bot di trading, per chi vuole struttura dopo aver finito i percorsi Trader gratuiti.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)">
    ${B.box('warn', 'Trasparenza', '<p>Money Quest Academy è gratuita. Trading Lab è un prodotto a pagamento separato, venduto dallo stesso autore. Non ti serve per completare nessun percorso di questo corso.</p>')}
    <h3>Cos'è</h3>
    <p>Trading Lab è un programma in abbonamento disponibile su Gumroad. Riunisce in un unico posto le conoscenze necessarie per fare trading, insieme a un <b>bot di trading</b> che aiuta i trader a seguire le regole con coerenza invece di prendere decisioni emotive. Molti membri lo usano per dare struttura al proprio trading.</p>
    <div class="lab" style="margin:1.4rem 0;box-shadow:var(--shadow)"><div><h2 style="font-size:1.8rem">39 € al mese + IVA</h2><p style="margin:0">Tutto in un unico abbonamento: il programma di trading e il bot. Controlla la pagina di Gumroad per il prezzo attuale, l'elenco completo di cosa è incluso e i termini.</p>
      <div class="btnrow" style="margin-top:1rem"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Apri Trading Lab su Gumroad ↗</a></div></div><div class="price"><small>Trading Lab</small><b>39 €</b><small>al mese + IVA</small></div></div>
    <h3>A chi può servire</h3>
    <ul><li>Persone che hanno finito il percorso Day Trader o Trader di cripto e vogliono un programma guidato.</li><li>Trader che faticano con la disciplina e vogliono regole eseguite con coerenza.</li><li>Chiunque preferisca un sistema strutturato a mettere insieme strumenti uno alla volta.</li></ul>
    <h3>Chi dovrebbe lasciar perdere</h3>
    <ul><li>Chi non ha ancora costruito un fondo di emergenza o ha debiti ad alto interesse.</li><li>Chi si aspetta profitti garantiti. Nessun prodotto onesto li offre.</li><li>I principianti che non si sono ancora esercitati su un simulatore. Fai prima il laboratorio di paper trading.</li></ul>
    <h3>Come si inserisce con questo corso gratuito</h3>
    ${B.tbl(['', 'Money Quest (gratuito)', 'Trading Lab (a pagamento)'], [
        ['Scopo', 'Insegna le basi dell\'investire e del fare trading', 'Programma e bot di trading per trader attivi'],
        ['Costo', 'Gratuito', '39 € al mese + IVA'],
        ['Ideale per', 'Tutti quelli che partono da zero', 'Trader che vogliono più struttura e automazione'],
        ['Rischio', 'Educativo, nessun trading coinvolto', 'Il trading comporta un rischio reale di perdita']
      ])}
    <h3>Aspettative oneste</h3>
    <p>Un bot è un software che segue regole. Può aiutarti a restare disciplinato e non si stanca mai, ma non crea un vantaggio da solo e non elimina il rischio di mercato. I risultati dipendono dalle condizioni di mercato, dalle tue impostazioni, dalla tua gestione del rischio e dal tuo comportamento. Usa la checklist della lezione sui bot: capisci le regole, testa con dimensioni piccole, usa permessi di solo trading e imposta una perdita massima.</p>
    ${B.warn('<p>Non investire mai denaro che non puoi permetterti di perdere. Il trading, e soprattutto il trading a leva, può far perdere denaro rapidamente.</p>')}
    <div class="btnrow"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Apri Trading Lab su Gumroad ↗</a><a class="btn alt" href="#track-ct">Torna al percorso Trader di cripto</a></div>
  </div></div></section>`;

  /* ---------- Percorso Pro ---------- */
  MQ.misc.proPage = `<section class="thead" style="${MQ.trackStyle('found')}"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.found}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Dopo i percorsi</p><h1>Il Percorso Pro</h1><p>Ciò che separa gli hobbisti dai professionisti, e la scala dal principiante a qualcuno a cui gli altri affidano denaro.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="${MQ.trackStyle('found')}">
    <p>«Professionista» non è un titolo che ci si dà da soli. È un modo di lavorare. I professionisti hanno <b>processo</b>, <b>controllo del rischio</b>, <b>registri</b> e <b>umiltà</b>. Sopravvivono agli anni brutti e fanno fruttare quelli buoni. La scala qui sotto vale per investitori, trader e cripto allo stesso modo.</p>
    <h3>I quattro livelli</h3>
    ${B.tbl(['Livello', 'Cosa fai', 'Prova che sei pronto per il livello successivo'], [
      ['1. Studente', 'Finisci le Basi e il percorso scelto. Fai pratica con i simulatori. Costruisci il tuo fondo di emergenza.', 'Sai spiegare a un amico rischio, diversificazione, costi e il tuo piano. La tua base finanziaria è a posto.'],
      ['2. Apprendista', 'Investi con regolarità piccole somme reali. Tieni un diario delle decisioni. Se fai trading, usa il 10% della dimensione prevista.', '12 mesi di abitudini costanti; 100 decisioni annotate; hai seguito il tuo piano per almeno un periodo spaventoso.'],
      ['3. Praticante', 'Un processo testato con risultati misurati: allocazione e ribilanciamento per gli investitori; aspettativa positiva e controllo del drawdown per i trader.', 'Due o più anni di registri; costi e tasse compresi; perdite gestite senza violare le regole.'],
      ['4. Professionista', 'Altri si affidano al tuo lavoro: gestire denaro per te su larga scala, lavorare in finanza o dirigere un\'attività di trading strutturata.', 'Storico verificato, quadro di rischio, formazione continua e capacità di spiegare ogni decisione.']
    ])}
    <h3>Cosa fanno di diverso i professionisti</h3>
    <ol>
      <li><b>Pensano in probabilità, non in previsioni.</b> «Se questo setup si presenta 100 volte, cosa succede in media?»</li>
      <li><b>Definiscono la perdita prima del guadagno.</b> Ogni posizione ha una perdita massima accettabile.</li>
      <li><b>Sono ossessionati da costi, tasse e processo</b>, ciò che possono controllare.</li>
      <li><b>Tengono registri.</b> Diari, report di performance, cambi di regole con le motivazioni.</li>
      <li><b>Separano le lezioni dai risultati.</b> Una buona decisione può perdere; una cattiva decisione può vincere.</li>
      <li><b>Proteggono la loro psicologia.</b> Sonno, routine e limiti fanno parte del lavoro.</li>
      <li><b>Continuano a imparare.</b> I mercati cambiano; cambiano anche le regole che funzionano.</li>
    </ol>
    <h3>Percorsi di carriera nella finanza</h3>
    ${B.tbl(['Percorso', 'Cosa comporta', 'Titoli utili'], [
      ['Analista finanziario / ricercatore', 'Studiare aziende e mercati; scrivere raccomandazioni.', 'Laurea in finanza o economia; programma CFA'],
      ['Gestore di portafoglio / fondi', 'Decidere le allocazioni per fondi o clienti.', 'CFA, solido storico, licenze'],
      ['Risk manager', 'Misurare e limitare i rischi che un\'azienda assume.', 'Certificazione FRM, matematica e statistica'],
      ['Analista o sviluppatore quantitativo', 'Costruire modelli, pipeline di dati e strategie automatizzate.', 'Matematica, statistica, programmazione'],
      ['Analista tecnico / stratega di mercato', 'Ricerca basata sui grafici e sulla struttura di mercato.', 'Programma CMT'],
      ['Consulente / pianificatore finanziario', 'Aiutare i privati a pianificare il patrimonio.', 'Abilitazione locale e certificazioni di pianificatore'],
      ['Trader o investitore indipendente', 'Fare trading o investire il proprio capitale come attività.', 'Capitale, disciplina, registri, tasse in ordine'],
      ['Ruoli nelle cripto', 'Ricerca, sicurezza, compliance, trading e sviluppo presso aziende cripto.', 'Conoscenza della blockchain, competenze di sicurezza, consapevolezza normativa']
    ])}
    <h3>Una nota sulle società di prop trading</h3>
    <p>Alcune società offrono di «finanziare» i trader dopo il superamento di una valutazione. Alcune sono legittime, ma molte guadagnano la maggior parte del denaro dalle quote di valutazione pagate da chi fallisce. Leggi attentamente le regole, controlla recensioni indipendenti, capisci la ripartizione dei profitti e i limiti di drawdown, e non pagare mai denaro che non puoi permetterti di perdere.</p>
    <h3>Abitudini per i prossimi 12 mesi</h3>
    <ul>
      <li>Leggi un buon libro sull'investimento o sul rischio ogni trimestre.</li>
      <li>Rivedi piano e risultati ogni mese; riscrivi il piano una volta all'anno.</li>
      <li>Impara dai mercati senza dover fare trading: studia la storia (1929, 1973, 1987, 2000, 2008, 2020, 2022).</li>
      <li>Condividi ciò che impari. Insegnare a qualcun altro è il modo più rapido per trovare le lacune.</li>
      <li>Resta umile. I mercati puniscono la certezza.</li>
    </ul>
    ${B.key('<p><b>La migliore competenza professionale è restare in gioco.</b> Se proteggi il tuo capitale e la tua mente, il tempo e l\'interesse composto fanno la maggior parte del resto.</p>')}
    <div class="btnrow"><a class="btn" href="#cert">Vedi i miei progressi e il certificato</a><a class="btn alt" href="#home">Torna ai percorsi</a></div>
  </div></div></section>`;
})();
