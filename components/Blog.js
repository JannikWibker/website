import React from 'react'
import marked from 'marked'
import css from 'next/css'
import Link from 'next/link'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import fetch from 'isomorphic-fetch'

export default class Blog extends React.Component {

  constructor() {
    super()

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

  }

  get() {
    if(typeof window === 'undefined') {
      return {}
    }
    fetch(`http://${location.hostname}:3001/blog/get/${this.props.id}`)
  }

  render() {

  }

}
