import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import merge from 'next/css'
import fetch from 'isomorphic-fetch'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class Block extends Class {

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
    this.style__login_input = css({
      "backgroundColor": this.theme.backgroundColor + "!important",
      "padding": "0px 10px 5px 10px!important",
      "marginBottom": "0",
      "fontSize": "12px",
      "width": "150px",
      "border": "none!important",
      "borderRadius": "0px!important",
      "borderBottom": "2px solid " + this.theme.accentColor + "!important",
      ":focus": {
        "borderBottom": "2px solid " + this.theme.color + "!important"
      }
    })

    this.style__login_span = css({
      "display": "inline-block",
      "width": "84px",
      "marginTop": "4px",
      "fontSize": "13px",
      "textAlign": "left",
    })

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

    this.style__login_error = css({
      "color": "red",
      "display": "inline-block",
      "height": "12px",
      "width": "128px",
      "marginLeft": "62px",
      "fontSize": "10px",
      "paddingLeft": "10px",
      "textAlign": "left"
    })
  }

  check() {
    if(this.username.value === '') {
      this.error.username = 'username is empty'
    } else {
      this.error.username = ''
    }
    if(this.email.value === '') {
      this.error.email = 'email is empty'
    } else {
      this.error.email = ''
    }
    if(this.password.value === '') {
      this.error.password = 'password is empty'
    } else {
      this.error.password = ''
    }

    if(this.username.value !== '' && this.email.value !== '' && this.password.value!== '' ) {
      if(this.validate(this.password.value)) {
        console.log(true)
      } else {
        console.log(false)
      }
      this.post({
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

  post(json) {
    return fetch(`http://${location.hostname}:3001/auth/login`, {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }


  validate(input) {
    if(input.length >= 8) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className={""} >
        <span className={this.style__login_span} >username</span>
        <input type="text" placeholder="username" className={this.style__login_input} ref={(input) => {this.username = input}}></input><br />
        <span className={this.style__login_error} >{this.error.username}</span><br />
        <span className={this.style__login_span} >email</span>
        <input type="text" placeholder="you@mailprovider.com" className={this.style__login_input} ref={(input) => {this.email = input}}></input><br />
        <span className={this.style__login_error} >{this.error.email}</span><br />
        <span className={this.style__login_span} >password</span>
        <input type="password" placeholder="your p4ssw0rd" className={this.style__login_input} ref={(input) => {this.password = input}}></input><br />
        <span className={this.style__login_error} >{this.error.password}</span><br />
        <div className={this.style__login_button} onClick={this.check}>login</div>
      </div>
    )
  }

}
