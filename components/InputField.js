import React from 'react'
import css from 'next/css'

export default (props) => {

  let style = {
    span: css({
      "display": "inline-block",
      "width": "84px",
      "marginTop": "4px",
      "fontSize": "13px",
      "textAlign": "left"
    }),
    input: css({
      "backgroundColor": props.theme.backgroundColor + "!important",
      "padding": "0px 10px 5px 10px!important",
      "marginBottom": "0",
      "fontSize": "12px",
      "width": "150px",
      "border": "none!important",
      "borderRadius": "0px!important",
      "borderBottom": "2px solid " + props.theme.accentColor + "!important",
      ":focus": {
        "borderBottom": "2px solid " + props.theme.color + "!important"
      }
    }),
    error: css({
      "color": "red",
      "display": "inline-block",
      "height": "12px",
      "width": "128px",
      "marginLeft": "62px",
      "fontSize": "10px",
      "paddingLeft": "10px",
      "textAlign": "left"
    })
  }

  return (
    <div>
      <span className={style.span}>
        {props.title}
      </span>
      <input type={props.type} placeholder={props.placeholder} className={style.input} ref={props.cb}/><br />
      <span className={style.error}>{props.error}</span><br />
    </div>
  )
}
