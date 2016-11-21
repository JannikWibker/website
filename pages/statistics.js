import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import { dark_theme, light_theme } from '../config/themes.js'
import theme_event from '../config/theme_event.js'

export default class StatisticsPage extends React.Component {

  constructor(props){
    super(props)
    theme_event()
    if(typeof window !== 'undefined') {
      let Chart = require('chart.js')
      let charts = []
      let data = {
        datasets: [{
          data: [14, 13],
          backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56"],
          label: 'do you program?'
        }],
        labels: [ 'yes', 'no']
      }
      charts[0] = new Chart("chart_1", {
        type: 'pie',
        data: data,
        options: { responsive: false }
      })
    }
  }

  componentWillMount() {
    theme_event()
  }

  render() {
    return (
      <div className="root">
        <Globals />
        <Header theme={dark_theme} />
        <Content theme={dark_theme}>
          <Block theme={dark_theme} >
            <canvas id="chart_1" width="400" height="400"></canvas>
          </Block>
        </Content>
        <Footer theme={dark_theme} />
      </div>
    )
  }
}
