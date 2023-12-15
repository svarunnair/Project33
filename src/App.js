import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import Info from './pages/Info';

function App() {
  const path=useLocation()
  return (
    <div className="App">
      
      {path.pathname!=="/info"&&<Navbar/>}
      {path.pathname==='/info'&&<Info/>}
     
    
     
    </div>
  );
}

export default App;
