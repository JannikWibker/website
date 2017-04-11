import React from 'react'
export default props => props.StringToHTML
  ? <div dangerouslySetInnerHTML={{__html: props.children.replace(/\n/g, '<br />').replace(/\^/g, '&nbsp;') }} />
  : <div dangerouslySetInnerHTML={{__html: props.children }} />
/*
component which turns children to InnerHTML
(this mainly used because 'dangerouslySetInnerHTML'
is really long and annoying to type. This is also
used in some cases because it fixes some errors with
components that do some manipulation with their children
(innerHTML does not really work with that))
*/
