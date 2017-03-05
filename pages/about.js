import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event_loader from '../util/event_loader.js'
import keyboard from '../config/keyboard.js'

export default class AboutPage extends React.Component {

  constructor(props){
    super(props)
    keyboard.init()
    // initializing the keyboard shortcuts (see /config/keyboard.js)

    this.language = languages[getLanguage()].AboutPage

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
            about
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
