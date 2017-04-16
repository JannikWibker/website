import React from 'react'
import { style as css } from 'glamor'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class Block extends Class {
  constructor(props) {
    super(props)

    this.language = languages[getLanguage()].Block

    this.theme_event()
    this.update_css()
  }

  // css (set all the css using glamor (aliased to css because next.js) with the current theme)
  css() {
    this.style__block = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor
    })
  }

  render() {
    return (
      <div className={this.style__block + ' block __block'}>
        {typeof this.props.children !== 'string' &&
         typeof this.props.children.type !== 'string' &&
         typeof this.props.children.props.theme === 'undefined'?
          React.cloneElement(this.props.children, { theme: this.theme }) :
          this.props.children}
      </div>
    )
    /*
    similar to the Content component but is
    intended to be used inside of Content.
    has some styling and displays its children (React: this.props.children)
    checks if children are strings and if not applies the theme attribute
    which is given to it or defaults to the light_theme
    */
  }
}
