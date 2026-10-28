/* Percorso Day Trader: 8 lezioni */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('trd', [
    {
      id: 'b1', m: 11, t: 'Verifica della realtà: la verità sul day trading',
      hook: 'Prima di grafici e strategie, uno sguardo onesto su chi vince, chi perde e che cosa serve davvero.',
      body: `
<p>I social mostrano il day trading come portatili su spiagge e screenshot di profitti enormi. La realtà somiglia di più a una professione competitiva in cui la maggior parte dei principianti perde denaro. Questa lezione non è qui per spaventarti. È qui perché, se continui, tu lo faccia a occhi aperti e con un atteggiamento professionale.</p>

<h3>Che cosa conta come day trading?</h3>
<ul>
<li><b>Scalping</b>: operazioni che durano da secondi a minuti, puntando a guadagni minuscoli molte volte al giorno.</li>
<li><b>Day trading</b>: posizioni aperte e chiuse nello stesso giorno, nessuna tenuta durante la notte.</li>
<li><b>Swing trading</b>: posizioni tenute da pochi giorni a diverse settimane. Meno tempo davanti allo schermo, meno costi.</li>
<li><b>Position trading</b>: da settimane a mesi. È più vicino all’investimento.</li>
</ul>

<h3>Che cosa dicono le prove</h3>
<ul>
<li>Uno studio sul mercato di Taiwan (Barber, Lee, Liu e Odean) ha rilevato che meno dell’1% dei day trader guadagnava in modo prevedibile, al netto dei costi, anno dopo anno.</li>
<li>Uno studio sui day trader di futures in Brasile che sono andati avanti per più di 300 giorni ha rilevato che circa il 97% ha perso denaro.</li>
<li>I regolatori europei obbligano i broker a dichiarare che tipicamente <b>il 70-90% dei conti CFD con leva di clienti retail perde denaro</b>.</li>
</ul>

<h3>Perché la maggior parte delle persone perde</h3>
<ol>
<li><b>Il trading è un gioco a somma zero prima dei costi e a somma negativa dopo i costi.</b> Ogni profitto ha un perdente dall’altra parte, e commissioni, spread e tasse escono dal totale.</li>
<li><b>Competi con professionisti e algoritmi</b> con dati migliori, esecuzione più rapida e più capitale.</li>
<li>La <b>leva</b> amplifica gli errori più in fretta di quanto si sviluppi l’abilità.</li>
<li><b>Psicologia</b>: paura, avidità, noia e la voglia di “rifarsi”.</li>
<li><b>Nessun vantaggio, nessuna regola di rischio, nessun piano</b>: gioco d’azzardo con passaggi in più.</li>
</ol>
${B.warn('<p>Se un corso, un influencer o un robot promette profitti “garantiti” o “giornalieri e costanti”, trattalo come un campanello d’allarme. Nessun professionista onesto garantisce risultati di trading. Qualsiasi prodotto formativo, compresi quelli facoltativi menzionati più avanti in questo corso, può aiutarti a imparare e a strutturare il tuo lavoro, ma il rischio di perdita resta tuo.</p>')}

<h3>Il trading è un’attività, non un hobby</h3>
<p>I professionisti trattano il trading come una piccola azienda: capitale, regole, registrazioni, costi, tasse e un budget di perdite. Si aspettano di sbagliare spesso, e guadagnano perché i guadagni sono più grandi delle perdite e perché non rischiano mai troppo su una sola idea.</p>

<h3>Di che cosa hai realisticamente bisogno</h3>
<ul>
<li><b>Capitale di rischio</b>: denaro che puoi davvero permetterti di perdere. Non l’affitto, non i risparmi, non denaro preso in prestito.</li>
<li><b>Tempo</b>: il day trading serio è quasi un lavoro a tempo pieno durante gli orari di mercato, più preparazione e revisione.</li>
<li><b>Un vantaggio testato</b>: un modo ripetibile di avere ragione un po’ più spesso, o di vincere più di quanto perdi, al netto dei costi.</li>
<li><b>Processo</b>: regole scritte, un diario, una routine di revisione.</li>
<li><b>Una base stabile</b>: un reddito o investimenti al di fuori del trading, così la pressione non distorce le tue decisioni.</li>
</ul>

${B.ex('<p>Immagina due persone che iniziano con 5.000 € ciascuna. Alex rischia 250 € (5%) a ogni operazione inseguendo grandi vincite e perde sei operazioni di fila: -26%. Sam rischia 25 € (0,5%) per operazione e perde le stesse sei: -3%. Sam è ancora calmo, ancora nel gioco e continua a imparare. Alex è in tilt e sta per peggiorare le cose. Sopravvivere è la prima abilità.</p>')}

<h3>Una strada sensata</h3>
<ol>
<li>Costruisci prima la tua base di investimento. La maggior parte delle persone dovrebbe investire e fare trading solo con una piccola fetta (per esempio meno del 5-10% del proprio patrimonio).</li>
<li>Impara il mestiere in questo percorso.</li>
<li>Esercitati su un simulatore per almeno 100 operazioni.</li>
<li>Fai trading reale con dimensioni minuscole. Dimostra di saper seguire le tue regole prima di aumentare.</li>
</ol>

${B.w('checklist', { key: 'b1', title: 'Sono pronto anche solo a iniziare a imparare il trading?', accent: 'trd', items: 'Ho un fondo di emergenza e nessun debito a tasso alto|Il denaro con cui faccio trading è denaro che posso perdere completamente|Capisco che la maggior parte dei principianti perde denaro e lo accetto|Farò paper trading per almeno 100 operazioni prima di rischiare denaro reale|Scriverò delle regole e terrò un diario|Non sto cercando di risolvere un’emergenza finanziaria con il trading' })}

${B.take(['La maggior parte dei day trader perde denaro; costi e leva rendono tutto più difficile.', 'Tratta il trading come un’attività con capitale di rischio, regole e registrazioni.', 'Non fare mai trading con denaro che ti serve. Prima sopravvivere, poi guadagnare.', 'Esercitati su un simulatore, poi fai trading con dimensioni minuscole prima di aumentare.'])}`,
      q: [
        ['Perché il trading è descritto come “a somma negativa” al netto dei costi?', ['Perché i mercati scendono sempre', 'Perché ogni vincitore ha un perdente e i costi escono dal totale', 'Perché i broker prestano denaro', 'Perché le azioni non si muovono'], 1, 'Spread, commissioni e tasse riducono il totale disponibile per tutti i trader.'],
        ['Quale denaro è adatto al trading?', ['L’affitto del prossimo mese', 'Denaro preso in prestito', 'Capitale di rischio che puoi permetterti di perdere', 'Il tuo fondo di emergenza'], 2, 'Solo il denaro che puoi perdere senza danneggiare la tua vita appartiene alla speculazione.'],
        ['Qual è un sano primo passo dopo aver imparato le basi del trading?', ['Usare la leva massima', 'Esercitarsi su un simulatore per più di 100 operazioni', 'Lasciare il lavoro', 'Seguire i venditori di segnali'], 1, 'Un simulatore ti permette di imparare dagli errori a costo zero.']
      ]
    },
    {
      id: 'b2', m: 14, t: 'Come funzionano i mercati: ordini, spread e leva',
      hook: 'Che cosa succede davvero tra il tuo clic su “compra” e l’operazione. Capisci l’idraulica così non ti sorprende.',
      body: `
<p>Un mercato è un luogo in cui si incontrano compratori e venditori. I prezzi si muovono per l’equilibrio tra questi due gruppi. Per fare buon trading devi capire i meccanismi che decidono il prezzo che ottieni davvero.</p>

<h3>Bid, ask e spread</h3>
<p>Ogni strumento ha due prezzi in tempo reale: il <b>bid</b> (il prezzo più alto che i compratori pagano, ciò che ricevi quando vendi) e l’<b>ask</b> (il prezzo più basso che i venditori vogliono, ciò che paghi quando compri). La differenza è lo <b>spread</b>.</p>
${B.ex('<p>Un’azione mostra bid 49,98 € e ask 50,02 €. Compri 200 azioni a 50,02 € (10.004 €). Se vendi subito, ottieni 49,98 € (9.996 €). Hai appena perso 8 € senza fare nulla. È il costo dello spread, oltre a qualsiasi commissione. Uno scalper che fa 20 operazioni al giorno lo paga 20 volte, quindi il mercato deve muoversi più del costo solo perché tu pareggi.</p>')}

<h3>Liquidità, volume e slippage</h3>
<ul>
<li><b>Liquidità</b>: quanto facilmente puoi comprare o vendere senza muovere il prezzo. Le grandi azioni e le principali coppie di valute sono molto liquide; le piccole azioni e i token oscuri no.</li>
<li><b>Volume</b>: quante unità sono state scambiate. Un volume più alto significa di solito spread più stretti e movimenti di prezzo più affidabili.</li>
<li><b>Slippage</b>: la differenza tra il prezzo che ti aspettavi e quello che hai ottenuto, soprattutto in mercati veloci o con ordini grandi.</li>
</ul>

<h3>Tipi di ordine</h3>
${B.tbl(['Ordine', 'Che cosa fa', 'Attenzione'], [
        ['A mercato', 'Compra o vende subito al miglior prezzo disponibile', 'Il prezzo può slittare in mercati veloci o sottili'],
        ['Limite', 'Compra o vende solo al tuo prezzo o meglio', 'Può non essere mai eseguito se il prezzo non lo raggiunge'],
        ['Stop (stop-loss)', 'Diventa un ordine a mercato quando il prezzo tocca il tuo livello di stop', 'Può essere eseguito peggio dello stop in caso di gap'],
        ['Stop-limit', 'Diventa un ordine limite al livello dello stop', 'Può non essere eseguito affatto in un movimento rapido'],
        ['Trailing stop', 'Stop che segue il prezzo a una distanza fissata', 'Troppo stretto e il rumore normale ti butta fuori']
      ])}

<h3>Long, short e leva</h3>
<ul>
<li><b>Andare long</b>: compri, sperando che il prezzo salga.</li>
<li><b>Andare short</b>: vendi qualcosa che hai preso in prestito, sperando di ricomprarlo a meno. Le perdite su uno short sono teoricamente illimitate perché il prezzo può continuare a salire.</li>
<li><b>Margine e leva</b>: il broker ti lascia controllare una posizione più grande del tuo denaro. Con leva 10:1, 1.000 € controllano 10.000 €, quindi un movimento del 10% contro di te azzera l’intero deposito.</li>
</ul>
<p>Nell’UE, i regolatori limitano la leva per i clienti retail sui prodotti con leva (CFD): 30:1 per le principali coppie di valute, 20:1 per le altre coppie, l’oro e i principali indici, 10:1 per le altre materie prime e indici, 5:1 per le azioni singole e 2:1 per le cripto-attività. I broker devono anche chiudere le posizioni quando il margine scende al 50% e fornire la protezione dal saldo negativo ai clienti retail. Altri paesi hanno regole diverse. Negli Stati Uniti, i conti che fanno day trading con frequenza hanno storicamente avuto un requisito minimo di capitale, e queste regole sono in revisione, quindi verifica sempre la normativa attuale con il tuo broker.</p>

<h3>Strumenti su cui puoi fare day trading</h3>
<ul>
<li><b>Azioni ed ETF</b>: semplici, trasparenti, spesso con commissioni.</li>
<li><b>Forex</b>: coppie di valute, aperto 24 ore nei giorni feriali, con leva.</li>
<li><b>Futures</b>: contratti standardizzati su indici, materie prime e tassi. Molto liquidi, con molta leva.</li>
<li><b>Opzioni</b>: contratti che danno il diritto di comprare o vendere più tardi. Complesse e non per principianti.</li>
<li><b>CFD</b>: contratti per differenza. Un accordo con leva con un broker anziché la proprietà. Disponibilità e regole variano da paese a paese e comportano un rischio elevato.</li>
</ul>

<h3>Quando i mercati sono movimentati</h3>
<p>La maggior parte del day trading avviene vicino all’apertura e alla chiusura di una sessione, quando volume e volatilità sono più alti. La metà della giornata è spesso più calma e irregolare. La pubblicazione di dati economici (occupazione, inflazione, decisioni delle banche centrali) causa picchi improvvisi e spread più ampi, quindi molti trader li evitano o riducono la dimensione in quei momenti.</p>

${B.warn('<p>La leva è la causa numero uno dei conti distrutti. Non ti rende più intelligente né il mercato più gentile, accelera solo qualsiasi cosa accada.</p>')}

${B.take(['Compri all’ask e vendi al bid; lo spread è un costo reale a ogni operazione.', 'Liquidità e volume decidono con quanta facilità e a che costo puoi operare.', 'Impara i tipi di ordine: il limite dà controllo del prezzo, lo stop-loss limita il rischio ma può slittare.', 'La leva moltiplica guadagni e perdite; i regolatori la limitano per una ragione.'])}`,
      q: [
        ['Paghi l’ask e ricevi il bid. La differenza tra i due è…', ['La commissione', 'Lo spread', 'Lo slippage', 'Il margine'], 1, 'Lo spread è un costo incorporato ogni volta che compri e vendi.'],
        ['Con leva 20:1, un movimento di quanto contro di te può azzerare il tuo deposito (approssimativamente)?', ['20%', '5%', '50%', '1%'], 1, '100% ÷ 20 = 5%, prima di commissioni e regole di margine.'],
        ['Quale ordine ti permette di controllare il prezzo massimo che paghi?', ['Ordine a mercato', 'Ordine limite', 'Stop-loss', 'Trailing stop'], 1, 'Un ordine limite si esegue solo al tuo prezzo o meglio, ma potrebbe non essere eseguito.']
      ]
    },
    {
      id: 'b3', m: 13, t: 'Leggere i grafici dei prezzi: candele, trend e livelli',
      hook: 'Impara il linguaggio visivo del prezzo e leggi la storia che racconta ogni candela.',
      body: `
<p>Un grafico dei prezzi è il registro della battaglia tra compratori e venditori. Il tipo più popolare è il <b>grafico a candele giapponesi</b>, inventato secoli fa da mercanti di riso giapponesi. Ogni candela riassume un periodo (un minuto, un’ora, un giorno).</p>

<h3>Anatomia di una candela</h3>
<ul>
<li><b>Apertura</b>: prezzo all’inizio del periodo.</li>
<li><b>Chiusura</b>: prezzo alla fine.</li>
<li><b>Massimo / Minimo</b>: gli estremi, disegnati come linee sottili chiamate ombre o stoppini.</li>
<li>Il <b>corpo</b> è il rettangolo tra apertura e chiusura. Verde (o vuoto) significa chiusura sopra l’apertura; rosso significa chiusura sotto l’apertura.</li>
</ul>
<p>Costruiscine una tu e guarda come le forme cambiano significato:</p>
${B.w('candles')}

<h3>Trend: la direzione del mercato</h3>
<p>Il concetto più semplice e utile è il <b>trend</b>.</p>
<ul>
<li><b>Trend rialzista</b>: una scala di massimi più alti e minimi più alti.</li>
<li><b>Trend ribassista</b>: massimi più bassi e minimi più bassi.</li>
<li><b>Range (laterale)</b>: il prezzo rimbalza tra un pavimento e un soffitto.</li>
</ul>
${B.key('<p><b>“Il trend è tuo amico.”</b> Operare nella direzione del trend più ampio dà di solito probabilità migliori che combatterlo. La maggior parte dei principianti prova a indovinare massimi e minimi, e viene travolta.</p>')}

<h3>Supporto e resistenza</h3>
<p>Il <b>supporto</b> è un’area di prezzo in cui i compratori sono intervenuti ripetutamente, come un pavimento. La <b>resistenza</b> è dove i venditori sono apparsi ripetutamente, come un soffitto. Sono zone, non linee esatte. Quando il prezzo le rompe, la vecchia resistenza diventa spesso il nuovo supporto (e viceversa). Poiché molti trader guardano gli stessi livelli evidenti, tendono a contare.</p>

<h3>Volume: la conferma</h3>
<p>Un movimento con volume forte mostra ampia partecipazione ed è più affidabile. Una rottura con volume debole spesso fallisce. Cerca un volume che sale nella direzione del trend e si prosciuga nei ritracciamenti.</p>

<h3>Timeframe</h3>
<p>Ogni grafico può essere visto su timeframe diversi (1 minuto, 5 minuti, 1 ora, giornaliero). I professionisti usano l’<b>analisi multi-timeframe</b>: controllano il grafico giornaliero per trend e livelli chiave, poi usano un grafico più piccolo (come 5 o 15 minuti) per cronometrare le entrate. Un pattern su un grafico da 1 minuto è molto meno affidabile che su un grafico giornaliero.</p>

<h3>Segnali di candela comuni (da usare con cautela)</h3>
<ul>
<li><b>Doji</b>: apertura e chiusura quasi uguali. Indecisione.</li>
<li><b>Hammer / pin bar</b>: lungo stoppino inferiore. Possibile rifiuto dei prezzi più bassi.</li>
<li><b>Shooting star</b>: lungo stoppino superiore. Possibile rifiuto dei prezzi più alti.</li>
<li><b>Engulfing</b>: una candela il cui corpo copre interamente quello della candela precedente. Possibile cambio di controllo.</li>
</ul>
${B.warn('<p>Nessun pattern di candele funziona da solo. Il suo significato dipende dal <b>contesto</b>: dove appare (a un livello chiave?), in quale trend si trova e il volume che lo accompagna. Un “hammer” in mezzo al nulla non significa quasi niente.</p>')}

${B.ex('<p>Un’azione è salita a scalini puliti per due settimane. Ritraccia fino a un precedente livello di resistenza che ora funge da supporto, forma lì una candela hammer con volume superiore alla media, e la candela successiva chiude in rialzo. Quella combinazione (trend + supporto + candela di rifiuto + volume) è una storia molto più forte di qualsiasi singolo elemento.</p>')}

${B.take(['Una candela mostra apertura, massimo, minimo e chiusura di un periodo.', 'Identifica prima il trend (massimi e minimi più alti, o più bassi), poi i livelli.', 'Supporto e resistenza sono zone in cui il prezzo ha già reagito.', 'Il volume conferma i movimenti, e i timeframe più grandi pesano di più.', 'I pattern di candele hanno bisogno di contesto per significare qualcosa.'])}`,
      q: [
        ['Una candela ha uno stoppino inferiore lungo e un corpo piccolo vicino alla cima. Questa forma si chiama…', ['Una candela tipo hammer', 'Una shooting star', 'Un gap', 'Una linea di tendenza'], 0, 'Ombra inferiore lunga con corpo piccolo è un hammer, che suggerisce il rifiuto dei prezzi più bassi.'],
        ['Che cosa definisce un trend rialzista?', ['Prezzo sopra zero', 'Massimi più alti e minimi più alti', 'Massimi più bassi e minimi più bassi', 'Solo candele verdi'], 1, 'La scala di massimi e minimi crescenti è la definizione di base.'],
        ['Perché usare più timeframe?', ['Per confonderti', 'I timeframe più alti mostrano il trend principale e i livelli chiave; quelli più bassi aiutano a cronometrare le entrate', 'Perché i broker lo richiedono', 'Danno sempre segnali identici'], 1, 'Il contesto generale migliora le entrate ed evita di operare contro trend forti.']
      ]
    },
    {
      id: 'b4', m: 12, t: 'Indicatori e strumenti (e i loro limiti)',
      hook: 'Medie mobili, RSI, MACD e compagni: che cosa misurano, come li usano i trader e perché di più non è meglio.',
      body: `
<p>Gli indicatori sono formule matematiche applicate al prezzo (e talvolta al volume) per rendere più facili da vedere i pattern. Sono strumenti per <b>descrivere</b> ciò che è accaduto, non sfere di cristallo. Poiché usano dati passati, tutti ritardano in qualche misura rispetto al prezzo.</p>

<h3>I cinque essenziali (più uno)</h3>
${B.tbl(['Indicatore', 'Che cosa mostra', 'Uso comune', 'Limiti'], [
        ['Media mobile (SMA / EMA)', 'Prezzo medio su N periodi. L’EMA reagisce più in fretta', 'Direzione del trend; supporto dinamico; incroci (es. 50 contro 200)', 'Ritarda; falsi segnali nei range'],
        ['RSI (14)', 'Momentum da 0 a 100', 'Sopra 70 “ipercomprato”, sotto 30 “ipervenduto”; divergenze', 'Nei trend forti l’RSI può restare “ipercomprato” a lungo'],
        ['MACD (12, 26, 9)', 'Differenza tra due EMA e la sua linea di segnale', 'Cambi di momentum e forza del trend', 'Ritarda; rumoroso nei range'],
        ['Bande di Bollinger (20, 2)', 'Media mobile ± 2 deviazioni standard', 'Compressioni ed espansioni di volatilità', 'Toccare una banda non è un’inversione automatica'],
        ['VWAP', 'Prezzo medio ponderato per il volume della giornata', '“Valore equo” intraday; le istituzioni lo usano come riferimento', 'Solo intraday; si azzera ogni giorno'],
        ['ATR (14)', 'Average true range: ampiezza tipica del movimento', 'Impostare la distanza dello stop e la dimensione della posizione', 'Non mostra la direzione']
      ])}

<h3>Le medie mobili in pratica</h3>
<p>La pendenza di una media mobile dà una lettura rapida del trend: un prezzo sopra una EMA 20 o 50 in salita suggerisce un trend rialzista. Nel laboratorio di paper trading più avanti puoi attivare una media a 20 candele per vedere come il prezzo tende a rispettarla. Una “golden cross” (media a 50 giorni che incrocia sopra quella a 200 giorni) e una “death cross” (l’opposto) sono molto osservate, ma arrivano tardi. Quando compaiono, spesso gran parte del movimento è già avvenuta.</p>

<h3>L’RSI usato bene</h3>
<p>I principianti vedono l’RSI sopra 70 e vendono subito. È una trappola classica: nei forti trend rialzisti l’RSI può restare sopra 70 per settimane. Un uso migliore è cercare la <b>divergenza</b>: il prezzo fa un massimo più alto, ma l’RSI fa un massimo più basso, segnalando un momentum che si indebolisce. Anche allora, aspetta che il prezzo confermi.</p>

<h3>L’ATR per stop e dimensione</h3>
<p>Se l’ATR di un’azione è 1,50 €, il movimento normale è circa 1,50 € per periodo. Mettere lo stop a 0,30 € di distanza significa che il rumore normale lo colpirà. Uno stop di 1-2 volte l’ATR oltre un punto strutturale sensato sopravvive meglio al rumore. Uno stop più largo significa una posizione più piccola, così il rischio in euro resta costante.</p>

<h3>Perché più indicatori ti rendono peggiore</h3>
<p>Molti indicatori sono viste diverse degli stessi dati di prezzo. Impilare cinque indicatori di momentum non dà cinque conferme indipendenti. Dà lo stesso segnale cinque volte, più confusione quando sono in disaccordo. I trader esperti usano di solito <b>price action più due o tre strumenti semplici</b>.</p>
${B.ex('<p>Chris ha 9 indicatori sul grafico: 3 dicono compra, 4 vendi e 2 neutro. Aspetta e perde il movimento. Dana usa una EMA 20 per il trend, il volume e i livelli chiave. Quando il prezzo ritraccia verso la EMA 20 in un trend rialzista con volume in calo, cerca un’entrata. Semplice, ripetibile, facile da testare.</p>')}

${B.tip('<p>Prima di aggiungere un indicatore, scrivi la domanda specifica a cui risponde (trend? momentum? volatilità?). Se non riesci, toglilo.</p>')}

${B.take(['Gli indicatori riassumono il prezzo passato; nessuno prevede il futuro.', 'Conosci il compito di ciascuno: trend (medie mobili), momentum (RSI, MACD), volatilità (ATR, Bollinger), valore equo (VWAP).', 'RSI “ipercomprato” non è un segnale di vendita in un trend forte.', 'Usa l’ATR per mettere gli stop fuori dal rumore normale e dimensionare bene le posizioni.', 'Pochi strumenti semplici battono grafici ingombri.'])}`,
      q: [
        ['A che cosa serve l’ATR?', ['Prevedere la direzione', 'Misurare il movimento tipico del prezzo per impostare stop e dimensione della posizione', 'Garantire profitto', 'Trovare notizie'], 1, 'L’ATR misura la volatilità, il che aiuta a dimensionare con criterio gli stop.'],
        ['Perché un RSI sopra 70 può essere un cattivo segnale di vendita automatico?', ['Non supera mai 70', 'Nei forti trend rialzisti può restare alto a lungo mentre il prezzo continua a salire', 'È rotto', 'Perché 70 è sempre sbagliato'], 1, 'Le letture di ipercomprato possono persistere nei trend forti.'],
        ['Qual è il problema dell’impilare molti indicatori simili?', ['Sono troppo economici', 'Danno ripetutamente la stessa informazione e creano confusione quando sono in disaccordo', 'Rallentano solo il computer', 'Non c’è nessun problema'], 1, 'Derivano dagli stessi dati di prezzo, quindi non sono conferme indipendenti.']
      ]
    },
    {
      id: 'b5', m: 14, t: 'Strategie di trading: trova lo stile adatto a te',
      hook: 'Trend, ritracciamento, rottura, range, rottura dell’apertura: come funziona ciascuna, dove fallisce e come testarla prima di rischiare un centesimo.',
      body: `
<p>Una <b>strategia</b> è un insieme completo di regole: che cosa negozi, quando entri, dove metti lo stop, dove prendi profitto e quanto è grande la posizione. Operare senza regole è tirare a indovinare. Ecco gli stili classici.</p>

<h3>1. Trend following</h3>
<p><b>Idea:</b> i trend tendono a continuare. Compra la forza in un trend rialzista, vendi la debolezza in uno ribassista.<br><b>Entrata:</b> il prezzo rompe un massimo recente con una media mobile in salita.<br><b>Stop:</b> sotto l’ultimo minimo più alto.<br><b>Fallisce quando:</b> i mercati vanno di lato. Aspettati molte piccole perdite e pochi grandi guadagni, con una percentuale di successo più bassa.</p>

<h3>2. Pullback (comprare il ribasso in un trend)</h3>
<p><b>Idea:</b> in un trend forte, brevi ribassi offrono entrate migliori.<br><b>Entrata:</b> il prezzo ritraccia verso una media mobile o un supporto in un trend rialzista e mostra una candela di inversione.<br><b>Stop:</b> sotto il minimo del ritracciamento.<br><b>Fallisce quando:</b> il ritracciamento diventa un’inversione di trend.</p>

<h3>3. Breakout (rottura)</h3>
<p><b>Idea:</b> dopo un consolidamento, il prezzo esplode fuori dal suo range.<br><b>Entrata:</b> una chiusura sopra la resistenza con volume alto (o un retest del livello rotto).<br><b>Stop:</b> di nuovo dentro il range.<br><b>Fallisce quando:</b> ci sono false rotture (il prezzo sfonda e ricade). Aspetta conferma e volume.</p>

<h3>4. Trading di range / ritorno alla media</h3>
<p><b>Idea:</b> quando non c’è trend, il prezzo torna verso il centro. Vendi vicino alla resistenza, compra vicino al supporto.<br><b>Stop:</b> appena fuori dal range.<br><b>Fallisce quando:</b> il range alla fine si rompe e inizia il trend, ed è per questo che lo stop è obbligatorio.</p>

<h3>5. Rottura del range di apertura</h3>
<p><b>Idea:</b> segna massimo e minimo dei primi 15-30 minuti dopo l’apertura del mercato. Una rottura di un lato con volume può portare a un movimento che dura tutto il giorno.<br><b>Stop:</b> l’altro lato o la metà del range.<br><b>Fallisce quando:</b> il mercato è indeciso in un giorno tranquillo di notizie.</p>

<h3>6. Scalping</h3>
<p><b>Idea:</b> tanti piccolissimi profitti su movimenti molto brevi. Richiede spread stretti, esecuzione veloce, commissioni basse e concentrazione intensa. I costi divorano gli scalper, ed è molto improbabile che un principiante sia in profitto.</p>

<h3>Operazioni su notizie e utili</h3>
<p>I prezzi saltano attorno alle pubblicazioni, gli spread si allargano e lo slippage sale. È uno stile avanzato. La maggior parte dei principianti dovrebbe semplicemente stare fuori dalle posizioni durante gli eventi importanti.</p>

<h3>Scegliere uno stile</h3>
${B.tbl(['Stile', 'Percentuale di successo', 'Dimensione dei guadagni', 'Tempo davanti allo schermo', 'Fa per te se…'], [
        ['Trend following', 'Più bassa (35-45%)', 'Grande', 'Basso-medio', 'Sei paziente e accetti piccole perdite'],
        ['Pullback', 'Media', 'Media', 'Medio', 'Ti piace aspettare un buon prezzo'],
        ['Breakout', 'Media-bassa', 'Media-grande', 'Medio', 'Reggi le false rotture'],
        ['Range', 'Più alta (50-65%)', 'Piccola', 'Medio', 'Preferisci piccoli guadagni frequenti e stop rigorosi'],
        ['Scalping', 'Variabile', 'Minuscola', 'Molto alto', 'Quasi mai una scelta da principiante']
      ])}

<h3>Scrivi il regolamento (un modello di setup)</h3>
<ol>
<li><b>Condizione di mercato</b>: che cosa deve essere vero? (es. trend rialzista giornaliero)</li>
<li><b>Trigger</b>: l’evento esatto per entrare (es. chiusura sopra il massimo della candela precedente dopo un ritracciamento)</li>
<li><b>Stop-loss</b>: regola di prezzo esatta</li>
<li><b>Obiettivo / uscita</b>: multiplo fisso del rischio, trailing o livello</li>
<li><b>Dimensione della posizione</b>: % di rischio ÷ distanza dello stop</li>
<li><b>Quando NON operare</b>: notizie importanti, volume basso, dopo aver raggiunto la perdita giornaliera</li>
</ol>

<h3>Basi del backtesting</h3>
<p>Il <b>backtesting</b> significa applicare le tue regole a dati passati per vedere come sarebbero andate. Fatto bene è molto utile. Fatto male crea falsa fiducia:</p>
<ul>
<li>Includi i costi: spread, commissioni e slippage.</li>
<li>Usa abbastanza operazioni (100+). Dieci operazioni non dimostrano nulla.</li>
<li>Evita l’<b>overfitting</b>: non ritoccare all’infinito i parametri finché il passato sembra perfetto. Testa su dati che non hai usato per progettare le regole (“fuori campione”).</li>
<li>Evita il <b>look-ahead bias</b>: non usare informazioni che non erano disponibili in quel momento.</li>
<li>Prosegui con test in avanti (paper trading) prima del denaro reale.</li>
</ul>

${B.warn('<p>Una strategia che ha funzionato in un mercato rialzista può fallire in un range o in un crollo. I mercati cambiano regime. Aspettati che il tuo vantaggio richieda manutenzione.</p>')}

${B.take(['Una strategia è un regolamento completo: condizione di mercato, trigger, stop, uscita, dimensione e quando non operare.', 'Le strategie di trend e pullback vincono meno spesso ma di più; quelle di range vincono più spesso ma di meno.', 'Fai il backtest con costi e abbastanza operazioni, evita l’overfitting, poi fai paper trading.', 'Scegli uno stile semplice e padroneggialo invece di saltare tra molti.'])}`,
      q: [
        ['Un sistema di trend following ha tipicamente…', ['Una percentuale di successo molto alta e guadagni minuscoli', 'Una percentuale di successo più bassa ma guadagni più grandi delle perdite', 'Nessuno stop-loss', 'Zero operazioni in perdita'], 1, 'Accetta molte piccole perdite per cogliere pochi grandi movimenti.'],
        ['Che cos’è l’overfitting nel backtesting?', ['Usare troppo pochi indicatori', 'Regolare le regole finché si adattano perfettamente ai dati passati, ma falliscono sui dati nuovi', 'Operare troppo poco', 'Usare un conto demo'], 1, 'Le regole catturano il rumore passato anziché un vero vantaggio.'],
        ['Quale è una parte obbligatoria di qualsiasi strategia di breakout o di range?', ['Uno stop-loss', 'Profitto garantito', 'Il consiglio di un amico', 'Leva massima'], 0, 'Ogni strategia può fallire; lo stop definisce la tua perdita massima.']
      ]
    },
    {
      id: 'b6', m: 16, t: 'Gestione del rischio: l’unico vantaggio che controlli del tutto',
      hook: 'Non puoi controllare il mercato, ma puoi controllare quanto perdi quando sbagli. Due calcolatori ti mostreranno perché questo fa vincere le carriere.',
      body: `
<p>Chiedi ai trader professionisti che cosa separa i sopravvissuti dagli altri e la risposta è quasi sempre la stessa: la <b>gestione del rischio</b>. Puoi avere una strategia mediocre e sopravvivere con un buon controllo del rischio. Non puoi sopravvivere con un’ottima strategia e un cattivo controllo del rischio.</p>

<h3>Regola 1: Rischia una piccola percentuale fissa per operazione</h3>
<p>La regola più comune è rischiare <b>lo 0,5-1% del conto</b> su una singola operazione (2% al massimo). Se hai 5.000 € e rischi l’1%, il massimo che perdi su un’operazione è 50 €. Questo rende sopportabili le serie di perdite.</p>
${B.ex('<p>Sette perdite di fila sembrano estreme, ma capitano a ogni trader. Se rischi l’1% ogni volta, il conto scende di circa il 7%. Se rischi il 10% ogni volta, scende di circa il 52% e ti serve un guadagno del 109% solo per recuperare. La dimensione della posizione è come resti nel gioco mentre impari.</p>')}

<h3>Regola 2: Lo stop decide la dimensione</h3>
<p>Prima decidi dove l’operazione si dimostra sbagliata (lo stop), e <i>poi</i> calcoli quante unità comprare in modo che toccare lo stop costi solo il rischio scelto. La formula:</p>
<p><b>Dimensione della posizione = (conto × % di rischio) ÷ (prezzo di entrata − prezzo dello stop)</b></p>
${B.w('possize')}

<h3>Regola 3: Pensa in R</h3>
<p>1R è uguale al tuo rischio iniziale su un’operazione. Se rischi 50 € e guadagni 100 €, sono +2R. Misurare in R rende i risultati confrontabili tra operazioni e dimensioni del conto. Ti permette anche di definire il rapporto guadagno/rischio prima di entrare: prendi solo operazioni che rendono almeno 1,5-2R se hai ragione.</p>

<h3>Regola 4: Conosci la tua aspettativa</h3>
<p>L’<b>aspettativa</b> è il risultato medio per operazione in R. <b>Aspettativa = (percentuale di successo × guadagno medio in R) − (percentuale di perdita × 1R)</b>. Per esempio, 40% di successo con guadagni di 2R: 0,4×2 − 0,6×1 = +0,2R per operazione. È redditizio anche se perdi il 60% delle volte. Se vinci il 60% ma i tuoi guadagni sono 0,5R: 0,6×0,5 − 0,4 = −0,1R. Vinci spesso eppure perdi denaro.</p>
${B.w('expectancy')}

<h3>Regola 5: Rispetta la matematica del drawdown</h3>
<p>Le perdite fanno più male di quanto aiutino i guadagni, perché recuperi da una base più piccola:</p>
${B.tbl(['Perdita del conto', 'Guadagno necessario per tornare in pari'], [['-10%', '+11%'], ['-20%', '+25%'], ['-30%', '+43%'], ['-50%', '+100%'], ['-75%', '+300%'], ['-90%', '+900%']])}

<h3>Regola 6: Limiti giornalieri e settimanali</h3>
<p>Fissa una perdita giornaliera massima (per esempio il 2-3% del conto). Quando la raggiungi, <b>smetti di operare per la giornata</b>. Molti conti distrutti nascono da un solo pomeriggio di tilt con operazioni di vendetta. Fai lo stesso per un limite settimanale.</p>

<h3>Regola 7: Controlla la correlazione e l’esposizione totale</h3>
<p>Cinque operazioni su cinque azioni tecnologiche sono in realtà una grande operazione sulla tecnologia. Limita il rischio totale aperto (per esempio non più del 3-5% su tutte le posizioni) ed evita di impilare scommesse identiche.</p>

<h3>Regola 8: Non allontanare mai uno stop</h3>
<p>Puoi stringere uno stop per proteggere il profitto. Allontanarlo dal prezzo per “dare spazio all’operazione” trasforma una piccola perdita pianificata in una grande non pianificata. Questa abitudine sta dietro innumerevoli conti distrutti.</p>

<h3>Posizionamento dello stop-loss</h3>
<ul>
<li>Mettilo a un livello che dimostri che l’idea è sbagliata (sotto il minimo recente), non a una percentuale casuale.</li>
<li>Dagli margine in base alla volatilità (ATR).</li>
<li>Poi lascia che sia lo stop a determinare la tua dimensione, mai il contrario.</li>
</ul>

${B.warn('<p>“Mediare al ribasso” (comprare di più mentre una posizione in perdita scende) senza un piano è il modo in cui piccole perdite diventano perdite che chiudono il conto. Aggiungi ai vincenti con regole, non ai perdenti con la speranza.</p>')}

${B.take(['Rischia lo 0,5-1% del conto per operazione; limita le perdite giornaliere e settimanali.', 'Metti prima lo stop, poi calcola la dimensione della posizione a partire da esso.', 'Misura le operazioni in R ed esigi un’aspettativa positiva.', 'Una perdita del 50% richiede un guadagno del 100%: evitare grandi drawdown è il lavoro principale.', 'Non allargare mai uno stop-loss e non aggiungere ai perdenti senza regole.'])}`,
      q: [
        ['Hai 10.000 € e rischi l’1% su un’operazione con entrata a 20 € e stop a 19 €. Qual è la dimensione della posizione?', ['50 azioni', '100 azioni', '500 azioni', '10.000 azioni'], 1, 'Rischio = 100 €; distanza = 1 €; dimensione = 100 azioni.'],
        ['Un sistema vince il 40% delle operazioni con guadagno medio di 2R e perde 1R altrimenti. Aspettativa per operazione?', ['-0,2R', '0R', '+0,2R', '+1R'], 2, '0,4 × 2 − 0,6 × 1 = +0,2R.'],
        ['Dopo aver perso il 50% di un conto, quale guadagno ti serve per tornare in pari?', ['50%', '75%', '100%', '200%'], 2, 'Passare da 50 a 100 richiede un guadagno del 100%.']
      ]
    },
    {
      id: 'b7', m: 13, t: 'Psicologia del trading e il diario',
      hook: 'Le strategie falliscono nella mente molto prima di fallire sul grafico. Costruisci abitudini che ti tengano stabile, e tracciale.',
      body: `
<p>La maggior parte dei trader che falliscono sapevano che cosa fare. Semplicemente non l’hanno fatto. Hanno spostato gli stop, sono entrati in operazioni per noia, hanno raddoppiato dopo le perdite. La <b>psicologia</b> non è roba morbida: è dove il denaro si guadagna o si perde.</p>

<h3>I soliti sospetti</h3>
<ul>
<li><b>FOMO</b>: inseguire un movimento che è già avvenuto. Compri vicino al massimo perché “va sulla luna”.</li>
<li><b>Revenge trading</b>: dopo una perdita, fare un’operazione impulsiva e più grande per “rifarsi”.</li>
<li><b>Overtrading</b>: operare per noia o bisogno di azione. Più operazioni significano più costi e più errori.</li>
<li><b>Speranza</b>: rifiutarsi di prendere uno stop-loss perché l’operazione “potrebbe tornare”.</li>
<li><b>Avidità dopo i guadagni</b>: aumentare la dimensione dopo una serie fortunata e restituire tutto.</li>
<li><b>Paura</b>: chiudere i vincenti troppo presto ed esitare sui setup validi dopo alcune perdite.</li>
<li><b>Tilt</b>: uno stato di frustrazione emotiva in cui smetti del tutto di seguire le regole.</li>
</ul>

<h3>Abitudini che ti proteggono</h3>
<ol>
<li><b>Checklist pre-operazione</b>: se non tutte le caselle sono spuntate, niente operazione.</li>
<li><b>Routine giornaliera fissa</b>: preparati prima dell’apertura del mercato; fermati a un orario definito.</li>
<li><b>Massimo di operazioni al giorno</b> (per esempio 3-5).</li>
<li><b>La regola dei tre colpi</b>: dopo tre perdite consecutive, allontanati per almeno un’ora.</li>
<li><b>Limite di perdita giornaliera</b>: quando raggiunto, chiudi la piattaforma.</li>
<li><b>Sonno, cibo, esercizio</b>: i trader stanchi prendono decisioni peggiori, ed è misurabile.</li>
<li><b>Scrivi ciò che senti</b>: una breve nota prima di ogni operazione sul tuo stato. I pattern emergono in fretta.</li>
</ol>

<h3>Il diario di trading: il tuo allenatore privato</h3>
<p>Un diario registra ogni operazione: data, mercato, setup, entrata, stop, obiettivo, dimensione, risultato in R, se hai seguito il piano, la tua emozione e uno screenshot. Dopo 30-50 operazioni puoi rispondere a domande che cambiano tutto:</p>
<ul>
<li>Quale setup guadagna e quale perde?</li>
<li>Perdi di più quando infrangi le regole?</li>
<li>Quali emozioni o orari del giorno ti danneggiano?</li>
</ul>
<p>Prova il diario qui sotto. Parte con operazioni di esempio. Nota come “piano seguito” ed emozione raccontino una storia chiara. Poi svuotalo e registra le tue operazioni di pratica.</p>
${B.w('journal')}

${B.w('checklist', { key: 'b7', title: 'Checklist pre-operazione (copia e adatta)', accent: 'trd', items: 'Il trend del timeframe superiore è d’accordo con la mia operazione|Il setup corrisponde esattamente alle mie regole scritte|Il mio stop-loss è posizionato dove l’idea si dimostra sbagliata|La dimensione della posizione non rischia più della mia percentuale fissa|Il guadagno è almeno 1,5-2 volte il mio rischio|Nessuna notizia importante nei prossimi 30 minuti|Sono calmo, riposato e non sto cercando di rifarmi di una perdita' })}

${B.key('<p>Il tuo lavoro non è prevedere il mercato. Il tuo lavoro è seguire le tue regole mentre il mercato fa quello che vuole. Valuta come hai eseguito, non solo se l’operazione ha fatto soldi.</p>')}

${B.take(['Emozioni come FOMO, vendetta e speranza distruggono più conti delle cattive strategie.', 'Usa checklist, limiti di operazioni, limiti di perdita giornaliera e pause per imporre disciplina.', 'Un diario trasforma l’esperienza in dati; rivedilo ogni settimana.', 'Giudicati sul rispetto delle regole, non sui singoli risultati.'])}`,
      q: [
        ['Che cos’è il revenge trading?', ['Operare contro un rivale', 'Fare operazioni impulsive e sovradimensionate per recuperare una perdita', 'Vendere in profitto', 'Usare un conto demo'], 1, 'È guidato dall’emozione e di solito moltiplica la perdita originale.'],
        ['Qual è l’uso migliore di un diario di trading?', ['Vantarsi', 'Trovare pattern in setup, emozioni e violazioni delle regole dai tuoi dati', 'Sostituire uno stop-loss', 'Prevedere il mercato'], 1, 'Il diario è uno strumento di feedback per migliorare il tuo processo.'],
        ['Dopo aver raggiunto il limite di perdita giornaliera dovresti…', ['Aumentare la dimensione per recuperare', 'Smettere di operare per la giornata', 'Passare subito a un nuovo mercato', 'Rimuovere il limite'], 1, 'Il limite esiste per fermare una spirale emotiva.']
      ]
    },
    {
      id: 'b8', m: 15, t: 'Laboratorio di paper trading e il tuo piano di trading',
      hook: 'È ora di operare 100 candele con denaro finto. Poi scrivi il piano che decide se rischierai mai il vero denaro.',
      body: `
<p>I piloti non fanno volare passeggeri il primo giorno: usano simulatori. I trader dovrebbero fare lo stesso. Un conto di <b>paper trading</b> ti permette di esercitarti su esecuzione, regole ed emozioni a rischio finanziario zero.</p>

<h3>Gioca: il mercato di allenamento</h3>
<p>Qui sotto c’è un mercato generato (non reale) che alterna trend rialzisti, ribassisti e range. Hai 10.000 € di denaro finto. Premi <b>Candela successiva</b> per far avanzare il tempo, o <b>Riproduzione automatica</b>. Entra long o short, scegli il rischio, la distanza dello stop e l’obiettivo di profitto, e il laboratorio calcola la dimensione della posizione per te. Dopo 100 candele ricevi un resoconto finale. Prova questi esperimenti:</p>
<ul>
<li>Attiva la media a 20 candele e opera solo nella direzione in cui punta.</li>
<li>Opera con e senza obiettivo di profitto. Quale dà risultati più regolari?</li>
<li>Prova il 2% di rischio per operazione, poi lo 0,5%. Confronta il tuo drawdown.</li>
<li>Clicca su <b>Nuovo mercato</b> e vedi se il tuo risultato si ripete.</li>
</ul>
${B.w('papertrade')}

${B.warn('<p>I simulatori sono più facili della vita reale: nessuna vera paura, esecuzioni perfette, nessuno slippage. Tratta i risultati su carta come un test minimo delle tue regole, non come prova di profitto futuro.</p>')}

<h3>Quando hai “superato”?</h3>
<ul>
<li>Almeno <b>100 operazioni</b> registrate nel tuo diario con le stesse regole.</li>
<li>Aspettativa positiva al netto dei costi.</li>
<li>Hai seguito il piano in almeno il 90% delle operazioni.</li>
<li>Un drawdown massimo che potresti tollerare emotivamente con denaro reale.</li>
</ul>

<h3>Il passaggio al reale</h3>
<ol>
<li>Inizia con il <b>10% della dimensione prevista</b>. Il denaro reale cambia il comportamento anche quando è poco.</li>
<li>Fai altre 100 operazioni reali a quella dimensione minuscola.</li>
<li>Aumenta lentamente (per esempio +25% dopo aver raggiunto obiettivi di performance e disciplina) e riduci dopo i drawdown.</li>
<li>Preleva regolarmente una parte dei profitti così i guadagni diventano reali.</li>
</ol>

<h3>Il tuo modello di piano di trading</h3>
<p>Copia questo in un documento e compilalo. Un piano scritto è la tua costituzione.</p>
${B.tbl(['Sezione', 'Che cosa scrivere'], [
        ['Obiettivo', 'A che cosa punti nei prossimi 12 mesi? (Abilità, costanza, reddito)'],
        ['Mercati e orari', 'Quali strumenti? Quali ore? Quando non operi?'],
        ['Strategia', 'Setup con regole esatte di entrata, stop e obiettivo'],
        ['Regole di rischio', 'Rischio per operazione, limite giornaliero, limite settimanale, rischio aperto massimo'],
        ['Routine', 'Preparazione pre-mercato, gestione delle operazioni, revisione di fine giornata'],
        ['Regole di psicologia', 'Massimo di operazioni, regola dei tre colpi, pause'],
        ['Calendario di revisione', 'Revisione settimanale del diario; performance mensile e modifiche alle regole'],
        ['Regola di stop / pausa', 'A quale drawdown (per esempio -10%) ti fermi e rivedi prima di continuare?']
      ])}

${B.ex('<p>Sara opera con un piano con rischio dello 0,5% per operazione e una regola di pausa a -8%. Nel secondo mese tocca -8%. Si ferma, rivede il diario e scopre che il 70% delle sue perdite veniva dal violare la regola “nessuna operazione nei primi 5 minuti”. Corregge e riprende a metà dimensione. Una regola di pausa ha trasformato un periodo negativo in una lezione.</p>')}

<h3>Andare oltre</h3>
<p>Se vuoi una struttura guidata, un programma già pronto e un robot di trading che ti aiuti ad applicare le regole con coerenza, il creatore di questo corso offre un prodotto a pagamento facoltativo chiamato <b>Trading Lab</b>. Non è necessario: questo percorso gratuito copre l’essenziale. Vedi la <a href="#lab">pagina del Trading Lab</a> per i dettagli e, come sempre, ricorda che nessun corso o strumento può eliminare il rischio di mercato né garantire profitti.</p>

${B.take(['Fai almeno 100 operazioni di paper trading con regole fisse prima di rischiare denaro reale.', 'Inizia dal vivo a circa il 10% della dimensione prevista e aumenta lentamente.', 'Scrivi un piano con regole di rischio, routine e una regola di pausa.', 'I simulatori sono più gentili della realtà; usali come test minimo.'])}`,
      q: [
        ['A quante operazioni dovresti puntare nel paper trading prima di passare al reale?', ['3', '10', '100 o più', 'Non importa'], 2, 'Serve un campione più grande per vedere se il tuo vantaggio è reale o solo fortuna.'],
        ['Qual è un modo sensato di iniziare il trading reale?', ['A dimensione piena subito', 'Con circa il 10% della dimensione prevista', 'Con denaro preso in prestito', 'Con leva massima'], 1, 'Il denaro reale cambia le emozioni, quindi inizia piccolo per imparare in sicurezza.'],
        ['Che cosa fa una “regola di pausa”?', ['Ti costringe a operare di più', 'Ti fa fermare e rivedere quando raggiungi un drawdown stabilito', 'Rimuove gli stop-loss', 'Garantisce il recupero'], 1, 'Protegge il capitale e impone una riflessione prima che i problemi si aggravino.']
      ]
    }
  ]);
})();
