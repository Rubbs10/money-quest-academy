/* Day Trader path: 8 lessons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('trd', [
    {
      id: 'b1', m: 11, t: 'Reality check: the truth about day trading',
      hook: 'Before charts and strategies, an honest look at who wins, who loses and what it really takes.',
      body: `
<p>Social media shows day trading as laptops on beaches and screenshots of huge profits. The reality is closer to a competitive profession where most newcomers lose money. This lesson is not here to scare you away. It is here so that if you continue, you do it with open eyes and a professional attitude.</p>

<h3>What counts as day trading?</h3>
<ul>
<li><b>Scalping</b>: trades lasting seconds to minutes, aiming for tiny gains many times a day.</li>
<li><b>Day trading</b>: positions opened and closed within the same day, none held overnight.</li>
<li><b>Swing trading</b>: positions held from a few days to several weeks. Less screen time, fewer costs.</li>
<li><b>Position trading</b>: weeks to months. This is closer to investing.</li>
</ul>

<h3>What the evidence says</h3>
<ul>
<li>A study of Taiwan's market (Barber, Lee, Liu and Odean) found that fewer than 1% of day traders predictably earned profits after costs year after year.</li>
<li>A study of Brazilian futures day traders who kept going for more than 300 days found that roughly 97% of them lost money.</li>
<li>European regulators require brokers to publish that typically <b>70 to 90% of retail leveraged CFD accounts lose money</b>.</li>
</ul>

<h3>Why most people lose</h3>
<ol>
<li><b>Trading is a zero-sum game before costs and negative-sum after costs.</b> Every profit has a loser on the other side, and commissions, spreads and taxes come out of the total.</li>
<li><b>You are competing with professionals and algorithms</b> with better data, faster execution and more capital.</li>
<li><b>Leverage</b> magnifies mistakes faster than skill can develop.</li>
<li><b>Psychology</b>: fear, greed, boredom and the urge to "win it back".</li>
<li><b>No edge, no risk rules, no plan</b>: gambling with extra steps.</li>
</ol>
${B.warn('<p>If a course, influencer or robot promises "guaranteed" or "consistent daily profits", treat it as a red flag. No honest professional guarantees trading results. Any educational product, including optional ones mentioned later in this course, can help you learn and structure your work, but the risk of loss stays with you.</p>')}

<h3>Trading is a business, not a hobby</h3>
<p>Professionals treat trading like a small company: capital, rules, record-keeping, costs, taxes and a loss budget. They expect to be wrong often, and they earn because winners are larger than losers and because they never risk too much on one idea.</p>

<h3>What you realistically need</h3>
<ul>
<li><b>Risk capital</b>: money you can truly afford to lose. Not rent, not savings, not borrowed money.</li>
<li><b>Time</b>: serious day trading is close to a full-time job during market hours, plus preparation and review.</li>
<li><b>A tested edge</b>: a repeatable way to be right slightly more, or win more than you lose, after costs.</li>
<li><b>Process</b>: written rules, a journal, a review routine.</li>
<li><b>A stable base</b>: an income or investments outside trading, so pressure does not warp your decisions.</li>
</ul>

${B.ex('<p>Imagine two people each start with €5,000. Alex risks €250 (5%) on each trade chasing big wins and loses six trades in a row: down 26%. Sam risks €25 (0.5%) per trade and loses the same six: down 3%. Sam is still calm, still in the game and still learning. Alex is tilted and about to make it worse. Survival is the first skill.</p>')}

<h3>A sensible way forward</h3>
<ol>
<li>Build your investing foundation first. Most people should invest, and trade only with a small slice (for example under 5 to 10% of their wealth).</li>
<li>Learn the craft in this path.</li>
<li>Practise on a simulator for at least 100 trades.</li>
<li>Trade tiny real size. Prove you can follow your rules before you scale.</li>
</ol>

${B.w('checklist', { key: 'b1', title: 'Am I ready to even start learning to trade?', accent: 'trd', items: 'I have an emergency fund and no high-interest debt|The money I trade is money I can afford to lose completely|I understand most beginners lose money and I accept it|I will paper trade for at least 100 trades before risking real money|I will write rules and keep a journal|I am not trying to solve a financial emergency with trading' })}

${B.take(['Most day traders lose money; costs and leverage make it harder.', 'Treat trading as a business with risk capital, rules and records.', 'Never trade money you need. Survive first, profit second.', 'Practise on a simulator, then trade tiny size before scaling.'])}`,
      q: [
        ['Why is trading described as "negative-sum" after costs?', ['Because markets always fall', 'Because every winner has a loser and costs are taken out of the total', 'Because brokers lend money', 'Because stocks do not move'], 1, 'Spreads, commissions and taxes reduce the total available to all traders.'],
        ['Which money is appropriate for trading?', ['Next month\'s rent', 'Borrowed money', 'Risk capital you can afford to lose', 'Your emergency fund'], 2, 'Only money you can lose without hurting your life belongs in speculation.'],
        ['What is a healthy first step after learning the basics of trading?', ['Use maximum leverage', 'Practise on a simulator for 100+ trades', 'Quit your job', 'Follow signal sellers'], 1, 'A simulator lets you learn from mistakes at zero cost.']
      ]
    },
    {
      id: 'b2', m: 14, t: 'How markets work: orders, spreads and leverage',
      hook: 'What actually happens between your click on "buy" and the trade. Understand the plumbing so it does not surprise you.',
      body: `
<p>A market is a place where buyers and sellers meet. Prices move because of the balance between those two groups. To trade well, you need to understand the mechanics that decide what price you actually get.</p>

<h3>Bid, ask and spread</h3>
<p>Every instrument has two live prices: the <b>bid</b> (the highest price buyers will pay, which is what you receive when you sell) and the <b>ask</b> (the lowest price sellers want, which is what you pay when you buy). The difference is the <b>spread</b>.</p>
${B.ex('<p>A stock shows bid €49.98 and ask €50.02. You buy 200 shares at €50.02 (€10,004). If you immediately sell, you get €49.98 (€9,996). You just lost €8 for doing nothing. That is the spread cost, on top of any commission. A scalper trading 20 times a day pays this 20 times, so the market has to move more than the cost just for you to break even.</p>')}

<h3>Liquidity, volume and slippage</h3>
<ul>
<li><b>Liquidity</b>: how easily you can buy or sell without moving the price. Big stocks and major currency pairs are very liquid; small stocks and obscure tokens are not.</li>
<li><b>Volume</b>: how many units traded. Higher volume usually means tighter spreads and more reliable price moves.</li>
<li><b>Slippage</b>: the difference between the price you expected and the price you got, especially in fast markets or with large orders.</li>
</ul>

<h3>Order types</h3>
${B.tbl(['Order', 'What it does', 'Watch out'], [
        ['Market', 'Buy or sell immediately at the best available price', 'Price can slip in fast or thin markets'],
        ['Limit', 'Buy or sell only at your price or better', 'It may never fill if price does not reach it'],
        ['Stop (stop-loss)', 'Becomes a market order when price hits your stop level', 'Can fill worse than the stop in gaps'],
        ['Stop-limit', 'Becomes a limit order at the stop level', 'May not fill at all in a fast move'],
        ['Trailing stop', 'Stop that follows price at a set distance', 'Too tight and normal noise stops you out']
      ])}

<h3>Long, short and leverage</h3>
<ul>
<li><b>Going long</b>: you buy, hoping the price rises.</li>
<li><b>Going short</b>: you sell something you borrowed, hoping to buy it back cheaper. Losses on a short are theoretically unlimited because price can keep rising.</li>
<li><b>Margin and leverage</b>: the broker lets you control a position larger than your cash. With 10:1 leverage, €1,000 controls €10,000, so a 10% move against you wipes out your entire deposit.</li>
</ul>
<p>In the EU, regulators cap leverage for retail clients on leveraged products (CFDs): 30:1 for major currency pairs, 20:1 for other pairs, gold and major indices, 10:1 for other commodities and indices, 5:1 for individual shares and 2:1 for crypto-assets. Brokers must also close positions when margin falls to 50% and provide negative balance protection for retail clients. Other countries have different rules. In the US, accounts that day trade frequently have historically faced a minimum equity requirement, and these rules have been under revision, so always check current regulations with your broker.</p>

<h3>Instruments you can day trade</h3>
<ul>
<li><b>Stocks and ETFs</b>: simple, transparent, often commission-based.</li>
<li><b>Forex</b>: currency pairs, open 24 hours on weekdays, leveraged.</li>
<li><b>Futures</b>: standardised contracts on indices, commodities and rates. Very liquid, very leveraged.</li>
<li><b>Options</b>: contracts giving the right to buy or sell later. Complex, and not for beginners.</li>
<li><b>CFDs</b>: contracts for difference. A leveraged agreement with a broker rather than ownership. Availability and rules differ by country and they carry high risk.</li>
</ul>

<h3>When markets are busy</h3>
<p>Most day trading happens near the open and close of a market session, when volume and volatility are highest. The middle of the day is often quieter and choppier. Economic data releases (jobs, inflation, central bank decisions) cause sudden spikes and wider spreads, so many traders avoid or reduce size around them.</p>

${B.warn('<p>Leverage is the number one account killer. It does not make you smarter or the market kinder, it only speeds up whatever happens.</p>')}

${B.take(['You buy at the ask and sell at the bid; the spread is a real cost on every trade.', 'Liquidity and volume decide how easily and cheaply you can trade.', 'Learn order types: limit gives price control, stop-loss limits risk but can slip.', 'Leverage multiplies both gains and losses; regulators cap it for a reason.'])}`,
      q: [
        ['You pay the ask and receive the bid. The difference between them is…', ['Commission', 'The spread', 'Slippage', 'Margin'], 1, 'The spread is a built-in cost every time you buy and sell.'],
        ['With 20:1 leverage, a move of how much against you can wipe out your deposit (roughly)?', ['20%', '5%', '50%', '1%'], 1, '100% ÷ 20 = 5%, before fees and margin rules.'],
        ['Which order lets you control the maximum price you pay?', ['Market order', 'Limit order', 'Stop-loss', 'Trailing stop'], 1, 'A limit order only executes at your price or better, but may not fill.']
      ]
    },
    {
      id: 'b3', m: 13, t: 'Reading price charts: candlesticks, trends and levels',
      hook: 'Learn the visual language of price and read the story each candle tells.',
      body: `
<p>A price chart is a record of the battle between buyers and sellers. The most popular type is the <b>candlestick chart</b>, invented by Japanese rice traders centuries ago. Each candle summarises one period (one minute, one hour, one day).</p>

<h3>Anatomy of a candle</h3>
<ul>
<li><b>Open</b>: price at the start of the period.</li>
<li><b>Close</b>: price at the end.</li>
<li><b>High / Low</b>: the extremes, drawn as thin lines called wicks or shadows.</li>
<li>The <b>body</b> is the box between open and close. Green (or hollow) means close above open; red means close below open.</li>
</ul>
<p>Build one yourself and see how shapes change meaning:</p>
${B.w('candles')}

<h3>Trend: the market\'s direction</h3>
<p>The simplest and most useful concept is <b>trend</b>.</p>
<ul>
<li><b>Uptrend</b>: a staircase of higher highs and higher lows.</li>
<li><b>Downtrend</b>: lower highs and lower lows.</li>
<li><b>Range (sideways)</b>: price bouncing between a floor and a ceiling.</li>
</ul>
${B.key('<p><b>"The trend is your friend."</b> Trading in the direction of the larger trend usually gives better odds than fighting it. Most beginners try to pick tops and bottoms, and get run over.</p>')}

<h3>Support and resistance</h3>
<p><b>Support</b> is a price area where buyers have repeatedly stepped in, like a floor. <b>Resistance</b> is where sellers repeatedly appeared, like a ceiling. These are zones, not exact lines. When price breaks through, old resistance often becomes new support (and vice versa). Because many traders watch the same obvious levels, they tend to matter.</p>

<h3>Volume: the confirmation</h3>
<p>A move on strong volume shows broad participation and is more trustworthy. A breakout on weak volume often fails. Look for volume rising in the direction of the trend and drying up in pullbacks.</p>

<h3>Timeframes</h3>
<p>Every chart can be viewed at different timeframes (1-minute, 5-minute, 1-hour, daily). Professionals use <b>multi-timeframe analysis</b>: check the daily chart for the trend and key levels, then use a smaller chart (like 5 or 15 minutes) to time entries. A pattern on a 1-minute chart is far less reliable than on a daily chart.</p>

<h3>Common candle signals (use with care)</h3>
<ul>
<li><b>Doji</b>: open and close almost equal. Indecision.</li>
<li><b>Hammer / pin bar</b>: long lower wick. Possible rejection of lower prices.</li>
<li><b>Shooting star</b>: long upper wick. Possible rejection of higher prices.</li>
<li><b>Engulfing</b>: a candle whose body fully covers the previous candle's body. Possible shift in control.</li>
</ul>
${B.warn('<p>No candle pattern works alone. Its meaning depends on <b>context</b>: where it appears (at a key level?), what trend it is in, and the volume behind it. A "hammer" in the middle of nowhere means almost nothing.</p>')}

${B.ex('<p>A stock has risen in a clean staircase for two weeks. It pulls back to a previous resistance level that is now acting as support, forms a hammer candle there on higher-than-average volume, and the next candle closes up. That combination (trend + support + rejection candle + volume) is a far stronger story than any one piece alone.</p>')}

${B.take(['A candle shows open, high, low and close for one period.', 'Identify trend first (higher highs and lows, or lower), then levels.', 'Support and resistance are zones where price reacted before.', 'Volume confirms moves, and bigger timeframes carry more weight.', 'Candle patterns need context to mean anything.'])}`,
      q: [
        ['A candle has a long lower wick and a small body near the top. This shape is called…', ['A hammer-like candle', 'A shooting star', 'A gap', 'A trend line'], 0, 'Long lower shadow plus small body is a hammer shape, suggesting rejection of lower prices.'],
        ['What defines an uptrend?', ['Price above zero', 'Higher highs and higher lows', 'Lower highs and lower lows', 'Only green candles'], 1, 'The staircase of rising highs and lows is the basic definition.'],
        ['Why use several timeframes?', ['To confuse yourself', 'Higher timeframes show the main trend and key levels; lower ones help time entries', 'Because brokers require it', 'They always give identical signals'], 1, 'Big-picture context improves entries and avoids trading against strong trends.']
      ]
    },
    {
      id: 'b4', m: 12, t: 'Indicators and tools (and their limits)',
      hook: 'Moving averages, RSI, MACD and friends: what they measure, how traders use them, and why more is not better.',
      body: `
<p>Indicators are mathematical formulas applied to price (and sometimes volume) to make patterns easier to see. They are tools for <b>describing</b> what has happened, not crystal balls. Because they use past data, they all lag price to some degree.</p>

<h3>The essential five</h3>
${B.tbl(['Indicator', 'What it shows', 'Common use', 'Limits'], [
        ['Moving average (SMA / EMA)', 'Average price over N periods. EMA reacts faster', 'Trend direction; dynamic support; crossovers (e.g. 50 vs 200)', 'Lags; whipsaws in ranges'],
        ['RSI (14)', 'Momentum from 0 to 100', 'Above 70 "overbought", below 30 "oversold"; divergences', 'In strong trends RSI can stay "overbought" for long'],
        ['MACD (12, 26, 9)', 'Difference between two EMAs and its signal line', 'Momentum shifts and trend strength', 'Lagging; noisy in ranges'],
        ['Bollinger Bands (20, 2)', 'Moving average ± 2 standard deviations', 'Volatility squeezes and expansions', 'Touching a band is not an automatic reversal'],
        ['VWAP', 'Volume-weighted average price for the day', 'Intraday "fair value"; institutions benchmark to it', 'Intraday only; resets each day'],
        ['ATR (14)', 'Average true range: typical movement size', 'Setting stop distance and position size', 'Does not show direction']
      ])}

<h3>Moving averages in practice</h3>
<p>The slope of a moving average gives you a quick read on trend: price above a rising 20 or 50 EMA suggests an uptrend. In the paper trading lab later, you can switch on a 20-candle average to see how price tends to respect it. A "golden cross" (50-day average crossing above 200-day) and "death cross" (the reverse) are widely watched, but they come late. By the time they appear, much of the move has often happened.</p>

<h3>RSI done properly</h3>
<p>Beginners see RSI over 70 and sell immediately. This is a classic trap: in strong uptrends RSI can stay above 70 for weeks. A better use is to look for <b>divergence</b>: price makes a higher high but RSI makes a lower high, signalling weakening momentum. Even then, wait for price to confirm.</p>

<h3>ATR for stops and size</h3>
<p>If a stock's ATR is €1.50, normal movement is about €1.50 per period. Placing your stop €0.30 away means ordinary noise will hit it. A stop of 1 to 2 times ATR beyond a sensible structure point survives noise better. Wider stop means smaller position size, so the euro risk stays constant.</p>

<h3>Why more indicators make you worse</h3>
<p>Many indicators are different views of the same price data. Stacking five momentum indicators does not give five independent confirmations. It gives the same signal five times, plus confusion when they disagree. Experienced traders usually use <b>price action plus two or three simple tools</b>.</p>
${B.ex('<p>Chris has 9 indicators on his chart, and 3 are saying buy, 4 sell and 2 neutral. He waits and misses the move. Dana uses a 20 EMA for trend, volume, and key levels. When price pulls back to the 20 EMA in an uptrend on declining volume, she looks for entry. Simple, repeatable, easy to test.</p>')}

${B.tip('<p>Before adding any indicator, write down the specific question it answers (trend? momentum? volatility?). If you cannot, remove it.</p>')}

${B.take(['Indicators summarise past price; none predict the future.', 'Know the job of each: trend (moving averages), momentum (RSI, MACD), volatility (ATR, Bollinger), fair value (VWAP).', 'RSI "overbought" is not a sell signal in a strong trend.', 'Use ATR to place stops outside normal noise and size positions properly.', 'Fewer, simpler tools beat cluttered charts.'])}`,
      q: [
        ['What does ATR help you do?', ['Predict direction', 'Measure typical price movement to set stops and position size', 'Guarantee profit', 'Find news'], 1, 'ATR measures volatility, which helps size stops sensibly.'],
        ['Why can RSI above 70 be a poor automatic sell signal?', ['It never gets above 70', 'In strong uptrends it can remain high for a long time while price keeps rising', 'It is broken', 'Because 70 is always wrong'], 1, 'Overbought readings can persist in strong trends.'],
        ['What is the problem with stacking many similar indicators?', ['They are too cheap', 'They give the same information repeatedly and create confusion when they disagree', 'They slow the computer only', 'There is no problem'], 1, 'They are derived from the same price data, so they are not independent confirmations.']
      ]
    },
    {
      id: 'b5', m: 14, t: 'Trading strategies: find a style that fits you',
      hook: 'Trend, pullback, breakout, range, opening-range: how each works, where it fails, and how to test it before risking a cent.',
      body: `
<p>A <b>strategy</b> is a complete set of rules: what you trade, when you enter, where you place your stop, where you take profit, and how big the position is. Trading without rules is guessing. Here are the classic styles.</p>

<h3>1. Trend following</h3>
<p><b>Idea:</b> trends tend to continue. Buy strength in an uptrend, sell weakness in a downtrend.<br><b>Entry:</b> price breaks above a recent high with a rising moving average.<br><b>Stop:</b> below the latest higher low.<br><b>Fails when:</b> markets chop sideways. Expect many small losses and a few large winners, with a lower win rate.</p>

<h3>2. Pullback (buying the dip in a trend)</h3>
<p><b>Idea:</b> in a strong trend, short dips offer better entries.<br><b>Entry:</b> price pulls back to a moving average or support in an uptrend and shows a reversal candle.<br><b>Stop:</b> below the pullback low.<br><b>Fails when:</b> the pullback becomes a trend reversal.</p>

<h3>3. Breakout</h3>
<p><b>Idea:</b> after consolidation, price explodes out of its range.<br><b>Entry:</b> a close above resistance on high volume (or a retest of the broken level).<br><b>Stop:</b> back inside the range.<br><b>Fails when:</b> false breakouts (price pokes through and falls back). Wait for confirmation and volume.</p>

<h3>4. Range trading / mean reversion</h3>
<p><b>Idea:</b> when there is no trend, price returns to the middle. Sell near resistance, buy near support.<br><b>Stop:</b> just outside the range.<br><b>Fails when:</b> the range finally breaks and the trend begins, which is why a stop is mandatory.</p>

<h3>5. Opening-range breakout</h3>
<p><b>Idea:</b> mark the high and low of the first 15 to 30 minutes after the market opens. A break of either side with volume can lead to a day-long move.<br><b>Stop:</b> the other side or the middle of the range.<br><b>Fails when:</b> the market is indecisive on a quiet news day.</p>

<h3>6. Scalping</h3>
<p><b>Idea:</b> many tiny profits on very short moves. Requires tight spreads, fast execution, low fees and intense focus. Costs eat scalpers alive, and beginners are very unlikely to profit.</p>

<h3>News and earnings trades</h3>
<p>Prices jump around releases, spreads widen and slippage rises. This is an advanced style. Most beginners should simply stay out of positions during major events.</p>

<h3>Choosing a style</h3>
${B.tbl(['Style', 'Win rate', 'Winner size', 'Screen time', 'Fits you if…'], [
        ['Trend following', 'Lower (35 to 45%)', 'Large', 'Low to medium', 'You are patient and accept small losses'],
        ['Pullback', 'Medium', 'Medium', 'Medium', 'You like waiting for a good price'],
        ['Breakout', 'Medium to low', 'Medium to large', 'Medium', 'You can handle false breakouts'],
        ['Range', 'Higher (50 to 65%)', 'Small', 'Medium', 'You prefer frequent small wins and strict stops'],
        ['Scalping', 'Varies', 'Tiny', 'Very high', 'Almost never a beginner choice']
      ])}

<h3>Write the rulebook (a trade setup template)</h3>
<ol>
<li><b>Market condition</b>: what must be true? (e.g. daily uptrend)</li>
<li><b>Trigger</b>: exact event to enter (e.g. close above the previous candle's high after a pullback)</li>
<li><b>Stop-loss</b>: exact price rule</li>
<li><b>Target / exit</b>: fixed multiple of risk, trailing, or level</li>
<li><b>Position size</b>: risk percent ÷ stop distance</li>
<li><b>When NOT to trade</b>: major news, low volume, after hitting daily loss</li>
</ol>

<h3>Backtesting basics</h3>
<p><b>Backtesting</b> means applying your rules to past data to see how they would have performed. Done well it is very useful. Done badly it creates false confidence:</p>
<ul>
<li>Include costs: spread, commissions and slippage.</li>
<li>Use enough trades (100+). Ten trades prove nothing.</li>
<li>Avoid <b>overfitting</b>: do not endlessly tweak parameters until the past looks perfect. Test on data you did not use to design the rules ("out-of-sample").</li>
<li>Avoid <b>look-ahead bias</b>: do not use information that was not available at the time.</li>
<li>Follow with forward testing (paper trading) before real money.</li>
</ul>

${B.warn('<p>A strategy that worked in a bull market may fail in a range or a crash. Markets change regimes. Expect your edge to need maintenance.</p>')}

${B.take(['A strategy is a full rulebook: market condition, trigger, stop, exit, size and when not to trade.', 'Trend and pullback strategies win less often but bigger; range strategies win more often but smaller.', 'Backtest with costs and enough trades, avoid overfitting, then paper trade.', 'Pick one simple style and master it rather than hopping between many.'])}`,
      q: [
        ['A trend-following system typically has…', ['Very high win rate and tiny winners', 'A lower win rate but larger winners than losers', 'No stop-loss', 'Zero losing trades'], 1, 'It accepts many small losses to catch a few big moves.'],
        ['What is overfitting in backtesting?', ['Using too few indicators', 'Tuning rules until they fit past data perfectly, but fail on new data', 'Trading too little', 'Using a demo account'], 1, 'The rules capture past noise rather than a real edge.'],
        ['Which is a mandatory part of any breakout or range strategy?', ['A stop-loss', 'Guaranteed profit', 'A friend\'s tip', 'Maximum leverage'], 0, 'Every strategy can fail; the stop defines your maximum loss.']
      ]
    },
    {
      id: 'b6', m: 16, t: 'Risk management: the only edge you fully control',
      hook: 'You cannot control the market, but you can control how much you lose when you are wrong. Two calculators will show you why that wins careers.',
      body: `
<p>Ask professional traders what separates survivors from the rest and the answer is almost always the same: <b>risk management</b>. You can have a mediocre strategy and survive with good risk control. You cannot survive a great strategy with bad risk control.</p>

<h3>Rule 1: Risk a small fixed percent per trade</h3>
<p>The most common rule is to risk <b>0.5% to 1% of your account</b> on any single trade (2% at most). If you have €5,000 and risk 1%, the most you will lose on a trade is €50. That keeps losing streaks survivable.</p>
${B.ex('<p>Seven losses in a row sounds extreme, but happens to every trader. If you risk 1% each, the account drops about 7%. If you risk 10% each, it drops about 52% and you need a 109% gain just to recover. Position size is how you stay in the game while you learn.</p>')}

<h3>Rule 2: The stop decides the size</h3>
<p>You first decide where the trade is proven wrong (the stop), and <i>then</i> calculate how many units to buy so that hitting the stop costs only your chosen risk. The formula:</p>
<p><b>Position size = (account × risk %) ÷ (entry price − stop price)</b></p>
${B.w('possize')}

<h3>Rule 3: Think in R</h3>
<p>1R equals your initial risk on a trade. If you risk €50 and make €100, that is +2R. Measuring in R makes results comparable across trades and account sizes. It also lets you define reward-to-risk before entering: only take trades that pay at least 1.5 to 2R if right.</p>

<h3>Rule 4: Know your expectancy</h3>
<p><b>Expectancy</b> is the average result per trade in R. <b>Expectancy = (win rate × average win in R) − (loss rate × 1R)</b>. For example, 40% win rate with winners at 2R: 0.4×2 − 0.6×1 = +0.2R per trade. That is profitable even though you lose 60% of the time. If you win 60% but your winners are 0.5R: 0.6×0.5 − 0.4 = −0.1R. You win often yet lose money.</p>
${B.w('expectancy')}

<h3>Rule 5: Respect drawdown math</h3>
<p>Losses hurt more than gains help, because you recover from a smaller base:</p>
${B.tbl(['Account loss', 'Gain needed to get back to even'], [['-10%', '+11%'], ['-20%', '+25%'], ['-30%', '+43%'], ['-50%', '+100%'], ['-75%', '+300%'], ['-90%', '+900%']])}

<h3>Rule 6: Daily and weekly limits</h3>
<p>Set a maximum daily loss (for example 2 to 3% of the account). When you hit it, <b>stop trading for the day</b>. Many blown accounts happen on one tilted afternoon of revenge trades. Do the same for a weekly limit.</p>

<h3>Rule 7: Watch correlation and total exposure</h3>
<p>Five trades in five tech stocks are really one big trade on tech. Limit the total open risk (for example no more than 3 to 5% across all positions) and avoid stacking identical bets.</p>

<h3>Rule 8: Never move a stop further away</h3>
<p>You may tighten a stop to protect profit. Moving it away from price to "give the trade room" turns a planned small loss into an unplanned big one. That habit is behind countless blown accounts.</p>

<h3>Stop-loss placement</h3>
<ul>
<li>Place it at a level that proves the idea wrong (below the recent swing low), not at a random percentage.</li>
<li>Give it breathing room based on volatility (ATR).</li>
<li>Then let the stop determine your size, never the reverse.</li>
</ul>

${B.warn('<p>"Averaging down" (buying more as a losing position falls) without a plan is how small losses become account-ending ones. Add to winners with rules, not to losers with hope.</p>')}

${B.take(['Risk 0.5 to 1% of your account per trade; cap daily and weekly losses.', 'Place the stop first, then calculate position size from it.', 'Measure trades in R and demand a positive expectancy.', 'A 50% loss needs a 100% gain: avoiding big drawdowns is the main job.', 'Never widen a stop-loss or add to losers without rules.'])}`,
      q: [
        ['You have €10,000 and risk 1% on a trade with an entry of €20 and stop at €19. What is your position size?', ['50 shares', '100 shares', '500 shares', '10,000 shares'], 1, 'Risk = €100; distance = €1; size = 100 shares.'],
        ['A system wins 40% of trades with an average win of 2R and loses 1R otherwise. Expectancy per trade?', ['-0.2R', '0R', '+0.2R', '+1R'], 2, '0.4 × 2 − 0.6 × 1 = +0.2R.'],
        ['After losing 50% of an account, what gain do you need to break even?', ['50%', '75%', '100%', '200%'], 2, 'Going from 50 back to 100 requires a 100% gain.']
      ]
    },
    {
      id: 'b7', m: 13, t: 'Trading psychology and the journal',
      hook: 'Strategies fail in the mind long before they fail on the chart. Build habits that keep you steady, and track them.',
      body: `
<p>Most traders who fail knew what to do. They simply did not do it. They moved stops, jumped into trades out of boredom, doubled up after losses. <b>Psychology</b> is not soft stuff: it is where the money is made or lost.</p>

<h3>The usual suspects</h3>
<ul>
<li><b>FOMO</b>: chasing a move that has already happened. You buy near the top because "it is going to the moon".</li>
<li><b>Revenge trading</b>: after a loss, taking an impulsive bigger trade to "win it back".</li>
<li><b>Overtrading</b>: trading out of boredom or the need for action. More trades means more costs and more mistakes.</li>
<li><b>Hope</b>: refusing to take a stop-loss because the trade "might come back".</li>
<li><b>Greed after wins</b>: sizing up after a lucky streak and giving it all back.</li>
<li><b>Fear</b>: cutting winners early and hesitating on valid setups after a few losses.</li>
<li><b>Tilt</b>: a state of emotional frustration where you stop following rules at all.</li>
</ul>

<h3>Habits that protect you</h3>
<ol>
<li><b>Pre-trade checklist</b>: if all boxes are not ticked, no trade.</li>
<li><b>Fixed daily routine</b>: prepare before the market opens; stop at a defined time.</li>
<li><b>Maximum trades per day</b> (for example 3 to 5).</li>
<li><b>The three-strikes rule</b>: after three consecutive losses, step away for at least an hour.</li>
<li><b>Daily loss limit</b>: when hit, close the platform.</li>
<li><b>Sleep, food, exercise</b>: tired traders make worse decisions, and this is measurable.</li>
<li><b>Write what you feel</b>: a short note before each trade about your state. Patterns appear quickly.</li>
</ol>

<h3>The trade journal: your private coach</h3>
<p>A journal records each trade: date, market, setup, entry, stop, target, size, result in R, whether you followed your plan, your emotion and a screenshot. After 30 to 50 trades you can answer questions that change everything:</p>
<ul>
<li>Which setup makes money and which loses?</li>
<li>Do you lose more when you break your rules?</li>
<li>Which emotions or times of day hurt you?</li>
</ul>
<p>Try the journal below. It starts with example trades. Notice how "plan followed" and emotion tell a clear story. Then clear it and log your own practice trades.</p>
${B.w('journal')}

${B.w('checklist', { key: 'b7', title: 'Pre-trade checklist (copy and adapt)', accent: 'trd', items: 'The higher-timeframe trend agrees with my trade|The setup matches my written rules exactly|My stop-loss is placed where the idea is proven wrong|My position size risks no more than my fixed percent|Reward is at least 1.5 to 2 times my risk|No major news in the next 30 minutes|I am calm, rested and not trying to win back a loss' })}

${B.key('<p>Your job is not to predict the market. Your job is to follow your rules while the market does whatever it wants. Review how well you executed, not only whether the trade made money.</p>')}

${B.take(['Emotions like FOMO, revenge and hope destroy more accounts than bad strategies.', 'Use checklists, trade limits, daily loss limits and breaks to enforce discipline.', 'A journal turns experience into data; review it weekly.', 'Judge yourself on rule-following, not individual outcomes.'])}`,
      q: [
        ['What is revenge trading?', ['Trading against a rival', 'Taking impulsive, oversized trades to win back a loss', 'Selling at a profit', 'Using a demo account'], 1, 'It is emotion-driven and usually multiplies the original loss.'],
        ['What is the best use of a trading journal?', ['Bragging', 'Finding patterns in setups, emotions and rule-breaking from your data', 'Replacing a stop-loss', 'Predicting the market'], 1, 'The journal is a feedback tool for improving your process.'],
        ['After hitting your daily loss limit you should…', ['Increase size to recover', 'Stop trading for the day', 'Switch to a new market immediately', 'Remove the limit'], 1, 'The limit exists to stop an emotional spiral.']
      ]
    },
    {
      id: 'b8', m: 15, t: 'Paper trading lab and your trading plan',
      hook: 'Time to trade 100 candles with pretend money. Then write the plan that decides whether you ever risk the real thing.',
      body: `
<p>Pilots do not fly passengers on day one: they use simulators. Traders should do the same. A <b>paper trading</b> account lets you practise execution, rules and emotions at zero financial risk.</p>

<h3>Play: the practice market</h3>
<p>Below is a generated market (not a real one) that switches between uptrends, downtrends and ranges. You have €10,000 of pretend money. Press <b>Next candle</b> to move time forward, or <b>Auto-play</b>. Enter long or short, choose your risk, stop distance and profit target, and the lab calculates position size for you. After 100 candles, you get a debrief. Try these experiments:</p>
<ul>
<li>Turn on the 20-candle average and only trade in the direction it points.</li>
<li>Trade with and without a profit target. Which gives smoother results?</li>
<li>Try 2% risk per trade, then 0.5%. Compare your drawdown.</li>
<li>Click <b>New market</b> and see if your result repeats.</li>
</ul>
${B.w('papertrade')}

${B.warn('<p>Simulators are easier than real life: no real fear, perfect fills, no slippage. Treat paper results as a minimum test of your rules, not proof of future profit.</p>')}

<h3>When have you "passed"?</h3>
<ul>
<li>At least <b>100 trades</b> logged in your journal using the same rules.</li>
<li>Positive expectancy after costs.</li>
<li>You followed your plan on at least 90% of trades.</li>
<li>A maximum drawdown you could emotionally tolerate with real money.</li>
</ul>

<h3>The transition to live</h3>
<ol>
<li>Start with <b>10% of your intended size</b>. Real money changes behaviour even when it is small.</li>
<li>Trade another 100 live trades at that tiny size.</li>
<li>Scale up slowly (for example +25% after hitting performance and discipline targets), and scale down after drawdowns.</li>
<li>Withdraw some profits regularly so the gains become real.</li>
</ol>

<h3>Your trading plan template</h3>
<p>Copy this into a document and fill it in. A written plan is your constitution.</p>
${B.tbl(['Section', 'What to write'], [
        ['Goal', 'What are you aiming for in 12 months? (Skill, consistency, income)'],
        ['Markets and times', 'Which instruments? Which hours? When do you not trade?'],
        ['Strategy', 'Setups with exact entry, stop, target rules'],
        ['Risk rules', 'Risk per trade, daily limit, weekly limit, max open risk'],
        ['Routine', 'Pre-market prep, trade management, end-of-day review'],
        ['Psychology rules', 'Max trades, three-strikes rule, breaks'],
        ['Review schedule', 'Weekly journal review; monthly performance and rule changes'],
        ['Quit / pause rule', 'At what drawdown (for example -10%) do you stop and review before continuing?']
      ])}

${B.ex('<p>Sara trades a plan with 0.5% risk per trade and a -8% pause rule. In her second month she hits -8%. She stops, reviews her journal and finds that 70% of her losses came from breaking her rule "no trades in the first 5 minutes". She fixes it, and resumes at half size. A pause rule turned a slump into a lesson.</p>')}

<h3>Going further</h3>
<p>If you want guided structure, a ready-made programme and a trading bot to help you apply rules consistently, the creator of this course offers an optional paid product called <b>Trading Lab</b>. It is not required: this free path covers the essentials. See the <a href="#lab">Trading Lab page</a> for details and, as always, remember that no course or tool can remove market risk or guarantee profits.</p>

${B.take(['Paper trade at least 100 trades with fixed rules before risking real money.', 'Start live at about 10% of your intended size and scale slowly.', 'Write a plan with risk rules, routines and a pause rule.', 'Simulators are kinder than reality; use them as a minimum test.'])}`,
      q: [
        ['How many trades should you aim for in paper trading before going live?', ['3', '10', '100 or more', 'It does not matter'], 2, 'A larger sample is needed to see whether your edge is real or just luck.'],
        ['What is a sensible way to start live trading?', ['At full size immediately', 'With about 10% of your intended size', 'With borrowed money', 'With maximum leverage'], 1, 'Real money changes emotions, so start small to learn safely.'],
        ['What does a "pause rule" do?', ['Forces you to trade more', 'Makes you stop and review when you reach a set drawdown', 'Removes stop-losses', 'Guarantees recovery'], 1, 'It protects capital and forces reflection before problems compound.']
      ]
    }
  ]);
})();
