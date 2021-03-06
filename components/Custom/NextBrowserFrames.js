import React from 'react'
import { Keyframes, Frame } from 'react-keyframes'
import ErrorComponent from './ErrorComponent.js'

export default ({ loop = true, color }) => (
  <Keyframes loop={loop}>

    <Frame duration={3750}>
      <ErrorComponent id={404} text={'This page could not be found'} color={color} />
    </Frame>
    <Frame duration={1250}>
    server
    </Frame>

</Keyframes>
)
