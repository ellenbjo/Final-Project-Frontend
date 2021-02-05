import { createSlice } from '@reduxjs/toolkit'

export const ui = createSlice({
  name: 'ui',
  initialState: {
    loading: false,
    addingToCart: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setAddingToCart: (state, action) => {
      state.addingToCart = action.payload
    }
  }
})
