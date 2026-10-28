/* Percorso Investitore di Ogni Giorno: 8 lezioni */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('inv', [
    {
      id: 'a1', m: 10, t: 'Fissa i tuoi obiettivi e scegli i conti',
      hook: 'Prima di scegliere cosa comprare, decidi a cosa servono i soldi e dove vivranno.',
      body: `
<p>I grandi investitori non iniziano con “cosa devo comprare?”. Iniziano con “a cosa servono questi soldi e quando mi servono?”. La risposta decide quasi tutto il resto.</p>

<h3>Usa tre secchi</h3>
<ul>
<li><b>Secchio sicurezza (0-2 anni)</b>: fondo di emergenza e soldi per le spese imminenti. Conto di risparmio. Zero rischio di mercato.</li>
<li><b>Secchio obiettivi (2-10 anni)</b>: un’auto, l’anticipo per una casa, un master. Soprattutto asset tranquilli con una quota minore di azioni.</li>
<li><b>Secchio crescita (10+ anni)</b>: pensione e patrimonio a lungo termine. Qui ha senso un’alta quota di azioni globali, perché il tempo smussa gli scossoni.</li>
</ul>

<h3>Rendi gli obiettivi specifici</h3>
<p>“Voglio essere ricco” non è un obiettivo. “Voglio 30.000 € per l’anticipo di una casa tra 6 anni” lo è. Gli obiettivi specifici ti dicono quanto risparmiare e quanto rischio è appropriato. Se il traguardo è 30.000 € in 6 anni e puoi investire 350 € al mese, puoi verificare se il piano funziona prima di iniziare.</p>

<h3>Tipi di conti</h3>
<p>La maggior parte dei paesi offre <b>conti con vantaggi fiscali</b> per investire o per la pensione. Esempi: 401(k) e Roth IRA negli USA, Stocks and Shares ISA e SIPP nel Regno Unito, TFSA e RRSP in Canada, piani individuali pensionistici (PIP) e fondi pensione in Italia, e vari prodotti previdenziali altrove. Possono ridurre legalmente le tasse che paghi, a volte parecchio. Controlla cosa esiste nel <b>tuo</b> paese, comprese le regole su quando puoi prelevare.</p>
<p>Un normale <b>conto titoli</b> è l’opzione flessibile: puoi investire e prelevare in qualsiasi momento, ma paghi le tasse secondo le regole locali.</p>

<h3>Come scegliere un broker</h3>
${B.tbl(['Controlla', 'Perché conta'], [
        ['Regolamentato nella tua regione', 'Ti dà tutele legali e regole che il broker deve rispettare'],
        ['Costi bassi', 'Commissioni, conversione valutaria, custodia e inattività erodono i rendimenti in silenzio'],
        ['Accesso a ETF ampi', 'Vuoi prodotti semplici e diversificati a basso costo'],
        ['Protezione degli asset', 'I tuoi titoli devono essere tenuti separati dal denaro del broker; controlla il sistema di indennizzo'],
        ['App semplice e affidabile', 'La userai per decenni; un’interfaccia chiara previene errori'],
        ['Non spinge prodotti rischiosi', 'Diffida delle piattaforme che promuovono leva, CFD o trading continuo ai principianti']
      ])}

<h3>Aprire un conto: cosa aspettarsi</h3>
<ol>
<li>Crea il conto e conferma la tua identità (documento d’identità e a volte un selfie, più un giustificativo di residenza).</li>
<li>Collega il tuo conto bancario e fai un piccolo primo deposito per provare il processo.</li>
<li>Attiva l’autenticazione a due fattori con un’app di autenticazione.</li>
<li>Leggi il tariffario. Guarda in particolare le commissioni di negoziazione, di conversione valutaria e tutto ciò che viene addebitato solo per tenere il conto.</li>
</ol>
${B.warn('<p>Non condividere mai le tue credenziali con nessuno. Non usare servizi di “gestione del conto” di sconosciuti che promettono rendimenti. I consulenti legittimi sono abilitati e non chiedono mai la tua password.</p>')}

${B.w('checklist', { key: 'a1', title: 'Prima del tuo primo investimento', accent: 'inv', items: 'Ho scritto il mio obiettivo, l’importo e la scadenza|Il mio fondo di emergenza è pronto|Ho controllato i conti con vantaggi fiscali disponibili nel mio paese|Ho scelto un broker regolamentato e letto il suo tariffario|Ho attivato l’autenticazione a due fattori con un’app|Ho deciso quanto investirò ogni mese e impostato un promemoria o un bonifico automatico' })}

${B.take(['Parti dallo scopo e dalla scadenza dei soldi, poi scegli gli asset.', 'Usa tre secchi: sicurezza, obiettivi e crescita.', 'Controlla i conti con vantaggi fiscali nel tuo paese.', 'Scegli un broker regolamentato e a basso costo che non spinga prodotti rischiosi.'])}`,
      q: [
        ['I soldi che ti serviranno per l’anticipo di una casa tra 3 anni vanno soprattutto in…', ['100% azioni ad alto rischio', 'Asset tranquilli con rischio limitato', 'Una nuova meme coin', 'Operazioni a leva'], 1, 'Con un orizzonte breve, un crollo proprio prima che ti servano i soldi sarebbe dannoso.'],
        ['Cosa dovresti controllare per prima cosa scegliendo un broker?', ['Che faccia pubblicità vistose', 'Che sia regolamentato nella tua regione e abbia costi bassi e trasparenti', 'Che offra leva 100x', 'Che lo usino gli amici'], 1, 'Regolamentazione e costi contano molto più del marketing.'],
        ['Qual è il vantaggio principale dei conti con vantaggi fiscali?', ['Rendimenti garantiti', 'Possono ridurre legalmente le tasse sui guadagni', 'Nessun rischio', 'Tassi d’interesse più alti sulle azioni'], 1, 'Non cambiano il rischio di mercato, ma meno tasse significano che resta a te una quota maggiore del rendimento.']
      ]
    },
    {
      id: 'a2', m: 11, t: 'ETF e fondi indicizzati: il cestino di snack',
      hook: 'Il modo più semplice ed economico di possedere centinaia o migliaia di aziende in una volta.',
      body: `
<p>Immagina di voler assaggiare ogni snack di un enorme supermercato. Potresti comprare una confezione di ogni tipo, il che è lento e costoso. Oppure potresti comprare un <b>cestino</b> già pronto con un po’ di tutto. Un <b>ETF</b> (exchange-traded fund) è quel cestino per gli investimenti. Compri una quota dell’ETF e possiedi una piccola fetta di centinaia o migliaia di aziende.</p>

<h3>I fondi indicizzati spiegati</h3>
<p>Un <b>indice</b> è un elenco di aziende scelte con regole, come “le 500 maggiori aziende USA” (S&amp;P 500) o “circa 1.400 aziende grandi e medie dei paesi sviluppati” (MSCI World). Un <b>fondo indicizzato</b> o <b>ETF indicizzato</b> copia semplicemente quell’elenco in automatico. Nessun gestore tenta di indovinare quali azioni scegliere, quindi i costi sono molto bassi.</p>

<h3>Perché l’indicizzazione funziona per la maggior parte delle persone</h3>
<p>Battere il mercato in modo costante è estremamente difficile. Anno dopo anno, i rapporti che confrontano i fondi attivi con il loro benchmark rilevano che la maggioranza dei fondi attivi rende meno su 10-15 anni, spesso di una misura pari ai loro costi più alti. I fondi indicizzati ti garantiscono il rendimento di mercato meno un costo minuscolo, il che batte la maggior parte dei professionisti dopo i costi.</p>
${B.ex('<p>Immagina che tu e 99 amici proviate tutti a scegliere azioni. Dopo i costi, il risultato medio è inferiore al mercato, perché per ogni vincitore c’è un perdente dall’altra parte dell’operazione, e tutti pagano commissioni. Se invece possiedi semplicemente tutto il mercato tramite un fondo indicizzato, ottieni la media senza pagare la “tassa della gestione attiva”.</p>')}

<h3>Tipi di indice popolari</h3>
${B.tbl(['Indice', 'Cosa copre', 'Note'], [
        ['S&amp;P 500', '500 grandi aziende USA', 'Molto sbilanciato su tecnologia USA e grandi nomi'],
        ['MSCI World', 'Circa 1.400 aziende a grande e media capitalizzazione dei paesi sviluppati', 'Circa il 70% USA'],
        ['FTSE All-World / MSCI ACWI', 'Mercati sviluppati ed emergenti, migliaia di aziende', 'Il più vicino a “tutto il mondo” in un solo fondo'],
        ['Indice obbligazionario aggregato', 'Molte obbligazioni governative e societarie', 'La parte più tranquilla di un portafoglio']
      ])}

<h3>Come confrontare gli ETF</h3>
<ul>
<li><b>Indice replicato</b>: cosa c’è dentro? Ampio e globale è semplice e robusto.</li>
<li><b>TER (total expense ratio)</b>: il costo annuo. Gli ETF indicizzati ampi costano spesso circa lo 0,05-0,25% l’anno. I fondi attivi possono costare l’1-2%.</li>
<li><b>Dimensione del fondo</b>: ETF molto piccoli possono chiudere. Fondi più grandi e consolidati sono più sicuri.</li>
<li><b>Accumulazione vs. distribuzione</b>: gli ETF ad accumulazione reinvestono automaticamente i dividendi (semplice, ottimo per l’interesse composto); quelli a distribuzione te li pagano.</li>
<li><b>Domicilio e UCITS</b>: in Europa cerca ETF conformi UCITS, molti domiciliati in Irlanda o Lussemburgo, pensati per investitori retail e spesso con trattamento fiscale favorevole sui dividendi esteri.</li>
<li><b>Replica</b>: fisica (detiene le azioni) è la più facile da capire. Sintetica usa swap e aggiunge complessità.</li>
<li><b>Valuta</b>: un ETF può essere quotato in euro pur detenendo asset in dollari. I movimenti valutari si sommano o si sottraggono al rendimento.</li>
</ul>

${B.warn('<p>Un ETF è sicuro solo quanto ciò che contiene. Un ETF a leva, di un solo settore o di “azioni crypto” può essere estremamente volatile. Non comprare mai un ETF solo perché “gli ETF sono sicuri”.</p>')}

${B.tip('<p>I principianti possono andare molto bene con un ETF azionario globale più (facoltativamente) un ETF obbligazionario. Semplice non è pigro: è efficace.</p>')}

${B.take(['Un ETF è un cestino che dà diversificazione immediata con un solo acquisto.', 'I fondi indicizzati copiano automaticamente un elenco di mercato e costano pochissimo.', 'La maggior parte dei fondi attivi rende meno del benchmark dopo i costi su periodi lunghi.', 'Confronta indice, TER, dimensione, accumulazione o distribuzione, domicilio e replica.'])}`,
      q: [
        ['Cosa fa un ETF indicizzato?', ['Prova a battere il mercato scegliendo azioni', 'Copia automaticamente un indice di mercato a basso costo', 'Garantisce profitto', 'Presta denaro solo ai governi'], 1, 'I fondi indicizzati seguono un elenco di aziende con regole fisse, quindi i costi restano bassi.'],
        ['Quale costo annuo (TER) è tipico di un ETF indicizzato ampio e a basso costo?', ['Da 0,1% a 0,25%', 'Dal 3% al 5%', '10%', 'Non c’è mai un costo'], 0, 'Costi sotto circa lo 0,25% sono comuni per gli ETF indicizzati ampi.'],
        ['Cosa fa un ETF ad accumulazione con i dividendi?', ['Te li paga in contanti', 'Li reinveste automaticamente all’interno del fondo', 'Li brucia', 'Ti addebita un extra'], 1, 'Gli ETF ad accumulazione reinvestono i dividendi, comodo per l’interesse composto.']
      ]
    },
    {
      id: 'a3', m: 12, t: 'Diversificazione e asset allocation',
      hook: 'Come distribuire i soldi perché nessun singolo disastro possa rovinarti, e un gioco per mettere alla prova il tuo mix.',
      body: `
<p>Il vecchio consiglio “non mettere tutte le uova in un solo cesto” è il cuore dell’investire. L’<b>asset allocation</b> (come dividi il denaro tra azioni, obbligazioni, liquidità e altri asset) è il fattore principale di quanto sarà accidentato il tuo viaggio. La ricerca sui portafogli suggerisce che l’allocazione spiega molto più del comportamento di un portafoglio rispetto alla scelta di investimenti specifici.</p>

<h3>Tre livelli di diversificazione</h3>
<ol>
<li><b>Tra classi di attività</b>: azioni, obbligazioni, liquidità, magari un po’ di oro o immobili. Reagiscono diversamente agli eventi.</li>
<li><b>Tra paesi e valute</b>: non affidarti solo al tuo mercato di casa. I fondi globali lo fanno per te.</li>
<li><b>Tra aziende e settori</b>: centinaia o migliaia di aziende, così un singolo fallimento conta appena.</li>
</ol>

<h3>Correlazione: perché mescolare aiuta</h3>
<p>Due asset che non si muovono insieme hanno bassa <b>correlazione</b>. In un anno brutto per le azioni, le obbligazioni di qualità o l’oro a volte reggono. Non sempre succede (nel 2022 sono calate sia azioni sia obbligazioni), ma nella storia un mix ha prodotto scossoni minori di qualunque singolo pezzo.</p>

<h3>Alcuni esempi di mix di partenza</h3>
${B.tbl(['Stile', 'Azioni', 'Obbligazioni', 'Liquidità / altro', 'Adatto a'], [
        ['Prudente', '30%', '50%', '20%', 'Orizzonte breve, bassa tolleranza ai cali'],
        ['Bilanciato', '60%', '30%', '10%', 'Orizzonte medio (7-15 anni)'],
        ['Crescita', '80-90%', '10-20%', '0-5%', 'Orizzonte lungo (15+ anni), alta tolleranza']
      ])}
<p>Una regola pratica molto approssimativa che alcuni usano è “110 o 120 meno la tua età” come percentuale in azioni. È solo un punto di partenza: i tuoi obiettivi, la stabilità del reddito e i tuoi nervi contano più di una formula.</p>

<h3>Core e satellite</h3>
<p>Una struttura popolare: metti l’80-95% in un “core” globale a basso costo (un ETF world) e tieni un piccolo “satellite” (5-20%) per idee in cui credi, come azioni singole o temi. Se un satellite fallisce, il core ti protegge.</p>

<h3>Ora metti alla prova il tuo portafoglio</h3>
<p>Costruisci un mix e poi fallo passare attraverso quattro scenari stilizzati di otto anni. Prova un portafoglio tutto azionario, uno prudente e uno “100% crypto”. Osserva sia il valore finale sia il peggior calo lungo il percorso. Quale riusciresti davvero a sopportare?</p>
${B.w('alloc')}

${B.key('<p><b>La vera domanda non è “cosa rende di più?”</b> È “qual è il mix più rischioso che riesco a tenere durante un crollo senza vendere?”. Un piano ottimo che abbandoni nel panico è peggio di un buon piano che mantieni.</p>')}

${B.warn('<p>Possedere dieci azioni dello stesso settore, o cinque fondi che contengono tutti le stesse grandi aziende tecnologiche, non è vera diversificazione. Guarda cosa contengono davvero i fondi.</p>')}

${B.take(['L’asset allocation determina la maggior parte del rischio e del comportamento del tuo portafoglio.', 'Diversifica tra classi di attività, paesi e aziende.', 'Scegli il mix che puoi reggere durante un calo del 30%, non quello col grafico più bello.', 'Core e satellite limita le idee rischiose a una fetta piccola e sostenibile.'])}`,
      q: [
        ['Qual è lo scopo principale della diversificazione?', ['Massimizzare il profitto a breve termine', 'Ridurre il danno che un singolo fallimento può causare', 'Evitare le tasse', 'Garantire rendimenti'], 1, 'Distribuire il rischio significa che nessuna azienda o asset da soli possono rovinare l’intero portafoglio.'],
        ['In un approccio core e satellite, il core di solito è…', ['Una singola azione in voga', 'Un fondo globale ampio e a basso costo', 'Una posizione a leva', 'Solo liquidità'], 1, 'Il core è la base stabile e diversificata; i satelliti sono piccole scommesse.'],
        ['Quale scelta riflette meglio la domanda giusta nello scegliere un mix?', ['Quali asset sono saliti di più l’anno scorso?', 'Qual è il mix più rischioso che riesco a tenere durante un crollo senza vendere?', 'Cosa possiede un influencer famoso?', 'Quale mix triplicherebbe più in fretta?'], 1, 'Il comportamento nei ribassi determina se guadagni davvero i rendimenti di lungo termine.']
      ]
    },
    {
      id: 'a4', m: 9, t: 'Piano di accumulo e automatizzare la tua ricchezza',
      hook: 'Investi la stessa cifra con un calendario ed elimina la decisione più difficile dell’investire: quando.',
      body: `
<p>Nessuno può prevedere in modo affidabile il giorno perfetto per comprare. Il <b>piano di accumulo (DCA, dollar-cost averaging)</b> risolve il problema investendo un importo fisso a intervalli regolari, per esempio 100 € il primo di ogni mese, qualunque cosa faccia il mercato. Quando i prezzi sono bassi compri automaticamente più quote; quando sono alti ne compri meno.</p>

${B.ex('<p>In 4 mesi investi 100 € al mese. Il prezzo del fondo è 10 €, 8 €, 5 € e 10 €. Compri 10, 12,5, 20 e 10 quote: 52,5 quote per 400 €, un costo medio di circa 7,62 € a quota, anche se il prezzo è finito dove era partito, a 10 €. Il tuo prezzo medio è inferiore alla media semplice dei prezzi perché hai comprato di più quando costava poco.</p>')}

<h3>DCA vs. somma unica</h3>
<p>Se hai già una somma grande, le statistiche mostrano che investirla tutta in una volta batte la distribuzione nel tempo in circa due terzi dei casi storici, semplicemente perché i mercati salgono più spesso di quanto scendano. Ma il DCA riduce la probabilità di mettere tutto proprio prima di un crollo ed è più leggero per i nervi. Comunque la maggior parte delle persone non ha una somma unica: investe dallo stipendio, che è già un DCA automatico.</p>
${B.w('dca')}

<h3>Rendilo automatico</h3>
<ol>
<li>Scegli un importo che puoi mantenere anche in un mese brutto.</li>
<li>Imposta un ordine permanente o un investimento automatico per il giorno dopo lo stipendio.</li>
<li>Scegli ogni volta lo stesso fondo ampio.</li>
<li>Aumenta l’importo quando sale il tuo reddito (“alzalo a ogni aumento”).</li>
<li>Non fermarti in un crollo. Prezzi in calo significano che il tuo importo fisso compra di più.</li>
</ol>

<h3>Cosa fare con le entrate extra</h3>
<p>Premi, regali o un rimborso fiscale: una regola sensata è dividerli. Per esempio, 50% al tuo piano (investire o fondo di emergenza), 30% agli obiettivi e 20% da goderti. Non devi essere un monaco, solo costante.</p>

${B.warn('<p>Il DCA non ti protegge da un mercato in calo né garantisce un profitto. Non salva nemmeno un asset sbagliato. Abbinalo a investimenti diversificati e sensati.</p>')}

${B.take(['DCA significa investire un importo fisso con un calendario regolare.', 'Elimina le decisioni di market timing e crea l’abitudine.', 'Una somma unica spesso vince statisticamente, ma il DCA riduce il rimpianto e il rischio di un brutto timing.', 'Automatizzalo e continua durante i crolli.'])}`,
      q: [
        ['Cos’è il piano di accumulo (DCA)?', ['Aspettare il giorno più economico', 'Investire un importo fisso a intervalli regolari indipendentemente dal prezzo', 'Vendere quando i prezzi scendono', 'Indebitarsi per investire'], 1, 'È il calendario, non il prezzo, a decidere quando compri.'],
        ['Quando il prezzo scende, un investimento mensile fisso…', ['Compra meno quote', 'Compra più quote', 'Compra lo stesso numero di quote', 'Si ferma automaticamente'], 1, 'Lo stesso importo in euro compra più quote a prezzi più bassi.'],
        ['Qual è la migliore reazione a un crollo di mercato se investi ogni mese con un piano?', ['Fermare tutto e vendere', 'Continuare a investire l’importo previsto', 'Raddoppiare la leva', 'Passare a una moneta in voga a caso'], 1, 'Tenere la rotta ti permette di comprare a meno mentre il tuo piano di lungo termine resta invariato.']
      ]
    },
    {
      id: 'a5', m: 10, t: 'Costi, commissioni e tasse: i killer silenziosi della ricchezza',
      hook: 'Un costo che sembra minuscolo può mangiarsi un terzo del tuo risultato finale. Impara a individuare ogni costo.',
      body: `
<p>Non puoi controllare il mercato, ma puoi controllare quanto paghi per partecipare. I costi si capitalizzano proprio come i rendimenti, solo nella direzione sbagliata.</p>

<h3>I costi da conoscere</h3>
<ul>
<li><b>Costi del fondo (TER)</b>: addebitati ogni anno all’interno del fondo.</li>
<li><b>Commissioni di negoziazione</b>: una cifra fissa o una percentuale ogni volta che compri o vendi.</li>
<li><b>Spread</b>: il piccolo divario tra il prezzo di acquisto (ask) e di vendita (bid). Un costo nascosto in ogni operazione.</li>
<li><b>Costi di conversione valutaria</b>: spesso dallo 0,25% all’1% o più se il broker aggiunge un margine.</li>
<li><b>Costi di custodia e inattività</b>: addebitati da alcuni broker solo per tenere i tuoi asset.</li>
<li><b>Commissioni di performance</b>: una quota dei profitti trattenuta da alcuni fondi.</li>
<li><b>Tasse</b>: su dividendi, interessi e plusvalenze, a seconda di dove vivi.</li>
</ul>

<h3>Guarda il danno</h3>
<p>Confronta un ETF economico con un fondo costoso. Stesso mercato, stessi versamenti, cambia solo il costo.</p>
${B.w('fees')}

<h3>Tasse: le basi</h3>
<p>Le regole variano da paese a paese, ma le idee comuni sono:</p>
<ul>
<li>L’<b>imposta sulle plusvalenze</b> si paga sul profitto quando vendi. Chi compra e tiene la attiva raramente, il che lascia più soldi a capitalizzare. I trader frequenti la attivano spesso.</li>
<li>L’<b>imposta sui dividendi</b> si applica quando le aziende distribuiscono utili. I fondi ad accumulazione possono avere un trattamento diverso da quelli a distribuzione.</li>
<li>Una <b>ritenuta alla fonte</b> può essere applicata sui dividendi esteri.</li>
<li>Le <b>perdite</b> possono talvolta compensare i guadagni. Conserva la documentazione.</li>
</ul>
${B.warn('<p>Questo corso dà idee generali, non consulenza fiscale. Leggi le indicazioni della tua autorità fiscale o parla con un consulente qualificato. Le regole fiscali cambiano.</p>')}

${B.ex('<p>Due amici investono 10.000 € ciascuno e aggiungono 200 € al mese per 30 anni sullo stesso mercato (7% prima dei costi). Uno paga lo 0,2% l’anno e finisce con circa 297.000 €. L’altro paga l’1,8% e finisce con circa 215.000 €. Sono circa 82.000 € in meno, solo per i costi, sullo stesso identico mercato.</p>')}

${B.tip('<p>Prima di comprare qualsiasi prodotto chiedi: “Qual è il costo annuo totale, in percentuale, comprese tutte le commissioni?”. Se il venditore non sa rispondere con chiarezza, vai via.</p>')}

${B.take(['I costi si capitalizzano contro di te, e un costo dell’1% non è piccolo su decenni.', 'Guarda insieme TER, commissioni di negoziazione, spread, conversione valutaria e custodia.', 'Comprare e tenere riduce i costi di negoziazione e gli eventi tassabili.', 'Impara le regole fiscali del tuo paese o chiedi a un professionista.'])}`,
      q: [
        ['Perché i costi sono particolarmente dannosi su periodi lunghi?', ['Si pagano una sola volta', 'Si pagano ogni anno e tolgono anche la crescita futura che quel denaro avrebbe reso', 'Si applicano solo nei mercati rialzisti', 'Vengono rimborsati alla fine'], 1, 'L’effetto si capitalizza, quindi piccole percentuali annue diventano grandi totali.'],
        ['Cos’è lo spread?', ['Un’imposta sui dividendi', 'La differenza tra il prezzo di acquisto e quello di vendita', 'Un tipo di ETF', 'Il tuo costo annuo'], 1, 'Compri al prezzo ask, più alto, e vendi al bid, più basso, quindi ogni andata e ritorno costa lo spread.'],
        ['Quale investitore probabilmente paga meno tasse?', ['Chi fa trading ogni giorno', 'Chi compra e tiene per anni', 'È sempre identico', 'Chi vende ogni mese'], 1, 'Meno vendite significano meno eventi tassabili, quindi più soldi restano investiti.']
      ]
    },
    {
      id: 'a6', m: 12, t: 'Tieni la rotta: crolli, ribilanciamento e comportamento',
      hook: 'I mercati crollano regolarmente. Il tuo piano deve essere pronto prima che accada. Gioca al gioco del crollo e guarda come reagisci.',
      body: `
<p>Se investi per 40 anni, vivrai diversi crolli. Non è un disastro raro. Fa parte del prezzo dei rendimenti di lungo termine. Ciò che succederà poi al tuo patrimonio dipende soprattutto da cosa fai durante la caduta.</p>

<h3>I crolli nella storia</h3>
<ul>
<li><b>Dal 2000 al 2002</b>: la bolla delle dot-com. L’S&amp;P 500 statunitense è sceso di circa il 49%.</li>
<li><b>Dal 2007 al 2009</b>: la crisi finanziaria globale. Circa -57% dal massimo al minimo.</li>
<li><b>Da febbraio a marzo 2020</b>: il crollo della pandemia. Circa -34% in soli 33 giorni, seguito da una delle riprese più rapide di sempre.</li>
<li><b>2022</b>: inflazione e rialzo dei tassi. Circa -25% per le azioni USA, con le obbligazioni che calavano anch’esse.</li>
</ul>
<p>In ognuno di questi casi, gli investitori pazienti in ampi indici azionari USA alla fine si sono ripresi e hanno raggiunto nuovi massimi, anche se ci sono voluti da alcuni mesi a circa cinque-sette anni in termini di prezzo. Questo non garantisce che ogni mercato si riprenda (il Giappone ha impiegato oltre 30 anni a ritrovare il massimo del 1989), ed è una ragione per diversificare a livello globale.</p>

<h3>Il costo del panico</h3>
<p>Vendere dopo un calo del 30% blocca la perdita. E poi devi decidere quando rientrare. Molti vendono vicino al minimo e rientrano dopo che i prezzi sono già risaliti. Gli studi mostrano che i giorni migliori del mercato avvengono spesso proprio accanto ai peggiori, quindi perderne solo una manciata può ridurre drasticamente i rendimenti di lungo termine.</p>

<h3>Gioca: gioco di sopravvivenza al crollo di mercato</h3>
<p>Hai 10.000 €. I titoli dei giornali peggiorano. A ogni passo decidi: tenere, vendere, ricomprare o aggiungere denaro. Nessuna risposta è perfetta, ma il tuo schema dice molto sui tuoi nervi.</p>
${B.w('panic')}

<h3>Ribilanciamento: la disciplina di comprare a poco</h3>
<p>Diciamo che il tuo piano è 70% azioni e 30% obbligazioni. Dopo un boom azionario potresti essere all’80% in azioni, più rischio di quello che hai scelto. <b>Ribilanciare</b> significa riportare il mix al target vendendo parte di ciò che è salito e comprando ciò che è rimasto indietro. Due metodi semplici:</p>
<ul>
<li><b>Calendario</b>: una volta l’anno in una data fissa.</li>
<li><b>Soglia</b>: ogni volta che una fetta si discosta di più di 5 punti percentuali dal target.</li>
</ul>
<p>Un modo ancora più facile: indirizza i <i>nuovi</i> versamenti verso la parte sotto il target, così ribilanci senza vendere (e senza tasse).</p>

<h3>Scrivi oggi il tuo piano per il crollo</h3>
${B.tryit('<p>Completa questa frase e conservala: “Se il mio portafoglio cala del 30%, io ______.” Per esempio: “continuerò i miei investimenti mensili, non controllerò i prezzi più di una volta a settimana e parlerò con un amico prima di vendere qualsiasi cosa.”</p>')}

${B.take(['Crolli del 20-50% accadono regolarmente; pianificali in anticipo.', 'Vendere nel panico trasforma perdite temporanee in perdite permanenti.', 'Ribilancia una volta l’anno o quando una fetta si discosta di circa 5 punti.', 'La diversificazione globale ti protegge se un mercato impiega decenni a riprendersi.'])}`,
      q: [
        ['Di quanto è sceso circa l’S&P 500 nel crollo del 2020?', ['Circa il 5%', 'Circa il 34%', 'Circa l’80%', 'Non è sceso'], 1, 'È sceso di circa un terzo in circa un mese prima di riprendersi con forza.'],
        ['Cosa fa il ribilanciamento?', ['Ripristina il tuo mix target riducendo i vincenti e aggiungendo ai ritardatari', 'Raddoppia il tuo rischio', 'Elimina le tasse', 'Prevede il prossimo crollo'], 0, 'Riporta il rischio al livello che hai scelto e impone una disciplina di comprare basso e vendere alto.'],
        ['Perché vendere nel panico di solito costa caro?', ['Fa salire il mercato', 'Blocca le perdite e ti lascia a decidere quando rientrare, spesso troppo tardi', 'Abbassa i costi', 'Aumenta i dividendi'], 1, 'La ripresa spesso inizia quando il sentimento è al peggio, quindi chi ha venduto la perde.']
      ]
    },
    {
      id: 'a7', m: 13, t: 'Scegliere azioni singole: guida per principianti',
      hook: 'Facoltativo e rischioso, ma affascinante. Come leggere un’azienda senza cadere nelle storie.',
      body: `
<p>La maggior parte dei tuoi investimenti può (e probabilmente dovrebbe) essere in fondi indicizzati. Ma molte persone vogliono imparare ad analizzare singole aziende. Se lo fai, trattalo come un <b>satellite</b>: una piccola fetta dei tuoi soldi (per esempio il 5-15%) e un modo per imparare, non per arricchirsi in fretta.</p>

<h3>Passo 1: Capisci l’attività</h3>
<p>Sai spiegare in due frasi come questa azienda fa soldi e perché i clienti la scelgono rispetto ai concorrenti? Se no, stai tirando a indovinare. Peter Lynch, famoso gestore di fondi, ha reso popolare l’idea di investire in ciò che si capisce (il tuo “cerchio di competenza”).</p>

<h3>Passo 2: Leggi i numeri chiave</h3>
<ul>
<li><b>Crescita dei ricavi</b>: le vendite crescono con costanza?</li>
<li><b>Margine di profitto</b>: profitto diviso per i ricavi. Margini più alti segnalano spesso potere di prezzo.</li>
<li><b>Utile per azione (EPS)</b>: utile netto diviso per il numero di azioni.</li>
<li><b>Flusso di cassa libero</b>: denaro reale che resta dopo aver gestito l’attività e investito. Difficile da falsificare.</li>
<li><b>Debito</b>: troppo debito rende fragile un’azienda. Confronta il debito con utili e flusso di cassa.</li>
<li><b>Rendimento del capitale proprio (ROE)</b>: quanto efficacemente l’azienda trasforma il denaro degli azionisti in profitto.</li>
<li><b>Vantaggio competitivo (“moat”)</b>: un vantaggio duraturo come marchio, effetti di rete, brevetti o costi bassi.</li>
</ul>

<h3>Passo 3: Valutazione: quale prezzo è giusto?</h3>
<p>Un’azienda meravigliosa può comunque essere un cattivo investimento se paghi troppo. Lo strumento più semplice è il <b>rapporto P/E</b>: prezzo diviso per utile per azione.</p>
${B.ex('<p><b>SnackCo</b> (fittizia) ha ricavi per 600 M€, utile netto di 60 M€ (margine del 10%) e 20 M di azioni. EPS = 60 M€ ÷ 20 M = <b>3 €</b>. Il prezzo dell’azione è 60 €, quindi P/E = 60 ÷ 3 = <b>20</b>. Significa che paghi 20 € per ogni 1 € di utile annuo, un “rendimento degli utili” del 5%. Se aziende di snack simili trattano a P/E 15 e SnackCo cresce più in fretta, 20 può essere giusto. Se la crescita si sta fermando, può essere caro. Paga anche un dividendo di 1,20 € per azione: un rendimento del 2% e un payout del 40%, lasciando spazio per crescere.</p>')}
<p>Altri strumenti di valutazione: prezzo/vendite (P/S), prezzo/flusso di cassa libero e il confronto con i concorrenti e con lo storico dell’azienda.</p>

<h3>Passo 4: Pensa al rischio</h3>
<ul>
<li>Cosa potrebbe danneggiare in modo permanente questa attività (nuova tecnologia, regolamentazione, un cliente chiave)?</li>
<li>Che peso avrà nel tuo portafoglio? Limita ogni singola azione a una piccola percentuale.</li>
<li>Cosa ti farebbe vendere? Decidilo in anticipo (la tesi si è rotta, non “il prezzo è sceso”).</li>
</ul>

<h3>Trappole da evitare</h3>
<ul>
<li><b>Azioni da storia</b>: gran bella narrazione, nessun profitto e un prezzo che presume la perfezione.</li>
<li><b>Soffiate calde</b> da amici, forum e video. Chiediti perché te le raccontano.</li>
<li><b>Economico non sempre è buono</b>: un P/E basso può significare che il mercato si aspetta un crollo degli utili.</li>
<li><b>Overtrading</b>: comprare e vendere di continuo aggiunge costi ed errori.</li>
</ul>

${B.warn('<p>Anche analisti professionisti con team e database non riescono a battere il mercato nella maggior parte dei casi. Se scegli azioni, tieni il tuo core in un fondo diversificato così il tuo apprendimento costa poco.</p>')}

${B.take(['Tratta la scelta delle azioni come un piccolo satellite, non come tutto il tuo piano.', 'Capisci prima l’attività, poi controlla crescita, margini, debito e flusso di cassa.', 'P/E = prezzo ÷ utile per azione; confrontalo con i pari e la crescita, mai da solo.', 'Decidi in anticipo cosa ti farebbe vendere e limita la dimensione di ogni posizione.'])}`,
      q: [
        ['Un’azienda ha un prezzo per azione di 50 € e un EPS di 2,50 €. Qual è il suo P/E?', ['5', '20', '50', '125'], 1, '50 ÷ 2,5 = 20.'],
        ['Perché gli analisti danno valore al “flusso di cassa libero”?', ['È facile da falsificare', 'Mostra il denaro reale che resta dopo aver gestito e investito nell’attività', 'È sempre uguale all’utile', 'Conta solo per le banche'], 1, 'Il denaro è più difficile da manipolare dell’utile contabile.'],
        ['Qual è un modo intelligente di trattare la scelta di azioni singole da principiante?', ['Mettere il 100% dei risparmi in una sola azione', 'Un piccolo satellite accanto a un core diversificato', 'Indebitarsi per comprarne di più', 'Seguire i consigli di sconosciuti'], 1, 'Una piccola fetta rende il tuo apprendimento sostenibile e il tuo piano sicuro.']
      ]
    },
    {
      id: 'a8', m: 9, t: 'Il tuo piano d’azione di 12 mesi',
      hook: 'Trasforma tutto ciò che hai imparato in una pagina e un calendario. I piani battono le intenzioni.',
      body: `
<p>Congratulazioni. Ora sai di investimenti più della maggior parte degli adulti. La conoscenza rende solo quando diventa azione, quindi ecco una semplice tabella di marcia di 12 mesi.</p>

<h3>La tabella di marcia</h3>
${B.tbl(['Quando', 'Azione'], [
        ['Mese 1', 'Costruisci il tuo budget. Apri un conto di risparmio per il fondo di emergenza e automatizza un bonifico nel giorno dello stipendio.'],
        ['Mese 2', 'Estingui eventuali debiti a tasso alto. Informati sui conti con vantaggi fiscali nel tuo paese.'],
        ['Mese 3', 'Scegli un broker regolamentato, apri il conto, attiva l’autenticazione a due fattori e leggi il tariffario.'],
        ['Mese 4', 'Scrivi il tuo piano di una pagina (sotto). Fai il tuo primo piccolo investimento in un ETF ampio e a basso costo.'],
        ['Mesi 5-9', 'Investi automaticamente ogni mese. Non guardare i prezzi ogni giorno. Raggiungi 3 mesi di risparmi di emergenza.'],
        ['Mese 10', 'Verifica: stai seguendo il piano? Controlla i costi. Ribilancia se una fetta si è discostata di oltre 5 punti.'],
        ['Mese 12', 'Aumenta l’importo mensile se il reddito lo consente. Rivedi gli obiettivi. Insegna a qualcun altro ciò che hai imparato.']
      ])}

<h3>Costruisci il tuo piano di una pagina</h3>
<p>Un investitore professionista scrive una <b>Investment Policy Statement</b> (dichiarazione di politica d’investimento). Puoi farne una mini versione in un minuto. Provala: prende il tuo obiettivo, l’orizzonte temporale e la tua tolleranza al rischio e crea un piano di esempio che puoi copiare e rifinire.</p>
${B.w('ips')}

<h3>Com’è il successo</h3>
<ul>
<li><b>Anno 1</b>: hai creato l’abitudine e la rete di sicurezza. La cifra sul conto conta meno della routine.</li>
<li><b>Anno 5</b>: hai vissuto almeno un brutto mercato senza spezzare il piano. I tuoi versamenti sono cresciuti.</li>
<li><b>Anno 10+</b>: la capitalizzazione diventa visibile, con rendimenti sul portafoglio che rivaleggiano con ciò che aggiungi ogni anno.</li>
</ul>

<h3>Errori comuni da evitare, un’ultima volta</h3>
<ol>
<li>Aspettare il “momento perfetto” invece di iniziare in piccolo.</li>
<li>Investire soldi che ti serviranno presto.</li>
<li>Inseguire il vincitore dell’anno scorso o il consiglio di un amico.</li>
<li>Pagare costi alti senza accorgertene.</li>
<li>Vendere nel panico.</li>
<li>Lasciare che l’entusiasmo ti spinga verso leva, derivati o prodotti complessi.</li>
</ol>

${B.key('<p>Costruire ricchezza è noioso di proposito. Se il tuo piano ti sembra emozionante ogni giorno, c’è qualcosa che non va. L’emozione deve arrivare dopo, quando controlli il saldo tra dieci anni e ti rendi conto che decisioni costanti, pazienti e ordinarie hanno fatto qualcosa di straordinario.</p>')}

${B.take(['Segui la tabella di marcia di 12 mesi: base, broker, piano, automazione, revisione.', 'Scrivi un piano di una pagina così le decisioni si prendono con calma e in anticipo.', 'Noioso e costante batte emozionante ed erratico.', 'Prossimi passi: esplora il Percorso Pro, o i percorsi crypto e di trading se ti interessano.'])}`,
      q: [
        ['Qual è lo scopo principale di una Investment Policy Statement?', ['Prevedere i mercati', 'Scrivere le tue regole per agire con calma e coerenza', 'Evitare ogni rischio', 'Impressionare gli amici'], 1, 'Un piano scritto ti protegge dalle decisioni emotive.'],
        ['Quando dovresti ribilanciare, secondo le regole semplici di questo corso?', ['Ogni giorno', 'Una volta l’anno o quando una fetta si discosta di circa 5 punti dal target', 'Mai', 'Solo dopo un crollo'], 1, 'Sia l’approccio a calendario sia quello a soglia tengono il rischio vicino al tuo target.'],
        ['Qual è un segnale che il tuo piano è probabilmente sano?', ['Richiede di controllare i prezzi ogni ora', 'È semplice, automatico e puoi continuare a seguirlo durante un crollo', 'Usa la leva per accelerare', 'Dipende da una soffiata calda'], 1, 'Il miglior piano è quello a cui riesci ad attenerti.']
      ]
    }
  ]);
})();
