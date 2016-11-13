import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import { merge, $ } from 'next/css'
import { dark_theme, light_theme } from '../config/themes'
import event from '../util/event.js'
import Class from './Class.js'

export default class Footer extends Class {
  constructor() {
    super()

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)
    this.theme_event = this.theme_event.bind(this)

    this.theme_event()
    this.update_css()
  }

  css() {
    this.style__footer_container = css({
      "width": "100%",
      "backgroundColor": this.theme.backgroundColor,
      "padding": "20px 0"
    })

    this.style__footer = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__footer_item = merge(css({
      "color": this.theme.color,
      "textAlign": "center",
      "width": "100%",
      "fontFamily": "Menlo, DejaVu Sans Mono, Lucida Console, monospace, sans-serif",
      "fontWeight": "100",
      "fontSize": "12px",
      "lineHeight": "32px"
    }),
    $(' a', {"textDecoration": "none", color: this.theme.color}),
    $(' img', {"width": "16px", "height": "16px", "margin": "-4px 4px"}))

  }

  render() {
    return (
      <div className={`${this.style__footer_container}`}>
        <div className={`${this.style__footer} container`}>
          <div className={`${this.style__footer_item} four columns link`}>
            <Link href="https://twitter.com/JannikWibker">
              <div>
                <img src={`/static/images/Twitter-64px-${this.theme.name}.png`} />
                <span>
                  @JannikWibker
                </span>
              </div>
            </Link>
          </div>
          <div className={`${this.style__footer_item} four columns link`}>
            <Link href="https://github.com/JannikWibker">
            <div>
              <img src={`/static/images/GitHub-Mark-64px-${this.theme.name}.png`} />
              <span>
                JannikWibker
              </span>
            </div>
            </Link>
          </div>
          <div className={`${this.style__footer_item} four columns link`}>
            <Link href="mailto:jannikwibker@gmail.com">
              <div>
                <img src={`/static/images/email-24dp-${this.theme.name}.png`} />
                <span>
                  jannikwibker@gmail.com
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
