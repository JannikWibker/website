import React from 'react'
import css from 'next/css'
import HTML from '../HTML.js'
import Class from '../Class.js'

import Browser from '../Browser.js'
import Terminal from '../Terminal.js'
import NextCodeFrames from './NextCodeFrames.js'
import NextBrowserFrames from './NextBrowserFrames.js'

export default class NextDemo extends Class {
  constructor(props) {
    super(props)

    this.total_width = 900
    this.ind_width = (this.total_width / 2) - 10
    this.ind_height = 300

    this.theme_event()
    this.update_css()
  }

  css() {
    this._css__container = {}
    this._css__container[`@media(min-width: ${this.total_width}px)`] = {
      "textAlign": "left",
      "position": "relative",
      "width": this.ind_width,
      "height": this.ind_height,
    }
    this.css__container = css(this._css__container)

    this._css__terminal = {}
    this._css__terminal[`@media(min-width: ${this.total_width}px)`] = {
      "transform": `translateX(${(this.ind_width / 2) + 10}px)`,
      "position": "absolute",
      "display": "block",
      "margin": "10px"
    }
    this.css__terminal = css(this._css__terminal)

    this._css__browser = {}
    this._css__browser[`@media(min-width: ${this.total_width}px)`] = {
      "transform": `translateX(-${(this.ind_width / 2) + 10}px)`,
      "position": "absolute",
      "display": "block",
      "margin": "10px"
    }
    this.css__browser = css(this._css__browser)
  }

  render() {
    return (
      <div className={this.css__container}>
        <Terminal className={this.css__terminal} width={this.ind_width} height={this.ind_height} title="vim" safe={false} theme={this.props.terminal_theme}>
          <NextCodeFrames loop={this.props.loop} />
        </Terminal>

        <Browser className={this.css__browser} width={this.ind_width} height={this.ind_height} title="localhost:3000" theme={this.props.browser_theme}>
          <NextBrowserFrames loop={this.props.loop} color={this.theme.name === 'dark_theme'
                                                              ? 'rgba(255, 255, 255, 0.7)'
                                                              : 'rgba(0, 0, 0, 0.3)'}/>
        </Browser>
      </div>
    )
  }
}
