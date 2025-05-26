"use client"

import type React from "react"
import styles from "./QuantitySelector.module.css"

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onQuantityChange }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1)
    }
  }

  const handleIncrease = () => {
    onQuantityChange(quantity + 1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      onQuantityChange(value)
    }
  }

  return (
    <div className={styles.quantitySelector}>
      <button className={styles.quantityButton} onClick={handleDecrease} disabled={quantity <= 1}>
        −
      </button>
      <input type="number" value={quantity} onChange={handleInputChange} className={styles.quantityInput} min="1" />
      <button className={styles.quantityButton} onClick={handleIncrease}>
        +
      </button>
    </div>
  )
}

export default QuantitySelector
