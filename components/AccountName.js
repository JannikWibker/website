import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class AccountName extends Class {
  constructor(props) {
    super(props)
  }

  account_event() {
    event.subscribe('account', (e) => {
      console.log(e)
    })
  }



  render() {
    return (
      <i>123</i>
    )
  }
}
