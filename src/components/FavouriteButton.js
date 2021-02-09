/*import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToFavourites } from '../reducers/userThunks'

export const FavouriteButton = ({ product }) => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)

  const handleAddToFavourite = () => {
    dispatch(addToFavourites(
      product,
      userId,
      accessToken
    ))
  }

  const handleRemoveFavorite = () => {
    const FAVOURITE_URL = `https://ellen-final-project.herokuapp.com/users/user/favourites:${}`
    fetch(FAVOURITE_URL, {
      method: 'PATCH',
      body: JSON.stringify({
        userId
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Favourite could not be Deleted.')
        } return response.json()
      })
      .then((json) => {
        console.log(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <button type="button" onClick={handleAddToFavourite}>Favourite</button>
    </div>
  )
}

*/