import type React from "react"
import HeroSection from "../../components/HeroSection/HeroSection"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import ServicesSection from "../../components/ServiceSection/ServiceSection"
import BlogSection from "../../components/Blog Section/blogsection"
import TestimonialsSection from "../../components/TestimonalSection/testimonialsection"
import CallToActionSection from "../../components/CTA Page/calltoaction"
import "./homepage.module.css"

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedProducts />
      <ServicesSection />
      <BlogSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  )
}

export default HomePage
