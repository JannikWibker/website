import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme } from '../config/themes.js'
import theme_event from '../config/theme_event.js'
import keyboard from '../config/keyboard.js'

export default class IndexPage extends React.Component {

  constructor(props){
    super(props)
    console.log(this.props.url)
    keyboard.add('command+p', (e) => {
      console.log(e)
      e.preventDefault()
    })
    keyboard.add('left', (e) => {
      console.log(e)
      this.props.url.back()
    })
    keyboard.add('right', (e) => {
    })
    keyboard.init()

    theme_event()
  }

  componentWillMount() {
    theme_event()
  }

  render() {
    return (
      <div className="root">
        <Globals />
        <Header theme={dark_theme} />
        <Content theme={dark_theme}>
          <Block theme={dark_theme} >
            Index
          </Block>
        </Content>
        <Footer theme={dark_theme} />
      </div>
    )
  }
}
