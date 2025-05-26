import type React from "react"
import styles from "../Breadcrumb/breadcrumb.module.css"

const Breadcrumb: React.FC = () => {
  return (
    <nav className={styles.breadcrumb}>
      <a href="/" className={styles.link}>
        Home
      </a>
      <span className={styles.separator}>›</span>
      <a href="/shop" className={styles.link}>
        Shop
      </a>
      <span className={styles.separator}>›</span>
      <span className={styles.current}>Shopping Cart</span>
    </nav>
  )
}

export default Breadcrumb
