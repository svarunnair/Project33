import { Box, Button, Input, Typography, styled } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import PublicRoutes from '../Routes/PublicRoutes'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
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

   width:1260,
   height:35,
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

  width:1260,
  height:70,
  background:"#020205",
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










function Navbar() {
  const navigate=useNavigate()
  const path=useLocation()




//   const SearchButton = () => {
//   return (
//     <IconButton color="inherit" aria-label="search">
//       <SearchIcon />
//     </IconButton>
//   );
// };




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

       

    <OuterConteiner  display={"flex"}>
      <BoxData sx={{marginLeft:121, fontSize:12}}>Store Locator<RoomIcon fontSize='small'/></BoxData>
      <Text sx={{ fontSize:12}} >India / English<CurrencyRupeeIcon fontSize='small'/></Text>
    
      
      
    </OuterConteiner>
    <InnerContainer sx={{cursor:'pointer'}} color={"white"}>
      <Text marginLeft={3} marginTop={3}>Men</Text>
      <Text marginTop={3} marginLeft={-18}>Women</Text>
      <Text marginTop={3} marginLeft={-16}>Ceramic Watches</Text>
      <Text marginTop={3} marginLeft={-8}>Feel Rado</Text>
      <Text marginTop={3} marginLeft={-12}>Services</Text>
      
      
        
    <ImageBox  onClick={handleImage} sx={{cursor:'pointer',marginTop:0,marginRight:15,height:65}} as="img" src="https://timeandtidewatches.com/wp-content/uploads/logos/Rado-Partner.jpg" />
    {/* <svg data-testid="SearchIcon"></svg> */}
{/* <Input sx={{border:"1px solid white",height:30 ,width:200,color:"white", marginRight:30}} placeholder='search'/> */}
<ButtonAuth sx={{marginLeft:40}} onClick={handleSearch} ><SearchIcon/></ButtonAuth>
    <ButtonAuth onClick={handleAuth} ><PermIdentityIcon/></ButtonAuth>
      </InnerContainer>

    
    
      <PublicRoutes/>
      {path.pathname!=="/search"&&<Footer/>}
     
    </OuterDiv>
    
  )
}

export default Navbar