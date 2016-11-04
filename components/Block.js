import React from 'react'
import css from 'next/css'
import merge from 'next/css'

export default class Block extends React.Component {
  constructor() {
    super()

    this.style__block = css({
      "display": "flex",
      "alignItems": "center",
      "min-height": "calc(100vh - 150px)",
      "justifyContent": "center",
      "position": "relative",
    })

    if(this.props && this.props.css) {
      this.style__block = merge(this.style__block, this.props.css)
    }
  }

  render() {
    return (
      <div className={this.style__block}>
        {this.props.children}
      </div>
    )
  }
}
