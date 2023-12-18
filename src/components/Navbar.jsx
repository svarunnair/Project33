import { Box, Typography, styled } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Welcome from "../pages/Welcome";

const OuterBox = styled(Box)(({ theme }) => ({
  border:"1px solid red", 
  width: "100%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  border:"1px solid green", 
  width:'100%',
  height: 30,
  background: "black",
  display: "flex",
  justifyContent: "end",
  gap: 10,
 

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SecondBox = styled(Box)(({ theme }) => ({
  border:"2px solid yellow", 
  width:'100%',
  height: 70,
  background: "#181818",
  display: "flex",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: 15,
  border:"1px solid red",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SecondText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: 15,
  border:"1px solid red",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const CategoryBox = styled(Box)(({ theme }) => ({
 
  border:"2px solid white",
  fontSize: 15,
  display: "flex",
  gap:30,
  paddingLeft:15,
  paddingTop:20,
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const EmblomBox = styled(Box)(({ theme }) => ({
 border:"2px solid green",

  display: "flex",
  justifyContent:"center",
 


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SearchBox = styled(Box)(({ theme }) => ({
  border:"1px solid red",
  color:"white",

  display: "flex",
 
  gap:20,
  paddingTop:20,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageEmblom = styled(Box)(({ theme }) => ({
  width:120,
  border:"1px solid red",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar() {
  return (
    <OuterBox>
      <FirstBox>
        <TextBox>
          Store location
          <LocationOnIcon />
        </TextBox>
        <TextBox>
          India/English
          <CurrencyRupeeIcon />
        </TextBox>
      </FirstBox>
      <SecondBox>
         <CategoryBox>
          <SecondText>Men</SecondText>
          <SecondText>Women</SecondText>
          <SecondText>Ceramic Watches</SecondText>
          <SecondText>Feel Rado</SecondText>
          <SecondText>Services</SecondText>
        </CategoryBox>

        <EmblomBox>
          <ImageEmblom
            as={"img"}
            src="https://www.rado.com/static/version1702032715/frontend/Rado/default/en_GB/images/logo.svg"/>
        </EmblomBox>

        <SearchBox>
<SearchOutlinedIcon/>
<PersonOutlineOutlinedIcon/>

        </SearchBox> 
      </SecondBox>


{/* <Welcome/> */}
    </OuterBox>
  );
}

export default Navbar;
