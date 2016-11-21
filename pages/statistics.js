import React from 'react'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import css from 'next/css'
import marked from 'marked'
import { dark_theme, light_theme } from '../config/themes.js'
import theme_event from '../config/theme_event.js'
import PieChart from '../components/Charts/PieChart.js'
import BarChart from '../components/Charts/BarChart.js'

export default class StatisticsPage extends React.Component {

  constructor(props){
    super(props)
    this.get()
    theme_event()
    this.charts = {
      charts: [],
      data: []
    }
    this.introduction = `these are a few questions I have asked my classmates
    this was made because of a school project in the subject *english*`

    this.style__root = css({
      "margin": "36px 0"
    })

    this.style__headline = css({
      "fontSize": '2em',
      "paddingBottom": "24px"
    })
    this.style__introduction = css({
      "display": "inline-block",
      "maxWidth": "550px",
      "minWidth": "200px",
      "width": "100%"
    })

    this.style__chart = css({
      "display": "inline-block",
      "maxWidth": "400px",
      "minWidth": "200px",
      "width": "100%"
    })
  }

  // componentWillMount
  componentWillMount() {
    this._mounted = true
    theme_event()
  }

  // componentWillUnmount
  componentWillUnmount() {
    this._mounted = false
  }

  createCharts() {
    this.charts.charts[0] = {
      chart: <PieChart data={this.charts.data[0]} options={{responsive: true }} width={400} height={400} />,
      headline: 'Do you program?'
    }
    this.charts.charts[1] = {
      chart: <BarChart data={this.charts.data[1]} options={{responsive: true }} width={400} height={400} />,
      headline: 'How many programming languages are you fairly confident in?'
    }
  }

  get() {
    if(typeof window === 'undefined') {
      return {}
    }
    fetch(`http://${location.hostname}:3001/charts/`)
      .then((data) => {
        return data.json()
      })
      .then((json) => {
        this.charts.data = json
        this.createCharts()
        if(this._mounted && typeof window !== 'undefined') this.forceUpdate()
      })
  }



  render() {
    return (
      <div className="root">
        <Globals />
        {/* <Header theme={light_theme} /> */}
        <Content theme={light_theme}>
          <Block theme={light_theme} >
            <div className={this.style__root}>
              <div className={css({"width": "100%"})}>
                <span className={this.style__introduction} dangerouslySetInnerHTML={{__html: marked(this.introduction)}} />
              </div>
              <div className={this.style__chart}>
              {this.charts.charts.map((item, i) => {
                return (
                  <div className={css({"marginBottom": "36px"})} key={i}>
                  <span className={this.style__headline}>
                    {item.headline}
                  </span>
                  {item.chart}
                  </div>
                )
              })}
              </div>
            </div>
          </Block>
        </Content>
        {/* <Footer theme={light_theme} /> */}
      </div>
    )
  }
}
