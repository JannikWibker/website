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

    this.iframe = undefined
    this._mounted = false

    this.insertScript = `
    <span id="c"></span>
    <script type="text/javascript">
      'use strict';
      alert('123');
      var x = (...a) => {
        let d=document.querySelector("#c");
        a.forEach(b=>d.append(b))
      };
      x("123");
      console.log('123')
    </script>
    `
    this.html = this.insertScript + this.props.html
  }

  componentWillMount() {
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }

  reload() {
    if(this.iframe) {
      this.iframe.firstChild.remove()
      let frame = document.createElement('iframe')
      frame.setAttribute('frameborder', '0')
      frame.setAttribute('sandbox', 'allow-scripts allow-same-origin')
      frame.innerHTML = 'Your browser does not seem to support iframes'
      this.iframe.appendChild(frame)
      this.iframe.firstChild.contentWindow.document.body.innerHTML = this.html
    } else {
      console.log('something went wrong')
    }
  }

  load() {
    if(this.iframe) {
      this.iframe.firstChild.contentWindow.document.body.innerHTML = this.html
    } else {
      console.log('something went wrong')
    }
  }

  stop() {
    if(this.iframe) {
      this.iframe.firstChild.remove()
      let frame = document.createElement('iframe')
      frame.setAttribute('frameborder', '0')
      frame.setAttribute('sandbox', 'allow-scripts allow-same-origin')
      frame.innerHTML = 'Your browser does not seem to support iframes'
      this.iframe.appendChild(frame)
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
