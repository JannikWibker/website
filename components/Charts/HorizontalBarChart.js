import React from 'react'

export default class HorizontalBarChart extends React.Component {
  constructor(props) {
    super(props)
    if(typeof window !== 'undefined') {
      this.HorizontalBar = require('react-chartjs-2').HorizontalBar
    }
  }

  render() {
    if(typeof window === 'undefined') {
      return <canvas height={this.props.height} width={this.props.width}/>
    } else {
      let HorizontalBar = this.HorizontalBar
      return <HorizontalBar data={this.props.data}
                  options={this.props.options}
                  width={this.props.width}
                  height={this.props.height} />
    }
  }
}
