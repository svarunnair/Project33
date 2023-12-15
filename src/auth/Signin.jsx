import { Box, Button, Input, styled } from '@mui/material'
import React from 'react'

const OuterContainer=styled(Box)(({theme})=>({

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

      width:"55%",
      
  
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
    
      border:"2px solid blue",
      width:"100%",
      textAlign:"center",
      justifyContent:"center",
      justifyItems:"center",
      
  
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
    
     
      fontWeight:400,
      
  
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

    const FirstBox=styled(Box)(({theme})=>({
    
      border:"1px solid black",
      display:"flex",
      justifyItems:"center",
      justifyContent:"center",
      padding:10,
   
      
  
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


    const ButtonBox=styled(Button)(({theme})=>({
    
      border:"1px solid red",
      padding:10,
      
  
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

    const SecondBox=styled(Box)(({theme})=>({
    
      border:"1px solid yellow",
      display:"grid",
      padding:10,
      
     
      justifyItems:"center",
      
  
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


    const InitialDiv=styled(Box)(({theme})=>({
    
    
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
function Signin() {
  return (
    <OuterContainer>

     
      <ImageBox as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-login-page.jpg?im=Resize=(1800,1175),aspect=fill;Crop=(0,0,1800,1175),gravity=Center"/>
 
    
<InnerContainer>

  <TextBox>Customer Login</TextBox>
  <FirstBox>
  <ButtonBox sx={{bgcolor:'black',color:'white'}}>Sign in with Google</ButtonBox>
  <ButtonBox  sx={{bgcolor:'black',color:'white'}}>Sign in with Apple</ButtonBox>
  </FirstBox>
  <SecondBox>
    <Input sx={{border:"1px solid black",width:"75%"}} placeholder='Email'/>
    <Input sx={{border:"1px solid black",width:"75%"}} placeholder='Password'/>
    <Button sx={{border:"1px solid black",width:"75%"}}>Signin</Button>
    <TextBox >___________________OR___________________</TextBox>
    <Button sx={{border:"1px solid black",width:"75%"}}>Create my account</Button>
  </SecondBox>


</InnerContainer>


    </OuterContainer>
  )
}

export default Signin