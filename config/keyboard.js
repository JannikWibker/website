let keyboard, isActive = false
if(typeof window !== 'undefined') {
  keyboard = require('keyboardjs')
} else {
  let noop = () => {}
  keyboard = {
    bind: noop,
    reset: noop,
    pause: noop,
    resume: noop,
    isActive: false,
    mock: true,
  }
}

let keybinds = {
  "a": (e) => { console.log(e) }
}

let init = () => {
  if(!isActive) {
    Object.keys(keybinds).forEach((item, i) => {
      keyboard.bind(item, keybinds[item])
    })
    isActive = true
  }

}

let reset = () => {
  keyboard.reset()
  isActive = false
}

let update = () => {
  reset()
  init()
}

let add = (cmd, cb) => {
  keybinds[cmd] = cb
  update()
}

let pause = () => {
  keyboard.pause()
  isActive = false
}

let resume = () => {
  keyboard.resume()
  isActive = true
}

export default { keybinds, init, reset, update, add, pause, resume, _keyboard: keyboard, active: () => isActive }
