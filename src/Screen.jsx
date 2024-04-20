import React, { useState } from 'react'
import './scss/screen.scss'

const Screen = ({ text }) => {
  return (
    <div className='screen-display'>
      {text}
    </div>
  )
}

export default Screen