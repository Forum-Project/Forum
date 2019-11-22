//library imports
import React from 'react'
import { Route } from 'react-router-dom'

//component imports
import Navbar from '../components/Navbar/Navbar'

const NavRoute = ({ exact, path, component: Component }) => {
  return (
    <Route exact={exact} path={path} render={props => (
      <>
        <Navbar path={path}/>
        <Component {...props} />
      </>
    )} />
  )
}

export default NavRoute