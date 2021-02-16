import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'

import { cart } from '../reducers/cart'
import { user } from '../reducers/user'
import { Button } from '../lib/reusable/Button'
import { PersonalInfo } from '../components/PersonalInfo'
import { OrderItem } from '../components/OrderItem'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const name = useSelector((store) => store.user.login.name)
  const [orders, setOrders] = useState([])

  const fetchOrderHistory = async () => {
    const USER_ORDERS_URL = 'https://ellen-final-project.herokuapp.com/users/user/orders'

    fetch(USER_ORDERS_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Access denied. Please login to access this page.')
        } return response.json()
      })
      .then((json) => {
        const sortedOrders = json.sort((a, b) => moment(b.createdAt).diff(a.createdAt))
        setOrders(sortedOrders)
      })
  }

  useEffect(() => {
    fetchOrderHistory()
  }, [])

  const handleLogout = () => {
    dispatch(user.actions.setLogOut())
    dispatch(cart.actions.clearCart())
    history.push('/')
  }

  const handleGoToLogin = () => {
    history.push('/login')
  }

  const handleGoToCart = () => {
    history.push('/cart')
  }

  return (
    <>
      {accessToken &&
        <ProfilePageContainer>
          <h2>Welcome {name}</h2>
          <PersonalInfoContainer>
            <PersonalInfo />
            <Border>
              <h3>Order history</h3>
              {orders.length === 0 && <p>No orders yet</p>}
              <OrderList>
                {orders.map((order) => (
                  <OrderItem key={order._id} order={order}/>
                ))}
              </OrderList>
            </Border>
          </PersonalInfoContainer>
          <Button
            type="button"
            text="Go to cart"
            onButtonClick={handleGoToCart} />
          <Button
            type="button"
            text="Log out"
            onButtonClick={handleLogout} />
        </ProfilePageContainer>}
      {!accessToken &&
        <ProfilePageContainer>
          <p>Please log in to access your page</p>
          <Button
            type="button"
            text="Log in"
            onButtonClick={handleGoToLogin} />
        </ProfilePageContainer>}
    </>
  )
}

const ProfilePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  button{
    width: 70%;
    @media (min-width: 700px){
      width: 50%;
    }
    @media (min-width: 1024px){
      width: 30%;
    }
  }
`
const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  color: whitesmoke;
  background: #91A5A1;
  padding: 20px;
  @media (min-width: 700px){
    width: 50%;
  }
  @media (min-width: 1024px){
    width: 30%;
    align-items: center;
    padding-top: 40px;
  }
`

const Border = styled.div`
  border: 0.5px solid whitesmoke;
  padding: 20px;
  @media (min-width: 1024px){
    width: 90%;
  }
`

const OrderList = styled.ul`
  padding-left: 0;
`
