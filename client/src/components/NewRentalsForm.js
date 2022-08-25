import {useState} from 'react'  
import { useHistory } from "react-router-dom";
import { Box, Container, Button, Typography, TextField, TextareaAutosize } from '@mui/material';
  
  const NewRentalsForm = ({onAddRental, currentUser}) => {
    const [formData, setFormData] = useState({
        name: "",
        location: "",
        price: "",
        rating: 3,
        description: "",
        image: "",
        user_id: currentUser.id,
        guest_id: 1
    })    
   const [errors, setErrors] = useState([])
   const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/rentals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({...formData})
          })          
        .then(res => {
            if(res.ok) {
                res.json().then(newRental => onAddRental(newRental))
                history.push(`/rentals`)     
            } else {
                res.json().then(data => {                    
                    setErrors(data.errors)
                })                
            }
        })   
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
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
          <Typography variant="h5" align="center" style={{ marginBottom: "1em", marginTop: "1em" }}>Add New Rental 🏠</Typography> 
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
                  value={formData.name}             
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
                  value={formData.location}             
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
                  value={formData.price}             
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
                  value={formData.image}             
                  style={{ marginBottom: "15px", width: "300px" }}  
                  variant="outlined"
                  label="Image"
                  InputLabelProps={{
                    shrink: true,
                  }}       
                  /> 
            <br/> 
            <TextareaAutosize
                  name="description"
                  onChange={handleChange}
                  value={formData.description}
                  minRows={5}
                  placeholder="Enter description..."
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
  
  export default NewRentalsForm;
