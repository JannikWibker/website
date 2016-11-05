import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'


export default class About extends React.Component {

  constructor(){
    super()

  }

  render() {
    return (
      <div className="root">
        <Globals />
        <Header />
        <Content>
          <Block>
            About
          </Block>
        </Content>
      </div>
    )
  }
}
