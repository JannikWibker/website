import React from 'react'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import remove_md from '../util/remove_markdown.js'
import fetch from 'isomorphic-fetch'
import Class from './Class.js'
import replace_all from '../util/replace_all.js'


export default class BlogList extends Class {

  constructor(props) {
    super(props)
    this.get()
    this.posts = []

    this.language = languages[getLanguage()].BlogList

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
      "fontSize": "1.7em",
      "textDecoration": "none",
      "fontWeight": "400",
      ":hover": {
        "textDecoration": "underline",
        "color": this.theme.color
      }
    })

    this.style__blog_preview = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
      "fontFamily": "Menlo, DejaVu Sans Mono, Lucida Console, monospace, sans-serif",
      "fontSize": "0.8em",
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
      "display": "inline-block",
      "color": this.theme.accentColor,
      "fontSize": "0.8em",
      "textAlign": "right",
      "height": "114px",
      "marginTop": "11px",
      "@media(max-width: 400px)": {
        "height": "12px",
        "textAlign": "left",
        "marginTop": "0px"
      }
    })

    this.style__blog_author = css({
      "color": this.theme.accentColor
    })

    /*
    style jsx>{`
      .blog_list {
        color: ${this.theme.color};
        background-color: ${this.theme.backgroundColor};
      }

      .blog_container {
        text-align: initial;
      }

      .blog_name {
        color: ${this.theme.color};
        background-color: ${this.theme.backgroundColor};
        font-size: 1.7em;
        text-decoration: none;
        font-weight: 400;
      }

      .blog_name:hover {
        text-decoration: underline;
        color: this.theme.color
      }

      .blog_preview {
        color: ${this.theme.color};
        background-color: ${this.theme.backgroundColor};
        font-family: Menlo, DejaVu Sans Mono, Lucida Console, monospace, sans-serif;
        font-size: 0.8em;
        max-height: 48px;
        overflow: hidden;
        width: 100%;
      }

      .blog_post_container {
        color: ${this.theme.color};
        background-color: ${this.theme.backgroundColor};
      }

      .blog_seperator {
        color: ${this.theme.accentColor};
        text-align: center;
        padding-top: 19px;
        padding-bottom: 13px;
      }

      .blog_date {
        display: inline-block;
        color: ${this.theme.accentColor};
        font-size: 0.8em;
        text-align: right;
        height: 114px;
        margin-top: 11px;
      }

      .blog_author {
        color: this.theme.accentColor;
      }

      @media(max-width: 400px) {
        .blog_date {
          height: 12px;
          text-align: left;
          margin-top: 0px;
        }
      }
    `}</style>
    */
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
  /*
  get method:
  if this code is run on the server then {} is returned
  if this code runs in the browser all blog posts get
  fetched and sorted by date. Then forceUpdate() is called
  */

  render() {
    return (
      <div className={`${this.style__blog_container} container`}>
        <div className={`${this.style__blog_list}`}>
        {this.posts.map((post, i, a) => {
          let l_post = post
          return (
            <div key={i} className={this.style__blog_post_container} id={l_post.name}>
              <span className={`${this.style__blog_date} two columns`}>{l_post.createdAt ? replace_all(new Date(l_post.createdAt).toLocaleDateString(), ['/'], ['.']) : ''}</span>

              <div className={'ten columns ' + css({"float": "right"})}>
              <a className={`${this.style__blog_name}`} href={`/blog?id=${l_post.id}`}>
                {l_post.name}
              </a>
              <div className={this.style__blog_preview}>
                {remove_md(l_post.content).substring(0, 100)}<br /> {/* limiting the preview to 100 characters */}
                {l_post.author ? <i className={this.style__blog_author}>~ {l_post.author}</i> : ''}
              </div>
              {(i + 1 < a.length) ? <div className={this.style__blog_seperator}>***</div> : null} {/* seperator after every post expect the last (thereby inbetween every post) */}
              </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}
