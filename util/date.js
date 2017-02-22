export default (time, n=0) => [
    [0, 'second', 'seconds'],
    [60, 'minute', 'minutes'],
    [3600, 'hour', 'hours'],
    [86400, 'day', 'days'],
    [604800, 'week', 'weeks'],
    [2629746, 'month', 'months'], // 30.436875 days per month
    [31556925, 'year', 'years'], // 365.2421897 days per year (86400 * 365.241897 rounded a bit (by ~190ms down))
    [3155692500, 'century', 'centuries'],
    [31556925000, 'millennium', 'millennia']
  ].map((item, i, ar, m=Math.pow(10,n), s=(+new Date() - (time ? time.constructor === Date ? time.getTime() : +new Date(time || +new Date()) : +new Date())) / 1000) =>
    (s<0?-s:s > item[0]) ?
      [
        (((s<0?-s:s / item[0] * m + 0.5)|0)/m),
        (((s<0?-s:s / item[0] * m + 0.5)|0)/m) === 1 ? item[1] : item[2],
        s === s<0?-s:s ? 'ago' : 'from now'
      ].join(' ') : ((s<0?-s:s === 0) ? 'just now' : ''))
    .filter(x => x).reverse()[0]

/*

this is the worst code I've written in a while and it was hella fun

quick explanation what the code does:

the big array contains seconds and the associated unit
(and the plural version of the unit (e.g. minute and minutes))
then mapping over the array, after that the returning array is
filtered and all falsy values are sorted out. After that the
array is reversed and the first value is returned. This has
the same effect as setting a variable outside of the scope of
map and setting that variable each time to something different
(and only setting it if the value that would normally be returned
is not falsy). In that case forEach should be used instead of map.

Inside the map function (or rather in the arguments of that function
because ES6) the given time is first converted to a valid time
string (the time can be a DateString, a number, a DateObject, or
null; incase of null the current time is used) and then subtracted
from the current Date and after that devided by 1000. This is done to
get the difference in seconds rather than milliseconds.

lets refer to the absolute value of that difference as  SA. If SA is bigger
than the first index of the array then an array is created with 3 values and
then joined together by spaces. If not and SA is equal to 0 then 'just now'
is returned since both Dates are equal (atleast down to the second). Else ''
is returned but this should not ever happen because an absolute value can't be
smaller than 0.

Inside the array that is later joined together by spaces the number and unit are
calculated. Additionally 'ago' is added if SA matches the difference (the date
is in the past); If SA is unequal to the difference 'from now' is added (the date
is in the future).

The 2 values that are calculated are being calculated as follows:

  (((s<0?-s:s / item[0] * m + 0.5)|0)/m)

  this could be rewritten as:

  Math.round(SA / item[0] * m) / m

  m controls the decimal places (its 10^(the 2nd argument aka n))


  (((s<0?-s:s / item[0] * m + 0.5)|0)/m) === 1 ? item[1] : item[2]

  Math.round(SA / item[0] * m) / m === 1 ? item[1] : item[2]

  it just checks if the first value is a 1 or another number and
  returns the singular or plural form of the unit respectivly

*/

/*
minified version:
*/

/*
let x = ((t,n=0,y=+new Date())=>
  [[0,'second'],[60,'minute'],
   [3600,'hour'],[86400,'day'],
   [604800,'week'],[2629746,'month'],
   [31556925,'year'],[3155692500,'century','centuries'],
   [31556925000,'millennium','millennia']]
.map((x,i,_,m=Math.pow(10,n),s=(y-(t?t.constructor===Date?t.getTime():+new Date(t||y):y))/1000)=>
  (s<0?-s:s>x[0])?
    [(((s<0?-s:s/x[0]*m+0.5)|0)/m)
    ,(((s<0?-s:s/x[0]*m+0.5)|0)/m)===1?x[1]:x[2]||x[1]+'s'
    ,s===s<0?-s:s?'ago':'from now']
  .join(' '):((s<0?-s:s===0)?'just now':''))
  .filter(x=>x).reverse()[0])

let y = (t,n=0,y=+new Date())=>[[0,'second'],[60,'minute'],[3600,'hour'],[86400,'day'],[604800,'week'],[2629746,'month'],[31556925,'year'],[3155692500,'century','centuries'],[31556925000,'millennium','millennia']].map((x,i,_,m=Math.pow(10,n),s=(y-(t?t.constructor===Date?t.getTime():+new Date(t||y):y))/1000)=>(s<0?-s:s>x[0])?[(((s<0?-s:s/x[0]*m+0.5)|0)/m),(((s<0?-s:s/x[0]*m+0.5)|0)/m)===1?x[1]:x[2]||x[1]+'s',s===s<0?-s:s?'ago':'from now'].join(' '):((s<0?-s:s===0)?'just now':'')).filter(x=>x).reverse()[0]
*/
