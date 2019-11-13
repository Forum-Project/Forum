import React from 'react'
import { Route } from 'react-router-dom'; 

//component imports 
import Navbar from '../components/navbar/Navbar'; 
import Signup from '../components/signup/Signup'; 
import Signin from '../components/signin/Signin'; 
import Profile from '../components/profile/Profile'; 
import Categories from '../components/categories/Categories';

const Routes = () => {

    return ( 
        <>
            <Route path="/" exact component={Signup} />
            <Route path="/login" exact component={Signin} />
            <Route path="/profile" component={Profile} />
            <Route path="/categories" component={Categories} />
        </>
     );
}
 



export default Routes;