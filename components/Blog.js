import React from 'react'
import MTRC from 'markdown-to-react-components'
import { renderCustomComponents } from 'react-in-markdown';
import css from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import event from '../util/event.js'
import date from '../util/date.js'
import fetch from 'isomorphic-fetch'
import Class from './Class.js'
import Terminal from './Terminal.js'
import Script from './Script.js'
import Lambda from './Custom/Some_Language.js'
import replace_all from '../util/replace_all.js'

export default class Blog extends Class {

  constructor(props) {
    super(props)

    this.get(this.props.id)
    this.post = {}

    this.language = languages[getLanguage()].Blog

    this.theme_event()
    this.update_css()

    MTRC.configure({
      a: props => renderCustomComponents(props, {
        terminal: (props) => (
          <Terminal {...props} safe={true} />
        ),
        script: (props) => (
          <Script {...props} />
        ),
        lambda: (props) => (
          <Lambda {...props} />
        ),
      })
    })


  }

  format(input = '', type = '') {
    if(type === '') {
      return ''
    } else if(type === 'markdown') {
      return MTRC(replace_all(input, ['%theme%', '%address%'], [this.theme.altName, location.hostname])).tree
    } else if(type === 'plain') {
      return input
    } else {
      return ''
    }
  }
  /*
  format method formats the post
  if the type of the post is markdown then the
  content will be rendered to html via MTRC (uses
  marked under the hood). if the content contains
  '%theme%' it will be replaced with the current
  theme name (theme.altName). This only applies to
  markdown since this is not really useful for plain
  text. The main usecase is switching images based
  on theme. Different strings to replace can
  technically be added later on.
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

    this.style__blog_date_author = css({
      "color": this.theme.accentColor,
      "fontSize": "0.9em",
      "textAlign": "left",
      "paddingBottom": "8px"
    })

    /*
    Date and Author share use the same css
    class because their CSS is the same
    */

    this.style__blog_name = css({
      "textAlign": "left",
      "fontSize": "1.4em",
      "fontWeight": "500",
    })

    this.style__blog_content = css({
      "textAlign": "left",
      "paddingTop": "16px"
    })

    /*
    <style jsx>{`
    .content {
      text-align: left;
      padding-top: 16px;
    }

    .name {
      text-align: left;
      font-size: 1.4em;
      font-weight: 500;
    }

    .author, date {
      padding-bottom: 8px;
      text-align: left;
      font-size: 0.9em;
      color: ${this.theme.accentColor};
    }

    .container {
      color: ${this.theme.color}
    }

    `}</style>
    */
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
          this.post.date = replace_all(new Date(this.post.createdAt).toLocaleDateString(), ['/'], ['.'])
          this.post.ago = date(this.post.createdAt)
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
        <div className={`${this.style__blog} ten columns offset-by-two`}>
          <div className={`${this.style__blog_date_author}`}>{this.post.date} ({this.post.ago})</div>
          <div className={`${this.style__blog_name} link_big`}>{this.post.name}</div>
          <div className={`${this.style__blog_date_author}`}>
            {`~ ${this.post.author ? this.post.author : this.language.owner}` }
          </div>
          <div className={`${this.style__blog_content} ${this.post.type}`}>{this.format(this.post.content, this.post.type)}</div>
        </div>
      </div>
    )
  }

}
