import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Product {
  id: string
  name: string
  description: string
  price: number
  ecoRating: number
  vendorId: string
  vendorName: string
}

interface MarketplaceState {
  products: Product[]
  filteredProducts: Product[]
  cart: { product: Product; quantity: number }[]
  isLoading: boolean
  error: string | null
}

const initialState: MarketplaceState = {
  products: [],
  filteredProducts: [],
  cart: [],
  isLoading: false,
  error: null,
}

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.isLoading = false
      state.products = action.payload
      state.filteredProducts = action.payload
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    filterProducts: (
      state,
      action: PayloadAction<{ minPrice?: number; maxPrice?: number; ecoRating?: number; search?: string }>,
    ) => {
      const { minPrice, maxPrice, ecoRating, search } = action.payload
      state.filteredProducts = state.products.filter((product) => {
        return (
          (!minPrice || product.price >= minPrice) &&
          (!maxPrice || product.price <= maxPrice) &&
          (!ecoRating || product.ecoRating >= ecoRating) &&
          (!search ||
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase()))
        )
      })
    },
    clearFilters: (state) => {
      state.filteredProducts = state.products
    },
    addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
      const { product, quantity } = action.payload
      const existingItem = state.cart.find((item) => item.product.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.cart.push({ product, quantity })
      }
    },
    updateCartItem: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload
      const item = state.cart.find((item) => item.product.id === productId)

      if (item) {
        item.quantity = quantity
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.product.id !== action.payload)
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
})

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  filterProducts,
  clearFilters,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
} = marketplaceSlice.actions

export default marketplaceSlice.reducer

