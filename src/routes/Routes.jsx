import React from 'react'
import { Route } from 'react-router-dom'; 

//component imports 
import Navbar from '../components/Navbar/Navbar'; 
import Signup from '../components/Signup/Signup'; 
import Signin from '../components/Signin/Signin'; 
import Profile from '../components/Profile/Profile'; 
import Category from '../components/Category/Category';

const Routes = () => {

    return ( 
        <>
            <Navbar />
            <Route path="/" component={Signup} />
            <Route path="/login" component={Signin} />
            <Route path="/profile" component={Profile} />
            <Route path="/category/:id" component={Category} />
        </>
     );
}
 



export default Routes;