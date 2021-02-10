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
        <SlashSign>/</SlashSign>
        <Link to="/designers">
          <LinkText>DESIGNERS</LinkText>
        </Link>
        <SlashSign>/</SlashSign>
        <Link to="/about">
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
      align-items: baseline;
    }
  }
`

const SlashSign = styled.span`
  margin: 0 20px 0 20px;
`

const LinkText = styled.p`
  font-weight: bold;
  letter-spacing: 1.5px;
  :hover{
    text-decoration: underline;
  }
`