import React from 'react';

import { Route } from 'react-router-dom'; 

// component imports
import Navbar from './components/Navbar/Navbar';

import Routes from './routes/Routes';
import Signin from './components/signin/Signin'; 
import Signup from './components/signup/Signup'; 



import './App.css';


function App() {
  return (
    <>
    
     <Route exact path="/" component={Signup} />
    <Route path="/signin" component={Signin} />


    <Routes />
    </>
  );
}

export default App;