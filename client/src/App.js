import { Switch, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import RentalsPage from './components/RentalsPage'
import RentalsDetail from './components/RentalsDetail'
import NewRentalsForm from './components/NewRentalsForm'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import UserPage from './components/UserPage'
import UserRentalEdit from './components/UserRentalEdit'
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
        res.json().then(data => {          
          setErrors(data.error)
        })      
      }
    })

    fetch('/me')
    .then(res => {
      if(res.ok) {
        res.json().then(loggedinUser => setCurrentUser(loggedinUser))     
      }
    }) 
       
    }, [])
    
  const handleAddRental = (newRental) => {
    const updatedRentals = [...rentals, newRental]  
    const sortedRentals = updatedRentals.sort(function (a,b) {
      return a.location.toLowerCase().localeCompare(b.location.toLowerCase())
    })    
    setRentals(sortedRentals)
  }

  const handleDeleteRental = (id) => {
    const updatedRentals = rentals.filter(rental => rental.id !== id)
    setRentals(updatedRentals)
  }

  const handleEditRental = (editedRental) => {
    const updatedRentals = rentals.map(rental => 
      rental.id === editedRental.id ? editedRental : rental)
      const sortedRentals = updatedRentals.sort(function (a,b) {
        return a.location.toLowerCase().localeCompare(b.location.toLowerCase())
      })    
    setRentals(sortedRentals)
  }

  const updateCurrentUser = (user) => {       
    setCurrentUser(user)
  }

  const updateCurrentRental = (rentalObj) => {
    setCurrentRental(rentalObj)
  }

  const userFilteredRentals = rentals.filter(rental => rental.user_id === currentUser.id)
 
  return (
    <div>
      <ThemeProvider theme={theme}> 
      <Navbar currentUser={currentUser} updateCurrentUser={updateCurrentUser} />    
      {errors ? <li key={errors}>Rentals {errors}</li>: null}   
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
