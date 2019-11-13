import React from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { MuiThemeProvider as V0MuiThemeProvider } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// component imports
import Navbar from './components/Navbar/Navbar';
import Routes from './routes/Routes';

import './App.css';
import Filter from './components/filter/Filter';

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
<<<<<<< HEAD
    <MuiThemeProvider theme={theme}>
      <V0MuiThemeProvider muiTheme={themeV0}>
        <Navbar />
        <Routes />
      </V0MuiThemeProvider>
    </MuiThemeProvider>
=======
    <div className="App">
      <header className="App-header">
        <Filter />
      </header>
    </div>
>>>>>>> e466f506b59e6c4dc0224de824eb5e31b81ded98
  );
}

export default App;