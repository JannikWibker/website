import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import { merge, $ } from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import Class from './Class.js'
import AccountName from './AccountName.js'


export default class Header extends Class {

  constructor(){
    super()

    this.json__header = {
      left: [{name: 'home', url: '/'}, {name: 'about', url: '/about'}, {name: 'blog', url: '/blog'}, {name: 'statistic', url: '/statistics'}],
      right: [{name: 'Jannik Wibker', url: () => event.get('account').payload.username ? '/dashboard' : '/login', comp: <AccountName /> }]
    }

    this.language = languages[getLanguage()].Header

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
      "@media(max-width: 400px)": {
        "display": "none"
      }
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
      "transform": "translateY(-50%)",
      "@media(max-width: 400px)": {
        "padding": "0px"
      }
    })

    this.style__header_container_left = css({
      "left": "50px",
      "@media(max-width: 400px)": {
        "left": "0px"
      }
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

    /*
    <style jsx>{`
      div.header_out, div.header_container_nav {
        background-color: ${this.theme.backgroundColor};
      }

      header.header {
        max-width: 900px;
        margin: auto;
        padding: 30px 8px;
        position: relative;
        background-color: ${this.theme.backgroundColor};
      }

      div.header_icon {
        display: block;
        width: 40px;
        height: 40px;
        position: relative;
        top: -10px;
        padding-top: 10px;
      }

      div.header_container {
        margin-top: -6px;
        padding: 10px;
        padding-right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      div.header_container_left {
        left: 50px;
      }

      div.header_container_right {
        right: 0;
      }

      span.header_item {
        padding: 10px;
        font-size: 12px;
        fontWeight: 400;
        text-transform: uppercase;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif
      }

      span.header_item > a {
        text-decoration: none;
        color: ${this.theme.color}
      }

      @media(max-width: 400px) {
        div.header_icon {
          display: none;
        }

        div.header_container {
          padding: 0px;
        }

        div.header_container_left {
          left: 0px;
        }
      }
    `}</style>
    */

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
                      {item.fn ? (
                        <a href={item.url === '' || !item.url ? null : item.url } style={{cursor:"pointer"}} onClick={item.fn.bind(this)}>{item.comp ? item.comp : item.name}</a>
                      ) : (
                        <Link href={typeof item.url === 'function' ? item.url() : item.url}>{item.comp ? item.comp : item.name}</Link>
                      )}
                    </span>
                  )})}
              </div>
            </div>
          </header>
        </div>
    )
  }
}
