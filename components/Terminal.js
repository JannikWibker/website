import React from 'react'
import css from 'next/css'
import merge from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import HTML from './HTML.js'
import event from '../util/event.js'
import Class from './Class.js'
import marked from 'marked'

export default class Terminal extends Class {
  constructor(props) {
    super(props)

    console.log(this.props)

    this.theme_event()
    this.update_css()

  }

  css() {
    this.css__container = css({
      "boxSizing": "border-box",
      "width": this.props.width || 450,
      "height": this.props.height || 260,
      "backgroundColor": this.theme.backgroundColor,
      "color": this.theme.color
    })

    this.css__border = css({
      "boxSizing": "inherit",
      "position": "relative",
      "border": `1px solid ${this.theme.accentColor}`,
      "borderRadius": "5px",
      "width": this.props.width || 450,
      "height": this.props.height || 260,
    })

    this.css__header = css({
      "boxSizing": "inherit",
      "position": "absolute",
      "width": this.props.width || 450,
      "height": "36px",
      "textAlign": "center"
    })

    this.css__main = css({
      "boxSizing": "inherit",
      "display": "block",
      "width": `calc(${this.props.width || 450} - 32px)`,
      "height": (this.props.height || 260) - 36 + 'px',
      "margin": "36px 16px 0 16px",
      "textAlign": "left",
      "fontSize": "12px"
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

    this.css__title = css({
      "position": "absolute",
      "top": "12px",
      "textAlign": "center",
      "color": this.theme.color,
      "fontSize": "12px"
    })

  }

  render() {
    return (
      <span className={this.css__container}>
        <div className={this.css__border}>
          <div className={this.css__header}>
            <span className={this.css__button__close}></span>
            <span className={this.css__button__minimize}></span>
            <span className={this.css__button__maximize}></span>
            {this.props.safe ?
              <span className={this.css__title}>{this.props.title}</span> :
              <span className={this.css__title} dangerouslySetInnerHTML={{__html: marked(this.props.title)}}/> }
          </div>
          <span className={this.css__main}>
            {this.props.children}
          </span>
        </div>
      </span>
    )
  }
}
