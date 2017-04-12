import React from 'react'
import { Keyframes, Frame } from 'react-keyframes'
import ErrorComponent from './ErrorComponent.js'

export default props => (
  <Keyframes loop={true}>

    <Frame duration={3750}>
      <ErrorComponent id={404} text={'This page could not be found'} />
    </Frame>
    <Frame duration={1250}>
    server
    </Frame>

</Keyframes>
)
