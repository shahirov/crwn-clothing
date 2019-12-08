import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/homepage/homepage'
import Shop from '../pages/shop/shop'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={Shop} />
    </Switch>
  )
}
export default App
