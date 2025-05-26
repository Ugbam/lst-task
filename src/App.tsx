import type React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { store } from "./store/store"
import Header from "./components/Header/header"
import HomePage from "./pages/Home Page/Homepage"
import ShopPage from "./pages/Shop Page/shoppage"
import ShoppingCartPage from "./pages/Shopping Cart/shoppingcart"
import Footer from "./components/Footer/footer"
import "./App.css"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/cart" element={<ShoppingCartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}

export default App
