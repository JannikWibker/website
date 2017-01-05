import React from 'react'
import css from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import post from '../util/post.js'
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
      fullname: '',
      age: '',
      email: '',
      password: '',
      password_repeat: ''
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

    this.style__register_login = css({
      "fontSize": "0.9em",
      "marginLeft": "62px",
      "color": this.theme.linkColor + '!important'
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

      a.login_btn {
        font-size: 0.9em;
        margin-left: 62px;
        color: ${this.theme.linkColor}!important;
      }
    `}</style>
    */
  }

  check() {

    let e = n => this[n].value === '' ? n + ' is empty' : ''

    this.error.username = e('username')
    this.error.fullname = e('fullname')
    this.error.age = e('age')
    this.error.email = e('email')
    this.error.password = e('password')
    this.error.password_repeat = e('password_repeat')

    let a = n => n !== ''
    if(a(this.username.value) && a(this.fullname.value) && a(this.age.value) && a(this.email.value) && a(this.password.value) && a(this.password_repeat.value)) {
      if(this.password.value === this.password_repeat.value) {
        if(this.validate(this.password.value)) {
          console.log(true)
        } else {
          console.log(false)
        }

        post(`http://${location.hostname}:3001/auth/register`, {
          username: this.username.value,
          fullname: this.fullname.value,
          age: this.age.value,
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
            this.error.username = 'username is already taken'
          }
        })
        .then(this.forceUpdate.bind(this))
      }
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
    console.log(this)
    return (
      <div>
      <InputField type='text' placeholder='username' title='username' error={this.error.username} theme={this.theme} cb={(input) => {this.username = input}}/>
      <InputField type='text' placeholder='full name' title='full name' error={this.error.fullname} theme={this.theme} cb={(input) => {this.fullname = input}}/>
      <InputField type='number' placeholder='age' title='age' error={this.error.age} theme={this.theme} cb={(input) => {this.age = input}}/>
      <InputField type='email' placeholder='email' title='email' error={this.error.email} theme={this.theme} cb={(input) => {this.email = input}}/>
      <InputField type='password' placeholder='your p4ssw0rd' title='password' error={this.error.password} theme={this.theme} cb={(input) => {this.password = input}}/>
      <InputField type='password' placeholder='repeat p4ssw0rd' title='password' error={this.error.password_repeat} theme={this.theme} cb={(input) => {this.password_repeat = input}}/>
      <div className={this.style__register_button} onClick={this.check}>register</div>
      <a className={this.style__register_login} href='/login'>already have an account? Login</a>
      </div>
    )
  }
}
