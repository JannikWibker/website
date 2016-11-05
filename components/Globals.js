import React from 'react'
import Head from 'next/head'
import css from 'next/css'
import { merge, hover, insertRule, $ } from 'next/css'


export default class Globals extends React.Component {

  constructor(){
    super()
  }

  render() {
    return (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="static/normalize.css" />
          <link rel="stylesheet" href="static/skeleton.css" />
        </Head>
    )
  }

}
