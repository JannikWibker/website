import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import { dark_theme, light_theme } from '../config/themes.js'



export default class Index extends React.Component {

  constructor(){
    super()

    console.log(dark_theme)
  }

  render() {
    return (
      <div className="root">
        <Globals />
        <Header theme={dark_theme} />
        <Content>
          <Block theme={dark_theme} >
            Index
          </Block>
        </Content>
      </div>
    )
  }
}
