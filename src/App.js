import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { MuiThemeProvider as V0MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// component imports
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/Routes';

import './App.css';

const theme = createMuiTheme({
  /* theme for v1.x */
  typography: {
    button: {
      fontSize: '1rem',
    },
  },
});
const themeV0 = getMuiTheme({
  /* theme for v0.x */
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <V0MuiThemeProvider muiTheme={themeV0}>
        <Navbar />
        <Routes />
      </V0MuiThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;