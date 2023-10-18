import React, {useState} from 'react'
import '../css/admindashboard.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function AdminDashboard() {
  
  // check user session from server using axios

  return (
    <>
      <main>
        <div className='admin-grid mt-5'>
          <Link to="/Categories" className='admin-grid-section'>
            <button className='btn-admin-section'>
              Categories
            </button>
          </Link>
          <Link to="/SubCategories" className='admin-grid-section'>
            <button className='btn-admin-section'>
              Sub-Categories
            </button>
          </Link>
          <Link to="/Brands" className='admin-grid-section'>
            <button className='btn-admin-section'>
              Brands
            </button>
          </Link>
          <Link to="/Products" className='admin-grid-section'>
            <button className='btn-admin-section'>
              Products
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}

export default AdminDashboard