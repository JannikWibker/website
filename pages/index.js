import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import Terminal from '../components/Terminal.js'
import HTML from '../components/HTML.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event_loader from '../util/event_loader.js'
import keyboard from '../config/keyboard.js'
import { Keyframes, Frame } from 'react-keyframes'
import marked from 'marked'
import Script from '../components/Script.js'
import AddBlog from '../components/AddBlog.js'
import NextCodeFrames from '../components/Custom/NextCodeFrames.js'

export default class IndexPage extends React.Component {

  constructor(props){
    super(props)
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
    // initializing the keyboard shortcuts (see /config/keyboard.js)

    this.language = languages[getLanguage()].IndexPage

    event_loader(['theme', 'account'])
    // loading events (see /util/event_loader)
  }

  componentWillMount() {
    event_loader(['theme', 'account'])
    // again loading events just incase
  }

  render() {
    return (
      <div className="root">
        <Globals url={this.props.url.pathname} />
        <Header theme={dark_theme} />
        <Content theme={dark_theme}>
          <Block theme={dark_theme} >
            <Terminal width="450" height="300" title="vim" safe={false}>
              <NextCodeFrames theme={dark_theme} />
            </Terminal>
          </Block>
        </Content>
        <Footer theme={dark_theme} />
      </div>
    )
    /*
    everything has the theme attribute set to 'dark_theme'
    only displaying 'Index' as of right now (and Header and Footer ofcourse)
    */
  }
}
