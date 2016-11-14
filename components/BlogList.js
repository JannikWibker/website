import React from 'react'
import marked from 'marked'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import fetch from 'isomorphic-fetch'
import Class from './Class.js'
import moment from 'moment'


export default class BlogList extends Class {

  constructor(props) {
    super(props)
    this.get()
    this.posts = []

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)
    this.theme_event = this.theme_event.bind(this)

    this.theme_event()
    this.update_css()

  }

  css() {
    this.style__blog_list = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__blog_container = css({
      "textAlign": "initial"
    })

    this.style__blog_name = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
      "fontSize": "1.2em",
      "textDecoration": "none",
      "fontWeight": "400",
      ":hover": {
        "textDecoration": "underline",
        "color": this.theme.color
      },
      ":before": {
        "content": '"> "',
        "position": "relative",
        "marginLeft": "-8px"
      }
    })

    this.style__blog_preview = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
      "fontFamily": "Menlo, DejaVu Sans Mono, Lucida Console, monospace, sans-serif",
      "fontSize": "0.8em",
      "paddingLeft": "8px",
      "maxHeight": "48px",
      "overflow": "hidden",
      "width": "100%"
    })

    this.style__blog_post_container = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor
    })

    this.style__blog_seperator = css({
      "color": this.theme.accentColor,
      "textAlign": "center",
      "paddingTop": "19px", // '*' is not vertically centered; this should adjust this
      "paddingBottom": "13px"
    })

    this.style__blog_date = css({
      "position": "relative",
      "color": this.theme.accentColor,
      "fontSize": "0.8em",
      "float": "right",
    })
  }

  get() {
    if(typeof window === 'undefined') {
      return {}
    }
    fetch(`http://${location.hostname}:3001/blog/get`)
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        this.posts = Object.keys(json).map(key => json[key])
        this.posts.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt)
        })
        if(this._mounted && typeof window !== 'undefined') this.forceUpdate()
      })
  }

  render() {
    return (
      <div className={`${this.style__blog_container} container`}>
        <div className={`${this.style__blog_list} ten columns`}>
        {this.posts.map((post, i, a) => {
          let l_post = post //this.posts[post]
          return (
            <div key={i} className={this.style__blog_post_container} id={l_post.name}>
              <a className={this.style__blog_name} href={`/blog?id=${l_post.id}`}>
                 {l_post.name}
                 <span className={this.style__blog_date}>{l_post.createdAt ? moment(l_post.createdAt).format('DD/MM/YYYY') : ''}</span>
                 <br />
              </a>
              <div className={this.style__blog_preview}>
                {l_post.content.substring(0, 100)}<br />
              </div>
              {(i + 1 < a.length) ? <div className={this.style__blog_seperator}>***</div> : null}
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}
