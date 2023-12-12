import { Box, Button, Input, Typography, styled } from '@mui/material'
import React from 'react'
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from 'react-router-dom';


const OuterBox=styled(Box)(({theme})=>({

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

const TextBox=styled(Typography)(({theme})=>({

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
  const navigate=useNavigate()

  const handleAccount=()=>{
    navigate('/signup')
  }
  return (
    <OuterBox sx={{display:"flex"}}>

    <InnerBox>
      <ImageBox sx={{marginRight:70.3}} width={700} height={500} as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-login-page.jpg?im=Resize=(1800,1175),aspect=fill;Crop=(0,0,1800,1175),gravity=Center"/>
      </InnerBox>

      <InnerBox >
        <TextBox sx={{marginLeft:-100,marginTop:10,fontSize:32}}>Customer Login</TextBox>
        <InnerBox sx={{display:'flex',marginLeft:-63,gap:2,marginTop:6}}>
        <ButtonBox sx={{bgcolor:'black',color:'white',border:"1px solid black",height:50,width:230,borderRadius:"0px"}}>Sign in with Google</ButtonBox>
        <ButtonBox sx={{bgcolor:'black',color:'white',border:"1px solid black",height:50,width:230,borderRadius:"0px"}}><AppleIcon fontSize='12'/>Sign in with Apple</ButtonBox>
        </InnerBox>
        <InnerBox sx={{marginLeft:-63,marginTop:1,display:"grid"}}>

          <Input sx={{width:500,marginTop:3,border:"1px solid black",height:50,borderRadius:"8px"}} placeholder='Email'/>
          <Input sx={{width:500,marginTop:3,border:"1px solid black",height:50,borderRadius:"8px"}} placeholder='Password'/>
          <Button sx={{width:500,marginTop:3,border:"1px solid black",height:50,bgcolor:'black',color:'white'}}>Signin In</Button>
          <TextBox sx={{marginLeft:-48,fontSize:11,marginTop:.5,textDecoration:"underline",cursor:'pointer'}}>Forgot Your Password?</TextBox>
        
        <TextBox sx={{fontWeight:900}}>___________  OR  ___________</TextBox>
        <Button onClick={handleAccount} sx={{width:500,marginTop:3,border:"1px solid black",height:50,bgcolor:'black',color:'white'}}>Create my account</Button>
        <InnerBox sx={{bgcolor:'black',width:717,height:150,marginLeft:-97, marginTop:-9.4}}></InnerBox>
        </InnerBox>
      </InnerBox>
      
    </OuterBox>
  )
}

export default Signin