import './App.css';
import Navbar from './components/Navbar.jsx';
import Manufac from './components/Manufac';
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
          <Route path="/" element={<Manufac  />}/>
          {/* <Route path="/Distributer" element={<DistributerInterFace />}/>        
          <Route path="/Farmer" element={<FarmerInterFace />}/>
          <Route path="/Processor" element={<ProcessorInterFace />}/>     
          <Route path="/Retailer"element ={<RetailerInterFace />}/>         */}
        </Routes>
    </div>
  );
}

export default App;