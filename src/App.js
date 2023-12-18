import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import Info from './pages/Info';
import Welcome from './pages/Welcome';
import { Box } from '@mui/material';

function App() {
  const path=useLocation()
  return (
    <Box >
      
      {path.pathname!=="/info"&&<Navbar/>}
      {path.pathname==='/info'&&<Info/>}
      {/* <Welcome/> */}
     
    
     
    </Box>
  );
}

export default App;
