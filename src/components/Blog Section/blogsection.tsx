import type React from "react"
import "../Blog Section/blogsection.module.css"

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h4 className="blog-subtitle">Practice Advice</h4>
          <h2 className="blog-title">Featured Posts</h2>
        </div>

        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-image">
              <img src="/images/blog-img1.jpg" alt="Modern Bedroom Design" />
              <span className="new-badge">NEW</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="meta-item">Google</span>
                <span className="meta-item">Trending</span>
                <span className="meta-item">New</span>
              </div>
              <h3 className="blog-post-title">Loudest à la Madison #1 (L'integral)</h3>
              <p className="blog-excerpt">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="blog-footer">
                <div className="blog-date">
                  <span className="date-icon"> <img src="/images/icons/calendar.png" alt="time" /></span>
                  <span>22 April 2021</span>
                </div>
                <div className="blog-comments">
                  <span className="comment-icon"><img src="/images/icons/comments.png" alt="comments" /></span>
                  <span>10 comments</span>
                </div>
              </div>
              <a href="#" className="learn-more">
                Learn More <img src="/images/icons/arrow.png" alt="arrow" />
              </a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">
              <img src="/images/blog-img2.jpg" alt="Modern Kitchen Design" />
              <span className="new-badge">NEW</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="meta-item">Google</span>
                <span className="meta-item">Trending</span>
                <span className="meta-item">New</span>
              </div>
              <h3 className="blog-post-title">Loudest à la Madison #1 (L'integral)</h3>
              <p className="blog-excerpt">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="blog-footer">
                <div className="blog-date">
                  <span className="date-icon"><img src="/images/icons/calendar.png" alt="time" /></span>
                  <span>22 April 2021</span>
                </div>
                <div className="blog-comments">
                  <span className="comment-icon"><img src="/images/icons/comments.png" alt="comments" /></span>
                  <span>10 comments</span>
                </div>
              </div>
              <a href="#" className="learn-more">
                Learn More <img src="/images/icons/arrow.png" alt="arrow" />
              </a>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-image">
              <img src="/images/blog-img3.jpg" alt="Bedroom with Plants" />
              <span className="new-badge">NEW</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="meta-item">Google</span>
                <span className="meta-item">Trending</span>
                <span className="meta-item">New</span>
              </div>
              <h3 className="blog-post-title">Loudest à la Madison #1 (L'integral)</h3>
              <p className="blog-excerpt">
                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
              </p>
              <div className="blog-footer">
                <div className="blog-date">
                  <span className="date-icon"><img src="/images/icons/calendar.png" alt="time" /></span>
                  <span>22 April 2021</span>
                </div>
                <div className="blog-comments">
                  <span className="comment-icon"><img src="/images/icons/comments.png" alt="comments" /></span>
                  <span>10 comments</span>
                </div>
              </div>
              <a href="#" className="learn-more">
                Learn More <img src="/images/icons/arrow.png" alt="arrow" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
