import React from 'react'

export default class Error extends React.Component {
  static getInitialProps ({ res, xhr }) {
    const statusCode = res ? res.statusCode : xhr.status
    return { statusCode }
  }

  render () {
    return (
      <p>An error { this.props.statusCode } occurred</p>
    )
  }
}
