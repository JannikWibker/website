import React from 'react'
import css from 'next/css'
import HTML from './HTML.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class Browser extends Class {
  constructor(props) {
    super(props)

    this.title = this.props.title ? this.props.title : typeof(location) !== 'undefined' && location !== undefined ? location.origin : 'localhost'

    this.theme_event()
    this.update_css()
  }

  css() {
    this.css__container = css({
      "boxSizing": "border-box",
      "borderRadius": "6px",
      "width": this.props.width || 450,
      "height": this.props.height || 260,
      "backgroundColor": this.theme.backgroundColor,
      "color": this.theme.color,
      "maxWidth": "90vw",
      "margin": "10px"
    })

    this.css__border = css({
      "boxSizing": "inherit",
      "display": "block",
      "position": "relative",
      "backgroundColor": this.theme.backgroundColor,
      "border": `1px solid ${this.theme.accentColor}`,
      "borderRadius": "5px",
      "width": this.props.width || 450,
      "height": this.props.height || 260,
      "maxWidth": "90vw",
    })

    this.css__header = css({
      "boxSizing": "inherit",
      "display": "block",
      "position": "absolute",
      "width": (this.props.width || 450) - 2 + 'px',
      "maxWidth": "90vw",
      "height": "36px",
      "textAlign": "center",
      "borderTopRightRadius": "4px",
      "borderTopLeftRadius": "4px",
    })

    this.css__main = css({
      "boxSizing": "inherit",
      "display": "block",
      "width": `calc(${this.props.width || '450px'} - 32px)`,
      "height": (this.props.height || 260) - 36 + 'px',
      "margin": "36px 12px 0 12px",
      "textAlign": "left",
      "fontSize": "12px",
      "fontFamily": "Menlo",
      "color": this.theme.color
    })

    this.css__title = css({
      "display": "inline-block",
      "marginTop": "8px",
      "borderRadius": "3px",
      "fontSize": "12px",
      "width": "200px",
      "backgroundColor": this.theme.accentColor2,
    })

    this.css__button_obj = {
      "position": "absolute",
      "width": "12px",
      "height": "12px",
      "borderRadius": "50%",
      "top": "50%",
      "transform": "translateY(-50%)"
    }

    this.css__button = css(this.css__button)

    this.css__button__close = css({
      ...this.css__button_obj,
      "left": "13px",
      "backgroundColor": "#ff5f56"
    })

    this.css__button__minimize = css({
      ...this.css__button_obj,
      "left": "33px",
      "backgroundColor": "#ffbd2e"
    })

    this.css__button__maximize = css({
      ...this.css__button_obj,
      "left": "53px",
      "backgroundColor": "#27c93f"
    })
  }

  render() {
    return (
      <span className={`${this.css__container} ${this.props.className || ''}`}>
        <span className={this.css__border}>
          <span className={this.css__header}>
            <span className={this.css__button__close}></span>
            <span className={this.css__button__minimize}></span>
            <span className={this.css__button__maximize}></span>
            <span className={this.css__title}>{this.title}</span>
          </span>
          <span className={this.css__main}>
            {this.props.children}
          </span>
        </span>

      </span>
    )
  }
}
