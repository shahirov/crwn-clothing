import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Wrapper, Title, Buttons, SignInTitle, SignInLink, SignInWrapper } from './styles'
import { FormInput } from '../../components/form-input'
import { CustomButton } from '../../components/custom-button'
import { signUpStart } from '../../features/user/slice'

interface SignUpFormValues {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export const SignupPage = () => {
  const initialValues: SignUpFormValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const dispatch = useDispatch()

  const handleSubmit = async (values: SignUpFormValues) => {
    dispatch(
      signUpStart({
        email: values.email,
        password: values.password,
        displayName: values.displayName
      })
    )
  }

  return (
    <Wrapper>
      <Title>SIGN UP</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          displayName: Yup.string()
            .max(15)
            .required('Please enter your name.'),
          email: Yup.string()
            .email('Please enter your email address in format: yourname@example.com.')
            .required('Please enter a valid email address.'),
          password: Yup.string()
            .min(6, 'Password must have at least 6 characters.')
            .required('Please enter a password.'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please enter a password.')
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormInput label="Your Name" name="displayName" type="text" />
          <FormInput label="Email" name="email" type="email" />
          <FormInput label="Password" name="password" type="password" />
          <FormInput label="Confirm Password" name="confirmPassword" type="password" />
          <Buttons>
            <CustomButton type="submit" color="green" name="signup">
              Sign up
            </CustomButton>
          </Buttons>
        </Form>
      </Formik>
      <SignInWrapper>
        <SignInTitle>Already have an account?</SignInTitle>
        <SignInLink to="/signin">Log in</SignInLink>
      </SignInWrapper>
    </Wrapper>
  )
}
