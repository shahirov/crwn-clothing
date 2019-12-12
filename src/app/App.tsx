import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from '../pages/homepage/homepage'
import Shop from '../pages/shop/shop'
import Header from '../components/header/header'
import Signup from '../pages/signup/signup'
import Signin from '../pages/signin/signin'
import { FirebaseContext } from '../firebase'
import { useAuth } from '../custom-hooks'

const App = () => {
  const user = useAuth()

  return (
    <FirebaseContext.Provider value={{ user }}>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin">{user ? <Redirect to="/" /> : <Signin />}</Route>
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </FirebaseContext.Provider>
  )
}

export default App
