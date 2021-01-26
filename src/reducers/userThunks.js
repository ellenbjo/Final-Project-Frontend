import { user } from './user'

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
      .catch((error) => console.log(error))
  }
}

export const userLogin = (email, password) => {
  const LOGIN_URL = 'https://ellen-final-project.herokuapp.com/sessions'
  return (dispatch) => {
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
        dispatch(user.actions.setUserId({ userId: json._id }))
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setName({ name: json.name }))
        dispatch(user.actions.setEmail({ email: json.email }))
        dispatch(user.actions.setStreet({ street: json.street }))
        dispatch(user.actions.setPostalCode({ postalCode: json.postalCode }))
        dispatch(user.actions.setCity({ city: json.city }))
        dispatch(user.actions.setPhoneNumber({ phoneNumber: json.phoneNumber }))
      })
      .catch((error) => console.log(error))
  }
}

export const accessUserProfile = (accessToken) => {
  const USER_PROFILE_URL = `https://ellen-final-project.herokuapp.com/users/profile`

  return () => {
    fetch(USER_PROFILE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Access denied. Please login to access your profile.')
        } return response.json()
      })
      .then((json) => {
        console.log(json)
      })
  }
}