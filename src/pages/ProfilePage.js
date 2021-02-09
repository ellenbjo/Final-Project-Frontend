import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components'

import { user } from '../reducers/user'
/*import { UserFavourites } from '../components/UserFavourites'*/
import { Button } from '../lib/resuable/Button'

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userInfo = useSelector((store) => store.user.login)

  const [orders, setOrders] = useState([])
  /*const [favourites, setFavourites] = useState([])*/

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
        setOrders(json)
      })
  }

  /*const fetchUserFavourites = async () => {
    const USER_FAVOURITES_URL = 'https://ellen-final-project.herokuapp.com/users/user/favourites'

    fetch(USER_FAVOURITES_URL, {
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
        setFavourites(json)
      })
  }*/

  useEffect(() => {
    fetchOrderHistory()
    /*fetchUserFavourites()*/
  }, [])

  const handleLogout = () => {
    dispatch(user.actions.setLogOut())
    //dispatch(cart.actions.clearCart())
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
          <h2>Welcome {userInfo.name}</h2>
          <PersonalInfo>
            <div>
              <h3>Personal info</h3>
              <p><Bold>Email:</Bold> {userInfo.email}</p>
              <p><Bold>PhoneNumber:</Bold> {userInfo.phoneNumber}</p>
              <p><Bold>Address:</Bold></p>
              <p>{userInfo.street}</p>
              <p>{userInfo.postalCode}</p>
              <p>{userInfo.city}</p>
            </div>
            <div>
              <h3>Order history</h3>
              <ul>
                {orders.map((order) => (
                  <li key={order._id}>Order: {moment(order.createdAt).format('YYYY-MM-DD')}</li>
                ))}
              </ul>
            </div>
          </PersonalInfo>
         {/* <div>
            <h2>Your favourites</h2>
            {favourites.map((favourite) => (
              <UserFavourites key={favourite._id} favourite={favourite} />
            ))}
            </div> */}
          <Button 
            type="button" 
            text="Go to cart" 
            onButtonClick={handleGoToCart} />
          <Button type="button" text="Log out" onButtonClick={handleLogout} />
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
const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  color: whitesmoke;
  background: #91A5A1;
  padding: 20px;
  div{
    border: 0.5px solid whitesmoke;
    padding: 20px;
  }
  @media (min-width: 1024px){
    width: 40%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
const Bold = styled.span`
  font-weight: bolder;
`