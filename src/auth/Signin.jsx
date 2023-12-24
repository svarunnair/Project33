import { Box, Input, Typography, styled } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { postAuth } from '../Redux/auth/authAction';



const OuterContainer = styled(Box)(({ theme }) => ({
  border: "4px solid black",
  display:"flex",
  width:"100%",
  height:"100%",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"50%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  
  width:"100%",
  height:"80%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  border: "2px solid red",
  width:"50%",
  height:"100%",
  display:"flex",
  flexDirection:"column",
  justifyContent:'center',
  gap:40,
  

  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageDiv = styled(Box)(({ theme }) => ({
  border: "2px solid green",
display:"flex",
background:"black",
width:"50%",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%"
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DetailBox = styled(Box)(({ theme }) => ({
  border: "2px solid green",
  textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  border: "2px solid yellow",
  display:"flex",
  justifyContent:"center",
  gap:10,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));



const AuthButton = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  background:"black",
  color:"white",
  height:40,
  
  width:200,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"80%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))
const TextAuth = styled(Typography)(({ theme }) => ({
  fontSize:12,
  textAlign:"left",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))

const TextOne = styled(Typography)(({ theme }) => ({

  fontSize:18,
  textAlign:"center",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize:12,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))


const AuthButtonOne = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  background:"black",
  color:"white",
  height:40,
  width:400,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"80%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}))




function Signin() {
const dispatch = useDispatch()

const handleSignin = ()=>{
let data = {
  email:"varun2@gmail.com",
  password:"1234"
}

  dispatch(postAuth(data))
}


  return (
    <OuterContainer>

<ImageDiv>
      <ImageBox as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-login-page.jpg?im=Resize=(1800,1175),aspect=fill;Crop=(0,0,1800,1175),gravity=Center"/>

      </ImageDiv>

      <FirstBox>

        <DetailBox>Customer Login</DetailBox>

        <ButtonBox>
<AuthButton>Signn in with Google</AuthButton>
<AuthButton>Signn in with Apple</AuthButton>
        </ButtonBox>
        <Input placeholder='Email'/>
        <Input placeholder='Password'/>

        
       
        <AuthButtonOne onClick={handleSignin}>Sign In</AuthButtonOne>
        <TextAuth>Forgoten password?</TextAuth>

        <TextOne>_______________________OR_______________________</TextOne>

        <AuthButtonOne>Create my account</AuthButtonOne>
       

      </FirstBox>

    </OuterContainer>
  )
}

export default Signin