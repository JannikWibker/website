import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import Login from '../components/Login.js'
import { dark_theme, light_theme } from '../config/themes.js'
import event_loader from '../util/event_loader.js'
export default class IndexPage extends React.Component {

  constructor(props){
    super(props)
    event_loader(['theme', 'account'])
    // loading events (see /util/event_loader)
  }

  componentWillMount() {
    event_loader(['theme', 'account'])
    // loading events once again
  }

  render() {
    return (
      <div className="root">
        <Globals />
        <Header />
        <Content>
          <Block>
            <Login back={this.props.url.back}/>
          </Block>
        </Content>
        <Footer />
      </div>
    )
    /*
    no theme set anywhere so everything defaults to the light_theme
    displaying the Login component and passing this.props.url.back as an attribute
    (see components/Login.js)
    */
  }
}
