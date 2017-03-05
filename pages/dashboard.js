import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import AddBlog from '../components/AddBlog.js'
import DelBlog from '../components/DelBlog.js'
import Button from '../components/Button.js'
import AccountName from '../components/AccountName.js'
import Login from '../components/Login.js'
import { dark_theme, light_theme, purple_theme, blue_theme } from '../config/themes.js'
import event_loader from '../util/event_loader.js'
import event from '../util/event.js'

export default class DashboardPage extends React.Component {

  constructor(props) {
    super(props)

    this.storage = typeof window === 'undefined' ? { account: undefined} : window.localStorage

    this.showAddBlog = false
    this.showDelBlog = false

    event_loader(['theme', 'account'])

    this.l_acc = undefined
    /*
      setting to undefined because the server should render the logged out state and l_acc
      is used to check if someone is logged in or not (and the server obviously is not logged in)
      later the value is changed but this is only happening on the client side which. The change
      instantly triggers a rerender of the page
    */
  }

  componentDidMount() {
    this.l_acc = this.checkForAccount()
    this.forceUpdate()
    /*
      this code is in componentDidMount because React needs to render the page once
      because the markup from the server side rendering must match the first render
      and the markup from the server is always showing the logged out state
    */
  }

  componentWillUpdate() {
  }

  checkForAccount() {
    // using this.storage instead of localStorage directly because server side rendering
    let _checkObj = obj => (obj.username && obj.email && obj.password && obj.id)
    // check an object for username, email, password and id (the validity of these values is **NOT** checked, just their existence)
    let l_acc_e = event.get('account').payload
    let l_acc_s = JSON.parse(this.storage.account || '{}')
    // l_acc_e = account data from event system
    // l_acc_s = account data from localStorage (the account system also uses localStorage behind the scenes to save some event data for revisiting the page)
    if(_checkObj(l_acc_e)) return l_acc_e
    if(_checkObj(l_acc_s)) return l_acc_s
    // checking both event and localStorage data with _checkObj function and returning data if data is present
  }

  render() {

    // again loading events just incase
    return (
      <div className="root">
        <Globals url={this.props.url.pathname} />
        <Header theme={light_theme}/>
        <Content theme={light_theme}>
          <Block theme={light_theme}>
            {this.l_acc ? (
              <div>
                Dashboard - Account stuff goes here<br />
                <AccountName />
                <br />
                <hr />
                <span>
                  <span style={{fontSize: "1.2em"}}>{"add a blog post? "}</span>
                  <Button theme={light_theme} click={(()=>{this.showAddBlog = !this.showAddBlog;this.forceUpdate();}).bind(this)}>{this.showAddBlog ? '[hide]' : '[show]'}</Button>
                  <AddBlog style={this.showAddBlog ? {} : {display: 'none'}} flex={true} />
                  <hr />
                </span>
                <span>
                  <span style={{fontSize: "1.2em"}}>{"delete a blog post?"}</span>
                  <Button theme={light_theme} click={(()=>{this.showDelBlog = !this.showDelBlog;this.forceUpdate();}).bind(this)}>{this.showDelBlog ? '[hide]' : '[show]'}</Button>
                  <DelBlog style={this.showDelBlog ? {} : {display: 'none'}} flex={true} />
                  <hr />
                </span>
              </div>
            ) : (
              <div>
                The Dashboard requires you to be logged in,
                <br />
                you can login below or create a new account if necessary
                <Login />
              </div>
            )}
          </Block>
        </Content>
        <Footer theme={light_theme}/>
      </div>
    )
  }
}
