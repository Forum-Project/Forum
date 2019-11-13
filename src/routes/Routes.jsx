import React from 'react'
import { Route } from 'react-router-dom'; 

//component imports 
import Navbar from '../components/Navbar/Navbar'; 
import Signup from '../components/signup/Signup'; 
import Signin from '../components/signin/Signin'; 
// import Profile from '../components/Profile/Profile'; 
// import Categories from '../components/Categories/Categories';

const Routes = () => {

    return ( 
        <>
            {/* <Route path="/" component={Signup} />
            <Route path="/login" component={Signin} /> */}
            {/* <Route path="/profile" component={Profile} /> */}
            {/* <Route path="/category/:id" component={Category} /> */}
        </>
     );
}
 
export default Routes;