import React from 'react'
import css from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import post from '../util/post.js'
import event from '../util/event.js'
import Class from './Class.js'
import InputField from './InputField.js'

export default class Login extends Class {

  constructor(props) {
    super(props)

    this.check = this.check.bind(this)

    this.storage = typeof window === 'undefined' ? { account: undefined } : window.localStorage

    this.theme_event()
    this.update_css()

    this.error = {
      username: '',
      email: '',
      password: ''
    }
  }

  css() {
    this.style__login_button = css({
      "width": "96",
      "height": "24px",
      "margin": "0 26px 0 110px",
      "cursor": "pointer",
      "color": this.theme.color,
      ":hover": {
        "color": this.theme.linkColor
      }
    })

    this.style__login_register = css({
      "fontSize": "0.9em",
      "marginLeft": "62px",
      "color": this.theme.linkColor + '!important'
    })
  }

  /*
  <style jsx>{`
    div.login_btn {
      width: 96px;
      height: 24px;
      margin: 0 26px 0 110px;
      cursor: pointer;
      color: ${this.theme.color};
    }

    div.login_btn:hover {
      color: ${this.theme.linkColor};
    }

    a.register_btn {
      font-size: 0.9em;
      margin-left: 62px;
      color: ${this.theme.linkColor}!important;
    }

  `}</style>
  */

  check() {

    let e = n => this[n].value === '' ? n + ' is empty' : ''

    this.error.username = e('username')
    this.error.email = e('email')
    this.error.password = e('password')

    if(this.username.value !== '' && this.email.value !== '' && this.password.value!== '' ) {
      if(this.validate(this.password.value)) {
        console.log(true)
      } else {
        console.log(false)
      }
      post(`http://${location.hostname}:3001/auth/login`, {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value
      })
      .then(body => body.json())
      .then(body => {
        if(typeof body.id !== 'undefined') {
          let acc_obj = {
            username: this.username.value,
            email: this.email.value,
            password: this.password.value,
            id: body.id
          }
          event.trigger('account', acc_obj)
          console.log(acc_obj)
          this.storage.account = JSON.stringify(acc_obj)
        } else {
          event.trigger('account', {})
          this.storage.account = undefined
        }
      })

    }

    this.forceUpdate()
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
        <InputField type='email' placeholder='email' title='email' error={this.error.email} theme={this.theme} cb={(input) => {this.email = input}}/>
        <InputField type='password' placeholder='your p4ssw0rd' title='password' error={this.error.password} theme={this.theme} cb={(input) => {this.password = input}}/>
        <div className={this.style__login_button} onClick={this.check}>login</div>
        <a className={this.style__login_register} href='/register'>don't have an account? Register</a>
      </div>
    )
  }

}
