"use client"

import type React from "react"
import { useDispatch } from "react-redux"
import { addItem } from "../../store/slices/cartSlice"
import type { Product } from "../../store/api/productApi"
import "./productcard.module.css"

interface ProductCardProps {
  product: Product
  showAddToCart?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showAddToCart = false }) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        rating: product.rating,
        reviews: product.reviews,
        description: product.description,
      }),
    )
  }

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
        {showAddToCart && (
          <div className="overlay">
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">Graphic Design</h3>
        <p className="department">English Department</p>

        <div className="price-container">
          <span className="original-price">${product.originalPrice}</span>
          <span className="sale-price">${product.price}</span>
        </div>

        <div className="color-options">
          <span className="color-dot color-1"></span>
          <span className="color-dot color-2"></span>
          <span className="color-dot color-3"></span>
          <span className="color-dot color-4"></span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
