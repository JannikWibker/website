import React from 'react'
import { rehydrate } from 'glamor'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import Register from '../components/Register.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage, setLanguage, getLanguageFromCode } from '../config/language.js'
import event_loader from '../util/event_loader.js'

const isClient = () => typeof(window) !== 'undefined' && window

if (isClient()) {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default class RegisterPage extends React.Component {
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

    this.language = languages[this.lang_code].RegisterPage

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
            <Register />
          </Block>
        </Content>
        <Footer />
      </div>
    )
  }
}
