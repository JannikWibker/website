import React from 'react'
import { rehydrate } from 'glamor'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import Terminal from '../components/Terminal.js'
import HTML from '../components/HTML.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage, setLanguage, getLanguageFromCode } from '../config/language.js'
import event_loader from '../util/event_loader.js'
import keyboard from '../config/keyboard.js'
import { Keyframes, Frame } from 'react-keyframes'
import marked from 'marked'
import Script from '../components/Script.js'
import AddBlog from '../components/AddBlog.js'
import NextDemo from '../components/Custom/NextDemo.js'

const isClient = () => typeof(window) !== 'undefined' && window

if (isClient()) {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default class IndexPage extends React.Component {
  static getInitialProps(obj) {
    return {
      lang: obj.req
        ? (obj.req.headers['accept-language'] ? obj.req.headers['accept-language'].match(/[a-zA-z\-]{2,10}/g)[0] : 'eng')
        : window.localStorage.lang || window.navigator.languages[0] || window.navigator.language,
      hostname: obj.req ? obj.req.url : location.hostname,
      pathname: obj.pathname,
      query: obj.query,
    }
  }

  constructor(props){
    super(props)

    this.lang_pref = isClient() ? window.localStorage.lang : ''
    this.lang_code = setLanguage(getLanguageFromCode(this.lang_pref || getLanguageFromCode(this.props.lang)))
    console.log(this.lang_code)
    this.language = languages[this.lang_code].IndexPage

    event_loader(['theme', 'account'])
    // loading events (see /util/event_loader)
  }

  componentWillMount() {
    event_loader(['theme', 'account'])
    // again loading events just incase
  }

  render() {
    return (
      <div className="root">
        <Globals url={this.props.url.pathname} />
        <Header theme={dark_theme} />
        <Content theme={dark_theme}>
          <Block theme={dark_theme}>
            <NextDemo terminal_theme={dark_theme} browser_theme={dark_theme} loop={true} />
          </Block>
        </Content>
        <Footer theme={dark_theme} />
      </div>
    )
    /*
    everything has the theme attribute set to 'dark_theme'
    only displaying 'Index' as of right now (and Header and Footer ofcourse)
    */
  }
}
