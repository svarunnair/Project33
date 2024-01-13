import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, OutlinedInput, Select, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteInfo, getInfo } from '../Redux/data/action'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({
  // border:'2px solid red',
  display:'flex',
  justifyContent:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const InnerContainer = styled(Box)(({ theme }) => ({
  // border:'2px solid red',
  width:"80%",
  paddingBottom:100,
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TitleText = styled(Typography)(({ theme }) => ({
  // border:'2px solid red',
  fontSize:30,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Container = styled(Box)(({ theme }) => ({
  // border:'2px solid black',
display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const FirstBox = styled(Box)(({ theme }) => ({
  // border:'2px solid green',
  width:"75%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SecondBox = styled(Box)(({ theme }) => ({
  // border:'2px solid yellow',
  width:"25%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const Discription = styled(Typography)(({ theme }) => ({
 
  fontSize:15,
  textAlign:"left",
  paddingTop:60,
  paddingBottom:60,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const FirstInputBox = styled(Box)(({ theme }) => ({
 
  // border:"2px solid grey",
  display:"flex",
  flexDirection:"column",
  gap:10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SecondInputBox = styled(Box)(({ theme }) => ({
  display:"flex",
  gap:220,

 
  // border:"2px solid grey",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    gap:10,
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ThirdInputBox = styled(Box)(({ theme }) => ({
 width:"100%",
  // border:"2px solid grey",
  gap:10,
  display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const FourthInputBox = styled(Box)(({ theme }) => ({
  display:"flex",
  // border:"2px solid grey",
  gap:220,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    flexDirection:"column",
    gap:10,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const CheckBoxDiv = styled(Box)(({ theme }) => ({
  width:"80%",
  // border:"2px solid blue",
  paddingTop:70,
  paddingBottom:70,
  textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const MapData = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const ImageBox = styled(Box)(({ theme }) => ({
 width:"70%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const MapText = styled(Typography)(({ theme }) => ({
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const BarierDiv = styled(Box)(({ theme }) => ({
//  border:"2px solid red",
 paddingBottom:10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const SalutationDiv = styled(Box)(({ theme }) => ({
  //  border:"2px solid red",
   display:"flex",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

const CrossDiv = styled(Box)(({ theme }) => ({
//  border:'2px solid red',
 display:"flex",
 justifyContent:'end',
 background:"white",
 position:"sticky",
 top:0,
 cursor:"pointer",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))



function Info() {

  const infoData=useSelector((store)=>store.data.getInfo)
  const dispatch=useDispatch()
  const [salutation,setSalutation]=useState("")
  const navigate=useNavigate()

 const dataId=infoData.map((item)=>{return item.id})

 console.log("idddd",dataId)


  const handleChange=(e)=>{
    let value=e.target.value 
    setSalutation(value)
  }
  const handleClose=()=>{
  dispatch(deleteInfo(dataId))
    navigate(-1)
  }


  console.log("inFo",infoData)


  useEffect(()=>{
    dispatch(getInfo())
  },[])

  return (
    <OuterContainer>

      <InnerContainer>

        <CrossDiv><CloseIcon onClick={handleClose}/></CrossDiv>

        <TitleText>Please enter your contact details</TitleText>

        <Container>

          <FirstBox>
            <Discription>
            Please enter your contact details
Complete your details and one of our associates will contact you about viewing your selected time piece. No prepayment is required for the reservation and there is no obligation to purchase the reserved watch.
            </Discription>

          <BarierDiv sx={{paddingBottom:6,}}>
            <FirstInputBox>


<SalutationDiv>

            <FormControl variant="standard" sx={{ m: 1,width:290 ,textAlign:"left",border:"1px solid black" }}>
        <InputLabel  id="demo-simple-select-standard-label">Salutation</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={salutation}
          onChange={handleChange}
          label="Salutation"
        >


<MenuItem  value="">
           
          </MenuItem>
          <MenuItem value={"Mr."}>Mr.</MenuItem>
          <MenuItem value={"Mrs."}>Mrs.</MenuItem>
         
        </Select>
      </FormControl><br/>
      </SalutationDiv>      
             
              <OutlinedInput sx={{width:"40%"}} placeholder='First Name'/>
              <OutlinedInput sx={{width:"40%"}} placeholder='Last Name'/>
            </FirstInputBox>
            </BarierDiv>

            <BarierDiv>
            <SecondInputBox>
            <OutlinedInput placeholder='Email'/>
            <OutlinedInput placeholder='Telephone'/>
            </SecondInputBox>
            </BarierDiv>

            <BarierDiv>
            <ThirdInputBox>
            <OutlinedInput sx={{width:"88%"}} placeholder='Address'/>
            </ThirdInputBox>
            </BarierDiv>
            <FourthInputBox>
            <OutlinedInput placeholder='Postcode'/>
            <OutlinedInput placeholder='City'/>
            </FourthInputBox>


         <CheckBoxDiv>
            <FormControlLabel control={<Checkbox defaultChecked />} label="I consent to my request to being processed by the selected boutique and Rado Watch Co. Ltd for the purpose of contacting me, and I confirm that I have read and understood the privacy policy." />
            <FormControlLabel control={<Checkbox defaultChecked />} label="I consent to my request to being processed by the selected boutique and Rado Watch Co. Ltd for the purpose of contacting me, and I confirm that I have read and understood the privacy policy." />
            </CheckBoxDiv>

            <Button sx={{color:'white',background:"black",display:"flex"}}>Reserve Now</Button>

          </FirstBox>


          <SecondBox>

            {infoData.map((item)=>(
              <MapData>
                <ImageBox as={"img"} src={item.images[0]}/>
                <MapText sx={{fontSize:10,}}>{item.name}</MapText>
                <MapText sx={{fontSize:10,}}>{item.price}</MapText>
                <MapText sx={{fontSize:10,color:"grey"}}>{item.description}</MapText>
              </MapData>
            ))}

          </SecondBox>


        </Container>


      </InnerContainer>


    </OuterContainer>
  )
}

export default Info