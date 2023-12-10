import { Box, Typography, styled } from '@mui/material'
import React from 'react'



const OuterDiv=styled(Box)(({theme})=>({
  border:"1px solid yellow",
  

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

const OuterConteiner=styled(Box)(({theme})=>({

   width:1260,
   height:35,
   background:"#92a8d1",
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

const InnerContainer=styled(Box)(({theme})=>({
  border:"1px solid blue",
  width:1260,
  height:70,
  background:"black",
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

const ImageBox=styled(Box)(({theme})=>({
  border:"1px solid blue",
  width:130,
  height:50,
  background:"black",
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

const Text=styled(Typography)(({theme})=>({
  textAlign:"left",
  width:200,
 
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










function Navbar() {

  return (
    <OuterDiv >
    <OuterConteiner sx={{border:"1px solid red", }} >
    
    </OuterConteiner>
    <InnerContainer color={"white"}>
      <Text>Men</Text>
      <Text >Women</Text>
      <Text>Ceramic Watches</Text>
      <Text>Feel Rado</Text>
      <Text>Services</Text>
      
      
        
    <ImageBox sx={{}} as="img" src="https://timeandtidewatches.com/wp-content/uploads/logos/Rado-Partner.jpg" />
      </InnerContainer>
    </OuterDiv>
  )
}

export default Navbar