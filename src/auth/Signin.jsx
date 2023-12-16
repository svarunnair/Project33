import { Box, Button, Input, Typography, styled } from '@mui/material'
import React from 'react'



const OuterContainer=styled(Box)(({theme})=>({

  border:"1px solid red",
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

const FirstBox=styled(Box)(({theme})=>({

  border:"1px solid green",
  background:"black",
  width:"50%",

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

  border:"1px solid green",
  width:"50%",
  marginTop:100,

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
  height:"100%",
  width:"100%",

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

 border:"1px solid black",
 background:"black",
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

const InnerBox=styled(Box)(({theme})=>({

 display:"flex",
 justifyContent:"center",
 paddingTop:50,
 gap:20,

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

const InputBox=styled(Box)(({theme})=>({

  
 
  display:"grid",
  justifyContent:"center",
  gap:10,
  marginTop:90,
  textAlign:"left",
  
  
 
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


 const OuterDiv=styled(Box)(({theme})=>({

  
  border:"2px solid pink",
  
  
  
 
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


 const ThirdContainer=styled(Box)(({theme})=>({

  
  border:"1px solid red",
  width:"50%",
  height:"200px",
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

function Signin() {
  return (
    <OuterDiv>
    <OuterContainer>

      

      <FirstBox>
        <ImageBox as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/Warranty-Extension/warranty-login-page.jpg?im=Resize=(1800,1175),aspect=fill;Crop=(0,0,1800,1175),gravity=Center"/>

      </FirstBox>
<SecondBox>
<TextBox>Customer Login</TextBox>
<InnerBox>
<ButtonBox>Sign in with Google</ButtonBox>
<ButtonBox>Sign in with Apple</ButtonBox>
</InnerBox>
<InputBox>

<Input sx={{border:"1px solid black"}} placeholder='Email'/>
<Input sx={{border:"1px solid black"}}  placeholder='Password'/>
<Button sx={{border:"1px solid black",bgcolor:'black',color:"white"}}>Sign in</Button>
<TextBox sx={{fontSize:12,}}>Forgot your password?</TextBox>
<TextBox>______________OR______________</TextBox>
<Button sx={{color:'white',bgcolor:"black"}}>Create my account</Button>


</InputBox>



</SecondBox>

      
    </OuterContainer>

<ThirdContainer>

</ThirdContainer>

    </OuterDiv>
  )
}

export default Signin