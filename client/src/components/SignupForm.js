import { useState } from 'react'
import { useHistory } from "react-router";
import { Container, Box, Typography, Grid, TextField, Button} from '@mui/material';

const SignupForm = ({updateCurrentUser}) => {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [errors, setErrors] = useState([])
  const history = useHistory()
 
  const handleSubmit = (e) => {
  e.preventDefault();
  fetch('/signup', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      name,
      password,
      password_confirmation: passwordConfirmation
    })
  })
  . then(res => {
    if(res.ok) {
      res.json().then(newUser => {
        updateCurrentUser(newUser)
        history.push(`/rentals`)
    })
    } else {
      res.json().then(data => setErrors(data.errors))
    }
  })
}

  return (  
    <div> 
      <Container maxWidth="xs">
      <Box     
            justifyContent="center"
            alignItems="center"           
            style={{marginTop: "2em", marginBottom: "3em"}}
          >       
      <Grid container direction="column" alignItems="center" justify="center" spacing={6}>
        <Grid item> 
          <Typography variant="h4" align="center">Super Host 🏠</Typography>      
          <Typography variant="h6" align="center">Sign up to start hosting</Typography> 
        </Grid>
        
        <Grid container direction="column" alignItems="center" justify="center">
        <Grid item style={{ border: "0.2px solid gray", paddingLeft: "10px", paddingRight: "10px" }}>
          <form onSubmit={handleSubmit}> 
          <TextField
            variant="outlined"
            label="Name"
            onChange={(e) => setName(e.target.value)} 
            value={name}
            fullWidth
            style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
          />
          <TextField
            variant="outlined"
            label="Username"
            onChange={(e) => setUsername(e.target.value)} 
            value={username}
            fullWidth
            style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
          />          
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            fullWidth
            style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Confirm Password"
            onChange={(e) => setPasswordConfirmation(e.target.value)} 
            value={passwordConfirmation}
            fullWidth
            style={{ marginBottom: "5px", marginTop: "5px", padding: "5px" }}
          />          
         
            <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button type="submit" size="medium" variant="contained">
              SIGN UP
            </Button>            
            </Box>
          </form>          
        {errors ? errors.map(error => <li key={error}>{error}</li>) : null }
        </Grid>
        </Grid>
        </Grid>  
        </Box>
        </Container>
      </div>
    );
  }
  
  export default SignupForm;

