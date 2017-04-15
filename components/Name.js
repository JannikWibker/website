import React from 'react'
import css from 'next/css'

export default ({ name = 'Jannik', color = '#454545', i_am = 'im' }) => {

  const css__container = css({
    WebkitFontSmoothing: 'antialiased',
    textAlign: 'center',
    fontFamily: "SFNS Display",
    color: color,
  })

  const css__h2 = css({
    display: 'inline-block',
    fontWeight: '200',
    margin: '0px 12px 0px 8px',
    fontSize: '30px',
    lineHeight: '64px',
    verticalAlign: 'text-top',
    wordSpacing: '6px'
  })

  const css__h1 = css({
    display: 'inline-block',
    fontWeight: '200',
    margin: '0px 0px 0px 0px',
    fontSize: '56px',
    lineHeight: '64px',
    verticalAlign: 'text-top',
    '&::before': {
      content: '"„"',
      top: '10px',
      height: '20px',
      fontWeight: '300',
      margin: '0px 8px',
      position: 'relative',
      fontSize: '28px',
      lineHeight: '0',
    },
    '&::after': {
      content: '"„"',
      top: '-54px',
      height: '20px',
      fontWeight: '300',
      margin: '0px 8px',
      position: 'relative',
      fontSize: '28px',
      lineHeight: '0',
    }
  })
    /*
    style jsx>{`
      .container {
        --webkit-font-smoothing: antialiased;
        text-align: center;
        font-family: 'SFNS Display';
        color: ${color};
      }

      h2 {
        display: inline-block;
        font-weight: 200;
        margin: 0px 12px 0px 8px;
        font-size: 30px;
        line-height: 64px;
        vertical-align: text-top;
        word-spacing: 6px;
      }

      h1 {
        display: inline-block;
        font-weight: 200;
        margin: 0px 0px 0px 0px;
        font-size: 56px;
        line-height: 64px;
        vertical-align: text-top;
      }

      h1::after, h1::before {
        content: "„"
        height: 20px;
        font-weight: 300;
        margin: 0px 8px;
        position: relative;
        font-size: 28px;
        line-height: 0px
      }

      h1::after: {
        top: -54px;
      }

      h1::before {
        top: 10px;
      }

    `}</style>
    */

  return (
    <div className={css__container}>
      <h2 className={css__h2}>{i_am}</h2>
      <h1 className={css__h1}>{name}</h1>
    </div>
  )
}
