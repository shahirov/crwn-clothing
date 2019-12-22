import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import HomePage from './pages/home/home-page'
import Shop from './pages/shop/shop-page'
import Header from './components/header/header'
import SignupPage from './pages/signup/signup-page'
import SigninPage from './pages/signin/signin-page'
import CheckoutPage from './pages/checkout/checkout-page'
import { RootState } from './redux/rootReducer'
import { checkUserSession } from './slices/user-slice'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.currentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/signin" render={() => (user ? <Redirect to="/" /> : <SigninPage />)} />
        <Route path="/signup" render={() => (user ? <Redirect to="/" /> : <SignupPage />)} />
      </Switch>
    </>
  )
}

export default App
