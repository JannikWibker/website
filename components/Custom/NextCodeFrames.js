import React from 'react'
import HTML from '../HTML.js'
import { Keyframes, Frame } from 'react-keyframes'
import Class from '../Class.js'

export default class NextCodeFrames extends Class {
  constructor(props) {
    super(props)

    this.theme_event()
    this.update_css()
  }

  render() {
    return (
      <Keyframes loop={true}>
        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ { }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {

        }`.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) { }
        }`.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {

        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {
        ^^^^return { ≤3server≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {
        ^^^^return { ≤3server≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
        ^^}


        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {
        ^^^^return { ≤3server≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
        ^^}

        ^^≤4render≥() { }
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {
        ^^^^return { ≤3server≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
        ^^}

        ^^≤4render≥() {

        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {
        ^^^^return { ≤3server≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
        ^^}

        ^^≤4render≥() {
        ^^^^return ( )
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {
        ^^^^return { ≤3server≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
        ^^}

        ^^≤4render≥() {
        ^^^^return (

        ^^^^)
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import ≤1React≥ from ≤2'react'≥

        export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
        ^^static ≤4getInitialProps≥({≤1req≥}) {
        ^^^^return { ≤3server≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
        ^^}

        ^^≤4render≥() {
        ^^^^return (
        ^^^^^^&lt;≤5div≥&gt;{≤1this≥.≤3props≥.≤3server≥}&lt;/≤5div≥&gt;
        ^^^^)
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>
      </Keyframes>
    )
  }
}
