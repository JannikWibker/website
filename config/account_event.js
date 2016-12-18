import event from '../util/event.js'

export default () => {
  if(!event.exists('theme')) {
    event.add('account', (e) => {
    })
  }
}
