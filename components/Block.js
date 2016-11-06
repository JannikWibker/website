import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import merge from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'

export default class Block extends React.Component {
  constructor() {
    super()

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)

    event.subscribe('theme', (e) => {
      // function to swap theme
      let swap = theme => {
        if(theme.name === dark_theme.name) {
          return light_theme
        } else if(theme.name === light_theme.name) {
          return dark_theme
        }
      }

      this.theme = swap(this.theme)
      this.css()
      if(this._mounted) this.forceUpdate()
    })

    this.update_css()
  }
  // componentWillMount
  componentWillMount() {
    this._mounted = true
    this.update_css()
  }
  // componentWillUnmount
  componentWillUnmount() {
    this._mounted = false
  }

  // update_css (set the theme given via props or default to light theme)
  update_css() {
    if(this.props && this.props.theme) {
      this.theme = this.props.theme
    } else {
      this.theme = light_theme
    }

    this.css()
  }
  // css (set all the css using glamor (aliased to css because next.js) with the current theme)
  css() {
    this.style__block = css({
      "display": "flex",
      "alignItems": "center",
      "minHeight": "calc(50vh - 55px)",
      "justifyContent": "center",
      "position": "relative",
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor
    })
  }

  render() {
    return (
      <div className={this.style__block}>
        {this.props.children}
      </div>
    )
  }
}
