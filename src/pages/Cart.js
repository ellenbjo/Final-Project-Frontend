import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { CartItem } from '../components/CartItem'
import { Headline } from '../lib/Text'
import { Button } from '../lib/resuable/Button'

export const Cart = () => {
  const dispatch = useDispatch()
  const history = useHistory()
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
          <ArticleList>
            {products.map((product) => (
              <CartItem key={product.id} product={product}/>
            ))}
          </ArticleList>
          <p>Total Price: {totalPrice}kr</p>
          <div>
            <button type="button" onClick={handleRemoveAll}>Remove all</button>
            <button type="button">Check Out</button>
          </div>
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
`

const EmptyCartContainer = styled(CartContainer)`
  justify-content: center;
  width: 60%;
  @media (min-width: 1024px){
    width: 40%;
  }
`

const ArticleList = styled.ul`
  width: 100%;
  padding: 0;
  @media (min-width: 1024px){
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
`