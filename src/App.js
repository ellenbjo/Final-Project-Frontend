import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import { StartPage } from './components/StartPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <StartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
