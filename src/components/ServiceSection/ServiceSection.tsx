import type React from "react"
import "./ServiceSection.module.css"

const ServicesSection: React.FC = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="header">
          <h4 className="subtitle">Featured Products</h4>
          <h2 className="title">THE BEST SERVICES</h2>
          <p className="description">Problems trying to resolve the conflict between</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path
                  d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z"
                  fill="#23A6F0"
                />
                <path d="M36 18L42 30H54L45 39L48 51L36 45L24 51L27 39L18 30H30L36 18Z" fill="white" />
              </svg>
            </div>
            <h3 className="service-name">Easy Wins</h3>
            <p className="service-description">Get your best looking smile now!</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path
                  d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z"
                  fill="#23A6F0"
                />
                <rect x="20" y="20" width="32" height="32" rx="4" fill="white" />
                <rect x="24" y="24" width="24" height="4" fill="#23A6F0" />
                <rect x="24" y="32" width="24" height="4" fill="#23A6F0" />
                <rect x="24" y="40" width="16" height="4" fill="#23A6F0" />
              </svg>
            </div>
            <h3 className="service-name">Concrete</h3>
            <p className="service-description">
              Defalcate is most focused in helping you discover your most beautiful smile
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                <path
                  d="M36 72C55.8823 72 72 55.8823 72 36C72 16.1177 55.8823 0 36 0C16.1177 0 0 16.1177 0 36C0 55.8823 16.1177 72 36 72Z"
                  fill="#23A6F0"
                />
                <path d="M20 50L30 40L36 46L52 30L56 34L36 54L20 50Z" stroke="white" strokeWidth="3" fill="none" />
              </svg>
            </div>
            <h3 className="service-name">Hack Growth</h3>
            <p className="service-description">Overcame any hurdle or any other problem.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
