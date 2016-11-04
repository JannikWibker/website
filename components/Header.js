import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import { merge, hover, insertRule, $ } from 'next/css'


export default class Header extends React.Component {

  constructor(){
    super()

    this.json__header = {
      left: [{name: 'home', url: '/'}, {name: 'about', url: '/about'}, {name: 'blog', url: '/blog'}, {name: 'url', url: '/u'}, {name: 'files', url: '/f'}],
      right: [{name: 'Jannik Wibker', url: ''}]
    }

    this.style__root = css({
      "fontFamily": "Menlo, Monaca, Lucida Console, Liberation Mono, monospace, serif",
      "textRendering": "geometricPricision"
    })

    this.style__header = css({
      "maxWidth": "900px",
      "margin": "auto",
      "padding": "30px 0",
      "position": "relative"
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
      "backgroundColor": "#fff"
    })

    this.style__header_container = css({
      "marginTop": "-2px",
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

    this.style__header_item = merge( css({
        "padding": "10px",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, sans-serif",
        "fontSize": "12px",
        "textTransform": "uppercase",
        "fontWeight": "400"
      }),
      $(' a', {"textDecoration": "none"})
    )

    insertRule('body { font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto, Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", sans-serif }')
    insertRule('body a:hover { color: #333}')


  }

  render() {
    return (
        <div className="header">
          <header className={this.style__header}>
            <div className={this.style__header_icon}>
              <Link href="/">
                <svg>
                  <circle cx="20" cy="20" r="20" fill="black"/>
                </svg>
              </Link>
            </div>
            <div className={this.style__header_container_nav}>
              <div className={this.style__header_container + " " + this.style__header_container_left}>
                {this.json__header.left.map((item, i) => {
                  return (
                    <span className={this.style__header_item} key={i}>
                      <Link href={item.url}>{item.name}</Link>
                    </span>
                  )})}
              </div>
              <div className={this.style__header_container + " " + this.style__header_container_right}>
                {this.json__header.right.map((item, i) => {
                  return (
                    <span className={this.style__header_item} key={i}>
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
