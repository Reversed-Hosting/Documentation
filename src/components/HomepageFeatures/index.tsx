import clsx from "clsx"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "Gaming Servers",
    icon: "🎮",
    description: (
      <>
        High-performance game servers for Minecraft, CS2, Rust, ARK, and more. Instant setup with our one-click
        installers and 24/7 DDoS protection.
      </>
    ),
  },
  {
    title: "VPS Hosting",
    icon: "☁️",
    description: (
      <>
        Scalable virtual private servers with SSD storage, full root access, and choice of Linux distributions. Perfect
        for web hosting and applications.
      </>
    ),
  },
  {
    title: "Dedicated Servers",
    icon: "🖥️",
    description: (
      <>
        Powerful dedicated hardware for demanding applications. Full control, maximum performance, and enterprise-grade
        infrastructure.
      </>
    ),
  },
]

function Feature({ icon, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className="feature-icon">{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
