import {useHistory} from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import StarRating from './StarRating'
 
const RentalsCard = ({rental, updateCurrentRental}) => {
    const {name, location, price, rating, image, id, user} = rental
    const history = useHistory();

    const handleShowCard = () => {
      updateCurrentRental(rental)
      history.push(`/rentals/${id}`)
    }

    return (
    <div>   
      <Card sx={{ maxWidth: 300 }} style={{ marginBottom: "2em", marginTop: "2em" }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="id"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
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
        Super Host: {user.name}
        </Typography>

      </CardContent>
      <CardActions>      
        <Button size="small" variant="outlined" onClick={handleShowCard}>More</Button>
      </CardActions>
      </Card>    
      </div>
    );
  }
  
  export default RentalsCard;