export default (input, find, replace) => {
  console.log(input, find, replace)
  return input.replace(new RegExp(find, 'g'), replace)
}
