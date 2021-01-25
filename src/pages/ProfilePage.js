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

  useEffect(() => {
    const getProfileData = () => {
      dispatch(accessUserProfile(accessToken))
    }
  }, [accessToken])

  const handleLogout = () => {
    dispatch(user.actions.setLogOut())
    history.push('/')
  }
  return (
    <section>
      <p>hello hello</p>
      <button onClick={handleLogout}>Log out</button>
    </section>
  )
}