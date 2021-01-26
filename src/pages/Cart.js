import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { CartItem } from '../components/CartItem'
import { Headline } from '../lib/Text'

export const Cart = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const products = useSelector((store) => store.cart.products)

  const handleRemoveAll = () => {
    dispatch(cart.actions.clearCart())
  }

  const handleGoToProducts = () => {
    history.push('/products')
  }

  return (
    <>
      <Headline>Cart</Headline>
      {products.length === 0 && 
        <CartContainer>
          <p>Your cart is empty</p>
          <button type="button" onClick={handleGoToProducts}>Shop Products</button>
        </CartContainer>}
      {products.length > 0 && 
        <CartContainer>
          <ArticleList>
            {products.map((product) => (
              <CartItem key={product.id} product={product}/>
            ))}
          </ArticleList>
          <p>Total price</p>
          <div>
            <button type="button" onClick={handleRemoveAll}>Remove all</button>
            <button type="button">Check Out</button>
          </div>
        </CartContainer>}
    </>
  )
}

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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