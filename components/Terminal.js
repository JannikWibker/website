import React from 'react'
import css from 'next/css'
import HTML from './HTML.js'
import event from '../util/event.js'
import { languages, getLanguage } from '../config/language.js'
import Class from './Class.js'
import marked from 'marked'

export default class Terminal extends Class {
  constructor(props) {
    super(props)

    this.language = languages[getLanguage()].Terminal

    this.theme_event()
    this.update_css()

  }

  css() {
    this.css__container = css({
      "boxSizing": "border-box",
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
      "width": this.props.width || '450px',
      "maxWidth": "90vw",
      "height": "36px",
      "textAlign": "center"
    })

    this.css__main = css({
      "boxSizing": "inherit",
      "display": "block",
      "width": `calc(${this.props.width || '450px'} - 32px)`,
      "height": (this.props.height || 260) - 36 + 'px',
      "margin": "36px 12px 0 12px",
      "textAlign": "left",
      "fontSize": "11px",
      "fontFamily": "Menlo",
      "color": this.theme.color
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

    /*
    <style jsx>{`
      span.container {
        box-sizing: "border-box";
        width: ${this.props.width || 450};
        height: ${this.props.height || 260};
        background-color: ${this.theme.backgroundColor};
        color: ${this.theme.color};
      }

      span.border {
        box-sizing: inherit;
        display: block;
        position: relative;
        border: 1px solid ${this.theme.accentColor};
        border-radius: 5px;
        width: ${this.props.width || 450};
        height: ${this.props.height || 260};
        height: ${this.props.height || 260};
      }

      span.header {
        box-sizing: inherit;
        display: block;
        position: absolute;
        width: ${this.props.width || 450};
        height: 36px;
        text-align: center;
      }

      span.btn {
        position: absolute;
        width: 12px;
        height: "12px;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
      }

      span.btn_close {
        left: 13px;
        background-color: #ff5f56;
      }

      span.btn_min {
        left: 33px;
        background-color": #ffbd2e;
      }

      span.btn_max {
        left: 53px;
        background-color: #27c93f;
      }

      span.title {
        position: absolute;
        top: 12px;
        text-align: center;
        color: ${this.theme.color};
        font-size: 12px;
      }

      span.main {
        box-sizing: inherit;
        display: block;
        width: calc(${this.props.width || 450} - 32px);
        height: ${(this.props.height || 260) - 36}px;
        margin: 36px 16px 0 16px;
        text-align: left;
        font-size: 12px;
        display: block;
      }
    `}
    */

  }

  render() {
    return (
      <span className={`${this.css__container} ${this.props.className || ''}`}>
        <span className={this.css__border}>
          <span className={this.css__header}>
            <span className={this.css__button__close}></span>
            <span className={this.css__button__minimize}></span>
            <span className={this.css__button__maximize}></span>
            {this.props.safe ?
              <span className={this.css__title}>{this.props.title}</span> :
              <span className={this.css__title} dangerouslySetInnerHTML={{__html: marked.inlineLexer(this.props.title, [])}}/> }
          </span>
          <span className={this.css__main}>
            {this.props.children}
          </span>
        </span>
      </span>
    )
  }
}
