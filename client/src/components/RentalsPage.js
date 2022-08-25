import RentalsList from "./RentalsList";
import {Box} from '@mui/material';

  const RentalsPage = ({rentals, updateCurrentRental}) => {
    return (
      <div>
          <Box     
            justifyContent="center"
            alignItems="center"           
            style={{ marginBottom: "2em", marginTop: "2em" }}
          > 
          </Box>  
        <RentalsList rentals={rentals} updateCurrentRental={updateCurrentRental} />       
      </div>
    );
  }
  
  export default RentalsPage;