import { user } from './user'
import { ui } from './ui'

export const userSignup = (
  name,
  email,
  password,
  street,
  postalCode,
  city,
  phoneNumber
) => {
  const SIGNUP_URL = 'https://ellen-final-project.herokuapp.com/users'

  return (dispatch) => {
    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        street,
        postalCode,
        city,
        phoneNumber
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        dispatch(user.actions.setUserId({ userId: json._id }))
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setName({ name: json.name }))
        dispatch(user.actions.setEmail({ email: json.email }))
        dispatch(user.actions.setStreet({ street: json.street }))
        dispatch(user.actions.setPostalCode({ postalCode: json.postalCode }))
        dispatch(user.actions.setCity({ city: json.city }))
        dispatch(user.actions.setPhoneNumber({ phoneNumber: json.phoneNumber }))
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({
          errorMessage: error.toString()
        }))
      })
  }
}

export const userLogin = (email, password) => {
  const LOGIN_URL = 'https://ellen-final-project.herokuapp.com/sessions'
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Log in failed.')
        } return response.json()
      })
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        dispatch(user.actions.setUserId({ userId: json._id }))
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setName({ name: json.name }))
        dispatch(user.actions.setEmail({ email: json.email }))
        dispatch(user.actions.setStreet({ street: json.street }))
        dispatch(user.actions.setPostalCode({ postalCode: json.postalCode }))
        dispatch(user.actions.setCity({ city: json.city }))
        dispatch(user.actions.setPhoneNumber({ phoneNumber: json.phoneNumber }))
        dispatch(user.actions.setStatusMessage({ statusMessage: 'You are now logged in.' }))
      })
      .catch((error) => {
        dispatch(ui.actions.setLoading(false))
        dispatch(user.actions.setErrorMessage({
          errorMessage: error.message.toString()
        }))
      })
  }
}

export const sendOrder = (products, userId, accessToken) => {
  const ORDER_URL = 'https://ellen-final-project.herokuapp.com/users/user/orders'
  return (dispatch) => {
    fetch(ORDER_URL, {
      method: 'POST',
      body: JSON.stringify({
        products,
        userId
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Order could not be saved.')
        } return response.json()
      })
      .then((json) => {
        console.log(json)
        dispatch(user.actions.setStatusMessage({ statusMessage: 'Your order is now on its way!' }))
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({
          errorMessage: error.toString()
        }))
      })
  }
}

/*export const addToFavourites = (product, userId, accessToken) => {
  const FAVOURITE_URL = 'https://ellen-final-project.herokuapp.com/users/user/favourites'
  return (dispatch) => {
    fetch(FAVOURITE_URL, {
      method: 'PATCH',
      body: JSON.stringify({
        product,
        userId
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Order could not be saved.')
        } return response.json()
      })
      .then((json) => {
        console.log(json)
        dispatch(user.actions.setStatusMessage({ statusMessage: 'This product is now added to your favourites!' }))
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({
          errorMessage: error.toString()
        }))
      })
  }
}*/

