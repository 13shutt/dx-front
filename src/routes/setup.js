import React from 'react'
// import { Switch, Route } from 'react-router-dom'
import "./css-reset.scss"
import "./styles.scss"
import "../assets/fonts/fonts.scss"

import Search from './Search/Search'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function Routes() {
  return (
    <div>
      <Header />
      <Search />
      <Footer />
    </div>
  )
}
