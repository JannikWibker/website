import React from 'react'
import Head from 'next/head'


export default class Globals extends React.Component {

  constructor(props){
    super(props)

    this.css()
  }

  css() {

  }

  render() {
    return (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel='shortcut icon' type='image/x-icon' href='static/favicon.ico' />
          <link rel="stylesheet" href="static/css/pr1styles.css" />
          <link rel="stylesheet" href="static/vendor/normalize.css" />
          <link rel="stylesheet" href="static/vendor/skeleton.css" />
          <link rel="stylesheet" href="static/css/gfm.css" />
          <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif;
            text-rendering: geometricPrecision;
          }
          .link > a:hover, .link > a:hover > div > span {
            color: #fff;
            background-color: rgba(248,28,229,0.75);
          }
          .link_big > a:hover, .link_big:hover {
            text-decoration: underline;
          }
          ::selection {
            background-color: rgba(248,28,229,0.75);
            color: white
          }
          `.replace(/\s/g, '')}</style>
          <title>{this.props.url.substring(1, this.props.url.length) || 'home'}</title>
        </Head>
    )
    /*
    setting some globals which are needed on (almost) every page
    this includes stylesheets, device-width and some custom css (outside of a stylesheet document)
    */
  }

}
