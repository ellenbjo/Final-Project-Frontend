import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DesktopNav = () => {
  return (
    <NavContainer>
      <Link to='/products'>
        <LinkText>Products</LinkText>
      </Link>
      <Link to='/designers'>
        <LinkText>Designers</LinkText>
      </Link>
      <Link>
        <LinkText>About</LinkText>
      </Link>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: none;
  @media (min-width: 1024px){
    background: #cdd0cb;
    display: flex;
    justify-content: center;
  }
`

const LinkText = styled.p`
  margin-left: 20px;
`