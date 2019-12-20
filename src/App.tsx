import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import HomePage from './pages/home/home-page'
import Shop from './pages/shop/shop-page'
import Header from './components/header/header'
import SignupPage from './pages/signup/signup-page'
import SigninPage from './pages/signin/signin-page'
import Checkout from './components/checkout-page/checkout'
import firebase from './firebase/firebase'
import { setCurrentUser } from './slices/user-slice'
import { RootState } from './redux/rootReducer'

interface SnapshotData {
  displayName: string
  email: string
  createdAt: firebase.firestore.Timestamp
}

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.currentUser)

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await firebase.createUserProfileDocument(userAuth)

        userRef?.onSnapshot((snapshot) => {
          const { displayName, email, createdAt } = snapshot.data() as SnapshotData

          dispatch(
            setCurrentUser({
              id: snapshot.id,
              displayName,
              email,
              createdAt: createdAt.toMillis()
            })
          )
        })
      } else {
        dispatch(setCurrentUser(userAuth))
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/signin" render={() => (user ? <Redirect to="/" /> : <SigninPage />)} />
        <Route path="/signup" render={() => (user ? <Redirect to="/" /> : <SignupPage />)} />
      </Switch>
    </>
  )
}

export default App
