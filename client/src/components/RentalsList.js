import RentalsCard from "./RentalsCard";
import { Container, Grid } from '@mui/material';

const RentalsList = ({rentals, updateCurrentRental}) => {
  const rentalsArray = rentals.map((rental, index) => (
    <Grid item lg={4} key={index}>
      <RentalsCard key={rental.id} rental={rental} updateCurrentRental={updateCurrentRental} />
      </Grid>
  ))
  
  return (
    <div> 
      <Container> 
        <Grid container      
        spacing={1}>      
        {rentalsArray}
        </Grid>
      </Container>        
    </div>
  );
}

export default RentalsList;