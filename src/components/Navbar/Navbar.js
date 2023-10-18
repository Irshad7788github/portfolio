import React from 'react';
import './Navbar.css';
import logo from '../../Assest/logo.jpg.jpeg';
import contact from '../../Assest/contact.jpg.jpeg';
import { Link } from 'react-scroll';
 


const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='nav-logo' />
        <div className="desktopMenu">
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItemList'>Home </Link>
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItemList'>About</Link>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItemList'>Portfolio</Link>
           <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuItemList'>Clients</Link>

        </div>
        <button className="desktopMenubtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
            <img src={contact} alt="" className="desktopMenuImg" />Contact Me </button>
      
    </nav>
  )
}

export default Navbar
