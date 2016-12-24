export default (input, find, replace) => {
  find.forEach((item, i) => {
    input = input.replace(new RegExp(item, 'g'), replace[i])
  })
  return input
}

/*
replaces all occurrences of a given array of strings and replaces them with another given array of strings in a given string
# usage:
replace_all('-x-x--x-', ['--'], ['-'])
# this would return:
-x-x-x-
*/
