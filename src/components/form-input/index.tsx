import React from 'react'
import { useField } from 'formik'

import { Group, Input, InputLabel, ErrorMsg } from './styles'

interface Props {
  label?: string
  name: string
  type?: string
}

export const FormInput = (props: Props) => {
  const [field, meta] = useField(props.name)

  return (
    <Group>
      <Input {...field} {...props} />
      <InputLabel htmlFor={props.name} value={field.value}>
        {props.label}
      </InputLabel>
      {meta.touched && meta.error && <ErrorMsg>{meta.error}</ErrorMsg>}
    </Group>
  )
}
