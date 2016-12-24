import theme_event from '../config/theme_event'
import account_event from '../config/account_event'
import event from './event.js'

let all_events = {theme_event, account_event}

export default (events) => {
  events.forEach(l_e => {
    all_events[l_e + '_event'](event)
  })
}

/*
loader for events (/util/event.js)
# usage:
# loading events 'theme_event' and 'account_event'
# (the '_event' must be omitted as it is added by event_loader)
event_loader(['theme', 'account'])
*/
