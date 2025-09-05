import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ size }) => {
  return (
    <div className='navbar'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">My E-commerce</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className='nav-link' href='#1'>Home</a></li>
              <li className="nav-item">
                <div className='dd'>
                <Link to="/cart" className="nav-liink"  >
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span className='zero'>{size}</span>
                </Link></div>
              </li>




            </ul>

          </div>
        </div>
      </nav>
    </div>
  )

  // return (
  //   <div className='navbar'>
  //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  //       <div className="action">
  //         <h3>My E-commerce</h3>
  //          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
  //           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //           <span className="navbar-toggler-icon"></span>
  //         </button>
  //         <Link to='/home' className="nav-link"  >Home</Link>
  //         <Link to="/cart" className="nav-link"  >
  //       <i className="fa fa-shopping-cart" aria-hidden="true"></i>
  //       <span className=''>{size}</span>
  //       </Link>
  //       </div>

  //     </nav>
  //   </div>
  // )
}

export default Navbar
