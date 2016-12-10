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

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)
    this.theme_event = this.theme_event.bind(this)
    this.theme_event()
    this.update_css()
  }

  css() {
    this.style__login_input = css({
      "padding": "0px 10px 5px 10px!important",
      "marginBottom": "20px",
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

    })
  }

  check() {

  }

  render() {
    return (
      <div className={""} >
        <span className={this.style__login_span} >username</span>
        <input type="text" placeholder="username" className={this.style__login_input}></input><br />
        <span className={this.style__login_span} >email</span>
        <input type="text" placeholder="you@mailprovider.com" className={this.style__login_input}></input><br />
        <span className={this.style__login_span} >password</span>
        <input type="password" placeholder="your p4ssw0rd" className={this.style__login_input}></input>
        <div className={this.style__login_button}>login</div>
      </div>
    )
  }

}
