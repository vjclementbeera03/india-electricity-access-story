const dashboardUrl = 'https://india-electricity-access-2010-2020.wintry-charm-9636.chatgpt.site/'

function GapIllustration() {
  return (
    <div className="gap-illustration" aria-label="Illustration showing the rural–urban electricity access gap narrowing from 25.63 to 1.54 percentage points">
      <div className="illustration-topline"><span>THE ACCESS GAP</span><span>2010 — 2020</span></div>
      <div className="gap-row">
        <div className="gap-value">25.63<span>pp</span></div>
        <div className="gap-track"><span className="gap-fill gap-fill-wide" /></div>
        <span className="gap-year">2010</span>
      </div>
      <div className="gap-row">
        <div className="gap-value">1.54<span>pp</span></div>
        <div className="gap-track"><span className="gap-fill gap-fill-narrow" /></div>
        <span className="gap-year">2020</span>
      </div>
      <div className="illustration-foot"><span className="legend-dot" /> Rural–urban difference in electricity access</div>
      <div className="illustration-note">Percentage points</div>
    </div>
  )
}

export default function Page() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Electricity Access Gap home"><span className="brand-mark" aria-hidden="true"><span /></span> FIELDNOTES <span className="wordmark-divider">/</span> INDIA</a>
        <span className="header-label">A DATA STORY · 2010–2020</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> ENERGY &amp; EQUITY <span className="eyebrow-index">01 / 01</span></p>
          <h1>India’s electricity access gap narrowed by 24.09 percentage points</h1>
          <p className="hero-description">A decade of progress in electricity access—and the distance between rural and urban India that remains.</p>
          <a className="dashboard-link" href={dashboardUrl} target="_blank" rel="noreferrer">Explore the interactive dashboard <span aria-hidden="true">↗</span></a>
          <p className="link-caption">Historical World Bank SE4ALL figures · 2010–2020</p>
        </div>
        <div className="hero-visual"><GapIllustration /></div>
        <div className="hero-index" aria-hidden="true">01 <span>—</span> 03</div>
      </section>

      <section className="story-grid" aria-label="About the project">
        <article className="story-card">
          <p className="section-label">01 <span>THE PROJECT</span></p>
          <h2>One country.<br />Two realities.</h2>
          <p>This interactive dashboard compares rural and urban access to electricity in India from 2010 to 2020, using historical World Bank SE4ALL figures.</p>
        </article>
        <article className="story-card story-card-highlight">
          <p className="section-label">02 <span>THE SHIFT</span></p>
          <div className="stat-pair"><div><span className="stat-number">25.63</span><span className="stat-unit">percentage points · 2010</span></div><span className="stat-arrow" aria-hidden="true">→</span><div><span className="stat-number stat-number-end">1.54</span><span className="stat-unit">percentage points · 2020</span></div></div>
          <p>The measured gap narrowed. The endpoints tell one part of the story; the year-to-year changes show how rural access caught up along the way.</p>
        </article>
        <article className="story-card">
          <p className="section-label">03 <span>WHY IT MATTERS</span></p>
          <h2>Progress is<br />a process.</h2>
          <p>Tracking the gap over time reveals shifts that a start-and-finish comparison can miss—and gives a clearer view of how access changed year by year.</p>
        </article>
      </section>

      <footer className="site-footer"><span>PROJECT BY <strong>VICTOR JOHN CLEMENT BEERA</strong></span><span>INDIA · ELECTRICITY ACCESS · 2010—2020</span><a href="https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=IN" target="_blank" rel="noreferrer">Source: World Bank electricity access data ↗</a><a href={dashboardUrl} target="_blank" rel="noreferrer">OPEN DASHBOARD ↗</a></footer>
    </main>
  )
}
