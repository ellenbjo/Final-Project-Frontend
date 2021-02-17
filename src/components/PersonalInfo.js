import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const PersonalInfo = () => {
  const userInfo = useSelector((store) => store.user.login)

  return (
    <Border>
      <h3>Personal info</h3>
      <p><Bold>Email:</Bold> {userInfo.email}</p>
      <p><Bold>PhoneNumber:</Bold> {userInfo.phoneNumber}</p>
      <p><Bold>Address:</Bold></p>
      <p>{userInfo.street}</p>
      <p>{userInfo.postalCode}</p>
      <p>{userInfo.city}</p>
    </Border>
  )
}

const Bold = styled.span`
  font-weight: bolder;
`

const Border = styled.div`
  border: 0.5px solid whitesmoke;
  padding: 20px;
  @media (min-width: 1024px) {
    width: 90%;
  }
`
