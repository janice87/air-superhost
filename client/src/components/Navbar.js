import {Link, useHistory} from 'react-router-dom'
import {AppBar, Box, Toolbar, Container, Button} from '@mui/material';

const Navbar = ({currentUser, updateCurrentUser}) => {
    const history = useHistory()

    const handleLogout = () => {
        fetch('/logout', {
          method: 'DELETE'
        })  
          updateCurrentUser(false)
          history.push('/login')      
      }

    return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>  
            {currentUser ? <Button color="secondary">Welcome {currentUser.name}!</Button> : null}            
            <Button color="secondary" to="/" component={Link}>HOME</Button> 
            <Button color="secondary" to="/rentals" component={Link}>RENTALS</Button>           
            {currentUser ? <Button color="secondary" to={'/rentals/new'} component={Link}>ADD RENTALS</Button> : null}
            {currentUser ? <Button color="secondary" to={`/users/${currentUser.id}`} component={Link}>MY RENTALS</Button> : null}                    
            {currentUser ? <Button color="secondary" to="/logout" onClick={handleLogout}>LOGOUT</Button> : <Button color="secondary" to="/login" component={Link}>LOGIN </Button>} 
        </Box>    
       </Toolbar>
      </Container>
    </AppBar>
    );
  }
  
  export default Navbar;