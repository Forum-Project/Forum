import React from 'react';

import { Route } from 'react-router-dom';

// component imports

import Routes from './routes/Routes';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';


import './App.css';


function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;