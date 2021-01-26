import { createSlice} from '@reduxjs/toolkit'

//The subtraction assignment operator ( -= ) subtracts the value of the right operand from a variable and assigns the result to the variable
export const cart = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find((product) => product.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        state.products.push({...action.payload, quantity: 1 })
      }
    },
    removeProduct: (state, action) => {
      const existingProduct = state.products.find((product) => product.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.products = state.products.filter((product) => product.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    },
    clearCart: (state) => {
      state.products = []
    }
  }
})