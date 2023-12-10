import logo from './logo.svg';
import './App.css';
import PublicRoutes from './Routes/PublicRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <PublicRoutes/>
    </div>
  );
}

export default App;
