import React from 'react'
import { style as css } from 'glamor'
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

    /*
    <style jsx>{`
      span {
        text-decoration: none;
        color: ${this.theme.color};
        background-color: ${this.theme.backgroundColor};
        cursor: pointer;
      }

      span:hover {
        background-color: ${this.theme.linkColor};
        color: #fff;
      }
    `}</style>
    */
  }

  render() {
    return (
      <span onClick={this.props.click} className={this.style__span + ' __button'}>{this.props.children}</span>
    )
  }
}
