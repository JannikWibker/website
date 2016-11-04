import React from 'react'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'


export default class Blog extends React.Component {

  constructor(){
    super()

  }

  render() {
    return (
      <div className="root">
        <Header />
        <Content>
          <Block>
            Blog
          </Block>
        </Content>
      </div>
    )
  }
}
