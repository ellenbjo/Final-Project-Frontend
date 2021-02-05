import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { CartProducts } from '../components/CartProducts'
import { Button } from '../lib/resuable/Button'

export const Cart = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const products = useSelector((store) => store.cart.products)
  // reduce executes a reducer function (that you provide) on each 
  //element of the array, resulting in single output value.
  const totalPrice = useSelector((store) => store.cart.products.reduce((total, product) => (total + (product.price * product.quantity)), 0))

  const handleRemoveAll = () => {
    dispatch(cart.actions.clearCart())
  }

  const handleGoToProducts = () => {
    history.push('/products')
  }

  const handleGoToLogin = () => {
    history.push('/login')
  }

  const handleGoToCheckout = () => {
    history.push('/checkout')
  }

  return (
    <CartPageContainer>
      <h2>Cart</h2>
      {products.length === 0 &&
        <EmptyCartContainer>
          <p>Your cart is empty</p>
          <Button type="button" text="Contine Shopping" onButtonClick={handleGoToProducts} />
        </EmptyCartContainer>}
      {products.length > 0 &&
        <CartContainer>
          <CartProducts product={products} />
          <p>Total Price: {totalPrice}kr</p>
          {!accessToken &&
          <p>Please log in to continue to the check out</p>}
          <ButtonWrapper>
            <Button type="button" text="Remove all" onButtonClick={handleRemoveAll} />
            {accessToken &&
            <Button type="button" text="Continue to check out" onButtonClick={handleGoToCheckout} />}
            {!accessToken &&
            <Button type="button" text="Log in" onButtonClick={handleGoToLogin} />}
          </ButtonWrapper>
        </CartContainer>}
    </CartPageContainer>
  )
}

const CartPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px){
    width: 80%;
  } 
  @media (min-width: 1500px){
    width: 50%;
  } 
`

const EmptyCartContainer = styled(CartContainer)`
  justify-content: center;
  width: 60%;
  @media (min-width: 1024px){
    width: 40%;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`