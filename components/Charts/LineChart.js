import React from 'react'

export default class LineChart extends React.Component {
  constructor(props) {
    super(props)
    if(typeof window !== 'undefined') {
      this.Line = require('react-chartjs-2').Line
    }
  }

  render() {
    if(typeof window === 'undefined') {
      return <canvas height={this.props.height} width={this.props.width}/>
    } else {
      let Line = this.Line
      return <Line data={this.props.data}
                  options={this.props.options}
                  width={this.props.width}
                  height={this.props.height} />
    }
  }
}
