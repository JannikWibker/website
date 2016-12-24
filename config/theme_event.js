export default (event) => {
  if(!event.exists('theme')) {
    event.add('theme', (e) => {
    })
  }
}

/*
creating the event 'theme'
note: the event API is not imported but injected
*/
