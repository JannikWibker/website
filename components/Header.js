import React from 'react'
import Link from 'next/link'
import { style } from 'glamor'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import Class from './Class.js'
import AccountName from './AccountName.js'

import { repository } from '../package.json'


export default class Header extends Class {

  constructor(){
    super()
    this.language = languages[getLanguage()].Header

    this.json__header = {
      left: [{name: this.language.home, url: '/'}, {name: this.language.about, url: '/about'}, {name: this.language.blog, url: '/blog'}, {name: '(src)', url: repository.url.split('+')[1].split('').slice(0,-4).join('')}],
      right: [{name: 'account name goes here', url: () => event.get('account').payload.username ? '/dashboard' : '/login', comp: <AccountName /> }]
    }

    this.theme_event()
    this.update_css()
  }
  // set css using glamor (most of the css is in the header.css file, but the colors cannot be set inside the css file because they are variable and change a lot)
  css() {
    this.style = {
      bg: style({ backgroundColor: this.theme.backgroundColor }),
      header_item: style({' a': { color: this.theme.color }}),
    }
  }

  render() {
    return (
        <div className={this.style.bg + ' header_out __header'}>
          <header className={this.style.bg + ' header'}>
            <div className={'header_icon'}>
              <span style={{cursor: "pointer"}}>
                <svg width="40" height="40" role="button" onClick={event.trigger.bind(this, 'theme', this.theme)}>
                  <circle cx="20" cy="20" r="20" fill={this.theme.color}/>
                </svg>
              </span>
            </div>
            <div className={this.style.bg + ' header_container_nav'}>
              <div className={`header_container header_container_left`}>
                {this.json__header.left.map((item, i) => {
                  return (
                    <span role="button"className={`${this.style.header_item} header_item link`} key={i}>
                      <Link prefetch href={item.url}><a>{item.name}</a></Link>
                    </span>
                  )})}
              </div>
              <div className={`${this.style__header_container_right} header_container header_container_right`}>
                {this.json__header.right.map((item, i) => {
                  return (
                    <span role="button" className={`${this.style.header_item} header_item link`} key={i}>
                      {item.fn ? (
                        <Link href={item.url === '' || !item.url ? null : item.url}>
                          <a onClick={item.fn.bind(this)}>
                          {item.comp ? item.comp : item.name}
                          </a>
                        </Link>
                      ) : (
                        <Link href={typeof(item.url) === 'function' ? item.url() : item.url}>
                          <a>{item.comp ? item.comp : item.name}</a>
                        </Link>
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
