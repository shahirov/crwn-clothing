import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/homepage/homepage'

const App = () => {
  return (
    <Switch>
      <Route exact to="/" component={HomePage} />
    </Switch>
  )
}
export default App
