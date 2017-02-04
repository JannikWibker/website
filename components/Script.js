import React from 'react'
import css from 'next/css'
import HTML from './HTML.js'
import Class from './Class.js'
import event from '../util/event.js'
import { dark_theme, light_theme } from '../config/themes.js'
export default class Script extends Class {
  constructor(props) {
    super(props)

    this.theme_event()
    this.update_css()

    this.reload = this.reload.bind(this)
    this.load = this.load.bind(this)
    this.stop = this.stop.bind(this)
    this.create = this.create.bind(this)

    this.iframe = undefined
    this._mounted = false

    this._swap = undefined

    this.__swap = theme => {
      if(theme.name === dark_theme.name) {
        return light_theme
      } else if(theme.name === light_theme.name) {
        return dark_theme
      }
    }

    event.subscribe('theme', (e) => {
      if(this._swap) {
        this._swap(this.__swap(e.payload))
      }
    })

    this.insertScript = `'use strict';window.parent=undefined;parent=undefined;console.log=(...a)=>{let d=document.querySelector("#c");a.forEach(b=>{d.appendChild(document.createTextNode(typeof b==='object'&&!Array.isArray(b)&&(b===window||!!b.nodeType)?b:JSON.stringify(b)));d.appendChild(document.createElement('hr'))})};console.clear=()=>{document.querySelector("#c").innerHTML=''};window._evt=new Event('_load');window.swap_theme=theme=>{let s=document.body.style;s.backgroundColor = theme.backgroundColor;s.color = theme.color;}`
    this.html = this.props.html
    this.scripts = this.props.scripts || []
  }

  componentWillMount() {
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

  create(exit=false, doc=false) {
    if(this.iframe) {
      let frame = this.iframe.firstChild
      if(!doc) {
        frame = document.createElement('iframe')

      }
      let c = document.createElement('div')
      c.style.width = '96px'
      c.style.height = '100%'
      c.style.overflowY = 'scroll'
      c.style.wordWrap = 'break-word'
      c.style.float = 'right'
      c.style.padding = '0 2px'
      c.id = 'c'

      let script =  document.createElement('script')
      script.text = this.insertScript

      let user_scripts = document.createElement('div')

      frame.innerHTML = 'Your browser does not seem to support iframes'

      if(!exit) {
        this.scripts.forEach((script, i) => {
          let script_el = document.createElement('script')
          if(script.startsWith('url:')) {
            script_el.src = script.substr(4, script.length)
            script_el.setAttribute('onload', 'window.dispatchEvent(_evt)')
          } else {
            script_el.text = script
          }
          user_scripts.appendChild(script_el)
        })
      }


      if(exit) {

        this.iframe.appendChild(frame)
        this.iframe.firstChild.contentDocument.body.appendChild(c)
        this.iframe.firstChild.contentDocument.body.appendChild(script)
        this.iframe.firstChild.style.border = 0
        this.iframe.firstChild.setAttribute('sandbox', 'allow-scripts')

        this.iframe.firstChild.contentWindow.swap_theme(this.__swap(this.theme))
        this._swap = this.iframe.firstChild.contentWindow.swap_theme

        return this.iframe.firstChild
      }

      this.iframe.appendChild(frame)
      this.iframe.firstChild.contentDocument.body.innerHTML = '<style>body,hr{margin:0;border-color:rgba(255,255,255,0.6);}</style>' + this.html
      this.iframe.firstChild.contentDocument.body.appendChild(c)
      this.iframe.firstChild.contentDocument.body.appendChild(script)
      this.iframe.firstChild.contentDocument.body.appendChild(user_scripts)
      this.iframe.firstChild.style.border = 0
      this.iframe.firstChild.setAttribute('sandbox', 'allow-scripts')

      this.iframe.firstChild.contentWindow.swap_theme(this.__swap(this.theme))
      this._swap = this.iframe.firstChild.contentWindow.swap_theme

      return this.iframe.firstChild
    }
  }

  reload() {
    if(this.iframe) {
      this.iframe.firstChild.remove()
      this.create()
    } else {
      console.log('something went wrong')
    }
  }

  load() {
    if(this.iframe) {
      this.create(false, this.iframe)
    } else {
      console.log('something went wrong')
    }
  }

  stop() {
    if(this.iframe) {
      this.iframe.firstChild.remove()
      this.create(true)
    } else {
      console.log('something went wrong')
    }

  }
  css() {
    this.css__div_to_span = css({
      "display": "block"
    })

    this.css__actionbar = css({
      "display": "inline-block"
    })

    this.css__button = css({
      "margin": 12
    })

    this.css__icon = css({
      "marginBottom": -6,
      "width": 24,
      "height": 24
    })
  }

  render() {
    return (
      <span className={this.css__div_to_span}>
        <span className={"iframe_container " + this.css__div_to_span} ref={(input) => {this.iframe = input}}>
          <iframe style={{border: 0}} sandbox="allow-scripts allow-same-origin">
            Your browser does not seem to support iframes
          </iframe>
        </span>
        <span className={this.css__actionbar + ' ' + this.css__div_to_span}>
          <span className={this.css__button} onClick={this.load}>
            <img className={this.css__icon} alt="start" src={`/static/images/start-24px-${this.theme.name}.png`}></img>
            start
          </span>
          <span className={this.css__button} onClick={this.stop}>
            <img className={this.css__icon} alt="stop" src={`/static/images/stop-24px-${this.theme.name}.png`}></img>
            stop
          </span>
          <span className={this.css__button} onClick={this.reload}>
            <img className={this.css__icon} alt="reload" src={`/static/images/reload-24px-${this.theme.name}.png`}></img>
            reload
          </span>
        </span>
      </span>
    )
  }
}
