import gen_hash from './gen_hash'

let events = {}
let event = {}

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

event.subscribe = (name, callback) => {
  if(events[name]) {
    events[name].callback.push(callback)
  } else {
    console.log('no event with that name', name)
  }
}

event.unsubscribe = (name, callback_id) => {

}

event.trigger = (name, payload) => {
  if(events[name]) {
    events[name].payload = payload
    events[name].callback.forEach((cb, i) => {
      cb(events[name])
    })
    events[name].payload = {}
  } else {
    console.log('no event with that name', name)

  }
}

event.disable = (name) => {
  if(events[name]) {
    events[name].enabled = false
  } else {
    console.log('no event with that name', name)
  }
}

event.enable = (name) => {
  if(events[name]) {
    events[name].enabled = true
  } else {
    console.log('no event with that name', name)
  }
}

event.delete = (name) => {
  if(events[name]) {
    events[name] = undefined
  } else {
    console.log('no event with that name', name)
  }
}

event.rename = (old_name, new_name) => {

}

event.exists = (name) => {
  if(events[name]) {
    return true
  } else {
    return false
  }
}

export default event
