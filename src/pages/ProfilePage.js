import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { accessUserProfile } from '../reducers/userThunks'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const userId = useSelector((store) => store.user.login.userId)
  const accessToken = useSelector((store) => store.user.login.accessToken)

  const getProfileData = (accessToken, id) => {
    dispatch(accessUserProfile(accessToken, id))
  }

  useEffect(() => {
    getProfileData(accessToken, userId)
  }, [accessToken])

  return (
    <p>hello</p>

  )
}