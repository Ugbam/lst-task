import type React from "react"
import { useGetProductsQuery } from "../../store/api/productApi"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./RelatedProducts.module.css"

const RelatedProducts: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery()

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
      </div>
    )
  }

  if (error) {
    console.error("Error loading related products:", error)
  }

  const relatedProducts = data?.relatedProducts || []

  return (
    <section className={styles.relatedProducts}>
      <h2 className={styles.title}>PRODUCTS RELATED TO ITEMS IN YOUR CART</h2>
      <div className={styles.productsGrid}>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} showAddToCart={true} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
