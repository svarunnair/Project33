import { CheckBox } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Input, InputLabel, MenuItem, OutlinedInput, Select, Typography, styled } from "@mui/material";
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

    const ButtonBox = styled(Box)(({ theme }) => ({
      // border:"2px solid blue",
      display:"flex",
      paddingTop:40,
  
      
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
        [theme.breakpoints.down("md")]: {
          flexDirection:"column",
        },
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

        const Detail = styled(Typography)(({ theme }) => ({
          // border:"1px solid black",
        
            [theme.breakpoints.down("xl")]: {},
            [theme.breakpoints.down("lg")]: {},
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
            [theme.breakpoints.down("xs")]: {},
          }));

          const SecondBox = styled(Box)(({ theme }) => ({
            // border:"1px solid black",
            display:"flex",
            gap:70,

          
              [theme.breakpoints.down("xl")]: {},
              [theme.breakpoints.down("lg")]: {},
              [theme.breakpoints.down("md")]: {
                flexDirection:"column",
              },
              [theme.breakpoints.down("sm")]: {},
              [theme.breakpoints.down("xs")]: {},
            }));


            const ThirdBox = styled(Box)(({ theme }) => ({
              // border:"1px solid black",
              display:"flex",
             
            
                [theme.breakpoints.down("xl")]: {},
                [theme.breakpoints.down("lg")]: {},
                [theme.breakpoints.down("md")]: {},
                [theme.breakpoints.down("sm")]: {},
                [theme.breakpoints.down("xs")]: {},
              }));
              const FourthBox = styled(Box)(({ theme }) => ({
                // border:"1px solid black",
                display:"flex",
                flexDirection:"column",
                
                
               
              
                  [theme.breakpoints.down("xl")]: {},
                  [theme.breakpoints.down("lg")]: {},
                  [theme.breakpoints.down("md")]: {},
                  [theme.breakpoints.down("sm")]: {},
                  [theme.breakpoints.down("xs")]: {},
                }));

                const InnerBox = styled(Box)(({ theme }) => ({
                  // border:"1px solid black",
                  display:"flex",
                 width:600,
                 fontSize:10,
                 paddingTop:20,
                 textAlign:"left",
                    [theme.breakpoints.down("xl")]: {},
                    [theme.breakpoints.down("lg")]: {},
                    [theme.breakpoints.down("md")]: {
                      width:300,
                    },
                    [theme.breakpoints.down("sm")]: {},
                    [theme.breakpoints.down("xs")]: {},
                  }));
  

function Signup() {
  const [name,setName]=useState('')
  const [region,setRegion]=useState('')
  const [checked,setChecked]=useState("")

  const handleChange1=(e)=>{
    let value=e.target.value 
setChecked(value)
  }
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

  <OutlinedInput  sx={{width:300,height:40}} placeholder="Address"/>
  </InputBox>

  <InputBox>
  <OutlinedInput  sx={{width:300,height:40}} placeholder="First Name"/>
  <OutlinedInput  sx={{width:300,height:40}} placeholder="City"/>
  </InputBox>

  <InputBox sx={{gap:2.6}}>
  <OutlinedInput  sx={{width:300,height:40}} placeholder="Last Name"/>
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
          <MenuItem value={"Mr."}>Andhra Pradesh</MenuItem>
          <MenuItem value={"Mrs."}>Arunachal Pradesh.</MenuItem>
          <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
          <MenuItem value={"Delhi."}>Delhi</MenuItem>
          <MenuItem value={"Kerala."}>Kerala</MenuItem>
          <MenuItem value={"Karnadaka."}>Karnadaka</MenuItem>
          <MenuItem value={"Himachal."}>Himachal</MenuItem>
          <MenuItem value={"Bihar."}>Bihar</MenuItem>
          
         
        </Select>
      </FormControl><br/>

  </InputBox>

  <InputBox>
  <OutlinedInput type='date'  sx={{width:300,height:40}} placeholder="Birth Date"/>
  <OutlinedInput  sx={{width:300,height:40}} placeholder="Post Code"/>
  </InputBox>

  <InputBox>
  <OutlinedInput  sx={{width:300,height:40}} placeholder="Telephone"/>
  <FormControl variant="standard" sx={{ m: 1, minWidth: 300 ,textAlign:"left",border:"1px solid black" }}>
        <InputLabel   id="demo-simple-select-standard-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={handleRegion}
          label="Salutation"
        >


<MenuItem  value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>India</MenuItem>
          <MenuItem value={"Mrs."}>America</MenuItem>
          <MenuItem value={"Tamil Nadu"}>Australia</MenuItem>
          <MenuItem value={"Delhi."}>Swiden</MenuItem>
          <MenuItem value={"Kerala."}>UK</MenuItem>
          <MenuItem value={"Karnadaka."}>Germany</MenuItem>
          <MenuItem value={"Himachal."}>France</MenuItem>
          <MenuItem value={"Bihar."}>Itily</MenuItem>
          
         
        </Select>
      </FormControl><br/>
  </InputBox>

  <FormControl  variant="standard" sx={{ m: 1,width:"40%", minWidth: 300,border:"1px solid black" }}>
        <InputLabel   id="demo-simple-select-standard-label">Personal style</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={handleRegion}
          label="Salutation"
        >


<MenuItem   value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>Classic</MenuItem>
          <MenuItem value={"Mrs."}>Life style</MenuItem>
          <MenuItem value={"Tamil Nadu"}>Sport</MenuItem>
         
        </Select>
      </FormControl><br/>
  </FirstBox>
  <TextBox sx={{textAlign:"left"}}>Communication</TextBox>
  <Detail sx={{textAlign:"left",fontSize:12,paddingTop:3}}>I prefer receive communication from Rado by :</Detail>
  <FormGroup >
<FormControlLabel  required control={<Checkbox />}  label="EMAILS" />
<FormControlLabel  required  control={<Checkbox />} label="SMS" />
<FormControlLabel  required  control={<Checkbox />} label="MAILS" />
</FormGroup>

<TextBox sx={{textAlign:"left"}}>Sign-in Information</TextBox>
<SecondBox>
<OutlinedInput sx={{width:300}} placeholder="Email"/>
<OutlinedInput sx={{width:300}} placeholder="Password"/>
</SecondBox>
<ThirdBox>

<OutlinedInput sx={{width:300}} placeholder="Confirm password"/>

</ThirdBox>
<FourthBox>
  <InnerBox>
<Checkbox
  checked={checked}
  onChange={handleChange1}
  inputProps={{ 'aria-label': 'controlled' }}
/>I want to create an account and accept the Terms of Use. I confirm to have read and understood the Privacy Notice.
</InnerBox>
<br/>
<InnerBox sx={{paddingTop:0}}>
<Checkbox
  checked={checked}
  onChange={handleChange1}
  inputProps={{ 'aria-label': 'controlled' }}
/>I agree that Rado contacts me about Rado products, services, events or offers and consent that Rado processes my personal data for this purpose. I confirm to have read and understood the Privacy Notice and the Cookie notice. I can always unsubscribe by clicking the opt-out link in the communication message. 
</InnerBox>
</FourthBox>
<ButtonBox>

<Button sx={{textTransform:"none",height:60,width:150,background:"black",color:"white",":hover":{background:'black',color:"white"},borderRadius:0}}>Create an Account</Button>
  
</ButtonBox>

<TextBox sx={{textAlign:"left",fontSize:10,paddingTop:5}}>* Mandatory fields</TextBox>
</PersonalInfo>






  </InnerContainer>


</OuterContainer>
  ) 
}

export default Signup;
