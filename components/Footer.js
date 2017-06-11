import React from 'react'
import Link from 'next/link'
import { style } from 'glamor'
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

    this.style = {
      bg: style({ backgroundColor: this.theme.backgroundColor }),
      color: style({ color: this.theme.color }),
      footer_item: style({' a': { "color": this.theme.color, 'textDecoration': 'none' }}),
    }

  }

  render() {
    return (
      <div className={`${this.style.bg} footer_container __footer`}>
        <div className={`${this.style.bg} ${this.style.color} container`}>
          <div className={`${this.style.footer_item} ${this.style.color} footer_item four columns link`}>
            <Link href="https://twitter.com/JannikWibker">
              <a>
                <div>
                  <img alt="Twitter" src={`/static/images/Twitter-64px-${this.theme.name}.png`} />
                  <span>
                    @JannikWibker
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div className={`${this.style.footer_item} ${this.style.color} footer_item four columns link`}>
            <Link href="https://github.com/JannikWibker">
              <a>
                <div>
                  <img alt="GitHub" src={`/static/images/GitHub-Mark-64px-${this.theme.name}.png`} />
                  <span>
                    JannikWibker
                  </span>
                </div>
              </a>
            </Link>
          </div>
          <div className={`${this.style.footer_item} ${this.style.color} footer_item four columns link`}>
            <Link href="mailto:jannikwibker@gmail.com">
              <a>
                <div>
                  <img alt="E-Mail" src={`/static/images/email-24dp-${this.theme.name}.png`} />
                  <span>
                    jannikwibker@gmail.com
                  </span>
                </div>
              </a>
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
