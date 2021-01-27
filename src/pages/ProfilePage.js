import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { user } from '../reducers/user'
import { accessUserProfile } from '../reducers/userThunks'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const accessToken = useSelector((store) => store.user.login.accessToken)
  const name = useSelector((store) => store.user.login.name)
  const email = useSelector((store) => store.user.login.email)
  const phoneNumber = useSelector((store) => store.user.login.phoneNumber)

  /*useEffect(() => {
    dispatch(accessUserProfile(accessToken))
    console.log(accessToken)
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
        <ProfilePageContainer>
          <h2>Welcome {name}</h2>
          <div>
            <h3>Personal info</h3>
            <p>email: {email}</p>
            <p>phoneNumber: {phoneNumber}</p>
          </div>
          <div>
            <h3>Your Favourites</h3>
          </div>
          <button type="button" onClick={handleLogout}>Log out</button>
        </ProfilePageContainer>}
      {!accessToken && 
        <ProfilePageContainer>
          <p>Please log in to access your page</p>
          <button type="button" onClick={handleGoToLogin}>login</button>
        </ProfilePageContainer>}
    </>
  )
}

const ProfilePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`