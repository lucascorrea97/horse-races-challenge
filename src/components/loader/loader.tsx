// Libraries
import React from 'react'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

const Loader = (props: ActivityIndicatorProps) => {
  return <ActivityIndicator size="large" {...props} />
}

export default Loader
