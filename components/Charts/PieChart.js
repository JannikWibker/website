import React from 'react'

export default class PieChart extends React.Component {
  constructor(props) {
    super(props)
    if(typeof window !== 'undefined') {
      this.Pie = require('react-chartjs-2').Pie
    }
  }

  render() {
    if(typeof window === 'undefined') {
      return <canvas height={this.props.height} width={this.props.width}/>
    } else {
      let Pie = this.Pie
      return <Pie data={this.props.data}
                  options={this.props.options}
                  width={this.props.width}
                  height={this.props.height} />
    }
  }
}
