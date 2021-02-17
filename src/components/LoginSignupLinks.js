import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LoginSignupLinks = () => {
  return (
    <LinkContainer>
      <Link to="/login">
        <LinkText>Login</LinkText>
      </Link>
      <Link to="/signup">
        <LinkText>Sign up</LinkText>
      </Link>
    </LinkContainer>
  )
}

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`

const LinkText = styled.h2`
  margin: 20px;
`
