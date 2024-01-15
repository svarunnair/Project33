import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';

import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import Info from './pages/Info';
import Welcome from './pages/Welcome';
import { Box, Input } from '@mui/material';
import DatePicker from "react-datepicker"
import Cookies from './components/Cookies';
import Permision from './components/Permision';
import Navbar2 from './components/Navbar2';
import Signin from './auth/Signin';

function App() {
  const path=useLocation()
  
  return (
    <div className='App'>
      
      {/* {path.pathname!=="/info"&&<Navbar/>}
      {path.pathname==='/info'&&<Info/>} */}
      
      {/* <PublicRoutes/>  */}
      {/* <Footer/> */}
  {/* <DatePicker placeholder='select a date' type='date'/> */}
     <Navbar2/>
     <Footer/>
     
     {/* <Navbar/> */}
{/*     
     <Signin/> */}
  
    </div>
  );
}

export default App;
