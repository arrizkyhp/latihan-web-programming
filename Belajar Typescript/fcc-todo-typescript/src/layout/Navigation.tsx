import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='navigation'>
        <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "navigation__link active" : "navigation__link"} to={"/"}>Home</NavLink>
        <NavLink className={({isActive}: {isActive: boolean}) => isActive ? "navigation__link active" : "navigation__link"} to={"/todo2"}>DragAndDrop</NavLink>
    </nav>
  )
}

export default Navigation