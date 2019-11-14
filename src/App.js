import React from 'react';
import './App.css';
import Filter from './components/filter/Filter';

// component imports
import Navbar from './components/navbar/Navbar';
// import Routes from './routes/Routes';
import CommentAdd from './components/comment-text/CommentAdd'


function App() {

	return (
		<>
			{/* <Navbar />
			<Routes /> */}
			<CommentAdd />
      <Filter />
		</>
	);
}

export default App;
