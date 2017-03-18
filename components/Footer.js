import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import { merge, $ } from 'next/css'
import { dark_theme, light_theme } from '../config/themes'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class Footer extends Class {
  constructor() {
    super()

    this.language = languages[getLanguage()].Footer

    this.theme_event()
    this.update_css()
  }

  css() {

    this.style__bg = css({
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__color = css({
      "color": this.theme.color
    })

    this.style__footer_item = $(' a', {
      "textDecoration": "none",
      "color": this.theme.color
    })

  }

  render() {
    return (
      <div className={`${this.style__bg} footer_container`}>
        <div className={`${this.style__bg} ${this.style__color} container`}>
          <div className={`${this.style__footer_item} ${this.style__color} footer_item four columns link`}>
            <Link href="https://twitter.com/JannikWibker">
              <div>
                <img alt="Twitter" src={`/static/images/Twitter-64px-${this.theme.name}.png`} />
                <span>
                  @JannikWibker
                </span>
              </div>
            </Link>
          </div>
          <div className={`${this.style__footer_item} ${this.style__color} footer_item four columns link`}>
            <Link href="https://github.com/JannikWibker">
            <div>
              <img alt="GitHub" src={`/static/images/GitHub-Mark-64px-${this.theme.name}.png`} />
              <span>
                JannikWibker
              </span>
            </div>
            </Link>
          </div>
          <div className={`${this.style__footer_item} ${this.style__color} footer_item four columns link`}>
            <Link href="mailto:jannikwibker@gmail.com">
              <div>
                <img alt="E-Mail" src={`/static/images/email-24dp-${this.theme.name}.png`} />
                <span>
                  jannikwibker@gmail.com
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
    /*
    the footer on (almost) every page
    includes a Twitter and GitHub handle and an Email address
    swaps the icons when changing the theme (changes the URL)
    */
  }
}
