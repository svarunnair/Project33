import { Box, styled } from '@mui/material'
import React from 'react'


const OuterBox=styled(Box)(({theme})=>({
border:"1px solid black",
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



    </OuterBox>
  )
}

export default Footer
