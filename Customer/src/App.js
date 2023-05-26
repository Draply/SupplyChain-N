import './App.css';
import Navbar from './components/Navbar.jsx';
import Customer from './components/ConsumerInterFace';
// import ConsumerInterFace from './components/ConsumerInterFace.jsx';
// import DistributerInterFace from './components/DistributerInterFace.jsx';
// import FarmerInterFace from './components/FarmerInterFace.jsx';
// import ProcessorInterFace from './components/ProcessorInterFace.jsx';
// import RetailerInterFace from './components/RetailerInterFace.jsx';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Customer />}/>
          
        </Routes>
    </div>
  );
}

export default App;