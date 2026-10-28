/* Fondamenti del Denaro: 6 lezioni */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('found', [
    {
      id: 'f1', m: 9, t: 'Denaro, inflazione e perché risparmiare non basta',
      hook: 'In questo momento i tuoi soldi perdono potere d’acquisto in silenzio. Ecco come misurarlo e cosa fare.',
      body: `
<p>Immagina che una pizza costi <b>10 €</b> oggi. Se i prezzi salgono del 3% ogni anno, la stessa pizza costerà circa <b>18 €</b> tra 20 anni. La pizza non è cambiata. Sono i soldi che comprano meno. Questo restringimento lento si chiama <b>inflazione</b> ed è il motivo principale per cui tenere tutti i soldi in un cassetto (o su un conto allo 0%) non è un piano sicuro. È una perdita lenta.</p>

<h3>Cosa fa davvero il denaro</h3>
<p>Il denaro svolge tre compiti. È un <b>mezzo di scambio</b> (lo scambi con le cose), un’<b>unità di conto</b> (i prezzi si scrivono in esso) e una <b>riserva di valore</b> (puoi tenerlo per dopo). L’inflazione attacca il terzo compito. In pochi mesi quasi non si nota. In 20 anni è enorme.</p>

<h3>Come funziona l’inflazione</h3>
<p>Quando nell’economia ci sono più soldi e più domanda che cose da comprare, o quando produrre costa di più (energia, stipendi, trasporti), i prezzi salgono. Le banche centrali come la Banca centrale europea o la Federal Reserve americana puntano a circa il <b>2% di inflazione l’anno</b>, che considerano sano. A volte sale molto di più, come nel 2022, quando molti paesi hanno visto i prezzi crescere dell’8% o più in un solo anno.</p>

${B.key('<p><b>Nominale vs. reale.</b> Se i tuoi risparmi crescono del 2% ma i prezzi salgono del 3%, non sei diventato più ricco. Il tuo rendimento <i>reale</i> è circa -1%. Chiediti sempre: cosa potranno comprare questi soldi più avanti, non solo quanti euro avrò?</p>')}

<h3>Sentilo sulla tua pelle</h3>
<p>Muovi i cursori qui sotto. Nota quanto è brutale un’inflazione del 6% in 30 anni e quanta differenza fa anche un rendimento modesto.</p>
${B.w('inflation')}

<h3>La regola del 72</h3>
<p>Un trucco comodo: dividi 72 per la percentuale annua per stimare in quanti anni qualcosa raddoppia. Con il 3% di inflazione i prezzi raddoppiano in circa <b>24 anni</b> (72 ÷ 3). Con una crescita dell’investimento del 7%, i soldi raddoppiano in circa <b>10 anni</b> (72 ÷ 7). La useremo di nuovo nella lezione sull’interesse composto.</p>

${B.ex('<p>Marta ha 19 anni e tiene in un cassetto 5.000 € guadagnati con lavori estivi. Con il 3% di inflazione, tra 10 anni sono ancora 5.000 € sulla carta, ma comprano ciò che oggi comprano circa 3.700 €. Il suo amico Diogo mette gli stessi 5.000 € in un fondo diversificato. Non salirà in linea retta (avrà anni buoni e anni cattivi), ma storicamente questi fondi hanno battuto l’inflazione su periodi lunghi. Nessuna delle due scelte è priva di rischio. Non fare nulla è anch’essa una scelta, e ha un costo.</p>')}

<h3>Risparmiare vs. investire: due lavori diversi</h3>
<ul>
<li><b>Risparmiare</b> serve per i bisogni a breve termine e la sicurezza: emergenze, la vacanza dell’anno prossimo, un portatile. Vuoi che i soldi ci siano, stabili e facili da raggiungere.</li>
<li><b>Investire</b> serve per obiettivi a lungo termine (5 anni o più): comprare asset che possono crescere più in fretta dell’inflazione, accettando che il valore salga e scenda lungo la strada.</li>
</ul>
<p>Ti servono entrambi. I risparmi ti proteggono dalle emergenze, così non devi mai vendere gli investimenti nel momento sbagliato.</p>

${B.warn('<p>“Investire” non è una parola magica per “fare soldi”. Significa assumersi un rischio in cambio della <i>possibilità</i> di rendimenti più alti. Puoi perdere denaro. Il resto di questo corso insegna a prendersi quel rischio con saggezza.</p>')}

${B.take(['L’inflazione riduce costantemente ciò che i tuoi soldi possono comprare, di solito circa il 2-3% l’anno.', 'Guarda i rendimenti reali (dopo l’inflazione), non solo i numeri nominali.', 'I risparmi servono per stabilità ed emergenze; gli investimenti per la crescita a lungo termine.', 'La regola del 72 stima il tempo di raddoppio: 72 diviso per il tasso annuo.'])}`,
      q: [
        ['Se il tuo conto di risparmio rende l’1% e l’inflazione è il 3%, cosa succede al tuo potere d’acquisto?', ['Cresce dell’1%', 'Cala di circa il 2% l’anno', 'Resta uguale', 'Cala del 4%'], 1, 'Il rendimento reale è circa il tasso d’interesse meno l’inflazione: 1% - 3% = circa -2%.'],
        ['Con la regola del 72, in quanto tempo raddoppiano i prezzi con il 4% di inflazione?', ['8 anni', '12 anni', '18 anni', '36 anni'], 2, '72 ÷ 4 = 18 anni.'],
        ['Qual è l’uso migliore di un conto di risparmio?', ['Soldi che ti servono nei prossimi 1-2 anni ed emergenze', 'I soldi della pensione per i prossimi 40 anni', 'Arricchirsi in fretta', 'Scommettere in Borsa'], 0, 'I risparmi servono per i bisogni a breve termine e la sicurezza. Gli obiettivi a lungo termine di solito richiedono investimenti.']
      ]
    },
    {
      id: 'f2', m: 10, t: 'La tua base finanziaria: budget, fondo di emergenza e debiti',
      hook: 'Prima di investire anche un solo euro, costruisci la base che impedisce alla vita di buttarti a terra.',
      body: `
<p>La maggior parte dei consigli sugli investimenti inizia con “compra questo fondo”. L’investire intelligente inizia <b>prima</b>: con un budget, un cuscinetto di sicurezza e un piano per i debiti. Salta questo passo e un telefono rotto o un lavoro perso potrebbero costringerti a vendere gli investimenti nel momento peggiore.</p>

<h3>Passo 1: Sappi dove vanno i tuoi soldi</h3>
<p>Una regola popolare da cui partire è la <b>regola 50/30/20</b>: circa il 50% del reddito dopo le tasse va ai <b>bisogni</b> (affitto, cibo, trasporti, bollette), il 30% ai <b>desideri</b> (svago, abbonamenti, mangiare fuori) e il 20% a <b>risparmio e investimenti</b>. È una guida, non una legge. Se sei uno studente e guadagni 400 € al mese, il 20% sono 80 €, ed è un ottimo inizio. Ciò che conta è creare l’abitudine.</p>
${B.w('budget')}

<h3>Passo 2: Paga prima te stesso</h3>
<p>Non risparmiare “quello che avanza”. Imposta un bonifico automatico verso i risparmi nel giorno dello stipendio, <i>prima</i> di poterlo spendere. Trattalo come una bolletta che devi al te del futuro. L’automazione batte la forza di volontà.</p>

<h3>Passo 3: Il fondo di emergenza</h3>
<p>Un <b>fondo di emergenza</b> è denaro tenuto al sicuro e facile da raggiungere per gli imprevisti: riparazioni dell’auto, spese mediche, perdita del lavoro. L’obiettivo comune è di <b>3-6 mesi di spese essenziali</b> su un normale conto di risparmio (non in azioni o crypto). Studenti e giovani con costi bassi possono iniziare con un mese e crescere da lì.</p>
${B.ex('<p>Rui investe 2.000 € in azioni ma non ha un fondo di emergenza. Tre mesi dopo il portatile si rompe e gli servono subito 700 €. Il mercato è per caso in calo del 15%, quindi vende in perdita e blocca la perdita. Ana ha investito la stessa cifra ma prima aveva tenuto 1.000 € di risparmio. Ha pagato il portatile con i risparmi e i suoi investimenti sono rimasti intatti e si sono ripresi più tardi. Stessi investimenti, esito molto diverso, grazie al cuscinetto.</p>')}

<h3>Passo 4: Gestisci i debiti con saggezza</h3>
<ul>
<li>Il <b>debito a tasso alto</b> (carte di credito, scoperti, prestiti rapidi, spesso il 15-25% l’anno o più) è come un rendimento negativo garantito. Ripagarlo batte quasi ogni investimento. Fallo per primo.</li>
<li>Il <b>debito a tasso basso</b> (per esempio certi prestiti per studio o mutui a tassi bassi) è normale. Puoi continuare a ridurlo mentre inizi a investire.</li>
<li><b>Non</b> indebitarti mai per investire in asset rischiosi. Le perdite si moltiplicano e il debito lo devi comunque.</li>
</ul>

<h3>Passo 5: Investi nel tuo asset più grande: te stesso</h3>
<p>Da giovani, il miglior “investimento” sono spesso le competenze: imparare un mestiere, una lingua, programmare, vendere. Aumentare il tuo reddito di 200 € al mese vale più di un rendimento del 10% su 1.000 €. Investire in competenze e investire denaro funzionano insieme.</p>

${B.w('checklist', { key: 'f2', title: 'La tua checklist della base finanziaria', accent: 'found', items: 'So più o meno quanto guadagno e spendo ogni mese|Ho un conto di risparmio separato per le emergenze|Ho impostato un bonifico mensile automatico verso i risparmi|Ho messo da parte almeno 1 mese di spese essenziali (obiettivo: 3-6)|Non ho debiti a tasso alto, oppure ho un piano per ripagarli|Capisco che dovrei investire solo soldi che non mi serviranno per 5+ anni' })}

${B.take(['Costruisci prima la base: budget, fondo di emergenza, nessun debito a tasso alto.', 'Usa il 50/30/20 come guida iniziale e automatizza il risparmio nel giorno dello stipendio.', 'Tieni il fondo di emergenza su un conto sicuro e accessibile, non in asset rischiosi.', 'Ripagare una carta di credito al 20% equivale a un rendimento garantito del 20%.'])}`,
      q: [
        ['Quale debito di solito conviene ripagare PRIMA di investire?', ['Un prestito per studio al 3%', 'Una carta di credito al 20% l’anno', 'Nessuno, investi sempre prima', 'Un debito con un amico allo 0%'], 1, 'Il debito a tasso alto è una perdita garantita che batte i tipici rendimenti degli investimenti.'],
        ['Qual è il posto migliore per un fondo di emergenza?', ['Azioni', 'Crypto', 'Un conto di risparmio sicuro e facile da raggiungere', 'Azioni di una sola azienda'], 2, 'L’importante è che i soldi siano disponibili e stabili quando ti servono.'],
        ['Cosa significa “paga prima te stesso”?', ['Spendere per te prima di ogni altra cosa', 'Risparmiare automaticamente quando vieni pagato, prima di spendere', 'Indebitarsi per investire', 'Saltare il pagamento delle bollette'], 1, 'Il risparmio automatico nel giorno dello stipendio crea un’abitudine e toglie la tentazione di spendere.']
      ]
    },
    {
      id: 'f3', m: 10, t: 'Rischio, rendimento e tempo',
      hook: 'Perché rendimenti più alti arrivano sempre con scossoni, e come il tempo cambia l’equazione.',
      body: `
<p>Ecco la regola più importante della finanza: <b>un rendimento potenziale più alto arriva con un rischio più alto</b>. Se qualcuno ti offre un rendimento alto senza rischio, o sta mentendo o il prodotto sei tu.</p>

<h3>Cosa significa davvero rischio</h3>
<p>Nel parlare quotidiano, rischio vuol dire “potrei perdere soldi”. I professionisti guardano due cose:</p>
<ul>
<li><b>Volatilità</b>: quanto il prezzo salta in giro. Un fondo azionario può calare del 30% in un anno cattivo e riprendersi dopo. Questa è volatilità.</li>
<li><b>Perdita permanente</b>: i soldi sono andati per sempre. Un’azienda che fallisce, una truffa, una moneta che va a zero.</li>
</ul>
<p>La volatilità è il prezzo che paghi per rendimenti più alti. La perdita permanente è ciò che cerchi di evitare con la diversificazione e buone scelte.</p>

${B.w('ladder')}

<h3>Il tempo cambia tutto</h3>
<p>Il tuo <b>orizzonte temporale</b> è il tempo che manca a quando ti serviranno i soldi. Le azioni possono oscillare molto in un anno, ma su 15-20 anni i mercati azionari diversificati hanno storicamente premiato gli investitori pazienti. In 1 anno l’esito è vicino a un testa o croce. In 20 anni molto meno (anche se mai garantito).</p>
${B.key('<p><b>La regola pratica dei 5 anni.</b> I soldi che ti servono entro circa 5 anni non dovrebbero stare in asset volatili come azioni o crypto. Se arriva un crollo poco prima che ti servano, non avrai il tempo di recuperare.</p>')}

<h3>Tolleranza al rischio vs. capacità di rischio</h3>
<ul>
<li><b>Capacità di rischio</b>: quanta perdita puoi permetterti finanziariamente (reddito stabile, nessun debito, orizzonte lungo = capacità alta).</li>
<li><b>Tolleranza al rischio</b>: quanta perdita riesci a sopportare emotivamente senza vendere nel panico.</li>
</ul>
<p>Il tuo vero livello di rischio è il <i>più basso</i> dei due. Un giovane con un orizzonte lungo può avere una capacità alta, ma se un calo del 30% lo farebbe vendere tutto, la tolleranza è bassa e il piano deve rispettarla.</p>

${B.ex('<p>Pensa a una montagna russa e a un treno verso la stessa città. La montagna russa (azioni) è emozionante e piena di scossoni, e in un viaggio lungo può portarti più lontano. Il treno (obbligazioni, risparmio) è liscio ma più lento. Se hai la nausea sulle montagne russe e scendi a metà, non arrivi da nessuna parte. Scegli il viaggio che riesci a finire.</p>')}

<h3>Diversificazione: l’unico pranzo gratis</h3>
<p>Non mettere tutte le uova in un solo cesto. Distribuire i soldi su molte aziende, paesi e tipi di asset significa che un singolo disastro non può distruggerti. Gli economisti dicono che la diversificazione è la cosa più vicina a un pranzo gratis negli investimenti: riduce il rischio senza necessariamente ridurre il rendimento atteso. La praticherai nel percorso Investitore.</p>

${B.warn('<p>I rendimenti passati non sono una promessa. “L’anno scorso ha fatto +300%” non dice quasi nulla sull’anno prossimo, e inseguire il vincitore dell’anno scorso è uno degli errori più comuni dei principianti.</p>')}

${B.take(['Un rendimento atteso più alto arriva con un rischio più alto. Nessuna eccezione.', 'La volatilità è fatta di alti e bassi temporanei; la perdita permanente è il vero nemico.', 'I soldi che ti servono entro circa 5 anni non appartengono ad asset volatili.', 'Il tuo vero livello di rischio è il più basso tra la tua capacità finanziaria e la tua tolleranza emotiva.', 'La diversificazione riduce il rischio senza necessariamente ridurre il rendimento atteso.'])}`,
      q: [
        ['Un amico promette “20% l’anno, garantito, senza rischio”. La reazione più intelligente è…', ['Investire tutto in fretta', 'Essere molto sospettosi: rendimenti alti senza rischio non esistono', 'Chiedere uno sconto', 'Indebitarsi per investire di più'], 1, 'Rendimento e rischio viaggiano insieme. Rendimenti alti garantiti sono un classico segnale di truffa.'],
        ['Ti servono soldi per l’anticipo di una casa tra 2 anni. Cosa va meglio?', ['100% in una moneta crypto volatile', 'Soprattutto risparmio sicuro e stabile', '100% in una sola azione', 'Un’operazione a leva'], 1, 'Gli orizzonti brevi richiedono stabilità, così un crollo non rovina il piano poco prima che ti servano i soldi.'],
        ['Qual è la differenza tra capacità di rischio e tolleranza al rischio?', ['Sono la stessa cosa', 'La capacità è ciò che puoi permetterti di perdere; la tolleranza è ciò che reggi emotivamente', 'La capacità è emotiva; la tolleranza è finanziaria', 'La tolleranza conta solo per i trader'], 1, 'Contano entrambe. Il tuo limite reale è il più basso dei due.']
      ]
    },
    {
      id: 'f4', m: 11, t: 'La magia dell’interesse composto',
      hook: 'L’effetto palla di neve che trasforma piccole somme regolari in soldi seri, e perché cominciare presto conta più che cominciare in grande.',
      body: `
<p>L’<b>interesse composto</b> significa guadagnare rendimenti sui tuoi rendimenti. Immagina di far rotolare una piccola palla di neve lungo una collina lunga. All’inizio cresce appena. Più avanti, ogni giro aggiunge più neve perché c’è già molta neve a cui attaccarsi. Questa è la capitalizzazione.</p>

<h3>Semplice vs. composto</h3>
<p>Con l’interesse semplice, 1.000 € al 10% rendono 100 € l’anno, per sempre: dopo 10 anni hai 2.000 €. Con l’interesse composto, il 10% di ogni anno viene calcolato sull’importo <i>nuovo e più grande</i>: dopo 10 anni hai circa <b>2.594 €</b>. Dopo 30 anni, l’interesse semplice dà 4.000 € mentre la capitalizzazione dà circa <b>17.450 €</b>. Stesso tasso, stesso inizio, risultato radicalmente diverso.</p>

<h3>Gioca con la macchina</h3>
<p>Provaci: imposta un importo mensile, un rendimento e un numero di anni. Poi usa il cursore “attesa” per vedere cosa succede se cominci 10 anni dopo.</p>
${B.w('compound', { wait: 10 })}

${B.ex('<p><b>Anna contro Ben.</b> Anna inizia a investire 100 € al mese a 20 anni e si ferma a 30 (10 anni, 12.000 € versati) e non aggiunge mai più un centesimo. Ben aspetta i 30 anni e investe 100 € al mese fino ai 60 (30 anni, 36.000 € versati). Al 7% annuo, a 60 anni Anna può ritrovarsi con una cifra simile, o addirittura superiore, pur avendo versato un terzo. Perché? I suoi soldi hanno avuto 10 anni in più di palla di neve. Il tempo batte l’importo.</p>')}

<h3>Le tre leve della capitalizzazione</h3>
<ol>
<li><b>Tempo</b>: la leva più potente, e l’unica che non puoi ricomprare. Comincia ora, anche in piccolo.</li>
<li><b>Versamenti regolari</b>: aggiungere denaro con costanza continua ad alimentare la palla di neve.</li>
<li><b>Rendimento</b>: rendimenti più alti aiutano, ma arrivano con più rischio e costi. Non inseguirli a scapito delle prime due.</li>
</ol>

<h3>La capitalizzazione funziona anche contro di te</h3>
<p>Il debito della carta di credito al 20% si capitalizza contro di te. E anche i <b>costi</b>: un fondo che costa il 2% l’anno può mangiarsi gran parte del tuo risultato finale nell’arco di decenni (lo misureremo nel percorso Investitore).</p>

${B.key('<p><b>Il momento migliore per iniziare era ieri. Il secondo migliore è oggi.</b> I tuoi primi 50 € al mese contano più per il tuo futuro di una strategia perfetta che inizi tra cinque anni.</p>')}

${B.warn('<p>Gli investimenti reali non crescono in linea retta. Una “media del 7%” può significare +25% un anno e -15% quello dopo. La curva nel widget è un’illustrazione livellata. Non fare mai affidamento su un rendimento promesso.</p>')}

${B.take(['Capitalizzare significa guadagnare rendimenti sui rendimenti precedenti, quindi la crescita accelera col tempo.', 'Iniziare presto batte investire di più dopo: il tempo è la leva più forte.', 'Versamenti regolari più pazienza costruiscono ricchezza; aspettare il “momento perfetto” costa denaro.', 'La capitalizzazione funziona anche contro di te nei debiti e nei costi alti.'])}`,
      q: [
        ['Circa in quanto tempo raddoppiano i soldi all’8% annuo (regola del 72)?', ['4 anni', '9 anni', '15 anni', '20 anni'], 1, '72 ÷ 8 = 9 anni.'],
        ['Quale fattore è il PIÙ potente nella capitalizzazione?', ['Scegliere l’asset più in voga', 'Il tempo', 'Controllare i prezzi ogni giorno', 'Solo un grande importo iniziale'], 1, 'Il tempo permette alla crescita di costruirsi sulla crescita. Gli anni persi non si ricomprano.'],
        ['Perché un costo annuo del fondo del 2% può essere così dannoso nell’arco di decenni?', ['Viene addebitato una sola volta', 'Si capitalizza contro di te, riducendo la base che cresce ogni anno', 'È deducibile dalle tasse', 'Conta solo nei mercati ribassisti'], 1, 'I costi si pagano ogni anno, quindi perdi sia il costo sia tutta la crescita futura che quel denaro avrebbe reso.']
      ]
    },
    {
      id: 'f5', m: 13, t: 'La cassetta degli attrezzi dell’investitore: azioni, obbligazioni, fondi, ETF e altro',
      hook: 'Un giro in linguaggio semplice di tutto ciò in cui puoi investire, come ognuno fa guadagnare e cosa può andare storto.',
      body: `
<p>Nel tuo percorso di investitore incontrerai molti nomi. Ecco la cassetta degli attrezzi completa, spiegata in modo semplice.</p>

<h3>Le principali classi di attività</h3>
<ul>
<li><b>Liquidità e risparmio</b>: stabili, rendimento basso, protetti da garanzie sui depositi fino a un limite (nell’UE, di solito 100.000 € per banca).</li>
<li><b>Azioni</b>: possiedi un pezzetto di un’azienda. Guadagni dalla salita del prezzo e dai dividendi (una quota degli utili). Alto potenziale a lungo termine, grandi alti e bassi.</li>
<li><b>Obbligazioni</b>: presti denaro a uno Stato o a un’azienda e ricevi interessi regolari più i tuoi soldi alla fine. Di solito più tranquille delle azioni, ma i prezzi scendono quando salgono i tassi e le aziende possono non rimborsare.</li>
<li><b>Fondi ed ETF</b>: panieri che contengono molte azioni o obbligazioni insieme, così diversifichi con un solo acquisto.</li>
<li><b>Immobiliare</b>: immobili o società immobiliari quotate (REIT). Affitti più variazioni di prezzo. Importi grandi, difficili da vendere in fretta, spesso richiede un mutuo.</li>
<li><b>Materie prime e oro</b>: materiali grezzi. L’oro è spesso tenuto come “bene rifugio” e non produce reddito.</li>
<li><b>Cripto-attività</b>: asset digitali su blockchain, come Bitcoin ed Ethereum. Molto volatili, con in più rischi di sicurezza e truffe. I percorsi crypto li trattano in profondità.</li>
<li><b>Derivati</b> (futures, opzioni, CFD): contratti il cui valore dipende da un altro asset, spesso con leva. Avanzati, ad alto rischio e una delle principali cause di perdite per i principianti.</li>
</ul>

${B.tbl(['Asset', 'Come fa guadagnare', 'Rischio principale', 'Adatto a'], [
        ['Risparmio', 'Interessi', 'L’inflazione batte gli interessi', 'Emergenze, obiettivi a breve termine'],
        ['Azioni', 'Crescita del prezzo + dividendi', 'Forti cali, fallimento dell’azienda', 'Crescita a lungo termine (5+ anni)'],
        ['Obbligazioni', 'Pagamento di interessi', 'Aumento dei tassi, insolvenza', 'Stabilità, orizzonte medio'],
        ['ETF / fondi', 'Ciò che contengono', 'Come gli asset al loro interno, più i costi', 'Diversificazione facile'],
        ['Immobiliare', 'Affitto + crescita del prezzo', 'Poco liquido, debito, mercato locale', 'Orizzonte lungo, capitale maggiore'],
        ['Crypto', 'Variazioni di prezzo (soprattutto)', 'Volatilità estrema, truffe, hack', 'Solo una piccola posizione satellite'],
        ['Derivati / CFD', 'Scommesse sul prezzo con leva', 'Perdere più del previsto, in fretta', 'Solo trader esperti']
      ])}

<h3>Le obbligazioni in 30 secondi</h3>
<p>Immagina di prestare 1.000 € a uno Stato per 10 anni e che ti paghi il 3% (30 €) ogni anno, poi ti restituisca i tuoi 1.000 €. Semplice. Il problema: se le nuove obbligazioni iniziano a pagare il 5%, nessuno vuole la tua al 3% a prezzo pieno, quindi il suo prezzo scende. Ecco perché i prezzi delle obbligazioni e i tassi d’interesse si muovono in direzioni opposte.</p>

<h3>Le azioni in 30 secondi</h3>
<p>Se un’azienda ha 1.000.000 di azioni e tu ne possiedi 1.000, ne possiedi lo 0,1%. Se nel tempo l’azienda guadagna più utili, le azioni tendono a valere di più. Se fatica, possono scendere a nulla. Ecco perché raramente consigliamo di comprarne una sola.</p>

<h3>Dove si comprano?</h3>
<p>Ti serve un <b>broker</b> (un’azienda che esegue i tuoi ordini), una banca con servizi di investimento o un exchange di crypto. Scegline uno <b>regolamentato</b> nella tua regione, con costi bassi e che tenga i tuoi asset separati dai suoi. I titoli detenuti presso un broker sono normalmente segregati e coperti, come ultima risorsa, da un sistema di indennizzo degli investitori (nell’UE, spesso 20.000 €), ma questa non è una promessa che non perderai denaro per i cali di mercato.</p>

${B.warn('<p>Complessità non è sofisticazione. I prodotti con nomi eleganti, strutture “garantite”, commissioni alte o leva di solito arricchiscono il venditore, non te. Se non sai spiegare in una frase come fa guadagnare, non comprarlo.</p>')}

${B.take(['Ogni classe di attività fa guadagnare in modo diverso e ha rischi diversi.', 'Fondi ed ETF raggruppano molti asset così diversifichi subito.', 'I prezzi delle obbligazioni si muovono in senso opposto ai tassi d’interesse.', 'Derivati e CFD sono per trader esperti, non per principianti.', 'Usa un broker o una piattaforma regolamentati e capisci cosa compri.'])}`,
      q: [
        ['Cos’è un ETF?', ['Un tipo di moneta crypto', 'Un paniere di molti asset che puoi comprare come un unico prodotto in Borsa', 'Un conto di risparmio', 'Un prestito a un’azienda'], 1, 'Un fondo quotato in Borsa contiene molte azioni o obbligazioni, dando diversificazione immediata.'],
        ['Perché i prezzi delle obbligazioni di solito scendono quando salgono i tassi d’interesse?', ['Le obbligazioni smettono di pagare interessi', 'Le nuove obbligazioni pagano di più, quindi quelle vecchie che pagano meno valgono meno', 'Gli Stati vanno in default', 'L’inflazione sparisce'], 1, 'Gli investitori preferiscono i nuovi tassi più alti, quindi la vecchia obbligazione deve costare meno per essere competitiva.'],
        ['Quale prodotto è il PIÙ pericoloso per un principiante?', ['Un ETF su indice azionario globale', 'Un conto di risparmio', 'Un CFD a leva', 'Un titolo di Stato'], 2, 'I prodotti a leva possono produrre grandi perdite molto in fretta.']
      ]
    },
    {
      id: 'f6', m: 11, t: 'Il tuo cervello contro i tuoi soldi: bias e disciplina',
      hook: 'La minaccia più grande ai tuoi rendimenti non è il mercato. È la persona che ti guarda dallo specchio.',
      body: `
<p>Due investitori comprano lo stesso fondo. Uno ottiene buoni rendimenti. L’altro perde soldi. La differenza di solito è il comportamento: quando hanno comprato, quando sono andati nel panico, cosa hanno inseguito. Capire la tua mente è il vantaggio più economico che avrai mai.</p>

<h3>Le trappole mentali più comuni</h3>
<ul>
<li><b>Avversione alla perdita</b>: perdere 100 € fa male circa il doppio di quanto fa piacere guadagnare 100 €. Questo porta a vendere i vincenti troppo presto e a tenere i perdenti troppo a lungo, sperando di “tornare in pari”.</li>
<li><b>FOMO (paura di restare fuori)</b>: vedi una moneta salire dell’80% questa settimana e compri al massimo perché ne parlano tutti.</li>
<li><b>Comportamento da gregge</b>: fare ciò che fa la folla sembra sicuro, ma la folla spesso sbaglia agli estremi (euforia ai massimi, panico ai minimi).</li>
<li><b>Eccesso di fiducia</b>: qualche vittoria fortunata ti fa sentire un genio. I mercati sono molto bravi a rendere umili.</li>
<li><b>Bias di recenza</b>: credere che il passato recente continuerà per sempre. “Sale sempre” dopo un boom; “non si riprenderà mai” dopo un crollo.</li>
<li><b>Bias di conferma</b>: leggere solo le opinioni che concordano con ciò che già possiedi.</li>
<li><b>Fallacia dei costi sommersi</b>: rifiutarsi di vendere una posizione in perdita perché “ho già perso così tanto”.</li>
<li><b>Ancoraggio</b>: fissarsi sul prezzo pagato invece che su come appare l’asset oggi.</li>
</ul>

${B.ex('<p>Lena ha comprato una moneta a 10 € dopo che un amico le ha detto che sarebbe “andata a 100 €”. Scende a 5 €. Invece di chiedersi “la comprerei oggi a 5 €?” pensa “devo aspettare che torni a 10 €”. Il suo prezzo è ancorato all’acquisto. Mesi dopo è a 1 €. Il mercato non sa e non gli importa quanto abbia pagato.</p>')}

<h3>Gli antidoti: le regole battono le emozioni</h3>
<ol>
<li><b>Scrivi un piano prima di investire.</b> Cosa comprerai, quanto, con che frequenza e cosa farai in un crollo. Le decisioni prese con calma battono quelle prese nel panico.</li>
<li><b>Automatizza.</b> L’investimento mensile automatico elimina le decisioni di timing.</li>
<li><b>La regola delle 24 ore.</b> Non comprare mai qualcosa per una soffiata calda entro 24 ore da quando l’hai sentita.</li>
<li><b>Controlla meno.</b> Guardare i prezzi ogni giorno aumenta lo stress e le cattive decisioni. Gli investitori a lungo termine possono guardare una volta al mese o al trimestre.</li>
<li><b>Tieni un diario.</b> Scrivi perché hai comprato e cosa ti aspettavi. Rileggerlo dopo ti insegna più in fretta di qualsiasi libro.</li>
<li><b>Limita i “soldi per giocare”.</b> Se proprio devi speculare, limitati a una piccola fetta (per esempio il 5%) così gli errori non danneggiano i tuoi obiettivi.</li>
</ol>

<h3>La tua dieta informativa</h3>
<p>I social sono pieni di “finfluencer” che mostrano screenshot di grandi profitti. Ricorda il bias del sopravvissuto: vedi solo i vincitori che pubblicano. Fai tre domande a chiunque dia consigli: <b>Come viene pagato? Cosa sta vendendo? Posso vedere il suo storico completo e verificato, perdite incluse?</b> Fai particolare attenzione a chi promette certezze.</p>

${B.tryit('<p>Scrivi in una frase cosa farai se i tuoi investimenti calano del 30% l’anno prossimo. Salvala dove puoi ritrovarla. Quella frase è la tua prima politica d’investimento.</p>')}

${B.take(['Il comportamento, non l’intelligenza, decide la maggior parte dei risultati degli investimenti.', 'Conosci le trappole: avversione alla perdita, FOMO, comportamento da gregge, eccesso di fiducia, ancoraggio.', 'Usa regole scritte, automazione e un periodo di riflessione per proteggerti da te stesso.', 'Metti in dubbio ogni consiglio: come viene pagata questa persona?'])}`,
      q: [
        ['Continui a tenere un investimento in perdita solo perché “ho già perso così tanto”. Questa è…', ['Diversificazione', 'La fallacia dei costi sommersi', 'Capitalizzazione', 'Ribilanciamento'], 1, 'Le perdite passate sono andate comunque. L’unica domanda utile è se tenere l’asset da oggi in poi.'],
        ['Qual è una buona difesa contro la FOMO?', ['Comprare più in fretta', 'Un piano scritto e una regola di riflessione di 24 ore', 'Seguire più influencer', 'Controllare i prezzi ogni ora'], 1, 'Le regole decise con calma battono i sentimenti decisi nell’eccitazione.'],
        ['Perché fare attenzione agli screenshot di profitti sui social?', ['Sono sempre falsi', 'Bias del sopravvissuto: non vedi i perdenti né lo storico completo', 'Sono illegali', 'Dimostrano che la strategia funziona'], 1, 'Le persone pubblicano le vincite e nascondono le perdite, e alcuni screenshot sono inventati, quindi non sono prove.']
      ]
    }
  ]);
})();
