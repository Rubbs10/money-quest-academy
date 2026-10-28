/* Alltagsanleger-Pfad: 8 Lektionen */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('inv', [
    {
      id: 'a1', m: 10, t: 'Ziele setzen und Konten wählen',
      hook: 'Bevor du entscheidest, was du kaufst, klär, wofür das Geld da ist und wo es liegen soll.',
      body: `
<p>Gute Anleger fangen nicht mit „Was soll ich kaufen?“ an. Sie fangen mit „Wofür ist dieses Geld und wann brauche ich es?“ an. Die Antwort entscheidet fast alles Weitere.</p>

<h3>Nutze drei Töpfe</h3>
<ul>
<li><b>Sicherheitstopf (0 bis 2 Jahre)</b>: Notfallreserve und Geld für anstehende Ausgaben. Sparkonto. Null Marktrisiko.</li>
<li><b>Zieltopf (2 bis 10 Jahre)</b>: ein Auto, die Anzahlung für eine Wohnung, ein Master. Überwiegend ruhige Anlagen mit kleinerem Aktienanteil.</li>
<li><b>Wachstumstopf (10+ Jahre)</b>: Altersvorsorge und langfristiges Vermögen. Hier ergibt ein hoher Anteil globaler Aktien Sinn, weil die Zeit die Schwankungen glättet.</li>
</ul>

<h3>Formuliere Ziele konkret</h3>
<p>„Ich will reich sein“ ist kein Ziel. „Ich will in 6 Jahren 30.000 € für die Anzahlung einer Wohnung haben“ ist eins. Konkrete Ziele zeigen dir, wie viel du sparen musst und wie viel Risiko passt. Wenn das Ziel 30.000 € in 6 Jahren ist und du 350 € im Monat anlegen kannst, kannst du vor dem Start prüfen, ob der Plan aufgeht.</p>

<h3>Kontoarten</h3>
<p>Die meisten Länder bieten besondere <b>steuerbegünstigte Konten</b> für Geldanlage oder Altersvorsorge an. Beispiele: 401(k) und Roth IRA in den USA, Stocks and Shares ISA und SIPP in Großbritannien, TFSA und RRSP in Kanada, Altersvorsorgepläne (PPR) in Portugal und diverse Vorsorgeprodukte anderswo (in Deutschland etwa Riester- und Rürup-Verträge sowie die betriebliche Altersvorsorge). Sie können die Steuern legal senken, manchmal deutlich. Prüfe, was es in <b>deinem</b> Land gibt, auch die Regeln dazu, wann du abheben darfst.</p>
<p>Ein normales <b>Depot</b> ist die flexible Variante: Du kannst jederzeit anlegen und abheben, zahlst aber Steuern nach den lokalen Regeln.</p>

<h3>So wählst du einen Broker</h3>
${B.tbl(['Prüfpunkt', 'Warum es wichtig ist'], [
        ['In deiner Region reguliert', 'Gibt dir rechtlichen Schutz und Regeln, an die sich der Broker halten muss'],
        ['Niedrige Gebühren', 'Provisionen, Währungsumrechnung, Depot- und Inaktivitätsgebühren fressen leise die Rendite'],
        ['Zugang zu breiten ETFs', 'Du willst einfache, diversifizierte Produkte zu niedrigen Kosten'],
        ['Schutz deines Vermögens', 'Deine Wertpapiere sollten getrennt vom Geld des Brokers verwahrt werden; prüfe die Einlagensicherung bzw. Entschädigungseinrichtung'],
        ['Einfache, zuverlässige App', 'Du nutzt sie jahrzehntelang; eine klare Oberfläche verhindert Fehler'],
        ['Drängt nicht zu riskanten Produkten', 'Sei misstrauisch bei Plattformen, die Anfängern Hebel, CFDs oder ständiges Handeln schmackhaft machen']
      ])}

<h3>Konto eröffnen: was dich erwartet</h3>
<ol>
<li>Konto anlegen und Identität bestätigen (Ausweis, manchmal ein Selfie, dazu ein Adressnachweis).</li>
<li>Bankkonto verknüpfen und eine kleine erste Einzahlung machen, um den Ablauf zu testen.</li>
<li>Zwei-Faktor-Authentifizierung mit einer Authenticator-App aktivieren.</li>
<li>Das Preisverzeichnis lesen. Achte besonders auf Handelsgebühren, Währungsumrechnung und alles, was schon fürs bloße Halten des Kontos berechnet wird.</li>
</ol>
${B.warn('<p>Gib deine Zugangsdaten niemals an andere weiter. Nutze keine „Kontoverwaltungs“-Dienste von Unbekannten, die Renditen versprechen. Seriöse Berater sind zugelassen und fragen nie nach deinem Passwort.</p>')}

${B.w('checklist', { key: 'a1', title: 'Vor deiner ersten Anlage', accent: 'inv', items: 'Ich habe Ziel, Betrag und Frist aufgeschrieben|Meine Notfallreserve steht|Ich habe steuerbegünstigte Konten in meinem Land geprüft|Ich habe einen regulierten Broker gewählt und sein Preisverzeichnis gelesen|Ich habe die Zwei-Faktor-Authentifizierung mit einer Authenticator-App aktiviert|Ich habe entschieden, wie viel ich monatlich anlege, und eine Erinnerung oder einen Dauerauftrag eingerichtet' })}

${B.take(['Beginne mit Zweck und Frist des Geldes, dann wähle die Anlagen.', 'Nutze drei Töpfe: Sicherheit, Ziele und Wachstum.', 'Prüfe steuerbegünstigte Konten in deinem eigenen Land.', 'Wähle einen regulierten, günstigen Broker, der nicht zu riskanten Produkten drängt.'])}`,
      q: [
        ['Geld, das du in 3 Jahren für eine Wohnungsanzahlung brauchst, gehört überwiegend in…', ['100 % risikoreiche Aktien', 'Ruhige Anlagen mit begrenztem Risiko', 'Eine neue Meme-Coin', 'Gehebelte Trades'], 1, 'Bei kurzem Horizont wäre ein Crash kurz vor dem Bedarf schmerzhaft.'],
        ['Was solltest du bei der Brokerwahl zuerst prüfen?', ['Dass er auffällige Werbung hat', 'Dass er in deiner Region reguliert ist und niedrige, transparente Gebühren hat', 'Dass er 100-fachen Hebel bietet', 'Dass Freunde ihn nutzen'], 1, 'Regulierung und Kosten zählen viel mehr als Marketing.'],
        ['Was ist der Hauptvorteil steuerbegünstigter Konten?', ['Garantierte Renditen', 'Sie können die Steuern auf Gewinne legal senken', 'Kein Risiko', 'Höhere Zinsen auf Aktien'], 1, 'Sie ändern das Marktrisiko nicht, aber weniger Steuern bedeuten, dass mehr Rendite bei dir bleibt.']
      ]
    },
    {
      id: 'a2', m: 11, t: 'ETFs und Indexfonds: der Snack-Korb',
      hook: 'Der einfachste, günstigste Weg, Hunderte oder Tausende Unternehmen auf einmal zu besitzen.',
      body: `
<p>Stell dir vor, du willst in einem riesigen Supermarkt jeden Snack probieren. Du könntest von jeder Sorte eine Packung kaufen, was langsam und teuer ist. Oder du kaufst einen fertigen <b>Korb</b> mit von allem etwas. Ein <b>ETF</b> (Exchange-Traded Fund, börsengehandelter Fonds) ist dieser Korb für Geldanlagen. Du kaufst einen Anteil am ETF und besitzt ein kleines Stück von Hunderten oder Tausenden Unternehmen.</p>

<h3>Indexfonds erklärt</h3>
<p>Ein <b>Index</b> ist eine nach Regeln ausgewählte Liste von Unternehmen, etwa „die 500 größten US-Unternehmen“ (S&amp;P 500) oder „rund 1.400 große und mittelgroße Unternehmen aus Industrieländern“ (MSCI World). Ein <b>Indexfonds</b> oder <b>Index-ETF</b> kopiert diese Liste einfach automatisch. Kein Fondsmanager rät, welche Aktien er auswählt, deshalb sind die Kosten sehr niedrig.</p>

<h3>Warum Indexieren für die meisten funktioniert</h3>
<p>Den Markt dauerhaft zu schlagen ist extrem schwer. Jahr für Jahr zeigen Berichte, die aktive Fonds mit ihrer Vergleichsgröße vergleichen, dass die Mehrheit der aktiven Fonds über 10 bis 15 Jahre schlechter abschneidet, oft ungefähr um den Betrag ihrer höheren Gebühren. Mit Indexfonds bekommst du die Marktrendite minus einer winzigen Gebühr, und das schlägt nach Kosten die meisten Profis.</p>
${B.ex('<p>Stell dir vor, du und 99 Freunde versucht, Aktien auszuwählen. Nach Kosten liegt das Durchschnittsergebnis unter dem Markt, denn für jeden Gewinner gibt es auf der anderen Seite des Geschäfts einen Verlierer, und alle zahlen Gebühren. Wenn du über einen Indexfonds einfach den ganzen Markt besitzt, holst du den Durchschnitt, ohne die „Steuer des aktiven Managements“ zu zahlen.</p>')}

<h3>Beliebte Indizes</h3>
${B.tbl(['Index', 'Was er abdeckt', 'Hinweise'], [
        ['S&amp;P 500', '500 große US-Unternehmen', 'Stark auf US-Technologie und große Namen konzentriert'],
        ['MSCI World', 'Rund 1.400 große und mittelgroße Unternehmen in Industrieländern', 'Etwa 70 % USA'],
        ['FTSE All-World / MSCI ACWI', 'Industrie- und Schwellenländer, Tausende Unternehmen', 'Am nächsten an „der ganzen Welt“ in einem Fonds'],
        ['Anleihen-Aggregat', 'Viele Staats- und Unternehmensanleihen', 'Der ruhigere Teil eines Portfolios']
      ])}

<h3>So vergleichst du ETFs</h3>
<ul>
<li><b>Abgebildeter Index</b>: Was steckt drin? Breit und global ist einfach und robust.</li>
<li><b>TER (Gesamtkostenquote)</b>: die jährliche Gebühr. Breite Index-ETFs kosten oft etwa 0,05 bis 0,25 % im Jahr. Aktive Fonds können 1 bis 2 % kosten.</li>
<li><b>Fondsgröße</b>: Sehr kleine ETFs werden manchmal geschlossen. Größere, etablierte Fonds sind sicherer.</li>
<li><b>Thesaurierend vs. ausschüttend</b>: Thesaurierende ETFs legen Dividenden automatisch wieder an (einfach, gut für den Zinseszins); ausschüttende zahlen sie an dich aus.</li>
<li><b>Domizil und UCITS</b>: In Europa solltest du auf UCITS-konforme ETFs achten, viele davon in Irland oder Luxemburg aufgelegt. Sie sind für Privatanleger gedacht und haben oft eine günstige Besteuerung ausländischer Dividenden.</li>
<li><b>Replikation</b>: Physisch (hält die Aktien) ist am leichtesten zu verstehen. Synthetisch nutzt Swaps und bringt Komplexität.</li>
<li><b>Währung</b>: Ein ETF kann in Euro notiert sein, aber Dollar-Anlagen halten. Währungsbewegungen erhöhen oder mindern die Rendite.</li>
</ul>

${B.warn('<p>Ein ETF ist nur so sicher wie das, was er enthält. Ein gehebelter ETF, ein Einzelbranchen-ETF oder ein „Krypto-Aktien“-ETF kann extrem schwanken. Kaufe nie einen ETF nur, weil „ETFs sicher sind“.</p>')}

${B.tip('<p>Anfänger können mit einem globalen Aktien-ETF plus (optional) einem Anleihen-ETF sehr gut fahren. Einfach ist nicht faul: Es ist wirksam.</p>')}

${B.take(['Ein ETF ist ein Korb, der mit einem Kauf sofort Streuung bringt.', 'Indexfonds kopieren eine Marktliste automatisch und kosten sehr wenig.', 'Die meisten aktiven Fonds schneiden über lange Zeit nach Gebühren schlechter ab als ihr Vergleichsindex.', 'Vergleiche Index, TER, Größe, thesaurierend oder ausschüttend, Domizil und Replikation.'])}`,
      q: [
        ['Was macht ein Index-ETF?', ['Versucht, den Markt durch Aktienauswahl zu schlagen', 'Kopiert einen Marktindex automatisch und günstig', 'Garantiert Gewinn', 'Verleiht nur Geld an Staaten'], 1, 'Indexfonds bilden eine Unternehmensliste nach festen Regeln ab, deshalb bleiben die Gebühren niedrig.'],
        ['Welche jährliche Gebühr (TER) ist für einen breiten, günstigen Index-ETF typisch?', ['0,1 % bis 0,25 %', '3 % bis 5 %', '10 %', 'Es gibt nie eine Gebühr'], 0, 'Gebühren unter etwa 0,25 % sind bei breiten Index-ETFs üblich.'],
        ['Was macht ein thesaurierender ETF mit Dividenden?', ['Zahlt sie dir bar aus', 'Legt sie automatisch im Fonds wieder an', 'Vernichtet sie', 'Berechnet dir extra'], 1, 'Thesaurierende ETFs legen Dividenden wieder an, was für den Zinseszins praktisch ist.']
      ]
    },
    {
      id: 'a3', m: 12, t: 'Diversifikation und Vermögensaufteilung',
      hook: 'Wie du dein Geld so verteilst, dass dich keine einzelne Katastrophe ruiniert, und ein Spiel, mit dem du deine eigene Mischung auf die Probe stellst.',
      body: `
<p>Der alte Rat „Leg nicht alle Eier in einen Korb“ ist der Kern des Investierens. Die <b>Vermögensaufteilung</b> (Asset Allocation, wie du dein Geld auf Aktien, Anleihen, Bargeld und andere Anlagen verteilst) bestimmt am stärksten, wie holprig dein Weg wird. Untersuchungen an Portfolios legen nahe, dass die Aufteilung das Verhalten eines Portfolios viel stärker erklärt als die Wahl einzelner Anlagen.</p>

<h3>Drei Ebenen der Streuung</h3>
<ol>
<li><b>Über Anlageklassen</b>: Aktien, Anleihen, Bargeld, vielleicht etwas Gold oder Immobilien. Sie reagieren unterschiedlich auf Ereignisse.</li>
<li><b>Über Länder und Währungen</b>: Verlass dich nicht nur auf deinen Heimatmarkt. Globale Fonds erledigen das für dich.</li>
<li><b>Über Unternehmen und Branchen</b>: Hunderte oder Tausende Unternehmen, sodass ein einzelner Ausfall kaum zählt.</li>
</ol>

<h3>Korrelation: warum Mischen hilft</h3>
<p>Zwei Anlagen, die sich nicht gemeinsam bewegen, haben eine niedrige <b>Korrelation</b>. In einem schlechten Aktienjahr halten sich hochwertige Anleihen oder Gold manchmal. Das passiert nicht immer (2022 fielen Aktien und Anleihen zusammen), aber über die Geschichte hinweg hat eine Mischung kleinere Ausschläge erzeugt als jeder Einzelbaustein.</p>

<h3>Beispiele für Startmischungen</h3>
${B.tbl(['Stil', 'Aktien', 'Anleihen', 'Bargeld / Sonstiges', 'Passt für'], [
        ['Vorsichtig', '30 %', '50 %', '20 %', 'Kurzer Horizont, geringe Toleranz für Kursrückgänge'],
        ['Ausgewogen', '60 %', '30 %', '10 %', 'Mittlerer Horizont (7 bis 15 Jahre)'],
        ['Wachstum', '80 bis 90 %', '10 bis 20 %', '0 bis 5 %', 'Langer Horizont (15+ Jahre), hohe Toleranz']
      ])}
<p>Eine sehr grobe Faustregel, die manche nutzen, lautet „110 oder 120 minus dein Alter“ als Prozentsatz in Aktien. Sie ist nur ein Ausgangspunkt: Deine Ziele, die Stabilität deines Einkommens und deine Nerven zählen mehr als eine Formel.</p>

<h3>Kern und Satelliten</h3>
<p>Eine beliebte Struktur: 80 bis 95 % in einen günstigen globalen „Kern“ (ein Welt-ETF) und ein kleiner „Satellit“ (5 bis 20 %) für Ideen, an die du glaubst, etwa Einzelaktien oder Themen. Scheitert ein Satellit, schützt dich der Kern.</p>

<h3>Jetzt teste dein Portfolio auf Belastung</h3>
<p>Baue eine Mischung und lass sie durch vier stilisierte Achtjahres-Szenarien laufen. Probiere ein reines Aktienportfolio, ein vorsichtiges und ein „100 % Krypto“. Achte auf den Endwert und auf den schlimmsten Einbruch unterwegs. Mit welchem könntest du wirklich leben?</p>
${B.w('alloc')}

${B.key('<p><b>Die echte Frage lautet nicht „Was bringt die höchste Rendite?“</b> Sie lautet „Was ist die risikoreichste Mischung, die ich durch einen Crash halten kann, ohne zu verkaufen?“ Ein großartiger Plan, den du in Panik aufgibst, ist schlechter als ein guter Plan, den du durchhältst.</p>')}

${B.warn('<p>Zehn Aktien aus derselben Branche oder fünf Fonds, die alle dieselben großen Tech-Konzerne halten, sind keine echte Streuung. Schau durch, was die Fonds tatsächlich enthalten.</p>')}

${B.take(['Die Vermögensaufteilung bestimmt den Großteil von Risiko und Verhalten deines Portfolios.', 'Streue über Anlageklassen, Länder und Unternehmen.', 'Wähle die Mischung, die du durch einen Rückgang von 30 % halten kannst, nicht die mit dem schönsten Chart.', 'Kern-Satelliten-Ansatz hält riskante Ideen auf einem kleinen, leistbaren Anteil.'])}`,
      q: [
        ['Was ist der Hauptzweck der Diversifikation?', ['Kurzfristigen Gewinn maximieren', 'Den Schaden begrenzen, den ein einzelner Ausfall anrichten kann', 'Steuern vermeiden', 'Renditen garantieren'], 1, 'Wer das Risiko streut, den kann kein einzelnes Unternehmen und keine einzelne Anlage komplett ruinieren.'],
        ['Beim Kern-Satelliten-Ansatz ist der Kern normalerweise…', ['Eine einzelne heiße Aktie', 'Ein breiter, günstiger globaler Fonds', 'Eine gehebelte Position', 'Nur Bargeld'], 1, 'Der Kern ist die stabile, diversifizierte Basis; Satelliten sind kleine Wetten.'],
        ['Welche Wahl spiegelt die richtige Frage bei der Auswahl einer Mischung am besten wider?', ['Welche Anlagen sind letztes Jahr am stärksten gestiegen?', 'Was ist die risikoreichste Mischung, die ich durch einen Crash halten kann, ohne zu verkaufen?', 'Was besitzt ein bekannter Influencer?', 'Welche Mischung würde sich am schnellsten verdreifachen?'], 1, 'Das Verhalten in Abschwüngen entscheidet, ob du die langfristigen Renditen wirklich bekommst.']
      ]
    },
    {
      id: 'a4', m: 9, t: 'Cost-Average-Effekt und automatisierter Vermögensaufbau',
      hook: 'Investiere nach Plan immer denselben Betrag und nimm dir die schwerste Entscheidung beim Investieren ab: wann.',
      body: `
<p>Niemand kann zuverlässig den perfekten Kauftag vorhersagen. Der <b>Cost-Average-Effekt (Dollar-Cost Averaging, DCA)</b> löst das, indem du in regelmäßigen Abständen einen festen Betrag anlegst, etwa 100 € am Ersten jedes Monats, egal was der Markt macht. Bei niedrigen Preisen kaufst du automatisch mehr Anteile, bei hohen weniger.</p>

${B.ex('<p>Über 4 Monate investierst du jeden Monat 100 €. Der Fondspreis beträgt 10 €, 8 €, 5 € und 10 €. Du kaufst 10, 12,5, 20 und 10 Anteile: 52,5 Anteile für 400 €, ein durchschnittlicher Einstandspreis von etwa 7,62 € pro Anteil, obwohl der Preis am Ende dort steht, wo er begann, bei 10 €. Dein Durchschnittspreis liegt unter dem einfachen Durchschnitt der Preise, weil du mehr gekauft hast, als es billig war.</p>')}

<h3>DCA vs. Einmalanlage</h3>
<p>Hast du bereits eine große Summe, zeigt die Statistik, dass die Einmalanlage in etwa zwei Dritteln der historischen Fälle besser abschneidet als das Aufteilen, einfach weil Märkte öfter steigen als fallen. DCA senkt aber die Wahrscheinlichkeit, kurz vor einem Crash alles zu investieren, und schont die Nerven. Die meisten haben ohnehin keine Einmalsumme: Sie investieren vom Gehalt, und das ist automatisch DCA.</p>
${B.w('dca')}

<h3>Mach es automatisch</h3>
<ol>
<li>Wähle einen Betrag, den du auch in einem schlechten Monat halten kannst.</li>
<li>Richte einen Dauerauftrag oder Sparplan für den Tag nach dem Zahltag ein.</li>
<li>Wähle jedes Mal denselben breiten Fonds.</li>
<li>Erhöhe den Betrag, wenn dein Einkommen steigt („bei jeder Gehaltserhöhung mit erhöhen“).</li>
<li>Hör im Crash nicht auf. Fallende Preise bedeuten, dass dein fester Betrag mehr kauft.</li>
</ol>

<h3>Was tun mit Sonderzahlungen</h3>
<p>Bonus, Geschenke oder eine Steuererstattung: Eine vernünftige Regel ist, sie aufzuteilen. Zum Beispiel 50 % in deinen Plan (Anlage oder Notfallreserve), 30 % für Ziele und 20 % zum Genießen. Du musst nicht wie ein Mönch leben, nur beständig sein.</p>

${B.warn('<p>DCA schützt dich nicht vor einem fallenden Markt und garantiert keinen Gewinn. Es rettet auch keine schlechte Anlage. Kombiniere es mit diversifizierten, vernünftigen Anlagen.</p>')}

${B.take(['DCA heißt, nach Plan regelmäßig einen festen Betrag zu investieren.', 'Es nimmt dir Market-Timing-Entscheidungen ab und baut die Gewohnheit auf.', 'Eine Einmalanlage gewinnt statistisch oft, aber DCA senkt Reue und das Risiko schlechten Timings.', 'Automatisiere es und mach in Crashs weiter.'])}`,
      q: [
        ['Was ist der Cost-Average-Effekt?', ['Auf den billigsten Tag warten', 'Unabhängig vom Preis in regelmäßigen Abständen einen festen Betrag anlegen', 'Verkaufen, wenn die Preise fallen', 'Kredit aufnehmen, um zu investieren'], 1, 'Der Plan, nicht der Preis, entscheidet, wann du kaufst.'],
        ['Wenn der Preis fällt, kauft eine feste monatliche Anlage…', ['Weniger Anteile', 'Mehr Anteile', 'Gleich viele Anteile', 'Stoppt automatisch'], 1, 'Derselbe Euro-Betrag kauft bei niedrigeren Preisen mehr Anteile.'],
        ['Was ist die beste Reaktion auf einen Markteinbruch, wenn du monatlich nach Plan investierst?', ['Alles stoppen und verkaufen', 'Den geplanten Betrag weiter anlegen', 'Den Hebel verdoppeln', 'Zu einer zufälligen heißen Coin wechseln'], 1, 'Wer den Kurs hält, kauft billiger, während der langfristige Plan unverändert bleibt.']
      ]
    },
    {
      id: 'a5', m: 10, t: 'Kosten, Gebühren und Steuern: die stillen Vermögensvernichter',
      hook: 'Eine Gebühr, die winzig klingt, kann ein Drittel deines Endergebnisses auffressen. Lerne, jede Kostenart zu erkennen.',
      body: `
<p>Den Markt kannst du nicht kontrollieren, aber was du für die Teilnahme zahlst, schon. Kosten wirken wie Renditen mit Zinseszins, nur in die falsche Richtung.</p>

<h3>Die Kosten, die du kennen solltest</h3>
<ul>
<li><b>Fondsgebühren (TER)</b>: werden jährlich im Fonds abgezogen.</li>
<li><b>Handelsprovisionen</b>: eine feste Gebühr oder ein Prozentsatz bei jedem Kauf oder Verkauf.</li>
<li><b>Spread</b>: die kleine Lücke zwischen Kaufkurs (Ask) und Verkaufskurs (Bid). Eine versteckte Kostenart bei jedem Handel.</li>
<li><b>Währungsumrechnungsgebühren</b>: oft 0,25 % bis 1 % oder mehr, wenn der Broker einen Aufschlag nimmt.</li>
<li><b>Depot- und Inaktivitätsgebühren</b>: Manche Broker berechnen sie schon fürs bloße Halten deiner Anlagen.</li>
<li><b>Performancegebühren</b>: ein Anteil der Gewinne, den manche Fonds einbehalten.</li>
<li><b>Steuern</b>: auf Dividenden, Zinsen und Kursgewinne, je nachdem, wo du lebst.</li>
</ul>

<h3>Sieh den Schaden</h3>
<p>Vergleiche einen günstigen ETF mit einem teuren Fonds. Gleicher Markt, gleiche Einzahlungen, nur die Gebühr unterscheidet sich.</p>
${B.w('fees')}

<h3>Steuern: die Grundlagen</h3>
<p>Die Regeln unterscheiden sich je nach Land, aber die gängigen Ideen sind:</p>
<ul>
<li>Die <b>Kapitalertragsteuer</b> fällt auf den Gewinn an, wenn du verkaufst. Kaufen-und-Halten löst sie selten aus, sodass mehr Geld weiter Zinseszins erzielt. Häufige Händler lösen sie oft aus.</li>
<li>Die <b>Dividendensteuer</b> fällt an, wenn Unternehmen Gewinne ausschütten. Thesaurierende Fonds können anders behandelt werden als ausschüttende.</li>
<li><b>Quellensteuer</b> kann bei ausländischen Dividenden an der Quelle einbehalten werden.</li>
<li><b>Verluste</b> lassen sich manchmal mit Gewinnen verrechnen. Führe Aufzeichnungen.</li>
</ul>
${B.warn('<p>Dieser Kurs vermittelt allgemeine Ideen, keine Steuerberatung. Lies die Hinweise deiner Steuerbehörde oder sprich mit einem qualifizierten Berater. Steuerregeln ändern sich.</p>')}

${B.ex('<p>Zwei Freunde legen je 10.000 € an und zahlen 30 Jahre lang 200 € im Monat in denselben Markt ein (7 % vor Kosten). Einer zahlt 0,2 % im Jahr und landet bei etwa 297.000 €. Der andere zahlt 1,8 % und landet bei etwa 215.000 €. Das sind rund 82.000 € weniger, allein durch Gebühren, bei exakt demselben Markt.</p>')}

${B.tip('<p>Frag vor dem Kauf jedes Produkts: „Wie hoch sind die jährlichen Gesamtkosten in Prozent, inklusive aller Gebühren?“ Kann der Verkäufer das nicht klar beantworten, geh.</p>')}

${B.take(['Kosten wirken gegen dich mit Zinseszins, und 1 % Gebühr ist über Jahrzehnte nicht klein.', 'Betrachte TER, Handelsgebühren, Spreads, Währungsumrechnung und Depotgebühren zusammen.', 'Kaufen-und-Halten senkt Handelskosten und steuerpflichtige Vorgänge.', 'Lerne die Steuerregeln deines Landes oder frag einen Profi.'])}`,
      q: [
        ['Warum sind Gebühren über lange Zeiträume besonders schädlich?', ['Sie werden nur einmal berechnet', 'Sie fallen jedes Jahr an und nehmen auch das künftige Wachstum weg, das dieses Geld erzielt hätte', 'Sie gelten nur in Aufwärtsmärkten', 'Sie werden am Ende erstattet'], 1, 'Der Effekt wirkt mit Zinseszins, sodass kleine jährliche Prozentsätze zu großen Summen werden.'],
        ['Was ist der Spread?', ['Eine Steuer auf Dividenden', 'Die Lücke zwischen Kaufkurs und Verkaufskurs', 'Eine ETF-Art', 'Deine jährliche Gebühr'], 1, 'Du kaufst zum höheren Ask und verkaufst zum niedrigeren Bid, sodass jeder Hin-und-Rück-Handel den Spread kostet.'],
        ['Welcher Anleger zahlt wahrscheinlich weniger Steuerlast?', ['Einer, der jeden Tag handelt', 'Einer, der kauft und jahrelang hält', 'Es ist immer identisch', 'Einer, der jeden Monat verkauft'], 1, 'Weniger Verkäufe bedeuten weniger steuerpflichtige Vorgänge, also bleibt mehr Geld investiert.']
      ]
    },
    {
      id: 'a6', m: 12, t: 'Kurs halten: Crashs, Rebalancing und Verhalten',
      hook: 'Märkte brechen regelmäßig ein. Dein Plan muss vorher bereit sein. Spiel das Crash-Spiel und sieh, wie du reagierst.',
      body: `
<p>Wenn du 40 Jahre lang investierst, erlebst du mehrere Crashs. Das ist keine seltene Katastrophe. Es gehört zum Preis langfristiger Renditen. Was danach mit deinem Vermögen geschieht, hängt vor allem davon ab, was du während des Falls tust.</p>

<h3>Crashs in der Geschichte</h3>
<ul>
<li><b>2000 bis 2002</b>: die Dotcom-Blase. Der US-amerikanische S&amp;P 500 fiel um etwa 49 %.</li>
<li><b>2007 bis 2009</b>: die globale Finanzkrise. Rund -57 % vom Hoch bis zum Tief.</li>
<li><b>Februar bis März 2020</b>: der Pandemie-Crash. Etwa -34 % in nur 33 Tagen, gefolgt von einer der schnellsten Erholungen aller Zeiten.</li>
<li><b>2022</b>: Inflation und steigende Zinsen. Rund -25 % für US-Aktien, auch Anleihen fielen.</li>
</ul>
<p>In jedem dieser Fälle erholten sich geduldige Anleger in breiten US-Aktienindizes irgendwann und erreichten neue Höchststände, wobei es kursmäßig von wenigen Monaten bis zu etwa fünf bis sieben Jahren dauerte. Das garantiert nicht, dass sich jeder Markt erholt (Japan brauchte über 30 Jahre, um sein Hoch von 1989 wieder zu erreichen), ein Grund, global zu streuen.</p>

<h3>Die Kosten der Panik</h3>
<p>Ein Verkauf nach einem Rückgang von 30 % macht den Verlust endgültig. Und dann musst du entscheiden, wann du wieder einsteigst. Viele verkaufen nahe dem Tief und steigen ein, nachdem die Kurse schon zurückgekehrt sind. Studien zeigen, dass die besten Börsentage oft direkt neben den schlechtesten liegen, sodass das Verpassen weniger Tage die langfristige Rendite dramatisch senken kann.</p>

<h3>Spiel: Überleben im Marktcrash</h3>
<p>Du hast 10.000 €. Die Schlagzeilen werden schlimmer. In jedem Schritt entscheidest du: halten, verkaufen, zurückkaufen oder Geld nachlegen. Keine Antwort ist perfekt, aber dein Muster verrät viel über deine Nerven.</p>
${B.w('panic')}

<h3>Rebalancing: die Disziplin, günstig zu kaufen</h3>
<p>Angenommen, dein Plan ist 70 % Aktien und 30 % Anleihen. Nach einem Aktienboom liegst du vielleicht bei 80 % Aktien, mehr Risiko als gewählt. <b>Rebalancing</b> heißt, die Mischung wieder auf das Ziel zu bringen, indem du einen Teil des Gestiegenen verkaufst und das Zurückgebliebene kaufst. Zwei einfache Methoden:</p>
<ul>
<li><b>Kalender</b>: einmal im Jahr an einem festen Datum.</li>
<li><b>Schwelle</b>: immer wenn ein Anteil mehr als 5 Prozentpunkte vom Ziel abweicht.</li>
</ul>
<p>Noch einfacher: Lenke <i>neue</i> Einzahlungen in den Teil, der unter dem Ziel liegt, dann rebalancierst du ohne Verkauf (und ohne Steuer).</p>

<h3>Schreib heute deinen Crash-Plan</h3>
${B.tryit('<p>Vervollständige diesen Satz und bewahre ihn auf: „Wenn mein Portfolio um 30 % fällt, werde ich ______.“ Zum Beispiel: „meine monatlichen Einzahlungen fortsetzen, die Kurse nicht öfter als einmal pro Woche ansehen und mit einem Freund reden, bevor ich etwas verkaufe.“</p>')}

${B.take(['Einbrüche von 20 bis 50 % passieren regelmäßig; plane sie im Voraus ein.', 'Panikverkäufe machen aus vorübergehenden Verlusten dauerhafte.', 'Rebalanciere einmal im Jahr oder wenn ein Anteil um etwa 5 Punkte abdriftet.', 'Globale Streuung schützt dich, falls ein Markt Jahrzehnte für die Erholung braucht.'])}`,
      q: [
        ['Wie stark fiel der S&P 500 ungefähr im Crash von 2020?', ['Etwa 5 %', 'Etwa 34 %', 'Etwa 80 %', 'Er fiel nicht'], 1, 'Er sank in etwa einem Monat um rund ein Drittel, bevor er sich stark erholte.'],
        ['Was bewirkt Rebalancing?', ['Stellt deine Zielmischung wieder her, indem Gewinner gekürzt und Nachzügler aufgestockt werden', 'Verdoppelt dein Risiko', 'Beseitigt Steuern', 'Sagt den nächsten Crash voraus'], 0, 'Es führt das Risiko auf das gewählte Niveau zurück und erzwingt die Disziplin, günstig zu kaufen und teuer zu verkaufen.'],
        ['Warum sind Panikverkäufe meist teuer?', ['Sie lassen den Markt steigen', 'Sie machen Verluste endgültig und überlassen dir die Entscheidung, wann du wieder einsteigst, oft zu spät', 'Sie senken Gebühren', 'Sie erhöhen Dividenden'], 1, 'Die Erholung beginnt oft, wenn die Stimmung am schlechtesten ist, daher verpassen Verkäufer sie.']
      ]
    },
    {
      id: 'a7', m: 13, t: 'Einzelaktien auswählen: ein Leitfaden für Einsteiger',
      hook: 'Optional und riskant, aber faszinierend. So liest du ein Unternehmen, ohne auf Geschichten hereinzufallen.',
      body: `
<p>Der Großteil deiner Geldanlage kann (und sollte wohl) aus Indexfonds bestehen. Aber viele wollen lernen, wie man einzelne Unternehmen analysiert. Wenn du das tust, betrachte es als <b>Satellit</b>: ein kleiner Teil deines Geldes (zum Beispiel 5 bis 15 %) und eine Möglichkeit zu lernen, nicht um schnell reich zu werden.</p>

<h3>Schritt 1: Das Geschäft verstehen</h3>
<p>Kannst du in zwei Sätzen erklären, wie dieses Unternehmen Geld verdient und warum Kunden es der Konkurrenz vorziehen? Wenn nicht, rätst du. Peter Lynch, ein berühmter Fondsmanager, machte die Idee populär, in das zu investieren, was man versteht („dein Kompetenzkreis“).</p>

<h3>Schritt 2: Die wichtigsten Zahlen lesen</h3>
<ul>
<li><b>Umsatzwachstum</b>: Wachsen die Verkäufe stetig?</li>
<li><b>Gewinnmarge</b>: Gewinn geteilt durch Umsatz. Höhere Margen deuten oft auf Preissetzungsmacht hin.</li>
<li><b>Gewinn je Aktie (EPS)</b>: Nettogewinn geteilt durch die Zahl der Aktien.</li>
<li><b>Freier Cashflow</b>: echtes Geld, das nach Betrieb und Investitionen übrig bleibt. Schwer zu fälschen.</li>
<li><b>Schulden</b>: Zu viele Schulden machen ein Unternehmen anfällig. Vergleiche Schulden mit Gewinn und Cashflow.</li>
<li><b>Eigenkapitalrendite (ROE)</b>: wie effizient das Unternehmen das Geld der Aktionäre in Gewinn verwandelt.</li>
<li><b>Burggraben (Moat)</b>: ein dauerhafter Vorteil wie Marke, Netzwerkeffekte, Patente oder niedrige Kosten.</li>
</ul>

<h3>Schritt 3: Bewertung: welcher Preis ist fair?</h3>
<p>Ein wunderbares Unternehmen kann trotzdem eine schlechte Anlage sein, wenn du zu viel zahlst. Das einfachste Werkzeug ist das <b>KGV</b> (Kurs-Gewinn-Verhältnis, P/E): Kurs geteilt durch Gewinn je Aktie.</p>
${B.ex('<p><b>SnackCo</b> (fiktiv) hat 600 Mio. € Umsatz, 60 Mio. € Nettogewinn (10 % Marge) und 20 Mio. Aktien. EPS = 60 Mio. € ÷ 20 Mio. = <b>3 €</b>. Der Aktienkurs liegt bei 60 €, also KGV = 60 ÷ 3 = <b>20</b>. Das heißt, du zahlst 20 € für jeden Euro Jahresgewinn, eine „Gewinnrendite“ von 5 %. Wenn ähnliche Snack-Unternehmen mit KGV 15 gehandelt werden und SnackCo schneller wächst, kann 20 fair sein. Stockt das Wachstum, kann es teuer sein. Außerdem zahlt es eine Dividende von 1,20 € je Aktie: 2 % Rendite und 40 % Ausschüttungsquote, mit Spielraum für Wachstum.</p>')}
<p>Weitere Bewertungswerkzeuge: Kurs-Umsatz-Verhältnis (KUV), Kurs zu freiem Cashflow und der Vergleich mit Wettbewerbern und der eigenen Historie des Unternehmens.</p>

<h3>Schritt 4: Über das Risiko nachdenken</h3>
<ul>
<li>Was könnte dieses Geschäft dauerhaft beschädigen (neue Technologie, Regulierung, ein Schlüsselkunde)?</li>
<li>Wie groß wird der Anteil an deinem Portfolio sein? Begrenze jede Einzelaktie auf einen kleinen Prozentsatz.</li>
<li>Was würde dich zum Verkauf bewegen? Entscheide es vorher (die These ist gebrochen, nicht „der Kurs ist gefallen“).</li>
</ul>

<h3>Fallen, die du meiden solltest</h3>
<ul>
<li><b>Story-Aktien</b>: tolle Erzählung, keine Gewinne und ein Preis, der Perfektion voraussetzt.</li>
<li><b>Heiße Tipps</b> von Freunden, Foren und Videos. Frag, warum sie dir das erzählen.</li>
<li><b>Billig ist nicht immer gut</b>: Ein niedriges KGV kann bedeuten, dass der Markt mit einbrechenden Gewinnen rechnet.</li>
<li><b>Übertrading</b>: ständiges Kaufen und Verkaufen bringt Kosten und Fehler.</li>
</ul>

${B.warn('<p>Selbst professionelle Analysten mit Teams und Datenbanken schlagen den Markt meistens nicht. Wenn du Aktien auswählst, halte deinen Kern in einem diversifizierten Fonds, damit dein Lernen günstig bleibt.</p>')}

${B.take(['Betrachte Aktienauswahl als kleinen Satelliten, nicht als deinen ganzen Plan.', 'Verstehe zuerst das Geschäft, dann prüfe Wachstum, Margen, Schulden und Cashflow.', 'KGV = Kurs ÷ Gewinn je Aktie; vergleiche es mit Wettbewerbern und Wachstum, nie isoliert.', 'Entscheide vorher, was dich zum Verkauf bringt, und begrenze die Größe jeder Position.'])}`,
      q: [
        ['Ein Unternehmen hat einen Aktienkurs von 50 € und ein EPS von 2,50 €. Wie hoch ist das KGV?', ['5', '20', '50', '125'], 1, '50 ÷ 2,5 = 20.'],
        ['Warum schätzen Analysten den „freien Cashflow“?', ['Er ist leicht zu fälschen', 'Er zeigt das echte Geld, das nach Betrieb und Investitionen übrig bleibt', 'Er entspricht immer dem Gewinn', 'Er zählt nur für Banken'], 1, 'Bargeld lässt sich schwerer manipulieren als der buchhalterische Gewinn.'],
        ['Wie behandelst du als Anfänger die Auswahl von Einzelaktien klug?', ['100 % der Ersparnisse in eine Aktie stecken', 'Als kleiner Satellit neben einem diversifizierten Kern', 'Kredit aufnehmen, um mehr zu kaufen', 'Tipps von Fremden folgen'], 1, 'Ein kleiner Anteil hält dein Lernen bezahlbar und deinen Plan sicher.']
      ]
    },
    {
      id: 'a8', m: 9, t: 'Dein 12-Monats-Aktionsplan',
      hook: 'Verwandle alles Gelernte in eine Seite und einen Kalender. Pläne schlagen Absichten.',
      body: `
<p>Glückwunsch. Du weißt jetzt mehr über Geldanlage als die meisten Erwachsenen. Wissen zahlt sich erst aus, wenn es zur Tat wird. Hier ist eine einfache Roadmap für 12 Monate.</p>

<h3>Die Roadmap</h3>
${B.tbl(['Wann', 'Aktion'], [
        ['Monat 1', 'Erstelle dein Budget. Eröffne ein Sparkonto für die Notfallreserve und automatisiere eine Überweisung am Zahltag.'],
        ['Monat 2', 'Zahle hochverzinste Schulden ab. Recherchiere steuerbegünstigte Konten in deinem Land.'],
        ['Monat 3', 'Wähle einen regulierten Broker, eröffne das Konto, aktiviere die Zwei-Faktor-Authentifizierung und lies das Preisverzeichnis.'],
        ['Monat 4', 'Schreibe deinen Ein-Seiten-Plan (unten). Mach deine erste kleine Anlage in einen breiten, günstigen ETF.'],
        ['Monate 5 bis 9', 'Investiere jeden Monat automatisch. Schau nicht täglich auf die Kurse. Erreiche 3 Monate Notfallreserve.'],
        ['Monat 10', 'Überprüfung: Folgst du deinem Plan? Prüfe die Kosten. Rebalanciere, wenn ein Anteil um mehr als 5 Punkte abgedriftet ist.'],
        ['Monat 12', 'Erhöhe deinen Monatsbetrag, wenn das Einkommen es erlaubt. Überprüfe Ziele. Bring jemand anderem bei, was du gelernt hast.']
      ])}

<h3>Baue deinen Ein-Seiten-Plan</h3>
<p>Ein professioneller Anleger schreibt eine <b>Anlagerichtlinie</b> (Investment Policy Statement). Eine Mini-Version schaffst du in einer Minute. Probier es aus: Sie nimmt dein Ziel, deinen Zeithorizont und deine Risikobereitschaft und erstellt einen Beispielplan, den du kopieren und verfeinern kannst.</p>
${B.w('ips')}

<h3>Wie Erfolg aussieht</h3>
<ul>
<li><b>Jahr 1</b>: Du hast die Gewohnheit und das Sicherheitsnetz aufgebaut. Der Betrag auf deinem Konto zählt weniger als die Routine.</li>
<li><b>Jahr 5</b>: Du hast mindestens einen schlechten Markt erlebt, ohne deinen Plan zu brechen. Deine Einzahlungen sind gewachsen.</li>
<li><b>Jahr 10+</b>: Der Zinseszins wird sichtbar, die Erträge deines Portfolios reichen an das heran, was du jedes Jahr einzahlst.</li>
</ul>

<h3>Häufige Fehler, die du ein letztes Mal meiden solltest</h3>
<ol>
<li>Auf den „perfekten Zeitpunkt“ warten, statt klein zu starten.</li>
<li>Geld anlegen, das du bald brauchst.</li>
<li>Dem Gewinner des letzten Jahres oder einem Tipp von Freunden hinterherjagen.</li>
<li>Hohe Gebühren zahlen, ohne es zu merken.</li>
<li>In Panik verkaufen.</li>
<li>Dich von Aufregung in Hebel, Derivate oder komplexe Produkte treiben lassen.</li>
</ol>

${B.key('<p>Vermögensaufbau ist absichtlich langweilig. Wenn sich dein Plan jeden Tag aufregend anfühlt, stimmt etwas nicht. Die Aufregung kommt später, wenn du nach zehn Jahren deinen Kontostand siehst und merkst, dass beständige, geduldige, gewöhnliche Entscheidungen etwas Außergewöhnliches bewirkt haben.</p>')}

${B.take(['Folge der 12-Monats-Roadmap: Basis, Broker, Plan, Automatisierung, Überprüfung.', 'Schreibe einen Ein-Seiten-Plan, damit Entscheidungen vorher in Ruhe getroffen werden.', 'Langweilig und beständig schlägt aufregend und sprunghaft.', 'Nächste Schritte: Entdecke den Pro-Pfad oder die Krypto- und Trading-Pfade, wenn sie dich interessieren.'])}`,
      q: [
        ['Was ist der Hauptzweck einer Anlagerichtlinie?', ['Märkte vorherzusagen', 'Deine Regeln aufzuschreiben, damit du ruhig und beständig handelst', 'Jedes Risiko zu vermeiden', 'Freunde zu beeindrucken'], 1, 'Ein schriftlicher Plan schützt dich vor emotionalen Entscheidungen.'],
        ['Wann solltest du nach den einfachen Regeln dieses Kurses rebalancieren?', ['Jeden Tag', 'Einmal im Jahr oder wenn ein Anteil etwa 5 Punkte vom Ziel abweicht', 'Nie', 'Nur nach einem Crash'], 1, 'Sowohl der Kalender- als auch der Schwellenansatz halten das Risiko nahe an deinem Ziel.'],
        ['Was ist ein Zeichen, dass dein Plan wahrscheinlich gesund ist?', ['Er verlangt stündliche Kurskontrolle', 'Er ist einfach, automatisch, und du kannst ihm auch im Crash weiter folgen', 'Er nutzt Hebel, um Dinge zu beschleunigen', 'Er hängt von einem heißen Tipp ab'], 1, 'Der beste Plan ist der, den du durchhalten kannst.']
      ]
    }
  ]);
})();
