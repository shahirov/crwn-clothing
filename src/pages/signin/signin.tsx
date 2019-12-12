import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { Wrapper, Title, Divider, Buttons, SignUpLink, SignUpTitle } from './signin.styles'
import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'
import { FirebaseContext } from '../../firebase'

interface SignInFormValues {
  email: string
  password: string
}

const Signin = () => {
  const initialValues: SignInFormValues = { email: '', password: '' }
  const { firebase } = useContext(FirebaseContext)

  return (
    <Wrapper>
      <Title>SIGN IN</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Please enter your email address in format: yourname@example.com.')
            .required('Please enter a valid email address.'),
          password: Yup.string()
            .min(6, 'Password must have at least 6 characters.')
            .required('Please enter a password.')
        })}
        onSubmit={(values) => {}}
      >
        <Form>
          <FormInput label="Email" name="email" type="email" />
          <FormInput label="Password" name="password" type="password" />
          <Buttons>
            <CustomButton type="submit" color="green" signIn>
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              color="blue"
              signIn
              handleClick={() => firebase.signInWithGoogle()}
            >
              Sign in with google
            </CustomButton>
          </Buttons>
        </Form>
      </Formik>
      <Divider />
      <SignUpTitle>Don't have an account?</SignUpTitle>
      <SignUpLink to="/signin">Sign Up</SignUpLink>
    </Wrapper>
  )
}

export default Signin
