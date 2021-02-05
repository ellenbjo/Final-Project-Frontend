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
            <CompanyName>COMPANY NAME</CompanyName>
          </Link>
          <List>
            {accessToken &&
              <Link to="/users/profile">
                <LinkText>My Page</LinkText>
              </Link>}
            {!accessToken &&
              <Link to="/login">
                <LinkText>Log in</LinkText>
              </Link>}
            <Link to="/cart">
              <LinkText>
                <ShoppingCart
                  width="20"
                  height="20"
                  fill="555555" />
                {cartItems}
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
  align-items: baseline;
  background: #e8eae6;
  width: 100%;
  @media (min-width: 700px){
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
  @media (min-width: 1024px){
    width: 60%;
  }
`

const TopSection = styled.div`
  display: flex;
  @media (min-width: 1024px){
    justify-content: center;
  }
`
const List = styled.ul`
  display: flex;
  a {
    :first-child{
      display: none;
    }
  }
  @media (min-width: 1024px){
    a {
      :first-child{
        display: flex;
      }
    }
  }
`
const LinkText = styled.li`
  margin-right: 20px;
`
const CompanyName = styled.h2`
  color: #91A5A1;
  font-weight: semi-bold;
  font-size: 25px;
  margin-bottom: 0;
  position: relative;
  left: 40%;
  @media (min-width: 700px){
    font-size: 30px;
  }
  @media (min-width: 1024px){
    left: 0;
  }
`

    /*:last-of-type{
      background: ${({ addingToCart }) => addingToCart ? 'green' : 'red'};
    } */