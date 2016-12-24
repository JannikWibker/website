export default (input, find, replace) => input.replace(new RegExp(find, 'g'), replace)

/*
replaces all occurrences of a given string and replaces them with another given string in a given string
# usage:
replace_all('-x-x--x-', '--', '-')
# this would return:
-x-x-x-
*/
