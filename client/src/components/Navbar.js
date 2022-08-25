import {Link, useHistory} from 'react-router-dom'
import {AppBar, Box, Toolbar, Container, Button} from '@mui/material';

const Navbar = ({currentUser, updateCurrentUser}) => {
    const history = useHistory()

    return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 3, display: { xs: 'none', md: 'flex' } }}>  

        </Box>    
       </Toolbar>
      </Container>
    </AppBar>
    );
  }
  
  export default Navbar;