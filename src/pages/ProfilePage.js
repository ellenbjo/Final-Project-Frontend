import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { user } from '../reducers/user'
import { accessUserProfile } from '../reducers/userThunks'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const accessToken = useSelector((store) => store.user.login.accessToken)
  const name = useSelector((store) => store.user.login.name)

  /*useEffect(() => {
    dispatch(accessUserProfile(accessToken))
  }, [accessToken]) */

  const handleLogout = () => {
    dispatch(user.actions.setLogOut())
    history.push('/')
  }

  const handleGoToLogin = () => {
    history.push('/login')
  }

  return (
    <>
      {accessToken &&
        <section>
          <p>hello hello {name}</p>
          <button type="button" onClick={handleLogout}>Log out</button>
        </section>}
      {!accessToken && 
        <section>
          <p>Please log in to access your page</p>
          <button type="button" onClick={handleGoToLogin}>login</button>
        </section>}
    </>
  )
}