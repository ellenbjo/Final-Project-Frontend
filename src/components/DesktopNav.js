import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DesktopNav = () => {
  return (
    <NavContainer>
      <div>
        <Link to="/products">
          <LinkText>PRODUCTS</LinkText>
        </Link>
        <Link to="/designers">
          <LinkText>DESIGNERS</LinkText>
        </Link>
        <Link to="/">
          <LinkText>ABOUT</LinkText>
        </Link>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: none;
  @media (min-width: 1024px){
    background: #cdd0cb;
    display: flex;
    justify-content: center;
    div{
      display: flex;
      width: 60%;
      justify-content: flex-start;
    }
  }
`

const LinkText = styled.p`
  margin-right: 50px;
  color: #91a5a1;
  font-weight: bold;
  :hover{
    color: #91a5a1;
    text-decoration: underline;
  }
`