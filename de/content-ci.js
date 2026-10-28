/* Krypto-Anleger-Pfad: 8 Lektionen */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ci', [
    {
      id: 'c1', m: 12, t: 'Was ist Krypto? Die Blockchain, erklärt mit einem gemeinsamen Notizbuch',
      hook: 'Ohne Fachjargon: wie Tausende Fremde ein ehrliches Register führen und warum das eine neue Art von Geld geschaffen hat.',
      body: `
<p>Stell dir ein Notizbuch vor, das festhält, wem was gehört. Bei einer Bank führt die Bank das Notizbuch, und du vertraust ihr. Stell dir nun vor, Tausende Menschen führen jeweils eine identische Kopie des Notizbuchs. Jeder neue Eintrag („Ana zahlt Ben 1 Coin“) wird allen mitgeteilt, von der Gruppe geprüft und erst dann in alle Kopien eingetragen. Um zu betrügen, müsstest du heimlich die Mehrheit der Notizbücher gleichzeitig umschreiben. Das ist, einfach gesagt, eine <b>Blockchain</b>.</p>

<h3>Kernideen</h3>
<ul>
<li><b>Block</b>: eine Seite des Notizbuchs mit einem Stapel Transaktionen.</li>
<li><b>Kette</b>: Jede Seite enthält einen Fingerabdruck (einen <b>Hash</b>) der vorherigen Seite. Änderst du eine alte Seite, brechen die Fingerabdrücke aller späteren Seiten, wodurch Manipulation offensichtlich wird.</li>
<li><b>Nodes (Knoten)</b>: die Computer, die Kopien halten und die Regeln prüfen.</li>
<li><b>Konsens</b>: das Verfahren, mit dem sich das Netzwerk auf die nächste Seite einigt. Bei <b>Proof of Work</b> (Bitcoin) verbrauchen Miner Energie, um um das Recht zu konkurrieren, einen Block hinzuzufügen. Bei <b>Proof of Stake</b> (Ethereum heute) sperren Validatoren Coins als Ehrlichkeitsgarantie.</li>
<li><b>Dezentralisierung</b>: Keine einzelne Firma und kein Land kontrolliert das Notizbuch.</li>
</ul>

<h3>Probiere den Manipulationstest</h3>
<p>Ändere den Text in Block 1 und sieh, was mit der Kette passiert.</p>
${B.w('chain')}

<h3>Bitcoin: der erste</h3>
<p>2008 veröffentlichte eine anonyme Person oder Gruppe namens Satoshi Nakamoto das Bitcoin-Whitepaper, und das Netzwerk startete im Januar 2009. Bitcoin hat eine feste Höchstmenge von <b>21 Millionen Coins</b>, und die Rate, mit der neue Coins entstehen, halbiert sich etwa alle vier Jahre (das „Halving“; das jüngste war im April 2024). Befürworter nennen es „digitales Gold“ wegen seiner Knappheit und weil es außerhalb der Kontrolle jeder Regierung liegt.</p>

<h3>Ethereum und Smart Contracts</h3>
<p>Ethereum (2015 gestartet) brachte <b>Smart Contracts</b>: kleine Programme, die auf der Blockchain laufen und sich automatisch ausführen, wie ein Verkaufsautomat, der Geld hält und es freigibt, wenn Bedingungen erfüllt sind. Das ermöglichte dezentrale Finanzen (DeFi), Stablecoins, NFTs und Tausende weitere Anwendungen. 2022 stellte es auf Proof of Stake um und senkte seinen Energieverbrauch um über 99 %.</p>

<h3>Warum haben Krypto-Assets Wert?</h3>
<p>Wert kommt aus dem, woran Menschen glauben und was sie nutzen: Knappheit (begrenzte Menge), Nutzen (Zahlungen, Anwendungen), Netzwerkeffekte (mehr Nutzer machen es nützlicher) und Spekulation. Anders als ein Unternehmen erzeugen die meisten Coins keine Gewinne, deshalb wird der Preis weitgehend von Nachfrage und Stimmung getrieben. Darum schwanken sie so stark.</p>

${B.ex('<p>Denke an die ersten Online-Marktplätze: Viele frühe Websites verschwanden, doch einige wurden zu Giganten, und die zugrunde liegende Technologie veränderte die Welt. Bei Krypto kann es ähnlich sein: Die Technologie kann echt sein, während die meisten einzelnen Token scheitern. Bei der Technologie richtigzuliegen macht nicht jeden Coin zu einer guten Anlage.</p>')}

${B.warn('<p>Krypto ist jung, volatil und voller Betrug. Bitcoin selbst ist vom Hoch zum Tief mehrfach um 70 bis 85 % gefallen. Alles in diesem Pfad setzt voraus, dass du nur Geld einsetzt, bei dem du einen drastischen Absturz verkraften kannst.</p>')}

${B.take(['Eine Blockchain ist ein gemeinsames, manipulationssichtbares Register, geführt von vielen Computern.', 'Bitcoin hat eine feste Obergrenze von 21 Millionen Coins; Ethereum fügt programmierbare Smart Contracts hinzu.', 'Wert entsteht aus Knappheit, Nutzung und Glauben, was die Preise sehr volatil macht.', 'Gute Technologie garantiert keine gute Anlage.'])}`,
      q: [
        ['Warum ist es schwer, einen Blockchain-Eintrag zu manipulieren?', ['Er wird geheim gehalten', 'Jeder Block enthält einen Fingerabdruck des vorherigen, und es gibt viele Kopien', 'Banken schützen ihn', 'Er wird regelmäßig gelöscht'], 1, 'Alte Daten zu ändern bricht spätere Fingerabdrücke, und du müsstest die meisten Kopien gleichzeitig ändern.'],
        ['Wie viele Bitcoin können maximal existieren?', ['1 Million', '21 Millionen', '100 Millionen', 'Unbegrenzt'], 1, 'Die Obergrenze des Bitcoin-Angebots liegt bei 21 Millionen.'],
        ['Was macht ein Smart Contract?', ['Ersetzt dein Wallet', 'Führt Code auf einer Blockchain aus, der sich automatisch auslöst, wenn Bedingungen erfüllt sind', 'Garantiert Gewinn', 'Macht Transaktionen rückgängig'], 1, 'Er ist ein Programm auf der Kette, wie ein digitaler Verkaufsautomat.']
      ]
    },
    {
      id: 'c2', m: 13, t: 'Wallets, Schlüssel und wo man kauft',
      hook: 'Wer hält deine Coins wirklich? Das wichtigste Konzept der Krypto-Sicherheit.',
      body: `
<p>In der Krypto-Welt gibt es eine Regel, die du überall hören wirst: <b>„Not your keys, not your coins“</b> (nicht deine Schlüssel, nicht deine Coins). Zu verstehen, warum, schützt dich besser als jede Kursanalyse.</p>

<h3>Schlüssel, Adressen und Seed-Phrasen</h3>
<ul>
<li><b>Öffentliche Adresse</b>: wie deine Kontonummer. Sie kann bedenkenlos geteilt werden, damit man dir Coins schicken kann.</li>
<li><b>Privater Schlüssel</b>: das Geheimnis, das das Bewegen der Coins autorisiert. Wer ihn hat, kontrolliert die Coins, ohne „Passwort vergessen“ und ohne Bank, die man anrufen könnte.</li>
<li><b>Seed-Phrase (Wiederherstellungsphrase)</b>: meist 12 oder 24 Wörter, die alle deine Schlüssel wiederherstellen können. Sie ist der Generalschlüssel zum Wallet.</li>
</ul>
${B.warn('<p>Gib deine Seed-Phrase <b>niemals</b> auf einer Website ein, schick sie niemandem, speichere sie nicht in Fotos, Cloud-Notizen oder E-Mails. Kein echter Support-Mitarbeiter und keine echte Firma wird sie je verlangen.</p>')}

<h3>Zwei Arten, Krypto zu halten</h3>
${B.tbl(['', 'Custodial (Börse hält sie)', 'Self-Custody (du hältst die Schlüssel)'], [
        ['Komfort', 'Einfach: Login mit Passwort', 'Mehr Schritte zu lernen'],
        ['Wer kontrolliert die Coins', 'Das Unternehmen', 'Du'],
        ['Hauptrisiko', 'Börsen-Hacks, Zusammenbruch, Sperren oder Betrug (z. B. Mt. Gox 2014, FTX 2022)', 'Seed-Phrase verlieren, Fehler, Phishing'],
        ['Wiederherstellung', 'Support und Kontowiederherstellung', 'Keine, wenn du die Seed-Phrase verlierst'],
        ['Am besten für', 'Kleine Beträge, Lernen, Trading', 'Größere langfristige Bestände']
      ])}

<h3>Hot Wallets und Cold Wallets</h3>
<ul>
<li><b>Hot Wallet</b>: Software-Wallet mit Internetverbindung (Handy oder Browser). Praktisch für kleine Ausgabenbeträge.</li>
<li><b>Cold Wallet / Hardware-Wallet</b>: ein kleines dediziertes Gerät, das Schlüssel offline hält und Transaktionen signiert. Am besten für langfristige Ersparnisse. Kaufe nur direkt beim Hersteller.</li>
</ul>

<h3>Wo man kauft</h3>
<ul>
<li><b>Zentralisierte Börsen (CEX)</b>: Unternehmen, bei denen du nach Identitätsprüfung (KYC) mit Euro, Karten oder Überweisungen kaufen kannst. Wähle regulierte Plattformen mit langer Erfolgsbilanz und transparenten Gebühren.</li>
<li><b>Dezentrale Börsen (DEX)</b>: Smart-Contract-Marktplätze, auf denen du Token direkt aus deinem Wallet tauschst. Mehr Freiheit und mehr Risiko; Betrugs-Token sind häufig.</li>
<li><b>Regulierte Produkte</b>: In einigen Ländern ermöglichen Bitcoin- und Ethereum-ETFs und -ETPs den Zugang über ein normales Brokerkonto, ohne Schlüssel zu verwalten (US-Spot-Bitcoin-ETFs starteten im Januar 2024).</li>
</ul>

<h3>Verstehe die Kosten</h3>
<ul>
<li><b>Handelsgebühr</b>: ein Prozentsatz pro Trade (oft 0,1 % bis 1,5 %). Einfache „Sofortkauf“-Schaltflächen kosten meist mehr als die erweiterte Orderansicht der Börse.</li>
<li><b>Spread</b>: der Unterschied zwischen Kauf- und Verkaufspreis.</li>
<li><b>Netzwerkgebühren (Gas)</b>: werden an die Blockchain gezahlt, wenn du Coins sendest. Sie schwanken mit der Auslastung.</li>
<li><b>Auszahlungsgebühren</b>: von Börsen für das Abziehen von Coins berechnet.</li>
</ul>

${B.ex('<p>Leo kauft Bitcoin für 1.000 € an einer Börse. Weil die Summe klein ist und er lernt, lässt er sie vorerst dort, schaltet aber die Zwei-Faktor-Authentifizierung (Authenticator-App) und eine Auszahlungs-Whitelist ein. Sechs Monate später erreichen seine Bestände 5.000 €, und er kauft eine Hardware-Wallet auf der Website des Herstellers, sendet zuerst 10 € als Test, prüft, dass sie ankamen, verschiebt dann den Rest und verwahrt die Seed-Phrase auf Papier an zwei getrennten sicheren Orten.</p>')}

${B.w('checklist', { key: 'c2', title: 'Checkliste für den sicheren ersten Kauf', accent: 'ci', items: 'Ich habe eine regulierte Börse mit klarer Gebührentabelle gewählt|Ich habe die Zwei-Faktor-Authentifizierung mit einer Authenticator-App aktiviert (nicht per SMS)|Ich habe ein einzigartiges, starkes Passwort in einem Passwortmanager erstellt|Ich kaufe nur einen Betrag, bei dem ich einen Verlust von 80 % verkraften kann|Ich verstehe den Unterschied zwischen meiner öffentlichen Adresse und meiner Seed-Phrase|Bei größeren Beträgen: Ich plane eine beim Hersteller gekaufte Hardware-Wallet ein|Ich sende vor einer großen Überweisung immer eine kleine Testtransaktion' })}

${B.take(['Wer den privaten Schlüssel hat, kontrolliert die Coins; Börsen halten die Schlüssel für dich.', 'Deine Seed-Phrase ist der Generalschlüssel: niemals teilen oder digitalisieren.', 'Custodial ist einfach, birgt aber Unternehmensrisiko; Self-Custody gibt Kontrolle, legt aber die Verantwortung auf dich.', 'Prüfe alle Kosten: Handelsgebühren, Spreads, Netzwerkgebühren und Auszahlungsgebühren.'])}`,
      q: [
        ['Mit wem solltest du deine Seed-Phrase teilen?', ['Mit dem Kundensupport', 'Mit einem vertrauten Freund', 'Mit niemandem, nie', 'Mit jeder Börse'], 2, 'Jeder mit deiner Seed-Phrase kann alles nehmen. Seriöse Dienste fragen nie danach.'],
        ['Was ist das Hauptrisiko, Coins an einer Börse zu lassen?', ['Coins werden zu Papier', 'Das Unternehmen kann gehackt werden, Auszahlungen sperren oder zusammenbrechen', 'Es gibt keine Gebühren', 'Coins verschwinden jedes Jahr'], 1, 'Du hängst vom Unternehmen ab; Pleiten wie Mt. Gox und FTX kosteten Kunden viel.'],
        ['Warum zuerst eine kleine Testtransaktion senden?', ['Es ist gesetzlich vorgeschrieben', 'Um zu bestätigen, dass die Adresse stimmt, bevor ein großer Betrag gesendet wird', 'Um Cashback zu bekommen', 'Um Gebühren zu senken'], 1, 'Krypto-Überweisungen sind nicht umkehrbar, ein Test senkt also das Risiko teurer Fehler.']
      ]
    },
    {
      id: 'c3', m: 14, t: 'Die Krypto-Landkarte: Bitcoin, Ethereum, Stablecoins, DeFi und mehr',
      hook: 'Es gibt Tausende Token. So sortierst du sie in Gruppen und siehst, wo in jeder das Risiko steckt.',
      body: `
<p>Es gibt viele Tausend Krypto-Assets. Die meisten sind winzig, viele wertlos, und einige sind bedeutend. Eine einfache Karte hilft dir, den Unterschied zwischen einem relativ etablierten Asset und einem Lottoschein zu erkennen.</p>

<h3>Die Hauptkategorien</h3>
<ul>
<li><b>Bitcoin (BTC)</b>: das Original und das größte. Überwiegend Wertspeicher und „digitales Gold“. Einfach, sehr liquide, mit der längsten Erfolgsbilanz.</li>
<li><b>Smart-Contract-Plattformen (Layer 1)</b>: Blockchains, auf denen Anwendungen laufen. Ethereum ist die größte. Andere konkurrieren über Geschwindigkeit oder Kosten. Ihr Wert hängt davon ab, wie viel echte Aktivität sie anziehen.</li>
<li><b>Layer 2</b>: auf Ethereum aufgebaute Netzwerke, die Transaktionen günstiger und schneller machen.</li>
<li><b>Stablecoins</b>: Token, die einen stabilen Wert halten sollen, meist 1 US-Dollar (oder 1 Euro). Sie dienen dem Handel und Zahlungen. Ihre Sicherheit hängt davon ab, was sie deckt und wer sie verwaltet. Terras algorithmischer Stablecoin brach 2022 zusammen, und selbst der große USDC verlor während einer Bankenpanik im März 2023 kurz seine Dollar-Bindung.</li>
<li><b>DeFi-Token (dezentrale Finanzen)</b>: Kredit-, Handels- und Versicherungsprotokolle, die per Code laufen. Erträge können hoch aussehen, aber Smart-Contract-Fehler, Hacks und „Impermanent Loss“ in Liquiditätspools sind reale Risiken.</li>
<li><b>NFTs</b>: einzigartige digitale Objekte. Meist spekulative Sammlerstücke, und die Nachfrage war sehr ungleichmäßig.</li>
<li><b>Memecoins</b>: Token rund um Witze und Communities (wie Hunde und Frösche). Reine Spekulation und die betrugsreichste Ecke.</li>
<li><b>Themen-Token</b> (KI, Gaming, Real-World-Assets): Erzählungen, die kommen und gehen.</li>
</ul>

<h3>Die Risikopyramide</h3>
<p>Ein nützliches Bild: eine breite Basis relativ etablierter Assets und eine schmale, sehr riskante Spitze.</p>
<div class="pyr" role="img" aria-label="Krypto-Risikopyramide von geringerem Risiko unten bis extremem Risiko oben">
  <div style="background:#C9C5EE;width:30%;min-width:170px">Memecoins, neue Token: extremes Risiko</div>
  <div style="background:#A58FFF;width:50%;min-width:230px">Small Caps, NFTs, Themen-Token: sehr hoch</div>
  <div style="background:#FFC21A;width:72%;min-width:260px">Große DeFi-, Layer-1- und Layer-2-Plattformen: hoch</div>
  <div style="background:#14B37D;width:94%;min-width:280px">Bitcoin und Ethereum: immer noch sehr volatil, aber am etabliertesten</div>
</div>
<p class="note">Auch „etablierte“ Krypto kann 70 % oder mehr verlieren. Die Pyramide zeigt relatives Risiko, nicht Sicherheit.</p>

<h3>Marktkapitalisierungs-Stufen</h3>
<p>Die <b>Marktkapitalisierung</b> ist Preis mal umlaufende Menge. Als grobe Orientierung: Large Caps liegen über etwa 10 Milliarden €, Mid Caps zwischen etwa 1 und 10 Milliarden €, Small Caps unter 1 Milliarde €. Kleiner bedeutet mehr Aufwärtspotenzial, viel mehr Volatilität, dünnere Liquidität und eine höhere Ausfallwahrscheinlichkeit.</p>

<h3>Staking und „Rendite“</h3>
<p><b>Staking</b> heißt, Proof-of-Stake-Coins zu sperren, um das Netzwerk gegen Belohnungen abzusichern. Das ist kein kostenloses Geld: Die Belohnung wird im Coin selbst gezahlt (das Preisrisiko bleibt also), deine Coins können eine Zeit lang gesperrt sein, und manche Plattformen fügen Smart-Contract- oder Gegenparteirisiko hinzu. Verspricht ein Produkt hohe, feste, „risikofreie“ Rendite, denk daran, dass gescheiterte Kreditgeber 2022 genau das anboten.</p>

${B.ex('<p>Mia hat 1.000 € für Krypto. Sie teilt auf: 700 € in Bitcoin und Ethereum (ihr „Kern“), 250 € verteilt auf einige größere etablierte Projekte, die sie recherchiert hat, und 50 € als „Spaßgeld“-Wette auf einen kleinen Coin. Geht diese letzte Wette auf null, verliert sie 5 % ihres Krypto-Topfs, und nichts bricht zusammen.</p>')}

${B.warn('<p>Verwechsle „Anzahl der Token“ nicht mit „Diversifikation“. Die meisten Token bewegen sich mit Bitcoin, sodass der Besitz von 30 Altcoins sich oft wie eine große Wette mit zusätzlichem Risiko anfühlt.</p>')}

${B.take(['Sortiere Krypto in Kategorien: Bitcoin, Plattformen, Stablecoins, DeFi, NFTs, Memecoins.', 'Das Risiko steigt stark beim Übergang von großen, etablierten Assets zu kleinen, neuen Token.', 'Stablecoins können ihre Bindung verlieren; Staking-Belohnungen sind nicht risikofrei.', 'Viele Token sind stark korreliert und bieten daher weniger Diversifikation, als es scheint.'])}`,
      q: [
        ['Wofür ist ein Stablecoin gedacht?', ['Sich jährlich im Wert verdoppeln', 'Einen stabilen Wert wie 1 Dollar halten', 'Alle Banken ersetzen', 'Deine Identität verbergen'], 1, 'Sie streben einen stabilen Preis an, aber die Bindung kann scheitern.'],
        ['Welche Kategorie birgt generell das höchste Totalverlustrisiko?', ['Bitcoin', 'Große regulierte ETFs', 'Neu gestartete Memecoins', 'Sparkonten'], 2, 'Memecoins sind spekulativ, oft manipuliert und gehen häufig auf null.'],
        ['Marktkapitalisierung ist gleich…', ['Preis × umlaufende Menge', 'Preis × Gesamtzahl der Trader', 'Nur Tagesvolumen', 'Transaktionsgebühren'], 0, 'Es ist der aktuelle Preis mal die umlaufenden Coins.']
      ]
    },
    {
      id: 'c4', m: 13, t: 'Ein Projekt bewerten: Tokenomics und Fundamentaldaten',
      hook: 'Eine Fragenliste, die seriöse Projekte von Hype trennt, einschließlich der Zahl, die die meisten Anfänger täuscht.',
      body: `
<p>Anders als ein Unternehmen hat ein Token meist keinen Ergebnisbericht. Trotzdem kannst du strukturierte Fragen stellen. Das Ziel ist nicht, einen garantierten Gewinner zu finden, sondern offensichtliche Verlierer zu meiden und zu verstehen, was du kaufst.</p>

<h3>Die Checkliste mit 8 Fragen</h3>
<ol>
<li><b>Welches Problem löst es, und für wen?</b> Kannst du es in zwei Sätzen erklären?</li>
<li><b>Nutzen es echte Menschen?</b> Schau auf aktive Nutzer, Transaktionszahlen, gezahlte Gebühren und den gesperrten Gesamtwert (TVL) bei DeFi, aus unabhängigen Quellen.</li>
<li><b>Erzeugt es Einnahmen?</b> Von Nutzern gezahlte Gebühren sind ein gesundes Zeichen. „Einnahmen“ aus dem Drucken neuer Token sind es nicht.</li>
<li><b>Wer steht dahinter?</b> Öffentliches, rechenschaftspflichtiges Team mit Erfolgsbilanz gegenüber anonymen Gründern und kopiertem Code.</li>
<li><b>Wie sieht die Tokenomics aus?</b> Maximale Menge, wie viele Token zirkulieren, wie viele im Lauf der Zeit freigegeben werden und wem sie gehören.</li>
<li><b>Ist der Code geprüft (Audit)?</b> Sicherheitsaudits helfen (sind aber keine Garantie). Prüfe Hacks in der Geschichte des Projekts.</li>
<li><b>Gibt es echte Liquidität?</b> Kannst du verkaufen, ohne den Preis einbrechen zu lassen? Ist es an seriösen Handelsplätzen gelistet?</li>
<li><b>Was kann schiefgehen?</b> Regulierung, Konkurrenz, technisches Versagen, Verkäufe durch Insider.</li>
</ol>

<h3>Tokenomics 101</h3>
<ul>
<li><b>Umlaufende Menge</b>: jetzt handelbare Token.</li>
<li><b>Gesamt- / Maximalmenge</b>: alle Token, die je existieren werden (oder jetzt existieren).</li>
<li><b>Emission / Inflation</b>: wie schnell neue Token entstehen. Hohe Inflation verwässert die Halter, es sei denn, die Nachfrage wächst schneller.</li>
<li><b>Verteilung</b>: Wie viel ging an Gründer, frühe Investoren und die Community? Halten Insider einen riesigen Anteil, ist ein Abverkauf möglich.</li>
<li><b>Vesting und Freischaltungen</b>: gesperrte Token, die nach Zeitplan freigegeben werden. Eine große Freischaltung (manchmal „Cliff“ genannt) kann die Preise drücken, wenn die Empfänger verkaufen.</li>
<li><b>Nutzen</b>: Wofür wird der Token gebraucht (Gebühren, Staking, Governance)? Ein Token, den niemand braucht, hat nur spekulativen Wert.</li>
</ul>

<h3>Die Zahl, die Anfänger täuscht: Marktkapitalisierung vs. FDV</h3>
<p>Ein Token kann bei niedriger Marktkapitalisierung „billig“ aussehen, während der Großteil der Menge noch gesperrt ist. Die <b>voll verwässerte Bewertung (FDV)</b> zeigt, wie hoch der Wert wäre, wenn alle Token existierten. Eine große Lücke bedeutet viel künftigen Verkaufsdruck. Probiere den Rechner:</p>
${B.w('supply')}

<h3>Warnsignale</h3>
<ul>
<li>Versprechen garantierter Renditen oder „risikofreier Rendite“.</li>
<li>Anonymes Team, kein funktionierendes Produkt, kopiertes Whitepaper.</li>
<li>Wenige Wallets halten den Großteil der Menge.</li>
<li>Die Liquidität ist nicht gesperrt, sodass Entwickler sie abziehen könnten („Rug Pull“).</li>
<li>Druckmittel, Countdown-Timer und „Kauf jetzt, bevor es zu spät ist“.</li>
<li>Belohnungen, die hauptsächlich durch das Anwerben neuer Investoren bezahlt werden (eine Ponzi-Struktur).</li>
<li>Bezahlte Werbung von Influencern ohne Offenlegung.</li>
</ul>

${B.tip('<p>Eine gute Gewohnheit: Lies die eigene Dokumentation des Projekts, prüfe eine unabhängige Datenquelle zur Nutzung und suche nach „[Projektname] Betrug“, „Hack“ und „Kritik“. Lies das Negativszenario, bevor du kaufst.</p>')}

${B.ex('<p>Zwei Token handeln jeweils bei 1 €. Token A hat 800 Mio. von 1.000 Mio. Token bereits im Umlauf und einen klaren Nutzen, also liegt die Marktkapitalisierung bei 800 Mio. € und die FDV bei 1 Mrd. €. Token B hat 100 Mio. von 1.000 Mio. im Umlauf: Marktkapitalisierung 100 Mio. €, FDV 1 Mrd. €. Token B sieht 8-mal „kleiner“ aus, aber 90 % seiner Menge sind noch gesperrt. Wenn diese Token freigeschaltet werden, müssen die Halter das Neunfache der bestehenden Menge aufnehmen. Gleicher Preis, sehr unterschiedliches Risiko.</p>')}

${B.take(['Frag, was das Projekt tut, wer es nutzt und wie es echte Einnahmen erzielt.', 'Studiere Menge, Verteilung, Vesting und Freischaltungspläne.', 'Vergleiche die Marktkapitalisierung mit der voll verwässerten Bewertung, um künftige Verwässerung zu sehen.', 'Warnsignale: garantierte Renditen, anonyme Teams, konzentrierte Menge, nicht gesperrte Liquidität.'])}`,
      q: [
        ['Ein Token hat eine kleine Marktkapitalisierung, aber eine riesige FDV. Das deutet auf…', ['Wenig künftige Verwässerung', 'Viele noch freizugebende Token, die Verkaufsdruck hinzufügen', 'Garantiertes Wachstum', 'Der Token ist ein Stablecoin'], 1, 'Gesperrte Menge wird irgendwann in Umlauf kommen und die Halter verwässern.'],
        ['Was ist ein Warnsignal?', ['Öffentliches Team und geprüfter Code', 'Versprochene garantierte Tagesrenditen', 'Klare Dokumentation', 'Unabhängige Nutzungsdaten'], 1, 'Keine seriöse Anlage kann Renditen garantieren.'],
        ['Was ist ein „Rug Pull“?', ['Ein Kursanstieg', 'Entwickler ziehen Liquidität ab oder lassen ein Projekt fallen, nachdem sie das Geld der Investoren genommen haben', 'Ein Wallet-Update', 'Eine Staking-Belohnung'], 1, 'Es ist ein Exit-Betrug, der die Halter mit wertlosen Token zurücklässt.']
      ]
    },
    {
      id: 'c5', m: 14, t: 'Ein Krypto-Portfolio aufbauen: Größe, DCA und Zyklen',
      hook: 'Wie viel, wie oft und was zu erwarten ist. Die Positionsgröße ist die Entscheidung, die am meisten zählt.',
      body: `
<p>Die meisten Krypto-Verluste entstehen nicht dadurch, dass man den falschen Coin wählt. Sie entstehen, weil man zu viel auf irgendeinen Coin setzt. Die erste Frage lautet nicht „Was kaufe ich?“, sondern „<b>Wie viel meines Vermögens kann ich mir leisten, hier einzusetzen?</b>“</p>

<h3>Lege die Größe mit dem „80-%-Absturz-Test“ fest</h3>
<p>Bitcoin ist vom Hoch zum Tief mehrfach um 70 bis 85 % gefallen, und kleinere Assets fallen oft mehr. Frag dich: Wenn dieser ganze Topf 80 % verlöre und zwei Jahre dort bliebe, würden mein Lebensplan und mein Schlaf das überstehen? Nutze den Rechner.</p>
${B.w('cryptosize')}
<p>Viele vorsichtige Berater empfehlen kleine Anteile, oft im Bereich von 1 bis 5 % des anlagefähigen Vermögens für Menschen, die etwas Exposure möchten. Das ist weder eine Regel noch ein Rat, nur ein Beispiel dafür, wie Profis denken: Dimensioniere so, dass ein Totalverlust ein Ärgernis wäre, keine Katastrophe.</p>

<h3>Eine einfache Struktur: Kern und Satelliten</h3>
<ul>
<li><b>Kern (zum Beispiel 60 bis 80 % deines Krypto-Topfs)</b>: Bitcoin und Ethereum, die etabliertesten.</li>
<li><b>Satelliten (zum Beispiel 20 bis 40 %)</b>: eine Handvoll recherchierter größerer Projekte.</li>
<li><b>Lottoscheine (optional, 0 bis 5 % des Topfs)</b>: winzige, riskante Wetten, die du komplett zu verlieren bereit bist.</li>
</ul>

<h3>DCA: dein Freund in einem volatilen Markt</h3>
<p>Weil die Preise so stark schwanken, nimmt dir der wöchentliche oder monatliche Kauf eines festen Betrags (DCA) den Druck, den Markt zu timen. Du kaufst mehr, wenn die Preise niedrig sind, und weniger, wenn sie hoch sind. Es hilft auch bei den Emotionen. Du kannst das DCA-Spiel aus dem Anleger-Pfad noch einmal ansehen.</p>

<h3>Zyklen: Muster, keine Versprechen</h3>
<p>Bitcoin zeigte historisch große Boom-und-Bust-Zyklen von etwa vier Jahren, oft mit dem Halving verbunden, wobei früheren Hochs Rückgänge von 70 bis 85 % folgten. Viele Anleger bauen ihr Timing darauf auf, doch vergangene Zyklen sind eine kleine Stichprobe, und Märkte lernen. Wette deinen Plan nicht darauf, dass sich ein Muster wiederholt.</p>

<h3>Nimm Gewinne mit Absicht mit</h3>
<p>Euphorie lässt Menschen das Verkaufen vergessen. Entscheide vorher: zum Beispiel „Wächst mein Krypto-Topf auf über 10 % meines Vermögens, rebalanciere ich zurück auf 5 %“ oder „Ich verkaufe ein Viertel jeder Position, die sich verdreifacht“. Schriftliche Regeln schlagen Gier.</p>

<h3>Rebalancing und Steuerbewusstsein</h3>
<p>Verkaufen kann Steuern auslösen. Rebalanciere, indem du neue Einzahlungen dorthin lenkst, wo sie gebraucht werden, und führe Aufzeichnungen über jeden Kauf und Verkauf (siehe die Steuerlektion).</p>

${B.ex('<p>Tom steckt 3 % seiner 30.000 € Ersparnisse in Krypto (900 €) und kauft per DCA monatlich für 75 €. Als der Markt um 70 % fällt, verliert sein Topf etwa 630 €, ein Schlag von 2,1 % seines Gesamtvermögens. Er kauft weiter günstig. Als der Markt später auf das Fünffache steigt, kürzt er zurück auf sein Ziel. Er wurde weder reich noch ruiniert und blieb im Spiel.</p>')}

${B.warn('<p>Investiere nie Geld, das du für Miete, Studiengebühren oder Notfälle brauchst. Leih dir nie Geld, um Krypto zu kaufen. Steck nie deine gesamten Ersparnisse in einen einzigen Coin, weil er „nicht scheitern kann“.</p>')}

${B.take(['Die Größe kommt zuerst: Nutze den 80-%-Absturz-Test, um zu entscheiden, wie viel sicher ist.', 'Kern und Satelliten: überwiegend große Assets, ein kleiner Anteil für Spekulation.', 'DCA senkt das Timing-Risiko und den emotionalen Stress.', 'Zyklen sind Muster, keine Garantien. Habe schriftliche Regeln für Gewinnmitnahmen und Rebalancing.'])}`,
      q: [
        ['Was ist der Zweck des „80-%-Absturz-Tests“?', ['Den künftigen Preis vorherzusagen', 'Sicherzustellen, dass deine Positionsgröße verkraftbar ist, wenn die Preise hart einbrechen', 'Ein Wallet auszuwählen', 'Gebühren zu vermeiden'], 1, 'Könntest du einen Rückgang des Topfs um 80 % nicht verkraften, ist er zu groß.'],
        ['In einem Kern-Satelliten-Krypto-Portfolio ist der Kern üblicherweise…', ['Memecoins', 'Bitcoin und Ethereum', 'Die neuesten Launches', 'Gehebelte Token'], 1, 'Die etabliertesten Assets bilden die Basis; riskantere Ideen sind begrenzte Satelliten.'],
        ['Warum schriftliche Regeln für Gewinnmitnahmen und Rebalancing im Voraus?', ['Damit Gier und Euphorie nicht die Entscheidungen treffen', 'Weil Börsen es verlangen', 'Um Gebühren zu erhöhen', 'Um andere zu beeindrucken'], 0, 'Vorab festgelegte Regeln helfen dir, ruhig zu handeln, wenn die Preise steigen.']
      ]
    },
    {
      id: 'c6', m: 14, t: 'Sicherheit und Betrug: wie du nicht alles verlierst',
      hook: 'Bei Krypto gibt es keine Bank, die man anrufen kann. Lerne die Betrugsmaschen, die Menschen Millionen gekostet haben, und spiel das Spiel Sicher oder Betrug.',
      body: `
<p>Weil Krypto-Transaktionen nicht rückgängig gemacht werden können, lieben Betrüger sie. Die gute Nachricht: Fast jeder Betrug beruht auf denselben wenigen Tricks, und wenn du sie erkennst, verlieren sie ihre Macht.</p>

<h3>Die häufigsten Betrugsmaschen</h3>
<ul>
<li><b>Phishing</b>: gefälschte E-Mails, Nachrichten oder Websites, die eine echte Börse oder ein Wallet nachahmen, um deine Zugangsdaten oder Seed-Phrase zu stehlen. Tippe die Adresse immer selbst ein oder nutze ein gespeichertes Lesezeichen.</li>
<li><b>Falscher Support</b>: Jemand schreibt dir „von der Börse“ und bietet Hilfe an. Echter Support schreibt dich nicht zuerst an und fragt weder nach Passwörtern noch nach Wiederherstellungsphrasen.</li>
<li><b>Giveaway-Betrug</b>: „Sende 1 ETH und erhalte 2 zurück“, oft mit berühmten Personen oder gehackten Konten.</li>
<li><b>Rug Pulls und Pump-and-Dumps</b>: Entwickler oder Gruppen bewerben einen Token, verkaufen dann ihre Bestände und verschwinden.</li>
<li><b>Romance- / „Pig-Butchering“-Betrug</b>: Ein freundlicher Fremder baut über Wochen Vertrauen auf und führt dich zu einer gefälschten Anlageplattform, die falsche Gewinne anzeigt, bis du eine Auszahlung versuchst.</li>
<li><b>Wallet Drainer</b>: bösartige Seiten, die dich dazu bringen, eine Transaktion zu signieren, die ihnen die Erlaubnis gibt, dein Wallet zu leeren. Sei vorsichtig mit „Connect Wallet“-Schaltflächen und unbegrenzten Freigaben.</li>
<li><b>Address Poisoning</b>: Betrüger senden winzige Transaktionen von einer Adresse, die einer von dir genutzten ähnelt, in der Hoffnung, dass du sie versehentlich aus deinem Verlauf kopierst.</li>
<li><b>Gefälschte Apps und Erweiterungen</b>: gefälschte Wallets in App- oder Browser-Stores.</li>
<li><b>Ponzi-Systeme</b>: Versprechen fester hoher Renditen, bezahlt mit Geld neuer Investoren, bis das System zusammenbricht.</li>
<li><b>Recovery-Betrug</b>: Nach einem Verlust versprechen „Wiederherstellungsexperten“, deine Coins gegen Vorabgebühr zurückzuholen. Auch sie sind Betrüger.</li>
</ul>

<h3>Dein Sicherheits-Setup</h3>
${B.w('checklist', { key: 'c6', title: 'Krypto-Sicherheits-Checkliste', accent: 'ci', items: 'Einzigartige, lange Passwörter für jede Börse und jeden Wallet-Dienst, in einem Passwortmanager|Zwei-Faktor-Authentifizierung per Authenticator-App (nicht SMS) bei allen Konten|Whitelist für Auszahlungsadressen und Anti-Phishing-Codes aktiviert|Seed-Phrase auf Papier geschrieben und an zwei getrennten, sicheren Orten verwahrt, nie fotografiert|Direkt beim Hersteller gekaufte Hardware-Wallet für größere Bestände|Börsen-Websites als Lesezeichen gespeichert, nie auf Links in E-Mails oder Werbung geklickt|Separate E-Mail-Adresse für Krypto-Konten|Kleine Testtransaktion vor jeder großen Überweisung|Regelmäßige Prüfung der Token-Freigaben und Widerruf ungenutzter' })}

<h3>Goldene Regeln</h3>
<ol>
<li>Klingt es zu gut, um wahr zu sein, ist es das auch.</li>
<li>Dringlichkeit ist eine Waffe. Betrüger setzen Fristen, damit du nicht nachdenken kannst.</li>
<li>Niemand verschenkt Geld, und niemand braucht deine Seed-Phrase.</li>
<li>Verifiziere über einen zweiten Kanal. Ruf die Firma unter einer Nummer von ihrer offiziellen Website an.</li>
<li>Halte den Großteil der Mittel in Cold Storage und einen kleinen „Ausgaben“-Betrag in einem Hot Wallet.</li>
</ol>

<h3>Spiel: Sicher oder Betrug?</h3>
<p>Neun reale Situationen. Entscheide, ob der Schritt sicher oder riskant ist, und lies, warum.</p>
${B.w('scam')}

<h3>Wenn du betrogen wurdest</h3>
<p>Handle schnell: Beende den Kontakt, verschiebe verbliebene Mittel in ein neues Wallet, ändere Passwörter, melde es der betroffenen Börse, der örtlichen Polizei und den Betrugsmeldestellen. Eine Wiederherstellung ist unwahrscheinlich, und genau deshalb zählt Vorbeugung.</p>

${B.take(['Krypto-Überweisungen sind unumkehrbar, also ist Vorbeugung alles.', 'Teile nie deine Seed-Phrase; echter Support fragt nie danach.', 'Nutze App-basierte 2FA, einen Passwortmanager und Cold Storage für größere Beträge.', 'Druck, garantierte Renditen und unaufgeforderte Direktnachrichten sind klassische Betrugssignale.'])}`,
      q: [
        ['Ein „Support-Mitarbeiter“ schreibt dich zuerst an und fragt nach deiner Wiederherstellungsphrase. Das ist…', ['Normales Vorgehen', 'Ein Betrug', 'Aus Sicherheitsgründen nötig', 'Ein Belohnungsprogramm'], 1, 'Echter Support tut das nie.'],
        ['Was ist ein guter Weg, eine neue Krypto-Website aufzurufen?', ['Auf irgendeinen Link in einer Anzeige klicken', 'Die Adresse selbst tippen oder ein vertrauenswürdiges Lesezeichen nutzen', 'Eine ungeprüfte Browser-Erweiterung nutzen', 'Das Wallet-Passwort zur Verifizierung teilen'], 1, 'Gefälschte Seiten kopieren echte; ein Lesezeichen vermeidet Doppelgänger.'],
        ['Ein Fremder, den du online kennengelernt hast, führt dich zu einer Plattform mit großen Gewinnen, verlangt aber weitere Einzahlungen für Auszahlungen. Das ist typisch für…', ['Eine normale Börse', 'Einen Pig-Butchering-Betrug', 'Eine Steuerregel', 'Eine Staking-Belohnung'], 1, 'Seriöse Plattformen verlangen keine zusätzlichen Einzahlungen, um dein eigenes Geld freizugeben.']
      ]
    },
    {
      id: 'c7', m: 10, t: 'Steuern, Regulierung und Aufzeichnungen führen',
      hook: 'Krypto-Gewinne sind meist steuerpflichtig. Eine einfache Aufzeichnungsgewohnheit erspart Kopfschmerzen und Geld.',
      body: `
<p>Diese Lektion vermittelt allgemeine Prinzipien. <b>Steuer- und Rechtsregeln unterscheiden sich je nach Land und ändern sich oft</b>, also prüfe immer deine örtliche Steuerbehörde und sprich, wenn die Beträge zählen, mit einem qualifizierten Steuerberater.</p>

<h3>Was oft steuerpflichtig ist</h3>
<p>In vielen Ländern behandeln Behörden Krypto-Assets als Eigentum oder Kapitalanlagen. Ereignisse, die häufig eine Steuerpflicht auslösen, sind:</p>
<ul>
<li><b>Krypto gegen Fiat-Geld verkaufen</b> (Euro, Dollar) mit Gewinn.</li>
<li><b>Eine Krypto gegen eine andere tauschen</b>. An vielen Orten zählt das als Verkauf der ersten und Kauf der zweiten.</li>
<li><b>Waren oder Dienstleistungen</b> mit Krypto bezahlen.</li>
<li><b>Krypto als Einkommen verdienen</b>: Arbeit, Mining, Staking-Belohnungen oder Airdrops, oft zum Zeitpunkt des Erhalts als Einkommen besteuert.</li>
</ul>
<p>Oft <b>nicht</b> steuerpflichtig (aber lokal prüfen): Krypto mit Fiat kaufen, Krypto zwischen eigenen Wallets verschieben und einfach halten.</p>

<h3>Wie Gewinne berechnet werden</h3>
<p>Gewinn = Verkaufspreis − Kaufkosten (deine „Anschaffungskosten“), abzüglich zulässiger Gebühren. Manche Länder besteuern Gewinne pauschal, andere progressiv, und einige gewähren Vorteile für Assets, die länger als ein Jahr gehalten wurden. Verluste können Gewinne ausgleichen.</p>
${B.ex('<p>Du kaufst 0,1 BTC für 2.000 € und verkaufst später für 3.500 €. Gewinn = 1.500 €. Besteuert deine lokale Regel Gewinne zum Beispiel mit 25 % (nur zur Veranschaulichung), betrüge die Steuer 375 €. Tauschst du dieses BTC stattdessen gegen einen anderen Coin im Wert von 3.500 €, würden viele Steuersysteme das trotzdem als Verkauf behandeln und denselben Gewinn berechnen, auch wenn du nie Euro berührt hast.</p>')}

<h3>Führe von Anfang an gute Aufzeichnungen</h3>
<ul>
<li>Datum, Art und Betrag jedes Kaufs, Verkaufs, Tauschs, jeder Überweisung und Belohnung.</li>
<li>Der Euro-Wert (oder Wert in Landeswährung) zum Zeitpunkt jedes Ereignisses.</li>
<li>Gezahlte Gebühren.</li>
<li>Verwendete Wallet-Adressen und Börsenkonten.</li>
<li>Exportiere jedes Jahr von jeder Börse den Transaktionsverlauf (CSV-Dateien), da Plattformen schließen oder Daten verlieren können.</li>
</ul>
<p>Spezialisierte Krypto-Steuersoftware kann deine Börsen und Wallets importieren und Gewinne berechnen. Viele Steuerberater wissen, wie man sie nutzt.</p>

<h3>Regulierung: eine sich wandelnde Landschaft</h3>
<ul>
<li>In der Europäischen Union legt die <b>MiCA</b>-Verordnung Regeln für Emittenten von Krypto-Assets und Dienstleister fest (seit Ende 2024 voll anwendbar), darunter Lizenzierung, Offenlegung und Stablecoin-Regeln. EU-Steuermeldepflichten für Krypto-Plattformen (DAC8) beginnen ab 2026, sodass Behörden zunehmend Daten über deine Transaktionen erhalten.</li>
<li>Andere Regionen bauen eigene Rahmen auf. Regeln können bestimmte Produkte einschränken, etwa Derivate für Privatkunden.</li>
</ul>
<p>Praktische Bedeutung: Bevorzuge <b>lizenzierte, regulierte Plattformen</b>, rechne mit Identitätsprüfungen und gehe davon aus, dass Steuerbehörden mehr sehen als früher.</p>

${B.warn('<p>Hüte dich vor „steuerfreien“ Krypto-Modellen und vor jedem, der behauptet, du müsstest nichts melden. Steuerhinterziehung ist illegal und zunehmend nachweisbar.</p>')}

${B.take(['Verkaufen, Tauschen, Ausgeben und Verdienen von Krypto löst je nach Land oft Steuern aus.', 'Verfolge Anschaffungskosten, Daten, Werte und Gebühren jeder Transaktion.', 'Exportiere deine Aufzeichnungen regelmäßig; erwäge Krypto-Steuersoftware.', 'Nutze regulierte Plattformen und erwarte mehr Transparenz von den Behörden.'])}`,
      q: [
        ['In vielen Ländern wird das Tauschen einer Krypto gegen eine andere behandelt als…', ['Nichts, nie steuerpflichtig', 'Ein Verkauf des ersten Assets (steuerpflichtiger Vorgang)', 'Ein Geschenk', 'Ein Darlehen'], 1, 'Prüfe die lokalen Regeln, aber ein Tausch gilt oft als Veräußerung.'],
        ['Was brauchst du, um einen Gewinn korrekt zu berechnen?', ['Nur den heutigen Preis', 'Kaufkosten, Verkaufserlös und Gebühren mit Daten', 'Dein Alter', 'Die Farbe deines Wallets'], 1, 'Anschaffungskosten und Erlös bestimmen Gewinn oder Verlust.'],
        ['Warum regelmäßig den Transaktionsverlauf exportieren?', ['Börsen können schließen oder Daten verlieren, und du brauchst Aufzeichnungen für die Steuer', 'Es erhöht die Rendite', 'Es ist für Staking nötig', 'Es entfernt Gebühren'], 0, 'Deine eigenen Aufzeichnungen schützen dich, falls eine Plattform verschwindet.']
      ]
    },
    {
      id: 'c8', m: 10, t: 'Dein langfristiger Krypto-Plan und die Ausstiegsstrategie',
      hook: 'Mach aus diesem Pfad einen Ein-Seiten-Plan: warum du hältst, wie viel, wie du sicher bleibst und wann du Gewinne mitnimmst.',
      body: `
<p>Ein schriftlicher Plan ist der Unterschied zwischen Investieren und Zocken. Nutze diese Lektion, um deinen zusammenzustellen.</p>

<h3>Der Ein-Seiten-Krypto-Plan</h3>
${B.tbl(['Abschnitt', 'Deine Antwort'], [
        ['Warum ich Krypto halte', 'Meine These in zwei Sätzen (zum Beispiel: „langfristige Beteiligung an einer neuen Anlageklasse, kleiner Anteil“)'],
        ['Wie viel', 'Maximaler Prozentsatz meines anlagefähigen Vermögens (zum Beispiel 3 %) und der Euro-Betrag'],
        ['Was ich halte', 'Kern-Assets (zum Beispiel BTC / ETH) und das Maximum für Satelliten und Spekulation'],
        ['Wie ich kaufe', 'DCA-Plan: Betrag, Tag des Monats, Plattform'],
        ['Wo ich verwahre', 'Börse für kleine Beträge; Hardware-Wallet für den Rest; Backup-Orte für die Seed-Phrase'],
        ['Wann ich rebalanciere oder Gewinne mitnehme', 'Regeln, etwa: „Übersteigt Krypto 6 % meines Vermögens, kürze ich auf 3 %“'],
        ['Was meine Meinung ändern würde', 'Ereignisse, die meine These entkräften würden (zum Beispiel ein gravierender Protokollausfall oder eine regulatorische Änderung)'],
        ['Steuern und Aufzeichnungen', 'Wo ich meinen Transaktionsverlauf aufbewahre und wann ich ihn prüfe'],
        ['In einem Crash werde ich', 'Den Plan halten, Kurse nicht täglich prüfen, nicht leihen, nicht in Panik verkaufen']
      ])}

<h3>Plane das Unerwartete</h3>
<ul>
<li><b>Erbe und Zugriff</b>: Könnte deine Familie auf die Mittel zugreifen, wenn dir etwas zustieße? Schreibe Anweisungen auf und verwahre sie sicher (zum Beispiel bei einem Anwalt). Viele Coins gingen für immer verloren, als die einzige Person starb, die die Seed-Phrase kannte.</li>
<li><b>Backups</b>: mehr als eine Kopie der Seed-Phrase an verschiedenen sicheren Orten, geschützt vor Feuer und Wasser (es gibt Backup-Platten aus Metall).</li>
<li><b>Einfachheit</b>: Komplexität erzeugt Fehler. Weniger Assets, weniger Plattformen, weniger bewegliche Teile.</li>
</ul>

<h3>Ausstiegsstrategie</h3>
<p>Du musst nicht ewig halten. Typische Ausstiegspläne:</p>
<ul>
<li><b>Treppenausstieg</b>: kleine Anteile zu vorab festgelegten höheren Preisen verkaufen (zum Beispiel 10 % bei jedem Preisanstieg um 50 %).</li>
<li><b>Ausstieg per Rebalancing</b>: Immer wenn das Asset deinen Zielanteil am Vermögen übersteigt, zurückschneiden.</li>
<li><b>Zielbasiert</b>: verkaufen, um ein definiertes Ziel zu finanzieren (etwa die Anzahlung für eine Wohnung), wenn das Ziel erreicht ist.</li>
</ul>
${B.ex('<p>Priya setzt eine Regel: „Wenn mein Krypto das Dreifache dessen wert ist, was ich investiert habe, hebe ich meine ursprüngliche Einlage ab und lasse den Rest laufen.“ Das sichert ihr Kapital und nimmt den Stress des Zuschauens. Fällt der Preis danach, hat sie ihre Kosten schon zurück. Das ist nur ein Beispiel für eine Regel, keine Empfehlung.</p>')}

<h3>Überprüfungsrhythmus</h3>
<ul>
<li><b>Monatlich</b>: bestätigen, dass der DCA lief, Sicherheit prüfen.</li>
<li><b>Vierteljährlich</b>: Aufteilung prüfen und Aufzeichnungen aktualisieren.</li>
<li><b>Jährlich</b>: These und Steuerlage neu überdenken.</li>
</ul>

${B.w('checklist', { key: 'c8', title: 'Checkliste für meinen Krypto-Plan', accent: 'ci', items: 'Ich habe meinen Plan auf einer Seite aufgeschrieben, einschließlich meines maximalen Prozentsatzes|Mein DCA-Plan läuft automatisch oder steht in meinem Kalender|Meine Seed-Phrase hat zwei sichere Backups und einen Zugriffsplan für die Familie|Ich kenne meine Regeln für Gewinnmitnahmen und Rebalancing|Meine Transaktionsaufzeichnungen sind exportiert und gespeichert|Ich habe eine Regel dafür, was ich bei einem 80-%-Crash tue' })}

${B.key('<p><b>Glückwunsch.</b> Du weißt jetzt mehr über Krypto-Sicherheit als die meisten, die Krypto besitzen. Wenn du die aktive Seite erkunden willst (Trading, Hebel und Bots), behandelt der Krypto-Trader-Pfad sie, mit einer ernsten Warnung dazu.</p>')}

${B.take(['Schreibe einen Ein-Seiten-Plan: These, Größe, Bestände, Zeitplan, Verwahrung und Ausstiegsregeln.', 'Plane Erbe, Backups und Einfachheit ein.', 'Wähle eine Ausstiegsstrategie, bevor du sie brauchst: Treppe, Rebalancing oder zielbasiert.', 'Prüfe in regelmäßigem Rhythmus, statt täglich auf den Preis zu starren.'])}`,
      q: [
        ['Warum ist ein Erb- oder Zugriffsplan bei Krypto wichtig?', ['Er erhöht die Rendite', 'Ohne die Seed-Phrase können Angehörige die Mittel nicht wiederherstellen', 'Er ist eine Steuerregel', 'Er senkt Gebühren'], 1, 'Coins können dauerhaft verloren gehen, wenn niemand sonst darauf zugreifen kann.'],
        ['Was bedeutet „Treppenausstieg“?', ['Alles auf einmal verkaufen', 'Kleine Anteile zu vorab festgelegten höheren Preisen verkaufen', 'Am Höchststand kaufen', 'Zu einer Börse wechseln'], 1, 'Er verteilt Verkaufsentscheidungen und nimmt den Zwang, das Hoch zu treffen.'],
        ['Was ist der beste Überprüfungsrhythmus für einen langfristigen Anleger?', ['Stündliche Preiskontrollen', 'Monatliche Grundprüfungen, vierteljährliche Aufteilungsprüfung, jährliche Prüfung von These und Steuern', 'Nie', 'Nur wenn der Preis einbricht'], 1, 'Regelmäßige, aber seltene Überprüfungen halten dich ohne Angst auf Kurs.']
      ]
    }
  ]);
})();
