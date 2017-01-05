import fetch from 'isomorphic-fetch'
export default (url, json) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(json),
  headers: {
    'Content-Type': 'application/json'
  }
})
