import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import { dark_theme, light_theme } from '../config/themes.js'
import theme_event from '../config/theme_event.js'

export default class Index extends React.Component {

  constructor(){
    super()

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
      </div>
    )
  }
}
