import type React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import styles from "./Header.module.css"

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.contactInfo}>
            <span><img src="/images/icons/phone.png" alt="Phonenumber" /> (225) 555-0118</span>
            <span><img src="/images/icons/email.png" alt="Email" /> michelle.rivera@example.com</span>
          </div>
          <div className={styles.promotion}>Follow Us and get a chance to win 80% off</div>
          <div className={styles.socialLinks}>
            Follow Us:
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/images/icons/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/images/icons/instagram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <img src="/images/icons/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link to="/">
              <h1>Bandage</h1>
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pages">Pages</Link>
          </nav>
          <div className={styles.userActions}>
            <Link to="/login"><img src="/images/icons/person.png" alt="Login" /> Login / Register</Link>
            <button className={styles.iconButton}> <img src="/images/icons/serch.png" alt="search" /> </button>
            <Link to="/cart" className={styles.iconButton}>
              <img src="/images/icons/cart.png" alt="cart" /> {cartItemCount > 0 && <span className={styles.cartCount}>{cartItemCount}</span>}
            </Link>
            <button className={styles.iconButton}><img src="/images/icons/liked.png" alt="Likeditems" /> 1</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

