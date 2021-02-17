import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MobileNav = ({ open, setOpen }) => {
  const accessToken = useSelector((store) => store.user.login.accessToken)

  return (
    <Nav open={open}>
      <LinkWrapper>
        <Link to="/products" onClick={() => setOpen(false)}>
          <LinkText>Products</LinkText>
        </Link>
        <Link to="/designers" onClick={() => setOpen(false)}>
          <LinkText>Designers</LinkText>
        </Link>
        {!accessToken ? (
          <Link to="/login" onClick={() => setOpen(false)}>
            <LinkText>Log in</LinkText>
          </Link>
        ) : (
          <Link to="/user/profile" onClick={() => setOpen(false)}>
            <LinkText>My Page</LinkText>
          </Link>
        )}
        <Link to="/cart" onClick={() => setOpen(false)}>
          <LinkText>Cart</LinkText>
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          <LinkText>About</LinkText>
        </Link>
      </LinkWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #cdd0cb;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  @media (min-width: 700px) {
    width: 60%;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`

const LinkText = styled.p`
  font-size: 20px;
  color: whitesmoke;
  margin-bottom: 0;
  transition: ease 0.5s;
  :hover {
    text-decoration: underline;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.5px solid whitesmoke;
  width: 80%;
  height: 70%;
`
