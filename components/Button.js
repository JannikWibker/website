import react from 'React'
import css from 'next/css'

export default (props) => {
  console.log(props)
  let style = {
    span:  css({
      "textDecoration": "none",
      "color": props.theme.color,
      "backgroundColor": props.theme.backgroundColor,
      "cursor": "pointer",
      ":hover": {
        "backgroundColor": props.theme.linkColor,
        "color": "#fff"
      }
    })
  }

  return (
    <span onClick={props.click} className={style.span}>{props.children}</span>
  )
}
