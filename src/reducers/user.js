import { createSlice } from '@reduxjs/toolkit'

const initalState = {
  login: {
    accessToken: null,
    userId: 0,
    name: '',
    email: '',
    street: '',
    postalCode: '',
    city: '',
    phoneNumber: '',
    statusMessage: ''
  }
}

export const user = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      console.log(accessToken)
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      console.log(userId)
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
    setLogOut: (state) => {
      state.login.userId = 0
      state.login.accessToken = null
      state.login.name = ''
      state.login.email = ''
      state.login.street = ''
      state.login.postalCode = ''
      state.login.phoneNumber = ''
      state.login.statusMessage = 'You are now logged out.'
    }
  }
})