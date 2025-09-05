import React from 'react'
import {Link} from 'react-router-dom'
// import '../../Style/Admin.css';

const Sidebar = () => {

  return (
    <div className='side'>
    <div  className="sidebar">
      <h2>Admin Pannel</h2>
        <li type='none'>
      <Link to='/Addproduct' className='ad-btn'>Add Product</Link><br></br>
      <Link to='/viewProduct' className='add-btn'>View Product</Link>
      </li>
    </div>
    </div>
  )
}

export default Sidebar
