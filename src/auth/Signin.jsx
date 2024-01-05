import { Box, Button, Input, styled } from '@mui/material';
import React from 'react'


const OuterContainer = styled(Box)(({ theme }) => ({
display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({

// border:"2px solid green",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
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
    gap:10,
    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

    const AuthBox = styled(Box)(({ theme }) => ({

      // border:"2px solid green",
      display:"flex",
      paddingBottom:10,
      paddingTop:30,
      gap:20,
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));


      const DataBox = styled(Box)(({ theme }) => ({

        // border:"2px solid red",
       padding:50,
     
        
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

      
  

        const FirstBox = styled(Box)(({ theme }) => ({

          // border:"2px solid black",
          display:"flex",
          flexDirection:"column",
          gap:20,
          paddingTop:20,
        
          
         
          
            [theme.breakpoints.down("xl")]: {},
            [theme.breakpoints.down("lg")]: {},
            [theme.breakpoints.down("md")]: {},
            [theme.breakpoints.down("sm")]: {},
            [theme.breakpoints.down("xs")]: {},
          }));


       

function Signin() {
  return (
    <OuterContainer>
      <InnerContainer sx={{background:"black",width:"50%"}}>
        <ImageBox as={"img"} sx={{width:"100%"}} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-login-page.jpg?im=Resize=(1800,1175),aspect=fill;Crop=(0,0,1800,1175),gravity=Center" />
      
      </InnerContainer>


      <InnerContainer>
        <DataBox>
    
        <TextBox sx={{fontSize:45,textAlign:"left",fontWeight:400,paddingTop:5}}>Customer Login</TextBox>
  
        <AuthBox>
          <Button sx={{color:"white",":hover":{background:"black"},background:"black",width:300,height:60,borderRadius:0}}>Signup with Google</Button>
          <Button sx={{color:"white",":hover":{background:"black"},background:"black",width:300,height:60,borderRadius:0}}>Signup with Apple</Button>
        </AuthBox>

        <FirstBox>
        <Input  sx={{border:"1px solid black",height:60}} placeholder='Email'/>
       
      
        <Input  sx={{border:"1px solid black",height:60}} placeholder='Password'/>
        
        <Button sx={{width:620,color:"white",background:"black",":hover":{background:"black"},height:60}}>SignIn</Button>
        </FirstBox>
        <TextBox sx={{textAlign:"left",textDecoration:"underline"}}>Forgot your password?</TextBox>
        <TextBox sx={{fontSize:25,paddingTop:4, paddingBottom:4}}>___________________OR___________________</TextBox>

        <Button sx={{width:620,color:"white",background:"black",":hover":{background:"black"},height:60,}} >Create my account</Button>

        </DataBox>
      </InnerContainer>

    </OuterContainer>
  )
}

export default Signin