import { Box, styled } from '@mui/material'
import React from 'react'


const OuterBox=styled(Box)(({theme})=>({
border:"1px solid black",
background:"black",
width:1260,
height:400,
color:"white",
display:"flex",
    [theme.breakpoints.down("xl")]:{
  
    },
    [theme.breakpoints.down("lg")]:{
  
    },
    [theme.breakpoints.down("md")]:{
        
    },
    [theme.breakpoints.down("sm")]:{
        
    },
    [theme.breakpoints.down("xs")]:{
        
    }
  }))

  const InnerBox=styled(Box)(({theme})=>({
    display:"grid",
    color:"white",
        [theme.breakpoints.down("xl")]:{
      
        },
        [theme.breakpoints.down("lg")]:{
      
        },
        [theme.breakpoints.down("md")]:{
            
        },
        [theme.breakpoints.down("sm")]:{
            
        },
        [theme.breakpoints.down("xs")]:{
            
        }
      }))

      const TextBox=styled(Box)(({theme})=>({
       
        color:"grey",
        textAlign:"left",
        padding:"6px",
            [theme.breakpoints.down("xl")]:{
          
            },
            [theme.breakpoints.down("lg")]:{
          
            },
            [theme.breakpoints.down("md")]:{
                
            },
            [theme.breakpoints.down("sm")]:{
                
            },
            [theme.breakpoints.down("xs")]:{
                
            }
          }))

function Footer() {


  return (
    <OuterBox>

      <InnerBox>
      <TextBox sx={{color:"white"}}>Customer Service</TextBox>
     <TextBox > All our services</TextBox>
     <TextBox > Did you know?</TextBox>
     <TextBox > Contact us</TextBox>
     <TextBox > Store Locator</TextBox>

     <TextBox>Consumer Catalogue </TextBox>
      </InnerBox>

      <InnerBox>
      <TextBox sx={{color:"white"}}>Legal & Corporate</TextBox>
     <TextBox > Terms of Use</TextBox>
     <TextBox > Privacy Notice</TextBox>
     <TextBox > Cookies Notice</TextBox>
     <TextBox > Impressum</TextBox>
     <TextBox>Jobs</TextBox>
     <TextBox>Press Room </TextBox>
      </InnerBox>



    </OuterBox>
  )
}

export default Footer
