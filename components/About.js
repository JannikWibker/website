import React from 'react'
import { style as css } from 'glamor'
import Class from './Class.js'
import { languages, getLanguage } from '../config/language.js'
import Name from './Name.js'
import Table from './Table.js'

export default class About extends Class {
  constructor(props) {
    super()

    this.hue = ((new Date().getHours() * 60 + new Date().getMinutes()) * 0.25) | 0

    this.language = languages[getLanguage()].About
    this.general = languages[getLanguage()].general

    this.theme_event()
    this.update_css()

  }

  css() {
    this.css__Name_container = css({
      width: '100vw',
      height: '30vh',
      lineHeight: '15vh',

    })

    this.css__Table_container = css({
      boxSizing: 'border-box',
      width: '100vw',
      padding: '20px',
    })

    /*
    <style jsx>{`
      .Name_container {
        width: 100vw;
        height: 30vh;
        line-height: 15vh;
      }
      .Table_container {
        box-sizing: border-box;
        width: 100vw;
        padding: 20px;
      }
    `}</style>
    */
  }

  render() {
    return (
      <div className="__about">
        <div className={this.css__Name_container + ' Name_container'}>
          <Name name={'Jannik'} color={this.theme.accentColor3} i_am={this.language.i_am} />
        </div>
        <div className={this.css__Table_container + ' Table_container'}>
          <Table layout={true} style={{
              table: {display: 'inline-block'},
              name: {fontWeight: 'bold', verticalAlign: 'top'}
            }} fill={true} data={[
            { name: this.language.name, cells: ['Jannik Wibker'] },
            { name: this.language.email, cells: ['jannikwibker@gmail.com'] },
            { name: this.language.age, cells: ['17'] },
            { name: this.language.location, cells: [this.general.North_Rhine_Westphalia] },
            { name: this.language.languages, cells: [`${this.general['German']}, ${this.general['English']}`] },
            { name: this.language.programming_languages, cells: ['Javascript, Java, Python, Lua, C, ...'] },
            { name: this.language.programming_experiences, list: true, cells: [[
              'client side frameworks (react / ember / angular1 / ...)',
              'server side frameworks  / library (express / hapi.js / micro / ...)',
              'isomorphic frameworks (next.js / server- and client-side React / meteor)',
              'compiler design (/interpreter)',
              'game development',
              'web design',
              'webapps in general',
              'REST APIs and databases (levelDB, mongoDB)',
              'build tools, transpilers / compilers / generators / CLIs in general',
              'linux (servers)',
              'raspberry PIs (server / service hosting)',
              'version control (git)',
              'operating systems (mac OS X, Windows, Linux)',
              'networking',
            ]] }
          ]}/>
        </div>
      </div>
    )
  }

}
