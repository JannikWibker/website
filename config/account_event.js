export default (event) => {
  if(!event.exists('account')) {
    event.add('account', (e) => {
    })
  }
}
