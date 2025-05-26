import type React from "react"
import { useDispatch } from "react-redux"
import { type CartItem, updateQuantity, removeItem } from "../../store/slices/cartSlice"
import CartItemRow from "../CartItemRow/CartItemRow"
import styles from "./CartTable.module.css"

interface CartTableProps {
  items: CartItem[]
}

const CartTable: React.FC<CartTableProps> = ({ items }) => {
  const dispatch = useDispatch()

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id))
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.headerCell}>Item Details</div>
        <div className={styles.headerCell}>Quantity</div>
        <div className={styles.headerCell}>Price</div>
      </div>

      <div className={styles.tableBody}>
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} onQuantityChange={handleQuantityChange} onRemove={handleRemoveItem} />
        ))}
      </div>
    </div>
  )
}

export default CartTable
