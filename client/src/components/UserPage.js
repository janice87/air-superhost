import UserRentalList from "./UserRentalList";
import {Typography, Box} from '@mui/material';

const UserPage = ({currentUser, rentals, deleteRental}) => {
  return (
    <div>  
       <Box     
          justifyContent="center"
          alignItems="center"           
          style={{ marginBottom: "2em", marginTop: "2em" }}
        >      
        <Typography align='center' variant='h5'>Current Listings for Super Host: {currentUser.name}</Typography>           
       </Box>
    <UserRentalList rentals={rentals} deleteRental={deleteRental} currentUser={currentUser} />   
    </div>
  );
}

export default UserPage;