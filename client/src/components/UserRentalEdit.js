import { useEffect, useState } from "react";
import {useParams, useHistory} from 'react-router-dom'
import { Box, Container, Button, Typography, TextField, TextareaAutosize } from '@mui/material';

const UserRentalEdit = ({currentUser, onUpdateRental}) => {
    const [updatedRental, setUpdatedRental] = useState({
        name: "",
        location: "",
        price: "",
        rating: "",
        description: "",
        image: "",
        user_id: currentUser.id,
        guest_id: ""
    })
    const [errors, setErrors] = useState([])
    const {id} = useParams()
    const history = useHistory()

    useEffect(() => {
        fetch(`/rentals/${id}`)
        .then((res) => {
            if(res.ok) {
                res.json().then(data => setUpdatedRental(data))
            } else {
                res.json().then(data =>                   
                  setErrors(data.errors))
            }
        })
    }, [id])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/rentals/${id}`, {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(updatedRental)
        })
        .then(res => {
            if (res.ok){
                res.json().then(editedRental => onUpdateRental(editedRental))
                history.push(`/rentals`)
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const handleChange = (e) => {
        setUpdatedRental({
            ...updatedRental,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
        <Container maxWidth="xs">
        <Box
        m={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        >
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>Edit Rental Info ✏️</Typography> 
          <br /> 
        </Box>
        </Container>  

        <Container maxWidth="m">
          <Box       
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
            <form onSubmit={handleSubmit}>          
            <TextField                   
                  id="outlined-size-small"
                  name="name" 
                  onChange={handleChange} 
                  value={updatedRental.name}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                 /> 
            <br/>
            <TextField 
                  type="location" 
                  id="outlined-size-small"
                  name="location" 
                  onChange={handleChange} 
                  value={updatedRental.location}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Location"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/>            
            <TextField                   
                  id="outlined-size-small"
                  name="price" 
                  onChange={handleChange} 
                  value={updatedRental.price}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Price"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/> 
        <TextField                   
                  id="outlined-size-small"
                  name="image" 
                  onChange={handleChange} 
                  value={updatedRental.image}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Image"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/> 
            <TextField                   
                  id="outlined-size-small"
                  name="guest_id" 
                  onChange={handleChange} 
                  value={updatedRental.guest_id}             
                  style={{ marginBottom: "10px", width: "300px" }}  
                  variant="outlined"
                  label="Guest ID"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/> 
            <TextareaAutosize
                  name="description"
                  onChange={handleChange}
                  value={updatedRental.description}
                  minRows={5}
                  style={{ width: 300 }}                
                  />          
            <br/>
            <Button type="submit" variant="outlined">Submit</Button>
            {errors ? errors.map(error => <li key={error}>{error}</li>) : null }
            </form>
          </Box>
        </Container>        
        </div>
    );
  }
  
  export default UserRentalEdit;