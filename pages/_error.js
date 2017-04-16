import React from 'react'
import { style } from 'glamor'

export default class Error extends React.Component {
  static getInitialProps ({ res, xhr, req }) {
    console.log('failed: ' + req.url)
    const statusCode = res ? res.statusCode : xhr.status
    return { statusCode }
  }

  render () {
    const { statusCode } = this.props
    const title = statusCode === 404 ? 'This page could not be found' : 'Internal Server Error'

    return (
      <div className={styles.error + ' error'}>
      <div className={styles.text + ' text'}>
        <h1 className={styles.h1}>{statusCode}</h1>
        <div className={styles.desc + ' desc'}>
          <h2 className={styles.h2}>{title}.</h2>
          <h4 className={styles.h4}>{JSON.stringify(this.props.url)}</h4>
        </div>
      </div>
      <style>{`
        .error {
          color: #000;
          background-color: #fff;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          position: absolute;
          font-family: -apple-system, SF UI Text, Helvetica Neue, Lucida Grande, sans-serif;
          text-align: center;
          padding-top: 20%;
        }

        .desc {
          display: inline-block;
          text-align: left;
          line-height: 49px;
          height: 49px;
          vertical-align: middle;
        }

        h1 {
          display: inline-block;
          border-right: 1px solid rgba(0, 0, 0, .3);
          margin: 0px;
          margin-right: 20px;
          padding: 10px 23px;
          font-size: 24px;
          font-weight: 500;
          vertical-align: top;
        }

        h2 {
          font-size: 14px;
          font-weight: normal;
          margin: 0px;
          padding: 0px;
        }

        h4 {
          font-size: 10px;
          font-weight: normal;
          margin: 0px;
          padding: 0px;
        }
      `}</style>
    </div>
  )
  }
}

const styles = {
  error: style({
    color: '#000',
    background: '#fff',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    fontFamily: '-apple-system, "SF UI Text", "Helvetica Neue", "Lucida Grande", sans-serif',
    textAlign: 'center',
    paddingTop: '20%'
  }),

  desc: style({
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  }),

  h1: style({
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  }),

  h2: style({
    fontSize: '14px',
    fontWeight: 'normal',
    margin: 0,
    padding: 0
  }),

  h4: style({
    fontSize: '10px',
    fontWeight: 'normal',
    margin: 0,
    padding: 0
  })
}


/*
the default error page with some
additional information included (this.props.url)
*/
