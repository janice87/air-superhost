import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Box, Container, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import StarRating from './StarRating'
import IconButton from '@mui/material/IconButton'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const UserRentalCard = ({rental, deleteRental, currentUser}) => {
    const [errors, setErrors] = useState(false)
    const {name, location, price, rating, image, id} = rental
    const history = useHistory()

    const handleDelete = () => {
        fetch(`/rentals/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
               deleteRental(id)
               history.push(`/users/${currentUser.id}`)
            } else {               
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const handleEdit = () => {
      history.push(`/rentals/${id}/edit`)
    }
    
    return (
        <Container maxWidth="xs">
        <Box     
          justifyContent="center"
          alignItems="center"
          boxShadow={1}
          style={{ marginBottom: "2em" }}
        >  
        {/* {errors ? errors.map(error => <li key={error}>{error}</li>) : null }       */}
        {errors ? <li key={errors}>{errors}</li>: null}   
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="id"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
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
        </CardContent>

        <CardActions>  
        <IconButton onClick={handleEdit} aria-label="edit" size="small">
          <EditOutlinedIcon fontSize="small" />      
        </IconButton>

        <IconButton onClick={handleDelete} aria-label="delete" size="small">
          <BackspaceOutlinedIcon fontSize="small" />
        </IconButton> 
      </CardActions>
      </Card>      
      </Box>
      </Container>     
    );
  }
  
  export default UserRentalCard;