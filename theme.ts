import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff917d',
      main: '#ff5e50',
      dark: '#ff5e50',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9e88d8',
      main: '#6e5ba6',
      dark: '#403177',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      textTransform: 'capitalize',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'darkgray white',
        },
        '*::-webkit-scrollbar': {
          width: 8,
          height: 8,
        },
        '*::-webkit-scrollbar-track': {
          background: 'white',
        },
        '*::-webkit-scrollbar-thumb': {
          background: 'darkgray',
          borderRadius: 4,
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: 'gray',
        },
      },
    },
  },
});

export default theme;
