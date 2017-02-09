import React from 'react'
import Script from './Script.js'
export default props => (
  <Script html={`
  <textarea id="input"></textarea>
  <div id="btn">
    <button id="run">run</button><br>
    <button id="clear">clear</button>
  </div>
  <style>
    #input{
      height:100%;
      width: 156px;
    }
    #btn{
      float: right;
    }
    #run,#clear{
      width: 42px;
    }</style>`} scripts={[
  'url:./static/js/browser.min.js',
  `window.addEventListener('_load', () => {
    document.getElementById('run').addEventListener('click', () => {
      console.log(Lambda(document.getElementById('input').value))
    })
    document.getElementById('clear').addEventListener('click', () => {
      console.clear()
    })
  })`
]} /> )
