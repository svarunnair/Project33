import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import Info from './pages/Info';
import Welcome from './pages/Welcome';
import { Box } from '@mui/material';

import Cookies from './components/Cookies';
import Permision from './components/Permision';

function App() {
  const path=useLocation()
  return (
    <div className='App'>
{/*       
      {path.pathname!=="/info"&&<Navbar/>}
      {path.pathname==='/info'&&<Info/>} */}
      
      <PublicRoutes/> 
      {/* <Footer/> */}
  
     
    
     
    </div>
  );
}

export default App;
