import React from 'react'
import "../components/styles.css"

const Header = (props) => {
    const {title} =props
  return (
    <div className="header">
        <p >{title}</p>
    </div>
  )
}

export default Header