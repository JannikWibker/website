import React from 'react'
import Head from 'next/head'
import css from 'next/css'
import { merge, hover, insertRule, $ } from 'next/css'


export default class Globals extends React.Component {

  constructor(){
    super()
    this.css.bind(this)
    this.css()

  }

  css() {
    insertRule('body { font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto, Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", sans-serif;text-rendering: geometricPrecision; }')
    insertRule('.link > a:hover, .link > a:hover > div > span { color: #fff; background-color: rgba(248,28,229,0.75)}')
  }

  render() {
    return (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="static/vendor/normalize.css" />
          <link rel="stylesheet" href="static/vendor/skeleton.css" />
        </Head>
    )
  }

}
