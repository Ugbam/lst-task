"use client"

import type React from "react"
import type { CartItem } from "../../store/slices/cartSlice"
import QuantitySelector from "../QuantitySelector/QuantitySelector"
import StarRating from "../StarRating/StarRating"
import styles from "./CartItemRow.module.css"

interface CartItemRowProps {
  item: CartItem
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className={styles.row}>
      <div className={styles.itemDetails}>
        <img src={item.image || "/placeholder.svg"} alt={item.name} className={styles.itemImage} />
        <div className={styles.itemInfo}>
          <h3 className={styles.itemName}>{item.name}</h3>
          <p className={styles.itemCategory}>In Stock</p>
          <StarRating rating={item.rating} reviews={item.reviews} />
          <button className={styles.removeButton} onClick={() => onRemove(item.id)}>
             <img src="/images/icons/remove.png" alt="remove" />  REMOVE
          </button>
        </div>
      </div>

      <div className={styles.quantity}>
        <QuantitySelector
          quantity={item.quantity}
          onQuantityChange={(quantity) => onQuantityChange(item.id, quantity)}
        />
      </div>

      <div className={styles.price}>
        <span className={styles.currentPrice}>₦{item.price.toLocaleString()}</span>
        <span className={styles.originalPrice}>₦{(item.price * 1.2).toLocaleString()}</span>
        <span className={styles.perItem}>/ Item</span>
      </div>
    </div>
  )
}

export default CartItemRow
