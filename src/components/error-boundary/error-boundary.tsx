import React from 'react'

import imageUrl from './404.png'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles'

type State = {
  readonly hasError: Error | boolean
}

class ErrorBoundary extends React.Component<any, State> {
  state = {
    hasError: false
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ hasError: error || true })
  }

  render() {
    const { children } = this.props

    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={imageUrl} />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }

    return children
  }
}

export default ErrorBoundary
