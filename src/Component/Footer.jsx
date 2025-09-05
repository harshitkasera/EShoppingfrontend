import React from 'react'
import { CiLinkedin } from "react-icons/ci";
const Footer = () => {
  return (
    <div>
         <footer className='foot'>
        <h2 id='5'>Contact</h2>
        <p>+91-9302252353</p>
        <div className='full-fot'>
          <div className='icon-fot'> <CiLinkedin />
            <a className='fot' href='https://www.linkedin.com/in/harshit-kasera-75b220263/'>Harshit Kasera</a></div>
          <div className='icon-fot'>  <i class="fa fa-instagram" aria-hidden="true"></i>
            <a className='fot' href='https://www.instagram.com/_kasera_h353/'>kasera_353_</a>
            <div className='icon-fot'>
              <i className="fa-solid fa-envelope"></i>
              <a className='fot' href='https://mail.google.com/mail/u/0/#inbox'>harshitkasera01@gmail.com</a></div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer
