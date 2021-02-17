import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { Burger } from './Burger'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import { ReactComponent as ShoppingCart } from '../svg:s/shoppingcart.svg'

export const Header = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const cartItems = useSelector((store) => store.cart.products.reduce((total, product) => (total + (product.quantity)), 0))
  const [open, setOpen] = useState(false)

  return (
    <CustomHeader>
      <TopSection>
        <Burger open={open} setOpen={setOpen} />
        <MobileNav open={open} setOpen={setOpen} />
        <TopMenuWrapper>
          <Link to="/">
            <CompanyName open={open}>CLAY</CompanyName>
          </Link>
          <List>
            {accessToken &&
              <Link to="/user/profile">
                <LinkText>My Page</LinkText>
              </Link>}
            {!accessToken &&
              <Link to="/login">
                <LinkText>Log in</LinkText>
              </Link>}
            <Link to="/cart">
              <LinkText>
                <ShoppingCart
                  width="22"
                  height="22"
                  fill="555555" />
                ({cartItems})
              </LinkText>
            </Link>
          </List>
        </TopMenuWrapper>
      </TopSection>
      <DesktopNav />
    </CustomHeader>
  )
}

const CustomHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TopMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e8eae6;
  width: 100%;
  font-size: 18px;
  @media (min-width: 1024px) {
    width: 60%;
  }
`

const TopSection = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 1024px) {
    justify-content: center;
  }
`

const List = styled.ul`
  display: flex;
  a {
    :first-child {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    a {
      :first-child {
        display: flex;
      }
    }
  }
`

const LinkText = styled.li`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
`

const CompanyName = styled.h2`
  color: ${({ open }) => open ? 'whitesmoke' : '#91A5A1'};
  font-family:'Bodoni Moda', serif;
  font-size: 25px;
  position: relative;
  z-index: 1;
  letter-spacing: 3px;
  ::first-letter {
    font-size: 150%;
  }
  @media (min-width: 700px) {
    font-size: 30px;
  }
`
