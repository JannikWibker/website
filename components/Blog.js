import React from 'react'
import marked from 'marked'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import fetch from 'isomorphic-fetch'
import Class from './Class.js'
import moment from 'moment'

export default class Blog extends Class {

  constructor(props) {
    super(props)

    this.get(this.props.id)
    this.post = {}

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)
    this.theme_event = this.theme_event.bind(this)

    this.theme_event()
    this.update_css()


  }

  format(input = '', type = '') {
    if(type === '') {
      return ''
    } else if(type === 'markdown') {
      return marked(input)
    } else if(type === 'plain') {
      return input
    } else {
      return ''
    }
  }

  css() {

    this.style__blog_container = css({
      "color": this.theme.color
    })

    //this.style__blog = css({})

    this.style__blog_name = css({
      "textAlign": "left",
      "fontSize": "1.2em",
      "fontWeight": "500",
      "paddingBottom": "8px",
      ":before": {
        "content": '"> "',
        "position": "relative",
        "marginLeft": "-8px"
      }
    })

    this.style__blog_content = css({
      "textAlign": "left",
      "paddingLeft": "8px",
    })

    this.style__blog_date = css({
      "color": this.theme.accentColor,
      "fontSize": "0.8em",
      "textAlign": "left"
    })
  }

  get(post) {
    if(typeof window === 'undefined') {
      return {}
    }
    fetch(`http://${location.hostname}:3001/blog/get/${post}`)
      .then((data) => data.json())
      .then((json) => {
        this.post = json
        if(this.post.theme && this.post.theme !== 'light_theme' && this.theme.name === 'light_theme') {
          event.trigger('theme', this.theme)
        }
        if(this.post.createdAt) {
          let l_date = moment(this.post.createdAt)
          this.post.date = l_date.format('DD.MM.YYYY hh:mm')
          this.post.ago = l_date.fromNow()
        }
        if(this._mounted && typeof window !== 'undefined') this.forceUpdate()
      })

  }

  render() {
    return (
      <div className={`${this.style__blog_container} container`}>
        <div className={`${this.style__blog} ten columns`}>
          <div className={`${this.style__blog_name}`}>{this.post.name}</div>
          <div className={`${this.style__blog_content} ${this.post.type}`} dangerouslySetInnerHTML={{__html: this.format(this.post.content, this.post.type)}} />
          <div className={`${this.style__blog_date}`}>{this.post.date} - {this.post.ago}</div>
        </div>
      </div>
    )
  }

}
