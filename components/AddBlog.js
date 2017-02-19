import React from 'react'
import css from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import Class from './Class.js'
import InputField from './InputField.js'

export default class AddBlog extends Class {
  constructor(props) {
    super(props)

    // this.storage = typeof window === 'undefined' ? { account: undefined} : window.localStorage

    this.theme_event()
    this.update_css()
  }

  css() {
    this.style__select = css({
      "color": this.theme.color,
      "backgroundColor": this.theme.backgroundColor,
      "border": "none",

    })
  }

  render() {
    return (
      <div>
        <InputField type='text' placeholder='title' small={true} theme={this.theme} cb={(input) => {console.log(input)}}/>
        <select defaultValue="markdown" className={this.style__select}>
          <option value="markdown">markdown</option>
          <option value="plain">plaintext</option>
        </select>
      </div>
    )
  }
}
