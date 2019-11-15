import React from 'react';
import './App.css';
import Filter from './components/filter/Filter';

// component imports
// import Navbar from './components/navbar/Navbar';
// import Routes from './routes/Routes';
import CreateComments from './components/comment-text/CreateComments'


function App() {

	return (
		<>
			{/* <Navbar />
			<Routes /> */}
			<CreateComments />
      <Filter />
		</>
	);
}

export default App;
