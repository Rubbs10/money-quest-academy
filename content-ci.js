/* Crypto Investor path: 8 lessons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ci', [
    {
      id: 'c1', m: 12, t: 'What is crypto? Blockchain explained with a shared notebook',
      hook: 'No jargon: how thousands of strangers keep one honest record, and why that created a new kind of money.',
      body: `
<p>Imagine a notebook that records who owns what. In a bank, the bank keeps the notebook and you trust it. Now imagine thousands of people each keep an identical copy of the notebook. Every new entry ("Ana pays Ben 1 coin") is announced to everyone, checked by the group, and only then added to all the copies. To cheat, you would need to secretly rewrite the majority of the notebooks at the same time. That, in simple terms, is a <b>blockchain</b>.</p>

<h3>Key ideas</h3>
<ul>
<li><b>Block</b>: a page of the notebook containing a batch of transactions.</li>
<li><b>Chain</b>: each page includes a fingerprint (a <b>hash</b>) of the previous page. Change an old page and the fingerprints of every later page break, which makes tampering obvious.</li>
<li><b>Nodes</b>: the computers that hold copies and check the rules.</li>
<li><b>Consensus</b>: the method by which the network agrees on the next page. In <b>proof of work</b> (Bitcoin), miners spend energy to compete for the right to add a block. In <b>proof of stake</b> (Ethereum today), validators lock up coins as a guarantee of honesty.</li>
<li><b>Decentralisation</b>: no single company or country controls the notebook.</li>
</ul>

<h3>Try the tamper test</h3>
<p>Edit the text in block 1 and watch what happens to the chain.</p>
${B.w('chain')}

<h3>Bitcoin: the first one</h3>
<p>In 2008 an anonymous person or group called Satoshi Nakamoto published the Bitcoin white paper, and the network started in January 2009. Bitcoin has a fixed maximum supply of <b>21 million coins</b>, and the rate at which new coins are created is cut in half roughly every four years (the "halving"; the most recent was in April 2024). Supporters call it "digital gold" for its scarcity and for being outside any government's control.</p>

<h3>Ethereum and smart contracts</h3>
<p>Ethereum (launched in 2015) added <b>smart contracts</b>: small programs that run on the blockchain and execute automatically, like a vending machine that holds money and releases it when conditions are met. This enabled decentralised finance (DeFi), stablecoins, NFTs and thousands of other applications. In 2022 it switched to proof of stake, cutting its energy use by over 99%.</p>

<h3>Why do crypto-assets have value?</h3>
<p>Value comes from what people believe and use: scarcity (limited supply), utility (payments, applications), network effects (more users make it more useful), and speculation. Unlike a company, most coins do not produce profits, so price is driven largely by demand and sentiment. That is why they are so volatile.</p>

${B.ex('<p>Think of the first online marketplaces: many early websites vanished, but a few became giants and the underlying technology changed the world. Crypto may be similar: the technology can be real while most individual tokens fail. Being right about the technology does not make every coin a good investment.</p>')}

${B.warn('<p>Crypto is young, volatile and full of scams. Bitcoin itself has dropped 70 to 85% from peak to bottom several times. Everything in this path assumes you only put in money you can afford to see fall dramatically.</p>')}

${B.take(['A blockchain is a shared, tamper-evident record kept by many computers.', 'Bitcoin has a hard cap of 21 million coins; Ethereum adds programmable smart contracts.', 'Value comes from scarcity, use and belief, which makes prices very volatile.', 'Good technology does not guarantee a good investment.'])}`,
      q: [
        ['Why is it hard to tamper with a blockchain record?', ['It is kept secret', 'Each block includes a fingerprint of the previous one and many copies exist', 'Banks protect it', 'It is deleted regularly'], 1, 'Changing old data breaks later fingerprints, and you would have to change most copies at once.'],
        ['What is the maximum number of bitcoins that can ever exist?', ['1 million', '21 million', '100 million', 'Unlimited'], 1, 'Bitcoin\'s supply cap is 21 million.'],
        ['What does a smart contract do?', ['Replaces your wallet', 'Runs code on a blockchain that executes automatically when conditions are met', 'Guarantees profit', 'Reverses transactions'], 1, 'It is a program on the chain, like a digital vending machine.']
      ]
    },
    {
      id: 'c2', m: 13, t: 'Wallets, keys and where to buy',
      hook: 'Who actually holds your coins? The single most important concept in crypto safety.',
      body: `
<p>In crypto there is a rule you will hear everywhere: <b>"not your keys, not your coins"</b>. Understanding why will protect you better than any price analysis.</p>

<h3>Keys, addresses and seed phrases</h3>
<ul>
<li><b>Public address</b>: like your bank account number. Safe to share so people can send you coins.</li>
<li><b>Private key</b>: the secret that authorises moving the coins. Whoever has it controls the coins, with no "forgot password" and no bank to call.</li>
<li><b>Seed phrase (recovery phrase)</b>: usually 12 or 24 words that can recreate all your keys. It is the master key to the wallet.</li>
</ul>
${B.warn('<p><b>Never</b> type your seed phrase into a website, send it to anyone, store it in photos, cloud notes or email. No genuine support person or company will ever ask for it.</p>')}

<h3>Two ways to hold crypto</h3>
${B.tbl(['', 'Custodial (exchange holds it)', 'Self-custody (you hold the keys)'], [
        ['Convenience', 'Easy: login with password', 'More steps to learn'],
        ['Who controls the coins', 'The company', 'You'],
        ['Main risk', 'Exchange hacks, collapse, freezes or fraud (e.g. Mt. Gox in 2014, FTX in 2022)', 'Losing your seed phrase, mistakes, phishing'],
        ['Recovery', 'Support and account recovery', 'None if you lose the seed phrase'],
        ['Best for', 'Small amounts, learning, trading', 'Larger long-term holdings']
      ])}

<h3>Hot wallets and cold wallets</h3>
<ul>
<li><b>Hot wallet</b>: software wallet connected to the internet (phone or browser). Convenient for small spending amounts.</li>
<li><b>Cold wallet / hardware wallet</b>: a small dedicated device that keeps keys offline and signs transactions. Best for long-term savings. Buy only directly from the manufacturer.</li>
</ul>

<h3>Where to buy</h3>
<ul>
<li><b>Centralised exchanges (CEX)</b>: companies that let you buy with euros, cards or bank transfers after identity checks (KYC). Choose regulated platforms with a long track record and transparent fees.</li>
<li><b>Decentralised exchanges (DEX)</b>: smart-contract marketplaces where you swap tokens straight from your wallet. More freedom and more risk; scam tokens are common.</li>
<li><b>Regulated products</b>: in some countries, Bitcoin and Ethereum ETFs and ETPs let you gain exposure through a normal broker account, without handling keys (US spot Bitcoin ETFs launched in January 2024).</li>
</ul>

<h3>Understand the costs</h3>
<ul>
<li><b>Trading fee</b>: a percentage per trade (often 0.1% to 1.5%). Simple "instant buy" buttons usually cost more than the exchange's advanced order screen.</li>
<li><b>Spread</b>: the difference between buy and sell price.</li>
<li><b>Network (gas) fees</b>: paid to the blockchain when you send coins. They vary with congestion.</li>
<li><b>Withdrawal fees</b>: charged by exchanges for moving coins out.</li>
</ul>

${B.ex('<p>Leo buys €1,000 of Bitcoin on an exchange. Because the total is small and he is learning, he leaves it there for now but turns on two-factor authentication (authenticator app) and a withdrawal whitelist. Six months later his holdings reach €5,000 and he buys a hardware wallet from the maker\'s website, sends €10 first as a test, checks it arrived, then moves the rest and stores the seed phrase on paper in two separate secure places.</p>')}

${B.w('checklist', { key: 'c2', title: 'Safe first purchase checklist', accent: 'ci', items: 'I chose a regulated exchange with a clear fee table|I enabled two-factor authentication with an authenticator app (not SMS)|I created a unique, strong password in a password manager|I only buy an amount I can afford to see fall 80%|I understand the difference between my public address and my seed phrase|For larger amounts: I plan to use a hardware wallet bought from the manufacturer|I always send a small test transaction before a large transfer' })}

${B.take(['Whoever holds the private key controls the coins; exchanges hold keys for you.', 'Your seed phrase is the master key: never share or digitise it.', 'Custodial is simple but carries company risk; self-custody gives control but puts the responsibility on you.', 'Check all costs: trading fees, spreads, network fees and withdrawal fees.'])}`,
      q: [
        ['Who should you share your seed phrase with?', ['Customer support', 'A friend you trust', 'Nobody, ever', 'Any exchange'], 2, 'Anyone with your seed phrase can take everything. Legitimate services never ask for it.'],
        ['What is the main risk of keeping coins on an exchange?', ['Coins turn to paper', 'The company can be hacked, freeze withdrawals or collapse', 'There are no fees', 'Coins disappear every year'], 1, 'You depend on the company; failures such as Mt. Gox and FTX cost customers dearly.'],
        ['Why send a small test transaction first?', ['It is required by law', 'To confirm the address is correct before sending a large amount', 'To get cashback', 'To reduce fees'], 1, 'Crypto transfers cannot be reversed, so a test reduces the risk of costly mistakes.']
      ]
    },
    {
      id: 'c3', m: 14, t: 'The crypto map: Bitcoin, Ethereum, stablecoins, DeFi and beyond',
      hook: 'Thousands of tokens exist. Here is how to sort them into groups, and where the risk sits in each.',
      body: `
<p>There are many thousands of crypto-assets. Most are tiny, many are worthless, and a few are major. A simple map helps you see the difference between a relatively established asset and a lottery ticket.</p>

<h3>The major categories</h3>
<ul>
<li><b>Bitcoin (BTC)</b>: the original and largest. Mostly a store-of-value and "digital gold" narrative. Simple, highly liquid, with the longest track record.</li>
<li><b>Smart-contract platforms (Layer 1)</b>: blockchains where applications run. Ethereum is the largest. Others compete on speed or cost. Their value depends on how much real activity they attract.</li>
<li><b>Layer 2s</b>: networks built on top of Ethereum that make transactions cheaper and faster.</li>
<li><b>Stablecoins</b>: tokens designed to hold a steady value, usually 1 US dollar (or 1 euro). They are used for trading and payments. Their safety depends on what backs them and who manages it. Terra's algorithmic stablecoin collapsed in 2022, and even the major USDC briefly lost its dollar peg during a banking panic in March 2023.</li>
<li><b>DeFi (decentralised finance) tokens</b>: lending, trading and insurance protocols run by code. Rewards can look high, but smart-contract bugs, hacks and "impermanent loss" in liquidity pools are real risks.</li>
<li><b>NFTs</b>: unique digital items. Mostly speculative collectibles, and demand has been very uneven.</li>
<li><b>Memecoins</b>: tokens built around jokes and communities (like dogs and frogs). Pure speculation and the most scam-heavy corner.</li>
<li><b>Themed tokens</b> (AI, gaming, real-world assets): narratives that come and go.</li>
</ul>

<h3>The risk pyramid</h3>
<p>A useful picture: a wide base of relatively established assets, and a narrow, very risky top.</p>
<div class="pyr" role="img" aria-label="Crypto risk pyramid from lower risk at the bottom to extreme risk at the top">
  <div style="background:#C9C5EE;width:30%;min-width:170px">Memecoins, new tokens: extreme risk</div>
  <div style="background:#A58FFF;width:50%;min-width:230px">Small caps, NFTs, themed tokens: very high</div>
  <div style="background:#FFC21A;width:72%;min-width:260px">Large DeFi, Layer 1 and 2 platforms: high</div>
  <div style="background:#14B37D;width:94%;min-width:280px">Bitcoin and Ethereum: still very volatile, but the most established</div>
</div>
<p class="note">Even "established" crypto can lose 70% or more. The pyramid shows relative risk, not safety.</p>

<h3>Market capitalisation tiers</h3>
<p><b>Market cap</b> is price times circulating supply. As a rough guide: large caps are above about €10 billion, mid caps are from about €1 to €10 billion, and small caps are under €1 billion. Smaller means more potential upside, much more volatility, thinner liquidity and a higher chance of failure.</p>

<h3>Staking and "yield"</h3>
<p><b>Staking</b> means locking proof-of-stake coins to help secure the network in return for rewards. It is not free money: the reward is paid in the coin itself (so price risk remains), your coins may be locked for a period, and some platforms add smart-contract or counterparty risk. If a product promises high, fixed, "risk-free" yield, remember that collapsed lenders in 2022 offered exactly that.</p>

${B.ex('<p>Mia has €1,000 for crypto. She splits it: €700 in Bitcoin and Ethereum (her "core"), €250 spread across a few larger established projects she researched, and €50 as a "fun money" bet on a small coin. If that last bet goes to zero, she loses 5% of her crypto bucket and nothing breaks.</p>')}

${B.warn('<p>Do not confuse "number of tokens" with "diversification". Most tokens move together with Bitcoin, so owning 30 altcoins often feels like owning one big bet with extra risk.</p>')}

${B.take(['Sort crypto into categories: Bitcoin, platforms, stablecoins, DeFi, NFTs, memecoins.', 'Risk rises sharply as you move from large, established assets to small, new tokens.', 'Stablecoins can lose their peg; staking rewards are not risk-free.', 'Many tokens are highly correlated, so they provide less diversification than they appear to.'])}`,
      q: [
        ['What is a stablecoin designed to do?', ['Double in value yearly', 'Hold a steady value such as 1 dollar', 'Replace all banks', 'Hide your identity'], 1, 'They aim for a stable price, but the peg can fail.'],
        ['Which category generally carries the highest risk of total loss?', ['Bitcoin', 'Large regulated ETFs', 'Newly launched memecoins', 'Savings accounts'], 2, 'Memecoins are speculative, often manipulated and frequently go to zero.'],
        ['Market cap equals…', ['Price × circulating supply', 'Price × total number of traders', 'Daily volume only', 'Transaction fees'], 0, 'It is the current price multiplied by the coins in circulation.']
      ]
    },
    {
      id: 'c4', m: 13, t: 'How to evaluate a project: tokenomics and fundamentals',
      hook: 'A checklist of questions that separates serious projects from hype, including the number that fools most beginners.',
      body: `
<p>Unlike a company, a token usually has no earnings report. Still, you can ask structured questions. The aim is not to find a guaranteed winner, but to avoid obvious losers and understand what you are buying.</p>

<h3>The 8-question checklist</h3>
<ol>
<li><b>What problem does it solve, and for whom?</b> Can you explain it in two sentences?</li>
<li><b>Do real people use it?</b> Look at active users, transaction counts, fees paid and total value locked (TVL) in DeFi, from independent sources.</li>
<li><b>Does it generate revenue?</b> Fees paid by users are a healthy sign. "Revenue" from printing new tokens is not.</li>
<li><b>Who is behind it?</b> Public, accountable team with a track record, versus anonymous founders and copy-pasted code.</li>
<li><b>What is the tokenomics?</b> Maximum supply, how many tokens circulate, how many are released over time, and who owns them.</li>
<li><b>Is the code audited?</b> Security audits help (but are not a guarantee). Check hacks in the project's history.</li>
<li><b>Is there real liquidity?</b> Can you sell without crashing the price? Is it listed on reputable venues?</li>
<li><b>What can go wrong?</b> Regulation, competition, technical failure, insider selling.</li>
</ol>

<h3>Tokenomics 101</h3>
<ul>
<li><b>Circulating supply</b>: tokens available to trade now.</li>
<li><b>Total / max supply</b>: all tokens that will ever exist (or exist now).</li>
<li><b>Emission / inflation</b>: how quickly new tokens are created. High inflation dilutes holders unless demand grows faster.</li>
<li><b>Distribution</b>: how much was allocated to founders, early investors and the community? If insiders hold a huge share, a dump is possible.</li>
<li><b>Vesting and unlocks</b>: locked tokens released on a schedule. A big unlock (sometimes called a "cliff") can push prices down as recipients sell.</li>
<li><b>Utility</b>: what is the token needed for (fees, staking, governance)? A token that nobody needs has only speculative value.</li>
</ul>

<h3>The number that fools beginners: market cap vs. FDV</h3>
<p>A token can look "cheap" at a low market cap while most supply is still locked. <b>Fully diluted valuation (FDV)</b> shows what the value would be if all tokens existed. A big gap means a lot of future selling pressure. Try the calculator:</p>
${B.w('supply')}

<h3>Red flags</h3>
<ul>
<li>Promises of guaranteed returns or "risk-free yield".</li>
<li>Anonymous team, no working product, copied white paper.</li>
<li>A few wallets hold most of the supply.</li>
<li>Liquidity is not locked, so developers could remove it ("rug pull").</li>
<li>Pressure tactics, countdown timers and "buy now before it is too late".</li>
<li>Rewards paid mainly by bringing in new investors (a Ponzi structure).</li>
<li>Paid promotions by influencers with no disclosure.</li>
</ul>

${B.tip('<p>A good habit: read the project\'s own documentation, check an independent data source for usage, and search for "[project name] scam", "hack" and "criticism". Read the bear case before you buy.</p>')}

${B.ex('<p>Two tokens each trade at €1. Token A has 800M of 1,000M tokens already circulating and a clear use, so market cap is €800M and FDV €1B. Token B has 100M of 1,000M circulating: market cap €100M, FDV €1B. Token B looks 8 times "smaller" but 90% of its supply is still locked. When those tokens unlock, holders must absorb nine times the existing supply. Same price, very different risk.</p>')}

${B.take(['Ask what the project does, who uses it, and how it earns real revenue.', 'Study supply, distribution, vesting and unlock schedules.', 'Compare market cap with fully diluted valuation to see future dilution.', 'Red flags: guaranteed returns, anonymous teams, concentrated supply, unlocked liquidity.'])}`,
      q: [
        ['A token has a small market cap but a huge FDV. This suggests…', ['Little future dilution', 'A lot of tokens are still to be released, adding selling pressure', 'Guaranteed growth', 'The token is a stablecoin'], 1, 'Locked supply will eventually enter circulation, diluting holders.'],
        ['Which is a red flag?', ['Public team and audited code', 'Promised guaranteed daily returns', 'Clear documentation', 'Independent usage data'], 1, 'No legitimate investment can guarantee returns.'],
        ['What is a "rug pull"?', ['A price rally', 'Developers withdrawing liquidity or abandoning a project after taking investors\' money', 'A wallet upgrade', 'A staking reward'], 1, 'It is an exit scam that leaves holders with worthless tokens.']
      ]
    },
    {
      id: 'c5', m: 14, t: 'Building a crypto portfolio: sizing, DCA and cycles',
      hook: 'How much, how often, and what to expect. Position size is the decision that matters most.',
      body: `
<p>Most crypto losses do not come from picking the wrong coin. They come from betting too much on any coin. The first question is not "what to buy" but "<b>how much of my wealth can I afford to put here?</b>"</p>

<h3>Decide the size with the "80% drop test"</h3>
<p>Bitcoin has fallen 70 to 85% from peak to trough several times, and smaller assets often fall more. Ask yourself: if this entire bucket dropped 80% and stayed there for two years, would my life plan and my sleep survive? Use the calculator.</p>
${B.w('cryptosize')}
<p>Many cautious advisers suggest small allocations, often in the range of 1 to 5% of investable wealth for people who want some exposure. That is not a rule or advice, only an example of how professionals think: size it so that a total loss would be an annoyance, not a disaster.</p>

<h3>A simple structure: core and satellites</h3>
<ul>
<li><b>Core (for example 60 to 80% of your crypto bucket)</b>: Bitcoin and Ethereum, the most established.</li>
<li><b>Satellites (for example 20 to 40%)</b>: a handful of researched larger projects.</li>
<li><b>Lottery tickets (optional, 0 to 5% of the bucket)</b>: tiny, risky bets you are ready to lose entirely.</li>
</ul>

<h3>DCA: your friend in a volatile market</h3>
<p>Because prices swing so much, buying a fixed amount weekly or monthly (DCA) removes the pressure of timing the market. You buy more when prices are low and less when they are high. It also helps with emotions. You can revisit the DCA game from the Investor path.</p>

<h3>Cycles: patterns, not promises</h3>
<p>Bitcoin has historically shown big boom-and-bust cycles of roughly four years, often linked to the halving, with prior peaks followed by drops of 70 to 85%. Many investors build their timing around this, but past cycles are a small sample, and markets learn. Do not bet your plan on a pattern repeating.</p>

<h3>Take profits on purpose</h3>
<p>Euphoria makes people forget to sell. Decide in advance: for example, "If my crypto bucket grows to more than 10% of my wealth, I rebalance back to 5%", or "I sell a quarter of any position that triples". Written rules beat greed.</p>

<h3>Rebalancing and tax awareness</h3>
<p>Selling can trigger taxes. Rebalance by directing new contributions where needed, and keep records of every purchase and sale (see the taxes lesson).</p>

${B.ex('<p>Tom puts 3% of his €30,000 savings into crypto (€900), buying €75 a month through DCA. When the market drops 70%, his bucket loses about €630, a hit of 2.1% of his total wealth. He keeps buying cheaply. When it later rallies 5x, he trims back to his target. He neither got rich nor got wrecked, and he stayed in the game.</p>')}

${B.warn('<p>Never invest money you need for rent, tuition or emergencies. Never borrow to buy crypto. Never put your entire savings in a single coin because it "cannot fail".</p>')}

${B.take(['Size comes first: use the 80% drop test to decide how much is safe.', 'Core and satellite: mostly major assets, a small slice for speculation.', 'DCA reduces timing risk and emotional stress.', 'Cycles are patterns, not guarantees. Have written take-profit and rebalancing rules.'])}`,
      q: [
        ['What is the purpose of the "80% drop test"?', ['To predict the future price', 'To make sure your position size is survivable if prices crash hard', 'To choose a wallet', 'To avoid fees'], 1, 'If you could not handle an 80% fall in the bucket, it is too large.'],
        ['In a core-and-satellite crypto portfolio, the core is usually…', ['Memecoins', 'Bitcoin and Ethereum', 'The newest launches', 'Leveraged tokens'], 1, 'The most established assets form the base; riskier ideas are limited satellites.'],
        ['Why write down take-profit and rebalancing rules in advance?', ['To avoid greed and euphoria making decisions', 'Because exchanges require it', 'To increase fees', 'To impress others'], 0, 'Predefined rules help you act calmly when prices surge.']
      ]
    },
    {
      id: 'c6', m: 14, t: 'Security and scams: how not to lose everything',
      hook: 'In crypto there is no bank to call. Learn the scams that cost people millions, and play the Safe-or-Scam game.',
      body: `
<p>Because crypto transactions cannot be reversed, scammers love it. The good news: almost every scam relies on the same few tricks, and once you recognise them, they lose power.</p>

<h3>The most common scams</h3>
<ul>
<li><b>Phishing</b>: fake emails, texts or websites that copy a real exchange or wallet to steal your login or seed phrase. Always type the address yourself or use a saved bookmark.</li>
<li><b>Fake support</b>: someone messages you "from the exchange" offering help. Real support does not DM you first or ask for passwords or recovery phrases.</li>
<li><b>Giveaway scams</b>: "send 1 ETH and get 2 back", often featuring famous people or hacked accounts.</li>
<li><b>Rug pulls and pump-and-dumps</b>: developers or groups hype a token, then sell their holdings and vanish.</li>
<li><b>Romance / "pig-butchering" scams</b>: a friendly stranger builds trust over weeks and guides you to a fake investment platform that shows fake profits, until you try to withdraw.</li>
<li><b>Wallet drainers</b>: malicious sites that trick you into signing a transaction giving them permission to empty your wallet. Be careful with "Connect wallet" buttons and unlimited approvals.</li>
<li><b>Address poisoning</b>: scammers send tiny transactions from an address that looks like one you used, hoping you copy it from your history by mistake.</li>
<li><b>Fake apps and extensions</b>: counterfeit wallets in app stores or browser stores.</li>
<li><b>Ponzi schemes</b>: promises of fixed high returns, paid with money from new investors until the scheme collapses.</li>
<li><b>Recovery scams</b>: after a loss, "recovery experts" promise to retrieve your coins for an upfront fee. They are scammers too.</li>
</ul>

<h3>Your security setup</h3>
${B.w('checklist', { key: 'c6', title: 'Crypto security checklist', accent: 'ci', items: 'Unique, long passwords for every exchange and wallet service, in a password manager|Authenticator-app two-factor authentication (not SMS) on all accounts|Withdrawal address whitelisting and anti-phishing codes switched on|Seed phrase written on paper and stored in two separate, safe places, never photographed|Hardware wallet bought directly from the manufacturer for larger holdings|Bookmarked exchange websites, never clicking links in emails or ads|Separate email address for crypto accounts|Small test transaction before every large transfer|Regular review of token approvals and revoking unused ones' })}

<h3>Golden rules</h3>
<ol>
<li>If it sounds too good to be true, it is.</li>
<li>Urgency is a weapon. Scammers create deadlines so you cannot think.</li>
<li>Nobody gives free money, and nobody needs your seed phrase.</li>
<li>Verify using a second channel. Call the company on a number from its official site.</li>
<li>Keep most funds in cold storage and a small "spending" amount in a hot wallet.</li>
</ol>

<h3>Play: Safe or scam?</h3>
<p>Nine real-world situations. Decide whether the move is safe or risky, and read why.</p>
${B.w('scam')}

<h3>If you are scammed</h3>
<p>Act quickly: stop contact, move any remaining funds to a new wallet, change passwords, report to the exchange involved, your local police and fraud-reporting authorities. Recovery is unlikely, which is exactly why prevention matters.</p>

${B.take(['Crypto transfers are irreversible, so prevention is everything.', 'Never share your seed phrase; real support never asks for it.', 'Use app-based 2FA, a password manager and cold storage for larger amounts.', 'Pressure, guaranteed returns and unsolicited DMs are classic scam signals.'])}`,
      q: [
        ['A "support agent" DMs you first and asks for your recovery phrase. This is…', ['Normal procedure', 'A scam', 'Required for security', 'A reward programme'], 1, 'Genuine support will never do this.'],
        ['What is a good way to approach a new crypto website?', ['Click any link in an ad', 'Type the address yourself or use a trusted bookmark', 'Use an unverified browser extension', 'Share your wallet password to verify'], 1, 'Fake sites copy real ones; a bookmark avoids lookalikes.'],
        ['A stranger you met online guides you to a platform showing big gains but asks for more deposits to withdraw. This is typical of…', ['A normal exchange', 'A pig-butchering scam', 'A tax rule', 'A staking reward'], 1, 'Legitimate platforms do not require extra deposits to release your own money.']
      ]
    },
    {
      id: 'c7', m: 10, t: 'Taxes, regulation and keeping records',
      hook: 'Crypto gains are usually taxable. A simple record-keeping habit saves headaches and money.',
      body: `
<p>This lesson gives general principles. <b>Tax and legal rules differ by country and change often</b>, so always check your local tax authority and, if the amounts matter, talk to a qualified tax professional.</p>

<h3>What is often taxable</h3>
<p>In many countries, authorities treat crypto-assets as property or investments. Events that commonly create a tax duty include:</p>
<ul>
<li><b>Selling crypto for fiat money</b> (euros, dollars) at a profit.</li>
<li><b>Swapping one crypto for another</b>. In many places, this counts as selling the first and buying the second.</li>
<li><b>Paying for goods or services</b> with crypto.</li>
<li><b>Earning crypto</b> as income: work, mining, staking rewards or airdrops, often taxed as income at the time you receive them.</li>
</ul>
<p>Often <b>not</b> taxable (but check locally): buying crypto with fiat, moving crypto between your own wallets, and simply holding.</p>

<h3>How gains are calculated</h3>
<p>Gain = sale price − purchase cost (your "cost basis"), minus allowed fees. Some countries tax gains at a flat rate, others at progressive rates, and some give favourable treatment to assets held for more than a year. Losses may offset gains.</p>
${B.ex('<p>You buy 0.1 BTC for €2,000 and later sell it for €3,500. Gain = €1,500. If your local rule taxes gains at, for example, 25% (illustrative only), the tax would be €375. If you instead swap that BTC for another coin worth €3,500, many tax systems would still treat it as a sale and calculate the same gain, even though you never touched euros.</p>')}

<h3>Keep good records from day one</h3>
<ul>
<li>Date, type and amount of every purchase, sale, swap, transfer and reward.</li>
<li>The euro (or local currency) value at the time of each event.</li>
<li>Fees paid.</li>
<li>Wallet addresses and exchange accounts used.</li>
<li>Export transaction histories (CSV files) every year from every exchange, since platforms can close or lose data.</li>
</ul>
<p>Specialised crypto tax software can import your exchanges and wallets and calculate gains. Many accountants know how to use them.</p>

<h3>Regulation: a changing landscape</h3>
<ul>
<li>In the European Union, the <b>MiCA</b> regulation sets rules for crypto-asset issuers and service providers (fully applicable since the end of 2024), including licensing, disclosure and stablecoin rules. EU tax-reporting rules for crypto platforms (DAC8) start from 2026, so authorities increasingly receive data about your transactions.</li>
<li>Other regions are building their own frameworks. Rules can restrict certain products, such as derivatives for retail clients.</li>
</ul>
<p>Practical meaning: prefer <b>licensed, regulated platforms</b>, expect identity checks, and assume tax authorities can see more than before.</p>

${B.warn('<p>Beware of "tax-free" crypto schemes and anyone who claims you do not need to report. Evading tax is illegal and increasingly detectable.</p>')}

${B.take(['Selling, swapping, spending and earning crypto often trigger taxes, depending on your country.', 'Track cost basis, dates, values and fees for every transaction.', 'Export your records regularly; consider crypto tax software.', 'Use regulated platforms and expect more transparency from authorities.'])}`,
      q: [
        ['In many countries, swapping one crypto for another is treated as…', ['Nothing, never taxable', 'A sale of the first asset (taxable event)', 'A gift', 'A loan'], 1, 'Check local rules, but a swap is often considered a disposal.'],
        ['What do you need to calculate a gain correctly?', ['Only today\'s price', 'Purchase cost, sale proceeds and fees with dates', 'Your age', 'Your wallet colour'], 1, 'Cost basis and proceeds determine the gain or loss.'],
        ['Why export your transaction history regularly?', ['Exchanges can close or lose data and you need records for tax', 'It increases returns', 'It is required for staking', 'It removes fees'], 0, 'Your own records protect you if a platform disappears.']
      ]
    },
    {
      id: 'c8', m: 10, t: 'Your long-term crypto plan and exit strategy',
      hook: 'Turn this path into a one-page plan: why you hold, how much, how you stay safe and when you take profits.',
      body: `
<p>A written plan is the difference between investing and gambling. Use this lesson to assemble yours.</p>

<h3>The one-page crypto plan</h3>
${B.tbl(['Section', 'Your answer'], [
        ['Why I hold crypto', 'My thesis in two sentences (for example: "long-term exposure to a new asset class, small slice")'],
        ['How much', 'Maximum percent of my investable wealth (for example 3%) and the euro amount'],
        ['What I hold', 'Core assets (for example BTC / ETH) and the maximum for satellites and speculation'],
        ['How I buy', 'DCA schedule: amount, day of the month, platform'],
        ['Where I store', 'Exchange for small amounts; hardware wallet for the rest; backup locations for the seed phrase'],
        ['When I rebalance or take profit', 'Rules, such as: "if crypto exceeds 6% of my wealth I trim to 3%"'],
        ['What would change my mind', 'Events that would invalidate my thesis (for example a major protocol failure or regulatory change)'],
        ['Taxes and records', 'Where I keep my transaction history and when I review it'],
        ['In a crash I will', 'Keep the plan, not check prices daily, not borrow, not sell in panic']
      ])}

<h3>Plan for the unexpected</h3>
<ul>
<li><b>Inheritance and access</b>: if something happened to you, could your family access the funds? Write instructions and store them securely (for example with a lawyer). Many coins have been lost forever when the only person who knew the seed phrase died.</li>
<li><b>Backups</b>: more than one copy of the seed phrase in different secure places, protected from fire and water (metal backup plates exist).</li>
<li><b>Simplicity</b>: complexity breeds mistakes. Fewer assets, fewer platforms, fewer moving parts.</li>
</ul>

<h3>Exit strategy</h3>
<p>You do not have to hold forever. Typical exit plans:</p>
<ul>
<li><b>Ladder out</b>: sell small portions at pre-set higher prices (for example sell 10% each time the price rises 50%).</li>
<li><b>Rebalance out</b>: whenever the asset exceeds your target share of wealth, trim back.</li>
<li><b>Goal-based</b>: sell to fund a defined goal (such as a home deposit) when the target is reached.</li>
</ul>
${B.ex('<p>Priya sets a rule: "When my crypto is worth 3x what I invested, I withdraw my original investment and let the rest ride." This locks in her principal and removes the stress of watching it. If the price falls afterwards, she has already recovered her cost. This is only an example of a rule, not a recommendation.</p>')}

<h3>Review rhythm</h3>
<ul>
<li><b>Monthly</b>: confirm the DCA ran, check security.</li>
<li><b>Quarterly</b>: review allocation and update records.</li>
<li><b>Yearly</b>: reconsider the thesis and tax position.</li>
</ul>

${B.w('checklist', { key: 'c8', title: 'My crypto plan checklist', accent: 'ci', items: 'I wrote my plan on one page including my maximum percentage|My DCA schedule is automatic or in my calendar|My seed phrase has two safe backups and a family access plan|I know my take-profit and rebalancing rules|My transaction records are exported and stored|I have a rule for what I will do in an 80% crash' })}

${B.key('<p><b>Congratulations.</b> You now know more about crypto safety than most people who own it. If you want to explore the active side (trading, leverage and bots), the Crypto Trader path covers it, and with a serious warning attached.</p>')}

${B.take(['Write a one-page plan: thesis, size, holdings, schedule, storage and exit rules.', 'Plan for inheritance, backups and simplicity.', 'Choose an exit strategy before you need one: ladder out, rebalance or goal-based.', 'Review on a regular rhythm instead of watching the price daily.'])}`,
      q: [
        ['Why is an inheritance or access plan important in crypto?', ['It increases returns', 'Without the seed phrase, family members cannot recover the funds', 'It is a tax rule', 'It lowers fees'], 1, 'Coins can be lost permanently if nobody else can access them.'],
        ['What does "ladder out" mean?', ['Selling everything at once', 'Selling small portions at pre-set higher prices', 'Buying at the peak', 'Moving to an exchange'], 1, 'It spreads out selling decisions and removes the need to time the top.'],
        ['What is the best review rhythm for a long-term investor?', ['Hourly price checks', 'Monthly basic checks, quarterly allocation review, yearly thesis and tax review', 'Never', 'Only when the price crashes'], 1, 'Regular but infrequent reviews keep you on plan without anxiety.']
      ]
    }
  ]);
})();
