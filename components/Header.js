import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import { merge, $ } from 'next/css'
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
    this.style__bg = css({
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__header_item = $(' a', {
      "textDecoration": "none",
      "color": this.theme.color
    })

  }

  render() {
    return (
        <div className={this.style__bg + ' header_out'}>
          <header className={this.style__bg + ' header'}>
            <div className={'header_icon'}>
              <Link href="">
                <svg width="40" height="40" role="button" onClick={event.trigger.bind(this, 'theme', this.theme)}>
                  <circle cx="20" cy="20" r="20" fill={this.theme.color}/>
                </svg>
              </Link>
            </div>
            <div className={this.style__bg + ' header_container_nav'}>
              <div className={`header_container header_container_left`}>
                {this.json__header.left.map((item, i) => {
                  return (
                    <span role="button"className={`${this.style__header_item} header_item link`} key={i}>
                      <Link href={item.url}>{item.name}</Link>
                    </span>
                  )})}
              </div>
              <div className={`${this.style__header_container_right} header_container header_container_right`}>
                {this.json__header.right.map((item, i) => {
                  return (
                    <span role="button" className={`${this.style__header_item} header_item link`} key={i}>
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
