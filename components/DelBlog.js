import React from 'react'
import { style as css } from 'glamor'
import post from '../util/post.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import Class from './Class.js'
import Button from './Button.js'
import event from '../util/event.js'

export default class DelBlog extends Class {
  constructor(props) {
    super(props)

    this.posts = []

    this.language = languages[getLanguage()].DelBlog

    this.get()
  }

  css() {

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
      <div style={this.props.style} className="__delblog">
        <ul style={{textAlign: 'left'}}>
        {this.posts.map((x, i) => (
          <li key={i}>
            <span>{x.name}</span>
            <span> X</span>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
