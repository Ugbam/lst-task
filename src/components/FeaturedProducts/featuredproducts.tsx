import type React from "react"
import { useGetProductsQuery } from "../../store/api/productApi"
import ProductCard from "../ProductCard/ProductCard"
import "./FeaturedProducts.module.css"

const FeaturedProducts: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery()

  if (isLoading) {
    return (
      <section className="featured-products">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="featured-products">
        <div className="container">
          <div className="error">
            <p>Error loading products. Please try again later.</p>
          </div>
        </div>
      </section>
    )
  }

  const featuredProducts = data?.featuredProducts || []

  return (
    <section className="featured-products">
      <div className="container">
        <div className="header">
          <h4 className="subtitle">Featured Products</h4>
          <h2 className="title">BESTSELLER PRODUCTS</h2>
          <p className="description">Problems trying to resolve the conflict between</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showAddToCart={true} />
          ))}
        </div>

        <div className="load-more-container">
          <button className="load-more-button">LOAD MORE PRODUCTS</button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
