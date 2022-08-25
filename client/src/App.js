import { Switch, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e57373'
    },
    secondary: {
      main: '#FFFFFF'
    }  
  },
  typography: {
    fontFamily: [
      'Libre Franklin',
      'Karla',
      'Playfair Display',       
      'Noto Serif HK'
    ].join(',')
  }
});

function App() {
  const [rentals, setRentals] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [currentRental, setCurrentRental] = useState({})

  return (
    <div>
      <ThemeProvider theme={theme}> 
     
      </ThemeProvider>
    </div>
  );
}

export default App;
