import React from 'react'
import marked from 'marked'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import fetch from 'isomorphic-fetch'
import Class from './Class.js'
import moment from 'moment'
import replace from '../util/replace_all.js'

export default class Blog extends Class {

  constructor(props) {
    super(props)

    this.get(this.props.id)
    this.post = {}

    this.theme_event()
    this.update_css()


  }

  format(input = '', type = '') {
    if(type === '') {
      return ''
    } else if(type === 'markdown') {
      return marked(replace(input, ['%theme%', '%address%'], [this.theme.altName, location.hostname]))
    } else if(type === 'plain') {
      return input
    } else {
      return ''
    }
  }
  /*
  format method formats the post
  if the type of the post is markdown then the
  content will be rendered to html via marked.
  if the content contains '%theme%' it will be replaced
  with the current theme name (theme.altName).
  this only applies to markdown since this is not
  really useful for plain text. The main usecase
  is switching images based on theme. Different
  strings to replace can technically be added later on.
  */

  css() {

    this.style__blog_container = css({
      "color": this.theme.color
    })

    //this.style__blog = css({})
    /* at the moment 'undefined' is a class
    of one part of the Blog component since
    this is commented out. If this would not
    be commented out it would result in an
    error since no styling is being done and
    that results in an error while creating
    the class.
    This should probably be changed soon.
    */

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

    this.style__blog_author = css({
      "color": this.theme.accentColor,
      "fontSize": "0.8em",
      "textAlign": "left",
      "marginLeft": "-8px"
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
          this.post.date = l_date.format('DD.MM.YYYY')
          this.post.ago = l_date.fromNow()
        }
        if(this._mounted && typeof window !== 'undefined') this.forceUpdate()
      })
  }

  /*
  fetches the post if this code is run on the
  client (because the server can't really fetch
  this data). It then uses moment.js to do some
  formating with the date object in the response
  */

  render() {
    return (
      <div className={`${this.style__blog_container} container`}>
        <div className={`${this.style__blog} ten columns`}>
          <div className={`${this.style__blog_name}`}>{this.post.name}</div>
          <div className={`${this.style__blog_content} ${this.post.type}`} dangerouslySetInnerHTML={{__html: this.format(this.post.content, this.post.type)}} />
          <div className={`${this.style__blog_author}`}>
            <i>
              {this.post.author ? `~ ${this.post.author}` : '~ owner'}
            </i><br />
            <span className={css({ "paddingLeft": "4px" })}>
              {this.post.date} - {this.post.ago}
            </span>
          </div>
        </div>
      </div>
    )
  }

}
