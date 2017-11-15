// @flow
import React, { PureComponent } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './App';

const muiTheme = getMuiTheme({
  slider: {
    trackColor: '#fff',
    trackColorSelected: '#fff',
    selectionColor: '#676767',
  },
});

export default class extends PureComponent<*> {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    );
  }
}
