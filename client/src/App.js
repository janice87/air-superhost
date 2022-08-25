import { Switch, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'


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

  useEffect(() => {
    fetch(`/rentals`)
    .then(res => {
      if(res.ok) {
        res.json().then(rentalArray => setRentals(rentalArray))
      } else {
        res.json().then(data => setErrors(data.errors))
      }
    })

    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(loggedinUser => setCurrentUser(loggedinUser))
      } else {
        res.json().then(data => {          
          setErrors(data.errors)
        })
      }
    })   
    }, [])
 
  if(errors) return <h2>{errors}</h2>

  return (
    <div>
      <ThemeProvider theme={theme}> 
      <Navbar currentUser={currentUser} updateCurrentUser={updateCurrentUser} />  
      <Switch>  
        <Route exact path="/rentals"><RentalsPage rentals={rentals} updateCurrentRental={updateCurrentRental} /></Route> 
        <Route exact path="/rentals/new"><NewRentalsForm onAddRental={handleAddRental} currentUser={currentUser} /></Route> 
        <Route exact path="/rentals/:id/edit"><UserRentalEdit currentUser={currentUser} onUpdateRental={handleEditRental} /></Route>
        <Route exact path="/rentals/:id"><RentalsDetail rentalObj={currentRental} /></Route> 
        <Route exact path="/users/:id"><UserPage currentUser={currentUser} rentals={userFilteredRentals} deleteRental={handleDeleteRental} /></Route>
        <Route exact path="/login"><LoginForm updateCurrentUser={updateCurrentUser} /></Route>     
        <Route exact path="/"><SignupForm updateCurrentUser={updateCurrentUser} /></Route> 
     </Switch> 
     </ThemeProvider>
    </div>
  );
}

export default App;
