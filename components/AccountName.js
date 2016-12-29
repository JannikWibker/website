import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class AccountName extends Class {
  constructor(props) {
    super(props)

    this.account_event()

    this.account = event.get('account').payload || {}
    console.log(this)
  }

  componentWillMount() {
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

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
      <span>{this.account.username ? this.account.username : 'login'}</span>
    )
  }
}

/*
shows the username if a user is logged in
if nobody is logged in shows 'login'
*/
