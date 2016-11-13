import React from 'react'
import marked from 'marked'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import fetch from 'isomorphic-fetch'
import Class from './Class.js'

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

  css() {

  }

  get(post) {
    if(typeof window === 'undefined') {
      return {}
    }
    fetch(`http://${location.hostname}:3001/blog/get/${post}`)
      .then((data) => data.json())
      .then((json) => {
        this.post = json
        console.log(this.post)
        if(this._mounted && typeof window !== 'undefined') this.forceUpdate()
      })

  }

  render() {
    return (
      <div>
      {this.post.id}
      {this.post.name}
      </div>
    )
  }

}
