import { Box, Button, Input, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import { auth,provider } from "./GoogleAuth/FireBase";
import {signInWithPopup} from 'firebase/auth'
import Welcome from "../pages/Welcome";
import { useDispatch } from "react-redux";
import { postAuth } from "../Redux/auth/authAction";


const OuterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  width:"50%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
  // border:"2px solid blue",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  gap: 10,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const AuthBox = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  display: "flex",
  paddingBottom: 10,
  paddingTop: 30,
  gap: 20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataBox = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  padding: 50,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  // border:"2px solid black",
  display: "flex",
  flexDirection: "column",
  gap: 20,
  paddingTop: 20,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ButtonBox = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBoxOr = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBoxTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize: 30,
    textAlign:"center",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


function Signin() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
  const [value,setValue]=useState('')
  const dispatch=useDispatch()

  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handlePassword=(e)=>{
    let value=e.target.value 
    setPassword(value)
  }
  const handleSignup = () => {
    navigate("/signup");
  };

  const handleSignin=()=>{
    let data={
      email:email,
      password:password
    }
dispatch(postAuth(data))
    
  }

  const handleGoogle=()=>{
    signInWithPopup(auth,provider)
    .then((data)=>{
      setValue(data.user.email)
      localStorage.setItem('email',data.user.email)
    })
  }


  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  },[])


  return (
    <OuterContainer>
      <InnerContainer sx={{ background: "black", width: "50%" }}>
        <ImageBox
          as={"img"}
          sx={{ width: "100%" }}
          src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-login-page.jpg?im=Resize=(1800,1175),aspect=fill;Crop=(0,0,1800,1175),gravity=Center"
        />
      </InnerContainer>

      <InnerContainer>
        <DataBox>
          <TextBoxTitle
            sx={{
              fontSize: 45,
              textAlign: "left",
              fontWeight: 400,
              paddingTop: 5,
            }}
          >
            Customer Login
          </TextBoxTitle>

          <AuthBox>
            <Button onClick={handleGoogle}
              sx={{
                color: "white",
                ":hover": { background: "white", color: "black" },
                border: "1px solid black",
                textTransform: "none",
                background: "black",
                width: 300,
                height: 60,
                borderRadius: 0,
              }}
            >
              Signup with Google
            </Button>
           <Button
              sx={{
                color: "white",
                ":hover": { background: "white", color: "black" },
                border: "1px solid black",
                textTransform: "none",
                background: "black",
                width: 300,
                height: 60,
                borderRadius: 0,
              }}
            >
              <AppleIcon />
              Signup with Apple
            </Button>
          </AuthBox>

          <FirstBox>
            <Input onChange={handleEmail}
              sx={{ border: "1px solid black", height: 60 }}
              placeholder="Email"
            />

            <Input onChange={handlePassword}
              sx={{ border: "1px solid black", height: 60 }}
              placeholder="Password"
            />

            <ButtonBox onClick={handleSignin}
              sx={{
                width: 540,
                color: "white",
                textTransform: "none",
                background: "black",
                ":hover": { background: "white", color: "black" },
                border: "1px solid black",
                height: 60,
              }}
            >
              SignIn
            </ButtonBox>
          </FirstBox>
          <TextBox sx={{ textAlign: "left", textDecoration: "underline" }}>
            Forgot your password?
          </TextBox>
          <TextBoxOr sx={{ fontSize: 25, paddingTop: 4, paddingBottom: 4 }}>
            ______________OR_____________
          </TextBoxOr>

          <ButtonBox
            onClick={handleSignup}
            sx={{  
              width: 540,       
              color: "white",
              textTransform: "none",
              background: "black",
              border: "1px solid black",
              ":hover": { background: "white", color: "black" },
              height: 60,
            }}
          >
            Create my account
          </ButtonBox>
        </DataBox>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Signin;
