import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import BlogList from '../components/BlogList.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme } from '../config/themes.js'
import theme_event from '../config/theme_event.js'

export default class Blog extends React.Component {

  constructor(){
    super()
  }

  componentWillMount() {
    theme_event()
  }

  render() {
    theme_event()
    return (
      <div className="root">
        <Globals />
        <Header theme={light_theme}/>
        <Content>
          <Block theme={light_theme}>
            Blog
            <BlogList />
          </Block>
        </Content>
        <Footer theme={light_theme}/>
      </div>
    )
  }
}
