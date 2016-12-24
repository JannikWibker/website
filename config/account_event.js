export default (event) => {
  if(!event.exists('account')) {
    event.add('account', (e) => {
    })
  }
}

/*
creating the event 'account'
note: the event API is not imported but injected
*/
