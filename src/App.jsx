import './App.css'
import admitraLogo from './assets/Admitra logo.png'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import { useLanguage } from './i18n/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
  useScrollAnimation()
  const { t } = useLanguage()

  return (
    <main className="page-shell">
      <div className="bg-orb bg-orb-a" aria-hidden="true"></div>
      <div className="bg-orb bg-orb-b" aria-hidden="true"></div>

      <header className="top-bar container">
        <a href="#" className="brand" aria-label="Admitra home">
          <img src={admitraLogo} alt="Admitra logo" className="brand-logo" />
        </a>
        <div className="nav-right">
          <LanguageSwitcher />
          <a href="#download" className="nav-cta">
            {t('nav.getApp')}
          </a>
        </div>
      </header>

      <section className="hero section" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="pill">{t('hero.badge')}</p>
            <h1 id="hero-title">
              {t('hero.title')}
            </h1>
            <p className="subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="hero-actions">
              <a href="#download" className="primary-btn">
                {t('hero.cta1')}
              </a>
              <a href="#screenshots" className="ghost-btn">
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Platform highlights">
            <h2>{t('hero.panel')}</h2>
            <ul>
              <li>{t('hero.point1')}</li>
              <li>{t('hero.point2')}</li>
              <li>{t('hero.point3')}</li>
              <li>{t('hero.point4')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section impact" aria-labelledby="impact-title">
        <div className="container">
          <div className="section-title-wrap">
            <p className="eyebrow">{t('impact.eyebrow')}</p>
            <h2 id="impact-title">{t('impact.title')}</h2>
          </div>
          <div className="impact-grid">
            <article className="impact-card">
              <h3>{t('impact.what')}</h3>
              <p>
                {t('impact.whatDesc')}
              </p>
            </article>
            <article className="impact-card">
              <h3>{t('impact.why')}</h3>
              <p>
                {t('impact.whyDesc')}
              </p>
            </article>
            <article className="impact-card stat-card">
              <strong>{t('impact.stat1')}</strong>
              <p>{t('impact.stat1Desc')}</p>
            </article>
            <article className="impact-card stat-card">
              <strong>{t('impact.stat2')}</strong>
              <p>{t('impact.stat2Desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section pillars" aria-labelledby="pillars-title">
        <div className="container">
          <div className="section-title-wrap">
            <p className="eyebrow">{t('pillars.eyebrow')}</p>
            <h2 id="pillars-title">{t('pillars.title')}</h2>
          </div>
          <div className="pillars-grid">
            <article className="pillar-card">
              <h3>{t('pillars.discovery')}</h3>
              <p>
                {t('pillars.discoveryDesc')}
              </p>
            </article>
            <article className="pillar-card">
              <h3>{t('pillars.roadmaps')}</h3>
              <p>
                {t('pillars.roadmapsDesc')}
              </p>
            </article>
            <article className="pillar-card">
              <h3>{t('pillars.clarity')}</h3>
              <p>
                {t('pillars.clarityDesc')}
              </p>
            </article>
            <article className="pillar-card">
              <h3>{t('pillars.family')}</h3>
              <p>
                {t('pillars.familyDesc')}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section process" aria-labelledby="process-title">
        <div className="container">
          <div className="section-title-wrap">
            <p className="eyebrow">{t('process.eyebrow')}</p>
            <h2 id="process-title">{t('process.title')}</h2>
          </div>
          <div className="process-line">
            <article>
              <span>01</span>
              <h3>{t('process.step1')}</h3>
              <p>
                {t('process.step1Desc')}
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>{t('process.step2')}</h3>
              <p>
                {t('process.step2Desc')}
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>{t('process.step3')}</h3>
              <p>
                {t('process.step3Desc')}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="showcase section"
        id="screenshots"
        aria-labelledby="showcase-title"
      >
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{t('showcase.eyebrow')}</p>
            <h2 id="showcase-title">{t('showcase.title')}</h2>
            <p>{t('showcase.note')}</p>
          </div>

          <div className="screens-grid">
            <img
              src="/screenshots/app-screen-1.svg"
              alt="App screenshot showing dashboard overview"
              className="screen"
              loading="lazy"
            />
            <img
              src="/screenshots/app-screen-2.svg"
              alt="App screenshot showing planning timeline"
              className="screen"
              loading="lazy"
            />
            <img
              src="/screenshots/app-screen-3.svg"
              alt="App screenshot showing recommendation panel"
              className="screen"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        className="download section"
        id="download"
        aria-labelledby="download-title"
      >
        <div className="container">
          <h2 id="download-title">{t('download.title')}</h2>
          <p className="download-subtitle">
            {t('download.subtitle')}
          </p>
          <div className="store-buttons">
            <a href="#" className="store-btn" aria-label={t('download.appStore')}>
              <svg viewBox="0 0 24 24" className="store-icon" aria-hidden="true">
                <path d="M16.08 12.18c.03 3.2 2.8 4.26 2.83 4.27-.02.07-.44 1.52-1.46 3-.87 1.28-1.79 2.55-3.22 2.58-1.4.03-1.86-.83-3.47-.83s-2.12.8-3.43.86c-1.38.05-2.43-1.38-3.31-2.65C2.2 16.74.78 11.9 2.66 8.63c.93-1.62 2.6-2.65 4.42-2.68 1.36-.03 2.65.92 3.47.92.81 0 2.34-1.14 3.95-.97.67.03 2.56.27 3.77 2.04-.1.06-2.25 1.31-2.19 4.24ZM13.44 4.2c.73-.88 1.23-2.1 1.09-3.32-1.05.04-2.32.7-3.07 1.58-.68.78-1.28 2.03-1.12 3.22 1.17.09 2.37-.59 3.1-1.48Z" />
              </svg>
              <span>
                <small>Download on the</small>
                <strong>{t('download.appStore')}</strong>
              </span>
            </a>

            <a href="#" className="store-btn" aria-label={t('download.googlePlay')}>
              <svg viewBox="0 0 24 24" className="store-icon" aria-hidden="true">
                <path d="M3.6 2.8c-.3.3-.5.9-.5 1.7V19.6c0 .8.2 1.4.5 1.7l.08.08 8.56-8.56v-.2L3.68 2.72l-.08.08Zm12.03 12.9-2.84-2.84v-.2l2.84-2.84.06.03 3.36 1.9c.96.55.96 1.45 0 2l-3.36 1.9-.06.03Zm-.58.32-2.9-2.9-8.55 8.55c.48.52 1.27.58 2.17.08l9.28-5.25Zm-9.28-13c-.9-.5-1.69-.44-2.17.08l8.55 8.55 2.9-2.9L5.77 3.02Z" />
              </svg>
              <span>
                <small>Get it on</small>
                <strong>{t('download.googlePlay')}</strong>
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-note section">
        <div className="container">
          <p>{t('footer')}</p>
        </div>
      </footer>
    </main>
  )
}

export default App
