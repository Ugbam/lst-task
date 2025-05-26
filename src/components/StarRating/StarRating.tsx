import React from "react"
import styles from "../StarRating/StarRating.module.css"

interface StarRatingProps {
  rating: number
  reviews: number
}

const StarRating: React.FC<StarRatingProps> = ({ rating, reviews }) => {
 const renderStars = () => {
  const stars: React.ReactNode[] = []
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`${styles.star} ${i <= rating ? styles.filled : styles.empty}`}>
        ★
      </span>
    )
  }
  return stars
}


  return (
    <div className={styles.starRating}>
      <div className={styles.stars}>{renderStars()}</div>
      <span className={styles.reviews}>{reviews} Reviews</span>
    </div>
  )
}

export default StarRating
