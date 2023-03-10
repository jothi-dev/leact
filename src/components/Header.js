import React from 'react'
import Button from './Button'
import propTypes from 'prop-types'


const Header = ({ title, text, onShowAddTaskForm }) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color='green' text={text} onClick={onShowAddTaskForm}/>
    </header>
  )
}


Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string
}
export default Header