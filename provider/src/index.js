import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home.jsx';
import ProviderInterFace from './components/ProviderInterFace.jsx';
// import ConsumerInterFace from './components/ConsumerInterFace.jsx';
// import DistributerInterFace from './components/DistributerInterFace.jsx';
// import FarmerInterFace from './components/FarmerInterFace.jsx';
// import ProcessorInterFace from './components/ProcessorInterFace.jsx';
// import RetailerInterFace from './components/RetailerInterFace.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProviderInterFace />}/>
          {/* <Route path="/Distributer" element={<DistributerInterFace />}/>        
          <Route path="/Farmer" element={<FarmerInterFace />}/>
          <Route path="/Processor" element={<ProcessorInterFace />}/>     
          <Route path="/Retailer"element ={<RetailerInterFace />}/>  */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();