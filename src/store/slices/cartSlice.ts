import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  rating: number
  reviews: number
  description?: string
}

interface CartState {
  items: CartItem[]
  deliveryCharges: number
}

// Load cart from localStorage
const loadCartFromStorage = (): CartState => {
  try {
    const serializedCart = localStorage.getItem("shopping-cart")
    if (serializedCart === null) {
      return {
        items: [],
        deliveryCharges: 0,
      }
    }
    return JSON.parse(serializedCart)
  } catch (err) {
    return {
      items: [],
      deliveryCharges: 0,
    }
  }
}

// Save cart to localStorage
const saveCartToStorage = (state: CartState) => {
  try {
    const serializedCart = JSON.stringify(state)
    localStorage.setItem("shopping-cart", serializedCart)
  } catch (err) {
    // Ignore write errors
  }
}

const initialState: CartState = loadCartFromStorage()

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity
      }
      saveCartToStorage(state)
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      saveCartToStorage(state)
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }
      saveCartToStorage(state)
    },
    clearCart: (state) => {
      state.items = []
      saveCartToStorage(state)
    },
  },
})

export const { updateQuantity, removeItem, addItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
