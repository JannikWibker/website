import React from 'react'
import css from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'

export default class Content extends React.Component {

  constructor() {
    super()



  }

  update_css() {
    if(this.props && this.props.theme) {
      this.theme = this.props.theme
    } else {
      this.theme = light_theme
    }

    this.css()
  }

  css() {
    this.style__content = css({
      "color": "#000",
      "fontSize": "14px",
      "textAlign": "center",
      "fontWeight": "100"
    })
  }

  render() {
    return (
      <div className={this.style__content}>
        {this.props.children}
      </div>
    )
  }
}
