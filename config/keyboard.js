let keyboard, isActive = false
if(typeof window !== 'undefined') {
  keyboard = require('keyboardjs')
} else {
  let noop = () => {} // 'noop' stands for no operation
  keyboard = {
    bind: noop,
    reset: noop,
    pause: noop,
    resume: noop,
    isActive: false,
    mock: true,
  }
}

/*
keyboard.js uses the window object or something else.
it can not be used in node.js (for kind of obvious reasons).
since it causes some errors when importing it is not imported with
the ES6 syntax but with a require statemtent since a require
statement does not need to be at the top of the document.
If this code is run in a node.js enviroument (which it is when
the server renders components) keyboard.js is being mocked since
there is no need for keyboard shortcuts in a serverside rendered component
which is later rerendered by the client (at which point keyboard.js
is no longer being mocked)
*/

let keybinds = {}

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
