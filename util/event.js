import gen_hash from './gen_hash'

let events = {}
let event = {}

/*
events holds all events

functions will be added to event object
event is exported
*/

event.add = (name, callback) => {
  if(!events[name]) {
    events[name] = {
      callback: [callback],
      enabled: true,
      payload: {},
      id: gen_hash(8)
    }
  } else {
    console.log('event with this name already existing', name)
  }
}

/*
event.add adds an event
an ID is generated for the event
*/

event.subscribe = (name, callback) => {
  if(events[name]) {
    events[name].callback.push(callback)
  } else {
    console.log('no event with that name', name)
  }
}

/*
subscribes to given event (name)
once event is triggered the given callback function is called
*/

event.unsubscribe = (name, callback_id) => {

}

/*
unsubscribe from event (not yet done)
*/

event.trigger = (name, payload = {}) => {
  if(events[name]) {
    events[name].payload = payload
    events[name].callback.forEach((cb, i) => {
      cb(events[name])
    })
  } else {
    console.log('no event with that name', name)
  }
}

/*
trigger event (by name)
once triggered every callback function is called
the whole event object for given event is given to
every callback (includes the given payload)
*/

event.disable = (name) => {
  if(events[name]) {
    events[name].enabled = false
  } else {
    console.log('no event with that name', name)
  }
}

/*
disable given event (not yet done)
*/

event.enable = (name) => {
  if(events[name]) {
    events[name].enabled = true
  } else {
    console.log('no event with that name', name)
  }
}

/*
enable given event (not yet done)
*/

event.delete = (name) => {
  if(events[name]) {
    events[name] = undefined
  } else {
    console.log('no event with that name', name)
  }
}

/*
delete the given event
*/

event.rename = (old_name, new_name) => {

}

/*
rename event (not yet done)
*/

event.exists = (name) => {
  if(typeof events[name] !== 'undefined') {
    return true
  } else {
    return false
  }
}

/*
check if event exists
*/

export default event
