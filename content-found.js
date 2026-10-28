/* Money Foundations: 6 lessons */
(function () {
  'use strict';
  const MQ = window.MQ, B = MQ.B;

  MQ.addLessons('found', [
    {
      id: 'f1', m: 9, t: 'Money, inflation and why saving is not enough',
      hook: 'Your money is quietly losing power right now. Here is how to measure it, and what to do about it.',
      body: `
<p>Imagine a pizza costs <b>€10</b> today. If prices rise by 3% every year, the same pizza will cost about <b>€18</b> in 20 years. Nothing changed about the pizza. The money just buys less. That slow shrinking is called <b>inflation</b>, and it is the main reason that keeping all your money in a drawer (or a 0% account) is not a safe plan. It is a slow leak.</p>

<h3>What money actually does</h3>
<p>Money does three jobs. It is a <b>medium of exchange</b> (you swap it for things), a <b>unit of account</b> (prices are written in it) and a <b>store of value</b> (you can keep it for later). Inflation attacks the third job. Over a few months you barely notice. Over 20 years it is huge.</p>

<h3>How inflation works</h3>
<p>When there is more money and demand in the economy than things to buy, or when production gets more expensive (energy, wages, shipping), prices rise. Central banks such as the European Central Bank or the US Federal Reserve aim for about <b>2% inflation a year</b>, which they consider healthy. Sometimes it jumps much higher, like in 2022, when many countries saw prices rise 8% or more in a single year.</p>

${B.key('<p><b>Nominal vs. real.</b> If your savings grow 2% but prices rise 3%, you did not get richer. Your <i>real</i> return is about -1%. Always ask: what can this money buy later, not just how many euros will I have?</p>')}

<h3>Feel it yourself</h3>
<p>Move the sliders below. Notice how brutal 6% inflation is over 30 years, and how much difference even a modest return makes.</p>
${B.w('inflation')}

<h3>The rule of 72</h3>
<p>A handy trick: divide 72 by the yearly percentage to estimate how many years it takes for something to double. At 3% inflation, prices double in about <b>24 years</b> (72 ÷ 3). At 7% investment growth, money doubles in about <b>10 years</b> (72 ÷ 7). We will use this again in the compound-interest lesson.</p>

${B.ex('<p>Marta is 19 and keeps €5,000 from summer jobs in a drawer. At 3% inflation, in 10 years it is still €5,000 on paper but buys what about €3,700 buys today. Her friend Diogo puts the same €5,000 in a diversified fund. It will not rise in a straight line (it will have good and bad years), but historically such funds have beaten inflation over long periods. Neither choice is risk-free. Doing nothing is also a choice with a cost.</p>')}

<h3>Saving vs. investing: two different jobs</h3>
<ul>
<li><b>Saving</b> is for short-term needs and safety: emergencies, next year's holiday, a laptop. You want the money to be there, stable and easy to reach.</li>
<li><b>Investing</b> is for long-term goals (5 years or more): buying assets that can grow faster than inflation, accepting that the value will go up and down on the way.</li>
</ul>
<p>You need both. Savings protect you from emergencies so that you never have to sell investments at a bad moment.</p>

${B.warn('<p>"Investing" is not a magic word for "making money". It means taking risk in exchange for the <i>chance</i> of higher returns. You can lose money. The rest of this course is about taking that risk wisely.</p>')}

${B.take(['Inflation steadily reduces what your money can buy, usually around 2 to 3% a year.', 'Look at real returns (after inflation), not just nominal numbers.', 'Savings are for stability and emergencies; investing is for long-term growth.', 'The rule of 72 estimates doubling time: 72 divided by the yearly rate.'])}`,
      q: [
        ['If your savings account pays 1% and inflation is 3%, what happens to your purchasing power?', ['It grows by 1%', 'It falls by about 2% a year', 'It stays the same', 'It falls by 4%'], 1, 'Real return is roughly the interest rate minus inflation: 1% - 3% = about -2%.'],
        ['Using the rule of 72, about how long do prices take to double at 4% inflation?', ['8 years', '12 years', '18 years', '36 years'], 2, '72 ÷ 4 = 18 years.'],
        ['Which is the best use of a savings account?', ['Money you need in the next 1 to 2 years and emergencies', 'Your retirement money for the next 40 years', 'Getting rich quickly', 'Betting on the stock market'], 0, 'Savings are for short-term needs and safety. Long-term goals usually need investments.']
      ]
    },
    {
      id: 'f2', m: 10, t: 'Your money foundation: budget, emergency fund and debt',
      hook: 'Before you invest a single euro, build the base that stops life from knocking you over.',
      body: `
<p>Most investing advice starts with "buy this fund". Smart investing starts <b>earlier</b>: with a budget, a safety cushion and a plan for debt. Skip this step and one broken phone or lost job could force you to sell investments at the worst time.</p>

<h3>Step 1: Know where your money goes</h3>
<p>A popular starting rule is the <b>50/30/20 rule</b>: about 50% of income after tax goes to <b>needs</b> (rent, food, transport, bills), 30% to <b>wants</b> (fun, subscriptions, eating out) and 20% to <b>saving and investing</b>. It is a guide, not a law. If you are a student earning €400 a month, 20% is €80, and that is a perfectly good start. What matters is building the habit.</p>
${B.w('budget')}

<h3>Step 2: Pay yourself first</h3>
<p>Do not save "what is left". Set up an automatic transfer to your savings on payday, <i>before</i> you can spend it. Treat it like a bill you owe to your future self. Automation beats willpower.</p>

<h3>Step 3: The emergency fund</h3>
<p>An <b>emergency fund</b> is money kept safe and easy to access for surprises: car repairs, medical costs, losing your job. The common target is <b>3 to 6 months of essential expenses</b> in a normal savings account (not in stocks or crypto). Students and young people with low costs can begin with one month and grow from there.</p>
${B.ex('<p>Rui invests €2,000 in stocks but has no emergency fund. Three months later his laptop breaks and he needs €700 now. The market happens to be down 15%, so he sells at a loss and locks it in. Ana invested the same amount but kept €1,000 in savings first. She paid for the laptop from savings and her investments stayed untouched and recovered later. Same investments, very different outcome, because of the cushion.</p>')}

<h3>Step 4: Handle debt wisely</h3>
<ul>
<li><b>High-interest debt</b> (credit cards, overdrafts, payday loans, often 15 to 25% a year or more) is like a guaranteed negative return. Paying it off beats almost any investment. Do this first.</li>
<li><b>Low-interest debt</b> (for example some student or mortgage loans at low rates) is normal. You can keep paying it down while you start investing.</li>
<li><b>Never</b> borrow to invest in risky assets. Losses are multiplied and you still owe the debt.</li>
</ul>

<h3>Step 5: Invest in your biggest asset: you</h3>
<p>When you are young, the best "investment" is often skills: learning a trade, a language, coding, sales. Raising your income by €200 a month is worth more than a 10% return on €1,000. Investing skills and investing money work together.</p>

${B.w('checklist', { key: 'f2', title: 'Your money foundation checklist', accent: 'found', items: 'I know roughly what I earn and spend each month|I have a separate savings account for emergencies|I set up an automatic monthly transfer to savings|I have at least 1 month of essential expenses saved (aiming for 3 to 6)|I have no high-interest debt, or I have a plan to pay it off|I understand I should only invest money I will not need for 5+ years' })}

${B.take(['Build the base first: budget, emergency fund, no high-interest debt.', 'Use 50/30/20 as a starting guide and automate saving on payday.', 'Keep the emergency fund in a safe, accessible account, not in risky assets.', 'Paying off a 20% credit card is a guaranteed 20% return.'])}`,
      q: [
        ['Which debt should you usually pay off BEFORE investing?', ['A 3% student loan', 'A credit card charging 20% a year', 'None, always invest first', 'Debt you owe a friend at 0%'], 1, 'High-interest debt is a guaranteed loss that beats typical investment returns.'],
        ['Where is the best place for an emergency fund?', ['Stocks', 'Crypto', 'A safe, easy-access savings account', 'A single company\'s shares'], 2, 'The point is that the money is available and stable when you need it.'],
        ['What does "pay yourself first" mean?', ['Spend on yourself before anything else', 'Automatically save when you get paid, before spending', 'Borrow to invest', 'Skip paying bills'], 1, 'Automatic saving on payday makes it a habit and removes the temptation to spend it.']
      ]
    },
    {
      id: 'f3', m: 10, t: 'Risk, return and time',
      hook: 'Why higher returns always come with bumps, and how time changes the equation.',
      body: `
<p>Here is the most important rule in finance: <b>higher potential return comes with higher risk</b>. If someone offers you a high return with no risk, either they are lying or you are the product.</p>

<h3>What risk really means</h3>
<p>In everyday talk, risk means "I might lose money". Professionals look at two things:</p>
<ul>
<li><b>Volatility</b>: how much the price jumps around. A stock fund can fall 30% in a bad year and recover later. That is volatility.</li>
<li><b>Permanent loss</b>: the money is gone for good. A company that goes bankrupt, a scam, a coin that goes to zero.</li>
</ul>
<p>Volatility is the price you pay for higher returns. Permanent loss is what you try to avoid with diversification and good choices.</p>

${B.w('ladder')}

<h3>Time changes everything</h3>
<p>Your <b>time horizon</b> is how long until you need the money. Stocks can swing wildly in one year, but over 15 to 20 years diversified stock markets have historically rewarded patient investors. Over 1 year, the outcome is close to a coin flip. Over 20 years, far less so (though never guaranteed).</p>
${B.key('<p><b>The 5-year rule of thumb.</b> Money you need within about 5 years should not sit in volatile assets such as stocks or crypto. If a crash happens right before you need it, you will not have time to recover.</p>')}

<h3>Risk tolerance vs. risk capacity</h3>
<ul>
<li><b>Risk capacity</b>: how much loss you can afford financially (stable income, no debt, long horizon = high capacity).</li>
<li><b>Risk tolerance</b>: how much loss you can handle emotionally without panic-selling.</li>
</ul>
<p>Your real risk level is the <i>lower</i> of the two. A young person with a long horizon may have high capacity, but if a 30% drop would make them sell everything, their tolerance is low and the plan has to respect that.</p>

${B.ex('<p>Think of a roller coaster and a train to the same city. The roller coaster (stocks) is thrilling and bumpy, and over a long trip may take you farther. The train (bonds, savings) is smooth but slower. If you get sick on roller coasters and bail out halfway, you end up nowhere. Choose the ride you can finish.</p>')}

<h3>Diversification: the only free lunch</h3>
<p>Do not put all your eggs in one basket. Spreading money across many companies, countries and asset types means that one disaster cannot destroy you. Economists call diversification the closest thing to a free lunch in investing: it reduces risk without necessarily reducing expected return. You will practise it in the Investor path.</p>

${B.warn('<p>Past returns are not a promise. "It went up 300% last year" tells you almost nothing about next year, and chasing last year\'s winner is one of the most common beginner mistakes.</p>')}

${B.take(['Higher expected return comes with higher risk. No exceptions.', 'Volatility is temporary ups and downs; permanent loss is the real enemy.', 'Money needed within about 5 years does not belong in volatile assets.', 'Your true risk level is the lower of your financial capacity and your emotional tolerance.', 'Diversification reduces risk without necessarily reducing expected returns.'])}`,
      q: [
        ['A friend promises "20% a year, guaranteed, no risk". The smartest reaction is…', ['Invest everything quickly', 'Be very suspicious: high returns with no risk do not exist', 'Ask for a discount', 'Borrow money to invest more'], 1, 'Return and risk travel together. Guaranteed high returns are a classic scam signal.'],
        ['You need money for a house deposit in 2 years. Which fits best?', ['100% in a volatile crypto coin', 'Mostly safe, stable savings', '100% in one stock', 'A leveraged trade'], 1, 'Short horizons need stability, so a crash cannot ruin the plan right before you need the money.'],
        ['What is the difference between risk capacity and risk tolerance?', ['They are the same thing', 'Capacity is what you can afford to lose; tolerance is what you can stomach emotionally', 'Capacity is emotional; tolerance is financial', 'Tolerance only matters for traders'], 1, 'Both matter. Your real limit is the lower of the two.']
      ]
    },
    {
      id: 'f4', m: 11, t: 'The magic of compound interest',
      hook: 'The snowball effect that turns small, regular amounts into serious money, and why starting early matters more than starting big.',
      body: `
<p><b>Compound interest</b> means earning returns on your returns. Imagine rolling a small snowball down a long hill. At first it barely grows. Later, each roll adds more snow because there is already a lot of snow to stick to. That is compounding.</p>

<h3>Simple vs. compound</h3>
<p>With simple interest, €1,000 at 10% earns €100 every year, forever: after 10 years you have €2,000. With compound interest, each year's 10% is calculated on the <i>new, bigger</i> amount: after 10 years you have about <b>€2,594</b>. After 30 years, simple interest gives €4,000 while compounding gives about <b>€17,450</b>. Same rate, same start, radically different outcome.</p>

<h3>Play with the machine</h3>
<p>Try it: set a monthly amount, a return and a number of years. Then use the "wait" slider to see what happens if you start 10 years later.</p>
${B.w('compound', { wait: 10 })}

${B.ex('<p><b>Anna vs. Ben.</b> Anna starts investing €100 a month at age 20 and stops at 30 (10 years, €12,000 paid in) and never adds another cent. Ben waits until 30 and invests €100 a month until 60 (30 years, €36,000 paid in). At 7% a year, by age 60 Anna can end up with a similar amount, or even more, despite paying in a third as much. Why? Her money had 10 extra years of snowball. Time beats amount.</p>')}

<h3>The three levers of compounding</h3>
<ol>
<li><b>Time</b>: the most powerful lever, and the only one you cannot buy back. Start now, even small.</li>
<li><b>Regular contributions</b>: adding money steadily keeps feeding the snowball.</li>
<li><b>Return</b>: higher returns help, but they come with higher risk and fees. Do not chase them at the expense of the first two.</li>
</ol>

<h3>Compounding works against you too</h3>
<p>Credit-card debt at 20% compounds against you. And so do <b>fees</b>: a fund that costs 2% a year can eat a large part of your final result over decades (we will measure this in the Investor path).</p>

${B.key('<p><b>The best time to start was yesterday. The second best time is today.</b> Your first €50 a month matters more for your future than a perfect strategy you start in five years.</p>')}

${B.warn('<p>Real investments do not grow in a smooth line. A "7% average" can mean +25% one year and -15% the next. The curve in the widget is a smoothed illustration. Never rely on a promised return.</p>')}

${B.take(['Compounding means earning returns on previous returns, so growth accelerates over time.', 'Starting early beats investing more later: time is the strongest lever.', 'Regular contributions plus patience build wealth; waiting for the "perfect moment" costs money.', 'Compounding also works against you in debt and high fees.'])}`,
      q: [
        ['Roughly how long does money take to double at 8% a year (rule of 72)?', ['4 years', '9 years', '15 years', '20 years'], 1, '72 ÷ 8 = 9 years.'],
        ['Which factor is MOST powerful in compounding?', ['Picking the hottest asset', 'Time', 'Checking prices daily', 'Large starting amount only'], 1, 'Time lets growth build on growth. You cannot buy back lost years.'],
        ['Why can a 2% yearly fund fee be so damaging over decades?', ['It is charged only once', 'It compounds against you, reducing the base that grows each year', 'It is tax deductible', 'It only matters in bear markets'], 1, 'Fees are paid every year, so you lose both the fee and all the future growth that money would have earned.']
      ]
    },
    {
      id: 'f5', m: 13, t: 'The investing toolbox: stocks, bonds, funds, ETFs and more',
      hook: 'A plain-English tour of everything you can invest in, how each one makes money and what can go wrong.',
      body: `
<p>You will meet many names on your investing journey. Here is the full toolbox, explained simply.</p>

<h3>The main asset classes</h3>
<ul>
<li><b>Cash and savings</b>: stable, low return, protected by deposit guarantees up to a limit (in the EU, usually €100,000 per bank).</li>
<li><b>Stocks (shares)</b>: you own a small piece of a company. You earn from the price rising and from dividends (a share of profits). High long-term potential, big ups and downs.</li>
<li><b>Bonds</b>: you lend money to a government or company and receive regular interest plus your money back at the end. Usually calmer than stocks, but prices fall when interest rates rise and companies can fail to repay.</li>
<li><b>Funds and ETFs</b>: baskets holding many stocks or bonds at once, so you diversify with one purchase.</li>
<li><b>Real estate</b>: property or listed property companies (REITs). Rental income plus price changes. Large amounts, hard to sell quickly, often needs a loan.</li>
<li><b>Commodities and gold</b>: raw materials. Gold is often held as a "safe haven" and produces no income.</li>
<li><b>Crypto-assets</b>: digital assets on blockchains, like Bitcoin and Ethereum. Very volatile, with an additional set of security and scam risks. The crypto paths cover them in depth.</li>
<li><b>Derivatives</b> (futures, options, CFDs): contracts whose value depends on another asset, often with leverage. Advanced, high risk, and a leading cause of beginner losses.</li>
</ul>

${B.tbl(['Asset', 'How it makes money', 'Main risk', 'Suits'], [
        ['Savings', 'Interest', 'Inflation beats the interest', 'Emergencies, short-term goals'],
        ['Stocks', 'Price growth + dividends', 'Big drops, company failure', 'Long-term growth (5+ years)'],
        ['Bonds', 'Interest payments', 'Rising rates, default', 'Stability, medium horizon'],
        ['ETFs / funds', 'Whatever they hold', 'Same as the assets inside, plus fees', 'Easy diversification'],
        ['Real estate', 'Rent + price growth', 'Illiquid, debt, local market', 'Long horizon, bigger capital'],
        ['Crypto', 'Price changes (mostly)', 'Extreme volatility, scams, hacks', 'Small satellite position only'],
        ['Derivatives / CFDs', 'Leveraged price bets', 'Losing more than expected, fast', 'Experienced traders only']
      ])}

<h3>Bonds in 30 seconds</h3>
<p>Imagine you lend €1,000 to a government for 10 years and it pays you 3% (€30) each year, then returns your €1,000. Simple. The catch: if new bonds start paying 5%, nobody wants your 3% bond at full price, so its market price falls. That is why bond prices and interest rates move in opposite directions.</p>

<h3>Stocks in 30 seconds</h3>
<p>If a company has 1,000,000 shares and you own 1,000, you own 0.1% of it. If the company earns more profit over time, the shares tend to become more valuable. If it struggles, they can drop to nothing. That is why we rarely recommend buying just one.</p>

<h3>Where do you buy these?</h3>
<p>You need a <b>broker</b> (a company that executes your orders), a bank with investing services, or a crypto exchange. Choose one that is <b>regulated</b> in your region, charges low fees and keeps your assets separate from its own. Securities held at a broker are normally segregated and covered by an investor compensation scheme as a last resort (in the EU, often €20,000), but this is not a promise that you will not lose money from market falls.</p>

${B.warn('<p>Complexity is not sophistication. Products with fancy names, "guaranteed" structures, high commissions or leverage usually make the seller richer, not you. If you cannot explain in one sentence how it makes money, do not buy it.</p>')}

${B.take(['Each asset class makes money differently and carries different risks.', 'Funds and ETFs bundle many assets so you diversify instantly.', 'Bond prices move opposite to interest rates.', 'Derivatives and CFDs are for experienced traders, not beginners.', 'Use a regulated broker or platform and understand what you buy.'])}`,
      q: [
        ['What is an ETF?', ['A type of crypto coin', 'A basket of many assets you can buy as one product on an exchange', 'A savings account', 'A loan to a company'], 1, 'An exchange-traded fund holds many stocks or bonds, giving instant diversification.'],
        ['Why do bond prices usually fall when interest rates rise?', ['Bonds stop paying interest', 'New bonds pay more, so older lower-paying bonds are worth less', 'Governments default', 'Inflation disappears'], 1, 'Investors prefer the new higher rates, so the older bond must be cheaper to compete.'],
        ['Which product is MOST dangerous for a beginner?', ['A global stock index ETF', 'A savings account', 'A leveraged CFD', 'A government bond'], 2, 'Leveraged products can produce large losses very quickly.']
      ]
    },
    {
      id: 'f6', m: 11, t: 'Your brain vs. your money: biases and discipline',
      hook: 'The biggest threat to your returns is not the market. It is the person looking back at you in the mirror.',
      body: `
<p>Two investors buy the same fund. One earns solid returns. The other loses money. The difference is usually behaviour: when they bought, when they panicked, what they chased. Understanding your own mind is the cheapest edge you will ever get.</p>

<h3>The most common mental traps</h3>
<ul>
<li><b>Loss aversion</b>: losing €100 hurts roughly twice as much as gaining €100 feels good. This makes people sell winners too early and hold losers too long, hoping to "get back to even".</li>
<li><b>FOMO (fear of missing out)</b>: you see a coin up 80% this week and buy at the top because everyone is talking about it.</li>
<li><b>Herd behaviour</b>: doing what the crowd does feels safe, but crowds are often wrong at extremes (euphoria at tops, panic at bottoms).</li>
<li><b>Overconfidence</b>: a few lucky wins make you feel like a genius. Markets are very good at humbling people.</li>
<li><b>Recency bias</b>: believing the recent past will continue forever. "It always goes up" after a boom; "it will never recover" after a crash.</li>
<li><b>Confirmation bias</b>: reading only the opinions that agree with what you already hold.</li>
<li><b>Sunk-cost fallacy</b>: refusing to sell a losing position because "I have already lost so much".</li>
<li><b>Anchoring</b>: fixating on the price you paid instead of what the asset looks like today.</li>
</ul>

${B.ex('<p>Lena bought a coin at €10 after a friend said it would "go to €100". It falls to €5. Instead of asking "would I buy this today at €5?" she thinks "I must wait until it gets back to €10". Her price is anchored on her purchase. Months later it is at €1. The market does not know or care what she paid.</p>')}

<h3>Antidotes: rules beat feelings</h3>
<ol>
<li><b>Write a plan before you invest.</b> What will you buy, how much, how often, and what you will do in a crash. Decisions made calmly beat decisions made in panic.</li>
<li><b>Automate.</b> Automatic monthly investing removes timing decisions.</li>
<li><b>The 24-hour rule.</b> Never buy something because of a hot tip within 24 hours of hearing about it.</li>
<li><b>Check less.</b> Daily price watching increases stress and bad decisions. Long-term investors can look monthly or quarterly.</li>
<li><b>Keep a journal.</b> Write why you bought and what you expected. Reviewing it later teaches you faster than any book.</li>
<li><b>Limit "play money".</b> If you must speculate, cap it at a small slice (for example 5%) so mistakes do not hurt your goals.</li>
</ol>

<h3>Your information diet</h3>
<p>Social media is full of "finfluencers" showing big profit screenshots. Remember survivorship bias: you only see the winners who post. Ask three questions of anyone giving tips: <b>How do they get paid? What are they selling? Can I see their full, verified record including losses?</b> Be especially careful with anyone who promises certainty.</p>

${B.tryit('<p>Write down in one sentence what you will do if your investments fall 30% next year. Save it somewhere you can find it. That sentence is your first investment policy.</p>')}

${B.take(['Behaviour, not intelligence, decides most investing results.', 'Know the traps: loss aversion, FOMO, herd behaviour, overconfidence, anchoring.', 'Use written rules, automation and a cooling-off period to protect yourself from yourself.', 'Question every tip: how does this person get paid?'])}`,
      q: [
        ['You keep holding a losing investment only because "I have already lost so much". This is…', ['Diversification', 'The sunk-cost fallacy', 'Compounding', 'Rebalancing'], 1, 'Past losses are gone either way. The only useful question is whether to hold the asset from today.'],
        ['What is a good defence against FOMO?', ['Buy faster', 'A written plan and a 24-hour cooling-off rule', 'Follow more influencers', 'Check prices every hour'], 1, 'Rules decided calmly beat feelings decided in excitement.'],
        ['Why should you be careful with profit screenshots on social media?', ['They are always fake', 'Survivorship bias: you do not see the losers or the full record', 'They are illegal', 'They prove the strategy works'], 1, 'People post wins and hide losses, and some are fabricated, so screenshots are not evidence.']
      ]
    }
  ]);
})();
