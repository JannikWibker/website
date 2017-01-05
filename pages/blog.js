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
    // initializing the keyboard shortcuts (see /config/keyboard.js)
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
        <Globals url={this.props.url.pathname} />
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

    /*
    setting a theme for Header, Block and for Footer
    (could have left this out but I did not because
    I was testing how well the themes were working;
    this is also the reason why in 'about' Content has
    a theme and here Header, Block and Footer (but not Content))

    if the URL has a querystring then use the Blog component to show
    the specified blog (see /components/Blog.js)
    if no querystring is specified use the BlogList component to show
    a list of blogs (including title, date and a little preview;
    see /components/BlogList.js for further information)
    */
  }
}
