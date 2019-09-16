import React from 'react'
import { CALENDAR } from 'routes'
import { Link } from 'react-router-dom'
import s from './style.module.scss'

const Error = () => (
  <div className={s.wrapper}>
    <div className={s.notfound}>
      <div className={s.notfound404}>
        <h1>404</h1>
        <h2>
            Page not found
        </h2>
      </div>
      <Link to={CALENDAR} className={s.link}>
        Go to Home
      </Link>
    </div>
  </div>
)

export default Error
