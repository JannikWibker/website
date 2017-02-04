import React from 'react'
import { dark_theme, light_theme } from '../config/themes.js'
import event from '../util/event.js'

export default class Class extends React.Component {

  constructor(props) {
    super(props)
  }

  theme_event() {
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
      if(this._mounted) this.forceUpdate()
    })
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
}
