import React from 'react'

export default class BarChart extends React.Component {
  constructor(props) {
    super(props)
    if(typeof window !== 'undefined') {
      this.Bar = require('react-chartjs-2').Bar
    }
  }

  render() {
    if(typeof window === 'undefined') {
      return <canvas height={this.props.height} width={this.props.width}/>
    } else {
      let Bar = this.Bar
      return <Bar data={this.props.data}
                  options={this.props.options}
                  width={this.props.width}
                  height={this.props.height} />
    }
  }
}
