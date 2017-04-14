export default ({id = 404, text = 'This page could not be found', color = 'rgba(0, 0, 0,.3)'}) => (
  <div style={{
    textAlign: 'center',
    paddingTop: '20%',
    fontFamily: '-apple-system, "SF UI Text", "Helvetica Neue", "Lucida Grande", sans-serif'}}>
    <h1 style={{
      display: 'inline-block',
      marginRight: '20px',
      padding: '10px 23px',
      fontWeight: 500,
      fontSize: '24px',
      borderRight: '1px solid ' + color
    }}>{id}</h1>
    <div style={{
      display: 'inline-block',
      lineHeight: '49px'
    }}>
      <h2 style={{
        letterSpacing: '0.1px',
        fontSize: '14px',
        fontWeight: 'normal'
      }}>{text}</h2>
    </div>
  </div>
)
