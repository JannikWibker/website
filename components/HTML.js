import React from 'react'

import StringToHTML from '../util/StringToHTML.js'

export default props => props.StringToHTML
  ? <div dangerouslySetInnerHTML={{__html: StringToHTML(props.children) }} />
  : <div dangerouslySetInnerHTML={{__html: props.children }} />
/*
component which turns children to InnerHTML
(this mainly used because 'dangerouslySetInnerHTML'
is really long and annoying to type. This is also
used in some cases because it fixes some errors with
components that do some manipulation with their children
(innerHTML does not really work with that))

bool StringToHTML (true | false):
if true then:
every newline is replaced by a <br />,
every ^ (caret) is replaced by a &nbsp; (because replacing whitespace directly is annoying),
every ≤[1-5] is replaced by <span style="color: #[colors 1-5]">,
every ≥ is replaced by </span>
(this is done via the StringToHTML function from 'util/StringToHTML.js')
*/
