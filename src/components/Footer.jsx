import { Box, Button, Input, Tooltip, styled } from "@mui/material";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';


const OuterBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  background: "black",
gap:10,
  color: "white",
  display: "flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerBox = styled(Box)(({ theme }) => ({
  display: "grid",
  color: "white",
  // border: "1px solid yellow",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Box)(({ theme }) => ({
  // border: "1px solid yellow",
  color: "grey",
  textAlign: "left",
  padding: "6px",
  fontSize: 12,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const IconBox = styled(Box)(({ theme }) => ({
  // border:"1px solid red",
  height:30,
  display:"flex",
  gap:10,
  paddingTop:20,
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerBoxIcon = styled(Box)(({ theme }) => ({
  // border:"1px solid red",
  paddingLeft:345,
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    paddingLeft:0,
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataBox = styled(Box)(({ theme }) => ({
  // border:"1px solid red",
  paddingLeft: 227,
  paddingTop:20,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


function Footer() {
  return (
    <OuterBox>
      <InnerBox>
        <TextBox sx={{ color: "white", fontSize: 15 }}>
          Customer Service
        </TextBox>
        <TextBox> All our services</TextBox>
        <TextBox> Did you know?</TextBox>
        <TextBox> Contact us</TextBox>
        <TextBox> Store Locator</TextBox>

        <TextBox>Consumer Catalogue </TextBox>
      </InnerBox>

      <InnerBox >
        <TextBox sx={{ color: "white", fontSize: 15 }}>
          Legal & Corporate
        </TextBox>
        <TextBox> Terms of Use</TextBox>
        <TextBox> Privacy Notice</TextBox>
        <TextBox> Cookies Notice</TextBox>
        <TextBox> Impressum</TextBox>
        <TextBox>Jobs</TextBox>
        <TextBox>Press Room </TextBox>
      </InnerBox>

      <InnerBoxIcon >
        <TextBox sx={{ fontSize: 15, color: "white" }}>Follow us </TextBox>
        <IconBox sx={{cursor:"pointer"}}>
         <Tooltip title="Facebook"> <FacebookIcon/></Tooltip>
         <Tooltip title="Instagram">  <InstagramIcon/></Tooltip>
         <Tooltip title="Pibterest">  <PinterestIcon/></Tooltip>
         
        
        </IconBox>
        <IconBox sx={{cursor:"pointer"}}>
        <Tooltip title="Tictok"> <AudiotrackIcon/></Tooltip>
        </IconBox>
      </InnerBoxIcon>

      <DataBox >
        <TextBox sx={{color:"white",fontSize: 15}}>Newsletter</TextBox>
        <Input  sx={{color:"white"}} placeholder="Enter you address"/><br/>
        <Button sx={{color:"black",background:"white",":hover":{color:"black",background:"white"},width:250,height:40,borderRadius:20}}>SubScribe</Button>
      </DataBox>
    </OuterBox>
  );
}

export default Footer;
