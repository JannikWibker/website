import React from 'react'
import css from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import Class from './Class.js'


export default class Button extends Class {

  constructor(){
    super()

    this.language = languages[getLanguage()].Button

    this.theme_event()
    this.update_css()
  }

  css() {
    this.style__span = css({
      "textDecoration": "none",
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
      "cursor": "pointer",
      ":hover": {
        "backgroundColor": this.theme.linkColor,
        "color": "#fff"
      }
    })
  }

  render() {
    return (
      <span onClick={this.props.click} className={this.style__span}>{this.props.children}</span>
    )
  }
}
