import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import Login from '../components/Login.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage, getLanguageFromCode } from '../config/language.js'
import event_loader from '../util/event_loader.js'
export default class LoginPage extends React.Component {
  static getInitialProps(obj) {
    return {
      lang: obj.req
        ? obj.req.headers['accept-language'].match(/[a-zA-z\-]{2,10}/g)[0]
        : window.navigator.language,
      pathname: obj.pathname,
      query: obj.query,
    }
  }

  constructor(props){
    super(props)

    this.lang_code = getLanguageFromCode(this.props.lang)
    if(typeof(window) !== 'undefined' && window) localStorage.lang_code = this.lang_code

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
