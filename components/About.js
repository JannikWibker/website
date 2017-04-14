import React from 'react'
import css from 'next/css'
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
  }

  render() {
    return (
      <div>
        <div className={this.css__Name_container}>
          <Name name={'Jannik'} color={this.theme.accentColor3} i_am={this.language.i_am} />
        </div>
        <div className={this.css__Table_container}>
          <Table layout={true} style={{table: {display: 'inline-block'}}} fill={true} data={[
            { name: this.language.name, cells: ['Jannik Wibker'] },
            { name: this.language.email, cells: ['jannikwibker@gmail.com'] },
            { name: this.language.languages, cells: [`${this.general['German']}, ${this.general['English']}`] },
            { name: this.language.programming_languages, cells: ['Javascript, Java, Python, Lua, C, ...'] },
          ]}/>
        </div>
      </div>
    )
  }

}
