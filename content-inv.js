/* Everyday Investor path: 8 lessons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('inv', [
    {
      id: 'a1', m: 10, t: 'Set your goals and pick your accounts',
      hook: 'Before choosing what to buy, decide what the money is for and where it will live.',
      body: `
<p>Great investors do not start with "what should I buy?" They start with "what is this money for, and when do I need it?" The answer decides almost everything else.</p>

<h3>Use three buckets</h3>
<ul>
<li><b>Safety bucket (0 to 2 years)</b>: emergency fund and money for upcoming expenses. Savings account. Zero market risk.</li>
<li><b>Goals bucket (2 to 10 years)</b>: a car, a deposit for a home, a master's degree. Mostly calm assets with a smaller share of stocks.</li>
<li><b>Growth bucket (10+ years)</b>: retirement and long-term wealth. This is where a high share of global stocks makes sense, because time smooths out the bumps.</li>
</ul>

<h3>Make goals specific</h3>
<p>"I want to be rich" is not a goal. "I want €30,000 for a home deposit in 6 years" is. Specific goals tell you how much to save and how much risk is appropriate. If the target is €30,000 in 6 years and you can invest €350 a month, you can test whether the plan works before you start.</p>

<h3>Types of accounts</h3>
<p>Most countries offer special <b>tax-advantaged accounts</b> for investing or retirement. Examples: 401(k) and Roth IRA in the US, Stocks and Shares ISA and SIPP in the UK, TFSA and RRSP in Canada, retirement savings plans (PPR) in Portugal, and various pension products elsewhere. They can legally reduce the tax you pay, sometimes by a lot. Check what exists in <b>your</b> country, including the rules about when you can withdraw.</p>
<p>A standard <b>brokerage account</b> is the flexible option: you can invest and withdraw any time, but you pay taxes according to local rules.</p>

<h3>How to choose a broker</h3>
${B.tbl(['Check', 'Why it matters'], [
        ['Regulated in your region', 'Gives you legal protections and rules the broker must follow'],
        ['Low fees', 'Commissions, currency conversion, custody and inactivity fees quietly eat returns'],
        ['Access to broad ETFs', 'You want simple, diversified products available at low cost'],
        ['Asset protection', 'Your securities should be held separately from the broker\'s own money; check the compensation scheme'],
        ['Simple, reliable app', 'You will use it for decades; a clear interface prevents mistakes'],
        ['Does not push risky products', 'Be wary of platforms that promote leverage, CFDs or constant trading to beginners']
      ])}

<h3>Opening an account: what to expect</h3>
<ol>
<li>Create the account and confirm your identity (ID document and sometimes a selfie, plus proof of address).</li>
<li>Link your bank account and make a small first deposit to test the process.</li>
<li>Turn on two-factor authentication using an authenticator app.</li>
<li>Read the fee schedule. Look specifically at trading fees, currency conversion fees and anything charged just for holding the account.</li>
</ol>
${B.warn('<p>Never share your login with anyone. Do not use "account management" services from strangers who promise returns. Legitimate advisers are licensed and never ask for your password.</p>')}

${B.w('checklist', { key: 'a1', title: 'Before your first investment', accent: 'inv', items: 'I wrote down my goal, amount and deadline|My emergency fund is in place|I checked tax-advantaged accounts available in my country|I picked a regulated broker and read its fee table|I turned on two-factor authentication with an authenticator app|I decided how much I will invest each month and set a reminder or automatic transfer' })}

${B.take(['Start with the purpose and deadline of the money, then pick the assets.', 'Use three buckets: safety, goals and growth.', 'Check tax-advantaged accounts in your own country.', 'Choose a regulated, low-cost broker that does not push risky products.'])}`,
      q: [
        ['Money you will need for a home deposit in 3 years belongs mostly in…', ['100% high-risk stocks', 'Calm assets with limited risk', 'A new meme coin', 'Leveraged trades'], 1, 'With a short horizon, a crash right before you need the money would be damaging.'],
        ['What should you check first when picking a broker?', ['That it has flashy ads', 'That it is regulated in your region and has low, transparent fees', 'That it offers 100x leverage', 'That friends use it'], 1, 'Regulation and costs matter much more than marketing.'],
        ['What is the main advantage of tax-advantaged accounts?', ['Guaranteed returns', 'They can legally reduce the taxes you pay on gains', 'No risk', 'Higher interest rates on stocks'], 1, 'They do not change market risk, but lower taxes mean more of the return stays with you.']
      ]
    },
    {
      id: 'a2', m: 11, t: 'ETFs and index funds: the basket of snacks',
      hook: 'The simplest, cheapest way to own hundreds or thousands of companies at once.',
      body: `
<p>Imagine you want to taste every snack in a huge supermarket. You could buy one packet of every type, which is slow and expensive. Or you could buy a ready-made <b>basket</b> with a bit of everything. An <b>ETF</b> (exchange-traded fund) is that basket for investments. You buy one share of the ETF and you own a small slice of hundreds or thousands of companies.</p>

<h3>Index funds explained</h3>
<p>An <b>index</b> is a list of companies chosen by rules, such as "the 500 largest US companies" (S&amp;P 500) or "about 1,400 large and mid-sized companies from developed countries" (MSCI World). An <b>index fund</b> or <b>index ETF</b> simply copies that list automatically. No fund manager guesses which stocks to pick, so costs are very low.</p>

<h3>Why indexing works for most people</h3>
<p>Beating the market consistently is extremely hard. Year after year, reports comparing active funds with their benchmark find that the majority of active funds underperform over 10 to 15 years, often by roughly the amount of their higher fees. Index funds guarantee you get the market return minus a tiny fee, which beats most professionals after costs.</p>
${B.ex('<p>Imagine you and 99 friends all try to pick stocks. After costs, the average result is below the market, because for every winner there is a loser on the other side of the trade, and everyone pays fees. If you simply own the whole market through an index fund, you capture the average without paying the active tax.</p>')}

<h3>Popular index types</h3>
${B.tbl(['Index', 'What it covers', 'Notes'], [
        ['S&amp;P 500', '500 large US companies', 'Heavily weighted to US tech and big names'],
        ['MSCI World', 'About 1,400 large and mid-cap companies in developed countries', 'Around 70% US'],
        ['FTSE All-World / MSCI ACWI', 'Developed and emerging markets, thousands of companies', 'Closest to "the whole world" in one fund'],
        ['Bond aggregate', 'Many government and corporate bonds', 'Calmer part of a portfolio']
      ])}

<h3>How to compare ETFs</h3>
<ul>
<li><b>Index tracked</b>: what is inside? Broad and global is simple and robust.</li>
<li><b>TER (total expense ratio)</b>: the yearly fee. Broad index ETFs often cost about 0.05 to 0.25% a year. Active funds can cost 1 to 2%.</li>
<li><b>Fund size</b>: very small ETFs may close down. Larger, established funds are safer.</li>
<li><b>Accumulating vs. distributing</b>: accumulating ETFs reinvest dividends automatically (simple, good for compounding); distributing ETFs pay them out to you.</li>
<li><b>Domicile and UCITS</b>: in Europe, look for UCITS-compliant ETFs, many domiciled in Ireland or Luxembourg, which are designed for retail investors and often have favourable tax treatment on foreign dividends.</li>
<li><b>Replication</b>: physical (holds the stocks) is easiest to understand. Synthetic uses swaps and adds complexity.</li>
<li><b>Currency</b>: an ETF may be priced in euros while holding dollar assets. Currency movements add to returns or subtract from them.</li>
</ul>

${B.warn('<p>An ETF is only as safe as what it holds. A leveraged ETF, a single-sector ETF or a "crypto stocks" ETF can be extremely volatile. Never buy an ETF only because "ETFs are safe".</p>')}

${B.tip('<p>Beginners can do very well with one global stock ETF plus (optionally) a bond ETF. Simple is not lazy: it is effective.</p>')}

${B.take(['An ETF is a basket that gives instant diversification with one purchase.', 'Index funds copy a market list automatically and cost very little.', 'Most active funds underperform their benchmark after fees over long periods.', 'Compare index, TER, size, accumulating or distributing, domicile and replication.'])}`,
      q: [
        ['What does an index ETF do?', ['Tries to beat the market by stock picking', 'Copies a market index automatically at low cost', 'Guarantees profit', 'Lends money to governments only'], 1, 'Index funds track a list of companies using fixed rules, so fees stay low.'],
        ['Which yearly fee (TER) is typical for a broad, low-cost index ETF?', ['0.1% to 0.25%', '3% to 5%', '10%', 'There is no fee ever'], 0, 'Fees under about 0.25% are common for broad index ETFs.'],
        ['What does an accumulating ETF do with dividends?', ['Pays them to you in cash', 'Reinvests them automatically inside the fund', 'Burns them', 'Charges you extra'], 1, 'Accumulating ETFs reinvest dividends, which is convenient for compounding.']
      ]
    },
    {
      id: 'a3', m: 12, t: 'Diversification and asset allocation',
      hook: 'How to spread your money so no single disaster can wreck you, and a game that lets you stress-test your own mix.',
      body: `
<p>The old advice "do not put all your eggs in one basket" is the heart of investing. <b>Asset allocation</b> (how you split your money between stocks, bonds, cash and other assets) is the biggest driver of how bumpy your ride will be. Research on portfolios suggests that allocation explains far more of a portfolio's behaviour than picking specific investments.</p>

<h3>Three levels of diversification</h3>
<ol>
<li><b>Across asset classes</b>: stocks, bonds, cash, maybe some gold or real estate. They react differently to events.</li>
<li><b>Across countries and currencies</b>: do not rely only on your home market. Global funds do this for you.</li>
<li><b>Across companies and sectors</b>: hundreds or thousands of companies, so one failure barely matters.</li>
</ol>

<h3>Correlation: why mixing helps</h3>
<p>Two assets that do not move together are said to have low <b>correlation</b>. In a bad year for stocks, high-quality bonds or gold sometimes hold up. That does not always happen (in 2022 both stocks and bonds fell), but across history a mix has produced smaller bumps than any single piece.</p>

<h3>Some example starting mixes</h3>
${B.tbl(['Style', 'Stocks', 'Bonds', 'Cash / other', 'Fits'], [
        ['Careful', '30%', '50%', '20%', 'Short horizon, low tolerance for drops'],
        ['Balanced', '60%', '30%', '10%', 'Medium horizon (7 to 15 years)'],
        ['Growth', '80 to 90%', '10 to 20%', '0 to 5%', 'Long horizon (15+ years), high tolerance']
      ])}
<p>A very rough rule of thumb some people use is "110 or 120 minus your age" as the percentage in stocks. It is only a starting point: your goals, income stability and nerves matter more than a formula.</p>

<h3>Core and satellite</h3>
<p>A popular structure: put 80 to 95% in a low-cost global "core" (a world ETF), and keep a small "satellite" (5 to 20%) for ideas you believe in, like individual stocks or themes. If a satellite fails, the core protects you.</p>

<h3>Now stress-test your portfolio</h3>
<p>Build a mix, then run it through four stylised eight-year scenarios. Try an all-stock portfolio, a careful one, and a "100% crypto" one. Watch both the final value and the worst drop on the way. Which one could you actually live with?</p>
${B.w('alloc')}

${B.key('<p><b>The real question is not "what gives the highest return?"</b> It is "what is the highest-risk mix I can hold through a crash without selling?" A great plan you abandon in panic is worse than a good plan you keep.</p>')}

${B.warn('<p>Owning ten stocks in the same industry, or five funds that all hold the same big tech companies, is not real diversification. Look through what the funds actually hold.</p>')}

${B.take(['Asset allocation drives most of your portfolio\'s risk and behaviour.', 'Diversify across asset classes, countries and companies.', 'Pick the mix you can hold through a 30% fall, not the one with the best chart.', 'Core-and-satellite keeps risky ideas to a small, affordable slice.'])}`,
      q: [
        ['What is the main purpose of diversification?', ['Maximise short-term profit', 'Reduce the damage any single failure can cause', 'Avoid taxes', 'Guarantee returns'], 1, 'Spreading risk means no single company or asset can wreck your whole portfolio.'],
        ['In a core-and-satellite approach, the core usually is…', ['A single hot stock', 'A broad, low-cost global fund', 'A leveraged position', 'Cash only'], 1, 'The core is the stable, diversified base; satellites are small bets.'],
        ['Which choice best reflects the right question when choosing a mix?', ['Which assets went up most last year?', 'What is the riskiest mix I can hold through a crash without selling?', 'What does a famous influencer own?', 'Which mix would triple fastest?'], 1, 'Behaviour in downturns determines whether you actually earn the long-term returns.']
      ]
    },
    {
      id: 'a4', m: 9, t: 'Dollar-cost averaging and automating your wealth',
      hook: 'Invest the same amount on a schedule and remove the hardest decision in investing: when.',
      body: `
<p>Nobody can reliably predict the perfect day to buy. <b>Dollar-cost averaging (DCA)</b> solves this by investing a fixed amount at regular intervals, such as €100 on the first of every month, no matter what the market is doing. When prices are low you automatically buy more units; when prices are high you buy fewer.</p>

${B.ex('<p>Over 4 months you invest €100 each month. The fund price is €10, €8, €5 and €10. You buy 10, 12.5, 20 and 10 units: 52.5 units for €400, an average cost of about €7.62 per unit, even though the price ended where it began at €10. Your average price is lower than the simple average of prices because you bought more when it was cheap.</p>')}

<h3>DCA vs. lump sum</h3>
<p>If you already have a large sum, statistics show that investing it all at once beats spreading it out in roughly two thirds of historical cases, simply because markets rise more often than they fall. But DCA reduces the chance of putting everything in right before a crash, and it is easier on nerves. Most people do not have a lump sum anyway: they invest from salary, which is automatically DCA.</p>
${B.w('dca')}

<h3>Make it automatic</h3>
<ol>
<li>Pick an amount you can keep even in a bad month.</li>
<li>Set a standing order or automatic investment for the day after payday.</li>
<li>Choose the same broad fund each time.</li>
<li>Increase the amount when your income rises ("raise it with every raise").</li>
<li>Do not stop in a crash. Falling prices mean your fixed amount buys more.</li>
</ol>

<h3>What to do with windfalls</h3>
<p>Bonuses, gifts or a tax refund: a sensible rule is to split them. For example, 50% to your plan (invest or emergency fund), 30% for goals and 20% to enjoy. You do not need to be a monk, only consistent.</p>

${B.warn('<p>DCA does not protect you from a falling market or guarantee a profit. It also does not rescue a bad asset. Combine it with diversified, sensible investments.</p>')}

${B.take(['DCA means investing a fixed amount on a regular schedule.', 'It removes market-timing decisions and builds the habit.', 'A lump sum often wins statistically, but DCA reduces regret and risk of bad timing.', 'Automate it and keep going during crashes.'])}`,
      q: [
        ['What is dollar-cost averaging?', ['Waiting for the cheapest day', 'Investing a fixed amount at regular intervals regardless of price', 'Selling when prices fall', 'Borrowing to invest'], 1, 'The schedule, not the price, decides when you buy.'],
        ['When the price falls, a fixed monthly investment…', ['Buys fewer units', 'Buys more units', 'Buys the same number of units', 'Stops automatically'], 1, 'The same euro amount buys more units at lower prices.'],
        ['What is the best reaction to a market crash if you invest monthly through a plan?', ['Stop everything and sell', 'Keep investing your planned amount', 'Double your leverage', 'Switch to a random hot coin'], 1, 'Staying the course lets you buy cheaper while your long-term plan is unchanged.']
      ]
    },
    {
      id: 'a5', m: 10, t: 'Costs, fees and taxes: the silent wealth killers',
      hook: 'A fee that sounds tiny can eat a third of your final result. Learn to spot every cost.',
      body: `
<p>You cannot control the market, but you can control what you pay to take part in it. Costs compound just like returns, only in the wrong direction.</p>

<h3>The costs to know</h3>
<ul>
<li><b>Fund fees (TER)</b>: charged yearly inside the fund.</li>
<li><b>Trading commissions</b>: a fixed fee or percentage each time you buy or sell.</li>
<li><b>Spread</b>: the small gap between the buy price (ask) and sell price (bid). A hidden cost on every trade.</li>
<li><b>Currency conversion fees</b>: often 0.25% to 1% or more if the broker adds a margin.</li>
<li><b>Custody and inactivity fees</b>: charged by some brokers just for holding your assets.</li>
<li><b>Performance fees</b>: a share of profits taken by some funds.</li>
<li><b>Taxes</b>: on dividends, interest and capital gains, depending on where you live.</li>
</ul>

<h3>See the damage</h3>
<p>Compare a cheap ETF with an expensive fund. Same market, same contributions, only the fee differs.</p>
${B.w('fees')}

<h3>Taxes: the basics</h3>
<p>Rules vary by country, but the common ideas are:</p>
<ul>
<li><b>Capital gains tax</b> is paid on the profit when you sell. Buy-and-hold investors trigger it rarely, which lets more of their money keep compounding. Frequent traders trigger it often.</li>
<li><b>Dividend tax</b> applies when companies pay out profits. Accumulating funds may have different treatment from distributing ones.</li>
<li><b>Withholding tax</b> may be taken at source on foreign dividends.</li>
<li><b>Losses</b> can sometimes be used to offset gains. Keep records.</li>
</ul>
${B.warn('<p>This course gives general ideas, not tax advice. Read your tax authority\'s guidance or talk to a qualified adviser. Tax rules change.</p>')}

${B.ex('<p>Two friends each invest €10,000 and add €200 a month for 30 years in the same market (7% before costs). One pays 0.2% a year and ends with about €297,000. The other pays 1.8% and ends with about €215,000. That is roughly €82,000 less, just from fees, for the exact same market.</p>')}

${B.tip('<p>Before buying any product ask: "What is the total yearly cost, in percent, including every fee?" If the seller cannot answer clearly, walk away.</p>')}

${B.take(['Costs compound against you, and a 1% fee is not small over decades.', 'Look at TER, trading fees, spreads, currency conversion and custody fees together.', 'Buy-and-hold reduces trading costs and taxable events.', 'Learn your country\'s tax rules or ask a professional.'])}`,
      q: [
        ['Why are fees especially harmful over long periods?', ['They are charged only once', 'They are charged every year and also remove the future growth that money would have earned', 'They only apply in bull markets', 'They are refunded at the end'], 1, 'The effect compounds, so small yearly percentages become large totals.'],
        ['What is the spread?', ['A tax on dividends', 'The gap between the buy price and the sell price', 'A type of ETF', 'Your annual fee'], 1, 'You buy at the higher ask and sell at the lower bid, so every round trip costs the spread.'],
        ['Which investor probably pays less tax drag?', ['One who trades every day', 'One who buys and holds for years', 'It is always identical', 'One who sells every month'], 1, 'Fewer sales mean fewer taxable events, so more money stays invested.']
      ]
    },
    {
      id: 'a6', m: 12, t: 'Stay the course: crashes, rebalancing and behaviour',
      hook: 'Markets crash regularly. Your plan has to be ready before it happens. Play the crash game and see how you react.',
      body: `
<p>If you invest for 40 years, you will live through several crashes. This is not a rare disaster. It is part of the price of long-term returns. What happens next to your wealth depends mostly on what you do during the fall.</p>

<h3>Crashes in history</h3>
<ul>
<li><b>2000 to 2002</b>: the dot-com bubble. The US S&amp;P 500 fell about 49%.</li>
<li><b>2007 to 2009</b>: the global financial crisis. Roughly -57% from peak to bottom.</li>
<li><b>February to March 2020</b>: the pandemic crash. About -34% in just 33 days, followed by one of the fastest recoveries ever.</li>
<li><b>2022</b>: inflation and rising rates. Around -25% for US stocks, with bonds also falling.</li>
</ul>
<p>In each of these cases, patient investors in broad US stock indices eventually recovered and reached new highs, though it took from a few months to roughly five to seven years in price terms. This does not guarantee that every market recovers (Japan took over 30 years to regain its 1989 peak), which is one reason to diversify globally.</p>

<h3>The cost of panic</h3>
<p>Selling after a 30% drop locks the loss in. And then you must decide when to get back in. Many sell near the bottom and re-enter after prices have already rebounded. Studies show the best market days often occur right next to the worst days, so missing just a handful of them can dramatically reduce long-term returns.</p>

<h3>Play: Market crash survival game</h3>
<p>You hold €10,000. Headlines get worse. At each step you decide: hold, sell, buy back or add money. No answer is perfect, but your pattern says a lot about your nerves.</p>
${B.w('panic')}

<h3>Rebalancing: the discipline of buying low</h3>
<p>Say your plan is 70% stocks and 30% bonds. After a stock boom you might be at 80% stocks, more risk than you chose. <b>Rebalancing</b> means bringing the mix back to target by selling some of what rose and buying what lagged. Two simple methods:</p>
<ul>
<li><b>Calendar</b>: once a year on a fixed date.</li>
<li><b>Threshold</b>: whenever any slice drifts more than 5 percentage points from target.</li>
</ul>
<p>An even easier way: direct <i>new</i> contributions to the part that is below target, so you rebalance without selling (and without tax).</p>

<h3>Write your crash plan today</h3>
${B.tryit('<p>Finish this sentence and keep it: "If my portfolio falls 30%, I will ______." For example: "continue my monthly investing, not check prices more than once a week, and talk to a friend before selling anything."</p>')}

${B.take(['Crashes of 20 to 50% happen regularly; plan for them in advance.', 'Selling in a panic turns temporary losses into permanent ones.', 'Rebalance once a year or when a slice drifts by about 5 points.', 'Global diversification protects you if one market takes decades to recover.'])}`,
      q: [
        ['Roughly how far did the S&P 500 fall in the 2020 crash?', ['About 5%', 'About 34%', 'About 80%', 'It did not fall'], 1, 'It dropped about a third in roughly a month before recovering strongly.'],
        ['What does rebalancing do?', ['Restores your target mix by trimming winners and adding to laggards', 'Doubles your risk', 'Eliminates taxes', 'Predicts the next crash'], 0, 'It brings risk back to the level you chose and enforces a buy-low, sell-high discipline.'],
        ['Why is panic-selling usually costly?', ['It makes the market rise', 'It locks in losses and leaves you deciding when to re-enter, often too late', 'It lowers fees', 'It increases dividends'], 1, 'The recovery often starts when sentiment is worst, so people who sold miss it.']
      ]
    },
    {
      id: 'a7', m: 13, t: 'Picking individual stocks: a beginner\'s guide',
      hook: 'Optional and risky, but fascinating. How to read a company without falling for stories.',
      body: `
<p>Most of your investing can (and probably should) be index funds. But many people want to learn how to analyse individual companies. If you do, treat it as a <b>satellite</b>: a small slice of your money (for example 5 to 15%), and a way to learn, not a way to get rich quick.</p>

<h3>Step 1: Understand the business</h3>
<p>Can you explain in two sentences how this company makes money and why customers choose it over competitors? If not, you are guessing. Peter Lynch, a famous fund manager, popularised the idea of investing in what you understand ("your circle of competence").</p>

<h3>Step 2: Read the key numbers</h3>
<ul>
<li><b>Revenue growth</b>: are sales growing steadily?</li>
<li><b>Profit margin</b>: profit divided by revenue. Higher margins often signal pricing power.</li>
<li><b>Earnings per share (EPS)</b>: net profit divided by number of shares.</li>
<li><b>Free cash flow</b>: real cash left after running the business and investing. Hard to fake.</li>
<li><b>Debt</b>: too much debt makes a company fragile. Compare debt to earnings and cash flow.</li>
<li><b>Return on equity (ROE)</b>: how efficiently the company turns shareholder money into profit.</li>
<li><b>Competitive moat</b>: a durable advantage such as brand, network effects, patents or low costs.</li>
</ul>

<h3>Step 3: Valuation: what price is fair?</h3>
<p>A wonderful company can still be a bad investment if you pay too much. The simplest tool is the <b>P/E ratio</b>: price divided by earnings per share.</p>
${B.ex('<p><b>SnackCo</b> (fictional) has revenue of €600M, net profit of €60M (a 10% margin) and 20M shares. EPS = €60M ÷ 20M = <b>€3</b>. The share price is €60, so P/E = 60 ÷ 3 = <b>20</b>. That means you pay €20 for each €1 of yearly profit, an "earnings yield" of 5%. If similar snack companies trade at P/E 15 and SnackCo grows faster, 20 may be fair. If its growth is stalling, it may be expensive. It also pays a €1.20 dividend per share: a 2% yield and a 40% payout ratio, leaving room to grow.</p>')}
<p>Other valuation tools: price-to-sales (P/S), price-to-free-cash-flow, and comparing with competitors and the company's own history.</p>

<h3>Step 4: Think about risk</h3>
<ul>
<li>What could permanently damage this business (new technology, regulation, a key customer)?</li>
<li>How much of your portfolio will it be? Limit any single stock to a small percentage.</li>
<li>What would make you sell? Decide in advance (the thesis broke, not "the price fell").</li>
</ul>

<h3>Traps to avoid</h3>
<ul>
<li><b>Story stocks</b>: great narrative, no profits, and a price that assumes perfection.</li>
<li><b>Hot tips</b> from friends, forums and videos. Ask why they are telling you.</li>
<li><b>Cheap is not always good</b>: a low P/E can mean the market expects profits to collapse.</li>
<li><b>Overtrading</b>: constant buying and selling adds costs and mistakes.</li>
</ul>

${B.warn('<p>Even professional analysts with teams and databases fail to beat the market most of the time. If you pick stocks, keep your core in a diversified fund so that your learning is cheap.</p>')}

${B.take(['Treat stock picking as a small satellite, not your whole plan.', 'Understand the business first, then check growth, margins, debt and cash flow.', 'P/E = price ÷ earnings per share; compare it with peers and growth, never in isolation.', 'Decide in advance what would make you sell, and cap the size of each position.'])}`,
      q: [
        ['A company has a share price of €50 and EPS of €2.50. What is its P/E ratio?', ['5', '20', '50', '125'], 1, '50 ÷ 2.5 = 20.'],
        ['Why is "free cash flow" valued by analysts?', ['It is easy to fake', 'It shows real cash left after running and investing in the business', 'It always equals profit', 'It only matters for banks'], 1, 'Cash is harder to manipulate than accounting profit.'],
        ['What is a smart way to treat individual stock picking as a beginner?', ['Put 100% of savings in one stock', 'A small satellite alongside a diversified core', 'Borrow to buy more', 'Follow tips from strangers'], 1, 'A small slice keeps your learning affordable and your plan safe.']
      ]
    },
    {
      id: 'a8', m: 9, t: 'Your 12-month action plan',
      hook: 'Turn everything you learned into one page and a calendar. Plans beat intentions.',
      body: `
<p>Congratulations. You now know more about investing than most adults. Knowledge only pays when it becomes action, so here is a simple 12-month roadmap.</p>

<h3>The roadmap</h3>
${B.tbl(['When', 'Action'], [
        ['Month 1', 'Build your budget. Open a savings account for your emergency fund and automate a transfer on payday.'],
        ['Month 2', 'Pay off any high-interest debt. Research tax-advantaged accounts in your country.'],
        ['Month 3', 'Choose a regulated broker, open the account, enable two-factor authentication and read the fee table.'],
        ['Month 4', 'Write your one-page plan (below). Make your first small investment into a broad, low-cost ETF.'],
        ['Months 5 to 9', 'Invest automatically every month. Do not watch prices daily. Reach 3 months of emergency savings.'],
        ['Month 10', 'Review: are you following your plan? Check costs. Rebalance if a slice drifted over 5 points.'],
        ['Month 12', 'Raise your monthly amount if income allows. Review goals. Teach someone else what you learned.']
      ])}

<h3>Build your one-page plan</h3>
<p>A professional investor writes an <b>Investment Policy Statement</b>. You can do a mini version in a minute. Try it: it takes your goal, time horizon and comfort with risk, and creates an example plan you can copy and refine.</p>
${B.w('ips')}

<h3>What success looks like</h3>
<ul>
<li><b>Year 1</b>: you built the habit and the safety net. The amount in your account matters less than the routine.</li>
<li><b>Year 5</b>: you have lived through at least one bad market without breaking your plan. Your contributions have grown.</li>
<li><b>Year 10+</b>: compounding becomes visible, with returns on your portfolio rivalling what you add each year.</li>
</ul>

<h3>Common mistakes to avoid one last time</h3>
<ol>
<li>Waiting for the "perfect time" instead of starting small.</li>
<li>Investing money you will need soon.</li>
<li>Chasing last year's winner or a friend's tip.</li>
<li>Paying high fees without noticing.</li>
<li>Selling in a panic.</li>
<li>Letting excitement push you into leverage, derivatives or complex products.</li>
</ol>

${B.key('<p>Wealth building is boring on purpose. If your plan feels exciting every day, something is wrong. The excitement should come later, when you check your balance after ten years and realise that consistent, patient, ordinary decisions did something extraordinary.</p>')}

${B.take(['Follow the 12-month roadmap: base, broker, plan, automation, review.', 'Write a one-page plan so that decisions are made calmly in advance.', 'Boring and consistent beats exciting and erratic.', 'Next steps: explore the Pro Path, or the crypto and trading paths if they interest you.'])}`,
      q: [
        ['What is the main purpose of an Investment Policy Statement?', ['To predict markets', 'To write down your rules so you act calmly and consistently', 'To avoid all risk', 'To impress friends'], 1, 'A written plan guards you against emotional decisions.'],
        ['When should you rebalance, according to the simple rules in this course?', ['Every day', 'Once a year or when a slice drifts about 5 points from target', 'Never', 'Only after a crash'], 1, 'Both calendar and threshold approaches keep risk close to your target.'],
        ['Which is a sign your plan is probably healthy?', ['It requires checking prices hourly', 'It is simple, automatic and you can keep following it in a crash', 'It uses leverage to speed things up', 'It depends on one hot tip'], 1, 'The best plan is the one you can stick to.']
      ]
    }
  ]);
})();
