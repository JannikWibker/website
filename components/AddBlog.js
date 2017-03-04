import React from 'react'
import css from 'next/css'
import post from '../util/post.js'
import { dark_theme, light_theme } from '../config/themes.js'
import Class from './Class.js'
import InputField from './InputField.js'
import Button from './Button.js'
import event from '../util/event.js'

export default class AddBlog extends Class {
  constructor(props) {
    super(props)

    // this.storage = typeof window === 'undefined' ? { account: undefined} : window.localStorage

    this.title = null
    this.format = null
    this.textarea = null

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
      "width": this.props.flex ? "80vw" : "80%",
      "height": "400px",
      "maxHeight": "50vh",
      "color": this.theme.color + "!important",
      "backgroundColor": this.theme.backgroundColor + "!important",
      "borderRadius": "0!important"
    })
  }

  postBlog() {
    if(this.title.value === '' || this.format.value === '' || this.textarea.value === '' ) {
      console.log('required field left empty')
      return 0;
    }
    if(!event.get('account').payload) {
      console.log('account not found')
      return 0;
    }
    let l_acc = event.get('account').payload
    let l_blog = {
      user: {
        username: l_acc.username,
        password: l_acc.password
      },
      post: {
        name: this.title.value,
        content: this.textarea.value,
        type: this.format.value,
        createdAt: new Date().toJSON(),
        author: l_acc.username
      }
    }
    post(`http://${location.hostname}:3001/blog/add:${l_acc.id}`, l_blog)
  }

  render() {
    return (
      <div>
        <InputField type='text' placeholder='title' small={true} theme={this.theme} cb={(input) => {this.title = input}} style={{margin: '0 8px 0 8px!important'}}/>
        <span className={this.style__select_wrapper}>
        <select defaultValue="markdown" className={this.style__select} ref={(input) => {this.format = input}}>
          <option value="markdown">markdown</option>
          <option value="plain">plaintext</option>
        </select>
        <br />
        <textarea className={this.style__textarea} ref={(input) => {this.textarea = input}}/>
        <br />
        <Button theme={this.theme} click={() => {this.postBlog()}}>post</Button>
        </span>
      </div>
    )
  }
}
