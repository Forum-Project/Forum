import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { MuiThemeProvider as V0MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// component imports
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/Routes';


function App() {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
}

export default App;