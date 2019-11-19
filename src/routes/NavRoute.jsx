//library imports
import React from 'react'
import { Route } from 'react-router-dom'

//component imports
import Navbar from '../components/Navbar/Navbar'

const NavRoute = ({ exact, path, component: Component }) => {
  return (
    <Route exact={exact} path={path} render={props => (
      <>
        <Navbar />
        <Component {...props} />
      </>
    )} />
  )
}

export default NavRoute