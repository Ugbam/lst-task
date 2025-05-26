import type React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import styles from "./OrderSummary.module.css"

const OrderSummary: React.FC = () => {
  const { items, deliveryCharges } = useSelector((state: RootState) => state.cart)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const total = subtotal + deliveryCharges
  const itemCount = items.reduce((count, item) => count + item.quantity, 0)

  return (
    <div className={styles.orderSummary}>
      <div className={styles.header}>
        <h3 className={styles.title}>Order Summary</h3>
        <span className={styles.itemCount}>{itemCount} Items</span>
      </div>

      <div className={styles.deliveryInfo}>
        <h4 className={styles.deliveryTitle}>Delivery Charges</h4>
        <p className={styles.deliveryText}>Add your delivery address at checkout to see delivery charges.</p>
      </div>

      <div className={styles.summaryDetails}>
        <div className={styles.summaryRow}>
          <span>Subtotal</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>

        <div className={styles.totalRow}>
          <span className={styles.totalLabel}>Total</span>
          <span className={styles.totalAmount}>₦{total.toLocaleString()}</span>
        </div>

        <p className={styles.deliveryNote}>Excluding Delivery Charges</p>
      </div>

      <button className={styles.checkoutButton}>Proceed to Checkout</button>

      <div className={styles.paymentMethods}>
        <img src="/placeholder.svg?height=20&width=40" alt="PayPal" className={styles.paymentIcon} />
        <img src="/placeholder.svg?height=20&width=40" alt="Visa" className={styles.paymentIcon} />
      </div>
    </div>
  )
}

export default OrderSummary
