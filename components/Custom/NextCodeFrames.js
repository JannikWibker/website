import React from 'react'
import HTML from '../HTML.js'
import { Keyframes, Frame } from 'react-keyframes'

export default props => (
  <Keyframes loop={true}>
    {/* FRAME 0 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    `.replace('\n', '')}</HTML></span></Frame>

    {/* FRAME 1 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥
    `.replace('\n', '')}</HTML></span></Frame>

    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥
    `.replace('\n', '')}</HTML></span></Frame>

    {/* FRAME 2 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥
    `.replace('\n', '')}</HTML></span></Frame>

    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ { }
    `.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 3 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {

    }`.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 4 */}
    <Frame duration={375}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) { }
    }`.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 5 */}
    <Frame duration={125}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {

    ^^}
    }
    `.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 6 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return {  }
    ^^}
    }
    `.replace('\n', '')}</HTML></span></Frame>

    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return { ≤3device≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
    ^^}
    }
    `.replace('\n', '')}</HTML></span></Frame>

    {/* FRAME 7 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return { ≤3device≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
    ^^}


    }
    `.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 8 */}
    <Frame duration={375}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return { ≤3device≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
    ^^}

    ^^≤4render≥() { }
    }
    `.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 9 */}
    <Frame duration={125}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return { ≤3device≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
    ^^}

    ^^≤4render≥() {

    ^^}
    }
    `.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 10 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return { ≤3device≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
    ^^}

    ^^≤4render≥() {
    ^^^^return ( )
    ^^}
    }
    `.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 11 */}
    <Frame duration={250}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return { ≤3device≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
    ^^}

    ^^≤4render≥() {
    ^^^^return (

    ^^^^)
    ^^}
    }
    `.replace('\n', '')}</HTML></span></Frame>
    {/* FRAME 12 */}
    <Frame duration={1000}><span><HTML StringToHTML={true}>{`
    import ≤1React≥ from ≤2'react'≥

    export default class ≤1Index≥ extends ≤1React≥.≤3Component≥ {
    ^^static ≤4getInitialProps≥({≤1req≥}) {
    ^^^^return { ≤3device≥: ≤1req≥ ? ≤2'server'≥ : ≤2'client'≥ }
    ^^}

    ^^≤4render≥() {
    ^^^^return (
    ^^^^^^&lt;≤5div≥&gt;{≤1this≥.≤3props≥.≤3device≥}&lt;/≤5div≥&gt;
    ^^^^)
    ^^}
    }
    `.replace('\n', '')}</HTML></span></Frame>
  </Keyframes>
)
