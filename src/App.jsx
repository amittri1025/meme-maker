import { useState } from 'react'
import './App.css'
import Home from "./Components/Home"

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#222',
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
      fontWeight: 100,
    },
    h2:{
      fontWeight: 800,
      color: "#FFFFF",
      fontFamily: "Consolas"
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 200,
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
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
