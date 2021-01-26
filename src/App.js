import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { user } from './reducers/user'
import { cart } from './reducers/cart'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { StartPage } from './pages/StartPage'
import { Products } from './pages/Products'
import { ProductDetailPage } from './pages/ProductDetailPage'
import { Designers } from './pages/Designers'
import { DesignerProducts } from './pages/DesignerProducts'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { ProfilePage } from './pages/ProfilePage'
import { Cart } from './pages/Cart'
import { NotFound } from './pages/NotFound'

const reducer = combineReducers({
  user: user.reducer,
  cart: cart.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContainer>
          <Header />
          <Nav />
          <Switch>
            <Route exact path='/'>
              <StartPage />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route path='/products/:productId'>
              <ProductDetailPage />
            </Route>
            <Route exact path='/designers'>
              <Designers />
            </Route>
            <Route path='/designers/:id/products'>
              <DesignerProducts />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/users/profile'>
              <ProfilePage />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/404'>
              <NotFound />
            </Route>
            <Redirect
              to='/404' />
          </Switch>
        </MainContainer>
      </BrowserRouter>
    </Provider>
  )
}

const MainContainer = styled.main`
  width: 100%;
`
