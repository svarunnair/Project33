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
      paddingBottom:30,
      paddingTop:30,
      gap:20,
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));


      const DataBox = styled(Box)(({ theme }) => ({

        border:"2px solid red",
       padding:50,
     
        
          [theme.breakpoints.down("xl")]: {},
          [theme.breakpoints.down("lg")]: {},
          [theme.breakpoints.down("md")]: {},
          [theme.breakpoints.down("sm")]: {},
          [theme.breakpoints.down("xs")]: {},
        }));

      
  

        const FirstBox = styled(Box)(({ theme }) => ({

          border:"2px solid black",
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
    
        <TextBox sx={{fontSize:30,textAlign:"left",fontWeight:400}}>Customer Login</TextBox>
  
        <AuthBox>
          <Button sx={{color:"white",":hover":{background:"black"},background:"black",width:250,height:50,borderRadius:0}}>Signup with Google</Button>
          <Button sx={{color:"white",":hover":{background:"black"},background:"black",width:250,height:50,borderRadius:0}}>Signup with Apple</Button>
        </AuthBox>

        <FirstBox>
        <Input placeholder='Email'/>
        </FirstBox>
        <FirstBox>
        <Input placeholder='Password'/>
        </FirstBox>
        <Button sx={{width:520,color:"white",background:"black",":hover":{background:"black"}}}>SignIn</Button>
       

        </DataBox>
      </InnerContainer>

    </OuterContainer>
  )
}

export default Signin