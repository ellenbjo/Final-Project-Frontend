import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MobileNav = ({ open, setOpen }) => {
  const accessToken = useSelector((store) => store.user.login.accessToken)

  return (
    <Nav open={open}>
      <Link to="/products" onClick={() => setOpen(false)}>
        <p>Products</p>
      </Link>
      <Link to="/designers" onClick={() => setOpen(false)}>
        <p>Designers</p>
      </Link>
      {!accessToken &&
        <Link to="/login" onClick={() => setOpen(false)}>
          <p>Login</p>
        </Link>}
      {accessToken &&
        <Link to="/users/profile" onClick={() => setOpen(false)}>
          <p>My Page</p>
        </Link>}
      <Link to="/cart" onClick={() => setOpen(false)}>
        <p>Cart</p>
      </Link>
      <Link to="/" onClick={() => setOpen(false)}>
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