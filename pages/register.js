import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import Register from '../components/Register.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage, setLanguage, getLanguageFromCode } from '../config/language.js'
import event_loader from '../util/event_loader.js'

export default class RegisterPage extends React.Component {
  static getInitialProps(obj) {
    return {
      lang: obj.req
        ? obj.req.headers['accept-language'].match(/[a-zA-z\-]{2,10}/g)[0]
        : window.localStorage.lang || window.navigator.language,
      pathname: obj.pathname,
      query: obj.query,
    }
  }

  constructor(props){
    super(props)
    this.lang_code = setLanguage(getLanguageFromCode(this.props.lang))
    if(typeof(window) !== 'undefined' && window) window.localStorage.lang = this.lang_code

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
