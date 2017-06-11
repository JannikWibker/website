import React from 'react'
import { rehydrate } from 'glamor'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import Login from '../components/Login.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage, setLanguage, getLanguageFromCode } from '../config/language.js'
import event_loader from '../util/event_loader.js'

const isClient = () => typeof(window) !== 'undefined' && window

if (isClient()) {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default class LoginPage extends React.Component {
  static getInitialProps(obj) {
    return {
      lang: obj.req
        ? obj.query.lang && obj.query.lang !== 'reset'
          ? obj.query.lang
          : obj.req.headers['accept-language']
            ? obj.req.headers['accept-language'].match(/[a-zA-z\-]{2,10}/g)[0]
            : 'eng'
        : window.localStorage.lang || window.navigator.languages[0] || window.navigator.language,
      hostname: obj.req ? obj.req.headers.host.split(':')[0] : location.hostname,
      pathname: obj.pathname,
      query: obj.query,
    }
  }

  constructor(props){
    super(props)

    if(isClient() && window.__NEXT_DATA__.lang) {
      console.log('has __NEXT_DATA__.lang: ' + window.__NEXT_DATA__.lang)
      this.lang_pref = window.__NEXT_DATA__.lang
      if(this.lang_pref === 'reset') {
        window.localStorage.removeItem('lang')
      } else {
        window.localStorage.lang = this.lang_pref
      }
    }
    this.lang_pref = this.lang_pref || isClient() ? window.localStorage.lang : ''
    this.lang_code = setLanguage(getLanguageFromCode(this.lang_pref || getLanguageFromCode(this.props.lang)))

    this.language = languages[this.lang_code].LoginPage

    event_loader(['theme', 'account'])
    // loading events (see /util/event_loader)
  }

  componentWillMount() {
    event_loader(['theme', 'account'])
    // loading events once again
  }

  render() {
    return (
      <div className="root">
        <Globals url={this.props.url.pathname} />
        <Header />
        <Content>
          <Block>
            <Login back={this.props.url.back}/>
          </Block>
        </Content>
        <Footer />
      </div>
    )
    /*
    no theme set anywhere so everything defaults to the light_theme
    displaying the Login component and passing this.props.url.back as an attribute
    (see components/Login.js)
    */
  }
}
