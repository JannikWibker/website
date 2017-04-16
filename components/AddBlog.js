import React from 'react'
import { style as css } from 'glamor'
import post from '../util/post.js'
import { dark_theme, light_theme } from '../config/themes.js'
import { languages, getLanguage } from '../config/language.js'
import Class from './Class.js'
import InputField from './InputField.js'
import Button from './Button.js'
import event from '../util/event.js'

export default class AddBlog extends Class {
  constructor(props) {
    super(props)

    this.title = null
    this.format = null
    this.textarea = null

    this.language = languages[getLanguage()].AddBlog

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

    /*
      <style jsx>{`
        .select {
          color;
          background-color;
          padding: 0px 10px 5px 10px!important;
          margin: 0px; // why???
          margin: 0px 8px 0px 8px!important;
          font-size: 12px;
          width: 150px;
          border: none!important;
          border-radius: 0px!important;
          --webkit-appearance: none;
          border-bottom: 2px solid ${this.theme.accentColor}!important;
        }

        .textarea {
          margin-top: 16px;
          height: 400px;
          width: ${this.props.felx ? '80vw : '80%};
          max-height: 50vh;
          border-radius: 0!important;
          background-color: ${this.theme.backgroundColor}!important;
          color: ${this.theme.color}!important;
        }
      `}</style>
    */
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
      <div style={this.props.style} className="__addblog">
        <InputField type='text' placeholder={this.language.title} small={true} theme={this.theme} cb={(input) => {this.title = input}} style={{margin: '0 8px 0 8px!important'}}/>
        <span className={this.style__select_wrapper}>
        <select defaultValue="markdown" className={this.style__select} ref={(input) => {this.format = input}}>
          <option value="markdown">{this.language.markdown}</option>
          <option value="plain">{this.language.plain}</option>
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
