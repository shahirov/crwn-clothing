import React from 'react'
import { useField } from 'formik'

import { Group, Input, InputLabel, ErrorMsg } from './form-input.styles'

type FormInputProps = {
  label?: string
  name: string
  type?: string
}

const FormInput: React.FC<FormInputProps> = (props) => {
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

export default FormInput
