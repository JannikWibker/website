import React from 'react'
import css from 'next/css'
import $ from 'next/css'
import { dark_theme, light_theme } from '../config/themes.js'
import Class from './Class.js'
import InputField from './InputField.js'
import Button from './Button.js'

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
      "padding": "0px 10px 5px 10px!important",
      "margin": "0",
      "margin": "0 8px 0 8px!important",
      "fontSize": "12px",
      "width": "150px",
      "border": "none!important",
      "borderRadius": "0px!important",
      "WebkitAppearance": "none",
      "MozAppearance": "none",
      "borderBottom": "2px solid " + this.theme.accentColor + "!important",
    })

    this.style__textarea = css({
      "marginTop": "16px",
      "width": "80%",
      "height": "400px",
      "color": this.theme.color + "!important",
      "backgroundColor": this.theme.backgroundColor + "!important",
      "borderRadius": "0!important"
    })
  }

  render() {
    return (
      <div>
        <InputField type='text' placeholder='title' small={true} theme={this.theme} cb={(input) => {console.log(input)}} style={{margin: '0 8px 0 8px!important'}}/>
        <span className={this.style__select_wrapper}>
        <select defaultValue="markdown" className={this.style__select}>
          <option value="markdown">markdown</option>
          <option value="plain">plaintext</option>
        </select>
        <br />
        <textarea className={this.style__textarea} />
        <br />
        <Button theme={this.theme} click={() => {console.log(123)}}>post</Button>
        </span>
      </div>
    )
  }
}
