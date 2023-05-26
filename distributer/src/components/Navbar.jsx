
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

function Navbar() {


const location = useLocation();


useEffect(() => {});

    return (
      <div className="">
        <nav className="w-screen">
          <ul className='flex items-end justify-between py-3 bg-transparent text-white pr-5'>
          <li className='flex items-end ml-5 pb-2'>
            <Link to="/">
            
            <div className='inline-block font-bold text-xl ml-2'>
              Home
            </div>
            </Link>
          </li>
          <li className='w-2/6'>
            <ul className='lg:flex justify-between font-bold mr-10 text-lg'>
              {location.pathname === "/" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/">Marketplace</Link>
              </li>              
              }
              {location.pathname === "/sellNFT" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/sellNFT">List My NFT</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/sellNFT">List My NFT</Link>
              </li>              
              }              
              {location.pathname === "/profile" ? 
              <li className='border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>
              :
              <li className='hover:border-b-2 hover:pb-0 p-2'>
                <Link to="/profile">Profile</Link>
              </li>              
              }  
              <li>
                
              </li>
            </ul>
          </li>
          </ul>
        </nav>
        <div className='text-white text-bold text-right mr-10 text-sm'>
          =
        </div>
      </div>
    );
  }

  export default Navbar;