import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import BlogList from '../components/BlogList.js'
import Blog from '../components/Blog.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme, purple_theme, blue_theme } from '../config/themes.js'
import event_loader from '../util/event_loader.js'
import keyboard from '../config/keyboard.js'

export default class BlogPage extends React.Component {

  constructor(props) {
    super(props)
    keyboard.init()
  }

  componentWillMount() {
    event_loader(['theme', 'account'])
  }

  render() {
    event_loader(['theme', 'account'])
    return (
      <div className="root">
        <Globals />
        <Header theme={light_theme}/>
        <Content>
          <Block theme={light_theme}>
            {this.props.url.query.id ?
              <Blog id={this.props.url.query.id} /> :
              <BlogList />}
          </Block>
        </Content>
        <Footer theme={light_theme}/>
      </div>
    )
  }
}
