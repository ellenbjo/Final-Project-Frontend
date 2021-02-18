import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { CartItem } from './CartItem'

export const CartProducts = () => {
  const products = useSelector((store) => store.cart.products)
  
  return (
    <ProductContainer products={products}>
      {products.map((product) => (
        <CartItem key={product.id} product={product} products={products}/>
      ))}
    </ProductContainer>
  )
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  @media (min-width: 1024px) {
    justify-content: ${({ products }) => products.length > 2 ? 'space-between' : 'space-around'};
  } 
`