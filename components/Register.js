import React from 'react'
import css from 'next/css'
import fetch from 'isomorphic-fetch'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import Class from './Class.js'
import InputField from './InputField.js'

export default class Register extends Class {

  constructor(props) {
    super(props)

    this.storage = typeof window === 'undefined' ? { account: undefined} : window.localStorage

    this.theme_event()
    this.update_css()

    this.error = {
      username: '',
      email: '',
      password: ''
    }
  }

  css() {

  }

  post(json) {
    return fetch(`http://${location.hostname}`, { // MAKE BACKEND FOR REGISTERING
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    return (
      <div>
      <InputField type='text' placeholder='username' title='username' error={this.error.username} theme={this.theme} cb={(input) => {this.username = input}}/>
      <InputField type='email' placeholder='email' title='email' error={this.error.email} theme={this.theme} cb={(input) => {this.email = input}}/>
      <InputField type='password' placeholder='your p4ssw0rd' title='password' error={this.error.password} theme={this.theme} cb={(input) => {this.password = input}}/>
      </div>
    )
  }
}
