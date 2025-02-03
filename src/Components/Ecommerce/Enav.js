import React, { useState } from 'react'
import logo from '../logo/Logo 804444 192.png'
import '../CSS/MainTheme.css'
import {IoMdLogOut} from 'react-icons/io'
import {PiShoppingCartBold} from 'react-icons/pi'
import { LiaSearchSolid } from "react-icons/lia"
import {CgMenuRound} from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'

const Enav = ({ showSearchBar = true }) => {

 
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the authentication token from localStorage
    localStorage.removeItem('authToken');
    // Optionally clear any other user-related data
    // localStorage.removeItem('userInfo');

    // Redirect the user to the SignIn page
    navigate('/signin');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);  

  const toggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };


  return (
    <>

      <nav className="bg-gray-300 p-4 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
         
          {/* Logo / Brand */}
          <div className="text-2xl font-bold">
            <Link to="/store">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Search Bar - Centered */}
          {showSearchBar && (
          <div className="hidden flex-grow md:flex justify-center">
            <div className="flex items-center space-x-3">
              <label htmlFor="search" className="sr-only">Search</label>
              <input
                id="search"
                type="text"
                placeholder="Search..."
                className="p-2 w-96 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-700"
              />
              <button className="p-2 rounded-xl font-semibold text-white mainbutton transition duration-200">
                Search
              </button>
            </div>
          </div>
          )}

          {/* Desktop Navigation Links */}
                 
          <div className="hidden md:flex ml-auto space-x-6 items-center absolute right-4">
            <Link className="text-teal-700 hover:text-teal-500">
              <PiShoppingCartBold className="iconmenu w-auto h-12" />
            </Link>
            <button onClick={handleLogout}><IoMdLogOut className="iconmenu w-auto h-12" /></button>            
          </div>
          

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center space-x-4">
          {showSearchBar && (
            <button onClick={toggleSearchBar}><LiaSearchSolid className='iconmenu w-auto h-12'/></button>
          )}  
            <button onClick={toggleMobileMenu}><CgMenuRound className='iconmenu w-auto h-12'/></button>      
          </div>

        </div>

        {/* Mobile Navigation Links */}        
        {isSearchBarOpen && (
                <div className="md:hidden mt-4 bg-gray-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <label htmlFor="mobile-search" className="sr-only">
                      Mobile Search
                    </label>
                    <input
                      id="mobile-search"
                      type="text"
                      placeholder="Search..."
                      className="p-2 w-full rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-700"
                    />
                    <button className="p-2 rounded-xl font-semibold text-white mainbutton transition duration-200">
                      Search
                    </button>
                  </div>
                </div>
              )}
           

        {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 bg-gray-200 text-white rounded-lg p-4 space-y-4">
                      <Link className="block maintext">Cart</Link>
                      <button onClick={handleLogout} className="block maintext">Log Out</button>
                    </div>
                  )}
      </nav>     
      
    </>
  )
}

export default Enav
