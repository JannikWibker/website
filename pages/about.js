import React from 'react'
import { rehydrate } from 'glamor'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage, setLanguage, getLanguageFromCode } from '../config/language.js'
import { Keyframes, Frame } from 'react-keyframes'
import event_loader from '../util/event_loader.js'
import keyboard from '../config/keyboard.js'
import About from '../components/About.js'

import { version, author, name } from '../package.json'

const isClient = () => typeof(window) !== 'undefined' && window

if (isClient()) {
  rehydrate(window.__NEXT_DATA__.ids)
}

import Terminal from '../components/Terminal.js'
import NextCodeFrames from '../components/Custom/NextCodeFrames.js'

export default class AboutPage extends React.Component {
  static getInitialProps(obj) {
    return {
      lang: obj.req
        ? (obj.req.headers['accept-language'] ? obj.req.headers['accept-language'].match(/[a-zA-z\-]{2,10}/g)[0] : 'eng')
        : window.localStorage.lang || window.navigator.languages[0] || window.navigator.language,
      pathname: obj.pathname,
      query: obj.query,
    }
  }

  constructor(props){
    super(props)
    //console.log(`this is version ${version}🎉`)
    this.lang_pref = isClient() ? window.localStorage.lang : ''
    this.lang_code = setLanguage(getLanguageFromCode(this.lang_pref || getLanguageFromCode(this.props.lang)))
    this.language = languages[this.lang_code].AboutPage

    event_loader(['theme', 'account'])
    // loading events (see /util/event_loader.js for additional information)
  }

  componentWillMount() {
    event_loader(['theme', 'account'])
    // again loading events just incase
  }

  render() {
    event_loader(['theme', 'account'])
    // and again loading events just incase (this is probably completly useless and idiotic but I do not care as of right now)
    return (
      <div className="root">
        <Globals url={this.props.url.pathname} />
        <Header />
        <Content theme={light_theme}>
          <Block>
            <About />
          </Block>
        </Content>
        <Footer />
      </div>
    )

    /*
    setting a theme for the Content component
    display nothing (expect 'about') as of right now,
    this will change soon(er or later)
    */
  }
}
