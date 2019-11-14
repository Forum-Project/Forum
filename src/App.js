import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { MuiThemeProvider as V0MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// component imports
import Navbar from './components/navbar/Navbar';
// import Routes from './routes/Routes';
import CommentAdd from './components/comment-text/CommentAdd'


function App() {
<<<<<<< HEAD
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
=======

	return (
		<>
			{/* <Navbar />
			<Routes /> */}
			<CommentAdd />
      <Filter />
		</>
	);
>>>>>>> origin/andy-commentbox
}

export default App;