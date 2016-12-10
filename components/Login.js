import React from 'react'
import Link from 'next/link'
import css from 'next/css'
import merge from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'
import Class from './Class.js'

export default class Block extends Class {

  constructor(props) {
    super(props)

    this.update_css = this.update_css.bind(this)
    this.css = this.css.bind(this)
    this.theme_event = this.theme_event.bind(this)
    this.theme_event()
    this.update_css()
  }

  css() {

  }

  check() {
    
  }

  render() {

  }

}
