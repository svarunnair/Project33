import { Box, Button, Input, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Footer from './Footer'
import PublicRoutes from '../Routes/PublicRoutes'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { AccessAlarm, Balcony, ThreeDRotation } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import RoomIcon from '@mui/icons-material/Room';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const OuterDiv=styled(Box)(({theme})=>({
 
  

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
  
   width:"100%",
   display:'flex',
   flexDirection:'column',
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

const InnerContainer=styled(Box)(({theme})=>({


  
  background:"black",
  display:"flex",
  justifyContent:'space-between',
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

const BoxData=styled(Box)(({theme})=>({
 
 
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

const ButtonAuth=styled(Button)(({theme})=>({
 
 
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

const MenuBox=styled(Box)(({theme})=>({
 
 
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
  const navigate=useNavigate()
  const path=useLocation()
  const [hover,setHover]=useState(false)
  const [women,setWomen]=useState(false)




  const handleImage=()=>{
    navigate('/home')
  }
  const handleAuth=()=>{
    navigate('/signin')
  }
const handleSearch=()=>{
  navigate('/search')
}
  return (
    <OuterDiv >

       
<OuterConteiner  position={"sticky"}  top={0} zIndex="1000" >
    <Box sx={{display:"flex",justifyContent:"end",gap:"10px"}} >
     <Box sx={{display:'flex',width:"110px"}}> <Text >Store Locator</Text><RoomIcon fontSize='small'/></Box>
      <Box sx={{display:'flex',width:"120px"}}><Text  >India / English</Text><CurrencyRupeeIcon fontSize='small'/></Box>
    </Box>


   


    <InnerContainer  >
      <Box sx={{display:"flex", gap:'15px'}}>
      <Text  onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} marginLeft={3} marginTop={3}>Men</Text>
      <Text onMouseEnter={()=>setWomen(true)} onMouseLeave={()=>setWomen(false)} marginTop={3} >Women</Text>
      <Text marginTop={3}>Ceramic Watches</Text>
      <Text marginTop={3} >Feel Rado</Text>
      <Text marginTop={3} >Services</Text>
      </Box>  
        
    <ImageBox  onClick={handleImage} sx={{cursor:'pointer',marginTop:0,marginRight:15,height:65}} as="img" src="https://timeandtidewatches.com/wp-content/uploads/logos/Rado-Partner.jpg" />
 <Box >
<ButtonAuth onClick={handleSearch} ><SearchIcon/></ButtonAuth>
<ButtonAuth onClick={handleAuth} ><PermIdentityIcon/></ButtonAuth>
</Box>
      </InnerContainer>





      </OuterConteiner>
    
    {hover?<MenuBox onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} sx={{width:"100%",height:500,position:"sticky",marginTop:8,display:'flex',color:'white',bgcolor:'black'}}> 
    <Text><Text  sx={{color:'grey',fontSize:30,marginTop:3}} >Discover</Text>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>Gift Ideas</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>Special Edition</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>Favourite</MenuBox>
    </Text>
    <Text><Text  sx={{color:'grey',fontSize:30,marginTop:3}} >Our Selections</Text>
    <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      </Text>
    <Text><Text  sx={{color:'grey',fontSize:30,marginTop:3}} >Collections</Text>
    <MenuBox >New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
    </Text>
    <MenuBox sx={{marginTop:8}}>See all colections</MenuBox>
    </MenuBox>:""}



   {women?<MenuBox onMouseEnter={()=>setWomen(true)} onMouseLeave={()=>setWomen(false)} sx={{width:"100%",height:500,position:"sticky",marginTop:8,display:'flex',color:'white',bgcolor:'grey'}}> 
    <Text><Text  sx={{color:'grey',fontSize:30,marginTop:3}} >Discover</Text>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>Gift Ideas</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>Special Edition</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>Favourite</MenuBox>
    </Text>
    <Text><Text  sx={{color:'grey',fontSize:30,marginTop:3}} >Our Selections</Text>
    <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      </Text>
    <Text><Text  sx={{color:'grey',fontSize:30,marginTop:3}} >Collections</Text>
    <MenuBox >New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
      <MenuBox sx={{color:"white",fontSize:16}}>New arraivals</MenuBox>
    </Text>
    <MenuBox sx={{marginTop:8}}>See all colections</MenuBox>
    </MenuBox>:""}


  
    
      <PublicRoutes/>
      {path.pathname!=="/search"||path.pathname!=="/info"&&<Footer/>}
     <Footer/>
    </OuterDiv>
    
  )
}

export default Navbar