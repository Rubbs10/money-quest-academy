/* Crypto Trader path: 8 lessons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('ct', [
    {
      id: 'd1', m: 12, t: 'Crypto trading 101: 24/7 markets, spot and derivatives',
      hook: 'How crypto markets differ from stocks, and the main products traders use.',
      body: `
<p>Crypto trading shares the logic of any trading (charts, risk, psychology) but with its own flavour: the market never closes, volatility is higher, products are more exotic and rules vary by country. Before learning tactics, understand the playground.</p>

<h3>What is different about crypto markets?</h3>
<ul>
<li><b>24/7/365</b>: no opening bell, no weekends off. Big moves can happen at 3 a.m. while you sleep.</li>
<li><b>High volatility</b>: daily moves of 3 to 10% are normal for many coins. Opportunity and danger at the same time.</li>
<li><b>Fragmented venues</b>: hundreds of exchanges, each with its own prices, liquidity, fees and risks.</li>
<li><b>Lighter regulation</b>: protections are weaker and the risk of manipulation (pump and dump, wash trading) is higher, especially for small coins.</li>
<li><b>Self-reinforcing sentiment</b>: social media, whales and leverage create fast, emotional moves.</li>
</ul>

<h3>The main products</h3>
${B.tbl(['Product', 'What it is', 'Leverage', 'Risk'], [
        ['Spot', 'You buy and own the actual coin', 'None', 'Price risk only. Best for beginners'],
        ['Margin trading', 'You borrow to buy more than you own', 'Low to high', 'Losses amplified; interest paid on loans'],
        ['Futures (dated)', 'Contract to buy or sell at a future date', 'Up to 100x or more', 'Liquidation can wipe your margin'],
        ['Perpetual futures', 'Futures with no expiry, kept near spot price by funding payments', 'Up to 100x or more', 'Funding costs + liquidation + exchange risk'],
        ['Options', 'Rights to buy or sell at a set price', 'Built-in', 'Complex; can expire worthless']
      ])}
<p>Access differs by country. Many regulators restrict or ban derivatives for retail clients, and platforms may limit leverage for users in certain regions. Always follow your local rules and the terms of a regulated provider.</p>

<h3>How exchanges make money: fees</h3>
<ul>
<li><b>Maker</b>: you place a limit order that waits in the order book and adds liquidity. Usually lower fees.</li>
<li><b>Taker</b>: you take an existing order immediately (market order). Higher fees.</li>
<li>Fees of 0.02% to 0.1% per trade look small but add up for active traders.</li>
</ul>

<h3>Sessions and liquidity</h3>
<p>Although the market never stops, activity follows human time zones. Volume is typically strongest when Europe and the US overlap, and weaker on weekends, when prices can move sharply on thin liquidity. Traders often avoid placing big orders in low-liquidity hours.</p>

<h3>Pairs and base currencies</h3>
<p>Trading pairs are written like BTC/USDT: the first is what you buy or sell, the second is what you pay in. Stablecoin pairs (USDT, USDC) are most liquid. Knowing which currency your profit is measured in matters: a trade can be "up in USDT" while the coin you hold fell against Bitcoin.</p>

${B.ex('<p>It is Sunday 4 a.m. Sam holds a leveraged position and sleeps. A sudden news item hits, liquidity is thin and price spikes 8% against him within minutes. His stop was not set. He wakes up to a liquidation. In traditional markets he would have been protected by closed hours; in crypto, risk management has to work while you sleep (stops, smaller size, no leverage overnight).</p>')}

${B.warn('<p>Derivatives are for experienced traders. If you are new, begin with spot trading and small size, and read the next lessons on leverage before touching futures.</p>')}

${B.take(['Crypto trades 24/7 with high volatility and weaker protections.', 'Spot means owning the coin; perpetual futures add leverage, funding and liquidation risk.', 'Maker orders add liquidity (lower fee), taker orders remove it (higher fee).', 'Risk controls must work while you sleep: stops, small size, no careless overnight leverage.'])}`,
      q: [
        ['What is the key difference between spot and perpetual futures?', ['Spot involves owning the coin; perpetuals are leveraged contracts with funding and liquidation', 'There is none', 'Spot always has leverage', 'Perpetuals are safer'], 0, 'Perpetual futures are derivatives with leverage and funding costs.'],
        ['Which order type usually pays the lower fee?', ['Taker (market) order', 'Maker (limit) order that adds liquidity', 'Both are always equal', 'Stop order'], 1, 'Makers add liquidity to the order book and are typically rewarded with lower fees.'],
        ['Why is risk management harder in crypto than in stock markets?', ['Markets close too often', 'The market never closes, so big moves can happen while you are away', 'Fees are fixed', 'There is no volatility'], 1, 'Round-the-clock trading means your protections need to be in place at all times.']
      ]
    },
    {
      id: 'd2', m: 14, t: 'Leverage and liquidation: how accounts get wiped',
      hook: 'The calculator every crypto trader should use before every leveraged trade.',
      body: `
<p>Leverage lets you control a position bigger than your own money. It is the feature that attracts most beginners and destroys most of them. Understanding liquidation is not optional.</p>

<h3>How leverage works</h3>
<p>If you put in €500 (your <b>margin</b>) and use 10x leverage, you control a €5,000 position. A 1% price move changes your account by 10%. A 10% move against you erases the whole €500.</p>
<ul>
<li><b>Margin</b>: the collateral you post.</li>
<li><b>Maintenance margin</b>: the minimum collateral the exchange requires to keep your position open.</li>
<li><b>Liquidation</b>: when losses push your margin below maintenance, the exchange force-closes your position. You lose the margin, and sometimes fees and extra costs.</li>
<li><b>Isolated margin</b>: only the margin assigned to that trade is at risk. <b>Cross margin</b>: your whole account balance backs the trade, so one bad position can drain everything.</li>
</ul>

<h3>The simple liquidation formula (approximation)</h3>
<p>For a long position with isolated margin: <b>liquidation price ≈ entry × (1 − 1/leverage + maintenance margin rate)</b>. For a short, it mirrors above the entry. At 10x, you are liquidated after a move of roughly 9.5% against you. At 50x, after about 1.5%. At 100x, after roughly 0.5%, which is less than a normal coffee-break wiggle for a volatile coin.</p>

<h3>Try it yourself</h3>
<p>Choose leverage and see the distance to liquidation compared with the asset's typical daily move.</p>
${B.w('liq')}

<h3>Why high leverage is a trap</h3>
<ul>
<li><b>Noise kills you</b>: price constantly makes small swings and wicks. Tight liquidation levels get hit by noise, not by "the real trend".</li>
<li><b>You cannot be wrong even a little</b>: high leverage requires perfect timing.</li>
<li><b>Liquidation cascades</b>: when price moves, forced liquidations trigger more selling (or buying), which pushes price further and liquidates more traders. In several crashes, billions of dollars of leveraged positions were liquidated in a single day.</li>
<li><b>Fees and funding</b> are charged on the full position size, so costs rise with leverage.</li>
<li><b>Auto-deleveraging and slippage</b>: in extreme moves, exchanges may close profitable positions or fill your stop far from where you set it.</li>
</ul>

<h3>The professional view of leverage</h3>
<p>Professionals do not see leverage as a way to get rich fast. They treat it as a tool for <b>capital efficiency</b>: use only what is needed to post margin for a position sized by risk. They decide position size from the stop distance (see risk lesson), and the leverage is simply whatever results, usually low (1x to 3x). The key mindset: your <i>risk</i> is the stop distance times your size, not the leverage number.</p>
${B.ex('<p>Two traders buy at 100 with a stop at 97 and want to risk €50. Both buy the same size: €1,667 worth. Trader A posts margin of €1,667 (1x). Trader B posts €167 (10x). If the stop at 94 works, both lose the same €50. Now imagine the stop was forgotten or moved and a spike takes price down to 90 before it bounces. Trader A (1x) is still in the trade with an unpleasant paper loss. Trader B (10x) was liquidated near 90.5 and lost the whole €167 margin, and the later bounce is of no use to him. The leverage number only changed how much room existed before disaster.</p>')}

${B.key('<p><b>Rules for safer leverage:</b> use isolated margin, always set a stop-loss well inside the liquidation price, size the trade by risk (not by leverage), and keep leverage low enough that liquidation is many times a typical daily move away.</p>')}

${B.warn('<p>Exchanges profit from liquidations and fees. Social media rewards screenshots of huge leveraged wins and hides the wiped accounts. Remember the survivors you see are a tiny, self-selected sample.</p>')}

${B.take(['Leverage multiplies both gains and losses; liquidation takes your entire margin.', 'Isolated margin limits damage to a single trade; cross margin can drain your account.', 'Liquidation price depends on leverage; at 50x or 100x, normal noise is enough to liquidate you.', 'Size trades by stop distance and risk percent; keep leverage low and stops inside liquidation.'])}`,
      q: [
        ['With 20x leverage on a long, roughly how far against you does price need to move to liquidate you?', ['About 20%', 'About 4.5%', 'About 0.5%', 'About 50%'], 1, '1/20 = 5%, minus a small maintenance margin leaves roughly 4.5%.'],
        ['Which margin mode risks your entire account on one position?', ['Isolated margin', 'Cross margin', 'Spot trading', 'Limit orders'], 1, 'Cross margin uses your total balance as collateral for open positions.'],
        ['What is the professional mindset about leverage?', ['Always maximise it', 'Size by risk and stop distance; leverage is only the byproduct and stays low', 'Never use stops', 'Use it to recover losses'], 1, 'Risk is stop distance times size, and high leverage leaves no room for error.']
      ]
    },
    {
      id: 'd3', m: 13, t: 'Reading the crypto market: volume, open interest, funding and sentiment',
      hook: 'Beyond the price chart: the signals specific to crypto, what each one says and how traders misuse them.',
      body: `
<p>Crypto offers data that traditional markets hide: you can see leveraged positioning, exchange flows and sentiment in near real time. These tools tell you <b>who is crowded where</b>, which is useful because crowded trades often get squeezed.</p>

<h3>Price, volume and open interest</h3>
<p><b>Open interest (OI)</b> is the total value of outstanding futures contracts that are still open. Combined with price, it gives clues:</p>
${B.tbl(['Price', 'Open interest', 'Typical reading'], [
        ['Rising', 'Rising', 'New money is entering longs; trend has fuel (but check for crowding)'],
        ['Rising', 'Falling', 'Short positions closing (short squeeze); rally may be weaker'],
        ['Falling', 'Rising', 'New shorts piling in; downtrend has momentum'],
        ['Falling', 'Falling', 'Longs giving up (liquidations); selling may be nearing exhaustion']
      ])}

<h3>Funding rate: the crowd thermometer</h3>
<p>Perpetual futures use <b>funding payments</b> between longs and shorts to keep the contract price near the spot price. When the rate is positive, longs pay shorts. A very high positive rate means many traders are leaning long, and it is also costly to hold. Extremes often occur near local tops, because a crowd with the same trade has nobody left to buy. Extremely negative funding can precede short squeezes. Calculate what funding costs you:</p>
${B.w('funding')}

<h3>Liquidation maps and heatmaps</h3>
<p>Some data services estimate where clusters of leveraged positions would be liquidated. Price is often "attracted" to those areas because forced orders create liquidity. Treat them as hints, not guarantees. Estimates can be wrong.</p>

<h3>Sentiment indicators</h3>
<ul>
<li><b>Fear and Greed Index</b>: combines volatility, momentum, social media and other inputs into a 0 to 100 score. Extreme greed can warn of overheating; extreme fear can show capitulation. It is a contrarian gauge, not a timing tool.</li>
<li><b>Long/short ratio</b>: share of accounts positioned long vs short on an exchange. Differences between exchanges and between "accounts" and "positions" make it noisy.</li>
<li><b>Social buzz</b>: when your taxi driver discusses a coin, the move is probably late.</li>
</ul>

<h3>Market-structure signals</h3>
<ul>
<li><b>Bitcoin dominance</b>: Bitcoin's share of the total crypto market cap. Rising dominance often means money is hiding in BTC; falling dominance can accompany "altcoin seasons". Altcoins generally move with Bitcoin but with larger swings (higher "beta").</li>
<li><b>Stablecoin supply and flows</b>: growing stablecoin supply on exchanges can signal buying power; shrinking can signal exit.</li>
<li><b>Exchange inflows and outflows</b>: coins moving onto exchanges can precede selling; moving off can signal holding.</li>
<li><b>ETF flows</b>: where regulated Bitcoin and Ethereum funds exist, daily inflows and outflows influence the market.</li>
</ul>

<h3>The wider world</h3>
<p>Crypto does not live in isolation. Interest-rate decisions, inflation reports, the US dollar, stock-market sentiment and regulatory news often move it. Keep a calendar of key events and token unlock dates, and reduce risk around them.</p>

${B.ex('<p>Bitcoin has rallied for a week. Open interest is at a record high, funding is extremely positive and the Fear and Greed Index reads "Extreme greed". Nothing guarantees a fall, but the position is crowded: a modest dip can trigger a chain of long liquidations. A trader who sees this may take profit on part of a long, avoid chasing, or wait for a pullback to enter.</p>')}

${B.warn('<p>Indicators describe the crowd, they do not predict it. "Overheated" can stay overheated for weeks. Always combine them with price structure and a stop-loss.</p>')}

${B.take(['Open interest plus price direction shows whether trends have fresh fuel.', 'Funding rates reveal crowded trades and cost money to hold.', 'Sentiment gauges are contrarian clues at extremes, not exact timing tools.', 'Altcoins are higher-beta versions of Bitcoin; watch dominance and macro events.'])}`,
      q: [
        ['Price rising with open interest falling suggests…', ['New longs entering strongly', 'Shorts closing (a squeeze), so the rally may be weaker', 'A guaranteed top', 'A stablecoin issue'], 1, 'Falling OI during a rise often means short covering rather than fresh buying.'],
        ['A very high positive funding rate means…', ['Shorts pay longs', 'Longs pay shorts and the market is crowded long', 'The exchange is broken', 'Spot prices are zero'], 1, 'Positive funding means longs pay shorts, which shows heavy long positioning.'],
        ['How should you use the Fear and Greed Index?', ['As an exact buy/sell signal', 'As a contrarian clue at extremes, combined with other analysis', 'Never', 'To set leverage'], 1, 'It reflects crowd mood and can stay extreme for a long time.']
      ]
    },
    {
      id: 'd4', m: 14, t: 'Crypto trading strategies',
      hook: 'Trend, pullback, range, breakout and event trades adapted to crypto, with a full example trade calculated step by step.',
      body: `
<p>The core ideas from the Day Trader path (trend, levels, breakouts, ranges) apply to crypto charts as well, with a few adjustments: bigger moves, 24/7 trading, and extra data like funding and open interest. Here are the main styles.</p>

<h3>1. Trend following on higher timeframes</h3>
<p>Use the 4-hour or daily chart. Enter when price breaks to new highs with rising volume and above a rising moving average (for example 50 EMA). Place the stop under the last higher low, and trail it. Fewer trades, fewer fees, less screen time, and it suits people with jobs. It also suffers in choppy periods.</p>

<h3>2. Pullback entries</h3>
<p>In an uptrend, wait for a drop toward a moving average or a prior resistance that has become support, plus signs that sellers are fading (lower volume, rejection wick). Entry on the reversal candle, stop under the pullback low. Improves reward-to-risk compared with chasing breakouts.</p>

<h3>3. Range trading</h3>
<p>Sideways markets are common in crypto. Define a clear support and resistance zone, buy near the bottom, sell near the top, and exit if price closes outside the range. Combine with mean-reversion signals such as funding extremes.</p>

<h3>4. Breakout and retest</h3>
<p>Price compresses (a tightening range or falling volatility) and then breaks out. Many false breakouts occur, so wait for a candle close beyond the level, then ideally a <b>retest</b> that holds before entering with a stop just inside the old range.</p>

<h3>5. Funding and crowd fades</h3>
<p>When funding and open interest are extreme and price stalls, some traders fade the crowd (take a small counter-trend position or reduce longs). This is advanced and dangerous without strict stops, because crowded trades can keep going.</p>

<h3>6. Event and unlock trades</h3>
<p>Scheduled events (token unlocks, upgrades, listings, central bank meetings) create predictable volatility, but not predictable direction. Beginners usually do better by reducing size or staying out.</p>

<h3>7. Bots and grids</h3>
<p>Automated strategies such as grid bots place a ladder of buy and sell orders in a range. They can work in sideways markets but lose during strong trends. We cover automation in lesson 6.</p>

<h3>A complete example trade (step by step)</h3>
<p>Imagine a coin trading at <b>100.00</b>. The daily trend is up. Price pulled back to a prior breakout level at 96 and formed a bullish candle. You have <b>€5,000</b> and your rule is to risk <b>1% (€50)</b> per trade.</p>
<ol>
<li>Entry: 97.00 (above the bullish candle's high).</li>
<li>Stop: 94.00, below the pullback low (3.00 away from entry).</li>
<li>Position size = €50 ÷ 3.00 = <b>16.67 units</b> (about €1,617 position, or 0.32x of your account).</li>
<li>Target: the recent high at 106 (9.00 away), a reward-to-risk of <b>3:1</b>.</li>
<li>If wrong, you lose €50 (1%). If right, you gain about €150 (3%). With a 40% win rate this is still profitable: 0.4×3 − 0.6×1 = +0.6R.</li>
</ol>
<p>Check it with the calculator (the numbers are pre-filled differently, so set them to this example):</p>
${B.w('possize')}

<h3>Which style fits you?</h3>
${B.tbl(['Your situation', 'Better fit'], [
        ['Full-time job, limited time', 'Trend following or pullbacks on 4h / daily charts, with alerts'],
        ['Likes calm, rule-based routines', 'Range trading with strict levels'],
        ['Short on patience', 'Be careful: choose a style that limits the number of daily trades'],
        ['Wants to trade 24/7', 'Use bots with strict limits and still sleep; avoid overnight leverage']
      ])}

${B.warn('<p>Do not copy signals from groups or influencers. Even if they are honest, you cannot control their entries, they may profit from your buying, and you do not learn the process. Build and test your own rules.</p>')}

${B.take(['Higher-timeframe trend and pullback strategies fit most people best.', 'Wait for confirmation on breakouts and prefer retests.', 'Calculate every trade: entry, stop, size, target and reward-to-risk before entering.', 'Avoid event trades and crowd fades until you have a proven process.'])}`,
      q: [
        ['In the worked example, why is the position size 16.67 units?', ['Because leverage is 10x', '€50 risk divided by a 3.00 stop distance', 'Because price is 100', 'Random choice'], 1, 'Position size = risk amount ÷ (entry − stop) = 50 ÷ 3.'],
        ['What does waiting for a retest after a breakout help with?', ['Avoiding fees', 'Reducing the chance of buying a false breakout', 'Guaranteeing a win', 'Increasing leverage'], 1, 'If price returns and the level holds, the breakout is more credible.'],
        ['Which approach suits a trader with a full-time job?', ['Scalping 1-minute charts all day', 'Trading 4h or daily charts with alerts and fixed stops', 'Using 100x leverage', 'Following random signals'], 1, 'Slower timeframes need less screen time and have lower costs.']
      ]
    },
    {
      id: 'd5', m: 13, t: 'Risk management for volatile markets',
      hook: 'Everything from the Day Trader risk lesson, plus the special dangers of crypto: stablecoins, exchanges, correlation and weekends.',
      body: `
<p>The core rules still apply: risk a small fixed percent per trade, place stops by structure, think in R, cap daily losses, and never add to losers. Crypto adds several extra dangers, so adapt.</p>

<h3>1. Size by volatility</h3>
<p>Crypto assets differ enormously in how far they move. Use the <b>ATR</b> (average true range) to set stops, then let your risk rule set the size. A coin with a 10% average daily range needs a wider stop and therefore a smaller position than one with a 3% range, if you want the same risk in euros.</p>

<h3>2. Correlation: the diversification illusion</h3>
<p>In sell-offs, almost everything falls together: altcoins often drop faster than Bitcoin. Holding ten long positions in ten altcoins is effectively one big long position. Limit your <b>total open risk</b> (for example 3 to 5% across all trades) and consider the whole portfolio, not each trade.</p>

<h3>3. Counterparty and platform risk</h3>
<ul>
<li><b>Exchange risk</b>: exchanges can be hacked, restrict withdrawals or collapse (FTX, 2022). Do not keep all funds on one platform. Keep only trading capital on exchanges, withdraw profits.</li>
<li><b>Stablecoin risk</b>: a "stable" coin can lose its peg (UST in 2022; USDC briefly in 2023). Diversify across issuers and prefer reputable ones.</li>
<li><b>Smart-contract risk</b>: DeFi protocols can be hacked.</li>
<li><b>API key safety</b>: when using bots, create keys with trading permission only (withdrawals disabled), restrict by IP address, and never share them.</li>
</ul>

<h3>4. Execution risks</h3>
<ul>
<li><b>Wicks and stop hunts</b>: price sometimes spikes through obvious levels and snaps back. Place stops beyond the level plus a volatility buffer.</li>
<li><b>Slippage in thin markets</b>: small coins and weekends can fill your order far from the price shown. Use limit orders and smaller sizes.</li>
<li><b>Exchange downtime</b>: platforms may freeze during volatility. Have a plan B, and avoid over-reliance on a single venue.</li>
</ul>

<h3>5. Funding and fee drag</h3>
<p>Holding leveraged perpetual positions for days can accumulate funding costs. Always include funding and fees when calculating expected profit, especially for strategies with small targets.</p>

<h3>6. Withdraw profits</h3>
<p>Profits left on screen are not real. Adopt a rule such as "withdraw 30% of monthly profits to a safe wallet or bank account". It protects against exchange problems, reduces the urge to over-risk, and makes success tangible.</p>

<h3>7. Take weekends and sleep seriously</h3>
<p>If you hold positions overnight or over the weekend, make sure they have stops, reduced size and no high leverage. Many liquidations happen while the trader is asleep.</p>

${B.ex('<p>Elena has €10,000 on one exchange and holds five altcoin longs, each risking 1%, so she thinks she has 5% total risk. A market-wide drop hits all five stops within hours: she loses 5% in one morning, not "1% five different times". She also had her entire balance on that platform. After this, she limits total open risk to 3%, keeps only half her capital on the exchange, and withdraws weekly profits.</p>')}

${B.w('checklist', { key: 'd5', title: 'Pre-trade checklist for crypto traders', accent: 'ct', items: 'The daily and 4-hour trends support my direction|My stop is placed by structure plus a volatility buffer|My size follows my fixed risk percent, not the leverage number|Total open risk across all trades stays within my limit|I checked funding rate, open interest and any upcoming events or unlocks|I am using isolated margin and my stop is far inside the liquidation price|I do not hold more capital on the exchange than I need|I am calm, rested and not chasing a move' })}

${B.take(['Size by volatility: wider stops mean smaller positions.', 'Altcoins are highly correlated, so total open risk is what matters.', 'Reduce platform risk: spread funds, restrict API keys and withdraw profits.', 'Remember funding, slippage, weekends and exchange outages in your calculations.'])}`,
      q: [
        ['Why is holding many altcoin positions not true diversification in a crash?', ['They all fall to zero', 'They tend to fall together, often more than Bitcoin', 'They are regulated', 'They pay funding'], 1, 'High correlation in sell-offs means your positions act like one large bet.'],
        ['Which API key setup is safest for a trading bot?', ['Withdrawal permission enabled, no IP limit', 'Trading permission only, withdrawals disabled, IP restricted', 'Full access for convenience', 'Share the key with a friend for backup'], 1, 'If keys leak, an attacker cannot withdraw funds.'],
        ['Why withdraw profits regularly?', ['It increases leverage', 'It protects gains from exchange failures and makes profits real', 'It avoids fees', 'It is required by law'], 1, 'Profits sitting on a platform are exposed to counterparty risk.']
      ]
    },
    {
      id: 'd6', m: 14, t: 'Bots and automation: what they can and cannot do',
      hook: 'Bots can execute rules tirelessly. They cannot create an edge from nothing. Learn to use them and to spot the scams.',
      body: `
<p>Crypto's 24/7 nature makes automation attractive. A <b>trading bot</b> is software that places orders for you according to rules. Used well, it brings discipline and speed. Used badly, it automates losses at lightning speed.</p>

<h3>What bots actually do</h3>
<ul>
<li><b>DCA bots</b>: buy a fixed amount on a schedule. Simple and low risk.</li>
<li><b>Grid bots</b>: place buy and sell orders at set intervals inside a price range, harvesting small swings. Works in sideways markets; loses in strong trends and if price leaves the range.</li>
<li><b>Trend-following / signal bots</b>: enter and exit based on indicators or conditions (moving-average crossovers, breakouts).</li>
<li><b>Arbitrage bots</b>: exploit price differences between venues. Needs speed, capital and infrastructure; margins are thin.</li>
<li><b>Market-making bots</b>: quote both buy and sell prices to earn the spread. Professional territory.</li>
<li><b>Copy trading</b>: automatically mirror another trader's positions. You inherit their risk and their fees, and past results are not a promise.</li>
</ul>

<h3>What a bot gives you</h3>
<ol>
<li><b>Discipline</b>: no fear, no FOMO, no revenge trades. It follows the rules.</li>
<li><b>Coverage</b>: works while you sleep.</li>
<li><b>Speed and consistency</b>: precise execution and logging of every trade.</li>
<li><b>Testability</b>: rules written in code can be backtested against history.</li>
</ol>

<h3>What a bot cannot do</h3>
<ul>
<li><b>It does not create an edge.</b> A bad strategy runs perfectly... straight into losses.</li>
<li><b>It does not remove risk.</b> Markets can change regime, exchanges can fail, bugs can occur.</li>
<li><b>It cannot predict the future.</b> Past performance on a backtest is not a promise.</li>
<li><b>It does not replace your responsibility</b> for monitoring risk limits.</li>
</ul>

<h3>How to evaluate a bot (or a strategy sold with one)</h3>
${B.tbl(['Question', 'Good sign', 'Warning sign'], [
        ['Are the rules explained?', 'Clear logic you understand', 'A "secret algorithm" with no explanation'],
        ['Is there evidence?', 'Backtests with costs + forward/live results, drawdowns shown', 'Screenshots, cherry-picked months, "100% win rate"'],
        ['What are the claims?', 'Honest about risk and losing periods', '"Guaranteed profits", "passive income", pressure to act now'],
        ['Money handling', 'Funds stay on your exchange account; trade-only API keys', 'Asks you to deposit into their wallet or platform'],
        ['Control', 'You can pause, set limits and see every trade', 'No stop controls or transparency']
      ])}

<h3>Backtesting traps (again, because they matter)</h3>
<ul>
<li><b>Overfitting</b>: tuning parameters until the past looks perfect.</li>
<li><b>Ignoring costs</b>: fees, funding and slippage can turn a profitable-looking backtest into a loser.</li>
<li><b>Look-ahead bias</b>: accidentally using information from the future in the rules.</li>
<li><b>Survivorship bias</b>: testing only coins that still exist.</li>
<li><b>Regime change</b>: a rule that worked in 2021 may fail in a quiet market.</li>
</ul>
<p>Use <b>walk-forward testing</b> (design on one period, test on the next), then paper trade, then go live with tiny size and a kill switch (a maximum drawdown that automatically stops the bot).</p>

${B.ex('<p>A grid bot is set between 90 and 110 on a coin trading at 100 and earns small profits in a quiet market for weeks. Then bad news hits, price slides to 70 and stays there. The bot has been buying all the way down and now holds a big loss, with no stop. A human with a plan would have defined a maximum loss and exited. The bot did exactly what it was told. This is why automation needs risk limits built in.</p>')}

${B.warn('<p>The "trading bot" market is full of scams: bots that promise 2% daily returns, require deposits into the seller\'s platform or pay you for recruiting others. If a return is guaranteed, it is not trading. It is a trap.</p>')}

<h3>Optional: a structured programme with a bot</h3>
<p>The creator of this course also offers <b>Trading Lab</b>, an optional paid programme that includes a trading bot designed to help traders apply rules more consistently. It is just one possible tool, not a requirement or a guarantee of results. Details are on the <a href="#lab">Trading Lab page</a>. Whatever you use, apply this lesson's checklist: understand the rules, test with small size, keep trade-only API permissions and set a maximum loss.</p>

${B.take(['Bots execute rules; they do not create an edge or remove risk.', 'Beware of guaranteed-profit claims, secret algorithms and requests to deposit into someone else\'s platform.', 'Backtest with costs, avoid overfitting, forward test, then start tiny with a kill switch.', 'Use trade-only, IP-restricted API keys and keep control of your funds.'])}`,
      q: [
        ['What can a trading bot reliably provide?', ['Guaranteed profits', 'Discipline and consistent execution of your rules', 'Insider information', 'Zero risk'], 1, 'Bots remove emotion and work continuously, but they are only as good as the rules.'],
        ['A seller promises 2% daily returns from their bot and asks you to deposit into their platform. This is…', ['A great opportunity', 'A classic scam pattern', 'Standard industry practice', 'A tax-free product'], 1, 'Guaranteed high returns and deposits into the seller\'s platform are major red flags.'],
        ['Which step comes right after backtesting a strategy responsibly?', ['Going live with maximum leverage', 'Forward testing or paper trading, then very small live size', 'Selling it', 'Ignoring costs'], 1, 'Out-of-sample and live testing at tiny size reveal problems backtests hide.']
      ]
    },
    {
      id: 'd7', m: 11, t: 'Psychology for 24/7 markets',
      hook: 'When the market never sleeps, neither do FOMO and anxiety. Build rules so that you do not burn out or blow up.',
      body: `
<p>Crypto has all the usual trading emotions, plus a few special ones created by constant availability, extreme moves and social media hype.</p>

<h3>Crypto-specific psychological traps</h3>
<ul>
<li><b>FOMO on pumps</b>: a coin rises 40% in a day and everyone talks about it. Entering late usually means buying the top.</li>
<li><b>"Number go up" euphoria</b>: after a rally, feeling invincible leads to bigger size and looser rules.</li>
<li><b>Capitulation</b>: selling everything at the bottom after weeks of pain.</li>
<li><b>Revenge and over-leverage</b>: trying to recover a loss with a larger, leveraged bet.</li>
<li><b>Screen addiction and burnout</b>: checking charts at 3 a.m., constant alerts, poor sleep.</li>
<li><b>Social-media herd</b>: groups and chat rooms amplify emotions and spread bad information.</li>
<li><b>Gambler's mindset</b>: treating trades like casino spins. The thrill of wins can become the point, rather than the process.</li>
</ul>

<h3>Rules for a sustainable routine</h3>
<ol>
<li><b>Define trading hours.</b> Pick windows when you analyse and trade, and switch off outside them.</li>
<li><b>Use alerts instead of staring.</b> Set price alerts at your levels and let the phone watch.</li>
<li><b>Limit trades per day</b> and stop after hitting your daily loss limit.</li>
<li><b>No leveraged overnight positions</b> unless they have stops and small size.</li>
<li><b>Three-strikes rule</b>: three losses in a row means a break of at least an hour (or the rest of the day).</li>
<li><b>Weekend rule</b>: reduce size or stay flat if thin liquidity makes you nervous.</li>
<li><b>Mute the noise.</b> Unfollow hype accounts. Information diet matters.</li>
<li><b>Protect your sleep, exercise, social life.</b> A tired trader trades like an impulsive one.</li>
<li><b>Separate trading money from life money.</b> The less you need the result, the better your decisions.</li>
</ol>

<h3>The journal as a mirror</h3>
<p>Log each trade with your emotional state. After 30 to 50 trades, look at which feelings correlate with losses (FOMO? boredom? late-night trades?). Many traders discover that a few specific behaviours cause most of their losses, and fixing those is the quickest improvement available.</p>
${B.w('journal')}

${B.ex('<p>Noah noticed from his journal that trades after midnight had an average of -0.8R while trades during his planned morning window averaged +0.3R. He stopped trading after 10 p.m. and his results turned from negative to positive without changing his strategy at all.</p>')}

${B.tip('<p>When you feel a strong urge to enter a trade, wait 10 minutes and write down the reason. If it is "I am scared it will go without me", skip it. There is always another setup tomorrow.</p>')}

<h3>When to take a break</h3>
<p>If trading is affecting your sleep, relationships or work, you are betting rent money, or you feel unable to stop, take a break and talk to someone you trust. Problem gambling support services exist in most countries, and trading with the wrong mindset can behave like gambling.</p>

${B.take(['Crypto adds FOMO on pumps, screen addiction and 24/7 temptation.', 'Define trading hours, use alerts, limit trades and respect loss limits.', 'Your journal reveals which emotions and habits cost you money.', 'If trading harms your health or finances, step back and seek help.'])}`,
      q: [
        ['What is a good response to a sudden 40% pump of a coin you do not own?', ['Buy immediately with leverage', 'Do not chase; wait for a setup that fits your rules', 'Borrow money to buy', 'Ask a stranger'], 1, 'Chasing late is a common way to buy tops.'],
        ['Why use price alerts?', ['To watch the screen all night', 'To let your phone watch your levels so you do not need to stare at charts', 'To increase leverage', 'To follow influencers'], 1, 'Alerts reduce screen time and emotional trading.'],
        ['What does the three-strikes rule mean?', ['Three trades per day only', 'After three consecutive losses, take a break', 'Three times leverage', 'Quit trading after three days'], 1, 'A pause stops a streak of emotional decisions.']
      ]
    },
    {
      id: 'd8', m: 12, t: 'Your crypto trading plan and graduation checklist',
      hook: 'Put it all together: a plan, a milestone ladder and the rule that keeps you alive. Then unlock your certificate.',
      body: `
<p>You have covered markets, leverage, signals, strategies, risk, bots and psychology. The last step is a written plan and a path from practice to (maybe) real trading, with milestones you must earn, not assume.</p>

<h3>Your crypto trading plan template</h3>
${B.tbl(['Section', 'What to write'], [
        ['Purpose and capital', 'Why I trade; the amount of risk capital (money I can lose). Maximum percent of my net worth.'],
        ['Markets and products', 'Which coins and pairs; spot only or also futures; maximum leverage (for example 3x)'],
        ['Timeframes and hours', 'Charts I use; trading windows; no-trade times'],
        ['Setups', 'Two or three setups with exact entry, stop and exit rules'],
        ['Risk rules', 'Risk per trade (0.5 to 1%), maximum open risk, daily and weekly loss limits, isolated margin only'],
        ['Platform safety', 'Funds split across venues; 2FA; trade-only API keys; profit withdrawals schedule'],
        ['Routine', 'Pre-trade checklist, journal after every trade, weekly review'],
        ['Psychology rules', 'Three-strikes, no revenge trades, sleep and break rules'],
        ['Pause rule', 'At a drawdown of for example 10 to 15%, stop trading and review for at least a week'],
        ['Taxes and records', 'Export all trades, keep proof of costs, understand local rules']
      ])}

<h3>The milestone ladder</h3>
<ol>
<li><b>Level 1: Study</b>. Complete this path, understand risk and psychology.</li>
<li><b>Level 2: Paper</b>. At least 100 simulated trades with fixed rules and a journal. Positive expectancy and 90% plan adherence.</li>
<li><b>Level 3: Micro live</b>. Trade at about 10% of intended size for another 100 trades. Spot first.</li>
<li><b>Level 4: Consistent</b>. 200+ real trades, positive results after fees, drawdown under control, rules followed.</li>
<li><b>Level 5: Scale carefully</b>. Increase size in small steps, scale back after drawdowns, withdraw profits regularly.</li>
</ol>
${B.ex('<p>Kai completes Level 2 and finds his paper results were positive, but he broke his stop rule in 25% of trades. Instead of going live, he repeats paper trading until plan adherence is above 90%. Three weeks later he starts Level 3 with €500 and a hard rule: pause for a week at -€50. Slow is smooth, smooth is fast.</p>')}

<h3>When to stop</h3>
<p>Trading is not for everyone, and quitting after an honest attempt is a success of discipline, not a failure. Consider stopping or switching to long-term investing if you have hit your pause rule repeatedly, cannot follow your rules after months of effort, or trading is hurting your life. Plenty of people find that a boring, diversified investing plan serves them far better.</p>

${B.w('checklist', { key: 'd8', title: 'Graduation checklist', accent: 'ct', items: 'I wrote my full trading plan including risk rules and a pause rule|I completed at least 100 paper trades with a journal|My paper results show positive expectancy and 90% plan adherence|I use isolated margin and keep leverage low|My exchange accounts have 2FA, whitelists and trade-only API keys|I know how to export my trade history for taxes|I only trade money I can afford to lose' })}

<h3>Go deeper (optional)</h3>
<p>If you want a structured programme with a trading bot built to help apply rules consistently, the creator of this course offers <b>Trading Lab</b> on Gumroad (an optional paid product). This free course already teaches the fundamentals, so use Trading Lab only if you want extra structure, and always keep the risk rules from this path. No programme or bot guarantees profits. See the <a href="#lab">Trading Lab page</a>.</p>

${B.key('<p><b>You finished the Crypto Trader path.</b> The goal was never to make you a gambler with better charts. It was to make you a careful professional-in-training who respects risk first. Now check your progress and get your certificate.</p><p><a class="btn sm" href="#cert">View my certificate</a></p>')}

${B.take(['Write a full plan: capital, products, setups, risk rules, platform safety, routine and pause rule.', 'Climb the ladder: study, paper, micro live, consistent, then scale carefully.', 'Quitting after an honest try is a legitimate, disciplined decision.', 'No programme or bot guarantees profit; your risk rules protect you.'])}`,
      q: [
        ['What should a pause rule trigger?', ['More leverage', 'A stop to trading and a review after a set drawdown', 'Deleting the journal', 'Higher risk per trade'], 1, 'It protects you from tilt and forces you to learn.'],
        ['Which comes first on the milestone ladder?', ['Scaling position size', 'Studying and paper trading', 'Using 50x leverage', 'Copy trading strangers'], 1, 'You earn each step with evidence.'],
        ['Which statement about paid programmes and bots is most accurate?', ['They can guarantee profits', 'They may provide structure but cannot remove risk or guarantee results', 'They replace risk management', 'They are legally required'], 1, 'Any tool is only as good as the rules, testing and discipline you apply.']
      ]
    }
  ]);
})();
