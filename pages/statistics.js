import React from 'react'
import { style as css, rehydrate } from 'glamor'
import marked from 'marked'
import Globals from '../components/Globals.js'
import Header from '../components/Header.js'
import Content from '../components/Content.js'
import Block from '../components/Block.js'
import Footer from '../components/Footer.js'
import PieChart from '../components/Charts/PieChart.js'
import BarChart from '../components/Charts/BarChart.js'
import LineChart from '../components/Charts/LineChart.js'
import HorizontalBarChart from '../components/Charts/HorizontalBarChart.js'
import { dark_theme, light_theme, purple_theme } from '../config/themes.js'
import { languages, getLanguage, setLanguage, getLanguageFromCode } from '../config/language.js'
import event_loader from '../util/event_loader.js'

const isClient = () => typeof(window) !== 'undefined' && window

if (isClient()) {
  rehydrate(window.__NEXT_DATA__.ids)
}

export default class StatisticsPage extends React.Component {
  static getInitialProps(obj) {
    return {
      lang: obj.req
        ? (obj.req.headers['accept-language'] ? obj.req.headers['accept-language'].match(/[a-zA-z\-]{2,10}/g)[0] : 'eng')
        : window.localStorage.lang || window.navigator.languages[0] || window.navigator.language,
      pathname: obj.pathname,
      query: obj.query,
    }
  }

  constructor(props){
    super(props)
    this.lang_pref = isClient() ? window.localStorage.lang : ''
    this.lang_code = setLanguage(getLanguageFromCode(this.lang_pref || getLanguageFromCode(this.props.lang)))

    this.language = languages[this.lang_code].StatisticsPage
    this.get()

    event_loader(['theme', 'account'])
    this.charts = {
      charts: [],
      data: []
    }
    this.introduction = `The results of our survey about programming`
    this.credits = `_Tina_, _Elina_, _Laura_, _Jannik_, _Felix_ and _Tim_`

    this.file = '/static/statistics.ods'
    this.theme = light_theme

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

    this.style__download = css({
      "textDecoration": "none",
      "color": this.theme.color,
      ":hover": {
        "backgroundColor": "rgba(248,28,229,0.75)",
        "color": this.theme.invertColor
      }
    })
  }

  // componentWillMount
  componentWillMount() {
    this._mounted = true
    event_loader(['theme', 'account'])
  }

  // componentWillUnmount
  componentWillUnmount() {
    this._mounted = false
  }

  createCharts() {
    this.charts.charts[0] = {
      headline: 'Do you program?',
      chart: <PieChart data={this.charts.data[0]} options={{ responsive: true }} width={400} height={400} />
    }
    this.charts.charts[1] = {
      headline: 'How many programming languages are you fairly confident in?',
      chart: <BarChart data={this.charts.data[1]} options={{
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 7,
              stepSize: 1
            }
          }]
        }
      }} width={400} height={400} />
    }
    this.charts.charts[2] = {
      headline: 'The average is **~2.4** languages'
    }
    this.charts.charts[3] = {
      headline: 'What are the most popular languages?',
      chart: <HorizontalBarChart data={this.charts.data[3]} options={{
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              min: 0,
              max: 13,
              stepSize: 1
            }
          }]
        }
      }} width={400} height={400} />
    }
    this.charts.charts[4] = {
      headline: 'How good does one rate himself on a scale from 0-10 in his languages?',
      chart: <LineChart data={this.charts.data[4]} options={{
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 8,
              stepSize: 1
            }
          }]
        }
      }} width={400} height={400} />
    }
    this.charts.charts[5] = {
      headline: 'What editors/IDEs are predominately being used?',
      chart: <HorizontalBarChart data={this.charts.data[5]} options={{
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              min: 0,
              max: 7,
              stepSize: 1
            }
          }]
        }
      }} width={400} height={400} />
    }
    this.charts.charts[6] = {
      headline: 'Which OS is being used predominately?' ,
      chart: <PieChart data={this.charts.data[6]} options={{ responsive: true }} width={400} height={400} />
    }
    this.charts.charts[7] = {
      headline: 'Definitly **Windows**.'
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
        <Globals url={this.props.url.pathname} />
        {/* <Header theme={this.theme} /> */}
        <Content theme={this.theme}>
          <Block theme={this.theme} >
            <div className={this.style__root}>
              <div className={css({"width": "100%"})}>
                <span className={this.style__introduction} dangerouslySetInnerHTML={{__html: marked(this.introduction)}} />
              </div>
              <div className={this.style__chart}>
              {this.charts.charts.map((item, i) => {
                return (
                  <div className={css({"marginBottom": "36px"})} key={i}>
                  <span className={this.style__headline}>
                    <span dangerouslySetInnerHTML={{__html: marked(item.headline)}} />
                  </span>
                  {item.chart ? item.chart : ''}
                  </div>
                )
              })}
              </div>
              <div className={css({"width": "100%"})}>
                <span className={this.style__introduction} dangerouslySetInnerHTML={{__html: marked(this.credits)}} />
              </div>
                <a className={this.style__download} href={this.file} download>Download Raw Data</a>
            </div>
          </Block>
        </Content>
        {/* <Footer theme={light_theme} /> */}
      </div>
    )
  }
}
