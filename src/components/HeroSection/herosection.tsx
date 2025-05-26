import type React from "react"
import { Link } from "react-router-dom"
import styles from "./HeroSection.module.css"

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroGrid}>
          <div className={styles.mainHero}>
            <div className={styles.heroText}>
              <h2 className={styles.heroSubtitle}>SUMMER 2020</h2>
              <h1 className={styles.heroTitle}>NEW COLLECTION</h1>
              <p className={styles.heroDescription}>We know how large objects will act, but things on a small scale.</p>
              <Link to="/shop" className={styles.heroButton}>
                SHOP NOW
              </Link>
            </div>
            <div className={styles.heroImage}>
              <img src="/images/hero-img.png" alt="New Collection" />
            </div>
          </div>

          <div className={styles.sideHeroes}>
            <div className={styles.sideHero}>
             <img src="/images/hero-img.png" alt="New Collection" />
              <div className={styles.sideHeroContent}>
                <h3>FURNITURE</h3>
                <p>Read More</p>
              </div>
            </div>

            <div className={styles.sideHero}>
              <img src="/images/hero/hero-side-2.jpg" alt="Accessories Collection" />
              <div className={styles.sideHeroContent}>
                <h3>FURNITURE</h3>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
