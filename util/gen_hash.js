let gen_hash = (length = 16) => {
  let n = new Date().valueOf().toString(), result = '', p = 0, chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(let i = length; i > 0; --i) {
    result += ((i & 1) && n.charAt(p) ? n.charAt(p) : chars[Math.floor(Math.random() * chars.length)])
    if(i & 1) p++
  }
  return result
}

export default gen_hash
