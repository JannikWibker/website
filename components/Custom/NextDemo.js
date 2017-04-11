import React from 'react'
import css from 'next/css'
import { Keyframes, Frame } from 'react-keyframes'
import HTML from '../HTML.js'
import Class from '../Class.js'

import Browser from '../Browser.js'
import Terminal from '../Terminal.js'
import NextCodeFrames from './NextCodeFrames.js'
import ErrorComponent from './ErrorComponent.js'

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
        <Terminal className={this.css__terminal} width={this.ind_width} height={this.ind_height} title="vim" safe={false}>

          <NextCodeFrames theme={this.props.terminal_theme} />

        </Terminal>
        <Browser className={this.css__browser} width={this.ind_width} height={this.ind_height} title="localhost:3000" theme={this.props.browser_theme}>

          <Keyframes loop={true}>
            <Frame duration={3875}>
              <ErrorComponent id={404} text={'This page could not be found'} />
            </Frame>
            <Frame duration={875}>
            server
            </Frame>
          </Keyframes>

        </Browser>
      </div>
    )
  }
}
