import clsx from "clsx"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Get Started - 5min ⏱️
          </Link>
          <Link className="button button--primary button--lg margin-left--md" to="/pricing">
            View Pricing 💰
          </Link>
        </div>
      </div>
    </header>
  )
}

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Active Servers</span>
            </div>
          </div>
          <div className="col col--3">
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime SLA</span>
            </div>
          </div>
          <div className="col col--3">
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Expert Support</span>
            </div>
          </div>
          <div className="col col--3">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Game Types</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GameServerSection() {
  const games = [
    { name: "Minecraft", icon: "⛏️", popular: true },
    { name: "Counter-Strike 2", icon: "🔫", popular: true },
    { name: "Rust", icon: "🦀", popular: true },
    { name: "ARK: Survival", icon: "🦕", popular: false },
    { name: "Valheim", icon: "⚔️", popular: false },
    { name: "Palworld", icon: "🐾", popular: true },
  ]

  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <h2>Popular Game Servers</h2>
          <p>Choose from our extensive library of supported games</p>
        </div>
        <div className="row">
          {games.map((game, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className="feature-card">
                <div className="text--center">
                  <div className="feature-icon">{game.icon}</div>
                  <h3>{game.name}</h3>
                  {game.popular && <span className="badge badge--primary">Popular</span>}
                  <div className="margin-top--md">
                    <Link className="button button--primary button--sm" to="/docs/game-servers">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title} - Premium Gaming Servers`}
      description="Premium gaming servers, VPS hosting, and dedicated servers with 24/7 support and 99.9% uptime guarantee."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <StatsSection />
        <GameServerSection />
      </main>
    </Layout>
  )
}
