import React from 'react'
import { style as css } from 'glamor'
import List from './List.js'

export default ({data = [], layout = true, fill = false, style = {}}) => {

  const css__name = {
    fontWeight: 'bold'
  }

  let range_from_data = data => [...Array(data.sort((x,y)=>x.cells.length-y.cells.length).reverse()[0].cells.length).keys()]

  let cell = (c, j, k) => (
    <td className={css(style.cell) || ''} id={j + '.' + (k+1)} key={j + '.' + (k+1)}>
      {c}
    </td>
  )

  let name = (c, j) => (
    <td className={css(style.name || css__name || {})} id={j + '.0'} key={j + '.0'}>
      {c}
    </td>
  )

  let rows = data => (
    <tbody>
      {data.map((d, j) => (
        <tr className={css(style.tr) || ''} key={j}>
          {d.name !== '' ? name(d.name, j) : ''}
          {fill
            ? range_from_data([...data]).map(k =>
                (d.list
                ? cell(d.cells[k] ? <List items={d.cells[k]} /> : '', j, k)
                : cell(d.cells[k] || '', j, k)))
            : d.cells.map((c, k) =>
                (d.list
                ? cell(<List items={d.cells[k]} />, j, k)
                : cell(d.cells[k], j, k)))
          }
        </tr>
      ))}
    </tbody>)

  let columns = (data) => (
    <tbody>
      <tr className={css(style.tr) || ''} key={0}>
        {data.map((c, i) => name(c.name, i))}
      </tr>
      {range_from_data([...data]).map(i => (
        <tr className={css(style.tr) || ''} key={i+1}>
          {data.map((c, j) => cell(c.cells[i], i+1, j) )}
        </tr>
      ))}
    </tbody>
  )

  return (
    <table className={css(style.table) + ' __table'}>
        {layout ? rows(data) : columns(data)}
    </table>
  )
}
