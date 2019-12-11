import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/homepage/homepage'
import Shop from '../pages/shop/shop'
import Header from '../components/header/header'
import Signup from '../pages/signup/signup'
import Signin from '../pages/signin/signin'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  )
}

export default App
