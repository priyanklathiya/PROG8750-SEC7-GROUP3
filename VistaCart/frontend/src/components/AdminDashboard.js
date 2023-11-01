import React, {useState} from 'react'
import '../css/admindashboard.css';
import { Link, Outlet } from 'react-router-dom';
import axios from "axios";

function AdminDashboard() {
  
  // check user session from server using axios

  return (
    <>
      <>
        <div className='vertical-nav'>
          <ul>
            <li>
              <Link to="/Categories">
                  Categories
              </Link>
            </li>
            <li>
              <Link to="/SubCategories">
                  Sub-Categories
              </Link>
            </li>
            <li>
              <Link to="/Brands">
                  Brands
              </Link>
            </li>
            <li>
              <Link to="/Products">
                  Products
              </Link>
            </li>
          </ul>
        </div>
        <div className='main-area'>
          <Outlet />
        </div>
      </>
    </>
  )
}

export default AdminDashboard