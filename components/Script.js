import React from 'react'
import css from 'next/css'
import HTML from './HTML.js'
import Class from './Class.js'
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


    this.insertScript = `'use strict';window.parent=undefined;parent=undefined;console.log=(...a)=>{let d=document.querySelector("#c");a.forEach(b=>d.append(typeof b==='object'&&!Array.isArray(b)&&(b===window||!!b.nodeType)?b:JSON.stringify(b)))}
    let _evt=new Event('_load')`
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
      let c = document.createElement('span')
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

        this.iframe.append(frame)
        this.iframe.firstChild.contentDocument.body.appendChild(c)
        this.iframe.firstChild.contentDocument.body.appendChild(script)
        this.iframe.firstChild.setAttribute('frameborder', '0')
        this.iframe.firstChild.setAttribute('sandbox', 'allow-scripts')
        return this.iframe.firstChild
      }

      this.iframe.append(frame)
      this.iframe.firstChild.contentDocument.body.innerHTML = this.html
      this.iframe.firstChild.contentDocument.body.appendChild(c)
      this.iframe.firstChild.contentDocument.body.appendChild(script)
      this.iframe.firstChild.contentDocument.body.appendChild(user_scripts)
      this.iframe.firstChild.setAttribute('frameborder', '0')
      this.iframe.firstChild.setAttribute('sandbox', 'allow-scripts')
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
      <div>
        <div className="iframe_container" ref={(input) => {this.iframe = input}}>
          <iframe frameBorder="0" sandbox="allow-scripts allow-same-origin">
            Your browser does not seem to support iframes
          </iframe>
        </div>
        <div className={this.css__actionbar}>
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
        </div>
      </div>
    )
  }
}
