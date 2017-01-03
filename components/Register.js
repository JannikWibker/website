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

    this.check = this.check.bind(this)

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
    this.style__register_button = css({
      "width": "96",
      "height": "24px",
      "margin": "0 26px 0 110px",
      "cursor": "pointer",
      "color": this.theme.color,
      ":hover": {
        "color": this.theme.linkColor
      }
    })

    /*
    <style jsx>{`
      .register_button {
        width: 96px;
        height: 24px;
        margin: 0 26 0 110px;
        cursor: "pointer";
        color: ${this.theme.color}
      }
      .register_button:hover {
        color: ${this.theme.linkColor}
      }
    `}</style>
    */
  }

  check() {

  }

  /*
  username: req.body.username,
  fullname: req.body.fullname,
  age: req.body.age,
  email: req.body.email,
  password: req.body.password,
  rank: rank,
  */

  post(json) {
    return fetch(`http://${location.hostname}:3001/auth/register`, {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  validate(input) { // MAKE PROPER VALIDATION (CLIENT AND SERVER)
    if(input.length >= 8 && /\d/.test(input)) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
      <InputField type='text' placeholder='username' title='username' error={this.error.username} theme={this.theme} cb={(input) => {this.username = input}}/>
      <InputField type='text' placeholder='full name' title='full name' error={this.error.full_name} theme={this.theme} cb={(input) => {this.full_name = input}}/>
      <InputField type='number' placeholder='age' title='age' error={this.error.age} theme={this.theme} cb={(input) => {this.age = input}}/>
      <InputField type='email' placeholder='email' title='email' error={this.error.email} theme={this.theme} cb={(input) => {this.email = input}}/>
      <InputField type='password' placeholder='your p4ssw0rd' title='password' error={this.error.password} theme={this.theme} cb={(input) => {this.password = input}}/>
      <InputField type='password' placeholder='repeat p4ssw0rd' title='password' error={this.error.password_repeat} theme={this.theme} cb={(input) => {this.password_repeat = input}}/>
      <div className={this.style__register_button} onClick={this.check}>register</div>
      </div>
    )
  }
}
