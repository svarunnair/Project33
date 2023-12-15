import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'


const OuterContainer=styled(Box)(({theme})=>({
   
  
   
 
 
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


  const InsertImage=styled(Box)(({theme})=>({

    
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

    color:"white",
    position:"absolute",
    bottom:310,
    left:200,
    fontSize:31,

    
 
 
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

    border:"1px solid white",
    color:"white",
    bottom:200,
    right:400,
    borderRadius:"22px",
    width:160,
    height:50,
 
 
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

    border:"3px solid blue",
    bg:"black",
    
 
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


function Welcome() {
  return (
   <OuterContainer>
<ImageBox>
<InsertImage as={"img"} src="https://www.rado.com/media/sgecom_contentsystem/homepage/homepage_banners/centrix-katrina-kaif-india-hero.jpg?im=Resize=(1800,540),aspect=fill"/>
<TextBox>CENTRIX AUTOMATIC DIAMONDS</TextBox>
<ButtonBox>Discover more</ButtonBox>
</ImageBox>

<FirstBox>
    <TextBox>Explore our latest creations</TextBox>
    <TextBox>Rado is known as the Master of Materials: from high-tech ceramic to sapphire crystal and diamonds to stainless steel, our innovative watches have no boundaries when it comes to design. Feel and discover the Rado difference!</TextBox>
</FirstBox>




   </OuterContainer>
  )
}

export default Welcome