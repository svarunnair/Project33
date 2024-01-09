import { Box, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const OuterContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
border:"2px solid red",
display:"grid",
justifyItems:"center",

padding:70,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TitleText = styled(Typography)(({ theme }) => ({
 
  fontSize:33,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const PersonalInfo = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",

    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const TextBox = styled(Typography)(({ theme }) => ({
      
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));


      const InputBox = styled(Box)(({ theme }) => ({
      // border:"1px solid black",
      display:"flex",
     gap:30,
     
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));

      const FirstBox = styled(Box)(({ theme }) => ({
        // border:"1px solid black",
        display:"flex",
        flexDirection:"column",
       gap:10,
       
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

function Signup() {
  const [name,setName]=useState('')
  const [region,setRegion]=useState('')
  const handleChange=(e)=>{
    let value=e.target.value 
setName(value)
  }
  const handleRegion=(e)=>{
    let value=e.target.value 
setRegion(value)
  }
  return (
<OuterContainer>

  <InnerContainer>
<TitleText>Create New Customer Account</TitleText>

<PersonalInfo>
  <TextBox sx={{textAlign:"left"}}>Personal Information</TextBox>
  <FirstBox>
  <InputBox  sx={{gap:1}}>
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

  <OutlinedInput  sx={{width:300}} placeholder="Address"/>
  </InputBox>

  <InputBox>
  <OutlinedInput  sx={{width:300}} placeholder="First Name"/>
  <OutlinedInput  sx={{width:300}} placeholder="City"/>
  </InputBox>

  <InputBox sx={{gap:2.6}}>
  <OutlinedInput  sx={{width:300}} placeholder="Last Name"/>
  <FormControl variant="standard" sx={{ m: 1, minWidth: 300 ,textAlign:"left",border:"1px solid black" }}>
        <InputLabel   id="demo-simple-select-standard-label">Salutation</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={handleRegion}
          label="Salutation"
        >


<MenuItem  value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>Mr.</MenuItem>
          <MenuItem value={"Mrs."}>Mrs.</MenuItem>
         
        </Select>
      </FormControl><br/>

  </InputBox>

  <InputBox>
  <OutlinedInput type='date'  sx={{width:300}} placeholder="Birth Date"/>
  <OutlinedInput  sx={{width:300}} placeholder="Post Code"/>
  </InputBox>

  <InputBox>
  <OutlinedInput  sx={{width:300}} placeholder="Telephone"/>
  <OutlinedInput  sx={{width:300}} placeholder="Country"/>
  </InputBox>
  </FirstBox>

</PersonalInfo>



  </InnerContainer>


</OuterContainer>
  ) 
}

export default Signup;
