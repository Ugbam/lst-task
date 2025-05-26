import type React from "react"
import { Link } from "react-router-dom"
import "./footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <h3 className="footer-title">Bandage</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/icons/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/icons/instagram.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src="/images/icons/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h4 className="section-title">Company Info</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/carrier">Carrier</Link>
              </li>
              <li>
                <Link to="/hiring">We are hiring</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Legal</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/carrier">Carrier</Link>
              </li>
              <li>
                <Link to="/hiring">We are hiring</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Features</h4>
            <ul className="footer-links">
              <li>
                <Link to="/business">Business Marketing</Link>
              </li>
              <li>
                <Link to="/analytics">User Analytic</Link>
              </li>
              <li>
                <Link to="/chat">Live Chat</Link>
              </li>
              <li>
                <Link to="/support">Unlimited Support</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/ios">IOS & Android</Link>
              </li>
              <li>
                <Link to="/demo">Watch a Demo</Link>
              </li>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/api">API</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="section-title">Get In Touch</h4>
            <div className="newsletter">
              <input type="email" placeholder="Your Email" className="email-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
            <p className="newsletter-text">Lore imp sum dolor Amit</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
