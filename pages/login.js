import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme } from '../config/themes.js'
import theme_event from '../config/theme_event.js'
export default class IndexPage extends React.Component {

  constructor(props){
    super(props)
    theme_event()
  }

  componentWillMount() {
    theme_event()
  }

  render() {
    return (
      <div className="root">
        <Globals />
        <Header />
        <Content>
          <Block>
            Login
          </Block>
        </Content>
        <Footer />
      </div>
    )
  }
}
