import React from 'react'

import { Spinner } from '../components/spinner'

interface Props {
  isLoading: boolean
}

export const withSpinner = (WrappedComponent: React.ComponentType): React.FC<Props> => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}
