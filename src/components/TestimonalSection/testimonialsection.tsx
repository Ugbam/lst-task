import type React from "react"
import "./testimonialsection.module.css"

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonial-card">
            <h2 className="testimonials-title">What they say about us</h2>

            <div className="testimonial">
              <img src="/images/testimonial1.jpg" alt="Regina Miles" className="customer-avatar" />

              <div className="star-rating">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star empty">★</span>
              </div>

              <p className="testimonial-text">
                Slate helps you see how many more days you need to work to reach your financial goal.
              </p>

              <div className="customer-info">
                <h4 className="customer-name">Regina Miles</h4>
                <p className="customer-title">Designer</p>
              </div>
            </div>
          </div>

          <div className="testimonial-images">
            <div className="image-grid">
              <img src="/images/testimonials/image-1.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-2.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-3.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-4.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-5.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-6.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-7.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-8.jpg" alt="Testimonial" className="testimonial-img" />
              <img src="/images/testimonials/image-9.jpg" alt="Testimonial" className="testimonial-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
