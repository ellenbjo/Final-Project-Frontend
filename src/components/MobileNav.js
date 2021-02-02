import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MobileNav = ({ open }) => {
  return (
    <Nav open={open}>
      <Link to='/products'>
        <p>Products</p>
      </Link>
      <Link to='/designers'>
        <p>Designers</p>
      </Link>
      <Link to='/login'>
        <p>Login</p>
      </Link>
      <Link to='/cart'>
        <p>Cart</p>
      </Link>
      <Link>
        <p>About</p>
      </Link>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;
  background: #cdd0cb;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (min-width: 700px){
    width: 60%;
  }
  @media (min-width: 1024px){
    display: none;
  }
  p{
    font-size: 25px;
  }
`