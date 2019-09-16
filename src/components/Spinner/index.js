import React from 'react'
import { ClipLoader } from 'react-spinners'
import PropTypes from 'prop-types'
import s from './style.module.scss'

const Spinner = ({ size, color }) => (
  <div className={s.loader}>
    <ClipLoader className="clip-loader" sizeUnit="px" size={size} color={color} loading />
  </div>
)

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

Spinner.defaultProps = {
  size: 60,
  color: '#c6a676',
}

export default Spinner
