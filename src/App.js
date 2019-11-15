import React from 'react';

import { Route } from 'react-router-dom'; 

// component imports
// import Navbar from './components/navbar/Navbar';
// import Routes from './routes/Routes';
import CreateComments from './components/comment-text/CreateComments'
import Routes from './routes/Routes';
import Signin from './components/signin/Signin'; 
import Signup from './components/signup/Signup'; 


import './App.css';

	return (
		<>
			{/* <Navbar />
			<Routes /> */}
			<CreateComments />
      <Filter />
		</>
	);
function App() {
  return (
    <>
		{/* <TabPanel /> */}
    {/* <Navbar /> */}
    <Route exact path="/" component={Signup} />
    <Route path="/signin" component={Signin} />
    <Routes />
    </>
  );
}

export default App;