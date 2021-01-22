import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import styled from 'styled-components'

import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { StartPage } from './pages/StartPage'
import { Products } from './pages/Products'
import { ProductDetailPage} from './pages/ProductDetailPage'
import { Designers } from './pages/Designers'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

export const App = () => {
  return (
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
          <Route path='/designers'>
            <Designers />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </MainContainer>
    </BrowserRouter>
  )
}

const MainContainer = styled.main`
  width: 100%;
`
