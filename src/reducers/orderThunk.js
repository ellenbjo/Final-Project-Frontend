import { user } from './user'

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
        dispatch(user.actions.setStatusMessage({ statusMessage: 'Your order is now on its way!' }))
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({
          errorMessage: error.toString()
        }))
      })
  }
}
