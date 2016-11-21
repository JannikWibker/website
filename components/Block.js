import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import merge from 'next/css'
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

    //
  }

  // css (set all the css using glamor (aliased to css because next.js) with the current theme)
  css() {
    this.style__block = css({
      "position": "relative",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "minHeight": "calc(50vh - 55px)",
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor
    })
  }

  render() {
    return (
      <div className={this.style__block}>
        {typeof this.props.children !== 'string' &&
         typeof this.props.children.type !== 'string' &&
         typeof this.props.children.props.theme === 'undefined'?
          React.cloneElement(this.props.children, { theme: this.theme }) :
          this.props.children}
      </div>
    )
  }
}
