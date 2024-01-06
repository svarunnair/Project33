// import { Box, Typography, styled, useMediaQuery } from '@mui/material';
// import React, { useState } from 'react'
// import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import { useTheme } from '@emotion/react';
// import PublicRoutes from '../Routes/PublicRoutes';
// import MenuIcon from '@mui/icons-material/Menu';

// const OuterContainer = styled(Box)(({ theme }) => ({
//   // border:"2px solid blue",
//   width: "100%",
  
 
  
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {},
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));

// const FirstBox = styled(Box)(({ theme }) => ({
//   border:"2px solid red",
//   width: "100%",
//   display:"flex",
//   background:"black",
//   justifyContent:"end",
//   height:30,
//   position:"sticky" ,
//   top:0,
//    zIndex:"1000" ,
// paddingRight:'10px',
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {},
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));

// const SecondBox = styled(Box)(({ theme }) => ({
//   // border:"2px solid green",
//   position:"sticky" ,
//   top:30,
//    zIndex:"1000" ,
//   width: "100%",
//   height:70,
//   display:"flex",
//   justifyContent:'space-between',
//   background:"#161616",
//   color:"white",
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {
   
//   },
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));

// const TextBox = styled(Typography)(({ theme }) => ({
//   border:"2px solid yellow",
//   fontSize:15,
//   color:"white",
//   paddingLeft:10,
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {
//     fontSize:10,
//   },
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));
// const BoxOne = styled(Box)(({ theme }) => ({
//   // border:"2px solid red",
//   display:"flex",
//   width:"100%",
//   justifyContent:"space-between",
  

 
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {},
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));
// const TextMenu = styled(Typography)(({ theme }) => ({
//   // border:"2px solid yellow",
//   fontSize:15,
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {
//     fontSize:10,
//   },
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));

// const BoxTwo = styled(Box)(({ theme }) => ({

//   width:"100%",
//  display:"flex",

//  justifyContent:"center",
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {
//     justifyContent:"end",
//   },
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));

// const BoxThree = styled(Box)(({ theme }) => ({
//   // border:"2px solid red",
//   display:"flex",
//   width:"100%",
//   gap:25,
//   justifyContent:"end",
  

  
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {
  
//   },
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));

// const EmblomBox = styled(Box)(({ theme }) => ({
//   border:"2px solid white",
//   display:"flex",
//   width:"25%",
//   height:"100%",

  
  
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {},
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));


// const Menu = styled(Box)(({ theme }) => ({
//   // border:"2px solid black",
//   display:"flex",
 

  
  
//   [theme.breakpoints.down("xl")]: {},
//   [theme.breakpoints.down("lg")]: {},
//   [theme.breakpoints.down("md")]: {},
//   [theme.breakpoints.down("sm")]: {},
//   [theme.breakpoints.down("xs")]: {},
// }));
// function Navbar() {

// const [show,setShow]=useState(false)
// const theme=useTheme()
// const isMatch=useMediaQuery(theme.breakpoints.down("sm"))


// const handleMenu=()=>{

// }



//   return (
//     <OuterContainer>

// <FirstBox>

// <TextBox>Store location<FmdGoodOutlinedIcon/></TextBox>
// <TextBox>India/English₹</TextBox>

// </FirstBox>

// <SecondBox>

//   {isMatch&&<Menu onClick={handleMenu}><MenuIcon/></Menu>}
  
//  {!isMatch&&<BoxOne>
//     <TextMenu>Men</TextMenu>
//     <TextMenu>Women</TextMenu>
//     <TextMenu>Ceramic watches</TextMenu>
//     <TextMenu>Feel Rado</TextMenu>
//     <TextMenu>Services</TextMenu>
//   </BoxOne>}

//   <BoxTwo>
//     <EmblomBox as={"img"} src="https://www.rado.com/static/version1702032715/frontend/Rado/default/en_GB/images/logo.svg" />

//   </BoxTwo>
  
//   <BoxThree>
//     <SearchOutlinedIcon/>
//     <PersonOutlineOutlinedIcon/>

//   </BoxThree>

// </SecondBox>


// <PublicRoutes/>
//     </OuterContainer>
//   )
// }

// export default Navbar