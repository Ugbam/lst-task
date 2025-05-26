import type React from "react"
import { useGetProductsQuery } from "../../store/api/productApi"
import Breadcrumb from "../../components/Breadcrumb/breadcrumb"
import ProductCard from "../../components/ProductCard/productcard"
import "./shoppage.module.css"

const ShopPage: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery()

  if (isLoading) {
    return (
      <div className="shop-container">
        <Breadcrumb />
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="shop-container">
        <Breadcrumb />
        <div className="error">
          <p>Error loading products. Please try again later.</p>
        </div>
      </div>
    )
  }

  const allProducts = [...(data?.featuredProducts || []), ...(data?.relatedProducts || [])]

  return (
    <div className="shop-container">
      <Breadcrumb />

      <div className="shop-header">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-subtitle">Showing {allProducts.length} results</p>
      </div>

      <div className="products-grid">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} showAddToCart={true} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage
