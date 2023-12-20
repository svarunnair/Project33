import { Box, Typography, styled } from '@mui/material';
import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const OuterContainer = styled(Box)(({ theme }) => ({
  // border:"2px solid blue",
  width: "100%",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const FirstBox = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  width: "100%",
  display:"flex",
  justifyContent:"end",
 background:"black",
  height:30,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const SecondBox = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  width: "100%",
  height:70,
  display:"flex",
  justifyContent:'space-between',
  background:"#28282B",
  color:"white",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({
  // border:"2px solid yellow",
  fontSize:15,
  color:"white", 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize:10,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const BoxOne = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  display:"flex",
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextMenu = styled(Typography)(({ theme }) => ({
  // border:"2px solid yellow",
  fontSize:15,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    fontSize:10,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxTwo = styled(Box)(({ theme }) => ({
  // border:"5px solid green",
  display:"flex",
justifyContent:"center",
width:"90%",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxThree = styled(Box)(({ theme }) => ({
  // border:"2px solid green",
  display:"flex",
  width:"10%",
  gap:15,
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const EmblomBox = styled(Box)(({ theme }) => ({
  // border:"2px solid black",
  display:"flex",
  width:120,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Navbar() {
  return (
    <OuterContainer>

<FirstBox>

<TextBox>Store location<FmdGoodOutlinedIcon/></TextBox>
<TextBox>India/English₹</TextBox>

</FirstBox>

<SecondBox>
  {/* <BoxOne>
    <TextMenu>Men</TextMenu>
    <TextMenu>Women</TextMenu>
    <TextMenu>Ceramic watches</TextMenu>
    <TextMenu>Feel Rado</TextMenu>
    <TextMenu>Services</TextMenu>
  </BoxOne> */}

  <BoxTwo>
    <EmblomBox as={"img"} src="https://www.rado.com/static/version1702032715/frontend/Rado/default/en_GB/images/logo.svg" />

  </BoxTwo>
  
  <BoxThree>
    <SearchOutlinedIcon/>
    <PersonOutlineOutlinedIcon/>

  </BoxThree>

</SecondBox>

    </OuterContainer>
  )
}

export default Navbar