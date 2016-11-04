import React from 'react'
import css from 'next/css'

export default class Content extends React.Component {

  constructor() {
    super()

    this.style__content = css({
      "color": "#000",
      "fontSize": "14px",
      "textAlign": "center",
      "fontWeight": "100"
    })

  }

  render() {
    return (
      <div className={this.style__content}>
        {this.props.children}
      </div>
    )
  }
}
