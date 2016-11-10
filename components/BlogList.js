import React from 'react'
import marked from 'marked'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import fetch from 'isomorphic-fetch'


export default class BlogList extends React.Component {

  constructor() {
    super()

    this.get()
    this.posts = {}

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)

    event.subscribe('theme', (e) => {

      // function to swap theme
      let swap = theme => {
        if(theme.name === dark_theme.name) {
          return light_theme
        } else if(theme.name === light_theme.name) {
          return dark_theme
        }
      }

      this.theme = swap(this.theme)
      this.css()
      this.get()
      if(this._mounted) this.forceUpdate()
    })

    this.update_css()

  }
  // componentWillMount
  componentWillMount() {
    this._mounted = true
    this.update_css()
  }
  // componentWillUnmount
  componentWillUnmount() {
    this._mounted = false
  }

  update_css() {
    if(this.props && this.props.theme) {
      this.theme = this.props.theme
    } else {
      this.theme = light_theme
    }
    this.css()
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
      "borderColor": this.theme.color,
      "textAlign": "center",
      "padding": "16px 0"
    })
  }

  get(post) {
    if(typeof window === 'undefined') {
      return {}
    }
    fetch(`http://${location.hostname}:3001/blog/get${post ? ('/' + post) : ''}`)
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        if(post) {
          this.posts[post] = json
        } else {
          this.posts = json
        }
        if(this._mounted && typeof window !== 'undefined') this.forceUpdate()
      })
  }

  render() {
    return (
      <div className={`${this.style__blog_container} container`}>
        <div className={`${this.style__blog_list} ten columns`}>
        {Object.keys(this.posts).map((post, i, a) => {
          let l_post = this.posts[post]
          return (
            <div key={i} className={this.style__blog_post_container} id={l_post.name}>
              <a className={this.style__blog_name} href={`/blog/${l_post.name}`}>
                 {l_post.name}<br />
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
