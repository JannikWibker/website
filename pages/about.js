import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme } from '../config/themes.js'
import event_loader from '../util/event_loader.js'
import keyboard from '../config/keyboard.js'

export default class AboutPage extends React.Component {

  constructor(props){
    super(props)
    keyboard.init()

    event_loader(['theme', 'account'])

  }

  componentWillMount() {
    event_loader(['theme', 'account'])
  }

  render() {
    event_loader(['theme', 'account'])
    return (
      <div className="root">
        <Globals />
        <Header />
        <Content theme={light_theme}>
          <Block>
            about
          </Block>
        </Content>
        <Footer />
      </div>
    )
  }
}
