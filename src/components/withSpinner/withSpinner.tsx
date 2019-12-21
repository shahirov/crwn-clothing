import React from 'react'

import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles'

type InjectedProps = {
  isLoading: boolean
}

const withSpinner = (WrappedComponent: React.ComponentType): React.FC<InjectedProps> => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  )
}

export default withSpinner
