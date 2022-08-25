import {useHistory} from 'react-router-dom'
import {Box, Container, Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import StarRating from './StarRating'
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const RentalsDetail = ({rentalObj}) => {
    const history = useHistory();
        
    const handleBackButton = () => {
        history.push(`/rentals`)
    }    

    const {name, location, price, rating, image, description, guest, user} = rentalObj
  
    return (
        <div>
        <Container maxWidth="sm">
          <Box     
            justifyContent="center"
            alignItems="center"
            boxShadow={1}
            style={{ marginBottom: "2em", marginTop: "2em" }}
          >  
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            component="img"
            height="400"
            image={image}
            alt="id"
          />
          <CardContent>
            <Typography gutterBottom variant="h4">
              {name}
            </Typography>
                    
            <Typography variant="subtitle1">
            📍{location}
            </Typography>
    
            <Typography variant="subtitle1">
            ${price} per night 
            </Typography>
    
            <Typography variant="subtitle1">
            <StarRating rating={rating} />
            </Typography>

             <Typography variant="subtitle1">
             <HomeIcon fontSize="small" color="primary" /> Super Host: {user.name}
             </Typography>

             <Typography variant="subtitle1">
             <PersonAddIcon fontSize="small" color="primary" /> Current Guest: {guest.name}
             </Typography>
             <br/>
    
            <Typography variant="body1">
            {description}
            </Typography>

          </CardContent>
          <CardActions>      
            <Button size="small" variant="outlined" onClick={handleBackButton}>BACK</Button>
          </CardActions>
        </Card>
        </Box>
        </Container>     
          </div>
    );
  }
  
  export default RentalsDetail;