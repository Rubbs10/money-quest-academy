/* Daytrader-Pfad: 8 Lektionen */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('trd', [
    {
      id: 'b1', m: 11, t: 'Realitätscheck: die Wahrheit über Daytrading',
      hook: 'Vor Charts und Strategien ein ehrlicher Blick darauf, wer gewinnt, wer verliert und was es wirklich braucht.',
      body: `
<p>Soziale Medien zeigen Daytrading als Laptops am Strand und Screenshots riesiger Gewinne. Die Wirklichkeit ähnelt eher einem Wettbewerbsberuf, in dem die meisten Neulinge Geld verlieren. Diese Lektion soll dich nicht abschrecken. Sie soll dafür sorgen, dass du, wenn du weitermachst, es mit offenen Augen und professioneller Haltung tust.</p>

<h3>Was zählt als Daytrading?</h3>
<ul>
<li><b>Scalping</b>: Trades, die Sekunden bis Minuten dauern und winzige Gewinne viele Male am Tag anstreben.</li>
<li><b>Daytrading</b>: Positionen, die am selben Tag eröffnet und geschlossen werden, keine über Nacht.</li>
<li><b>Swingtrading</b>: Positionen, die einige Tage bis mehrere Wochen gehalten werden. Weniger Bildschirmzeit, weniger Kosten.</li>
<li><b>Positionstrading</b>: Wochen bis Monate. Das ist näher am Investieren.</li>
</ul>

<h3>Was die Belege sagen</h3>
<ul>
<li>Eine Studie zum taiwanesischen Markt (Barber, Lee, Liu und Odean) fand, dass weniger als 1 % der Daytrader nach Kosten Jahr für Jahr vorhersehbar Gewinne erzielten.</li>
<li>Eine Studie zu brasilianischen Futures-Daytradern, die mehr als 300 Tage weitermachten, fand, dass rund 97 % von ihnen Geld verloren.</li>
<li>Europäische Aufsichtsbehörden verpflichten Broker zu veröffentlichen, dass typischerweise <b>70 bis 90 % der Privatkunden-Konten mit gehebelten CFDs Geld verlieren</b>.</li>
</ul>

<h3>Warum die meisten verlieren</h3>
<ol>
<li><b>Trading ist vor Kosten ein Nullsummenspiel und nach Kosten ein Negativsummenspiel.</b> Jeder Gewinn hat auf der anderen Seite einen Verlierer, und Provisionen, Spreads und Steuern kommen aus dem Gesamtbetrag.</li>
<li><b>Du konkurrierst mit Profis und Algorithmen</b> mit besseren Daten, schnellerer Ausführung und mehr Kapital.</li>
<li>Der <b>Hebel</b> vergrößert Fehler schneller, als sich Können entwickeln kann.</li>
<li><b>Psychologie</b>: Angst, Gier, Langeweile und der Drang, Verluste „zurückzuholen“.</li>
<li><b>Kein Vorteil, keine Risikoregeln, kein Plan</b>: Glücksspiel mit Zusatzschritten.</li>
</ol>
${B.warn('<p>Wenn ein Kurs, Influencer oder Roboter „garantierte“ oder „beständige tägliche Gewinne“ verspricht, behandle das als Warnsignal. Kein ehrlicher Profi garantiert Trading-Ergebnisse. Jedes Bildungsprodukt, auch die optionalen, die später in diesem Kurs erwähnt werden, kann dir beim Lernen und Strukturieren deiner Arbeit helfen, aber das Verlustrisiko bleibt bei dir.</p>')}

<h3>Trading ist ein Geschäft, kein Hobby</h3>
<p>Profis behandeln Trading wie ein kleines Unternehmen: Kapital, Regeln, Aufzeichnungen, Kosten, Steuern und ein Verlustbudget. Sie erwarten, oft falschzuliegen, und verdienen, weil die Gewinner größer sind als die Verlierer und weil sie nie zu viel auf eine Idee setzen.</p>

<h3>Was du realistisch brauchst</h3>
<ul>
<li><b>Risikokapital</b>: Geld, das du wirklich verlieren kannst. Nicht die Miete, nicht die Ersparnisse, nicht geliehenes Geld.</li>
<li><b>Zeit</b>: Ernsthaftes Daytrading ist während der Marktzeiten fast ein Vollzeitjob, plus Vorbereitung und Auswertung.</li>
<li><b>Ein getesteter Vorteil</b>: eine wiederholbare Art, nach Kosten etwas öfter richtigzuliegen oder mehr zu gewinnen, als du verlierst.</li>
<li><b>Prozess</b>: schriftliche Regeln, ein Journal, eine Auswertungsroutine.</li>
<li><b>Eine stabile Basis</b>: ein Einkommen oder Anlagen außerhalb des Tradings, damit Druck deine Entscheidungen nicht verzerrt.</li>
</ul>

${B.ex('<p>Stell dir zwei Personen vor, die mit je 5.000 € starten. Alex riskiert bei jedem Trade 250 € (5 %), jagt große Gewinne und verliert sechs Trades in Folge: minus 26 %. Sam riskiert 25 € (0,5 %) pro Trade und verliert dieselben sechs: minus 3 %. Sam ist weiter ruhig, weiter im Spiel und lernt weiter. Alex ist auf Tilt und kurz davor, es zu verschlimmern. Überleben ist die erste Fähigkeit.</p>')}

<h3>Ein vernünftiger Weg</h3>
<ol>
<li>Baue zuerst dein Anlagefundament. Die meisten Menschen sollten investieren und nur mit einem kleinen Teil traden (zum Beispiel unter 5 bis 10 % ihres Vermögens).</li>
<li>Lerne das Handwerk in diesem Pfad.</li>
<li>Übe auf einem Simulator mindestens 100 Trades.</li>
<li>Trade echtes Geld in winziger Größe. Beweise, dass du deinen Regeln folgen kannst, bevor du skalierst.</li>
</ol>

${B.w('checklist', { key: 'b1', title: 'Bin ich überhaupt bereit, Trading zu lernen?', accent: 'trd', items: 'Ich habe eine Notfallreserve und keine hochverzinsten Schulden|Das Geld, mit dem ich handle, kann ich komplett verlieren|Ich verstehe, dass die meisten Anfänger Geld verlieren, und akzeptiere das|Ich werde mindestens 100 Trades per Paper-Trading machen, bevor ich echtes Geld riskiere|Ich werde Regeln schreiben und ein Journal führen|Ich versuche nicht, einen finanziellen Notfall mit Trading zu lösen' })}

${B.take(['Die meisten Daytrader verlieren Geld; Kosten und Hebel machen es schwerer.', 'Behandle Trading als Geschäft mit Risikokapital, Regeln und Aufzeichnungen.', 'Trade nie mit Geld, das du brauchst. Erst überleben, dann Gewinn.', 'Übe auf einem Simulator, dann trade winzige Größen, bevor du skalierst.'])}`,
      q: [
        ['Warum wird Trading nach Kosten als „Negativsummenspiel“ beschrieben?', ['Weil Märkte immer fallen', 'Weil jeder Gewinner einen Verlierer hat und Kosten aus dem Gesamtbetrag kommen', 'Weil Broker Geld verleihen', 'Weil Aktien sich nicht bewegen'], 1, 'Spreads, Provisionen und Steuern verringern den Gesamtbetrag, der allen Tradern zur Verfügung steht.'],
        ['Welches Geld eignet sich fürs Trading?', ['Die Miete des nächsten Monats', 'Geliehenes Geld', 'Risikokapital, das du verlieren kannst', 'Deine Notfallreserve'], 2, 'Nur Geld, das du verlieren kannst, ohne dein Leben zu beschädigen, gehört in die Spekulation.'],
        ['Was ist ein gesunder erster Schritt nach den Trading-Grundlagen?', ['Maximalen Hebel nutzen', 'Auf einem Simulator über 100 Trades üben', 'Den Job kündigen', 'Signalverkäufern folgen'], 1, 'Ein Simulator lässt dich ohne Kosten aus Fehlern lernen.']
      ]
    },
    {
      id: 'b2', m: 14, t: 'Wie Märkte funktionieren: Orders, Spreads und Hebel',
      hook: 'Was zwischen deinem Klick auf „Kaufen“ und dem Trade wirklich passiert. Verstehe die Technik, damit sie dich nicht überrascht.',
      body: `
<p>Ein Markt ist ein Ort, an dem Käufer und Verkäufer aufeinandertreffen. Preise bewegen sich durch das Gleichgewicht zwischen diesen beiden Gruppen. Um gut zu traden, musst du die Mechanik verstehen, die entscheidet, welchen Preis du tatsächlich bekommst.</p>

<h3>Bid, Ask und Spread</h3>
<p>Jedes Instrument hat zwei Live-Preise: den <b>Bid</b> (der höchste Preis, den Käufer zahlen, also das, was du beim Verkauf bekommst) und den <b>Ask</b> (der niedrigste Preis, den Verkäufer wollen, also das, was du beim Kauf zahlst). Der Unterschied ist der <b>Spread</b>.</p>
${B.ex('<p>Eine Aktie zeigt Bid 49,98 € und Ask 50,02 €. Du kaufst 200 Aktien zu 50,02 € (10.004 €). Verkaufst du sofort, bekommst du 49,98 € (9.996 €). Du hast gerade 8 € verloren, ohne etwas zu tun. Das sind die Spread-Kosten, zusätzlich zu jeder Provision. Ein Scalper, der 20-mal am Tag handelt, zahlt das 20-mal, sodass der Markt sich schon mehr als die Kosten bewegen muss, nur damit du bei null landest.</p>')}

<h3>Liquidität, Volumen und Slippage</h3>
<ul>
<li><b>Liquidität</b>: wie leicht du kaufen oder verkaufen kannst, ohne den Preis zu bewegen. Große Aktien und die wichtigsten Währungspaare sind sehr liquide; kleine Aktien und obskure Token nicht.</li>
<li><b>Volumen</b>: wie viele Einheiten gehandelt wurden. Höheres Volumen bedeutet meist engere Spreads und verlässlichere Kursbewegungen.</li>
<li><b>Slippage</b>: der Unterschied zwischen dem erwarteten und dem erhaltenen Preis, besonders in schnellen Märkten oder bei großen Orders.</li>
</ul>

<h3>Ordertypen</h3>
${B.tbl(['Order', 'Was sie tut', 'Vorsicht'], [
        ['Market', 'Kauft oder verkauft sofort zum besten verfügbaren Preis', 'Der Preis kann in schnellen oder dünnen Märkten rutschen'],
        ['Limit', 'Kauft oder verkauft nur zu deinem Preis oder besser', 'Sie wird vielleicht nie ausgeführt, wenn der Preis nicht dort ankommt'],
        ['Stop (Stop-Loss)', 'Wird zur Market-Order, wenn der Preis dein Stop-Niveau erreicht', 'Kann bei Kurslücken schlechter als der Stop ausgeführt werden'],
        ['Stop-Limit', 'Wird am Stop-Niveau zur Limit-Order', 'Kann bei schneller Bewegung gar nicht ausgeführt werden'],
        ['Trailing Stop', 'Stop, der dem Preis in festem Abstand folgt', 'Zu eng, und normales Rauschen wirft dich raus']
      ])}

<h3>Long, Short und Hebel</h3>
<ul>
<li><b>Long gehen</b>: Du kaufst in der Hoffnung, dass der Preis steigt.</li>
<li><b>Short gehen</b>: Du verkaufst etwas Geliehenes in der Hoffnung, es billiger zurückzukaufen. Verluste bei einem Short sind theoretisch unbegrenzt, weil der Preis weiter steigen kann.</li>
<li><b>Margin und Hebel</b>: Der Broker lässt dich eine größere Position kontrollieren, als dein Geld hergibt. Mit 10:1-Hebel kontrollieren 1.000 € 10.000 €, sodass eine Bewegung von 10 % gegen dich deine gesamte Einlage vernichtet.</li>
</ul>
<p>In der EU deckeln die Aufsichtsbehörden den Hebel für Privatkunden bei gehebelten Produkten (CFDs): 30:1 für die wichtigsten Währungspaare, 20:1 für andere Paare, Gold und wichtige Indizes, 10:1 für andere Rohstoffe und Indizes, 5:1 für Einzelaktien und 2:1 für Kryptowerte. Broker müssen Positionen außerdem schließen, wenn die Margin auf 50 % fällt, und Privatkunden einen Schutz vor Nachschusspflicht bieten. Andere Länder haben andere Regeln. In den USA galt für Konten mit häufigem Daytrading historisch ein Mindestkapital, und diese Regeln werden überarbeitet, also prüfe die aktuellen Vorschriften immer bei deinem Broker.</p>

<h3>Instrumente, die du im Daytrading handeln kannst</h3>
<ul>
<li><b>Aktien und ETFs</b>: einfach, transparent, oft provisionsbasiert.</li>
<li><b>Forex</b>: Währungspaare, an Werktagen 24 Stunden geöffnet, gehebelt.</li>
<li><b>Futures</b>: standardisierte Kontrakte auf Indizes, Rohstoffe und Zinsen. Sehr liquide, sehr stark gehebelt.</li>
<li><b>Optionen</b>: Kontrakte, die das Recht geben, später zu kaufen oder zu verkaufen. Komplex und nichts für Anfänger.</li>
<li><b>CFDs</b>: Differenzkontrakte. Eine gehebelte Vereinbarung mit einem Broker statt Eigentum. Verfügbarkeit und Regeln unterscheiden sich je nach Land, und sie bergen hohes Risiko.</li>
</ul>

<h3>Wenn an den Märkten viel los ist</h3>
<p>Das meiste Daytrading findet nahe Eröffnung und Schluss einer Sitzung statt, wenn Volumen und Volatilität am höchsten sind. Die Tagesmitte ist oft ruhiger und unstetiger. Veröffentlichungen von Wirtschaftsdaten (Arbeitsmarkt, Inflation, Zentralbankentscheidungen) verursachen plötzliche Ausschläge und weitere Spreads, deshalb meiden viele Trader sie oder reduzieren dann die Größe.</p>

${B.warn('<p>Hebel ist der Kontokiller Nummer eins. Er macht dich nicht klüger und den Markt nicht freundlicher, er beschleunigt nur, was gerade passiert.</p>')}

${B.take(['Du kaufst zum Ask und verkaufst zum Bid; der Spread ist bei jedem Trade ein echter Kostenfaktor.', 'Liquidität und Volumen entscheiden, wie leicht und günstig du handeln kannst.', 'Lerne die Ordertypen: Limit gibt Preiskontrolle, Stop-Loss begrenzt das Risiko, kann aber rutschen.', 'Hebel multipliziert Gewinne und Verluste; Aufseher deckeln ihn aus gutem Grund.'])}`,
      q: [
        ['Du zahlst den Ask und erhältst den Bid. Der Unterschied dazwischen ist…', ['Die Provision', 'Der Spread', 'Die Slippage', 'Die Margin'], 1, 'Der Spread ist ein eingebauter Kostenfaktor bei jedem Kauf und Verkauf.'],
        ['Bei 20:1-Hebel kann eine Bewegung von wie viel gegen dich deine Einlage (grob) vernichten?', ['20 %', '5 %', '50 %', '1 %'], 1, '100 % ÷ 20 = 5 %, vor Gebühren und Margin-Regeln.'],
        ['Welche Order lässt dich den maximalen Zahlpreis kontrollieren?', ['Market-Order', 'Limit-Order', 'Stop-Loss', 'Trailing Stop'], 1, 'Eine Limit-Order wird nur zu deinem Preis oder besser ausgeführt, kann aber unausgeführt bleiben.']
      ]
    },
    {
      id: 'b3', m: 13, t: 'Kurscharts lesen: Kerzen, Trends und Marken',
      hook: 'Lerne die visuelle Sprache des Preises und lies die Geschichte, die jede Kerze erzählt.',
      body: `
<p>Ein Kurschart ist die Aufzeichnung des Kampfs zwischen Käufern und Verkäufern. Der beliebteste Typ ist der <b>Candlestick-Chart (Kerzenchart)</b>, vor Jahrhunderten von japanischen Reishändlern erfunden. Jede Kerze fasst einen Zeitraum zusammen (eine Minute, eine Stunde, einen Tag).</p>

<h3>Anatomie einer Kerze</h3>
<ul>
<li><b>Eröffnung (Open)</b>: Preis zu Beginn des Zeitraums.</li>
<li><b>Schluss (Close)</b>: Preis am Ende.</li>
<li><b>Hoch / Tief</b>: die Extreme, als dünne Linien gezeichnet, die Dochte oder Schatten heißen.</li>
<li>Der <b>Körper</b> ist das Kästchen zwischen Open und Close. Grün (oder hohl) heißt Schluss über der Eröffnung; rot heißt Schluss unter der Eröffnung.</li>
</ul>
<p>Baue selbst eine und sieh, wie sich die Formen in ihrer Bedeutung ändern:</p>
${B.w('candles')}

<h3>Trend: die Richtung des Marktes</h3>
<p>Das einfachste und nützlichste Konzept ist der <b>Trend</b>.</p>
<ul>
<li><b>Aufwärtstrend</b>: eine Treppe aus höheren Hochs und höheren Tiefs.</li>
<li><b>Abwärtstrend</b>: tiefere Hochs und tiefere Tiefs.</li>
<li><b>Range (seitwärts)</b>: Der Preis springt zwischen einem Boden und einer Decke.</li>
</ul>
${B.key('<p><b>„Der Trend ist dein Freund.“</b> Im Sinne des größeren Trends zu handeln, bringt meist bessere Chancen, als gegen ihn zu kämpfen. Die meisten Anfänger versuchen, Hochs und Tiefs zu erraten, und werden überrollt.</p>')}

<h3>Unterstützung und Widerstand</h3>
<p><b>Unterstützung</b> ist ein Preisbereich, in dem Käufer wiederholt eingestiegen sind, wie ein Boden. <b>Widerstand</b> ist dort, wo wiederholt Verkäufer auftauchten, wie eine Decke. Das sind Zonen, keine exakten Linien. Wenn der Preis durchbricht, wird alter Widerstand oft zur neuen Unterstützung (und umgekehrt). Weil viele Trader auf dieselben offensichtlichen Marken schauen, zählen sie tendenziell.</p>

<h3>Volumen: die Bestätigung</h3>
<p>Eine Bewegung mit starkem Volumen zeigt breite Beteiligung und ist vertrauenswürdiger. Ein Ausbruch mit schwachem Volumen scheitert oft. Achte auf steigendes Volumen in Trendrichtung und schwindendes Volumen bei Rücksetzern.</p>

<h3>Zeiteinheiten</h3>
<p>Jeder Chart lässt sich in verschiedenen Zeiteinheiten ansehen (1 Minute, 5 Minuten, 1 Stunde, täglich). Profis nutzen die <b>Multi-Timeframe-Analyse</b>: Sie prüfen den Tageschart für Trend und Schlüsselmarken und nutzen dann einen kleineren Chart (etwa 5 oder 15 Minuten), um Einstiege zu timen. Ein Muster im 1-Minuten-Chart ist viel weniger verlässlich als im Tageschart.</p>

<h3>Häufige Kerzensignale (mit Vorsicht nutzen)</h3>
<ul>
<li><b>Doji</b>: Open und Close fast gleich. Unentschlossenheit.</li>
<li><b>Hammer / Pin Bar</b>: langer unterer Docht. Mögliche Ablehnung niedrigerer Preise.</li>
<li><b>Shooting Star</b>: langer oberer Docht. Mögliche Ablehnung höherer Preise.</li>
<li><b>Engulfing</b>: eine Kerze, deren Körper den der vorherigen Kerze vollständig überdeckt. Möglicher Wechsel der Kontrolle.</li>
</ul>
${B.warn('<p>Kein Kerzenmuster funktioniert allein. Seine Bedeutung hängt vom <b>Kontext</b> ab: wo es auftritt (an einer Schlüsselmarke?), in welchem Trend es steht und welches Volumen dahintersteht. Ein „Hammer“ mitten im Nirgendwo bedeutet fast nichts.</p>')}

${B.ex('<p>Eine Aktie ist zwei Wochen lang in einer sauberen Treppe gestiegen. Sie setzt auf ein früheres Widerstandsniveau zurück, das jetzt als Unterstützung wirkt, bildet dort bei überdurchschnittlichem Volumen eine Hammer-Kerze, und die nächste Kerze schließt höher. Diese Kombination (Trend + Unterstützung + Ablehnungskerze + Volumen) ist eine weit stärkere Geschichte als jedes Einzelteil.</p>')}

${B.take(['Eine Kerze zeigt Open, High, Low und Close eines Zeitraums.', 'Erkenne zuerst den Trend (höhere Hochs und Tiefs, oder tiefere), dann die Marken.', 'Unterstützung und Widerstand sind Zonen, in denen der Preis schon einmal reagiert hat.', 'Volumen bestätigt Bewegungen, und größere Zeiteinheiten haben mehr Gewicht.', 'Kerzenmuster brauchen Kontext, um etwas zu bedeuten.'])}`,
      q: [
        ['Eine Kerze hat einen langen unteren Docht und einen kleinen Körper nahe der Spitze. Diese Form heißt…', ['Hammer-artige Kerze', 'Shooting Star', 'Eine Kurslücke', 'Eine Trendlinie'], 0, 'Langer unterer Schatten plus kleiner Körper ist eine Hammer-Form und deutet auf die Ablehnung niedrigerer Preise.'],
        ['Was definiert einen Aufwärtstrend?', ['Preis über null', 'Höhere Hochs und höhere Tiefs', 'Tiefere Hochs und tiefere Tiefs', 'Nur grüne Kerzen'], 1, 'Die Treppe aus steigenden Hochs und Tiefs ist die Grunddefinition.'],
        ['Warum mehrere Zeiteinheiten nutzen?', ['Um sich zu verwirren', 'Höhere Zeiteinheiten zeigen den Haupttrend und Schlüsselmarken; niedrigere helfen beim Timing der Einstiege', 'Weil Broker es verlangen', 'Sie geben immer identische Signale'], 1, 'Der Überblick verbessert Einstiege und verhindert, gegen starke Trends zu handeln.']
      ]
    },
    {
      id: 'b4', m: 12, t: 'Indikatoren und Werkzeuge (und ihre Grenzen)',
      hook: 'Gleitende Durchschnitte, RSI, MACD und Co.: was sie messen, wie Trader sie nutzen und warum mehr nicht besser ist.',
      body: `
<p>Indikatoren sind mathematische Formeln, die auf den Preis (und manchmal das Volumen) angewendet werden, damit Muster leichter zu sehen sind. Sie sind Werkzeuge, um zu <b>beschreiben</b>, was passiert ist, keine Glaskugeln. Weil sie vergangene Daten nutzen, hinken sie alle dem Preis bis zu einem gewissen Grad hinterher.</p>

<h3>Die wesentlichen fünf (plus einer)</h3>
${B.tbl(['Indikator', 'Was er zeigt', 'Übliche Nutzung', 'Grenzen'], [
        ['Gleitender Durchschnitt (SMA / EMA)', 'Durchschnittspreis über N Perioden. Die EMA reagiert schneller', 'Trendrichtung; dynamische Unterstützung; Kreuzungen (z. B. 50 vs. 200)', 'Hinkt hinterher; Fehlsignale in Ranges'],
        ['RSI (14)', 'Momentum von 0 bis 100', 'Über 70 „überkauft“, unter 30 „überverkauft“; Divergenzen', 'In starken Trends kann der RSI lange „überkauft“ bleiben'],
        ['MACD (12, 26, 9)', 'Differenz zweier EMAs und ihre Signallinie', 'Momentumwechsel und Trendstärke', 'Verzögert; verrauscht in Ranges'],
        ['Bollinger-Bänder (20, 2)', 'Gleitender Durchschnitt ± 2 Standardabweichungen', 'Volatilitäts-Verengungen und -Ausweitungen', 'Eine Berührung des Bandes ist keine automatische Umkehr'],
        ['VWAP', 'Volumengewichteter Durchschnittspreis des Tages', 'Innertäglicher „fairer Wert“; Institutionen orientieren sich daran', 'Nur innertäglich; wird täglich zurückgesetzt'],
        ['ATR (14)', 'Average True Range: typische Bewegungsgröße', 'Stop-Abstand und Positionsgröße festlegen', 'Zeigt keine Richtung']
      ])}

<h3>Gleitende Durchschnitte in der Praxis</h3>
<p>Die Steigung eines gleitenden Durchschnitts gibt dir einen schnellen Eindruck vom Trend: Ein Preis über einer steigenden 20er- oder 50er-EMA deutet auf einen Aufwärtstrend. Im Paper-Trading-Labor später kannst du einen 20-Kerzen-Durchschnitt einschalten und sehen, wie der Preis ihn tendenziell respektiert. Ein „Golden Cross“ (50-Tage-Durchschnitt kreuzt über den 200-Tage-Durchschnitt) und ein „Death Cross“ (das Gegenteil) werden viel beobachtet, kommen aber spät. Wenn sie erscheinen, ist oft schon ein Großteil der Bewegung passiert.</p>

<h3>RSI richtig genutzt</h3>
<p>Anfänger sehen den RSI über 70 und verkaufen sofort. Das ist eine klassische Falle: In starken Aufwärtstrends kann der RSI wochenlang über 70 bleiben. Besser ist es, nach <b>Divergenz</b> zu suchen: Der Preis macht ein höheres Hoch, aber der RSI ein tieferes Hoch, was nachlassendes Momentum signalisiert. Selbst dann warte, bis der Preis bestätigt.</p>

<h3>ATR für Stops und Größe</h3>
<p>Wenn der ATR einer Aktie 1,50 € beträgt, liegt die normale Bewegung bei etwa 1,50 € pro Periode. Platzierst du den Stop 0,30 € entfernt, wird ihn gewöhnliches Rauschen treffen. Ein Stop beim 1- bis 2-Fachen des ATR hinter einem sinnvollen Strukturpunkt überlebt das Rauschen besser. Ein weiterer Stop bedeutet eine kleinere Position, sodass das Risiko in Euro konstant bleibt.</p>

<h3>Warum mehr Indikatoren dich schlechter machen</h3>
<p>Viele Indikatoren sind verschiedene Sichtweisen auf dieselben Preisdaten. Fünf Momentum-Indikatoren zu stapeln ergibt nicht fünf unabhängige Bestätigungen. Es ergibt fünfmal dasselbe Signal, plus Verwirrung, wenn sie sich widersprechen. Erfahrene Trader nutzen meist <b>Price Action plus zwei oder drei einfache Werkzeuge</b>.</p>
${B.ex('<p>Chris hat 9 Indikatoren im Chart, 3 sagen Kaufen, 4 Verkaufen und 2 neutral. Er wartet und verpasst die Bewegung. Dana nutzt eine 20er-EMA für den Trend, Volumen und Schlüsselmarken. Wenn der Preis in einem Aufwärtstrend bei sinkendem Volumen zur 20er-EMA zurückläuft, sucht sie den Einstieg. Einfach, wiederholbar, leicht zu testen.</p>')}

${B.tip('<p>Bevor du einen Indikator hinzufügst, schreib die konkrete Frage auf, die er beantwortet (Trend? Momentum? Volatilität?). Kannst du das nicht, entferne ihn.</p>')}

${B.take(['Indikatoren fassen vergangene Preise zusammen; keiner sagt die Zukunft voraus.', 'Kenne die Aufgabe jedes einzelnen: Trend (gleitende Durchschnitte), Momentum (RSI, MACD), Volatilität (ATR, Bollinger), fairer Wert (VWAP).', 'RSI „überkauft“ ist in einem starken Trend kein Verkaufssignal.', 'Nutze den ATR, um Stops außerhalb des normalen Rauschens zu setzen und Positionen richtig zu dimensionieren.', 'Wenige, einfache Werkzeuge schlagen überladene Charts.'])}`,
      q: [
        ['Wobei hilft der ATR?', ['Richtung vorhersagen', 'Die typische Preisbewegung messen, um Stops und Positionsgröße festzulegen', 'Gewinn garantieren', 'Nachrichten finden'], 1, 'Der ATR misst die Volatilität, was hilft, Stops sinnvoll zu dimensionieren.'],
        ['Warum kann ein RSI über 70 ein schlechtes automatisches Verkaufssignal sein?', ['Er überschreitet nie 70', 'In starken Aufwärtstrends kann er lange hoch bleiben, während der Preis weiter steigt', 'Er ist kaputt', 'Weil 70 immer falsch ist'], 1, 'Überkauft-Werte können in starken Trends anhalten.'],
        ['Was ist das Problem beim Stapeln vieler ähnlicher Indikatoren?', ['Sie sind zu billig', 'Sie liefern wiederholt dieselbe Information und stiften Verwirrung, wenn sie sich widersprechen', 'Sie verlangsamen nur den Computer', 'Es gibt kein Problem'], 1, 'Sie stammen aus denselben Preisdaten, sind also keine unabhängigen Bestätigungen.']
      ]
    },
    {
      id: 'b5', m: 14, t: 'Trading-Strategien: finde den Stil, der zu dir passt',
      hook: 'Trend, Rücksetzer, Ausbruch, Range, Eröffnungs-Range: wie jede funktioniert, wo sie scheitert und wie du sie testest, bevor du einen Cent riskierst.',
      body: `
<p>Eine <b>Strategie</b> ist ein vollständiger Regelsatz: was du handelst, wann du einsteigst, wo du den Stop setzt, wo du Gewinne mitnimmst und wie groß die Position ist. Ohne Regeln zu traden ist Raten. Hier die klassischen Stile.</p>

<h3>1. Trendfolge</h3>
<p><b>Idee:</b> Trends neigen dazu, sich fortzusetzen. Kaufe Stärke im Aufwärtstrend, verkaufe Schwäche im Abwärtstrend.<br><b>Einstieg:</b> Der Preis durchbricht ein jüngstes Hoch bei steigendem gleitendem Durchschnitt.<br><b>Stop:</b> unter dem letzten höheren Tief.<br><b>Scheitert, wenn:</b> Märkte seitwärts schwanken. Erwarte viele kleine Verluste und wenige große Gewinne, bei niedrigerer Trefferquote.</p>

<h3>2. Rücksetzer (Dip im Trend kaufen)</h3>
<p><b>Idee:</b> In einem starken Trend bieten kurze Rücksetzer bessere Einstiege.<br><b>Einstieg:</b> Der Preis läuft in einem Aufwärtstrend zu einem gleitenden Durchschnitt oder einer Unterstützung zurück und zeigt eine Umkehrkerze.<br><b>Stop:</b> unter dem Tief des Rücksetzers.<br><b>Scheitert, wenn:</b> der Rücksetzer zur Trendumkehr wird.</p>

<h3>3. Ausbruch (Breakout)</h3>
<p><b>Idee:</b> Nach einer Konsolidierung bricht der Preis explosiv aus seiner Range aus.<br><b>Einstieg:</b> ein Schluss über dem Widerstand bei hohem Volumen (oder ein Retest der durchbrochenen Marke).<br><b>Stop:</b> zurück in der Range.<br><b>Scheitert, wenn:</b> es Fehlausbrüche gibt (der Preis stößt durch und fällt zurück). Warte auf Bestätigung und Volumen.</p>

<h3>4. Range-Trading / Rückkehr zum Mittelwert</h3>
<p><b>Idee:</b> Gibt es keinen Trend, kehrt der Preis zur Mitte zurück. Verkaufe nahe dem Widerstand, kaufe nahe der Unterstützung.<br><b>Stop:</b> knapp außerhalb der Range.<br><b>Scheitert, wenn:</b> die Range schließlich bricht und der Trend beginnt, weshalb ein Stop Pflicht ist.</p>

<h3>5. Ausbruch aus der Eröffnungs-Range</h3>
<p><b>Idee:</b> Markiere Hoch und Tief der ersten 15 bis 30 Minuten nach Marktöffnung. Ein Durchbruch auf einer der beiden Seiten mit Volumen kann zu einer ganztägigen Bewegung führen.<br><b>Stop:</b> die andere Seite oder die Mitte der Range.<br><b>Scheitert, wenn:</b> der Markt an einem ruhigen Nachrichtentag unentschlossen ist.</p>

<h3>6. Scalping</h3>
<p><b>Idee:</b> viele winzige Gewinne bei sehr kurzen Bewegungen. Erfordert enge Spreads, schnelle Ausführung, niedrige Gebühren und intensive Konzentration. Kosten fressen Scalper auf, und für Anfänger ist es sehr unwahrscheinlich, Gewinne zu machen.</p>

<h3>Nachrichten- und Quartalszahlen-Trades</h3>
<p>Preise springen rund um Veröffentlichungen, Spreads weiten sich und die Slippage steigt. Das ist ein fortgeschrittener Stil. Die meisten Anfänger sollten bei wichtigen Ereignissen einfach aus Positionen draußen bleiben.</p>

<h3>Einen Stil wählen</h3>
${B.tbl(['Stil', 'Trefferquote', 'Gewinngröße', 'Bildschirmzeit', 'Passt zu dir, wenn…'], [
        ['Trendfolge', 'Niedriger (35 bis 45 %)', 'Groß', 'Niedrig bis mittel', 'Du geduldig bist und kleine Verluste akzeptierst'],
        ['Rücksetzer', 'Mittel', 'Mittel', 'Mittel', 'Du gern auf einen guten Preis wartest'],
        ['Ausbruch', 'Mittel bis niedrig', 'Mittel bis groß', 'Mittel', 'Du mit Fehlausbrüchen umgehen kannst'],
        ['Range', 'Höher (50 bis 65 %)', 'Klein', 'Mittel', 'Du häufige kleine Gewinne und strikte Stops bevorzugst'],
        ['Scalping', 'Unterschiedlich', 'Winzig', 'Sehr hoch', 'Fast nie die Wahl eines Anfängers']
      ])}

<h3>Schreib das Regelbuch (eine Trade-Setup-Vorlage)</h3>
<ol>
<li><b>Marktbedingung</b>: was muss zutreffen? (z. B. täglicher Aufwärtstrend)</li>
<li><b>Auslöser</b>: das genaue Ereignis für den Einstieg (z. B. Schluss über dem Hoch der vorherigen Kerze nach einem Rücksetzer)</li>
<li><b>Stop-Loss</b>: exakte Preisregel</li>
<li><b>Ziel / Ausstieg</b>: festes Vielfaches des Risikos, Trailing oder Marke</li>
<li><b>Positionsgröße</b>: Risiko-% ÷ Stop-Abstand</li>
<li><b>Wann NICHT traden</b>: wichtige Nachrichten, geringes Volumen, nach Erreichen des Tagesverlusts</li>
</ol>

<h3>Backtesting-Grundlagen</h3>
<p><b>Backtesting</b> heißt, deine Regeln auf vergangene Daten anzuwenden, um zu sehen, wie sie gelaufen wären. Gut gemacht ist es sehr nützlich. Schlecht gemacht erzeugt es falsches Vertrauen:</p>
<ul>
<li>Beziehe Kosten ein: Spread, Provisionen und Slippage.</li>
<li>Nutze genug Trades (100+). Zehn Trades beweisen nichts.</li>
<li>Vermeide <b>Overfitting</b>: Justiere Parameter nicht endlos, bis die Vergangenheit perfekt aussieht. Teste mit Daten, die du nicht zum Entwerfen der Regeln benutzt hast („Out-of-Sample“).</li>
<li>Vermeide <b>Look-Ahead-Bias</b>: Nutze keine Informationen, die damals nicht verfügbar waren.</li>
<li>Schließe Vorwärtstests (Paper-Trading) an, bevor du echtes Geld einsetzt.</li>
</ul>

${B.warn('<p>Eine Strategie, die in einem Bullenmarkt funktionierte, kann in einer Range oder einem Crash scheitern. Märkte wechseln das Regime. Rechne damit, dass dein Vorteil Pflege braucht.</p>')}

${B.take(['Eine Strategie ist ein vollständiges Regelbuch: Marktbedingung, Auslöser, Stop, Ausstieg, Größe und wann nicht zu traden ist.', 'Trend- und Rücksetzer-Strategien gewinnen seltener, aber größer; Range-Strategien gewinnen öfter, aber kleiner.', 'Backteste mit Kosten und genug Trades, vermeide Overfitting, dann Paper-Trading.', 'Wähle einen einfachen Stil und meistere ihn, statt zwischen vielen zu springen.'])}`,
      q: [
        ['Ein Trendfolge-System hat typischerweise…', ['Sehr hohe Trefferquote und winzige Gewinne', 'Niedrigere Trefferquote, aber größere Gewinne als Verluste', 'Keinen Stop-Loss', 'Null Verlust-Trades'], 1, 'Es nimmt viele kleine Verluste in Kauf, um wenige große Bewegungen zu erwischen.'],
        ['Was ist Overfitting beim Backtesting?', ['Zu wenige Indikatoren verwenden', 'Regeln so lange abstimmen, bis sie perfekt zu vergangenen Daten passen, aber bei neuen Daten versagen', 'Zu wenig traden', 'Ein Demo-Konto nutzen'], 1, 'Die Regeln erfassen vergangenes Rauschen statt eines echten Vorteils.'],
        ['Was ist ein Pflichtbestandteil jeder Ausbruchs- oder Range-Strategie?', ['Ein Stop-Loss', 'Garantierter Gewinn', 'Der Tipp eines Freundes', 'Maximaler Hebel'], 0, 'Jede Strategie kann scheitern; der Stop legt deinen maximalen Verlust fest.']
      ]
    },
    {
      id: 'b6', m: 16, t: 'Risikomanagement: der einzige Vorteil, den du vollständig kontrollierst',
      hook: 'Du kannst den Markt nicht kontrollieren, aber wie viel du verlierst, wenn du falschliegst. Zwei Rechner zeigen dir, warum das Karrieren gewinnt.',
      body: `
<p>Frag Profi-Trader, was Überlebende vom Rest trennt, und die Antwort ist fast immer dieselbe: <b>Risikomanagement</b>. Du kannst eine mittelmäßige Strategie haben und mit gutem Risikomanagement überleben. Eine großartige Strategie mit schlechtem Risikomanagement überlebst du nicht.</p>

<h3>Regel 1: Riskiere pro Trade einen kleinen festen Prozentsatz</h3>
<p>Die gängigste Regel ist, bei einem einzelnen Trade <b>0,5 % bis 1 % des Kontos</b> zu riskieren (höchstens 2 %). Hast du 5.000 € und riskierst 1 %, verlierst du bei einem Trade höchstens 50 €. So bleiben Verlustserien überstehbar.</p>
${B.ex('<p>Sieben Verluste in Folge klingt extrem, passiert aber jedem Trader. Riskierst du jedes Mal 1 %, sinkt das Konto um etwa 7 %. Riskierst du jedes Mal 10 %, sinkt es um etwa 52 %, und du brauchst 109 % Gewinn, nur um wieder aufzuholen. Die Positionsgröße ist, wie du im Spiel bleibst, während du lernst.</p>')}

<h3>Regel 2: Der Stop bestimmt die Größe</h3>
<p>Du entscheidest zuerst, wo der Trade als falsch bewiesen ist (der Stop), und berechnest <i>dann</i>, wie viele Einheiten du kaufst, damit das Erreichen des Stops nur dein gewähltes Risiko kostet. Die Formel:</p>
<p><b>Positionsgröße = (Konto × Risiko-%) ÷ (Einstiegspreis − Stop-Preis)</b></p>
${B.w('possize')}

<h3>Regel 3: Denke in R</h3>
<p>1R entspricht deinem anfänglichen Risiko bei einem Trade. Riskierst du 50 € und gewinnst 100 €, sind das +2R. Das Messen in R macht Ergebnisse über Trades und Kontogrößen vergleichbar. Außerdem kannst du das Chance-Risiko-Verhältnis vor dem Einstieg festlegen: Nimm nur Trades, die bei Erfolg mindestens 1,5 bis 2R bringen.</p>

<h3>Regel 4: Kenne deine Erwartung</h3>
<p>Die <b>Erwartung</b> ist das durchschnittliche Ergebnis pro Trade in R. <b>Erwartung = (Trefferquote × durchschnittlicher Gewinn in R) − (Verlustquote × 1R)</b>. Beispiel: 40 % Trefferquote mit Gewinnen von 2R: 0,4×2 − 0,6×1 = +0,2R pro Trade. Das ist profitabel, obwohl du 60 % der Zeit verlierst. Gewinnst du 60 %, aber deine Gewinne sind 0,5R: 0,6×0,5 − 0,4 = −0,1R. Du gewinnst oft und verlierst trotzdem Geld.</p>
${B.w('expectancy')}

<h3>Regel 5: Respektiere die Drawdown-Mathematik</h3>
<p>Verluste schmerzen mehr, als Gewinne helfen, weil du von einer kleineren Basis aus aufholst:</p>
${B.tbl(['Kontoverlust', 'Nötiger Gewinn, um wieder bei null zu sein'], [['-10 %', '+11 %'], ['-20 %', '+25 %'], ['-30 %', '+43 %'], ['-50 %', '+100 %'], ['-75 %', '+300 %'], ['-90 %', '+900 %']])}

<h3>Regel 6: Tages- und Wochenlimits</h3>
<p>Lege einen maximalen Tagesverlust fest (zum Beispiel 2 bis 3 % des Kontos). Wenn du ihn erreichst, <b>hör für den Tag auf zu traden</b>. Viele zerstörte Konten entstehen an einem einzigen Nachmittag auf Tilt mit Rache-Trades. Mach dasselbe mit einem Wochenlimit.</p>

<h3>Regel 7: Achte auf Korrelation und Gesamtexposure</h3>
<p>Fünf Trades in fünf Tech-Aktien sind in Wahrheit ein großer Trade auf Tech. Begrenze das gesamte offene Risiko (zum Beispiel nicht mehr als 3 bis 5 % über alle Positionen) und vermeide es, identische Wetten zu stapeln.</p>

<h3>Regel 8: Verschiebe einen Stop nie weiter weg</h3>
<p>Du darfst einen Stop nachziehen, um Gewinn zu sichern. Ihn vom Preis wegzuschieben, um dem Trade „Raum zu geben“, verwandelt einen geplanten kleinen Verlust in einen ungeplanten großen. Diese Gewohnheit steckt hinter unzähligen zerstörten Konten.</p>

<h3>Stop-Loss-Platzierung</h3>
<ul>
<li>Setze ihn an eine Marke, die die Idee als falsch beweist (unter dem jüngsten Tief), nicht auf einen zufälligen Prozentsatz.</li>
<li>Gib ihm Luft nach der Volatilität (ATR).</li>
<li>Dann lass den Stop deine Größe bestimmen, nie umgekehrt.</li>
</ul>

${B.warn('<p>„Durchschnittskosten senken“ (mehr kaufen, während eine Verlustposition fällt) ohne Plan ist der Weg, auf dem aus kleinen Verlusten kontovernichtende werden. Stocke Gewinner mit Regeln auf, nicht Verlierer mit Hoffnung.</p>')}

${B.take(['Riskiere 0,5 bis 1 % des Kontos pro Trade; deckle Tages- und Wochenverluste.', 'Setze zuerst den Stop, dann berechne daraus die Positionsgröße.', 'Miss Trades in R und verlange eine positive Erwartung.', '50 % Verlust brauchen 100 % Gewinn: große Drawdowns zu vermeiden ist die Hauptaufgabe.', 'Weite nie einen Stop-Loss und stocke Verlierer nicht ohne Regeln auf.'])}`,
      q: [
        ['Du hast 10.000 € und riskierst 1 % bei einem Trade mit Einstieg 20 € und Stop 19 €. Wie groß ist die Position?', ['50 Aktien', '100 Aktien', '500 Aktien', '10.000 Aktien'], 1, 'Risiko = 100 €; Abstand = 1 €; Größe = 100 Aktien.'],
        ['Ein System gewinnt 40 % der Trades mit durchschnittlich 2R Gewinn und verliert sonst 1R. Erwartung pro Trade?', ['-0,2R', '0R', '+0,2R', '+1R'], 2, '0,4 × 2 − 0,6 × 1 = +0,2R.'],
        ['Nach einem Verlust von 50 % eines Kontos: Welchen Gewinn brauchst du, um bei null zu sein?', ['50 %', '75 %', '100 %', '200 %'], 2, 'Von 50 zurück auf 100 braucht einen Gewinn von 100 %.']
      ]
    },
    {
      id: 'b7', m: 13, t: 'Trading-Psychologie und das Journal',
      hook: 'Strategien scheitern im Kopf lange bevor sie im Chart scheitern. Baue Gewohnheiten auf, die dich stabil halten, und verfolge sie.',
      body: `
<p>Die meisten Trader, die scheitern, wussten, was zu tun war. Sie haben es einfach nicht getan. Sie haben Stops verschoben, aus Langeweile Trades eröffnet, nach Verlusten verdoppelt. <b>Psychologie</b> ist kein weiches Thema: Hier wird das Geld gemacht oder verloren.</p>

<h3>Die üblichen Verdächtigen</h3>
<ul>
<li><b>FOMO</b>: einer Bewegung hinterherlaufen, die schon passiert ist. Du kaufst nahe dem Hoch, weil es „zum Mond fliegt“.</li>
<li><b>Revenge-Trading</b>: nach einem Verlust einen impulsiven, größeren Trade eingehen, um ihn „zurückzuholen“.</li>
<li><b>Übertrading</b>: aus Langeweile oder Aktionsdrang handeln. Mehr Trades bedeuten mehr Kosten und mehr Fehler.</li>
<li><b>Hoffnung</b>: einen Stop-Loss nicht akzeptieren, weil der Trade „zurückkommen könnte“.</li>
<li><b>Gier nach Gewinnen</b>: die Größe nach einer Glückssträhne erhöhen und alles zurückgeben.</li>
<li><b>Angst</b>: Gewinner zu früh abschneiden und nach ein paar Verlusten bei gültigen Setups zögern.</li>
<li><b>Tilt</b>: ein Zustand emotionaler Frustration, in dem du Regeln gar nicht mehr befolgst.</li>
</ul>

<h3>Gewohnheiten, die dich schützen</h3>
<ol>
<li><b>Checkliste vor dem Trade</b>: Sind nicht alle Kästchen abgehakt, kein Trade.</li>
<li><b>Feste Tagesroutine</b>: bereite dich vor Marktöffnung vor; höre zu einer festgelegten Zeit auf.</li>
<li><b>Maximale Trades pro Tag</b> (zum Beispiel 3 bis 5).</li>
<li><b>Die Drei-Strikes-Regel</b>: Geh nach drei Verlusten in Folge mindestens eine Stunde weg.</li>
<li><b>Tagesverlustlimit</b>: Bei Erreichen schließe die Plattform.</li>
<li><b>Schlaf, Essen, Bewegung</b>: Müde Trader treffen schlechtere Entscheidungen, und das ist messbar.</li>
<li><b>Schreib auf, was du fühlst</b>: eine kurze Notiz vor jedem Trade zu deinem Zustand. Muster zeigen sich schnell.</li>
</ol>

<h3>Das Trade-Journal: dein privater Coach</h3>
<p>Ein Journal hält jeden Trade fest: Datum, Markt, Setup, Einstieg, Stop, Ziel, Größe, Ergebnis in R, ob du den Plan befolgt hast, deine Emotion und einen Screenshot. Nach 30 bis 50 Trades kannst du Fragen beantworten, die alles ändern:</p>
<ul>
<li>Welches Setup verdient Geld und welches verliert?</li>
<li>Verlierst du mehr, wenn du deine Regeln brichst?</li>
<li>Welche Emotionen oder Tageszeiten schaden dir?</li>
</ul>
<p>Probiere das Journal unten aus. Es startet mit Beispiel-Trades. Beachte, wie „Plan befolgt“ und Emotion eine klare Geschichte erzählen. Dann leere es und trage deine eigenen Übungs-Trades ein.</p>
${B.w('journal')}

${B.w('checklist', { key: 'b7', title: 'Checkliste vor dem Trade (kopieren und anpassen)', accent: 'trd', items: 'Der Trend der höheren Zeiteinheit stimmt mit meinem Trade überein|Das Setup entspricht genau meinen schriftlichen Regeln|Mein Stop-Loss liegt dort, wo die Idee als falsch bewiesen ist|Meine Positionsgröße riskiert nicht mehr als meinen festen Prozentsatz|Der Gewinn beträgt mindestens das 1,5- bis 2-Fache meines Risikos|Keine wichtigen Nachrichten in den nächsten 30 Minuten|Ich bin ruhig, ausgeruht und versuche nicht, einen Verlust zurückzuholen' })}

${B.key('<p>Dein Job ist nicht, den Markt vorherzusagen. Dein Job ist, deinen Regeln zu folgen, während der Markt tut, was er will. Bewerte, wie gut du ausgeführt hast, nicht nur, ob der Trade Geld brachte.</p>')}

${B.take(['Emotionen wie FOMO, Rache und Hoffnung zerstören mehr Konten als schlechte Strategien.', 'Nutze Checklisten, Trade-Limits, Tagesverlustlimits und Pausen, um Disziplin durchzusetzen.', 'Ein Journal macht Erfahrung zu Daten; werte es wöchentlich aus.', 'Beurteile dich nach Regeltreue, nicht nach einzelnen Ergebnissen.'])}`,
      q: [
        ['Was ist Revenge-Trading?', ['Gegen einen Rivalen handeln', 'Impulsive, übergroße Trades eingehen, um einen Verlust zurückzuholen', 'Mit Gewinn verkaufen', 'Ein Demo-Konto nutzen'], 1, 'Es ist emotionsgetrieben und vervielfacht meist den ursprünglichen Verlust.'],
        ['Was ist der beste Nutzen eines Trading-Journals?', ['Angeben', 'Muster bei Setups, Emotionen und Regelbrüchen in deinen Daten finden', 'Einen Stop-Loss ersetzen', 'Den Markt vorhersagen'], 1, 'Das Journal ist ein Feedback-Werkzeug zur Verbesserung deines Prozesses.'],
        ['Nach Erreichen deines Tagesverlustlimits solltest du…', ['Die Größe erhöhen, um aufzuholen', 'Für den Tag aufhören zu traden', 'Sofort zu einem neuen Markt wechseln', 'Das Limit entfernen'], 1, 'Das Limit existiert, um eine emotionale Abwärtsspirale zu stoppen.']
      ]
    },
    {
      id: 'b8', m: 15, t: 'Paper-Trading-Labor und dein Trading-Plan',
      hook: 'Zeit, 100 Kerzen mit Spielgeld zu traden. Dann schreib den Plan, der entscheidet, ob du je echtes Geld riskierst.',
      body: `
<p>Piloten fliegen am ersten Tag keine Passagiere: Sie nutzen Simulatoren. Trader sollten dasselbe tun. Ein <b>Paper-Trading</b>-Konto lässt dich Ausführung, Regeln und Emotionen ohne finanzielles Risiko üben.</p>

<h3>Spiel: der Übungsmarkt</h3>
<p>Unten ist ein generierter Markt (kein echter), der zwischen Aufwärtstrends, Abwärtstrends und Ranges wechselt. Du hast 10.000 € Spielgeld. Drücke <b>Nächste Kerze</b>, um die Zeit vorzustellen, oder <b>Automatisch abspielen</b>. Geh long oder short, wähle dein Risiko, den Stop-Abstand und das Gewinnziel, und das Labor berechnet die Positionsgröße für dich. Nach 100 Kerzen bekommst du eine Auswertung. Probiere diese Experimente:</p>
<ul>
<li>Schalte den 20-Kerzen-Durchschnitt ein und handle nur in die Richtung, in die er zeigt.</li>
<li>Trade mit und ohne Gewinnziel. Was liefert gleichmäßigere Ergebnisse?</li>
<li>Probiere 2 % Risiko pro Trade, dann 0,5 %. Vergleiche deinen Drawdown.</li>
<li>Klicke auf <b>Neuer Markt</b> und sieh, ob sich dein Ergebnis wiederholt.</li>
</ul>
${B.w('papertrade')}

${B.warn('<p>Simulatoren sind leichter als das echte Leben: keine echte Angst, perfekte Ausführungen, keine Slippage. Betrachte Papier-Ergebnisse als Mindesttest deiner Regeln, nicht als Beweis für künftigen Gewinn.</p>')}

<h3>Wann hast du „bestanden“?</h3>
<ul>
<li>Mindestens <b>100 Trades</b> mit denselben Regeln in deinem Journal.</li>
<li>Positive Erwartung nach Kosten.</li>
<li>Du hast bei mindestens 90 % der Trades deinen Plan befolgt.</li>
<li>Ein maximaler Drawdown, den du mit echtem Geld emotional aushalten könntest.</li>
</ul>

<h3>Der Übergang zu live</h3>
<ol>
<li>Beginne mit <b>10 % der geplanten Größe</b>. Echtes Geld verändert das Verhalten, auch wenn es wenig ist.</li>
<li>Trade weitere 100 Live-Trades in dieser winzigen Größe.</li>
<li>Skaliere langsam (zum Beispiel +25 % nach Erreichen von Leistungs- und Disziplinzielen) und reduziere nach Drawdowns.</li>
<li>Hebe regelmäßig einen Teil der Gewinne ab, damit die Gewinne real werden.</li>
</ol>

<h3>Deine Trading-Plan-Vorlage</h3>
<p>Kopiere das in ein Dokument und fülle es aus. Ein schriftlicher Plan ist deine Verfassung.</p>
${B.tbl(['Abschnitt', 'Was du schreibst'], [
        ['Ziel', 'Was strebst du in 12 Monaten an? (Können, Beständigkeit, Einkommen)'],
        ['Märkte und Zeiten', 'Welche Instrumente? Welche Stunden? Wann tradest du nicht?'],
        ['Strategie', 'Setups mit genauen Regeln für Einstieg, Stop und Ziel'],
        ['Risikoregeln', 'Risiko pro Trade, Tageslimit, Wochenlimit, maximales offenes Risiko'],
        ['Routine', 'Vorbereitung vor dem Markt, Trade-Management, Auswertung am Tagesende'],
        ['Psychologie-Regeln', 'Maximale Trades, Drei-Strikes-Regel, Pausen'],
        ['Auswertungsplan', 'Wöchentliche Journal-Auswertung; monatliche Leistung und Regeländerungen'],
        ['Stopp- / Pause-Regel', 'Bei welchem Drawdown (zum Beispiel -10 %) hörst du auf und wertest aus, bevor du weitermachst?']
      ])}

${B.ex('<p>Sara tradet mit einem Plan von 0,5 % Risiko pro Trade und einer Pause-Regel bei -8 %. Im zweiten Monat erreicht sie -8 %. Sie hört auf, wertet ihr Journal aus und stellt fest, dass 70 % ihrer Verluste daher kamen, dass sie ihre Regel „keine Trades in den ersten 5 Minuten“ gebrochen hat. Sie behebt das und macht mit halber Größe weiter. Eine Pause-Regel hat ein Tief in eine Lektion verwandelt.</p>')}

<h3>Weiter gehen</h3>
<p>Wenn du eine geführte Struktur, ein fertiges Programm und einen Trading-Bot möchtest, der dir hilft, Regeln konsequent anzuwenden, bietet der Ersteller dieses Kurses ein optionales kostenpflichtiges Produkt namens <b>Trading Lab</b> an. Es ist nicht nötig: Dieser kostenlose Pfad deckt das Wesentliche ab. Sieh dir die <a href="#lab">Trading-Lab-Seite</a> für Details an und denk, wie immer, daran, dass kein Kurs und kein Werkzeug das Marktrisiko beseitigen oder Gewinne garantieren kann.</p>

${B.take(['Mach mindestens 100 Paper-Trades mit festen Regeln, bevor du echtes Geld riskierst.', 'Starte live mit etwa 10 % der geplanten Größe und skaliere langsam.', 'Schreibe einen Plan mit Risikoregeln, Routinen und einer Pause-Regel.', 'Simulatoren sind milder als die Realität; nutze sie als Mindesttest.'])}`,
      q: [
        ['Wie viele Trades solltest du im Paper-Trading anstreben, bevor du live gehst?', ['3', '10', '100 oder mehr', 'Es spielt keine Rolle'], 2, 'Eine größere Stichprobe ist nötig, um zu sehen, ob dein Vorteil echt oder nur Glück ist.'],
        ['Was ist ein vernünftiger Start ins Live-Trading?', ['Sofort mit voller Größe', 'Mit etwa 10 % der geplanten Größe', 'Mit geliehenem Geld', 'Mit maximalem Hebel'], 1, 'Echtes Geld verändert Emotionen, also starte klein, um sicher zu lernen.'],
        ['Was bewirkt eine „Pause-Regel“?', ['Zwingt dich, mehr zu traden', 'Lässt dich anhalten und auswerten, wenn du einen festgelegten Drawdown erreichst', 'Entfernt Stop-Losses', 'Garantiert Erholung'], 1, 'Sie schützt das Kapital und erzwingt Reflexion, bevor sich Probleme verschärfen.']
      ]
    }
  ]);
})();
