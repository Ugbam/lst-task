import type React from "react"
import "./calltoaction.module.css"

const CallToActionSection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h4 className="cta-subtitle">Designing Better Experience</h4>
            <h2 className="cta-title">Problems trying to resolve the conflict between</h2>
            <p className="cta-description">
              Problems trying to resolve the conflict between the two major realms of Classical physics:
            </p>
            <div className="cta-price">$16.48</div>
            <button className="cta-button">ADD YOUR CALL TO ACTION</button>
          </div>
          <div className="cta-image">
            <img src="/images/cta/kitchen-utensils.jpg" alt="Kitchen Utensils" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection
