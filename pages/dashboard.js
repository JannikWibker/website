import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme, purple_theme, blue_theme } from '../config/themes.js'
import event_loader from '../util/event_loader.js'
export default class DashboardPage extends React.Component {

  constructor(props) {
    super(props)
  }
  componentWillMount() {
    event_loader(['theme', 'account'])
    // loading events (see /util/event_loader.js for additional information)
  }
  render() {
    event_loader(['theme', 'account'])

    // again loading events just incase
    return (
      <div className="root">
        <Globals />
        <Header theme={light_theme}/>
        <Content>
          <Block theme={light_theme}>
            Dashboard - Account stuff goes here
          </Block>
        </Content>
        <Footer theme={light_theme}/>
      </div>
    )
  }
}
