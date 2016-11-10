import React from 'react'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import fetch from 'isomorphic-fetch'

export default class BlogList extends React.Component {

  constructor() {
    super()

    this.get()
    this.posts = []

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
      "fontSize": "1.2em"
    })

    this.style__blog_preview = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
      "fontSize": "1em",
      "paddingLeft": "8px"
    })

    this.style__blog_post_container = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
      "paddingBottom": "24px"
    })
  }

  get(post) {
    fetch(`http://localhost:3001/blog/get${post ? ('/' + post) : ''}`)
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        if(post) {
          this.posts[post] = json
        } else {
          this.posts = json
        }
        if(this._mounted) this.forceUpdate()
      })
  }

  render() {
    console.log(this.posts)
    return (
      <div className={`${this.style__blog_container} container`}>
        <div className={`${this.style__blog_list} four columns`}>
        {Object.keys(this.posts).map((post, i) => {
          let l_post = this.posts[post]
          return (
            <div key={i} className={this.style__blog_post_container}>
              <span className={this.style__blog_name}>{l_post.name}<br /></span>
              <span className={this.style__blog_preview}>{l_post.content}<br /></span>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}
