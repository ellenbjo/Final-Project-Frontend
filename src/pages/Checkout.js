import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { user } from '../reducers/user'
import { cart } from '../reducers/cart'
import { Button } from '../lib/resuable/Button'

export const Checkout = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.products)
  const [checked, setChecked] = useState(false)

  const handleCheckOut = () => {
    dispatch(user.actions.setOrders({orders: cartItems }))
    dispatch(cart.actions.clearCart())
  }

  return (
    <section>
      <h2>Checkout</h2>
      {console.log(checked)}
      <p>Your order will be shipped to:</p>
      <p>Your Address</p>
      <form>
        <label>
          Accept terms and conditions
          <input 
            type="checkbox"
            value={checked}
            onChange={() => setChecked(true)}/>
        </label>
        {checked && 
          <Button type="submit" text="Confirm order" onButtonClick={handleCheckOut}
           />}
      </form>
    </section>
  )

}