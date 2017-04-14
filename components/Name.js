import React from 'react'
import css from 'next/css'

export default ({ name = 'Jannik' }) => {

  const css__container = css({
    'WebkitFontSmoothing': 'antialiased',
    'textAlign': 'center',
  })

  const css__h2 = css({
    display: 'inline-block',
    fontWeight: '200',
    margin: '0px 12px',
    fontSize: '30px',
    lineHeight: '64px',
    'verticalAlign': 'text-top',
  })

  const css__h1 = css({
    display: 'inline-block',
    fontWeight: '200',
    margin: '0px 0px 0px 0px',
    fontSize: '56px',
    lineHeight: '64px',
    'verticalAlign': 'text-top',
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

  return (
    <div className={css__container}>
      <h2 className={css__h2}>im</h2>
      <h1 className={css__h1}>{name}</h1>
    </div>
  )
}
