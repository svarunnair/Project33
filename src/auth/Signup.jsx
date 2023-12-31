import { CheckBox } from '@mui/icons-material'
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, MenuItem, Select, Typography, styled } from '@mui/material'
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

const InnerBox=styled(Typography)(({theme})=>({

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

const FirstBox=styled(Typography)(({theme})=>({

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

function Signup() {

  const [name,setName]=useState('')




  const handleChange = (e) => {
    setName(e.target.value);
  };
   
  return (
    <OuterContainer>

      <TextBox  sx={{fontSize:39, marginTop:10}}>Create New Customer Account</TextBox>
      <InnerBox>
        <TextBox sx={{marginRight:70}}>
          Personal Information
       </TextBox>
       <FirstBox sx={{display:'flex', marginLeft:36,width:600}} > 

       <FormControl variant="standard" sx={{ m: 1, minWidth: 300 ,textAlign:"left",border:"1px solid black" }}>
        <InputLabel   id="demo-simple-select-standard-label">Salutation</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={name}
          onChange={handleChange}
          label="Salutation"
        >


<MenuItem  value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>Mr.</MenuItem>
          <MenuItem value={"Mrs."}>Mrs.</MenuItem>
         
        </Select>
      </FormControl><br/>

      <Input sx={{marginLeft:10,borderRadius:1,border:"1px solid black",height:35,marginTop:2}} placeholder='Address'/>
        
      </FirstBox>
      <FirstBox sx={{marginLeft:-12}}>

        <Input sx={{border:"1px solid black"}}  placeholder='First Name'/>
        <Input sx={{marginLeft:24,border:"1px solid black"}} placeholder='Last Name'/>

      </FirstBox>
      <FirstBox sx={{marginLeft:-12,padding:1}}>
        <Input type='date' sx={{border:"1px solid black"}}  placeholder='Date of Birth'/>
        <Input sx={{marginLeft:33,border:"1px solid black"}}  placeholder='Country'/>
      </FirstBox>
      <FirstBox sx={{marginLeft:-12}}>
        <Input sx={{border:"1px solid black"}} placeholder='Pincode'/>
        <Input sx={{marginLeft:24,border:"1px solid black"}} placeholder='City'/>
      </FirstBox>
      <FirstBox sx={{marginLeft:-12,padding:1}}>
        <Input sx={{border:"1px solid black"}} placeholder='State'/>
        <Input sx={{marginLeft:24,border:"1px solid black"}}  placeholder='Telephone'/>
      </FirstBox>
      <Input sx={{marginLeft:36,border:"1px solid black"}}  placeholder='Personal Style'/>



      
      </InnerBox>
<TextBox sx={{marginRight:70,fontSize:21,marginTop:4}}>Communication
</TextBox>
<TextBox sx={{marginRight:46}}>I prefer receive communication from Rado by :</TextBox>
<FirstBox sx={{marginLeft:36}}>
<FormGroup >
<FormControlLabel  required control={<Checkbox />}  label="EMAILS" />
<FormControlLabel  required  control={<Checkbox />} label="SMS" />
<FormControlLabel  required  control={<Checkbox />} label="MAILS" />
</FormGroup>
</FirstBox>
<TextBox sx={{marginRight:71}}>Sign-in Information</TextBox>
<Input sx={{border:"1px solid black"}} placeholder='Email'/>
<Input sx={{border:"1px solid black"}} placeholder='Password'/>
<Input sx={{border:"1px solid black"}} placeholder='Confirm Password'/>
<Button>Create Account</Button>
    </OuterContainer>
  )
}

export default Signup