import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo/Logo.svg'
import {CgMenuRound} from 'react-icons/cg'
import './CSS/MainTheme.css'

const NavBar = () => { 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <> 

      <nav className="bg-gray-300 p-4 shadow-md fixed top-0 left-0 w-full z-50">

          {/* Navbar Container */}
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">

            {/* Logo / Brand */}
            <div className="text-2xl font-bold">
              <Link to="/"><img src={logo} alt="" className="h-16 w-auto"/></Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex ml-auto space-x-6">
              <Link to="/" className="maintext">Home</Link>
              <Link to="/signin" className="maintext">Project Lookup</Link>
              <Link className="maintext">Contact</Link>
            </div>

               

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMobileMenu}><CgMenuRound className='iconmenu w-auto h-12'/></button>
            </div>

          </div>

            {/* Mobile Navigation Links */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 bg-gray-200 text-white rounded-lg p-4 space-y-4">
                <Link to="/" className="block maintext">Home</Link>
                <Link to="/signin" className="block maintext">Project Lookup</Link>
                <Link to="/" className="block maintext">Contact</Link>
              </div>
            )}

      </nav>



    </>
  )
}

export default NavBar
