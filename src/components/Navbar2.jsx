import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Image } from '@mui/icons-material';
import { Input, styled } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import PublicRoutes from '../Routes/PublicRoutes';
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const ImageBox = styled(Box)(({ theme }) => ({

  // border:"2px solid red",

  display:'flex',
 paddingRight:200,
 paddingLeft:100,
 


 
  [theme.breakpoints.down("xl")]: {
    
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft:450,
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft:0,
  width:"35%",


  

  },
  [theme.breakpoints.down("sm")]: {
    paddingRight:10,
    width:"40%",
    paddingTop:20,
  },
  [theme.breakpoints.down("xs")]: {},
}));


const TextBox = styled(Box)(({ theme }) => ({

  // border:"2px solid blue",
  display:"flex",
  width:"100%",
  

 
  [theme.breakpoints.down("xl")]: {

  },
  [theme.breakpoints.down("lg")]: {
    display:"none",
  },
  [theme.breakpoints.down("md")]: {
    display:"none",
  },
  [theme.breakpoints.down("sm")]: {
    display:"none",
  },
  [theme.breakpoints.down("xs")]: {},
}));


const BoxThree = styled(Box)(({ theme }) => ({

  // border:"2px solid black",
  display:"flex",
  gap:30,
  
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {
    paddingRight:0,
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft:0,
  },
  [theme.breakpoints.down("sm")]: {
    
    width:"40%",
    gap:35,
    paddingTop:20,
    flexDirection:'row-reverse',
  },
  [theme.breakpoints.down("xs")]: {},
}));

const Text = styled(Typography)(({ theme }) => ({
  fontFamily:"sans-serif",
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));


const TextOne = styled(Typography)(({ theme }) => ({
 fontSize:15,
 fontFamily:"sans-serif",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const BoxTop = styled(Box)(({ theme }) => ({
display:"flex",
// border:"4px solid yellow",
gap:10,
fontFamily:"sans-serif",
width:"100%",
justifyContent:"end",


   [theme.breakpoints.down("xl")]: {
    paddingLeft:0,

   },
   [theme.breakpoints.down("lg")]: {
    // border:"4px solid green",
   },
   [theme.breakpoints.down("md")]: {
    
   },
   [theme.breakpoints.down("sm")]: {
    display:"none"
   },
   [theme.breakpoints.down("xs")]: {},
 }));


 const BoxBottom = styled(Box)(({ theme }) => ({

  // border:"2px solid red" ,
  width:"100%",



  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    
  },
  [theme.breakpoints.down("sm")]: {
    // border:"5px solid green" ,
    display:"flex",
    
  },
  [theme.breakpoints.down("xs")]: {},
}));


const BoxOne = styled(Box)(({ theme }) => ({
 
  width:"100%",
  gap:20, 
  // border:'5px solid white', 
  flexGrow: 1, 
  display: 'flex', 
  justifyContent:'space-between',

  height:50,


  [theme.breakpoints.down("xl")]: {
    paddingLeft:80,
  },
  [theme.breakpoints.down("lg")]: {
    paddingLeft:0,
  },
  [theme.breakpoints.down("md")]: {
  // border:'5px solid yellow', 
  width:"100%",
  // gap:20,
  

  

  },
  [theme.breakpoints.down("sm")]: {
    // border:"5px solid green" ,
    display:"flex",
   

  },
  [theme.breakpoints.down("xs")]: {},
}));



const Outer = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 1000, // Set a higher z-index value if needed
  width: '100%',

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    background: "black",
    height: 70,
    display: "flex",
  },
  [theme.breakpoints.down("xs")]: {},
}));
function Navbar2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate=useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleRado=()=>{
    navigate('/')
  }
  const handleSearch=()=>{
    navigate("/search")
  }
  const handleAccount=()=>{
    navigate('signin')
  }

  return (
    <>
    <Outer  sx={{bgcolor:'black', height:'110px', 
    background: `linear-gradient(to top, rgb(20,20,20) 60%, black 35%)`,}} >
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}




          <Box sx={{display:'flex', flexDirection:'column',justifyContent:"end"}}>
        


          <BoxTop >
         

          <TextOne
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'flex'}}
            >
             Store location <RoomOutlinedIcon/>
            </TextOne>


              <TextOne
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex', }}
              >
               India/English₹
              </TextOne>

          </BoxTop>


<BoxBottom>

  
          <BoxOne>
         
       <TextBox sx={{display:'flex',gap:"20px",cursor:"pointer"}}>
          <Text
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
             Men
            </Text>


              <Text
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Women
              </Text>

              <Text
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Ceramic watches
            </Text>


            <Text
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
               Feel rado
            </Text>


            <Text
              
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
             Services 
            </Text>

            </TextBox>



            <ImageBox onClick={handleRado} sx={{width:"15%",height:"70%",cursor:"pointer"}} as={"img"} src="https://www.rado.com/static/version1702032715/frontend/Rado/default/en_GB/images/logo.svg" />




            <BoxThree >
    <SearchOutlinedIcon sx={{cursor:"pointer"}} onClick={handleSearch}/>
    <PersonOutlineOutlinedIcon sx={{cursor:"pointer"}} onClick={handleAccount}/>

  </BoxThree>
              
          </BoxOne>

          </BoxBottom>


          </Box>



        </Toolbar>
      </Container>



    </Outer>

    <PublicRoutes/>
    </>
  );
}
export default Navbar2;