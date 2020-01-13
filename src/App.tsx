import React, { Suspense, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { GlobalStyle } from './global.styles'
import Header from './components/header/header'
import Spinner from './components/spinner/spinner'
import ErrorBoundary from './components/error-boundary/error-boundary'
import { checkUserSession, selectCurrentUser } from './slices/user-slice'

const HomePage = React.lazy(() => import('./pages/home/home-page'))
const ShopPage = React.lazy(() => import('./pages/shop/shop-page'))
const SignUpPage = React.lazy(() => import('./pages/signup/signup-page'))
const SignInPage = React.lazy(() => import('./pages/signin/signin-page'))
const CheckoutPage = React.lazy(() => import('./pages/checkout/checkout-page'))

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/signin" render={() => (user ? <Redirect to="/" /> : <SignInPage />)} />
            <Route path="/signup" render={() => (user ? <Redirect to="/" /> : <SignUpPage />)} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </>
  )
}

export default App
