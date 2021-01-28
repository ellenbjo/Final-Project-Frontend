import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { user } from '../reducers/user'
import { cart } from '../reducers/cart'
import { sendOrder } from '../reducers/userThunks'
import { Button } from '../lib/resuable/Button'

export const Checkout = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.cart.products)
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const [checked, setChecked] = useState(false)

  const handleCheckOut = (event) => {
    event.preventDefault()
    dispatch(sendOrder(
      products,
      userId,
      accessToken
    ))
    dispatch(cart.actions.clearCart())
  }

  return (
    <section>
      <h2>Checkout</h2>
      {console.log(accessToken)}
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