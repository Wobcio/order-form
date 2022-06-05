import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#f19409',
      darker: '#ba6d02',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function App() {

  
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
}

export default App;
