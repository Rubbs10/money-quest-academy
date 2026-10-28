/* Glossary, Pro Path page and Trading Lab pages */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;
  const LAB = 'https://fofinho8.gumroad.com/l/trading-lab';
  MQ.misc = {};

  MQ.misc.glossary = [
    ['Altcoin', 'Any crypto-asset other than Bitcoin.'],
    ['Ask', 'The lowest price at which sellers are willing to sell. You pay the ask when you buy.'],
    ['Asset allocation', 'How your money is split between asset types such as stocks, bonds, cash and crypto.'],
    ['ATR (average true range)', 'An indicator of how much an asset typically moves in a period. Used to set stops and position size.'],
    ['Bear market', 'A long period of falling prices, often defined as a drop of 20% or more from a peak.'],
    ['Bid', 'The highest price buyers will pay. You receive the bid when you sell.'],
    ['Blockchain', 'A shared digital record kept by many computers, where blocks of data are chained together and hard to alter.'],
    ['Bond', 'A loan to a government or company that pays interest and returns the principal at the end.'],
    ['Broker', 'A company that executes your buy and sell orders in financial markets.'],
    ['Bull market', 'A long period of rising prices.'],
    ['Candlestick', 'A chart symbol showing open, high, low and close for a time period.'],
    ['Capital gains tax', 'Tax on the profit made when you sell an asset for more than you paid.'],
    ['CFD (contract for difference)', 'A leveraged contract with a broker that tracks an asset\'s price without owning it. High risk for retail traders.'],
    ['Cold wallet', 'A crypto wallet kept offline (often a hardware device) for strong security.'],
    ['Compound interest', 'Earning returns on your previous returns, so growth accelerates over time.'],
    ['Correlation', 'How closely two assets move together. Low correlation helps diversification.'],
    ['Cost basis', 'What you originally paid for an asset, including fees. Used to calculate gains for tax.'],
    ['Custodial wallet', 'A wallet where a company (such as an exchange) holds the private keys for you.'],
    ['DCA (dollar-cost averaging)', 'Investing a fixed amount at regular intervals regardless of price.'],
    ['DeFi (decentralised finance)', 'Financial services such as lending and trading run by smart contracts instead of traditional institutions.'],
    ['Derivative', 'A contract whose value depends on another asset: futures, options, CFDs.'],
    ['Diversification', 'Spreading money across many assets so one failure cannot ruin you.'],
    ['Dividend', 'A share of company profits paid to shareholders.'],
    ['Doji', 'A candlestick where open and close are almost equal, signalling indecision.'],
    ['Drawdown', 'The fall from a peak to a low in your account or portfolio value.'],
    ['EMA (exponential moving average)', 'A moving average that gives more weight to recent prices.'],
    ['Emergency fund', 'Savings kept for unexpected costs, usually 3 to 6 months of essential spending.'],
    ['EPS (earnings per share)', 'A company\'s net profit divided by its number of shares.'],
    ['ETF (exchange-traded fund)', 'A basket of assets that trades on an exchange like a share.'],
    ['Exchange', 'A marketplace where assets are bought and sold. In crypto, a platform to trade coins.'],
    ['Expectancy', 'The average amount you expect to win or lose per trade over many trades.'],
    ['FDV (fully diluted valuation)', 'Token price times total supply, showing value if all tokens were in circulation.'],
    ['Fear and Greed Index', 'A 0 to 100 sentiment score for the crypto (or stock) market. Extreme readings can signal overheating or panic.'],
    ['Fiat', 'Government-issued money such as euros or US dollars.'],
    ['FOMO', 'Fear of missing out. The urge to buy because others are profiting.'],
    ['Funding rate', 'A periodic payment between longs and shorts in perpetual futures that keeps the contract price near spot.'],
    ['Futures', 'Contracts to buy or sell an asset at a set price on a future date.'],
    ['Gas fee', 'The fee paid to a blockchain network to process a transaction.'],
    ['Halving', 'A scheduled event that cuts Bitcoin\'s new coin issuance in half, roughly every four years.'],
    ['Hardware wallet', 'A dedicated physical device that stores crypto private keys offline.'],
    ['Hash', 'A short digital fingerprint of data. Changing the data changes the hash.'],
    ['Index fund', 'A fund that copies a market index at low cost.'],
    ['Inflation', 'A general rise in prices over time that reduces what money can buy.'],
    ['Isolated margin', 'A margin mode where only the collateral assigned to a position is at risk.'],
    ['KYC (know your customer)', 'Identity checks required by regulated financial platforms.'],
    ['Leverage', 'Using borrowed money or contracts to control a larger position than your own cash. Magnifies gains and losses.'],
    ['Limit order', 'An order to buy or sell only at a specified price or better.'],
    ['Liquidation', 'Forced closing of a leveraged position when losses use up your margin.'],
    ['Liquidity', 'How easily an asset can be bought or sold without moving the price.'],
    ['Long', 'Buying an asset hoping its price rises.'],
    ['Maker / taker', 'Makers add orders to the order book (lower fee); takers remove them by trading immediately (higher fee).'],
    ['Margin', 'Collateral you post to open a leveraged position.'],
    ['Market cap', 'Price multiplied by the number of units in circulation.'],
    ['Market order', 'An order to buy or sell immediately at the best available price.'],
    ['Moving average', 'The average price over a set number of periods, smoothing out noise to show trend.'],
    ['Open interest', 'The total value of outstanding derivative contracts that have not been closed.'],
    ['P/E ratio', 'Share price divided by earnings per share. How much you pay for each unit of profit.'],
    ['Paper trading', 'Practising trading with simulated money.'],
    ['Perpetual futures', 'Futures contracts with no expiry date, kept near spot price by funding payments.'],
    ['Private key', 'The secret code that proves ownership and lets you move crypto. Never share it.'],
    ['Proof of stake / proof of work', 'Two ways blockchains reach agreement: by locking up coins (stake) or by spending computing power (work).'],
    ['Pump and dump', 'A scheme that hypes an asset to raise its price, then sells to buyers who arrive late.'],
    ['R-multiple', 'A trade result measured in units of initial risk. Risking €50 and making €100 is +2R.'],
    ['Rebalancing', 'Adjusting your portfolio back to its target mix.'],
    ['Resistance', 'A price area where selling pressure has repeatedly stopped rallies.'],
    ['RSI (relative strength index)', 'A momentum indicator ranging from 0 to 100.'],
    ['Rug pull', 'A scam where developers drain liquidity or abandon a project after raising money.'],
    ['Scalping', 'Trading very short-term for small gains many times a day.'],
    ['Seed phrase', 'A list of 12 or 24 words that can recreate your wallet. Whoever has it controls the funds.'],
    ['Short', 'Selling a borrowed asset hoping to buy it back cheaper.'],
    ['Slippage', 'The difference between the expected and actual execution price of an order.'],
    ['Smart contract', 'A program on a blockchain that runs automatically when conditions are met.'],
    ['Spot', 'Buying or selling the actual asset at the current price, without leverage.'],
    ['Spread', 'The difference between the bid and the ask price.'],
    ['Stablecoin', 'A crypto token designed to keep a stable value, often pegged to a currency.'],
    ['Staking', 'Locking proof-of-stake coins to help secure a network in exchange for rewards.'],
    ['Stop-loss', 'An order that closes a position if price reaches a set loss level.'],
    ['Support', 'A price area where buyers have repeatedly stepped in.'],
    ['Swing trading', 'Holding positions from several days to several weeks.'],
    ['TER (total expense ratio)', 'The yearly fee charged by a fund as a percentage of your investment.'],
    ['Tokenomics', 'The economics of a token: supply, distribution, issuance and utility.'],
    ['UCITS', 'A European regulatory framework for investment funds aimed at retail investors.'],
    ['Volatility', 'How much and how fast prices move up and down.'],
    ['Volume', 'The amount of an asset traded during a period.'],
    ['VWAP', 'Volume-weighted average price, a common intraday benchmark of fair value.'],
    ['Wallet', 'Software or hardware that stores your crypto keys and lets you send and receive coins.'],
    ['Whale', 'A holder with a very large amount of an asset, able to move the market.'],
    ['Yield', 'The income an investment pays, expressed as a percentage of its price.']
  ];

  /* ---------- Trading Lab: compact card on the home page ---------- */
  MQ.misc.labCard = `<div class="lab">
    <div>
      <p class="eyebrow" style="color:#17143A;opacity:.75">Optional · from the creator of this course</p>
      <h2>Want to go deeper? Meet Trading Lab.</h2>
      <p>This course is free and complete on its own. If you want extra structure for trading, <b>Trading Lab</b> is the author's paid programme on Gumroad: a full trading course plus a <b>trading bot</b> designed to help traders apply their rules consistently.</p>
      <ul><li>Complete trading programme to learn and practise</li><li>Includes a trading bot used by many members</li><li>Monthly subscription, no need to buy anything else</li></ul>
      <div class="btnrow"><a class="btn" href="#lab">See what is inside</a><a class="btn alt" href="${LAB}" target="_blank" rel="noopener noreferrer">Open on Gumroad ↗</a></div>
      <p class="fine">Trading carries a high risk of loss. No course or bot can guarantee results. Disclosure: Trading Lab is sold by the author of Money Quest Academy.</p>
    </div>
    <div class="price"><small>Trading Lab</small><b>€39</b><small>per month + VAT</small></div>
  </div>`;

  /* ---------- Trading Lab: full page ---------- */
  MQ.misc.labPage = `<section class="thead" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.ct}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">Optional paid programme · by the creator of Money Quest</p><h1>Trading Lab</h1><p>A complete trading programme with a trading bot, for people who want structure after finishing the free Trader paths.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="--a:var(--ct);--as:var(--ct-s);--on:var(--ct-on)">
    ${B.box('warn', 'Disclosure', '<p>Money Quest Academy is free. Trading Lab is a separate, paid product sold by the same author. You do not need it to complete any path in this course.</p>')}
    <h3>What it is</h3>
    <p>Trading Lab is a subscription programme available on Gumroad. It brings together the knowledge needed to trade in one place, together with a <b>trading bot</b> that helps traders follow rules consistently instead of making emotional decisions. Many members use it to add structure to their trading.</p>
    <div class="lab" style="margin:1.4rem 0;box-shadow:var(--shadow)"><div><h2 style="font-size:1.8rem">€39 per month + VAT</h2><p style="margin:0">Everything in one subscription: the trading programme and the bot. Check the Gumroad page for the current price, the full list of what is included and the terms.</p>
      <div class="btnrow" style="margin-top:1rem"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Open Trading Lab on Gumroad ↗</a></div></div><div class="price"><small>Trading Lab</small><b>€39</b><small>per month + VAT</small></div></div>
    <h3>Who it may suit</h3>
    <ul><li>People who finished the Day Trader or Crypto Trader path and want a guided programme.</li><li>Traders who struggle with discipline and want rules executed consistently.</li><li>Anyone who prefers a structured system to assembling tools one by one.</li></ul>
    <h3>Who should skip it</h3>
    <ul><li>Anyone who has not yet built an emergency fund or who has high-interest debt.</li><li>Anyone expecting guaranteed profit. No honest product offers that.</li><li>Beginners who have not yet practised on a simulator. Do the paper trading lab first.</li></ul>
    <h3>How it fits with this free course</h3>
    ${B.tbl(['', 'Money Quest (free)', 'Trading Lab (paid)'], [
        ['Purpose', 'Teaches the foundations of investing and trading', 'Programme and trading bot for active traders'],
        ['Cost', 'Free', '€39 per month + VAT'],
        ['Best for', 'Everyone starting from zero', 'Traders wanting extra structure and automation'],
        ['Risk', 'Educational, no trading involved', 'Trading carries a real risk of loss']
      ])}
    <h3>Honest expectations</h3>
    <p>A bot is software that follows rules. It can help you stay disciplined, and it never gets tired, but it does not create an edge on its own and it does not remove market risk. Results depend on market conditions, your settings, your risk management and your own behaviour. Use the checklist from the bots lesson: understand the rules, test with small size, use trade-only permissions and set a maximum loss.</p>
    ${B.warn('<p>Never invest money you cannot afford to lose. Trading, and especially leveraged trading, can lose money quickly.</p>')}
    <div class="btnrow"><a class="btn" href="${LAB}" target="_blank" rel="noopener noreferrer">Open Trading Lab on Gumroad ↗</a><a class="btn alt" href="#track-ct">Back to the Crypto Trader path</a></div>
  </div></div></section>`;

  /* ---------- Pro Path ---------- */
  MQ.misc.proPage = `<section class="thead" style="${MQ.trackStyle('found')}"><div class="wrap thead-g"><span class="pc-icon">${MQ.icons.found}</span>
    <div><p class="eyebrow" style="margin-bottom:.4rem">After the paths</p><h1>The Pro Path</h1><p>What separates hobbyists from professionals, and the ladder from beginner to someone others trust with money.</p></div></div></section>
  <section class="page"><div class="wrap"><div class="lbody" style="${MQ.trackStyle('found')}">
    <p>"Professional" is not a title you give yourself. It is a way of working. Professionals have <b>process</b>, <b>risk control</b>, <b>records</b> and <b>humility</b>. They survive bad years and compound good ones. The ladder below works for investors, traders and crypto alike.</p>
    <h3>The four levels</h3>
    ${B.tbl(['Level', 'What you do', 'Proof you are ready for the next level'], [
      ['1. Learner', 'Finish the Foundations and your chosen path. Practise with simulators. Build your emergency fund.', 'You can explain risk, diversification, costs and your own plan to a friend. Your money foundation is in place.'],
      ['2. Apprentice', 'Invest regularly with small real amounts. Keep a journal of decisions. If you trade, use 10% of intended size.', '12 months of consistent habits; 100 journaled decisions; you followed your plan through at least one scary period.'],
      ['3. Practitioner', 'A tested process with measured results: allocation and rebalancing for investors; positive expectancy and drawdown control for traders.', 'Two or more years of records; costs and taxes understood; losses handled without breaking rules.'],
      ['4. Professional', 'Others rely on your work: managing money for yourself at scale, working in finance, or running a structured trading business.', 'Verified record, risk framework, continuing education, and the ability to explain every decision.']
    ])}
    <h3>What professionals do differently</h3>
    <ol>
      <li><b>They think in probabilities, not predictions.</b> "If this setup occurs 100 times, what happens on average?"</li>
      <li><b>They define the loss before the gain.</b> Every position has a maximum acceptable loss.</li>
      <li><b>They obsess over costs, taxes and process</b>, the things they can control.</li>
      <li><b>They keep records.</b> Journals, performance reports, rule changes with reasons.</li>
      <li><b>They separate lessons from outcomes.</b> A good decision can lose; a bad decision can win.</li>
      <li><b>They protect their psychology.</b> Sleep, routine, and limits are part of the job.</li>
      <li><b>They keep learning.</b> Markets change; so do the rules that work.</li>
    </ol>
    <h3>Career routes in finance</h3>
    ${B.tbl(['Route', 'What it involves', 'Useful credentials'], [
      ['Financial analyst / researcher', 'Study companies and markets; write recommendations.', 'Finance or economics degree; CFA programme'],
      ['Portfolio / fund manager', 'Decide allocations for funds or clients.', 'CFA, strong track record, licences'],
      ['Risk manager', 'Measure and limit the risks a firm takes.', 'FRM certification, maths and statistics'],
      ['Quantitative analyst or developer', 'Build models, data pipelines and automated strategies.', 'Maths, statistics, programming'],
      ['Technical analyst / market strategist', 'Chart-based and market-structure research.', 'CMT programme'],
      ['Financial adviser / planner', 'Help individuals plan wealth.', 'Local licensing and planner certifications'],
      ['Independent trader or investor', 'Trade or invest your own capital as a business.', 'Capital, discipline, records, taxes in order'],
      ['Crypto roles', 'Research, security, compliance, trading and development at crypto firms.', 'Blockchain knowledge, security skills, regulation awareness']
    ])}
    <h3>A note about prop-trading firms</h3>
    <p>Some firms offer to "fund" traders after they pass an evaluation. Some are legitimate, but many make most of their money from evaluation fees paid by people who fail. Read the rules carefully, check independent reviews, understand the profit split and drawdown limits, and never pay money you cannot afford to lose.</p>
    <h3>Habits for the next 12 months</h3>
    <ul>
      <li>Read one good book on investing or risk per quarter.</li>
      <li>Review your plan and results monthly; rewrite the plan once a year.</li>
      <li>Learn from markets without needing to trade them: study history (1929, 1973, 1987, 2000, 2008, 2020, 2022).</li>
      <li>Share what you learn. Teaching someone else is the fastest way to find gaps.</li>
      <li>Stay humble. Markets punish certainty.</li>
    </ul>
    ${B.key('<p><b>The best professional skill is staying in the game.</b> If you protect your capital and your mind, time and compounding do most of the rest.</p>')}
    <div class="btnrow"><a class="btn" href="#cert">See my progress and certificate</a><a class="btn alt" href="#home">Back to the paths</a></div>
  </div></div></section>`;
})();
