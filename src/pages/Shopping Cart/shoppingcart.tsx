import type React from "react"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"
import Breadcrumb from "../../components/Breadcrumb/breadcrumb"
import CartTable from "../../components/CartTable/CartTable"
import OrderSummary from "../../components/OrderSummary/ordersummary"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts"
import "./shoppingcart.module.css"

const ShoppingCartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <div className="cart-container">
      <Breadcrumb />

      <div className="cart-section">
        <div className="cart-content">
          <div className="cart-table">
            <h2 className="section-title">Shopping Cart</h2>
            <CartTable items={cartItems} />
          </div>

          <div className="order-summary">
            <OrderSummary />
          </div>
        </div>
      </div>

      <RelatedProducts />
    </div>
  )
}

export default ShoppingCartPage
