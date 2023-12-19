import { Box, Button, styled } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from "@mui/icons-material/Close";
import CookieOutlinedIcon from "@mui/icons-material/CookieOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";


const OuterContainer = styled(Box)(({ theme }) => ({
    border: "3px solid green",
    display:"flex",
    height:550,

    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ButtonBox = styled(Box)(({ theme }) => ({
    border: "2px solid red",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const MenuBox = styled(Box)(({ theme }) => ({
    border: "2px solid red",
   
    justifyContent:"end",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const FirstBox = styled(Box)(({ theme }) => ({
    border: "2px solid blue",
    display:"flex",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const EmblomBox = styled(Box)(({ theme }) => ({
    border: "2px solid black",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    border: "2px solid black",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetail = styled(Box)(({ theme }) => ({
    border: "2px solid black",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  const AllowButton = styled(Button)(({ theme }) => ({
    border: "2px solid black",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Permision() {

    const [show,setShow]=useState(true)


    const handleButton=()=>{
        if(show===false){
            setShow(true)
        }
        if(show===true){
            setShow(false)
        }
    }

    const handleCross=()=>{
        setShow(false)
    }
  return (
    <OuterContainer>

<ButtonBox onClick={handleButton}>
    <CookieOutlinedIcon/>

</ButtonBox>




{show?<MenuBox>
        <FirstBox>
          <EmblomBox
            as={"img"}
            src="https://cdn.cookielaw.org/logos/76435ae0-f2a1-41c1-8868-ac47219a9680/e9af4751-5cf7-4df1-9b48-10b8e4056c6e/be7b8de6-f22d-4303-9755-2869fc440d3e/Rado_logo_for_cookie_banner_final.png"
          />
          <IconBox onClick={handleCross} >
            <CloseIcon />
          </IconBox>
        </FirstBox>

        <TextDetail> Privacy Preference Center</TextDetail>
        <TextDetail> </TextDetail>
        <AllowButton>Allow All</AllowButton>
      </MenuBox>:""}






    </OuterContainer>
  )
}

export default Permision