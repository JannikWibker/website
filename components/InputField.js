import React from 'react'
import css from 'next/css'

export default (props) => {

  let style = {
    span: css({
      "display": "inline-block",
      "width": "100px",
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

    /*
    <style jsx>{`
      span.title {
        display: inline-block;
        width: 100px;
        margin-top: 4px;
        font-size: 13px;
        text-align: left;
      }

      input.input {
        background-color: ${props.theme.backgroundColor}!important;
        padding: 0px 10px 5px 10px!important;
        margin-bottom: 0;
        fontSize: 12px;
        width: 150px;
        border: none!important;
        border-radius: 0px!important;
        border-bottom: 2px solid ${props.theme.accentColor}!important;
      }

      input.input:focus {
        border-bottom: 2px solid  + props.theme.color + !important;
      }

      span.error {
        color: red;
        display: inline-block;
        height: 12px;
        width: 128px;
        margin-left: 62px;
        font-size: 10px;
        padding-left: 10px;
        text-align: left;
      }
    `}</style>
    */
  }

  let l_style = props.style || {}
  if(props.small && !props.style.display) {
    l_style.display = 'inline'
  }

  return (
    <div style={l_style}>
      {props.title ? <span className={style.span}>
        {props.title}
      </span> : null}
      <input type={props.type} placeholder={props.placeholder} className={style.input} ref={props.cb}/>
      {props.small ? null : <br />}
      {props.small ? null : <span className={style.error}>{props.error}</span>}
      {props.small ? null : <br />}
    </div>
  )
}
