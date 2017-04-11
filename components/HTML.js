import React from 'react'
export default props => props.StringToHTML
  ? <div dangerouslySetInnerHTML={{__html: props.children
          .replace(/\n/g, '<br />')
          .replace(/\^/g, '&nbsp;')
          .replace(/≤1/g, '<span style="color: #2aa198">')
          .replace(/≤2/g, '<span style="color: #b58900">')
          .replace(/≤3/g, '<span style="color: #dc322f">')
          .replace(/≤4/g, '<span style="color: #d33682">')
          .replace(/≤5/g, '<span style="color: #cb4b16">')
          .replace(/≥/g, '</span>')
         }} />
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
*/
