import React from 'react'

export default class DoughnutChart extends React.Component {
  constructor(props) {
    super(props)
    if(typeof window !== 'undefined') {
      this.Doughnut = require('react-chartjs-2').Doughnut
    }
  }

  render() {
    if(typeof window === 'undefined') {
      return <canvas height={this.props.height} width={this.props.width}/>
    } else {
      let Doughnut = this.Doughnut
      return <Doughnut data={this.props.data}
                  options={this.props.options}
                  width={this.props.width}
                  height={this.props.height} />
    }
  }
}
