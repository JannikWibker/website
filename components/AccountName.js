import React from 'react'
import fetch from 'isomorphic-fetch'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class AccountName extends Class {
  constructor(props) {
    super(props)

    this.storage = typeof window === 'undefined' ? { account: undefined} : window.localStorage

    this.account = event.get('account').payload || {}

    this.account_event()

    this.language = languages[getLanguage()].AccountName

  }

  componentWillMount() {
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

  componentDidMount() {
    if(typeof this.storage.account !== 'undefined') {
      event.trigger('account', JSON.parse(this.storage.account))
    }
  }

  /*
  This is called after the component mounted (eg after it rendered)
  this will trigger the account event with the account information
  as its payload. The component is then updated and the AccountName is
  set so the username (instead of 'login'). This needs to be done
  AFTER the initial render because react checks the checksum of the
  existing component (which was rendered on the server) against the
  new checksum. To avoid a warning the component needs to be rendered
  once exactly the same as it was on the server, after that it is not
  important anymore. This way ensures that the initial render on the
  client happens and after that the account info is supplied.
  */

  account_event() {
    event.subscribe('account', (e) => {
      this.account = e.payload
      if(this._mounted && typeof window !== 'undefined') this.forceUpdate()
    })

    /*
    subscribe to the 'account'-event
    if the component is mounted
    (componentWillMount sets _mounted to true;
     componentWillUnmount sets _mounted to false)
    forceUpdate is called to rerun the render method and do diffing
    */
  }


  render() {
    return (
      <span className="__accountname">{this.account.username ? this.account.username : this.language.no_name}</span>
    )
  }
}

/*
shows the username if a user is logged in
if nobody is logged in shows 'login'
*/
