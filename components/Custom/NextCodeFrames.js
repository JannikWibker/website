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
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> { }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {

        }`.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) { }
        }`.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {

        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {
        ^^^^return { <span style="color: #dc322f">server</span>: <span style="color: #2aa198">req</span> ? <span style="color: #b58900">'server'</span> : <span style="color: #b58900">'client'</span> }
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {
        ^^^^return { <span style="color: #dc322f">server</span>: <span style="color: #2aa198">req</span> ? <span style="color: #b58900">'server'</span> : <span style="color: #b58900">'client'</span> }
        ^^}


        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {
        ^^^^return { <span style="color: #dc322f">server</span>: <span style="color: #2aa198">req</span> ? <span style="color: #b58900">'server'</span> : <span style="color: #b58900">'client'</span> }
        ^^}

        ^^<span style="color: #d33682">render</span>() { }
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {
        ^^^^return { <span style="color: #dc322f">server</span>: <span style="color: #2aa198">req</span> ? <span style="color: #b58900">'server'</span> : <span style="color: #b58900">'client'</span> }
        ^^}

        ^^<span style="color: #d33682">render</span>() {

        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {
        ^^^^return { <span style="color: #dc322f">server</span>: <span style="color: #2aa198">req</span> ? <span style="color: #b58900">'server'</span> : <span style="color: #b58900">'client'</span> }
        ^^}

        ^^<span style="color: #d33682">render</span>() {
        ^^^^return ( )
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={300}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {
        ^^^^return { <span style="color: #dc322f">server</span>: <span style="color: #2aa198">req</span> ? <span style="color: #b58900">'server'</span> : <span style="color: #b58900">'client'</span> }
        ^^}

        ^^<span style="color: #d33682">render</span>() {
        ^^^^return (

        ^^^^)
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>

        <Frame duration={500}><span><HTML StringToHTML={true}>{`
        import <span style="color: #2aa198">React</span> from <span style="color: #b58900">'react'</span>

        export default class <span style="color: #2aa198">Index</span> extends <span style="color: #2aa198">React</span>.<span style="color: #dc322f">Component</span> {
        ^^static <span style="color: #d33682">getInitialProps</span>({<span style="color: #2aa198">req</span>}) {
        ^^^^return { <span style="color: #dc322f">server</span>: <span style="color: #2aa198">req</span> ? <span style="color: #b58900">'server'</span> : <span style="color: #b58900">'client'</span> }
        ^^}

        ^^<span style="color: #d33682">render</span>() {
        ^^^^return (
        ^^^^^^&lt;<span style="color: #cb4b16">div</span>&gt;{<span style="color: #2aa198">this</span>.<span style="color: #dc322f">props</span>.<span style="color: #dc322f">server</span>}&lt;/<span style="color: #cb4b16">div</span>&gt;
        ^^^^)
        ^^}
        }
        `.replace('\n', '')}</HTML></span></Frame>
      </Keyframes>
    )
  }
}
