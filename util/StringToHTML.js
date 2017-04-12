export default str => str
  .replace(/\n/g, '<br />')
  .replace(/\^/g, '&nbsp;')
  .replace(/≤1/g, '<span style="color: #2aa198">') // variables
  .replace(/≤2/g, '<span style="color: #b58900">') // strings
  .replace(/≤3/g, '<span style="color: #dc322f">') // object keys
  .replace(/≤4/g, '<span style="color: #d33682">') // methods / functions
  .replace(/≤5/g, '<span style="color: #cb4b16">') // jsx html tags
  .replace(/≥/g, '</span>')
