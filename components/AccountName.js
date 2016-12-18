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

    this.account = {}
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
  }


  render() {
    return (
      <span>{this.account.username ? this.account.username : 'login'}</span>
    )
  }
}
