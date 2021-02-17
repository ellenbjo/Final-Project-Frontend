import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    name: null,
    email: null,
    street: null,
    postalCode: null,
    city: null,
    phoneNumber: null,
    statusMessage: null,
    errorMessage: null
  }
}

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
    },
    setName: (state, action) => {
      const { name } = action.payload
      state.login.name = name
    },
    setEmail: (state, action) => {
      const { email } = action.payload
      state.login.email = email
    },
    setStreet: (state, action) => {
      const { street } = action.payload
      state.login.street = street
    },
    setPostalCode: (state, action) => {
      const { postalCode } = action.payload
      state.login.postalCode = postalCode
    },
    setCity: (state, action) => {
      const { city } = action.payload
      state.login.city = city
    },
    setPhoneNumber: (state, action) => {
      const { phoneNumber } = action.payload
      state.login.phoneNumber = phoneNumber
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload
      state.login.statusMessage = statusMessage
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.login.errorMessage = errorMessage
    },
    setLogOut: (state) => {
      state.login.userId = 0
      state.login.accessToken = null
      state.login.name = null
      state.login.email = null
      state.login.street = null
      state.login.postalCode = null
      state.login.city = null
      state.login.phoneNumber = null
      state.login.statusMessage = 'You are now logged out.'
      state.login.errorMessage = null
    }
  }
})
