import UserRentalCard from "./UserRentalCard";

const UserRentalList = ({rentals, deleteRental, currentUser}) => {
    const userRentalsArray = rentals.map(rental => (
        <UserRentalCard rental={rental} key={rental.id} deleteRental={deleteRental} currentUser={currentUser} />
    ))
   
    return (
      <div>
        {userRentalsArray}   
      </div>
    );
  }
  
  export default UserRentalList;