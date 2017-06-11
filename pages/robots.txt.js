import { Component } from 'react'

export default class extends Component {
  static async getInitialProps({ res }) {
    if(!res) return {}
    res.setHeader('Content-Type', 'text/plain')
    res.end('User-agent: *\nDisallow: /_next/', 'utf8')
    return {}
  }

  render() {
    return null
  }
}
