/* Glossar, Seite des Pro-Pfads und Trading-Lab-Seiten */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;
  const LAB = 'https://fofinho8.gumroad.com/l/trading-lab';
  MQ.misc = {};

  MQ.misc.glossary = [
    ['Altcoin', 'Jedes Krypto-Asset außer Bitcoin.'],
    ['Ask (Briefkurs)', 'Der niedrigste Preis, zu dem Verkäufer verkaufen wollen. Du zahlst den Ask, wenn du kaufst.'],
    ['Asset Allocation (Vermögensaufteilung)', 'Wie dein Geld auf Anlageklassen wie Aktien, Anleihen, Bargeld und Krypto verteilt ist.'],
    ['ATR (Average True Range)', 'Ein Indikator dafür, wie stark sich ein Asset typischerweise in einem Zeitraum bewegt. Dient zum Festlegen von Stopps und Positionsgröße.'],
    ['Bärenmarkt', 'Eine lange Phase fallender Preise, oft definiert als Rückgang von 20 % oder mehr von einem Hoch.'],
    ['Bid (Geldkurs)', 'Der höchste Preis, den Käufer zahlen. Du erhältst den Bid, wenn du verkaufst.'],
    ['Blockchain', 'Ein gemeinsames digitales Register, das von vielen Computern geführt wird, in dem Datenblöcke verkettet und schwer zu ändern sind.'],
    ['Anleihe', 'Ein Kredit an einen Staat oder ein Unternehmen, der Zinsen zahlt und am Ende das Kapital zurückgibt.'],
    ['Broker', 'Ein Unternehmen, das deine Kauf- und Verkaufsaufträge an den Finanzmärkten ausführt.'],
    ['Bullenmarkt', 'Eine lange Phase steigender Preise.'],
    ['Candlestick (Kerze)', 'Ein Chartsymbol, das Eröffnung, Hoch, Tief und Schluss einer Zeitspanne zeigt.'],
    ['Kapitalertragsteuer', 'Steuer auf den Gewinn, den du erzielst, wenn du ein Asset teurer verkaufst, als du es gekauft hast.'],
    ['CFD (Contract for Difference)', 'Ein gehebelter Vertrag mit einem Broker, der den Preis eines Assets abbildet, ohne dass du es besitzt. Hohes Risiko für Privathändler.'],
    ['Cold Wallet', 'Ein Krypto-Wallet, das offline gehalten wird (oft ein Hardware-Gerät) für hohe Sicherheit.'],
    ['Zinseszins', 'Erträge auf deine früheren Erträge, sodass das Wachstum mit der Zeit beschleunigt.'],
    ['Korrelation', 'Wie stark sich zwei Assets gemeinsam bewegen. Niedrige Korrelation hilft der Diversifikation.'],
    ['Anschaffungskosten (Cost Basis)', 'Was du ursprünglich für ein Asset bezahlt hast, einschließlich Gebühren. Dient zur Gewinnberechnung für Steuern.'],
    ['Custodial Wallet', 'Ein Wallet, bei dem ein Unternehmen (etwa eine Börse) die privaten Schlüssel für dich hält.'],
    ['DCA (Dollar-Cost-Averaging)', 'Regelmäßig einen festen Betrag investieren, unabhängig vom Preis.'],
    ['DeFi (dezentrale Finanzen)', 'Finanzdienste wie Kreditvergabe und Handel, die von Smart Contracts statt von traditionellen Institutionen betrieben werden.'],
    ['Derivat', 'Ein Vertrag, dessen Wert von einem anderen Asset abhängt: Futures, Optionen, CFDs.'],
    ['Diversifikation', 'Geld auf viele Assets verteilen, damit ein einzelnes Scheitern dich nicht ruiniert.'],
    ['Dividende', 'Ein Anteil am Unternehmensgewinn, der an Aktionäre gezahlt wird.'],
    ['Doji', 'Eine Kerze, bei der Eröffnung und Schluss fast gleich sind und die Unentschlossenheit signalisiert.'],
    ['Drawdown', 'Der Rückgang von einem Hoch zu einem Tief im Wert deines Kontos oder Portfolios.'],
    ['EMA (exponentieller gleitender Durchschnitt)', 'Ein gleitender Durchschnitt, der jüngere Preise stärker gewichtet.'],
    ['Notgroschen', 'Ersparnisse für unerwartete Kosten, meist 3 bis 6 Monate lebensnotwendige Ausgaben.'],
    ['EPS (Gewinn je Aktie)', 'Der Nettogewinn eines Unternehmens geteilt durch die Zahl seiner Aktien.'],
    ['ETF (börsengehandelter Fonds)', 'Ein Korb von Assets, der wie eine Aktie an der Börse gehandelt wird.'],
    ['Börse (Exchange)', 'Ein Marktplatz, auf dem Assets gekauft und verkauft werden. Bei Krypto eine Plattform zum Handel mit Coins.'],
    ['Erwartungswert (Expectancy)', 'Der durchschnittliche Betrag, den du pro Trade über viele Trades zu gewinnen oder zu verlieren erwartest.'],
    ['FDV (voll verwässerte Bewertung)', 'Token-Preis mal Gesamtangebot, zeigt den Wert, wenn alle Token im Umlauf wären.'],
    ['Fear-and-Greed-Index', 'Ein Stimmungswert von 0 bis 100 für den Krypto- (oder Aktien-)Markt. Extremwerte können auf Überhitzung oder Panik hinweisen.'],
    ['Fiat', 'Staatlich ausgegebenes Geld wie Euro oder US-Dollar.'],
    ['FOMO', 'Angst, etwas zu verpassen (Fear of Missing Out). Der Drang zu kaufen, weil andere verdienen.'],
    ['Funding-Rate', 'Eine regelmäßige Zahlung zwischen Longs und Shorts bei Perpetual Futures, die den Kontraktpreis nahe am Spot hält.'],
    ['Futures', 'Verträge zum Kauf oder Verkauf eines Assets zu einem festgelegten Preis an einem künftigen Datum.'],
    ['Gas-Gebühr', 'Die Gebühr, die an ein Blockchain-Netzwerk für die Verarbeitung einer Transaktion gezahlt wird.'],
    ['Halving', 'Ein geplantes Ereignis, das die Ausgabe neuer Bitcoin etwa alle vier Jahre halbiert.'],
    ['Hardware-Wallet', 'Ein dediziertes physisches Gerät, das private Krypto-Schlüssel offline speichert.'],
    ['Hash', 'Ein kurzer digitaler Fingerabdruck von Daten. Ändern sich die Daten, ändert sich der Hash.'],
    ['Indexfonds', 'Ein Fonds, der einen Marktindex kostengünstig nachbildet.'],
    ['Inflation', 'Ein allgemeiner Preisanstieg im Zeitverlauf, der die Kaufkraft des Geldes verringert.'],
    ['Isolated Margin', 'Ein Margin-Modus, bei dem nur die einer Position zugewiesene Sicherheit gefährdet ist.'],
    ['KYC (Know Your Customer)', 'Identitätsprüfungen, die regulierte Finanzplattformen verlangen.'],
    ['Hebel (Leverage)', 'Geliehenes Geld oder Verträge nutzen, um eine größere Position als das eigene Bargeld zu kontrollieren. Verstärkt Gewinne und Verluste.'],
    ['Limit-Order', 'Ein Auftrag, nur zu einem festgelegten Preis oder besser zu kaufen oder zu verkaufen.'],
    ['Liquidation', 'Das erzwungene Schließen einer gehebelten Position, wenn Verluste deine Margin aufbrauchen.'],
    ['Liquidität', 'Wie leicht ein Asset ohne Preisbewegung gekauft oder verkauft werden kann.'],
    ['Long', 'Ein Asset kaufen in der Hoffnung, dass der Preis steigt.'],
    ['Maker / Taker', 'Maker stellen Orders ins Orderbuch (niedrigere Gebühr); Taker entnehmen sie, indem sie sofort handeln (höhere Gebühr).'],
    ['Margin', 'Die Sicherheit, die du hinterlegst, um eine gehebelte Position zu eröffnen.'],
    ['Marktkapitalisierung', 'Preis mal Anzahl der im Umlauf befindlichen Einheiten.'],
    ['Market-Order', 'Ein Auftrag, sofort zum besten verfügbaren Preis zu kaufen oder zu verkaufen.'],
    ['Gleitender Durchschnitt', 'Der Durchschnittspreis über eine festgelegte Zahl von Perioden, der Rauschen glättet, um den Trend zu zeigen.'],
    ['Open Interest', 'Der Gesamtwert ausstehender Derivatekontrakte, die noch nicht geschlossen wurden.'],
    ['KGV (P/E-Ratio)', 'Aktienkurs geteilt durch Gewinn je Aktie. Wie viel du für jede Gewinneinheit zahlst.'],
    ['Paper Trading', 'Trading mit simuliertem Geld üben.'],
    ['Perpetual Futures', 'Futures-Kontrakte ohne Ablaufdatum, durch Funding-Zahlungen nahe am Spot-Preis gehalten.'],
    ['Privater Schlüssel', 'Der geheime Code, der den Besitz beweist und dir erlaubt, Krypto zu bewegen. Teile ihn nie.'],
    ['Proof of Stake / Proof of Work', 'Zwei Wege, auf denen Blockchains Einigkeit erzielen: durch Sperren von Coins (Stake) oder durch Einsatz von Rechenleistung (Work).'],
    ['Pump and Dump', 'Ein Schema, das ein Asset anpreist, um den Preis zu treiben, und dann an spät kommende Käufer verkauft.'],
    ['R-Multiple', 'Ein Trade-Ergebnis, gemessen in Einheiten des anfänglichen Risikos. 50 € riskieren und 100 € gewinnen ist +2R.'],
    ['Rebalancing', 'Dein Portfolio auf die Zielaufteilung zurückführen.'],
    ['Widerstand', 'Ein Preisbereich, in dem Verkaufsdruck Anstiege wiederholt gestoppt hat.'],
    ['RSI (Relative-Stärke-Index)', 'Ein Momentum-Indikator zwischen 0 und 100.'],
    ['Rug Pull', 'Ein Betrug, bei dem Entwickler Liquidität abziehen oder ein Projekt verlassen, nachdem sie Geld eingesammelt haben.'],
    ['Scalping', 'Sehr kurzfristiges Trading für kleine Gewinne, viele Male am Tag.'],
    ['Seed-Phrase', 'Eine Liste von 12 oder 24 Wörtern, die dein Wallet wiederherstellen kann. Wer sie hat, kontrolliert die Gelder.'],
    ['Short', 'Ein geliehenes Asset verkaufen in der Hoffnung, es billiger zurückzukaufen.'],
    ['Slippage', 'Die Differenz zwischen dem erwarteten und dem tatsächlichen Ausführungspreis einer Order.'],
    ['Smart Contract', 'Ein Programm auf einer Blockchain, das automatisch läuft, wenn Bedingungen erfüllt sind.'],
    ['Spot', 'Das tatsächliche Asset zum aktuellen Preis kaufen oder verkaufen, ohne Hebel.'],
    ['Spread', 'Die Differenz zwischen Bid- und Ask-Preis.'],
    ['Stablecoin', 'Ein Krypto-Token, der einen stabilen Wert halten soll, oft an eine Währung gekoppelt.'],
    ['Staking', 'Proof-of-Stake-Coins sperren, um ein Netzwerk gegen Belohnungen abzusichern.'],
    ['Stop-Loss', 'Ein Auftrag, der eine Position schließt, wenn der Preis ein festgelegtes Verlustniveau erreicht.'],
    ['Unterstützung (Support)', 'Ein Preisbereich, in dem Käufer wiederholt eingestiegen sind.'],
    ['Swing-Trading', 'Positionen von mehreren Tagen bis zu mehreren Wochen halten.'],
    ['TER (Gesamtkostenquote)', 'Die jährliche Gebühr eines Fonds als Prozentsatz deiner Anlage.'],
    ['Tokenomics', 'Die Ökonomie eines Tokens: Angebot, Verteilung, Ausgabe und Nutzen.'],
    ['OGAW (UCITS)', 'Ein europäischer Regulierungsrahmen für Investmentfonds, die sich an Privatanleger richten.'],
    ['Volatilität', 'Wie stark und wie schnell Preise auf und ab gehen.'],
    ['Volumen', 'Die in einem Zeitraum gehandelte Menge eines Assets.'],
    ['VWAP', 'Volumengewichteter Durchschnittspreis, ein gängiger Intraday-Richtwert für den fairen Wert.'],
    ['Wallet', 'Software oder Hardware, die deine Krypto-Schlüssel speichert und dir erlaubt, Coins zu senden und zu empfangen.'],
    ['Wal (Whale)', 'Ein Halter mit einer sehr großen Menge eines Assets, der den Markt bewegen kann.'],
    ['Rendite (Yield)', 'Der Ertrag, den eine Anlage zahlt, ausgedrückt als Prozentsatz ihres Preises.']
  ];

  /* ---------- Trading Lab: kompakte Karte auf der Startseite ---------- */
  MQ.misc.labCard = `<div class="lab">
    <div>
      <p class="eyebrow" style="color:#17143A;opacity:.75">Optional · vom Ersteller dieses Kurses</p>
      <h2>Du willst tiefer einsteigen? Lerne Trading Lab kennen.</h2>
      <p>Dieser Kurs ist kostenlos und für sich vollständig. Wenn du zusätzliche Struktur fürs Trading möchtest, ist <b>Trading Lab</b> das kostenpflichtige Programm des Autors auf Gumroad: ein vollständiger Trading-Kurs plus ein <b>Trading-Bot</b>, der Tradern helfen soll, ihre Regeln konsequent anzuwenden.</p>
      <ul><li>Vollständiges Trading-Programm zum Lernen und Üben</li><li>Enthält einen Trading-Bot, den viele Mitglieder nutzen</li><li>Monatsabo, nichts weiter zu kaufen</li></ul>
      <div class="btnrow"><a class="btn" href="#lab">Sieh, was enthalten ist</a><a class="btn alt" href="${LAB}" target="_blank" rel="noopener noreferrer">Auf Gumroad öffnen ↗</a></div>
      <p class="fine">Trading birgt ein hohes Verlustrisiko. Kein Kurs und kein Bot kann Ergebnisse garantieren. Offenlegung: Trading Lab wird vom Autor der Money Quest Academy verkauft.</p>
    </div>
    <div class="price"><small>Trading Lab</small><b>39 €</b><small>pro Monat + MwSt.</small></div>
  </div>`;

  /* ---------- Trading Lab: vollständige Seite ---------- */
  MQ.misc.labPage = `<section class="thead" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.ct}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Optionales kostenpflichtiges Programm · vom Ersteller von Money Quest</p><h1>Trading Lab</h1><p>Ein vollständiges Trading-Programm mit Trading-Bot, für alle, die nach den kostenlosen Trader-Pfaden Struktur wollen.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)">
    ${B.box('warn', 'Offenlegung', '<p>Money Quest Academy ist kostenlos. Trading Lab ist ein separates, kostenpflichtiges Produkt, das vom selben Autor verkauft wird. Du brauchst es nicht, um einen Pfad dieses Kurses abzuschließen.</p>')}
    <h3>Was es ist</h3>
    <p>Trading Lab ist ein Abo-Programm, das auf Gumroad erhältlich ist. Es bündelt das Wissen, das zum Traden nötig ist, an einem Ort, zusammen mit einem <b>Trading-Bot</b>, der Tradern hilft, Regeln konsequent zu befolgen, statt emotionale Entscheidungen zu treffen. Viele Mitglieder nutzen es, um ihrem Trading Struktur zu geben.</p>
    <div class="lab" style="margin:1.4rem 0;box-shadow:var(--shadow)"><div><h2 style="font-size:1.8rem">39 € pro Monat + MwSt.</h2><p style="margin:0">Alles in einem Abo: das Trading-Programm und der Bot. Auf der Gumroad-Seite findest du den aktuellen Preis, die vollständige Liste der Inhalte und die Bedingungen.</p>
      <div class="btnrow" style="margin-top:1rem"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Trading Lab auf Gumroad öffnen ↗</a></div></div><div class="price"><small>Trading Lab</small><b>39 €</b><small>pro Monat + MwSt.</small></div></div>
    <h3>Für wen es passen kann</h3>
    <ul><li>Menschen, die den Day-Trader- oder Krypto-Trader-Pfad beendet haben und ein angeleitetes Programm wollen.</li><li>Trader, die mit Disziplin kämpfen und Regeln konsequent ausgeführt haben wollen.</li><li>Alle, die ein strukturiertes System lieber nutzen, als Werkzeuge einzeln zusammenzustellen.</li></ul>
    <h3>Wer es lassen sollte</h3>
    <ul><li>Alle, die noch keinen Notgroschen aufgebaut haben oder hochverzinste Schulden haben.</li><li>Alle, die garantierten Gewinn erwarten. Kein ehrliches Produkt bietet das.</li><li>Anfänger, die noch nicht an einem Simulator geübt haben. Mach zuerst das Paper-Trading-Labor.</li></ul>
    <h3>Wie es zu diesem kostenlosen Kurs passt</h3>
    ${B.tbl(['', 'Money Quest (kostenlos)', 'Trading Lab (kostenpflichtig)'], [
        ['Zweck', 'Vermittelt die Grundlagen des Investierens und Tradens', 'Programm und Trading-Bot für aktive Trader'],
        ['Kosten', 'Kostenlos', '39 € pro Monat + MwSt.'],
        ['Am besten für', 'Alle, die bei null anfangen', 'Trader, die zusätzliche Struktur und Automatisierung wollen'],
        ['Risiko', 'Bildung, kein Trading beteiligt', 'Trading birgt ein reales Verlustrisiko']
      ])}
    <h3>Ehrliche Erwartungen</h3>
    <p>Ein Bot ist Software, die Regeln befolgt. Er kann dir helfen, diszipliniert zu bleiben, und wird nie müde, aber er erzeugt von sich aus keinen Vorteil und beseitigt kein Marktrisiko. Ergebnisse hängen von Marktbedingungen, deinen Einstellungen, deinem Risikomanagement und deinem eigenen Verhalten ab. Nutze die Checkliste aus der Bot-Lektion: Verstehe die Regeln, teste mit kleiner Größe, nutze reine Trading-Berechtigungen und setze einen Maximalverlust.</p>
    ${B.warn('<p>Investiere nie Geld, dessen Verlust du dir nicht leisten kannst. Trading, besonders gehebeltes Trading, kann schnell Geld kosten.</p>')}
    <div class="btnrow"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Trading Lab auf Gumroad öffnen ↗</a><a class="btn alt" href="#track-ct">Zurück zum Krypto-Trader-Pfad</a></div>
  </div></div></section>`;

  /* ---------- Pro-Pfad ---------- */
  MQ.misc.proPage = `<section class="thead" style="${MQ.trackStyle('found')}"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.found}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Nach den Pfaden</p><h1>Der Pro-Pfad</h1><p>Was Hobbyisten von Profis unterscheidet, und die Leiter vom Anfänger zu jemandem, dem andere Geld anvertrauen.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="${MQ.trackStyle('found')}">
    <p>„Profi“ ist kein Titel, den man sich selbst gibt. Es ist eine Arbeitsweise. Profis haben <b>Prozess</b>, <b>Risikokontrolle</b>, <b>Aufzeichnungen</b> und <b>Demut</b>. Sie überstehen schlechte Jahre und lassen die guten wachsen. Die Leiter unten gilt für Anleger, Trader und Krypto gleichermaßen.</p>
    <h3>Die vier Stufen</h3>
    ${B.tbl(['Stufe', 'Was du tust', 'Beleg, dass du bereit für die nächste Stufe bist'], [
      ['1. Lernender', 'Schließe die Grundlagen und deinen gewählten Pfad ab. Übe mit Simulatoren. Baue deinen Notgroschen auf.', 'Du kannst einem Freund Risiko, Diversifikation, Kosten und deinen eigenen Plan erklären. Dein finanzielles Fundament steht.'],
      ['2. Lehrling', 'Investiere regelmäßig kleine echte Beträge. Führe ein Entscheidungsjournal. Wenn du tradest, nutze 10 % der geplanten Größe.', '12 Monate konsequente Gewohnheiten; 100 protokollierte Entscheidungen; du hast deinen Plan durch mindestens eine beängstigende Phase befolgt.'],
      ['3. Praktiker', 'Ein getesteter Prozess mit gemessenen Ergebnissen: Aufteilung und Rebalancing für Anleger; positiver Erwartungswert und Drawdown-Kontrolle für Trader.', 'Zwei oder mehr Jahre Aufzeichnungen; Kosten und Steuern verstanden; Verluste bewältigt, ohne Regeln zu brechen.'],
      ['4. Profi', 'Andere verlassen sich auf deine Arbeit: Geld für dich in großem Maßstab verwalten, in der Finanzbranche arbeiten oder ein strukturiertes Trading-Geschäft führen.', 'Verifizierte Bilanz, Risikorahmen, Weiterbildung und die Fähigkeit, jede Entscheidung zu erklären.']
    ])}
    <h3>Was Profis anders machen</h3>
    <ol>
      <li><b>Sie denken in Wahrscheinlichkeiten, nicht in Prognosen.</b> „Wenn dieses Setup 100-mal auftritt, was passiert im Schnitt?“</li>
      <li><b>Sie legen den Verlust vor dem Gewinn fest.</b> Jede Position hat einen maximal akzeptablen Verlust.</li>
      <li><b>Sie sind besessen von Kosten, Steuern und Prozess</b>, den Dingen, die sie kontrollieren können.</li>
      <li><b>Sie führen Aufzeichnungen.</b> Journale, Performance-Berichte, Regeländerungen mit Begründung.</li>
      <li><b>Sie trennen Lehren von Ergebnissen.</b> Eine gute Entscheidung kann verlieren; eine schlechte kann gewinnen.</li>
      <li><b>Sie schützen ihre Psyche.</b> Schlaf, Routine und Limits gehören zur Arbeit.</li>
      <li><b>Sie lernen weiter.</b> Märkte ändern sich, und die Regeln, die funktionieren, auch.</li>
    </ol>
    <h3>Karrierewege in der Finanzbranche</h3>
    ${B.tbl(['Weg', 'Was er beinhaltet', 'Nützliche Qualifikationen'], [
      ['Finanzanalyst / Researcher', 'Unternehmen und Märkte untersuchen; Empfehlungen schreiben.', 'Studium in Finanzen oder Wirtschaft; CFA-Programm'],
      ['Portfolio- / Fondsmanager', 'Aufteilungen für Fonds oder Kunden entscheiden.', 'CFA, starke Erfolgsbilanz, Lizenzen'],
      ['Risikomanager', 'Die von einer Firma eingegangenen Risiken messen und begrenzen.', 'FRM-Zertifizierung, Mathematik und Statistik'],
      ['Quantitativer Analyst oder Entwickler', 'Modelle, Datenpipelines und automatisierte Strategien bauen.', 'Mathematik, Statistik, Programmierung'],
      ['Technischer Analyst / Marktstratege', 'Chartbasierte und marktstrukturelle Analyse.', 'CMT-Programm'],
      ['Finanzberater / -planer', 'Privatpersonen bei der Vermögensplanung helfen.', 'Lokale Zulassung und Planer-Zertifizierungen'],
      ['Unabhängiger Trader oder Anleger', 'Das eigene Kapital als Geschäft handeln oder investieren.', 'Kapital, Disziplin, Aufzeichnungen, Steuern in Ordnung'],
      ['Krypto-Rollen', 'Research, Sicherheit, Compliance, Trading und Entwicklung bei Krypto-Firmen.', 'Blockchain-Wissen, Sicherheitskompetenz, Regulierungsbewusstsein']
    ])}
    <h3>Ein Hinweis zu Prop-Trading-Firmen</h3>
    <p>Manche Firmen bieten an, Trader nach bestandener Prüfung zu „finanzieren“. Manche sind seriös, aber viele verdienen den Großteil ihres Geldes mit Prüfungsgebühren von Leuten, die durchfallen. Lies die Regeln sorgfältig, prüfe unabhängige Bewertungen, verstehe die Gewinnaufteilung und Drawdown-Limits und zahle niemals Geld, das du nicht verlieren kannst.</p>
    <h3>Gewohnheiten für die nächsten 12 Monate</h3>
    <ul>
      <li>Lies pro Quartal ein gutes Buch über Investieren oder Risiko.</li>
      <li>Überprüfe Plan und Ergebnisse monatlich; schreibe den Plan einmal im Jahr neu.</li>
      <li>Lerne von Märkten, ohne sie handeln zu müssen: Studiere Geschichte (1929, 1973, 1987, 2000, 2008, 2020, 2022).</li>
      <li>Teile, was du lernst. Jemand anderem etwas beizubringen ist der schnellste Weg, Lücken zu finden.</li>
      <li>Bleib bescheiden. Märkte bestrafen Gewissheit.</li>
    </ul>
    ${B.key('<p><b>Die beste professionelle Fähigkeit ist, im Spiel zu bleiben.</b> Wenn du dein Kapital und deinen Kopf schützt, erledigen Zeit und Zinseszins den Großteil des Rests.</p>')}
    <div class="btnrow"><a class="btn" href="#cert">Meinen Fortschritt und mein Zertifikat ansehen</a><a class="btn alt" href="#home">Zurück zu den Pfaden</a></div>
  </div></div></section>`;
})();
