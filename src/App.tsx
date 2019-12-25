import React, { Suspense, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { GlobalStyle } from './global.styles'
import Header from './components/header/header'
import Spinner from './components/spinner/spinner'
import { checkUserSession } from './slices/user-slice'
import { RootState } from './redux/rootReducer'

const HomePage = React.lazy(() => import('./pages/home/home-page'))
const ShopPage = React.lazy(() => import('./pages/shop/shop-page'))
const SignUpPage = React.lazy(() => import('./pages/signup/signup-page'))
const SignInPage = React.lazy(() => import('./pages/signin/signin-page'))
const CheckoutPage = React.lazy(() => import('./pages/checkout/checkout-page'))

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.currentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/signin" render={() => (user ? <Redirect to="/" /> : <SignInPage />)} />
        <Route path="/signup" render={() => (user ? <Redirect to="/" /> : <SignUpPage />)} />
      </Switch>
    </Suspense>
  )
}

export default App
