import React from 'react'
import { useSelector } from 'react-redux'

import { cart } from '../reducers/cart'
import { CartItem } from '../components/CartItem'

export const Cart = () => {
  const products = useSelector((store) => store.cart.products)
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {products.map((product) => (
          <CartItem key={product.id} product={product}/>
        ))}
      </ul>
    </section>
  )
}