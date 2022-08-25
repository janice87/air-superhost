import { useState } from "react";
import { useHistory } from "react-router";
import { Container, Box, Typography, Grid, TextField, Button} from '@mui/material';

const LoginForm = ({updateCurrentUser}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => {
      if(res.ok) {
        res.json().then(currentUser => {
          updateCurrentUser(currentUser)
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
            style={{ marginTop: "3em", marginBottom: "3em" }}
          >      
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item> 
          <Typography variant="h4" align="center">Super Hosts Login</Typography> 
        </Grid>
       
        <Grid container direction="column" alignItems="center" justify="center" style={{ marginBottom: "1em", marginTop: "1em" }}>
        <Grid item style={{ border: "0.2px solid gray", paddingLeft: "10px", paddingRight: "10px" }}>              
          <form onSubmit={handleSubmit}> 
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
            <Box m={1} display="flex" justifyContent="center" alignItems="center">
            <Button type="submit" size="large" variant="contained">
              LOGIN
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
  
  export default LoginForm;