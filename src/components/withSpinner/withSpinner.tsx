import React from 'react'

import Spinner from '../spinner/spinner'

type InjectedProps = {
  isLoading: boolean
}

const withSpinner = (WrappedComponent: React.ComponentType): React.FC<InjectedProps> => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default withSpinner
