import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = () => {
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
  display: flex;
  border: 1px solid black;
`

const LinkText = styled.p`
  margin-left: 20px;
`