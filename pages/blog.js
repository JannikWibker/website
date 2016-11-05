import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'


export default class Blog extends React.Component {

  constructor(){
    super()

    this.dark_theme = {
      backgroundColor: '#000',
      color: '#fff',
      invertColor: '#000'
    }

  }

  render() {
    return (
      <div className="root">
        <Globals />
        <Header theme={this.dark_theme}/>
        <Content>
          <Block>
            Blog
          </Block>
        </Content>
      </div>
    )
  }
}
