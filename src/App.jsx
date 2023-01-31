import { useState } from 'react'
import './App.css'
import Home from "./Components/Home"

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f1f20',
    },
    secondary: {
      main: '#fff',
    },
    Download:{
      main:'#00d131'
    }
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 200,
    },
    h6: {
      fontWeight: 200,
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 600,
    },
    button: {
      fontWeight: 1000,
    },
  },
});



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
     <Home />
     </ThemeProvider>
  )
}

export default App
