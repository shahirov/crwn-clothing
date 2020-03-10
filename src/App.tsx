import React, { Suspense, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { GlobalStyle } from './global.styles'
import { Header } from './components/header'
import { Spinner } from './components/spinner'
import { ErrorBoundary } from './components/error-boundary'
import { checkUserSession } from './features/user/slice'
import { selectCurrentUser } from './features/user/selectors'

const HomePage = React.lazy(() => import('./pages/home'))
const ShopPage = React.lazy(() => import('./pages/shop'))
const SignUpPage = React.lazy(() => import('./pages/signup'))
const SignInPage = React.lazy(() => import('./pages/signin'))
const CheckoutPage = React.lazy(() => import('./pages/checkout'))

export const App = () => {
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
