/* Krypto-Trader-Pfad: 8 Lektionen */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ct', [
    {
      id: 'd1', m: 12, t: 'Krypto-Trading 101: 24/7-Märkte, Spot und Derivate',
      hook: 'Wie sich Krypto-Märkte von Aktien unterscheiden und welche Hauptprodukte Trader nutzen.',
      body: `
<p>Krypto-Trading teilt die Logik jedes Tradings (Charts, Risiko, Psychologie), hat aber seine eigene Note: Der Markt schließt nie, die Volatilität ist höher, die Produkte sind exotischer und die Regeln unterscheiden sich je nach Land. Bevor du Taktiken lernst, verstehe das Spielfeld.</p>

<h3>Was ist an Krypto-Märkten anders?</h3>
<ul>
<li><b>24/7/365</b>: keine Eröffnungsglocke, kein freies Wochenende. Große Bewegungen können um 3 Uhr nachts passieren, während du schläfst.</li>
<li><b>Hohe Volatilität</b>: Tagesbewegungen von 3 bis 10 % sind bei vielen Coins normal. Chance und Gefahr zugleich.</li>
<li><b>Zersplitterte Handelsplätze</b>: Hunderte Börsen, jede mit eigenen Preisen, Liquidität, Gebühren und Risiken.</li>
<li><b>Leichtere Regulierung</b>: Der Schutz ist schwächer, und das Manipulationsrisiko (Pump and Dump, Wash Trading) ist höher, besonders bei kleinen Coins.</li>
<li><b>Sich selbst verstärkende Stimmung</b>: Social Media, Wale und Hebel erzeugen schnelle, emotionale Bewegungen.</li>
</ul>

<h3>Die wichtigsten Produkte</h3>
${B.tbl(['Produkt', 'Was es ist', 'Hebel', 'Risiko'], [
        ['Spot', 'Du kaufst und besitzt den echten Coin', 'Keiner', 'Nur Preisrisiko. Am besten für Anfänger'],
        ['Margin-Trading', 'Du leihst dir Geld, um mehr zu kaufen, als du besitzt', 'Niedrig bis hoch', 'Verstärkte Verluste; Zinsen auf Kredite'],
        ['Futures (befristet)', 'Vertrag zum Kauf oder Verkauf zu einem künftigen Datum', 'Bis 100x oder mehr', 'Liquidation kann deine Margin auslöschen'],
        ['Perpetual Futures', 'Futures ohne Ablauf, durch Funding-Zahlungen nahe am Spot-Preis gehalten', 'Bis 100x oder mehr', 'Funding-Kosten + Liquidation + Börsenrisiko'],
        ['Optionen', 'Rechte, zu einem festgelegten Preis zu kaufen oder zu verkaufen', 'Eingebaut', 'Komplex; können wertlos verfallen']
      ])}
<p>Der Zugang unterscheidet sich je nach Land. Viele Aufsichtsbehörden beschränken oder verbieten Derivate für Privatkunden, und Plattformen können den Hebel in bestimmten Regionen begrenzen. Halte dich immer an die lokalen Regeln und die Bedingungen eines regulierten Anbieters.</p>

<h3>Wie Börsen Geld verdienen: Gebühren</h3>
<ul>
<li><b>Maker</b>: Du platzierst eine Limit-Order, die im Orderbuch wartet und Liquidität bringt. Meist niedrigere Gebühren.</li>
<li><b>Taker</b>: Du nimmst sofort eine bestehende Order an (Market-Order). Höhere Gebühren.</li>
<li>Gebühren von 0,02 % bis 0,1 % pro Trade wirken klein, summieren sich aber bei aktiven Tradern.</li>
</ul>

<h3>Sessions und Liquidität</h3>
<p>Obwohl der Markt nie stoppt, folgt die Aktivität menschlichen Zeitzonen. Das Volumen ist meist am stärksten, wenn sich Europa und die USA überschneiden, und am Wochenende schwächer, wenn Preise bei dünner Liquidität sprunghaft ausschlagen können. Trader vermeiden oft große Orders in Stunden mit geringer Liquidität.</p>

<h3>Paare und Basiswährungen</h3>
<p>Handelspaare werden wie BTC/USDT geschrieben: Das erste ist, was du kaufst oder verkaufst, das zweite, womit du bezahlst. Stablecoin-Paare (USDT, USDC) sind am liquidesten. Es zählt, in welcher Währung dein Gewinn gemessen wird: Ein Trade kann „in USDT im Plus“ sein, während der gehaltene Coin gegenüber Bitcoin gefallen ist.</p>

${B.ex('<p>Sonntag, 4 Uhr morgens. Sam hält eine gehebelte Position und schläft. Eine plötzliche Nachricht trifft ein, die Liquidität ist dünn und der Preis springt binnen Minuten um 8 % gegen ihn. Seinen Stopp hatte er nicht gesetzt. Er wacht mit einer Liquidation auf. An traditionellen Märkten hätten ihn die Schließzeiten geschützt; bei Krypto muss das Risikomanagement funktionieren, während du schläfst (Stopps, kleinere Größe, kein Hebel über Nacht).</p>')}

${B.warn('<p>Derivate sind für erfahrene Trader. Bist du neu, beginne mit Spot-Trading in kleiner Größe und lies die nächsten Lektionen über Hebel, bevor du Futures anfasst.</p>')}

${B.take(['Krypto wird rund um die Uhr gehandelt, mit hoher Volatilität und schwächerem Schutz.', 'Spot heißt, den Coin zu besitzen; Perpetual Futures fügen Hebel, Funding und Liquidationsrisiko hinzu.', 'Maker-Orders bringen Liquidität (niedrigere Gebühr), Taker-Orders entziehen sie (höhere Gebühr).', 'Risikokontrollen müssen funktionieren, während du schläfst: Stopps, kleine Größe, kein sorgloser Hebel über Nacht.'])}`,
      q: [
        ['Was ist der Kernunterschied zwischen Spot und Perpetual Futures?', ['Spot bedeutet, den Coin zu besitzen; Perpetuals sind gehebelte Verträge mit Funding und Liquidation', 'Es gibt keinen', 'Spot hat immer Hebel', 'Perpetuals sind sicherer'], 0, 'Perpetual Futures sind Derivate mit Hebel und Funding-Kosten.'],
        ['Welche Order-Art zahlt in der Regel die niedrigere Gebühr?', ['Taker-Order (Market)', 'Maker-Order (Limit), die Liquidität bringt', 'Beide sind immer gleich', 'Stop-Order'], 1, 'Maker bringen Liquidität ins Orderbuch und werden meist mit niedrigeren Gebühren belohnt.'],
        ['Warum ist Risikomanagement bei Krypto schwieriger als an Aktienmärkten?', ['Die Märkte schließen zu oft', 'Der Markt schließt nie, sodass große Bewegungen passieren können, während du weg bist', 'Gebühren sind fest', 'Es gibt keine Volatilität'], 1, 'Rund-um-die-Uhr-Handel heißt, dass deine Schutzmaßnahmen jederzeit stehen müssen.']
      ]
    },
    {
      id: 'd2', m: 14, t: 'Hebel und Liquidation: wie Konten ausgelöscht werden',
      hook: 'Der Rechner, den jeder Krypto-Trader vor jedem gehebelten Trade nutzen sollte.',
      body: `
<p>Hebel lässt dich eine Position kontrollieren, die größer ist als dein Geld. Es ist das Merkmal, das die meisten Anfänger anzieht und die meisten von ihnen zerstört. Die Liquidation zu verstehen ist nicht optional.</p>

<h3>Wie Hebel funktioniert</h3>
<p>Legst du 500 € (deine <b>Margin</b>) ein und nutzt 10x Hebel, kontrollierst du eine Position von 5.000 €. Eine Preisbewegung von 1 % verändert dein Konto um 10 %. Eine Bewegung von 10 % gegen dich löscht die gesamten 500 € aus.</p>
<ul>
<li><b>Margin</b>: die Sicherheit, die du hinterlegst.</li>
<li><b>Maintenance Margin (Erhaltungsmargin)</b>: die Mindestsicherheit, die die Börse verlangt, damit deine Position offen bleibt.</li>
<li><b>Liquidation</b>: Wenn Verluste deine Margin unter die Erhaltungsmargin drücken, schließt die Börse deine Position zwangsweise. Du verlierst die Margin, manchmal auch Gebühren und Zusatzkosten.</li>
<li><b>Isolated Margin</b>: Nur die diesem Trade zugewiesene Margin steht auf dem Spiel. <b>Cross Margin</b>: Dein gesamtes Kontoguthaben stützt den Trade, sodass eine schlechte Position alles leeren kann.</li>
</ul>

<h3>Die einfache Liquidationsformel (Näherung)</h3>
<p>Für eine Long-Position mit Isolated Margin: <b>Liquidationspreis ≈ Einstieg × (1 − 1/Hebel + Erhaltungsmargin-Satz)</b>. Bei einem Short ist es das Spiegelbild über dem Einstieg. Bei 10x wirst du nach einer Bewegung von etwa 9,5 % gegen dich liquidiert. Bei 50x nach etwa 1,5 %. Bei 100x nach etwa 0,5 %, weniger als ein normales Wackeln in einer Kaffeepause bei einem volatilen Coin.</p>

<h3>Probier es selbst</h3>
<p>Wähle den Hebel und sieh den Abstand zur Liquidation im Vergleich zur typischen Tagesbewegung des Assets.</p>
${B.w('liq')}

<h3>Warum hoher Hebel eine Falle ist</h3>
<ul>
<li><b>Rauschen tötet dich</b>: Der Preis macht ständig kleine Schwankungen und Dochte. Enge Liquidationsniveaus werden vom Rauschen getroffen, nicht vom „echten Trend“.</li>
<li><b>Du darfst nicht mal ein bisschen falsch liegen</b>: Hoher Hebel verlangt perfektes Timing.</li>
<li><b>Liquidationskaskaden</b>: Bewegt sich der Preis, lösen erzwungene Liquidationen weitere Verkäufe (oder Käufe) aus, was den Preis weiter treibt und mehr Trader liquidiert. Bei mehreren Crashs wurden an einem einzigen Tag Milliarden Dollar gehebelter Positionen liquidiert.</li>
<li><b>Gebühren und Funding</b> werden auf die volle Positionsgröße berechnet, die Kosten steigen also mit dem Hebel.</li>
<li><b>Auto-Deleveraging und Slippage</b>: Bei extremen Bewegungen können Börsen profitable Positionen schließen oder deinen Stopp weit von dem Preis ausführen, den du gesetzt hast.</li>
</ul>

<h3>Die professionelle Sicht auf Hebel</h3>
<p>Profis sehen Hebel nicht als Weg, schnell reich zu werden. Sie behandeln ihn als Werkzeug der <b>Kapitaleffizienz</b>: Sie nutzen nur so viel, wie nötig ist, um die Margin für eine nach Risiko dimensionierte Position zu hinterlegen. Sie bestimmen die Positionsgröße aus dem Stopp-Abstand (siehe Risiko-Lektion), und der Hebel ist einfach das, was dabei herauskommt, meist niedrig (1x bis 3x). Die Kernhaltung: Dein <i>Risiko</i> ist Stopp-Abstand mal Größe, nicht die Hebelzahl.</p>
${B.ex('<p>Zwei Trader kaufen bei 100 mit Stopp bei 97 und wollen 50 € riskieren. Beide kaufen dieselbe Größe: 1.667 € Wert. Trader A hinterlegt 1.667 € Margin (1x). Trader B hinterlegt 167 € (10x). Wenn der Stopp bei 97 greift, verlieren beide dieselben 50 €. Stell dir nun vor, der Stopp wurde vergessen oder verschoben und eine Spitze drückt den Preis auf 90, bevor er zurückspringt. Trader A (1x) ist noch im Trade, mit einem unangenehmen Buchverlust. Trader B (10x) wurde nahe 90,5 liquidiert und verlor die gesamten 167 € Margin, der spätere Rebound nützt ihm nichts. Die Hebelzahl hat nur verändert, wie viel Spielraum vor der Katastrophe bestand.</p>')}

${B.key('<p><b>Regeln für sichereren Hebel:</b> Nutze Isolated Margin, setze immer einen Stop-Loss weit innerhalb des Liquidationspreises, dimensioniere den Trade nach Risiko (nicht nach Hebel) und halte den Hebel so niedrig, dass die Liquidation ein Vielfaches einer typischen Tagesbewegung entfernt liegt.</p>')}

${B.warn('<p>Börsen verdienen an Liquidationen und Gebühren. Social Media belohnt Screenshots riesiger gehebelter Gewinne und verschweigt die ausgelöschten Konten. Denk daran, dass die Überlebenden, die du siehst, eine winzige, selbstselektierte Stichprobe sind.</p>')}

${B.take(['Hebel vervielfacht Gewinne und Verluste; die Liquidation nimmt deine gesamte Margin.', 'Isolated Margin begrenzt den Schaden auf einen Trade; Cross Margin kann dein Konto leeren.', 'Der Liquidationspreis hängt vom Hebel ab; bei 50x oder 100x reicht normales Rauschen, um dich zu liquidieren.', 'Dimensioniere Trades nach Stopp-Abstand und Risikoprozent; halte den Hebel niedrig und Stopps innerhalb der Liquidation.'])}`,
      q: [
        ['Wie weit muss sich der Preis bei 20x Hebel auf einem Long ungefähr gegen dich bewegen, um dich zu liquidieren?', ['Etwa 20 %', 'Etwa 4,5 %', 'Etwa 0,5 %', 'Etwa 50 %'], 1, '1/20 = 5 %, abzüglich einer kleinen Erhaltungsmargin ergibt etwa 4,5 %.'],
        ['Welcher Margin-Modus riskiert dein ganzes Konto bei einer Position?', ['Isolated Margin', 'Cross Margin', 'Spot-Handel', 'Limit-Orders'], 1, 'Cross Margin nutzt dein gesamtes Guthaben als Sicherheit für offene Positionen.'],
        ['Was ist die professionelle Haltung zum Hebel?', ['Immer maximieren', 'Nach Risiko und Stopp-Abstand dimensionieren; Hebel ist nur ein Nebenprodukt und bleibt niedrig', 'Nie Stopps nutzen', 'Ihn nutzen, um Verluste auszugleichen'], 1, 'Risiko ist Stopp-Abstand mal Größe, und hoher Hebel lässt keinen Raum für Fehler.']
      ]
    },
    {
      id: 'd3', m: 13, t: 'Den Krypto-Markt lesen: Volumen, Open Interest, Funding und Stimmung',
      hook: 'Jenseits des Preischarts: die krypto-spezifischen Signale, was jedes sagt und wie Trader sie missbrauchen.',
      body: `
<p>Krypto bietet Daten, die traditionelle Märkte verbergen: Du kannst gehebelte Positionierung, Börsenflüsse und Stimmung fast in Echtzeit sehen. Diese Werkzeuge zeigen dir, <b>wer wo überfüllt ist</b>, was nützlich ist, weil überfüllte Trades oft zusammengequetscht werden.</p>

<h3>Preis, Volumen und Open Interest</h3>
<p>Das <b>Open Interest (OI)</b> ist der Gesamtwert der noch offenen Futures-Kontrakte. In Kombination mit dem Preis liefert es Hinweise:</p>
${B.tbl(['Preis', 'Open Interest', 'Typische Lesart'], [
        ['Steigend', 'Steigend', 'Neues Geld fließt in Longs; der Trend hat Treibstoff (aber auf Überfüllung achten)'],
        ['Steigend', 'Fallend', 'Short-Positionen schließen (Short Squeeze); die Rally kann schwächer sein'],
        ['Fallend', 'Steigend', 'Neue Shorts häufen sich an; der Abwärtstrend hat Schwung'],
        ['Fallend', 'Fallend', 'Longs geben auf (Liquidationen); der Verkaufsdruck könnte sich erschöpfen']
      ])}

<h3>Funding-Rate: das Thermometer der Masse</h3>
<p>Perpetual Futures nutzen <b>Funding-Zahlungen</b> zwischen Longs und Shorts, um den Kontraktpreis nahe am Spot-Preis zu halten. Ist die Rate positiv, zahlen Longs an Shorts. Eine sehr hohe positive Rate bedeutet, dass viele Trader long positioniert sind, und das Halten ist auch teuer. Extreme treten oft nahe lokaler Hochs auf, weil einer Masse mit demselben Trade niemand mehr zum Kaufen bleibt. Extrem negatives Funding kann Short Squeezes vorausgehen. Berechne, was Funding dich kostet:</p>
${B.w('funding')}

<h3>Liquidationskarten und Heatmaps</h3>
<p>Manche Datendienste schätzen, wo Cluster gehebelter Positionen liquidiert würden. Der Preis wird oft von diesen Bereichen „angezogen“, weil erzwungene Orders Liquidität erzeugen. Betrachte sie als Hinweise, nicht als Garantien. Schätzungen können falsch sein.</p>

<h3>Stimmungsindikatoren</h3>
<ul>
<li><b>Fear-and-Greed-Index</b>: kombiniert Volatilität, Momentum, Social Media und andere Eingaben zu einem Wert von 0 bis 100. Extreme Gier kann vor Überhitzung warnen; extreme Angst kann Kapitulation zeigen. Er ist ein konträres Maß, kein Timing-Werkzeug.</li>
<li><b>Long/Short-Verhältnis</b>: Anteil der Konten, die an einer Börse long oder short positioniert sind. Unterschiede zwischen Börsen und zwischen „Konten“ und „Positionen“ machen es verrauscht.</li>
<li><b>Social-Media-Rummel</b>: Spricht dein Taxifahrer über einen Coin, ist die Bewegung wahrscheinlich schon spät.</li>
</ul>

<h3>Marktstruktur-Signale</h3>
<ul>
<li><b>Bitcoin-Dominanz</b>: Bitcoins Anteil an der gesamten Krypto-Marktkapitalisierung. Steigende Dominanz bedeutet oft, dass sich Geld im BTC versteckt; fallende kann „Altcoin-Saisons“ begleiten. Altcoins bewegen sich im Allgemeinen mit Bitcoin, aber mit größeren Schwankungen (höheres „Beta“).</li>
<li><b>Stablecoin-Angebot und -Flüsse</b>: Ein wachsendes Stablecoin-Angebot an Börsen kann Kaufkraft signalisieren; ein schrumpfendes einen Ausstieg.</li>
<li><b>Börsen-Zu- und -Abflüsse</b>: Coins, die auf Börsen wandern, können Verkäufen vorausgehen; Coins, die abfließen, können Halten signalisieren.</li>
<li><b>ETF-Flüsse</b>: Wo regulierte Bitcoin- und Ethereum-Fonds existieren, beeinflussen tägliche Zu- und Abflüsse den Markt.</li>
</ul>

<h3>Die weitere Welt</h3>
<p>Krypto lebt nicht isoliert. Zinsentscheidungen, Inflationsberichte, der US-Dollar, die Aktienmarktstimmung und regulatorische Nachrichten bewegen sie oft. Führe einen Kalender wichtiger Ereignisse und Token-Freischaltungstermine und reduziere das Risiko rund um sie.</p>

${B.ex('<p>Bitcoin ist eine Woche lang gestiegen. Das Open Interest steht auf einem Rekordhoch, das Funding ist extrem positiv und der Fear-and-Greed-Index zeigt „Extreme Greed“. Nichts garantiert einen Fall, aber die Positionierung ist überfüllt: Ein moderater Rücksetzer kann eine Kette von Long-Liquidationen auslösen. Ein Trader, der das sieht, kann auf einem Teil eines Longs Gewinne mitnehmen, nicht hinterherlaufen oder einen Rücksetzer für den Einstieg abwarten.</p>')}

${B.warn('<p>Indikatoren beschreiben die Masse, sie sagen sie nicht voraus. „Überhitzt“ kann wochenlang überhitzt bleiben. Kombiniere sie immer mit der Preisstruktur und einem Stop-Loss.</p>')}

${B.take(['Open Interest plus Preisrichtung zeigt, ob Trends frischen Treibstoff haben.', 'Funding-Raten verraten überfüllte Trades und kosten Geld beim Halten.', 'Stimmungsmaße sind an Extremen konträre Hinweise, keine exakten Timing-Werkzeuge.', 'Altcoins sind Versionen von Bitcoin mit höherem Beta; beobachte Dominanz und Makro-Ereignisse.'])}`,
      q: [
        ['Steigender Preis bei fallendem Open Interest deutet auf…', ['Stark einsteigende neue Longs', 'Schließende Shorts (einen Squeeze), die Rally kann daher schwächer sein', 'Ein garantiertes Hoch', 'Ein Stablecoin-Problem'], 1, 'Fallendes OI bei einem Anstieg bedeutet oft Short-Eindeckung statt frischer Käufe.'],
        ['Eine sehr hohe positive Funding-Rate bedeutet…', ['Shorts zahlen an Longs', 'Longs zahlen an Shorts und der Markt ist überfüllt long', 'Die Börse ist kaputt', 'Spot-Preise sind null'], 1, 'Positives Funding heißt, Longs zahlen an Shorts, was eine starke Long-Positionierung zeigt.'],
        ['Wie solltest du den Fear-and-Greed-Index nutzen?', ['Als exaktes Kauf-/Verkaufssignal', 'Als konträren Hinweis an Extremen, kombiniert mit weiterer Analyse', 'Nie', 'Um den Hebel festzulegen'], 1, 'Er spiegelt die Stimmung der Masse und kann sehr lange extrem bleiben.']
      ]
    },
    {
      id: 'd4', m: 14, t: 'Krypto-Trading-Strategien',
      hook: 'Trend-, Rücksetzer-, Range-, Ausbruchs- und Event-Trades, an Krypto angepasst, mit einem vollständigen Beispiel-Trade Schritt für Schritt.',
      body: `
<p>Die Kernideen aus dem Day-Trader-Pfad (Trend, Niveaus, Ausbrüche, Ranges) gelten auch für Krypto-Charts, mit einigen Anpassungen: größere Bewegungen, 24/7-Handel und zusätzliche Daten wie Funding und Open Interest. Das sind die wichtigsten Stile.</p>

<h3>1. Trendfolge auf höheren Zeiteinheiten</h3>
<p>Nutze den 4-Stunden- oder Tageschart. Steige ein, wenn der Preis mit steigendem Volumen auf neue Hochs ausbricht und über einem steigenden gleitenden Durchschnitt liegt (zum Beispiel EMA 50). Setze den Stopp unter das letzte höhere Tief und ziehe ihn nach. Weniger Trades, weniger Gebühren, weniger Bildschirmzeit, und es passt zu Berufstätigen. Es leidet aber in zähen Phasen.</p>

<h3>2. Einstiege bei Rücksetzern</h3>
<p>Warte in einem Aufwärtstrend auf einen Rückgang zu einem gleitenden Durchschnitt oder einem früheren Widerstand, der zur Unterstützung wurde, plus Anzeichen, dass die Verkäufer nachlassen (geringeres Volumen, Rejection-Docht). Einstieg auf der Umkehrkerze, Stopp unter dem Tief des Rücksetzers. Verbessert das Chance-Risiko-Verhältnis gegenüber dem Hinterherjagen von Ausbrüchen.</p>

<h3>3. Range-Trading</h3>
<p>Seitwärtsmärkte sind bei Krypto häufig. Definiere eine klare Unterstützungs- und Widerstandszone, kaufe nahe dem Boden, verkaufe nahe dem Hoch und steige aus, wenn der Preis außerhalb der Range schließt. Kombiniere mit Mean-Reversion-Signalen wie Funding-Extremen.</p>

<h3>4. Ausbruch und Retest</h3>
<p>Der Preis komprimiert (eine enger werdende Range oder fallende Volatilität) und bricht dann aus. Es gibt viele Fehlausbrüche, also warte auf einen Kerzenschluss jenseits des Niveaus und idealerweise einen haltenden <b>Retest</b>, bevor du einsteigst, mit einem Stopp knapp innerhalb der alten Range.</p>

<h3>5. Funding und Gegen-die-Masse-Trades</h3>
<p>Sind Funding und Open Interest extrem und der Preis stockt, handeln manche Trader gegen die Masse (kleine Gegentrend-Position oder Longs reduzieren). Das ist fortgeschritten und ohne strikte Stopps gefährlich, weil überfüllte Trades weiterlaufen können.</p>

<h3>6. Event- und Freischaltungs-Trades</h3>
<p>Geplante Ereignisse (Token-Freischaltungen, Upgrades, Listings, Notenbanksitzungen) erzeugen vorhersehbare Volatilität, aber keine vorhersehbare Richtung. Anfänger fahren meist besser, wenn sie die Größe reduzieren oder draußen bleiben.</p>

<h3>7. Bots und Grids</h3>
<p>Automatisierte Strategien wie Grid-Bots platzieren eine Leiter von Kauf- und Verkaufsorders innerhalb einer Range. Sie können in Seitwärtsmärkten funktionieren, verlieren aber bei starken Trends. Automatisierung behandeln wir in Lektion 6.</p>

<h3>Ein vollständiger Beispiel-Trade (Schritt für Schritt)</h3>
<p>Stell dir einen Coin vor, der bei <b>100,00</b> handelt. Der Tagestrend ist aufwärts. Der Preis ist auf ein früheres Ausbruchsniveau bei 96 zurückgekommen und hat eine bullische Kerze gebildet. Du hast <b>5.000 €</b> und deine Regel lautet, <b>1 % (50 €)</b> pro Trade zu riskieren.</p>
<ol>
<li>Einstieg: 97,00 (über dem Hoch der bullischen Kerze).</li>
<li>Stopp: 94,00, unter dem Tief des Rücksetzers (3,00 vom Einstieg entfernt).</li>
<li>Positionsgröße = 50 € ÷ 3,00 = <b>16,67 Einheiten</b> (eine Position von etwa 1.617 €, oder 0,32x deines Kontos).</li>
<li>Ziel: das jüngste Hoch bei 106 (9,00 entfernt), ein Chance-Risiko-Verhältnis von <b>3:1</b>.</li>
<li>Liegst du falsch, verlierst du 50 € (1 %). Liegst du richtig, gewinnst du etwa 150 € (3 %). Bei einer Trefferquote von 40 % ist es trotzdem profitabel: 0,4×3 − 0,6×1 = +0,6R.</li>
</ol>
<p>Prüfe es mit dem Rechner (die Zahlen sind anders vorausgefüllt, setze sie auf dieses Beispiel):</p>
${B.w('possize')}

<h3>Welcher Stil passt zu dir?</h3>
${B.tbl(['Deine Situation', 'Bessere Wahl'], [
        ['Vollzeitjob, wenig Zeit', 'Trendfolge oder Rücksetzer auf 4h-/Tagescharts, mit Alarmen'],
        ['Mag ruhige, regelbasierte Routinen', 'Range-Trading mit strikten Niveaus'],
        ['Wenig Geduld', 'Vorsicht: Wähle einen Stil, der die Zahl der Trades pro Tag begrenzt'],
        ['Will rund um die Uhr handeln', 'Nutze Bots mit strikten Limits und schlafe trotzdem; vermeide Hebel über Nacht']
      ])}

${B.warn('<p>Kopiere keine Signale aus Gruppen oder von Influencern. Selbst wenn sie ehrlich sind, kontrollierst du ihre Einstiege nicht, sie können an deinem Kauf verdienen, und du lernst den Prozess nicht. Baue und teste deine eigenen Regeln.</p>')}

${B.take(['Trend- und Rücksetzer-Strategien auf höheren Zeiteinheiten passen den meisten am besten.', 'Warte bei Ausbrüchen auf Bestätigung und bevorzuge Retests.', 'Berechne jeden Trade: Einstieg, Stopp, Größe, Ziel und Chance-Risiko-Verhältnis vor dem Einstieg.', 'Meide Event-Trades und Gegen-die-Masse-Trades, bis du einen bewährten Prozess hast.'])}`,
      q: [
        ['Warum beträgt die Positionsgröße im Rechenbeispiel 16,67 Einheiten?', ['Weil der Hebel 10x beträgt', '50 € Risiko geteilt durch einen Stopp-Abstand von 3,00', 'Weil der Preis 100 ist', 'Zufällige Wahl'], 1, 'Positionsgröße = Risikobetrag ÷ (Einstieg − Stopp) = 50 ÷ 3.'],
        ['Wobei hilft das Abwarten eines Retests nach einem Ausbruch?', ['Gebühren vermeiden', 'Die Wahrscheinlichkeit zu senken, einen Fehlausbruch zu kaufen', 'Einen Gewinn zu garantieren', 'Den Hebel zu erhöhen'], 1, 'Kehrt der Preis zurück und das Niveau hält, ist der Ausbruch glaubwürdiger.'],
        ['Welcher Ansatz passt zu einem Trader mit Vollzeitjob?', ['Ganztägig Scalping auf 1-Minuten-Charts', '4h- oder Tagescharts mit Alarmen und festen Stopps handeln', '100x Hebel nutzen', 'Zufälligen Signalen folgen'], 1, 'Langsamere Zeiteinheiten brauchen weniger Bildschirmzeit und verursachen geringere Kosten.']
      ]
    },
    {
      id: 'd5', m: 13, t: 'Risikomanagement für volatile Märkte',
      hook: 'Alles aus der Risiko-Lektion des Day Traders, plus die besonderen Gefahren von Krypto: Stablecoins, Börsen, Korrelation und Wochenenden.',
      body: `
<p>Die Kernregeln gelten weiter: Riskiere einen kleinen festen Prozentsatz pro Trade, setze Stopps nach Struktur, denke in R, begrenze Tagesverluste und stocke nie Verlierer auf. Krypto bringt mehrere zusätzliche Gefahren mit, also passe dich an.</p>

<h3>1. Dimensioniere nach Volatilität</h3>
<p>Krypto-Assets unterscheiden sich enorm darin, wie weit sie sich bewegen. Nutze die <b>ATR</b> (Average True Range), um Stopps zu setzen, und lass dann deine Risikoregel die Größe bestimmen. Ein Coin mit 10 % durchschnittlicher Tagesspanne braucht einen weiteren Stopp und daher eine kleinere Position als einer mit 3 %, wenn du dasselbe Risiko in Euro willst.</p>

<h3>2. Korrelation: die Diversifikationsillusion</h3>
<p>Bei Ausverkäufen fällt fast alles zusammen: Altcoins sinken oft schneller als Bitcoin. Zehn Long-Positionen in zehn Altcoins sind praktisch eine große Long-Position. Begrenze dein <b>gesamtes offenes Risiko</b> (zum Beispiel 3 bis 5 % über alle Trades) und betrachte das ganze Portfolio, nicht jeden Trade einzeln.</p>

<h3>3. Gegenpartei- und Plattformrisiko</h3>
<ul>
<li><b>Börsenrisiko</b>: Börsen können gehackt werden, Auszahlungen einschränken oder zusammenbrechen (FTX, 2022). Halte nicht alle Gelder auf einer Plattform. Lass nur Trading-Kapital auf Börsen und zahle Gewinne aus.</li>
<li><b>Stablecoin-Risiko</b>: Ein „stabiler“ Coin kann seine Bindung verlieren (UST 2022; USDC kurz 2023). Diversifiziere über Emittenten und bevorzuge seriöse.</li>
<li><b>Smart-Contract-Risiko</b>: DeFi-Protokolle können gehackt werden.</li>
<li><b>API-Key-Sicherheit</b>: Bei Bots erstelle Keys nur mit Trading-Berechtigung (Auszahlungen deaktiviert), beschränke sie per IP-Adresse und teile sie nie.</li>
</ul>

<h3>4. Ausführungsrisiken</h3>
<ul>
<li><b>Dochte und Stopp-Jagd</b>: Der Preis schießt manchmal durch offensichtliche Niveaus und schnellt zurück. Setze Stopps jenseits des Niveaus plus einen Volatilitätspuffer.</li>
<li><b>Slippage in dünnen Märkten</b>: Kleine Coins und Wochenenden können deine Order weit vom angezeigten Preis ausführen. Nutze Limit-Orders und kleinere Größen.</li>
<li><b>Börsenausfälle</b>: Plattformen können bei Volatilität einfrieren. Habe einen Plan B und verlasse dich nicht auf einen einzigen Handelsplatz.</li>
</ul>

<h3>5. Funding- und Gebührenlast</h3>
<p>Gehebelte Perpetual-Positionen über Tage zu halten kann Funding-Kosten anhäufen. Beziehe Funding und Gebühren immer in die Berechnung des erwarteten Gewinns ein, besonders bei Strategien mit kleinen Zielen.</p>

<h3>6. Zahle Gewinne aus</h3>
<p>Gewinne, die auf dem Bildschirm bleiben, sind nicht real. Übernimm eine Regel wie „30 % der Monatsgewinne in ein sicheres Wallet oder Bankkonto auszahlen“. Sie schützt vor Börsenproblemen, senkt den Drang zu übermäßigem Risiko und macht Erfolg greifbar.</p>

<h3>7. Nimm Wochenenden und Schlaf ernst</h3>
<p>Hältst du Positionen über Nacht oder über das Wochenende, stelle sicher, dass sie Stopps, reduzierte Größe und keinen hohen Hebel haben. Viele Liquidationen passieren, während der Trader schläft.</p>

${B.ex('<p>Elena hat 10.000 € auf einer Börse und hält fünf Altcoin-Longs, jeder riskiert 1 %, sie glaubt also, 5 % Gesamtrisiko zu haben. Ein marktweiter Rückgang trifft alle fünf Stopps binnen Stunden: Sie verliert 5 % an einem Vormittag, nicht „fünfmal 1 % unabhängig“. Zudem lag ihr gesamtes Guthaben auf dieser Plattform. Danach begrenzt sie das gesamte offene Risiko auf 3 %, hält nur die Hälfte ihres Kapitals an der Börse und zahlt wöchentlich Gewinne aus.</p>')}

${B.w('checklist', { key: 'd5', title: 'Vor-Trade-Checkliste für Krypto-Trader', accent: 'ct', items: 'Der Tages- und 4-Stunden-Trend stützen meine Richtung|Mein Stopp ist nach Struktur plus Volatilitätspuffer gesetzt|Meine Größe folgt meinem festen Risikoprozentsatz, nicht der Hebelzahl|Das gesamte offene Risiko über alle Trades bleibt in meinem Limit|Ich habe Funding-Rate, Open Interest und anstehende Ereignisse oder Freischaltungen geprüft|Ich nutze Isolated Margin und mein Stopp liegt weit innerhalb des Liquidationspreises|Ich halte nicht mehr Kapital an der Börse als nötig|Ich bin ruhig, ausgeruht und jage keiner Bewegung hinterher' })}

${B.take(['Dimensioniere nach Volatilität: weitere Stopps bedeuten kleinere Positionen.', 'Altcoins sind stark korreliert, daher zählt das gesamte offene Risiko.', 'Reduziere das Plattformrisiko: Gelder verteilen, API-Keys beschränken und Gewinne auszahlen.', 'Denke an Funding, Slippage, Wochenenden und Börsenausfälle in deinen Berechnungen.'])}`,
      q: [
        ['Warum ist das Halten vieler Altcoin-Positionen bei einem Crash keine echte Diversifikation?', ['Sie fallen alle auf null', 'Sie fallen tendenziell zusammen, oft stärker als Bitcoin', 'Sie sind reguliert', 'Sie zahlen Funding'], 1, 'Hohe Korrelation bei Ausverkäufen lässt deine Positionen wie eine große Wette wirken.'],
        ['Welche API-Key-Einstellung ist für einen Trading-Bot am sichersten?', ['Auszahlungsrecht aktiviert, keine IP-Begrenzung', 'Nur Trading-Berechtigung, Auszahlungen deaktiviert, IP-beschränkt', 'Vollzugriff aus Bequemlichkeit', 'Den Key als Backup mit einem Freund teilen'], 1, 'Wenn Keys durchsickern, kann ein Angreifer keine Gelder abziehen.'],
        ['Warum regelmäßig Gewinne auszahlen?', ['Es erhöht den Hebel', 'Es schützt Gewinne vor Börsenausfällen und macht Gewinne real', 'Es vermeidet Gebühren', 'Es ist gesetzlich vorgeschrieben'], 1, 'Auf einer Plattform liegende Gewinne sind dem Gegenparteirisiko ausgesetzt.']
      ]
    },
    {
      id: 'd6', m: 14, t: 'Bots und Automatisierung: was sie können und was nicht',
      hook: 'Bots führen Regeln unermüdlich aus. Sie erzeugen keinen Vorteil aus dem Nichts. Lerne, sie zu nutzen und Betrug zu erkennen.',
      body: `
<p>Die 24/7-Natur von Krypto macht Automatisierung attraktiv. Ein <b>Trading-Bot</b> ist Software, die nach Regeln Orders für dich platziert. Gut eingesetzt bringt er Disziplin und Geschwindigkeit. Schlecht eingesetzt automatisiert er Verluste in Lichtgeschwindigkeit.</p>

<h3>Was Bots tatsächlich tun</h3>
<ul>
<li><b>DCA-Bots</b>: kaufen nach Plan einen festen Betrag. Einfach und risikoarm.</li>
<li><b>Grid-Bots</b>: platzieren Kauf- und Verkaufsorders in festen Abständen innerhalb einer Preisspanne und ernten kleine Schwankungen. Funktionieren in Seitwärtsmärkten; verlieren bei starken Trends und wenn der Preis die Spanne verlässt.</li>
<li><b>Trendfolge-/Signal-Bots</b>: steigen anhand von Indikatoren oder Bedingungen ein und aus (Kreuzungen gleitender Durchschnitte, Ausbrüche).</li>
<li><b>Arbitrage-Bots</b>: nutzen Preisunterschiede zwischen Handelsplätzen. Brauchen Geschwindigkeit, Kapital und Infrastruktur; die Margen sind dünn.</li>
<li><b>Market-Making-Bots</b>: stellen Kauf- und Verkaufspreise, um den Spread zu verdienen. Profi-Terrain.</li>
<li><b>Copy Trading</b>: spiegelt automatisch die Positionen eines anderen Traders. Du erbst sein Risiko und seine Gebühren, und vergangene Ergebnisse sind kein Versprechen.</li>
</ul>

<h3>Was ein Bot dir gibt</h3>
<ol>
<li><b>Disziplin</b>: keine Angst, kein FOMO, keine Rache-Trades. Er folgt den Regeln.</li>
<li><b>Abdeckung</b>: arbeitet, während du schläfst.</li>
<li><b>Geschwindigkeit und Konsistenz</b>: präzise Ausführung und Protokollierung jedes Trades.</li>
<li><b>Testbarkeit</b>: In Code geschriebene Regeln lassen sich mit historischen Daten backtesten.</li>
</ol>

<h3>Was ein Bot nicht kann</h3>
<ul>
<li><b>Er erzeugt keinen Vorteil.</b> Eine schlechte Strategie läuft perfekt... direkt in die Verluste.</li>
<li><b>Er beseitigt kein Risiko.</b> Märkte können das Regime wechseln, Börsen können ausfallen, Bugs können auftreten.</li>
<li><b>Er kann die Zukunft nicht vorhersagen.</b> Vergangene Backtest-Leistung ist kein Versprechen.</li>
<li><b>Er ersetzt nicht deine Verantwortung</b>, Risikolimits zu überwachen.</li>
</ul>

<h3>Wie du einen Bot (oder eine mit einem verkaufte Strategie) bewertest</h3>
${B.tbl(['Frage', 'Gutes Zeichen', 'Warnsignal'], [
        ['Sind die Regeln erklärt?', 'Klare Logik, die du verstehst', 'Ein „geheimer Algorithmus“ ohne Erklärung'],
        ['Gibt es Belege?', 'Backtests mit Kosten + Forward-/Live-Ergebnisse, Drawdowns gezeigt', 'Screenshots, herausgepickte Monate, „100 % Trefferquote“'],
        ['Was wird behauptet?', 'Ehrlich über Risiko und Verlustphasen', '„Garantierte Gewinne“, „passives Einkommen“, Druck, sofort zu handeln'],
        ['Umgang mit Geld', 'Gelder bleiben auf deinem Börsenkonto; API-Keys nur zum Handeln', 'Verlangt, dass du in ihr Wallet oder ihre Plattform einzahlst'],
        ['Kontrolle', 'Du kannst pausieren, Limits setzen und jeden Trade sehen', 'Keine Stopp-Kontrollen oder Transparenz']
      ])}

<h3>Backtesting-Fallen (noch einmal, weil sie zählen)</h3>
<ul>
<li><b>Overfitting</b>: Parameter so lange abstimmen, bis die Vergangenheit perfekt aussieht.</li>
<li><b>Kosten ignorieren</b>: Gebühren, Funding und Slippage können einen profitabel aussehenden Backtest in einen Verlierer verwandeln.</li>
<li><b>Look-ahead-Bias</b>: versehentlich Informationen aus der Zukunft in den Regeln nutzen.</li>
<li><b>Survivorship-Bias</b>: nur Coins testen, die es noch gibt.</li>
<li><b>Regimewechsel</b>: Eine Regel, die 2021 funktionierte, kann in einem ruhigen Markt versagen.</li>
</ul>
<p>Nutze <b>Walk-forward-Tests</b> (auf einem Zeitraum entwerfen, im nächsten testen), dann Paper Trading, dann live mit winziger Größe und einem Kill Switch (ein maximaler Drawdown, der den Bot automatisch stoppt).</p>

${B.ex('<p>Ein Grid-Bot wird zwischen 90 und 110 für einen Coin bei 100 eingerichtet und verdient wochenlang kleine Gewinne in einem ruhigen Markt. Dann kommt eine schlechte Nachricht, der Preis rutscht auf 70 und bleibt dort. Der Bot hat den ganzen Weg nach unten gekauft und hält nun einen großen Verlust, ohne Stopp. Ein Mensch mit Plan hätte einen Maximalverlust definiert und wäre ausgestiegen. Der Bot tat genau, was ihm gesagt wurde. Deshalb braucht Automatisierung eingebaute Risikolimits.</p>')}

${B.warn('<p>Der Markt für „Trading-Bots“ ist voller Betrug: Bots, die 2 % Tagesrendite versprechen, Einzahlungen auf der Plattform des Verkäufers verlangen oder dich fürs Anwerben anderer bezahlen. Ist eine Rendite garantiert, ist es kein Trading. Es ist eine Falle.</p>')}

<h3>Optional: ein strukturiertes Programm mit Bot</h3>
<p>Der Ersteller dieses Kurses bietet auch <b>Trading Lab</b> an, ein optionales kostenpflichtiges Programm, das einen Trading-Bot enthält, der Tradern helfen soll, Regeln konsequenter anzuwenden. Es ist nur ein mögliches Werkzeug, keine Voraussetzung und keine Ergebnisgarantie. Details stehen auf der <a href="#lab">Trading-Lab-Seite</a>. Was auch immer du nutzt, wende die Checkliste dieser Lektion an: Verstehe die Regeln, teste mit kleiner Größe, behalte reine Trading-API-Berechtigungen und setze einen Maximalverlust.</p>

${B.take(['Bots führen Regeln aus; sie erzeugen keinen Vorteil und beseitigen kein Risiko.', 'Hüte dich vor Versprechen garantierter Gewinne, geheimen Algorithmen und Aufforderungen, auf der Plattform eines anderen einzuzahlen.', 'Backteste mit Kosten, vermeide Overfitting, teste forward, starte dann winzig mit einem Kill Switch.', 'Nutze reine Trading-API-Keys mit IP-Beschränkung und behalte die Kontrolle über deine Gelder.'])}`,
      q: [
        ['Was kann ein Trading-Bot zuverlässig liefern?', ['Garantierte Gewinne', 'Disziplin und konsequente Ausführung deiner Regeln', 'Insiderinformationen', 'Null Risiko'], 1, 'Bots nehmen die Emotion heraus und arbeiten durchgehend, sind aber nur so gut wie die Regeln.'],
        ['Ein Verkäufer verspricht 2 % Tagesrendite mit seinem Bot und will, dass du auf seiner Plattform einzahlst. Das ist…', ['Eine tolle Gelegenheit', 'Ein klassisches Betrugsmuster', 'Branchenübliche Praxis', 'Ein steuerfreies Produkt'], 1, 'Garantierte hohe Renditen und Einzahlungen auf der Plattform des Verkäufers sind große Warnsignale.'],
        ['Welcher Schritt folgt direkt nach dem verantwortungsvollen Backtest einer Strategie?', ['Mit maximalem Hebel live gehen', 'Forward-Test oder Paper Trading, dann sehr kleine Live-Größe', 'Sie verkaufen', 'Kosten ignorieren'], 1, 'Out-of-Sample- und Live-Tests mit winziger Größe zeigen Probleme, die Backtests verbergen.']
      ]
    },
    {
      id: 'd7', m: 11, t: 'Psychologie für 24/7-Märkte',
      hook: 'Wenn der Markt nie schläft, schlafen FOMO und Angst auch nicht. Baue Regeln, damit du weder ausbrennst noch dein Konto sprengst.',
      body: `
<p>Krypto hat alle üblichen Trading-Emotionen, plus einige besondere, die durch ständige Verfügbarkeit, extreme Bewegungen und Social-Media-Hype entstehen.</p>

<h3>Krypto-spezifische psychologische Fallen</h3>
<ul>
<li><b>FOMO bei Pumps</b>: Ein Coin steigt an einem Tag um 40 % und alle reden darüber. Spät einzusteigen heißt meist, das Hoch zu kaufen.</li>
<li><b>„Number go up“-Euphorie</b>: Nach einer Rally führt das Gefühl der Unbesiegbarkeit zu größeren Positionen und lockereren Regeln.</li>
<li><b>Kapitulation</b>: Nach Wochen des Schmerzes alles am Tief verkaufen.</li>
<li><b>Rache und Überhebelung</b>: Einen Verlust mit einer größeren, gehebelten Wette wettmachen wollen.</li>
<li><b>Bildschirmsucht und Burnout</b>: Charts um 3 Uhr nachts prüfen, ständige Alarme, schlechter Schlaf.</li>
<li><b>Social-Media-Herde</b>: Gruppen und Chaträume verstärken Emotionen und verbreiten schlechte Informationen.</li>
<li><b>Spielermentalität</b>: Trades wie Casino-Runden behandeln. Der Nervenkitzel der Gewinne kann zum Zweck werden statt des Prozesses.</li>
</ul>

<h3>Regeln für eine nachhaltige Routine</h3>
<ol>
<li><b>Lege Handelszeiten fest.</b> Wähle Zeitfenster, in denen du analysierst und handelst, und schalte außerhalb ab.</li>
<li><b>Nutze Alarme statt Starren.</b> Setze Preisalarme an deinen Niveaus und lass das Handy aufpassen.</li>
<li><b>Begrenze Trades pro Tag</b> und höre auf, wenn du dein Tagesverlustlimit erreichst.</li>
<li><b>Keine gehebelten Positionen über Nacht</b>, es sei denn mit Stopps und kleiner Größe.</li>
<li><b>Drei-Fehler-Regel</b>: Drei Verluste in Folge bedeuten eine Pause von mindestens einer Stunde (oder den Rest des Tages).</li>
<li><b>Wochenendregel</b>: Reduziere die Größe oder bleibe flat, wenn dünne Liquidität dich nervös macht.</li>
<li><b>Schalte den Lärm stumm.</b> Entfolge Hype-Accounts. Die Informationsdiät zählt.</li>
<li><b>Schütze Schlaf, Sport, Sozialleben.</b> Ein müder Trader handelt wie ein impulsiver.</li>
<li><b>Trenne Trading-Geld von Lebensgeld.</b> Je weniger du auf das Ergebnis angewiesen bist, desto besser deine Entscheidungen.</li>
</ol>

<h3>Das Journal als Spiegel</h3>
<p>Protokolliere jeden Trade mit deinem emotionalen Zustand. Schau nach 30 bis 50 Trades, welche Gefühle mit Verlusten zusammenhängen (FOMO? Langeweile? Trades spät nachts?). Viele Trader entdecken, dass einige wenige Verhaltensweisen die meisten ihrer Verluste verursachen, und deren Behebung ist die schnellste verfügbare Verbesserung.</p>
${B.w('journal')}

${B.ex('<p>Noah bemerkte in seinem Journal, dass Trades nach Mitternacht im Schnitt −0,8R brachten, während Trades in seinem geplanten Morgenfenster im Schnitt +0,3R lieferten. Er hörte auf, nach 22 Uhr zu handeln, und seine Ergebnisse wurden von negativ zu positiv, ohne dass er die Strategie änderte.</p>')}

${B.tip('<p>Wenn du einen starken Drang verspürst, in einen Trade einzusteigen, warte 10 Minuten und schreibe den Grund auf. Lautet er „Ich habe Angst, dass er ohne mich davonläuft“, lass es. Es gibt immer morgen ein neues Setup.</p>')}

<h3>Wann du eine Pause einlegen solltest</h3>
<p>Wenn Trading deinen Schlaf, deine Beziehungen oder deine Arbeit beeinträchtigt, du Mietgeld einsetzt oder dich nicht aufhören fühlst, mach eine Pause und sprich mit jemandem, dem du vertraust. In den meisten Ländern gibt es Hilfsangebote bei problematischem Spielen, und Trading mit der falschen Haltung kann sich wie Glücksspiel verhalten.</p>

${B.take(['Krypto bringt FOMO bei Pumps, Bildschirmsucht und 24/7-Versuchung.', 'Lege Handelszeiten fest, nutze Alarme, begrenze Trades und respektiere Verlustlimits.', 'Dein Journal verrät, welche Emotionen und Gewohnheiten dich Geld kosten.', 'Wenn Trading deiner Gesundheit oder deinen Finanzen schadet, tritt zurück und suche Hilfe.'])}`,
      q: [
        ['Was ist eine gute Reaktion auf einen plötzlichen 40-%-Pump eines Coins, den du nicht besitzt?', ['Sofort mit Hebel kaufen', 'Nicht hinterherlaufen; auf ein Setup warten, das zu deinen Regeln passt', 'Geld leihen, um zu kaufen', 'Einen Fremden fragen'], 1, 'Spätes Hinterherjagen ist ein häufiger Weg, Hochs zu kaufen.'],
        ['Warum Preisalarme nutzen?', ['Um die ganze Nacht auf den Bildschirm zu schauen', 'Damit dein Handy deine Niveaus überwacht und du nicht auf Charts starren musst', 'Um den Hebel zu erhöhen', 'Um Influencern zu folgen'], 1, 'Alarme reduzieren Bildschirmzeit und emotionales Trading.'],
        ['Was bedeutet die Drei-Fehler-Regel?', ['Nur drei Trades pro Tag', 'Nach drei Verlusten in Folge eine Pause einlegen', 'Dreifacher Hebel', 'Nach drei Tagen mit dem Trading aufhören'], 1, 'Eine Pause beendet eine Serie emotionaler Entscheidungen.']
      ]
    },
    {
      id: 'd8', m: 12, t: 'Dein Krypto-Trading-Plan und die Abschluss-Checkliste',
      hook: 'Fasse alles zusammen: ein Plan, eine Meilensteinleiter und die Regel, die dich im Spiel hält. Dann schalte dein Zertifikat frei.',
      body: `
<p>Du hast Märkte, Hebel, Signale, Strategien, Risiko, Bots und Psychologie behandelt. Der letzte Schritt ist ein schriftlicher Plan und ein Weg von der Übung zum (vielleicht) echten Trading, mit Meilensteinen, die du dir verdienen musst, statt sie vorauszusetzen.</p>

<h3>Deine Vorlage für den Krypto-Trading-Plan</h3>
${B.tbl(['Abschnitt', 'Was zu schreiben ist'], [
        ['Zweck und Kapital', 'Warum ich handle; der Betrag an Risikokapital (Geld, das ich verlieren kann). Maximaler Prozentsatz meines Vermögens.'],
        ['Märkte und Produkte', 'Welche Coins und Paare; nur Spot oder auch Futures; maximaler Hebel (zum Beispiel 3x)'],
        ['Zeiteinheiten und Zeiten', 'Genutzte Charts; Handelsfenster; Zeiten ohne Trading'],
        ['Setups', 'Zwei oder drei Setups mit exakten Einstiegs-, Stopp- und Ausstiegsregeln'],
        ['Risikoregeln', 'Risiko pro Trade (0,5 bis 1 %), maximales offenes Risiko, Tages- und Wochenverlustlimits, nur Isolated Margin'],
        ['Plattformsicherheit', 'Gelder auf Handelsplätze verteilt; 2FA; reine Trading-API-Keys; Auszahlungsplan für Gewinne'],
        ['Routine', 'Vor-Trade-Checkliste, Journal nach jedem Trade, Wochenrückblick'],
        ['Psychologie-Regeln', 'Drei Fehler, keine Rache-Trades, Schlaf- und Pausenregeln'],
        ['Pausenregel', 'Bei einem Drawdown von zum Beispiel 10 bis 15 % das Trading stoppen und mindestens eine Woche überprüfen'],
        ['Steuern und Aufzeichnungen', 'Alle Trades exportieren, Kostennachweise aufbewahren, lokale Regeln verstehen']
      ])}

<h3>Die Meilensteinleiter</h3>
<ol>
<li><b>Stufe 1: Lernen</b>. Schließe diesen Pfad ab, verstehe Risiko und Psychologie.</li>
<li><b>Stufe 2: Papier</b>. Mindestens 100 simulierte Trades mit festen Regeln und einem Journal. Positive Erwartung und 90 % Planeinhaltung.</li>
<li><b>Stufe 3: Mikro-Live</b>. Handle mit etwa 10 % der beabsichtigten Größe für weitere 100 Trades. Zuerst Spot.</li>
<li><b>Stufe 4: Konstant</b>. Über 200 echte Trades, positive Ergebnisse nach Gebühren, Drawdown unter Kontrolle, Regeln eingehalten.</li>
<li><b>Stufe 5: Vorsichtig skalieren</b>. Erhöhe die Größe in kleinen Schritten, reduziere nach Drawdowns, zahle Gewinne regelmäßig aus.</li>
</ol>
${B.ex('<p>Kai schließt Stufe 2 ab und stellt fest, dass seine Papierergebnisse positiv waren, er aber in 25 % der Trades seine Stopp-Regel gebrochen hat. Statt live zu gehen, wiederholt er das Paper Trading, bis die Planeinhaltung über 90 % liegt. Drei Wochen später startet er Stufe 3 mit 500 € und einer harten Regel: eine Woche Pause bei −50 €. Langsam ist geschmeidig, geschmeidig ist schnell.</p>')}

<h3>Wann du aufhören solltest</h3>
<p>Trading ist nicht für jeden, und nach einem ehrlichen Versuch aufzuhören ist ein Sieg der Disziplin, kein Scheitern. Erwäge aufzuhören oder zu langfristigem Investieren zu wechseln, wenn du wiederholt deine Pausenregel erreicht hast, deine Regeln nach Monaten der Mühe nicht einhalten kannst oder das Trading dein Leben beeinträchtigt. Viele Menschen stellen fest, dass ihnen ein langweiliger, diversifizierter Anlageplan viel besser dient.</p>

${B.w('checklist', { key: 'd8', title: 'Abschluss-Checkliste', accent: 'ct', items: 'Ich habe meinen vollständigen Trading-Plan geschrieben, einschließlich Risikoregeln und einer Pausenregel|Ich habe mindestens 100 Papier-Trades mit einem Journal abgeschlossen|Meine Papierergebnisse zeigen positive Erwartung und 90 % Planeinhaltung|Ich nutze Isolated Margin und halte den Hebel niedrig|Meine Börsenkonten haben 2FA, Whitelists und reine Trading-API-Keys|Ich weiß, wie ich meinen Trade-Verlauf für die Steuer exportiere|Ich handle nur mit Geld, dessen Verlust ich verkraften kann' })}

<h3>Vertiefen (optional)</h3>
<p>Wenn du ein strukturiertes Programm mit einem Trading-Bot möchtest, der helfen soll, Regeln konsequent anzuwenden, bietet der Ersteller dieses Kurses <b>Trading Lab</b> auf Gumroad an (ein optionales kostenpflichtiges Produkt). Dieser kostenlose Kurs vermittelt bereits die Grundlagen, nutze Trading Lab also nur, wenn du zusätzliche Struktur willst, und behalte immer die Risikoregeln aus diesem Pfad. Kein Programm und kein Bot garantiert Gewinne. Siehe die <a href="#lab">Trading-Lab-Seite</a>.</p>

${B.key('<p><b>Du hast den Krypto-Trader-Pfad abgeschlossen.</b> Das Ziel war nie, aus dir einen Spieler mit besseren Charts zu machen. Es war, aus dir einen sorgfältigen Profi in Ausbildung zu machen, der zuerst das Risiko respektiert. Prüfe jetzt deinen Fortschritt und hole dir dein Zertifikat.</p><p><a class="btn sm" href="#cert">Mein Zertifikat ansehen</a></p>')}

${B.take(['Schreibe einen vollständigen Plan: Kapital, Produkte, Setups, Risikoregeln, Plattformsicherheit, Routine und Pausenregel.', 'Steige die Leiter hinauf: Lernen, Papier, Mikro-Live, konstant, dann vorsichtig skalieren.', 'Nach einem ehrlichen Versuch aufzuhören ist eine legitime, disziplinierte Entscheidung.', 'Kein Programm und kein Bot garantiert Gewinn; deine Risikoregeln schützen dich.'])}`,
      q: [
        ['Was sollte eine Pausenregel auslösen?', ['Mehr Hebel', 'Einen Handelsstopp und eine Überprüfung nach einem festgelegten Drawdown', 'Das Journal löschen', 'Höheres Risiko pro Trade'], 1, 'Sie schützt dich vor Tilt und zwingt dich zu lernen.'],
        ['Was kommt auf der Meilensteinleiter zuerst?', ['Positionsgröße skalieren', 'Lernen und Paper Trading', '50x Hebel nutzen', 'Fremden per Copy Trading folgen'], 1, 'Jeden Schritt verdienst du dir mit Belegen.'],
        ['Welche Aussage zu kostenpflichtigen Programmen und Bots ist am zutreffendsten?', ['Sie können Gewinne garantieren', 'Sie können Struktur bieten, aber kein Risiko beseitigen oder Ergebnisse garantieren', 'Sie ersetzen Risikomanagement', 'Sie sind gesetzlich vorgeschrieben'], 1, 'Jedes Werkzeug ist nur so gut wie die Regeln, Tests und Disziplin, die du anwendest.']
      ]
    }
  ]);
})();
