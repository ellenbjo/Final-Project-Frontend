import React from 'react'
import { Provider } from 'react-redux'
import { 
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { user } from './reducers/user'
import { cart } from './reducers/cart'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
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

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//retrieve the local storage and use it as the inital state
const persistedStateJSON = localStorage.getItem('reduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

//using the persistedState instead of the initalstate
const store = createStore(
  reducer,
  persistedState,
  composeEnhancer(applyMiddleware(thunk))
)

//Store the state in localstorage for any redux state change
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

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
          <Footer />
        </MainContainer>
      </BrowserRouter>
    </Provider>
  )
}

const MainContainer = styled.main`
  width: 100%;
`
