import event from '../util/event.js'

export default () => {
  if(!event.exists('theme')) {
    event.add('theme', (e) => {
      console.log('theme changed...', e.payload)
    })
  }
}
