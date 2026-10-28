/* Geld-Grundlagen: 6 Lektionen */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('found', [
    {
      id: 'f1', m: 9, t: 'Geld, Inflation und warum Sparen allein nicht reicht',
      hook: 'Dein Geld verliert gerade leise an Kaufkraft. So misst du es und das kannst du dagegen tun.',
      body: `
<p>Stell dir vor, eine Pizza kostet heute <b>10 €</b>. Steigen die Preise jedes Jahr um 3 %, kostet dieselbe Pizza in 20 Jahren etwa <b>18 €</b>. An der Pizza hat sich nichts geändert. Das Geld kauft nur weniger. Dieses langsame Schrumpfen heißt <b>Inflation</b>, und sie ist der Hauptgrund, warum es kein sicherer Plan ist, alles Geld in einer Schublade (oder auf einem 0-%-Konto) zu lassen. Es ist ein schleichendes Leck.</p>

<h3>Was Geld eigentlich tut</h3>
<p>Geld hat drei Aufgaben. Es ist ein <b>Tauschmittel</b> (du tauschst es gegen Dinge), eine <b>Recheneinheit</b> (Preise werden darin angegeben) und ein <b>Wertspeicher</b> (du kannst es für später aufheben). Die Inflation greift die dritte Aufgabe an. Über ein paar Monate merkst du kaum etwas. Über 20 Jahre ist es gewaltig.</p>

<h3>Wie Inflation funktioniert</h3>
<p>Gibt es in der Wirtschaft mehr Geld und Nachfrage als Dinge zu kaufen, oder wird die Produktion teurer (Energie, Löhne, Transport), steigen die Preise. Zentralbanken wie die Europäische Zentralbank oder die US-Notenbank Fed streben etwa <b>2 % Inflation pro Jahr</b> an, was sie für gesund halten. Manchmal springt sie viel höher, wie 2022, als in vielen Ländern die Preise in einem einzigen Jahr um 8 % oder mehr stiegen.</p>

${B.key('<p><b>Nominal vs. real.</b> Wachsen deine Ersparnisse um 2 %, aber die Preise steigen um 3 %, bist du nicht reicher geworden. Deine <i>reale</i> Rendite liegt bei etwa -1 %. Frag dich immer: Was kann ich mit diesem Geld später kaufen, nicht nur, wie viele Euro ich haben werde?</p>')}

<h3>Spür es selbst</h3>
<p>Bewege die Regler unten. Sieh, wie brutal 6 % Inflation über 30 Jahre ist und wie viel Unterschied selbst eine bescheidene Rendite macht.</p>
${B.w('inflation')}

<h3>Die 72er-Regel</h3>
<p>Ein praktischer Trick: Teile 72 durch den Jahreszinssatz in Prozent, um abzuschätzen, in wie vielen Jahren sich etwas verdoppelt. Bei 3 % Inflation verdoppeln sich die Preise in etwa <b>24 Jahren</b> (72 ÷ 3). Bei 7 % Wachstum einer Geldanlage verdoppelt sich das Geld in etwa <b>10 Jahren</b> (72 ÷ 7). Wir nutzen das in der Lektion zum Zinseszins wieder.</p>

${B.ex('<p>Marta ist 19 und hat 5.000 € aus Ferienjobs in einer Schublade. Bei 3 % Inflation sind es in 10 Jahren auf dem Papier immer noch 5.000 €, aber sie kaufen, was heute etwa 3.700 € kaufen. Ihr Freund Diogo legt dieselben 5.000 € in einen breit gestreuten Fonds. Der steigt nicht geradlinig (es gibt gute und schlechte Jahre), aber historisch haben solche Fonds die Inflation über lange Zeiträume geschlagen. Keine der beiden Entscheidungen ist risikofrei. Nichtstun ist auch eine Entscheidung, und sie hat ihren Preis.</p>')}

<h3>Sparen vs. Investieren: zwei verschiedene Aufgaben</h3>
<ul>
<li><b>Sparen</b> ist für kurzfristige Bedürfnisse und Sicherheit: Notfälle, der Urlaub im nächsten Jahr, ein Laptop. Das Geld soll da sein, stabil und leicht erreichbar.</li>
<li><b>Investieren</b> ist für langfristige Ziele (5 Jahre oder mehr): Du kaufst Vermögenswerte, die schneller als die Inflation wachsen können, und akzeptierst, dass der Wert unterwegs steigt und fällt.</li>
</ul>
<p>Du brauchst beides. Ersparnisse schützen dich vor Notfällen, damit du nie in einem schlechten Moment Anlagen verkaufen musst.</p>

${B.warn('<p>„Investieren“ ist kein Zauberwort für „Geld verdienen“. Es bedeutet, ein Risiko einzugehen für die <i>Chance</i> auf höhere Renditen. Du kannst Geld verlieren. Im Rest dieses Kurses geht es darum, dieses Risiko klug einzugehen.</p>')}

${B.take(['Inflation verringert stetig, was dein Geld kaufen kann, meist um etwa 2 bis 3 % pro Jahr.', 'Schau auf reale Renditen (nach Inflation), nicht nur auf nominale Zahlen.', 'Ersparnisse dienen der Stabilität und Notfällen; Investieren dem langfristigen Wachstum.', 'Die 72er-Regel schätzt die Verdopplungszeit: 72 geteilt durch den Jahreszins.'])}`,
      q: [
        ['Dein Sparkonto zahlt 1 % und die Inflation beträgt 3 %. Was passiert mit deiner Kaufkraft?', ['Sie wächst um 1 %', 'Sie sinkt um etwa 2 % pro Jahr', 'Sie bleibt gleich', 'Sie sinkt um 4 %'], 1, 'Die reale Rendite ist grob der Zins minus Inflation: 1 % - 3 % = etwa -2 %.'],
        ['Wie lange brauchen Preise mit der 72er-Regel, um sich bei 4 % Inflation zu verdoppeln?', ['8 Jahre', '12 Jahre', '18 Jahre', '36 Jahre'], 2, '72 ÷ 4 = 18 Jahre.'],
        ['Was ist die beste Verwendung für ein Sparkonto?', ['Geld, das du in den nächsten 1 bis 2 Jahren brauchst, und Notfälle', 'Dein Rentengeld für die nächsten 40 Jahre', 'Schnell reich werden', 'Auf die Börse wetten'], 0, 'Ersparnisse sind für kurzfristige Bedürfnisse und Sicherheit. Langfristige Ziele brauchen meist Geldanlagen.']
      ]
    },
    {
      id: 'f2', m: 10, t: 'Dein Geldfundament: Budget, Notgroschen und Schulden',
      hook: 'Bevor du auch nur einen Euro investierst, baue das Fundament, das verhindert, dass dich das Leben umwirft.',
      body: `
<p>Die meisten Anlagetipps beginnen mit „kauf diesen Fonds“. Kluges Investieren beginnt <b>früher</b>: mit einem Budget, einem Sicherheitspolster und einem Plan für Schulden. Überspringst du diesen Schritt, kann ein kaputtes Handy oder ein Jobverlust dich zwingen, Anlagen zum schlechtesten Zeitpunkt zu verkaufen.</p>

<h3>Schritt 1: Wisse, wohin dein Geld geht</h3>
<p>Eine beliebte Startregel ist die <b>50/30/20-Regel</b>: etwa 50 % des Einkommens nach Steuern gehen an <b>Bedürfnisse</b> (Miete, Essen, Verkehr, Rechnungen), 30 % an <b>Wünsche</b> (Spaß, Abos, auswärts essen) und 20 % ans <b>Sparen und Investieren</b>. Das ist ein Leitfaden, kein Gesetz. Wenn du Student bist und 400 € im Monat verdienst, sind 20 % genau 80 €, und das ist ein völlig guter Anfang. Wichtig ist, die Gewohnheit aufzubauen.</p>
${B.w('budget')}

<h3>Schritt 2: Zahl zuerst dich selbst</h3>
<p>Spare nicht „was übrig bleibt“. Richte am Zahltag eine automatische Überweisung auf dein Sparkonto ein, <i>bevor</i> du es ausgeben kannst. Behandle sie wie eine Rechnung, die du deinem zukünftigen Ich schuldest. Automatisierung schlägt Willenskraft.</p>

<h3>Schritt 3: Der Notgroschen</h3>
<p>Ein <b>Notgroschen</b> ist Geld, das sicher und leicht zugänglich für Überraschungen liegt: Autoreparatur, Arztkosten, Jobverlust. Das übliche Ziel sind <b>3 bis 6 Monate an notwendigen Ausgaben</b> auf einem normalen Sparkonto (nicht in Aktien oder Krypto). Studierende und junge Leute mit niedrigen Kosten können mit einem Monat beginnen und von dort aufbauen.</p>
${B.ex('<p>Rui investiert 2.000 € in Aktien, hat aber keinen Notgroschen. Drei Monate später geht sein Laptop kaputt, und er braucht sofort 700 €. Der Markt steht zufällig 15 % im Minus, also verkauft er mit Verlust und macht ihn endgültig. Ana hat denselben Betrag investiert, aber zuerst 1.000 € auf dem Sparkonto behalten. Sie bezahlte den Laptop vom Ersparten, ihre Anlagen blieben unangetastet und erholten sich später. Gleiche Anlagen, sehr unterschiedliches Ergebnis, dank des Polsters.</p>')}

<h3>Schritt 4: Geh klug mit Schulden um</h3>
<ul>
<li><b>Hochverzinste Schulden</b> (Kreditkarten, Dispo, Schnellkredite, oft 15 bis 25 % im Jahr oder mehr) sind wie eine garantierte negative Rendite. Sie zu tilgen schlägt fast jede Geldanlage. Mach das zuerst.</li>
<li><b>Niedrig verzinste Schulden</b> (etwa manche Studien- oder Baukredite zu niedrigen Zinsen) sind normal. Du kannst sie weiter abbezahlen, während du mit dem Investieren beginnst.</li>
<li>Leihe dir <b>niemals</b> Geld, um in riskante Anlagen zu investieren. Verluste vervielfachen sich, und die Schuld bleibt.</li>
</ul>

<h3>Schritt 5: Investiere in dein größtes Kapital: dich</h3>
<p>Wenn du jung bist, ist die beste „Geldanlage“ oft Können: ein Handwerk, eine Sprache, Programmieren, Verkaufen. Dein Einkommen um 200 € im Monat zu steigern, ist mehr wert als 10 % Rendite auf 1.000 €. Investieren in Fähigkeiten und Investieren von Geld ergänzen sich.</p>

${B.w('checklist', { key: 'f2', title: 'Deine Checkliste fürs Geldfundament', accent: 'found', items: 'Ich weiß grob, was ich jeden Monat verdiene und ausgebe|Ich habe ein eigenes Sparkonto für Notfälle|Ich habe eine automatische monatliche Überweisung aufs Sparkonto eingerichtet|Ich habe mindestens 1 Monat an notwendigen Ausgaben gespart (Ziel: 3 bis 6)|Ich habe keine hochverzinsten Schulden oder einen Plan, sie zu tilgen|Mir ist klar, dass ich nur Geld investieren sollte, das ich 5+ Jahre nicht brauche' })}

${B.take(['Baue zuerst das Fundament: Budget, Notgroschen, keine hochverzinsten Schulden.', 'Nutze 50/30/20 als Startleitfaden und automatisiere das Sparen am Zahltag.', 'Halte den Notgroschen auf einem sicheren, zugänglichen Konto, nicht in riskanten Anlagen.', 'Eine Kreditkarte mit 20 % zu tilgen, ist eine garantierte Rendite von 20 %.'])}`,
      q: [
        ['Welche Schulden solltest du meist VOR dem Investieren tilgen?', ['Einen Studienkredit mit 3 %', 'Eine Kreditkarte mit 20 % pro Jahr', 'Keine, investiere immer zuerst', 'Schulden bei einem Freund zu 0 %'], 1, 'Hochverzinste Schulden sind ein garantierter Verlust, der typische Anlagerenditen schlägt.'],
        ['Wo ist der beste Ort für einen Notgroschen?', ['Aktien', 'Krypto', 'Ein sicheres, leicht zugängliches Sparkonto', 'Aktien eines einzelnen Unternehmens'], 2, 'Entscheidend ist, dass das Geld verfügbar und stabil ist, wenn du es brauchst.'],
        ['Was bedeutet „zahl zuerst dich selbst“?', ['Zuerst für dich selbst Geld ausgeben', 'Automatisch sparen, sobald du bezahlt wirst, bevor du ausgibst', 'Geld leihen, um zu investieren', 'Rechnungen nicht bezahlen'], 1, 'Automatisches Sparen am Zahltag macht es zur Gewohnheit und nimmt die Versuchung, das Geld auszugeben.']
      ]
    },
    {
      id: 'f3', m: 10, t: 'Risiko, Rendite und Zeit',
      hook: 'Warum höhere Renditen immer mit Holpern kommen und wie die Zeit die Rechnung verändert.',
      body: `
<p>Hier die wichtigste Regel der Finanzwelt: <b>Höhere mögliche Rendite kommt mit höherem Risiko</b>. Bietet dir jemand hohe Rendite ohne Risiko an, lügt er entweder, oder du bist das Produkt.</p>

<h3>Was Risiko wirklich bedeutet</h3>
<p>Im Alltag heißt Risiko „ich könnte Geld verlieren“. Profis betrachten zwei Dinge:</p>
<ul>
<li><b>Volatilität</b>: wie stark der Preis herumspringt. Ein Aktienfonds kann in einem schlechten Jahr 30 % fallen und sich später erholen. Das ist Volatilität.</li>
<li><b>Dauerhafter Verlust</b>: das Geld ist für immer weg. Ein Unternehmen, das pleitegeht, ein Betrug, eine Münze, die auf null fällt.</li>
</ul>
<p>Volatilität ist der Preis, den du für höhere Renditen zahlst. Dauerhaften Verlust versuchst du durch Streuung und gute Entscheidungen zu vermeiden.</p>

${B.w('ladder')}

<h3>Zeit verändert alles</h3>
<p>Dein <b>Anlagehorizont</b> ist die Zeit, bis du das Geld brauchst. Aktien können in einem Jahr wild schwanken, aber über 15 bis 20 Jahre haben breit gestreute Aktienmärkte geduldige Anleger historisch belohnt. Über 1 Jahr ist das Ergebnis fast ein Münzwurf. Über 20 Jahre deutlich weniger (aber nie garantiert).</p>
${B.key('<p><b>Die 5-Jahres-Faustregel.</b> Geld, das du innerhalb von etwa 5 Jahren brauchst, gehört nicht in volatile Anlagen wie Aktien oder Krypto. Kommt kurz vor dem Bedarf ein Crash, bleibt keine Zeit zur Erholung.</p>')}

<h3>Risikotoleranz vs. Risikotragfähigkeit</h3>
<ul>
<li><b>Risikotragfähigkeit</b>: wie viel Verlust du finanziell verkraften kannst (stabiles Einkommen, keine Schulden, langer Horizont = hohe Tragfähigkeit).</li>
<li><b>Risikotoleranz</b>: wie viel Verlust du emotional aushältst, ohne in Panik zu verkaufen.</li>
</ul>
<p>Dein echtes Risikoniveau ist der <i>niedrigere</i> der beiden Werte. Ein junger Mensch mit langem Horizont hat vielleicht hohe Tragfähigkeit, aber würde ihn ein 30-%-Einbruch alles verkaufen lassen, ist seine Toleranz niedrig, und der Plan muss das respektieren.</p>

${B.ex('<p>Denk an eine Achterbahn und einen Zug in dieselbe Stadt. Die Achterbahn (Aktien) ist aufregend und holprig und kann dich auf einer langen Fahrt weiter bringen. Der Zug (Anleihen, Sparen) fährt sanft, aber langsamer. Wird dir in Achterbahnen schlecht und du steigst auf halber Strecke aus, kommst du nirgends an. Wähle die Fahrt, die du zu Ende bringen kannst.</p>')}

<h3>Streuung: das einzige kostenlose Mittagessen</h3>
<p>Leg nicht alle Eier in einen Korb. Wer Geld auf viele Unternehmen, Länder und Anlageklassen verteilt, kann durch ein einzelnes Unglück nicht zerstört werden. Ökonomen nennen Streuung das, was einem kostenlosen Mittagessen beim Investieren am nächsten kommt: Sie senkt das Risiko, ohne unbedingt die erwartete Rendite zu senken. Du übst sie im Investor-Pfad.</p>

${B.warn('<p>Vergangene Renditen sind kein Versprechen. „Letztes Jahr plus 300 %“ sagt fast nichts über nächstes Jahr, und dem Gewinner des Vorjahres hinterherzulaufen ist einer der häufigsten Anfängerfehler.</p>')}

${B.take(['Höhere erwartete Rendite kommt mit höherem Risiko. Ohne Ausnahme.', 'Volatilität sind zeitweilige Auf und Abs; dauerhafter Verlust ist der wahre Feind.', 'Geld, das du in etwa 5 Jahren brauchst, gehört nicht in volatile Anlagen.', 'Dein wahres Risikoniveau ist der niedrigere Wert aus finanzieller Tragfähigkeit und emotionaler Toleranz.', 'Streuung senkt das Risiko, ohne unbedingt die erwartete Rendite zu senken.'])}`,
      q: [
        ['Ein Freund verspricht „20 % im Jahr, garantiert, ohne Risiko“. Die klügste Reaktion ist…', ['Schnell alles investieren', 'Sehr misstrauisch sein: hohe Renditen ohne Risiko gibt es nicht', 'Um einen Rabatt bitten', 'Geld leihen, um mehr zu investieren'], 1, 'Rendite und Risiko gehören zusammen. Garantierte hohe Renditen sind ein klassisches Betrugssignal.'],
        ['Du brauchst in 2 Jahren Geld für die Anzahlung auf ein Haus. Was passt am besten?', ['100 % in eine volatile Kryptomünze', 'Überwiegend sicheres, stabiles Erspartes', '100 % in eine einzelne Aktie', 'Ein gehebelter Trade'], 1, 'Kurze Horizonte brauchen Stabilität, damit ein Crash den Plan nicht kurz vor dem Bedarf ruiniert.'],
        ['Was ist der Unterschied zwischen Risikotragfähigkeit und Risikotoleranz?', ['Sie sind dasselbe', 'Tragfähigkeit ist, was du dir zu verlieren leisten kannst; Toleranz ist, was du emotional aushältst', 'Tragfähigkeit ist emotional; Toleranz ist finanziell', 'Toleranz zählt nur für Trader'], 1, 'Beides zählt. Deine echte Grenze ist der niedrigere der beiden Werte.']
      ]
    },
    {
      id: 'f4', m: 11, t: 'Die Magie des Zinseszinses',
      hook: 'Der Schneeballeffekt, der kleine regelmäßige Beträge in ernstes Geld verwandelt, und warum früh anfangen wichtiger ist als groß anfangen.',
      body: `
<p><b>Zinseszins</b> heißt, Rendite auf deine Rendite zu verdienen. Stell dir vor, du rollst einen kleinen Schneeball einen langen Hang hinunter. Anfangs wächst er kaum. Später fügt jede Umdrehung mehr Schnee hinzu, weil schon viel Schnee da ist, an dem er haften bleibt. Das ist Zinseszins.</p>

<h3>Einfach vs. zusammengesetzt</h3>
<p>Bei einfachem Zins bringen 1.000 € zu 10 % jedes Jahr 100 €, für immer: Nach 10 Jahren hast du 2.000 €. Beim Zinseszins wird jedes Jahr der Zins von 10 % auf den <i>neuen, größeren</i> Betrag berechnet: Nach 10 Jahren hast du etwa <b>2.594 €</b>. Nach 30 Jahren ergibt einfacher Zins 4.000 €, der Zinseszins dagegen etwa <b>17.450 €</b>. Gleicher Satz, gleicher Start, radikal anderes Ergebnis.</p>

<h3>Spiel mit der Maschine</h3>
<p>Probier es aus: Wähle einen Monatsbetrag, eine Rendite und eine Anzahl Jahre. Dann nutze den „Warten“-Regler, um zu sehen, was passiert, wenn du 10 Jahre später anfängst.</p>
${B.w('compound', { wait: 10 })}

${B.ex('<p><b>Anna gegen Ben.</b> Anna beginnt mit 20, monatlich 100 € zu investieren, und hört mit 30 auf (10 Jahre, 12.000 € eingezahlt), ohne je wieder einen Cent hinzuzufügen. Ben wartet bis 30 und investiert 100 € im Monat bis 60 (30 Jahre, 36.000 € eingezahlt). Bei 7 % im Jahr kann Anna mit 60 einen ähnlichen Betrag oder sogar mehr haben, obwohl sie nur ein Drittel eingezahlt hat. Warum? Ihr Geld hatte 10 Jahre mehr Schneeball. Zeit schlägt Betrag.</p>')}

<h3>Die drei Hebel des Zinseszinses</h3>
<ol>
<li><b>Zeit</b>: der stärkste Hebel, und der einzige, den du nicht zurückkaufen kannst. Fang jetzt an, auch klein.</li>
<li><b>Regelmäßige Einzahlungen</b>: Stetig Geld nachzulegen, füttert den Schneeball weiter.</li>
<li><b>Rendite</b>: Höhere Renditen helfen, kommen aber mit höherem Risiko und Gebühren. Jage ihnen nicht auf Kosten der ersten beiden hinterher.</li>
</ol>

<h3>Zinseszins wirkt auch gegen dich</h3>
<p>Kreditkartenschulden mit 20 % wachsen gegen dich. Das tun auch <b>Gebühren</b>: Ein Fonds, der 2 % im Jahr kostet, kann über Jahrzehnte einen großen Teil deines Endergebnisses auffressen (das messen wir im Investor-Pfad).</p>

${B.key('<p><b>Der beste Zeitpunkt anzufangen war gestern. Der zweitbeste ist heute.</b> Deine ersten 50 € im Monat sind für deine Zukunft wichtiger als eine perfekte Strategie, die du in fünf Jahren startest.</p>')}

${B.warn('<p>Echte Anlagen wachsen nicht in glatter Linie. Ein „Durchschnitt von 7 %“ kann +25 % in einem Jahr und -15 % im nächsten bedeuten. Die Kurve im Widget ist eine geglättete Darstellung. Verlass dich nie auf eine versprochene Rendite.</p>')}

${B.take(['Zinseszins heißt, Rendite auf frühere Renditen zu verdienen, deshalb beschleunigt sich das Wachstum mit der Zeit.', 'Früh anfangen schlägt später mehr investieren: Zeit ist der stärkste Hebel.', 'Regelmäßige Einzahlungen plus Geduld bauen Vermögen auf; auf den „perfekten Moment“ zu warten, kostet Geld.', 'Der Zinseszins wirkt auch gegen dich bei Schulden und hohen Gebühren.'])}`,
      q: [
        ['Wie lange braucht Geld ungefähr, um sich bei 8 % im Jahr zu verdoppeln (72er-Regel)?', ['4 Jahre', '9 Jahre', '15 Jahre', '20 Jahre'], 1, '72 ÷ 8 = 9 Jahre.'],
        ['Welcher Faktor ist beim Zinseszins am STÄRKSTEN?', ['Das heißeste Asset auswählen', 'Zeit', 'Täglich die Kurse prüfen', 'Nur ein hoher Startbetrag'], 1, 'Zeit lässt Wachstum auf Wachstum aufbauen. Verlorene Jahre kann man nicht zurückkaufen.'],
        ['Warum kann eine jährliche Fondsgebühr von 2 % über Jahrzehnte so schädlich sein?', ['Sie wird nur einmal erhoben', 'Sie wirkt gegen dich und verkleinert die Basis, die jedes Jahr wächst', 'Sie ist steuerlich absetzbar', 'Sie zählt nur in Bärenmärkten'], 1, 'Gebühren zahlst du jedes Jahr, also verlierst du die Gebühr und das ganze künftige Wachstum, das dieses Geld erwirtschaftet hätte.']
      ]
    },
    {
      id: 'f5', m: 13, t: 'Der Werkzeugkasten des Anlegers: Aktien, Anleihen, Fonds, ETFs und mehr',
      hook: 'Eine Tour in einfacher Sprache durch alles, worin du investieren kannst, wie jedes Geld verdient und was schiefgehen kann.',
      body: `
<p>Auf deiner Reise als Anleger begegnen dir viele Namen. Hier ist der komplette Werkzeugkasten, einfach erklärt.</p>

<h3>Die wichtigsten Anlageklassen</h3>
<ul>
<li><b>Bargeld und Sparguthaben</b>: stabil, niedrige Rendite, durch Einlagensicherung bis zu einer Grenze geschützt (in der EU meist 100.000 € pro Bank).</li>
<li><b>Aktien</b>: Dir gehört ein kleines Stück eines Unternehmens. Du verdienst durch steigende Kurse und Dividenden (ein Anteil am Gewinn). Hohes langfristiges Potenzial, große Schwankungen.</li>
<li><b>Anleihen</b>: Du leihst einer Regierung oder einem Unternehmen Geld und bekommst regelmäßig Zinsen plus am Ende dein Geld zurück. Meist ruhiger als Aktien, aber die Kurse fallen, wenn die Zinsen steigen, und Firmen können ausfallen.</li>
<li><b>Fonds und ETFs</b>: Körbe mit vielen Aktien oder Anleihen auf einmal, sodass du mit einem Kauf streust.</li>
<li><b>Immobilien</b>: Gebäude oder börsennotierte Immobilienunternehmen (REITs). Mieteinnahmen plus Preisänderungen. Große Beträge, schwer schnell zu verkaufen, braucht oft einen Kredit.</li>
<li><b>Rohstoffe und Gold</b>: Rohmaterialien. Gold wird oft als „sicherer Hafen“ gehalten und bringt keine Erträge.</li>
<li><b>Krypto-Assets</b>: digitale Werte auf Blockchains wie Bitcoin und Ethereum. Sehr volatil, mit zusätzlichen Sicherheits- und Betrugsrisiken. Die Krypto-Pfade behandeln sie ausführlich.</li>
<li><b>Derivate</b> (Futures, Optionen, CFDs): Verträge, deren Wert von einem anderen Asset abhängt, oft mit Hebel. Fortgeschritten, hochriskant und eine Hauptursache für Anfängerverluste.</li>
</ul>

${B.tbl(['Anlage', 'So verdient sie Geld', 'Hauptrisiko', 'Geeignet für'], [
        ['Sparen', 'Zinsen', 'Die Inflation schlägt die Zinsen', 'Notfälle, kurzfristige Ziele'],
        ['Aktien', 'Kurswachstum + Dividenden', 'Starke Einbrüche, Firmenpleite', 'Langfristiges Wachstum (5+ Jahre)'],
        ['Anleihen', 'Zinszahlungen', 'Steigende Zinsen, Zahlungsausfall', 'Stabilität, mittlerer Horizont'],
        ['ETFs / Fonds', 'Was sie enthalten', 'Wie die enthaltenen Anlagen, plus Gebühren', 'Einfache Streuung'],
        ['Immobilien', 'Miete + Wertsteigerung', 'Schlecht handelbar, Schulden, lokaler Markt', 'Langer Horizont, größeres Kapital'],
        ['Krypto', 'Kursänderungen (meist)', 'Extreme Volatilität, Betrug, Hacks', 'Nur eine kleine Beimischung'],
        ['Derivate / CFDs', 'Gehebelte Kurswetten', 'Schnell mehr verlieren als erwartet', 'Nur erfahrene Trader']
      ])}

<h3>Anleihen in 30 Sekunden</h3>
<p>Stell dir vor, du leihst einer Regierung 10 Jahre lang 1.000 €, und sie zahlt dir jedes Jahr 3 % (30 €) und gibt dir dann deine 1.000 € zurück. Einfach. Der Haken: Zahlen neue Anleihen plötzlich 5 %, will niemand deine 3-%-Anleihe zum vollen Preis, also fällt ihr Kurs. Deshalb bewegen sich Anleihekurse und Zinsen in entgegengesetzte Richtungen.</p>

<h3>Aktien in 30 Sekunden</h3>
<p>Hat ein Unternehmen 1.000.000 Aktien und dir gehören 1.000, besitzt du 0,1 % davon. Verdient das Unternehmen mit der Zeit mehr Gewinn, werden die Aktien tendenziell wertvoller. Hat es Probleme, können sie auf nichts fallen. Deshalb empfehlen wir selten, nur eine zu kaufen.</p>

<h3>Wo kauft man das?</h3>
<p>Du brauchst einen <b>Broker</b> (eine Firma, die deine Aufträge ausführt), eine Bank mit Anlageservice oder eine Krypto-Börse. Wähle einen, der in deiner Region <b>reguliert</b> ist, niedrige Gebühren verlangt und deine Werte getrennt von seinen eigenen verwahrt. Bei einem Broker gehaltene Wertpapiere sind normalerweise getrennt verwahrt und im Notfall durch eine Anlegerentschädigung gedeckt (in der EU oft 20.000 €), aber das ist kein Versprechen, dass du durch Marktrückgänge kein Geld verlierst.</p>

${B.warn('<p>Kompliziert ist nicht gleich raffiniert. Produkte mit schicken Namen, „garantierten“ Strukturen, hohen Provisionen oder Hebel machen meist den Verkäufer reicher, nicht dich. Kannst du nicht in einem Satz erklären, wie es Geld verdient, kaufe es nicht.</p>')}

${B.take(['Jede Anlageklasse verdient anders Geld und birgt andere Risiken.', 'Fonds und ETFs bündeln viele Anlagen, sodass du sofort streust.', 'Anleihekurse bewegen sich entgegengesetzt zu den Zinsen.', 'Derivate und CFDs sind für erfahrene Trader, nicht für Anfänger.', 'Nutze einen regulierten Broker oder eine regulierte Plattform und verstehe, was du kaufst.'])}`,
      q: [
        ['Was ist ein ETF?', ['Eine Art Kryptomünze', 'Ein Korb vieler Anlagen, den du als ein Produkt an der Börse kaufen kannst', 'Ein Sparkonto', 'Ein Kredit an ein Unternehmen'], 1, 'Ein börsengehandelter Fonds enthält viele Aktien oder Anleihen und bietet sofortige Streuung.'],
        ['Warum fallen Anleihekurse meist, wenn die Zinsen steigen?', ['Anleihen zahlen keine Zinsen mehr', 'Neue Anleihen zahlen mehr, also sind ältere, niedriger verzinste weniger wert', 'Regierungen fallen aus', 'Die Inflation verschwindet'], 1, 'Anleger bevorzugen die neuen höheren Zinsen, also muss die ältere Anleihe billiger sein, um mitzuhalten.'],
        ['Welches Produkt ist für einen Anfänger am GEFÄHRLICHSTEN?', ['Ein globaler Aktienindex-ETF', 'Ein Sparkonto', 'Ein gehebelter CFD', 'Eine Staatsanleihe'], 2, 'Gehebelte Produkte können sehr schnell große Verluste verursachen.']
      ]
    },
    {
      id: 'f6', m: 11, t: 'Dein Gehirn gegen dein Geld: Verzerrungen und Disziplin',
      hook: 'Die größte Gefahr für deine Rendite ist nicht der Markt. Es ist die Person, die dich aus dem Spiegel anschaut.',
      body: `
<p>Zwei Anleger kaufen denselben Fonds. Einer erzielt solide Renditen. Der andere verliert Geld. Der Unterschied ist meist das Verhalten: wann sie kauften, wann sie in Panik gerieten, wem sie hinterherliefen. Den eigenen Kopf zu verstehen, ist der günstigste Vorteil, den du je bekommst.</p>

<h3>Die häufigsten Denkfallen</h3>
<ul>
<li><b>Verlustaversion</b>: 100 € zu verlieren tut etwa doppelt so weh, wie 100 € zu gewinnen guttut. Deshalb verkaufen Menschen Gewinner zu früh und halten Verlierer zu lange, in der Hoffnung, „wieder auf null zu kommen“.</li>
<li><b>FOMO (Angst, etwas zu verpassen)</b>: Du siehst eine Münze diese Woche um 80 % steigen und kaufst am Hoch, weil alle darüber reden.</li>
<li><b>Herdenverhalten</b>: Zu tun, was die Menge tut, fühlt sich sicher an, aber die Menge liegt an den Extremen oft falsch (Euphorie an Hochs, Panik an Tiefs).</li>
<li><b>Selbstüberschätzung</b>: Ein paar glückliche Gewinne lassen dich wie ein Genie fühlen. Märkte sind sehr gut darin, Menschen demütig zu machen.</li>
<li><b>Aktualitätsverzerrung</b>: zu glauben, die jüngste Vergangenheit setze sich ewig fort. „Es geht immer hoch“ nach einem Boom; „es erholt sich nie“ nach einem Crash.</li>
<li><b>Bestätigungsfehler</b>: nur die Meinungen zu lesen, die zu dem passen, was du schon hältst.</li>
<li><b>Sunk-Cost-Trugschluss</b>: eine Verlustposition nicht zu verkaufen, weil „ich schon so viel verloren habe“.</li>
<li><b>Ankereffekt</b>: sich auf den gezahlten Preis zu fixieren statt darauf, wie das Asset heute aussieht.</li>
</ul>

${B.ex('<p>Lena kaufte eine Münze für 10 €, nachdem ein Freund sagte, sie werde „auf 100 € gehen“. Sie fällt auf 5 €. Statt zu fragen „würde ich das heute zu 5 € kaufen?“, denkt sie „ich muss warten, bis sie wieder bei 10 € ist“. Ihr Preis ist an ihren Kauf verankert. Monate später steht sie bei 1 €. Der Markt weiß nicht und kümmert sich nicht darum, was sie bezahlt hat.</p>')}

<h3>Gegenmittel: Regeln schlagen Gefühle</h3>
<ol>
<li><b>Schreibe einen Plan, bevor du investierst.</b> Was du kaufst, wie viel, wie oft, und was du im Crash tust. Ruhig getroffene Entscheidungen schlagen in Panik getroffene.</li>
<li><b>Automatisiere.</b> Automatisches monatliches Investieren nimmt Timing-Entscheidungen ab.</li>
<li><b>Die 24-Stunden-Regel.</b> Kaufe nie etwas wegen eines heißen Tipps innerhalb von 24 Stunden nach dem Hören.</li>
<li><b>Schau seltener nach.</b> Tägliches Kursglotzen erhöht Stress und schlechte Entscheidungen. Langfristige Anleger können monatlich oder vierteljährlich nachsehen.</li>
<li><b>Führe ein Tagebuch.</b> Schreibe auf, warum du gekauft hast und was du erwartet hast. Es später zu lesen, lehrt dich schneller als jedes Buch.</li>
<li><b>Begrenze das „Spielgeld“.</b> Wenn du unbedingt spekulieren musst, deckle es auf einen kleinen Teil (etwa 5 %), damit Fehler deinen Zielen nicht schaden.</li>
</ol>

<h3>Deine Informationsdiät</h3>
<p>Soziale Medien sind voll von „Finfluencern“, die Screenshots großer Gewinne zeigen. Denk an den Survivorship Bias: Du siehst nur die Gewinner, die posten. Stelle jedem, der Tipps gibt, drei Fragen: <b>Wie wird er bezahlt? Was verkauft er? Kann ich seine vollständige, überprüfte Bilanz samt Verlusten sehen?</b> Sei besonders vorsichtig bei jedem, der Sicherheit verspricht.</p>

${B.tryit('<p>Schreibe in einem Satz auf, was du tust, wenn deine Anlagen nächstes Jahr um 30 % fallen. Speichere ihn dort, wo du ihn wiederfindest. Dieser Satz ist deine erste Anlagerichtlinie.</p>')}

${B.take(['Verhalten, nicht Intelligenz, entscheidet über die meisten Anlageergebnisse.', 'Kenne die Fallen: Verlustaversion, FOMO, Herdenverhalten, Selbstüberschätzung, Ankereffekt.', 'Nutze schriftliche Regeln, Automatisierung und eine Bedenkzeit, um dich vor dir selbst zu schützen.', 'Hinterfrage jeden Tipp: Wie wird diese Person bezahlt?'])}`,
      q: [
        ['Du hältst eine Verlustanlage nur, weil „ich schon so viel verloren habe“. Das ist…', ['Streuung', 'Der Sunk-Cost-Trugschluss', 'Zinseszins', 'Rebalancing'], 1, 'Vergangene Verluste sind so oder so weg. Die einzig nützliche Frage ist, ob du das Asset ab heute halten willst.'],
        ['Was ist eine gute Abwehr gegen FOMO?', ['Schneller kaufen', 'Ein schriftlicher Plan und eine 24-Stunden-Bedenkzeit', 'Mehr Influencern folgen', 'Jede Stunde die Kurse prüfen'], 1, 'Ruhig beschlossene Regeln schlagen in Aufregung getroffene Gefühle.'],
        ['Warum solltest du bei Gewinn-Screenshots in sozialen Medien vorsichtig sein?', ['Sie sind immer gefälscht', 'Survivorship Bias: Du siehst weder die Verlierer noch die vollständige Bilanz', 'Sie sind illegal', 'Sie beweisen, dass die Strategie funktioniert'], 1, 'Menschen posten Gewinne und verstecken Verluste, und manche sind erfunden, daher sind Screenshots kein Beweis.']
      ]
    }
  ]);
})();
