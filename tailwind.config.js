module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff917d',
          main: '#ff5e50',
          dark: '#c52727',
        },
        secondary: {
          light: '#9e88d8',
          main: '#6e5ba6',
          dark: '#403177',
        },
      },
    },
    fontFamily: {
      'sans': [
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
      ],
      'mono': [
        'source-code-pro',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Courier New"',
        'monospace',
      ]
    }
  },
}
