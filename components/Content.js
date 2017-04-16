import React from 'react'
import { style as css } from 'glamor'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class Content extends Class {

  constructor() {
    super()

    this.language = languages[getLanguage()].Content

    this.theme_event()
    this.update_css()

  }

  css() {
    this.style__content = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
    })

    /*
    <style jsx>{`
    div.content {
      text-align: center;
      min-height: calc(100vh - 110px - 72px);
      background-color: ${this.theme.backgroundColor};
      color: ${this.theme.color};
      font-size: 14px;
      font-weight: 100;
    }
    `}</style>
    */
  }

  render() {
    return (
      <div className={this.style__content + ' content __content'}>
        {this.props.children}
      </div>
    )

    /*
    a wrapper with some styling applied; nothing special
    used as a container for something else.
    */
  }
}
