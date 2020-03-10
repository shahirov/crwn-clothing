import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

import { Wrapper, Title, Divider, Buttons, SignUpLink, SignUpTitle } from './styles'
import { FormInput } from '../../components/form-input'
import { CustomButton } from '../../components/custom-button'
import { googleSignInStart, emailSignInStart } from '../../features/user/slice'

interface SignInFormValues {
  email: string
  password: string
}

export const SigninPage = () => {
  const initialValues: SignInFormValues = { email: '', password: '' }
  const dispatch = useDispatch()

  const handleSubmit = async (
    values: SignInFormValues,
    { resetForm }: FormikHelpers<SignInFormValues>
  ) => {
    dispatch(emailSignInStart({ email: values.email, password: values.password }))
    resetForm()
  }

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
        onSubmit={handleSubmit}
      >
        <Form>
          <FormInput label="Email" name="email" type="email" />
          <FormInput label="Password" name="password" type="password" />
          <Buttons>
            <CustomButton type="submit" color="green">
              Sign in
            </CustomButton>
            <CustomButton
              type="button"
              color="blue"
              name="signin"
              handleClick={() => {
                dispatch(googleSignInStart())
              }}
            >
              Sign in with google
            </CustomButton>
          </Buttons>
        </Form>
      </Formik>
      <Divider />
      <SignUpTitle>Don't have an account?</SignUpTitle>
      <SignUpLink to="/signup">Sign Up</SignUpLink>
    </Wrapper>
  )
}
