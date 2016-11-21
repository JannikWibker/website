import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import { merge, hover, insertRule, $ } from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import Class from './Class.js'


export default class Header extends Class {

  constructor(){
    super()

    this.json__header = {
      left: [{name: 'home', url: '/'}, {name: 'about', url: '/about'}, {name: 'blog', url: '/blog'}, {name: 'url', url: '/u'}, {name: 'files', url: '/f'}, {name: 'statistic', url: '/statistics'}],
      right: [{name: 'Jannik Wibker', url: ''}]
    }

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)
    this.theme_event = this.theme_event.bind(this)

    this.theme_event()
    this.update_css()
  }
  // css (set all the css using glamor (aliased to css because next.js) with the current theme)
  css() {
    this.style__root = css({
      "fontFamily": "Menlo, Monaca, Lucida Console, Liberation Mono, monospace, serif",
      "textRendering": "geometricPricision"
    })

    this.style__header = css({
      "maxWidth": "900px",
      "margin": "auto",
      "padding": "30px 8px",
      "position": "relative",
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__header_out = css({
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__header_icon = css({
      "display": "block",
      "width": "40px",
      "height": "40px",
      "position": "relative",
      "top": "-10px",
      "paddingTop": "10px",
    })

    this.style__header_container_nav = css({
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__header_container = css({
      "marginTop": "-6px",
      "padding": "10px",
      "paddingRight": "0",
      "position": "absolute",
      "top": "50%",
      "transform": "translateY(-50%)"
    })

    this.style__header_container_left = css({
      "left": "50px"
    })

    this.style__header_container_right = css({
      "right": "0"
    })

    this.style__header_item = merge(css({
        "padding": "10px",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif",
        "fontSize": "12px",
        "textTransform": "uppercase",
        "fontWeight": "400"
      }),
      $(' a', {"textDecoration": "none", color: this.theme.color})
    )

  }

  render() {
    return (
        <div className={this.style__header_out}>
          <header className={this.style__header}>
            <div className={this.style__header_icon}>
              <Link href="">
                <svg width="40" height="40" onClick={event.trigger.bind(this, 'theme', this.theme)}>
                  <circle cx="20" cy="20" r="20" fill={this.theme.color}/>
                </svg>
              </Link>
            </div>
            <div className={this.style__header_container_nav}>
              <div className={`${this.style__header_container} ${this.style__header_container_left}`}>
                {this.json__header.left.map((item, i) => {
                  return (
                    <span className={`${this.style__header_item} link`} key={i}>
                      <Link href={item.url}>{item.name}</Link>
                    </span>
                  )})}
              </div>
              <div className={`${this.style__header_container} ${this.style__header_container_right}`}>
                {this.json__header.right.map((item, i) => {
                  return (
                    <span className={`${this.style__header_item} link`} key={i}>
                      <Link href={item.url}>{item.name}</Link>
                    </span>
                  )})}
              </div>
            </div>
          </header>
        </div>
    )
  }
}
