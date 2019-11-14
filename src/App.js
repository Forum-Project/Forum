import React from 'react';
import './App.css';

// component imports
import Navbar from './components/navbar/Navbar';
import Routes from './routes/Routes';
// import Routes from './routes/Routes';
import CommentAdd from './components/comment-text/CommentAdd'


function App() {
	return (
		<>
			<Navbar />
			<Routes />
			{/* <CommentAdd /> */}
		</>
	);
}

export default App;
