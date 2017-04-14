import React from 'react'
import css from 'next/css'
import Class from './Class.js'
import { languages, getLanguage } from '../config/language.js'
import Name from './Name.js'

export default class About extends Class {
  constructor(props) {
    super()

    this.language = languages[getLanguage()].About

    this.theme_event()
    this.update_css()

  }

  css() {

  }

  render() {
    return (
      <div>
        <Name name={'Jannik'} />
      </div>
    )
  }

}
