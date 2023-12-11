import { Box, FormControl, Input, InputLabel, Menu, MenuItem, Select, Typography, styled } from '@mui/material'
import React, { useState } from 'react'



const OuterContainer=styled(Box)(({theme})=>({
    
     [theme.breakpoints.down("xl")]:{
  
     },
     [theme.breakpoints.down("lg")]:{
  
     },
     [theme.breakpoints.down("md")]:{
         
     },
     [theme.breakpoints.down("sm")]:{
         
     },
     [theme.breakpoints.down("xs")]:{
         
     }
  }))

  const TextBox=styled(Typography)(({theme})=>({
    
    [theme.breakpoints.down("xl")]:{
 
    },
    [theme.breakpoints.down("lg")]:{
 
    },
    [theme.breakpoints.down("md")]:{
        
    },
    [theme.breakpoints.down("sm")]:{
        
    },
    [theme.breakpoints.down("xs")]:{
        
    }
 }))

 const InnerBox=styled(Box)(({theme})=>({
    
    [theme.breakpoints.down("xl")]:{
 
    },
    [theme.breakpoints.down("lg")]:{
 
    },
    [theme.breakpoints.down("md")]:{
        
    },
    [theme.breakpoints.down("sm")]:{
        
    },
    [theme.breakpoints.down("xs")]:{
        
    }
 }))

function Info() {

    const [name,setName] =useState('')

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <OuterContainer >

        <TextBox sx={{fontSize:30}}> Please enter your contact details</TextBox>
        <TextBox sx={{width:530, textAlign:"left",marginLeft:50, marginTop:10}}>Complete your details and one of our associates will contact you about viewing your selected time piece. No prepayment is required for the reservation and there is no obligation to purchase the reserved watch.</TextBox>

<InnerBox>

</InnerBox>

<InnerBox>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 300 ,textAlign:"left" }}>
        <InputLabel id="demo-simple-select-standard-label">Salutation</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={name}
          onChange={handleChange}
          label="Salutation"
        >


<MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={10}>Mr.</MenuItem>
          <MenuItem value={20}>Mrs.</MenuItem>
         
        </Select>
      </FormControl>
   
</InnerBox>

    </OuterContainer>
  )
}

export default Info